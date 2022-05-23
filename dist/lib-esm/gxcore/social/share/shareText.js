import { msg } from "../../../misc/msg";
/**
 * @param text
 * @param url
 * @param title
 */
export var shareText = function (text, url, title) {
    var nav = window.navigator;
    if (nav && nav.share) {
        return nav.share({ title: title, url: url, text: text });
    }
    else {
        return msg("Share API not available in this browser", "status");
    }
};
//# sourceMappingURL=shareText.js.map