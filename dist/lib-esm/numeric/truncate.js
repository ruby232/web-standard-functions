/**
 * Truncates the given number to the specified number of decimal digits
 * @param {number} value
 * @param {number} digits
 * @returns number
 */
export var truncate = function (value, digits) {
    var multiplier = Math.pow(10, digits || 0);
    return Math.trunc(value * multiplier) / multiplier;
};
//# sourceMappingURL=truncate.js.map