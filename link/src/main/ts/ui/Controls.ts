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
    text: '',
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
    text: '',
    tooltip: 'Remove SntLink',
    onclick: Utils.sntUnlink(editor),
    onpostrender: Actions.toggleActiveState(editor)
  });
  /**
   * DESCRIPTION
   */
  if (editor.addContextToolbar) {
    editor.addButton('snt-openlink', {
      icon: 'newtab',
      tooltip: 'Open SntLink',
      onclick: Actions.gotoSelectedLink(editor)
    });
  }
};

const setupMenuItems = function (editor) {
  /**
   * DESCRIPTION
   */
  editor.addMenuItem('snt-openlink', {
    text: 'Open SntLink',
    icon: 'newtab',
    onclick: Actions.gotoSelectedLink(editor),
    onPostRender: Actions.toggleViewLinkState(editor),
    prependToContext: true
  });
  /**
   * DESCRIPTION
   */
  editor.addMenuItem('snt-link', {
    icon: 'link',
    text: 'SntLink',
    shortcut: 'Meta+K',
    onclick: Actions.openDialog(editor),
    stateSelector: 'snt-link[href]',
    context: 'insert',
    prependToContext: true
  });
  /**
   * DESCRIPTION
   */
  editor.addMenuItem('unlink', {
    icon: 'unlink',
    text: 'Remove SntLink',
    onclick: Utils.sntUnlink(editor),
    stateSelector: 'snt[href]'
  });
};

const setupContextToolbars = function (editor) {
  if (editor.addContextToolbar) {
    editor.addContextToolbar(
      Actions.leftClickedOnAHref(editor),
      'snt-openlink | snt-link snt-unlink'
    );
  }
};

export default {
  setupButtons,
  setupMenuItems,
  setupContextToolbars
};