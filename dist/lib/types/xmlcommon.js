"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLBase = exports.XMLErrorCodes = void 0;
var XMLErrorCodes;
(function (XMLErrorCodes) {
    XMLErrorCodes[XMLErrorCodes["no_error"] = 0] = "no_error";
    XMLErrorCodes[XMLErrorCodes["open_file"] = 1] = "open_file";
    XMLErrorCodes[XMLErrorCodes["no_open_document"] = 2] = "no_open_document";
    XMLErrorCodes[XMLErrorCodes["missing_start_element"] = 3] = "missing_start_element";
    XMLErrorCodes[XMLErrorCodes["unknown_error"] = 99] = "unknown_error";
})(XMLErrorCodes = exports.XMLErrorCodes || (exports.XMLErrorCodes = {}));
var XMLBase = /** @class */ (function () {
    function XMLBase() {
    }
    Object.defineProperty(XMLBase.prototype, "errCode", {
        get: function () {
            return this.mErrCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XMLBase.prototype, "errDescription", {
        get: function () {
            return this.mErrDescription;
        },
        enumerable: false,
        configurable: true
    });
    return XMLBase;
}());
exports.XMLBase = XMLBase;
//# sourceMappingURL=xmlcommon.js.map