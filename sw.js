if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const o=e=>i(e,n),t={module:{uri:n},exports:a,require:o};s[n]=Promise.all(l.map((e=>t[e]||o(e)))).then((e=>(r(...e),a)))}}define(["./workbox-455a0d7a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.884b5ec8.js",revision:null},{url:"assets/app.aa81cce5.css",revision:null},{url:"assets/app.c81a47f4.js",revision:null},{url:"assets/ButtonSection.7ab00767.js",revision:null},{url:"assets/ButtonSection.7b5a3da2.css",revision:null},{url:"assets/home.04f146b6.js",revision:null},{url:"assets/index.03652469.js",revision:null},{url:"assets/index.06524de2.css",revision:null},{url:"assets/index.11aa1983.js",revision:null},{url:"assets/index.2e766753.js",revision:null},{url:"assets/index.50adb03d.js",revision:null},{url:"assets/index.59585949.js",revision:null},{url:"assets/index.63fceda4.css",revision:null},{url:"assets/index.76b0c30e.js",revision:null},{url:"assets/index.79483412.js",revision:null},{url:"assets/index.827b88fa.css",revision:null},{url:"assets/index.895e718e.js",revision:null},{url:"assets/index.8b68c59e.js",revision:null},{url:"assets/index.93971a98.js",revision:null},{url:"assets/index.9d6e6251.js",revision:null},{url:"assets/index.9edee9e1.js",revision:null},{url:"assets/index.a02962e6.js",revision:null},{url:"assets/index.a1a4d3d0.js",revision:null},{url:"assets/index.a2203e9c.js",revision:null},{url:"assets/index.af2fb265.js",revision:null},{url:"assets/index.b1c34cb4.js",revision:null},{url:"assets/index.bfb1f282.css",revision:null},{url:"assets/index.ced9691e.js",revision:null},{url:"assets/index.dcb93211.js",revision:null},{url:"assets/index.e34b25a5.js",revision:null},{url:"assets/laycs.87536762.js",revision:null},{url:"assets/vendor.d933a0e7.js",revision:null},{url:"assets/virtual_pwa-register.3e08f338.js",revision:null},{url:"complexsystem.html",revision:"d582d554c4afcb2095b7a5c95c09e148"},{url:"complexsystem/epidemicmodels.html",revision:"0132498af326382d37b0c97db11a8d0f"},{url:"complexsystem/epidemicmodels/effectofconfinepeople.html",revision:"514eec61dfdc070a2b62be9afd3c0f0e"},{url:"complexsystem/epidemicmodels/implementation.html",revision:"de5a0a29adf10f3da32c1d5eb255c350"},{url:"complexsystem/epidemicmodels/testandisolationstrategies.html",revision:"32df8cbc3abce56e5d2f84ad5db5c0eb"},{url:"complexsystem/getting-started.html",revision:"970fb1c7fd1d60399b67fa24189f0a71"},{url:"complexsystem/getting-started/breadth-first-search-algorithm-and-applications.html",revision:"6b684bb22dd1d31f8bdfbe6d1e8671b0"},{url:"complexsystem/getting-started/igraph-package.html",revision:"48645d0923aa98974a2e604993f30841"},{url:"complexsystem/getting-started/representations-of-graph-and-first-metrics.html",revision:"77d59cc86d9782710723709c55865176"},{url:"complexsystem/random-graph-models.html",revision:"2be5c4f996c19ef6aa8896c80ecfe37e"},{url:"complexsystem/random-graph-models/erdos-renyi-average-length-as-function-of-p.html",revision:"ee1741a55a0ef414b1fb73a643c2f2f7"},{url:"complexsystem/random-graph-models/erdos-renyi-clustering-coefficient-as-functions-of-p.html",revision:"395c82a3d0748619e4700e15ae3012a0"},{url:"complexsystem/random-graph-models/erdos-renyi-model.html",revision:"7d5b9a999e7c8bf6a282219f1e4f0e06"},{url:"complexsystem/random-graph-models/graph-scale-free.html",revision:"74339d2ecf15c27d4fe9199a21f5126c"},{url:"complexsystem/random-graph-models/histograms-of-the-degree-distribution.html",revision:"2da18f659ee63905b6973905a835b48a"},{url:"complexsystem/random-graph-models/scale-free-power-law-degree-distribution.html",revision:"6aee6f7d2676c6a74f7e59c7d3c88f2c"},{url:"complexsystem/random-graph-models/watts-strogatz-model-small-world-network.html",revision:"e2b9a5953b05db1f6dd6cd2b644bf23b"},{url:"complexsystem/votermodel.html",revision:"5ebfe33e4489163165efeeafbb2ec3a2"},{url:"complexsystem/votermodel/influenceingscenarios.html",revision:"99b2cb8eb8a21ea80a8ee3a10556dae1"},{url:"complexsystem/votermodel/representation.html",revision:"4a018fd3ae5b18e44d9643fbe43548f2"},{url:"index.html",revision:"20c7ed1f31ef01736cfa81dc0bd826f6"},{url:"katex.min.css",revision:"ad9cb8a0101a95fb2f50bbe24a57e578"},{url:"markdown-it.min.js",revision:"f9fce65c51ee84101279e5511a60bd9c"},{url:"favicon.svg",revision:"505fc25048cd39e43f4913849a1c62e0"},{url:"robots.txt",revision:"987497bfb623e1059632e5a607d56454"},{url:"safari-pinned-tab.svg",revision:"21a5632e21f7421e63e58f3a8a3e205e"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"5da07445f607740a9369e0c6ae7daf3b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
