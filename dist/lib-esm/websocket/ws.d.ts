export declare class Options {
    autoReconnect: boolean;
    autoReconnectInterval: number;
    maxReconnectAttempts: number;
}
export declare class WS {
    private logger;
    private options;
    private url;
    private websocket;
    private currentReconnectAttempts;
    /**
     * Connects to a WebSocket Server endpoint using the URL specified.
     * @param {string} url WebSocket server URL.
     * @param {Options} options Connection options (optional).
     */
    open(url: string, options?: Options): Promise<void>;
    /**
     * Closes the websocket connection.
     * @param {number} code Error code for closed connection (optional)
     * @param {string} reason Reason description for closed connection (optional)
     */
    close(code?: number, reason?: string): void;
    /**
     * Send the data to WebSocket Server currently connected.
     * @param {any} data Message data.
     */
    send(data: any): boolean;
    onClose: ((this: WS, ev: CloseEvent) => any) | null;
    onError: ((this: WS, ev: Event) => any) | null;
    onMessage: ((this: WS, ev: MessageEvent) => any) | null;
    onOpen: ((this: WS, ev: Event) => any) | null;
    private openImpl;
    private supported;
    private reconnect;
}
