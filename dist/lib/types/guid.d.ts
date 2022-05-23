export declare class GUID {
    private value;
    private static emptyValue;
    private static emptyGUID;
    private constructor();
    private normalizeValue;
    /**
     * Returns true if the GUID is the emtpy GUID
     * @returns boolean
     */
    isEmpty(): boolean;
    /**
     * Sets the given string as the GUID's value
     * @param {string} str The new GUID's value
     */
    fromString(str: string): void;
    /**
     * Returns the string representation of the GUID object
     * @param {string} format The desired format of the output string
     * @returns {string} The string representation of the GUID
     */
    toString(format?: string): string;
    /**
     * Returns the empty GUID
     * @returns {GUID} The empty GUID
     */
    static empty(): GUID;
    /**
     * Creates a new GUID object from the given string
     * @param {string} str The string representing the GUID object to be created
     * @returns {GUID} The GUID object with representing the given string
     */
    static fromString(str: string): GUID;
    /**
     * Creates a new GUID object with a randomly-generated value
     * @returns {GUID} The newly created GUID object
     */
    static newGuid(): GUID;
}
