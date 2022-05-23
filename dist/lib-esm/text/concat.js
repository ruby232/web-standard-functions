import { rTrim } from "./rTrim";
/**
 * Concatenates the two given strings using the optional separator
 * @param {string} value1 First string
 * @param {string} value2 Second string
 * @param {string} separator Optional separator
 * @return string
 */
export var concat = function (value1, value2, separator) {
    if (separator === void 0) { separator = undefined; }
    return rTrim(value1) + (separator ? separator : "") + value2;
};
//# sourceMappingURL=concat.js.map