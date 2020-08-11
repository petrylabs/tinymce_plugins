/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import Settings from '../api/Settings';

declare const tinymce: any;

/**
 * Toggle [rel=noopener] 
 * @param rel 
 * @param {boolean} isUnsafe 
 */
const toggleTargetRules = function (rel, isUnsafe) {
  const rules = ['noopener'];
  let newRel = rel ? rel.split(/\s+/) : [];

  const toString = function (relStr) {
    return tinymce.util.Tools.trim(relStr.sort().join(' '));
  };

  const addTargetRules = function (relStr) {
    relStr = removeTargetRules(relStr);
    return relStr.length ? relStr.concat(rules) : rules;
  };

  const removeTargetRules = function (relStr) {
    return relStr.filter(function (val) {
      return tinymce.util.Tools.inArray(rules, val) === -1;
    });
  };

  newRel = isUnsafe ? addTargetRules(newRel) : removeTargetRules(newRel);
  return newRel.length ? toString(newRel) : null;
};

/**
 * Remove byte order mark
 * @param {Object} text
 * @returns {String} 
 */
const trimCaretContainers = function (text) {
  return text.replace(/\uFEFF/g, '');
};

/**
 * Get selected snt-link HTML element
 * @param {Onbject} editor
 * @param {HTMLElement} selectedElm
 * @returns {HTMLElement}
 */
const getSntLinkElement = function (editor, selectedElm?) {
  selectedElm = selectedElm || editor.selection.getNode();
  if (isImageFigure(selectedElm)) {
    // for an image conained in a figure we look for a link inside the selected element
    return editor.dom.select('snt-link[href]', selectedElm)[0];
  } else {
    return editor.dom.getParent(selectedElm, 'snt-link[href]');
  }
};

/**
 * Get text from selected sng-link HTML element
 * @param {Object} selection 
 * @param {HTMLElement} sntLinkElm 
 * @returns {string}
 */
const getSntLinkText = function (selection, sntLinkElm) {
  const text = sntLinkElm ? (sntLinkElm.innerText || sntLinkElm.textContent) : selection.getContent({ format: 'text' });
  return trimCaretContainers(text);
};

/**
 * Check if selected element is an snt-link
 * @param {HTMLElement} elm
 * @returns {boolean}
 */
const isSntLink = function (elm) {
  console.log('elm', elm);
  return elm && elm.nodeName === 'SNT-LINK' && elm.getAttribute('href');
};

/**
 * Check if selected elements contain snt-links
 * @param {Array<HTMLElement>} elements 
 * @returns {boolean}
 */
const hasSntLinks = function (elements) {
  return tinymce.util.Tools.grep(elements, isSntLink).length > 0;
};

/**
 * Check if partial html and not a fully selected anchor element
 * @param {string} html
 * @returns {boolean} 
 */
const isOnlyTextSelected = function (html) {
  if (/</.test(html) && (!/^<snt-link [^>]+>[^<]+<\/snt-link>$/.test(html) || html.indexOf('href=') === -1)) {
    return false;
  }
  return true;
};

/**
 * Check if selected element is an image
 * @param {HTMLElement} node 
 * @returns {boolean}
 */
const isImageFigure = function (node) {
  return node && node.nodeName === 'FIGURE' && /\bimage\b/i.test(node.className);
};

/**
 * Set up callback function for inserting snt-link
 * @param editor 
 * @param attachState
 * @returns {Function} 
 */
const sntLink = function (editor, attachState) {
  return function (data) {
    editor.undoManager.transact(function () {
      const selectedElm = editor.selection.getNode();
      const sntLinkElm = getSntLinkElement(editor, selectedElm);

      const linkAttrs = {
        href: data.href,
        target: data.target ? data.target : null,
        rel: data.rel ? data.rel : null,
        class: data.class ? data.class : null,
        title: data.title ? data.title : null
      };

      if (!Settings.hasRelList(editor.settings) && Settings.allowUnsafeLinkTarget(editor.settings) === false) {
        linkAttrs.rel = toggleTargetRules(linkAttrs.rel, linkAttrs.target === '_blank');
      }

      if (data.href === attachState.href) {
        attachState.attach();
        attachState = {};
      }

      if (sntLinkElm) {
        editor.focus();

        if (data.hasOwnProperty('text')) {
          if ('innerText' in sntLinkElm) {
            sntLinkElm.innerText = data.text;
          } else {
            sntLinkElm.textContent = data.text;
          }
        }

        editor.dom.setAttribs(sntLinkElm, linkAttrs);

        editor.selection.select(sntLinkElm);
        editor.undoManager.add();
      } else {
        // console.log('Utils.ts:119 linkAttrs', linkAttrs);
        debugger;
        if (isImageFigure(selectedElm)) {
          sntLinkImageFigure(editor, selectedElm, linkAttrs);
        } 
        else if (data.hasOwnProperty('text')) {
          const textData = editor.dom.encode(data.text);
          editor.insertContent(editor.dom.createHTML('snt-link', linkAttrs, textData));
        } 
        else {
          editor.execCommand('mceInsertSntLink', false, linkAttrs);
        }
      }
    });
  };
};

/**
 * Set up callback function for removing snt-link
 * @param editor 
 * @returns {Void}
 */
const sntUnlink = function (editor) {
  return function () {
    editor.undoManager.transact(function () {
      const node = editor.selection.getNode();
      debugger;
      if (isImageFigure(node)) {
        sntUnlinkImageFigure(editor, node);
      } else {
        editor.execCommand('mceRemoveSntLink');
      }
    });
  };
};

/**
 * Wrap image inside figure element in snt-link tag
 * @param {Object} editor 
 * @param {HTMLElement} fig 
 * @returns {Void}
 */
const sntUnlinkImageFigure = function (editor, fig) {
  let sntLink;
  let img;
  img = editor.dom.select('img', fig)[0];
  if (img) {
    sntLink = editor.dom.getParents(img, 'snt-link[href]', fig)[0];
    if (sntLink) {
      sntLink.parentNode.insertBefore(img, sntLink);
      editor.dom.remove(sntLink);
    }
  }
};

/**
 * Rempve snt-link tag wrap around image inside figure element
 * @param {Object} editor 
 * @param {Object} fig 
 * @param {Object} attrs 
 * @returns {Void}
 */
const sntLinkImageFigure = function (editor, fig, attrs) {
  let sntLink;
  let img;
  img = editor.dom.select('img', fig)[0];
  if (img) {
    sntLink = editor.dom.create('snt-link', attrs);
    img.parentNode.insertBefore(sntLink, img);
    sntLink.appendChild(img);
  }
};

export default {
  sntLink,
  sntUnlink,
  isSntLink,
  hasSntLinks,
  isOnlyTextSelected,
  getSntLinkElement,
  getSntLinkText,
  toggleTargetRules
};