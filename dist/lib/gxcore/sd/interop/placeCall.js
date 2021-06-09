"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.placeCall = void 0;
var openInBrowser_1 = require("./openInBrowser");
/**
 * @param {string} phone
 */
var placeCall = function (phone) {
  openInBrowser_1.openInBrowser("tel:" + phone);
};
exports.placeCall = placeCall;
//# sourceMappingURL=placeCall.js.map
