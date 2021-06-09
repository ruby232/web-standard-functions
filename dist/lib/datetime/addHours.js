"use strict";
/**
 * To add hours to a datetime.
 * @param {Date} dateFrom
 * @param {number} hours
 * @return Date
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHours = void 0;
var core_1 = require("./core");
var addHours = function (dateFrom, hours) {
  return new Date(dateFrom.getTime() + core_1.hoursToMilliseconds(hours));
};
exports.addHours = addHours;
//# sourceMappingURL=addHours.js.map
