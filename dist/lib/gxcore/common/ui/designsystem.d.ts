/**
 * Get the value of the DesignSystem option.
 * @param {string} name
 * @return {string}
 */
export declare const getOption: (name: string) => string;
/**
 * Get list of DesignSystem options.
 * @return {name: string, value: string}[]
 */
export declare const getOptions: () => {
    name: string;
    value: string;
}[];
/**
 * Set the value of the DesignSystem option.
 * @param {string} name
 * @param {string} value
 */
export declare const setOption: (name: string, value: string) => Promise<void>;
/**
 * Remove the value of the DesignSystem option.
 * @param {string} name
 */
export declare const clearOption: (name: string) => Promise<void>;
