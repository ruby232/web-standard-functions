"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastIndexOf = void 0;
var length_1 = require("../text/length");
/**
 * Return position for last pattern occurence. Search is done backguard
 * @param {string} target
 * @param {string} pattern
 * @param {number} from
 * @return number
 */
var lastIndexOf = function (target, pattern, from) {
    if (from === undefined) {
        from = target.length;
    }
    if (from < 1 || from > length_1.length(target))
        return 0;
    return target.lastIndexOf(pattern, from - 1) + 1;
};
exports.lastIndexOf = lastIndexOf;
//# sourceMappingURL=lastIndexOf.js.map