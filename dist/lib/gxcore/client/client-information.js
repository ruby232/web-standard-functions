"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneXusClientClientInformation = void 0;
var getCookie_1 = require("../../web/getCookie");
var setCookie_1 = require("../../web/setCookie");
var guid_1 = require("../../types/guid");
var addYears_1 = require("../../date/addYears");
var configurationState_1 = require("../../config/configurationState");
function notImplemented() {
    console.log("Not yet implemented");
}
function findOSInUserAgent(clientStrings) {
    var nAgt = navigator.userAgent;
    var os = clientStrings.find(function (cs) { return cs.r.test(nAgt); });
    return os ? os.s : "Unknown";
}
var GeneXusClientClientInformation = /** @class */ (function () {
    function GeneXusClientClientInformation() {
    }
    /**
     * This property returns a device identifier
     * The value of ClientInformation.Id is:
     * - Universally unique
     * - Stable
     */
    GeneXusClientClientInformation.id = function () {
        var id = getCookie_1.getCookie("GX_CLIENT_ID");
        if (!id) {
            id = guid_1.GUID.newGuid().toString();
            var expiration = addYears_1.addYears(new Date(), 100);
            setCookie_1.setCookie("GX_CLIENT_ID", id, "/", expiration);
        }
        return id;
    };
    /**
     * Returns the operating system name
     */
    GeneXusClientClientInformation.oSName = function () {
        return findOSInUserAgent([
            { s: "Windows", r: /(Windows|win32|win64)/ },
            { s: "Android", r: /Android/ },
            { s: "Open BSD", r: /OpenBSD/ },
            { s: "Sun OS", r: /SunOS/ },
            { s: "Linux", r: /(Linux|X11)/ },
            { s: "iOS", r: /(iPhone|iPad|iPod)/ },
            { s: "Mac OS X", r: /Mac OS X/ },
            { s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
            { s: "QNX", r: /QNX/ },
            { s: "UNIX", r: /UNIX/ },
            { s: "BeOS", r: /BeOS/ },
            { s: "OS/2", r: /OS\/2/ },
            {
                s: "Search Bot",
                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
            }
        ]);
    };
    /**
     * Returns the version of the operating system
     */
    GeneXusClientClientInformation.oSVersion = function () {
        var os = findOSInUserAgent([
            { s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ },
            { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
            { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
            { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
            { s: "Windows Vista", r: /Windows NT 6.0/ },
            { s: "Windows Server 2003", r: /Windows NT 5.2/ },
            { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
            { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ },
            { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ },
            { s: "Windows 98", r: /(Windows 98|Win98)/ },
            { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ },
            { s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
            { s: "Windows CE", r: /Windows CE/ },
            { s: "Windows 3.11", r: /Win16/ },
            { s: "Windows unknown-version", r: /(Windows|win32|win64)/ },
            { s: "Android", r: /Android/ },
            { s: "Open BSD", r: /OpenBSD/ },
            { s: "Sun OS", r: /SunOS/ },
            { s: "Linux", r: /(Linux|X11)/ },
            { s: "iOS", r: /(iPhone|iPad|iPod)/ },
            { s: "Mac OS X", r: /Mac OS X/ },
            { s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
            { s: "QNX", r: /QNX/ },
            { s: "UNIX", r: /UNIX/ },
            { s: "BeOS", r: /BeOS/ },
            { s: "OS/2", r: /OS\/2/ },
            {
                s: "Search Bot",
                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
            }
        ]);
        var osVersion = "Unknown";
        if (/Windows/.test(os)) {
            osVersion = /Windows (.*)/.exec(os)[1];
        }
        var nAgt = navigator.userAgent;
        var nVer = navigator.appVersion;
        switch (os) {
            case "Mac OS X":
                osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                break;
            case "Android":
                osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                break;
            case "iOS":
                var osVersionComponents = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                osVersion =
                    osVersionComponents[1] +
                        "." +
                        osVersionComponents[2] +
                        "." +
                        (osVersionComponents[3] || "0");
                break;
        }
        return osVersion;
    };
    /**
     * Returns a unique identifier for the device
     * Current implementation returns the same as the `id` property
     */
    GeneXusClientClientInformation.networkID = GeneXusClientClientInformation.id;
    /**
     * A character string is returned with the device language
     */
    GeneXusClientClientInformation.language = function () {
        var lang = navigator.languages
            ? navigator.languages[0]
            : navigator.language;
        return lang;
    };
    /**
     * Returns an enumerated value representing the device type
     */
    GeneXusClientClientInformation.deviceType = function () {
        return 4; // SmartDeviceType.Web
    };
    /**
     * Returns the platform name of the device as much specific as possible
     */
    GeneXusClientClientInformation.platformName = function () {
        var nVer = navigator.appVersion;
        var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);
        return "Web" + (mobile ? " Mobile" : "");
    };
    /**
     * Returns the version number of the application which it was set by the developer
     */
    GeneXusClientClientInformation.appVersionCode = function () {
        return configurationState_1.ConfigurationState.getInstance().getProperty("APPLICATION_VERSION_CODE");
    };
    /**
     * Returns the version name of the application which it was set by the developer
     */
    GeneXusClientClientInformation.appVersionName = function () {
        return configurationState_1.ConfigurationState.getInstance().getProperty("APPLICATION_VERSION_NAME");
    };
    /**
     * Returns the application identifier
     */
    GeneXusClientClientInformation.applicationId = function () {
        notImplemented();
        return null;
    };
    return GeneXusClientClientInformation;
}());
exports.GeneXusClientClientInformation = GeneXusClientClientInformation;
//# sourceMappingURL=client-information.js.map