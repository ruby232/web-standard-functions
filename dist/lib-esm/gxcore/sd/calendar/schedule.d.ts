/**
 * Allows scheduling some task on the end user's calendar. Every parameter is optional except for `title` and `startDate`.
 * @param {string} title
 * @param {Date} startDate
 * @param {Date} endDate
 * @param {Date} startTime
 * @param {Date} endTime
 * @param {string} place
 */
export declare const schedule: (title: string, startDate: Date, endDate: Date, startTime: Date, endTime: Date, place: string) => void;
export declare const createCalendarEvent: (start: Date, end: Date, title: string, place: string) => string;
