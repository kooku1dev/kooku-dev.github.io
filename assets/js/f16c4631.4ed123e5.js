"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[6222],{74628:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var s=t(11527),r=t(26736);const o={title:"05 HTTP \uc694\uccad"},d=void 0,a={id:"books/frameworkless-front-end-development/05",title:"05 HTTP \uc694\uccad",description:"\ud504\ub808\uc784\uc6cc\ud06c \uc5c6\ub294 \ubc29\uc2dd\uc73c\ub85c HTTP \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \uad6c\ucd95\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf8\ub2e4.",source:"@site/docs/books/frameworkless-front-end-development/05.md",sourceDirName:"books/frameworkless-front-end-development",slug:"/books/frameworkless-front-end-development/05",permalink:"/docs/books/frameworkless-front-end-development/05",draft:!1,unlisted:!1,editUrl:"https://github.com/kooku0/kooku0.github.io/edit/main/docs/books/frameworkless-front-end-development/05.md",tags:[],version:"current",frontMatter:{title:"05 HTTP \uc694\uccad"},sidebar:"books",previous:{title:"03 DOM \uc774\ubca4\ud2b8 \uad00\ub9ac",permalink:"/docs/books/frameworkless-front-end-development/03"},next:{title:"06 \ub77c\uc6b0\ud305",permalink:"/docs/books/frameworkless-front-end-development/06"}},l={},i=[{value:"\uac04\ub2e8\ud55c \uc5ed\uc0ac: AJAX\uc758 \ud0c4\uc0dd",id:"\uac04\ub2e8\ud55c-\uc5ed\uc0ac-ajax\uc758-\ud0c4\uc0dd",level:2},{value:"REST",id:"rest",level:2},{value:"\ucf54\ub4dc \uc608\uc81c",id:"\ucf54\ub4dc-\uc608\uc81c",level:2},{value:"XMLHttpRequest",id:"xmlhttprequest",level:3},{value:"Fetch",id:"fetch",level:3},{value:"Axios",id:"axios",level:3},{value:"\uc544\ud0a4\ud14d\ucc98 \uac80\ud1a0",id:"\uc544\ud0a4\ud14d\ucc98-\uac80\ud1a0",level:3},{value:"\uc801\ud569\ud55c HTTP API\ub97c \uc120\ud0dd\ud558\ub294 \ubc29\ubc95",id:"\uc801\ud569\ud55c-http-api\ub97c-\uc120\ud0dd\ud558\ub294-\ubc29\ubc95",level:2},{value:"\ud638\ud658\uc131",id:"\ud638\ud658\uc131",level:3},{value:"\ud734\ub300\uc131",id:"\ud734\ub300\uc131",level:3},{value:"\ubc1c\uc804\uc131",id:"\ubc1c\uc804\uc131",level:3},{value:"\ubcf4\uc548",id:"\ubcf4\uc548",level:3},{value:"\uc694\uc57d",id:"\uc694\uc57d",level:2}];function c(e){const n=Object.assign({p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",pre:"pre",code:"code",admonition:"admonition",h3:"h3",ol:"ol",li:"li",ul:"ul",img:"img"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\ud504\ub808\uc784\uc6cc\ud06c \uc5c6\ub294 \ubc29\uc2dd\uc73c\ub85c HTTP \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \uad6c\ucd95\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf8\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"\uac04\ub2e8\ud55c-\uc5ed\uc0ac-ajax\uc758-\ud0c4\uc0dd",children:"\uac04\ub2e8\ud55c \uc5ed\uc0ac: AJAX\uc758 \ud0c4\uc0dd"}),"\n",(0,s.jsx)(n.p,{children:"1999\ub144 \uc774\uc804\uc5d0\ub294 \uc11c\ubc84\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc62c \ud544\uc694\uac00 \uc788\ub294 \uacbd\uc6b0 \uc804\uccb4 \ud398\uc774\uc9c0\ub97c \ub2e4\uc2dc \ub85c\ub4dc\ud574\uc57c\ud588\ub2e4. 1999\ub144\uc5d0 \uc544\uc6c3\ub8e9, \uc9c0\uba54\uc77c\uacfc \uad6c\uae00 \uc9c0\ub3c4 \uac19\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\ub4e4\uc740 \ud398\uc774\uc9c0\ub97c \uc644\uc804\ud788 \ub2e4\uc2dc \ub85c\ub4dc\ud558\uc9c0 \uc54a\uace0 \ucd5c\ucd08 \ud398\uc774\uc9c0 \ub85c\ub4dc \ud6c4 \ud544\uc694\ud55c \ub370\uc774\ud130\ub9cc \uc11c\ubc84\uc5d0\uc11c \ub85c\ub4dc\ud558\ub294 \uc0c8\ub85c\uc6b4 \uae30\uc220\uc744 \uc0ac\uc6a9\ud558\uae30 \uc2dc\uc791\ud588\ub2e4. 2005\ub144 \uc81c\uc2dc \uc81c\uc784\uc2a4 \uac00\ub808\ud2b8\ub294 \uc774 \uae30\uc220\uc744 Asynchronous JavaScript and XML\uc758 \uc57d\uc5b4\uc778 AJAX\ub85c \uba85\uba85\ud588\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"AJAX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud575\uc2ec\uc740 XMLHttpRequest \uac1d\uccb4\ub2e4. W3C\ub294 2006\ub144 \uc774 \uac1d\uccb4\uc758 \ud45c\uc900 \uaddc\uaca9 \ucd08\uc548\uc744 \uc791\uc131\ud588\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"rest",children:"REST"}),"\n",(0,s.jsx)(n.p,{children:"REST\ub294 REpresentational State Transfer\uc758 \uc57d\uc790\ub85c \uc6f9 \uc11c\ube44\uc2a4\ub97c \ub514\uc790\uc778\ud558\uace0 \uac1c\ubc1c\ud558\ub294 \ubc29\ubc95\uc774\ub2e4. \ubaa8\ub4e0 REST API\uc758 \ucd94\uc0c1\ud654\ub294 \ub9ac\uc18c\uc2a4\uc5d0 \uc788\ub2e4. \ub3c4\uba54\uc778\uc744 \ub9ac\uc18c\uc2a4\ub85c \ubd84\ud560\ud574\uc57c \ud558\uba70 \uac01 \ub9ac\uc18c\uc2a4\ub294 \ud2b9\uc815 URI\ub85c \uc811\uadfc\ud574 \uc77d\uac70\ub098 \uc870\uc791\ud560 \uc218 \uc788\uc5b4\uc57c \ud55c\ub2e4."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{align:"center",children:"\ub3d9\uc791"}),(0,s.jsx)(n.th,{align:"center",children:"URI"}),(0,s.jsx)(n.th,{align:"center",children:"HTTP \uba54\uc11c\ub4dc"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"center",children:"\ubaa8\ub4e0 \uc0ac\uc6a9\uc790\uc758 \ub370\uc774\ud130 \uc77d\uae30"}),(0,s.jsx)(n.td,{align:"center",children:(0,s.jsx)(n.a,{href:"https://api.example.com/users/",children:"https://api.example.com/users/"})}),(0,s.jsx)(n.td,{align:"center",children:"GET"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"center",children:"ID\uac00 1\uc778 \uc0ac\uc6a9\uc790\uc758 \ub370\uc774\ud130 \uc77d\uae30"}),(0,s.jsx)(n.td,{align:"center",children:(0,s.jsx)(n.a,{href:"https://api.example.com/users/1",children:"https://api.example.com/users/1"})}),(0,s.jsx)(n.td,{align:"center",children:"GET"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"center",children:"\uc0c8\ub85c\uc6b4 \uc0ac\uc6a9\uc790 \uc0dd\uc131"}),(0,s.jsx)(n.td,{align:"center",children:(0,s.jsx)(n.a,{href:"https://api.example.com/users",children:"https://api.example.com/users"})}),(0,s.jsx)(n.td,{align:"center",children:"POST"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"center",children:"ID\uac00 1\uc778 \uc0ac\uc6a9\uc790 \ub370\uc774\ud130 \uad50\uccb4"}),(0,s.jsx)(n.td,{align:"center",children:(0,s.jsx)(n.a,{href:"https://api.example.com/users/1",children:"https://api.example.com/users/1"})}),(0,s.jsx)(n.td,{align:"center",children:"PUT"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"center",children:"ID\uac00 1\uc778 \uc0ac\uc6a9\uc790 \ub370\uc774\ud130 \uc5c5\ub370\uc774\ud2b8"}),(0,s.jsx)(n.td,{align:"center",children:(0,s.jsx)(n.a,{href:"https://api.example.com/users/1",children:"https://api.example.com/users/1"})}),(0,s.jsx)(n.td,{align:"center",children:"PATCH"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"center",children:"ID\uac00 1\uc778 \uc0ac\uc6a9\uc790 \ub370\uc774\ud130 \uc0ad\uc81c"}),(0,s.jsx)(n.td,{align:"center",children:(0,s.jsx)(n.a,{href:"https://api.example.com/users/1",children:"https://api.example.com/users/1"})}),(0,s.jsx)(n.td,{align:"center",children:"DELETE"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"\uc124\uba85\uc774 \ud544\uc694\ud55c \uc8fc\uc81c\ub294 \ub370\uc774\ud130 \uc5c5\ub370\uc774\ud2b8(PATCH)\uc640 \ub370\uc774\ud130(PUT)\uc758 \ucc28\uc774\uc810\uc774\ub2e4. PUT \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud560 \ub584\ub294 HTTP \uc694\uccad\uc758 \ubcf8\ubb38\uc5d0 \uc0c8\ub85c\uc6b4 \uc0ac\uc6a9\uc790\uc758 \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud574\uc57c \ud55c\ub2e4. PATCH\ub97c \uc0ac\uc6a9\ud560 \ub584\ub294 \uc774\uc804 \uc0c1\ud0dc\uc640\uc758 \ucc28\uc774\ub9cc \ud3ec\ud568\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"\ucf54\ub4dc-\uc608\uc81c",children:"\ucf54\ub4dc \uc608\uc81c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="HTTP \ud074\ub77c\uc774\uc5b8\ud2b8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uba54\uc778 \ucee8\ud2b8\ub864\ub7ec"',children:'import todos from "./todos.js";\n\nconst NEW_TODO_TEXT = "A simple todo Element";\n\nconst printResult = (action, result) => {\n  const time = new Date().toTimeString();\n  const node = document.createElement("p");\n  node.textContent = `${action.toUpperCase()}: ${JSON.stringify(\n    result\n  )} (${time})`;\n\n  document.querySelector("div").appendChild(node);\n};\n\nconst onListClick = async () => {\n  const result = await todos.list();\n  printResult("list todos", result);\n};\n\nconst onUpdateClick = async () => {\n  const list = await todos.list();\n\n  const { id } = list[0];\n\n  const newTodo = {\n    id,\n    completed: true,\n  };\n  const result = await todos.update(newTodo);\n  printResult("update todo", result);\n};\n\nconst onDeleteClick = async () => {\n  const list = await todos.list();\n  const { id } = list[0];\n\n  const result = await todos.delete(id);\n  printResult("delete todo", result);\n};\n\ndocument\n  .querySelector("button[data-list]")\n  .addEventListener("click", onListClick);\n\ndocument\n  .querySelector("button[data-add]")\n  .addEventListener("click", onAddClick);\n\ndocument\n  .querySelector("button[data-update]")\n  .addEventListener("click", onUpdateClick);\n\ndocument\n  .querySelector("button[data-delete]")\n  .addEventListener("click", onDeleteClick);\n'})}),"\n",(0,s.jsx)(n.p,{children:"\uc774 \ucee8\ud2b8\ub864\ub7ec\uc5d0\uc11c\ub294 HTTP \ud074\ub77c\ub9ac\uc5b8\ud2b8\ub97c \uc9c1\uc811 \uc0ac\uc6a9\ud558\ub294 \ub300\uc2e0 HTTP \uc694\uccad\uc744 todos \ubaa8\ub378 \uac1d\uccb4\uc5d0 \ub798\ud551\ud588\ub2e4. \uc774\ub7f0 \ucea1\uc290\ud654\ub294 \uc5ec\ub7ec \uac00\uc9c0 \uc774\uc720\ub85c \uc720\uc6a9\ud558\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"\ud55c \uac00\uc9c0 \uc774\uc720\ub294 \ud14c\uc2a4\ud2b8 \uac00\ub2a5\uc131\uc774\ub2e4. todos \uac1d\uccb4\ub97c \uc815\uc801 \ub370\uc774\ud130 \uc138\ud2b8\ub97c \ubc18\ud658\ud558\ub294 mock\uc73c\ub85c \ubc14\uafc0 \uc218 \uc788\ub2e4. \uc774\ub7f0 \uc2dd\uc73c\ub85c \ucee8\ud2b8\ub864\ub7ec\ub97c \ub3c5\ub9bd\uc801\uc73c\ub85c \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"\ub610 \ub2e4\ub978 \uc774\uc720\ub294 \uac00\ub3c5\uc131\uc774\ub2e4. \ubaa8\ub378 \uac1d\uccb4\ub294 \ucf54\ub4dc\ub97c \uc880 \ub354 \uba85\ud655\ud558\uac8c \ub9cc\ub4e0\ub2e4."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"\ucee8\ud2b8\ub864\ub7ec\uc5d0\uc11c HTTP \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \uc9c1\uc811 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294\ub2e4. \uc774\ub7f0 \ud568\uc218\ub294 \ubaa8\ub378 \uac1d\uccb4\uc5d0\uc11c \ucea1\uc290\ud654\ud558\ub294 \uac83\uc774 \uc88b\ub2e4."})}),"\n",(0,s.jsx)(n.h3,{id:"xmlhttprequest",children:"XMLHttpRequest"}),"\n",(0,s.jsx)(n.p,{children:"XMLHttpRequest\ub294 W3C\uac00 \ube44\ub3d9\uae30 HTTP \uc694\uccad\uc758 \ud45c\uc900 \ubc29\ubc95\uc744 \uc815\uc758\ud55c \uccab \ubc88\uc9f8 \uc2dc\ub3c4\uc774\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="XMLHttpRequest\ub97c \uc0ac\uc6a9\ud558\ub294 HTTP \ud074\ub9ac\uc774\uc5b8\ud2b8"',children:"const setHeaders = (xhr, headers) => {\n  Object.entries(headers).forEach(entry => {\n    const [name, value] = entry;\n\n    xhr.setRequestHeader(name, value)\n  });\n};\n\nconst parseResponse = xhr => {\n  const { status, responseText } = xhr;\n\n  let data\n  if (status !== 204) {\n    data = JSON.parse(responseText);\n  }\n\n  return {\n    status,\n    data\n  }\n}\n\nconst request = params = {\n  return new Promise((resolve, reject) => {\n    const xhr = new XMLHttpRequest();\n\n    const {\n      method = 'GET',\n      url,\n      headers = {},\n      body\n    } = params;\n\n    xhr.open(method, url);\n\n    setHeaders(xhr, headers);\n\n    xhr.send(JSON.stringify(body));\n\n    xhr.onerror = () => {\n      reject(new Error('HTTP Error'));\n    }\n    xhr.ontimeout = () => {\n      reject(new Error('Timeout Error'));\n    }\n    xhr.onload = () => resovle(parseResponse(xhr));\n  })\n}\n\nconst get = async (url, headers) => {\n  const response = await request({\n    url,\n    headers,\n    method: 'GET'\n  });\n\n  return response.data;\n}\n\nconst post = async (url, body, headers) => {\n  const response = await request({\n    url,\n    headers,\n    method: 'POST',\n    body\n  });\n\n  return response.data;\n}\n\nconst patch = async (url, body, headers) => {\n  const response = await request({\n    url,\n    headers,\n    method: 'PATCH',\n    body\n  });\n\n  return response.data;\n}\n\nconst deleteRequest = async (url, headers) => {\n  const response = await request({\n    url,\n    headers,\n    method: 'DELETE'\n  });\n\n  return response.data;\n}\n\nexport default {\n  get,\n  post,\n  put,\n  patch,\n  delete, deleteRequest\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"HTTP \ud074\ub77c\uc774\uc5b8\ud2b8\uc758 \ud575\uc2ec\uc740 request \uba54\uc11c\ub4dc\ub2e4. XMLHttpRequest\ub294 2006\ub144\uc5d0 \uc815\uc758\ub41c API\ub85c \ucf5c\ubc31\uc744 \uae30\ubc18\uc73c\ub85c \ud55c\ub2e4. \uc644\ub8cc\ub41c \uc694\uccad\uc5d0 \ub300\ud55c onload \ucf5c\ubc31, \uc624\ub958\ub85c \ub05d\ub098\ub294 HTTP\uc5d0 \ub300\ud55c onerror \ucf5c\ubc31\uacfc \ud0c0\uc784\uc544\uc6c3\ub41c \uc694\uccad\uc5d0 \ub300\ud55c ontimeout \ucf5c\ubc31\uc774 \uc788\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"HTTP \ud074\ub77c\uc774\uc5b8\ud2b8\uc758 \uacf5\uac1c API\ub294 \ud504\ub77c\ubbf8\uc2a4\ub97c \uae30\ubc18\uc73c\ub85c \ud55c\ub2e4. \ub530\ub77c\uc11c request \uba54\uc11c\ub4dc\ub294 \ud45c\uc900 XMLHttpRequest \uc694\uccad\uc744 \uc0c8\ub85c\uc6b4 Promise \uac1d\uccb4\ub85c \ubb36\ub294\ub2e4. \uacf5\uac1c \uba54\uc11c\ub4dc get, post, put, patch, delete\ub294 \ucf54\ub4dc\ub97c \ub354 \uc77d\uae30 \uc27d\uac8c \ud574\uc8fc\ub294 request \uba54\uc11c\ub4dc\uc758 \ub798\ud37c\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"\ub2e4\uc74c\uc740 XMLHttpRequest\ub97c \uc0ac\uc6a9\ud55c HTTP \uc694\uccad\uc758 \ud750\ub984\uc744 \ubcf4\uc5ec\uc900\ub2e4."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\uc0c8\ub85c\uc6b4 XMLHttpRequest \uac1d\uccb4 \uc0dd\uc131(new XMLHttpRequest())"}),"\n",(0,s.jsx)(n.li,{children:"\ud2b9\uc815 URL\ub85c \uc694\uccad\uc744 \ucd08\uae30\ud654(xhr.open(method, url))"}),"\n",(0,s.jsx)(n.li,{children:"\uc694\uccad(\ud5e4\ub354 \uc124\uc815, \ud0c0\uc784\uc544\uc6c3 \ub4f1)\uc744 \uad6c\uc131"}),"\n",(0,s.jsx)(n.li,{children:"\uc694\uccad \uc804\uc1a1(xhr.send(JSON.stringify(body)))"}),"\n",(0,s.jsx)(n.li,{children:"\uc694\uccad\uc774 \ub05d\ub0a0 \ub54c\uae4c\uc9c0 \ub300\uae30"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\uc694\uccad\uc774 \uc131\uacf5\uc801\uc73c\ub85c \ub05d\ub098\uba74 onload \ucf5c\ubc31 \ud638\ucd9c"}),"\n",(0,s.jsx)(n.li,{children:"\uc694\uccad\uc774 \uc624\ub958\ub85c \ub05d\ub098\uba74 onerror \ucf5c\ubc31 \ud638\ucd9c"}),"\n",(0,s.jsx)(n.li,{children:"\uc694\uccad\uc774 \ud0c0\uc784\uc544\uc6c3\uc73c\ub85c \ub05d\ub098\uba74 ontimeout \ucf5c\ubc31 \ud638\ucd9c"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"fetch",children:"Fetch"}),"\n",(0,s.jsx)(n.p,{children:"Fetch\ub294 \uc6d0\uaca9 \ub9ac\uc18c\uc2a4\uc5d0 \uc811\uadfc\ud558\uace0\uc790 \ub9cc\ub4e4\uc5b4\uc9c4 \uc0c8\ub85c\uc6b4 API\uc774\ub2e4. \uc774 API\uc758 \ubaa9\uc801\uc740 Requets\ub098 Response \uac19\uc740 \ub9ce\uc740 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ub300\ud55c \ud45c\uc900 \uc815\uc758\ub97c \uc81c\uacf5\ud558\ub294 \uac83\uc774\ub2e4. \uc774\ub7f0 \ubc29\uc2dd\uc73c\ub85c \uc774 \uac1d\uccb4\ub294 ServiceWorker\uc640 Cache \uac19\uc740 \ub2e4\ub978 API\uc640 \uc0c1\ud638 \uc6b4\uc6a9\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="Fetch API\ub97c \uae30\ubc18\uc73c\ub85c \ud558\ub294 HTTP \ud074\ub77c\uc774\uc5b8\ud2b8"',children:'const parsePresponse = async (response) => {\n  const { status } = response;\n  let data;\n  if (staus !== 204) {\n    data = await response.json();\n  }\n\n  return {\n    status,\n    data,\n  };\n};\n\nconst request = async (params) => {\n  const { method = "GET", url, headers = {}, body } = params;\n\n  const config = {\n    method,\n    headers: new window.Headers(headers),\n  };\n\n  if (body) {\n    config.body = JSON.stringify(body);\n  }\n\n  const response = await window.fetch(url, config);\n\n  return parseResponse(response);\n};\n\nconst get = async (url, headers) => {\n  const response = await request({\n    url,\n    headers,\n    method: "GET",\n  });\n\n  return response.dta;\n};\n\nconst post = async (url, body, headers) => {\n  const response = await request({\n    url,\n    headers,\n    method: "POST",\n    body,\n  });\n\n  return response.data;\n};\n\nconst put = async (url, body, headers) => {\n  const response = await request({\n    url,\n    headers,\n    method: "PUT",\n    body,\n  });\n\n  return response.data;\n};\n\nconst patch = async (url, body, headers) => {\n  const response = await request({\n    url,\n    headers,\n    method: "PATCH",\n    body,\n  });\n\n  return response.data;\n};\n\nconst deleteRequest = async (url, headers) => {\n  const response = await request({\n    url,\n    headers,\n    method: "DELETE",\n  });\n\n  return response.data;\n};\n\nexport default {\n  get,\n  post,\n  put,\n  patch,\n  delete: deleteRequest,\n};\n'})}),"\n",(0,s.jsx)(n.p,{children:"\uc774 HTTP \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 XMLHttpRequest\uc640 \ub3d9\uc77c\ud55c \uacf5\uc6a9 API\ub97c \uac00\uc9c4\ub2e4. \ub450 \ubc88\uc9f8 \ud074\ub77c\uc774\uc5b8\ud2b8\uc758 \ucf54\ub4dc\ub294 window.fetch\uac00 Promise \uac1d\uccb4\ub97c \ubc18\ud658\ud558\uae30 \ub54c\ubb38\uc5d0 \ud6e8\uc52c \ub354 \uc77d\uae30 \uc27d\ub2e4. \ub530\ub77c\uc11c \uc804\ud1b5\uc801\uc778 \ucf5c\ubc31 \uae30\ubc18\uc758 XMLHttpRequest \uc811\uadfc \ubc29\uc2dd\uc744 \ucd5c\uc2e0\uc758 \ud504\ub77c\ubbf8\uc2a4 \uae30\ubc18\uc73c\ub85c \ubcc0\ud658\ud558\uae30 \uc704\ud55c \ubcf4\uc77c\ub7ec\ud50c\ub808\uc774\ud2b8 \ucf54\ub4dc\uac00 \ud544\uc694\ud558\uc9c0 \uc54a\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"window.fetch\uc5d0\uc11c \ubc18\ud658\ub41c \ud504\ub77c\ubbf8\uc2a4\ub294 Response \uac1d\uccb4\ub97c resolve\ud55c\ub2e4. \uc774 \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud574 \uc11c\ubc84\uac00 \ubcf4\ub0b8 \uc751\ub2f5 \ubcf8\ubb38\uc744 \ucd94\ucd9c\ud560 \uc218 \uc788\ub2e4. \uc218\uc2e0\ub41c \ub370\uc774\ud130\uc758 \ud615\uc2dd\uc5d0 \ub530\ub77c text(), blob(), json() \uac19\uc740 \ub2e4\ub978 \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"axios",children:"Axios"}),"\n",(0,s.jsx)(n.p,{children:"axios\ub294 \uc624\ud508\uc18c\uc2a4 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc774\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"axios\uc640 \ub2e4\ub978 \ubc29\uc2dd\uacfc\uc758 \uac00\uc7a5 \ud070 \ucc28\uc774\ub294 \ube0c\ub77c\uc6b0\uc800\uc640 Node.js\uc5d0\uc11c \ubc14\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4\ub294 \uac83\uc774\ub2e4. axios\uc758 API\ub294 \ud504\ub77c\ubbf8\uc2a4\ub97c \uae30\ubc18\uc73c\ub85c \ud558\uace0 \uc788\uc5b4 Fetch API\uc640 \ub9e4\uc6b0 \uc720\uc0ac\ud558\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="axios API\ub97c \uae30\ubc18\uc73c\ub85c \ud558\ub294 HTTP \ud074\ub77c\uc774\uc5b8\ud2b8"',children:'const parsePresponse = async (response) => {\n  const { status } = response;\n  let data;\n  if (staus !== 204) {\n    data = await response.json();\n  }\n\n  return {\n    status,\n    data,\n  };\n};\n\nconst request = async (params) => {\n  const { method = "GET", url, headers = {}, body } = params;\n\n  const config = {\n    url,\n    method,\n    headers,\n    data: body,\n  };\n\n  return axios(config);\n};\n\nconst get = async (url, headers) => {\n  const response = await request({\n    url,\n    headers,\n    method: "GET",\n  });\n\n  return response.dta;\n};\n\nconst post = async (url, body, headers) => {\n  const response = await request({\n    url,\n    headers,\n    method: "POST",\n    body,\n  });\n\n  return response.data;\n};\n\nconst put = async (url, body, headers) => {\n  const response = await request({\n    url,\n    headers,\n    method: "PUT",\n    body,\n  });\n\n  return response.data;\n};\n\nconst patch = async (url, body, headers) => {\n  const response = await request({\n    url,\n    headers,\n    method: "PATCH",\n    body,\n  });\n\n  return response.data;\n};\n\nconst deleteRequest = async (url, headers) => {\n  const response = await request({\n    url,\n    headers,\n    method: "DELETE",\n  });\n\n  return response.data;\n};\n\nexport default {\n  get,\n  post,\n  put,\n  patch,\n  delete: deleteRequest,\n};\n'})}),"\n",(0,s.jsx)(n.p,{children:"\uc138 \uac00\uc9c0 HTTP \ud074\ub77c\uc774\uc5b8\ud2b8 \ubc84\uc804 \uc911\uc5d0\uc11c \uac00\uc7a5 \uc77d\uae30 \uc27d\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"\uc544\ud0a4\ud14d\ucc98-\uac80\ud1a0",children:"\uc544\ud0a4\ud14d\ucc98 \uac80\ud1a0"}),"\n",(0,s.jsx)(n.p,{children:"\uc138 \ubc84\uc804\uc758 \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \ub3d9\uc77c\ud55c \uacf5\uc6a9 API\ub97c \uac00\uc9c4\ub2e4. \uc774\ub7f0 \uc544\ud0a4\ud14d\ucc98 \ud2b9\uc131\uc73c\ub85c \uc778\ud574 \ucd5c\uc18c\ud55c\uc758 \ub178\ub825\uc73c\ub85c HTTP \uc694\uccad\uc5d0 \uc0ac\uc6a9\ub418\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img",src:t(83658).Z+"",width:"1117",height:"769"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"\uad6c\ud604\uc774 \uc544\ub2cc \uc778\ud130\ud398\uc774\uc2a4\ub85c \ud504\ub85c\uadf8\ub798\ubc0d\ud558\ub77c."}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\uac31 \uc624\ud504 \ud3ec"}),"\n"]})]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"\ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud560 \ub54c\ub294 \ud56d\uc0c1 \uc774\uc5d0 \ub300\ud55c \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0dd\uc131\ud558\ub77c. \ud544\uc694\uc2dc \uc0c8\ub85c\uc6b4 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub85c \uc27d\uac8c \ubcc0\uacbd\ud560 \uc218 \uc788\ub2e4."})}),"\n",(0,s.jsx)(n.h2,{id:"\uc801\ud569\ud55c-http-api\ub97c-\uc120\ud0dd\ud558\ub294-\ubc29\ubc95",children:"\uc801\ud569\ud55c HTTP API\ub97c \uc120\ud0dd\ud558\ub294 \ubc29\ubc95"}),"\n",(0,s.jsx)(n.h3,{id:"\ud638\ud658\uc131",children:"\ud638\ud658\uc131"}),"\n",(0,s.jsx)(n.p,{children:"\ube44\uc988\ub2c8\uc2a4\uc5d0\uc11c \uc778\ud130\ub137 \uc775\uc2a4\ud50c\ub85c\ub7ec\uc758 \uc9c0\uc6d0\uc774 \uc911\uc694\ud558\ub2e4\uba74 Fetch API\ub294 \ucd5c\uc2e0 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c\ub9cc \ub3d9\uc791\ud558\uae30 \ub54c\ubb38\uc5d0 axios\ub098 XMLHttpRequest\ub97c \uc0ac\uc6a9\ud574\uc57c\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"axios\ub294 \uc778\ud130\ub137 \uc775\uc2a4\ud50c\ub85c\ub7ec 11\uc744 \uc9c0\uc6d0\ud558\uc9c0\ub9cc \uc774\uc804 \ubc84\uc804\uc758 \uc778\ud130\ub137 \uc775\uc2a4\ud50c\ub85c\ub7ec\uc5d0\uc11c \ub3d9\uc791\ud574\uc57c \ud558\ub294 \uacbd\uc6b0 XMLHttpRequest\ub97c \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4. \ub610 \ub2e4\ub978 \uc635\uc158\uc73c\ub85c Fetch API\uc5d0 \ud3f4\ub9ac\ud544\uc744 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc9c0\ub9cc \uc778\ud130\ub137 \uc775\uc2a4\ud50c\ub85c\ub7ec\uc758 \uc9c0\uc6d0\uc744 \uc870\ub9cc\uac04 \uc911\ub2e8\ud560 \uacc4\ud68d\uc744 \uac16\uace0 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub9cc \uc774 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"\ud734\ub300\uc131",children:"\ud734\ub300\uc131"}),"\n",(0,s.jsx)(n.p,{children:"Fetch API\uc640 XMLHttpRequest\ub294 \ubaa8\ub450 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c\ub9cc \ub3d9\uc791\ud55c\ub2e4. Node.js\ub098 \ub9ac\uc561\ud2b8 \ub124\uc774\ud2f0\ube0c \uac19\uc740 \ub2e4\ub978 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud658\uacbd\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc2e4\ud589\ud574\uc57c \ud558\ub294 \uacbd\uc6b0 axios \uac00 \ub9e4\uc6b0 \uc88b\uc740 \uc194\ub8e8\uc158\uc774\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"\ubc1c\uc804\uc131",children:"\ubc1c\uc804\uc131"}),"\n",(0,s.jsx)(n.p,{children:"Fetch API\uc758 \uac00\uc7a5 \uc911\uc694\ud55c \uae30\ub2a5 \uc911 \ud558\ub098\ub294 Request\ub098 Response \uac19\uc740 \ub124\ud2b8\uc6cc\ud06c \uad00\ub828 \uac1d\uccb4\uc758 \ud45c\uc900 \uc815\uc758\ub97c \uc81c\uacf5\ud558\ub294 \uac83\uc774\ub2e4. \uc774 \ud2b9\uc131\uc740 ServiceWorker API\ub098 Cache API\uc640 \uc798\ub9de\uae30 \ub54c\ubb38\uc5d0 \ucf54\ub4dc\ubca0\uc774\uc2a4\ub97c \ube60\ub974\uac8c \ubc1c\uc804\uc2dc\ud0a4\uace0\uc790 \ud558\ub294 \uacbd\uc6b0 Fetch API\ub97c \ub9e4\uc6b0 \uc720\uc6a9\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\ub85c \ub9cc\ub4e4\uc5b4\uc900\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"\ubcf4\uc548",children:"\ubcf4\uc548"}),"\n",(0,s.jsx)(n.p,{children:"axios\uc5d0\ub294 \uad50\ucc28 \uc0ac\uc774\ud2b8 \uc694\uccad\uc704\uc870\ub098 XSRF\uc5d0 \ub300\ud55c \ubcf4\ud638 \uc2dc\uc2a4\ud15c\uc774 \ub0b4\uc7a5\ub3fc \uc788\ub2e4. XMLHttpRequest\ub098 Fetch API\ub97c \uacc4\uc18d \uc0ac\uc6a9\ud558\uba74\uc11c \uc774\ub7f0 \uc885\ub958\uc758 \ubcf4\uc548 \uc2dc\uc2a4\ud15c\uc744 \uad6c\ud604\ud574\uc57c \ud55c\ub2e4\uba74 \uc774 \uc8fc\uc81c\uc5d0 \ub300\ud55c axios \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub97c \uc0b4\ud3b4\ubcfc \uac83\uc744 \ucd94\ucc9c\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"\uc694\uc57d",children:"\uc694\uc57d"}),"\n",(0,s.jsx)(n.p,{children:"HTTP \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \uad6c\ud604\ud558\ub294 \uc138 \uac00\uc9c0 \ub2e4\ub978 \ubc29\ubc95\uc744 \ubc30\uc6e0\ub2e4. \uc55e\uc758 \ub450 \uac1c\ub294 \ud504\ub808\uc784\uc6cc\ud06c \uc5c6\uc774 \ud45c\uc900 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uae30\ubc18\uc73c\ub85c \ud55c\ub2e4. \uc138 \ubc88\uc9f8\ub294 axios\ub77c\ub294 \uc624\ud508\uc18c\uc2a4 \ud504\ub85c\uc81d\ud2b8\ub97c \uae30\ubc18\uc73c\ub85c \ud55c\ub2e4."})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},83658:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/5.4-e6c7480b9d0e55e81d549e376f59d122.jpeg"},26736:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>o});var s=t(50959);const r=s.createContext({});function o(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||d:o(e),s.createElement(r.Provider,{value:a},n)}}}]);