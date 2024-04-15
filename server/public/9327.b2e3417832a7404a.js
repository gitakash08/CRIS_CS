"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[9327],{98148:(P,A,h)=>{function y(w,l){const T=w.count;l||(l=new w.TypedArrayConstructor(T));for(let g=0;g<T;g++)l[g]=w.get(g);return l}h.d(A,{m:()=>y}),Object.freeze(Object.defineProperty({__proto__:null,makeDense:y},Symbol.toStringTag,{value:"Module"}))},35995:(P,A,h)=>{h.d(A,{a:()=>S,f:()=>l,n:()=>w});var y=h(55713);function S(g,i){w(g.typedBuffer,i.typedBuffer,g.typedBufferStride,i.typedBufferStride)}function w(g,i,_=2,d=_){const a=i.length/2;let n=0,u=0;if((0,y.kJ)(i)||(0,y.Q7)(i)){for(let m=0;m<a;++m)g[n]=i[u],g[n+1]=i[u+1],n+=_,u+=d;return}const f=(0,y.Op)(i);if((0,y.B3)(i))for(let m=0;m<a;++m)g[n]=Math.max(i[u]/f,-1),g[n+1]=Math.max(i[u+1]/f,-1),n+=_,u+=d;else for(let m=0;m<a;++m)g[n]=i[u]/f,g[n+1]=i[u+1]/f,n+=_,u+=d}function l(g,i,_,d){const a=g.typedBuffer,n=g.typedBufferStride,u=d?.count??g.count;let f=(d?.dstIndex??0)*n;for(let m=0;m<u;++m)a[f]=i,a[f+1]=_,f+=n}Object.freeze(Object.defineProperty({__proto__:null,fill:l,normalizeIntegerBuffer:w,normalizeIntegerBufferView:S},Symbol.toStringTag,{value:"Module"}))},9554:(P,A,h)=>{function y(T,g){S(T.typedBuffer,g.typedBuffer,T.typedBufferStride,g.typedBufferStride)}function S(T,g,i=3,_=i){const d=g.length/_;let a=0,n=0;for(let u=0;u<d;++u)T[a]=g[n],T[a+1]=g[n+1],T[a+2]=g[n+2],a+=i,n+=_}function w(T,g,i,_,d){const a=T.typedBuffer,n=T.typedBufferStride,u=d?.count??T.count;let f=(d?.dstIndex??0)*n;for(let m=0;m<u;++m)a[f]=g,a[f+1]=i,a[f+2]=_,f+=n}h.d(A,{a:()=>y,c:()=>S,f:()=>w}),Object.freeze(Object.defineProperty({__proto__:null,copy:S,copyView:y,fill:w},Symbol.toStringTag,{value:"Module"}))},63657:(P,A,h)=>{h.d(A,{a:()=>w,b:()=>g,n:()=>T,s:()=>i,t:()=>l});var y=h(96286);function w(d,a,n){l(d.typedBuffer,a.typedBuffer,n,d.typedBufferStride,a.typedBufferStride)}function l(d,a,n,u=4,f=u){if(d.length/u!=a.length/f)return void y.c.error("source and destination buffers need to have the same number of elements");const m=d.length/u,b=n[0],E=n[1],N=n[2],C=n[3],I=n[4],L=n[5],j=n[6],G=n[7],V=n[8];let K=0,Z=0;for(let W=0;W<m;W++){const X=a[K],$=a[K+1],F=a[K+2],z=a[K+3];d[Z]=b*X+C*$+j*F,d[Z+1]=E*X+I*$+G*F,d[Z+2]=N*X+L*$+V*F,d[Z+3]=z,K+=f,Z+=u}}function T(d,a){const n=Math.min(d.count,a.count),u=d.typedBuffer,f=d.typedBufferStride,m=a.typedBuffer,b=a.typedBufferStride;for(let E=0;E<n;E++){const N=E*f,C=E*b,I=m[C],L=m[C+1],j=m[C+2],G=I*I+L*L+j*j;if(G>0){const V=1/Math.sqrt(G);u[N]=V*I,u[N+1]=V*L,u[N+2]=V*j}}}function g(d,a,n){i(d.typedBuffer,a,n,d.typedBufferStride)}function i(d,a,n,u=4){const f=Math.min(d.length/u,a.count),m=a.typedBuffer,b=a.typedBufferStride;let E=0,N=0;for(let C=0;C<f;C++)d[N]=n*m[E],d[N+1]=n*m[E+1],d[N+2]=n*m[E+2],d[N+3]=n*m[E+3],E+=b,N+=u}Object.freeze(Object.defineProperty({__proto__:null,normalize:T,scale:i,scaleView:g,transformMat3:l,transformMat3View:w,transformMat4:function S(d,a,n){if(d.count!==a.count)return void y.c.error("source and destination buffers need to have the same number of elements");const u=d.count,f=n[0],m=n[1],b=n[2],E=n[3],N=n[4],C=n[5],I=n[6],L=n[7],j=n[8],G=n[9],V=n[10],K=n[11],Z=n[12],W=n[13],X=n[14],$=n[15],F=d.typedBuffer,z=d.typedBufferStride,H=a.typedBuffer,U=a.typedBufferStride;for(let J=0;J<u;J++){const Y=J*z,k=J*U,Q=H[k],q=H[k+1],ee=H[k+2],te=H[k+3];F[Y]=f*Q+N*q+j*ee+Z*te,F[Y+1]=m*Q+C*q+G*ee+W*te,F[Y+2]=b*Q+I*q+V*ee+X*te,F[Y+3]=E*Q+L*q+K*ee+$*te}}},Symbol.toStringTag,{value:"Module"}))},63470:(P,A,h)=>{function y(T,g){S(T.typedBuffer,g,T.typedBufferStride)}function S(T,g,i=4){const _=g.typedBuffer,d=g.typedBufferStride,a=g.count;let n=0,u=0;for(let f=0;f<a;++f)T[n]=_[u],T[n+1]=_[u+1],T[n+2]=_[u+2],T[n+3]=_[u+3],n+=i,u+=d}function w(T,g,i,_,d,a){const n=T.typedBuffer,u=T.typedBufferStride,f=a?.count??T.count;let m=(a?.dstIndex??0)*u;for(let b=0;b<f;++b)n[m]=g,n[m+1]=i,n[m+2]=_,n[m+3]=d,m+=u}h.d(A,{a:()=>y,c:()=>S,f:()=>w}),Object.freeze(Object.defineProperty({__proto__:null,copy:S,copyView:y,fill:w},Symbol.toStringTag,{value:"Module"}))},81096:(P,A,h)=>{function y(T){switch(T){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}h.d(A,{n1:()=>y})},9160:(P,A,h)=>{h.d(A,{C:()=>i});var y=h(15861),S=h(84792),w=h(59213),l=h(26584),T=h(10699),g=h(21726);class i{constructor(a){this._streamDataRequester=a}loadJSON(a,n){var u=this;return(0,y.Z)(function*(){return u._load("json",a,n)})()}loadBinary(a,n){var u=this;return(0,y.Z)(function*(){return(0,g.HK)(a)?((0,T.k_)(n),(0,g.AH)(a)):u._load("binary",a,n)})()}loadImage(a,n){var u=this;return(0,y.Z)(function*(){return u._load("image",a,n)})()}_load(a,n,u){var f=this;return(0,y.Z)(function*(){if(null==f._streamDataRequester)return(yield(0,S.Z)(n,{responseType:_[a]})).data;const m=yield(0,w.q6)(f._streamDataRequester.request(n,a,u));if(!0===m.ok)return m.value;throw(0,T.r9)(m.error),new l.Z("",`Request for resource failed: ${m.error}`)})()}}const _={image:"image",binary:"array-buffer",json:"json","image+type":void 0}},96170:(P,A,h)=>{h.d(A,{p:()=>l});var y=h(55713),S=h(28844),w=h(67969);function l(_,d){switch(d){case w.MX.TRIANGLES:return function T(_){return"number"==typeof _?(0,S.KF)(_):(0,y.lq)(_)?new Uint16Array(_):_}(_);case w.MX.TRIANGLE_STRIP:return function g(_){const d="number"==typeof _?_:_.length;if(d<3)return[];const a=d-2,n=(0,S.$z)(3*a);if("number"==typeof _){let u=0;for(let f=0;f<a;f+=1)f%2==0?(n[u++]=f,n[u++]=f+1,n[u++]=f+2):(n[u++]=f+1,n[u++]=f,n[u++]=f+2)}else{let u=0;for(let f=0;f<a;f+=1)f%2==0?(n[u++]=_[f],n[u++]=_[f+1],n[u++]=_[f+2]):(n[u++]=_[f+1],n[u++]=_[f],n[u++]=_[f+2])}return n}(_);case w.MX.TRIANGLE_FAN:return function i(_){const d="number"==typeof _?_:_.length;if(d<3)return new Uint16Array(0);const a=d-2,n=a<=65536?new Uint16Array(3*a):new Uint32Array(3*a);if("number"==typeof _){let b=0;for(let E=0;E<a;++E)n[b++]=0,n[b++]=E+1,n[b++]=E+2;return n}const u=_[0];let f=_[1],m=0;for(let b=0;b<a;++b){const E=_[b+2];n[m++]=u,n[m++]=f,n[m++]=E,f=E}return n}(_)}}},19574:(P,A,h)=>{h.d(A,{$A:()=>T,Ml:()=>_,NM:()=>l,i$:()=>g});var y=h(15861),S=h(8314),w=h(42743);class l{constructor(n){this.data=n,this.type="encoded-mesh-texture",this.encoding=w.Ti.KTX2_ENCODING}}function T(a){return"encoded-mesh-texture"===a?.type}function g(a){return i.apply(this,arguments)}function i(){return(i=(0,y.Z)(function*(a){const n=new Blob([a]),u=yield n.text();return JSON.parse(u)})).apply(this,arguments)}function _(a,n){return d.apply(this,arguments)}function d(){return(d=(0,y.Z)(function*(a,n){if(n===w.Ti.KTX2_ENCODING)return new l(a);const u=new Blob([a],{type:n}),f=URL.createObjectURL(u),m=new Image;if((0,S.Z)("esri-iPhone"))return new Promise((b,E)=>{const N=()=>{I(),b(m)},C=L=>{I(),E(L)},I=()=>{URL.revokeObjectURL(f),m.removeEventListener("load",N),m.removeEventListener("error",C)};m.addEventListener("load",N),m.addEventListener("error",C),m.src=f});try{m.src=f,yield m.decode()}catch{console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(f),m})).apply(this,arguments)}},12495:(P,A,h)=>{h.d(A,{Q:()=>me});var I,L,s,y=h(15861),S=h(63290),w=h(43703),l=h(67969),i=h(26584),_=h(88159),d=h(10699),a=h(21726),n=h(10349),u=h(28347),f=h(48977),m=h(78451),b=h(60479),E=h(98148);h(8314);class C{constructor(t){this._data=t,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const t=this._offset4;return this._offset4+=1,this._dataUint32[t]}readUint8Array(t){const r=4*this._offset4;return this._offset4+=t/4,new Uint8Array(this._data,r,t)}remainingBytes(){return this._data.byteLength-4*this._offset4}}(s=I||(I={})).SCALAR="SCALAR",s.VEC2="VEC2",s.VEC3="VEC3",s.VEC4="VEC4",s.MAT2="MAT2",s.MAT3="MAT3",s.MAT4="MAT4",function(s){s[s.ARRAY_BUFFER=34962]="ARRAY_BUFFER",s[s.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(L||(L={}));var j=h(94573);const G={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},V={pbrMetallicRoughness:G,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},K={ESRI_externalColorMixMode:"tint"},Z=(s={})=>{const t={...G,...s.pbrMetallicRoughness},r=function W(s){switch(s.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,j.Bg)(s.ESRI_externalColorMixMode),s.ESRI_externalColorMixMode="tint"}return s}({...K,...s.extras});return{...V,...s,pbrMetallicRoughness:t,extras:r}},X={magFilter:l.cw.LINEAR,minFilter:l.cw.LINEAR_MIPMAP_LINEAR,wrapS:l.e8.REPEAT,wrapT:l.e8.REPEAT};var z=h(19574);class U{constructor(t,r,o,e){if(this._context=t,this.uri=r,this.json=o,this._glbBuffer=e,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu"],this._baseUri=function F(s){let t,r;return s.replace(/^(.*\/)?([^/]*)$/,(o,e,c)=>(t=e||"",r=c||"","")),{dirPart:t,filePart:r}}(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),null==o.scenes)throw new i.Z("gltf-loader-unsupported-feature","Scenes must be defined.");if(null==o.meshes)throw new i.Z("gltf-loader-unsupported-feature","Meshes must be defined");if(null==o.nodes)throw new i.Z("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static load(t,r,o){var e=this;return(0,y.Z)(function*(){if((0,a.HK)(r)){const x=(0,a.sJ)(r);if(x&&"model/gltf-binary"!==x.mediaType)try{const M=JSON.parse(x.isBase64?atob(x.data):x.data);return new U(t,r,M)}catch{}const O=(0,a.AH)(r);if(U._isGLBData(O))return e._fromGLBData(t,r,O)}if(te.test(r)||"gltf"===o?.expectedType){const x=yield t.loadJSON(r,o);return new U(t,r,x)}const c=yield t.loadBinary(r,o);if(U._isGLBData(c))return e._fromGLBData(t,r,c);if(pe.test(r)||"glb"===o?.expectedType)throw new i.Z("gltf-loader-invalid-glb","This is not a valid glb file.");const p=yield t.loadJSON(r,o);return new U(t,r,p)})()}static _isGLBData(t){if(null==t)return!1;const r=new C(t);return r.remainingBytes()>=4&&1179937895===r.readUint32()}static _fromGLBData(t,r,o){return(0,y.Z)(function*(){const e=yield U._parseGLBData(o);return new U(t,r,e.json,e.binaryData)})()}static _parseGLBData(t){return(0,y.Z)(function*(){const r=new C(t);if(r.remainingBytes()<12)throw new i.Z("gltf-loader-error","glb binary data is insufficiently large.");const o=r.readUint32(),e=r.readUint32(),c=r.readUint32();if(1179937895!==o)throw new i.Z("gltf-loader-error","Magic first 4 bytes do not fit to expected glb value.");if(t.byteLength<c)throw new i.Z("gltf-loader-error","glb binary data is smaller than header specifies.");if(2!==e)throw new i.Z("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");let p,x,O=0;for(;r.remainingBytes()>=8;){const M=r.readUint32(),R=r.readUint32();if(0===O){if(1313821514!==R)throw new i.Z("gltf-loader-error","First glb chunk must be JSON.");if(M<0)throw new i.Z("gltf-loader-error","No JSON data found.");p=yield(0,z.i$)(r.readUint8Array(M))}else if(1===O){if(5130562!==R)throw new i.Z("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");x=r.readUint8Array(M)}else S.Z.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");O+=1}if(!p)throw new i.Z("gltf-loader-error","No glb JSON chunk detected.");return{json:p,binaryData:x}})()}getBuffer(t,r){var o=this;return(0,y.Z)(function*(){const e=o.json.buffers[t];if(null==e.uri){if(null==o._glbBuffer)throw new i.Z("gltf-loader-error","glb buffer not present");return o._glbBuffer}const c=yield o._getBufferLoader(t,r);if(c.byteLength!==e.byteLength)throw new i.Z("gltf-loader-error","Buffer byte lengths should match.");return c})()}_getBufferLoader(t,r){var o=this;return(0,y.Z)(function*(){const e=o._bufferLoaders.get(t);if(e)return e;const p=o._context.loadBinary(o._resolveUri(o.json.buffers[t].uri),r).then(x=>new Uint8Array(x));return o._bufferLoaders.set(t,p),p})()}getAccessor(t,r){var o=this;return(0,y.Z)(function*(){if(!o.json.accessors)throw new i.Z("gltf-loader-unsupported-feature","Accessors missing.");const e=o.json.accessors[t];if(null==e?.bufferView)throw new i.Z("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(e.type in[I.MAT2,I.MAT3,I.MAT4])throw new i.Z("gltf-loader-unsupported-feature",`AttributeType ${e.type} is not supported`);const c=o.json.bufferViews[e.bufferView],p=yield o.getBuffer(c.buffer,r),x=Q[e.type],O=q[e.componentType],M=x*O,R=c.byteStride||M;return{raw:p.buffer,byteStride:R,byteOffset:p.byteOffset+(c.byteOffset||0)+(e.byteOffset||0),entryCount:e.count,isDenselyPacked:R===M,componentCount:x,componentByteSize:O,componentType:e.componentType,min:e.min,max:e.max,normalized:!!e.normalized}})()}getIndexData(t,r){var o=this;return(0,y.Z)(function*(){if(null==t.indices)return;const e=yield o.getAccessor(t.indices,r);if(e.isDenselyPacked)switch(e.componentType){case l.g.UNSIGNED_BYTE:return new Uint8Array(e.raw,e.byteOffset,e.entryCount);case l.g.UNSIGNED_SHORT:return new Uint16Array(e.raw,e.byteOffset,e.entryCount);case l.g.UNSIGNED_INT:return new Uint32Array(e.raw,e.byteOffset,e.entryCount)}else switch(e.componentType){case l.g.UNSIGNED_BYTE:return(0,E.m)(o._wrapAccessor(b.D_,e));case l.g.UNSIGNED_SHORT:return(0,E.m)(o._wrapAccessor(b.av,e));case l.g.UNSIGNED_INT:return(0,E.m)(o._wrapAccessor(b.Nu,e))}})()}getPositionData(t,r){var o=this;return(0,y.Z)(function*(){if(null==t.attributes.POSITION)throw new i.Z("gltf-loader-unsupported-feature","No POSITION vertex data found.");const e=yield o.getAccessor(t.attributes.POSITION,r);if(e.componentType!==l.g.FLOAT)throw new i.Z("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+l.g[e.componentType]);if(3!==e.componentCount)throw new i.Z("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+e.componentCount.toFixed());return o._wrapAccessor(b.ct,e)})()}getNormalData(t,r){var o=this;return(0,y.Z)(function*(){if(null==t.attributes.NORMAL)throw new i.Z("gltf-loader-error","No NORMAL vertex data found.");const e=yield o.getAccessor(t.attributes.NORMAL,r);if(e.componentType!==l.g.FLOAT)throw new i.Z("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+l.g[e.componentType]);if(3!==e.componentCount)throw new i.Z("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+e.componentCount.toFixed());return o._wrapAccessor(b.ct,e)})()}getTangentData(t,r){var o=this;return(0,y.Z)(function*(){if(null==t.attributes.TANGENT)throw new i.Z("gltf-loader-error","No TANGENT vertex data found.");const e=yield o.getAccessor(t.attributes.TANGENT,r);if(e.componentType!==l.g.FLOAT)throw new i.Z("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+l.g[e.componentType]);if(4!==e.componentCount)throw new i.Z("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+e.componentCount.toFixed());return new b.ek(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount)})()}getTextureCoordinates(t,r){var o=this;return(0,y.Z)(function*(){if(null==t.attributes.TEXCOORD_0)throw new i.Z("gltf-loader-error","No TEXCOORD_0 vertex data found.");const e=yield o.getAccessor(t.attributes.TEXCOORD_0,r);if(2!==e.componentCount)throw new i.Z("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+e.componentCount.toFixed());if(e.componentType===l.g.FLOAT)return o._wrapAccessor(b.Eu,e);if(!e.normalized)throw new i.Z("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return function ee(s){switch(s.componentType){case l.g.BYTE:return new b.Vs(s.raw,s.byteOffset,s.byteStride,s.byteOffset+s.byteStride*s.entryCount);case l.g.UNSIGNED_BYTE:return new b.xA(s.raw,s.byteOffset,s.byteStride,s.byteOffset+s.byteStride*s.entryCount);case l.g.SHORT:return new b.or(s.raw,s.byteOffset,s.byteStride,s.byteOffset+s.byteStride*s.entryCount);case l.g.UNSIGNED_SHORT:return new b.TS(s.raw,s.byteOffset,s.byteStride,s.byteOffset+s.byteStride*s.entryCount);case l.g.UNSIGNED_INT:return new b.qt(s.raw,s.byteOffset,s.byteStride,s.byteOffset+s.byteStride*s.entryCount);case l.g.FLOAT:return new b.Eu(s.raw,s.byteOffset,s.byteStride,s.byteOffset+s.byteStride*s.entryCount)}}(e)})()}getVertexColors(t,r){var o=this;return(0,y.Z)(function*(){if(null==t.attributes.COLOR_0)throw new i.Z("gltf-loader-error","No COLOR_0 vertex data found.");const e=yield o.getAccessor(t.attributes.COLOR_0,r);if(4!==e.componentCount&&3!==e.componentCount)throw new i.Z("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+e.componentCount.toFixed());if(4===e.componentCount){if(e.componentType===l.g.FLOAT)return o._wrapAccessor(b.ek,e);if(e.componentType===l.g.UNSIGNED_BYTE)return o._wrapAccessor(b.mc,e);if(e.componentType===l.g.UNSIGNED_SHORT)return o._wrapAccessor(b.v6,e)}else if(3===e.componentCount){if(e.componentType===l.g.FLOAT)return o._wrapAccessor(b.ct,e);if(e.componentType===l.g.UNSIGNED_BYTE)return o._wrapAccessor(b.ne,e);if(e.componentType===l.g.UNSIGNED_SHORT)return o._wrapAccessor(b.mw,e)}throw new i.Z("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+l.g[e.componentType])})()}hasPositions(t){return void 0!==t.attributes.POSITION}hasNormals(t){return void 0!==t.attributes.NORMAL}hasVertexColors(t){return void 0!==t.attributes.COLOR_0}hasTextureCoordinates(t){return void 0!==t.attributes.TEXCOORD_0}hasTangents(t){return void 0!==t.attributes.TANGENT}getMaterial(t,r,o){var e=this;return(0,y.Z)(function*(){let c=t.material?e._materialCache.get(t.material):void 0;if(!c){const p=null!=t.material?Z(e.json.materials[t.material]):Z(),x=p.pbrMetallicRoughness,O=e.hasVertexColors(t),M=e.getTexture(x.baseColorTexture,r),R=e.getTexture(p.normalTexture,r),v=o?e.getTexture(p.occlusionTexture,r):void 0,B=o?e.getTexture(p.emissiveTexture,r):void 0,D=o?e.getTexture(x.metallicRoughnessTexture,r):void 0,re=null!=t.material?t.material:-1;c={alphaMode:p.alphaMode,alphaCutoff:p.alphaCutoff,color:x.baseColorFactor,doubleSided:!!p.doubleSided,colorTexture:yield M,normalTexture:yield R,name:p.name,id:re,occlusionTexture:yield v,emissiveTexture:yield B,emissiveFactor:p.emissiveFactor,metallicFactor:x.metallicFactor,roughnessFactor:x.roughnessFactor,metallicRoughnessTexture:yield D,hasVertexColors:O,ESRI_externalColorMixMode:p.extras.ESRI_externalColorMixMode,colorTextureTransform:x?.baseColorTexture?.extensions?.KHR_texture_transform,normalTextureTransform:p.normalTexture?.extensions?.KHR_texture_transform,occlusionTextureTransform:p.occlusionTexture?.extensions?.KHR_texture_transform,emissiveTextureTransform:p.emissiveTexture?.extensions?.KHR_texture_transform,metallicRoughnessTextureTransform:x?.metallicRoughnessTexture?.extensions?.KHR_texture_transform}}return c})()}getTexture(t,r){var o=this;return(0,y.Z)(function*(){if(!t)return;if(0!==(t.texCoord||0))throw new i.Z("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const e=t.index,c=o.json.textures[e],p=(s=>({...X,...s}))(null!=c.sampler?o.json.samplers[c.sampler]:{}),x=o._getTextureSourceId(c),O=o.json.images[x],M=yield o._loadTextureImageData(e,c,r);return(0,_.s1)(o._textureCache,e,()=>{const R=B=>33071===B||33648===B||10497===B,v=B=>{throw new i.Z("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${B}`)};return{data:M,wrapS:R(p.wrapS)?p.wrapS:v(p.wrapS),wrapT:R(p.wrapT)?p.wrapT:v(p.wrapT),minFilter:p.minFilter,name:O.name,id:e}})})()}getNodeTransform(t){if(void 0===t)return J;let r=this._nodeTransformCache.get(t);if(!r){const o=this.getNodeTransform(this._getNodeParent(t)),e=this.json.nodes[t];e.matrix?r=(0,u.m)((0,w.a)(),o,e.matrix):e.translation||e.rotation||e.scale?(r=(0,w.b)(o),e.translation&&(0,u.w)(r,r,e.translation),e.rotation&&(k[3]=(0,f.g)(k,e.rotation),(0,u.k)(r,r,k[3],k)),e.scale&&(0,u.b)(r,r,e.scale)):r=(0,w.b)(o),this._nodeTransformCache.set(t,r)}return r}_wrapAccessor(t,r){return new t(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*(r.entryCount-1)+r.componentByteSize*r.componentCount)}_resolveUri(t){return(0,a.hF)(t,this._baseUri)}_getNodeParent(t){return this._nodeParentMap.get(t)}_checkVersionSupported(){const t=n.G.parse(this.json.asset.version,"glTF");Y.validate(t)}_checkRequiredExtensionsSupported(){const t=this.json;if(t.extensionsRequired&&!t.extensionsRequired.every(r=>this._supportedExtensions.includes(r)))throw new i.Z("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+t.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach((t,r)=>{t.children&&t.children.forEach(o=>{this._nodeParentMap.set(o,r)})})}_loadTextureImageData(t,r,o){var e=this;return(0,y.Z)(function*(){const c=e._textureLoaders.get(t);if(c)return c;const p=e._createTextureLoader(r,o);return e._textureLoaders.set(t,p),p})()}_getTextureSourceId(t){if(void 0!==t.extensions&&null!==t.extensions.KHR_texture_basisu)return t.extensions.KHR_texture_basisu.source;if(null!==t.source)return t.source;throw new i.Z("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}_createTextureLoader(t,r){var o=this;return(0,y.Z)(function*(){const e=o._getTextureSourceId(t),c=o.json.images[e];if(c.uri){if(c.uri.endsWith(".ktx2")){const M=yield o._context.loadBinary(o._resolveUri(c.uri),r);return new z.NM(new Uint8Array(M))}return o._context.loadImage(o._resolveUri(c.uri),r)}if(null==c.bufferView)throw new i.Z("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(null==c.mimeType)throw new i.Z("gltf-loader-unsupported-feature","Image mimeType must be defined.");const p=o.json.bufferViews[c.bufferView],x=yield o.getBuffer(p.buffer,r);if(null!=p.byteStride)throw new i.Z("gltf-loader-unsupported-feature","byteStride not supported for image buffer");return(0,z.Ml)(new Uint8Array(x.buffer,x.byteOffset+(p.byteOffset||0),p.byteLength),c.mimeType)})()}getLoadedBuffersSize(){var t=this;return(0,y.Z)(function*(){if(t._glbBuffer)return t._glbBuffer.byteLength;const r=yield(0,d.OT)(Array.from(t._bufferLoaders.values())),o=yield(0,d.OT)(Array.from(t._textureLoaders.values()));return r.reduce((e,c)=>e+(c?.byteLength??0),0)+o.reduce((e,c)=>e+(c?(0,z.$A)(c)?c.data.byteLength:c.width*c.height*4:0),0)})()}}const J=(0,u.A)((0,w.a)(),Math.PI/2),Y=new n.G(2,0,"glTF"),k=(0,m.a)(),Q={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},q={[l.g.BYTE]:1,[l.g.UNSIGNED_BYTE]:1,[l.g.SHORT]:2,[l.g.UNSIGNED_SHORT]:2,[l.g.FLOAT]:4,[l.g.INT]:4,[l.g.UNSIGNED_INT]:4},te=/\.gltf$/i,pe=/\.glb$/i;let _e=0;function me(s,t){return oe.apply(this,arguments)}function oe(){return oe=(0,y.Z)(function*(s,t,r={},o=!0){const e=yield U.load(s,t,r),c="gltf_"+_e++,p={lods:[],materials:new Map,textures:new Map,meta:he(e)},x=!(!e.json.asset.extras||"symbolResource"!==e.json.asset.extras.ESRI_type),O=new Map;yield function ye(s,t){return se.apply(this,arguments)}(e,function(){var R=(0,y.Z)(function*(v,B,D,re){const ae=O.get(D)??0;O.set(D,ae+1);const ne=void 0!==v.mode?v.mode:l.MX.TRIANGLES,ie=ne===l.MX.TRIANGLES||ne===l.MX.TRIANGLE_STRIP||ne===l.MX.TRIANGLE_FAN?ne:null;if(null==ie)return void S.Z.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+l.MX[ne]+"). Skipping primitive.");if(!e.hasPositions(v))return void S.Z.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const xe=e.getPositionData(v,r),we=e.getMaterial(v,r,o),ue=e.hasNormals(v)?e.getNormalData(v,r):null,le=e.hasTangents(v)?e.getTangentData(v,r):null,ce=e.hasTextureCoordinates(v)?e.getTextureCoordinates(v,r):null,fe=e.hasVertexColors(v)?e.getVertexColors(v,r):null,Ee=e.getIndexData(v,r),Se={name:re,transform:(0,w.b)(B),attributes:{position:yield xe,normal:ue?yield ue:null,texCoord0:ce?yield ce:null,color:fe?yield fe:null,tangent:le?yield le:null},indices:yield Ee,primitiveType:ie,material:Te(p,yield we,c)};let de=null;null!=p.meta?.ESRI_lod&&"screenSpaceRadius"===p.meta.ESRI_lod.metric&&(de=p.meta.ESRI_lod.thresholds[D]),p.lods[D]=p.lods[D]||{parts:[],name:re,lodThreshold:de},p.lods[D].parts[ae]=Se});return function(v,B,D,re){return R.apply(this,arguments)}}());for(const R of p.lods)R.parts=R.parts.filter(v=>!!v);const M=yield e.getLoadedBuffersSize();return{model:p,meta:{isEsriSymbolResource:x,uri:e.uri},customMeta:{},size:M}}),oe.apply(this,arguments)}function he(s){let r=null;return s.json.nodes.forEach(o=>{const e=o.extras;null!=e&&(e.ESRI_proxyEllipsoid||e.ESRI_lod)&&(r=e)}),r}function se(){return se=(0,y.Z)(function*(s,t){const r=s.json,o=r.scenes[r.scene||0].nodes,e=o.length>1,c=[];for(const O of o){const M=r.nodes[O];c.push(p(O,0)),ge(M)&&!e&&M.extensions.MSFT_lod.ids.forEach((R,v)=>p(R,v+1))}function p(O,M){return x.apply(this,arguments)}function x(){return(x=(0,y.Z)(function*(O,M){const R=r.nodes[O],v=s.getNodeTransform(O);if(null!=R.weights&&S.Z.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),null!=R.mesh){const B=r.meshes[R.mesh];for(const D of B.primitives)c.push(t(D,v,M,B.name))}for(const B of R.children||[])c.push(p(B,M))})).apply(this,arguments)}yield Promise.all(c)}),se.apply(this,arguments)}function ge(s){return s.extensions?.MSFT_lod&&Array.isArray(s.extensions.MSFT_lod.ids)}function Te(s,t,r){const o=c=>{const p=`${r}_tex_${c&&c.id}${c?.name?"_"+c.name:""}`;if(c&&!s.textures.has(p)){const x=function g(s,t={}){return{data:s,parameters:{wrap:{s:l.e8.REPEAT,t:l.e8.REPEAT,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(c.data,{wrap:{s:c.wrapS,t:c.wrapT},mipmap:be.has(c.minFilter),noUnpackFlip:!0});s.textures.set(p,x)}return p},e=`${r}_mat_${t.id}_${t.name}`;if(!s.materials.has(e)){const c=function T(s={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...s}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?o(t.colorTexture):void 0,textureNormal:t.normalTexture?o(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?o(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?o(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?o(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],colorTextureTransform:t.colorTextureTransform,normalTextureTransform:t.normalTextureTransform,occlusionTextureTransform:t.occlusionTextureTransform,emissiveTextureTransform:t.emissiveTextureTransform,metallicRoughnessTextureTransform:t.metallicRoughnessTextureTransform,metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});s.materials.set(e,c)}return e}const be=new Set([l.cw.LINEAR_MIPMAP_LINEAR,l.cw.LINEAR_MIPMAP_NEAREST])},79331:(P,A,h)=>{h.d(A,{j:()=>y});const y=2.1}}]);