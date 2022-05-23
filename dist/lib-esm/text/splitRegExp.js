/**
 * @param Split the string using the pattern as splitter.
 * @param replaceString
 * @return string
 */
export var splitRegExp = function (target, pattern) {
    var regularExp = typeof pattern === "string" ? new RegExp(pattern) : pattern;
    return target.split(regularExp);
};
//# sourceMappingURL=splitRegExp.js.map