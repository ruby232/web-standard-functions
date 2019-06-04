import { Subscription } from "rxjs";

export default class EventSubscription {
  private subscription: Subscription;

  constructor(s: Subscription) {
    this.subscription = s;
  }

  unsubscribe() {
    this.subscription.unsubscribe();
  }
}
