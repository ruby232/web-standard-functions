export declare class GeneXusSDNetwork {
    /**
     * Returns the application's services URL
     */
    static applicationServerURL(): string;
    /**
     * Returns True if the device can access the specified server; otherwise
     * False.
     * Current implementation returns `navigator.onLine`
     * @param url The URL to check access to, or `undefined` to check
     * connection to the application's server URL
     */
    static isServerAvailable(url?: string): boolean;
    /**
     * Gets the connection type the device has to a specific server.
     * Current implementation returns always `1`, meaning wifi connection.
     * @param url The URL to check the connection type, or `undefined` to check
     * connection to the application's server URL
     */
    static type(url?: string): number;
    /**
     * Returns true or false whether the connection between the device and the
     * server could cause a monetary cost to the device user.
     * Current implementation returns always `false`
     * @param url The URL to check the connection to, or `undefined` to check
     * connection to the application's server URL
     */
    static trafficBasedCost(url?: string): boolean;
    /**
     * It allows to dynamically change the URL of the application.
     * Current implementation does nothing, prints an error to the console.
     * @param url
     */
    static setApplicationServerURL(url: string): void;
}
