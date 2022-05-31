"use strict";
/**
 * Return a string adding N times of fillchar or blanks to the left side of target
 * @param length
 * @param fillChar
 * @return string
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.padLeft = void 0;
var padLeft = function (target, length, fillChar) {
    var res = "";
    if (length === 0) {
        res = "";
    }
    else {
        res = target.padStart(length, fillChar);
    }
    return res;
};
exports.padLeft = padLeft;
//# sourceMappingURL=padLeft.js.map