var milisecondsPerSecond = 1000;
var secondsPerMinute = 60;
var minutesPerHour = 60;
export var hoursToMilliseconds = function (hours) {
    return hours * minutesPerHour * secondsPerMinute * milisecondsPerSecond;
};
export var minutesToMilliseconds = function (minutes) {
    return minutes * secondsPerMinute * milisecondsPerSecond;
};
export var secondsToMilliseconds = function (seconds) {
    return seconds * milisecondsPerSecond;
};
//# sourceMappingURL=core.js.map