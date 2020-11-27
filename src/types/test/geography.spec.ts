import { Geography } from "../geography";

describe("Test fromString() method", () => {
  const testCases: Array<{
    geo: string;
    longitude: number;
    latitude: number;
    featureType: string;
  }> = [
    { geo: "", longitude: 0, latitude: 0, featureType: "" },
    { geo: "0,0", longitude: 0, latitude: 0, featureType: "POINT" },
    {
      geo: "-56.163740158081055,-34.92478600243492",
      longitude: -34.92478600243492,
      latitude: -56.163740158081055,
      featureType: "POINT"
    },
    {
      geo: "  -56.163740158081055   ,   -34.92478600243492  ",
      longitude: -34.92478600243492,
      latitude: -56.163740158081055,
      featureType: "POINT"
    },
    { geo: "POINT(0 0)", longitude: 0, latitude: 0, featureType: "POINT" },
    {
      geo: "POINT(-34.92478600243492 -56.163740158081055)",
      longitude: -34.92478600243492,
      latitude: -56.163740158081055,
      featureType: "POINT"
    },
    {
      geo: "POINT  (    -34.92478600243492    -56.163740158081055   )",
      longitude: -34.92478600243492,
      latitude: -56.163740158081055,
      featureType: "POINT"
    },
    {
      geo:
        "LINESTRING(-56.16090774536133 -34.928797162523516,-56.1650276184082 -34.89494244739731)",
      longitude: 0,
      latitude: 0,
      featureType: "LINE"
    },
    {
      geo:
        "LINESTRING  ( -56.16090774536133   -34.928797162523516  , -56.1650276184082 -34.89494244739731  )",
      longitude: 0,
      latitude: 0,
      featureType: "LINE"
    },
    {
      geo:
        "POLYGON((-56.1510479 -34.8936929,-56.1508977 -34.8962536,-56.1475503 -34.8959984,-56.1510479 -34.8936929))",
      longitude: 0,
      latitude: 0,
      featureType: "POLYGON"
    },
    {
      geo:
        "POLYGON  (  (-56.1510479 -34.8936929  ,  -56.1508977 -34.8962536,   -56.1475503 -34.8959984   ,-56.1510479 -34.8936929))",
      longitude: 0,
      latitude: 0,
      featureType: "POLYGON"
    },
    {
      geo:
        "POLYGON((-56.1510479 -34.8936929,-56.1508977 -34.8962536,-56.1475503 -34.8959984,-56.1510479 -34.8936929),(-56.1536336 -34.8943177,-56.1529899 -34.8952328,-56.1519814 -34.8947929,-56.1527002 -34.8938513,-56.1536336 -34.8943177))",
      longitude: 0,
      latitude: 0,
      featureType: "POLYGON"
    },
    {
      geo:
        "POLYGON((-56.1510479 -34.8936929,-56.1508977 -34.8962536,-56.1475503 -34.8959984,-56.1510479 -34.8936929)   ,   (-56.1536336 -34.8943177  ,  -56.1529899 -34.8952328,-56.1519814 -34.8947929,-56.1527002 -34.8938513,-56.1536336 -34.8943177))",
      longitude: 0,
      latitude: 0,
      featureType: "POLYGON"
    }
  ];

  for (const testCase of testCases) {
    it(`Value:${testCase.geo} Longitude:${testCase.longitude} Latitude:${testCase.latitude}`, () => {
      const geo = Geography.fromString(testCase.geo);
      const longitude = geo.longitude;
      const latitude = geo.latitude;
      const featureType = geo.featureType;

      expect(longitude).toBe(testCase.longitude);
      expect(latitude).toBe(testCase.latitude);
      expect(featureType).toBe(testCase.featureType);
    });
  }
});

