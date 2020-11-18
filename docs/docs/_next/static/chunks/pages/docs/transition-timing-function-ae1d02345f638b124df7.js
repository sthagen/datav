_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[167],{"8C7G":function(n,e,a){"use strict";a.d(e,"a",(function(){return u}));var t=a("KQm4"),s=a("rePB"),i=a("q1tI"),o=a.n(i),c=a("98BF"),p=a("Zb5r"),l=a("AOjV"),r=o.a.createElement;function u(n){var e=n.plugin,a=n.name,i=c.defaultConfig.variants[e]||["responsive"];a=a||e.replace(/([a-z])([A-Z])/g,(function(n,e,a){return"".concat(e," ").concat(a.toLowerCase())}));var u=["responsive","hover","focus","active","group-hover"].filter((function(n){return!i.includes(n)})).slice(0,2);return r(o.a.Fragment,null,r("p",null,"By default, ",i.length?"only ".concat(Object(p.a)(i)):"no"," variants are generated for ",a," utilities."),r("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",r("code",null,e)," property in the ",r("code",null,"variants")," section of your"," ",r("code",null,"tailwind.config.js")," file."),r("p",null,"For example, this config will ",i.length>0?"also ":"","generate"," ",Object(p.a)(u)," variants:"),r(l.a,{path:"variants",before:"// ...",remove:Object(s.a)({},e,i),add:Object(s.a)({},e,[].concat(Object(t.a)(i),Object(t.a)(u)))}))}},QksO:function(n,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,s.default)("transitionTimingFunction",[["ease",["transitionTimingFunction"]]])};var t,s=(t=a("y2+P"))&&t.__esModule?t:{default:t}},pOT7:function(n,e,a){"use strict";a.d(e,"a",(function(){return c}));var t=a("q1tI"),s=a.n(t),i=a("iuhU"),o=s.a.createElement;function c(n){var e=n.preview,a=n.snippet,t=n.previewClassName;return o("div",{className:"relative overflow-hidden mb-8"},o("div",{className:Object(i.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",t,{"p-4":!t}),dangerouslySetInnerHTML:{__html:e}}),o("div",{className:"rounded-b-lg bg-gray-800"},o("pre",{className:"scrollbar-none m-0 p-0 language-html"},o("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:a}}))))}},uKbb:function(n,e,a){"use strict";a.r(e),a.d(e,"Layout",(function(){return O})),a.d(e,"classes",(function(){return j})),a.d(e,"meta",(function(){return h})),a.d(e,"tableOfContents",(function(){return k})),a.d(e,"default",(function(){return w}));var t=a("wx14"),s=a("Ff2n"),i=a("q1tI"),o=a.n(i),c=a("7ljp"),p=a("YFqc"),l=a.n(p),r=a("tc9R"),u=a("pOT7"),d=a("vRWG"),m=a("I6Nb"),b=a("QksO"),g=a.n(b),f=a("8C7G"),v=a("wH44"),O=(o.a.createElement,d.DocumentationLayout),j={plugin:g.a},h={title:"Transition Timing Function",description:"Utilities for controlling the easing of CSS transitions.",featureVersion:"v1.2.0+"},k=[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Timing values",slug:"timing-values"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],N={Layout:O,classes:j,meta:h,tableOfContents:k},y=m.ContentsLayout;function w(n){var e=n.components,a=Object(s.a)(n,["components"]);return Object(c.a)(y,Object(t.a)({},N,a,{components:e,mdxType:"MDXLayout"}),Object(c.a)(r.a,{level:2,id:"usage",toc:!0},"Usage"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},"ease-{timing}")," utilities to control an element's easing curve."),Object(c.a)(u.a,{preview:'\n  <button class="transition duration-700 ease-in transform hover:scale-125 bg-blue-500 text-white font-bold py-2 px-4 rounded">\n    Hover me\n  </button>\n  <button class="transition duration-700 ease-out transform hover:scale-125 bg-blue-500 text-white font-bold py-2 px-4 rounded">\n    Hover me\n  </button>\n  <button class="transition duration-700 ease-in-out transform hover:scale-125 bg-blue-500 text-white font-bold py-2 px-4 rounded">\n    Hover me\n  </button>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transition ease-in duration-700 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transition ease-out duration-700 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transition ease-in-out duration-700 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:"bg-white flex justify-around items-center p-4 py-12"}),Object(c.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(c.a)("p",null,"To control an element's transition-timing-function at a specific breakpoint, add a ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing transition-timing-function utility. For example, use ",Object(c.a)("inlineCode",{parentName:"p"},"md:ease-in-out")," to apply the ",Object(c.a)("inlineCode",{parentName:"p"},"ease-in-out")," utility at only medium screen sizes and above."),Object(c.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(c.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"Responsive Design"))," documentation."),Object(c.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)(r.a,{level:3,id:"timing-values",toc:!0},"Timing values"),Object(c.a)("p",null,"By default Tailwind provides four general purpose transition-timing-function utilities. You change, add, or remove these by customizing the ",Object(c.a)("inlineCode",{parentName:"p"},"transitionTimingFunction")," section of your Tailwind theme config."),Object(c.a)("pre",{className:"language-diff"},Object(c.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff"}),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend: {\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       transitionTimingFunction: {\n"),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',\n"),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       }\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(c.a)("p",null,"Learn more about customizing the default theme in the ",Object(c.a)(l.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(c.a)("a",null,"theme customization documentation")),"."),Object(c.a)(r.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(c.a)(f.a,{plugin:"transitionTimingFunction",name:"transition-timing-function",mdxType:"Variants"}),Object(c.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(c.a)(v.a,{plugin:"transitionTimingFunction",name:"transition-timing-function",mdxType:"Disabling"}))}w.isMDXComponent=!0,w.layoutProps=N},yHg6:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/transition-timing-function",function(){return a("uKbb")}])}},[["yHg6",0,2,1,3,4,7]]]);