_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[129],{"3mJ5":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:e,e:n,theme:t,variants:a}){e(s.default.fromPairs(s.default.map(t("opacity"),(e,t)=>[`.${n(`opacity-${t}`)}`,{opacity:e}])),a("opacity"))}};var a,s=(a=t("LvDl"))&&a.__esModule?a:{default:a}},"5xSE":function(e,n,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t("KQm4"),s=t("rePB"),c=t("q1tI"),i=t.n(c),o=t("98BF"),r=t("Zb5r"),p=t("AOjV"),l=i.a.createElement;function u(e){var n=e.plugin,t=e.name,c=o.defaultConfig.variants[n]||["responsive"];t=t||n.replace(/([a-z])([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t.toLowerCase())}));var u=["responsive","hover","focus","active","group-hover"].filter((function(e){return!c.includes(e)})).slice(0,2);return l(i.a.Fragment,null,l("p",null,"By default, ",c.length?"only ".concat(Object(r.a)(c)):"no"," variants are generated for ",t," utilities."),l("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",l("code",null,n)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",c.length>0?"also ":"","generate"," ",Object(r.a)(u)," variants:"),l(p.a,{path:"variants",before:"// ...",remove:Object(s.a)({},n,c),add:Object(s.a)({},n,[].concat(Object(a.a)(c),Object(a.a)(u)))}))}},AOjV:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t("q1tI"),s=t.n(a),c=t("Btb4"),i=t.n(c),o=t("AI3G"),r=t("iuhU"),p=s.a.createElement;function l(e){var n=e.edits,t=e.indent,s=void 0===t?"":t,c=e.type,o=void 0===c?"inserted":c;return p("span",{className:Object(r.a)("token",{"inserted-sign inserted":"inserted"===o,"deleted-sign deleted":"inserted"!==o})},Object.keys(n).map((function(e,t){return p(a.Fragment,{key:t},p("span",{className:Object(r.a)("token prefix",{inserted:"inserted"===o,deleted:"inserted"!==o})},"inserted"===o?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(c=e)?c:"'".concat(c,"'"),":"," ",i()(n[e],{indent:"  "}).replace(/\[([^\]]+)\]/g,(function(e,n){return"[".concat(n.replace(/\n\s*/g," ").trim(),"]")})).split("\n").map((function(e,n){return"".concat(0===n?"":"+ "+s).concat(e)})).join("\n"),",\n");var c})))}function u(e){var n=e.path,t=e.add,s=e.remove,c=e.before,i=e.after;return n="string"===typeof n?n.split("."):n,p("pre",{className:"language-diff"},p("code",{className:"language-diff"},p("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",n.map((function(e,n){return p(a.Fragment,{key:n},"  ","  ".repeat(n+1),e,": ","{\n")})),c&&Object(o.a)(c).map((function(e){return"".concat("  ".repeat(n.length+2)).concat(e,"\n")}))),s&&p(l,{edits:s,type:"deleted",indent:"  ".repeat(n.length+1)}),t&&p(l,{edits:t,type:"inserted",indent:"  ".repeat(n.length+1)}),p("span",{className:"token unchanged"},i&&Object(o.a)(i).map((function(e){return"".concat("  ".repeat(n.length+2)).concat(e,"\n")})),n.map((function(e,t){return p(a.Fragment,{key:t},"  ","  ".repeat(n.length-t),"}\n")})),"  }")))}},Btb4:function(e,n,t){"use strict";const a=t("5xSE"),s=t("p+I8"),c=t("GAX2").default;e.exports=(e,n,t)=>{const i=[];return function e(n,t,o){let r;(t=t||{}).indent=t.indent||"\t",o=o||"",r=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===t.inlineCharacterLimit)return e;const n=e.replace(new RegExp(r.newLine,"g"),"").replace(new RegExp(r.newLineOrSpace,"g")," ").replace(new RegExp(r.pad+"|"+r.indent,"g"),"");return n.length<=t.inlineCharacterLimit?n:e.replace(new RegExp(r.newLine+"|"+r.newLineOrSpace,"g"),"\n").replace(new RegExp(r.pad,"g"),o).replace(new RegExp(r.indent,"g"),o+t.indent)};if(-1!==i.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||a(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";i.push(n);const a="["+r.newLine+n.map((a,s)=>{const c=n.length-1===s?r.newLine:","+r.newLineOrSpace;let i=e(a,t,o+t.indent);return t.transform&&(i=t.transform(n,s,i)),r.indent+i+c}).join("")+r.pad+"]";return i.pop(),p(a)}if(s(n)){let a=Object.keys(n).concat(c(n));if(t.filter&&(a=a.filter(e=>t.filter(n,e))),0===a.length)return"{}";i.push(n);const s="{"+r.newLine+a.map((s,c)=>{const i=a.length-1===c?r.newLine:","+r.newLineOrSpace,p="symbol"===typeof s,l=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=p||l?s:e(s,t);let d=e(n[s],t,o+t.indent);return t.transform&&(d=t.transform(n,s,d)),r.indent+String(u)+": "+d+i}).join("")+r.pad+"}";return i.pop(),p(s)}return n=String(n).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(e,n,t)}},"Ca+n":function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("q1tI"),s=t.n(a),c=t("S5AU"),i=t.n(c),o=t("iuhU"),r=s.a.createElement,p=["","sm:","md:","lg:","xl:"];function l(e){var n=e.children,t=e.active,a=e.onClick;return r("button",{type:"button",className:Object(o.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":t,"text-gray-500":!t}),onClick:a},n)}var u=function(e){return'<div class="'.concat(e,'"></div>')};function d(e){var n=e.classNames,t=e.snippet,s=void 0===t?u:t,c=e.preview,d=e.previewClassName,m=Array.isArray(n[0])?n.length:1,f=Object(a.useState)(0),g=f[0],b=f[1];return r("div",{className:"mt-8"},r("div",{className:"flex justify-center"},r("div",{className:"grid grid-cols-5 mb-2 bg-white"},r(l,{active:0===g,onClick:function(){return b(0)}},r("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},r("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),r("p",{className:"text-xs"},"all")),r(l,{active:1===g,onClick:function(){return b(1)}},r("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},r("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),r("p",{className:"text-xs"},"sm")),r(l,{active:2===g,onClick:function(){return b(2)}},r("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},r("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),r("p",{className:"text-xs"},"md")),r(l,{active:3===g,onClick:function(){return b(3)}},r("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},r("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),r("p",{className:"text-xs"},"lg")),r(l,{active:4===g,onClick:function(){return b(4)}},r("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},r("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),r("p",{className:"text-xs"},"xl")))),r("div",{className:"overflow-hidden mb-8"},r("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},r("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},r("code",{className:"inline-block p-4"},i()(s(1===m?"{{CLASSNAMES}}":Array.from({length:m}).map((function(e,n){return"{{CLASSNAMES[".concat(n,"]}}")})))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((function(e,t){if(t%2===1){var a=e.match(/\[([0-9]+)\]/);return(a?n[parseInt(a[1],10)]:n).map((function(e,n){return e?r("span",{key:"".concat(t,"-").concat(n),className:g===n?"text-code-yellow":""},0===n?"":" ",e.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map((function(e){return"".concat(p[n]).concat(e)})).join(" ")):null})).filter(Boolean)}return e}))))),r("div",{className:Object(o.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",d,{"p-4":!d})},c(function(e){if(m>1)return n.map((function(n){for(var t=e;t>=0;t--)if(n[t])return n[t].replace(/\(([^)]+)\)/g,"$1")}));for(var t=e;t>=0;t--)if(n[t])return n[t].replace(/\(([^)]+)\)/g,"$1")}(g)))))}},GAX2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e=>Object.getOwnPropertySymbols(e).filter(n=>Object.prototype.propertyIsEnumerable.call(e,n))},"IBu/":function(e,n,t){"use strict";const a=t("sQdO");e.exports=e=>{const n=a(e);if(0===n)return e;const t=new RegExp(`^[ \\t]{${n}}`,"gm");return e.replace(t,"")}},S5AU:function(e,n,t){"use strict";const a=t("IBu/"),s=t("S6im");e.exports=(e,n=0,t)=>s(a(e),n,t)},S6im:function(e,n,t){"use strict";e.exports=(e,n=1,t)=>{if(t={indent:" ",includeEmptyLines:!1,...t},"string"!==typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if("number"!==typeof n)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof n}\``);if("string"!==typeof t.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);if(0===n)return e;const a=t.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(a,t.indent.repeat(n))}},YuTi:function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},Zb5r:function(e,n,t){"use strict";function a(e){return e.reduce((function(n,t,a){return 0===a?t:a===e.length-1?"".concat(n," and ").concat(t):"".concat(n,", ").concat(t)}),"")}t.d(n,"a",(function(){return a}))},aX4L:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/opacity",function(){return t("ldhp")}])},ldhp:function(e,n,t){"use strict";t.r(n),t.d(n,"Layout",(function(){return O})),t.d(n,"classes",(function(){return h})),t.d(n,"meta",(function(){return j})),t.d(n,"tableOfContents",(function(){return x})),t.d(n,"default",(function(){return w}));var a=t("wx14"),s=t("Ff2n"),c=t("q1tI"),i=t.n(c),o=t("7ljp"),r=t("YFqc"),p=t.n(r),l=t("tc9R"),u=t("pOT7"),d=t("vRWG"),m=t("I6Nb"),f=t("3mJ5"),g=t.n(f),b=t("8C7G"),v=t("wH44"),y=t("Ca+n"),O=(i.a.createElement,d.DocumentationLayout),h={plugin:g.a},j={title:"Opacity",description:"Utilities for controlling the opacity of an element.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},x=[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Opacity Scale",slug:"opacity-scale"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],k={Layout:O,classes:h,meta:j,tableOfContents:x},N=m.ContentsLayout;function w(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(o.a)(N,Object(a.a)({},k,t,{components:n,mdxType:"MDXLayout"}),Object(o.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Control the opacity of an element using the ",Object(o.a)("inlineCode",{parentName:"p"},".opacity-{amount}")," utilities."),Object(o.a)(u.a,{preview:'\n  <div class="flex -mx-2">\n    <div class="text-sm flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 mx-2 opacity-100">.opacity-100</div>\n    <div class="text-sm flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 mx-2 opacity-75">.opacity-75</div>\n    <div class="text-sm flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 mx-2 opacity-50">.opacity-50</div>\n    <div class="text-sm flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 mx-2 opacity-25">.opacity-25</div>\n    <div class="text-sm flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 mx-2 opacity-0">.opacity-0</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>opacity-100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>.opacity-100<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>opacity-75<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>.opacity-75<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>opacity-50<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>.opacity-50<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>opacity-25<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>.opacity-25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>opacity-0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>.opacity-0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(o.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the opacity of an element at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing opacity utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:opacity-50")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"opacity-50")," utility at only medium screen sizes and above."),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(y.a,{classNames:["opacity-100","opacity-75","opacity-50","opacity-25","opacity-0"],snippet:function(e){return'\n    <div class="'.concat(e,' ...">\n      \x3c!-- ... --\x3e\n    </div>\n  ')},preview:function(e){return Object(o.a)("div",{className:"text-center"},Object(o.a)("div",{className:"px-4 py-2 bg-gray-400 w-24 h-24 rounded-full inline-block ".concat(e)}))},mdxType:"ResponsiveCodeSample"}),Object(o.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(l.a,{level:3,id:"opacity-scale",toc:!0},"Opacity Scale"),Object(o.a)("p",null,"By default Tailwind provides five opacity utilities based on a simple numeric scale. You change, add, or remove these by editing the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.opacity")," section of your Tailwind config."),Object(o.a)("pre",{className:"language-diff"},Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),Object(o.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     opacity: {\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '0': '0',\n"),Object(o.a)("span",Object(a.a)({parentName:"code"},{className:"token deleted-sign deleted"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       '25': '.25',\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       '50': '.5',\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       '75': '.75',\n"),Object(o.a)("span",Object(a.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '10': '.1',\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '20': '.2',\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '30': '.3',\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '40': '.4',\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '50': '.5',\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '60': '.6',\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '70': '.7',\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '80': '.8',\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '90': '.9',\n"),Object(o.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '100': '1',\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(o.a)(l.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(o.a)(b.a,{plugin:"opacity",mdxType:"Variants"}),Object(o.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(o.a)(v.a,{plugin:"opacity",mdxType:"Disabling"}))}w.isMDXComponent=!0,w.layoutProps=k},"p+I8":function(e,n,t){"use strict";e.exports=function(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)}},pOT7:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t("q1tI"),s=t.n(a),c=t("iuhU"),i=s.a.createElement;function o(e){var n=e.preview,t=e.snippet,a=e.previewClassName;return i("div",{className:"relative overflow-hidden mb-8"},i("div",{className:Object(c.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",a,{"p-4":!a}),dangerouslySetInnerHTML:{__html:n}}),i("div",{className:"rounded-b-lg bg-gray-800"},i("pre",{className:"scrollbar-none m-0 p-0 language-html"},i("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:t}}))))}},sQdO:function(e,n,t){"use strict";e.exports=e=>{const n=e.match(/^[ \t]*(?=\S)/gm);return n?n.reduce((e,n)=>Math.min(e,n.length),1/0):0}},wH44:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("rePB"),s=t("q1tI"),c=t.n(s),i=t("AOjV"),o=t("AI3G"),r=t("Zb5r"),p=c.a.createElement;function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e){var n=e.plugin,t=e.name,s=Object(o.a)(n);return t=t||n.replace(/([a-z])([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t.toLowerCase())})),p(c.a.Fragment,null,p("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",p("span",{dangerouslySetInnerHTML:{__html:Object(r.a)(s.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",p("code",null,"false")," in the"," ",p("code",null,"corePlugins")," section of your config file:"),p(i.a,{path:"corePlugins",before:"// ...",add:s.reduce((function(e,n){return u(u({},e),{},Object(a.a)({},n,!1))}),{})}))}},yLpj:function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(a){"object"===typeof window&&(t=window)}e.exports=t}},[["aX4L",0,2,5,1,3,4]]]);