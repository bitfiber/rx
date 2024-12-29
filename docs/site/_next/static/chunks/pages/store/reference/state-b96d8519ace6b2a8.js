(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3663],{34296:(i,s,h)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/store/reference/state",function(){return h(26483)}])},26483:(i,s,h)=>{"use strict";h.r(s),h.d(s,{default:()=>d,useTOC:()=>r});var l=h(62540),k=h(7933),e=h(24759),n=h(98795),t=h(23312),a=h(56877);function r(i){return[{value:"API",id:"api",depth:2},{value:"Example",id:"example",depth:2}]}let d=(0,k.e)(function(i){let{toc:s=r(i)}=i,h={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...(0,n.R)(),...i.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(h.h1,{children:["State ",(0,l.jsx)(t.Ex,{type:"class",children:"Class"})]}),"\n",(0,l.jsxs)(h.p,{children:["Represents a concrete state in a reactive store, extending the functionality of ",(0,l.jsx)(h.code,{children:"AbstractState"}),".\nThis class encapsulates the logic for updating, resetting and maintaining a state, reacting to\nchanges, and notifying subscribers whenever the state is updated."]}),"\n",(0,l.jsx)(h.p,{children:"It can also be connected to external data sources to synchronize its value with external data,\nensuring consistency across different parts of an application"}),"\n",(0,l.jsxs)(h.p,{children:[(0,l.jsx)(h.code,{"data-language":"ts",children:(0,l.jsxs)(h.span,{"data-line":"",children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"@template "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"T"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" "})]})}),(0,l.jsx)(h.br,{}),"\n","The type of data managed and emitted by the state"]}),"\n",(0,l.jsx)(h.h2,{id:s[0].id,children:s[0].value}),"\n",(0,l.jsx)(h.pre,{icon:a.$0,tabIndex:"0","data-language":"ts","data-word-wrap":"","data-copy":"",children:(0,l.jsxs)(h.code,{children:[(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"class"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" State"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"T"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"> "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"extends"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" AbstractState"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"T"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"> {"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  readonly"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" $"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Observable"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"T"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">;"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  initialize"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"()"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" this"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  complete"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"()"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" void"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  manage"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"..."}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"operators"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" OperatorFunction"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"T"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"T"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">[])"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" this"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  get"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"()"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" T"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  set"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"value"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" T"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" this"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  update"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"updater"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"state"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" T"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" T"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" this"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  reset"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"()"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" this"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  compareBy"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"comparison"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Comparison"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" this"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  connect"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"source"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" DataSource"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"T"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">)"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" this"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  useLazyEmission"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"()"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" this"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  useLazyEmissionOnce"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"()"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" this"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  select"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"I"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" extends"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" any"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"[]>("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"..."}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"inputs"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ["}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"..."}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"EmitterOrObservableTuple"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"I"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">, "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"SpreadFn"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"I"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"T"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">])"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" this"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  zip"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"I"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" extends"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" any"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"[]>("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"..."}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"inputs"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ["}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"..."}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"EmitterOrObservableTuple"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"I"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">, "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"SpreadFn"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"I"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"T"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">])"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" this"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  wait"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"I"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" extends"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" any"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"[]>("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"..."}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"inputs"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ["}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"..."}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"EmitterOrObservableTuple"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"I"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">, "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"SpreadFn"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"I"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"T"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">])"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" this"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  receive"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"..."}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"inputs"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" EmitterOrObservable"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"T"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">[])"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" this"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  receive"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"I"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"input"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" EmitterOrObservable"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"I"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">, "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"reducer"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"value"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" I"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"state"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" T"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" T"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" this"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  transmit"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"..."}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"outputs"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"EmitterOrSubject"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"T"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"> "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"|"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" EmitterOrSubject"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"void"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">)[])"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" this"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  transmit"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"O"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"output"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" AbstractState"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"O"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">, "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"reducer"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"value"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" T"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"state"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" O"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" O"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" this"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  transmit"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"O"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"output"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" EmitterOrSubject"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"O"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">, "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"reducer"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"value"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" T"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" O"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" this"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  effect"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"..."}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"operators"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" OperatorFunction"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"any"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"any"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">[])"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" this"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  tap"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"observer"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Partial"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"Observer"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"T"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">>)"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" this"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  tap"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"next"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"value"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" T"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" void"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" this"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsx)(h.span,{children:(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,l.jsx)(h.h2,{id:s[1].id,children:s[1].value}),"\n",(0,l.jsx)(h.pre,{icon:a.$0,tabIndex:"0","data-language":"ts","data-word-wrap":"","data-copy":"",children:(0,l.jsxs)(h.code,{children:[(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {state} "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '@bitfiber/rx'"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsx)(h.span,{children:" "}),"\n",(0,l.jsx)(h.span,{children:(0,l.jsx)(h.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// Creates a state"})}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" counter"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" state"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"number"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"1"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]})]})})]})},"/store/reference/state",{filePath:"pages/store/reference/state.mdx",hasJsxInH1:!0,pageMap:e.O,frontMatter:{},title:"State Class"},"undefined"==typeof RemoteContent?r:RemoteContent.useTOC)}},i=>{var s=s=>i(i.s=s);i.O(0,[7933,4759,636,6593,8792],()=>s(34296)),_N_E=i.O()}]);