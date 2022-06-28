/**
 * Detects and corrects many common coding errors and strives to produce visually equivalent markup that is both W3C compliant and works on most browsers.
 * A common use of this function is to convert plain HTML to XHTML.
 * @param {string} target
 * @return string
 */
//import * as htmltidy from "tidy-html5";
export var htmlClean = function (s) {
    //return htmltidy.tidy_html5(s, { quiet: true, "tidy-mark": false });
    //TODO: when doing an npm build the tidy-html5 library has a size of 925kb 
    //      and is too big for a miniprogram, that's why this has been commented 
    //      out and the same string is returned.
    return s;
};
//# sourceMappingURL=htmlClean.js.map