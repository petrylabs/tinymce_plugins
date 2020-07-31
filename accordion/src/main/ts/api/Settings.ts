/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

declare const tinymce: any;

const getMinWidth = function (editor) {
  return editor.getParam('code_dialog_width', 600);
};

const getMinHeight = function (editor) {
  return editor.getParam('code_dialog_height', 
  Math.min(tinymce.dom.DOMUtils.DOM.getViewPort().h - 1, 200));
};

export default {
  getMinWidth,
  getMinHeight
};