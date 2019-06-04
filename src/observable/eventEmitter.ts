import EventSubscription from "./eventSubscription";
import { Subject } from "rxjs";

const hasOwnProp = {}.hasOwnProperty;

function createName(name) {
  return `$ ${name}`;
}

export default class EventEmitter {
  private subjects = new Array<Subject<any>>();

  /**
   * Emits the data to all suscribed clients with the event name specified.
   * @param name The event name to emit
   * @param data The data arguments of the event to emit.
   */
  async emit(name: string, ...data: any) {
    const fnName = createName(name);
    this.subjects[fnName] || (this.subjects[fnName] = new Subject());
    await this.subjects[fnName].next(data);
  }

  /**
   * Starts listening to custom event name. Automatically gets notified when someone emits the event name.
   * Returns Subscription object
   * @param name The event name to be subscribed.
   * @param handler The function to be called when someone emits the event name.
   */
  suscribe(name: string, handler: Function): EventSubscription {
    const fnName = createName(name);
    this.subjects[fnName] || (this.subjects[fnName] = new Subject());
    const suscribeWrapper = function(handler) {
      return function(data) {
        handler.apply(this, data);
      };
    };
    return new EventSubscription(
      this.subjects[fnName].subscribe(suscribeWrapper(handler))
    );
  }

  /**
   * Stops listening to Subscription
   * @param suscription The suscription object
   */
  unSuscribe(suscription: EventSubscription) {
    suscription.unsubscribe();
  }

  /**
   * Clears all suscribed events.
   */
  dispose() {
    const subjects = this.subjects;
    for (const prop in subjects) {
      if (hasOwnProp.call(subjects, prop)) {
        subjects[prop].unsubscribe();
      }
    }
    this.subjects = new Array<Subject<any>>();
  }
}
