import { publishCall } from "../../../misc/publishCall";
/**
 * Makes a target visible. For example, ShowTarget(&quot;Left&quot;) opens the Drawer in an app with Slide Navigation.
 * @param {string} targetName
 */
export var showTarget = function (targetName) {
    var resolver = function (opt, val, resolve) {
        return resolve();
    };
    return publishCall("showTarget", ["ok"], resolver, targetName);
};
/**
 * Hides a target.
 * @param {string} targetName
 */
export var hideTarget = function (targetName) {
    var resolver = function (opt, val, resolve) {
        return resolve();
    };
    return publishCall("hideTarget", ["ok"], resolver, targetName);
};
/**
 * Expands a target.
 * @param {string} targetName
 */
export var expandTarget = function (targetName) {
    var resolver = function (opt, val, resolve) {
        return resolve();
    };
    return publishCall("expandTarget", ["ok"], resolver, targetName);
};
/**
 * Collapses a target.
 * @param {string} targetName
 */
export var collapseTarget = function (targetName) {
    var resolver = function (opt, val, resolve) {
        return resolve();
    };
    return publishCall("collapseTarget", ["ok"], resolver, targetName);
};
//# sourceMappingURL=navigation.js.map