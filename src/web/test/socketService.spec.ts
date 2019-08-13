import { Socket } from "../socketService";
import { subscribe, cancelSubscription } from "../../pubSub/pubSub";
import waitForExpect from "wait-for-expect";
import * as log from "loglevel";
import { WS as WSServer } from "jest-websocket-mock";

waitForExpect.defaults.timeout = 3000;
waitForExpect.defaults.interval = 50;

const SOCKET_TEST_SERVER = "ws://localhost:1234";
const server = new WSServer(SOCKET_TEST_SERVER);

describe("WebSocket Tests", () => {
  beforeEach(() => {
    log.setDefaultLevel(log.levels.SILENT);
  });

  it(`Opens a Socket connection`, async () => {
    const doWork = jest.fn();
    let socket = new Socket(SOCKET_TEST_SERVER);
    subscribe(`${socket.url}.socket.connected`, () => {
      doWork();
    });
    socket.open();
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(1));
    socket.close();
  });

  it(`Send websocket data`, async () => {
    const doWork = jest.fn();
    let socket = new Socket(SOCKET_TEST_SERVER);
    const sendMessage = "test-socket-service";
    await socket.open();
    socket.send(sendMessage);
    await expect(server).toReceiveMessage(sendMessage);
    socket.close();
  });

  it(`Receive websocket data`, async () => {
    const doWork = jest.fn();
    let socket = new Socket(SOCKET_TEST_SERVER);
    const sendMessage = "test-socket-service";
    subscribe(`${socket.url}.socket.messagereceived`, (data: string) => {
      if (data.indexOf(sendMessage) >= 0) {
        doWork();
      }
    });
    await socket.open();
    server.send(sendMessage);
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(1));
    socket.close();
  });

  it(`Send and receive multiple websocket data`, async () => {
    let doWork = jest.fn();
    let sendMessage = "test.1";
    let socket = new Socket(SOCKET_TEST_SERVER);
    subscribe(`${socket.url}.socket.messagereceived`, (data: string) => {
      doWork();
    });
    await socket.open();
    const qty = 10;
    for (var i = 0; i < qty; i++) {
      sendMessage = "test";
      socket.send(sendMessage);
      await expect(server).toReceiveMessage(sendMessage);
      server.send(sendMessage);
    }
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(qty));
    socket.close();
  });

  it(`Send websocket data (without websocket open await)`, async () => {
    let doWork = jest.fn();
    let sendMessage = "test.1";
    let socket = new Socket(SOCKET_TEST_SERVER);
    socket.open();
    socket.send(sendMessage);
    await expect(server).toReceiveMessage(sendMessage);
    socket.close();
  });

  it(`Fails to open a websocket connection`, async () => {
    const doWork = jest.fn();
    const url = "wss://doesnotexistswebsocket-error.com";
    subscribe(`${url}.socket.connectionfailed`, (ev: Event) => {
      doWork();
    });
    let socket = new Socket(url);
    socket.open();
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(1));
    socket.close();
  });
});
