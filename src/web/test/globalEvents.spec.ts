import {
  publish,
  subscribe,
  unSubscribe,
  unSubscribeAll
} from "../globalEvents";
import waitForExpect from "wait-for-expect";

const TOPIC_NAME = "TEST";

describe("Global Events Tests", () => {
  beforeEach(() => {
    unSubscribeAll();
  });
  const numberData = 1500;

  it(`should publish the message with data`, async () => {
    let result = 0;
    subscribe(TOPIC_NAME, data => {
      result += data;
    });

    publish(TOPIC_NAME, numberData);
    await waitForExpect(() => expect(result).toEqual(numberData));
  });

  it(`should publish the message with no data parameters`, async () => {
    let result = 0;
    subscribe(TOPIC_NAME, () => {
      result = numberData;
    });

    publish(TOPIC_NAME);
    await waitForExpect(() => expect(result).toEqual(numberData));
  });

  it(`should NOT listen to the emitted event`, async () => {
    let result = null;
    publish(TOPIC_NAME, numberData);
    subscribe(TOPIC_NAME, data => {
      result += data;
    });

    await waitForExpect(() => expect(result).toBeNull());
  });

  it(`should emit the event with data multiple times`, async () => {
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

  it(`should unsubscribe listener`, async () => {
    let result = null;
    const subscription = subscribe(TOPIC_NAME, data => {
      result = data;
    });
    publish(TOPIC_NAME, numberData);
    await waitForExpect(() => expect(result).toEqual(numberData));
    unSubscribe(subscription);
    result = null;
    publish(TOPIC_NAME, numberData);
    await waitForExpect(() => expect(result).toBeNull());
  });
});
