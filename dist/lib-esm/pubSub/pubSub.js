import EventSubscription from "./pubSubscription";
import * as PubSubJs from "pubsub-js";
/**
 * Asynchronously publishes the message, passing the data to it's subscribers
 * @param topicName The topic name to publish the data
 * @param data  The data to pass to subscribers
 * @return Returns true if there are subscribers to the topic
 */
export var publish = function (topicName) {
    var data = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        data[_i - 1] = arguments[_i];
    }
    return PubSubJs.publish(normalizeTopicName(topicName), data);
};
/**
 * Subscribe to topic name. Automatically gets notified when someone publish to the topic name.
 * @param topicName The topic name to be subscribed.
 * @param handler The function to be called when someone publish to the topic name.
 * @param options Subscribe advanced options: such as subscribe only once to the topic.
 * @return Returns Subscription object
 */
export var subscribe = function (topicName, handler, options) {
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
    return new EventSubscription(token);
};
/**
 * Cancel a specific subscription.
 * @param suscription The suscription object
 */
export var cancelTopic = function (topicName) {
    PubSubJs.unsubscribe(normalizeTopicName(topicName));
};
/**
 * Cancel a specific subscription.
 * @param suscription The suscription object
 */
export var cancelSubscription = function (subscription) {
    subscription.unsubscribe();
};
/**
 * Clears all subscribed events.
 */
export var cancelAllSubscriptions = function () {
    PubSubJs.clearAllSubscriptions();
};
var normalizeTopicName = function (name) {
    return name.toLocaleLowerCase();
};
//# sourceMappingURL=pubSub.js.map