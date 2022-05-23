"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = void 0;
var common_1 = require("./common");
/**
 * Clears all pairs of key-values stored in the device
 */
function clear() {
    if (!common_1.storage) {
        return;
    }
    for (var i = common_1.storage.length - 1; i >= 0; i--) {
        var key = common_1.storage.key(i);
        if (key.startsWith(common_1.keyPrefix)) {
            common_1.storage.removeItem(key);
        }
    }
}
exports.clear = clear;
//# sourceMappingURL=clear.js.map