"use strict";
/**
 * Detects and corrects many common coding errors and strives to produce visually equivalent markup that is both W3C compliant and works on most browsers.
 * A common use of this function is to convert plain HTML to XHTML.
 * @param {string} target
 * @return string
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlClean = void 0;
var htmltidy = require("tidy-html5");
exports.htmlClean = function(s) {
  return htmltidy.tidy_html5(s, { quiet: true, "tidy-mark": false });
};
//# sourceMappingURL=htmlClean.js.map
