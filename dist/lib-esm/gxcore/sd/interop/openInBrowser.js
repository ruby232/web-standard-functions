import { canOpen } from "./canOpen";
/**
 * Opens an URL in the web browser
 * @param url
 */
export var openInBrowser = function (url) {
    if (canOpen(url)) {
        var win = window.open(url, "_blank");
        win.focus();
    }
};
//# sourceMappingURL=openInBrowser.js.map