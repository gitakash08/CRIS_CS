"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[7755],{17002:(ee,j,m)=>{m.d(j,{BN:()=>T,Yc:()=>B,em:()=>z,mx:()=>b});var P=m(15861),U=m(59318);const z="arial-unicode-ms",R="woff2",L=new Map,f=new Set;class C{constructor(p,O){this.fontFace=p,this.promise=O}}function b(i){return F.apply(this,arguments)}function F(){return(F=(0,P.Z)(function*(i){const p=B(i),O=L.get(p);if(O)return O.promise;const _=new FontFace(i.family,`url('${U.Z.fontsUrl}/woff2/${p}.${R}') format('${R}')`,{style:i.style,weight:i.weight}),A=document.fonts;if(A.has(_)&&"loading"===_.status)return _.loaded;const I=_.load().then(()=>(A.add(_),_));return L.set(p,new C(_,I)),f.add(_),I})).apply(this,arguments)}function T(i){if(!i)return z;const p=i.toLowerCase().split(" ").join("-");switch(p){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return p}}function B(i){const p=function Z(i){if(!i.weight)return"";switch(i.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}(i)+function K(i){if(!i.style)return"";switch(i.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}(i);return T(i.family)+(p.length>0?p:"-regular")}},67755:(ee,j,m)=>{m.r(j),m.d(j,{getContrastingBackgroundTheme:()=>Y,getRenderSymbolParameters:()=>J,previewSymbol2D:()=>re});var P=m(15861),U=m(91558),z=m(78260),R=m(26584),L=m(17002),f=m(23841),C=m(74741),b=m(71131),F=m(34057),S=m(50369);const W="picture-fill",T="picture-marker",B="simple-fill",Z="simple-line",K="simple-marker",i="text",p="Aa",O=b.b_.size,_=b.b_.maxSize,A=b.b_.maxOutlineSize,I=b.b_.lineWidth,G=225,te=document.createElement("canvas");function X(t,e){const a=te.getContext("2d"),n=[];return e&&(e.weight&&n.push(e.weight),e.size&&n.push(e.size+"px"),e.family&&n.push(e.family)),a.font=n.join(" "),a.measureText(t).width}const ne=7.2/2.54,ae=72/2.54;function D(t){const e=t?.size;return{width:null!=e&&"object"==typeof e&&"width"in e?(0,f.F2)(e.width):null,height:null!=e&&"object"==typeof e&&"height"in e?(0,f.F2)(e.height):null}}function V(){return(V=(0,P.Z)(function*(t,e){const a=e.fill,n=t.color;if("pattern"===a?.type&&n&&t.type!==W){const c=yield(0,C.Od)(a.src,n.toCss(!0));a.src=c,e.fill=a}})).apply(this,arguments)}function $(){return($=(0,P.Z)(function*(t,e,a,n){if(!("font"in t)||!t.font||"text"!==e.shape.type)return;try{yield(0,L.mx)(t.font)}catch{}const{width:c}=D(n),r=/[\uE600-\uE6FF]/.test(e.shape.text);null!=c||r||(a[0]=X(e.shape.text,{weight:e.font?.weight,size:e.font?.size,family:e.font?.family}))})).apply(this,arguments)}function H(t,e){return t>e?"dark":"light"}function J(t,e){const a="number"==typeof e?.size?e?.size:null,n=null!=a?(0,f.F2)(a):null,c=null!=e?.maxSize?(0,f.F2)(e.maxSize):null,r=null!=e?.rotation?e.rotation:"angle"in t?t.angle:null,v=(0,C._M)(t);let y=(0,C.mx)(t);"dark"!==Y(t,245)||e?.ignoreWhiteSymbols||(y={width:.75,...y,color:"#bdc3c7"});const d={shape:null,fill:v,stroke:y,offset:[0,0]};y?.width&&(y.width=Math.min(y.width,A));const g=y?.width||0;let E=null!=e?.size&&(null==e?.scale||e?.scale),s=0,l=0,k=!1;switch(t.type){case K:{const u=t.style,{width:h,height:o}=D(e),x=h===o&&null!=h?h:n??Math.min((0,f.F2)(t.size),c||_);switch(s=x,l=x,u){case"circle":d.shape={type:"circle",cx:0,cy:0,r:.5*x},E||(s+=g,l+=g);break;case"cross":d.shape={type:"path",path:[{command:"M",values:[0,.5*l]},{command:"L",values:[s,.5*l]},{command:"M",values:[.5*s,0]},{command:"L",values:[.5*s,l]}]};break;case"diamond":d.shape={type:"path",path:[{command:"M",values:[0,.5*l]},{command:"L",values:[.5*s,0]},{command:"L",values:[s,.5*l]},{command:"L",values:[.5*s,l]},{command:"Z",values:[]}]},E||(s+=g,l+=g);break;case"square":d.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[s,0]},{command:"L",values:[s,l]},{command:"L",values:[0,l]},{command:"Z",values:[]}]},E||(s+=g,l+=g),r&&(k=!0);break;case"triangle":d.shape={type:"path",path:[{command:"M",values:[.5*s,0]},{command:"L",values:[s,l]},{command:"L",values:[0,l]},{command:"Z",values:[]}]},E||(s+=g,l+=g),r&&(k=!0);break;case"x":d.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[s,l]},{command:"M",values:[s,0]},{command:"L",values:[0,l]}]},r&&(k=!0);break;case"path":d.shape={type:"path",path:t.path||""},E||(s+=g,l+=g),r&&(k=!0),E=!0}break}case Z:{const{width:u,height:h}=D(e),o=h??n??g,x=u??I;y&&(y.width=o),s=x,l=o;const M=d?.stroke?.cap||"butt",w="round"===M;E=!0,d.stroke&&(d.stroke.cap="butt"===M?"square":M),d.shape={type:"path",path:[{command:"M",values:[w?o/2:0,l/2]},{command:"L",values:[w?s-o/2:s,l/2]}]};break}case W:case B:{const u="object"==typeof e?.symbolConfig&&!!e?.symbolConfig?.isSquareFill,{width:h,height:o}=D(e);s=!u&&h!==o||null==h?n??O:h,l=!u&&h!==o||null==o?s:o,E||(s+=g,l+=g),E=!0,d.shape=u?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[s,0]},{command:"L",values:[s,l]},{command:"L",values:[0,l]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:b.JZ.fill[0];break}case T:{const u=Math.min((0,f.F2)(t.width),c||_),h=Math.min((0,f.F2)(t.height),c||_),{width:o,height:x}=D(e),M=o===x&&null!=o?o:n??Math.max(u,h),w=u/h;s=w<=1?Math.ceil(M*w):M,l=w<=1?M:Math.ceil(M/w),d.shape={type:"image",x:-Math.round(s/2),y:-Math.round(l/2),width:s,height:l,src:t.url||""},r&&(k=!0);break}case i:{const u=t,h=e?.overrideText||u.text||p,o=u.font,{width:x,height:M}=D(e),w=M??n??Math.min((0,f.F2)(o.size),c||_),ce=X(h,{weight:o.weight,size:w,family:o.family}),Q=/[\uE600-\uE6FF]/.test(h);s=x??(Q?w:ce),l=w;let q=.25*function se(t){if(0===t.length)return 0;if(t.length>2){const e=(0,f.Wz)(1),a=parseFloat(t);switch(t.slice(-2)){case"px":return a;case"pt":return a*e;case"in":return 72*a*e;case"pc":return 12*a*e;case"mm":return a*ne*e;case"cm":return a*ae*e}}return parseFloat(t)}((o?w:0).toString());Q&&(q+=5),d.shape={type:"text",text:h,x:u.xoffset||0,y:u.yoffset||q,align:"middle",alignBaseline:u.verticalAlignment,decoration:o&&o.decoration,rotated:u.rotated,kerning:u.kerning},d.font=o&&{size:w,style:o.style,decoration:o.decoration,weight:o.weight,family:o.family};break}}return{shapeDescriptor:d,size:[s,l],renderOptions:{node:e?.node,scale:E,opacity:e?.opacity,rotation:r,useRotationSize:k,effectView:e?.effectView,ariaLabel:e?.ariaLabel}}}function re(t,e){return N.apply(this,arguments)}function N(){return N=(0,P.Z)(function*(t,e){const{shapeDescriptor:a,size:n,renderOptions:c}=J(t,e);if(!a.shape)throw new R.Z("symbolPreview: renderPreviewHTML2D","symbol not supported.");yield function le(t,e){return V.apply(this,arguments)}(t,a),yield function oe(t,e,a,n){return $.apply(this,arguments)}(t,a,n,e);const r=[[a]];if("object"==typeof e?.symbolConfig&&e?.symbolConfig?.applyColorModulation){const v=.6*n[0];r.unshift([{...a,offset:[-v,0],fill:(0,b.dc)(a.fill,-.3)}]),r.push([{...a,offset:[v,0],fill:(0,b.dc)(a.fill,.3)}]),n[0]+=2*v,c.scale=!1}return"text"===t.type&&function ie(t,e,a,n,c){if(null!=t.haloColor&&null!=t.haloSize){c.masking??=a.map(()=>[]);const r=(0,f.F2)(t.haloSize);n[0]+=r,n[1]+=r,a.unshift([{...e,fill:null,stroke:{color:t.haloColor,width:2*r,join:"round",cap:"round"}}]),c.masking.unshift([{shape:{type:"rect",x:0,y:0,width:n[0]+2*S.c9,height:n[1]+2*S.c9},fill:[255,255,255],stroke:null},{...e,fill:[0,0,0,0],stroke:null}])}null==t.backgroundColor&&null==t.borderLineColor||(n[0]+=2*S.c9,n[1]+=2*S.c9,a.unshift([{shape:{type:"rect",x:0,y:0,width:n[0],height:n[1]},fill:t.backgroundColor,stroke:{color:t.borderLineColor,width:(0,f.F2)(t.borderLineSize)}}]),c.masking?.unshift([]))}(t,a,r,n,c),(0,F.wh)(r,n,c)}),N.apply(this,arguments)}function Y(t,e=G){const a=(0,C._M)(t),n=(0,C.mx)(t),c=!a||"type"in a?null:new U.Z(a),r=n?.color?new U.Z(n?.color):null,v=c?H((0,z.EX)(c),e):null,y=r?H((0,z.EX)(r),e):null;return y?v?v===y?v:e>=G?"light":"dark":y:v}}}]);