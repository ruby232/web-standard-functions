"use strict";
/**
 * Add days to a date
 * @param {Date} date
 * @param {number} days
 * @return Date
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDays = void 0;
var luxon_1 = require("luxon");
var addDays = function (date, days) {
    return luxon_1.DateTime.fromJSDate(date)
        .plus({ days: Math.trunc(days) })
        .toJSDate();
};
exports.addDays = addDays;
//# sourceMappingURL=addDays.js.map