describe("Test longitude,latitude properties", () => {
  const testCases: Array<{
    geo: string;
    longitude: number;
    latitude: number;
  }> = [
    { geo: "", longitude: 0, latitude: 0 },
    { geo: "0,0", longitude: 0, latitude: 0 },
    {
      geo: "-56.163740158081055,-34.92478600243492",
      longitude: -34.92478600243492,
      latitude: -56.163740158081055
    },
    { geo: "POINT(0 0)", longitude: 0, latitude: 0 },
    {
      geo: "POINT(-34.92478600243492 -56.163740158081055)",
      longitude: -34.92478600243492,
      latitude: -56.163740158081055
    },
    {
      geo:
        "LINESTRING(-56.16090774536133 -34.928797162523516, -56.1650276184082 -34.89494244739731)",
      longitude: 0,
      latitude: 0
    },
    {
      geo:
        "POLYGON((-56.1510479 -34.8936929,-56.1508977 -34.8962536,-56.1475503 -34.8959984,-56.1510479 -34.8936929))",
      longitude: 0,
      latitude: 0
    }
  ];

  for (const testCase of testCases) {
    it(`Value:${testCase.geo} Longitude:${testCase.longitude} Latitude:${testCase.latitude}`, () => {
      const geo = Geography.fromString(testCase.geo);
      const longitude = geo.longitude;
      const latitude = geo.latitude;

      expect(longitude).toBe(testCase.longitude);
      expect(latitude).toBe(testCase.latitude);
    });
  }
});

describe("Test featureType property", () => {
  const testCases: Array<{ geo: string; featureType: string }> = [
    { geo: "", featureType: "" },
    { geo: "0,0", featureType: "POINT" },
    { geo: "-56.163740158081055,-34.92478600243492", featureType: "POINT" },
    { geo: "POINT(0 0)", featureType: "POINT" },
    {
      geo: "POINT(-34.92478600243492 -56.163740158081055)",
      featureType: "POINT"
    },
    {
      geo:
        "LINESTRING(-56.16090774536133 -34.928797162523516, -56.1650276184082 -34.89494244739731)",
      featureType: "LINE"
    },
    {
      geo:
        "POLYGON((-56.1510479 -34.8936929,-56.1508977 -34.8962536,-56.1475503 -34.8959984,-56.1510479 -34.8936929))",
      featureType: "POLYGON"
    },
    {
      geo:
        "POLYGON((-56.1510479 -34.8936929,-56.1508977 -34.8962536,-56.1475503 -34.8959984,-56.1510479 -34.8936929),(-56.1536336 -34.8943177,-56.1529899 -34.8952328,-56.1519814 -34.8947929,-56.1527002 -34.8938513,-56.1536336 -34.8943177))",
      featureType: "POLYGON"
    }
  ];

  for (const testCase of testCases) {
    it(`Value:${testCase.geo} FeatureType:${testCase.featureType}`, () => {
      const geo = Geography.fromString(testCase.geo);
      const featureType = geo.featureType;

      expect(featureType).toBe(testCase.featureType);
    });
  }
});

describe("Test srid property", () => {
  // TODO: not implemented
});

describe("Test isEmpty(), isNull() methods", () => {
  const testCases: Array<{ geo: string; isEmpty: boolean; isNull: boolean }> = [
    { geo: "", isEmpty: true, isNull: true },
    { geo: "0,0", isEmpty: false, isNull: false },
    {
      geo: "-56.163740158081055,-34.92478600243492",
      isEmpty: false,
      isNull: false
    },
    { geo: "POINT(0 0)", isEmpty: false, isNull: false },
    {
      geo: "POINT(-34.92478600243492 -56.163740158081055)",
      isEmpty: false,
      isNull: false
    },
    {
      geo:
        "LINESTRING(-56.16090774536133 -34.928797162523516, -56.1650276184082 -34.89494244739731)",
      isEmpty: false,
      isNull: false
    },
    {
      geo:
        "POLYGON((-56.1510479 -34.8936929,-56.1508977 -34.8962536,-56.1475503 -34.8959984,-56.1510479 -34.8936929))",
      isEmpty: false,
      isNull: false
    }
  ];

  for (const testCase of testCases) {
    it(`Value:${testCase.geo} IsEmpty:${testCase.isEmpty} IsNull:${testCase.isNull}`, () => {
      const geo = Geography.fromString(testCase.geo);
      const isEmpty = geo.isEmpty();
      const isNull = geo.isNull();

      expect(isEmpty).toBe(testCase.isEmpty);
      expect(isNull).toBe(testCase.isNull);
    });
  }
});

