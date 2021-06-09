"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
var openInBrowser_1 = require("./openInBrowser");
/**
 * @param to
 * @param subject
 * @param message
 */
var sendEmail = function (to, subject, message) {
  var uri = "mailTo:" + to;
  var paramSeparator = "?";
  if (subject) {
    uri += paramSeparator + "subject=" + encodeURIComponent(subject);
    paramSeparator = "&";
  }
  if (message) {
    uri += paramSeparator + "&body=" + encodeURIComponent(message);
    paramSeparator = "&";
  }
  openInBrowser_1.openInBrowser(uri);
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=sendEmail.js.map
