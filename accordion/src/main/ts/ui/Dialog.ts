/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import Settings from '../api/Settings';
import Content from '../core/Content';

const open = function (editor) {
  const minWidth = Settings.getMinWidth(editor);
  const minHeight = Settings.getMinHeight(editor);

  const win = editor.windowManager.open({
    title: 'SntAccordion',
    body:
    {
      title: 'General',
      type: 'form',
      items: [
        {
          type: 'textbox',
          label: 'Summary',
          name: 'summary',
          multiline: false,
          size: 40,
          spellcheck: false,
          style: 'direction: ltr; text-align: left'
        },
        {
          type: 'textbox',
          label: 'Details',
          name: 'details',
          multiline: true,
          minWidth,
          minHeight,
          spellcheck: false,
          style: 'direction: ltr; text-align: left'
        }
      ]
    },
    onSubmit (e) {
      Content.insertContent(editor, e.data);
    }
  });

  // Gecko has a major performance issue with textarea
  // contents so we need to set it when all reflows are done
  const content = Content.getContent(editor);
  win.find('#summary').value(content.summary);
  win.find('#details').value(content.details);
};

export default {
  open
};