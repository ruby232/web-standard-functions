"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toString = void 0;
/**
 * Returns a string represantation of a date. dd[/]mm[/]yyyy
 * @return Date
 */
var isEmpty_1 = require("./isEmpty");
exports.toString = function(targetDate) {
  return isEmpty_1.isEmpty(targetDate)
    ? ""
    : targetDate.getDate() +
        "/" +
        (targetDate.getMonth() + 1) +
        "/" +
        targetDate.getFullYear();
};
//# sourceMappingURL=toString.js.map
