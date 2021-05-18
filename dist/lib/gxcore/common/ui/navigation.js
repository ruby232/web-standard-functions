"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collapseTarget = exports.expandTarget = exports.hideTarget = exports.showTarget = void 0;
var publishCall_1 = require("../../../misc/publishCall");
/**
 * Makes a target visible. For example, ShowTarget(&quot;Left&quot;) opens the Drawer in an app with Slide Navigation.
 * @param {string} targetName
 */
exports.showTarget = function(targetName) {
  var resolver = function(opt, val, resolve) {
    return resolve();
  };
  return publishCall_1.publishCall("showTarget", ["ok"], resolver, targetName);
};
/**
 * Hides a target.
 * @param {string} targetName
 */
exports.hideTarget = function(targetName) {
  var resolver = function(opt, val, resolve) {
    return resolve();
  };
  return publishCall_1.publishCall("hideTarget", ["ok"], resolver, targetName);
};
/**
 * Expands a target.
 * @param {string} targetName
 */
exports.expandTarget = function(targetName) {
  var resolver = function(opt, val, resolve) {
    return resolve();
  };
  return publishCall_1.publishCall(
    "expandTarget",
    ["ok"],
    resolver,
    targetName
  );
};
/**
 * Collapses a target.
 * @param {string} targetName
 */
exports.collapseTarget = function(targetName) {
  var resolver = function(opt, val, resolve) {
    return resolve();
  };
  return publishCall_1.publishCall(
    "collapseTarget",
    ["ok"],
    resolver,
    targetName
  );
};
//# sourceMappingURL=navigation.js.map