describe("Test setEmpty() method", () => {
  const testCases: Array<{ geo: string }> = [
    { geo: "-56.163740158081055,-34.92478600243492" },
    { geo: "POINT(0 0)" },
    { geo: "POINT(-34.92478600243492 -56.163740158081055)" },
    {
      geo:
        "LINESTRING(-56.16090774536133 -34.928797162523516, -56.1650276184082 -34.89494244739731)"
    },
    {
      geo:
        "POLYGON((-56.1510479 -34.8936929,-56.1508977 -34.8962536,-56.1475503 -34.8959984,-56.1510479 -34.8936929))"
    }
  ];

  for (const testCase of testCases) {
    it(`Value:${testCase.geo}`, () => {
      const geo = Geography.fromString(testCase.geo);

      expect(geo.isEmpty()).toBe(false);

      geo.setEmpty();
      expect(geo.featureType).toBe("");
      expect(geo.longitude).toBe(0);
      expect(geo.latitude).toBe(0);
    });
  }
});

describe("Test toString(), toWkt() methods", () => {
  const testCases: Array<{ geo: string; wkt: string }> = [
    { geo: "", wkt: "" },
    { geo: "0,0", wkt: "POINT (0 0)" },
    {
      geo: "-56.163740158081055, -34.92478600243492",
      wkt: "POINT (-34.92478600243492 -56.163740158081055)"
    },
    { geo: "POINT(0 0)", wkt: "POINT (0 0)" },
    {
      geo: "POINT(-34.92478600243492 -56.163740158081055)",
      wkt: "POINT (-34.92478600243492 -56.163740158081055)"
    },
    {
      geo:
        "LINESTRING(-56.16090774536133 -34.928797162523516,-56.1650276184082 -34.89494244739731)",
      wkt:
        "LINESTRING (-56.16090774536133 -34.928797162523516, -56.1650276184082 -34.89494244739731)"
    },
    {
      geo:
        "POLYGON((-56.1510479 -34.8936929,-56.1508977 -34.8962536,-56.1475503 -34.8959984,-56.1510479 -34.8936929))",
      wkt:
        "POLYGON ((-56.1510479 -34.8936929, -56.1508977 -34.8962536, -56.1475503 -34.8959984, -56.1510479 -34.8936929))"
    },
    {
      geo:
        "POLYGON((-56.1510479 -34.8936929,-56.1508977 -34.8962536,-56.1475503 -34.8959984,-56.1510479 -34.8936929), (-56.1536336 -34.8943177,-56.1529899 -34.8952328,-56.1519814 -34.8947929,-56.1527002 -34.8938513,-56.1536336 -34.8943177))",
      wkt:
        "POLYGON ((-56.1510479 -34.8936929, -56.1508977 -34.8962536, -56.1475503 -34.8959984, -56.1510479 -34.8936929), (-56.1536336 -34.8943177, -56.1529899 -34.8952328, -56.1519814 -34.8947929, -56.1527002 -34.8938513, -56.1536336 -34.8943177))"
    }
  ];

  for (const testCase of testCases) {
    it(`Value:${testCase.geo}`, () => {
      const geo = Geography.fromString(testCase.geo);
      const toString = geo.toString();
      const toWkt = geo.toWkt();

      expect(toString).toBe(testCase.wkt);
      expect(toWkt).toBe(testCase.wkt);
    });
  }
});

