if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const o=e=>i(e,n),t={module:{uri:n},exports:a,require:o};s[n]=Promise.all(l.map((e=>t[e]||o(e)))).then((e=>(r(...e),a)))}}define(["./workbox-455a0d7a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.884b5ec8.js",revision:null},{url:"assets/app.3607838d.js",revision:null},{url:"assets/app.c418bacc.css",revision:null},{url:"assets/ButtonSection.7b5a3da2.css",revision:null},{url:"assets/ButtonSection.a2e21b1c.js",revision:null},{url:"assets/home.585feccc.js",revision:null},{url:"assets/index.02c0cfd6.js",revision:null},{url:"assets/index.06524de2.css",revision:null},{url:"assets/index.12066b87.js",revision:null},{url:"assets/index.16d776b0.js",revision:null},{url:"assets/index.2f44a0b2.js",revision:null},{url:"assets/index.32c4bf3e.js",revision:null},{url:"assets/index.455ee0dd.js",revision:null},{url:"assets/index.4ba30510.js",revision:null},{url:"assets/index.63fceda4.css",revision:null},{url:"assets/index.6591d1b1.js",revision:null},{url:"assets/index.737af21b.js",revision:null},{url:"assets/index.7c3b151f.js",revision:null},{url:"assets/index.809b3050.js",revision:null},{url:"assets/index.82507a7e.js",revision:null},{url:"assets/index.827b88fa.css",revision:null},{url:"assets/index.a37cd86d.js",revision:null},{url:"assets/index.b8fe21f6.js",revision:null},{url:"assets/index.b9eacf0b.js",revision:null},{url:"assets/index.bfb1f282.css",revision:null},{url:"assets/index.db07a7fe.js",revision:null},{url:"assets/index.dc625ab6.js",revision:null},{url:"assets/index.e28d9cd5.js",revision:null},{url:"assets/index.fd413c7f.js",revision:null},{url:"assets/index.fd6c03b2.js",revision:null},{url:"assets/laycs.c420b706.js",revision:null},{url:"assets/vendor.d933a0e7.js",revision:null},{url:"assets/virtual_pwa-register.3e08f338.js",revision:null},{url:"complexsystem.html",revision:"134676bdc34cd594badbb676c0344502"},{url:"complexsystem/epidemicmodels.html",revision:"f7c81758beb15cafbe9bae08e6d45449"},{url:"complexsystem/epidemicmodels/effectofconfinepeople.html",revision:"70d6aeed05719c9cd1876273bcce37d8"},{url:"complexsystem/epidemicmodels/implementation.html",revision:"00b1299af82137a854fd25586a45940c"},{url:"complexsystem/epidemicmodels/testandisolationstrategies.html",revision:"5dd5dbb92c999b8c763be8bfcfa31014"},{url:"complexsystem/getting-started.html",revision:"8120fbcf409a80a1ae7c94169bdbaba3"},{url:"complexsystem/getting-started/breadth-first-search-algorithm-and-applications.html",revision:"95af38a004525f33d7a4a4630ac64aee"},{url:"complexsystem/getting-started/igraph-package.html",revision:"762af5dd58320c1927acbc21649cd5b7"},{url:"complexsystem/getting-started/representations-of-graph-and-first-metrics.html",revision:"b23679392f3328d6fc9916a28cc28d22"},{url:"complexsystem/random-graph-models.html",revision:"6fd8801167c15b42435b1cd1f7a2eb6f"},{url:"complexsystem/random-graph-models/erdos-renyi-average-length-as-function-of-p.html",revision:"2bb2f9241240eda7219026641e69fb41"},{url:"complexsystem/random-graph-models/erdos-renyi-clustering-coefficient-as-functions-of-p.html",revision:"d2fbc7f93470282e352410f4fa7f9c58"},{url:"complexsystem/random-graph-models/erdos-renyi-model.html",revision:"7318b627e16deb2be996224496a3c417"},{url:"complexsystem/random-graph-models/graph-scale-free.html",revision:"caa059f72a12e887741ee9d2de56ecad"},{url:"complexsystem/random-graph-models/histograms-of-the-degree-distribution.html",revision:"dd62926c30a80614304ec7966ea21afc"},{url:"complexsystem/random-graph-models/scale-free-power-law-degree-distribution.html",revision:"7ffd2bd3b15fe3a1ddcc6eb9c3423d31"},{url:"complexsystem/random-graph-models/watts-strogatz-model-small-world-network.html",revision:"88cfad7e5d72efa430a41a2e97f1cfc4"},{url:"complexsystem/votermodel.html",revision:"b4b73508ba1d48cfe6e3cd2cc648d373"},{url:"complexsystem/votermodel/influenceingscenarios.html",revision:"ae81c1b39bef31ba485834712161860a"},{url:"complexsystem/votermodel/representation.html",revision:"19bce45e23db6a198f4a9c83fe0d73ef"},{url:"index.html",revision:"bf42feb3ea30249134cf8eb427d89493"},{url:"katex.min.css",revision:"ad9cb8a0101a95fb2f50bbe24a57e578"},{url:"markdown-it.min.js",revision:"f9fce65c51ee84101279e5511a60bd9c"},{url:"favicon.svg",revision:"505fc25048cd39e43f4913849a1c62e0"},{url:"robots.txt",revision:"987497bfb623e1059632e5a607d56454"},{url:"safari-pinned-tab.svg",revision:"21a5632e21f7421e63e58f3a8a3e205e"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"5da07445f607740a9369e0c6ae7daf3b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
