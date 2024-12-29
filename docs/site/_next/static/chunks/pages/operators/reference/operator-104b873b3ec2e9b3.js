(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3816],{2272:(i,s,h)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/operators/reference/operator",function(){return h(73190)}])},73190:(i,s,h)=>{"use strict";h.r(s),h.d(s,{default:()=>d,useTOC:()=>t});var e=h(62540),l=h(7933),r=h(24759),n=h(98795),a=h(23312),k=h(56877);function t(i){return[{value:"API",id:"api",depth:2},{value:"Example",id:"example",depth:2}]}let d=(0,l.e)(function(i){let{toc:s=t(i)}=i,h={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...(0,n.R)(),...i.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(h.h1,{children:["operator ",(0,e.jsx)(a.Ex,{type:"function",children:"Function"})]}),"\n",(0,e.jsxs)(h.p,{children:["Creates a custom RxJS operator that can be used in the ",(0,e.jsx)(h.code,{children:"pipe"})," function of an observable.\nThis operator allows you to apply custom transformation logic to the observable stream"]}),"\n",(0,e.jsxs)(h.p,{children:[(0,e.jsx)(h.code,{"data-language":"ts",children:(0,e.jsxs)(h.span,{"data-line":"",children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"@template "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"T"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" "})]})}),(0,e.jsx)(h.br,{}),"\n","The type of values emitted by the source observable"]}),"\n",(0,e.jsxs)(h.p,{children:[(0,e.jsx)(h.code,{"data-language":"ts",children:(0,e.jsxs)(h.span,{"data-line":"",children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"@template "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"R"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" "})]})}),(0,e.jsx)(h.br,{}),"\n","The type of values emitted by the transformed observable after applying the operator"]}),"\n",(0,e.jsxs)(h.p,{children:[(0,e.jsx)(h.code,{"data-language":"ts",children:(0,e.jsxs)(h.span,{"data-line":"",children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"@param "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"fn"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": ("}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"source"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Observable"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"T"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">, "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"subscriber"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Subscriber"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"R"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">) "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" Subscription "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"|"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" void"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" "})]})}),(0,e.jsx)(h.br,{}),"\n","A function that takes the source observable and the subscriber, and returns teardown logic to\nclean up resources when the observable completes or errors"]}),"\n",(0,e.jsx)(h.p,{children:(0,e.jsx)(h.code,{"data-language":"ts",children:(0,e.jsxs)(h.span,{"data-line":"",children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"@returns OperatorFunction"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"T"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"R"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" "})]})})}),"\n",(0,e.jsx)(h.h2,{id:s[0].id,children:s[0].value}),"\n",(0,e.jsx)(h.pre,{icon:k.$0,tabIndex:"0","data-language":"ts","data-word-wrap":"","data-copy":"",children:(0,e.jsxs)(h.code,{children:[(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"function"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" operator"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"T"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"R"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">("}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"fn"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ("})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"  source"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Observable"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"T"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">,"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"  subscriber"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Subscriber"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"R"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">,"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" TeardownLogic"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" OperatorFunction"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"T"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"R"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">;"})]})]})}),"\n",(0,e.jsx)(h.h2,{id:s[1].id,children:s[1].value}),"\n",(0,e.jsx)(h.pre,{icon:k.$0,tabIndex:"0","data-language":"ts","data-word-wrap":"","data-copy":"",children:(0,e.jsxs)(h.code,{children:[(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {Observable} "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'rxjs'"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {operator} "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '@bitfiber/rx'"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,e.jsx)(h.span,{children:" "}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"function"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" customOperator"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"T"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"R"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">("}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"transform"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ("}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"value"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" T"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" R"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  return"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" operator"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"T"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"R"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">(("}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"source"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"subscriber"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    return"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" source."}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"subscribe"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"({"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"      next"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"value"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" =>"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" subscriber."}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"next"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"transform"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(value)),"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"      error"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"error"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" =>"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" subscriber."}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"error"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(error),"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"      complete"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": () "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" subscriber."}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"complete"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(),"})]}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    });"})}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  });"})}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})})]})},"/operators/reference/operator",{filePath:"pages/operators/reference/operator.mdx",hasJsxInH1:!0,pageMap:r.O,frontMatter:{},title:"operator Function"},"undefined"==typeof RemoteContent?t:RemoteContent.useTOC)}},i=>{var s=s=>i(i.s=s);i.O(0,[7933,4759,636,6593,8792],()=>s(2272)),_N_E=i.O()}]);