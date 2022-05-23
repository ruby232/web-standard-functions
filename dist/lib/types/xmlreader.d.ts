import { XMLBase } from "./xmlcommon";
export declare class XMLReader extends XMLBase {
    private document;
    private currentNodeInfo;
    /**
     * Returns the name of the current element
     */
    get name(): string;
    /**
     * Returns the value of the current element
     */
    get value(): string;
    /**
     * Returns the current node type obtained through the method Read or ReadType
     */
    get nodeType(): number;
    /**
     * Indicates whether the end of the document was reached
     */
    private mEOF;
    get eOF(): number;
    /**
     * Indicates whether the current node obtained through the Read or ReadType method is simple
     */
    get isSimple(): number;
    /**
     * Returns the element's the namespace if it exists
     */
    get prefix(): string;
    /**
     * Returns the name that represents the namespace, without indicating the prefix
     */
    get localName(): string;
    /**
     *
     */
    private mSimpleElements;
    get simpleElements(): number;
    set simpleElements(value: number);
    /**
     *
     */
    get elementType(): number;
    /**
     *
     */
    get endTagType(): number;
    /**
     *
     */
    get textType(): number;
    /**
     *
     */
    get commentType(): number;
    /**
     *
     */
    get whiteSpaceType(): number;
    /**
     *
     */
    get cDataType(): number;
    /**
     *
     */
    get processingInstructionType(): number;
    /**
     *
     */
    get doctypeType(): number;
    /**
     * Reads the XML document from the given string source
     * @param {string} source
     * @return number
     */
    openFromString(source: string): number;
    /**
     * Closes the current reading session
     * @return {number}
     */
    close(): number;
    /**
     * Used to obtain the different nodes of the open file, in a sequential manner.
     * @return {number} If a node is read, the value returned is greater than zero. Otherwise it returns zero.
     */
    read(): number;
    /**
     * Moves forward to the following node, but only if constraints established are fulfilled
     * @param {number} nodeType Node types to consider
     * @param {string} name (Optional) Specifies the value for the name of the node to be read, as long as the node is Element or EndTag type
     * @return {number} If a node is read, the value returned is greater than zero. Otherwise it returns zero.
     */
    readType(nodeType: number, name?: string): number;
    /**
     * Allows obtaining flat XML text from the start of an element.
     * @return {string} The XML corresponding to the current node
     */
    readRawXML(): string;
    /**
     * Allows skipping a full element with all its children/sons.
     * It is valid only for nodes of the Element type.
     * @return {number}
     */
    skip(): number;
    /**
     * Returns the number of attributes in the current node, obtained through the Read or ReadType methods
     */
    get attributeCount(): number;
    /**
     * Returns the value of an attribute of the current node indicated by its name
     * @param {string} name The attribute's name
     * @return {string} The attribute's value in the current node
     */
    getAttributeByName(name: string): string;
    /**
     * Returns the value of an attribute of the current node indicated by its index
     * @param {number} index The search index
     * @return {string} The attribute's value in the current node
     */
    getAttributeByIndex(index: number): string;
    /**
     * Indicates if there is an attribute with the given name in the current node
     * @param {string} name The name of the attribute
     * @return {number} 1 if the attribute exists, 0 otherwise
     */
    existsAttribute(name: any): number;
    /**
     * Returns the full name, including the namespace if it exists
     * @param {number} index
     * @return string
     */
    getAttributeName(index: number): string;
    /**
     * Returns the attribute's the namespace if it exists
     * @param {number} index
     * @return string
     */
    getAttributePrefix(index: number): string;
    /**
     * Returns the name of the attribute, excluding the namespace if it exists
     * @param {number} index
     * @return string
     */
    getAttributeLocalName(index: number): string;
    private resetErrors;
    private resetDocument;
    private isSingleElementNode;
    private nodeTypeToGXNodeType;
    private setCurrentNode;
    private getCurrentNodeAttributesList;
    private setEOFForCurrentNode;
    /**
     * @param {string} file
     * @return number
     */
    open(file: string): number;
    /**
     * @param request
     * @return any
     */
    openRequest(request: any): any;
    /**
     * @param client
     * @return any
     */
    openResponse(client: any): any;
    /**
     * Returns the URI of the namespace if it exists
     * @param {number} index
     * @return string
     */
    getAttributeURI(index: number): string;
    /**
     * @param index
     * @return any
     */
    getAttEntityValueByIndex(index: number): any;
    /**
     * @param name
     * @return any
     */
    getAttEntityValueByName(name: any): any;
    /**
     * @param index
     * @return any
     */
    getAttEntityNotationByIndex(index: number): any;
    /**
     * @param name
     * @return any
     */
    getAttEntityNotationByName(name: any): any;
    /**
     * @param encoding
     * @return any
     */
    setDocEncoding(encoding: any): any;
    /**
     * @param encoding
     * @return any
     */
    setNodeEncoding(encoding: any): any;
    /**
     * @param uri
     * @param namespace
     * @return any
     */
    addSchema(uri: any, namespace: any): any;
    /**
     *
     */
    private merrLineNumber;
    get errLineNumber(): number;
    /**
     *
     */
    private merrLinePos;
    get errLinePos(): number;
    /**
     *
     */
    private mnameSpaceURI;
    get nameSpaceURI(): any;
    /**
     *
     */
    private mreadExternalEntities;
    get readExternalEntities(): number;
    set readExternalEntities(value: number);
    /**
     *
     */
    private mremoveWhiteSpaces;
    get removeWhiteSpaces(): number;
    set removeWhiteSpaces(value: number);
    /**
     *
     */
    private mremoveWhiteNodes;
    get removeWhiteNodes(): number;
    set removeWhiteNodes(value: number);
    /**
     *
     */
    private mlinesNormalization;
    get linesNormalization(): number;
    set linesNormalization(value: number);
    /**
     *
     */
    private mstopOnInvalid;
    get stopOnInvalid(): number;
    set stopOnInvalid(value: number);
    /**
     *
     */
    private mvalidationType;
    get validationType(): number;
    set validationType(value: number);
}
