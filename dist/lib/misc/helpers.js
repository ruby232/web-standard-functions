"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stdToGeneratorPublishedMessage = exports.notSupported = exports.notImplemented = void 0;
function notImplemented(funName) {
    if (funName === void 0) { funName = "Function"; }
    console.log(funName + " not yet implemented");
}
exports.notImplemented = notImplemented;
function notSupported() {
    console.log("Function or method not supported");
}
exports.notSupported = notSupported;
exports.stdToGeneratorPublishedMessage = "gx-standard-api-to-generator";
//# sourceMappingURL=helpers.js.map