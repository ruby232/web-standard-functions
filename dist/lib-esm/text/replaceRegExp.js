/**
 * @param Returns a string resulting from replacing all the occurrences of pattern in target by repstr
 * @param replaceString
 * @return string
 */
export var replaceRegExp = function (target, pattern, repstr) {
    var regularExp = typeof pattern === "string" ? new RegExp(pattern, "g") : pattern;
    return target.replace(regularExp, repstr);
};
//# sourceMappingURL=replaceRegExp.js.map