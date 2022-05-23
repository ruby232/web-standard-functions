var Cookie = /** @class */ (function () {
    function Cookie() {
    }
    Object.defineProperty(Cookie.prototype, "name", {
        get: function () {
            return this.mname;
        },
        set: function (value) {
            this.mname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cookie.prototype, "value", {
        get: function () {
            return this.mvalue;
        },
        set: function (value) {
            this.mvalue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cookie.prototype, "path", {
        get: function () {
            return this.mpath;
        },
        set: function (value) {
            this.mpath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cookie.prototype, "expirationDate", {
        get: function () {
            return this.mexpirationDate;
        },
        set: function (value) {
            this.mexpirationDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cookie.prototype, "domain", {
        get: function () {
            return this.mdomain;
        },
        set: function (value) {
            this.mdomain = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cookie.prototype, "secure", {
        get: function () {
            return this.msecure;
        },
        set: function (value) {
            this.msecure = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cookie.prototype, "httpOnly", {
        get: function () {
            return this.mhttpOnly;
        },
        set: function (value) {
            this.mhttpOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    return Cookie;
}());
export { Cookie };
//# sourceMappingURL=cookie.js.map