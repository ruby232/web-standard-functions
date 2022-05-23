"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openInBrowser = void 0;
var canOpen_1 = require("./canOpen");
/**
 * Opens an URL in the web browser
 * @param url
 */
var openInBrowser = function (url) {
    if (canOpen_1.canOpen(url)) {
        var win = window.open(url, "_blank");
        win.focus();
    }
};
exports.openInBrowser = openInBrowser;
//# sourceMappingURL=openInBrowser.js.map