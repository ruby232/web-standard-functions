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
exports.Varchar_isEmpty =
  exports.Text_toString =
  exports.Text_isEmpty =
  exports.Numeric_toString =
  exports.Numeric_isEmpty =
  exports.Misc_isEmpty =
  exports.DateTime_toString =
  exports.Date_toString =
  exports.Date_isEmpty =
  exports.Boolean_toString =
  exports.Boolean_isEmpty =
    void 0;
__exportStar(require("./gxcore/client/client-information"), exports);
__exportStar(require("./types/gauge"), exports);
__exportStar(require("./types/geography"), exports);
__exportStar(require("./misc/setLanguage"), exports);
__exportStar(require("./misc/msg"), exports);
__exportStar(require("./types/guid"), exports);
exports.Boolean_isEmpty = require("./bool/isEmpty");
exports.Boolean_toString = require("./bool/toString");
exports.Date_isEmpty = require("./date/isEmpty");
exports.Date_toString = require("./date/toString");
exports.DateTime_toString = require("./datetime/toString");
exports.Misc_isEmpty = require("./misc/isEmpty");
exports.Numeric_isEmpty = require("./numeric/isEmpty");
exports.Numeric_toString = require("./numeric/toString");
exports.Text_isEmpty = require("./text/isEmpty");
exports.Text_toString = require("./text/toString");
__exportStar(require("./text/trim"), exports);
__exportStar(require("./text/toUpper"), exports);
__exportStar(require("./text/toLower"), exports);
__exportStar(require("./text/toNumeric"), exports);
var isEmpty_1 = require("./text/isEmpty");
Object.defineProperty(exports, "Varchar_isEmpty", {
  enumerable: true,
  get: function () {
    return isEmpty_1.isEmpty;
  },
});
//# sourceMappingURL=web-standard-functions.js.map
