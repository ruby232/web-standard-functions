var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
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
import { notImplemented, notSupported } from "../misc/helpers";
import { XMLBase, XMLErrorCodes as ErrorCodes } from "./xmlcommon";
var XMLWriter = /** @class */ (function(_super) {
  __extends(XMLWriter, _super);
  function XMLWriter() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    // Internal variables
    _this.document = null;
    _this.elemStack = new XMLWriter.XMLWriterElementStack();
    _this.encoding = null;
    _this.standalone = null;
    return _this;
  }
  Object.defineProperty(XMLWriter.prototype, "resultingString", {
    // Properties
    /**
     * Allows to inquire the value of the XML document that is in the internal buffer
     * when the document was created with the OpenToString() method
     */
    get: function() {
      var content = this.document.firstElementChild.outerHTML;
      if (this.encoding) {
        var standalone = this.standalone ? ' standalone="yes"' : "";
        var hedader =
          '<?xml version="1.0" encoding="' +
          this.encoding +
          '"' +
          standalone +
          "?>";
        content = "" + hedader + content;
      }
      return content;
    },
    enumerable: false,
    configurable: true
  });
  // Opening documents
  /**
   * Allows the creation of an XML document by an internal buffer instead of a file
   * @return {number}
   */
  XMLWriter.prototype.openToString = function() {
    this.document = document.implementation.createDocument("", "", null);
    this.elemStack = new XMLWriter.XMLWriterElementStack();
    this.resetErrors();
    return 0;
  };
  /**
   * Closes the current writing session
   * @return {number}
   */
  XMLWriter.prototype.close = function() {
    this.document = null;
    this.elemStack = null;
    return 0;
  };
  // Writing
  /**
   * Writes the XML declaration using version 1.0 and ISO-8859-1 coding
   * @param {string} encoding Encoding to be used in the XML file
   * @param {number} standalone
   * @return {number}
   */
  XMLWriter.prototype.writeStartDocument = function(encoding, standalone) {
    if (encoding === void 0) {
      encoding = "ISO-8859-1";
    }
    if (standalone === void 0) {
      standalone = 0;
    }
    this.encoding = encoding;
    this.standalone = standalone !== 0;
    return 0;
  };
  /**
   * Writes an element with the indicated value
   * @param {string} name Element's name
   * @param {string} value Element's value
   * @return {number}
   */
  XMLWriter.prototype.writeElement = function(name, value) {
    if (this.errCode === 0) {
      this.writeStartElement(name);
    }
    if (this.errCode === 0) {
      this.writeText(value);
      this.writeEndElement();
    }
    return this.errCode;
  };
  /**
   * Starts a compound element
   * @param {string} name Element's name
   * @return {number}
   */
  XMLWriter.prototype.writeStartElement = function(name) {
    if (this.errCode === 0) {
      if (this.document) {
        var elem = this.document.createElement(name);
        this.elemStack.push(elem);
      } else {
        this.mErrCode = ErrorCodes.no_open_document;
        this.mErrDescription = "No open document";
      }
    }
    return this.mErrCode;
  };
  /**
   * Closes the last element that was opened using the WriteStartElement method
   * @return {number}
   */
  XMLWriter.prototype.writeEndElement = function() {
    if (this.errCode === 0) {
      var elem = this.elemStack.pop();
      if (elem) {
        var parent_1 = this.elemStack.top() || this.document;
        parent_1.appendChild(elem);
      } else {
        this.mErrCode = ErrorCodes.missing_start_element;
        this.mErrDescription = "Missing start element";
      }
    }
    return this.errCode;
  };
  /**
   * Generates character data with the indicated value string
   * @param {string} text
   * @return {number}
   */
  XMLWriter.prototype.writeText = function(text) {
    var _this = this;
    return this.appendNodeToCurrentElement(false, function() {
      return _this.document.createTextNode(text);
    });
  };
  /**
   * Creates an attribute in the current element
   * @param {string} name Attribute's name
   * @param {string} value Attribute's value
   * @return {number}
   */
  XMLWriter.prototype.writeAttribute = function(name, value) {
    if (this.errCode === 0) {
      var elem = this.elemStack.top();
      if (elem) {
        elem.setAttribute(name, value);
      } else {
        this.mErrCode = ErrorCodes.missing_start_element;
        this.mErrDescription = "Missing start element";
      }
    }
    return this.errCode;
  };
  /**
   * Generates any text without replacing special characters with character sequences
   * @param {string} text Text to append
   * @return {number}
   */
  XMLWriter.prototype.writeRawText = function(text) {
    var _this = this;
    return this.appendNodeToCurrentElement(true, function() {
      var xml = new DOMParser().parseFromString(text, "application/xml");
      if (xml.documentElement.nodeName === "parsererror") {
        _this.mErrCode = ErrorCodes.unknown_error;
        _this.mErrDescription = xml.documentElement.firstChild.nodeValue;
        return null;
      } else {
        return xml.documentElement;
      }
    });
  };
  /**
   * Writes the comment indicated
   * @param {string} comment
   * @return {number}
   */
  XMLWriter.prototype.writeComment = function(comment) {
    var _this = this;
    return this.appendNodeToCurrentElement(true, function() {
      return _this.document.createComment(comment);
    });
  };
  /**
   * Writes a CData section with the indicated value
   * @param {string} cData Value to write as a CData section
   * @return any
   */
  XMLWriter.prototype.writeCData = function(cData) {
    var _this = this;
    return this.appendNodeToCurrentElement(false, function() {
      return _this.document.createCDATASection(cData);
    });
  };
  // Private methods
  XMLWriter.prototype.appendNodeToCurrentElement = function(
    allowAppendToDocument,
    nodeCreation
  ) {
    if (this.errCode === 0) {
      var elem =
        this.elemStack.top() || (allowAppendToDocument ? this.document : null);
      if (elem) {
        var xml = nodeCreation();
        if (xml) {
          elem.appendChild(xml);
        }
      } else {
        this.mErrCode = ErrorCodes.missing_start_element;
        this.mErrDescription = "Missing start element";
      }
    }
    return this.errCode;
  };
  XMLWriter.prototype.resetErrors = function() {
    this.mErrCode = ErrorCodes.no_error;
    this.mErrDescription = "";
  };
  // Not (yet) supported
  /**
   * @param {string} file
   * @return number
   */
  XMLWriter.prototype.open = function(file) {
    notSupported();
    return null;
  };
  // ===========================
  // To check
  // ===========================
  /**
   * @param client
   * @return any
   */
  XMLWriter.prototype.openRequest = function(client) {
    notImplemented();
    return null;
  };
  /**
   * @param response
   * @return any
   */
  XMLWriter.prototype.openResponse = function(response) {
    notImplemented();
    return null;
  };
  /**
   * @param entity
   * @return any
   */
  XMLWriter.prototype.writeEntityReference = function(entity) {
    notImplemented();
    return null;
  };
  /**
   * @param target
   * @param value
   * @return any
   */
  XMLWriter.prototype.writeProcessingInstruction = function(target, value) {
    notImplemented();
    return null;
  };
  /**
   * @param name
   * @param subset
   * @return any
   */
  XMLWriter.prototype.writeDocType = function(name, subset) {
    notImplemented();
    return null;
  };
  /**
   * @param name
   * @param uri
   * @param subset
   * @return any
   */
  XMLWriter.prototype.writeDocTypeSystem = function(name, uri, subset) {
    notImplemented();
    return null;
  };
  /**
   * @param name
   * @param pubId
   * @param uri
   * @param subset
   * @return any
   */
  XMLWriter.prototype.writeDocTypePublic = function(name, pubId, uri, subset) {
    notImplemented();
    return null;
  };
  /**
   * @param localName
   * @param prefix
   * @param nameSpaceURI
   * @return any
   */
  XMLWriter.prototype.writeNSStartElement = function(
    localName,
    prefix,
    nameSpaceURI
  ) {
    notImplemented();
    return null;
  };
  /**
   * @param localName
   * @param nameSpaceURI
   * @param value
   * @return any
   */
  XMLWriter.prototype.writeNSElement = function(
    localName,
    nameSpaceURI,
    value
  ) {
    notImplemented();
    return null;
  };
  Object.defineProperty(XMLWriter.prototype, "indentation", {
    get: function() {
      return this.mindentation;
    },
    set: function(value) {
      this.mindentation = value;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(XMLWriter.prototype, "indentChar", {
    get: function() {
      return this.mindentChar;
    },
    set: function(value) {
      this.mindentChar = value;
    },
    enumerable: false,
    configurable: true
  });
  XMLWriter.XMLWriterElementStack = /** @class */ (function() {
    function class_1() {
      this.elements = new Array();
    }
    class_1.prototype.push = function(elem) {
      this.elements.push(elem);
    };
    class_1.prototype.pop = function() {
      return this.elements.length > 0 ? this.elements.pop() : undefined;
    };
    class_1.prototype.top = function() {
      return this.elements.length > 0
        ? this.elements[this.elements.length - 1]
        : undefined;
    };
    return class_1;
  })();
  return XMLWriter;
})(XMLBase);
export { XMLWriter };
//# sourceMappingURL=xmlwriter.js.map
