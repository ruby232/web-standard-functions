import { publishCall } from "../../../misc/publishCall";
/**
 * Get the value of the DesignSystem option.
 * @param {string} name
 * @return {string}
 */
export var getOption = function (name) {
    return document.documentElement.getAttribute("data-gx-ds-opt-" + name) || "";
};
/**
 * Get list of DesignSystem options.
 * @return {name: string, value: string}[]
 */
export var getOptions = function () {
    var attrs = document.documentElement.attributes;
    var list = [];
    for (var i = attrs.length - 1; i >= 0; i--) {
        if (attrs[i].name.startsWith("data-gx-ds-opt-")) {
            list.push({ name: attrs[i].name.slice(15), value: attrs[i].value });
        }
    }
    return list;
};
/**
 * Set the value of the DesignSystem option.
 * @param {string} name
 * @param {string} value
 */
export var setOption = function (name, value) {
    document.documentElement.setAttribute("data-gx-ds-opt-" + name, value);
    var resolver = function (opt, val, resolve) {
        return resolve();
    };
    return publishCall("dsSetOption", ["ok"], resolver, name, value);
};
/**
 * Remove the value of the DesignSystem option.
 * @param {string} name
 */
export var clearOption = function (name) {
    document.documentElement.removeAttribute("data-gx-ds-opt-" + name);
    var resolver = function (opt, val, resolve) {
        return resolve();
    };
    return publishCall("dsSetOption", ["ok"], resolver, name, null);
};
//# sourceMappingURL=designsystem.js.map