describe("Test toGeoJson() method", () => {
  const testCases: Array<{ geo: string; geoJson: string }> = [
    { geo: "", geoJson: '{"type":"GeometryCollection","coordinates":[]}' },
    { geo: "0,0", geoJson: '{"type":"Point","coordinates":[0,0]}' },
    {
      geo: "-56.163740158081055, -34.92478600243492",
      geoJson:
        '{"type":"Point","coordinates":[-34.92478600243492,-56.163740158081055]}'
    },
    { geo: "POINT(0 0)", geoJson: '{"type":"Point","coordinates":[0,0]}' },
    {
      geo: "POINT(-34.92478600243492 -56.163740158081055)",
      geoJson:
        '{"type":"Point","coordinates":[-34.92478600243492,-56.163740158081055]}'
    },
    {
      geo:
        "LINESTRING(-56.16090774536133 -34.928797162523516,-56.1650276184082 -34.89494244739731)",
      geoJson:
        '{"type":"LineString","coordinates":[[-56.16090774536133,-34.928797162523516],[-56.1650276184082,-34.89494244739731]]}'
    },
    {
      geo:
        "POLYGON((-56.1510479 -34.8936929,-56.1508977 -34.8962536,-56.1475503 -34.8959984,-56.1510479 -34.8936929))",
      geoJson:
        '{"type":"Polygon","coordinates":[[-56.1510479 -34.8936929,-56.1508977 -34.8962536,-56.1475503 -34.8959984,-56.1510479 -34.8936929]]}'
    },
    {
      geo:
        "POLYGON((-56.1510479 -34.8936929,-56.1508977 -34.8962536,-56.1475503 -34.8959984,-56.1510479 -34.8936929), (-56.1536336 -34.8943177,-56.1529899 -34.8952328,-56.1519814 -34.8947929,-56.1527002 -34.8938513,-56.1536336 -34.8943177))",
      geoJson:
        '{"type":"Polygon","coordinates":[[-56.1510479 -34.8936929,-56.1508977 -34.8962536,-56.1475503 -34.8959984,-56.1510479 -34.8936929],[-56.1536336 -34.8943177,-56.1529899 -34.8952328,-56.1519814 -34.8947929,-56.1527002 -34.8938513,-56.1536336 -34.8943177]]}'
    }
  ];

  for (const testCase of testCases) {
    it(`Value:${testCase.geo}`, () => {
      const geo = Geography.fromString(testCase.geo);
      const geoJson = geo.toGeoJson();

      expect(geoJson).toBe(testCase.geoJson);
    });
  }
});

describe("toGeoPoint toGeoLine toGeoPolygon", () => {
  const testCases: Array<{ geo: string }> = [
    { geo: "" },
    { geo: "-56.163740158081055, -34.92478600243492" },
    { geo: "POINT(-34.92478600243492 -56.163740158081055)" },
    {
      geo:
        "LINESTRING(-56.16090774536133 -34.928797162523516,-56.1650276184082 -34.89494244739731)"
    },
    {
      geo:
        "POLYGON((-56.1510479 -34.8936929,-56.1508977 -34.8962536,-56.1475503 -34.8959984,-56.1510479 -34.8936929))"
    }
  ];

  for (const testCase of testCases) {
    it(`Value:${testCase.geo}`, () => {
      const geo = Geography.fromString(testCase.geo);
      const toGeoPoint = geo.toGeoPoint();
      const toGeoLine = geo.toGeoLine();
      const toGeoPolygon = geo.toGeoPolygon();

      expect(geo.featureType).toBe(toGeoPoint.featureType);
      expect(geo.featureType).toBe(toGeoLine.featureType);
      expect(geo.featureType).toBe(toGeoPolygon.featureType);
    });
  }
});

describe("Test distance() method", () => {
  const testCases: Array<{ from: string; to: string; distance: number }> = [
    { from: "", to: "-56.1701774597168,-34.91676309400329", distance: 0 },
    { from: "-56.163740158081055,-34.92478600243492", to: "", distance: 0 },
    {
      from: "-56.163740158081055,-34.92478600243492",
      to: "-56.1701774597168,-34.91676309400329",
      distance: 871
    },
    {
      from: "POINT(-34.92478600243492 -56.163740158081055)",
      to: "POINT(-34.91676309400329 -56.1701774597168)",
      distance: 871
    }
  ];

  for (const testCase of testCases) {
    it(`From:${testCase.from} To:${testCase.to} equal ${testCase.distance}`, () => {
      const from = Geography.fromString(testCase.from);
      const to = Geography.fromString(testCase.to);
      const distance = Geography.distance(from, to);

      expect(distance).toBe(testCase.distance);
    });
  }
});

