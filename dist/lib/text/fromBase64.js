"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromBase64 = void 0;
var atob = require("atob");
/**
 * Converts the given base64 encoded string to and ASCII string
 * @param {string} str64 Base64 encoded string
 * @return string The decodede ASCII string
 */
var fromBase64 = function (str64) {
    return atob(str64);
};
exports.fromBase64 = fromBase64;
//# sourceMappingURL=fromBase64.js.map