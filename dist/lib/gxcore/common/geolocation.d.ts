export declare class GeneXusCommonGeolocation {
  /**
   * Returns the current location for the device
   * @param minAccuracy
   * @param timeout
   * @param includeHeadingAndSpeed
   * @param ignoreErrors
   * @return any
   */
  static getMyLocation(
    minAccuracy: number,
    timeout: number,
    includeHeadingAndSpeed: boolean,
    ignoreErrors: boolean
  ): Promise<GeneXusCommonGeolocationInfoData>;
  /**
   * Indicates wether the application has been given permission to use location services
   * @return boolean
   */
  static authorized(): boolean;
  /**
   * Indicates wether location services are enable in the device
   * @return boolean
   */
  static serviceEnabled(): boolean;
  /**
   * Starts generating tracking information
   * @param changesInterval
   * @param distance
   * @param action
   * @param actionTimeInterval
   * @param accuracy
   * @return any
   */
  static startTracking(
    changesInterval: number,
    distance: number,
    action: string,
    actionTimeInterval: number,
    accuracy: number
  ): any;
  /**
   * Stops the generation of tracking information
   * @return any
   */
  static endTracking(): any;
  /**
   * Returns a collection of location information generated by the tracking methods
   * @param startTime
   * @return any
   */
  static getLocationHistory(startTime: Date): any;
  /**
   * Removes all previous location information generated by the tracking methods
   * @return any
   */
  static clearLocationHistory(): any;
  /**
   * Returns the latitude of the given location
   * @param location
   * @return number
   */
  static getLatitude(location: GeneXusCommonGeolocationInfoData): number;
  /**
   * Returns the longitude of the given location
   * @param location
   * @return number
   */
  static getLongitude(location: any): number;
  /**
   * Returns the distance between the two locations given (haversine formula)
   * @param fromLocation
   * @param toLocation
   * @return number
   */
  static getDistance(fromLocation: any, toLocation: any): number;
  /**
   * Returns a collection of addresses for the given location
   * @param location
   * @return any
   */
  static getAddress(location: any): any;
  /**
   * Returns a collection of locations for the given address
   * @param address
   * @return any
   */
  static getGeolocation(address: any): any;
  /**
   * @param proximityAlerts
   * @return boolean
   */
  static setProximityAlerts(proximityAlerts: any): boolean;
  /**
   * @return any
   */
  static getProximityAlerts(): any;
  /**
   * @return any
   */
  static getCurrentProximityAlert(): any;
  /**
   * @return any
   */
  static clearProximityAlerts(): any;
  /**
   * @param geoLocationPickerParameters
   * @return any
   */
  static pickLocation(geoLocationPickerParameters: any): any;
  static toRadians(val: number): number;
}
export declare class GeneXusCommonGeolocationInfoData {
  Location: string;
  Description: string;
  Time: Date;
  Precision: number;
  Heading: number;
  Speed: number;
  constructor();
}
