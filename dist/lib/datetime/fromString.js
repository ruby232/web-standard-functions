"use strict";
/**
 * Returns a Date from string value format espected format dd[/]mm[/]yyyy
 * @param {string} dateFrom
 * @return Date
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromString = void 0;
var core_1 = require("../date/core");
var newInstance_1 = require("./newInstance");
var fromString = function (target, dateFrom) {
  var dateParts = dateFrom.match(
    /([0-9]?[0-9])\/?([0-9]?[0-9])\/?([0-9][0-9][0-9][0-9]) ([0-9]?[0-9]):([0-9]?[0-9]):?([0-9]?[0-9])?/
  );
  if (dateParts && dateParts.length > 5) {
    var year = Number(dateParts[3]);
    var month = Number(dateParts[2]);
    var day = Number(dateParts[1]);
    var hour = Number(dateParts[4]);
    var minutes = Number(dateParts[5]);
    var seconds = 0;
    if (dateParts.length > 6 && dateParts[6]) {
      seconds = Number(dateParts[6]);
    }
    return newInstance_1.newInstance(year, month, day, hour, minutes, seconds);
  }
  return core_1.EMPTY_DATE_VALUE;
};
exports.fromString = fromString;
//# sourceMappingURL=fromString.js.map
