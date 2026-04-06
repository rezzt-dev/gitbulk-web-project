var $e=Object.defineProperty;var Re=(n,e,t)=>e in n?$e(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var b=(n,e,t)=>Re(n,typeof e!="symbol"?e+"":e,t);import"./style-CzStgFGw.js";function X(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var T=X();function ue(n){T=n}var R={exec:()=>null};function k(n,e=""){let t=typeof n=="string"?n:n.source,s={replace:(r,i)=>{let l=typeof i=="string"?i:i.source;return l=l.replace(w.caret,"$1"),t=t.replace(r,l),s},getRegex:()=>new RegExp(t,e)};return s}var Ae=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),w={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}>`)},Te=/^(?:[ \t]*(?:\n|$))+/,Ie=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Ee=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,D=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Pe=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,K=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,de=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ge=k(de).replace(/bull/g,K).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Ce=k(de).replace(/bull/g,K).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),V=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Le=/^[^\n]+/,J=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Be=k(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",J).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),De=k(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,K).getRegex(),H="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Y=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,qe=k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Y).replace("tag",H).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ke=k(V).replace("hr",D).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H).getRegex(),_e=k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ke).getRegex(),ee={blockquote:_e,code:Ie,def:Be,fences:Ee,heading:Pe,hr:D,html:qe,lheading:ge,list:De,newline:Te,paragraph:ke,table:R,text:Le},ie=k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",D).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H).getRegex(),je={...ee,lheading:Ce,table:ie,paragraph:k(V).replace("hr",D).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ie).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H).getRegex()},Ge={...ee,html:k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Y).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:R,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:k(V).replace("hr",D).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ge).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Me=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Oe=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,fe=/^( {2,}|\\)\n(?!\s*$)/,Ne=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,I=/[\p{P}\p{S}]/u,Z=/[\s\p{P}\p{S}]/u,te=/[^\s\p{P}\p{S}]/u,He=k(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Z).getRegex(),me=/(?!~)[\p{P}\p{S}]/u,Ze=/(?!~)[\s\p{P}\p{S}]/u,Fe=/(?:[^\s\p{P}\p{S}]|~)/u,Qe=k(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Ae?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),be=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Ue=k(be,"u").replace(/punct/g,I).getRegex(),We=k(be,"u").replace(/punct/g,me).getRegex(),xe="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Xe=k(xe,"gu").replace(/notPunctSpace/g,te).replace(/punctSpace/g,Z).replace(/punct/g,I).getRegex(),Ke=k(xe,"gu").replace(/notPunctSpace/g,Fe).replace(/punctSpace/g,Ze).replace(/punct/g,me).getRegex(),Ve=k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,te).replace(/punctSpace/g,Z).replace(/punct/g,I).getRegex(),Je=k(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,I).getRegex(),Ye="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",et=k(Ye,"gu").replace(/notPunctSpace/g,te).replace(/punctSpace/g,Z).replace(/punct/g,I).getRegex(),tt=k(/\\(punct)/,"gu").replace(/punct/g,I).getRegex(),nt=k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),rt=k(Y).replace("(?:-->|$)","-->").getRegex(),st=k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",rt).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),G=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,at=k(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",G).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),we=k(/^!?\[(label)\]\[(ref)\]/).replace("label",G).replace("ref",J).getRegex(),ye=k(/^!?\[(ref)\](?:\[\])?/).replace("ref",J).getRegex(),it=k("reflink|nolink(?!\\()","g").replace("reflink",we).replace("nolink",ye).getRegex(),le=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ne={_backpedal:R,anyPunctuation:tt,autolink:nt,blockSkip:Qe,br:fe,code:Oe,del:R,delLDelim:R,delRDelim:R,emStrongLDelim:Ue,emStrongRDelimAst:Xe,emStrongRDelimUnd:Ve,escape:Me,link:at,nolink:ye,punctuation:He,reflink:we,reflinkSearch:it,tag:st,text:Ne,url:R},lt={...ne,link:k(/^!?\[(label)\]\((.*?)\)/).replace("label",G).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",G).getRegex()},Q={...ne,emStrongRDelimAst:Ke,emStrongLDelim:We,delLDelim:Je,delRDelim:et,url:k(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",le).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:k(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",le).getRegex()},ot={...Q,br:k(fe).replace("{2,}","*").getRegex(),text:k(Q.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},_={normal:ee,gfm:je,pedantic:Ge},P={normal:ne,gfm:Q,breaks:ot,pedantic:lt},ct={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},oe=n=>ct[n];function $(n,e){if(e){if(w.escapeTest.test(n))return n.replace(w.escapeReplace,oe)}else if(w.escapeTestNoEncode.test(n))return n.replace(w.escapeReplaceNoEncode,oe);return n}function ce(n){try{n=encodeURI(n).replace(w.percentDecode,"%")}catch{return null}return n}function pe(n,e){var i;let t=n.replace(w.findPipe,(l,a,p)=>{let o=!1,h=a;for(;--h>=0&&p[h]==="\\";)o=!o;return o?"|":" |"}),s=t.split(w.splitPipe),r=0;if(s[0].trim()||s.shift(),s.length>0&&!((i=s.at(-1))!=null&&i.trim())&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(w.slashPipe,"|");return s}function C(n,e,t){let s=n.length;if(s===0)return"";let r=0;for(;r<s&&n.charAt(s-r-1)===e;)r++;return n.slice(0,s-r)}function pt(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let s=0;s<n.length;s++)if(n[s]==="\\")s++;else if(n[s]===e[0])t++;else if(n[s]===e[1]&&(t--,t<0))return s;return t>0?-2:-1}function ht(n,e=0){let t=e,s="";for(let r of n)if(r==="	"){let i=4-t%4;s+=" ".repeat(i),t+=i}else s+=r,t++;return s}function he(n,e,t,s,r){let i=e.href,l=e.title||null,a=n[1].replace(r.other.outputLinkReplace,"$1");s.state.inLink=!0;let p={type:n[0].charAt(0)==="!"?"image":"link",raw:t,href:i,title:l,text:a,tokens:s.inlineTokens(a)};return s.state.inLink=!1,p}function ut(n,e,t){let s=n.match(t.other.indentCodeCompensation);if(s===null)return e;let r=s[1];return e.split(`
`).map(i=>{let l=i.match(t.other.beginningSpace);if(l===null)return i;let[a]=l;return a.length>=r.length?i.slice(r.length):i}).join(`
`)}var M=class{constructor(n){b(this,"options");b(this,"rules");b(this,"lexer");this.options=n||T}space(n){let e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){let e=this.rules.block.code.exec(n);if(e){let t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:C(t,`
`)}}}fences(n){let e=this.rules.block.fences.exec(n);if(e){let t=e[0],s=ut(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(n){let e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let s=C(t,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(t=s.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){let e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:C(e[0],`
`)}}blockquote(n){let e=this.rules.block.blockquote.exec(n);if(e){let t=C(e[0],`
`).split(`
`),s="",r="",i=[];for(;t.length>0;){let l=!1,a=[],p;for(p=0;p<t.length;p++)if(this.rules.other.blockquoteStart.test(t[p]))a.push(t[p]),l=!0;else if(!l)a.push(t[p]);else break;t=t.slice(p);let o=a.join(`
`),h=o.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${o}`:o,r=r?`${r}
${h}`:h;let d=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,i,!0),this.lexer.state.top=d,t.length===0)break;let u=i.at(-1);if((u==null?void 0:u.type)==="code")break;if((u==null?void 0:u.type)==="blockquote"){let c=u,f=c.raw+`
`+t.join(`
`),g=this.blockquote(f);i[i.length-1]=g,s=s.substring(0,s.length-c.raw.length)+g.raw,r=r.substring(0,r.length-c.text.length)+g.text;break}else if((u==null?void 0:u.type)==="list"){let c=u,f=c.raw+`
`+t.join(`
`),g=this.list(f);i[i.length-1]=g,s=s.substring(0,s.length-u.raw.length)+g.raw,r=r.substring(0,r.length-c.raw.length)+g.raw,t=f.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:i,text:r}}}list(n){var t,s;let e=this.rules.block.list.exec(n);if(e){let r=e[1].trim(),i=r.length>1,l={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");let a=this.rules.other.listItemRegex(r),p=!1;for(;n;){let h=!1,d="",u="";if(!(e=a.exec(n))||this.rules.block.hr.test(n))break;d=e[0],n=n.substring(d.length);let c=ht(e[2].split(`
`,1)[0],e[1].length),f=n.split(`
`,1)[0],g=!c.trim(),x=0;if(this.options.pedantic?(x=2,u=c.trimStart()):g?x=e[1].length+1:(x=c.search(this.rules.other.nonSpaceChar),x=x>4?1:x,u=c.slice(x),x+=e[1].length),g&&this.rules.other.blankLine.test(f)&&(d+=f+`
`,n=n.substring(f.length+1),h=!0),!h){let v=this.rules.other.nextBulletRegex(x),q=this.rules.other.hrRegex(x),se=this.rules.other.fencesBeginRegex(x),ae=this.rules.other.headingBeginRegex(x),Se=this.rules.other.htmlBeginRegex(x),ze=this.rules.other.blockquoteBeginRegex(x);for(;n;){let F=n.split(`
`,1)[0],E;if(f=F,this.options.pedantic?(f=f.replace(this.rules.other.listReplaceNesting,"  "),E=f):E=f.replace(this.rules.other.tabCharGlobal,"    "),se.test(f)||ae.test(f)||Se.test(f)||ze.test(f)||v.test(f)||q.test(f))break;if(E.search(this.rules.other.nonSpaceChar)>=x||!f.trim())u+=`
`+E.slice(x);else{if(g||c.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||se.test(c)||ae.test(c)||q.test(c))break;u+=`
`+f}g=!f.trim(),d+=F+`
`,n=n.substring(F.length+1),c=E.slice(x)}}l.loose||(p?l.loose=!0:this.rules.other.doubleBlankLine.test(d)&&(p=!0)),l.items.push({type:"list_item",raw:d,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),l.raw+=d}let o=l.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;l.raw=l.raw.trimEnd();for(let h of l.items){if(this.lexer.state.top=!1,h.tokens=this.lexer.blockTokens(h.text,[]),h.task){if(h.text=h.text.replace(this.rules.other.listReplaceTask,""),((t=h.tokens[0])==null?void 0:t.type)==="text"||((s=h.tokens[0])==null?void 0:s.type)==="paragraph"){h.tokens[0].raw=h.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),h.tokens[0].text=h.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let u=this.lexer.inlineQueue.length-1;u>=0;u--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[u].src)){this.lexer.inlineQueue[u].src=this.lexer.inlineQueue[u].src.replace(this.rules.other.listReplaceTask,"");break}}let d=this.rules.other.listTaskCheckbox.exec(h.raw);if(d){let u={type:"checkbox",raw:d[0]+" ",checked:d[0]!=="[ ]"};h.checked=u.checked,l.loose?h.tokens[0]&&["paragraph","text"].includes(h.tokens[0].type)&&"tokens"in h.tokens[0]&&h.tokens[0].tokens?(h.tokens[0].raw=u.raw+h.tokens[0].raw,h.tokens[0].text=u.raw+h.tokens[0].text,h.tokens[0].tokens.unshift(u)):h.tokens.unshift({type:"paragraph",raw:u.raw,text:u.raw,tokens:[u]}):h.tokens.unshift(u)}}if(!l.loose){let d=h.tokens.filter(c=>c.type==="space"),u=d.length>0&&d.some(c=>this.rules.other.anyLine.test(c.raw));l.loose=u}}if(l.loose)for(let h of l.items){h.loose=!0;for(let d of h.tokens)d.type==="text"&&(d.type="paragraph")}return l}}html(n){let e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){let e=this.rules.block.def.exec(n);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:s,title:r}}}table(n){var l;let e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=pe(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=(l=e[3])!=null&&l.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===s.length){for(let a of s)this.rules.other.tableAlignRight.test(a)?i.align.push("right"):this.rules.other.tableAlignCenter.test(a)?i.align.push("center"):this.rules.other.tableAlignLeft.test(a)?i.align.push("left"):i.align.push(null);for(let a=0;a<t.length;a++)i.header.push({text:t[a],tokens:this.lexer.inline(t[a]),header:!0,align:i.align[a]});for(let a of r)i.rows.push(pe(a,i.header.length).map((p,o)=>({text:p,tokens:this.lexer.inline(p),header:!1,align:i.align[o]})));return i}}lheading(n){let e=this.rules.block.lheading.exec(n);if(e){let t=e[1].trim();return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:t,tokens:this.lexer.inline(t)}}}paragraph(n){let e=this.rules.block.paragraph.exec(n);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){let e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){let e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){let e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){let e=this.rules.inline.link.exec(n);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let i=C(t.slice(0,-1),"\\");if((t.length-i.length)%2===0)return}else{let i=pt(e[2],"()");if(i===-2)return;if(i>-1){let l=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let s=e[2],r="";if(this.options.pedantic){let i=this.rules.other.pedanticHrefTitle.exec(s);i&&(s=i[1],r=i[3])}else r=e[3]?e[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?s=s.slice(1):s=s.slice(1,-1)),he(e,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){let s=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[s.toLowerCase()];if(!r){let i=t[0].charAt(0);return{type:"text",raw:i,text:i}}return he(t,r,t[0],this.lexer,this.rules)}}emStrong(n,e,t=""){let s=this.rules.inline.emStrongLDelim.exec(n);if(!(!s||!s[1]&&!s[2]&&!s[3]&&!s[4]||s[4]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[3])||!t||this.rules.inline.punctuation.exec(t))){let r=[...s[0]].length-1,i,l,a=r,p=0,o=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(o.lastIndex=0,e=e.slice(-1*n.length+r);(s=o.exec(e))!=null;){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i)continue;if(l=[...i].length,s[3]||s[4]){a+=l;continue}else if((s[5]||s[6])&&r%3&&!((r+l)%3)){p+=l;continue}if(a-=l,a>0)continue;l=Math.min(l,l+a+p);let h=[...s[0]][0].length,d=n.slice(0,r+s.index+h+l);if(Math.min(r,l)%2){let c=d.slice(1,-1);return{type:"em",raw:d,text:c,tokens:this.lexer.inlineTokens(c)}}let u=d.slice(2,-2);return{type:"strong",raw:d,text:u,tokens:this.lexer.inlineTokens(u)}}}}codespan(n){let e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(t),r=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return s&&r&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(n){let e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n,e,t=""){let s=this.rules.inline.delLDelim.exec(n);if(s&&(!s[1]||!t||this.rules.inline.punctuation.exec(t))){let r=[...s[0]].length-1,i,l,a=r,p=this.rules.inline.delRDelim;for(p.lastIndex=0,e=e.slice(-1*n.length+r);(s=p.exec(e))!=null;){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i||(l=[...i].length,l!==r))continue;if(s[3]||s[4]){a+=l;continue}if(a-=l,a>0)continue;l=Math.min(l,l+a);let o=[...s[0]][0].length,h=n.slice(0,r+s.index+o+l),d=h.slice(r,-r);return{type:"del",raw:h,text:d,tokens:this.lexer.inlineTokens(d)}}}}autolink(n){let e=this.rules.inline.autolink.exec(n);if(e){let t,s;return e[2]==="@"?(t=e[1],s="mailto:"+t):(t=e[1],s=t),{type:"link",raw:e[0],text:t,href:s,tokens:[{type:"text",raw:t,text:t}]}}}url(n){var t;let e;if(e=this.rules.inline.url.exec(n)){let s,r;if(e[2]==="@")s=e[0],r="mailto:"+s;else{let i;do i=e[0],e[0]=((t=this.rules.inline._backpedal.exec(e[0]))==null?void 0:t[0])??"";while(i!==e[0]);s=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(n){let e=this.rules.inline.text.exec(n);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},S=class U{constructor(e){b(this,"tokens");b(this,"options");b(this,"state");b(this,"inlineQueue");b(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||T,this.options.tokenizer=this.options.tokenizer||new M,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:w,block:_.normal,inline:P.normal};this.options.pedantic?(t.block=_.pedantic,t.inline=P.pedantic):this.options.gfm&&(t.block=_.gfm,this.options.breaks?t.inline=P.breaks:t.inline=P.gfm),this.tokenizer.rules=t}static get rules(){return{block:_,inline:P}}static lex(e,t){return new U(t).lex(e)}static lexInline(e,t){return new U(t).inlineTokens(e)}lex(e){e=e.replace(w.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let s=this.inlineQueue[t];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],s=!1){var r,i,l;for(this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(w.tabCharGlobal,"    ").replace(w.spaceLine,""));e;){let a;if((i=(r=this.options.extensions)==null?void 0:r.block)!=null&&i.some(o=>(a=o.call({lexer:this},e,t))?(e=e.substring(a.raw.length),t.push(a),!0):!1))continue;if(a=this.tokenizer.space(e)){e=e.substring(a.raw.length);let o=t.at(-1);a.raw.length===1&&o!==void 0?o.raw+=`
`:t.push(a);continue}if(a=this.tokenizer.code(e)){e=e.substring(a.raw.length);let o=t.at(-1);(o==null?void 0:o.type)==="paragraph"||(o==null?void 0:o.type)==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+a.raw,o.text+=`
`+a.text,this.inlineQueue.at(-1).src=o.text):t.push(a);continue}if(a=this.tokenizer.fences(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.heading(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.hr(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.blockquote(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.list(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.html(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.def(e)){e=e.substring(a.raw.length);let o=t.at(-1);(o==null?void 0:o.type)==="paragraph"||(o==null?void 0:o.type)==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+a.raw,o.text+=`
`+a.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title},t.push(a));continue}if(a=this.tokenizer.table(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.lheading(e)){e=e.substring(a.raw.length),t.push(a);continue}let p=e;if((l=this.options.extensions)!=null&&l.startBlock){let o=1/0,h=e.slice(1),d;this.options.extensions.startBlock.forEach(u=>{d=u.call({lexer:this},h),typeof d=="number"&&d>=0&&(o=Math.min(o,d))}),o<1/0&&o>=0&&(p=e.substring(0,o+1))}if(this.state.top&&(a=this.tokenizer.paragraph(p))){let o=t.at(-1);s&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+a.raw,o.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(a),s=p.length!==e.length,e=e.substring(a.raw.length);continue}if(a=this.tokenizer.text(e)){e=e.substring(a.raw.length);let o=t.at(-1);(o==null?void 0:o.type)==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+a.raw,o.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(a);continue}if(e){let o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){var p,o,h,d,u;this.tokenizer.lexer=this;let s=e,r=null;if(this.tokens.links){let c=Object.keys(this.tokens.links);if(c.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)c.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,r.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)i=r[2]?r[2].length:0,s=s.slice(0,r.index+i)+"["+"a".repeat(r[0].length-i-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=((o=(p=this.options.hooks)==null?void 0:p.emStrongMask)==null?void 0:o.call({lexer:this},s))??s;let l=!1,a="";for(;e;){l||(a=""),l=!1;let c;if((d=(h=this.options.extensions)==null?void 0:h.inline)!=null&&d.some(g=>(c=g.call({lexer:this},e,t))?(e=e.substring(c.raw.length),t.push(c),!0):!1))continue;if(c=this.tokenizer.escape(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.tag(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.link(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(c.raw.length);let g=t.at(-1);c.type==="text"&&(g==null?void 0:g.type)==="text"?(g.raw+=c.raw,g.text+=c.text):t.push(c);continue}if(c=this.tokenizer.emStrong(e,s,a)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.codespan(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.br(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.del(e,s,a)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.autolink(e)){e=e.substring(c.raw.length),t.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(e))){e=e.substring(c.raw.length),t.push(c);continue}let f=e;if((u=this.options.extensions)!=null&&u.startInline){let g=1/0,x=e.slice(1),v;this.options.extensions.startInline.forEach(q=>{v=q.call({lexer:this},x),typeof v=="number"&&v>=0&&(g=Math.min(g,v))}),g<1/0&&g>=0&&(f=e.substring(0,g+1))}if(c=this.tokenizer.inlineText(f)){e=e.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(a=c.raw.slice(-1)),l=!0;let g=t.at(-1);(g==null?void 0:g.type)==="text"?(g.raw+=c.raw,g.text+=c.text):t.push(c);continue}if(e){let g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return t}},O=class{constructor(n){b(this,"options");b(this,"parser");this.options=n||T}space(n){return""}code({text:n,lang:e,escaped:t}){var i;let s=(i=(e||"").match(w.notSpaceStart))==null?void 0:i[0],r=n.replace(w.endingNewline,"")+`
`;return s?'<pre><code class="language-'+$(s)+'">'+(t?r:$(r,!0))+`</code></pre>
`:"<pre><code>"+(t?r:$(r,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}def(n){return""}heading({tokens:n,depth:e}){return`<h${e}>${this.parser.parseInline(n)}</h${e}>
`}hr(n){return`<hr>
`}list(n){let e=n.ordered,t=n.start,s="";for(let l=0;l<n.items.length;l++){let a=n.items[l];s+=this.listitem(a)}let r=e?"ol":"ul",i=e&&t!==1?' start="'+t+'"':"";return"<"+r+i+`>
`+s+"</"+r+`>
`}listitem(n){return`<li>${this.parser.parse(n.tokens)}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let e="",t="";for(let r=0;r<n.header.length;r++)t+=this.tablecell(n.header[r]);e+=this.tablerow({text:t});let s="";for(let r=0;r<n.rows.length;r++){let i=n.rows[r];t="";for(let l=0;l<i.length;l++)t+=this.tablecell(i[l]);s+=this.tablerow({text:t})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+s+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let e=this.parser.parseInline(n.tokens),t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${$(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:t}){let s=this.parser.parseInline(t),r=ce(n);if(r===null)return s;n=r;let i='<a href="'+n+'"';return e&&(i+=' title="'+$(e)+'"'),i+=">"+s+"</a>",i}image({href:n,title:e,text:t,tokens:s}){s&&(t=this.parser.parseInline(s,this.parser.textRenderer));let r=ce(n);if(r===null)return $(t);n=r;let i=`<img src="${n}" alt="${$(t)}"`;return e&&(i+=` title="${$(e)}"`),i+=">",i}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:$(n.text)}},re=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}checkbox({raw:n}){return n}},z=class W{constructor(e){b(this,"options");b(this,"renderer");b(this,"textRenderer");this.options=e||T,this.options.renderer=this.options.renderer||new O,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new re}static parse(e,t){return new W(t).parse(e)}static parseInline(e,t){return new W(t).parseInline(e)}parse(e){var s,r;this.renderer.parser=this;let t="";for(let i=0;i<e.length;i++){let l=e[i];if((r=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&r[l.type]){let p=l,o=this.options.extensions.renderers[p.type].call({parser:this},p);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(p.type)){t+=o||"";continue}}let a=l;switch(a.type){case"space":{t+=this.renderer.space(a);break}case"hr":{t+=this.renderer.hr(a);break}case"heading":{t+=this.renderer.heading(a);break}case"code":{t+=this.renderer.code(a);break}case"table":{t+=this.renderer.table(a);break}case"blockquote":{t+=this.renderer.blockquote(a);break}case"list":{t+=this.renderer.list(a);break}case"checkbox":{t+=this.renderer.checkbox(a);break}case"html":{t+=this.renderer.html(a);break}case"def":{t+=this.renderer.def(a);break}case"paragraph":{t+=this.renderer.paragraph(a);break}case"text":{t+=this.renderer.text(a);break}default:{let p='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(p),"";throw new Error(p)}}}return t}parseInline(e,t=this.renderer){var r,i;this.renderer.parser=this;let s="";for(let l=0;l<e.length;l++){let a=e[l];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[a.type]){let o=this.options.extensions.renderers[a.type].call({parser:this},a);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){s+=o||"";continue}}let p=a;switch(p.type){case"escape":{s+=t.text(p);break}case"html":{s+=t.html(p);break}case"link":{s+=t.link(p);break}case"image":{s+=t.image(p);break}case"checkbox":{s+=t.checkbox(p);break}case"strong":{s+=t.strong(p);break}case"em":{s+=t.em(p);break}case"codespan":{s+=t.codespan(p);break}case"br":{s+=t.br(p);break}case"del":{s+=t.del(p);break}case"text":{s+=t.text(p);break}default:{let o='Token with "'+p.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return s}},j,B=(j=class{constructor(n){b(this,"options");b(this,"block");this.options=n||T}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(){return this.block?S.lex:S.lexInline}provideParser(){return this.block?z.parse:z.parseInline}},b(j,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),b(j,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),j),dt=class{constructor(...n){b(this,"defaults",X());b(this,"options",this.setOptions);b(this,"parse",this.parseMarkdown(!0));b(this,"parseInline",this.parseMarkdown(!1));b(this,"Parser",z);b(this,"Renderer",O);b(this,"TextRenderer",re);b(this,"Lexer",S);b(this,"Tokenizer",M);b(this,"Hooks",B);this.use(...n)}walkTokens(n,e){var s,r;let t=[];for(let i of n)switch(t=t.concat(e.call(this,i)),i.type){case"table":{let l=i;for(let a of l.header)t=t.concat(this.walkTokens(a.tokens,e));for(let a of l.rows)for(let p of a)t=t.concat(this.walkTokens(p.tokens,e));break}case"list":{let l=i;t=t.concat(this.walkTokens(l.items,e));break}default:{let l=i;(r=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&r[l.type]?this.defaults.extensions.childTokens[l.type].forEach(a=>{let p=l[a].flat(1/0);t=t.concat(this.walkTokens(p,e))}):l.tokens&&(t=t.concat(this.walkTokens(l.tokens,e)))}}return t}use(...n){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{let s={...t};if(s.async=this.defaults.async||s.async||!1,t.extensions&&(t.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let i=e.renderers[r.name];i?e.renderers[r.name]=function(...l){let a=r.renderer.apply(this,l);return a===!1&&(a=i.apply(this,l)),a}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[r.level];i?i.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),s.extensions=e),t.renderer){let r=this.defaults.renderer||new O(this.defaults);for(let i in t.renderer){if(!(i in r))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let l=i,a=t.renderer[l],p=r[l];r[l]=(...o)=>{let h=a.apply(r,o);return h===!1&&(h=p.apply(r,o)),h||""}}s.renderer=r}if(t.tokenizer){let r=this.defaults.tokenizer||new M(this.defaults);for(let i in t.tokenizer){if(!(i in r))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let l=i,a=t.tokenizer[l],p=r[l];r[l]=(...o)=>{let h=a.apply(r,o);return h===!1&&(h=p.apply(r,o)),h}}s.tokenizer=r}if(t.hooks){let r=this.defaults.hooks||new B;for(let i in t.hooks){if(!(i in r))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let l=i,a=t.hooks[l],p=r[l];B.passThroughHooks.has(i)?r[l]=o=>{if(this.defaults.async&&B.passThroughHooksRespectAsync.has(i))return(async()=>{let d=await a.call(r,o);return p.call(r,d)})();let h=a.call(r,o);return p.call(r,h)}:r[l]=(...o)=>{if(this.defaults.async)return(async()=>{let d=await a.apply(r,o);return d===!1&&(d=await p.apply(r,o)),d})();let h=a.apply(r,o);return h===!1&&(h=p.apply(r,o)),h}}s.hooks=r}if(t.walkTokens){let r=this.defaults.walkTokens,i=t.walkTokens;s.walkTokens=function(l){let a=[];return a.push(i.call(this,l)),r&&(a=a.concat(r.call(this,l))),a}}this.defaults={...this.defaults,...s}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return S.lex(n,e??this.defaults)}parser(n,e){return z.parse(n,e??this.defaults)}parseMarkdown(n){return(e,t)=>{let s={...t},r={...this.defaults,...s},i=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&s.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=n),r.async)return(async()=>{let l=r.hooks?await r.hooks.preprocess(e):e,a=await(r.hooks?await r.hooks.provideLexer():n?S.lex:S.lexInline)(l,r),p=r.hooks?await r.hooks.processAllTokens(a):a;r.walkTokens&&await Promise.all(this.walkTokens(p,r.walkTokens));let o=await(r.hooks?await r.hooks.provideParser():n?z.parse:z.parseInline)(p,r);return r.hooks?await r.hooks.postprocess(o):o})().catch(i);try{r.hooks&&(e=r.hooks.preprocess(e));let l=(r.hooks?r.hooks.provideLexer():n?S.lex:S.lexInline)(e,r);r.hooks&&(l=r.hooks.processAllTokens(l)),r.walkTokens&&this.walkTokens(l,r.walkTokens);let a=(r.hooks?r.hooks.provideParser():n?z.parse:z.parseInline)(l,r);return r.hooks&&(a=r.hooks.postprocess(a)),a}catch(l){return i(l)}}}onError(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let s="<p>An error occurred:</p><pre>"+$(t.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(t);throw t}}},A=new dt;function m(n,e){return A.parse(n,e)}m.options=m.setOptions=function(n){return A.setOptions(n),m.defaults=A.defaults,ue(m.defaults),m};m.getDefaults=X;m.defaults=T;m.use=function(...n){return A.use(...n),m.defaults=A.defaults,ue(m.defaults),m};m.walkTokens=function(n,e){return A.walkTokens(n,e)};m.parseInline=A.parseInline;m.Parser=z;m.parser=z.parse;m.Renderer=O;m.TextRenderer=re;m.Lexer=S;m.lexer=S.lex;m.Tokenizer=M;m.Hooks=B;m.parse=m;m.options;m.setOptions;m.use;m.walkTokens;m.parseInline;z.parse;S.lex;const gt=`# GitBulk Technical Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Key Features](#key-features)
3. [Installation and Deployment](#installation-and-deployment)
4. [Authentication Management](#authentication-management)
5. [Operation Catalog](#operation-catalog)
6. [Global Flags and Parameters](#global-flags-and-parameters)
7. [Advanced Usage Scenarios](#advanced-usage-scenarios)

---

## Introduction

GitBulk is a high-performance, integrated solution (CLI and GUI) built in Python for large-scale Git repository orchestration. Designed for microservice architectures and multi-repository environments, the tool mitigates operational latency through concurrent processing, enabling complete development lifecycles to be executed across hundreds of projects simultaneously and securely.

---

## Key Features

- **Concurrent Execution**: Engine based on \`ThreadPoolExecutor\` that eliminates bottlenecks in network and disk operations.
- **Native Desktop Interface**: High-fidelity application for Windows and Linux environments, featuring dark mode support and real-time monitoring.
- **Operational Resilience**: Built-in protection mechanisms with interactive prompts to prevent accidental data loss during destructive commands.
- **High-Density Technical Reporting**: Visualization using the \`rich\` library, providing compact matrices, color-coded statuses, and progress telemetry.
- **CI / GitHub Actions Integration**: Native status querying for pipelines directly from the terminal or the desktop interface.

---

## Installation and Deployment

### Recommended Installation (Web Installer)

GitBulk provides optimized one-step installers that automatically configure binaries, shortcuts, and environment variables.

**Windows (PowerShell):**
\`\`\`powershell
iwr -useb "https://raw.githubusercontent.com/rezzt-dev/gitbulk-project/main/dist/gui/install.ps1" | iex
\`\`\`

**Linux (Bash):**
\`\`\`bash
curl -fsSL "https://raw.githubusercontent.com/rezzt-dev/gitbulk-project/main/dist/gui/install_linux.sh" | bash
\`\`\`

### Setup from Source (Development)

For development or customization environments, clone the repository and install the dependency tree:

\`\`\`bash
git clone https://github.com/rezzt-dev/gitbulk-project.git
cd gitbulk-project
pip install -r requirements.txt
\`\`\`

---

## Authentication Management

Certain operations (such as \`fetch\` on private repositories or \`ci-status\` queries) require valid credentials. GitBulk centralizes this management by requesting a Personal Access Token (PAT) once and storing it securely within the operating system's credentials.

To configure the access environment:
\`\`\`bash
gitbulk auth
\`\`\`
This command configures the global Git helper, allowing subsequent operations to execute silently without credential prompt interruptions.

---

## Operation Catalog

### \`status\`
Analyzes the working tree state and reports divergence relative to tracked remote branches.
**States**: \`[CLEAN]\`, \`[MODIFIED]\`, \`[AHEAD]\`, \`[BEHIND]\`.

### \`fetch\`
Downloads remote history metadata without integrating changes into local branches.
**States**: \`[OK]\`, \`[UPDATES]\`.

### \`pull\`
Updates the active branch using a \`fast-forward only\` integration strategy.
**Suggested Flags**: \`--autostash\`.

### \`checkout\`
Performs a bulk transition of \`HEAD\` towards the specified branch.
**Required Parameter**: \`-b <branch_name>\`.

### \`current-branch\`
Generates an ultra-compact topographic map showing the active branch and local/remote references.

### \`clean\`
**Destructive Operation**: Executes \`git fetch --prune\` and \`git clean -xfd\`. Removes dead remote references and untracked files. Requires interactive confirmation.

### \`ci-status\`
Asynchronous query to the GitHub API to report the status of continuous integration pipelines.
**States**: \`[PASS]\`, \`[FAIL]\`, \`[PEND]\`, \`[NONE]\`.

### \`export\` / \`restore\`
Enables persistence and reconstruction of large-scale workspaces using JSON snapshot files. Useful for instant onboarding processes.

---

## Global Flags and Parameters

- \`-d, --dir <path>\`: Root directory for recursive scanning. Preserves the persistence of the last used path.
- \`-w, --workers <n>\`: Number of concurrent threads (Limit: 50). Default: \`5\`.
- \`-l, --log <path>\`: Redirection of technical output to a persistent log file.
- \`-b, --branch <name>\`: Target branch for transition operations (\`checkout\`).
- \`--autostash\`: Automates the safeguarding of local changes prior to an update.
- \`--dry-run\`: Preview changes without real application (Supported in \`clean\` and \`restore\`).
- \`--gui\`: Forces the launch of the graphical user interface.

---

## Advanced Usage Scenarios

### Synchronization with AutoStash
To avoid blocks caused by uncommitted local changes during a bulk pull, the \`--autostash\` instruction allows for automatic stashing, updating, and re-applying of the work patch.
\`\`\`bash
gitbulk pull --autostash
\`\`\`

### Execution in CI Environments (Piped Execution)
GitBulk has been designed following POSIX process standards. Interactive operations like \`clean\` automatically detect the absence of a terminal (\`tty\`) or null \`stdin\` injections, aborting execution safely to prevent catastrophic failures in automated pipelines.
`,kt=`# Documentación Técnica de GitBulk

## Índice
1. [Introducción](#introducción)
2. [Características Principales](#características-principales)
3. [Instalación y Despliegue](#instalación-y-despliegue)
4. [Gestión de Autenticación](#gestión-de-autenticación)
5. [Catálogo de Operaciones](#catálogo-de-operaciones)
6. [Banderas y Parámetros Globales](#banderas-y-parámetros-globales)
7. [Escenarios de Uso Avanzado](#escenarios-de-uso-avanzado)

---

## Introducción

GitBulk es una solución integral (CLI y GUI) de alto rendimiento construida en Python para la orquestación masiva de repositorios Git. Diseñada para arquitecturas de microservicios y entornos multi-repositorio, la herramienta mitiga la latencia operativa mediante el procesamiento concurrente, permitiendo ejecutar ciclos de vida de desarrollo completos sobre cientos de proyectos de forma simultánea y segura.

---

## Características Principales

- **Procesamiento Concurrente**: Motor basado en \`ThreadPoolExecutor\` que elimina cuellos de botella en operaciones de red y disco.
- **Interfaz Gráfica Nativa (Desktop)**: Aplicación de alta fidelidad para entornos Windows y Linux con soporte para modo oscuro y monitorización en tiempo real.
- **Resiliencia Operativa**: Mecanismos de protección integrados con prompts interactivos para prevenir la pérdida accidental de datos en comandos destructivos.
- **Reporte Técnico de Alta Densidad**: Visualización mediante la librería \`rich\` que proporciona matrices compactas, estados codificados por color y telemetría de progreso.
- **Integración de CI / GitHub Actions**: Consulta nativa del estado de los pipelines directamente desde la terminal o la interfaz de escritorio.

---

## Instalación y Despliegue

### Instalación Recomendada (Web Installer)

GitBulk proporciona instaladores optimizados de un solo paso que configuran automáticamente los binarios, los accesos directos y las variables de entorno.

**Windows (PowerShell):**
\`\`\`powershell
iwr -useb "https://raw.githubusercontent.com/rezzt-dev/gitbulk-project/main/dist/gui/install.ps1" | iex
\`\`\`

**Linux (Bash):**
\`\`\`bash
curl -fsSL "https://raw.githubusercontent.com/rezzt-dev/gitbulk-project/main/dist/gui/install_linux.sh" | bash
\`\`\`

### Configuración desde Código Fuente (Desarrollo)

Para entornos de desarrollo o personalización, clone el repositorio e instale el árbol de dependencias:

\`\`\`bash
git clone https://github.com/rezzt-dev/gitbulk-project.git
cd gitbulk-project
pip install -r requirements.txt
\`\`\`

---

## Gestión de Autenticación

Ciertas operaciones (como \`fetch\` en repositorios privados o consultas de \`ci-status\`) requieren credenciales válidas. GitBulk centraliza esta gestión solicitando un Personal Access Token (PAT) una sola vez y almacenándolo de forma segura en las credenciales del sistema operativo.

Para configurar el entorno de acceso:
\`\`\`bash
gitbulk auth
\`\`\`
Este comando configura el helper global de Git, permitiendo que las operaciones posteriores se ejecuten de forma silenciosa sin interrupciones por solicitud de credenciales.

---

## Catálogo de Operaciones

### \`status\`
Analiza el estado del árbol de trabajo y reporta la divergencia respecto a las ramas remotas.
**Estados**: \`[CLEAN]\`, \`[MODIFIED]\`, \`[AHEAD]\`, \`[BEHIND]\`.

### \`fetch\`
Descarga metadatos del historial remoto sin integrar cambios en las ramas locales.
**Estados**: \`[OK]\`, \`[UPDATES]\`.

### \`pull\`
Actualiza la rama activa mediante una estrategia de integración \`fast-forward only\`.
**Banderas sugeridas**: \`--autostash\`.

### \`checkout\`
Realiza una transición masiva de \`HEAD\` hacia la rama especificada.
**Parámetro requerido**: \`-b <branch_name>\`.

### \`current-branch\`
Genera un mapa topográfico ultra-compacto que muestra la rama activa y las referencias locales/remotas.

### \`clean\`
**Operación Destructiva**: Ejecuta \`git fetch --prune\` y \`git clean -xfd\`. Elimina referencias remotas muertas y archivos no rastreados. Requiere confirmación interactiva.

### \`ci-status\`
Consulta asíncrona a la API de GitHub para reportar el estado de los pipelines de integración continua.
**Estados**: \`[PASS]\`, \`[FAIL]\`, \`[PEND]\`, \`[NONE]\`.

### \`export\` / \`restore\`
Permiten la persistencia y reconstrucción de espacios de trabajo masivos mediante archivos de snapshot JSON. Útil para procesos de onboarding instantáneo.

---

## Banderas y Parámetros Globales

- \`-d, --dir <ruta>\`: Directorio raíz para el escaneo recursivo. Conserva la persistencia de la última ruta utilizada.
- \`-w, --workers <n>\`: Número de hilos concurrentes (Límite: 50). Defecto: \`5\`.
- \`-l, --log <ruta>\`: Redirección del volcado técnico a un archivo log persistente.
- \`-b, --branch <nombre>\`: Rama objetivo para operaciones de transición (\`checkout\`).
- \`--autostash\`: Automatiza el resguardo de cambios locales previo a una actualización.
- \`--dry-run\`: Previsualización de cambios sin aplicación real (Soportado en \`clean\` y \`restore\`).
- \`--gui\`: Fuerza el lanzamiento de la interfaz gráfica de usuario.

---

## Escenarios de Uso Avanzado

### Sincronización con AutoStash
Para evitar bloqueos por cambios locales no finalizados durante un pull masivo, la instrucción \`--autostash\` permite alojar, actualizar y recomponer automáticamente el parche de trabajo.
\`\`\`bash
gitbulk pull --autostash
\`\`\`

### Ejecución en Entornos de CI (Piped Execution)
GitBulk ha sido diseñado respetando los estándares de procesos POSIX. Operaciones interactivas como \`clean\` detectan automáticamente la ausencia de un terminal (\`tty\`) o inyecciones de \`stdin\` nulo, abortando la ejecución de forma segura para evitar fallos catastróficos en pipelines automatizados.
`,ft={en:gt,es:kt},L={sun:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',moon:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',github:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.65.7 1.03 1.59 1.03 2.68 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>',back:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',translate:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>'},mt=localStorage.getItem("gitbulk-lang"),bt=localStorage.getItem("gitbulk-theme");let y={lang:mt||"es",theme:bt||"dark"};const ve={es:{back:"Inicio",knowledge:"Conocimiento"},en:{back:"Product Homepage",knowledge:"Knowledge"}},xt=()=>{const n=ve[y.lang];return`
    <header class="w-full border-b border-border/60 dark:border-white/5 bg-background/90 backdrop-blur-xl fixed top-0 z-50 transition-all duration-300 shadow-sm" id="navbar">
      <div class="max-w-[90rem] mx-auto px-6 h-16 flex items-center justify-between">
        <div class="flex items-center gap-6">
          <a href="/" class="flex items-center gap-3 group cursor-pointer hover:opacity-80 transition-opacity">
            <div class="w-8 h-8 flex items-center justify-center bg-white dark:bg-zinc-900 rounded-lg border border-border dark:border-white/10 shadow-sm">
              <img src="/logo.svg" alt="GitBulk Logo" class="w-4 h-4 object-contain ${y.theme==="light"?"brightness-0":""}" />
            </div>
            <span class="text-xl font-display font-bold tracking-tight text-foreground">GitBulk <span class="text-primary font-medium text-sm ml-1 px-2 py-0.5 rounded-md bg-primary/10">Docs</span></span>
          </a>
        </div>
        
        <div class="flex items-center gap-4">
          <a href="/" class="hidden md:flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-zinc-400 hover:text-foreground transition-colors mr-2">
            ${L.back} ${n.back}
          </a>
          <div class="w-px h-4 bg-border hidden md:block"></div>
          <button id="btn-lang" class="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-foreground border border-border/50 dark:border-white/5 uppercase text-xs font-bold font-mono">
            ${L.translate} ${y.lang}
          </button>
          <button id="btn-theme" class="flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-foreground">
            ${y.theme==="dark"?L.sun:L.moon}
          </button>
          <a href="https://github.com/rezzt-dev/gitbulk-project" target="_blank" class="flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-foreground">
            ${L.github}
          </a>
        </div>
      </div>
    </header>
  `},N=async()=>{const n=document.getElementById("docs-app");document.documentElement.classList.toggle("dark",y.theme==="dark");const e=ft[y.lang],t=ve[y.lang],s=new m.Renderer;s.code=({text:u,lang:c})=>`
      <div class="terminal-window my-8 shadow-2xl">
        <div class="terminal-header py-3 px-5 border-b border-white/5 flex items-center justify-between">
          <div class="flex gap-2">
            <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
          </div>
          <div class="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">${c||"bash"}</div>
        </div>
        <div class="terminal-body !p-0">
          <pre class="!bg-transparent !m-0 !p-6 scroll-smooth custom-scrollbar"><code class="language-${c||"bash"}">${u}</code></pre>
        </div>
      </div>
    `;const r=await m.parse(e,{async:!0,renderer:s});n.innerHTML=`
    ${xt()}
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
          ${r}
        </article>
      </main>

      <!-- Left Sidebar (TOC) -->
      <aside class="hidden lg:block w-72 shrink-0 order-2 sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto pr-6 custom-scrollbar">
        <div class="mb-4">
          <h4 class="text-sm font-bold tracking-widest text-slate-900 dark:text-zinc-100 uppercase mb-4 font-display">${t.knowledge}</h4>
          <ul id="toc-list" class="space-y-3 border-l border-border dark:border-white/10 ml-1">
            <!-- Injected statically via DOM parsing -->
          </ul>
        </div>
      </aside>

    </div>
  `;const l=document.getElementById("markdown-content").querySelectorAll("h2, h3"),a=document.getElementById("toc-list");l.forEach(u=>{const c=u.textContent||"",f=c.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");u.id=f,u.classList.add("scroll-mt-32");const g=document.createElement("a");g.href="#"+f,g.className="opacity-0 group-hover:opacity-100 absolute -ml-6 text-emerald-500 transition-opacity no-underline selection:bg-transparent hidden md:block",g.textContent="#",u.classList.add("group","relative"),u.insertBefore(g,u.firstChild);const x=document.createElement("li"),v=document.createElement("a");v.href="#"+f,v.textContent=c,v.className=`block text-sm transition-colors hover:text-primary -ml-px pl-4 border-l ${u.tagName==="H3"?"pl-8 text-slate-500 dark:text-zinc-500 border-transparent text-[13px] hover:border-border dark:hover:border-zinc-700":"text-slate-600 dark:text-zinc-400 font-medium border-transparent hover:border-primary"}`,v.setAttribute("data-target",f),x.appendChild(v),a.appendChild(x)}),document.getElementById("btn-theme").addEventListener("click",()=>{y.theme=y.theme==="dark"?"light":"dark",document.documentElement.classList.toggle("dark",y.theme==="dark"),localStorage.setItem("gitbulk-theme",y.theme),N()}),document.getElementById("btn-lang").addEventListener("click",()=>{y.lang=y.lang==="es"?"en":"es",localStorage.setItem("gitbulk-lang",y.lang),N()});const h={root:null,rootMargin:"-100px 0px -60% 0px",threshold:1},d=new IntersectionObserver(u=>{u.forEach(c=>{if(c.isIntersecting){document.querySelectorAll("#toc-list a").forEach(g=>{var x;g.classList.remove("text-primary","border-primary","font-semibold"),(x=g.parentElement)!=null&&x.previousElementSibling});const f=document.querySelector(`#toc-list a[data-target="${c.target.id}"]`);f&&f.classList.add("text-primary","border-primary","font-semibold")}})},h);l.forEach(u=>d.observe(u))};document.addEventListener("DOMContentLoaded",N);(document.readyState==="complete"||document.readyState==="interactive")&&N();
