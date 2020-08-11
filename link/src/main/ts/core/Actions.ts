/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Settings from '../api/Settings';
import OpenUrl from './OpenUrl';
import Utils from '../util/Utils';
import Dialog from '../ui/Dialog';

declare const tinymce: any;

/**
 * Get snt-link Element
 * @param editor 
 * @param elm 
 * @returns {HTMLElement}
 */
const getSntLink = function (editor, elm) {
  const link = editor.dom.getParent(elm, 'snt-link[href]');
  console.log('snt-link', link);
  return link;
};

const getSelectedSntLink = function (editor) {
  const selection = editor.selection.getStart();
  console.log('selection', selection);
  const selectedLink = getSntLink(editor, selection);
  console.log('selectedLink', selectedLink);
  return selectedLink;
};

const getHref = function (elm) {
  // Returns the real href value not the resolved a.href value
  const href = elm.getAttribute('data-mce-href');
  return href ? href : elm.getAttribute('href');
};

const isContextMenuVisible = function (editor) {
  const contextmenu = editor.plugins.contextmenu;
  return contextmenu ? contextmenu.isContextMenuVisible() : false;
};

const hasOnlyAltModifier = function (e) {
  return e.altKey === true && e.shiftKey === false && e.ctrlKey === false && e.metaKey === false;
};

/**
 * Check if hyperlink or anchor and take appropriate action 
 * @param {Object} editor 
 * @param {HTMLElement} sntLink
 * @returns {Void} 
 */
const gotoLink = function (editor, sntLink) {
  if (sntLink) {
    const href = getHref(sntLink);
    if (/^#/.test(href)) {
      const targetEl = editor.$(href);
      if (targetEl.length) {
        editor.selection.scrollIntoView(targetEl[0], true);
      }
    } else {
      OpenUrl.open(sntLink.getAttribute('href'));
    }
  }
};

const openDialog = function (editor) {
  return function () {
    Dialog.open(editor);
  };
};

/**
 * Return gotoLink function callback
 * @param {Object} editor
 * @returns {Function}
 */
const gotoSelectedLink = function (editor) {
  return function () {
    gotoLink(editor, getSelectedSntLink(editor));
  };
};

const leftClickedOnAHref = function (editor) {
  return function (elm) {
    let sel;
    let rng;
    let node;
    console.log('Settings.hasContextToolbar(editor.settings)', Settings.hasContextToolbar(editor.settings));
    console.log('!isContextMenuVisible(editor)',!isContextMenuVisible(editor));
    console.log('Utils.isSntLink(elm)', Utils.isSntLink(elm));
    if (Settings.hasContextToolbar(editor.settings) && 
    !isContextMenuVisible(editor) && 
    Utils.isSntLink(elm)) {
      sel = editor.selection;
      rng = sel.getRng();
      node = rng.startContainer;
      // ignore cursor positions at the beginning/end (to make context toolbar less noisy)
      if (node.nodeType === 3 && sel.isCollapsed() && rng.startOffset > 0 && rng.startOffset < node.data.length) {
        return true;
      }
    }
    return false;
  };
};

/**
 * Open link in a new tab on CTRL + CLICK
 * @param {Object} editor - TinyMCE editor object 
 */
const setupGotoLinks = function (editor) {
  editor.on('click', function (e) {
    if (tinymce.util.VK.metaKeyPressed(e)) {
      const link = getSntLink(editor, e.target);
      if(link) {
        e.preventDefault();
        gotoLink(editor, link);
      }
    }
  });

  /**
   * Open link in a new tab on ALT + ENTER
   */
  editor.on('keydown', function (e) {
    if (e.keyCode === 13 && hasOnlyAltModifier(e)) {
      const link = getSelectedSntLink(editor);
      if(link) {
        e.preventDefault();
        gotoLink(editor, link);
      }
    }
  });
};

/**
 * Toggle toolbar StnLink button active (dark gray)
 * {@link https://www.tiny.cloud/docs-4x/api/tinymce.ui/tinymce.ui.control/#active Docs}
 */
const toggleActiveState = function (editor) {
  return function () {
    const self = this;
    editor.on('nodechange', function (e) {
      const condition = (!editor.readonly && !!Utils.getSntLinkElement(editor, e.element));
      self.active(condition);
    });
  };
};


const toggleViewLinkState = function (editor) {
  return function () {
    const self = this;

    const toggleVisibility = function (e) {
      if (Utils.hasSntLinks(e.parents)) {
        self.show();
      } else {
        self.hide();
      }
    };

    if (!Utils.hasSntLinks(editor.dom.getParents(editor.selection.getStart()))) {
      self.hide();
    }

    editor.on('nodechange', toggleVisibility);

    self.on('remove', function () {
      editor.off('nodechange', toggleVisibility);
    });
  };
};

const removeSntLink = function(editor) {
  return function() {
    if (editor.selection.isCollapsed()) {
      const elm = editor.dom.getParent(editor.selection.getStart(), 'a');
      if (elm) {
        editor.dom.remove(elm, true);
      }
      return;
    }
    editor.formatter.remove('sntlink');
  }
};

const insertSntLink = function(editor) {
  return function(ui, value) {    
    // let anchor;
    let sntLink;

    if (typeof value === 'string') {
      value = { href: value };
    }

    // anchor = editor.dom.getParent(editor.selection.getNode(), 'a');
    sntLink = editor.dom.getParent(editor.selection.getNode(), 'snt-link');

    // Spaces are never valid in URLs and it's a very common mistake for people to make so we fix it here.
    value.href = value.href.replace(' ', '%20');

    console.log('Commands.ts:29 value', value, 'mycustomformat', sntLink);

    // Remove existing links if there could be child links or that the href isn't specified
    // if (!anchor || !value.href) {
    if (!sntLink || !value.href) {
      console.log('>>> Remove format');
      // editor.formatter.remove('link');
      editor.formatter.remove('sntlink');
    }

    // Apply new link to selection
    if (value.href) {
      console.log('>>> Apply new link to selection ');
      if(editor.formatter.get('sntlink')) {
        // editor.formatter.apply('link', value, sntLink);
        editor.formatter.apply('sntlink', value);
      } else {
        throw new Error('Specified formatter has not been registered!');
      }
    }
  }
};

export default {
  openDialog,
  gotoSelectedLink,
  leftClickedOnAHref,
  setupGotoLinks,
  toggleActiveState,
  toggleViewLinkState,
  removeSntLink,
  insertSntLink
};