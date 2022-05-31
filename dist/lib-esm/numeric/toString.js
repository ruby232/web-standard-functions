/**
 * Converts the give number to string
 * @param {number} value
 * @param {number} characters
 * @param {number} decimals
 * @returns string
 */
export var toString = function (value, characters, decimals) {
    return value.toFixed(decimals).padStart(characters);
};
//# sourceMappingURL=toString.js.map