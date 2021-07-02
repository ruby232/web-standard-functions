export declare class GeneXusClientClientInformation {
  /**
   * This property returns a device identifier
   * The value of ClientInformation.Id is:
   *  - Universally unique
   *  - Stable
   */
  static id(): string;
  /**
   * Returns the operating system name
   */
  static oSName(): string;
  /**
   * Returns the version of the operating system
   */
  static oSVersion(): string;
  /**
   * Returns a unique identifier for the device
   * Current implementation returns the same as the `id` property
   */
  static networkID: typeof GeneXusClientClientInformation.id;
  /**
   * A character string is returned with the device language
   */
  static language(): string;
  /**
   * Returns an enumerated value representing the device type
   */
  static deviceType(): number;
  /**
   * Returns the platform name of the device as much specific as possible
   */
  static platformName(): string;
  /**
   * Returns the version number of the application which it was set by the developer
   */
  static appVersionCode(): string;
  /**
   * Returns the version name of the application which it was set by the developer
   */
  static appVersionName(): string;
  /**
   * Returns the application identifier
   */
  static applicationId(): string;
}
