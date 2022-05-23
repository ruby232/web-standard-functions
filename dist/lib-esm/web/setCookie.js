import { addDays } from "../date/addDays";
import { getCookie } from "./getCookie";
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
export var setCookie = function (name, value, path, expiration, domain, secure) {
    path = path ? ";path=" + path + ";" : "";
    expiration = expiration || addDays(new Date(), 1);
    document.cookie = name + "=" + escape(value) + ";expires=" + expiration.toUTCString() + path;
    return getCookie(name) === value ? 1 : 0;
};
//# sourceMappingURL=setCookie.js.map