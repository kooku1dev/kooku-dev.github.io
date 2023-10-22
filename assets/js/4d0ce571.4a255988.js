"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[3387],{65375:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=t(11527),c=t(26736);const i={title:"React v18 Concurrent mode",date:new Date("2022-03-17T00:00:00.000Z"),tags:["react"],keywords:["react 18","react","concurrent mode"]},o=void 0,a={permalink:"/blog/react18-concurrent-mode",editUrl:"https://github.com/kooku0/kooku0.github.io/edit/main/blog/react18-concurrent-mode.md",source:"@site/blog/react18-concurrent-mode.md",title:"React v18 Concurrent mode",description:"\uc544\uc9c1 React 18\uc774 \uc815\uc2dd \ub9b4\ub9ac\uc988\ub418\uc9c0 \uc54a\uc558\uc9c0\ub9cc React 18 Plan\uc744 \ud1b5\ud574 \uc5b4\ub5a4 \uae30\ub2a5\ub4e4\uc774 \ucd94\uac00\ub418\ub294\uc9c0 \ub300\ubd80\ubd84 \uc54c\uace0 \uc788\uc744 \uac83\uc774\ub77c\uace0 \uc0dd\uac01\ub429\ub2c8\ub2e4. \uc544\ub9c8 \uc2e4\uc81c\ub85c \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \ud300\ub4e4\ub3c4 \uc788\uc744 \uac83 \uac19\ub124\uc694.",date:"2022-03-17T00:00:00.000Z",formattedDate:"2022\ub144 3\uc6d4 17\uc77c",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:10.685,hasTruncateMarker:!0,authors:[],frontMatter:{title:"React v18 Concurrent mode",date:"2022-03-17T00:00:00.000Z",tags:["react"],keywords:["react 18","react","concurrent mode"]},unlisted:!1,prevItem:{title:"\ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0 SOLID \uc801\uc6a9\ud558\uae30",permalink:"/blog/\ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0-solid-\uc801\uc6a9\ud558\uae30"},nextItem:{title:"auto\ub85c \ubc84\uc804\uad00\ub9ac\uc640 \ubc30\ud3ec\uad00\ub9ac\ud558\uae30",permalink:"/blog/auto\ub85c-\ubc84\uc804\uad00\ub9ac\uc640-\ubc30\ud3ec\uad00\ub9ac\ud558\uae30"}},l={authorsImageUrls:[]},s=[{value:"Blocking vs Interruptible Rendering",id:"blocking-vs-interruptible-rendering",level:2},{value:"Interruptible Rendering",id:"interruptible-rendering",level:3},{value:"\uc758\ub3c4\uc801\uc778 \ub85c\ub529 \uc2dc\ud000\uc2a4",id:"\uc758\ub3c4\uc801\uc778-\ub85c\ub529-\uc2dc\ud000\uc2a4",level:3},{value:"\ub3d9\uc2dc\uc131",id:"\ub3d9\uc2dc\uc131",level:3},{value:"\uc0dd\uc0b0\uc5d0 \uc5f0\uad6c\ub97c \ud22c\uc785",id:"\uc0dd\uc0b0\uc5d0-\uc5f0\uad6c\ub97c-\ud22c\uc785",level:3}];function d(e){const n=Object.assign({p:"p",a:"a",blockquote:"blockquote",admonition:"admonition",h2:"h2",h3:"h3",strong:"strong",ul:"ul",li:"li"},(0,c.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\uc544\uc9c1 React 18\uc774 \uc815\uc2dd \ub9b4\ub9ac\uc988\ub418\uc9c0 \uc54a\uc558\uc9c0\ub9cc ",(0,r.jsx)(n.a,{href:"https://ko.reactjs.org/blog/2021/06/08/the-plan-for-react-18.html",children:"React 18 Plan"}),"\uc744 \ud1b5\ud574 \uc5b4\ub5a4 \uae30\ub2a5\ub4e4\uc774 \ucd94\uac00\ub418\ub294\uc9c0 \ub300\ubd80\ubd84 \uc54c\uace0 \uc788\uc744 \uac83\uc774\ub77c\uace0 \uc0dd\uac01\ub429\ub2c8\ub2e4. \uc544\ub9c8 \uc2e4\uc81c\ub85c \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \ud300\ub4e4\ub3c4 \uc788\uc744 \uac83 \uac19\ub124\uc694."]}),"\n",(0,r.jsx)(n.p,{children:"react-18-plan \ube14\ub85c\uadf8\uc758 \uccab \ubb38\ub2e8\uc744 \uc77d\uc5b4\ubcf4\uba74 react 18\uc5d0\uc11c \uc5b4\ub5a4 \ubd80\ubd84\uc744 \uac15\uc870\ud558\uace0 \uc788\ub294\uc9c0 \ub098\uc635\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"When it\u2019s released, React 18 will include out-of-the-box improvements (like automatic batching), new APIs (like startTransition), and a new streaming server renderer with built-in support for React.lazy."}),"\n",(0,r.jsx)(n.p,{children:'\uc774\ub7ec\ud55c \uae30\ub2a5\ub4e4\uc774 \uac00\ub2a5\ud55c\uac74 "concurrent rendering"\uc774\ub77c\uace0 \ubd80\ub974\ub294 opt-in \ub9e4\ucee4\ub2c8\uc998\uc774 React 18\uc5d0 \ucd94\uac00\ub418\uc5c8\uae30 \ub54c\ubb38\uc774\ub2e4. \uc774\uac83\uc740 React\uac00 \ub3d9\uc2dc\uc5d0 \uc5ec\ub7ec \ubc84\uc804\uc758 UI\ub97c \uc900\ube44\ud560 \uc218 \uc788\uac8c\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubcc0\ud654\ub294 \uc778\uc9c0 \ubc94\uc704 \ubc16\uc5d0 \uc788\uc9c0\ub9cc \uc2e4\uc81c \uc131\ub2a5\uacfc \uc778\uc9c0 \uc131\ub2a5\uc744 \ubaa8\ub450 \uac1c\uc120\ud560 \uc218 \uc788\ub294 \uc0c8\ub85c\uc6b4 \uac00\ub2a5\uc131\uc744 \uc5f4\uc5b4\uc90d\ub2c8\ub2e4.'}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'\uae00\uc5d0\uc11c "concurrent rendering"\uc744 \uac15\uc870\ud558\uace0 \uc788\ub4ef\uc774 \uc774\ubc88 v18\uc758 \ud575\uc2ec\uc8fc\uc81c\ub294 concurrent rendering\uc785\ub2c8\ub2e4.'}),"\n",(0,r.jsx)(n.p,{children:"React v16.3\uc5d0 \ub098\uc628 Fiber\ub3c4 \uadf8\ub807\uace0 \uc774\ubc88 v18\uc5d0 \uc62c\ub77c\uc628 Concurrent mode\uc5d0\ub3c4 \uadf8\ub807\ub4ef\uc774 UX\uc744 \ub9e4\uc6b0 \uc911\uc2dc\ud558\uc5ec \uc9c0\uc18d\uc801\uc73c\ub85c \uac1c\uc120\uc2dc\ud0a4\ub294 \ub178\ub825\uc744 \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uadf8\ub7ec\ud55c \ub178\ub825\uc5d0\ub294 update-rendering\uc744 \ud560\ub54c \ubc1c\uc0dd\ud558\ub294 recoiliation\uc758 \uc2dc\uac04\uc774 \uc624\ub798\uac78\ub9ac\uba74 UX\ub97c \ud574\uce58\ub294\ub370 \uc774\ub97c \uc5b4\ub5bb\uac8c \ucd5c\uc801\ud654\ud560 \uc218 \uc788\uc744\uae4c? \ub77c\ub294 \ubb38\uc81c\ud574\uacb0\uc774 \ubc14\ud0d5\uc774 \ub41c \uac83 \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"React Fiber\uc758 \uacbd\uc6b0 Reconciliation\uc5d0\uc11c \uc2dc\uac04\uc774 \uc624\ub798\uac78\ub9b4 \uacbd\uc6b0 main-thread\ub97c \uacc4\uc18d \uc810\uc720\ud558\uace0 \uc788\uc73c\ub2c8 RequestAnimationFrame Queue\uc5d0 \uc313\uc5ec \uc788\ub294 \uc791\uc5c5\ub4e4\uc774 \ud654\uba74\uc8fc\uc0ac\uc728\uc5d0 \ub530\ub77c \uc81c\ub300\ub85c \uc2e4\ud589\ub418\uc9c0\uc54a\uc544 \ubc84\ubc85\uc774\ub294 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uace0\uc790 \ub098\uc654\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\uc774\ubc88 Concurrent mode\uc758 \uacbd\uc6b0 RequestAnimationFrame\uc5d0\uc11c \ud655\uc7a5\ud558\uc5ec \ub2e4\ub978 \uc720\uc800 \uc774\ubca4\ud2b8\ub4e4\ub3c4 \uc81c\ub300\ub85c \ubcf4\uc5ec\uc8fc\uc9c0 \uc54a\ub294 \ubb38\uc81c\ub4e4\uc744 \ud574\uacb0\ud558\ub824\uace0 \ud588\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc790\uba74 \ub80c\ub354\ub9c1\uc774 \uc9c4\ud589\uc911\uc77c \ub54c \uc720\uc800\uac00 input\ucc3d\uc5d0 key\ub97c \uc785\ub825\ud574\ub3c4 \uc785\ub825\ud55c key\uac00 \ubcf4\uc774\uc9c0 \uc54a\ub294\uacbd\uc6b0 (Blocking rendering\uc758 \ubb38\uc81c)\uac00 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"React \ud300\uc758 \uc9c0\uc18d\uc801\uc778 \uad00\uc2ec\uacfc \ub178\ub825\uc73c\ub85c \uc704\uc758 \ubb38\uc81c\uc810\ub4e4\uc744 \ud574\uacb0\ud558\ub824\uace0 \ud588\ub358 \uac83 \uac19\uace0 \uc774\ubc88 v18\uc5d0 concurrent mode\ub97c \uc801\uc6a9\ud568\uc73c\ub85c\uc368 \ub3c4\uc785\ub418\ub294 \ub9e4\uc6b0 \uc720\uc6a9\ud55c \uae30\ub2a5\ub4e4\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\ub2e4\uc74c\uc73c\ub85c \uacf5\uc2dd\ubb38\uc11c\uc5d0 \uc62c\ub77c\uc654\ub358 Concurrent \ubaa8\ub4dc \uc18c\uac1c \ud398\uc774\uc9c0\ub97c \uc77d\uae30 \uc27d\uac8c \uc81c\uac00 \uc870\uae08 \uac00\ub2e4\ub4ec\uc5b4 \ubcf4\uc558\uc2b5\ub2c8\ub2e4. \uc544\uc9c1 \uc77d\uc5b4\ubcf4\uc9c0 \uc54a\uc73c\uc168\ub2e4\uba74 \uc77d\uc5b4\ubcf4\uc2dc\uba74 \uc88b\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://ko.reactjs.org/docs/concurrent-mode-intro.html",children:"Concurrent \ubaa8\ub4dc \uc18c\uac1c(\uc2e4\ud5d8 \ub2e8\uacc4)"})," \ud3ec\uc2a4\ud305\uc744 \ucc38\uace0\ud558\uc5ec \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4."]})}),"\n",(0,r.jsx)(n.h2,{id:"blocking-vs-interruptible-rendering",children:"Blocking vs Interruptible Rendering"}),"\n",(0,r.jsx)(n.p,{children:'React\ub97c \ud3ec\ud568\ud55c UI \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc740 \ud654\uba74\uc758 \ub80c\ub354\ub9c1(create or update)\uc744 \uc2dc\uc791\ud558\uba74 \ub2e4\ub978 \uc77c\uc744 \uc218\ud589\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uac83\uc744 "blocking rendering"\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4.'}),"\n",(0,r.jsx)(n.p,{children:"Concurrent \ubaa8\ub4dc\uc5d0\uc11c\ub294, \ub80c\ub354\ub9c1\uc774 \ucc28\ub2e8\ub418\uc9c0 \uc54a\uace0 \uc778\ud130\ub7fd\ud2b8\uac00 \uac00\ub2a5\ud574\uc9d1\ub2c8\ub2e4. \uc774\ub294 UX\ub97c \uac1c\uc120\ud558\uba70 \uc774\uc804\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc5c8\ub358 \uae30\ub2a5\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ub9cc\ub4e4\uc5b4\uc90d\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h3,{id:"interruptible-rendering",children:"Interruptible Rendering"}),"\n",(0,r.jsx)(n.p,{children:"\ud544\ud130\ub9c1 \uac00\ub2a5\ud55c \uc81c\ud488 \ubaa9\ub85d \ud398\uc774\uc9c0\ub97c \uc0dd\uac01\ud574\uc138\uc694. \ud544\ud130\uc5d0 \uc785\ub825\uc744 \ud560 \ub54c\ub9c8\ub2e4 \ubc84\ubc85\uac70\ub9bc\uc744 \ub290\ub080 \uc801\uc774 \uc788\ub098\uc694? \uc81c\ud488 \ubaa9\ub85d\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \uba87\uba87 \uc791\uc5c5\uc5d0\uc11c \uc774\ub294 \ubd88\uac00\ud53c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\uba74 \uc5b4\ub5bb\uac8c \uc774\ub7f0 \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\uc744\uae4c\uc694?"}),"\n",(0,r.jsx)(n.p,{children:"\ubc84\ubc85\uac70\ub9bc\uc744 \ud574\uacb0\ud558\ub294 \ud55c \uac00\uc9c0 \ubc29\ubc95\uc740 \uc785\ub825\uc744 Debouncing \ud558\ub294 \uac83\uc785\ub2c8\ub2e4. Debouncing\ud558\uba74, \uc0ac\uc6a9\uc790\uac00 \ud0c0\uc774\ud551\uc744 \uba48\ucdb0\uc57c\ub9cc \ubaa9\ub85d\uc744 \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc, \ud0c0\uc774\ud551\ud558\uace0 \uc788\uc744 \ub54c UI\uac00 \uc5c5\ub370\uc774\ud2b8\ud558\uc9c0 \uc54a\ub294 \uc0ac\uc2e4\uc774 \uc2e4\ub9dd\uc2a4\ub7ec\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc5d0 \ub300\ud55c \ub300\uc548\uc73c\ub85c, \uc785\ub825\uc744 throutle\ud558\uc5ec \ubaa9\ub85d\uc744 \ucd5c\ub300 \ube48\ub3c4\uc218\ub85c \uc5c5\ub370\uc774\ud2b8 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.(\uc608\ub97c\ub4e4\uc5b4 200ms \ub9c8\ub2e4) \uadf8\ub7ec\ub098 \uc800\uc804\ub825 \uc7a5\uce58\uc5d0\uc11c\ub294 \uc5ec\uc804\ud788 \ubc84\ubc85\uac70\ub9b4 \uac83\uc785\ub2c8\ub2e4. Debouncing & Throutling \ubaa8\ub450 \ucd5c\uc801\uc774 \uc544\ub2cc UX\ub97c \uac00\uc838\ub2e4\uc90d\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\ubc84\ubc85\uac70\ub9ac\ub294 \uc774\uc720\ub294 \uac04\ub2e8\ud569\ub2c8\ub2e4. \ub80c\ub354\ub9c1\uc774 \uc2dc\uc791\ub418\uba74 \uc911\uac04\uc5d0 \ub2e4\ub978 \uc791\uc5c5\uc774 \ub07c\uc5b4\ub4e4 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uadf8\ub798\uc11c \ub80c\ub354\ub9c1\uc774 \uc9c4\ud589\uc911\uc778 \uacbd\uc6b0 \ud14d\uc2a4\ud2b8 \uc785\ub825\uc758 \ud0a4\ub97c \ub20c\ub7ec\ub3c4 \uc785\ub825\ub41c \ud0a4\uac00 input\ucc3d\uc5d0 \ubc14\ub85c \ubcf4\uc774\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774\ub7f0 blocking rendering\uc744 \uc0ac\uc6a9\ud558\uace0 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc77c\uc815\ub7c9 \uc791\uc5c5\uc744 \ud558\uba74 \ud56d\uc0c1 \ubc84\ubc85\uc784\uc774 \ubc1c\uc0dd\ud560 \uac83 \uc785\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Concurrent \ubaa8\ub4dc\ub294 \ub80c\ub354\ub9c1\uc744 \uc778\ud130\ub7fd\ud2b8 \uac00\ub2a5\ud558\ub3c4\ub85d \ub9cc\ub4e6\uc73c\ub85c\uc368 \uadfc\ubcf8\uc801\uc778 \ubb38\uc81c\ub97c \uc218\uc815\ud569\ub2c8\ub2e4."})," \uc774\ub7ec\ud55c \uc0ac\uc2e4\uc740 \uc0ac\uc6a9\uc790\uac00 \ub2e4\ub978 \ud0a4\ub97c \ub204\ub97c \ub54c, React\ub294 \ube0c\ub77c\uc6b0\uc800\uc5d0 \ud14d\uc2a4\ud2b8 \uc785\ub825\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \uac83\uc744 \ucc28\ub2e8\ud560 \ud544\uc694\uac00 \uc5c6\uc74c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \ub300\uc2e0 React\ub294 \ube0c\ub77c\uc6b0\uc800\uac00 \uc785\ub825\uc5d0 \ub300\ud55c \uc5c5\ub370\uc774\ud2b8\ub97c paint\ud558\uace0 \uba54\ubaa8\ub9ac \ub0b4\uc5d0 \uc788\ub294 \uc5c5\ub370\uc774\ud2b8 \ubaa9\ub85d\uc744 \uacc4\uc18d \ub80c\ub354\ub9c1\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4. \ub80c\ub354\ub9c1\uc774 \ub05d\ub098\uba74 React\ub294 DOM\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\uace0 \ubcc0\uacbd \uc0ac\ud56d\ub4e4\uc744 \ud654\uba74\uc5d0 \ubc18\uc601\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.p,{children:'\uac1c\ub150\uc0c1\uc73c\ub85c, React\uac00 "\ube0c\ub79c\uce58\uc5d0\uc11c" \ubaa8\ub4e0 \uc5c5\ub370\uc774\ud2b8\ub97c \uc900\ube44\ud558\ub294 \uac83\uc73c\ub85c \uc0dd\uac01\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Concurrent\ubaa8\ub4dc\uc5d0\uc11c React\ub294 \ub354 \uc911\uc694\ud55c \uc77c\uc744 \uc704\ud574 \uc9c4\ud589 \uc911\uc778 \uc5c5\ub370\uc774\ud2b8\ub97c \uc911\ub2e8\ud560 \uc218 \uc788\uace0 \uadf8\ub9ac\uace0\uc11c \uc774\uc804 \uc791\uc5c5\uc73c\ub85c \ub3cc\uc544\uac08 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.'}),"\n",(0,r.jsx)(n.p,{children:"Concurrent\ubaa8\ub4dc \uae30\uc220\uc740 UI\uc5d0\uc11c \ub514\ubc14\uc6b4\uc2f1\uacfc \uc2a4\ub85c\ud2c0\ub9c1\uc758 \ud544\uc694\uc131\uc744 \uc904\uc785\ub2c8\ub2e4. \ub80c\ub354\ub9c1\uc740 \uc911\ub2e8\uc774 \uac00\ub2a5\ud558\uae30 \ub54c\ubb38\uc5d0 \ubc84\ubc85\uac70\ub9bc\uc744 \ud53c\ud558\uace0\uc790 \uc77c\ubd80\ub7ec \uc791\uc5c5\uc744 \uc9c0\uc5f0\uc2dc\ud0ac \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h3,{id:"\uc758\ub3c4\uc801\uc778-\ub85c\ub529-\uc2dc\ud000\uc2a4",children:"\uc758\ub3c4\uc801\uc778 \ub85c\ub529 \uc2dc\ud000\uc2a4"}),"\n",(0,r.jsxs)(n.p,{children:['\uc571\uc5d0\uc11c \ub450 \ud654\uba74 \uc0ac\uc774\ub97c \ud0d0\uc0c9\ud55c\ub2e4\uace0 \uac00\uc815\ud558\uaca0\uc2b5\ub2c8\ub2e4. \uacbd\uc6b0\uc5d0 \ub530\ub77c\uc11c, \uc0c8 \ud654\uba74\uc5d0\uc11c \uc0ac\uc6a9\uc790\uc5d0\uac8c "\ucda9\ubd84\ud788 \uc88b\uc740" \ub85c\ub529 state\ub97c \ubcf4\uc5ec\uc8fc\uae30 \uc704\ud574 \ud544\uc694\ud55c \ucf54\ub4dc\uc640 \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc624\uc9c0 \ubabb \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ube48 \ud654\uba74\uc774\ub098 \ud070 \uc2a4\ud53c\ub108\ub85c \uc804\ud658\ud558\ub294 \uac83\uc740 \uc5b4\ub824\uc6b4 \uc77c\uc774 \ub420 \uc218 \uc788\uc9c0\ub9cc \uc77c\ubc18\uc801\uc73c\ub85c \ud544\uc694\ud55c \ucf54\ub4dc\uc640 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \ub370\uc5d0 \uadf8\ub807\uac8c \ub9ce\uc740 \uc2dc\uac04\uc774 \uc18c\uc694\ub418\uc9c0\uc54a\uc2b5\ub2c8\ub2e4. ',(0,r.jsx)(n.strong,{children:'React\uac00 \uae30\uc874 \ud654\uba74\uc5d0\uc11c \uc870\uae08 \ub354 \uc624\ub798 \uc720\uc9c0\ud560 \uc218 \uc788\uace0 \uc0c8 \ud654\uba74\uc744 \ubcf4\uc5ec\uc8fc\uae30 \uc804\uc5d0 "\uc548\uc88b\uc740" \ub85c\ub529 state\ub97c "\uac74\ub108\ub74c \uc218" \uc788\ub2e4\uba74 \ub354 \uc88b\uc9c0 \uc54a\uc744\uae4c\uc694?'})]}),"\n",(0,r.jsx)(n.p,{children:"Concurrent \ubaa8\ub4dc\uc5d0\uc11c\ub294 \uc774 \uae30\ub2a5\uc774 \ub0b4\uc7a5\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. React\ub294 \uba3c\uc800 \uba54\ubaa8\ub9ac\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \ud654\uba74\uc744 \uc900\ube44\ud558\uae30 \uc2dc\uc791\ud569\ub2c8\ub2e4. \uadf8\ub798\uc11c React\ub294 \ub354 \ub9ce\uc740 \ucf58\ud150\uce20\ub97c \ubd88\ub7ec\uc62c \uc218 \uc788\ub3c4\ub85d DOM\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\uae30 \uc804\uc5d0 \uae30\ub2e4\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. (\uc989 \uc0c8\ub85c\uc6b4 \ud654\uba74\uc744 \uc900\ube44\ud558\uae30 \uc804\uae4c\uc9c0 \uc774\uc804 \ud654\uba74\uc744 \uacc4\uc18d \ud45c\uc2dc\ud569\ub2c8\ub2e4.)"}),"\n",(0,r.jsx)(n.h3,{id:"\ub3d9\uc2dc\uc131",children:"\ub3d9\uc2dc\uc131"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Concurrent\ubaa8\ub4dc\uc5d0\uc11c React\ub294 \uc5ec\ub7ec \uc791\uc5c5\uc744 \ub3d9\uc2dc\uc5d0, \ub2e4\ub978 \ud300\uc6d0\ub4e4\uc774 \uac01\uc790 \uc791\uc5c5\ud560 \uc218 \uc788\ub294 \ube0c\ub79c\uce58\ucc98\ub7fc, \uc9c4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'CPU \ubc14\uc6b4\ub4dc \uc5c5\ub370\uc774\ud2b8\uc758 \uacbd\uc6b0 Concurrency\ub294 \ub354\uc6b1 \uae34\uae09\ud55c \uc5c5\ub370\uc774\ud2b8\uac00 \uc774\ubbf8 \uc2dc\uc791\ud55c \ub80c\ub354\ub9c1\uc744 "\uc911\ub2e8" \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'}),"\n",(0,r.jsx)(n.li,{children:"IO \ubc14\uc6b4\ub4dc \uc5c5\ub370\uc774\ud2b8(\uc608\ub97c \ub4e4\uc5b4 \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \ucf54\ub4dc\ub098 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \uac83)\uc758 \uacbd\uc6b0 Concurrency\ub294 \ubaa8\ub4e0 \ub370\uc774\ud130\uac00 \ub3c4\ub2ec\ud558\uae30 \uc804\uc5d0 React\uac00 \uba54\ubaa8\ub9ac\uc5d0\uc11c \ub80c\ub354\ub9c1\uc744 \uc2dc\uc791\ud560 \uc218 \uc788\uc73c\uba70 \ube48 \ub85c\ub529 state\ud45c\uc2dc\ub97c \ubb34\uc2dc\ud560 \uc218 \uc788\uc74c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'React\ub294 \ud734\ub9ac\uc2a4\ud2f1\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc5c5\ub370\uc774\ud2b8\uc758 "\uae09\ud568" \uc815\ub3c4\ub97c \uacb0\uc815\ud558\uace0 \uba87 \uc904\uc758 \ucf54\ub4dc\ub97c \uc218\uc815\ud574\uc11c \uc0ac\uc6a9\uc790\uac00 \ubaa8\ub4e0 \uc0c1\ud638\uc791\uc6a9\uc5d0 \ub300\ud574 \uc6d0\ud558\ub294 \uc0ac\uc6a9\uc790\uc758 \uacbd\ud5d8\uc744 \uc5bb\uc744 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4.'}),"\n",(0,r.jsx)(n.h3,{id:"\uc0dd\uc0b0\uc5d0-\uc5f0\uad6c\ub97c-\ud22c\uc785",children:"\uc0dd\uc0b0\uc5d0 \uc5f0\uad6c\ub97c \ud22c\uc785"}),"\n",(0,r.jsx)(n.p,{children:'Concurrent\ubaa8\ub4dc \ub0b4\ubd80\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \ub2e4\ub978 "\uc6b0\uc120\uc21c\uc704"\ub294 \uc0ac\ub78c\ub4e4\uc758 \uc778\uc2dd\uc5d0 \ub300\ud55c \uc870\uc0ac\uc5d0\uc11c\uc758 \uc0c1\ud638 \uc791\uc6a9\uc5d0 \ub300\ud55c \ubd80\ubd84\uacfc \ub300\ub7b5\uc801\uc73c\ub85c \uc77c\uce58\ud569\ub2c8\ub2e4.'}),"\n",(0,r.jsx)(n.p,{children:"Concurrent \ubaa8\ub4dc\ub97c \ud1b5\ud55c \ubaa9\uc801\uc740 UI \uc870\uc0ac \uacb0\uacfc\ub97c \ucd94\uc0c1\ud654\uc2dc\ud0a4\uace0 \uadf8\uac83\uc744 \uc0ac\uc6a9\ud560 \uad00\uc6a9\uc801\uc778 \ubc29\ubc95\uc744 \uc81c\uacf5\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},26736:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>i});var r=t(50959);const c=r.createContext({});function i(e){const n=r.useContext(c);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||o:i(e),r.createElement(c.Provider,{value:a},n)}}}]);