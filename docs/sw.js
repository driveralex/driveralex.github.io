if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const o=e=>i(e,n),t={module:{uri:n},exports:a,require:o};s[n]=Promise.all(l.map((e=>t[e]||o(e)))).then((e=>(r(...e),a)))}}define(["./workbox-455a0d7a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.6bea434a.js",revision:null},{url:"assets/app.0632e9a6.css",revision:null},{url:"assets/app.48e9e613.js",revision:null},{url:"assets/ButtonSection.7715d9cf.js",revision:null},{url:"assets/ButtonSection.e15518be.css",revision:null},{url:"assets/card.7fd5f91a.js",revision:null},{url:"assets/home.c9058e87.js",revision:null},{url:"assets/index.06a05f68.css",revision:null},{url:"assets/index.07cb0a19.js",revision:null},{url:"assets/index.08dafae9.css",revision:null},{url:"assets/index.1533e5e0.js",revision:null},{url:"assets/index.1cd3c705.js",revision:null},{url:"assets/index.1d6948de.js",revision:null},{url:"assets/index.25f09295.js",revision:null},{url:"assets/index.2790279f.css",revision:null},{url:"assets/index.2ef44acb.js",revision:null},{url:"assets/index.468d113e.js",revision:null},{url:"assets/index.4b0ce497.js",revision:null},{url:"assets/index.4de577d2.js",revision:null},{url:"assets/index.65b657af.js",revision:null},{url:"assets/index.6b66b216.js",revision:null},{url:"assets/index.6e5e4c1f.js",revision:null},{url:"assets/index.748e31a5.js",revision:null},{url:"assets/index.783fb29f.js",revision:null},{url:"assets/index.8c1ca9a3.js",revision:null},{url:"assets/index.92cc37f9.js",revision:null},{url:"assets/index.aa7107cd.js",revision:null},{url:"assets/index.b175dd9f.css",revision:null},{url:"assets/index.bc1fb21f.css",revision:null},{url:"assets/index.bcc35ff3.js",revision:null},{url:"assets/index.c29f0f16.css",revision:null},{url:"assets/index.d6588991.js",revision:null},{url:"assets/index.e3e5a4bc.js",revision:null},{url:"assets/index.e4973c75.js",revision:null},{url:"assets/laycs.0e9251f1.js",revision:null},{url:"assets/trois.f7d6d41e.js",revision:null},{url:"assets/vendor.c6d6bfe0.js",revision:null},{url:"assets/virtual_pwa-register.3e08f338.js",revision:null},{url:"autoroute.html",revision:"191e5021ed3feb8ca39c93c04812b0aa"},{url:"complexsystem.html",revision:"5167a3378a1ac4389a96934e58304f70"},{url:"complexsystem/epidemicmodels.html",revision:"5231f71b8a3d8c03a973d783040166bb"},{url:"complexsystem/epidemicmodels/effectofconfinepeople.html",revision:"be8c13d06b3726dbc5d58d72c16467e7"},{url:"complexsystem/epidemicmodels/implementation.html",revision:"59aa8ccf3117e7f5de5d4ace86d9d7ef"},{url:"complexsystem/epidemicmodels/testandisolationstrategies.html",revision:"f5d60bcf261365e4bfec28cd39a9e6bb"},{url:"complexsystem/getting-started.html",revision:"7d6d95fca8a596c3453bbde21436066a"},{url:"complexsystem/getting-started/breadth-first-search-algorithm-and-applications.html",revision:"ec3d1318ef9f798753d9587c2eb9b736"},{url:"complexsystem/getting-started/igraph-package.html",revision:"960483a0d6b4a75f8022de4f4a53a886"},{url:"complexsystem/getting-started/representations-of-graph-and-first-metrics.html",revision:"448a7576f299391a154b36c60abdfe83"},{url:"complexsystem/random-graph-models.html",revision:"6997fb90b4e6413e70e02812bfd9c4f0"},{url:"complexsystem/random-graph-models/erdos-renyi-average-length-as-function-of-p.html",revision:"b6bf8d35b9a9f778b06082a50b801dfa"},{url:"complexsystem/random-graph-models/erdos-renyi-clustering-coefficient-as-functions-of-p.html",revision:"99e26e1ed62be6442e158a95c3248c8d"},{url:"complexsystem/random-graph-models/erdos-renyi-model.html",revision:"6aeca3cc640d43e8ad030b64778e2148"},{url:"complexsystem/random-graph-models/graph-scale-free.html",revision:"e2f3eabc0e251199a80bbcdaef5e195f"},{url:"complexsystem/random-graph-models/histograms-of-the-degree-distribution.html",revision:"47ce9782bfd1a5fb08d3ef7150f8c75e"},{url:"complexsystem/random-graph-models/scale-free-power-law-degree-distribution.html",revision:"b5ead12a5ce48946385e2b367733d839"},{url:"complexsystem/random-graph-models/watts-strogatz-model-small-world-network.html",revision:"4fc3ab9a893fb566711d2d8095ecccec"},{url:"complexsystem/votermodel.html",revision:"d8494ab4384999ba105263a1d6660ac7"},{url:"complexsystem/votermodel/influenceingscenarios.html",revision:"3027f3e19fc94e6048f6db6611b25422"},{url:"complexsystem/votermodel/representation.html",revision:"d8942fac80741bb1de897c77b75445a1"},{url:"index.html",revision:"77ebf32ffbd8f133159ae1155e6a50f7"},{url:"katex.min.css",revision:"ad9cb8a0101a95fb2f50bbe24a57e578"},{url:"markdown-it.min.js",revision:"f9fce65c51ee84101279e5511a60bd9c"},{url:"favicon.svg",revision:"505fc25048cd39e43f4913849a1c62e0"},{url:"robots.txt",revision:"987497bfb623e1059632e5a607d56454"},{url:"safari-pinned-tab.svg",revision:"21a5632e21f7421e63e58f3a8a3e205e"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"5da07445f607740a9369e0c6ae7daf3b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
