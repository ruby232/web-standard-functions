"use strict";
/**
 * Returns a Date from string value format espected format dd[/]mm[/]yyyy
 * @param {string} dateFrom
 * @return Date
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromString = void 0;
var core_1 = require("./core");
var fromString = function (target, dateFrom) {
    var dateParts = dateFrom.match(/([0-9]?[0-9])\/?([0-9]?[0-9])\/?([0-9][0-9][0-9][0-9])/);
    return dateParts && dateParts.length > 2
        ? new Date(Number(dateParts[3]), Number(dateParts[2]) - 1, Number(dateParts[1]), 0, 0, 0, 0)
        : core_1.EMPTY_DATE_VALUE;
};
exports.fromString = fromString;
//# sourceMappingURL=fromString.js.map