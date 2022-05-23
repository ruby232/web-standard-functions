"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = void 0;
var common_1 = require("./common");
/**
 * Deletes the stored value for the given key. If the key does not exist, the method has no effect.
 * @param {string} key
 */
function remove(key) {
    if (!common_1.storage) {
        return;
    }
    var pKey = common_1.prefixKey(key);
    common_1.storage.removeItem(pKey);
}
exports.remove = remove;
//# sourceMappingURL=remove.js.map