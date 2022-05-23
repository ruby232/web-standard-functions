"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publish = exports.unSubscribeAll = exports.unSubscribe = exports.subscribe = void 0;
var pubSub_1 = require("../pubSub/pubSub");
/**
 * Subscribe to topic name. Automatically gets notified when someone publish to the topic name.
 * @param topicName The topic name to be subscribed.
 * @param handler The function to be called when someone publish to the topic name.
 * @return Returns Subscription object
 */
function subscribe(name, handler) {
    return pubSub_1.subscribe(name, handler);
}
exports.subscribe = subscribe;
/**
 * Cancel a specific subscription.
 * @param suscription The suscription object
 */
function unSubscribe(suscription) {
    pubSub_1.cancelSubscription(suscription);
}
exports.unSubscribe = unSubscribe;
/**
 * Cancel all subscriptions
 */
function unSubscribeAll() {
    pubSub_1.cancelAllSubscriptions();
}
exports.unSubscribeAll = unSubscribeAll;
/**
 * Asynchronously publishes the message, passing the data to it's subscribers
 * @param topicName The topic name to publish the data
 * @param data  The data to pass to subscribers
 * @return Returns true if there are subscribers to the topic
 */
function publish(topicName) {
    var data = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        data[_i - 1] = arguments[_i];
    }
    return pubSub_1.publish.apply(this, [topicName].concat(data));
}
exports.publish = publish;
//# sourceMappingURL=globalEvents.js.map