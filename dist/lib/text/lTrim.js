"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ltrim = void 0;
var regExp = /^ +/g;
/**
 * Trim leading spaces only
 * @param {string} value
 * @return string
 */
var ltrim = function (s) {
    return s.replace(regExp, "");
};
exports.ltrim = ltrim;
//# sourceMappingURL=lTrim.js.map