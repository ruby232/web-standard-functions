"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLReader = void 0;
var helpers_1 = require("../misc/helpers");
var xmlcommon_1 = require("./xmlcommon");
var GXNodeType;
(function (GXNodeType) {
  GXNodeType[(GXNodeType["element"] = 1)] = "element";
  GXNodeType[(GXNodeType["endTag"] = 2)] = "endTag";
  GXNodeType[(GXNodeType["text"] = 4)] = "text";
  GXNodeType[(GXNodeType["comment"] = 8)] = "comment";
  GXNodeType[(GXNodeType["whiteSpace"] = 16)] = "whiteSpace";
  GXNodeType[(GXNodeType["cdata"] = 32)] = "cdata";
  GXNodeType[(GXNodeType["processingInstruction"] = 64)] =
    "processingInstruction";
  GXNodeType[(GXNodeType["documentType"] = 128)] = "documentType";
})(GXNodeType || (GXNodeType = {}));
var XMLReader = /** @class */ (function (_super) {
  __extends(XMLReader, _super);
  function XMLReader() {
    // Internal variables
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.document = null;
    _this.currentNodeInfo = {
      node: null,
      gxType: null,
    };
    /**
     *
     */
    _this.mSimpleElements = 1;
    return _this;
  }
  Object.defineProperty(XMLReader.prototype, "name", {
    // Properties
    /**
     * Returns the name of the current element
     */
    get: function () {
      return this.currentNodeInfo.node
        ? this.currentNodeInfo.node.nodeName
        : "";
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "value", {
    /**
     * Returns the value of the current element
     */
    get: function () {
      return this.isSingleElementNode(this.currentNodeInfo.node)
        ? this.currentNodeInfo.node.textContent
        : "";
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "nodeType", {
    /**
     * Returns the current node type obtained through the method Read or ReadType
     */
    get: function () {
      return this.currentNodeInfo.gxType;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "eOF", {
    get: function () {
      return this.mEOF ? 1 : 0;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "isSimple", {
    /**
     * Indicates whether the current node obtained through the Read or ReadType method is simple
     */
    get: function () {
      return this.isSingleElementNode(this.currentNodeInfo.node) ? 1 : 0;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "prefix", {
    /**
     * Returns the element's the namespace if it exists
     */
    get: function () {
      var prefix = "";
      var components = this.name.split(":");
      if (components.length === 2) {
        prefix = components[0];
      }
      return prefix;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "localName", {
    /**
     * Returns the name that represents the namespace, without indicating the prefix
     */
    get: function () {
      var localName = "";
      var components = this.name.split(":");
      if (components.length === 2) {
        localName = components[1];
      } else {
        localName = components[0];
      }
      return localName;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "simpleElements", {
    get: function () {
      return this.mSimpleElements;
    },
    set: function (value) {
      this.mSimpleElements = value;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "elementType", {
    // Properties for node type constants
    /**
     *
     */
    get: function () {
      return GXNodeType.element;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "endTagType", {
    /**
     *
     */
    get: function () {
      return GXNodeType.endTag;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "textType", {
    /**
     *
     */
    get: function () {
      return GXNodeType.text;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "commentType", {
    /**
     *
     */
    get: function () {
      return GXNodeType.comment;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "whiteSpaceType", {
    /**
     *
     */
    get: function () {
      return GXNodeType.whiteSpace;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "cDataType", {
    /**
     *
     */
    get: function () {
      return GXNodeType.cdata;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "processingInstructionType", {
    /**
     *
     */
    get: function () {
      return GXNodeType.processingInstruction;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "doctypeType", {
    /**
     *
     */
    get: function () {
      return GXNodeType.documentType;
    },
    enumerable: false,
    configurable: true,
  });
  // Opening documents
  /**
   * Reads the XML document from the given string source
   * @param {string} source
   * @return number
   */
  XMLReader.prototype.openFromString = function (source) {
    this.resetDocument();
    this.resetErrors();
    var parser = new DOMParser();
    var hasError = false;
    var doc = parser.parseFromString(source, "application/xml");
    if (doc.documentElement.tagName === "parsererror") {
      this.mErrCode = xmlcommon_1.XMLErrorCodes.open_file;
      this.mErrDescription = doc.documentElement.innerText;
    }
    this.document = hasError ? null : doc;
    this.mEOF = hasError;
    return 0;
  };
  /**
   * Closes the current reading session
   * @return {number}
   */
  XMLReader.prototype.close = function () {
    this.resetDocument();
    return 0;
  };
  // Reading
  /**
   * Used to obtain the different nodes of the open file, in a sequential manner.
   * @return {number} If a node is read, the value returned is greater than zero. Otherwise it returns zero.
   */
  XMLReader.prototype.read = function () {
    if (!this.document) {
      this.mErrCode = xmlcommon_1.XMLErrorCodes.no_open_document;
      this.mErrDescription = "No open document";
    } else if (!this.currentNodeInfo.node) {
      if (!this.eOF) {
        this.setCurrentNode(this.document.documentElement);
      }
    } else {
      var node = this.currentNodeInfo.node;
      var gxType = this.currentNodeInfo.gxType;
      if (
        gxType !== GXNodeType.endTag &&
        node.childNodes.length > 0 &&
        (!this.isSingleElementNode(node) || !this.simpleElements)
      ) {
        this.setCurrentNode(node.firstChild);
      } else if (node.nextSibling) {
        this.setCurrentNode(node.nextSibling);
      } else if (
        node.parentNode &&
        node.parentNode.nodeType !== 9 /* Document */
      ) {
        this.setCurrentNode(node.parentNode, GXNodeType.endTag);
      } else {
        this.setCurrentNode(null);
      }
    }
    return this.currentNodeInfo.node ? 1 : 0;
  };
  /**
   * Moves forward to the following node, but only if constraints established are fulfilled
   * @param {number} nodeType Node types to consider
   * @param {string} name (Optional) Specifies the value for the name of the node to be read, as long as the node is Element or EndTag type
   * @return {number} If a node is read, the value returned is greater than zero. Otherwise it returns zero.
   */
  XMLReader.prototype.readType = function (nodeType, name) {
    if (name === void 0) {
      name = undefined;
    }
    var ret = this.read();
    while (ret > 0) {
      var currType = this.currentNodeInfo.gxType;
      if ((nodeType & currType) === currType && (!name || this.name === name)) {
        break;
      }
      ret = this.read();
    }
    return ret;
  };
  /**
   * Allows obtaining flat XML text from the start of an element.
   * @return {string} The XML corresponding to the current node
   */
  XMLReader.prototype.readRawXML = function () {
    var xml = "";
    if (this.currentNodeInfo.gxType === GXNodeType.element) {
      xml = this.currentNodeInfo.node.outerHTML;
      this.skip();
    }
    return xml;
  };
  /**
   * Allows skipping a full element with all its children/sons.
   * It is valid only for nodes of the Element type.
   * @return {number}
   */
  XMLReader.prototype.skip = function () {
    if (this.currentNodeInfo.gxType === GXNodeType.element) {
      var node = this.currentNodeInfo.node;
      if (node.nextSibling) {
        this.setCurrentNode(node.nextSibling);
      } else if (
        node.parentNode &&
        node.parentNode.nodeType !== 9 /* Document */
      ) {
        this.setCurrentNode(node.parentNode, GXNodeType.endTag);
      } else {
        this.setCurrentNode(null);
      }
    }
    return this.currentNodeInfo.node ? 1 : 0;
  };
  Object.defineProperty(XMLReader.prototype, "attributeCount", {
    // Attributes
    /**
     * Returns the number of attributes in the current node, obtained through the Read or ReadType methods
     */
    get: function () {
      var atts = this.getCurrentNodeAttributesList();
      return atts.length;
    },
    enumerable: false,
    configurable: true,
  });
  /**
   * Returns the value of an attribute of the current node indicated by its name
   * @param {string} name The attribute's name
   * @return {string} The attribute's value in the current node
   */
  XMLReader.prototype.getAttributeByName = function (name) {
    var atts = this.getCurrentNodeAttributesList();
    for (var _i = 0, atts_1 = atts; _i < atts_1.length; _i++) {
      var att = atts_1[_i];
      if (att.nodeName === name) {
        return att.nodeValue;
      }
    }
    return "";
  };
  /**
   * Returns the value of an attribute of the current node indicated by its index
   * @param {number} index The search index
   * @return {string} The attribute's value in the current node
   */
  XMLReader.prototype.getAttributeByIndex = function (index) {
    var atts = this.getCurrentNodeAttributesList();
    if (index >= 0 && index < atts.length) {
      return atts[index].nodeValue;
    }
    return "";
  };
  /**
   * Indicates if there is an attribute with the given name in the current node
   * @param {string} name The name of the attribute
   * @return {number} 1 if the attribute exists, 0 otherwise
   */
  XMLReader.prototype.existsAttribute = function (name) {
    var atts = this.getCurrentNodeAttributesList();
    for (var _i = 0, atts_2 = atts; _i < atts_2.length; _i++) {
      var att = atts_2[_i];
      if (att.nodeName === name) {
        return 1;
      }
    }
    return 0;
  };
  /**
   * Returns the full name, including the namespace if it exists
   * @param {number} index
   * @return string
   */
  XMLReader.prototype.getAttributeName = function (index) {
    var atts = this.getCurrentNodeAttributesList();
    if (index >= 0 && index < atts.length) {
      return atts[index].nodeName;
    }
    return "";
  };
  /**
   * Returns the attribute's the namespace if it exists
   * @param {number} index
   * @return string
   */
  XMLReader.prototype.getAttributePrefix = function (index) {
    var attName = this.getAttributeName(index);
    var prefix = "";
    if (attName !== "") {
      var components = attName.split(":");
      if (components.length === 2) {
        prefix = components[0];
      }
    }
    return prefix;
  };
  /**
   * Returns the name of the attribute, excluding the namespace if it exists
   * @param {number} index
   * @return string
   */
  XMLReader.prototype.getAttributeLocalName = function (index) {
    var attName = this.getAttributeName(index);
    var localName = "";
    if (attName !== "") {
      var components = attName.split(":");
      localName = components.length === 2 ? components[1] : attName;
    }
    return localName;
  };
  // Private methods
  XMLReader.prototype.resetErrors = function () {
    this.mErrCode = xmlcommon_1.XMLErrorCodes.no_error;
    this.mErrDescription = "";
  };
  XMLReader.prototype.resetDocument = function () {
    this.document = null;
    this.currentNodeInfo.node = null;
    this.currentNodeInfo.gxType = null;
    this.mEOF = true;
  };
  XMLReader.prototype.isSingleElementNode = function (node) {
    return (
      node &&
      node.nodeType === 1 &&
      node.childNodes.length === 1 &&
      node.firstChild.childNodes.length === 0
    );
  };
  XMLReader.prototype.nodeTypeToGXNodeType = function (type) {
    switch (type) {
      case 1: // Element
        return GXNodeType.element;
      case 3: // Text
        return GXNodeType.text;
      case 4: // CDATA
        return GXNodeType.cdata;
      case 7: // ProcessingInstruction
        return GXNodeType.processingInstruction;
      case 8: // Comment
        return GXNodeType.comment;
      case 10: // DocumentType
        return GXNodeType.documentType;
      case 2: // Attr
      case 5: // EntityReference
      case 6: // Entity
      case 9: // Document
      case 11: // DocumentFragment
      case 12: // Notation
      default:
        return undefined;
    }
  };
  XMLReader.prototype.setCurrentNode = function (node, gxNodeType) {
    if (gxNodeType === void 0) {
      gxNodeType = undefined;
    }
    this.currentNodeInfo.node = node;
    if (node) {
      this.currentNodeInfo.gxType = gxNodeType
        ? gxNodeType
        : this.nodeTypeToGXNodeType(node.nodeType);
    } else {
      this.currentNodeInfo.gxType = null;
    }
    this.setEOFForCurrentNode();
  };
  XMLReader.prototype.getCurrentNodeAttributesList = function () {
    var element = this.currentNodeInfo.node;
    if (!element) {
      return null;
    }
    return Array.from(element.attributes);
  };
  XMLReader.prototype.setEOFForCurrentNode = function () {
    var node = this.currentNodeInfo.node;
    if (node === null) {
      this.mEOF = true;
    } else {
      var gxType = this.currentNodeInfo.gxType;
      if (
        (gxType !== GXNodeType.endTag && node.childNodes.length > 0) ||
        node.nextSibling ||
        (node.parentNode && node.parentNode.nodeType !== 9) /* Document */
      ) {
        this.mEOF = false;
      } else {
        this.mEOF = true;
      }
    }
  };
  // Not (yet) supported
  /**
   * @param {string} file
   * @return number
   */
  XMLReader.prototype.open = function (file) {
    helpers_1.notSupported();
    return null;
  };
  // ===========================
  // To check
  // ===========================
  /**
   * @param request
   * @return any
   */
  XMLReader.prototype.openRequest = function (request) {
    helpers_1.notImplemented();
    return null;
  };
  /**
   * @param client
   * @return any
   */
  XMLReader.prototype.openResponse = function (client) {
    helpers_1.notImplemented();
    return null;
  };
  /**
   * Returns the URI of the namespace if it exists
   * @param {number} index
   * @return string
   */
  XMLReader.prototype.getAttributeURI = function (index) {
    helpers_1.notImplemented();
    return null;
  };
  /**
   * @param index
   * @return any
   */
  XMLReader.prototype.getAttEntityValueByIndex = function (index) {
    helpers_1.notImplemented();
    return null;
  };
  /**
   * @param name
   * @return any
   */
  XMLReader.prototype.getAttEntityValueByName = function (name) {
    helpers_1.notImplemented();
    return null;
  };
  /**
   * @param index
   * @return any
   */
  XMLReader.prototype.getAttEntityNotationByIndex = function (index) {
    helpers_1.notImplemented();
    return null;
  };
  /**
   * @param name
   * @return any
   */
  XMLReader.prototype.getAttEntityNotationByName = function (name) {
    helpers_1.notImplemented();
    return null;
  };
  /**
   * @param encoding
   * @return any
   */
  XMLReader.prototype.setDocEncoding = function (encoding) {
    helpers_1.notImplemented();
    return null;
  };
  /**
   * @param encoding
   * @return any
   */
  XMLReader.prototype.setNodeEncoding = function (encoding) {
    helpers_1.notImplemented();
    return null;
  };
  /**
   * @param uri
   * @param namespace
   * @return any
   */
  XMLReader.prototype.addSchema = function (uri, namespace) {
    helpers_1.notImplemented();
    return null;
  };
  Object.defineProperty(XMLReader.prototype, "errLineNumber", {
    get: function () {
      return this.merrLineNumber;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "errLinePos", {
    get: function () {
      return this.merrLinePos;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "nameSpaceURI", {
    get: function () {
      return this.mnameSpaceURI;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "readExternalEntities", {
    get: function () {
      return this.mreadExternalEntities;
    },
    set: function (value) {
      this.mreadExternalEntities = value;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "removeWhiteSpaces", {
    get: function () {
      return this.mremoveWhiteSpaces;
    },
    set: function (value) {
      this.mremoveWhiteSpaces = value;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "removeWhiteNodes", {
    get: function () {
      return this.mremoveWhiteNodes;
    },
    set: function (value) {
      this.mremoveWhiteNodes = value;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "linesNormalization", {
    get: function () {
      return this.mlinesNormalization;
    },
    set: function (value) {
      this.mlinesNormalization = value;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "stopOnInvalid", {
    get: function () {
      return this.mstopOnInvalid;
    },
    set: function (value) {
      this.mstopOnInvalid = value;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(XMLReader.prototype, "validationType", {
    get: function () {
      return this.mvalidationType;
    },
    set: function (value) {
      this.mvalidationType = value;
    },
    enumerable: false,
    configurable: true,
  });
  return XMLReader;
})(xmlcommon_1.XMLBase);
exports.XMLReader = XMLReader;
//# sourceMappingURL=xmlreader.js.map
