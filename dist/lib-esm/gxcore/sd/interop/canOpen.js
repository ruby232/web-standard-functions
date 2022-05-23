import { ConfigurationState } from "../../../config/configurationState";
var knownProtocols = ["http:", "https:", "mailto:", "tel:"];
/**
 * Checks if an URL can be opened
 * @param {string} urlStr
 */
export var canOpen = function (urlStr) {
    var baseURL = ConfigurationState.getInstance().getDynStoredValue("SERVICE_HOSTNAME");
    try {
        var url = baseURL ? new URL(urlStr, baseURL) : new URL(urlStr);
        return knownProtocols.includes(url.protocol);
    }
    catch (e) {
        // could not construct URL object
        return false;
    }
};
//# sourceMappingURL=canOpen.js.map