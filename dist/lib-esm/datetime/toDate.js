/**
 * To return a Date data type corresponding to a given DateTime data type.
 * @param {Date} dateFrom
 * @return Date
 */
export var toDate = function (dateFrom) {
    return new Date(dateFrom.getFullYear(), dateFrom.getMonth(), dateFrom.getDate());
};
//# sourceMappingURL=toDate.js.map