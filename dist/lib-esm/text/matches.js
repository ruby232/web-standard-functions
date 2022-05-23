/**
 * Return matches against regexp
 * @param {string} target
 * @param {string} regExp
 * @return Array
 */
export var matches = function (target, rex) {
    return new RegExp(rex).exec(target) || [];
};
//# sourceMappingURL=matches.js.map