(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7813],{91170:(i,s,h)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/store/reference/asyncGroup",function(){return h(17835)}])},17835:(i,s,h)=>{"use strict";h.r(s),h.d(s,{default:()=>d,useTOC:()=>k});var e=h(62540),l=h(7933),n=h(24759),a=h(98795),r=h(23312),t=h(56877);function k(i){return[{value:"API",id:"api",depth:2},{value:"Example",id:"example",depth:2}]}let d=(0,l.e)(function(i){let{toc:s=k(i)}=i,h={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...(0,a.R)(),...i.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(h.h1,{children:["AsyncGroup ",(0,e.jsx)(r.Ex,{type:"class",children:"Class"})]}),"\n",(0,e.jsx)(h.p,{children:"Represents an asynchronous group that manages the lifecycle of an asynchronous action,\nproviding emitters for launching actions, handling success, dealing with failures, and\nmanaging the state of these actions."}),"\n",(0,e.jsxs)(h.p,{children:["The ",(0,e.jsx)(h.code,{children:"AsyncGroup"})," class extends ",(0,e.jsx)(h.code,{children:"AbstractAsyncGroup"})," and is designed to facilitate the management\nof asynchronous actions. This structure allows for organized and efficient management\nof complex asynchronous workflows"]}),"\n",(0,e.jsxs)(h.p,{children:[(0,e.jsx)(h.code,{"data-language":"ts",children:(0,e.jsxs)(h.span,{"data-line":"",children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"@template "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"L"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" "})]})}),(0,e.jsx)(h.br,{}),"\n","The type representing the data for the launch emitter"]}),"\n",(0,e.jsxs)(h.p,{children:[(0,e.jsx)(h.code,{"data-language":"ts",children:(0,e.jsxs)(h.span,{"data-line":"",children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"@template "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"S"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" "})]})}),(0,e.jsx)(h.br,{}),"\n","The type representing the data for the success emitter"]}),"\n",(0,e.jsxs)(h.p,{children:[(0,e.jsx)(h.code,{"data-language":"ts",children:(0,e.jsxs)(h.span,{"data-line":"",children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"@template "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"F"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" "})]})}),(0,e.jsx)(h.br,{}),"\n","The type representing the error data for the fail emitter"]}),"\n",(0,e.jsx)(h.h2,{id:s[0].id,children:s[0].value}),"\n",(0,e.jsx)(h.pre,{icon:t.$0,tabIndex:"0","data-language":"ts","data-word-wrap":"","data-copy":"",children:(0,e.jsxs)(h.code,{children:[(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"class"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" AsyncGroup"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"L"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"S"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"F"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"> "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"extends"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" AbstractAsyncGroup"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"L"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"S"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"F"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"> {"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  readonly"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" launch"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Emitter"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"L"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">;"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  readonly"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" success"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Emitter"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"S"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">;"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  readonly"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" fail"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Emitter"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"F"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">;"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  readonly"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" finish"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Emitter"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"void"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">;"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  readonly"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" state"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" StateType"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"AsyncData"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">;"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  initialize"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"()"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" this"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  complete"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"()"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" void"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  useCache"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"secOrFn"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" number"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" |"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" (() "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" boolean"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"), "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"cacheSize"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 10"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" this"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,e.jsx)(h.h2,{id:s[1].id,children:s[1].value}),"\n",(0,e.jsx)(h.pre,{icon:t.$0,tabIndex:"0","data-language":"ts","data-word-wrap":"","data-copy":"",children:(0,e.jsxs)(h.code,{children:[(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {asyncGroup} "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '@bitfiber/rx'"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,e.jsx)(h.span,{children:" "}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// Creates an asynchronous group"})}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" group"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" asyncGroup"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"number"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"string"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"[], "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"Error"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">(({"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"launch"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}) "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"  // Sets an effect to be triggered on new launch emissions"})}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  launch."}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"tap"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"v"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" =>"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" console."}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"log"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(v));"})]}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"});"})}),"\n",(0,e.jsx)(h.span,{children:" "}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// Emits a new value to its own subscribers"})}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"group.launch."}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"emit"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"1"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]})]})})]})},"/store/reference/asyncGroup",{filePath:"pages/store/reference/asyncGroup.mdx",hasJsxInH1:!0,pageMap:n.O,frontMatter:{},title:"AsyncGroup Class"},"undefined"==typeof RemoteContent?k:RemoteContent.useTOC)}},i=>{var s=s=>i(i.s=s);i.O(0,[7933,4759,636,6593,8792],()=>s(91170)),_N_E=i.O()}]);