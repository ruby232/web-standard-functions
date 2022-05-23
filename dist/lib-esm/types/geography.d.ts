export declare class Geography {
    private static GEOGRAPHY_REGEX_TEST_COORDS;
    private static GEOGRAPHY_REGEX_TEST_POINT;
    private static GEOGRAPHY_REGEX_TEST_LINE;
    private static GEOGRAPHY_REGEX_TEST_POLYGON;
    private static GEOGRAPHY_REGEX_PARSE_COORDS;
    private static GEOGRAPHY_REGEX_PARSE_POINT;
    private static GEOGRAPHY_REGEX_PARSE_POINT_COORDS;
    private static GEOGRAPHY_REGEX_PARSE_LINE;
    private static GEOGRAPHY_REGEX_PARSE_POLYGON;
    private point;
    private line;
    private polygon;
    featureType: GeographyFeatureType;
    constructor(str?: string);
    /**
     * Return longitude (horizontal) coordinate for the point
     * @returns number
     */
    get longitude(): number;
    /**
     * Return latitude (vertical) coordinate for the point
     * @returns number
     */
    get latitude(): number;
    /**
     * Return Spatial Reference System Identifier (SRID), identifies the reference system for the represented Geographic object
     * @returns number
     */
    get srid(): number;
    /**
     * Return true if the Geography is emtpy
     * @returns boolean
     */
    isEmpty(): boolean;
    /**
     * Return true if the Geography is null
     * @returns boolean
     */
    isNull(): boolean;
    /**
     * Set Geography to empty value
     */
    setEmpty(): void;
    /**
     * Serializes the object to string (alias for toWkt)
     * @returns string
     */
    toString(): string;
    /**
     * Serializes the object to WKT representation
     * @returns string
     */
    toWkt(): string;
    /**
     * Serializes the object to GeoJSON representation
     * @returns string
     */
    toGeoJson(): string;
    /**
     * Return new instance of this Geography object
     * @returns Geography
     */
    toGeoPoint(): Geography;
    /**
     * Return new instance of this Geography object
     * @returns Geography
     */
    toGeoLine(): Geography;
    /**
     * Return new instance of this Geography object
     * @returns Geography
     */
    toGeoPolygon(): Geography;
    /**
     * Load Geography object represented by the WKT text
     */
    fromString(str: string): void;
    /**
     * Return the distance (in meters) between the current point and the parameter
     * @returns number
     */
    distance(geo: Geography): number;
    /**
     * Return new instance of this object
     * @returns Geography
     */
    clone(): Geography;
    /**
     * Returns true if the Geographic object parameter includes or intersects the current object
     * @returns boolean
     */
    intersect(geo: Geography): boolean;
    /**
     * Create Geography object represented by the WKT text
     * @returns Geography
     */
    static fromString(str: string): Geography;
    /**
     * Return the distance (in meters) between points
     * @returns number
     */
    static distance(from: Geography, to: Geography): number;
    /**
     * Returns true if the two Geographic objects instersect.
     * @returns boolean
     */
    static intersect(a: Geography, b: Geography): boolean;
    private parse;
    private parseCoords;
    private parsePoint;
    private parseLineString;
    private parsePolygon;
}
export declare type GeographyFeatureType = "" | "POINT" | "LINE" | "POLYGON";
