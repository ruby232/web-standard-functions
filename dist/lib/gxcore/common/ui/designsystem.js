"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearOption = exports.setOption = exports.getOptions = exports.getOption = void 0;
var publishCall_1 = require("../../../misc/publishCall");
/**
 * Get the value of the DesignSystem option.
 * @param {string} name
 * @return {string}
 */
var getOption = function (name) {
    return document.documentElement.getAttribute("data-gx-ds-opt-" + name) || "";
};
exports.getOption = getOption;
/**
 * Get list of DesignSystem options.
 * @return {name: string, value: string}[]
 */
var getOptions = function () {
    var attrs = document.documentElement.attributes;
    var list = [];
    for (var i = attrs.length - 1; i >= 0; i--) {
        if (attrs[i].name.startsWith("data-gx-ds-opt-")) {
            list.push({ name: attrs[i].name.slice(15), value: attrs[i].value });
        }
    }
    return list;
};
exports.getOptions = getOptions;
/**
 * Set the value of the DesignSystem option.
 * @param {string} name
 * @param {string} value
 */
var setOption = function (name, value) {
    document.documentElement.setAttribute("data-gx-ds-opt-" + name, value);
    var resolver = function (opt, val, resolve) {
        return resolve();
    };
    return publishCall_1.publishCall("dsSetOption", ["ok"], resolver, name, value);
};
exports.setOption = setOption;
/**
 * Remove the value of the DesignSystem option.
 * @param {string} name
 */
var clearOption = function (name) {
    document.documentElement.removeAttribute("data-gx-ds-opt-" + name);
    var resolver = function (opt, val, resolve) {
        return resolve();
    };
    return publishCall_1.publishCall("dsSetOption", ["ok"], resolver, name, null);
};
exports.clearOption = clearOption;
//# sourceMappingURL=designsystem.js.map