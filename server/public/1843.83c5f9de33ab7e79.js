"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[1843,5994],{15994:(x,r,h)=>{h.d(r,{N:()=>u});const u={convertToGEGeometry:function m(i,t){return null==t?null:i.convertJSONToGeometry(t)},exportPoint:function l(i,t,e){const n=new c(i.getPointX(t),i.getPointY(t),e),s=i.hasZ(t),o=i.hasM(t);return s&&(n.z=i.getPointZ(t)),o&&(n.m=i.getPointM(t)),n},exportPolygon:function M(i,t,e){return new p(i.exportPaths(t),e,i.hasZ(t),i.hasM(t))},exportPolyline:function d(i,t,e){return new v(i.exportPaths(t),e,i.hasZ(t),i.hasM(t))},exportMultipoint:function g(i,t,e){return new f(i.exportPoints(t),e,i.hasZ(t),i.hasM(t))},exportExtent:function _(i,t,e){const n=i.hasZ(t),s=i.hasM(t),o=new Z(i.getXMin(t),i.getYMin(t),i.getXMax(t),i.getYMax(t),e);if(n){const a=i.getZExtent(t);o.zmin=a.vmin,o.zmax=a.vmax}if(s){const a=i.getMExtent(t);o.mmin=a.vmin,o.mmax=a.vmax}return o}};class c{constructor(t,e,n){this.x=t,this.y=e,this.spatialReference=n,this.z=void 0,this.m=void 0}}class p{constructor(t,e,n,s){this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class v{constructor(t,e,n,s){this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class f{constructor(t,e,n,s){this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class Z{constructor(t,e,n,s,o){this.xmin=t,this.ymin=e,this.xmax=n,this.ymax=s,this.spatialReference=o,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},77692:(x,r,h)=>{h.r(r),h.d(r,{executeGEOperation:()=>m});var u=h(7006);function m(c){return(0,u.g[c.operation])(...c.parameters)}}}]);