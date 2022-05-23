import { rTrim } from "./rTrim";
/**
 * Formats a string by replacing the placeholders with the specified parameters
 * @param {string} str The format string
 * @param {any[]} args The replacement strings
 * @return string
 */
export var format = function (str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var result = str;
    for (var i = 0; i < args.length; i++) {
        result = result.replace("%" + (i + 1), rTrim(args[i].toString()));
    }
    return result;
};
//# sourceMappingURL=format.js.map