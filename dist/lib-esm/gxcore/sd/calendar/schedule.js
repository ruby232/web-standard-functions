import { addHours } from "../../../datetime/addHours";
import { GUID } from "../../../types/guid";
/**
 * Allows scheduling some task on the end user's calendar. Every parameter is optional except for `title` and `startDate`.
 * @param {string} title
 * @param {Date} startDate
 * @param {Date} endDate
 * @param {Date} startTime
 * @param {Date} endTime
 * @param {string} place
 */
export var schedule = function (title, startDate, endDate, startTime, endTime, place) {
    var sDateTime = getDateTime(startDate, startTime);
    var eDateTime = getDateTime(endDate, endTime, addHours(sDateTime, 1));
    var calStr = createCalendarEvent(sDateTime, eDateTime, title, place);
    downloadCalendar(calStr);
};
function convertDateTimeToString(dt) {
    // 20190814T160000Z
    return (dt.getUTCFullYear().toString() +
        stringFromTimeNumber(dt.getUTCMonth() + 1) +
        stringFromTimeNumber(dt.getUTCDate()) +
        "T" +
        stringFromTimeNumber(dt.getUTCHours()) +
        stringFromTimeNumber(dt.getUTCMinutes()) +
        stringFromTimeNumber(dt.getUTCSeconds()) +
        "Z");
}
function stringFromTimeNumber(num) {
    return num.toString().padStart(2, "0");
}
function getDateTime(datePart, timePart, defaultValue) {
    if (!datePart) {
        return defaultValue;
    }
    var result = datePart;
    if (timePart) {
        result.setHours(timePart.getHours());
        result.setMinutes(timePart.getMinutes());
        result.setSeconds(timePart.getSeconds());
    }
    return result;
}
export var createCalendarEvent = function (start, end, title, place) {
    return "BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nUID:" + getGUIDString() + "\nSEQUENCE:0\nDTSTAMP:" + convertDateTimeToString(new Date()) + "\nDTSTART:" + convertDateTimeToString(start) + "\nDTEND:" + convertDateTimeToString(end) + "\nSUMMARY:" + title + "\nLOCATION:" + place + "\nEND:VEVENT\nEND:VCALENDAR";
};
function getGUIDString() {
    return GUID.newGuid().toString();
}
function downloadCalendar(calendarStr) {
    var guidStr = getGUIDString();
    var fileName = guidStr + ".ics";
    var element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(calendarStr));
    element.setAttribute("download", fileName);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
//# sourceMappingURL=schedule.js.map