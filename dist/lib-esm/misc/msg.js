import { publishCall } from "./publishCall";
/**
 * Displays a message to the user
 * @param {string} message The message to be displayed
 * @param {string} mode Optional parameter. There are two modes to display the message: `nowait` and `status`
 */
export var msg = function (str, mode) {
    if (mode === void 0) { mode = ""; }
    var resolver = function (option, _, resolve) {
        resolve();
    };
    return publishCall("msg", ["ok"], resolver, str, mode);
};
//# sourceMappingURL=msg.js.map