/**
 * Test a string against regexp
 * @param {string} target
 * @param {string} regExp
 * @return boolean
 */
export var isMatch = function (target, regExp) {
    var rex = typeof regExp === "string" ? new RegExp(regExp) : regExp;
    return rex.exec(target) !== null;
};
//# sourceMappingURL=isMatch.js.map