describe("intersect", () => {
  // TODO: not implemented
});

// const fromStringPointTestCases: Array<[string, number, number]> = [
//     ["POINT(-56.163740158081055 -34.92478600243492)", -56.163740158081055, -34.92478600243492],
//     ["-34.92478600243492,-56.163740158081055", -56.163740158081055, -34.92478600243492]
// ];

// describe("create Geography from string", () => {
//     for (const t of fromStringPointTestCases) {
//         it(`should return longitude:"${t[1]}", latitude:"${t[2]}" when creating the Geography from "${t[0]}"`, () => {
//             const geo = Geography.fromString(t[0]);
//             const featureType = geo.featureType;
//             const longitude = geo.longitude;
//             const latitude = geo.latitude;

//             expect(featureType).toBe("POINT");
//             expect(longitude).toBe(-56.163740158081055);
//             expect(latitude).toBe(-34.92478600243492);
//         });
//     }
// });

// describe("to string", () => {
//     for (const t of fromStringPointTestCases) {
//         it(`should return longitude:"${t[1]}", latitude:"${t[2]}" when creating the Geography from "${t[0]}"`, () => {
//             const geo = Geography.fromString(t[0]);
//             const featureType = geo.featureType;
//             const longitude = geo.longitude;
//             const latitude = geo.latitude;

//             expect(featureType).toBe("POINT");
//             expect(longitude).toBe(-56.163740158081055);
//             expect(latitude).toBe(-34.92478600243492);
//         });
//     }
// });

// const fromStringLineTestCases: Array<[string, string]> = [
//     ["LINESTRING(-56.16090774536133 -34.928797162523516, -56.1650276184082 -34.89494244739731)", "LINESTRING (-56.16090774536133 -34.928797162523516, -56.1650276184082 -34.89494244739731)"]
// ];

// describe("to string", () => {
//     for (const t of fromStringLineTestCases) {
//         it(`should return ToString:"${t[1]}" when creating the Geography from "${t[0]}"`, () => {
//             const geo = Geography.fromString(t[0]);
//             const toString = geo.toString();

//             expect(toString).toBe(t[1]);
//         });
//     }
// });

// const fromStringPolygonTestCases: Array<[string, string]> = [
//     ["POLYGON((-5 -5, -5 5, 5 5, 5 -5, -5 -5),(0 0, 3 0, 3 3, 0 3, 0 0))", "POLYGON ((-5 -5, -5 5, 5 5, 5 -5, -5 -5), (0 0, 3 0, 3 3, 0 3, 0 0))"]
// ];

// describe("to string", () => {
//     for (const t of fromStringPolygonTestCases) {
//         it(`should return ToString:"${t[1]}" when creating the Geography from "${t[0]}"`, () => {
//             const geo = Geography.fromString(t[0]);
//             const toString = geo.toString();

//             expect(toString).toBe(t[1]);
//         });
//     }
// });

// describe("distance", () => {
//     it(`distance`, () => {
//         const from = Geography.fromString('-56.163740158081055,-34.92478600243492');
//         const to = Geography.fromString('-56.1701774597168,-34.91676309400329');

//         const distance = Geography.distance(from, to);

//         expect(distance).toBe(871);
//     });
// });

// describe("intersect", () => {
//     it(`intersect`, () => {
//         const polygon = Geography.fromString("LINESTRING(-56.1596203 -34.8944233,-56.1587405 -34.8923113,-56.1555970 -34.8915984,-56.1512196 -34.8937281,-56.1511230 -34.8962888,-56.1522496 -34.8985151,-56.1565840 -34.8989023,-56.1589658 -34.8972216,-56.1596310 -34.8944409)");
//         // const point = Geography.fromString('POINT(-56.1528289 -34.8945113)'); //true
//         const point = Geography.fromString('POINT(-56.1514449 -34.8912200)'); //false

//         const intersect = Geography.intersect(point, polygon);

//         expect(intersect).toBe(true);
//     });
// });
