export declare class ConfigurationState {
    private static instance;
    static getInstance(): ConfigurationState;
    private constructor();
    /**
     * Loads settings from a JSON object
     * @param appSettings The JSON object containing the settings to load
     */
    static loadApplicationSettings(appSettings: {
        [key: string]: any;
    }): void;
    /**
     * Loads properties from the environment
     */
    loadProperties(props: {
        [key: string]: string;
    }): void;
    /**
     * Returns the name of the currently active Language object
     */
    getLanguage(): string;
    /**
     * Sets the language to display literals in your application
     * @param lang The language to set
     * @returns 0 if the language can be set, a value greater than 0 if it cannot be set
     */
    setLanguage(lang: string): number;
    private supportedLanguages;
    /**
     * Returns generic property value as String
     */
    getProperty(pty: string): string;
    /**
     * Sets a generic property
     * @param ptyName
     * @param ptyValue
     */
    setProperty(ptyName: string, ptyValue: string): void;
    private getStoredValueWithKey;
    private setStoredValueWithKey;
    private storageKey;
    private getStoredValue;
    private setStoredValue;
    private storageDynamicKey;
    getDynStoredValue(key: string): string;
    setDynStoredValue(key: string, value: string): void;
}
