"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __exportStar =
  (this && this.__exportStar) ||
  function (m, exports) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p))
        __createBinding(exports, m, p);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core_str =
  exports.Text_toString =
  exports.Numeric_toString =
  exports.DateTime_toString =
  exports.Date_toString =
  exports.Boolean_toString =
  exports.Character_isEmpty =
  exports.Varchar_isEmpty =
  exports.Text_isEmpty =
  exports.Numeric_isEmpty =
  exports.Misc_isEmpty =
  exports.Date_isEmpty =
  exports.Boolean_isEmpty =
    void 0;
__exportStar(require("./gxcore/client/client-information"), exports);
__exportStar(require("./types/gauge"), exports);
__exportStar(require("./types/geography"), exports);
__exportStar(require("./misc/setLanguage"), exports);
__exportStar(require("./misc/msg"), exports);
__exportStar(require("./types/guid"), exports);
__exportStar(require("./text/format"), exports);
__exportStar(require("./text/trim"), exports);
__exportStar(require("./text/toUpper"), exports);
__exportStar(require("./text/toLower"), exports);
__exportStar(require("./text/toNumeric"), exports);
__exportStar(require("./text/newline"), exports);
__exportStar(require("./text/replace"), exports);
__exportStar(require("./text/length"), exports);
__exportStar(require("./date/addYears"), exports);
__exportStar(require("./datetime/hour"), exports);
__exportStar(require("./gxcore/common/log"), exports);
__exportStar(require("./gxcore/common/geolocation"), exports);
__exportStar(require("./pubSub/pubSubscription"), exports);
__exportStar(require("./misc/publishCall"), exports);
var isEmpty_1 = require("./bool/isEmpty");
Object.defineProperty(exports, "Boolean_isEmpty", {
  enumerable: true,
  get: function () {
    return isEmpty_1.isEmpty;
  },
});
var isEmpty_2 = require("./date/isEmpty");
Object.defineProperty(exports, "Date_isEmpty", {
  enumerable: true,
  get: function () {
    return isEmpty_2.isEmpty;
  },
});
var isEmpty_3 = require("./misc/isEmpty");
Object.defineProperty(exports, "Misc_isEmpty", {
  enumerable: true,
  get: function () {
    return isEmpty_3.isEmpty;
  },
});
var isEmpty_4 = require("./numeric/isEmpty");
Object.defineProperty(exports, "Numeric_isEmpty", {
  enumerable: true,
  get: function () {
    return isEmpty_4.isEmpty;
  },
});
var isEmpty_5 = require("./text/isEmpty");
Object.defineProperty(exports, "Text_isEmpty", {
  enumerable: true,
  get: function () {
    return isEmpty_5.isEmpty;
  },
});
var isEmpty_6 = require("./text/isEmpty");
Object.defineProperty(exports, "Varchar_isEmpty", {
  enumerable: true,
  get: function () {
    return isEmpty_6.isEmpty;
  },
});
var isEmpty_7 = require("./text/isEmpty");
Object.defineProperty(exports, "Character_isEmpty", {
  enumerable: true,
  get: function () {
    return isEmpty_7.isEmpty;
  },
});
var toString_1 = require("./bool/toString");
Object.defineProperty(exports, "Boolean_toString", {
  enumerable: true,
  get: function () {
    return toString_1.toString;
  },
});
var toString_2 = require("./date/toString");
Object.defineProperty(exports, "Date_toString", {
  enumerable: true,
  get: function () {
    return toString_2.toString;
  },
});
var toString_3 = require("./datetime/toString");
Object.defineProperty(exports, "DateTime_toString", {
  enumerable: true,
  get: function () {
    return toString_3.toString;
  },
});
var toString_4 = require("./numeric/toString");
Object.defineProperty(exports, "Numeric_toString", {
  enumerable: true,
  get: function () {
    return toString_4.toString;
  },
});
var toString_5 = require("./text/toString");
Object.defineProperty(exports, "Text_toString", {
  enumerable: true,
  get: function () {
    return toString_5.toString;
  },
});
var str_1 = require("./numeric/str");
Object.defineProperty(exports, "Core_str", {
  enumerable: true,
  get: function () {
    return str_1.str;
  },
});
//# sourceMappingURL=web-standard-functions.js.map
