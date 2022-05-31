"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geography = void 0;
var helpers_1 = require("../misc/helpers");
var Geography = /** @class */ (function () {
    function Geography(str) {
        if (str === void 0) { str = ""; }
        this.parse(str);
    }
    Object.defineProperty(Geography.prototype, "longitude", {
        /**
         * Return longitude (horizontal) coordinate for the point
         * @returns number
         */
        get: function () {
            var _a;
            return ((_a = this.point) === null || _a === void 0 ? void 0 : _a.longitude) || 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Geography.prototype, "latitude", {
        /**
         * Return latitude (vertical) coordinate for the point
         * @returns number
         */
        get: function () {
            var _a;
            return ((_a = this.point) === null || _a === void 0 ? void 0 : _a.latitude) || 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Geography.prototype, "srid", {
        /**
         * Return Spatial Reference System Identifier (SRID), identifies the reference system for the represented Geographic object
         * @returns number
         */
        get: function () {
            helpers_1.notImplemented("Geography.srid");
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Return true if the Geography is emtpy
     * @returns boolean
     */
    Geography.prototype.isEmpty = function () {
        return this.featureType === "";
    };
    /**
     * Return true if the Geography is null
     * @returns boolean
     */
    Geography.prototype.isNull = function () {
        return this.featureType === "";
    };
    /**
     * Set Geography to empty value
     */
    Geography.prototype.setEmpty = function () {
        this.point = undefined;
        this.line = undefined;
        this.polygon = undefined;
        this.featureType = "";
    };
    /**
     * Serializes the object to string (alias for toWkt)
     * @returns string
     */
    Geography.prototype.toString = function () {
        return this.toWkt();
    };
    /**
     * Serializes the object to WKT representation
     * @returns string
     */
    Geography.prototype.toWkt = function () {
        switch (this.featureType) {
            case "POINT":
                return "POINT (" + this.longitude + " " + this.latitude + ")";
            case "LINE":
                return "LINESTRING (" + this.line
                    .map(function (point) { return point.longitude + " " + point.latitude; })
                    .join(", ") + ")";
            case "POLYGON":
                return "POLYGON (" + this.polygon
                    .map(function (ring) {
                    return "(" + ring
                        .map(function (point) { return point.longitude + " " + point.latitude; })
                        .join(", ") + ")";
                })
                    .join(", ") + ")";
            default:
                return "";
        }
    };
    /**
     * Serializes the object to GeoJSON representation
     * @returns string
     */
    Geography.prototype.toGeoJson = function () {
        var geoJson;
        switch (this.featureType) {
            case "POINT":
                geoJson = {
                    type: "Point",
                    coordinates: [this.longitude, this.latitude]
                };
                break;
            case "LINE":
                geoJson = {
                    type: "LineString",
                    coordinates: this.line.map(function (point) { return [point.longitude, point.latitude]; })
                };
                break;
            case "POLYGON":
                geoJson = {
                    type: "Polygon",
                    coordinates: this.polygon.map(function (ring) {
                        return ring.map(function (point) { return [point.longitude, point.latitude]; });
                    })
                };
                break;
            default:
                geoJson = {
                    type: "GeometryCollection",
                    coordinates: []
                };
                break;
        }
        return JSON.stringify(geoJson);
    };
    /**
     * Return new instance of this Geography object
     * @returns Geography
     */
    Geography.prototype.toGeoPoint = function () {
        return this.clone();
    };
    /**
     * Return new instance of this Geography object
     * @returns Geography
     */
    Geography.prototype.toGeoLine = function () {
        return this.clone();
    };
    /**
     * Return new instance of this Geography object
     * @returns Geography
     */
    Geography.prototype.toGeoPolygon = function () {
        return this.clone();
    };
    /**
     * Load Geography object represented by the WKT text
     */
    Geography.prototype.fromString = function (str) {
        this.parse(str);
    };
    /**
     * Return the distance (in meters) between the current point and the parameter
     * @returns number
     */
    Geography.prototype.distance = function (geo) {
        return Geography.distance(this, geo);
    };
    /**
     * Return new instance of this object
     * @returns Geography
     */
    Geography.prototype.clone = function () {
        return new Geography(this.toString());
    };
    /**
     * Returns true if the Geographic object parameter includes or intersects the current object
     * @returns boolean
     */
    Geography.prototype.intersect = function (geo) {
        return Geography.intersect(this, geo);
    };
    /**
     * Create Geography object represented by the WKT text
     * @returns Geography
     */
    Geography.fromString = function (str) {
        return new Geography(str);
    };
    /**
     * Return the distance (in meters) between points
     * @returns number
     */
    Geography.distance = function (from, to) {
        // Haversine formula:
        // a = sin(delta_lat/2) + cos(lat1).cos(lat2).sin(delta_long/2)
        // c = 2.atan2(sqrt(a), sqrt(1-a))
        // d = R.c
        if (from.isEmpty() || to.isEmpty())
            return 0;
        var earthRadius = 6371;
        var deltaLatitude = (to.latitude - from.latitude) * (Math.PI / 180);
        var deltaLongitude = (to.longitude - from.longitude) * (Math.PI / 180);
        var a1 = Math.pow(Math.sin(deltaLatitude / 2), 2);
        var a2 = Math.pow(Math.sin(deltaLongitude / 2), 2);
        var a3 = Math.cos(from.latitude * (Math.PI / 180)) *
            Math.cos(to.latitude * (Math.PI / 180));
        var a = a1 + a2 * a3;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return Math.round(earthRadius * c * 1000); // distance in meters
    };
    /**
     * Returns true if the two Geographic objects instersect.
     * @returns boolean
     */
    Geography.intersect = function (a, b) {
        helpers_1.notImplemented("Geography.intersect()");
        return false;
    };
    Geography.prototype.parse = function (str) {
        var value = str.trim();
        this.setEmpty();
        if (Geography.GEOGRAPHY_REGEX_TEST_COORDS.test(value)) {
            this.parseCoords(value);
        }
        else if (Geography.GEOGRAPHY_REGEX_TEST_POINT.test(value)) {
            this.parsePoint(value);
        }
        else if (Geography.GEOGRAPHY_REGEX_TEST_LINE.test(value)) {
            this.parseLineString(value);
        }
        else if (Geography.GEOGRAPHY_REGEX_TEST_POLYGON.test(value)) {
            this.parsePolygon(value);
        }
    };
    Geography.prototype.parseCoords = function (value) {
        var result = value.match(Geography.GEOGRAPHY_REGEX_PARSE_COORDS);
        this.featureType = "POINT";
        this.point = {
            longitude: parseFloat(result[2]),
            latitude: parseFloat(result[1])
        };
    };
    Geography.prototype.parsePoint = function (value) {
        var result = value.match(Geography.GEOGRAPHY_REGEX_PARSE_POINT);
        this.featureType = "POINT";
        this.point = {
            longitude: parseFloat(result[1]),
            latitude: parseFloat(result[2])
        };
    };
    Geography.prototype.parseLineString = function (value) {
        var points = value.match(Geography.GEOGRAPHY_REGEX_PARSE_LINE);
        this.featureType = "LINE";
        this.line = points.map(function (point) {
            var coords = point.match(Geography.GEOGRAPHY_REGEX_PARSE_POINT_COORDS);
            return {
                longitude: parseFloat(coords[0]),
                latitude: parseFloat(coords[1])
            };
        });
    };
    Geography.prototype.parsePolygon = function (value) {
        var rings = value.match(Geography.GEOGRAPHY_REGEX_PARSE_POLYGON);
        this.featureType = "POLYGON";
        this.polygon = rings.map(function (ring) {
            var points = ring.match(Geography.GEOGRAPHY_REGEX_PARSE_LINE);
            return points.map(function (point) {
                var coords = point.match(Geography.GEOGRAPHY_REGEX_PARSE_POINT_COORDS);
                return {
                    longitude: parseFloat(coords[0]),
                    latitude: parseFloat(coords[1])
                };
            });
        });
    };
    Geography.GEOGRAPHY_REGEX_TEST_COORDS = /^(-?\d*(?:\.\d+)?)(?:\s*,\s*| +)(-?\d*(?:\.\d+)?)$/i; // latitude,longitude
    Geography.GEOGRAPHY_REGEX_TEST_POINT = /POINT\s*\(\s*(-?\d*(?:\.\d+)?) +(-?\d*(?:\.\d+)?)\s*\)/i; // POINT(longitude latitude)
    Geography.GEOGRAPHY_REGEX_TEST_LINE = /LINESTRING *\( *(?:-?\d*(?:\.\d+)? +-?\d*(?:\.\d+)?(?: *, *| *\)$))+/i; // LINESTRING(longitude latitude,longitude latitude)
    Geography.GEOGRAPHY_REGEX_TEST_POLYGON = /POLYGON *\( *(?:\( *(?:-?\d+(?:\.\d+)? +-?\d*(?:\.\d+)?(?: *, *))+-?\d+(?:\.\d+)? +-?\d*(?:\.\d+)? *\)(?: *, *| *\)$))+/i; // POLYGON((longitude latitude,longitude latitude),(longitude latitude,longitude latitude))
    Geography.GEOGRAPHY_REGEX_PARSE_COORDS = /(-?\d*(?:\.\d+)?)(?:\s*,\s*| +)(-?\d*(?:\.\d+)?)/i;
    Geography.GEOGRAPHY_REGEX_PARSE_POINT = /POINT\s*\(\s*(-?\d*(?:\.\d+)?) +(-?\d*(?:\.\d+)?)\s*\)/i;
    Geography.GEOGRAPHY_REGEX_PARSE_POINT_COORDS = /-?\d+(?:\.\d+)?/g;
    Geography.GEOGRAPHY_REGEX_PARSE_LINE = /(-?\d+(?:\.\d+)?) +(-?\d*(?:\.\d+)?)/g;
    Geography.GEOGRAPHY_REGEX_PARSE_POLYGON = /\(((?:-?\d+(?:\.\d+)?) +(?:-?\d*(?:\.\d+)?)(?: *, *|\)))+/g;
    return Geography;
}());
exports.Geography = Geography;
//# sourceMappingURL=geography.js.map