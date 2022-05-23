/**
 * The XSLTApply function receives the XSLT file path, and applies it to a string variable or XML file variable.
 * @param {string} xmlString
 * @param {string} xsltString
 * @return string
 */
import { xsltProcess, xmlParse } from "xslt-processor";
export var xsltApply = function (xmlString, xsltString) {
    return xsltProcess(xmlParse(xmlString), xmlParse(xsltString));
};
//# sourceMappingURL=xsltApply.js.map