import { prefixKey, storage } from "./common";
/**
 * Gets the stored value for the given key. If the key does not exist, it returns an empty string.
 * @param {string} key
 * @return {string}
 */
export function get(key) {
    var pKey = prefixKey(key);
    var value = storage === null || storage === void 0 ? void 0 : storage.getItem(pKey);
    return value || "";
}
//# sourceMappingURL=get.js.map