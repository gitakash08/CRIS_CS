"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[4080],{14080:(E,p,s)=>{s.r(p),s.d(p,{executeForTopExtents:()=>i});var t=s(15861),h=(s(29132),s(2618)),d=s(2543),u=s(6871),v=s(2004);function i(l,a,y){return n.apply(this,arguments)}function n(){return(n=(0,t.Z)(function*(l,a,y){const R=(0,h.en)(l),c=yield(0,d.m5)(R,u.Z.from(a),{...y});return{count:c.data.count,extent:v.Z.fromJSON(c.data.extent)}})).apply(this,arguments)}},6871:(E,p,s)=>{s.d(p,{Z:()=>f});var m,t=s(17626),S=s(29132),h=s(97478),d=s(2076),u=s(86810),v=s(58817),i=s(77712),n=s(90912),l=s(76898),a=s(99433),y=s(91179);s(85931),s(8314);let o=m=class extends u.wq{constructor(r){super(r),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new m({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};(0,t._)([(0,i.Cb)({type:[String],json:{write:!0}})],o.prototype,"groupByFields",void 0),(0,t._)([(0,i.Cb)({type:Number,json:{write:!0}})],o.prototype,"topCount",void 0),(0,t._)([(0,i.Cb)({type:[String],json:{write:!0}})],o.prototype,"orderByFields",void 0),o=m=(0,t._)([(0,l.j)("esri.rest.support.TopFilter")],o);const w=o;var C,F=s(65234);const j=new d.X({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),b=new d.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let e=C=class extends u.wq{constructor(r){super(r),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(r,g){g.resultOffset=this.start,g.resultRecordCount=this.num||10}clone(){return new C((0,v.d9)({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};(0,t._)([(0,i.Cb)({type:Boolean,json:{write:!0}})],e.prototype,"cacheHint",void 0),(0,t._)([(0,i.Cb)({type:Number,json:{write:{overridePolicy:r=>({enabled:r>0})}}})],e.prototype,"distance",void 0),(0,t._)([(0,i.Cb)({types:S.qM,json:{read:y.im,write:!0}})],e.prototype,"geometry",void 0),(0,t._)([(0,i.Cb)({type:Number,json:{write:!0}})],e.prototype,"geometryPrecision",void 0),(0,t._)([(0,i.Cb)({type:Number,json:{write:!0}})],e.prototype,"maxAllowableOffset",void 0),(0,t._)([(0,i.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],e.prototype,"num",void 0),(0,t._)([(0,i.Cb)({json:{write:!0}})],e.prototype,"objectIds",void 0),(0,t._)([(0,i.Cb)({type:[String],json:{write:!0}})],e.prototype,"orderByFields",void 0),(0,t._)([(0,i.Cb)({type:[String],json:{write:!0}})],e.prototype,"outFields",void 0),(0,t._)([(0,i.Cb)({type:F.Z,json:{read:{source:"outSR"},write:{target:"outSR"}}})],e.prototype,"outSpatialReference",void 0),(0,t._)([(0,i.Cb)({type:String,json:{write:!0}})],e.prototype,"resultType",void 0),(0,t._)([(0,i.Cb)({json:{write:!0}})],e.prototype,"returnGeometry",void 0),(0,t._)([(0,i.Cb)({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],e.prototype,"returnM",void 0),(0,t._)([(0,i.Cb)({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],e.prototype,"returnZ",void 0),(0,t._)([(0,i.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],e.prototype,"start",void 0),(0,t._)([(0,a.c)("start"),(0,a.c)("num")],e.prototype,"writeStart",null),(0,t._)([(0,i.Cb)({type:String,json:{read:{source:"spatialRel",reader:j.read},write:{target:"spatialRel",writer:j.write}}})],e.prototype,"spatialRelationship",void 0),(0,t._)([(0,i.Cb)({type:h.Z,json:{write:!0}})],e.prototype,"timeExtent",void 0),(0,t._)([(0,i.Cb)({type:w,json:{write:!0}})],e.prototype,"topFilter",void 0),(0,t._)([(0,i.Cb)({type:String,json:{read:b.read,write:{writer:b.write,overridePolicy(r){return{enabled:null!=r&&null!=this.distance&&this.distance>0}}}}})],e.prototype,"units",void 0),(0,t._)([(0,i.Cb)({type:String,json:{write:!0}})],e.prototype,"where",void 0),e=C=(0,t._)([(0,l.j)("esri.rest.support.TopFeaturesQuery")],e),e.from=(0,n.se)(e);const f=e}}]);