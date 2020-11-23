const CodeMirror = require('codemirror')

CodeMirror.defineSimpleMode('powerquery', {
    // The start state contains the rules that are intially used
    start: [
        { regex: /#"(?:[^"\r\n]|"")*"(?!")/, token: "variable" },
        { regex: /"(?:[^"\r\n]|"")*"(?!")/, token: "string" },
        {regex: /;.*/, token: "comment"},
        {regex: /\/\*/, token: "comment", next: "comment"},
        { regex: /\bDay\.(?:Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)\b/, token: "constant" },
        { regex: /\bTraceLevel\.(?:Critical|Error|Information|Verbose|Warning)\b/, token: "constant" },
        { regex: /\bOccurrence\.(?:First|Last|All)\b/, token: "constant" },
        { regex: /\bOrder\.(?:Ascending|Descending)\b/, token: "constant" },
        { regex: /\bRoundingMode\.(?:AwayFromZero|Down|ToEven|TowardZero|Up)\b/, token: "constant" },
        { regex: /\bMissingField\.(?:Error|Ignore|UseNull)\b/, token: "constant" },
        { regex: /\bQuoteStyle\.(?:Csv|None)\b/, token: "constant" },
        { regex: /\bJoinKind\.(?:Inner|LeftOuter|RightOuter|FullOuter|LeftAnti|RightAnti)\b/, token: "constant" },
        { regex: /\bGroupKind\.(?:Global|Local)\b/, token: "constant" },
        { regex: /\bExtraValues\.(?:List|Ignore|Error)\b/, token: "constant" },
        { regex: /\bJoinAlgorithm\.(?:Dynamic|PairwiseHash|SortMerge|LeftHash|RightHash|LeftIndex|RightIndex)\b/, token: "constant" },
        { regex: /\bJoinSide\.(?:Left|Right)\b/, token: "constant" },
        { regex: /\bPrecision\.(?:Double|Decimal)\b/, token: "constant" },
        { regex: /\bRelativePosition\.From(?:End|Start)\b/, token: "constant" },
        { regex: /\bTextEncoding\.(?:Ascii|BigEndianUnicode|Unicode|Utf8|Utf16|Windows)\b/, token: "constant" },
        { regex: /\b(?:Any|Binary|Date|DateTime|DateTimeZone|Duration|Int8|Int16|Int32|Int64|Function|List|Logical|None|Number|Record|Table|Text|Time)\.Type\b/, token: "constant" },
        { regex: /\bnull\b/, token: "constant" },
        { regex: /\b(?:true|false)\b/, token: "boolean" },
        {
            regex: /\b(?:and|as|each|else|error|if|in|is|let|meta|not|nullable|optional|or|otherwise|section|shared|then|try|type)\b|#(?:binary|date|datetime|datetimezone|duration|infinity|nan|sections|shared|table|time)\b/,
            token: "keyword"
        },
        { regex: /(^|[^#\w.])(?!\d)[\w.]+(?=\s*\()/, token: "atom" },
        { regex: /\b(?:any|anynonnull|binary|date|datetime|datetimezone|duration|function|list|logical|none|number|record|table|text|time|type)\b/, token: "data-type" },
        { regex: /\b0x[\da-f]+\b|(?:[+-]?(?:\b\d+\.)?\b\d+|[+-]\.\d+|(^|[^.])\B\.\d+)(?:e[+-]?\d+)?\b/i, token: "number" },
        { regex: /[-+*\/&?@^]|<(?:=>?|>)?|>=?|=>?|\.\.\.?/, token: "operator" },
        { regex: /[,;\[\](){}]/, token: "punctuation" }
    ],
    // The multi-line comment state.
    comment: [
        { regex: /.*?\*\//, token: "comment", next: "start" },
        { regex: /.*/, token: "comment" }
    ],
    // The meta property contains global information about the mode. It
    // can contain properties like lineComment, which are supported by
    // all modes, and also directives like dontIndentStates, which are
    // specific to simple modes.
    meta: {
        dontIndentStates: ["comment"],
        lineComment: "//"
    }
})

CodeMirror.defineMIME('text/x-powerquery', 'powerquery')
