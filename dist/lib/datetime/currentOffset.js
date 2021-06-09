"use strict";
/**
 * It returns the current difference –in minutes– between CTZ and UTC.
 * @return number
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentOffset = void 0;
var luxon_1 = require("luxon");
var getTimezone_1 = require("./getTimezone");
var currentOffset = function () {
  return luxon_1.DateTime.local().setZone(getTimezone_1.getTimezone()).offset;
};
exports.currentOffset = currentOffset;
//# sourceMappingURL=currentOffset.js.map
