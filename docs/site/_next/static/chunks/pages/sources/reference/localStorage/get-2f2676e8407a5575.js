(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9542],{44188:(i,s,e)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/sources/reference/localStorage/get",function(){return e(19804)}])},19804:(i,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>k,useTOC:()=>d});var h=e(62540),n=e(7933),l=e(24759),r=e(98795),t=e(23312),a=e(56877);function d(i){return[{value:"API",id:"api",depth:2},{value:"Example",id:"example",depth:2}]}let k=(0,n.e)(function(i){let{toc:s=d(i)}=i,e={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...(0,r.R)(),...i.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(e.h1,{children:["get ",(0,h.jsx)(t.Ex,{type:"method",children:"Method"})]}),"\n",(0,h.jsxs)(e.p,{children:["Retrieves a value stored under the given key in local storage.\nThe retrieved value is parsed from its JSON string format into the expected type ",(0,h.jsx)(e.code,{children:"T"}),".\nIf the key does not exist or if parsing fails, returns ‘undefined’"]}),"\n",(0,h.jsxs)(e.p,{children:[(0,h.jsx)(e.code,{"data-language":"ts",children:(0,h.jsxs)(e.span,{"data-line":"",children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"@param "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"key"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": string "})]})}),(0,h.jsx)(e.br,{}),"\n","The specific key under which the value is stored in local storage"]}),"\n",(0,h.jsx)(e.p,{children:(0,h.jsx)(e.code,{"data-language":"ts",children:(0,h.jsxs)(e.span,{"data-line":"",children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"@returns "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"T"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" "})]})})}),"\n",(0,h.jsx)(e.h2,{id:s[0].id,children:s[0].value}),"\n",(0,h.jsx)(e.pre,{icon:a.$0,tabIndex:"0","data-language":"ts","data-word-wrap":"","data-copy":"",children:(0,h.jsx)(e.code,{children:(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"get"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(key: string): "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"T"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]})})}),"\n",(0,h.jsx)(e.h2,{id:s[1].id,children:s[1].value}),"\n",(0,h.jsx)(e.pre,{icon:a.$0,tabIndex:"0","data-language":"ts","data-word-wrap":"","data-copy":"",children:(0,h.jsxs)(e.code,{children:[(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {localStorage} "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '@bitfiber/rx'"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,h.jsx)(e.span,{children:" "}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" ls"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" localStorage"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"();"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" value"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ls."}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"get"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'key'"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]})]})})]})},"/sources/reference/localStorage/get",{filePath:"pages/sources/reference/localStorage/get.mdx",hasJsxInH1:!0,pageMap:l.O,frontMatter:{},title:"get Method"},"undefined"==typeof RemoteContent?d:RemoteContent.useTOC)}},i=>{var s=s=>i(i.s=s);i.O(0,[7933,4759,636,6593,8792],()=>s(44188)),_N_E=i.O()}]);