"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rTrim = void 0;
var regExp = / +$/g;
/**
 * Trim trailing spaces only
 * @param {string} value
 * @return string
 */
exports.rTrim = function(s) {
  return s.replace(regExp, "");
};
//# sourceMappingURL=rTrim.js.map
