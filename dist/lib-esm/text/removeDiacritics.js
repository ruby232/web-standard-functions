/**
 * Returns the text without diacritic characters.
 * @param {string} value
 * @return string
 */
import * as jdu from "jdu";
export var removeDiacritics = function (s) {
    return jdu.replace(s);
};
//# sourceMappingURL=removeDiacritics.js.map