/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

const getVideoScriptMatch = function (prefixes, src) {
  // var prefixes = Settings.getScripts(editor);
  if (prefixes) {
    for (const prefix of prefixes) {
      if (src.indexOf(prefix.filter) !== -1) {
        return prefix;
      }
    }
  }
};

export default {
  getVideoScriptMatch
};