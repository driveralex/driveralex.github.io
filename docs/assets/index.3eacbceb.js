import{d as t,e as r,f as a,D as f,r as v,l as y,E as M,b as A,t as m,i as n,v as c,s as k,F as g,x,u as l,q as B}from"./vendor.c6d6bfe0.js";import{_ as w}from"./app.19bd1e91.js";const N={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 64 64"},S=a("path",{fill:"currentColor",d:"M32 2L2 62h60z"},null,-1),D=[S];function V(s,e){return t(),r("svg",N,D)}var z={name:"emojione-monotone-red-triangle-pointed-up",render:V};const L={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 16 16"},R=a("path",{fill:"currentColor",d:"M11.5 12.5a3.493 3.493 0 0 1-2.684-1.254a19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907a3.5 3.5 0 1 1-2.538-5.743a3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5z"},null,-1),j=[R];function Y(s,e){return t(),r("svg",L,j)}var F={name:"bi-suit-club-fill",render:Y};const H={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 16 16"},O=a("path",{fill:"currentColor","fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15C-7.534 4.736 3.562-3.248 8 1.314z"},null,-1),P=[O];function T(s,e){return t(),r("svg",H,P)}var J={name:"bi-heart-fill",render:T};const q={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 16 16"},E=a("path",{fill:"currentColor",d:"M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246a19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907z"},null,-1),G=[E];function W(s,e){return t(),r("svg",q,G)}var K={name:"bi-suit-spade-fill",render:W};const Q={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 16 16"},U=a("path",{fill:"currentColor",d:"M2.45 7.4L7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z"},null,-1),X=[U];function Z(s,e){return t(),r("svg",Q,X)}var ee={name:"bi-suit-diamond-fill",render:Z};class b{constructor(e,o){this.value=e,this.color=o,this.display=!1}get theinfo(){return console.log(`Card is color is ${this.calcolor()} and ${this.calvalue()}`),this.color}calcolor(){switch(this.color){case 0:return"pic";case 1:return"treffle";case 2:return"heart";case 3:return"carro"}}calcViewColor(){switch(this.color){case 0:return"black";case 1:return"black";case 2:return"red";case 3:return"red";default:return"orange"}}calvalue(){switch(this.value){case 11:return"J";case 12:return"Q";case 0:return"K";default:return JSON.stringify(this.value)}}classInside(){switch(this.value){case 11:return"head";case 1:return"one";case 2:return"two";case 3:return"three";case 4:return"four";case 5:return"five";case 6:return"six";case 7:return"seven";case 8:return"eight";case 9:return"nine";case 10:return"ten";default:return"bug"}}isHead(){switch(this.value){case 11:return!0;case 12:return!0;case 0:return!0;default:return!1}}}f("card",()=>({card:v(new b(0,3))}));const te={class:"card"},re={key:0,class:"hiddenCard"},ae={key:1,class:"cardContent"},se={class:"cardStandardBefore"},ne={key:0},ce={key:1},oe={key:2},ie={key:3},de={class:"node"},le={key:0},ue={key:1},_e={key:2},he={key:3},pe={class:"cardStandardAfter"},fe={key:0},ve={key:1},me={key:2},be={key:3},Ce=y({props:{card:{type:b,required:!0}},setup(s){const e=s;M(i=>({e0a2735e:l(o)}));const o=A(()=>e.card.calcViewColor());return(i,h)=>{const u=ee,d=K,_=J,p=F;return t(),r("div",te,[e.card.display==!1?(t(),r("div",re)):(t(),r("div",ae,[a("div",se,[a("p",null,m(e.card.calvalue()),1),e.card.calcolor()=="carro"?(t(),r("div",ne,[n(u)])):c("",!0),e.card.calcolor()=="pic"?(t(),r("div",ce,[n(d)])):c("",!0),e.card.calcolor()=="heart"?(t(),r("div",oe,[n(_)])):c("",!0),e.card.calcolor()=="treffle"?(t(),r("div",ie,[n(p)])):c("",!0)]),e.card.isHead()?c("",!0):(t(),r("div",{key:0,class:k(["cardInside",e.card.classInside()])},[(t(!0),r(g,null,x(parseInt(e.card.calvalue()),Se=>(t(),r("div",de,[e.card.calcolor()=="carro"?(t(),r("div",le,[n(u)])):c("",!0),e.card.calcolor()=="pic"?(t(),r("div",ue,[n(d)])):c("",!0),e.card.calcolor()=="heart"?(t(),r("div",_e,[n(_)])):c("",!0),e.card.calcolor()=="treffle"?(t(),r("div",he,[n(p)])):c("",!0)]))),256))],2)),a("div",pe,[a("p",null,m(e.card.calvalue()),1),e.card.calcolor()=="carro"?(t(),r("div",fe,[n(u)])):c("",!0),e.card.calcolor()=="pic"?(t(),r("div",ve,[n(d)])):c("",!0),e.card.calcolor()=="heart"?(t(),r("div",me,[n(_)])):c("",!0),e.card.calcolor()=="treffle"?(t(),r("div",be,[n(p)])):c("",!0)])]))])}}});class C{constructor(){this.initNewDeck()}get info(){for(let e of this.pile)e.theinfo}get nbOfCards(){return this.pile.length}initNewDeck(){this.pile=[];for(let e=0;e<52;e++)this.addtopile(new b(Math.floor(e/4),e%4))}addtopile(e){this.pile.push(e)}drawCard(){let e=Math.floor(Math.random()*this.pile.length),o=this.pile[e];return this.pile=this.pile.filter((i,h,u)=>e!==h),o.theinfo,o}}f("deck",()=>({deck:v(new C)}));class ye{constructor(e){this.playerCanAct=!0,this.playingCardIndex=0,this.table=[],this.deck=e;for(let o=0;o<5;++o)this.table.push(this.deck.drawCard())}diplayTable(){return JSON.stringify(this.table)}pastable(){return this.table}playerDeckNbCard(){return Object.keys(this.deck.pile).length}startNewGame(){this.playerCanAct=!0,this.playingCardIndex=0,this.table=[],this.deck=new C;for(let e=0;e<5;++e)this.table.push(this.deck.drawCard())}checkForWin(){this.playingCardIndex===5&&alert("C'est la win")}bet(e){this.playerCanAct===!0&&(this.playerCanAct=!1,this.table[this.playingCardIndex].calcViewColor()===e?(this.table[this.playingCardIndex].display=!0,this.playingCardIndex++,setTimeout(()=>{this.playerCanAct=!0},200)):(this.table[this.playingCardIndex].display=!0,setTimeout(()=>{this.playerCanAct=!0},2e3),setTimeout(()=>{for(;this.playingCardIndex>=0;)this.table[this.playingCardIndex]=this.deck.drawCard(),this.playingCardIndex--;this.playingCardIndex=0},2e3)),this.checkForWin())}playerCanChose(){return this.playerCanAct?"clikable":"noclikable"}}const ke=f("board",()=>({board:v(new ye(new C))}));const ge={class:"boradStyle"},xe={class:"table"},we={class:"cards"},$e={key:0},Ie={class:"underCards"},Me={class:"info"},Ae=y({setup(s){const e=ke();return(o,i)=>{const h=Ce,u=z;return t(),r("div",ge,[a("div",xe,[(t(!0),r(g,null,x(l(e).board.pastable(),(d,_)=>(t(),r("div",we,[n(h,{card:d},null,8,["card"]),_===l(e).board.playingCardIndex?(t(),r("div",$e,[n(u)])):c("",!0)]))),256))]),a("div",Ie,[a("div",Me,[a("p",null,"Il reste "+m(l(e).board.playerDeckNbCard())+" carte dans le deck",1),a("button",{class:"btn",onClick:i[0]||(i[0]=d=>l(e).board.startNewGame())},"Start a new game")]),a("div",{class:k(["selectors",l(e).board.playerCanChose()])},[a("button",{class:"btn red",onClick:i[1]||(i[1]=d=>l(e).board.bet("red"))},"Red"),a("button",{class:"btn black",onClick:i[2]||(i[2]=d=>l(e).board.bet("black"))},"Black")],2)])])}}});var Be=w(Ae,[["__scopeId","data-v-80000154"]]),$={};const I={};function Ne(s,e){const o=Be;return t(),B(o)}typeof $=="function"&&$(I);var ze=w(I,[["render",Ne]]);export{ze as default};
