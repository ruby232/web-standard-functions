/**
 * To return the time in the 'hh:mm:ss' format.
 * @return String
 */
export declare enum time_format {
    format_12 = 12,
    format_24 = 24
}
export declare const timeImpl: (tf: time_format, date?: Date) => String;
export declare const time: () => String;
