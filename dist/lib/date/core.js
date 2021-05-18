"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMPTY_DATE_VALUE = exports.gxToLibLangMapping = void 0;
exports.gxToLibLangMapping = function(gxlang) {
  var gxtoluxonLang = new Map([
    ["spa", "es"] /*Spanish*/,
    ["eng", "en"] /*English*/,
    ["por", "pt"] /*Portuguese*/,
    ["ita", "it"] /*Italian*/,
    ["chs", "zh-Hans"] /*Simplified Chinese*/,
    ["cht", "zh-Hant"] /*Traditional Chinese*/,
    ["jap", "jpn"] /*Japanese*/
  ]);
  var luxonLang = gxtoluxonLang.get(gxlang);
  return luxonLang || "en";
};
exports.EMPTY_DATE_VALUE = new Date(0, 0, 0, 0, 0, 0, 0);
//# sourceMappingURL=core.js.map
