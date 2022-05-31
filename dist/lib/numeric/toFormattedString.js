"use strict";
/**
 * @param {number} value
 * @param {string} picture
 * @return string
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toFormattedString = void 0;
var toFormattedString = function (value, picture) {
    var result = "";
    // *****Decimals******* //
    var decimalValue = value.toString().split(".")[1];
    var decimalPicture = picture.toString().split(".")[1];
    var resultDecimal = "";
    if (decimalValue !== undefined && decimalPicture !== undefined) {
        decimalPicture = decimalPicture.replace(")", "");
        if (decimalValue.length < decimalPicture.length) {
            resultDecimal +=
                "." +
                    decimalValue +
                    "0".repeat(decimalPicture.length - decimalValue.length);
        }
        else {
            resultDecimal += "." + decimalValue;
        }
    }
    if (decimalValue === undefined && decimalPicture !== undefined) {
        resultDecimal += "." + "0".repeat(decimalPicture.length);
    }
    // *****Integers***** //
    var integerValue = Math.abs(value)
        .toString()
        .split(".")[0];
    var integerPicture = picture
        .toString()
        .split(".")[0]
        .replace("(", "")
        .replace("DB", "")
        .replace("+", "") + ".";
    var valueLength = integerValue.toString().length;
    for (var i = integerPicture.length; i >= 0; i--) {
        switch (integerPicture.slice(i, i + 1)) {
            case "9":
                if (valueLength < 0) {
                    result += 0;
                    --valueLength;
                }
                else {
                    if (i === 0 && picture.length < value.toString().length) {
                        result += Math.abs(Number(integerValue))
                            .toString()
                            .slice(0, valueLength + 1)
                            .split("")
                            .reverse()
                            .join("");
                    }
                    else {
                        result += Math.abs(Number(integerValue))
                            .toString()
                            .slice(valueLength, valueLength + 1);
                        --valueLength;
                    }
                }
                break;
            case "Z":
                if (Math.abs(Number(integerValue))
                    .toString()
                    .slice(valueLength, valueLength + 1) !== "" &&
                    valueLength >= 0) {
                    result += Math.abs(Number(integerValue))
                        .toString()
                        .slice(valueLength, valueLength + 1);
                    --valueLength;
                }
                else {
                    if (integerPicture
                        .toString()
                        .slice(0, i + 1)
                        .indexOf("9") !== -1) {
                        result += 0;
                    }
                    else {
                        result += " ";
                    }
                }
                break;
            case ".":
                result +=
                    Math.abs(Number(integerValue))
                        .toString()
                        .slice(valueLength, valueLength + 1) +
                        resultDecimal
                            .split("")
                            .reverse()
                            .join("");
                --valueLength;
                break;
            case ",":
                if (Math.abs(Number(integerValue))
                    .toString()
                    .slice(valueLength, valueLength + 1) !== "") {
                    result += ",";
                }
                else {
                    if (integerPicture
                        .toString()
                        .slice(0, i + 1)
                        .indexOf("9") !== -1) {
                        result += ",";
                    }
                    else {
                        result += " ";
                    }
                }
                break;
            default:
                break;
        }
    }
    // ****signs***** //
    var brackets = picture.indexOf("(");
    var DB = picture.indexOf("DB");
    var positive = picture.indexOf("+");
    result = result
        .split("")
        .reverse()
        .join("");
    if (brackets !== -1) {
        if (value.toString().charAt(0) === "-") {
            result = "(" + result + ")";
        }
        else {
            result = " " + result;
        }
    }
    if (DB !== -1) {
        if (value.toString().charAt(0) === "-") {
            result = "-DB" + result;
        }
        else {
            result = "CR" + result;
        }
    }
    if (positive !== -1) {
        if (value.toString().charAt(0) === "-") {
            result = "-" + result;
        }
        else {
            result = "+" + result;
        }
    }
    return result;
};
exports.toFormattedString = toFormattedString;
//# sourceMappingURL=toFormattedString.js.map