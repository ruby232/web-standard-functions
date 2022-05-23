/**
 * Converts the numbers of a character expression to a numeric type
 * @param decimalSeparator
 * @return number
 */
export var toNumeric = function (strNumber, decimalSep) {
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
//# sourceMappingURL=toNumeric.js.map