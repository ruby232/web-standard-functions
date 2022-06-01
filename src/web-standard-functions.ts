import { notImplemented } from "./misc/helpers";

export * from "./gxcore/client/client-information";
export * from "./types/gauge";
export * from "./types/geography";
export * from "./misc/setLanguage";
export * from "./misc/msg";
export * from "./types/guid";

export * from "./text/format";
export * from "./text/trim";

export * from "./text/indexOf";
export * from "./text/lastIndexOf";
export * from "./text/padLeft";
export * from "./text/padRight";
export * from "./text/subString";
export * from "./text/rTrim";
export * from "./text/lTrim";

export * from "./text/toUpper";
export * from "./text/toLower";
export * from "./text/toNumeric";
export * from "./text/newline";
export * from "./text/replace";
export * from "./text/length";
export * from "./text/concat";
export * from "./text/isMatch";
export * from "./text/startsWith";
export * from "./text/endsWith";
export * from "./text/contains";
export * from "./text/charAt";
export * from "./text/removeDiacritics";


export * from "./date/addYears";

export * from "./datetime/hour";

export * from "./gxcore/common/log";
export * from "./gxcore/common/geolocation";
export * from "./pubSub/pubSubscription";
export * from "./misc/publishCall";
export * from "./web/globalEvents";

export * from "./date/day";
export * from "./date/month";
export * from "./date/year";
export * from "./date/endOfMonth";
export * from "./date/dayOfWeek";
export * from "./date/addYears";
export * from "./date/addMonths";
export * from "./date/age";
export * from "./date/age";
export * from "./date/monthName";
export * from "./date/addDays";

export * from "./numeric/integer";
export * from "./numeric/round";
export * from "./numeric/roundToEven";
export * from "./numeric/integer";
export * from "./numeric/truncate";
export * from "./numeric/toFormattedString";

export * from "./math/mod";

export * from "./datetime/hour";
export * from "./datetime/minute";
export * from "./datetime/second";
export * from "./datetime/addSeconds";
export * from "./datetime/difference";
export * from "./datetime/addHours";
export * from "./datetime/addMinutes";
export * from "./datetime/toDate";

export { fromString as Date_fromString } from "./date/fromString";
export { fromString as DateTime_fromString } from "./datetime/fromString";
export { fromString as Core_ctoD } from "./date/fromString";
export { fromString as Core_ctoT } from "./date/fromString";

export { newInstance as Core_yMDtoD } from "./date/newInstance";
export { newInstance as Core_yMDHMStoT } from "./datetime/newInstance";

export { isEmpty as Boolean_isEmpty } from "./bool/isEmpty";
export { isEmpty as Date_isEmpty } from "./date/isEmpty";
export { isEmpty as DateTime_isEmpty } from "./date/isEmpty";
export { isEmpty as Misc_isEmpty } from "./misc/isEmpty";
export { isEmpty as Numeric_isEmpty } from "./numeric/isEmpty";
export { isEmpty as Text_isEmpty } from "./text/isEmpty";
export { isEmpty as Varchar_isEmpty } from "./text/isEmpty";
export { isEmpty as LongVarchar_isEmpty } from "./text/isEmpty";
export { isEmpty as Character_isEmpty } from "./text/isEmpty";

export { toString as Boolean_toString } from "./bool/toString";
export { toString as Date_toString } from "./date/toString";
export { toString as DateTime_toString } from "./datetime/toString";
export { toString as Numeric_toString } from "./numeric/toString";
export { toString as Text_toString } from "./text/toString";
export { toString as Core_ttoC } from "./datetime/toString";
export { toString as Core_dtoC } from "./date/toString";

export { str as Core_str } from "./numeric/str";
export { iif as Core_iif } from "./misc/iif";
