"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toString = void 0;
/**
 * Converts the give number to string
 * @param {number} value
 * @param {number} characters
 * @param {number} decimals
 * @returns string
 */
var toString = function (value, characters, decimals) {
    return value.toFixed(decimals).padStart(characters);
};
exports.toString = toString;
//# sourceMappingURL=toString.js.map