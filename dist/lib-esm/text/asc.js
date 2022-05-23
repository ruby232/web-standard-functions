/**
 * Returns the ASCII value of the first character in the string
 * @param {string} str The string to convert to ASCII
 * @returns The ASCII value of the first character in the string
 */
export var asc = function (str) {
    if (Array.from(str).length === 0) {
        return 0;
    }
    return str.charCodeAt(0);
};
//# sourceMappingURL=asc.js.map