import {
  publish,
  subscribe,
  cancelAllSubscriptions,
  cancelSubscription,
  cancelTopic
} from "../pubSub";
import waitForExpect from "wait-for-expect";
import PubSubscriptionOptions from "../pubSubscribeOptions";

waitForExpect.defaults.timeout = 500;
waitForExpect.defaults.interval = 10;

const TOPIC_NAME = "TEST";

describe("Event Emitter Tests", () => {
  beforeEach(() => {
    cancelAllSubscriptions();
  });

  const numberData = 5000;
  it(`should publish the message`, async () => {
    let result;
    subscribe(TOPIC_NAME, data => {
      result = data;
    });

    publish(TOPIC_NAME, numberData);
    await waitForExpect(() => expect(result).toEqual(numberData));
  });

  it(`should publish the message with multiple data parameters`, async () => {
    let result;
    subscribe(TOPIC_NAME, (data1, data2, data3, data4) => {
      result = data1 + data2 + data3 + data4;
    });

    publish(TOPIC_NAME, numberData, numberData, numberData, numberData);

    await waitForExpect(() => expect(result).toEqual(numberData * 4));
  });

  it(`should NOT listen to the published message`, async () => {
    let result = null;
    publish(TOPIC_NAME, numberData);
    subscribe(TOPIC_NAME, data => {
      result = data;
    });

    await waitForExpect(() => expect(result).toBeNull());
  });

  it(`should publish the message multiple times`, async () => {
    let result = 0,
      index = 1;
    subscribe(TOPIC_NAME, data => {
      result += data;
    });

    for (index = 1; index <= 3; index++) {
      publish(TOPIC_NAME, numberData);
    }
    await waitForExpect(() => expect(result).toEqual(numberData * (index - 1)));
  });

  it(`should subscribe only once`, async () => {
    let result = 0,
      index = 1;
    subscribe(
      TOPIC_NAME,
      data => {
        result += data;
      },
      new PubSubscriptionOptions({ once: true })
    );

    for (index = 1; index <= 5; index++) {
      publish(TOPIC_NAME, numberData);
    }
    await waitForExpect(() => expect(result).toEqual(numberData));
  });

  it(`should cancel all previous subscriptions`, async () => {
    let result = null;
    subscribe(TOPIC_NAME, data => {
      result = data;
    });
    publish(TOPIC_NAME, numberData);
    await waitForExpect(() => expect(result).toEqual(numberData));
    cancelAllSubscriptions();
    result = null;
    publish(TOPIC_NAME, numberData);
    await waitForExpect(() => expect(result).toBeNull());
  });

  it(`should cancel subscription`, async () => {
    let result = null;
    const subscription = subscribe(TOPIC_NAME, data => {
      result = data;
    });
    publish(TOPIC_NAME, numberData);
    await waitForExpect(() => expect(result).toEqual(numberData));
    cancelSubscription(subscription);
    result = null;
    publish(TOPIC_NAME, numberData);
    await waitForExpect(() => expect(result).toBeNull());
  });

  it(`should cancel a topic`, async () => {
    let result = null;
    const subscription = subscribe(TOPIC_NAME, data => {
      result = data;
    });
    publish(TOPIC_NAME, numberData);
    await waitForExpect(() => expect(result).toEqual(numberData));
    cancelTopic(TOPIC_NAME);
    result = null;
    publish(TOPIC_NAME, numberData);
    await waitForExpect(() => expect(result).toBeNull());
  });
});
