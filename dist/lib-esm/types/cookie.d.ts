export declare class Cookie {
    /**
     * Cookie name
     */
    private mname;
    get name(): string;
    set name(value: string);
    /**
     * Cookie value
     */
    private mvalue;
    get value(): string;
    set value(value: string);
    /**
     * Path
     */
    private mpath;
    get path(): string;
    set path(value: string);
    /**
     * Expiration date
     */
    private mexpirationDate;
    get expirationDate(): Date;
    set expirationDate(value: Date);
    /**
     * Domain
     */
    private mdomain;
    get domain(): string;
    set domain(value: string);
    /**
     * Secure
     */
    private msecure;
    get secure(): boolean;
    set secure(value: boolean);
    /**
     * HTTP Only
     */
    private mhttpOnly;
    get httpOnly(): boolean;
    set httpOnly(value: boolean);
}
