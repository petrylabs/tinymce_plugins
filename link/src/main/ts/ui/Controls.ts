/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import Actions from '../core/Actions';
import Utils from '../util/Utils';

const setupButtons = function (editor) {
  /**
   * Add SntLink button to toolbar
   */
  editor.addButton('snt-link', {
    active: false,
    icon: 'link',
    text: 'SntLink',
    tooltip: 'Insert / Edit SntLink',
    onclick: Actions.openDialog(editor),
    onpostrender: Actions.toggleActiveState(editor)
  });

  /**
   * Add Unlink button to toolbar
   */
  editor.addButton('snt-unlink', {
    active: false,
    icon: 'unlink',
    text: 'Remove SntLink',
    tooltip: 'Remove SntLink',
    onclick: Utils.sntUnlink(editor),
    //onpostrender: Actions.toggleActiveState(editor)
  });

  // if (editor.addContextToolbar) {
  //   editor.addButton('openlink', {
  //     text: 'Open SntLink (10)',
  //     icon: 'newtab',
  //     tooltip: '',
  //     onclick: Actions.gotoSelectedLink(editor)
  //   });
  // }
};

const setupMenuItems = function (editor) {

  /**
   * Context Menu (Right-click) Open Link Option
   */
  editor.addMenuItem('openlink', {
    text: 'Open SntLink',
    icon: 'newtab',
    onclick: Actions.gotoSelectedLink(editor),
    // onPostRender: Actions.toggleViewLinkState(editor),
    prependToContext: true
  });  

  /**
   * Menu Insert -> Link
   */
  editor.addMenuItem('SntLink', {
    icon: 'link',
    text: 'SntLink',
    shortcut: 'Meta+K',
    onclick: Actions.openDialog(editor),
    stateSelector: 'a[href]',
    context: 'insert',
    prependToContext: true
  });

  // editor.addMenuItem('unlink', {
  //   icon: 'unlink',
  //   text: 'Remove link',
  //   onclick: Utils.unlink(editor),
  //   stateSelector: 'a[href]'
  // });
};

// const setupContextToolbars = function (editor) {
//   if (editor.addContextToolbar) {
//     editor.addContextToolbar(
//       Actions.leftClickedOnAHref(editor),
//       'openlink | link unlink'
//     );
//   }
// };

export default {
  setupButtons,
  setupMenuItems,
  //setupContextToolbars
};