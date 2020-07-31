/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import Dialog from './Dialog';

const register = function (editor) {
  editor.addButton('accordion', {
    text: 'Snt-Accordion', //icon: 'code', tooltip: 'Source code',
    onclick () {
      Dialog.open(editor);
    }
  });

  editor.addMenuItem('accordion', {
    text: 'Snt-Accordion', 
    onclick () {
      Dialog.open(editor);
    }
  });
};

export default {
  register
};