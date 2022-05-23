import { integer } from "./integer";
/**
 * Rounds to even the given number to the specified number of decimal digits
 * @param {number} value
 * @param {number} digits
 * @returns number
 */
export var roundToEven = function (value, digits) {
    var multiplier = Math.pow(10, digits || 0);
    var valToRound = value * multiplier;
    var decimalPart = valToRound - integer(valToRound);
    var rounded = Math.round(valToRound);
    if (decimalPart === 0.5 && rounded % 2 !== 0) {
        rounded = rounded - 1;
    }
    return rounded / multiplier;
};
//# sourceMappingURL=roundToEven.js.map