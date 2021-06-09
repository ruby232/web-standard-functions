import * as jstz from "jstz";
export var storageKey = "currentTimezone";
export var detect = function () {
  var timezone = jstz.determine().name();
  return timezone;
};
export var timezones;
(function (timezones) {
  timezones["Cairo"] = "Africa/Cairo";
  timezones["Johannesburg"] = "Africa/Johannesburg";
  timezones["Lagos"] = "Africa/Lagos";
  timezones["Anchorage"] = "America/Anchorage";
  timezones["Buenos_Aires"] = "America/Argentina/Buenos_Aires";
  timezones["Asuncion"] = "America/Asuncion";
  timezones["Bogota"] = "America/Bogota";
  timezones["Caracas"] = "America/Caracas";
  timezones["Chicago"] = "America/Chicago";
  timezones["Denver"] = "America/Denver";
  timezones["Godthab"] = "America/Godthab";
  timezones["Guatemala"] = "America/Guatemala";
  timezones["Halifax"] = "America/Halifax";
  timezones["Los_Angeles"] = "America/Los_Angeles";
  timezones["Mexico_City"] = "America/Mexico_City";
  timezones["Montevideo"] = "America/Montevideo";
  timezones["New_York"] = "America/New_York";
  timezones["Noronha"] = "America/Noronha";
  timezones["Phoenix"] = "America/Phoenix";
  timezones["Santiago"] = "America/Santiago";
  timezones["Santo_Domingo"] = "America/Santo_Domingo";
  timezones["Sao_Paulo"] = "America/Sao_Paulo";
  timezones["St_Johns"] = "America/St_Johns";
  timezones["Baghdad"] = "Asia/Baghdad";
  timezones["Beirut"] = "Asia/Beirut";
  timezones["Damascus"] = "Asia/Damascus";
  timezones["Dhaka"] = "Asia/Dhaka";
  timezones["Dubai"] = "Asia/Dubai";
  timezones["Jerusalem"] = "Asia/Jerusalem";
  timezones["Kabul"] = "Asia/Kabul";
  timezones["Karachi"] = "Asia/Karachi";
  timezones["Katmandu"] = "Asia/Katmandu";
  timezones["Kolkata"] = "Asia/Kolkata";
  timezones["Rangoon"] = "Asia/Rangoon";
  timezones["Shanghai"] = "Asia/Shanghai";
  timezones["Tehran"] = "Asia/Tehran";
  timezones["Tokyo"] = "Asia/Tokyo";
  timezones["Yerevan"] = "Asia/Yerevan";
  timezones["Azores"] = "Atlantic/Azores";
  timezones["Cape_Verde"] = "Atlantic/Cape_Verde";
  timezones["Adelaide"] = "Australia/Adelaide";
  timezones["Brisbane"] = "Australia/Brisbane";
  timezones["Darwin"] = "Australia/Darwin";
  timezones["Sydney"] = "Australia/Sydney";
  timezones["GMT_12"] = "Etc/GMT_12";
  timezones["GMT_2"] = "Etc/GMT_2";
  timezones["UTC"] = "Etc/UTC";
  timezones["Berlin"] = "Europe/Berlin";
  timezones["Helsinkz"] = "Europe/Helsinki";
  timezones["Istanbul"] = "Europe/Istanbul";
  timezones["London"] = "Europe/London";
  timezones["Auckland"] = "Pacific/Auckland";
  timezones["Honolulu"] = "Pacific/Honolulu";
  timezones["Noumea"] = "Pacific/Noumea";
  timezones["Tongatapu"] = "Pacific/Tongatapu";
})(timezones || (timezones = {}));
export var fromString = function (stz) {
  var arrTimezones = Object.keys(timezones);
  return (
    arrTimezones.find(function (e) {
      return timezones[e] === stz;
    }) || timezones[timezones.UTC]
  );
};
//# sourceMappingURL=timezone.js.map
