"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asc = void 0;
/**
 * Returns the ASCII value of the first character in the string
 * @param {string} str The string to convert to ASCII
 * @returns The ASCII value of the first character in the string
 */
exports.asc = function(str) {
  if (Array.from(str).length === 0) {
    return 0;
  }
  return str.charCodeAt(0);
};
//# sourceMappingURL=asc.js.map
