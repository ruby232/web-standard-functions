"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shareText = void 0;
var msg_1 = require("../../../misc/msg");
/**
 * @param text
 * @param url
 * @param title
 */
exports.shareText = function(text, url, title) {
  var nav = window.navigator;
  if (nav && nav.share) {
    return nav.share({ title: title, url: url, text: text });
  } else {
    return msg_1.msg("Share API not available in this browser", "status");
  }
};
//# sourceMappingURL=shareText.js.map
