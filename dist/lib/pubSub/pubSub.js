"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAllSubscriptions = exports.cancelSubscription = exports.cancelTopic = exports.subscribe = exports.publish = void 0;
var pubSubscription_1 = require("./pubSubscription");
var PubSubJs = require("pubsub-js");
/**
 * Asynchronously publishes the message, passing the data to it's subscribers
 * @param topicName The topic name to publish the data
 * @param data  The data to pass to subscribers
 * @return Returns true if there are subscribers to the topic
 */
var publish = function (topicName) {
    var data = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        data[_i - 1] = arguments[_i];
    }
    return PubSubJs.publish(normalizeTopicName(topicName), data);
};
exports.publish = publish;
/**
 * Subscribe to topic name. Automatically gets notified when someone publish to the topic name.
 * @param topicName The topic name to be subscribed.
 * @param handler The function to be called when someone publish to the topic name.
 * @param options Subscribe advanced options: such as subscribe only once to the topic.
 * @return Returns Subscription object
 */
var subscribe = function (topicName, handler, options) {
    var subscribeWrapper = function (handler) {
        return function (topic, data) {
            handler.apply(this, data);
        };
    };
    topicName = normalizeTopicName(topicName);
    var token;
    if (options && options.once) {
        // @ts-ignore
        token = PubSubJs.subscribeOnce(topicName, subscribeWrapper(handler));
    }
    else {
        token = PubSubJs.subscribe(topicName, subscribeWrapper(handler));
    }
    return new pubSubscription_1.default(token);
};
exports.subscribe = subscribe;
/**
 * Cancel a specific subscription.
 * @param suscription The suscription object
 */
var cancelTopic = function (topicName) {
    PubSubJs.unsubscribe(normalizeTopicName(topicName));
};
exports.cancelTopic = cancelTopic;
/**
 * Cancel a specific subscription.
 * @param suscription The suscription object
 */
var cancelSubscription = function (subscription) {
    subscription.unsubscribe();
};
exports.cancelSubscription = cancelSubscription;
/**
 * Clears all subscribed events.
 */
var cancelAllSubscriptions = function () {
    PubSubJs.clearAllSubscriptions();
};
exports.cancelAllSubscriptions = cancelAllSubscriptions;
var normalizeTopicName = function (name) {
    return name.toLocaleLowerCase();
};
//# sourceMappingURL=pubSub.js.map