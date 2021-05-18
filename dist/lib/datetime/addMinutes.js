"use strict";
/**
 * To add minutes to a datetime.
 * @param {Date} dateFrom
 * @param {number} minutes
 * @return Date
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMinutes = void 0;
var core_1 = require("./core");
exports.addMinutes = function(dateFrom, minutes) {
  return new Date(dateFrom.getTime() + core_1.minutesToMilliseconds(minutes));
};
//# sourceMappingURL=addMinutes.js.map
