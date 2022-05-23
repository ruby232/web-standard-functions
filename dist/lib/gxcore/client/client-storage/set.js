"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = void 0;
var common_1 = require("./common");
/**
 * Saves the received value associated with the specified key.
 * If it is applied consecutive times to the same key, its value is the latest assigned
 * @param {string} key
 * @param {string} value
 */
function set(key, value) {
    if (!common_1.storage) {
        return;
    }
    var pKey = common_1.prefixKey(key);
    common_1.storage.setItem(pKey, value);
}
exports.set = set;
//# sourceMappingURL=set.js.map