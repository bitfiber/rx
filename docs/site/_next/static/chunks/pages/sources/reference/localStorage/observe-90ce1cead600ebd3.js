(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1598],{39324:(i,s,e)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/sources/reference/localStorage/observe",function(){return e(35228)}])},35228:(i,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>k,useTOC:()=>d});var h=e(62540),l=e(7933),n=e(24759),r=e(98795),a=e(23312),t=e(56877);function d(i){return[{value:"API",id:"api",depth:2},{value:"Example",id:"example",depth:2}]}let k=(0,l.e)(function(i){let{toc:s=d(i)}=i,e={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...(0,r.R)(),...i.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(e.h1,{children:["observe ",(0,h.jsx)(a.Ex,{type:"method",children:"Method"})]}),"\n",(0,h.jsx)(e.p,{children:"Returns an observable that emits value changes stored under the given key in local storage"}),"\n",(0,h.jsxs)(e.p,{children:[(0,h.jsx)(e.code,{"data-language":"ts",children:(0,h.jsxs)(e.span,{"data-line":"",children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"@param "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"key"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": string "})]})}),(0,h.jsx)(e.br,{}),"\n","The specific key under which the value is stored in local storage"]}),"\n",(0,h.jsxs)(e.p,{children:[(0,h.jsx)(e.code,{"data-language":"ts",children:(0,h.jsxs)(e.span,{"data-line":"",children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"@returns Observable"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"T"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" "})]})}),(0,h.jsx)(e.br,{}),"\n","An observable that will emit value changes for a specific key"]}),"\n",(0,h.jsx)(e.h2,{id:s[0].id,children:s[0].value}),"\n",(0,h.jsx)(e.pre,{icon:t.$0,tabIndex:"0","data-language":"ts","data-word-wrap":"","data-copy":"",children:(0,h.jsx)(e.code,{children:(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"observe"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(key: string): Observable"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"T"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]})})}),"\n",(0,h.jsx)(e.h2,{id:s[1].id,children:s[1].value}),"\n",(0,h.jsx)(e.pre,{icon:t.$0,tabIndex:"0","data-language":"ts","data-word-wrap":"","data-copy":"",children:(0,h.jsxs)(e.code,{children:[(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {tap} "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'rxjs'"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {localStorage} "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '@bitfiber/rx'"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,h.jsx)(e.span,{children:" "}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" ls"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" localStorage"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"();"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"ls."}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"observe"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'key'"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")."}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"pipe"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"tap"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"v"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" =>"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" console."}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"log"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(v)))."}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"subscribe"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"();"})]})]})})]})},"/sources/reference/localStorage/observe",{filePath:"pages/sources/reference/localStorage/observe.mdx",hasJsxInH1:!0,pageMap:n.O,frontMatter:{},title:"observe Method"},"undefined"==typeof RemoteContent?d:RemoteContent.useTOC)}},i=>{var s=s=>i(i.s=s);i.O(0,[7933,4759,636,6593,8792],()=>s(39324)),_N_E=i.O()}]);