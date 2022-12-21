"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(3117),r=(n(7294),n(3905));const l={title:"Interaction",permalink:"wiki/Interaction/",layout:"wiki",tags:["Reference","Tidal-1+"]},o=void 0,s={unversionedId:"working-with-patterns/Interaction",id:"working-with-patterns/Interaction",title:"Interaction",description:"In Tidal 1.0.0, the way you interact with",source:"@site/docs/working-with-patterns/Interaction.md",sourceDirName:"working-with-patterns",slug:"/working-with-patterns/Interaction",permalink:"/docs/working-with-patterns/Interaction",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/working-with-patterns/Interaction.md",tags:[{label:"Reference",permalink:"/docs/tags/reference"},{label:"Tidal-1+",permalink:"/docs/tags/tidal-1"}],version:"current",lastUpdatedBy:"HighHarmonics",lastUpdatedAt:1671582105,formattedLastUpdatedAt:"Dec 21, 2022",frontMatter:{title:"Interaction",permalink:"wiki/Interaction/",layout:"wiki",tags:["Reference","Tidal-1+"]}},i={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("languages",null)," ",(0,r.kt)("translate",null," In Tidal 1.0.0, the way you interact with patterns has changed a bit.",(0,r.kt)("p",null,"The range of functions for interaction set up by default can be seen in\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/Tidal/blob/master/BootTidal.hs"},"bootup\ncode"),"."),(0,r.kt)("h1",{id:"patterns-by-number-and-by-name"},"Patterns by number and by name"),(0,r.kt)("p",null,"As before you can use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"d1\n")),(0,r.kt)("p",null,","),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"d2\n")),(0,r.kt)("p",null,"etc to start different patterns, e.g:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd sd"\n\n\x3c!--T:6--\x3e\nd1 $ silence\n')),(0,r.kt)("p",null,"But now as an alternative you can also use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"p\n")),(0,r.kt)("p",null,"and specify ",(0,r.kt)("em",{parentName:"p"},"any")," number, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},'p 100323523 $ sound "bd sd"\n\n\x3c!--T:9--\x3e\np 100323523 $ silence\n')),(0,r.kt)("p",null,"Theoretically, you can have any number of patterns running at once."),(0,r.kt)("p",null,"You can also refer to them by name, if you want."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},'p "jimmy" $ sound "bd sd"\np "susan" $ sound "cp(3,8)"\n\n\x3c!--T:13--\x3e\np "jimmy" $ silence\np "susan" $ silence\n')),(0,r.kt)("h1",{id:"transitions"},"Transitions"),(0,r.kt)("p",null,"If you want to do a transition, you put it in place of the"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"p\n")),(0,r.kt)("p",null,", e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'xfade "susan" $ sound "gabba(3,8,<0 2 4>)"\nxfade "susan" $ sound "cp*2"\n')),(0,r.kt)("p",null,"(The old t1, t2 etc method no longer works.)"),(0,r.kt)("h1",{id:"doing-things-once"},"Doing things once"),(0,r.kt)("p",null,"If you just want a pattern to run for one cycle and then stop, you can\ndo use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"once\n")),(0,r.kt)("p",null,":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'once $ s "bd sd(3,8)"\n')),(0,r.kt)("h1",{id:"changing-tempo-with-setcps"},"Changing tempo with setcps"),(0,r.kt)("p",null,"Just give it the number of cycles per second, for example if your cycle\nhas two beats in, this will be the equivalent of 120 bpm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"setcps 1\n")),(0,r.kt)("h1",{id:"changing-tempo-with-cps"},"Changing tempo with cps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"cps\n")),(0,r.kt)("p",null,"is no longer a standalone function (","`","setcps","`"," above now does this), but\na control pattern. Patterning cps is ",(0,r.kt)("em",{parentName:"p"},"fun"),". Patterns don't (yet) have\nindependent tempos though, if you change it on one pattern, it changes\non all of them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'p "cpsfun" $ s "bd sd(3,8)" # cps (slow 8 $ 0.5 + saw)\n'))))}u.isMDXComponent=!0}}]);