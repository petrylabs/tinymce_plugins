/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
// import Settings from '../api/Settings';
import OpenUrl from './OpenUrl';
import Utils from '../util/Utils';
import Dialog from '../ui/Dialog';

declare const tinymce: any;

const getLink = function (editor, elm) {
  const link = editor.dom.getParent(elm, 'a[href]');
  console.log('link', link);
  return link;
};

const getSelectedLink = function (editor) {
  const selection = editor.selection.getStart();
  console.log('selection', selection);
  const selectedLink = getLink(editor, selection);
  console.log('selectedLink', selectedLink);
  return selectedLink;
};

const getHref = function (elm) {
  // Returns the real href value not the resolved a.href value
  const href = elm.getAttribute('data-mce-href');
  return href ? href : elm.getAttribute('href');
};

// const isContextMenuVisible = function (editor) {
//   const contextmenu = editor.plugins.contextmenu;
//   return contextmenu ? contextmenu.isContextMenuVisible() : false;
// };

const hasOnlyAltModifier = function (e) {
  return e.altKey === true && e.shiftKey === false && e.ctrlKey === false && e.metaKey === false;
};

const gotoLink = function (editor, a) {
  if (a) {
    const href = getHref(a);
    if (/^#/.test(href)) {
      const targetEl = editor.$(href);
      if (targetEl.length) {
        editor.selection.scrollIntoView(targetEl[0], true);
      }
    } else {
      OpenUrl.open(a.href);
    }
  }
};

const openDialog = function (editor) {
  return function () {
    Dialog.open(editor);
  };
};

const gotoSelectedLink = function (editor) {
  return function () {
    gotoLink(editor, getSelectedLink(editor));
  };
};

// const leftClickedOnAHref = function (editor) {
//   return function (elm) {
//     console.log('function leftClickedOnAHref called');
//     let sel;
//     let rng;
//     let node;
//     console.log('hasContextToolbar? ', Settings.hasContextToolbar(editor.settings));
//     console.log('isContextMneuVisible', isContextMenuVisible(editor) );
//     console.log('isLink?', Utils.isLink(elm));
//     if (Settings.hasContextToolbar(editor.settings) && !isContextMenuVisible(editor) && Utils.isLink(elm)) {
//       sel = editor.selection;
//       rng = sel.getRng();
//       node = rng.startContainer;
//       // ignore cursor positions at the beginning/end (to make context toolbar less noisy)
//       if (node.nodeType === 3 && sel.isCollapsed() && rng.startOffset > 0 && rng.startOffset < node.data.length) {
//         return true;
//       }
//     }
//     return false;
//   };
// };

/**
 * Open link in a new tab on CTRL + CLICK
 * @param {Object} editor - TinyMCE editor object 
 */
const setupGotoLinks = function (editor) {
  editor.on('click', function (e) {
    if (tinymce.util.VK.metaKeyPressed(e)) {
      const link = getLink(editor, e.target);
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
      const link = getSelectedLink(editor);
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
      const condition = (!editor.readonly && !!Utils.getAnchorElement(editor, e.element));
      self.active(condition);
    });
  };
};


// const toggleViewLinkState = function (editor) {
//   return function () {
//     const self = this;

//     const toggleVisibility = function (e) {
//       if (Utils.hasLinks(e.parents)) {
//         self.show();
//       } else {
//         self.hide();
//       }
//     };

//     if (!Utils.hasLinks(editor.dom.getParents(editor.selection.getStart()))) {
//       self.hide();
//     }

//     editor.on('nodechange', toggleVisibility);

//     self.on('remove', function () {
//       editor.off('nodechange', toggleVisibility);
//     });
//   };
// };

export default {
  openDialog,
  gotoSelectedLink,
  // leftClickedOnAHref,
  setupGotoLinks,
  toggleActiveState,
  // toggleViewLinkState
};