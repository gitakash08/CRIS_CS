"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[8704],{38704:(c,_,t)=>{t.r(_),t.d(_,{previewWebStyleSymbol:()=>E});var o=t(84792),d=t(23841),m=t(71131),r=t(86606);function E(e,s,n){const h=e.thumbnail&&e.thumbnail.url;return h?(0,o.Z)(h,{responseType:"image"}).then(i=>{const l=function M(e,s){const n=!/\\.svg$/i.test(e.src)&&s&&s.disableUpsampling,h=Math.max(e.width,e.height);let i=null!=s?.maxSize?(0,d.F2)(s.maxSize):m.b_.maxSize;n&&(i=Math.min(h,i));const l="number"==typeof s?.size?s?.size:null,a=Math.min(i,null!=l?(0,d.F2)(l):h);if(a!==h){const u=0!==e.width&&0!==e.height?e.width/e.height:1;u>=1?(e.width=a,e.height=a/u):(e.width=a*u,e.height=a)}return e}(i.data,n);return n?.node?(n.node.appendChild(l),n.node):l}):(0,r.Q8)(e).then(i=>i?s(i,n):null)}}}]);