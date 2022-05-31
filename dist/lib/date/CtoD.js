"use strict";
/**
 * Returns a Date from string value format espected format dd[/]mm[/]yyyy
 * @param {string} dateFrom
 * @return Date
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromString = void 0;
var core_1 = require("./core");
var fromString = function (dateFrom, dateFormat) {
    if (!dateFormat) {
        dateFormat = "MDY";
    }
    // Date Format   dateFormat = “MDY”   dateFormat = “DMY”   dateFormat = “YMD”  o Y4
    var year = dateFormat.indexOf("Y");
    var month = dateFormat.indexOf("M");
    var day = dateFormat.indexOf("D");
    var dateParts = dateFrom.split("/");
    if (dateFormat.indexOf("Y4") === 0) {
        month = month - 1;
        day = day - 1;
    }
    return dateParts && dateParts.length > 2
        ? new Date(Number(dateParts[year]), Number(dateParts[month]) - 1, Number(dateParts[day]), 0, 0, 0, 0)
        : core_1.EMPTY_DATE_VALUE;
};
exports.fromString = fromString;
//# sourceMappingURL=CtoD.js.map