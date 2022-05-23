"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCases = void 0;
exports.testCases = [
    [
        /*from https://developer.mozilla.org/en-US/docs/Web/API/XSLTProcessor/Basic_Example*/
        "\n    <?xml version=\"1.0\"?>\n    <?xml-stylesheet type=\"text/xsl\" href=\"example.xsl\"?>\n    <Article>\n      <Title>My Article</Title>\n      <Authors>\n        <Author>Mr. Foo</Author>\n        <Author>Mr. Bar</Author>\n      </Authors>\n      <Body>This is my article text.</Body>\n    </Article>\n    ",
        "<?xml version=\"1.0\"?>\n      <xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\">\n      <xsl:output method=\"text\"/>\n      <xsl:template match=\"/\">\n        Article - <xsl:value-of select=\"/Article/Title\"/>\n        Authors:<xsl:apply-templates select=\"/Article/Authors/Author\"/>\n      </xsl:template>\n    <xsl:template match=\"Author\">\n      - <xsl:value-of select=\".\" />\n    </xsl:template>\n    </xsl:stylesheet>\n  ",
        "\n        Article - My Article\n        Authors:\n      - Mr. Foo\n      - Mr. Bar",
    ],
];
//# sourceMappingURL=xsltapply-cases.js.map