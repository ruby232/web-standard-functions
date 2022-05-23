import { padLeft } from "../text/padLeft";
/**
 * Converts the given number to string
 * @param {number} value
 * @param {number} length
 * @param {number} decimals
 * @returns string
 */
export var str = function (value, length, decimals) {
    if (length === void 0) { length = 10; }
    if (decimals === void 0) { decimals = 0; }
    var result = value.toFixed(decimals);
    if (result.length > length) {
        if (decimals === 0) {
            return padLeft("", length, "*");
        }
        else {
            return str(value, length, 0);
        }
    }
    else {
        return padLeft(result, length, " ");
    }
};
//# sourceMappingURL=str.js.map