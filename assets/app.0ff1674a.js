var Q=Object.defineProperty,W=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var L=(t,e,o)=>e in t?Q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,T=(t,e)=>{for(var o in e||(e={}))K.call(e,o)&&L(t,o,e[o]);if(A)for(var o of A(e))X.call(e,o)&&L(t,o,e[o]);return t},C=(t,e)=>W(t,J(e));import{c as Z,N as k,a as ee,d as g,r as I,o as c,b as d,e as s,w as x,v as z,u,f as b,g as S,h as E,i as m,j as R,F as P,k as te,l as O,t as j,m as V,n as f,p as D,q as oe,s as N,x as B,y as ne,z as re,A as se,V as ae}from"./vendor.2aa3e7d8.js";const ie=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(n){if(n.ep)return;n.ep=!0;const l=o(n);fetch(n.href,l)}};ie();var le={button:{about:t=>{const{normalize:e}=t;return e(["About"])},back:t=>{const{normalize:e}=t;return e(["Back"])},go:t=>{const{normalize:e}=t;return e(["GO"])},home:t=>{const{normalize:e}=t;return e(["Home"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Toggle dark mode"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Change languages"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Opinionated Vite Starter Template"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Demo of dynamic route"])},hi:t=>{const{normalize:e,interpolate:o,named:r}=t;return e(["Hi, ",o(r("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Also known as"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["What's your name?"])}},school:{ats:{title:t=>{const{normalize:e}=t;return e(["Preparatory class ATS - Industrial engineering CPGE"])},establishment:t=>{const{normalize:e}=t;return e(["Lyc\xE9e Andr\xE9 Argouges"])},date:t=>{const{normalize:e}=t;return e(["2017-2018"])},place:t=>{const{normalize:e}=t;return e(["Grenoble - France"])},majors:t=>{const{normalize:e}=t;return e(["MECANIQUE- ELECTROTECHNIQUE ET ELECTRONIQUE - MATH - Physique"])}},iut:{title:t=>{const{normalize:e}=t;return e(["EN Diplome universitaire de technologie"])},establishment:t=>{const{normalize:e}=t;return e(["IUT1 - Universit\xE9 Grenoble Alpes"])},date:t=>{const{normalize:e}=t;return e(["2015-2017"])},place:t=>{const{normalize:e}=t;return e(["Grenoble - France"])},majors:t=>{const{normalize:e}=t;return e(["Physics Chemistry Materials Metrology Instrumentation..."])}}},"not-found":t=>{const{normalize:e}=t;return e(["Not found"])}},ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:le}),me={button:{about:t=>{const{normalize:e}=t;return e(["\xC0 propos de"])},back:t=>{const{normalize:e}=t;return e(["Retour"])},go:t=>{const{normalize:e}=t;return e(["Essayer"])},home:t=>{const{normalize:e}=t;return e(["Accueil"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Basculer en mode sombre"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Changer de langue"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Exemple d'application Vite"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["D\xE9mo de route dynamique"])},hi:t=>{const{normalize:e,interpolate:o,named:r}=t;return e(["Salut, ",o(r("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Aussi connu sous le nom de"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["Comment t'appelles-tu ?"])}},school:{ats:{title:t=>{const{normalize:e}=t;return e(["CPGE ATS - Industrial engineering"])},establishment:t=>{const{normalize:e}=t;return e(["Lyc\xE9e Andr\xE9 Argouges"])},date:t=>{const{normalize:e}=t;return e(["2017-2018"])},place:t=>{const{normalize:e}=t;return e(["Grenoble - France"])},majors:t=>{const{normalize:e}=t;return e(["MECANIQUE - ELECTROTECHNIQUE ET ELECTRONIQUE - MATH - Physique"])}},iut:{title:t=>{const{normalize:e}=t;return e(["FR Diplome universitaire de technologie"])},establishment:t=>{const{normalize:e}=t;return e(["IUT1 - Universit\xE9 Grenoble Alpes"])},date:t=>{const{normalize:e}=t;return e(["2015-2017"])},place:t=>{const{normalize:e}=t;return e(["Grenoble - France"])},majors:t=>{const{normalize:e}=t;return e(["Physics, Chemistry, Materials , Metrology , Instrumentation..."])}}},"not-found":t=>{const{normalize:e}=t;return e(["Page non trouv\xE9e"])}},de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:me});const _e=Object.fromEntries(Object.entries({"../../locales/en.yml":ce,"../../locales/fr.yml":de}).map(([t,e])=>{const o=t.endsWith(".yaml");return[t.slice(14,o?-5:-4),e.default]})),pe=({app:t})=>{const e=Z({legacy:!1,locale:"en",messages:_e});t.use(e)};var ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:pe});const he=({isClient:t,router:e})=>{t&&(e.beforeEach(()=>{k.start()}),e.afterEach(()=>{k.done()}))};var ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:he});const fe=({isClient:t,initialState:e,app:o})=>{const r=ee();o.use(r),t?r.state.value=e.pinia||{}:e.pinia=r.state.value};var ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:fe});const ye="modulepreload",U={},xe="/",i=function(e,o){return!o||o.length===0?e():Promise.all(o.map(r=>{if(r=`${xe}${r}`,r in U)return;U[r]=!0;const n=r.endsWith(".css"),l=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${l}`))return;const a=document.createElement("link");if(a.rel=n?"stylesheet":ye,n||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),n)return new Promise((p,_)=>{a.addEventListener("load",p),a.addEventListener("error",_)})})).then(()=>e())},ze=({isClient:t,router:e})=>{!t||e.isReady().then(async()=>{const{registerSW:o}=await i(()=>import("./virtual_pwa-register.3e08f338.js"),[]);o({immediate:!0})})};var be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:ze});var v=(t,e)=>{const o=t.__vccOpts||t;for(const[r,n]of e)o[r]=n;return o};const Se={class:"login-page"},Ee={class:"form"},we={class:"register-form",method:"POST",action:"http://localhost:3000/register"},$e=b('<label for="uname" data-v-487eae74>Username</label><input type="text" placeholder="Username" name="uname" data-v-487eae74><label for="pw" data-v-487eae74>Password</label><input type="password" placeholder="Password" name="pw" data-v-487eae74><button type="submit" data-v-487eae74>create</button>',5),Me=S("Already registered? "),Ae={class:"login-form",method:"POST",action:"http://localhost:3000/login"},Le=b('<label for="uname" data-v-487eae74>Username</label><input type="text" placeholder="Username" name="uname" data-v-487eae74><label for="pw" data-v-487eae74>Password</label><input type="password" placeholder="Password" name="pw" data-v-487eae74><button type="submit" data-v-487eae74>login</button>',5),Te=S("Not registered? "),Ce=g({setup(t){let e=I(!0);function o(){e.value=!e.value}return(r,n)=>(c(),d("div",Se,[s("div",Ee,[x(s("form",we,[$e,s("p",{class:"message"},[Me,s("a",{href:"#",onClick:o},"Sign In")])],512),[[z,!u(e)]]),x(s("form",Ae,[Le,s("p",{class:"message"},[Te,s("a",{href:"#",onClick:o},"Create an account")])],512),[[z,u(e)]])])]))}});var ke=v(Ce,[["__scopeId","data-v-487eae74"]]);const Ie={},Re=s("h1",null,"root page",-1),Pe=S("click");function Oe(t,e,o,r,n,l){const a=E("router-link"),p=ke;return c(),d(P,null,[Re,m(a,{to:"/complexSystem"},{default:R(()=>[Pe]),_:1}),m(p)],64)}var je=v(Ie,[["render",Oe]]);const Ve=[{name:"index",path:"/",component:je,props:!0},{name:"complexSystem",path:"/complexsystem",component:()=>i(()=>import("./index.96edd614.js"),["assets/index.96edd614.js","assets/index.50bbb63f.css","assets/vendor.2aa3e7d8.js","assets/ButtonSection.b76f77df.js","assets/ButtonSection.5de0d717.css"]),props:!0},{name:"complexSystem-epidemicModels",path:"/complexsystem/epidemicmodels",component:()=>i(()=>import("./index.6a959c05.js"),["assets/index.6a959c05.js","assets/ButtonSection.b76f77df.js","assets/ButtonSection.5de0d717.css","assets/vendor.2aa3e7d8.js"]),props:!0},{name:"complexSystem-getting-started",path:"/complexsystem/getting-started",component:()=>i(()=>import("./index.2fdaab46.js"),["assets/index.2fdaab46.js","assets/ButtonSection.b76f77df.js","assets/ButtonSection.5de0d717.css","assets/vendor.2aa3e7d8.js"]),props:!0},{name:"complexSystem-random-graph-models",path:"/complexsystem/random-graph-models",component:()=>i(()=>import("./index.3edfb16d.js"),["assets/index.3edfb16d.js","assets/ButtonSection.b76f77df.js","assets/ButtonSection.5de0d717.css","assets/vendor.2aa3e7d8.js"]),props:!0},{name:"complexSystem-voterModel",path:"/complexsystem/votermodel",component:()=>i(()=>import("./index.6982958c.js"),["assets/index.6982958c.js","assets/index.ea576c61.css","assets/ButtonSection.b76f77df.js","assets/ButtonSection.5de0d717.css","assets/vendor.2aa3e7d8.js"]),props:!0},{name:"complexSystem-epidemicModels-effectOfConfinePeople",path:"/complexsystem/epidemicmodels/effectofconfinepeople",component:()=>i(()=>import("./index.6bca2d6d.js"),["assets/index.6bca2d6d.js","assets/ButtonSection.b76f77df.js","assets/ButtonSection.5de0d717.css","assets/vendor.2aa3e7d8.js"]),props:!0},{name:"complexSystem-epidemicModels-implementation",path:"/complexsystem/epidemicmodels/implementation",component:()=>i(()=>import("./index.8a64d7ac.js"),["assets/index.8a64d7ac.js","assets/ButtonSection.b76f77df.js","assets/ButtonSection.5de0d717.css","assets/vendor.2aa3e7d8.js"]),props:!0},{name:"complexSystem-epidemicModels-testAndIsolationStrategies",path:"/complexsystem/epidemicmodels/testandisolationstrategies",component:()=>i(()=>import("./index.25d61113.js"),["assets/index.25d61113.js","assets/ButtonSection.b76f77df.js","assets/ButtonSection.5de0d717.css","assets/vendor.2aa3e7d8.js"]),props:!0},{name:"complexSystem-getting-started-breadth-first-search-algorithm-and-applications",path:"/complexsystem/getting-started/breadth-first-search-algorithm-and-applications",component:()=>i(()=>import("./index.6dc28f2a.js"),["assets/index.6dc28f2a.js","assets/ButtonSection.b76f77df.js","assets/ButtonSection.5de0d717.css","assets/vendor.2aa3e7d8.js"]),props:!0},{name:"complexSystem-getting-started-igraph-package",path:"/complexsystem/getting-started/igraph-package",component:()=>i(()=>import("./index.88554023.js"),["assets/index.88554023.js","assets/ButtonSection.b76f77df.js","assets/ButtonSection.5de0d717.css","assets/vendor.2aa3e7d8.js"]),props:!0},{name:"complexSystem-getting-started-representations-of-graph-and-first-metrics",path:"/complexsystem/getting-started/representations-of-graph-and-first-metrics",component:()=>i(()=>import("./index.b13069f3.js"),["assets/index.b13069f3.js","assets/ButtonSection.b76f77df.js","assets/ButtonSection.5de0d717.css","assets/vendor.2aa3e7d8.js"]),props:!0},{name:"complexSystem-random-graph-models-erdos-renyi-average-length-as-function-of-p",path:"/complexsystem/random-graph-models/erdos-renyi-average-length-as-function-of-p",component:()=>i(()=>import("./index.9e73a617.js"),["assets/index.9e73a617.js","assets/ButtonSection.b76f77df.js","assets/ButtonSection.5de0d717.css","assets/vendor.2aa3e7d8.js"]),props:!0},{name:"complexSystem-random-graph-models-erdos-renyi-clustering-coefficient-as-functions-of-p",path:"/complexsystem/random-graph-models/erdos-renyi-clustering-coefficient-as-functions-of-p",component:()=>i(()=>import("./index.0058cfdc.js"),["assets/index.0058cfdc.js","assets/ButtonSection.b76f77df.js","assets/ButtonSection.5de0d717.css","assets/vendor.2aa3e7d8.js"]),props:!0},{name:"complexSystem-random-graph-models-erdos-renyi-model",path:"/complexsystem/random-graph-models/erdos-renyi-model",component:()=>i(()=>import("./index.142345cd.js"),["assets/index.142345cd.js","assets/ButtonSection.b76f77df.js","assets/ButtonSection.5de0d717.css","assets/vendor.2aa3e7d8.js"]),props:!0},{name:"complexSystem-random-graph-models-graph-scale-free",path:"/complexsystem/random-graph-models/graph-scale-free",component:()=>i(()=>import("./index.fb0e1b88.js"),["assets/index.fb0e1b88.js","assets/ButtonSection.b76f77df.js","assets/ButtonSection.5de0d717.css","assets/vendor.2aa3e7d8.js"]),props:!0},{name:"complexSystem-random-graph-models-histograms-of-the-degree-distribution",path:"/complexsystem/random-graph-models/histograms-of-the-degree-distribution",component:()=>i(()=>import("./index.f82f4880.js"),["assets/index.f82f4880.js","assets/ButtonSection.b76f77df.js","assets/ButtonSection.5de0d717.css","assets/vendor.2aa3e7d8.js"]),props:!0},{name:"complexSystem-random-graph-models-scale-free-power-law-degree-distribution",path:"/complexsystem/random-graph-models/scale-free-power-law-degree-distribution",component:()=>i(()=>import("./index.f1849def.js"),["assets/index.f1849def.js","assets/ButtonSection.b76f77df.js","assets/ButtonSection.5de0d717.css","assets/vendor.2aa3e7d8.js"]),props:!0},{name:"complexSystem-random-graph-models-watts-strogatz-model-small-world-network",path:"/complexsystem/random-graph-models/watts-strogatz-model-small-world-network",component:()=>i(()=>import("./index.3d3fa8a3.js"),["assets/index.3d3fa8a3.js","assets/ButtonSection.b76f77df.js","assets/ButtonSection.5de0d717.css","assets/vendor.2aa3e7d8.js"]),props:!0},{name:"complexSystem-voterModel-influenceingScenarios",path:"/complexsystem/votermodel/influenceingscenarios",component:()=>i(()=>import("./index.6736e660.js"),["assets/index.6736e660.js","assets/index.9933223e.css","assets/ButtonSection.b76f77df.js","assets/ButtonSection.5de0d717.css","assets/vendor.2aa3e7d8.js"]),props:!0},{name:"complexSystem-voterModel-representation",path:"/complexsystem/votermodel/representation",component:()=>i(()=>import("./index.a524a716.js"),["assets/index.a524a716.js","assets/index.e9f2d885.css","assets/ButtonSection.b76f77df.js","assets/ButtonSection.5de0d717.css","assets/vendor.2aa3e7d8.js"]),props:!0}],De={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},Ne=s("path",{d:"M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9z",fill:"currentColor"},null,-1),Be=[Ne];function Ue(t,e){return c(),d("svg",De,Be)}var G={name:"carbon-search",render:Ue};const Ge={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},He=s("circle",{cx:"21",cy:"26",r:"2",fill:"currentColor"},null,-1),qe=s("circle",{cx:"21",cy:"6",r:"2",fill:"currentColor"},null,-1),Ye=s("circle",{cx:"4",cy:"16",r:"2",fill:"currentColor"},null,-1),Fe=s("path",{d:"M28 12a3.996 3.996 0 0 0-3.858 3h-4.284a3.966 3.966 0 0 0-5.491-2.643l-3.177-3.97A3.963 3.963 0 0 0 12 6a4 4 0 1 0-4 4a3.96 3.96 0 0 0 1.634-.357l3.176 3.97a3.924 3.924 0 0 0 0 4.774l-3.176 3.97A3.96 3.96 0 0 0 8 22a4 4 0 1 0 4 4a3.962 3.962 0 0 0-.81-2.387l3.176-3.97A3.966 3.966 0 0 0 19.858 17h4.284A3.993 3.993 0 1 0 28 12zM6 6a2 2 0 1 1 2 2a2.002 2.002 0 0 1-2-2zm2 22a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2zm8-10a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2zm12 0a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2z",fill:"currentColor"},null,-1),Qe=[He,qe,Ye,Fe];function We(t,e){return c(),d("svg",Ge,Qe)}var H={name:"carbon-network4",render:We};const Je={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 15 15"},Ke=s("g",{fill:"none"},[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5l3.469-3.468z",fill:"currentColor"})],-1),Xe=[Ke];function Ze(t,e){return c(),d("svg",Je,Xe)}var et={name:"radix-icons-cross2",render:Ze};const tt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 15 15"},ot=s("g",{fill:"none"},[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12zM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5z",fill:"currentColor"})],-1),nt=[ot];function rt(t,e){return c(),d("svg",tt,nt)}var st={name:"radix-icons-hamburger-menu",render:rt};const at={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 128 128"},it=b('<path d="M93.99 8.97c-21.91 0-29.96 22.39-29.96 22.39s-7.94-22.39-30-22.39c-16.58 0-35.48 13.14-28.5 43.01c6.98 29.87 58.56 67.08 58.56 67.08s51.39-37.21 58.38-67.08c6.98-29.87-10.56-43.01-28.48-43.01z" fill="#f44336"></path><g fill="#c33"><path d="M30.65 11.2c17.2 0 25.74 18.49 28.5 25.98c.39 1.07 1.88 1.1 2.33.06L64 31.35C60.45 20.01 50.69 8.97 34.03 8.97c-6.9 0-14.19 2.28-19.86 7.09c5.01-3.29 10.88-4.86 16.48-4.86z"></path><path d="M93.99 8.97c-5.29 0-10.11 1.15-13.87 3.47c2.64-1.02 5.91-1.24 9.15-1.24c16.21 0 30.72 12.29 24.17 40.7c-5.62 24.39-38.46 53.98-48.49 65.27c-.64.72-.86 1.88-.86 1.88s51.39-37.21 58.38-67.08c6.98-29.86-10.53-43-28.48-43z"></path></g><path d="M17.04 24.82c3.75-4.68 10.45-8.55 16.13-4.09c3.07 2.41 1.73 7.35-1.02 9.43c-4 3.04-7.48 4.87-9.92 9.63c-1.46 2.86-2.34 5.99-2.79 9.18c-.18 1.26-1.83 1.57-2.45.46c-4.22-7.48-5.42-17.78.05-24.61z" fill="#ff8a80"></path><path d="M77.16 34.66c-1.76 0-3-1.7-2.36-3.34c1.19-3.02 2.73-5.94 4.58-8.54c2.74-3.84 7.95-6.08 11.25-3.75c3.38 2.38 2.94 7.14.57 9.44c-5.09 4.93-11.51 6.19-14.04 6.19z" fill="#ff8a80"></path>',4),lt=[it];function ct(t,e){return c(),d("svg",at,lt)}var mt={name:"noto-red-heart",render:ct};const dt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 221"},_t=s("path",{d:"M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36z",fill:"#41B883"},null,-1),pt=s("path",{d:"M0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0z",fill:"#41B883"},null,-1),ut=s("path",{d:"M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56z",fill:"#35495E"},null,-1),ht=[_t,pt,ut];function gt(t,e){return c(),d("svg",dt,ht)}var ft={name:"logos-vue",render:gt};const vt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},yt=s("g",{fill:"none"},[s("path",{d:"M8 4l8 8l-8 8",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),xt=[yt];function zt(t,e){return c(),d("svg",vt,xt)}var bt={name:"akar-icons-chevron-right",render:zt};const St={class:"container"},Et={class:"mainText"},wt=g({props:{mainName:{type:String,required:!0},mainRoute:{type:String,required:!0},subs:{type:Array,required:!1,default:null}},setup(t){const e=t,o=te();let r=O(()=>o.currentRoute.value.fullPath),n=!1;const l=O(()=>{if(e.subs!==null){for(let M of e.subs)if(M.route==r.value)return!0;return!1}return!1});function a(){n==!0||(_.value==!1&&(_.value=!0),o.push(`${e.mainRoute}`))}function p(){n=!0,w(),setTimeout(()=>{n=!1},300)}let _=I(!1);function w(){_.value==!1?_.value=!0:_.value=!1}return(M,y)=>{const Y=bt,F=E("router-link");return c(),d("div",St,[s("div",{class:f(["mainSection",u(r)==e.mainRoute?"isActive":"normal"]),onClick:y[1]||(y[1]=h=>a())},[s("p",Et,j(e.mainName),1),e.subs!==null?(c(),V(Y,{key:0,class:f(["mainArrow",u(_)?"opensub":"closesub"]),onClick:y[0]||(y[0]=h=>p())},null,8,["class"])):D("",!0)],2),(c(!0),d(P,null,oe(e.subs,h=>(c(),d("div",{class:f(["lasum",u(l)?"activeSubs":"normalSubs",u(_)?"opensubs":"closesubs"])},[m(F,{class:f(["asub",u(r)==h.route?"isActiveSub":"normalSub"]),to:h.route},{default:R(()=>[S(j(h.text),1)]),_:2},1032,["class","to"])],2))),256))])}}});var $t=v(wt,[["__scopeId","data-v-2c572964"]]);const $=t=>(N("data-v-e90f6d58"),t=t(),B(),t),Mt={class:"navcontainer"},At={key:0,class:"headnav"},Lt=$(()=>s("p",null,"Complex systems",-1)),Tt={"data-simplebar":"","data-simplebar-auto-hide":"false",class:"tree"},Ct={class:"footnav"},kt=$(()=>s("p",null,"Crafted with ",-1)),It=$(()=>s("p",null,"and",-1)),Rt=g({props:{isMobile:{type:Boolean}},setup(t){const e=t;return(o,r)=>{const n=H,l=G,a=$t,p=ft,_=mt;return c(),d("div",Mt,[e.isMobile?D("",!0):(c(),d("div",At,[m(n,{class:"mainIcon"}),Lt,m(l,{style:{display:"none"}})])),s("div",Tt,[m(a,{"main-name":"Introduction","main-route":"/complexSystem/"}),m(a,{"main-name":"Getting Started","main-route":"/complexSystem/getting-started",subs:[{text:"Representations of graph and first metrics",route:"/complexSystem/getting-started/representations-of-graph-and-first-metrics"},{text:"Breadth-first search algorithm and applications",route:"/complexSystem/getting-started/breadth-first-search-algorithm-and-applications"},{text:"Igraph package",route:"/complexSystem/getting-started/igraph-package"}]}),m(a,{"main-name":"Random graph models","main-route":"/complexSystem/random-graph-models",subs:[{text:"Erdos-Renyi model",route:"/complexSystem/random-graph-models/erdos-renyi-model"},{text:"Watts-Strogatz model : Small world network",route:"/complexSystem/random-graph-models/watts-strogatz-model-small-world-network"},{text:"Graph scale free",route:"/complexSystem/random-graph-models/graph-scale-free"},{text:"Histograms of the degree distribution",route:"/complexSystem/random-graph-models/histograms-of-the-degree-distribution"},{text:"Scale free, power law degree distribution",route:"/complexSystem/random-graph-models/scale-free-power-law-degree-distribution"},{text:"Erdos-Renyi, average length as function of p",route:"/complexSystem/random-graph-models/erdos-renyi-average-length-as-function-of-p"},{text:"Erdos-Renyi, clustering coefficient as functions of p",route:"/complexSystem/random-graph-models/erdos-renyi-clustering-coefficient-as-functions-of-p"}]}),m(a,{"main-name":"Voter model","main-route":"/complexSystem/voterModel",subs:[{text:"Representation",route:"/complexSystem/voterModel/Representation"},{text:"Influenceing scenarios",route:"/complexSystem/voterModel/influenceingScenarios"}]}),m(a,{"main-name":"Epidemic models","main-route":"/complexSystem/epidemicModels",subs:[{text:"Implementation",route:"/complexSystem/epidemicModels/implementation"},{text:"Effect of confine people",route:"/complexSystem/epidemicModels/effectOfConfinePeople"},{text:"Test and isolation strategies",route:"/complexSystem/epidemicModels/testAndIsolationStrategies"}]})]),s("div",Ct,[kt,m(p,{class:"icon-footer"}),It,m(_,{class:"icon-footer"})])])}}});var q=v(Rt,[["__scopeId","data-v-e90f6d58"]]);const Pt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},Ot=b('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),jt=[Ot];function Vt(t,e){return c(),d("svg",Pt,jt)}var Dt={name:"carbon-sun",render:Vt};const Nt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},Bt=s("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Ut=[Bt];function Gt(t,e){return c(),d("svg",Nt,Ut)}var Ht={name:"carbon-moon",render:Gt};const qt=g({setup(t){const e=ne(),o=re(e);return(r,n)=>{const l=Ht,a=Dt;return c(),d("button",{class:"themeToggle",onClick:n[0]||(n[0]=p=>u(o)())},[x(m(l,{class:"align-middle"},null,512),[[z,u(e)]]),x(m(a,{class:"align-middle"},null,512),[[z,!u(e)]])])}}});var Yt={data(){return{navisopen:!0}},computed:{navShowing:function(){return this.navisopen===!1?"navVisible":"navhidden"},mobile:()=>!0,notMobile:()=>!1,showBurger:function(){return this.navisopen===!1}},methods:{toggleNav:function(){this.navisopen===!1?this.navisopen=!0:this.navisopen=!1}},components:{NavTree:q}};const Ft=t=>(N("data-v-4efa6c79"),t=t(),B(),t),Qt={class:"text-gray-700 dark:text-gray-200"},Wt={class:"topPage"},Jt={class:"headerfull"},Kt={key:0},Xt=Ft(()=>s("h1",null,"Complex systems",-1));function Zt(t,e){const o=qt,r=q,n=st,l=et,a=H,p=G,_=E("router-view");return c(),d("main",Qt,[s("div",Wt,[m(o),m(r,{class:"mynavTree",isMobile:t.notMobile},null,8,["isMobile"]),s("div",Jt,[t.showBurger?(c(),d("span",{key:1,onClick:e[0]||(e[0]=(...w)=>t.toggleNav&&t.toggleNav(...w))},[m(l)])):(c(),d("span",Kt,[m(n,{onClick:t.toggleNav},null,8,["onClick"])])),m(a,{class:"mainIcon"}),Xt,m(p,{style:{display:"none"}})]),m(r,{class:f(t.navShowing),isMobile:t.mobile},null,8,["class","isMobile"]),m(_,{"data-simplebar":"",class:"routeVue"})])])}var eo=v(Yt,[["render",Zt],["__scopeId","data-v-4efa6c79"]]);const to={"404":()=>i(()=>import("./404.f79a244d.js"),["assets/404.f79a244d.js","assets/vendor.2aa3e7d8.js"]),default:eo,home:()=>i(()=>import("./home.540d7921.js"),["assets/home.540d7921.js","assets/vendor.2aa3e7d8.js"]),laycs:()=>i(()=>import("./laycs.211ed33d.js"),["assets/laycs.211ed33d.js","assets/vendor.2aa3e7d8.js"])};function oo(t){return t.map(e=>{var o;return{path:e.path,component:to[((o=e.meta)==null?void 0:o.layout)||"default"],children:[C(T({},e),{path:""})]}})}const no=g({setup(t){return se({title:"Driveralex",meta:[{name:"description",content:"Just driveralex website"}]}),(e,o)=>{const r=E("router-view");return c(),V(r)}}});const ro=oo(Ve);ae(no,{routes:ro,base:"/"},t=>{Object.values({"./modules/i18n.ts":ue,"./modules/nprogress.ts":ge,"./modules/pinia.ts":ve,"./modules/pwa.ts":be}).map(e=>{var o;return(o=e.install)==null?void 0:o.call(e,t)})});export{v as _,Ht as a,Dt as b,q as c,st as d,et as e,H as f,G as g};
