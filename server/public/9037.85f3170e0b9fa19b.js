"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[9037],{80991:(ee,G,u)=>{function T(e){return"function"==typeof e}function H(e,n,c,a){return T(e)?e(n,c,a):e}function R(e){return[e.r,e.g,e.b,e.a]}u.d(G,{$Z:()=>J,BX:()=>$,Cc:()=>b,E_:()=>U,F:()=>r,FG:()=>i,H1:()=>Z,JW:()=>f,NA:()=>D,NO:()=>V,On:()=>_,QI:()=>N,Qf:()=>s,Qs:()=>I,RI:()=>P,TB:()=>o,TT:()=>B,W7:()=>A,X_:()=>t,be:()=>d,cO:()=>E,gJ:()=>v,hf:()=>H,nn:()=>R,pJ:()=>j,wO:()=>T,wi:()=>X,yL:()=>g,zL:()=>y});const Q=" /-,\n";function W(e){let n=e.length;for(;n--;)if(!Q.includes(e.charAt(n)))return!1;return!0}function Z(e,n){const c=[];let a=0,l=-1;do{if(l=e.indexOf("[",a),l>=a){if(l>a){const h=e.substr(a,l-a);c.push([h,null,W(h)])}if(a=l+1,l=e.indexOf("]",a),l>=a){if(l>a){const h=n[e.substr(a,l-a)];h&&c.push([null,h,!1])}a=l+1}}}while(-1!==l);if(a<e.length-1){const h=e.substr(a);c.push([h,null,W(h)])}return c}function U(e,n,c){let a="",l=null;for(const h of n){const[p,M,m]=h;if(p)m?l=p:(l&&(a+=l,l=null),a+=p);else{const x=e.attributes[M];x&&(l&&(a+=l,l=null),a+=x)}}return N(a,c)}function I(e,n,c){const a=Z(n,e);return l=>U(l,a,c)}function N(e,n){switch("string"!=typeof e&&(e=String(e)),n){case"LowerCase":return e.toLowerCase();case"Allcaps":return e.toUpperCase();default:return e}}function B(e,n,c,a,l,h,p=!0){const M=n/l,m=c/h,x=Math.ceil(M/2),K=Math.ceil(m/2);for(let C=0;C<h;C++)for(let F=0;F<l;F++){const k=4*(F+(p?h-C-1:C)*l);let L=0,O=0,te=0,re=0,ne=0,se=0,ae=0;const oe=(C+.5)*m;for(let Y=Math.floor(C*m);Y<(C+1)*m;Y++){const ie=Math.abs(oe-(Y+.5))/K,le=(F+.5)*M,ce=ie*ie;for(let q=Math.floor(F*M);q<(F+1)*M;q++){let z=Math.abs(le-(q+.5))/x;const w=Math.sqrt(ce+z*z);w>=-1&&w<=1&&(L=2*w*w*w-3*w*w+1,L>0&&(z=4*(q+Y*n),ae+=L*e[z+3],te+=L,e[z+3]<255&&(L=L*e[z+3]/250),re+=L*e[z],ne+=L*e[z+1],se+=L*e[z+2],O+=L))}}a[k]=re/O,a[k+1]=ne/O,a[k+2]=se/O,a[k+3]=ae/te}}function V(e){return e?{r:e[0],g:e[1],b:e[2],a:e[3]/255}:{r:0,g:0,b:0,a:0}}function d(e){return e.data?.symbol??null}function y(e){return"CIMVectorMarker"===e.type||"CIMPictureMarker"===e.type||"CIMBarChartMarker"===e.type||"CIMCharacterMarker"===e.type||"CIMPieChartMarker"===e.type||"CIMStackedBarChartMarker"===e.type}function g(e){return"CIMGradientStroke"===e.type||"CIMPictureStroke"===e.type||"CIMSolidStroke"===e.type}function v(e){return null!=e&&("CIMMarkerPlacementAlongLineRandomSize"===e.type||"CIMMarkerPlacementAlongLineSameSize"===e.type||"CIMMarkerPlacementAlongLineVariableSize"===e.type||"CIMMarkerPlacementAtExtremities"===e.type||"CIMMarkerPlacementAtMeasuredUnits"===e.type||"CIMMarkerPlacementAtRatioPositions"===e.type||"CIMMarkerPlacementOnLine"===e.type||"CIMMarkerPlacementOnVertices"===e.type)}const D=(e,n=0)=>null==e||isNaN(e)?n:e,E=e=>e.tintColor?V(e.tintColor):{r:255,g:255,b:255,a:1},b=e=>{if(!e)return!1;for(const n of e)switch(n.type){case"CIMGeometricEffectBuffer":case"CIMGeometricEffectOffset":case"CIMGeometricEffectDonut":return!0}return!1};function P(){return Promise.all([u.e(4918),u.e(8592),u.e(5994)]).then(u.bind(u,32825))}function j(e){if(!e)return"normal";switch(e.toLowerCase()){case"italic":return"italic";case"oblique":return"oblique";default:return"normal"}}function _(e){if(!e)return"normal";switch(e.toLowerCase()){case"bold":return"bold";case"bolder":return"bolder";case"lighter":return"lighter";default:return"normal"}}function X(e){let n="normal",c="normal";if(e){const a=e.toLowerCase();a.includes("italic")?n="italic":a.includes("oblique")&&(n="oblique"),a.includes("bold")?c="bold":a.includes("light")&&(c="lighter")}return{style:n,weight:c}}function $(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}function A(e){if(!e)return null;switch(e.type){case"CIMPolygonSymbol":if(e.symbolLayers)for(const n of e.symbolLayers){const c=A(n);if(null!=c)return c}break;case"CIMTextSymbol":return A(e.symbol);case"CIMSolidFill":return e.color}}function J(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":{const n=e.symbolLayers;if(n)for(const c of n){const a=J(c);if(null!=a)return a}break}case"CIMTextSymbol":return J(e.symbol);case"CIMSolidStroke":return e.color}}function r(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":if(e.symbolLayers)for(const n of e.symbolLayers){const c=r(n);if(void 0!==c)return c}break;case"CIMTextSymbol":return r(e.symbol);case"CIMSolidStroke":case"CIMGradientStroke":case"CIMPictureStroke":return e.width}}function t(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":case"Justify":return"center"}}function i(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function s(e){return(e?Object.keys(e):[]).map(n=>({name:n,alias:n,type:"string"==typeof e[n]?"esriFieldTypeString":"esriFieldTypeDouble"}))}const o=e=>e.includes("data:image/svg+xml");function f(e){if(!e)return null;switch(e.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}},61517:(ee,G,u)=>{u.r(G),u.d(G,{default:()=>J});var T=u(15861),H=u(17626),R=u(986),U=(u(26584),u(8314),u(63290),u(62208)),I=u(10699),V=(u(90912),u(85931),u(76898)),d=u(84682),y=u(65234),g=u(99666),S=u(39406),v=u(55130),D=u(246),E=u(1825),b=u(32940),P=u(32954),j=u(13112);class _{constructor(t){this._remoteClient=t,this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){}fetchResource(t,i){var s=this;return(0,T.Z)(function*(){const o=s._resourceMap,f=o.get(t);if(f)return f;let e=s._inFlightResourceMap.get(t);if(e)return e;try{e=s._remoteClient.invoke("tileRenderer.fetchResource",{url:t},{...i}),s._inFlightResourceMap.set(t,e),e.then(n=>(s._inFlightResourceMap.delete(t),o.set(t,n),n))}catch(n){return(0,I.D_)(n)?null:{width:0,height:0}}return e})()}getResource(t){return this._resourceMap.get(t)??null}loadFont(t){return Promise.resolve(null)}}function X(r,t){return(!r.minScale||r.minScale>=t-t/4)&&(!r.maxScale||r.maxScale<=t+t/2)}function $(r){const t=r.message,i={message:{data:{},tileKey:t.tileKey,tileKeyOrigin:t.tileKeyOrigin,version:t.version},transferList:new Array};for(const s in t.data){const o=s,f=t.data[o];if(i.message.data[o]=null,null!=f){const e=f.stride,n=f.indices.slice(0),c=f.vertices.slice(0),a=f.records.slice(0),l=f.metrics?.slice(0),h={stride:e,indices:n,vertices:c,records:a,metrics:l};i.transferList.push(n,c,a),i.message.data[o]=h}}return i}let A=class extends j.Z{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map}initialize(){this.addHandles([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new _(this.remoteClient)}destroy(){this._resourceManagerProxy.destroy()}get supportsTileUpdates(){return!0}forEachBufferId(r){this._bufferIds.forEach(t=>{t.forEach(r)})}update(r,t){var i=this;return(0,T.Z)(function*(){const s=t.schema.processors[0];if("symbol"!==s.type)return;const o=(0,d.Hg)(i._schema,s);((0,d.uD)(o,"mesh")||(0,d.uD)(o,"target"))&&(r.mesh=!0,r.why?.mesh.push("Symbology changed"),i._schema=s,i._factory=i._createFactory(s),i._factory.update(s,i.tileStore.tileScheme.tileInfo))})()}onTileMessage(r,t,i,s){return(0,I.k_)(s),this._onTileData(r,t,i,s)}onTileClear(r,t){const i={clear:!0,end:t};return this._bufferData.delete(r.key.id),this._bufferIds.delete(r.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:r.id,data:i})}onTileError(r,t,i){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:r.id,error:t},{signal:i.signal})}onTileUpdate(r){for(const t of r.removed)this._bufferData.has(t.key.id)&&this._bufferData.delete(t.key.id),this._bufferIds.has(t.key.id)&&this._bufferIds.delete(t.key.id);for(const t of r.added)this._bufferData.forEach(i=>{for(const s of i)s.message.tileKey===t.id&&this._updateTileMesh("append",t,$(s),[],!1,!1,null)})}_addBufferData(r,t){this._bufferData.has(r)||this._bufferData.set(r,[]),this._bufferData.get(r)?.push($(t))}_createFactory(r){const{geometryType:t,objectIdField:i,fields:s}=this.service,f={geometryType:t,fields:s,spatialReference:y.Z.fromJSON(this.spatialReference)},e=new E.Wr((a,l)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",a,l),this.tileStore.tileScheme.tileInfo),{matcher:n,aggregateMatcher:c}=r.mesh;return this._store=e,this._matchers.feature=(0,b.fL)(n,e,f,this._resourceManagerProxy),this._matchers.aggregate=c?(0,b.fL)(c,e,f,this._resourceManagerProxy):null,new D.j(t,i,e)}_onTileData(r,t,i,s){var o=this;return(0,T.Z)(function*(){(0,I.k_)(s);const{type:f,addOrUpdate:e,remove:n,clear:c,end:a}=t,l=!!o._schema.mesh.sortKey;if(!e)return o.remoteClient.invoke("tileRenderer.onTileData",{tileKey:r.id,data:{type:f,addOrUpdate:null,remove:n,clear:c,end:a,sort:l}},s);const h=o._processFeatures(r,e,i,s,t.status?.version);try{const p=yield h;if(null==p)return o.remoteClient.invoke("tileRenderer.onTileData",{tileKey:r.id,data:{type:f,addOrUpdate:null,remove:n,clear:c,end:a,sort:l}},s);const M=[];for(const m of p){let x=!1;const K=m.message.bufferIds,C=r.key.id,F=m.message.tileKey;if(C!==F&&null!=K){if(!o.tileStore.get(F)){o._addBufferData(C,m),M.push(m);continue}let k=o._bufferIds.get(F);k||(k=new Set,o._bufferIds.set(F,k));const L=Array.from(K);for(const O of L){if(k.has(O)){x=!0;break}k.add(O)}}x||(o._addBufferData(C,m),M.push(m))}yield Promise.all(M.map(m=>{const x=r.key.id===m.message.tileKey;return o._updateTileMesh(f,r,m,x?t.remove:[],x&&t.end,!!t.clear,s.signal)}))}catch(p){o._handleError(r,p,s)}})()}_updateTileMesh(r,t,i,s,o,f,e){var n=this;return(0,T.Z)(function*(){const a=i.message.tileKey;a!==t.key.id&&(o=!1);const h=i?.message,p={type:r,addOrUpdate:h,remove:s,clear:f,end:o,sort:!!n._schema.mesh.sortKey},M={transferList:i?.transferList??[],signal:e};return(0,I.k_)(M),n.remoteClient.invoke("tileRenderer.onTileData",{tileKey:a,data:p},M)})()}_processFeatures(r,t,i,s,o){var f=this;return(0,T.Z)(function*(){if(null==t||!t.hasFeatures)return null;const e={transform:r.transform,hasZ:!1,hasM:!1},n=f._factory,c={viewingMode:"",scale:r.scale},a=yield f._matchers.feature,l=yield f._matchers.aggregate;(0,I.k_)(s);const h=f._getLabelInfos(r,t);return yield n.analyze(t.getCursor(),f._resourceManagerProxy,a,l,e,c),(0,I.k_)(s),f._writeFeatureSet(r,t,e,h,n,i,o)})()}_writeFeatureSet(r,t,i,s,o,f,e){const n=t.getSize(),c=this._schema.mesh.matcher.symbologyType,a=new v._(r.key.id,{features:n,records:n,metrics:0},c,f,c!==S.mD.HEATMAP,e),l={viewingMode:"",scale:r.scale},h=t.getCursor();for(;h.next();)try{const M=h.getDisplayId(),m=null!=s?s.get(M):null;o.writeCursor(a,h,i,l,r.level,m,this._resourceManagerProxy)}catch{}return a.serialize(r.tileInfoView.tileInfo.isWrappable)}_handleError(r,t,i){return(0,I.D_)(t)?Promise.resolve():this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:r.id,error:t.message},{signal:i.signal})}_getLabelingSchemaForScale(r){const t=this._schema.mesh.labels;if(null==t)return null;if("subtype"===t.type){const s={type:"subtype",classes:{}};let o=!1;for(const f in t.classes){const e=t.classes[f].filter(n=>X(n,r.scale));o=o||!!e.length,s.classes[f]=e}return o?s:null}const i=t.classes.filter(s=>X(s,r.scale));return i.length?{type:"simple",classes:i}:null}_getLabels(r,t){if("subtype"===t.type){const i=this.service.subtypeField;(0,U.O3)(i,"Expected to find subtype Field");const s=r.readAttribute(i);return null==s?[]:t.classes[s]??[]}return t.classes}_getLabelInfos(r,t){const i=this._getLabelingSchemaForScale(r);if(null==i)return null;const s=new Map,o=t.getCursor();for(;o.next();){const f=o.getDisplayId(),e=[],n=(0,g.nE)(f),c=n&&1!==o.readAttribute("cluster_count")?"aggregate":"feature",a=this._getLabels(o,i);for(const l of a){if(l.target!==c)continue;const p=o.getStorage().getComputedStringAtIndex(n&&"feature"===c?o.readAttribute("referenceId"):f,l.fieldIndex);if(!p)continue;const M=(0,R.E)(p.toString()),x=M[1];this._store.getMosaicItem(l.symbol,(0,P._)(M[0])).then(K=>{e[l.index]={glyphs:K.glyphMosaicItems??[],rtl:x,index:l.index}})}s.set(f,e)}return s}};A=(0,H._)([(0,V.j)("esri.views.2d.layers.features.processors.SymbolProcessor")],A);const J=A},51584:(ee,G,u)=>{u.d(G,{x:()=>V,B:()=>N});var T=u(15861),H=u(13871),R=u(39406),Q=u(18716);const W={marker:R.LW.MARKER,fill:R.LW.FILL,line:R.LW.LINE,text:R.LW.TEXT};class Z{constructor(y,g,S,v){const D={minScale:g?.minScale,maxScale:g?.maxScale},E=function U(d){return d.minScale||d.maxScale?d.minScale+"-"+d.maxScale:""}(D);this.layers=y,this.data=g,this.hash=this._createHash()+E,this.rendererKey=S;const b={isOutline:!1,placement:null,symbologyType:R.mD.DEFAULT,vvFlags:S};for(const P of y){const j=W[P.type];b.isOutline="line"===P.type&&P.isOutline,P.materialKey=(0,Q.jj)(j,b),P.maxVVSize=v,P.scaleInfo=D,P.templateHash+=E}}get type(){return"expanded-cim"}_createHash(){let y="";for(const g of this.layers)y+=g.templateHash;return y}}const I=function(){var d=(0,T.Z)(function*(y,g,S){const v=new H._(S,g);return new Z(yield v.analyzeSymbolReference(y.data,!1),y.data,y.rendererKey,y.maxVVSize)});return function(g,S,v){return d.apply(this,arguments)}}();function N(d,y,g,S){return B.apply(this,arguments)}function B(){return(B=(0,T.Z)(function*(d,y,g,S){if(!d)return null;if("cim"===d.type)return I(d,y,g);if("web-style"===d.type){const{fetchCIMSymbolReference:v}=yield Promise.all([u.e(8592),u.e(4740)]).then(u.bind(u,54740)),D={type:"cim",data:(yield v(d,null,S))??void 0,rendererKey:d.rendererKey,maxVVSize:d.maxVVSize};return I(D,y,g)}return d})).apply(this,arguments)}function V(d){if(!d)return null;const{avoidSDFRasterization:y,type:g,cim:S,url:v,materialHash:D,maxVVSize:E}=d,b={cim:S,type:g,mosaicHash:D,url:v,size:null,dashTemplate:null,path:null,text:null,fontName:null,animatedSymbolProperties:null,avoidSDFRasterization:y};switch(g){case"marker":E&&"size"in S&&(S.size=Math.max(E,S.size)),b.size=d.size,b.path=d.path,b.animatedSymbolProperties=d.animatedSymbolProperties;break;case"line":b.dashTemplate=d.dashTemplate;break;case"text":b.text=d.text,b.fontName=d.fontName}return b}}}]);