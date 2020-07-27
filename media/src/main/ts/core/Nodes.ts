/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import Settings from '../api/Settings';
import Sanitize from './Sanitize';
import VideoScript from './VideoScript';

declare const tinymce: any;

declare let escape: any;

const createPlaceholderNode = function (editor: any, node: any) {
  let placeHolder;
  const name = node.name;

  placeHolder = new tinymce.html.Node('img', 1);
  placeHolder.shortEnded = true;

  retainAttributesAndInnerHtml(editor, node, placeHolder);

  placeHolder.attr({
    'width': node.attr('width') || '300',
    'height': node.attr('height') || (name === 'audio' ? '30' : '150'),
    'style': node.attr('style'),
    'src': tinymce.Env.transparentSrc,
    'data-mce-object': name,
    'class': 'mce-object mce-object-' + name
  });

  return placeHolder;
};

const createPreviewIframeNode = function (editor: any, node: any) {
  let previewWrapper;
  let previewNode;
  let shimNode;
  const name = node.name;

  previewWrapper = new tinymce.html.Node('span', 1);
  previewWrapper.attr({
    'contentEditable': 'false',
    'style': node.attr('style'),
    'data-mce-object': name,
    'class': 'mce-preview-object mce-object-' + name
  });

  retainAttributesAndInnerHtml(editor, node, previewWrapper);

  previewNode = new tinymce.html.Node(name, 1);
  previewNode.attr({
    src: node.attr('src'),
    allowfullscreen: node.attr('allowfullscreen'),
    style: node.attr('style'),
    class: node.attr('class'),
    width: node.attr('width'),
    height: node.attr('height'),
    frameborder: '0'
  });

  shimNode = new tinymce.html.Node('span', 1);
  shimNode.attr('class', 'mce-shim');

  previewWrapper.append(previewNode);
  previewWrapper.append(shimNode);

  return previewWrapper;
};

const retainAttributesAndInnerHtml = function (editor: any, sourceNode: any, targetNode: any) {
  let attrName;
  let attrValue;
  let attribs;
  let ai;
  let innerHtml;

  // Prefix all attributes except width, height and style since we
  // will add these to the placeholder
  attribs = sourceNode.attributes;
  ai = attribs.length;
  while (ai--) {
    attrName = attribs[ai].name;
    attrValue = attribs[ai].value;

    if (attrName !== 'width' && attrName !== 'height' && attrName !== 'style') {
      if (attrName === 'data' || attrName === 'src') {
        attrValue = editor.convertURL(attrValue, attrName);
      }

      targetNode.attr('data-mce-p-' + attrName, attrValue);
    }
  }

  // Place the inner HTML contents inside an escaped attribute
  // This enables us to copy/paste the fake object
  innerHtml = sourceNode.firstChild && sourceNode.firstChild.value;
  if (innerHtml) {
    targetNode.attr('data-mce-html', escape(Sanitize.sanitize(editor, innerHtml)));
    targetNode.firstChild = null;
  }
};

const isWithinEphoxEmbed = function (node: any) {
  node = node.parent;
  while (node) {
    if (node.attr('data-ephox-embed-iri')) {
      return true;
    }
    node = node.parent;
  }

  return false;
};

const placeHolderConverter = function (editor: any) {
  return function (nodes) {
    let i = nodes.length;
    let node;
    let videoScript;

    while (i--) {
      node = nodes[i];
      if (!node.parent) {
        continue;
      }

      if (node.parent.attr('data-mce-object')) {
        continue;
      }

      if (node.name === 'script') {
        videoScript = VideoScript.getVideoScriptMatch(Settings.getScripts(editor), node.attr('src'));
        if (!videoScript) {
          continue;
        }
      }

      if (videoScript) {
        if (videoScript.width) {
          node.attr('width', videoScript.width.toString());
        }

        if (videoScript.height) {
          node.attr('height', videoScript.height.toString());
        }
      }

      if (node.name === 'iframe' && Settings.hasLiveEmbeds(editor) && tinymce.Env.ceFalse) {
        if (!isWithinEphoxEmbed(node)) {
          node.replace(createPreviewIframeNode(editor, node));
        }
      } else {
        if (!isWithinEphoxEmbed(node)) {
          node.replace(createPlaceholderNode(editor, node));
        }
      }
    }
  };
};

export default {
  createPreviewIframeNode,
  createPlaceholderNode,
  placeHolderConverter
};