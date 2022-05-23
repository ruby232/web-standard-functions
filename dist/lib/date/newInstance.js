"use strict";
/**
 * Returns a Date from its parts
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @return Date
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.newInstance = void 0;
var core_1 = require("./core");
var newInstance = function (year, month, day) {
    var ret = new Date(year, month - 1, day, 0, 0, 0, 0);
    return ret.getFullYear() === year &&
        ret.getMonth() === month - 1 &&
        ret.getDate() === day
        ? ret
        : core_1.EMPTY_DATE_VALUE;
};
exports.newInstance = newInstance;
//# sourceMappingURL=newInstance.js.map