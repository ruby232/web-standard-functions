"use strict";
/**
 * Returns month for date
 * @param {Date} dateFrom
 * @return number
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.month = void 0;
var luxon_1 = require("luxon");
var month = function (dateFrom) {
    return luxon_1.DateTime.fromJSDate(dateFrom).month;
};
exports.month = month;
//# sourceMappingURL=month.js.map