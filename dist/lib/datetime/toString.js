"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toString = void 0;
var isEmpty_1 = require("../date/isEmpty");
var padLeft_1 = require("../text/padLeft");
var toString_1 = require("../numeric/toString");
/**
 * Returns a string represantation of a date-time. dd[/]mm[/]yyyy HH:mm:ss
 * @return Date
 */
var toString = function (targetDate) {
  if (isEmpty_1.isEmpty(targetDate)) {
    return "";
  } else {
    var datePart =
      targetDate.getDate() +
      "/" +
      (targetDate.getMonth() + 1) +
      "/" +
      targetDate.getFullYear();
    var timePart =
      padLeft_1.padLeft(toString_1.toString(targetDate.getHours()), 2, "0") +
      ":" +
      padLeft_1.padLeft(toString_1.toString(targetDate.getMinutes()), 2, "0") +
      ":" +
      padLeft_1.padLeft(toString_1.toString(targetDate.getSeconds()), 2, "0");
    return datePart + " " + timePart;
  }
};
exports.toString = toString;
//# sourceMappingURL=toString.js.map
