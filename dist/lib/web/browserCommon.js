"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserIdValues = exports.browserIdFromAgent = void 0;
/**
 * Returns the browser Id and version from the user agent string
 * @param userAgent
 */
function browserIdFromAgent(userAgent) {
    if (!userAgent) {
        return { id: BrowserIdValues.UnknownAgent, version: "" };
    }
    for (var _i = 0, browserMatchers_1 = browserMatchers; _i < browserMatchers_1.length; _i++) {
        var brMatcher = browserMatchers_1[_i];
        var matches = userAgent.match(brMatcher.regExp);
        if (matches !== null) {
            return { id: brMatcher.browserId, version: matches[1] };
        }
    }
    return { id: BrowserIdValues.UnknownAgent, version: "" };
}
exports.browserIdFromAgent = browserIdFromAgent;
var BrowserIdValues;
(function (BrowserIdValues) {
    BrowserIdValues[BrowserIdValues["UnknownAgent"] = 0] = "UnknownAgent";
    BrowserIdValues[BrowserIdValues["InternetExplorer"] = 1] = "InternetExplorer";
    BrowserIdValues[BrowserIdValues["Netscape"] = 2] = "Netscape";
    BrowserIdValues[BrowserIdValues["Opera"] = 3] = "Opera";
    BrowserIdValues[BrowserIdValues["MozillaFirefox"] = 6] = "MozillaFirefox";
    BrowserIdValues[BrowserIdValues["Chrome"] = 7] = "Chrome";
    BrowserIdValues[BrowserIdValues["Safari"] = 8] = "Safari";
    BrowserIdValues[BrowserIdValues["Edge"] = 9] = "Edge";
})(BrowserIdValues = exports.BrowserIdValues || (exports.BrowserIdValues = {}));
var msieRegEx = /msie\/([0-9\.]+)/i;
var edgeRegEx = /edge\/([0-9\.]+)/i;
var chromeRegEx = /chrome\/([0-9\.]+)/i;
var safariRegEx = /safari\/([0-9\.]+)/i;
var operaRegEx = /opera\/([0-9\.]+)/i;
var firefoxRegEx = /firefox\/([0-9\.]+)/i;
var netscapeRegEx = /netscape\/([0-9\.]+)/i;
var browserMatchers = [
    { regExp: msieRegEx, browserId: BrowserIdValues.InternetExplorer },
    { regExp: edgeRegEx, browserId: BrowserIdValues.Edge },
    { regExp: chromeRegEx, browserId: BrowserIdValues.Chrome },
    { regExp: safariRegEx, browserId: BrowserIdValues.Safari },
    { regExp: operaRegEx, browserId: BrowserIdValues.Opera },
    { regExp: firefoxRegEx, browserId: BrowserIdValues.MozillaFirefox },
    { regExp: netscapeRegEx, browserId: BrowserIdValues.Netscape }
];
//# sourceMappingURL=browserCommon.js.map