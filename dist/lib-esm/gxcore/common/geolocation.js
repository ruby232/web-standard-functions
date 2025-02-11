import { notImplemented } from "../../misc/helpers";
var GeneXusCommonGeolocation = /** @class */ (function () {
    function GeneXusCommonGeolocation() {
    }
    /**
     * Returns the current location for the device
     * @param minAccuracy
     * @param timeout
     * @param includeHeadingAndSpeed
     * @param ignoreErrors
     * @return any
     */
    GeneXusCommonGeolocation.getMyLocation = function (minAccuracy, timeout, includeHeadingAndSpeed, ignoreErrors) {
        return new Promise(function (resolve, reject) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var geoPosition = new GeneXusCommonGeolocationInfoData();
                    geoPosition.Location = position.coords.latitude.toString() + "," + position.coords.longitude.toString();
                    geoPosition.Heading = position.coords.heading;
                    geoPosition.Precision = position.coords.accuracy;
                    geoPosition.Description = "";
                    geoPosition.Speed = position.coords.speed;
                    geoPosition.Time = position.timestamp;
                    resolve(geoPosition);
                }, function (error) {
                    if (ignoreErrors) {
                        var geoPosition = new GeneXusCommonGeolocationInfoData();
                        geoPosition.Time = null;
                        resolve(geoPosition);
                    }
                    else {
                        reject("Could not get location information (" + error.message + ")");
                    }
                }, { timeout: timeout * 1000 });
            }
            else {
                if (ignoreErrors) {
                    var geoPosition = new GeneXusCommonGeolocationInfoData();
                    geoPosition.Time = null;
                    resolve(geoPosition);
                }
                else {
                    reject("Could not get location information (geolocation service not available)");
                }
            }
        });
    };
    /**
     * Indicates wether the application has been given permission to use location services
     * @return boolean
     */
    GeneXusCommonGeolocation.authorized = function () {
        return this.serviceEnabled();
    };
    /**
     * Indicates wether location services are enable in the device
     * @return boolean
     */
    GeneXusCommonGeolocation.serviceEnabled = function () {
        return navigator.geolocation ? true : false;
    };
    /**
     * Starts generating tracking information
     * @param changesInterval
     * @param distance
     * @param action
     * @param actionTimeInterval
     * @param accuracy
     * @return any
     */
    GeneXusCommonGeolocation.startTracking = function (changesInterval, distance, action, actionTimeInterval, accuracy) {
        notImplemented('GeneXusCommonGeolocation.startTracking');
        return null;
    };
    /**
     * Stops the generation of tracking information
     * @return any
     */
    GeneXusCommonGeolocation.endTracking = function () {
        notImplemented('GeneXusCommonGeolocation.endTracking');
        return null;
    };
    /**
     * Returns a collection of location information generated by the tracking methods
     * @param startTime
     * @return any
     */
    GeneXusCommonGeolocation.getLocationHistory = function (startTime) {
        notImplemented('GeneXusCommonGeolocation.getLocationHistory');
        return null;
    };
    /**
     * Removes all previous location information generated by the tracking methods
     * @return any
     */
    GeneXusCommonGeolocation.clearLocationHistory = function () {
        notImplemented('GeneXusCommonGeolocation.clearLocationHistory');
        return null;
    };
    /**
     * Returns the latitude of the given location
     * @param location
     * @return number
     */
    GeneXusCommonGeolocation.getLatitude = function (location) {
        if (location.Location.indexOf(",") > -1) {
            return parseFloat(location.Location.split(",")[0]);
        }
        return 0;
    };
    /**
     * Returns the longitude of the given location
     * @param location
     * @return number
     */
    GeneXusCommonGeolocation.getLongitude = function (location) {
        if (location.Location.indexOf(",") > -1) {
            return parseFloat(location.Location.split(",")[1]);
        }
        return 0;
    };
    /**
     * Returns the distance between the two locations given (haversine formula)
     * @param fromLocation
     * @param toLocation
     * @return number
     */
    GeneXusCommonGeolocation.getDistance = function (fromLocation, toLocation) {
        var R = 6371e3; // earth’s radius
        var lat1 = this.getLatitude(fromLocation);
        var lon1 = this.getLongitude(fromLocation);
        var lat2 = this.getLatitude(toLocation);
        var lon2 = this.getLongitude(toLocation);
        var lat1radians = this.toRadians(lat1);
        var lat2radians = this.toRadians(lat2);
        var latRadians = this.toRadians(lat2 - lat1);
        var lonRadians = this.toRadians(lon2 - lon1);
        var a = Math.sin(latRadians / 2) * Math.sin(latRadians / 2) +
            Math.cos(lat1radians) * Math.cos(lat2radians) *
                Math.sin(lonRadians / 2) * Math.sin(lonRadians / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return Math.round(R * c);
    };
    /**
     * Returns a collection of addresses for the given location
     * @param location
     * @return any
     */
    GeneXusCommonGeolocation.getAddress = function (location) {
        notImplemented('GeneXusCommonGeolocation.getAddress');
        return null;
    };
    /**
     * Returns a collection of locations for the given address
     * @param address
     * @return any
     */
    GeneXusCommonGeolocation.getGeolocation = function (address) {
        notImplemented('GeneXusCommonGeolocation.getGeolocation');
        return null;
    };
    /**
     * @param proximityAlerts
     * @return boolean
     */
    GeneXusCommonGeolocation.setProximityAlerts = function (proximityAlerts) {
        notImplemented('GeneXusCommonGeolocation.setProximityAlerts');
        return false;
    };
    /**
     * @return any
     */
    GeneXusCommonGeolocation.getProximityAlerts = function () {
        notImplemented('GeneXusCommonGeolocation.getProximityAlerts');
        return null;
    };
    /**
     * @return any
     */
    GeneXusCommonGeolocation.getCurrentProximityAlert = function () {
        notImplemented('GeneXusCommonGeolocation.getCurrentProximityAlert');
        return null;
    };
    /**
     * @return any
     */
    GeneXusCommonGeolocation.clearProximityAlerts = function () {
        notImplemented('GeneXusCommonGeolocation.clearProximityAlerts');
        return null;
    };
    /**
     * @param geoLocationPickerParameters
     * @return any
     */
    GeneXusCommonGeolocation.pickLocation = function (geoLocationPickerParameters) {
        notImplemented('GeneXusCommonGeolocation.pickLocation');
        return null;
    };
    GeneXusCommonGeolocation.toRadians = function (val) {
        var PI = 3.1415926535;
        return val / 180.0 * PI;
    };
    return GeneXusCommonGeolocation;
}());
export { GeneXusCommonGeolocation };
var GeneXusCommonGeolocationInfoData = /** @class */ (function () {
    function GeneXusCommonGeolocationInfoData() {
        this.Location = "";
        this.Description = "";
        this.Time = new Date();
        this.Precision = 0;
        this.Heading = 0;
        this.Speed = 0;
    }
    return GeneXusCommonGeolocationInfoData;
}());
export { GeneXusCommonGeolocationInfoData };
//# sourceMappingURL=geolocation.js.map