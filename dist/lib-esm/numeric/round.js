/**
 * Rounds the given number to the specified number of decimal digits
 * @param {number} value
 * @param {number} digits
 * @returns number
 */
export var round = function (value, digits) {
    var result;
    if (digits === 0) {
        result = Number(value.toPrecision(1));
    }
    else {
        if (digits > 0) {
            result = Number(Math.round(Number(value + "e" + digits)) + "e-" + digits);
        }
        else {
            var multiplier = Math.pow(10, Math.abs(digits) || 0);
            result = Number(Math.round(Number(value + "e" + digits)));
            result = result * multiplier;
        }
    }
    return result;
};
//# sourceMappingURL=round.js.map