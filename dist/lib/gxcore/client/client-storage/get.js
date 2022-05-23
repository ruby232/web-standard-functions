"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
var common_1 = require("./common");
/**
 * Gets the stored value for the given key. If the key does not exist, it returns an empty string.
 * @param {string} key
 * @return {string}
 */
function get(key) {
    var pKey = common_1.prefixKey(key);
    var value = common_1.storage === null || common_1.storage === void 0 ? void 0 : common_1.storage.getItem(pKey);
    return value || "";
}
exports.get = get;
//# sourceMappingURL=get.js.map