import { XMLBase } from "./xmlcommon";
export declare class XMLWriter extends XMLBase {
    private static XMLWriterElementStack;
    private document;
    private elemStack;
    private encoding;
    private standalone;
    /**
     * Allows to inquire the value of the XML document that is in the internal buffer
     * when the document was created with the OpenToString() method
     */
    get resultingString(): string;
    /**
     * Allows the creation of an XML document by an internal buffer instead of a file
     * @return {number}
     */
    openToString(): any;
    /**
     * Closes the current writing session
     * @return {number}
     */
    close(): number;
    /**
     * Writes the XML declaration using version 1.0 and ISO-8859-1 coding
     * @param {string} encoding Encoding to be used in the XML file
     * @param {number} standalone
     * @return {number}
     */
    writeStartDocument(encoding?: string, standalone?: number): any;
    /**
     * Writes an element with the indicated value
     * @param {string} name Element's name
     * @param {string} value Element's value
     * @return {number}
     */
    writeElement(name: string, value: string): number;
    /**
     * Starts a compound element
     * @param {string} name Element's name
     * @return {number}
     */
    writeStartElement(name: string): number;
    /**
     * Closes the last element that was opened using the WriteStartElement method
     * @return {number}
     */
    writeEndElement(): number;
    /**
     * Generates character data with the indicated value string
     * @param {string} text
     * @return {number}
     */
    writeText(text: string): number;
    /**
     * Creates an attribute in the current element
     * @param {string} name Attribute's name
     * @param {string} value Attribute's value
     * @return {number}
     */
    writeAttribute(name: string, value: string): number;
    /**
     * Generates any text without replacing special characters with character sequences
     * @param {string} text Text to append
     * @return {number}
     */
    writeRawText(text: string): number;
    /**
     * Writes the comment indicated
     * @param {string} comment
     * @return {number}
     */
    writeComment(comment: string): number;
    /**
     * Writes a CData section with the indicated value
     * @param {string} cData Value to write as a CData section
     * @return any
     */
    writeCData(cData: string): number;
    private appendNodeToCurrentElement;
    private resetErrors;
    /**
     * @param {string} file
     * @return number
     */
    open(file: string): number;
    /**
     * @param client
     * @return any
     */
    openRequest(client: any): any;
    /**
     * @param response
     * @return any
     */
    openResponse(response: any): any;
    /**
     * @param entity
     * @return any
     */
    writeEntityReference(entity: any): any;
    /**
     * @param target
     * @param value
     * @return any
     */
    writeProcessingInstruction(target: any, value: any): any;
    /**
     * @param name
     * @param subset
     * @return any
     */
    writeDocType(name: any, subset: any): any;
    /**
     * @param name
     * @param uri
     * @param subset
     * @return any
     */
    writeDocTypeSystem(name: any, uri: any, subset: any): any;
    /**
     * @param name
     * @param pubId
     * @param uri
     * @param subset
     * @return any
     */
    writeDocTypePublic(name: any, pubId: any, uri: any, subset: any): any;
    /**
     * @param localName
     * @param prefix
     * @param nameSpaceURI
     * @return any
     */
    writeNSStartElement(localName: any, prefix: any, nameSpaceURI: any): any;
    /**
     * @param localName
     * @param nameSpaceURI
     * @param value
     * @return any
     */
    writeNSElement(localName: any, nameSpaceURI: any, value: any): any;
    /**
     *
     */
    private mindentation;
    get indentation(): number;
    set indentation(value: number);
    /**
     *
     */
    private mindentChar;
    get indentChar(): any;
    set indentChar(value: any);
}
