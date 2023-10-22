"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[3288],{21771:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var t=i(11527),r=i(26736);const c={title:"Execution Context",date:new Date("2021-05-03T00:00:00.000Z"),cover:"../images/ec-cover.png",tags:["javascript"]},l=void 0,o={permalink:"/blog/execution-context",editUrl:"https://github.com/kooku0/kooku0.github.io/edit/main/blog/execution-context.md",source:"@site/blog/execution-context.md",title:"Execution Context",description:"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \uac00\uc7a5 \uc911\uc694\ud55c \ud575\uc2ec \uac1c\ub150 \uc911 \ud558\ub098\ub85c, \uc2e4\ud589\ud560 \ucf54\ub4dc\uc5d0 \uc81c\uacf5\ud560 \ud658\uacbd \uc815\ubcf4\ub4e4\uc744 \ubaa8\uc544\ub193\uc740 \uac1d\uccb4\uc785\ub2c8\ub2e4.",date:"2021-05-03T00:00:00.000Z",formattedDate:"2021\ub144 5\uc6d4 3\uc77c",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:6.6,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Execution Context",date:"2021-05-03T00:00:00.000Z",cover:"../images/ec-cover.png",tags:["javascript"]},unlisted:!1,prevItem:{title:"Height Performace Animations",permalink:"/blog/height-performace-animations"},nextItem:{title:"Throttling & Debouncing",permalink:"/blog/throttling-debouncing"}},s={authorsImageUrls:[]},a=[{value:"Lexical Environment",id:"lexical-environment",level:2},{value:"Environment Recode",id:"environment-recode",level:3},{value:"Outer Environment Reference",id:"outer-environment-reference",level:3},{value:"Variable Environment",id:"variable-environment",level:2},{value:"Variable Environment vs Lexical Environment",id:"variable-environment-vs-lexical-environment",level:3},{value:"ThisBinding",id:"thisbinding",level:2},{value:"Reference",id:"reference",level:2}];function d(e){const n=Object.assign({p:"p",strong:"strong",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h2:"h2",code:"code",h3:"h3",pre:"pre",img:"img",a:"a"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \uac00\uc7a5 \uc911\uc694\ud55c \ud575\uc2ec \uac1c\ub150 \uc911 \ud558\ub098\ub85c, ",(0,t.jsx)(n.strong,{children:"\uc2e4\ud589\ud560 \ucf54\ub4dc\uc5d0 \uc81c\uacf5\ud560 \ud658\uacbd \uc815\ubcf4\ub4e4\uc744 \ubaa8\uc544\ub193\uc740 \uac1d\uccb4"}),"\uc785\ub2c8\ub2e4.\n\ub3d9\uc77c\ud55c \ud658\uacbd\uc5d0 \uc788\ub294 \ucf54\ub4dc\ub4e4\uc744 \uc2e4\ud589\ud560 \ub54c \ud544\uc694\ud55c \ud658\uacbd \uc815\ubcf4\ub4e4\uc744 \ubaa8\uc544 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uad6c\uc131\ud558\uace0 \uc774\ub97c \ucf5c \uc2a4\ud0dd\uc5d0 \uc313\uc544\uc62c\ub838\ub2e4\uac00, \uac00\uc7a5 \uc704\uc5d0 \uc788\ub294 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc2e4\ud589\ud558\ub294 \uc2dd\uc73c\ub85c \uc804\uccb4 \ucf54\ub4dc\uc758 \ud658\uacbd\uacfc \uc21c\uc11c\ub97c \ubcf4\uc7a5\ud569\ub2c8\ub2e4.\n\uc5ec\uae30\uc11c '\ub3d9\uc77c\ud55c \ud658\uacbd', \uc989 \ud558\ub098\uc758 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uad6c\uc131\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc73c\ub85c \uc804\uc5ed\uacf5\uac04, eval() \ud568\uc218, \ud568\uc218 \ub4f1\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ub418\ub294 \uc804\uc5ed\uacf5\uac04\uacfc \uc545\ub9c8\ub85c \ucde8\uae09\ubc1b\ub294 eval\uc744 \uc81c\uc678\ud558\uba74 \uc6b0\ub9ac\uac00 \ud754\ud788 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uc740 ",(0,t.jsx)(n.strong,{children:"\ud568\uc218\ub97c \uc2e4\ud589"}),"\ud558\ub294 \uac83 \ubfd0\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"\ud55c \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uac00 \ucf5c \uc2a4\ud0dd\uc758 \ub9e8 \uc704\uc5d0 \uc313\uc774\ub294 \uc21c\uac04\uc774 \uace7 \ud604\uc7ac \uc2e4\ud589\ud560 \ucf54\ub4dc\uc5d0 \uad00\uc5ec\ud558\uac8c \ub418\ub294 \uc2dc\uc810\uc785\ub2c8\ub2e4. \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc740 \ud574\ub2f9 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \uad00\ub828\ub41c \ucf54\ub4dc\ub4e4\uc744 \uc2e4\ud589\ud558\ub294 \ub370 \ud544\uc694\ud55c \ud658\uacbd \uc815\ubcf4\ub4e4\uc744 \uc218\uc9d1\ud574\uc11c \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8 \uac1d\uccb4\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4. \uc774 \uac1d\uccb4\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc774 \ud65c\uc6a9\ud560 \ubaa9\uc801\uc73c\ub85c \uc0dd\uc131\ud560 \ubfd0 \uac1c\ubc1c\uc790\uac00 \ucf54\ub4dc\ub97c \ud1b5\ud574 \ud655\uc778\ud560 \uc218\ub294 \uc5c6\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0 \ub2f4\uae30\ub294 \uc815\ubcf4\ub4e4\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"VariableEnvironment: \ud604\uc7ac \ucee8\ud14d\uc2a4\ud2b8 \ub0b4\uc758 \uc2dd\ubcc4\uc790\ub4e4\uc5d0 \ub300\ud55c \uc815\ubcf4 + \uc678\ubd80 \ud658\uacbd \uc815\ubcf4, \uc120\uc5b8 \uc2dc\uc810\uc758 LexicalEnvironment\uc758 \uc2a4\ub0c5\uc0f7\uc73c\ub85c, \ubcc0\uacbd \uc0ac\ud56d\uc740 \ubc18\uc601\ub418\uc9c0 \uc54a\uc74c."}),"\n",(0,t.jsx)(n.li,{children:"LexicalEnvironment: \ucc98\uc74c\uc5d0\ub294 VariableEnvironment\uc640 \uac19\uc9c0\ub9cc \ubcc0\uacbd \uc0ac\ud56d\uc774 \uc2e4\uc2dc\uac04\uc73c\ub85c \ubc18\uc601\ub428."}),"\n",(0,t.jsx)(n.li,{children:"ThisBinding: this \uc2dd\ubcc4\uc790\uac00 \ubc14\ub77c\ubd10\uc57c \ud560 \ub300\uc0c1 \uac1d\uccb4."}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{align:"center"}),(0,t.jsx)(n.th,{align:"left"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:"VariableEnvironment"}),(0,t.jsx)(n.td,{align:"left",children:"- environmentRecord (snapshot)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center"}),(0,t.jsx)(n.td,{align:"left",children:"- outerEnvironmentReference (snapshot)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:"LexicalEnvironment"}),(0,t.jsx)(n.td,{align:"left",children:"- environmentRecord"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center"}),(0,t.jsx)(n.td,{align:"left",children:"- outerEnvironmentReference"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:"ThisBinding"}),(0,t.jsx)(n.td,{align:"left"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"lexical-environment",children:"Lexical Environment"}),"\n",(0,t.jsxs)(n.p,{children:["Lexical Environment\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\uc5d0\uc11c \ubcc0\uc218\ub098 \ud568\uc218 \ub4f1\uc758 \uc2dd\ubcc4\uc790\ub97c \uc815\uc758\ud558\ub294\ub370 \uc0ac\uc6a9\ud558\ub294 \uac1d\uccb4\ub85c \uc0dd\uac01\ud558\uba74 \uc27d\uc2b5\ub2c8\ub2e4. Lexical Environment\ub294 \uc2dd\ubcc4\uc790\uc640 \ucc38\uc870 \ud639\uc740 \uac12\uc744 \uae30\ub85d\ud558\ub294 ",(0,t.jsx)(n.code,{children:"environmentRecode"}),"\uc640 ",(0,t.jsx)(n.code,{children:"outerEnvironmentReference"}),"\ub77c\ub294 \ub610 \ub2e4\ub978 Lexical Environment\ub97c \ucc38\uc870\ud558\ub294 \ud3ec\uc778\ud130\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.h3,{id:"environment-recode",children:"Environment Recode"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"environmentRecode"}),"\ub294 \ud604\uc7ac \ucee8\ud14d\uc2a4\ud2b8\uc640 \uad00\ub828\ub41c \uc2dd\ubcc4\uc790 \uc815\ubcf4\ub4e4\uc774 \uc800\uc7a5\ub429\ub2c8\ub2e4. \ucee8\ud14d\uc2a4\ud2b8\ub97c \uad6c\uc131\ud558\ub294 \ud568\uc218\uc5d0 \uc9c0\uc815\ub41c \ub9e4\uac1c\ubcc0\uc218 \uc2dd\ubcc4\uc790, \uc120\uc5b8\ud55c \ud568\uc218\uac00 \uc788\uc744 \uacbd\uc6b0 \uadf8 \ud568\uc218 \uc790\uccb4, var\ub85c \uc120\uc5b8\ub41c \ubcc0\uc218\uc758 \uc2dd\ubcc4\uc790 \ub4f1\uc774 \uc2dd\ubcc4\uc790\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4. \ucee8\ud14d\uc2a4\ud2b8 \ub0b4\ubd80 \uc804\uccb4\ub97c \ucc98\uc74c\ubd80\ud130 \ub05d\uae4c\uc9c0 \ucb49 \ud6d1\uc5b4\ub098\uac00\uba70 \uc21c\uc11c\ub300\ub85c \uc218\uc9d1\ud569\ub2c8\ub2e4. \ubcc0\uc218 \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\ub294 \uacfc\uc815\uc744 \ubaa8\ub450 \ub9c8\ucce4\ub354\ub77c\ub3c4 \uc544\uc9c1 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uac00 \uad00\uc5ec\ud560 \ucf54\ub4dc\ub4e4\uc740 \uc2e4\ud589\ub3c4\uae30 \uc804\uc758 \uc0c1\ud0dc\uc785\ub2c8\ub2e4. \ucf54\ub4dc\uac00 \uc2e4\ud589\ub418\uae30 \uc804\uc784\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc740 \uc774\ubbf8 \ud574\ub2f9 \ud658\uacbd\uc5d0 \uc18d\ud55c \ucf54\ub4dc\uc758 \ubcc0\uc218\uba85\ub4e4\uc744 \ubaa8\ub450 \uc54c\uace0 \uc788\uac8c \ub418\ub294 \uac83\uc774\uc8e0. \uc774\ub7ec\ud55c \uacfc\uc815\uc744 ",(0,t.jsx)(n.strong,{children:"Hoisting"}),"\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.h3,{id:"outer-environment-reference",children:"Outer Environment Reference"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"outerEnvironmentReference"}),"\ub294 \uc678\ubd80 Lexical Environment\ub97c \ucc38\uc870\ud558\ub294 \ud3ec\uc778\ud130\ub85c, \uc911\ucca9\ub41c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\uc5d0\uc11c \uc2a4\ucf54\ud504 \ud0d0\uc0c9\uc744 \ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. (\ub530\ub77c\uc11c Global Execution Context\uc758 ",(0,t.jsx)(n.code,{children:"outerEnvironmentReference"}),"\ub294 null \uc785\ub2c8\ub2e4.)"]}),"\n",(0,t.jsx)(n.h2,{id:"variable-environment",children:"Variable Environment"}),"\n",(0,t.jsx)(n.p,{children:"VariableEnvironment\uc5d0 \ub2f4\uae30\ub294 \ub0b4\uc6a9\uc740 LexicalEnvironment\uc640 \uac19\uc9c0\ub9cc \ucd5c\ucd08 \uc2e4\ud589 \uc2dc\uc758 \uc2a4\ub0c5\uc0f7\uc744 \uc720\uc9c0\ud55c\ub2e4\ub294 \uc810\uc774 \ub2e4\ub985\ub2c8\ub2e4. \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc0dd\uc131\ud560 \ub54c VariableEnvironment\uc5d0 \uc815\ubcf4\ub97c \uba3c\uc800 \ub2f4\uc740 \ub2e4\uc74c, \uc774\ub97c \uadf8\ub300\ub85c \ubcf5\uc0ac\ud574\uc11c LexicalEnvironment\ub97c \ub9cc\ub4e4\uace0, \uc774\ud6c4\uc5d0\ub294 LexicalEnvironment\ub97c \uc8fc\ub85c \ud65c\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"executionContext.LexicalEnvironment = executionContext.VariableEnvironment;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"variable-environment-vs-lexical-environment",children:"Variable Environment vs Lexical Environment"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Variable Environment"}),"\uc640 ",(0,t.jsx)(n.code,{children:"Lexical Environment"}),"\ub97c \uc870\uae08 \ub354 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'var apple = "apple";\nlet banana = "banana";\n\n{\n  let banana = "banana2";\n  var orange = "orange";\n  console.log(apple, orange, banana);\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\ucc98\uc74c\uc5d0 ",(0,t.jsx)(n.code,{children:"var"})," \ud0a4\uc6cc\ub4dc\ub97c \uac00\uc9c4 \ubcc0\uc218\ub4e4\uc774 ",(0,t.jsx)(n.code,{children:"Variable Environment"}),"\uc758 ",(0,t.jsx)(n.code,{children:"Environment Records"}),"\uc5d0 \ub4f1\ub85d\uc774 \ub429\ub2c8\ub2e4. \uadf8\ub9ac\uace0 Global EC \uc774\uae30\uc5d0 ",(0,t.jsx)(n.code,{children:"Outer Environment Reference"}),"\ub294 null\uc774 \ub418\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["\uadf8\ub9ac\uace0 ",(0,t.jsx)(n.code,{children:"let"})," \ud0a4\uc6cc\ub4dc\ub97c \uac00\uc9c4 \ubcc0\uc218\ub4e4\uc774 ",(0,t.jsx)(n.code,{children:"Lexical Environment"}),"\uc758 Environment Records",(0,t.jsx)(n.code,{children:"\uc5d0 \ub4f1\ub85d\uc774 \ub429\ub2c8\ub2e4."}),"var",(0,t.jsx)(n.code,{children:"\ud0a4\uc6cc\ub4dc\ub294 undefined\ub85c \ucd08\uae30\ud654\uac00 \ub418\ub294 \ubc18\uba74\uc5d0 "}),"let` \ud0a4\uc6cc\ub4dc\ub294 \ucd08\uae30\ud654\uac00 \ub418\uc9c0\uc54a\uc544 \ud560\ub2f9\uc804 \ud638\ucd9c\ud558\uac8c \ub418\uba74 Reference Error\uac00 \ubc1c\uc0dd\ud558\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ec-2",src:i(9009).Z+"",width:"960",height:"540"})}),"\n",(0,t.jsx)(n.p,{children:"\ucf54\ub4dc\uac00 \uc2e4\ud589\uc774 \ub428\uc5d0 \ub530\ub77c \uac01 \ubcc0\uc218\uc5d0 \uac12\uc774 \ud560\ub2f9\ub418\uac8c \ub429\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ec-3",src:i(51469).Z+"",width:"960",height:"540"})}),"\n",(0,t.jsxs)(n.p,{children:["\uc774\ud6c4 block scope\ub97c \ub9cc\ub098\uac8c \ub418\uba74 ",(0,t.jsx)(n.code,{children:"Lexical Environment"}),"\uc758 ",(0,t.jsx)(n.code,{children:"Environment Records"}),"\uc758 \uc0c8\ub85c\uc6b4 area\ub97c \ub9cc\ub4e4\uc5b4 \uae30\uc874\uacfc \ub2e4\ub978 area\uc5d0 \uc2dd\ubcc4\uc790\ub97c \ub4f1\ub85d\ud558\uac8c \ub429\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc774\ub7ec\ud55c area\ub294 stack\uc73c\ub85c \uad00\ub9ac\ud558\uc5ec \ubcc0\uc218\uac00 \ucda9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ec-4",src:i(68789).Z+"",width:"960",height:"540"})}),"\n",(0,t.jsx)(n.p,{children:"block scope\uac00 \uc2e4\ud589\uc774 \ub418\uace0 \uc0c1\uc704 area\uc758 banana\uc5d0 \uac12\uc774 \ud560\ub2f9\ub429\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ec-5",src:i(84490).Z+"",width:"960",height:"540"})}),"\n",(0,t.jsxs)(n.p,{children:["\uc774\ud6c4 block scope\uc758 \uc2e4\ud589\uc774 \ub05d\ub098\uba74 ",(0,t.jsx)(n.code,{children:"Environment Records"})," block scope\uac00 \uc81c\uac70\ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ec-6",src:i(31021).Z+"",width:"960",height:"540"})}),"\n",(0,t.jsx)(n.h2,{id:"thisbinding",children:"ThisBinding"}),"\n",(0,t.jsx)(n.p,{children:"this\uc5d0 \ub300\ud574\uc11c\ub294 \ub2e4\ub978 \ud3ec\uc2a4\ud2b8\uc5d0\uc11c \ub2e4\ub8e8\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ucf54\uc5b4 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 (\uc815\uc7ac\ub0a8 \uc9c0\uc74c)"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://cabulous.medium.com/javascript-execution-context-lexical-environment-and-block-scope-part-3-fc2551c92ce0",children:"JavaScript execution context \u2014 lexical environment and block scope :: carson"})}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},9009:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/ec2-fec43b61cb056101e58a8766cb28316e.png"},51469:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/ec3-dbf7482bcd164b99fa20b47c237edd10.png"},68789:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/ec4-f46586a3d70e38e334104d9edf9070e4.png"},84490:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/ec5-8558861c31ff976c7c661de83bd87bbc.png"},31021:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/ec6-bbcf4df77f9b8d87b17cb22c0e3b6d16.png"},26736:(e,n,i)=>{i.d(n,{Zo:()=>o,ah:()=>c});var t=i(50959);const r=t.createContext({});function c(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function o({components:e,children:n,disableParentContext:i}){let o;return o=i?"function"==typeof e?e({}):e||l:c(e),t.createElement(r.Provider,{value:o},n)}}}]);