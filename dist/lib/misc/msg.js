"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msg = void 0;
var publishCall_1 = require("./publishCall");
/**
 * Displays a message to the user
 * @param {string} message The message to be displayed
 * @param {string} mode Optional parameter. There are two modes to display the message: `nowait` and `status`
 */
var msg = function (str, mode) {
  if (mode === void 0) {
    mode = "";
  }
  var resolver = function (option, _, resolve) {
    resolve();
  };
  return publishCall_1.publishCall("msg", ["ok"], resolver, str, mode);
};
exports.msg = msg;
//# sourceMappingURL=msg.js.map
