"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = void 0;
var rTrim_1 = require("./rTrim");
/**
 * Formats a string by replacing the placeholders with the specified parameters
 * @param {string} str The format string
 * @param {any[]} args The replacement strings
 * @return string
 */
var format = function (str) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  var result = str;
  for (var i = 0; i < args.length; i++) {
    result = result.replace("%" + (i + 1), rTrim_1.rTrim(args[i].toString()));
  }
  return result;
};
exports.format = format;
//# sourceMappingURL=format.js.map
