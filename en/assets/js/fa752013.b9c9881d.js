"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[9431],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),c=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return l.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,k=m["".concat(i,".").concat(u)]||m[u]||p[u]||o;return n?l.createElement(k,r(r({ref:t},s),{},{components:n})):l.createElement(k,r({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:a,r[1]=d;for(var c=2;c<o;c++)r[c]=n[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3656:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var l=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],d={title:"03 DOM \uc774\ubca4\ud2b8 \uad00\ub9ac"},i=void 0,c={unversionedId:"books/frameworkless-front-end-development/03",id:"books/frameworkless-front-end-development/03",title:"03 DOM \uc774\ubca4\ud2b8 \uad00\ub9ac",description:"YAGNI \uc6d0\uce59",source:"@site/docs/books/frameworkless-front-end-development/03.md",sourceDirName:"books/frameworkless-front-end-development",slug:"/books/frameworkless-front-end-development/03",permalink:"/en/docs/books/frameworkless-front-end-development/03",editUrl:"https://github.com/kooku0/kooku0.github.io/edit/main/docs/books/frameworkless-front-end-development/03.md",tags:[],version:"current",frontMatter:{title:"03 DOM \uc774\ubca4\ud2b8 \uad00\ub9ac"},sidebar:"books",previous:{title:"02 \ub80c\ub354\ub9c1",permalink:"/en/docs/books/frameworkless-front-end-development/02"},next:{title:"05 HTTP \uc694\uccad",permalink:"/en/docs/books/frameworkless-front-end-development/05"}},s=[{value:"YAGNI \uc6d0\uce59",id:"yagni-\uc6d0\uce59",children:[],level:2},{value:"DOM \uc774\ubca4\ud2b8 API",id:"dom-\uc774\ubca4\ud2b8-api",children:[{value:"\uc18d\uc131\uc5d0 \ud578\ub4e4\ub7ec \uc5f0\uacb0",id:"\uc18d\uc131\uc5d0-\ud578\ub4e4\ub7ec-\uc5f0\uacb0",children:[],level:3},{value:"addEventListener\ub85c \ud578\ub4e4\ub7ec \uc5f0\uacb0",id:"addeventlistener\ub85c-\ud578\ub4e4\ub7ec-\uc5f0\uacb0",children:[],level:3},{value:"\uc774\ubca4\ud2b8 \uac1d\uccb4",id:"\uc774\ubca4\ud2b8-\uac1d\uccb4",children:[],level:3},{value:"DOM \uc774\ubca4\ud2b8 \ub77c\uc774\ud504\uc0ac\uc774\ud074",id:"dom-\uc774\ubca4\ud2b8-\ub77c\uc774\ud504\uc0ac\uc774\ud074",children:[],level:3},{value:"\uc0ac\uc6a9\uc790 \uc815\uc758 \uc774\ubca4\ud2b8 \uc0ac\uc6a9",id:"\uc0ac\uc6a9\uc790-\uc815\uc758-\uc774\ubca4\ud2b8-\uc0ac\uc6a9",children:[],level:3}],level:2},{value:"TodoMVC\uc5d0 \uc774\ubca4\ud2b8 \ucd94\uac00",id:"todomvc\uc5d0-\uc774\ubca4\ud2b8-\ucd94\uac00",children:[{value:"\ub80c\ub354\ub9c1 \uc5d4\uc9c4 \ub9ac\ubdf0",id:"\ub80c\ub354\ub9c1-\uc5d4\uc9c4-\ub9ac\ubdf0",children:[],level:3},{value:"\ud15c\ud50c\ub9bf \uc694\uc18c",id:"\ud15c\ud50c\ub9bf-\uc694\uc18c",children:[],level:3},{value:"\uae30\ubcf8 \uc774\ubca4\ud2b8 \ucc98\ub9ac \uc544\ud0a4\ud14d\ucc98",id:"\uae30\ubcf8-\uc774\ubca4\ud2b8-\ucc98\ub9ac-\uc544\ud0a4\ud14d\ucc98",children:[],level:3}],level:2},{value:"\uc774\ubca4\ud2b8 \uc704\uc784",id:"\uc774\ubca4\ud2b8-\uc704\uc784",children:[],level:2}],p={toc:s};function m(e){var t=e.components,d=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,l.Z)({},p,d,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"yagni-\uc6d0\uce59"},"YAGNI \uc6d0\uce59"),(0,o.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uac00\uc7a5 \uc911\uc694\ud55c \uae30\ub2a5\uc5d0 \ucd08\uc810\uc744 \ub9de\ucdb0 \uac1c\ubc1c\ud558\uace0 \uc0c8\ub85c\uc6b4 \uc694\uad6c\uac00 \uc0dd\uae30\uba74 \uc774\uc5d0 \ub530\ub77c \uc544\ud0a4\ud14d\ucc98\ub97c \uc9c0\uc18d\uc801\uc73c\ub85c \ubc1c\uc804\uc2dc\ucf1c \ub098\uac04\ub2e4."),(0,o.kt)("p",null,"\uc774\uac83\uc774 YAGNI(You aren't gonna need it: \uc815\ub9d0 \ud544\uc694\ud558\ub2e4\uace0 \uac04\uc8fc\ud560 \ub584\uae4c\uc9c0 \uae30\ub2a5\uc744 \ucd94\uac00\ud558\uc9c0 \ub9c8\ub77c) \ub77c\uace0 \ud558\ub294 \uc775\uc2a4\ud2b8\ub9bc \ud504\ub85c\uadf8\ub798\ubc0d \uc6d0\uce59 \uc911 \ud558\ub098\ub2e4."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ub2f9\uc2e0\uc774 \ud544\uc694\ud558\ub2e4\uace0 \uc608\uce21\ud560 \ub584\uac00 \uc544\ub2c8\ub77c \uc2e4\uc81c\ub85c \ud544\uc694\ud560 \ub584 \uad6c\ud604\ud558\ub77c."),(0,o.kt)("small",null,"\uc874 \uc81c\ud504\ub9ac\uc2a4")),(0,o.kt)("h2",{id:"dom-\uc774\ubca4\ud2b8-api"},"DOM \uc774\ubca4\ud2b8 API"),(0,o.kt)("p",null,"\uc774\ubca4\ud2b8\ub294 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \ub3d9\uc791\uc73c\ub85c, \ube0c\ub77c\uc6b0\uc800\ub294 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc774\ub97c \uc54c\ub824\uc918 \uc0ac\uc6a9\uc790\ub294 \uc5b4\ub5a4 \ubc29\uc2dd\uc73c\ub85c\ub4e0 \ubc18\uc751\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("p",null,"\ub9c8\uc6b0\uc2a4 \uc774\ubca4\ud2b8, \ud0a4\ubcf4\ub4dc \uc774\ubca4\ud2b8, \ubdf0 \uc774\ubca4\ud2b8\ub97c \ud3ec\ud568\ud55c \uc0ac\uc6a9\uc790\uac00 \ud2b8\ub9ac\uac70\ud55c \uc774\ubca4\ud2b8\uc5d0 \ubc18\uc751\ud560 \uc218 \uc788\uace0, \uc0c8\ub85c\uc6b4 \uc774\ubca4\ud2b8\ub97c \uc0dd\uc131\ud560 \uc218\ub3c4 \uc788\ub2e4. \uc774\ubca4\ud2b8\uc5d0 \ubc18\uc751\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc774\ubca4\ud2b8\ub97c \ud2b8\ub9ac\uac70\ud55c DOM \uc694\uc18c\uc5d0 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec \ucf5c\ubc31\uc744 \uc5f0\uacb0\ud574\uc57c \ud55c\ub2e4."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\ubdf0\ub098 \uc2dc\uc2a4\ud15c \uc774\ubca4\ud2b8\uc758 \uacbd\uc6b0 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c window \uac1d\uccb4\uc5d0 \uc5f0\uacb0\ud574\uc57c \ud55c\ub2e4."),(0,o.kt)("table",{parentName:"div"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\uc774\ubca4\ud2b8\uba85"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\ubc1c\uc0dd\ud558\ub294 \uc2dc\uc810"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"cached"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\ub9e4\ub2c8\ud398\uc2a4\ud2b8\uc5d0 \ub098\uc5f4\ub41c \ub9ac\uc18c\uc2a4\uac00 \ub2e4\uc6b4\ub85c\ub4dc\ub418\uc5c8\uace0, \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uce90\uc2dc\ub420 \ub54c.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"error"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\ub9ac\uc18c\uc2a4 \ub85c\ub4dc\uac00 \uc2e4\ud328\ud588\uc744 \ub54c.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"abort"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\ub9ac\uc18c\uc2a4 \ub85c\ub529\uc774 \uc911\ub2e8\ub418\uc5c8\uc744 \ub54c.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"load"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\ub9ac\uc18c\uc2a4\uc640 \uadf8 \uc758\uc874 \ub9ac\uc18c\uc2a4\uc758 \ub85c\ub529\uc774 \ub05d\ub0ac\uc744 \ub54c.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"beforeunload"),(0,o.kt)("td",{parentName:"tr",align:"left"},"window, document \ubc0f \uadf8 \ub9ac\uc18c\uc2a4\uac00 \uc5b8\ub85c\ub4dc\ub418\ub824\uace0 \ud560 \ub54c.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"unload"),(0,o.kt)("td",{parentName:"tr",align:"left"},"document \ub610\ub294 \uc758\uc874 \ub9ac\uc18c\uc2a4\uac00 \uc5b8\ub85c\ub4dc\ub420 \ub54c.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"fullscreenchange"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\uc5d8\ub9ac\uba3c\ud2b8\uac00 \uc804\uccb4\ud654\uba74 \ubaa8\ub4dc\ub85c \ubcc0\uacbd\ub418\uc5c8\uac70\ub098 \uc77c\ubc18 \ubaa8\ub4dc\ub85c \ub3cc\uc544\uc654\uc744 \ub54c.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"fullscreenerror"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\uae30\uc220\uc801\uc778 \uc774\uc720\ub098 \uad8c\ud55c \uac70\uc808\uc744 \uc774\uc720\ub85c \uc804\uccb4\ud654\uba74 \ubaa8\ub4dc \uc804\ud658\uc774 \ubd88\uac00\ub2a5\ud588\uc744 \ub54c.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"resize"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\ub2e4\ud050\uba3c\ud2b8 \ubdf0\uac00 \ub9ac\uc0ac\uc774\uc988\ub418\uc5c8\uc744 \ub54c.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"scroll"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\ub2e4\ud050\uba3c\ud2b8 \ubdf0\ub098 \uc5d8\ub9ac\uba3c\ud2b8\uac00 \uc2a4\ud06c\ub864\ub418\uc5c8\uc744 \ub54c.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"cut"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\uc120\ud0dd\uc774 \uc798\ub77c\ub0b4\uc5b4\uc9c4 \ud6c4 \ud074\ub9bd\ubcf4\ub4dc\ub85c \ubcf5\uc0ac\ub418\uc5c8\uc744 \ub54c")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"copy"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\uc120\ud0dd\uc774 \ud074\ub9bd\ubcf4\ub4dc\ub85c \ubcf5\uc0ac\ub418\uc5c8\uc744 \ub54c")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"paste"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\ud074\ub9bd\ubcf4\ub4dc\uc758 \ud56d\ubaa9\uc774 \ubd99\uc5ec\ub108\uc5b4\uc84c\uc744 \ub54c")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"..."),(0,o.kt)("td",{parentName:"tr",align:"left"},"...")))))),(0,o.kt)("h3",{id:"\uc18d\uc131\uc5d0-\ud578\ub4e4\ub7ec-\uc5f0\uacb0"},"\uc18d\uc131\uc5d0 \ud578\ub4e4\ub7ec \uc5f0\uacb0"),(0,o.kt)("p",null,"\uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c DOM \uc694\uc18c\uc5d0 \uc5f0\uacb0\ud558\ub294 \ubc29\ubc95\uc740 \ube60\ub974\uc9c0\ub9cc \uc9c0\uc800\ubd84\ud55c \ubc29\ubc95\uc73c\ub85c on","*"," \uc18d\uc131\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="onclick \uc18d\uc131\uc5d0 \ud074\ub9ad \ud578\ub4e4\ub7ec \uc5f0\uacb0"',title:'"onclick',"\uc18d\uc131\uc5d0":!0,"\ud074\ub9ad":!0,"\ud578\ub4e4\ub7ec":!0,'\uc5f0\uacb0"':!0},'const button = document.querySelector("button");\nbutton.onclick = () => {\n  console.log("Click managed using onclick property");\n};\n')),(0,o.kt)("p",null,"\uc704\uc640 \uac19\uc774 \ube60\ub974\uac8c \ud578\ub4e4\ub7ec\ub97c \uc774\ubca4\ud2b8\uc5d0 \uc5f0\uacb0\ud560 \uc218 \uc788\ub2e4. \ud558\uc9c0\ub9cc \uc774 \ubc29\ubc95\uc740 \ub098\uc05c\ubc29\ubc95\uc73c\ub85c \uac04\uc8fc\ub418\ub294\ub370 \uac00\uc7a5 \ud070 \uc774\uc720\ub294 \uc18d\uc131\uc744 \uc0ac\uc6a9\ud558\uba74 \ud55c\ubc88\uc5d0 \ud558\ub098\uc758 \ud578\ub4e4\ub7ec\ub9cc \uc5f0\uacb0\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc774\ub2e4. \ub530\ub77c\uc11c \ucf54\ub4dc\uac00 onclick \ud578\ub4e4\ub7ec\ub97c \ub36e\uc5b4 \uc4f0\uba74 \uc6d0\ub798 \ud578\ub4e4\ub7ec\ub294 \uc601\uc6d0\ud788 \uc190\uc2e4\ub41c\ub2e4."),(0,o.kt)("h3",{id:"addeventlistener\ub85c-\ud578\ub4e4\ub7ec-\uc5f0\uacb0"},"addEventListener\ub85c \ud578\ub4e4\ub7ec \uc5f0\uacb0"),(0,o.kt)("p",null,"\ubaa8\ub4e0 DOM \ub178\ub4dc\uc5d0\ub294 EventTarget \uc778\ud130\ud398\uc774\uc2a4\uac00 \uad6c\ud604\ub418\uc5b4 \uc788\ub2e4. \uc774 \uc778\ud130\ud398\uc774\uc2a4\uc758 addEventListener \uba54\uc11c\ub4dc\ub294 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c DOM \ub178\ub4dc\uc5d0 \ucd94\uac00\ud574\uc900\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="addEventListener\ub85c \ud074\ub9ad \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec \uc5f0\uacb0"',title:'"addEventListener\ub85c',"\ud074\ub9ad":!0,"\uc774\ubca4\ud2b8":!0,"\ud578\ub4e4\ub7ec":!0,'\uc5f0\uacb0"':!0},'const button = document.querySelector("button");\nbutton.addEventListener("click", () => {\n  console.log("Clicked using addEventListener");\n});\n')),(0,o.kt)("p",null,"addEventListener\ub294 property \uba54\uc11c\ub4dc\uc640 \ub2ec\ub9ac \ubcf5\uc218\uac1c\uc758 \ud578\ub4e4\ub7ec\ub97c \uc5f0\uacb0\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="\ubcf5\uc218\uc758 \ud074\ub9ad \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"',title:'"\ubcf5\uc218\uc758',"\ud074\ub9ad":!0,"\uc774\ubca4\ud2b8":!0,'\ud578\ub4e4\ub7ec"':!0},'const button = document.querySelector("button");\nbutton.addEventListener("click", () => {\n  console.log("First handler");\n});\nbutton.addEventListener("click", () => {\n  console.log("Second handler");\n});\n')),(0,o.kt)("p",null,"DOM\uc5d0 \uc694\uc18c\uac00 \ub354 \uc774\uc0c1 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc73c\uba74 \uba54\ubaa8\ub9ac \ub204\uc218\ub97c \ubc29\uc9c0\ud558\uace0\uc790 \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\ub3c4 \uc0ad\uc81c\ud574\uc57c \ud55c\ub2e4. \uc774\ub97c \uc704\ud574 removeEventListener \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="\uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec \uc0ad\uc81c"',title:'"\uc774\ubca4\ud2b8',"\ud578\ub4e4\ub7ec":!0,'\uc0ad\uc81c"':!0},'const button = document.querySelector("button");\nconst firstHandler = () => {\n  console.log("First handler");\n};\nconst secondHandler = () => {\n  console.log("Second handler");\n};\n\nbutton.addEventListener("click", firstHandler);\nbutton.addEventListener("click", secondHandler);\n\nwindow.setTimeout(() => {\n  button.removeEventListenr("click", firstHandler);\n  button.removeEventListenr("click", secondHandler);\n  console.log("Removed Event Handlers");\n}, 1000);\n')),(0,o.kt)("p",null,"\uac00\uc7a5 \uc911\uc694\ud55c \uc810\uc740 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c \uc81c\uac70\ud558\ub824\uba74 removeEventListener \uba54\uc11c\ub4dc\uc5d0 \ub9e4\uac1c\ubcc0\uc218\ub85c \uc804\ub2ec\ud560 \uc218 \uc788\ub3c4\ub85d \uc774\uc5d0 \ub300\ud55c \ucc38\uc870\ub97c \uc720\uc9c0\ud574\uc57c \ud55c\ub2e4\ub294 \uac83\uc774\ub2e4."),(0,o.kt)("h3",{id:"\uc774\ubca4\ud2b8-\uac1d\uccb4"},"\uc774\ubca4\ud2b8 \uac1d\uccb4"),(0,o.kt)("p",null,"\uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub294 DOM \ub178\ub4dc\ub098 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc0dd\uc131\ud55c \uc774\ubca4\ud2b8\ub97c \ub098\ud0c0\ub0b4\ub294 \ub9e4\uac1c\ubcc0\uc218\uac00 \ud3ec\ud568\ub41c\ub2e4. \uc774\ubca4\ud2b8\uc5d0\ub294 \ud3ec\uc778\ud130 \uc88c\ud45c, \uc774\ubca4\ud2b8 \ud0c0\uc785, \uc774\ubca4\ud2b8\ub97c \ud2b8\ub9ac\uac70\ud55c \uc694\uc18c \uac19\uc740 \uc815\ubcf4\ub4e4\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\ub2e4."),(0,o.kt)("h3",{id:"dom-\uc774\ubca4\ud2b8-\ub77c\uc774\ud504\uc0ac\uc774\ud074"},"DOM \uc774\ubca4\ud2b8 \ub77c\uc774\ud504\uc0ac\uc774\ud074"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'button.addEventListener("click", handler, false);\n')),(0,o.kt)("p",null,"\uc138 \ubc88\uc9f8 \ub9e4\uac1c\ubcc0\uc218\ub294 useCapture\ub77c\uace0 \ubd88\ub9ac\uba70 \uae30\ubcf8\uac12\uc740 false\ub2e4. \uc774 \ub9e4\uac1c\ubcc0\uc218\uac00 \uc120\ud0dd \uc0ac\ud56d\uc774\uae34 \ud558\uc9c0\ub9cc \uc774\uc0c1\uc801\uc73c\ub85c \ud3ed\ub113\uc740 \ube0c\ub77c\uc6b0\uc800 \ud638\ud658\uc131\uc744 \uc5bb\uc73c\ub824\uba74 \ud3ec\ud568\uc2dc\ucf1c\uc57c \ud55c\ub2e4."),(0,o.kt)("p",null,"\uc774\ubca4\ud2b8 \ub77c\uc774\ud504 \uc0ac\uc774\ud074\uc740 \ub2e4\uc74c\uacfc \uac19\uc740\ub370 useCapture\uc5d0 ture\ub97c \uc0ac\uc6a9\ud558\uba74 \ubc84\ube14 \ub2e8\uacc4 \ub300\uc2e0 \ucea1\ucc98 \ub2e8\uacc4\uc5d0 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c \ucd94\uac00\ud55c\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Capture Phase: \uc774\ubca4\ud2b8\uac00 html\uc5d0\uc11c Target Element \ub85c \uc774\ub3d9\ud55c\ub2e4."),(0,o.kt)("li",{parentName:"ol"},"Target Phase: \uc774\ubca4\ud2b8\uac00 Target Element\uc5d0 \ub3c4\ub2ec\ud55c\ub2e4."),(0,o.kt)("li",{parentName:"ol"},"Bubbling Phase: \uc774\ubca4\ud2b8\uac00 Target Element\uc5d0\uc11c html\ub85c \uc774\ub3d9\ud55c\ub2e4.")),(0,o.kt)("p",null,"\ubc84\ube14 \ub2e8\uacc4\uc5d0\uc11c\ub294 \ud578\ub4e4\ub7ec\uac00 \uc0c1\ud5a5\uc2dd\uc73c\ub85c \ucc98\ub9ac\ub418\ub294 \ubc18\uba74 \ucea1\ucc98 \ub2e8\uacc4\uc5d0\uc11c\ub294 \ubc18\ub300\ub85c \ucc98\ub9ac\ub41c\ub2e4. \uc0dd\uc131\ub41c \ubaa8\ub4e0 DOM \uc774\ubca4\ud2b8\uc5d0 \ub300\ud574 \ube0c\ub77c\uc6b0\uc800\ub294 \ucea1\ucc98 \ub2e8\uacc4\ub97c \uc2e4\ud589\ud55c \ub2e4\uc74c \ubc84\ube14 \ub2e8\uacc4\ub97c \uc2e4\ud589\ud55c\ub2e4\ub294 \uac83\uc744 \uba85\uc2ec\ud558\uc790."),(0,o.kt)("p",null,"\uc774\ub7f0 \uc5ec\ub7ec \ub2e8\uacc4\uac00 \uc874\uc7ac\ud558\uac8c \ub41c \ub370\ub294 \uc5ed\uc0ac\uc801\uc778 \ubc30\uacbd\uc774 \uc788\ub2e4. Web \ud45c\uc900\uc774 \uc815\ub9bd\ub418\uc9c0 \uc54a\ub358 \uc2dc\uae30\uc5d0 \uc77c\ubd80 \ube0c\ub77c\uc6b0\uc800\ub294 \ucea1\ucc98 \ub2e8\uacc4\ub9cc \uc9c0\uc6d0\ud55c \ubc18\uba74 \ub2e4\ub978 \ube0c\ub77c\uc6b0\uc800\ub4e4\uc740 \ubc84\ube14 \ub2e8\uacc4\ub9cc \uc9c0\uc6d0\ud588\uae30 \ub54c\ubb38\uc774\ub2e4."),(0,o.kt)("h3",{id:"\uc0ac\uc6a9\uc790-\uc815\uc758-\uc774\ubca4\ud2b8-\uc0ac\uc6a9"},"\uc0ac\uc6a9\uc790 \uc815\uc758 \uc774\ubca4\ud2b8 \uc0ac\uc6a9"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(8550).Z,width:"960",height:"230"})),(0,o.kt)("small",null,"https://www.w3.org/TR/2014/WD-DOM-Level-3-Events-20140925/#figure-event-inheritance"),(0,o.kt)("p",null,"DOM \uc774\ubca4\ud2b8 API\uc5d0\uc11c\ub294 \uc0ac\uc6a9\uc790 \uc815\uc758 \uc774\ubca4\ud2b8 \ud0c0\uc785\uc744 \uc815\uc758\ud558\uace0 \ub2e4\ub978 \uc774\ubca4\ud2b8\ucc98\ub7fc \ucc98\ub9ac\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="\uc0ac\uc6a9\uc790 \uc815\uc758 \uc774\ubca4\ud2b8 \ubc1c\uc0dd"',title:'"\uc0ac\uc6a9\uc790',"\uc815\uc758":!0,"\uc774\ubca4\ud2b8":!0,'\ubc1c\uc0dd"':!0},'const EVENT_NAME = "FiveCharInputValue";\nconst input = document.querySelector("input");\n\ninput.addEventListener("input", () => {\n  const { length } = input.value;\n  console.log("input length", length);\n  if (length === 5) {\n    const time = new Date().getTime();\n    const event = new CustomEvent(EVENT_NAME, {\n      detail: {\n        time,\n      },\n    });\n\n    input.dispatchEvent(event);\n  }\n});\n\ninput.addEventListener(EVNET_NAME, (e) => {\n  console.log("handling custom event...", e.detail);\n});\n')),(0,o.kt)("p",null,"input \uc774\ubca4\ud2b8\ub97c \uad00\ub9ac\ud560 \ub54c \uac12 \uc790\uccb4\uc758 \uae38\uc774\ub97c \ud655\uc778\ud558\uc5ec \uae38\uc774\uac00 5\ub77c\uba74 FiveCharInputValue \uc774\ubca4\ud2b8\ub97c \ubc1c\uc0dd\uc2dc\ud0a8\ub2e4."),(0,o.kt)("h2",{id:"todomvc\uc5d0-\uc774\ubca4\ud2b8-\ucd94\uac00"},"TodoMVC\uc5d0 \uc774\ubca4\ud2b8 \ucd94\uac00"),(0,o.kt)("h3",{id:"\ub80c\ub354\ub9c1-\uc5d4\uc9c4-\ub9ac\ubdf0"},"\ub80c\ub354\ub9c1 \uc5d4\uc9c4 \ub9ac\ubdf0"),(0,o.kt)("p",null,"2\uc7a5\uc5d0\uc11c \uad6c\ud604\ud55c \ub80c\ub354\ub9c1 \uc5d4\uc9c4\uc758 \ubb38\uc81c\uc810\uc740 \uc77c\ubd80\uac00 DOM \uc694\uc18c \ub300\uc2e0 \ubb38\uc790\uc5f4\ub85c \ub3d9\uc791\ud55c\ub2e4\ub294 \uac83\uc774\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Todos component"',title:'"Todos','component"':!0},'const getTodoElement = (todo) => {\n  const { text, completed } = todo;\n\n  return `\n    <li ${completed ? \'class="completed"\' : ""}>\n      <div class="view">\n        <input\n          ${completed ? "checked" : ""}\n          class="toggle"\n          type="checkbox"\n        >\n        <label>${text}</label>\n        <button class="destroy"></button>\n      </div>\n      <input class="edit" value="${text}">\n    </li>\n  `;\n};\n\nexport default (targetElement, { todos }) => {\n  const newTodoList = targetElement.cloneNode(true);\n  const todosElements = todos.map(getTodoElement).join("");\n  newTodoList.innerHTML = todosElements;\n  return newTodoList;\n};\n')),(0,o.kt)("h3",{id:"\ud15c\ud50c\ub9bf-\uc694\uc18c"},"\ud15c\ud50c\ub9bf \uc694\uc18c"),(0,o.kt)("p",null,"document.createElement API\ub97c \uc0ac\uc6a9\ud574 DOM \ub178\ub4dc\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="document.createElement"',title:'"document.createElement"'},'const newDiv = document.createElement("div");\nif (!condition) {\n  newDiv.classList.add("disabled");\n}\n\nconst newSpan = document.createElement("span");\nnewSpan.textContent = "Hello World!";\n\nnewDiv.appendChild(newSpan);\n')),(0,o.kt)("p",null,"\uc774 API\ub97c \uc774\uc6a9\ud574 \ube48 li\ub97c \uc0dd\uc131\ud55c \ud6c4 \ub2e4\uc591\ud55c \ud578\ub4e4\ub7ec\ub4e4\uc744 \ucd94\uac00\ud560 \uc218 \uc788\uc9c0\ub9cc \ucf54\ub4dc\ub97c \uc77d\uace0 \uc720\uc9c0\ud558\uae30 \uc5b4\ub835\ub2e4. \ub354 \ub098\uc740 \uc635\uc158\uc740 index.html \ud30c\uc77c\uc758 template \ud0dc\uadf8\uc548\uc5d0 todo \uc694\uc18c\uc758 \ub9c8\ud06c\uc5c5\uc744 \ud574\ub450\ub294 \uac83\uc774\ub2e4. template \ud0dc\uadf8\ub294 \ub80c\ub354\ub9c1 \uc5d4\uc9c4\uc758 '\uc2a4\ud0ec\ud504'\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ubcf4\uc774\uc9c0 \uc54a\ub294 \ud0dc\uadf8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="todo \ud56d\ubaa9 template \uc694\uc18c"',title:'"todo',"\ud56d\ubaa9":!0,template:!0,'\uc694\uc18c"':!0},'<template id="todo-item">\n  <li>\n    <div class="view">\n      <input class="toggle" type="checkbox" />\n      <label></label>\n      <button class="destroy"></button>\n    </div>\n    <input class="edit" />\n  </li>\n</template>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="template\uc744 \uc774\uc6a9\ud574 todo item \uc0dd\uc131"',title:'"template\uc744',"\uc774\uc6a9\ud574":!0,todo:!0,item:!0,'\uc0dd\uc131"':!0},'let template;\n\nconst createNewTodoNode = () => {\n  if (!template) {\n    template = document.getElementById("todo-item");\n  }\n\n  return template.content.firstElementChild.cloneNode(true);\n};\n\nconst getTodoElement = (todo) => {\n  const { text, complated } = todo;\n\n  const element = createNewTodoNode();\n\n  element.querySelector("input.edit").value = text;\n  element.querySelector("label").textContent = text;\n\n  if (completed) {\n    element.classList.add("completed");\n    element.querySelector("input.toggle").checked = true;\n  }\n\n  return element;\n};\n\nexport default (targetElement, { todos }) => {\n  const newTodoList = targetElement.cloneNode(true);\n\n  newTodoList.innerHTML = "";\n\n  todos.map(getTodoElement).forEach((element) => {\n    newTodoList.appendChild(element);\n  });\n\n  return newTodoList;\n};\n')),(0,o.kt)("p",null,"\uc774\uc81c \ud15c\ud50c\ub9bf\uc744 \ud65c\uc6a9\ud574 \ubaa8\ub4e0 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc801\uc6a9\ud574\ubcf4\uc790."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="\uc804\uccb4 \uc571\uc5d0 \ud15c\ud50c\ub9bf \uc0ac\uc6a9"',title:'"\uc804\uccb4',"\uc571\uc5d0":!0,"\ud15c\ud50c\ub9bf":!0,'\uc0ac\uc6a9"':!0},'<body>\n  <template id="todo-item">\n    \x3c!-- todo \ud56d\ubaa9 \ub0b4\uc6a9\uc744 \uc5ec\uae30\uc5d0 \ub193\ub294\ub2e4 --\x3e\n  </template>\n  <template id="todo-app">\n    <section class="todoapp">\n      \x3c!-- \uc571 \ub0b4\uc6a9\uc744 \uc5ec\uae30\uc5d0 \ub193\ub294\ub2e4 --\x3e\n    </section>\n  </template>\n  <div id="root">\n    <div data-component="app"></div>\n  </div>\n</body>\n')),(0,o.kt)("p",null,"app\uc774\ub77c\ub294 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc0dd\uacbc\ub2e4. \uc774 \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc0c8\ub85c \uc791\uc131\ub41c template\uc744 \uc0ac\uc6a9\ud574 \ucf58\ud150\uce20\ub97c \uc0dd\uc131\ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="template\ub85c \uc791\uc131\ud55c \uc571 \ucef4\ud3ec\ub10c\ud2b8"',title:'"template\ub85c',"\uc791\uc131\ud55c":!0,"\uc571":!0,'\ucef4\ud3ec\ub10c\ud2b8"':!0},'let tempalte;\n\nconst createAppElement = () => {\n  if (!template) {\n    template = document.getElementById("todo-app");\n  }\n\n  return template.content.firstElementChild.cloneNode(true);\n};\n\nexport default (targetElement) => {\n  const newApp = targetElement.cloneNode(true);\n  newApp.innderHTML = "";\n  newApp.appendChild(createAppElement());\n  return newApp;\n};\n')),(0,o.kt)("h3",{id:"\uae30\ubcf8-\uc774\ubca4\ud2b8-\ucc98\ub9ac-\uc544\ud0a4\ud14d\ucc98"},"\uae30\ubcf8 \uc774\ubca4\ud2b8 \ucc98\ub9ac \uc544\ud0a4\ud14d\ucc98"),(0,o.kt)("p",null,"\ubb38\uc790\uc5f4 \ub300\uc2e0 DOM \uc694\uc18c\ub85c \ub3d9\uc791\ud558\ub294 \uc0c8\ub85c\uc6b4 \ub80c\ub354\ub9c1 \uc5d4\uc9c4\uc744 \uc791\uc131\ud588\ub2e4. \uc774\uc81c \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc5f0\uacb0\ud574\ubcf4\uc790."),(0,o.kt)("p",null,"\uc0c8\ub85c\uc6b4 \uc0c1\ud0dc\ub9c8\ub2e4 \uc0c8\ub85c\uc6b4 dom tree\ub97c \uc0dd\uc131\ud574 virtual dom \uc54c\uace0\ub9ac\uc998\uc744 \uc801\uc6a9\ud560 \uc218 \uc788\ub2e4. \uc774 \uc2dc\ub098\ub9ac\uc624\uc5d0\uc11c\ub294 \ubaa8\ub4e0 \uc774\ubca4\ud2b8 \ub2e4\uc74c\uc5d0 \uc0c1\ud0dc\ub97c \uc870\uc791\ud55c \ud6c4 \uc0c8\ub85c\uc6b4 \uc0c1\ud0dc\ub85c \uba54\uc778 \ub80c\ub354\ub9c1 \ud568\uc218\ub97c \ud638\ucd9c\ud55c\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(8403).Z,width:"1010",height:"826"})),(0,o.kt)("p",null,"\uc774\uc81c \uad6c\ud604\uc744 \ud574\ubcf4\uc790."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="\uc774\ubca4\ud2b8\ub97c \uac00\uc9c4 \ucee8\ud2b8\ub864\ub7ec"',title:'"\uc774\ubca4\ud2b8\ub97c',"\uac00\uc9c4":!0,'\ucee8\ud2b8\ub864\ub7ec"':!0},"const state = {\n  todos: [],\n  currentFilter: 'All'\n}\n\nconst events = {\n  deleteItem: (index) => {\n    state.todos.splice(index, 1);\n    render();\n  },\n  addItem: (text) => {\n    state.todos.push({\n      text,\n      completed: false\n    })\n  }\n}\n\nconst render = () => {\n  window.requestAnimationFrame(() => {\n    const main document.querySelector('#root');\n    const newMain = registry.renderRoot(main, state, events);\n\n    applyDiff(document.body, main, newMain);\n  });\n};\n\nrender();\n")),(0,o.kt)("p",null,"events\ub97c \ub9e4\uac1c\ubcc0\uc218\ub85c \uc804\ub2ec\ud568\uc73c\ub85c\uc368 \ubaa8\ub4e0 \uad6c\uc131\uc694\uc18c\uac00 events\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uac8c \ub418\uc5c8\ub2e4. \uc2e4\uc81c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c\ub294 \uac1c\ubc1c\uc790\uac00 \ud578\ub4e4\ub7ec\ub97c \ube60\ub974\uac8c \ucd94\uac00\ud558\uace0 \uc0c8\ub85c\uc6b4 \ub80c\ub354\ub9c1 \uc8fc\uae30\ub97c \uc790\ub3d9\uc73c\ub85c \ud638\ucd9c\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\ub294 '\uc774\ubca4\ud2b8 \ub808\uc9c0\uc2a4\ud2b8\ub9ac'\ub97c \uc0dd\uc131\ud558\ub294 \uac83\uc774 \uc88b\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="addItem \uc774\ubca4\ud2b8\ub97c \uac00\uc9c4 \uc571 \ucef4\ud3ec\ub10c\ud2b8"',title:'"addItem',"\uc774\ubca4\ud2b8\ub97c":!0,"\uac00\uc9c4":!0,"\uc571":!0,'\ucef4\ud3ec\ub10c\ud2b8"':!0},'let template;\n\nconst getTemplate = () => {\n  if (!template) {\n    template = document.getElementById("todo-app");\n  }\n\n  return template.content.firstElementChild.cloneNode(true);\n};\n\nconst addEvents = (targetElement, events) => {\n  targetElement.querySelector(".new-todo").addEventListener("keypress", (e) => {\n    if (e.key === "Enter") {\n      events.addItem(e.target.value);\n      e.target.value = "";\n    }\n  });\n};\n\nexport default (targetElement, state, events) => {\n  const newApp = targetElement.cloneNode(true);\n\n  newApp.innerHTML = "";\n  newApp.appendChild(getTemplate());\n\n  addEvents(newApp, events);\n\n  return newApp;\n};\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="\uc774\ubca4\ud2b8\ub97c \uac00\uc9c4 todo \ucef4\ud3ec\ub10c\ud2b8"',title:'"\uc774\ubca4\ud2b8\ub97c',"\uac00\uc9c4":!0,todo:!0,'\ucef4\ud3ec\ub10c\ud2b8"':!0},'const getTodoElement = (todo, index, events) => {\n  const { text, completed } = todo;\n\n  const element = createNewTodoNode();\n\n  element.querySelector("input.edit").value = text;\n  element.querySelector("label").value = text;\n\n  if (completed) {\n    element.classList.add("complated");\n    element.querySelector("input.toggle").checked = true;\n  }\n\n  const handler = (e) => events.deleteItem(index);\n\n  element.querySelector("button.destroy").addEventListener("click", handler);\n\n  return element;\n};\n\nexport default (targetElement, { todos }, events) => {\n  const newTodoList = targetElement.cloneNode(true);\n\n  newTodoList.innerHTML = "";\n\n  todos\n    .map((todo, index) => getTodoElement(todo, index, events))\n    .forEach((element) => newTodoList.appendChild(element));\n\n  return newTodoList;\n};\n')),(0,o.kt)("h2",{id:"\uc774\ubca4\ud2b8-\uc704\uc784"},"\uc774\ubca4\ud2b8 \uc704\uc784"),(0,o.kt)("p",null,"\ub2e4\uc74c\uc740 \uc774\ubca4\ud2b8 \uc704\uc784\uc744 \uae30\ubc18\uc73c\ub85c \uc717 \ucf54\ub4dc\ub97c \uc218\uc815\ud55c \ubc84\uc804\uc774\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="\uc774\ubca4\ud2b8 \uc704\uc784 \uae30\ubc18\uc758 todo \ucef4\ud3ec\ub10c\ud2b8"',title:'"\uc774\ubca4\ud2b8',"\uc704\uc784":!0,"\uae30\ubc18\uc758":!0,todo:!0,'\ucef4\ud3ec\ub10c\ud2b8"':!0},'const getTodoElement = (todo, index) => {\n  const { text, completed } = todos;\n\n  const element = creatNewTodoNode();\n\n  element.querySelector("input.edit").value = text;\n  element.querySelector("label").textContent = text;\n\n  if (completed) {\n    element.classList.add("completed");\n    element.querySelector("input.toggle").checked = true;\n  }\n\n  element.querySelector("button.destroy").dataset.index = index;\n\n  return element;\n};\n\nexport default (targetElement, state, events) => {\n  const { todos } = state;\n  const { deleteItem } = events;\n  const newTodoList = targetElement.cloneNode(true);\n\n  newTodoList.innerHTML = "";\n\n  todos\n    .map((todo, index) => getTodoElement(todo, index))\n    .forEach((element) => newTodoList.appendChild(element));\n\n  newTodoList.addEventListener("click", (e) => {\n    if (e.target.matches("button.destroy")) {\n      deleteItem(e.target.dataset.index);\n    }\n  });\n\n  return newTodoList;\n};\n')),(0,o.kt)("p",null,"\uc774\uc804\uc758 \ucef4\ud3ec\ub10c\ud2b8\uc640 \ub2ec\ub9ac \ub9ac\uc2a4\ud2b8 \uc790\uccb4\uc5d0 \ud558\ub098\uc758 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub9cc \uc5f0\uacb0\ub3fc \uc788\ub2e4. \ud589\ub9c8\ub2e4 \ubcc4\ub3c4\uc758 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c \uac16\uc9c0 \uc54a\ub294\ub2e4. \ub9ac\uc2a4\ud2b8\uac00 \uae38\ub2e4\uba74 \uc774 \ubc29\ubc95\uc73c\ub85c \uc131\ub2a5\uacfc \uba54\ubaa8\ub9ac \uc0ac\uc6a9\uc131\uc744 \uac1c\uc120\uc2dc\ud0ac \uc218 \uc788\ub2e4."))}m.isMDXComponent=!0},8403:function(e,t,n){t.Z=n.p+"assets/images/3.9-f88c6f11c16689f200fd175caedbd3cc.png"},8550:function(e,t,n){t.Z=n.p+"assets/images/event-inheritance-4469955f0d273af5c0362bc384d4f4c5.svg"}}]);