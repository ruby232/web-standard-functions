"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roundToEven = void 0;
var integer_1 = require("./integer");
/**
 * Rounds to even the given number to the specified number of decimal digits
 * @param {number} value
 * @param {number} digits
 * @returns number
 */
var roundToEven = function (value, digits) {
  var multiplier = Math.pow(10, digits || 0);
  var valToRound = value * multiplier;
  var decimalPart = valToRound - integer_1.integer(valToRound);
  var rounded = Math.round(valToRound);
  if (decimalPart === 0.5 && rounded % 2 !== 0) {
    rounded = rounded - 1;
  }
  return rounded / multiplier;
};
exports.roundToEven = roundToEven;
//# sourceMappingURL=roundToEven.js.map
