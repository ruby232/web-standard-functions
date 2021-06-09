"use strict";
/**
 * Returns the difference, in years, between the two parameters.
 * If the second parameter, which is optional, is omitted, then the default value is the value returned by the function Today()
 * @param {Date} dateFrom
 * @param {Date} dateTo
 * @return number
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.age = void 0;
var luxon_1 = require("luxon");
var today_1 = require("../date/today");
var age = function (dateFrom, dateTo) {
  if (dateTo === undefined) {
    dateTo = today_1.today();
  }
  return Math.trunc(
    luxon_1.DateTime.fromJSDate(dateTo).diff(
      luxon_1.DateTime.fromJSDate(dateFrom),
      "years"
    ).years
  );
};
exports.age = age;
//# sourceMappingURL=age.js.map
