"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prefixKey = exports.storage = exports.keyPrefix = void 0;
exports.keyPrefix = "gx.client.clientstorage";
var storage_1 = require("../../../common/storage");
Object.defineProperty(exports, "storage", { enumerable: true, get: function () { return storage_1.storage; } });
function prefixKey(key) {
    return exports.keyPrefix + "." + key;
}
exports.prefixKey = prefixKey;
//# sourceMappingURL=common.js.map