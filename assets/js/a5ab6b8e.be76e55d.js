"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(3117),a=(n(7294),n(3905));const l={title:"Performance",id:"performance"},o=void 0,i={unversionedId:"reference/performance",id:"reference/performance",title:"Performance",description:"This page will present you all the functions that will be useful during the performance",source:"@site/docs/reference/performance.md",sourceDirName:"reference",slug:"/reference/performance",permalink:"/docs/reference/performance",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/performance.md",tags:[],version:"current",lastUpdatedBy:"Joan Queralt",lastUpdatedAt:1672227829,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{title:"Performance",id:"performance"},sidebar:"reference",previous:{title:"Alteration",permalink:"/docs/reference/alteration"},next:{title:"Conditions",permalink:"/docs/reference/conditions"}},c={},s=[{value:"Tempo",id:"tempo",level:2},{value:"resetCycles",id:"resetcycles",level:3},{value:"setcps",id:"setcps",level:3},{value:"Tracks",id:"tracks",level:2},{value:"all",id:"all",level:2},{value:"once",id:"once",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page will present you all the functions that will be useful during the performance: tempo management, reset, etc... Each function will be presented following the same model:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type signature"),": how the function is declared on the ",(0,a.kt)("strong",{parentName:"li"},"Haskell")," side."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description"),": verbal description of the function."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Examples"),": a small list of examples that you can copy/paste in your editor.")),(0,a.kt)("h2",{id:"tempo"},"Tempo"),(0,a.kt)("h3",{id:"resetcycles"},"resetCycles"),(0,a.kt)("h3",{id:"setcps"},"setcps"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"setcps")," is a global function that adjusts the number of cycles per second. This function can accept integers, decimals, and fractions."),(0,a.kt)("p",null,"The default number of cycles per second is ",(0,a.kt)("inlineCode",{parentName:"p"},"0.5625"),", which is equivalent to ",(0,a.kt)("inlineCode",{parentName:"p"},"135/60/4"),"."),(0,a.kt)("p",null,"These two values are equivalent:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cycles per second"),": as a decimal, ",(0,a.kt)("inlineCode",{parentName:"li"},"setcps 0.5625"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cycles per second"),": as a fraction, ",(0,a.kt)("inlineCode",{parentName:"li"},"setcps (135/60/4)"))),(0,a.kt)("p",null,"Representing cycles per second using fractions has the advantage of being more human-readable and more closely aligned with how tempo is commonly represented in music as beats per minute (or bpm). Techno has a range of ",(0,a.kt)("inlineCode",{parentName:"p"},"120-140 bpm"),". House has a range of ",(0,a.kt)("inlineCode",{parentName:"p"},"115-130 bpm"),". And so on. If we wanted to set the tempo of our Tidal song to fast house, we would do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"-- Set cps to be a fast house beat\nsetcps (130/60/4)\n")),(0,a.kt)("p",null,"Regarding the example above, the first part of the fraction ",(0,a.kt)("inlineCode",{parentName:"p"},"(130/60)")," says there will be ",(0,a.kt)("inlineCode",{parentName:"p"},"130")," beats per minute. ",(0,a.kt)("inlineCode",{parentName:"p"},"130")," is the number of beats and ",(0,a.kt)("inlineCode",{parentName:"p"},"60")," is the length of the minute (",(0,a.kt)("inlineCode",{parentName:"p"},"60")," seconds). The second part of the fraction (",(0,a.kt)("inlineCode",{parentName:"p"},"/4"),") says that for every cycle in tidal there will be ",(0,a.kt)("inlineCode",{parentName:"p"},"4")," beats. You can adjust this value to change how quickly your cycles run."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'-- The following two examples are equivalent\n-- Example 1: 4 beats per cycles\nsetcps (130/60/4)\n\nd1 $ n "1" # s "kick kick kick kick" \n\n-- Example 2: 1 beat per cycle\nsetcps (130/60/1)\n\nd1 $ n "1" # s "kick"\n')),(0,a.kt)("h2",{id:"tracks"},"Tracks"),(0,a.kt)("h2",{id:"all"},"all"),(0,a.kt)("h2",{id:"once"},"once"))}u.isMDXComponent=!0}}]);