import { openInBrowser } from "./openInBrowser";
/**
 * @param to
 * @param subject
 * @param message
 */
export var sendEmail = function (to, subject, message) {
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
    openInBrowser(uri);
};
//# sourceMappingURL=sendEmail.js.map