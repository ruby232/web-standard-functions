import { ConfigurationState } from "../../config/configurationState";
var GeneXusSDNetwork = /** @class */ (function () {
    function GeneXusSDNetwork() {
    }
    /**
     * Returns the application's services URL
     */
    GeneXusSDNetwork.applicationServerURL = function () {
        var config = ConfigurationState.getInstance();
        var hostName = config.getDynStoredValue("SERVICE_HOSTNAME");
        var basePath = config.getDynStoredValue("SERVICE_BASE_PATH");
        if (hostName !== undefined) {
            return hostName + basePath;
        }
        else {
            return location.protocol.concat("//").concat(window.location.hostname);
        }
    };
    /**
     * Returns True if the device can access the specified server; otherwise
     * False.
     * Current implementation returns `navigator.onLine`
     * @param url The URL to check access to, or `undefined` to check
     * connection to the application's server URL
     */
    GeneXusSDNetwork.isServerAvailable = function (url) {
        return navigator.onLine;
    };
    /**
     * Gets the connection type the device has to a specific server.
     * Current implementation returns always `1`, meaning wifi connection.
     * @param url The URL to check the connection type, or `undefined` to check
     * connection to the application's server URL
     */
    GeneXusSDNetwork.type = function (url) {
        return 1;
    };
    /**
     * Returns true or false whether the connection between the device and the
     * server could cause a monetary cost to the device user.
     * Current implementation returns always `false`
     * @param url The URL to check the connection to, or `undefined` to check
     * connection to the application's server URL
     */
    GeneXusSDNetwork.trafficBasedCost = function (url) {
        return false;
    };
    /**
     * It allows to dynamically change the URL of the application.
     * Current implementation does nothing, prints an error to the console.
     * @param url
     */
    GeneXusSDNetwork.setApplicationServerURL = function (url) {
        console.log("GeneXus.SD.Network's setApplicationServerURL is not available");
    };
    return GeneXusSDNetwork;
}());
export { GeneXusSDNetwork };
//# sourceMappingURL=network.js.map