"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[514],{20514:(i,c,o)=>{o.d(c,{P:()=>u});var _=o(16730),r=o(37053);function l(n,t,e){if(null==n.hasM||n.hasZ)for(const s of t)for(const f of s)f.length>2&&(f[2]*=e)}function u(n,t,e){if(!n&&!t||!e)return;const s=(0,_._R)(e);a(n,e,s),a(t,e,s)}function a(n,t,e){if(n)for(const s of n)p(s.geometry,t,e)}function p(n,t,e){if(!n?.spatialReference||(0,r.fS)(n.spatialReference,t))return;const s=(0,_._R)(n.spatialReference)/e;if(1!==s)if("x"in n)null!=n.z&&(n.z*=s);else if("rings"in n)l(n,n.rings,s);else if("paths"in n)l(n,n.paths,s);else if("points"in n&&(null==n.hasM||n.hasZ))for(const f of n.points)f.length>2&&(f[2]*=s)}}}]);