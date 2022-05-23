"use strict";
/**
 * Returns a datetime value corresponding to adding seconds to a datetime value.
 * @param {Date} dateFrom
 * @param {number} seconds
 * @return Date
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSeconds = void 0;
var core_1 = require("./core");
var addSeconds = function (dateFrom, seconds) {
    return new Date(dateFrom.getTime() + core_1.secondsToMilliseconds(seconds));
};
exports.addSeconds = addSeconds;
//# sourceMappingURL=addSeconds.js.map