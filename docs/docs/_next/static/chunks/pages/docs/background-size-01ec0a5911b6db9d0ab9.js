_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[64],{"5xSE":function(e,n,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t("KQm4"),s=t("rePB"),c=t("q1tI"),o=t.n(c),r=t("98BF"),i=t("Zb5r"),p=t("AOjV"),l=o.a.createElement;function u(e){var n=e.plugin,t=e.name,c=r.defaultConfig.variants[n]||["responsive"];t=t||n.replace(/([a-z])([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t.toLowerCase())}));var u=["responsive","hover","focus","active","group-hover"].filter((function(e){return!c.includes(e)})).slice(0,2);return l(o.a.Fragment,null,l("p",null,"By default, ",c.length?"only ".concat(Object(i.a)(c)):"no"," variants are generated for ",t," utilities."),l("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",l("code",null,n)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",c.length>0?"also ":"","generate"," ",Object(i.a)(u)," variants:"),l(p.a,{path:"variants",before:"// ...",remove:Object(s.a)({},n,c),add:Object(s.a)({},n,[].concat(Object(a.a)(c),Object(a.a)(u)))}))}},AOjV:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t("q1tI"),s=t.n(a),c=t("Btb4"),o=t.n(c),r=t("AI3G"),i=t("iuhU"),p=s.a.createElement;function l(e){var n=e.edits,t=e.indent,s=void 0===t?"":t,c=e.type,r=void 0===c?"inserted":c;return p("span",{className:Object(i.a)("token",{"inserted-sign inserted":"inserted"===r,"deleted-sign deleted":"inserted"!==r})},Object.keys(n).map((function(e,t){return p(a.Fragment,{key:t},p("span",{className:Object(i.a)("token prefix",{inserted:"inserted"===r,deleted:"inserted"!==r})},"inserted"===r?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(c=e)?c:"'".concat(c,"'"),":"," ",o()(n[e],{indent:"  "}).replace(/\[([^\]]+)\]/g,(function(e,n){return"[".concat(n.replace(/\n\s*/g," ").trim(),"]")})).split("\n").map((function(e,n){return"".concat(0===n?"":"+ "+s).concat(e)})).join("\n"),",\n");var c})))}function u(e){var n=e.path,t=e.add,s=e.remove,c=e.before,o=e.after;return n="string"===typeof n?n.split("."):n,p("pre",{className:"language-diff"},p("code",{className:"language-diff"},p("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",n.map((function(e,n){return p(a.Fragment,{key:n},"  ","  ".repeat(n+1),e,": ","{\n")})),c&&Object(r.a)(c).map((function(e){return"".concat("  ".repeat(n.length+2)).concat(e,"\n")}))),s&&p(l,{edits:s,type:"deleted",indent:"  ".repeat(n.length+1)}),t&&p(l,{edits:t,type:"inserted",indent:"  ".repeat(n.length+1)}),p("span",{className:"token unchanged"},o&&Object(r.a)(o).map((function(e){return"".concat("  ".repeat(n.length+2)).concat(e,"\n")})),n.map((function(e,t){return p(a.Fragment,{key:t},"  ","  ".repeat(n.length-t),"}\n")})),"  }")))}},BZFI:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:e,e:n,theme:t,variants:a}){e(s.default.fromPairs(s.default.map(t("backgroundSize"),(e,t)=>[`.${n(`bg-${t}`)}`,{"background-size":e}])),a("backgroundSize"))}};var a,s=(a=t("LvDl"))&&a.__esModule?a:{default:a}},Btb4:function(e,n,t){"use strict";const a=t("5xSE"),s=t("p+I8"),c=t("GAX2").default;e.exports=(e,n,t)=>{const o=[];return function e(n,t,r){let i;(t=t||{}).indent=t.indent||"\t",r=r||"",i=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:r,indent:r+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===t.inlineCharacterLimit)return e;const n=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return n.length<=t.inlineCharacterLimit?n:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),r).replace(new RegExp(i.indent,"g"),r+t.indent)};if(-1!==o.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||a(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";o.push(n);const a="["+i.newLine+n.map((a,s)=>{const c=n.length-1===s?i.newLine:","+i.newLineOrSpace;let o=e(a,t,r+t.indent);return t.transform&&(o=t.transform(n,s,o)),i.indent+o+c}).join("")+i.pad+"]";return o.pop(),p(a)}if(s(n)){let a=Object.keys(n).concat(c(n));if(t.filter&&(a=a.filter(e=>t.filter(n,e))),0===a.length)return"{}";o.push(n);const s="{"+i.newLine+a.map((s,c)=>{const o=a.length-1===c?i.newLine:","+i.newLineOrSpace,p="symbol"===typeof s,l=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=p||l?s:e(s,t);let d=e(n[s],t,r+t.indent);return t.transform&&(d=t.transform(n,s,d)),i.indent+String(u)+": "+d+o}).join("")+i.pad+"}";return o.pop(),p(s)}return n=String(n).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(e,n,t)}},"Ca+n":function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("q1tI"),s=t.n(a),c=t("S5AU"),o=t.n(c),r=t("iuhU"),i=s.a.createElement,p=["","sm:","md:","lg:","xl:"];function l(e){var n=e.children,t=e.active,a=e.onClick;return i("button",{type:"button",className:Object(r.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":t,"text-gray-500":!t}),onClick:a},n)}var u=function(e){return'<div class="'.concat(e,'"></div>')};function d(e){var n=e.classNames,t=e.snippet,s=void 0===t?u:t,c=e.preview,d=e.previewClassName,g=Array.isArray(n[0])?n.length:1,m=Object(a.useState)(0),b=m[0],f=m[1];return i("div",{className:"mt-8"},i("div",{className:"flex justify-center"},i("div",{className:"grid grid-cols-5 mb-2 bg-white"},i(l,{active:0===b,onClick:function(){return f(0)}},i("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"all")),i(l,{active:1===b,onClick:function(){return f(1)}},i("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"sm")),i(l,{active:2===b,onClick:function(){return f(2)}},i("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"md")),i(l,{active:3===b,onClick:function(){return f(3)}},i("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"lg")),i(l,{active:4===b,onClick:function(){return f(4)}},i("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),i("p",{className:"text-xs"},"xl")))),i("div",{className:"overflow-hidden mb-8"},i("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},i("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},i("code",{className:"inline-block p-4"},o()(s(1===g?"{{CLASSNAMES}}":Array.from({length:g}).map((function(e,n){return"{{CLASSNAMES[".concat(n,"]}}")})))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((function(e,t){if(t%2===1){var a=e.match(/\[([0-9]+)\]/);return(a?n[parseInt(a[1],10)]:n).map((function(e,n){return e?i("span",{key:"".concat(t,"-").concat(n),className:b===n?"text-code-yellow":""},0===n?"":" ",e.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map((function(e){return"".concat(p[n]).concat(e)})).join(" ")):null})).filter(Boolean)}return e}))))),i("div",{className:Object(r.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",d,{"p-4":!d})},c(function(e){if(g>1)return n.map((function(n){for(var t=e;t>=0;t--)if(n[t])return n[t].replace(/\(([^)]+)\)/g,"$1")}));for(var t=e;t>=0;t--)if(n[t])return n[t].replace(/\(([^)]+)\)/g,"$1")}(b)))))}},GAX2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e=>Object.getOwnPropertySymbols(e).filter(n=>Object.prototype.propertyIsEnumerable.call(e,n))},"IBu/":function(e,n,t){"use strict";const a=t("sQdO");e.exports=e=>{const n=a(e);if(0===n)return e;const t=new RegExp(`^[ \\t]{${n}}`,"gm");return e.replace(t,"")}},S5AU:function(e,n,t){"use strict";const a=t("IBu/"),s=t("S6im");e.exports=(e,n=0,t)=>s(a(e),n,t)},S6im:function(e,n,t){"use strict";e.exports=(e,n=1,t)=>{if(t={indent:" ",includeEmptyLines:!1,...t},"string"!==typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if("number"!==typeof n)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof n}\``);if("string"!==typeof t.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);if(0===n)return e;const a=t.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(a,t.indent.repeat(n))}},YuTi:function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},Zb5r:function(e,n,t){"use strict";function a(e){return e.reduce((function(n,t,a){return 0===a?t:a===e.length-1?"".concat(n," and ").concat(t):"".concat(n,", ").concat(t)}),"")}t.d(n,"a",(function(){return a}))},jDi3:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/background-size",function(){return t("sHJl")}])},"p+I8":function(e,n,t){"use strict";e.exports=function(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)}},pOT7:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("q1tI"),s=t.n(a),c=t("iuhU"),o=s.a.createElement;function r(e){var n=e.preview,t=e.snippet,a=e.previewClassName;return o("div",{className:"relative overflow-hidden mb-8"},o("div",{className:Object(c.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",a,{"p-4":!a}),dangerouslySetInnerHTML:{__html:n}}),o("div",{className:"rounded-b-lg bg-gray-800"},o("pre",{className:"scrollbar-none m-0 p-0 language-html"},o("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:t}}))))}},sHJl:function(e,n,t){"use strict";t.r(n),t.d(n,"Layout",(function(){return k})),t.d(n,"classes",(function(){return O})),t.d(n,"meta",(function(){return y})),t.d(n,"tableOfContents",(function(){return j})),t.d(n,"default",(function(){return x}));var a=t("wx14"),s=t("Ff2n"),c=t("q1tI"),o=t.n(c),r=t("7ljp"),i=t("YFqc"),p=t.n(i),l=t("tc9R"),u=t("pOT7"),d=t("vRWG"),g=t("I6Nb"),m=t("BZFI"),b=t.n(m),f=t("8C7G"),v=t("wH44"),h=t("Ca+n"),k=(o.a.createElement,d.DocumentationLayout),O={plugin:b.a},y={title:"Background Size",description:"Utilities for controlling the background size of an element's background image.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},j=[{title:"Auto",slug:"auto",children:[]},{title:"Cover",slug:"cover",children:[]},{title:"Contain",slug:"contain",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],w={Layout:k,classes:O,meta:y,tableOfContents:j},N=g.ContentsLayout;function x(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(r.a)(N,Object(a.a)({},w,t,{components:n,mdxType:"MDXLayout"}),Object(r.a)(l.a,{level:2,id:"auto",toc:!0},"Auto"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},".bg-auto")," to display the background image at its default size."),Object(r.a)(u.a,{preview:'\n  <div class="w-full bg-gray-400 h-48 bg-center bg-auto" style="background-image:url(\'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80\');">\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-auto bg-center ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(r.a)(l.a,{level:2,id:"cover",toc:!0},"Cover"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},".bg-cover")," to scale the background image until it fills the background layer."),Object(r.a)(u.a,{preview:'\n  <div class="w-full mx-auto bg-gray-400 h-48 bg-center bg-cover" style="background-image:url(\'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80\');">\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-cover bg-center ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(r.a)(l.a,{level:2,id:"contain",toc:!0},"Contain"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},".bg-contain")," to scale the background image to the outer edges without cropping or stretching."),Object(r.a)(u.a,{preview:'\n  <div class="w-full bg-gray-400 h-48 bg-center bg-no-repeat bg-contain" style="background-image:url(\'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80\');">\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-contain bg-center ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(r.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(r.a)("p",null,"To control the size of an element's background image at a specific breakpoint, add a ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing background size utility. For example, adding the class ",Object(r.a)("inlineCode",{parentName:"p"},"md:bg-contain")," to an element would apply the ",Object(r.a)("inlineCode",{parentName:"p"},"bg-contain")," utility at medium screen sizes and above."),Object(r.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(r.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"Responsive Design"))," documentation."),Object(r.a)(h.a,{classNames:["bg-auto","bg-cover","bg-contain","bg-auto","bg-cover"],snippet:function(e){return'\n    <div class="'.concat(e,' ..." style="background-image: url(...)"></div>\n  ')},preview:function(e){return Object(r.a)("div",{className:"mx-auto w-64 bg-gray-400 h-48 bg-center bg-no-repeat ".concat(e),style:{backgroundImage:"url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80')"}})},mdxType:"ResponsiveCodeSample"}),Object(r.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(r.a)("p",null,"By default Tailwind provides utilities for ",Object(r.a)("inlineCode",{parentName:"p"},"auto"),", ",Object(r.a)("inlineCode",{parentName:"p"},"cover"),", and ",Object(r.a)("inlineCode",{parentName:"p"},"contain")," background sizes. You can change, add, or remove these by editing the ",Object(r.a)("inlineCode",{parentName:"p"},"theme.backgroundSize")," section of your config."),Object(r.a)("pre",{className:"language-diff"},Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     backgroundSize: {\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       'auto': 'auto',\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       'cover': 'cover',\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       'contain': 'contain',\n"),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '50%': '50%',\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '16': '4rem',\n"),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(r.a)(l.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(r.a)(f.a,{plugin:"backgroundSize",mdxType:"Variants"}),Object(r.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(r.a)(v.a,{plugin:"backgroundSize",mdxType:"Disabling"}))}x.isMDXComponent=!0,x.layoutProps=w},sQdO:function(e,n,t){"use strict";e.exports=e=>{const n=e.match(/^[ \t]*(?=\S)/gm);return n?n.reduce((e,n)=>Math.min(e,n.length),1/0):0}},wH44:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("rePB"),s=t("q1tI"),c=t.n(s),o=t("AOjV"),r=t("AI3G"),i=t("Zb5r"),p=c.a.createElement;function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e){var n=e.plugin,t=e.name,s=Object(r.a)(n);return t=t||n.replace(/([a-z])([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t.toLowerCase())})),p(c.a.Fragment,null,p("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",p("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(s.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",p("code",null,"false")," in the"," ",p("code",null,"corePlugins")," section of your config file:"),p(o.a,{path:"corePlugins",before:"// ...",add:s.reduce((function(e,n){return u(u({},e),{},Object(a.a)({},n,!1))}),{})}))}},yLpj:function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(a){"object"===typeof window&&(t=window)}e.exports=t}},[["jDi3",0,2,5,1,3,4]]]);