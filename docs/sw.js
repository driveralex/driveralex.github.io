if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const o=e=>i(e,n),t={module:{uri:n},exports:a,require:o};s[n]=Promise.all(l.map((e=>t[e]||o(e)))).then((e=>(r(...e),a)))}}define(["./workbox-455a0d7a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.f79a244d.js",revision:null},{url:"assets/app.0ff1674a.js",revision:null},{url:"assets/app.532b35f3.css",revision:null},{url:"assets/ButtonSection.5de0d717.css",revision:null},{url:"assets/ButtonSection.b76f77df.js",revision:null},{url:"assets/home.540d7921.js",revision:null},{url:"assets/index.0058cfdc.js",revision:null},{url:"assets/index.142345cd.js",revision:null},{url:"assets/index.25d61113.js",revision:null},{url:"assets/index.2fdaab46.js",revision:null},{url:"assets/index.3d3fa8a3.js",revision:null},{url:"assets/index.3edfb16d.js",revision:null},{url:"assets/index.50bbb63f.css",revision:null},{url:"assets/index.6736e660.js",revision:null},{url:"assets/index.6982958c.js",revision:null},{url:"assets/index.6a959c05.js",revision:null},{url:"assets/index.6bca2d6d.js",revision:null},{url:"assets/index.6dc28f2a.js",revision:null},{url:"assets/index.88554023.js",revision:null},{url:"assets/index.8a64d7ac.js",revision:null},{url:"assets/index.96edd614.js",revision:null},{url:"assets/index.9933223e.css",revision:null},{url:"assets/index.9e73a617.js",revision:null},{url:"assets/index.a524a716.js",revision:null},{url:"assets/index.b13069f3.js",revision:null},{url:"assets/index.e9f2d885.css",revision:null},{url:"assets/index.ea576c61.css",revision:null},{url:"assets/index.f1849def.js",revision:null},{url:"assets/index.f82f4880.js",revision:null},{url:"assets/index.fb0e1b88.js",revision:null},{url:"assets/laycs.211ed33d.js",revision:null},{url:"assets/vendor.2aa3e7d8.js",revision:null},{url:"assets/virtual_pwa-register.3e08f338.js",revision:null},{url:"complexsystem.html",revision:"8cac8936cb84da533b11b558591c1765"},{url:"complexsystem/epidemicmodels.html",revision:"85dd1ea96eadba7dcb2843e1519a38ce"},{url:"complexsystem/epidemicmodels/effectofconfinepeople.html",revision:"2d2faa3f6735c6cf7932596c6f1a7570"},{url:"complexsystem/epidemicmodels/implementation.html",revision:"8891d7641673734d0674a1a018287a11"},{url:"complexsystem/epidemicmodels/testandisolationstrategies.html",revision:"60e8ca2771e71c67fc121132976584dc"},{url:"complexsystem/getting-started.html",revision:"725ebd0085b0e2c32ed95d573dec4b33"},{url:"complexsystem/getting-started/breadth-first-search-algorithm-and-applications.html",revision:"d90775ecdbf766bc117d6157fc227390"},{url:"complexsystem/getting-started/igraph-package.html",revision:"c4e30ccbec6f1fc04d930a030e9bbcbd"},{url:"complexsystem/getting-started/representations-of-graph-and-first-metrics.html",revision:"285dcd30f807c0dca5b4bd0f78cad63c"},{url:"complexsystem/random-graph-models.html",revision:"b2ae9bec29ff5e8e44943d742a1ae070"},{url:"complexsystem/random-graph-models/erdos-renyi-average-length-as-function-of-p.html",revision:"7343ca0f7f54eca9e76fcc0daa5dd250"},{url:"complexsystem/random-graph-models/erdos-renyi-clustering-coefficient-as-functions-of-p.html",revision:"5f34a9fe69db8b42ce05c3ce8c3b6c42"},{url:"complexsystem/random-graph-models/erdos-renyi-model.html",revision:"64785eaecd459c561e306cfde6ea741b"},{url:"complexsystem/random-graph-models/graph-scale-free.html",revision:"9c2d8c0d80c92ceab5543c42a5aea320"},{url:"complexsystem/random-graph-models/histograms-of-the-degree-distribution.html",revision:"0d35fdaaeeb55b8734b558ee08606565"},{url:"complexsystem/random-graph-models/scale-free-power-law-degree-distribution.html",revision:"94f727832c8a05df9ed4610bd1cb2687"},{url:"complexsystem/random-graph-models/watts-strogatz-model-small-world-network.html",revision:"5b8da2a4ed1baef3b00039cb447f0972"},{url:"complexsystem/votermodel.html",revision:"988201a8980eda50e8cae48b3e817aad"},{url:"complexsystem/votermodel/influenceingscenarios.html",revision:"ff2f5a6f10dbe9a9151657548981966c"},{url:"complexsystem/votermodel/representation.html",revision:"735edc8006b7e1e29c380a9a9799fa21"},{url:"index.html",revision:"99de82243e4cbee4e86cf8ec86d802a4"},{url:"katex.min.css",revision:"ad9cb8a0101a95fb2f50bbe24a57e578"},{url:"markdown-it.min.js",revision:"f9fce65c51ee84101279e5511a60bd9c"},{url:"favicon.svg",revision:"505fc25048cd39e43f4913849a1c62e0"},{url:"robots.txt",revision:"987497bfb623e1059632e5a607d56454"},{url:"safari-pinned-tab.svg",revision:"21a5632e21f7421e63e58f3a8a3e205e"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"5da07445f607740a9369e0c6ae7daf3b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));