import EventEmitter from "../eventEmitter";

const emitter = new EventEmitter();
const EVENT_NAME = "TEST";

describe("Event Emitter Tests", () => {
  const numberData = 5000;

  it(`should emit the event with data: 5000`, async () => {
    let result;
    emitter.suscribe(EVENT_NAME, data => {
      result = data;
    });

    emitter.emit(EVENT_NAME, numberData);

    expect(result).toEqual(numberData);
  });

  it(`should emit the event with multiple data parameters`, async () => {
    let result;
    emitter.suscribe(EVENT_NAME, (data1, data2, data3, data4) => {
      result = data1 + data2 + data3 + data4;
    });

    emitter.emit(EVENT_NAME, numberData, numberData, numberData, numberData);

    expect(result).toEqual(numberData * 4);
  });

  it(`should NOT listen to the emitted event`, async () => {
    let result = null;
    emitter.emit(EVENT_NAME, numberData);
    emitter.suscribe(EVENT_NAME, data => {
      result = data;
    });

    expect(result).toBeNull();
  });

  it(`should emit the event with data multiple times`, async () => {
    let result = 0,
      index = 1;
    emitter.suscribe(EVENT_NAME, data => {
      result += data;
    });

    for (index = 1; index <= 3; index++) {
      emitter.emit(EVENT_NAME, numberData);
    }
    expect(result).toEqual(numberData * (index - 1));
  });

  it(`should NOT listen to the emitted event after disposed`, async () => {
    let result = null;
    emitter.suscribe(EVENT_NAME, data => {
      result = data;
    });
    emitter.emit(EVENT_NAME, numberData);
    expect(result).toEqual(numberData);
    emitter.dispose();
    result = null;
    emitter.emit(EVENT_NAME, numberData);
    expect(result).toBeNull();
  });

  it(`should unsuscribe listener`, async () => {
    let result = null;
    const subscription = emitter.suscribe(EVENT_NAME, data => {
      result = data;
    });
    emitter.emit(EVENT_NAME, numberData);
    expect(result).toEqual(numberData);
    emitter.unSuscribe(subscription);
    result = null;
    emitter.emit(EVENT_NAME, numberData);
    expect(result).toBeNull();
  });

  //AWAIT is not working OK.
  it.skip(`should wait to emit the data`, async () => {
    let result;
    emitter.suscribe(EVENT_NAME, async data => {
      await new Promise((resolve, reject) => setTimeout(resolve, 1500));
      result = data;
    });

    await emitter.emit(EVENT_NAME, numberData);

    expect(result).toEqual(numberData);
  });
});
