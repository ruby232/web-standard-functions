"use strict";
/**
 * Converts the numbers of a character expression to a numeric type
 * @param decimalSeparator
 * @return number
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNumeric = void 0;
var toNumeric = function (strNumber, decimalSep) {
    if (decimalSep === undefined) {
        decimalSep = ".";
    }
    if (decimalSep !== "." && decimalSep !== ",") {
        return 0;
    }
    if (decimalSep === ",") {
        strNumber = strNumber.replace(/\./g, "#").replace(",", ".");
    }
    var num = parseFloat(strNumber);
    return isNaN(num) ? 0 : num;
};
exports.toNumeric = toNumeric;
//# sourceMappingURL=toNumeric.js.map