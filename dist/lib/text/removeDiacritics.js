"use strict";
/**
 * Returns the text without diacritic characters.
 * @param {string} value
 * @return string
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDiacritics = void 0;
var jdu = require("jdu");
exports.removeDiacritics = function(s) {
  return jdu.replace(s);
};
//# sourceMappingURL=removeDiacritics.js.map
