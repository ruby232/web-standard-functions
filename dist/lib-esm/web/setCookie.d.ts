/**
 * Sets a cookie
 * @param {string} name
 * @param {string} value
 * @param {string} path
 * @param {Date} expiration
 * @param {string} domain
 * @param {number} secure
 * @return number
 */
export declare const setCookie: (name: string, value: string, path?: string, expiration?: Date, domain?: string, secure?: number) => number;
