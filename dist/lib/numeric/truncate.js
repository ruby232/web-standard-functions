"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncate = void 0;
/**
 * Truncates the given number to the specified number of decimal digits
 * @param {number} value
 * @param {number} digits
 * @returns number
 */
var truncate = function (value, digits) {
    var multiplier = Math.pow(10, digits || 0);
    return Math.trunc(value * multiplier) / multiplier;
};
exports.truncate = truncate;
//# sourceMappingURL=truncate.js.map