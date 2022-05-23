"use strict";
/**
 * Returns the text without diacritic characters.
 * @param {string} value
 * @return string
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDiacritics = void 0;
var jdu = require("jdu");
var removeDiacritics = function (s) {
    return jdu.replace(s);
};
exports.removeDiacritics = removeDiacritics;
//# sourceMappingURL=removeDiacritics.js.map