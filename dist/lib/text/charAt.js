"use strict";
/**
 * Return character at position
 * @param {string} target
 * @param {number} from
 * @return {string}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.charAt = void 0;
var charAt = function (target, from) {
    var chars = Array.from(target);
    return from < 1 || from > chars.length ? "" : chars[from - 1];
};
exports.charAt = charAt;
//# sourceMappingURL=charAt.js.map