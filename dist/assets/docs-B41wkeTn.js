import"./style-DVz5UXrZ.js";function e(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var t=e();function n(e){t=e}var r={exec:()=>null};function i(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(o.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var a=(()=>{try{return!0}catch{return!1}})(),o={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,`i`),blockquoteBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}>`)},s=/^(?:[ \t]*(?:\n|$))+/,c=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,l=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,u=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,d=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,f=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,p=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,m=i(p).replace(/bull/g,f).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),ee=i(p).replace(/bull/g,f).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),h=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,te=/^[^\n]+/,g=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ne=i(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,g).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),re=i(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,f).getRegex(),_=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,v=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ie=i(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,v).replace(`tag`,_).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),y=i(h).replace(`hr`,u).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,_).getRegex(),b={blockquote:i(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,y).getRegex(),code:c,def:ne,fences:l,heading:d,hr:u,html:ie,lheading:m,list:re,newline:s,paragraph:y,table:r,text:te},x=i(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,u).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,_).getRegex(),ae={...b,lheading:ee,table:x,paragraph:i(h).replace(`hr`,u).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,x).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,_).getRegex()},oe={...b,html:i(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,v).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:r,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:i(h).replace(`hr`,u).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,m).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},se=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ce=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,S=/^( {2,}|\\)\n(?!\s*$)/,le=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,C=/[\p{P}\p{S}]/u,w=/[\s\p{P}\p{S}]/u,T=/[^\s\p{P}\p{S}]/u,ue=i(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,w).getRegex(),E=/(?!~)[\p{P}\p{S}]/u,de=/(?!~)[\s\p{P}\p{S}]/u,fe=/(?:[^\s\p{P}\p{S}]|~)/u,pe=i(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,a?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),D=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,me=i(D,`u`).replace(/punct/g,C).getRegex(),he=i(D,`u`).replace(/punct/g,E).getRegex(),O=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,ge=i(O,`gu`).replace(/notPunctSpace/g,T).replace(/punctSpace/g,w).replace(/punct/g,C).getRegex(),_e=i(O,`gu`).replace(/notPunctSpace/g,fe).replace(/punctSpace/g,de).replace(/punct/g,E).getRegex(),ve=i(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,T).replace(/punctSpace/g,w).replace(/punct/g,C).getRegex(),ye=i(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,C).getRegex(),be=i(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,T).replace(/punctSpace/g,w).replace(/punct/g,C).getRegex(),xe=i(/\\(punct)/,`gu`).replace(/punct/g,C).getRegex(),Se=i(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ce=i(v).replace(`(?:-->|$)`,`-->`).getRegex(),we=i(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Ce).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),k=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Te=i(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,k).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),A=i(/^!?\[(label)\]\[(ref)\]/).replace(`label`,k).replace(`ref`,g).getRegex(),j=i(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,g).getRegex(),Ee=i(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,A).replace(`nolink`,j).getRegex(),M=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,N={_backpedal:r,anyPunctuation:xe,autolink:Se,blockSkip:pe,br:S,code:ce,del:r,delLDelim:r,delRDelim:r,emStrongLDelim:me,emStrongRDelimAst:ge,emStrongRDelimUnd:ve,escape:se,link:Te,nolink:j,punctuation:ue,reflink:A,reflinkSearch:Ee,tag:we,text:le,url:r},De={...N,link:i(/^!?\[(label)\]\((.*?)\)/).replace(`label`,k).getRegex(),reflink:i(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,k).getRegex()},P={...N,emStrongRDelimAst:_e,emStrongLDelim:he,delLDelim:ye,delRDelim:be,url:i(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,M).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:i(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,M).getRegex()},Oe={...P,br:i(S).replace(`{2,}`,`*`).getRegex(),text:i(P.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},F={normal:b,gfm:ae,pedantic:oe},I={normal:N,gfm:P,breaks:Oe,pedantic:De},ke={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},L=e=>ke[e];function R(e,t){if(t){if(o.escapeTest.test(e))return e.replace(o.escapeReplace,L)}else if(o.escapeTestNoEncode.test(e))return e.replace(o.escapeReplaceNoEncode,L);return e}function z(e){try{e=encodeURI(e).replace(o.percentDecode,`%`)}catch{return null}return e}function B(e,t){let n=e.replace(o.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(o.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(o.slashPipe,`|`);return n}function V(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function Ae(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function je(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function H(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function Me(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var U=class{options;rules;lexer;constructor(e){this.options=e||t}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,``);return{type:`code`,raw:t[0],codeBlockStyle:`indented`,text:this.options.pedantic?e:V(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=Me(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=V(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:V(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=V(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=je(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),e.task){if(e.text=e.text.replace(this.rules.other.listReplaceTask,``),e.tokens[0]?.type===`text`||e.tokens[0]?.type===`paragraph`){e.tokens[0].raw=e.tokens[0].raw.replace(this.rules.other.listReplaceTask,``),e.tokens[0].text=e.tokens[0].text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}}let t=this.rules.other.listTaskCheckbox.exec(e.raw);if(t){let n={type:`checkbox`,raw:t[0]+` `,checked:t[0]!==`[ ]`};e.checked=n.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=n.raw+e.tokens[0].raw,e.tokens[0].text=n.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(n)):e.tokens.unshift({type:`paragraph`,raw:n.raw,text:n.raw,tokens:[n]}):e.tokens.unshift(n)}}if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:`html`,block:!0,raw:t[0],pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:t[0],href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=B(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(B(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:t[0],depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=V(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=Ae(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),H(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return H(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},W=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||t,this.options.tokenizer=this.options.tokenizer||new U,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:o,block:F.normal,inline:I.normal};this.options.pedantic?(n.block=F.pedantic,n.inline=I.pedantic):this.options.gfm&&(n.block=F.gfm,this.options.breaks?n.inline=I.breaks:n.inline=I.gfm),this.tokenizer.rules=n}static get rules(){return{block:F,inline:I}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(o.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(o.tabCharGlobal,`    `).replace(o.spaceLine,``));e;){let r;if(this.options.extensions?.block?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let n=t.at(-1);r.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.text,this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},t.push(r));continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){let a=t.at(-1);n&&a?.type===`paragraph`?(a.raw+=(a.raw.endsWith(`
`)?``:`
`)+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(r),n=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``;for(;e;){a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return t}},G=class{options;parser;constructor(e){this.options=e||t}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(o.notSpaceStart)?.[0],i=e.replace(o.endingNewline,``)+`
`;return r?`<pre><code class="language-`+R(r)+`">`+(n?i:R(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:R(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${R(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=z(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+R(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=z(e);if(i===null)return R(n);e=i;let a=`<img src="${e}" alt="${R(n)}"`;return t&&(a+=` title="${R(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:R(e.text)}},K=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},q=class e{options;renderer;textRenderer;constructor(e){this.options=e||t,this.options.renderer=this.options.renderer||new G,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new K}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},J=class{options;block;constructor(e){this.options=e||t}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?W.lex:W.lexInline}provideParser(){return this.block?q.parse:q.parseInline}},Y=new class{defaults=e();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=q;Renderer=G;TextRenderer=K;Lexer=W;Tokenizer=U;Hooks=J;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new G(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new U(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new J;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];J.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&J.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return W.lex(e,t??this.defaults)}parser(e,t){return q.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer():e?W.lex:W.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser():e?q.parse:q.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer():e?W.lex:W.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser():e?q.parse:q.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+R(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function X(e,t){return Y.parse(e,t)}X.options=X.setOptions=function(e){return Y.setOptions(e),X.defaults=Y.defaults,n(X.defaults),X},X.getDefaults=e,X.defaults=t,X.use=function(...e){return Y.use(...e),X.defaults=Y.defaults,n(X.defaults),X},X.walkTokens=function(e,t){return Y.walkTokens(e,t)},X.parseInline=Y.parseInline,X.Parser=q,X.parser=q.parse,X.Renderer=G,X.TextRenderer=K,X.Lexer=W,X.lexer=W.lex,X.Tokenizer=U,X.Hooks=J,X.parse=X,X.options,X.setOptions,X.use,X.walkTokens,X.parseInline,q.parse,W.lex;var Ne={en:`# GitBulk — Technical Documentation

## Table of Contents

1. [Executive Overview](#executive-overview)
2. [Core Capabilities](#core-capabilities)
3. [System Architecture](#system-architecture)
4. [Installation & Deployment](#installation--deployment)
5. [Authentication & Security](#authentication--security)
6. [Workspace Management](#workspace-management)
7. [Repository Groups & Topology](#repository-groups--topology)
8. [Command Reference](#command-reference)
9. [Global Flags & Configuration](#global-flags--configuration)

---

## Executive Overview

**GitBulk** is an enterprise-grade orchestration platform for Git repository management, available as both a CLI tool and a native desktop GUI. It is purpose-built for organizations managing large-scale software infrastructure — from microservice backends and distributed frontend systems to multi-team monorepo environments.

In environments with dozens or hundreds of active repositories, the operational overhead of managing each independently creates compounding inefficiency: engineers waste critical time running redundant commands, resolving environment drift, and diagnosing pipeline failures across disconnected workspaces. GitBulk eliminates this overhead entirely.

By leveraging **hardware-aware concurrent processing**, GitBulk executes operations across your entire repository fleet simultaneously, reducing what would take minutes into sub-second operations. Its persistent workspace model, integrated authentication, and real-time CI visibility make it an essential tool for any engineering team operating at scale.

> **Who is GitBulk for?**
> — DevOps and Platform Engineering teams managing complex multi-repository architectures.
> — Tech Leads and Staff Engineers who need fast, reliable environment synchronization.
> — CI/CD pipeline administrators requiring unified status visibility across all services.

---

## Core Capabilities

### Intelligent Concurrency Engine
GitBulk's execution engine is built on native subprocess calls, bypassing high-overhead library abstractions. It automatically detects available hardware resources and distributes workloads across threads to maximize both disk I/O and network throughput. Operations that would take minutes running sequentially complete in seconds.

### Persistent Workspace System
A **workspace** is a saved snapshot of your entire working environment — the full set of repositories, their locations, and their state. Workspaces can be saved, restored, listed, deleted, and synchronized, allowing engineering teams to version their development environments with the same rigor as their code. Missing repositories are automatically cloned on load; repositories no longer in scope are safely archived on sync.

### Integrated PAT Authentication
GitBulk handles authentication centrally through Personal Access Tokens (PAT) stored securely in OS-level credentials. This eliminates the need for per-repository authentication configuration, enabling frictionless access to private organizational repositories — including those hosted on GitHub and GitLab.

### Visual Conflict & Status Management
Beyond automation, GitBulk provides interactive resolution flows for merge conflicts, commit dialogs, and destructive operations. Every action that may have irreversible consequences is gated behind a confirmation screen, ensuring operational safety in production-adjacent environments.

### Native Multi-Language Interface
The full interface — including the desktop GUI — is available in **Spanish, English (US/UK), German, and French**, enabling adoption by globally distributed engineering teams without localization friction.

---

## System Architecture

GitBulk's internal engine is designed around three foundational pillars:

| Component | Description |
|---|---|
| **Native Subprocess Engine** | Replaces library-dependent calls with direct OS-level subprocess management, eliminating version conflicts and maximizing performance. |
| **UI Throttling (250ms batching)** | Render updates are batched at 250ms intervals, ensuring the interface remains fully responsive even when processing hundreds of concurrent operations. |
| **SSH Agent Diagnostics** | GitBulk automatically detects and configures SSH agents on the host system, ensuring secure tunneling to remote repositories without manual intervention. |
| **Icon & Asset Cache** | Visual resources are statically cached to eliminate repeated I/O on re-renders, contributing to a snappy, latency-free UI experience. |

---

## Installation & Deployment

GitBulk offers one-line web installers for both Windows and Linux environments. No manual dependency resolution is required.

### Windows (PowerShell) — GUI Installer

\`\`\`powershell
iwr -useb "https://raw.githubusercontent.com/rezzt-dev/gitbulk-project/main/dist/windows/install_gui.ps1" | iex
\`\`\`

### Linux / macOS (Bash) — GUI Installer

\`\`\`bash
curl -fsSL "https://raw.githubusercontent.com/rezzt-dev/gitbulk-project/main/dist/linux/install_gui.sh" | bash
\`\`\`

Both scripts bootstrap the full GitBulk environment, including the native GUI client and CLI binary, in a single execution. The installers are idempotent and safe to re-run for updates.

---

## Authentication & Security

GitBulk uses a centralized authentication model. Credentials are stored in the host operating system's secure credential store and are never written to disk in plaintext.

\`\`\`bash
gitbulk auth
\`\`\`

Running this command initiates an interactive wizard that securely stores your PAT. Once configured, all subsequent operations — including cloning private repositories during workspace load/sync — authenticate automatically without user prompting.

This model is compatible with both **GitHub** and **GitLab**, and supports token rotation without requiring reconfiguration of individual repository remotes.

---

## Workspace Management

Workspaces are the foundation of GitBulk's environment management model. They allow teams to define, capture, and reproduce exact repository topologies across machines and team members.

### Lifecycle Commands

| Command | Behavior |
|---|---|
| \`workspace save\` | Captures the current directory topology and repository states into a named workspace file. |
| \`workspace load <name>\` | Restores a workspace, automatically cloning any repositories not present on disk. |
| \`workspace sync\` | Reconciles disk state against a reference workspace definition. Archives repositories not in scope. |
| \`workspace list\` | Displays all saved workspaces with metadata (date saved, repository count, root path). |
| \`workspace delete <name>\` | Permanently removes a saved workspace definition. |

**Use case:** An onboarding engineer can restore a fully configured development environment — all repositories, correct branches, correct structure — with a single command, reducing setup time from hours to seconds.

---

## Repository Groups & Topology

GitBulk supports logical grouping of repositories through per-repository configuration files (\`.gitbulk.repo.json\`). By tagging repositories with group identifiers (e.g., \`backend\`, \`frontend\`, \`infrastructure\`, \`data\`), teams can target specific subsets of the workspace for operations without affecting unrelated repositories.

\`\`\`json
{
  "group": "backend",
  "tags": ["api", "critical"]
}
\`\`\`

The **Group Inspector** provides a real-time visual map of the entire workspace topology, organized by group, allowing engineering managers to audit repository structure and operational health at a glance.

---

## Command Reference

### \`gitbulk status\`
Runs a parallel status check across all repositories in the active workspace or directory. Outputs a structured visual matrix showing commit divergence, uncommitted changes, and upstream tracking state for each repository.

### \`gitbulk fetch\`
Concurrently downloads metadata, remote refs, and object updates from all configured origins. Does not modify working trees. Ideal for pre-synchronization diagnostics.

### \`gitbulk pull\`
Advances all repositories to the latest remote state via fast-forward merge. Supports \`--autostash\` to automatically stash and reapply local changes, preventing operation failures in repositories with dirty working trees.

### \`gitbulk commit\`
Initiates a bulk commit flow across all repositories with uncommitted changes. Supports a shared commit message applied to all, or an interactive per-repository dialog for granular control.

### \`gitbulk push\`
Pushes all local commits to remote origins in parallel. Handles rejection scenarios and surfaces conflicts without aborting the entire operation batch.

### \`gitbulk checkout\`
Switches all repositories in the workspace to a specified branch. If the target branch does not exist in a given repository, the operation is safely skipped with a warning — it never fails silently.

### \`gitbulk workspace\`
Entry point for the full workspace lifecycle: \`save\`, \`load\`, \`sync\`, \`list\`, \`delete\`. See [Workspace Management](#workspace-management) for full documentation.

### \`gitbulk groups\`
Displays the logical topology of the current workspace, organized by group tags defined in \`.gitbulk.repo.json\` files. Useful for auditing environment structure and targeting group-specific operations.

### \`gitbulk ci-status\`
Connects to the GitHub API and retrieves real-time pipeline status (pass/fail/pending) for all repositories in the workspace. Presents results in a unified dashboard, eliminating the need to check each repository's Actions tab individually.

### \`gitbulk clean\`
Removes all untracked and ignored files from repositories in batch. **This operation is irreversible.** GitBulk requires explicit confirmation before execution and supports \`--dry-run\` for safe pre-execution preview.

### \`gitbulk auth\`
Configures and stores authentication credentials (PAT tokens) in the OS credential store. See [Authentication & Security](#authentication--security).

---

## Global Flags & Configuration

These flags are available across all commands and modify global behavior:

| Flag | Description |
|---|---|
| \`-d, --dir <path>\` | Sets the root directory for the operation. This value is persisted across sessions. |
| \`-w, --workers <n>\` | Number of concurrent worker threads. Use \`0\` for automatic hardware-based tuning (recommended). |
| \`--gui\` | Launches the native desktop GUI instead of using the CLI. |
| \`--dry-run\` | Simulates the operation and outputs a preview of changes without executing them. Safe for auditing destructive commands before execution. |
| \`--group <name>\` | Limits the operation scope to repositories tagged with the specified group identifier. |
`,es:`# GitBulk — Documentación Técnica

## Índice

1. [Visión General Ejecutiva](#visión-general-ejecutiva)
2. [Capacidades Principales](#capacidades-principales)
3. [Arquitectura del Sistema](#arquitectura-del-sistema)
4. [Instalación y Despliegue](#instalación-y-despliegue)
5. [Autenticación y Seguridad](#autenticación-y-seguridad)
6. [Gestión de Workspaces](#gestión-de-workspaces)
7. [Grupos y Topología de Repositorios](#grupos-y-topología-de-repositorios)
8. [Referencia de Comandos](#referencia-de-comandos)
9. [Flags y Configuración Global](#flags-y-configuración-global)

---

## Visión General Ejecutiva

**GitBulk** es una plataforma de orquestación empresarial para la gestión de repositorios Git, disponible como herramienta CLI y como interfaz gráfica de escritorio nativa. Ha sido diseñada específicamente para organizaciones que gestionan infraestructura de software a gran escala — desde backends de microservicios y sistemas frontend distribuidos hasta entornos multi-equipo con monorepos.

En entornos con decenas o cientos de repositorios activos, la carga operativa de gestionar cada uno de forma independiente genera una ineficiencia creciente: los ingenieros pierden tiempo crítico ejecutando comandos redundantes, resolviendo divergencias de entorno y diagnosticando fallos de pipeline a través de espacios de trabajo desconectados. GitBulk elimina por completo este sobrecoste.

Mediante **procesamiento concurrente con detección automática de hardware**, GitBulk ejecuta operaciones en toda la flota de repositorios de forma simultánea, reduciendo lo que llevaría minutos a operaciones sub-segundo. Su modelo de workspaces persistentes, autenticación integrada y visibilidad CI en tiempo real lo convierten en una herramienta esencial para cualquier equipo de ingeniería que opere a escala.

> **¿Para quién es GitBulk?**
> — Equipos de DevOps e Ingeniería de Plataforma que gestionan arquitecturas multi-repositorio complejas.
> — Tech Leads e Ingenieros Senior que necesitan sincronización de entornos rápida y fiable.
> — Administradores de pipelines CI/CD que requieren visibilidad unificada del estado en todos los servicios.

---

## Capacidades Principales

### Motor de Concurrencia Inteligente
El motor de ejecución de GitBulk está construido sobre llamadas nativas a subprocess, evitando las abstracciones de alto coste de bibliotecas externas. Detecta automáticamente los recursos de hardware disponibles y distribuye la carga de trabajo entre hilos para maximizar tanto el I/O de disco como el throughput de red. Las operaciones que tardarían minutos en ejecución secuencial se completan en segundos.

### Sistema de Workspaces Persistentes
Un **workspace** es un snapshot guardado de todo tu entorno de trabajo — el conjunto completo de repositorios, sus ubicaciones y su estado. Los workspaces pueden guardarse, restaurarse, listarse, eliminarse y sincronizarse, permitiendo a los equipos de ingeniería versionar sus entornos de desarrollo con el mismo rigor que su código. Los repositorios ausentes se clonan automáticamente al cargar; los repositorios ya no en uso se archivan de forma segura al sincronizar.

### Autenticación PAT Integrada
GitBulk gestiona la autenticación de forma centralizada mediante Personal Access Tokens (PAT) almacenados de forma segura en el almacén de credenciales del sistema operativo. Esto elimina la necesidad de configurar autenticación por repositorio, habilitando acceso sin fricción a repositorios privados organizacionales — incluidos los alojados en GitHub y GitLab.

### Gestión Visual de Conflictos y Estado
Más allá de la automatización, GitBulk proporciona flujos de resolución interactivos para conflictos de merge, diálogos de commit y operaciones destructivas. Toda acción que pueda tener consecuencias irreversibles requiere una pantalla de confirmación explícita, garantizando la seguridad operativa en entornos adyacentes a producción.

### Interfaz Nativa Multi-idioma
La interfaz completa — incluida la GUI de escritorio — está disponible en **español, inglés (US/UK), alemán y francés**, facilitando la adopción por equipos de ingeniería distribuidos globalmente sin fricción de localización.

---

## Arquitectura del Sistema

El motor interno de GitBulk está diseñado sobre tres pilares fundamentales:

| Componente | Descripción |
|---|---|
| **Motor Nativo de Subprocess** | Reemplaza las llamadas dependientes de bibliotecas con gestión directa de subprocesos a nivel de SO, eliminando conflictos de versiones y maximizando el rendimiento. |
| **Throttling de UI (agrupación a 250ms)** | Las actualizaciones de renderizado se agrupan en intervalos de 250ms, garantizando que la interfaz permanezca completamente responsiva incluso al procesar cientos de operaciones concurrentes. |
| **Diagnóstico de Agente SSH** | GitBulk detecta y configura automáticamente los agentes SSH en el sistema anfitrión, asegurando tunneling seguro a repositorios remotos sin intervención manual. |
| **Caché de Iconos y Assets** | Los recursos visuales se almacenan en caché estáticamente para eliminar I/O repetido en re-renderizados, contribuyendo a una experiencia de UI ágil y sin latencia perceptible. |

---

## Instalación y Despliegue

GitBulk ofrece instaladores web de una sola línea para entornos Windows y Linux. No se requiere resolución manual de dependencias.

### Windows (PowerShell) — Instalador GUI

\`\`\`powershell
iwr -useb "https://raw.githubusercontent.com/rezzt-dev/gitbulk-project/main/dist/windows/install_gui.ps1" | iex
\`\`\`

### Linux / macOS (Bash) — Instalador GUI

\`\`\`bash
curl -fsSL "https://raw.githubusercontent.com/rezzt-dev/gitbulk-project/main/dist/linux/install_gui.sh" | bash
\`\`\`

Ambos scripts inicializan el entorno complete de GitBulk, incluyendo el cliente GUI nativo y el binario CLI, en una única ejecución. Los instaladores son idempotentes y seguros de re-ejecutar para actualizaciones.

---

## Autenticación y Seguridad

GitBulk utiliza un modelo de autenticación centralizado. Las credenciales se almacenan en el almacén de credenciales seguro del sistema operativo anfitrión y nunca se escriben en disco en texto plano.

\`\`\`bash
gitbulk auth
\`\`\`

La ejecución de este comando inicia un asistente interactivo que almacena tu PAT de forma segura. Una vez configurado, todas las operaciones posteriores — incluida la clonación de repositorios privados durante la carga o sincronización de workspaces — se autentican automáticamente sin requerir intervención del usuario.

Este modelo es compatible con **GitHub** y **GitLab**, y admite rotación de tokens sin necesidad de reconfigurar los remotos individuales de cada repositorio.

---

## Gestión de Workspaces

Los workspaces son la base del modelo de gestión de entornos de GitBulk. Permiten a los equipos definir, capturar y reproducir topologías exactas de repositorios entre máquinas y miembros del equipo.

### Comandos del Ciclo de Vida

| Comando | Comportamiento |
|---|---|
| \`workspace save\` | Captura la topología de directorio actual y los estados de los repositorios en un fichero de workspace con nombre. |
| \`workspace load <nombre>\` | Restaura un workspace, clonando automáticamente los repositorios no presentes en disco. |
| \`workspace sync\` | Reconcilia el estado de disco con una definición de workspace de referencia. Archiva repositorios fuera del alcance. |
| \`workspace list\` | Muestra todos los workspaces guardados con metadatos (fecha, número de repositorios, ruta raíz). |
| \`workspace delete <nombre>\` | Elimina permanentemente una definición de workspace guardada. |

**Caso de uso:** Un ingeniero en proceso de incorporación puede restaurar un entorno de desarrollo completamente configurado — todos los repositorios, ramas correctas, estructura correcta — con un único comando, reduciendo el tiempo de configuración de horas a segundos.

---

## Grupos y Topología de Repositorios

GitBulk soporta la agrupación lógica de repositorios mediante ficheros de configuración por repositorio (\`.gitbulk.repo.json\`). Al etiquetar los repositorios con identificadores de grupo (p. ej., \`backend\`, \`frontend\`, \`infrastructure\`, \`data\`), los equipos pueden dirigir operaciones a subconjuntos específicos del workspace sin afectar a repositorios no relacionados.

\`\`\`json
{
  "group": "backend",
  "tags": ["api", "critical"]
}
\`\`\`

El **Inspector de Grupos** proporciona un mapa visual en tiempo real de toda la topología del workspace, organizado por grupo, permitiendo a los responsables de ingeniería auditar la estructura de repositorios y el estado operativo de un vistazo.

---

## Referencia de Comandos

### \`gitbulk status\`
Ejecuta una verificación de estado en paralelo en todos los repositorios del workspace o directorio activo. Genera una matriz visual estructurada mostrando la divergencia de commits, cambios no confirmados y el estado de seguimiento upstream de cada repositorio.

### \`gitbulk fetch\`
Descarga concurrentemente metadatos, refs remotas y actualizaciones de objetos desde todos los orígenes configurados. No modifica los árboles de trabajo. Ideal para diagnósticos previos a la sincronización.

### \`gitbulk pull\`
Avanza todos los repositorios hasta el estado remoto más reciente mediante fast-forward merge. Soporta \`--autostash\` para guardar y reaplicar automáticamente los cambios locales, previniendo fallos en repositorios con árbol de trabajo sucio.

### \`gitbulk commit\`
Inicia un flujo de commit masivo en todos los repositorios con cambios no confirmados. Soporta un mensaje de commit compartido aplicado a todos, o un diálogo interactivo por repositorio para control granular.

### \`gitbulk push\`
Empuja todos los commits locales a los orígenes remotos en paralelo. Gestiona escenarios de rechazo y expone conflictos sin abortar el lote completo de operaciones.

### \`gitbulk checkout\`
Cambia todos los repositorios del workspace a una rama especificada. Si la rama objetivo no existe en un repositorio concreto, la operación se omite de forma segura con una advertencia — nunca falla silenciosamente.

### \`gitbulk workspace\`
Punto de entrada para el ciclo de vida completo del workspace: \`save\`, \`load\`, \`sync\`, \`list\`, \`delete\`. Consulta [Gestión de Workspaces](#gestión-de-workspaces) para la documentación completa.

### \`gitbulk groups\`
Muestra la topología lógica del workspace actual, organizada por las etiquetas de grupo definidas en los ficheros \`.gitbulk.repo.json\`. Útil para auditar la estructura del entorno y dirigir operaciones a grupos específicos.

### \`gitbulk ci-status\`
Se conecta a la API de GitHub y recupera el estado de pipeline en tiempo real (pass/fail/pending) para todos los repositorios del workspace. Presenta los resultados en un dashboard unificado, eliminando la necesidad de revisar la pestaña de Actions de cada repositorio individualmente.

### \`gitbulk clean\`
Elimina todos los ficheros no rastreados e ignorados de los repositorios en bloque. **Esta operación es irreversible.** GitBulk requiere confirmación explícita antes de la ejecución y soporta \`--dry-run\` para una previsualización segura previa a la ejecución.

### \`gitbulk auth\`
Configura y almacena las credenciales de autenticación (tokens PAT) en el almacén de credenciales del SO. Consulta [Autenticación y Seguridad](#autenticación-y-seguridad).

---

## Flags y Configuración Global

Estos flags están disponibles en todos los comandos y modifican el comportamiento global:

| Flag | Descripción |
|---|---|
| \`-d, --dir <ruta>\` | Establece el directorio raíz para la operación. Este valor se persiste entre sesiones. |
| \`-w, --workers <n>\` | Número de hilos de trabajo concurrentes. Usa \`0\` para ajuste automático basado en hardware (recomendado). |
| \`--gui\` | Lanza la interfaz gráfica de escritorio nativa en lugar de usar el CLI. |
| \`--dry-run\` | Simula la operación y muestra una previsualización de los cambios sin ejecutarlos. Seguro para auditar comandos destructivos antes de la ejecución. |
| \`--group <nombre>\` | Limita el ámbito de la operación a los repositorios etiquetados con el identificador de grupo especificado. |
`},Z={sun:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,moon:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,github:`<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.65.7 1.03 1.59 1.03 2.68 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>`,back:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,translate:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>`},Pe=localStorage.getItem(`gitbulk-lang`),Fe=localStorage.getItem(`gitbulk-theme`),Q={lang:Pe||`es`,theme:Fe||`dark`},Ie={es:{back:`Inicio`,knowledge:`Conocimiento`},en:{back:`Product Homepage`,knowledge:`Knowledge`}},Le=()=>{let e=Ie[Q.lang];return`
    <header class="w-full border-b border-border/60 dark:border-white/5 bg-background/90 backdrop-blur-xl fixed top-0 z-50 transition-all duration-300 shadow-sm" id="navbar">
      <div class="max-w-[90rem] mx-auto px-6 h-16 flex items-center justify-between">
        <div class="flex items-center gap-6">
          <a href="/" class="flex items-center gap-3 group cursor-pointer hover:opacity-80 transition-opacity">
            <div class="w-8 h-8 flex items-center justify-center bg-white dark:bg-zinc-900 rounded-lg border border-border dark:border-white/10 shadow-sm">
              <img src="/logo.svg" alt="GitBulk Logo" class="w-4 h-4 object-contain ${Q.theme===`light`?`brightness-0`:``}" />
            </div>
            <span class="text-xl font-display font-bold tracking-tight text-foreground">GitBulk <span class="text-primary font-medium text-sm ml-1 px-2 py-0.5 rounded-md bg-primary/10">Docs</span></span>
          </a>
        </div>
        
        <div class="flex items-center gap-4">
          <a href="/" class="hidden md:flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-zinc-400 hover:text-foreground transition-colors mr-2">
            ${Z.back} ${e.back}
          </a>
          <div class="w-px h-4 bg-border hidden md:block"></div>
          <button id="btn-lang" class="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-foreground border border-border/50 dark:border-white/5 uppercase text-xs font-bold font-mono">
            ${Z.translate} ${Q.lang}
          </button>
          <button id="btn-theme" class="flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-foreground">
            ${Q.theme===`dark`?Z.sun:Z.moon}
          </button>
          <a href="https://github.com/rezzt-dev/gitbulk-project" target="_blank" class="flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-foreground">
            ${Z.github}
          </a>
        </div>
      </div>
    </header>
  `},$=async()=>{let e=document.getElementById(`docs-app`);document.documentElement.classList.toggle(`dark`,Q.theme===`dark`);let t=Ne[Q.lang],n=Ie[Q.lang],r=new X.Renderer;r.code=({text:e,lang:t})=>`
      <div class="terminal-window my-8 shadow-2xl">
        <div class="terminal-header py-3 px-5 border-b border-white/5 flex items-center justify-between">
          <div class="flex gap-2">
            <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
          </div>
          <div class="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">${t||`bash`}</div>
        </div>
        <div class="terminal-body !p-0">
          <pre class="!bg-transparent !m-0 !p-6 scroll-smooth custom-scrollbar"><code class="language-${t||`bash`}">${e}</code></pre>
        </div>
      </div>
    `;let i=await X.parse(t,{async:!0,renderer:r});e.innerHTML=`
    ${Le()}
    <div class="max-w-[80rem] mx-auto w-full px-6 flex justify-center pt-28 pb-32 gap-8 lg:gap-16 relative items-start">
      
      <!-- Main Content Article -->
      <main class="flex-1 min-w-0 max-w-4xl glass-panel p-8 md:p-14 rounded-3xl dark:border-white/5 order-1 shadow-2xl">
        <article id="markdown-content" class="prose prose-slate dark:prose-invert max-w-none 
          prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight 
          prose-h1:text-4xl prose-h1:text-primary prose-h1:mb-8
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border/50 dark:prose-h2:border-white/10
          prose-h3:text-lg prose-h3:text-foreground/90
          prose-p:leading-relaxed prose-p:text-slate-600 dark:prose-p:text-zinc-400
          prose-a:text-emerald-600 dark:prose-a:text-emerald-400 hover:prose-a:text-emerald-500 prose-a:no-underline prose-a:border-b prose-a:border-emerald-500/30 hover:prose-a:border-emerald-500
          prose-code:text-emerald-600 dark:prose-code:text-emerald-400 prose-code:bg-emerald-50 dark:prose-code:bg-emerald-950/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-[#0c0c0e] dark:prose-pre:bg-[#0b0b0d] prose-pre:border prose-pre:border-slate-200 dark:prose-pre:border-white/[0.05] prose-pre:shadow-2xl prose-pre:rounded-2xl prose-pre:p-6
          prose-pre:text-slate-200 dark:prose-pre:text-zinc-200
          prose-li:text-slate-600 dark:prose-li:text-zinc-400
          prose-strong:text-foreground
          prose-table:border-collapse prose-th:bg-slate-100 dark:prose-th:bg-white/5 prose-th:p-3 prose-td:p-3 prose-td:border-t prose-td:border-border dark:prose-td:border-white/5
          ">
          ${i}
        </article>
      </main>

      <!-- Left Sidebar (TOC) -->
      <aside class="hidden lg:block w-72 shrink-0 order-2 sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto pr-6 custom-scrollbar">
        <div class="mb-4">
          <h4 class="text-sm font-bold tracking-widest text-slate-900 dark:text-zinc-100 uppercase mb-4 font-display">${n.knowledge}</h4>
          <ul id="toc-list" class="space-y-3 border-l border-border dark:border-white/10 ml-1">
            <!-- Injected statically via DOM parsing -->
          </ul>
        </div>
      </aside>

    </div>
  `;let a=document.getElementById(`markdown-content`).querySelectorAll(`h2, h3`),o=document.getElementById(`toc-list`);a.forEach(e=>{let t=e.textContent||``,n=t.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/(^-|-$)/g,``);e.id=n,e.classList.add(`scroll-mt-32`);let r=document.createElement(`a`);r.href=`#`+n,r.className=`opacity-0 group-hover:opacity-100 absolute -ml-6 text-emerald-500 transition-opacity no-underline selection:bg-transparent hidden md:block`,r.textContent=`#`,e.classList.add(`group`,`relative`),e.insertBefore(r,e.firstChild);let i=document.createElement(`li`),a=document.createElement(`a`);a.href=`#`+n,a.textContent=t,a.className=`block text-sm transition-colors hover:text-primary -ml-px pl-4 border-l ${e.tagName===`H3`?`pl-8 text-slate-500 dark:text-zinc-500 border-transparent text-[13px] hover:border-border dark:hover:border-zinc-700`:`text-slate-600 dark:text-zinc-400 font-medium border-transparent hover:border-primary`}`,a.setAttribute(`data-target`,n),i.appendChild(a),o.appendChild(i)}),document.getElementById(`btn-theme`).addEventListener(`click`,()=>{Q.theme=Q.theme===`dark`?`light`:`dark`,document.documentElement.classList.toggle(`dark`,Q.theme===`dark`),localStorage.setItem(`gitbulk-theme`,Q.theme),$()}),document.getElementById(`btn-lang`).addEventListener(`click`,()=>{Q.lang=Q.lang===`es`?`en`:`es`,localStorage.setItem(`gitbulk-lang`,Q.lang),$()});let s=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){document.querySelectorAll(`#toc-list a`).forEach(e=>{e.classList.remove(`text-primary`,`border-primary`,`font-semibold`),e.parentElement?.previousElementSibling});let t=document.querySelector(`#toc-list a[data-target="${e.target.id}"]`);t&&t.classList.add(`text-primary`,`border-primary`,`font-semibold`)}})},{root:null,rootMargin:`-100px 0px -60% 0px`,threshold:1});a.forEach(e=>s.observe(e))};document.addEventListener(`DOMContentLoaded`,$),(document.readyState===`complete`||document.readyState===`interactive`)&&$();