"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[6240],{16240:(y,l,s)=>{s.r(l),s.d(l,{default:()=>u});var _=s(17626),E=s(26584),d=s(99959),p=s(50618),t=s(77712),i=(s(90912),s(85931),s(8314),s(76898)),O=s(44917),c=s(6647);let e=class extends((0,c.I)((0,d.R)(O.Z))){constructor(r){super(r),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((r,n)=>{(0,p.Os)(()=>{const o=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let a="Unsupported layer type";o&&(a+=" "+o),n(new E.Z("layer:unsupported-layer-type",a,{layerType:o}))})}))}read(r,n){const o={resourceInfo:r};null!=r.id&&(o.id=r.id),null!=r.title&&(o.title=r.title),super.read(o,n)}write(r,n){return Object.assign(r||{},this.resourceInfo,{id:this.id})}};(0,_._)([(0,t.Cb)({readOnly:!0})],e.prototype,"resourceInfo",void 0),(0,_._)([(0,t.Cb)({type:["show","hide"]})],e.prototype,"listMode",void 0),(0,_._)([(0,t.Cb)({type:Boolean,readOnly:!1})],e.prototype,"persistenceEnabled",void 0),(0,_._)([(0,t.Cb)({json:{read:!1},readOnly:!0,value:"unsupported"})],e.prototype,"type",void 0),e=(0,_._)([(0,i.j)("esri.layers.UnsupportedLayer")],e);const u=e}}]);