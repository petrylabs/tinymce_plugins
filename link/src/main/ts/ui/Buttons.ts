/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import Dialog from './Dialog';

const getAccordionHtmlTemplate = () => (`<snt-accordion class="faq-accordion">
<div slot="summary">Heading</div>
<div slot="details"> Lorem ipsum dolor samet.</div>
</snt-accordion>`);

const getCustomHtmlTemplate = () => (`
<snt-link target="_blank" href="https://economical.com">Economical</snt-link>
`)

const register = function (editor) {
  editor.addButton('snt-link', {
    text: 'SntLink', // icon: 'code', tooltip: 'Source code',
    onclick () {
      //Dialog.open(editor);
      console.log(getAccordionHtmlTemplate());
      editor.setContent(getCustomHtmlTemplate());
    }
  });

  editor.addMenuItem('snt-link', {
    text: 'SntLink',
    onclick () {
      //Dialog.open(editor);
      console.log(getAccordionHtmlTemplate());
      editor.setContent(getCustomHtmlTemplate());
    }
  });
};

export default {
  register
};