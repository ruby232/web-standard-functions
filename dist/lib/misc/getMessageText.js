"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessageText = void 0;
var translationService_1 = require("../config/translationService");
/**
 * Searches the language object (or the current language if that parameter is omitted) for a given message code
 * @param {string} str The message identifier
 * @param {string} languageName The language name, may be omitted
 * @return {string} The translation of the given message in the specified language or the current language
 */
exports.getMessageText = function(str, languageName) {
  var translator = translationService_1.TranslationService.getInstance();
  if (!languageName) {
    return translator.translate(str);
  } else {
    return translator.translate(str, languageName);
  }
};
//# sourceMappingURL=getMessageText.js.map
