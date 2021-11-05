"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[69],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6918:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return s},toc:function(){return d},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Third-party JavaScript performance",date:new Date("2021-04-04T00:00:00.000Z"),cover:"",tags:["web"]},c=void 0,p={permalink:"/blog/third-party-javascript-performance-with-script-async-defer",editUrl:"https://github.com/kooku-dev/kooku-dev.github.io/edit/master/blog/blog/third-party-javascript-performance-with-script-async-defer.md",source:"@site/blog/third-party-javascript-performance-with-script-async-defer.md",title:"Third-party JavaScript performance",description:"Web.dev\uc758 Efficiently load third-party JavaScript\ub97c \ucc38\uace0\ud558\uc5ec \uc791\uc131\ud558\uc600\uc2b5\ub2c8\ub2e4.",date:"2021-04-04T00:00:00.000Z",formattedDate:"April 4, 2021",tags:[{label:"web",permalink:"/blog/tags/web"}],readingTime:4.32,truncated:!1,authors:[],prevItem:{title:"React fiber & reconciliation",permalink:"/blog/react-fiber"}},s={authorsImageUrls:[]},d=[{value:"Use async or defer",id:"use-async-or-defer",children:[{value:"async",id:"async",children:[],level:3},{value:"defer",id:"defer",children:[],level:3},{value:"Code",id:"code",children:[],level:3}],level:2},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",children:[],level:2}],u={toc:d};function f(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Web.dev\uc758 ",(0,i.kt)("a",{parentName:"p",href:"https://web.dev/efficiently-load-third-party-javascript/"},"Efficiently load third-party JavaScript"),"\ub97c \ucc38\uace0\ud558\uc5ec \uc791\uc131\ud558\uc600\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("p",null,"Third-party script \uac00 \ud398\uc774\uc9c0\uc758 \ub85c\ub4dc\ub97c \ub290\ub9ac\uac8c \ud560 \uacbd\uc6b0, \uc131\ub2a5\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\uae30 \uc704\ud55c \ub450\uac00\uc9c0 \uc635\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc0ac\uc774\ud2b8\uc5d0 \uba85\ubc31\ud55c \uac00\uce58\ub97c \uc8fc\uc9c0\uc54a\ub2e4\uba74 \uc81c\uac70\ud574\ub77c."),(0,i.kt)("li",{parentName:"ul"},"loading process\ub97c \ucd5c\uc801\ud654 \uc2dc\ucf1c\ub77c")),(0,i.kt)("p",null,"loading progess\ub97c \ucd5c\uc801\ud654\uc2dc\ud0a4\ub294 \ubc29\ubc95\uc73c\ub85c\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \ubc29\ubc95\ub4e4\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"<script>")," \ud0dc\uadf8\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"li"},"async")," \ub610\ub294 ",(0,i.kt)("inlineCode",{parentName:"li"},"defer")," attribute\ub97c \uc0ac\uc6a9"),(0,i.kt)("li",{parentName:"ol"},"\ud544\uc694\ud55c origins\uc5d0 \ubbf8\ub9ac connections\uc744 \uc2dc\ucf1c\ub193\uae30"),(0,i.kt)("li",{parentName:"ol"},"Lazy-loading"),(0,i.kt)("li",{parentName:"ol"},"third-party scripts serving\uc744 \ucd5c\uc801\ud654")),(0,i.kt)("p",null,"\uc774\ubc88 \ud3ec\uc2a4\ud305\uc5d0\ub294 1\ubc88 \ubc29\ubc95\ub9cc \uc124\uba85\ud558\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"use-async-or-defer"},"Use async or defer"),(0,i.kt)("p",null,"Synchronous scripts\ub294 DOM Pharsing\uc744 \ub9c9\uc544 rendering\uc744 \uc9c0\uc5f0\uc2dc\ud0a4\uae30\uc5d0, third-party scripts\uc758 \ub85c\ub4dc\ub294 \ud56d\uc0c1 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \uc2e4\ud589\uc2dc\ucf1c\uc57c\ud558\uba70 page\uac00 render\ub418\uae30 \uc804\uc5d0 script\ub97c \uc2e4\ud589\uc2dc\ud0ac \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"async"),"\uc640 ",(0,i.kt)("inlineCode",{parentName:"p"},"defer")," \uc18d\uc131\uc740 \ube0c\ub77c\uc6b0\uc800\uc5d0\uac8c HTML\uc774 parsing\ub418\ub294 \uc911\uc5d0 background\uc5d0\uc11c script\ub97c \ub85c\ub4dc\ud558\uace0 load\uac00 \ub41c \ud6c4\uc5d0 script\ub97c \uc2e4\ud589\uc2dc\ud0a8\ub2e4\uace0 \ub9d0\ud574\uc90d\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubc29\ubc95\uc73c\ub85c script download\ub294 DOM \uc0dd\uc131\uacfc rendering\uc744 block\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubc29\ubc95\uc73c\ub85c user\ub294 \ubaa8\ub4e0 \uc2a4\ud06c\ub9bd\ud2b8\uac00 \ub85c\ub4dc\ub418\uae30 \uc804\uc5d0 page\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script async src="script.js">\n\n<script defer src="script.js">\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"async"),"\uc640 ",(0,i.kt)("inlineCode",{parentName:"p"},"defer"),"\uc758 \ucc28\uc774\uc810\uc740 scripts\uc758 \uc2e4\ud589 \uc2dc\uc810\uc5d0 \ucc28\uc774\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"async"},"async"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"async")," \uc18d\uc131\uc744 \uac00\uc9c4 Sscript\ub294 download\ub97c \ub9c8\uce5c \ud6c4 window's\uc758 load event \uc804\uc5d0 \uc2e4\ud589\uc2dc\ud0b5\ub2c8\ub2e4. \uc774\ub294 \ube44\ub3d9\uae30 \uc2a4\ud06c\ub9bd\ud2b8\uac00 HTML\uc5d0 \ub098\ud0c0\ub098\ub294 \uc21c\uc11c\ub300\ub85c \uc2e4\ud589\ub418\uc9c0 \uc54a\uc744 \uac00\ub2a5\uc131\uc774 \uc788\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \ub610\ud55c DOM tree \uc0dd\uc131\uc744 \ud558\uace0 \uc788\ub294 \ub3c4\uc911 script \ub2e4\uc6b4\ub85c\ub4dc\uac00 \uc644\ub8cc\ub418\uba74 DOM tree \uc0dd\uc131\uc744 interrupt \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2551).Z})),(0,i.kt)("h3",{id:"defer"},"defer"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"defer")," \uc18d\uc131\uc744 \uac00\uc9c4 scripts\ub294 HTML parsing\uc774 \uc644\ub8cc\ub41c \uc774\ud6c4, DOMContentLoaded \uc774\ubca4\ud2b8 \uc774\uc804\uc5d0 \uc2e4\ud589\ub429\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"defer"),"\ub294 HTML\uc774 \uc21c\uc11c\ub300\ub85c \uc2e4\ud589\ub418\ub294 \uac83\uc744 \ubcf4\uc7a5\ud558\uace0 parsing\uc744 block\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5960).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"async"),"\ub294 load process \ucd08\uae30\uc5d0 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\uc2dc\ud0a4\ub294 \uac83\uc774 \uc911\uc694\ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"defer"),"\ub294 \ub35c \uc911\uc694\ud55c \uc694\uc18c\uc5d0 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc2a4\ud06c\ub864\uc744 \ud574\uc57c \ubcfc \uc218 \uc788\ub294 \ub3d9\uc601\uc0c1 \ud50c\ub808\uc774\uc5b4.")),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("p",null,"\uc2e4\uc81c \ucf54\ub4dc\uc5d0\uc11c \uc774\ub860\ub300\ub85c \ub3d9\uc791\ud558\ub294\uc9c0 \ud655\uc778\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n\n    <script defer src="./defer.js"><\/script>\n    <script async src="./async.js"><\/script>\n    <script src="./sample.js"><\/script>\n    <script>\n      console.log("in head");\n      window.addEventListener("DOMContentLoaded", function () {\n        console.log("DOMContentLoaded is loaded");\n      });\n\n      window.onload = function () {\n        console.log("window is loaded");\n      };\n    <\/script>\n    <title>React App</title>\n  </head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id="root"></div>\n    <script>\n      console.log("end of body");\n    <\/script>\n  </body>\n</html>\n')),(0,i.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \ucf54\ub4dc\uac00 \uc788\ub2e4\uace0 \ud588\uc744 \ub54c \ucf58\uc194\uc5d0\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \ucc0d\ud614\uace0 \uc0dd\uac01\ud588\ub358 \ub300\ub85c \ub3d9\uc791\ud568\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"async\nin sample\nin head\nend of body\ndefer\nDOMContentLoaded is loaded\nwindow is loaded\n")),(0,i.kt)("h2",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,i.kt)("p",null,"\uc2e4\uc81c \ud504\ub85c\uc81d\ud2b8\ub97c \ud558\uba74\uc11c third-party javascript library\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc2b5\ub2c8\ub2e4. kakao-sdk, google-analytics, google tag manager, facebook-sdk, etc... \uc774\ub7ec\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c\uc744 \uc544\ubb34\ub807\uac8c\ub098 \uc0ac\uc6a9\ud558\uac8c \ub418\uba74 First Paint\uac00 \ub2a6\uc5b4\uc838 \uc0ac\uc6a9\uc790 \uc785\uc7a5\uc5d0\uc11c\ub294 \ud398\uc774\uc9c0 \ub85c\ub529\uc774 \ub290\ub9b0, \uc548\uc88b\uc740 \uacbd\ud5d8\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubb38\uc81c\ub4e4\uc740 script \ud0dc\uadf8\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"async"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"defer")," \uc18d\uc131\uc744 \uc801\uc808\ud788 \uc0ac\uc6a9\ud568\uc73c\ub85c\uc368 \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}f.isMDXComponent=!0},2551:function(e,t,n){t.Z=n.p+"assets/images/async-738d5e3bb3f97030502fd8ae0b07e258.png"},5960:function(e,t,n){t.Z=n.p+"assets/images/defer-923e5b2bbee9e5e5bf25f5929300ea34.png"}}]);