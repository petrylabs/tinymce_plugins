/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import Actions from '../core/Actions';

const register = function (editor) {

  editor.addCommand('mceSntLink', Actions.openDialog(editor));

  editor.addCommand('mceRemoveSntLink', Actions.removeSntLink(editor));

  editor.addCommand('mceInsertSntLink', Actions.insertSntLink(editor));
};

export default {
  register
};