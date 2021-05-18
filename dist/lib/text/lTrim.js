"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ltrim = void 0;
var regExp = /^ +/g;
/**
 * Trim leading spaces only
 * @param {string} value
 * @return string
 */
exports.ltrim = function(s) {
  return s.replace(regExp, "");
};
//# sourceMappingURL=lTrim.js.map
