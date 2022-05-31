"use strict";
/**
 * Return a string adding N times of fillchar or blanks to the right side of target
 * @param length
 * @param fillChar
 * @return string
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.padRight = void 0;
var padRight = function (target, length, fillChar) {
    var res = "";
    if (length === 0) {
        res = "";
    }
    else {
        res = target.padEnd(length, fillChar);
    }
    return res;
};
exports.padRight = padRight;
//# sourceMappingURL=padRight.js.map