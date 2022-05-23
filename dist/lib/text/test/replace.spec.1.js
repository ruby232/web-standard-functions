"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var replace_1 = require("../replace");
var replace_cases_1 = require("./replace-cases");
describe("replace operation", function () {
    var _loop_1 = function (t) {
        it("replace in \"" + t[0] + "\" of \"" + t[1] + "\" by \"\"" + t[2] + "\" to equal \"" + t[3] + "\"", function () {
            expect(replace_1.replace(t[0], t[1], t[2])).toBe(t[3]);
        });
    };
    for (var _i = 0, testCases_1 = replace_cases_1.testCases; _i < testCases_1.length; _i++) {
        var t = testCases_1[_i];
        _loop_1(t);
    }
});
//# sourceMappingURL=replace.spec.1.js.map