"use strict";
/**
 * @param Split the string using the pattern as splitter.
 * @param replaceString
 * @return string
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitRegExp = void 0;
exports.splitRegExp = function(target, pattern) {
  var regularExp = typeof pattern === "string" ? new RegExp(pattern) : pattern;
  return target.split(regularExp);
};
//# sourceMappingURL=splitRegExp.js.map
