"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[7010],{67010:(m,a,r)=>{r.r(a),r.d(a,{default:()=>y});var _,e=r(17626),d=(r(29132),r(86810)),p=r(58817),o=r(77712),l=r(90912),u=r(76898),n=r(99433),c=r(15283),h=r(65234);let t=_=class extends d.wq{constructor(s){super(s),this.cacheHint=void 0,this.dynamicDataSource=void 0,this.gdbVersion=null,this.geometryPrecision=void 0,this.historicMoment=null,this.maxAllowableOffset=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.relationshipId=void 0,this.start=void 0,this.num=void 0,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.where=null}_writeHistoricMoment(s,i){i.historicMoment=s&&s.getTime()}writeStart(s,i){i.resultOffset=this.start,i.resultRecordCount=this.num||10,this.start>0&&null==this.where&&(i.definitionExpression="1=1")}clone(){return new _((0,p.d9)({cacheHint:this.cacheHint,dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};(0,e._)([(0,o.Cb)({type:Boolean,json:{write:!0}})],t.prototype,"cacheHint",void 0),(0,e._)([(0,o.Cb)({type:c.n,json:{write:!0}})],t.prototype,"dynamicDataSource",void 0),(0,e._)([(0,o.Cb)({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),(0,e._)([(0,o.Cb)({type:Number,json:{write:!0}})],t.prototype,"geometryPrecision",void 0),(0,e._)([(0,o.Cb)({type:Date})],t.prototype,"historicMoment",void 0),(0,e._)([(0,n.c)("historicMoment")],t.prototype,"_writeHistoricMoment",null),(0,e._)([(0,o.Cb)({type:Number,json:{write:!0}})],t.prototype,"maxAllowableOffset",void 0),(0,e._)([(0,o.Cb)({type:[Number],json:{write:!0}})],t.prototype,"objectIds",void 0),(0,e._)([(0,o.Cb)({type:[String],json:{write:!0}})],t.prototype,"orderByFields",void 0),(0,e._)([(0,o.Cb)({type:[String],json:{write:!0}})],t.prototype,"outFields",void 0),(0,e._)([(0,o.Cb)({type:h.Z,json:{read:{source:"outSR"},write:{target:"outSR"}}})],t.prototype,"outSpatialReference",void 0),(0,e._)([(0,o.Cb)({json:{write:!0}})],t.prototype,"relationshipId",void 0),(0,e._)([(0,o.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],t.prototype,"start",void 0),(0,e._)([(0,n.c)("start"),(0,n.c)("num")],t.prototype,"writeStart",null),(0,e._)([(0,o.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],t.prototype,"num",void 0),(0,e._)([(0,o.Cb)({json:{write:!0}})],t.prototype,"returnGeometry",void 0),(0,e._)([(0,o.Cb)({type:Boolean,json:{write:{overridePolicy:s=>({enabled:s})}}})],t.prototype,"returnM",void 0),(0,e._)([(0,o.Cb)({type:Boolean,json:{write:{overridePolicy:s=>({enabled:s})}}})],t.prototype,"returnZ",void 0),(0,e._)([(0,o.Cb)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],t.prototype,"where",void 0),t=_=(0,e._)([(0,u.j)("esri.rest.support.RelationshipQuery")],t),t.from=(0,l.se)(t);const y=t}}]);