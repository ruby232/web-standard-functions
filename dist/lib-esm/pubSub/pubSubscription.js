import { unsubscribe as unSubscribeJs } from "pubsub-js";
var PubSubscription = /** @class */ (function () {
    function PubSubscription(s) {
        this.subscription = s;
    }
    PubSubscription.prototype.unsubscribe = function () {
        unSubscribeJs(this.subscription);
    };
    return PubSubscription;
}());
export default PubSubscription;
//# sourceMappingURL=pubSubscription.js.map