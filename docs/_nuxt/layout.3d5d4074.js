import{T as l}from"./DocsAsideTree.e4337552.js";import{l as u,e as p,g as f,i as r}from"./entry.44fa159c.js";import{o as y}from"./index.550f448e.js";import{f as i,j as c,h as d,i as L,u as h}from"./runtime-core.esm-bundler.c752936e.js";import"./cookie.722ca6ef.js";import"./Container.68928775.js";import"./query.c3f7607a.js";const _=i({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(n,t){const e=await u[n.name]().then(a=>a.default||a);return()=>c(e,t.attrs,t.slots)}}),C=i({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(n,t){const e=L("_route"),a=e===y()?p():e,o=d(()=>h(n.name)??a.meta.layout??"default");return()=>{const s=o.value&&o.value in u,m=a.meta.layoutTransition??f;return r(l,s&&m,{default:()=>r(_,s&&{key:o.value,name:o.value,...t.attrs},t.slots).default()}).default()}}});export{C as default};
