/**
 * To return a DateTime data type value corresponding to the current date and time.
 * @return Date
 */
import { fromTimezone } from "./fromTimezone";
import { timezones } from "./timezone";
import { minutesToMilliseconds } from "./core";
export var now = function () {
    var date = new Date();
    var offset = minutesToMilliseconds(date.getTimezoneOffset());
    return fromTimezone(new Date(date.getTime() + offset), timezones.UTC);
};
//# sourceMappingURL=now.js.map