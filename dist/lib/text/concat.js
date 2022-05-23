"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concat = void 0;
var rTrim_1 = require("./rTrim");
/**
 * Concatenates the two given strings using the optional separator
 * @param {string} value1 First string
 * @param {string} value2 Second string
 * @param {string} separator Optional separator
 * @return string
 */
var concat = function (value1, value2, separator) {
    if (separator === void 0) { separator = undefined; }
    return rTrim_1.rTrim(value1) + (separator ? separator : "") + value2;
};
exports.concat = concat;
//# sourceMappingURL=concat.js.map