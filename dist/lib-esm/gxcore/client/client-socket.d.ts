export declare enum SocketStatus {
    Disconnected = 0,
    Connected = 1
}
export declare class GeneXusClientSocket {
    static url: string;
    static status: SocketStatus;
    private static socketService;
    /**
     * Connects to a Socket Server endpoint using the URL specified in the 'url' property
     * New messages will be published to '{url}.socket.messagereceived' event.
     * New opened connections will be published to '{url}.socket.connected' event.
     * Failed connections will be published to '{url}.socket.connectionfailed' event.
     * Closed connections will be published to '{url}.socket.connectionclosed' event.
     */
    static open(url?: string): Promise<void>;
    /**
     * Closes the socket connection.
     */
    static close(): void;
    /**
     * Sends the data to the currently connected Socket Server.
     * @param {any} data The data to send.
     */
    static send(data: any): Promise<void>;
}
