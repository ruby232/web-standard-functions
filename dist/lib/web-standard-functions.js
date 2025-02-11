"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core_iif = exports.Core_str = exports.Core_dtoC = exports.Core_ttoC = exports.Text_toString = exports.Numeric_toString = exports.DateTime_toString = exports.Date_toString = exports.Boolean_toString = exports.Character_isEmpty = exports.LongVarchar_isEmpty = exports.Varchar_isEmpty = exports.Text_isEmpty = exports.Numeric_isEmpty = exports.Misc_isEmpty = exports.DateTime_isEmpty = exports.Date_isEmpty = exports.Boolean_isEmpty = exports.Core_yMDHMStoT = exports.Core_yMDtoD = exports.Core_ctoT = exports.Core_ctoD = exports.DateTime_fromString = exports.Date_fromString = void 0;
__exportStar(require("./gxcore/client/client-information"), exports);
__exportStar(require("./types/gauge"), exports);
__exportStar(require("./types/geography"), exports);
__exportStar(require("./misc/setLanguage"), exports);
__exportStar(require("./misc/msg"), exports);
__exportStar(require("./types/guid"), exports);
__exportStar(require("./text/format"), exports);
__exportStar(require("./text/trim"), exports);
__exportStar(require("./text/indexOf"), exports);
__exportStar(require("./text/lastIndexOf"), exports);
__exportStar(require("./text/padLeft"), exports);
__exportStar(require("./text/padRight"), exports);
__exportStar(require("./text/subString"), exports);
__exportStar(require("./text/rTrim"), exports);
__exportStar(require("./text/lTrim"), exports);
__exportStar(require("./text/toUpper"), exports);
__exportStar(require("./text/toLower"), exports);
__exportStar(require("./text/toNumeric"), exports);
__exportStar(require("./text/newline"), exports);
__exportStar(require("./text/replace"), exports);
__exportStar(require("./text/length"), exports);
__exportStar(require("./text/concat"), exports);
__exportStar(require("./text/isMatch"), exports);
__exportStar(require("./text/startsWith"), exports);
__exportStar(require("./text/endsWith"), exports);
__exportStar(require("./text/contains"), exports);
__exportStar(require("./text/charAt"), exports);
__exportStar(require("./text/removeDiacritics"), exports);
__exportStar(require("./date/addYears"), exports);
__exportStar(require("./datetime/hour"), exports);
__exportStar(require("./gxcore/common/log"), exports);
__exportStar(require("./gxcore/common/geolocation"), exports);
__exportStar(require("./pubSub/pubSubscription"), exports);
__exportStar(require("./misc/publishCall"), exports);
__exportStar(require("./web/globalEvents"), exports);
__exportStar(require("./date/day"), exports);
__exportStar(require("./date/month"), exports);
__exportStar(require("./date/year"), exports);
__exportStar(require("./date/endOfMonth"), exports);
__exportStar(require("./date/dayOfWeek"), exports);
__exportStar(require("./date/addYears"), exports);
__exportStar(require("./date/addMonths"), exports);
__exportStar(require("./date/age"), exports);
__exportStar(require("./date/age"), exports);
__exportStar(require("./date/monthName"), exports);
__exportStar(require("./date/addDays"), exports);
__exportStar(require("./numeric/integer"), exports);
__exportStar(require("./numeric/round"), exports);
__exportStar(require("./numeric/roundToEven"), exports);
__exportStar(require("./numeric/integer"), exports);
__exportStar(require("./numeric/truncate"), exports);
__exportStar(require("./numeric/toFormattedString"), exports);
__exportStar(require("./math/mod"), exports);
__exportStar(require("./datetime/hour"), exports);
__exportStar(require("./datetime/minute"), exports);
__exportStar(require("./datetime/second"), exports);
__exportStar(require("./datetime/addSeconds"), exports);
__exportStar(require("./datetime/difference"), exports);
__exportStar(require("./datetime/addHours"), exports);
__exportStar(require("./datetime/addMinutes"), exports);
__exportStar(require("./datetime/toDate"), exports);
var fromString_1 = require("./date/fromString");
Object.defineProperty(exports, "Date_fromString", { enumerable: true, get: function () { return fromString_1.fromString; } });
var fromString_2 = require("./datetime/fromString");
Object.defineProperty(exports, "DateTime_fromString", { enumerable: true, get: function () { return fromString_2.fromString; } });
var CtoD_1 = require("./date/CtoD");
Object.defineProperty(exports, "Core_ctoD", { enumerable: true, get: function () { return CtoD_1.fromString; } });
var CtoT_1 = require("./datetime/CtoT");
Object.defineProperty(exports, "Core_ctoT", { enumerable: true, get: function () { return CtoT_1.fromString; } });
var newInstance_1 = require("./date/newInstance");
Object.defineProperty(exports, "Core_yMDtoD", { enumerable: true, get: function () { return newInstance_1.newInstance; } });
var newInstance_2 = require("./datetime/newInstance");
Object.defineProperty(exports, "Core_yMDHMStoT", { enumerable: true, get: function () { return newInstance_2.newInstance; } });
var isEmpty_1 = require("./bool/isEmpty");
Object.defineProperty(exports, "Boolean_isEmpty", { enumerable: true, get: function () { return isEmpty_1.isEmpty; } });
var isEmpty_2 = require("./date/isEmpty");
Object.defineProperty(exports, "Date_isEmpty", { enumerable: true, get: function () { return isEmpty_2.isEmpty; } });
var isEmpty_3 = require("./date/isEmpty");
Object.defineProperty(exports, "DateTime_isEmpty", { enumerable: true, get: function () { return isEmpty_3.isEmpty; } });
var isEmpty_4 = require("./misc/isEmpty");
Object.defineProperty(exports, "Misc_isEmpty", { enumerable: true, get: function () { return isEmpty_4.isEmpty; } });
var isEmpty_5 = require("./numeric/isEmpty");
Object.defineProperty(exports, "Numeric_isEmpty", { enumerable: true, get: function () { return isEmpty_5.isEmpty; } });
var isEmpty_6 = require("./text/isEmpty");
Object.defineProperty(exports, "Text_isEmpty", { enumerable: true, get: function () { return isEmpty_6.isEmpty; } });
var isEmpty_7 = require("./text/isEmpty");
Object.defineProperty(exports, "Varchar_isEmpty", { enumerable: true, get: function () { return isEmpty_7.isEmpty; } });
var isEmpty_8 = require("./text/isEmpty");
Object.defineProperty(exports, "LongVarchar_isEmpty", { enumerable: true, get: function () { return isEmpty_8.isEmpty; } });
var isEmpty_9 = require("./text/isEmpty");
Object.defineProperty(exports, "Character_isEmpty", { enumerable: true, get: function () { return isEmpty_9.isEmpty; } });
var toString_1 = require("./bool/toString");
Object.defineProperty(exports, "Boolean_toString", { enumerable: true, get: function () { return toString_1.toString; } });
var toString_2 = require("./date/toString");
Object.defineProperty(exports, "Date_toString", { enumerable: true, get: function () { return toString_2.toString; } });
var toString_3 = require("./datetime/toString");
Object.defineProperty(exports, "DateTime_toString", { enumerable: true, get: function () { return toString_3.toString; } });
var toString_4 = require("./numeric/toString");
Object.defineProperty(exports, "Numeric_toString", { enumerable: true, get: function () { return toString_4.toString; } });
var toString_5 = require("./text/toString");
Object.defineProperty(exports, "Text_toString", { enumerable: true, get: function () { return toString_5.toString; } });
var toString_6 = require("./datetime/toString");
Object.defineProperty(exports, "Core_ttoC", { enumerable: true, get: function () { return toString_6.toString; } });
var toString_7 = require("./date/toString");
Object.defineProperty(exports, "Core_dtoC", { enumerable: true, get: function () { return toString_7.toString; } });
var str_1 = require("./numeric/str");
Object.defineProperty(exports, "Core_str", { enumerable: true, get: function () { return str_1.str; } });
var iif_1 = require("./misc/iif");
Object.defineProperty(exports, "Core_iif", { enumerable: true, get: function () { return iif_1.iif; } });
//# sourceMappingURL=web-standard-functions.js.map