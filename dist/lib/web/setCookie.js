"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCookie = void 0;
var addDays_1 = require("../date/addDays");
var getCookie_1 = require("./getCookie");
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
exports.setCookie = function(name, value, path, expiration, domain, secure) {
  path = path ? ";path=" + path + ";" : "";
  expiration = expiration || addDays_1.addDays(new Date(), 1);
  document.cookie =
    name + "=" + escape(value) + ";expires=" + expiration.toUTCString() + path;
  return getCookie_1.getCookie(name) === value ? 1 : 0;
};
//# sourceMappingURL=setCookie.js.map
