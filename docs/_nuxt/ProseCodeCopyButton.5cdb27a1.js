import{T as f,_ as y}from"./DocsAsideTree.e4337552.js";import"./index.550f448e.js";import{g as C,d as h}from"./Container.68928775.js";import{u as B}from"./index.04aabe90.js";import{f as w,r as x,q as t,x as k,E as l,G as v,C as b,B as i,u as r,y as I,L as S,M as T}from"./runtime-core.esm-bundler.c752936e.js";/* empty css                      */import"./cookie.722ca6ef.js";const g=o=>(S("data-v-5fa3121e"),o=o(),T(),o),z=g(()=>l("span",{class:"sr-only"},"Copy to clipboard",-1)),E={class:"icon-wrapper"},N=w({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(o){const d=o,{copy:u}=B(),{prose:a}=C(),e=x("init"),_=m=>{u(d.content).then(()=>{e.value="copied",setTimeout(()=>{e.value="init"},1e3)}).catch(s=>{console.warn("Couldn't copy to clipboard!",s)})};return(m,s)=>{const n=y;return t(),k("button",{class:I([(o.show||e.value==="copied")&&"show"]),onClick:_},[z,l("span",E,[v(f,{name:"fade"},{default:b(()=>{var c,p;return[e.value==="copied"?(t(),i(n,{key:0,name:(c=r(a).copyButton)==null?void 0:c.iconCopied,size:"18",class:"copied"},null,8,["name"])):(t(),i(n,{key:1,name:(p=r(a).copyButton)==null?void 0:p.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),$=h(N,[["__scopeId","data-v-5fa3121e"]]);export{$ as default};
