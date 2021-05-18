"use strict";
/**
 * Returns the number (1...7) of the day of the week. This number is associated with a day of the week (Sunday = 1).
 * @param {Date} dateFrom
 * @return number
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayOfWeek = void 0;
var luxon_1 = require("luxon");
exports.dayOfWeek = function(dateFrom) {
  return (
    (parseInt(luxon_1.DateTime.fromJSDate(dateFrom).toFormat("c"), 10) % 7) + 1
  );
};
//# sourceMappingURL=dayOfWeek.js.map
