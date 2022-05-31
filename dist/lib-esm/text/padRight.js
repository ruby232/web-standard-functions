/**
 * Return a string adding N times of fillchar or blanks to the right side of target
 * @param length
 * @param fillChar
 * @return string
 */
export var padRight = function (target, length, fillChar) {
    var res = "";
    if (length === 0) {
        res = "";
    }
    else {
        res = target.padEnd(length, fillChar);
    }
    return res;
};
//# sourceMappingURL=padRight.js.map