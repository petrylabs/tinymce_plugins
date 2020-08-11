/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import Actions from '../core/Actions';

const register = function (editor) {

  editor.addCommand('mceLink', Actions.openDialog(editor));

  editor.addCommand('mceInsertSntLink', (ui, value) => {
    
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
      editor.formatter.remove('link');
      // editor.formatter.remove('sntlink');
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
  },)
};

export default {
  register
};