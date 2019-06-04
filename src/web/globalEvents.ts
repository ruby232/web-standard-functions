import EventEmitter from "../observable/eventEmitter";
import EventSubscription from "../observable/eventSubscription";

const emitter = new EventEmitter();
const subscriptions = new Array<any>();

/**
 * Starts listening to custom event name. Automatically gets notified when someone emits the event name.
 * Returns Subscription object
 * @param name The event name to be subscribed.
 * @param handler The function to be called when someone emits the event name.
 */
export function suscribe(name: string, handler: Function): EventSubscription {
  const s: EventSubscription = emitter.suscribe(name, handler);
  subscriptions.push(s);
  return s;
}

/**
 * Stops listening to Subscription
 * @param suscription The suscription object
 */
export function unSuscribe(s: EventSubscription) {
  emitter.unSuscribe(s);
}

/**
 * Emits the data to all suscribed clients with the event name specified.
 * @param name The event name to emit
 * @param data The data arguments of the event to emit.
 */
export async function emit(name: string, ...data: any) {
  await emitter.emit.apply(emitter, [name].concat(data));
}
