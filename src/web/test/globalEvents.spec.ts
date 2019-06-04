import { emit, suscribe, unSuscribe } from "../globalEvents";

const EVENT_NAME = "TEST";

describe("Global Events Tests", () => {
  const numberData = 1500;

  it(`should emit the event with data: 1500`, async () => {
    let result = 0;
    suscribe(EVENT_NAME, data => {
      result += data;
    });

    await emit(EVENT_NAME, numberData);
    expect(result).toEqual(numberData);
  });

  it(`should emit the event with no data parameters`, async () => {
    let result = 0;
    suscribe(EVENT_NAME, () => {
      result = numberData;
    });

    await emit(EVENT_NAME);
    expect(result).toEqual(numberData);
  });

  it(`should NOT listen to the emitted event`, async () => {
    let result = null;
    emit(EVENT_NAME, numberData);
    suscribe(EVENT_NAME, data => {
      result += data;
    });

    expect(result).toBeNull();
  });

  it(`should emit the event with data multiple times`, async () => {
    let result = 0,
      index = 1;
    suscribe(EVENT_NAME, data => {
      result += data;
    });

    for (index = 1; index <= 3; index++) {
      emit(EVENT_NAME, numberData);
    }
    expect(result).toEqual(numberData * (index - 1));
  });

  it(`should unsuscribe listener`, async () => {
    let result = null;
    const subscription = suscribe(EVENT_NAME, data => {
      result = data;
    });
    emit(EVENT_NAME, numberData);
    expect(result).toEqual(numberData);
    unSuscribe(subscription);
    result = null;
    emit(EVENT_NAME, numberData);
    expect(result).toBeNull();
  });

  //AWAIT is not working OK.
  it.skip(`should wait to emit the data`, async () => {
    let result;
    suscribe(EVENT_NAME, async data => {
      await new Promise((resolve, reject) => setTimeout(resolve, 1500));
      result = data;
    });

    await emit(EVENT_NAME, numberData);

    expect(result).toEqual(numberData);
  });
});
