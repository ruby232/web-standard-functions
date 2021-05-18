"use strict";
/**
 * Returns a Date from its parts
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @param {number} hour
 * @param {number} minutes
 * @param {number} seconds
 * @return Date
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.newInstance = void 0;
var core_1 = require("../date/core");
exports.newInstance = function(year, month, day, hour, minutes, seconds) {
  var ret = new Date(year, month - 1, day, hour, minutes, seconds, 0);
  return ret.getFullYear() === year &&
    ret.getMonth() === month - 1 &&
    ret.getDate() === day &&
    ret.getHours() === hour &&
    ret.getMinutes() === minutes &&
    ret.getSeconds() === seconds
    ? ret
    : core_1.EMPTY_DATE_VALUE;
};
//# sourceMappingURL=newInstance.js.map
