"use strict";
/**
 * The XSLTApply function receives the XSLT file path, and applies it to a string variable or XML file variable.
 * @param {string} xmlString
 * @param {string} xsltString
 * @return string
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.xsltApply = void 0;
var xslt_processor_1 = require("xslt-processor");
var xsltApply = function (xmlString, xsltString) {
  return xslt_processor_1.xsltProcess(
    xslt_processor_1.xmlParse(xmlString),
    xslt_processor_1.xmlParse(xsltString)
  );
};
exports.xsltApply = xsltApply;
//# sourceMappingURL=xsltApply.js.map
