"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.browserVersion = void 0;
var browserCommon_1 = require("./browserCommon");
/**
 * Returns the browser’s version
 * @return string
 */
function browserVersion() {
    return browserCommon_1.browserIdFromAgent(navigator.userAgent).version;
}
exports.browserVersion = browserVersion;
//# sourceMappingURL=browserVersion.js.map