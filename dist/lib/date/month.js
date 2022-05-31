"use strict";
/**
 * Returns month for date
 * @param {Date} dateFrom
 * @return number
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.month = void 0;
var luxon_1 = require("luxon");
var core_1 = require("../date/core");
var month = function (dateFrom) {
    return dateFrom.getTime() === core_1.EMPTY_DATE_VALUE.getTime()
        ? 0
        : luxon_1.DateTime.fromJSDate(dateFrom).month;
};
exports.month = month;
//# sourceMappingURL=month.js.map