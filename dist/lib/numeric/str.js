"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.str = void 0;
var padLeft_1 = require("../text/padLeft");
/**
 * Converts the given number to string
 * @param {number} value
 * @param {number} length
 * @param {number} decimals
 * @returns string
 */
exports.str = function(value, length, decimals) {
  if (length === void 0) {
    length = 10;
  }
  if (decimals === void 0) {
    decimals = 0;
  }
  var result = value.toFixed(decimals);
  if (result.length > length) {
    if (decimals === 0) {
      return padLeft_1.padLeft("", length, "*");
    } else {
      return exports.str(value, length, 0);
    }
  } else {
    return padLeft_1.padLeft(result, length, " ");
  }
};
//# sourceMappingURL=str.js.map
