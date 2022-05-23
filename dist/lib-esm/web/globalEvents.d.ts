import EventSubscription from "../pubSub/pubSubscription";
/**
 * Subscribe to topic name. Automatically gets notified when someone publish to the topic name.
 * @param topicName The topic name to be subscribed.
 * @param handler The function to be called when someone publish to the topic name.
 * @return Returns Subscription object
 */
export declare function subscribe(name: string, handler: Function): EventSubscription;
/**
 * Cancel a specific subscription.
 * @param suscription The suscription object
 */
export declare function unSubscribe(suscription: EventSubscription): void;
/**
 * Cancel all subscriptions
 */
export declare function unSubscribeAll(): void;
/**
 * Asynchronously publishes the message, passing the data to it's subscribers
 * @param topicName The topic name to publish the data
 * @param data  The data to pass to subscribers
 * @return Returns true if there are subscribers to the topic
 */
export declare function publish(topicName: string, ...data: any): boolean;
