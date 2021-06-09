"use strict";
/**
 * @param Returns a string resulting from replacing all the occurrences of pattern in target by repstr
 * @param replaceString
 * @return string
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceRegExp = void 0;
var replaceRegExp = function (target, pattern, repstr) {
  var regularExp =
    typeof pattern === "string" ? new RegExp(pattern, "g") : pattern;
  return target.replace(regularExp, repstr);
};
exports.replaceRegExp = replaceRegExp;
//# sourceMappingURL=replaceRegExp.js.map
