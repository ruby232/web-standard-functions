/**
 * Return a substring from a given string
 * @param startPosition
 * @param length
 * @return string
 */
import * as unicodeSubstring from "unicode-substring";
export var subString = function (target, startPosition, length) {
    if (length === undefined) {
        length = -1;
    }
    return length < 0
        ? unicodeSubstring(target, startPosition - 1)
        : unicodeSubstring(target, startPosition - 1, startPosition - 1 + length);
};
//# sourceMappingURL=subString.js.map