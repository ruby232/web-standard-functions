"use strict";
/**
 * Add months to a date
 * @param {Date} date
 * @param {number} months
 * @return Date
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMonths = void 0;
var luxon_1 = require("luxon");
var core_1 = require("../date/core");
var addMonths = function (date, months) {
    if (date.getTime() === core_1.EMPTY_DATE_VALUE.getTime()) {
        return core_1.EMPTY_DATE_VALUE;
    }
    else {
        return luxon_1.DateTime.fromJSDate(date)
            .plus({ months: Math.trunc(months) })
            .toJSDate();
    }
};
exports.addMonths = addMonths;
//# sourceMappingURL=addMonths.js.map