/**
 * Returns the browser Id and version from the user agent string
 * @param userAgent
 */
export declare function browserIdFromAgent(userAgent: string): BrowserResult;
export interface BrowserResult {
    id: BrowserIdValues;
    version: string;
}
export declare enum BrowserIdValues {
    UnknownAgent = 0,
    InternetExplorer = 1,
    Netscape = 2,
    Opera = 3,
    MozillaFirefox = 6,
    Chrome = 7,
    Safari = 8,
    Edge = 9
}
