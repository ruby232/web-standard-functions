"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toString = void 0;
var isEmpty_1 = require("../date/isEmpty");
var padLeft_1 = require("../text/padLeft");
/**
 * Returns a string represantation of a date-time. dd[/]mm[/]yyyy HH:mm:ss
 * @return Date
 */
var toString = function (targetDate, dateDigit, hourDigit, dateFormat, timeFormat, picture) {
    if (!dateFormat) {
        dateFormat = "MDY";
    }
    if (!timeFormat) {
        timeFormat = 12;
    }
    if (!picture) {
        picture = "99/99/99 99:99";
    }
    var day = padLeft_1.padLeft(String(targetDate.getDate()), 2, "0");
    var month = padLeft_1.padLeft(String(targetDate.getMonth() + 1), 2, "0");
    var year = targetDate.getFullYear().toString();
    var hours = padLeft_1.padLeft(String(targetDate.getHours()), 2, "0");
    var minutes = padLeft_1.padLeft(String(targetDate.getMinutes()), 2, "0");
    var seconds = padLeft_1.padLeft(String(targetDate.getSeconds()), 2, "0");
    var milliseconds = padLeft_1.padLeft(String(targetDate.getMilliseconds()), 3, "0");
    var type = "";
    var datePart = "";
    var timePart = "";
    // Date Format   dateFormat = “MDY”   dateFormat = “DMY”   dateFormat = “YMD”
    if (dateFormat) {
        if (dateFormat.indexOf("Y4") === 0) {
            dateFormat =
                dateFormat.charAt(0) +
                    dateFormat.charAt(1) +
                    "/" +
                    dateFormat.charAt(2) +
                    "/" +
                    dateFormat.charAt(3);
        }
        else {
            dateFormat =
                dateFormat.charAt(0) +
                    "/" +
                    dateFormat.charAt(1) +
                    "/" +
                    dateFormat.charAt(2);
        }
    }
    // Time Format  timeFormat: 12   timeFormat: 24
    if (timeFormat === 12) {
        if (Number(hours) < 12) {
            type = "AM";
        }
        else {
            type = "PM";
        }
        hours = String(Number(hours) % 12 || 12);
        if (hours.toString().length === 1) {
            hours = "0" + hours;
        }
    }
    // Date Part
    if (isEmpty_1.isEmpty(targetDate)) {
        return "";
    }
    else {
        switch (dateDigit) {
            case 0:
                datePart = "";
                break;
            case 8:
                if (dateFormat) {
                    year = year.substr(-2);
                    if (dateFormat.indexOf("Y4") === 0) {
                        datePart = dateFormat
                            .replace("D", day.toString())
                            .replace("M", month.toString())
                            .replace("Y4", year.toString());
                    }
                    else {
                        datePart = dateFormat
                            .replace("D", day.toString())
                            .replace("M", month.toString())
                            .replace("Y", year.toString());
                    }
                }
                else {
                    datePart = day + "/" + month + "/" + year.substr(-2);
                }
                break;
            case 10:
                if (dateFormat) {
                    if (dateFormat.indexOf("Y4") === 0) {
                        datePart = dateFormat
                            .replace("D", day.toString())
                            .replace("M", month.toString())
                            .replace("Y4", year.toString());
                    }
                    else {
                        datePart = dateFormat
                            .replace("D", day.toString())
                            .replace("M", month.toString())
                            .replace("Y", year.toString());
                    }
                }
                else {
                    datePart = day + "/" + month + "/" + year;
                }
                break;
            default:
                if (dateFormat) {
                    // Picture
                    if (picture) {
                        var datePart_1 = picture.split(" ")[0];
                        var yearPart = datePart_1.split("/")[2];
                        if (yearPart.length === 2) {
                            year = year.toString().substr(-2);
                        }
                    }
                    if (dateFormat.indexOf("Y4") === 0) {
                        datePart = dateFormat
                            .replace("D", day.toString())
                            .replace("M", month.toString())
                            .replace("Y4", year.toString());
                    }
                    else {
                        datePart = dateFormat
                            .replace("D", day.toString())
                            .replace("M", month.toString())
                            .replace("Y", year.toString());
                    }
                }
                else {
                    datePart = day + "/" + month + "/" + year;
                }
                break;
        }
        // Time Part
        switch (hourDigit) {
            case 0:
                timePart = "";
                break;
            case 2:
                datePart = "";
                if (timeFormat === 12) {
                    timePart = hours + " " + type;
                }
                else {
                    timePart = "" + hours;
                }
                break;
            case 5:
                if (timeFormat === 12) {
                    timePart = hours + ":" + minutes + " " + type;
                }
                else {
                    timePart = hours + ":" + minutes;
                }
                break;
            case 8:
                if (timeFormat === 12) {
                    timePart = hours + ":" + minutes + ":" + seconds + " " + type;
                }
                else {
                    timePart = hours + ":" + minutes + ":" + seconds;
                }
                break;
            case 12:
                if (timeFormat === 12) {
                    timePart = hours + ":" + minutes + ":" + seconds + "." + milliseconds + " " + type;
                }
                else {
                    timePart = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
                }
                break;
            default:
                if (timeFormat === 12) {
                    timePart = hours + ":" + minutes + ":" + seconds + " " + type;
                }
                else {
                    timePart = hours + ":" + minutes + ":" + seconds;
                }
                break;
        }
        // Return
        if (datePart !== "" && timePart !== "") {
            return datePart + " " + timePart;
        }
        if (datePart === "" && timePart !== "") {
            return "" + timePart;
        }
        if (timePart === "" && datePart !== "") {
            return "" + datePart;
        }
    }
};
exports.toString = toString;
//# sourceMappingURL=toString.js.map