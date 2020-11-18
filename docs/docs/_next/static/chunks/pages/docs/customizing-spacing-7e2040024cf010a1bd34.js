_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[82],{"8+N+":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/customizing-spacing",function(){return t("EXfC")}])},EXfC:function(e,a,t){"use strict";t.r(a),t.d(a,"Layout",(function(){return u})),t.d(a,"meta",(function(){return g})),t.d(a,"tableOfContents",(function(){return k})),t.d(a,"default",(function(){return w}));var n=t("wx14"),c=t("Ff2n"),s=t("q1tI"),o=t.n(s),p=t("7ljp"),l=t("YFqc"),i=t.n(l),r=t("tc9R"),m=t("vRWG"),b=t("I6Nb"),j=t("98BF"),O=o.a.createElement,d=Object.keys(j.defaultConfig.theme.spacing).map((function(e){return{name:e,size:j.defaultConfig.theme.spacing[e],pixels:parseFloat(j.defaultConfig.theme.spacing[e])*(String(j.defaultConfig.theme.spacing[e]).endsWith("rem")?16:1)}})).sort((function(e,a){return e.pixels-a.pixels}));function N(){return O("table",null,O("thead",null,O("tr",null,O("th",null,"Name"),O("th",null,"Size"),O("th",null,"Pixels"),O("th",{className:"hidden sm:table-cell"},O("span",{className:"sr-only"},"Preview")))),O("tbody",null,d.map((function(e){var a=e.name,t=e.size,n=e.pixels;return O("tr",{key:a},O("td",null,a),O("td",null,t),O("td",null,n,"px"),O("td",{className:"hidden sm:table-cell"},O("div",{className:"h-4 bg-gray-400",style:{width:t}})))}))))}o.a.createElement;var u=m.DocumentationLayout,g={title:"Customizing Spacing",shortTitle:"Spacing",description:"Customizing the default spacing scale for your project."},k=[{title:"Overriding the default spacing scale",slug:"overriding-the-default-spacing-scale",children:[]},{title:"Extending the default spacing scale",slug:"extending-the-default-spacing-scale",children:[]},{title:"Default spacing scale",slug:"default-spacing-scale",children:[]}],f={Layout:u,meta:g,tableOfContents:k},h=b.ContentsLayout;function w(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(p.a)(h,Object(n.a)({},f,t,{components:a,mdxType:"MDXLayout"}),Object(p.a)("p",null,"The ",Object(p.a)("inlineCode",{parentName:"p"},"theme.spacing")," section of your ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file allows you to override Tailwind's ",Object(p.a)("a",Object(n.a)({parentName:"p"},{href:"#default-spacing-scale"}),"default spacing/sizing scale"),"."),Object(p.a)("pre",{className:"language-js"},Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\nmodule",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    spacing",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'1'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'8px'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'2'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'12px'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'3'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'16px'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'4'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'24px'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'5'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'32px'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'6'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'48px'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"))),Object(p.a)("p",null,"By default the spacing scale is shared by the ",Object(p.a)(i.a,{href:"/docs/padding",passHref:!0},Object(p.a)("a",null,"padding")),", ",Object(p.a)(i.a,{href:"/docs/margin",passHref:!0},Object(p.a)("a",null,"margin")),", ",Object(p.a)(i.a,{href:"/docs/width",passHref:!0},Object(p.a)("a",null,"width")),", and ",Object(p.a)(i.a,{href:"/docs/height",passHref:!0},Object(p.a)("a",null,"height"))," utilities so the above configuration would generate classes like ",Object(p.a)("inlineCode",{parentName:"p"},".p-2"),", ",Object(p.a)("inlineCode",{parentName:"p"},".mt-3"),", ",Object(p.a)("inlineCode",{parentName:"p"},".w-5"),", ",Object(p.a)("inlineCode",{parentName:"p"},".h-6"),", etc."),Object(p.a)("hr",null),Object(p.a)(r.a,{level:2,id:"overriding-the-default-spacing-scale",toc:!0},"Overriding the default spacing scale"),Object(p.a)("p",null,"As described in the ",Object(p.a)(i.a,{href:"/docs/theme#overriding-the-default-theme",passHref:!0},Object(p.a)("a",null,"theme documentation")),", if you'd like to override the default spacing scale, you can do so using the ",Object(p.a)("inlineCode",{parentName:"p"},"theme.spacing")," section of your ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(p.a)("pre",{className:"language-js"},Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\nmodule",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    spacing",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      sm",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'8px'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      md",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'12px'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      lg",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'16px'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      xl",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'24px'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"))),Object(p.a)("p",null,"This will disable Tailwind's default spacing scale and generate classes like ",Object(p.a)("inlineCode",{parentName:"p"},"p-sm"),", ",Object(p.a)("inlineCode",{parentName:"p"},"m-md"),", ",Object(p.a)("inlineCode",{parentName:"p"},"w-lg"),", and ",Object(p.a)("inlineCode",{parentName:"p"},"h-xl")," instead."),Object(p.a)("hr",null),Object(p.a)(r.a,{level:2,id:"extending-the-default-spacing-scale",toc:!0},"Extending the default spacing scale"),Object(p.a)("p",null,"As described in the ",Object(p.a)(i.a,{href:"/docs/theme#extending-the-default-theme",passHref:!0},Object(p.a)("a",null,"theme documentation")),", if you'd like to extend the default spacing scale, you can do so using the ",Object(p.a)("inlineCode",{parentName:"p"},"theme.extend.spacing")," section of your ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(p.a)("pre",{className:"language-js"},Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\nmodule",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    extend",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      spacing",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'72'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'18rem'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'84'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'21rem'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'96'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'24rem'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"))),Object(p.a)("p",null,"This will generate classes like ",Object(p.a)("inlineCode",{parentName:"p"},"p-72"),", ",Object(p.a)("inlineCode",{parentName:"p"},"m-84"),", and ",Object(p.a)("inlineCode",{parentName:"p"},"h-96")," in addition to all of Tailwind's default spacing/sizing utilities."),Object(p.a)("hr",null),Object(p.a)(r.a,{level:2,id:"default-spacing-scale",toc:!0},"Default spacing scale"),Object(p.a)("p",null,"By default, Tailwind includes a generous and comprehensive numeric spacing scale. The values are proportional, so ",Object(p.a)("inlineCode",{parentName:"p"},"16")," is twice as much spacing as ",Object(p.a)("inlineCode",{parentName:"p"},"8")," for example. One spacing unit is equal to ",Object(p.a)("inlineCode",{parentName:"p"},"0.25rem"),", which translates to ",Object(p.a)("inlineCode",{parentName:"p"},"4px")," by default in common browsers."),Object(p.a)(N,{mdxType:"SpacingScale"}))}w.isMDXComponent=!0,w.layoutProps=f}},[["8+N+",0,2,1,3,4]]]);