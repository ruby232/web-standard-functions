import EventSubscription from "./pubSubscription";
import PubSubscriptionOptions from "./pubSubscribeOptions";
/**
 * Asynchronously publishes the message, passing the data to it's subscribers
 * @param topicName The topic name to publish the data
 * @param data  The data to pass to subscribers
 * @return Returns true if there are subscribers to the topic
 */
export declare const publish: (topicName: string, ...data: any[]) => Boolean;
/**
 * Subscribe to topic name. Automatically gets notified when someone publish to the topic name.
 * @param topicName The topic name to be subscribed.
 * @param handler The function to be called when someone publish to the topic name.
 * @param options Subscribe advanced options: such as subscribe only once to the topic.
 * @return Returns Subscription object
 */
export declare const subscribe: (topicName: string, handler: Function, options?: PubSubscriptionOptions) => EventSubscription;
/**
 * Cancel a specific subscription.
 * @param suscription The suscription object
 */
export declare const cancelTopic: (topicName: string) => void;
/**
 * Cancel a specific subscription.
 * @param suscription The suscription object
 */
export declare const cancelSubscription: (subscription: EventSubscription) => void;
/**
 * Clears all subscribed events.
 */
export declare const cancelAllSubscriptions: () => void;
