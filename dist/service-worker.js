if(!self.define){let a,e={};const s=(s,c)=>(s=new URL(s+".js",c).href,e[s]||new Promise((e=>{if("document"in self){const a=document.createElement("script");a.src=s,a.onload=e,document.head.appendChild(a)}else a=s,importScripts(s),e()})).then((()=>{let a=e[s];if(!a)throw new Error(`Module ${s} didn’t register its module`);return a})));self.define=(c,i)=>{const n=a||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let r={};const o=a=>s(a,n),l={module:{uri:n},exports:r,require:o};e[n]=Promise.all(c.map((a=>l[a]||o(a)))).then((a=>(i(...a),r)))}}define(["./workbox-db5fc017"],(function(a){"use strict";a.setCacheNameDetails({prefix:"acampa"}),self.addEventListener("message",(a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()})),a.precacheAndRoute([{url:"/acampa23/css/1.85d65a15.css",revision:null},{url:"/acampa23/css/app.76eda0ef.css",revision:null},{url:"/acampa23/css/chunk-vendors.748f1da9.css",revision:null},{url:"/acampa23/img/amigos-proposito.jpeg",revision:"99ad3cdbac2db51c881f5c16937e48ef"},{url:"/acampa23/img/amigos-proposito.png",revision:"f446c57902f8eeac43aa6991f8e6ed3d"},{url:"/acampa23/img/banner-desk.png",revision:"9ce23a04913ac63f9a7c670aa4253112"},{url:"/acampa23/img/banner-mobile.png",revision:"dbb1dfd6e352ba132df686d1460e8bec"},{url:"/acampa23/img/comuna.png",revision:"8e15fd16cf1b95161c777beb12f7199f"},{url:"/acampa23/img/mag_sbc.png",revision:"57f5c8a7a852a3053063656230266341"},{url:"/acampa23/img/mow.png",revision:"cdd7fae5885c8de8566e35b77a62db99"},{url:"/acampa23/index.html",revision:"e7207b9183e306604e42cd085c26e5ee"},{url:"/acampa23/js/1.b7b683d6.js",revision:null},{url:"/acampa23/js/417.f8aaf49e.js",revision:null},{url:"/acampa23/js/app.d3ab4a29.js",revision:null},{url:"/acampa23/js/chunk-vendors.e3647a37.js",revision:null},{url:"/acampa23/manifest.json",revision:"4457016eca2536e7ac8ec0dc7c685755"},{url:"/acampa23/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
