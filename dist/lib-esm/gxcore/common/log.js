var GeneXusCommonLog = /** @class */ (function () {
    function GeneXusCommonLog() {
    }
    GeneXusCommonLog.write = function (message, topic, logLevel) {
        if (topic === void 0) { topic = ""; }
        if (logLevel === void 0) { logLevel = 5; }
        if (logLevel === 5) {
            // debug
            this.debug(message, topic);
        }
        else if (logLevel === 10) {
            // info
            this.info(message, topic);
        }
        else if (logLevel === 15) {
            // warning
            this.warning(message, topic);
        }
        else if (logLevel === 20) {
            // error
            this.logError(message, topic);
        }
        else if (logLevel === 30) {
            // fatal
            this.fatal(message, topic);
        }
    };
    GeneXusCommonLog.logError = function (message, topic) {
        if (topic === void 0) { topic = ""; }
        console.error(message);
    };
    GeneXusCommonLog.warning = function (message, topic) {
        if (topic === void 0) { topic = ""; }
        console.warn(message);
    };
    GeneXusCommonLog.info = function (message, topic) {
        if (topic === void 0) { topic = ""; }
        console.info(message);
    };
    GeneXusCommonLog.debug = function (message, topic) {
        if (topic === void 0) { topic = ""; }
        console.debug(message);
    };
    GeneXusCommonLog.fatal = function (message, topic) {
        if (topic === void 0) { topic = ""; }
        console.error(message);
    };
    return GeneXusCommonLog;
}());
export { GeneXusCommonLog };
//# sourceMappingURL=log.js.map