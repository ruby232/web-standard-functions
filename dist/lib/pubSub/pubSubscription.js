"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pubsub_js_1 = require("pubsub-js");
var PubSubscription = /** @class */ (function () {
    function PubSubscription(s) {
        this.subscription = s;
    }
    PubSubscription.prototype.unsubscribe = function () {
        pubsub_js_1.unsubscribe(this.subscription);
    };
    return PubSubscription;
}());
exports.default = PubSubscription;
//# sourceMappingURL=pubSubscription.js.map