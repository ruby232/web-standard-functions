"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.browserId = void 0;
var browserCommon_1 = require("./browserCommon");
/**
 * Returns the browser’s identifier
 * @return number
 */
function browserId() {
    return browserCommon_1.browserIdFromAgent(navigator.userAgent).id;
}
exports.browserId = browserId;
//# sourceMappingURL=browserId.js.map