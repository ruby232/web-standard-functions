/**
 * Assigns a value depending on the evaluation of an expression. IIf is an abbreviation for Immediate if.
 * @param {boolean} condition Condition to be evaluated
 * @param {any} valueIfTrue Return value if the condition evaluates to true
 * @param {any} valueIfFalse Return value if the condition evaluates to false
 * @return any Either valueIfTrue or valueIfFalse depending on the condition
 */
export var iif = function (condition, valueIfTrue, valueIfFalse) {
    return condition ? valueIfTrue : valueIfFalse;
};
//# sourceMappingURL=iif.js.map