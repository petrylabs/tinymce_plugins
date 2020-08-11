/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

declare const tinymce: any;

const setup = function (editor) {    

  editor.formatter.register('sntlink', {
    inline: 'snt-link', 
    selector: 'snt-link', 
    remove: 'all',
    split: true, 
    deep: true,
    styles: {
      // key: 'value'
    },
    onmatch () {
      return true;
    },
    onformat (elm, fmt, vars) {
      tinymce.util.Tools.each(vars, function (value, key) {
        editor.dom.setAttrib(elm, key, value);
      });
    }
  });
}

export default {
  setup
};
