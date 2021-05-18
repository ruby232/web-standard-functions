"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.placeCall = void 0;
var openInBrowser_1 = require("./openInBrowser");
/**
 * @param {string} phone
 */
exports.placeCall = function(phone) {
  openInBrowser_1.openInBrowser("tel:" + phone);
};
//# sourceMappingURL=placeCall.js.map
