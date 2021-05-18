"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondsToMilliseconds = exports.minutesToMilliseconds = exports.hoursToMilliseconds = void 0;
var milisecondsPerSecond = 1000;
var secondsPerMinute = 60;
var minutesPerHour = 60;
exports.hoursToMilliseconds = function(hours) {
  return hours * minutesPerHour * secondsPerMinute * milisecondsPerSecond;
};
exports.minutesToMilliseconds = function(minutes) {
  return minutes * secondsPerMinute * milisecondsPerSecond;
};
exports.secondsToMilliseconds = function(seconds) {
  return seconds * milisecondsPerSecond;
};
//# sourceMappingURL=core.js.map
