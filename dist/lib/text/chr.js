"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chr = void 0;
/**
 * Returns the character correspondinf to the specified ASCII value
 * @param {number} val The ASCII value to convert to string
 * @returns The string with the character defined by the given ASCII value
 */
var chr = function (val) {
    if (val >= 0) {
        return String.fromCharCode(val);
    }
    else {
        return "";
    }
};
exports.chr = chr;
//# sourceMappingURL=chr.js.map