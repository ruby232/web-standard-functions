"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mod = void 0;
/**
 * @param {number} dividend
 * @param {number} divisor
 * @returns number
 */
var mod = function (dividend, divisor) {
    if (dividend === 0) {
        return undefined;
    }
    else {
        if (dividend > 0) {
            return Math.trunc(Math.abs(dividend) % Math.abs(divisor));
        }
        else {
            return -Math.trunc(Math.abs(dividend) % Math.abs(divisor));
        }
    }
};
exports.mod = mod;
//# sourceMappingURL=mod.js.map