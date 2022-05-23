/**
 * This method converts a DateTime value from one timezone, to another.
 * The first one is passed as a parameter of the method, while the second one is the current timezone of the process executing the method.
 * @Param Date
 * @return Date
 */
import { timezones } from "./timezone";
export declare const fromTimezone: (fromDate: Date, timezoneFrom: timezones) => Date;
