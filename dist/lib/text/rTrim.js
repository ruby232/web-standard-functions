"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rTrim = void 0;
var regExp = / +$/g;
/**
 * Trim trailing spaces only
 * @param {string} value
 * @return string
 */
var rTrim = function (s) {
    return s.replace(regExp, "");
};
exports.rTrim = rTrim;
//# sourceMappingURL=rTrim.js.map