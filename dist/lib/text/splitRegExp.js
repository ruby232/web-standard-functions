"use strict";
/**
 * @param Split the string using the pattern as splitter.
 * @param replaceString
 * @return string
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitRegExp = void 0;
var splitRegExp = function (target, pattern) {
    var regularExp = typeof pattern === "string" ? new RegExp(pattern) : pattern;
    return target.split(regularExp);
};
exports.splitRegExp = splitRegExp;
//# sourceMappingURL=splitRegExp.js.map