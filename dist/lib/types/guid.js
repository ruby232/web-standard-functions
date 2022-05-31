"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GUID = void 0;
var uuid_1 = require("uuid");
var GUID = /** @class */ (function () {
    function GUID(val) {
        this.value = this.normalizeValue(val);
    }
    GUID.prototype.normalizeValue = function (str) {
        var lStr = str.toLowerCase();
        var regExp1 = /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/;
        var regExp2 = /[0-9a-f]{32}/;
        if (lStr.length === 36 && regExp1.exec(lStr) !== null) {
            return lStr;
        }
        else if (lStr.length === 32 && regExp2.exec(lStr) !== null) {
            return (lStr.substr(0, 8) +
                "-" +
                lStr.substr(8, 4) +
                "-" +
                lStr.substr(12, 4) +
                "-" +
                lStr.substr(16, 4) +
                "-" +
                lStr.substr(20, 12));
        }
        else {
            return GUID.emptyValue;
        }
    };
    /**
     * Returns true if the GUID is the emtpy GUID
     * @returns boolean
     */
    GUID.prototype.isEmpty = function () {
        return this.value === GUID.emptyValue;
    };
    /**
     * Sets the given string as the GUID's value
     * @param {string} str The new GUID's value
     */
    GUID.prototype.fromString = function (str) {
        this.value = this.normalizeValue(str);
    };
    /**
     * Returns the string representation of the GUID object
     * @param {string} format The desired format of the output string
     * @returns {string} The string representation of the GUID
     */
    GUID.prototype.toString = function (format) {
        if (format === void 0) { format = undefined; }
        // TODO: apply formatting. Which are the valid formats?
        return this.value;
    };
    /**
     * Returns the empty GUID
     * @returns {GUID} The empty GUID
     */
    GUID.empty = function () {
        return GUID.emptyGUID;
    };
    /**
     * Creates a new GUID object from the given string
     * @param {string} str The string representing the GUID object to be created
     * @returns {GUID} The GUID object with representing the given string
     */
    GUID.fromString = function (str) {
        return new GUID(str);
    };
    /**
     * Creates a new GUID object with a randomly-generated value
     * @returns {GUID} The newly created GUID object
     */
    GUID.newGuid = function () {
        return new GUID(uuid_1.v4());
    };
    GUID.emptyValue = "00000000-0000-0000-0000-000000000000";
    GUID.emptyGUID = new GUID(GUID.emptyValue);
    return GUID;
}());
exports.GUID = GUID;
//# sourceMappingURL=guid.js.map