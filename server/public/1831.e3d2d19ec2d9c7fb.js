"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[1831],{91831:(g,h,n)=>{n.r(h),n.d(h,{clearBoundingBoxCache:()=>P,computeIconLayerResourceSize:()=>C,computeObjectLayerResourceSize:()=>M});var c=n(15861),y=n(84792),r=n(26584),v=n(93961),f=n(28093),i=n(5548),O=n(43652);let u=m();function m(){return new v.z(50)}function P(){u=m()}function C(e,t){return l.apply(this,arguments)}function l(){return(l=(0,c.Z)(function*(e,t){if(e.resource?.href)return function D(e){return(0,y.Z)(e,{responseType:"image"}).then(t=>t.data)}(e.resource.href).then(s=>[s.width,s.height]);if(e.resource?.primitive)return null!=t?[t,t]:[256,256];throw new r.Z("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")})).apply(this,arguments)}function M(e){return a.apply(this,arguments)}function a(){return(a=(0,c.Z)(function*(e,t=null){if(!e.isPrimitive){const o=e.resource.href;if(!o)throw new r.Z("symbol:invalid-resource","The symbol does not have a valid resource");const d=u.get(o);if(void 0!==d)return d;const{fetch:B}=yield Promise.all([n.e(8952),n.e(5775),n.e(479),n.e(9709),n.e(9327),n.e(6453),n.e(8592),n.e(2647)]).then(n.bind(n,42647)),R=yield B(o,{disableTextures:!0}),E=(0,i.dp)(R.referenceBoundingBox,(0,f.c)());return u.put(o,E),E}if(!e.resource?.primitive)throw new r.Z("symbol:invalid-resource","The symbol does not have a valid resource");const s=(0,i.Ue)((0,O.Uz)(e.resource.primitive));if(null!=t)for(let o=0;o<s.length;o++)s[o]*=t;return(0,i.dp)(s,(0,f.c)())})).apply(this,arguments)}}}]);