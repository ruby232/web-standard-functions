"use strict";
/**
 * To return a DateTime data type value corresponding to the current date and time.
 * @return Date
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.now = void 0;
var fromTimezone_1 = require("./fromTimezone");
var timezone_1 = require("./timezone");
var core_1 = require("./core");
var now = function () {
  var date = new Date();
  var offset = core_1.minutesToMilliseconds(date.getTimezoneOffset());
  return fromTimezone_1.fromTimezone(
    new Date(date.getTime() + offset),
    timezone_1.timezones.UTC
  );
};
exports.now = now;
//# sourceMappingURL=now.js.map
