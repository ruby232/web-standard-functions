/**
 * Return character at position
 * @param {string} target
 * @param {number} from
 * @return {string}
 */
export var charAt = function (target, from) {
    var chars = Array.from(target);
    return from < 1 || from > chars.length ? "" : chars[from - 1];
};
//# sourceMappingURL=charAt.js.map