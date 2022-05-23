"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collapseTarget = exports.expandTarget = exports.hideTarget = exports.showTarget = void 0;
var publishCall_1 = require("../../../misc/publishCall");
/**
 * Makes a target visible. For example, ShowTarget(&quot;Left&quot;) opens the Drawer in an app with Slide Navigation.
 * @param {string} targetName
 */
var showTarget = function (targetName) {
    var resolver = function (opt, val, resolve) {
        return resolve();
    };
    return publishCall_1.publishCall("showTarget", ["ok"], resolver, targetName);
};
exports.showTarget = showTarget;
/**
 * Hides a target.
 * @param {string} targetName
 */
var hideTarget = function (targetName) {
    var resolver = function (opt, val, resolve) {
        return resolve();
    };
    return publishCall_1.publishCall("hideTarget", ["ok"], resolver, targetName);
};
exports.hideTarget = hideTarget;
/**
 * Expands a target.
 * @param {string} targetName
 */
var expandTarget = function (targetName) {
    var resolver = function (opt, val, resolve) {
        return resolve();
    };
    return publishCall_1.publishCall("expandTarget", ["ok"], resolver, targetName);
};
exports.expandTarget = expandTarget;
/**
 * Collapses a target.
 * @param {string} targetName
 */
var collapseTarget = function (targetName) {
    var resolver = function (opt, val, resolve) {
        return resolve();
    };
    return publishCall_1.publishCall("collapseTarget", ["ok"], resolver, targetName);
};
exports.collapseTarget = collapseTarget;
//# sourceMappingURL=navigation.js.map