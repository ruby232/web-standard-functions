"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondsToMilliseconds = exports.minutesToMilliseconds = exports.hoursToMilliseconds = void 0;
var milisecondsPerSecond = 1000;
var secondsPerMinute = 60;
var minutesPerHour = 60;
var hoursToMilliseconds = function (hours) {
    return hours * minutesPerHour * secondsPerMinute * milisecondsPerSecond;
};
exports.hoursToMilliseconds = hoursToMilliseconds;
var minutesToMilliseconds = function (minutes) {
    return minutes * secondsPerMinute * milisecondsPerSecond;
};
exports.minutesToMilliseconds = minutesToMilliseconds;
var secondsToMilliseconds = function (seconds) {
    return seconds * milisecondsPerSecond;
};
exports.secondsToMilliseconds = secondsToMilliseconds;
//# sourceMappingURL=core.js.map