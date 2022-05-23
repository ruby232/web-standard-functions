/**
 * Returns the seconds elapsed between two DateTime data type values.
 * @param {Date} dateFrom
 * @return number
 */
export var difference = function (dateTo, dateFrom) {
    return (dateFrom.getTime() - dateTo.getTime()) / 1000;
};
//# sourceMappingURL=difference.js.map