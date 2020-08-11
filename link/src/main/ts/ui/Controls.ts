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
};

const setupMenuItems = function (editor) {
  editor.addMenuItem('sntlink', {
    icon: 'link',
    text: 'SntLink',
    shortcut: 'Meta+K',
    onclick: Actions.openDialog(editor),
    stateSelector: 'snt-link[href]',
    context: 'insert',
    prependToContext: true
  });
  // editor.addMenuItem('sntunlink', {
  //   icon: 'unlink',
  //   text: 'Remove link',
  //   onclick: Utils.sntUnlink(editor),
  //   stateSelector: 'snt-link[href]'
  // });
};

const setupContextToolbars = function (editor) {
  if (editor.addContextToolbar) {
    editor.addButton('openlink', {
      icon: 'newtab',
      text: 'Open SntLink',
      tooltip: '',
      onclick: Actions.gotoSelectedLink(editor)
    });
    editor.addButton('unlink', {
      icon: 'unlink',
      text: 'Remove SntLink',
      tooltip: '',
      onclick: Utils.sntUnlink(editor)
    });
  }
  if (editor.addContextToolbar) {
    editor.addContextToolbar(
      Actions.leftClickedOnAHref(editor),
      'openlink unlink'
    );
  }
};

export default {
  setupButtons,
  setupMenuItems,
  setupContextToolbars
};