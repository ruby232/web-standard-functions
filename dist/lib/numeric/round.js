"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.round = void 0;
/**
 * Rounds the given number to the specified number of decimal digits
 * @param {number} value
 * @param {number} digits
 * @returns number
 */
var round = function (value, digits) {
  var multiplier = Math.pow(10, digits || 0);
  return Math.round(value * multiplier) / multiplier;
};
exports.round = round;
//# sourceMappingURL=round.js.map
