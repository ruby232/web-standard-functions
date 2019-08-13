import { WS } from "../websocket/ws";
import { publish } from "../pubSub/pubSub";
import * as log from "loglevel";

class SocketService {
  private logger = log.getLogger("SocketManagerService");
  private static instance: SocketService;
  private connections;

  private constructor() {
    this.connections = {};
  }

  static getInstance() {
    if (!SocketService.instance) {
      SocketService.instance = new SocketService();
    }
    return SocketService.instance;
  }

  public async open(url: string): Promise<void> {
    if (!this.connections[url]) {
      const connection: WS = new WS();
      this.attachHandlers(url, connection);
      return connection
        .open(url)
        .then(c => {
          this.connections[url] = connection;
        })
        .catch(e => {
          this.logger.error("Socket failed to connect", e);
        });
    }
    return Promise.resolve();
  }

  public close(url: string): void {
    const connection = this.connections[url];
    if (connection) {
      delete this.connections[url];
      connection.close();
    }
  }

  public async send(url: string, msg: string): Promise<void> {
    return this.open(url).then(p => {
      this.connections[url].send(msg);
    });
  }

  private attachHandlers(id: string, connection: WS) {
    connection.onOpen = (ev: Event) => {
      publish(`${id}.socket.connected`, ev);
    };
    connection.onClose = (ev: Event) => {
      publish(`${id}.socket.connectionclosed`, ev);
    };
    connection.onError = (ev: Event) => {
      publish(`${id}.socket.connectionfailed`, ev);
    };
    connection.onMessage = (ev: MessageEvent) => {
      publish(`${id}.socket.messagereceived`, ev.data);
    };
  }
}

export enum SocketStatus {
  Connected,
  Disconnected
}

export class Socket {
  public url: string = "";
  public status: SocketStatus = SocketStatus.Disconnected;
  private socketService: SocketService = SocketService.getInstance();

  public constructor(url?: string) {
    this.url = url;
  }

  /**
   * Connects to a Socket Server endpoint using the URL specified in the 'url' property
   * New messages will be published to '{url}.socket.messagereceived' event.
   * New opened connections will be published to '{url}.socket.connected' event.
   * Failed connections will be published to '{url}.socket.connectionfailed' event.
   * Closed connections will be published to '{url}.socket.connectionclosed' event.
   */

  public async open(): Promise<void> {
    await this.socketService.open(this.url);
    this.status = SocketStatus.Connected;
  }

  /**
   * Closes the socket connection.
   */
  public close(): void {
    this.status = SocketStatus.Disconnected;
    this.socketService.close(this.url);
  }

  /**
   * Sends the data to the currently connected Socket Server.
   * @param {any} data The data to send.
   */
  public async send(data: any): Promise<void> {
    return this.socketService.send(this.url, data);
  }
}
