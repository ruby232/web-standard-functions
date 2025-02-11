/**
 * @param Returns a string resulting from replacing all the occurrences of substr in target by repstr
 * @param replaceString
 * @return string
 */
export var replace = function (target, substr, repstr) {
    return target.replace(new RegExp(substr, "g"), repstr);
};
//# sourceMappingURL=replace.js.map