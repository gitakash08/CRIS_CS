"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[7155],{7155:(Q,S,o)=>{o.r(S),o.d(S,{default:()=>de});var F=o(15861),i=o(17626),Z=o(73281),j=o(84792),m=o(26584),C=o(58817),y=o(63290),R=o(99959),I=o(94113),x=o(10699),Y=o(21726),a=o(77712),V=o(90912),A=o(68653),E=o(76898),N=o(99433),H=o(44917),U=o(50085),D=o(65088),$=o(49286),K=o(6647),G=o(99555),L=o(42432),O=o(55342),t=o(86810);o(85931),o(8314);let d=class extends t.wq{constructor(n){super(n),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};(0,i._)([(0,a.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"field",void 0),(0,i._)([(0,a.Cb)({readOnly:!0,nonNullable:!0,json:{read:!1}})],d.prototype,"type",void 0),d=(0,i._)([(0,E.j)("esri.layers.pointCloudFilters.PointCloudFilter")],d);const p=d;var g;let c=g=class extends p{constructor(n){super(n),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new g({field:this.field,requiredClearBits:(0,C.d9)(this.requiredClearBits),requiredSetBits:(0,C.d9)(this.requiredSetBits)})}};(0,i._)([(0,a.Cb)({type:[V.z8],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],c.prototype,"requiredClearBits",void 0),(0,i._)([(0,a.Cb)({type:[V.z8],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],c.prototype,"requiredSetBits",void 0),(0,i._)([(0,O.J)({pointCloudBitfieldFilter:"bitfield"})],c.prototype,"type",void 0),c=g=(0,i._)([(0,E.j)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],c);const h=c;var P;let B=P=class extends p{constructor(n){super(n),this.includedReturns=[],this.type="return"}clone(){return new P({field:this.field,includedReturns:(0,C.d9)(this.includedReturns)})}};(0,i._)([(0,a.Cb)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],B.prototype,"includedReturns",void 0),(0,i._)([(0,O.J)({pointCloudReturnFilter:"return"})],B.prototype,"type",void 0),B=P=(0,i._)([(0,E.j)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],B);const te=B;var W;let T=W=class extends p{constructor(n){super(n),this.mode="exclude",this.type="value",this.values=[]}clone(){return new W({field:this.field,mode:this.mode,values:(0,C.d9)(this.values)})}};(0,i._)([(0,a.Cb)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],T.prototype,"mode",void 0),(0,i._)([(0,O.J)({pointCloudValueFilter:"value"})],T.prototype,"type",void 0),(0,i._)([(0,a.Cb)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],T.prototype,"values",void 0),T=W=(0,i._)([(0,E.j)("esri.layers.pointCloudFilters.PointCloudValueFilter")],T);const re={key:"type",base:p,typeMap:{value:T,bitfield:h,return:te}};var X,J=o(13812),z=o(36255),ne=o(55911),q=o(38439),oe=o(53776),k=o(80573);let w=X=class extends k.Z{constructor(n){super(n),this.type="point-cloud-rgb",this.field=null}clone(){return new X({...this.cloneProperties(),field:(0,C.d9)(this.field)})}};(0,i._)([(0,O.J)({pointCloudRGBRenderer:"point-cloud-rgb"})],w.prototype,"type",void 0),(0,i._)([(0,a.Cb)({type:String,json:{write:!0}})],w.prototype,"field",void 0),w=X=(0,i._)([(0,E.j)("esri.renderers.PointCloudRGBRenderer")],w);const ie=w;var se=o(23899),le=o(98610);const _={key:"type",base:k.Z,typeMap:{"point-cloud-class-breaks":oe.Z,"point-cloud-rgb":ie,"point-cloud-stretch":se.Z,"point-cloud-unique-value":le.Z},errorContext:"renderer"};var M=o(60507),ae=o(49430);const ee=(0,ne.v)();let u=class extends((0,L.Vt)((0,D.Y)((0,$.q)((0,K.I)((0,G.M)((0,R.R)((0,U.V)(H.Z)))))))){constructor(...n){super(...n),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(n,s){return"string"==typeof n?{url:n,...s}:n}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(n){const s=this.fieldsIndex.get(n);return s?.domain?s.domain:null}readServiceFields(n,s,f){return Array.isArray(n)?n.map(v=>{const b=new z.Z;return"FieldTypeInteger"===v.type&&((v=(0,C.d9)(v)).type="esriFieldTypeInteger"),b.read(v,f),b}):Array.isArray(s.attributeStorageInfo)?s.attributeStorageInfo.map(v=>new z.Z({name:v.name,type:"ELEVATION"===v.name?"double":"integer"})):null}set elevationInfo(n){this._set("elevationInfo",n),this._validateElevationInfo()}writeRenderer(n,s,f,v){(0,I.RB)("layerDefinition.drawingInfo.renderer",n.write({},v),s)}load(n){const s=null!=n?n.signal:null,f=this.loadFromPortal({supportedTypes:["Scene Service"]},n).catch(x.r9).then(()=>this._fetchService(s));return this.addResolvingPromise(f),Promise.resolve(this)}createPopupTemplate(n){const s=(0,ae.eZ)(this,n);return s&&(this._formatPopupTemplateReturnsField(s),this._formatPopupTemplateRGBField(s)),s}_formatPopupTemplateReturnsField(n){const s=this.fieldsIndex.get("RETURNS");if(!s)return;const f=n.fieldInfos?.find(b=>b.fieldName===s.name);if(!f)return;const v=new q.Z({name:"pcl-returns-decoded",title:s.alias||s.name,expression:`\n        var returnValue = $feature.${s.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});n.expressionInfos=[...n.expressionInfos||[],v],f.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(n){const s=this.fieldsIndex.get("RGB");if(!s)return;const f=n.fieldInfos?.find(b=>b.fieldName===s.name);if(!f)return;const v=new q.Z({name:"pcl-rgb-decoded",title:s.alias||s.name,expression:`\n        var rgb = $feature.${s.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});n.expressionInfos=[...n.expressionInfos||[],v],f.fieldName="expression/pcl-rgb-decoded"}queryCachedStatistics(n,s){var f=this;return(0,F.Z)(function*(){if(yield f.load(s),!f.attributeStorageInfo)throw new m.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const v=f.fieldsIndex.get(n);if(!v)throw new m.Z("pointcloudlayer:field-unexisting",`Field '${n}' does not exist on the layer`);for(const b of f.attributeStorageInfo)if(b.name===v.name){const ue=(0,Y.v_)(f.parsedUrl.path,`./statistics/${b.key}`);return(0,j.Z)(ue,{query:{f:"json",token:f.apiKey},responseType:"json",signal:s?s.signal:null}).then(pe=>pe.data)}throw new m.Z("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")})()}saveAs(n,s){var f=this;return(0,F.Z)(function*(){return f._debouncedSaveOperations(L.xp.SAVE_AS,{...s,getTypeKeywords:()=>f._getTypeKeywords(),portalItemLayerType:"point-cloud"},n)})()}save(){var n=this;return(0,F.Z)(function*(){const s={getTypeKeywords:()=>n._getTypeKeywords(),portalItemLayerType:"point-cloud"};return n._debouncedSaveOperations(L.xp.SAVE,s)})()}validateLayer(n){if(n.layerType&&"PointCloud"!==n.layerType)throw new m.Z("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:n.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new m.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new m.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(n){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some(s=>s.name===n)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const n=this.elevationInfo;(0,M.LR)(y.Z.getLogger(this),(0,M.Uy)("Point cloud layers","absolute-height",n)),(0,M.LR)(y.Z.getLogger(this),(0,M.kf)("Point cloud layers",n))}};(0,i._)([(0,a.Cb)({type:["PointCloudLayer"]})],u.prototype,"operationalLayerType",void 0),(0,i._)([(0,a.Cb)(J.C_)],u.prototype,"popupEnabled",void 0),(0,i._)([(0,a.Cb)({type:Z.Z,json:{name:"popupInfo",write:!0}})],u.prototype,"popupTemplate",void 0),(0,i._)([(0,a.Cb)({readOnly:!0,json:{read:!1}})],u.prototype,"defaultPopupTemplate",null),(0,i._)([(0,a.Cb)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],u.prototype,"opacity",void 0),(0,i._)([(0,a.Cb)({type:["show","hide"]})],u.prototype,"listMode",void 0),(0,i._)([(0,a.Cb)({types:[re],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],u.prototype,"filters",void 0),(0,i._)([(0,a.Cb)({type:[z.Z]})],u.prototype,"fields",void 0),(0,i._)([(0,a.Cb)(ee.fieldsIndex)],u.prototype,"fieldsIndex",void 0),(0,i._)([(0,A.r)("service","fields",["fields","attributeStorageInfo"])],u.prototype,"readServiceFields",null),(0,i._)([(0,a.Cb)(ee.outFields)],u.prototype,"outFields",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],u.prototype,"attributeStorageInfo",void 0),(0,i._)([(0,a.Cb)(J.PV)],u.prototype,"elevationInfo",null),(0,i._)([(0,a.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],u.prototype,"path",void 0),(0,i._)([(0,a.Cb)(J.rn)],u.prototype,"legendEnabled",void 0),(0,i._)([(0,a.Cb)({types:_,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:_},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],u.prototype,"renderer",void 0),(0,i._)([(0,N.c)("renderer")],u.prototype,"writeRenderer",null),(0,i._)([(0,a.Cb)({json:{read:!1},readOnly:!0})],u.prototype,"type",void 0),u=(0,i._)([(0,E.j)("esri.layers.PointCloudLayer")],u);const de=u},55911:(Q,S,o)=>{o.d(S,{v:()=>C});var F=o(8314),i=o(63290),Z=o(36255),j=o(60466),m=o(90194);function C(){return{fields:{type:[Z.Z],value:null,set:function(y){if(y&&(0,F.Z)("big-integer-warning-enabled")){const R=y.filter(I=>"big-integer"===I.type||"oid"===I.type&&(I.length||0)>=8);if(R.length){const I=R.map(x=>`'${x.name}'`).join(", ");i.Z.getLogger(this).warn("#fields",`Layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}') references big-integer field(s): ${I}, support for which is experimental. Only integers less than ${Number.MAX_SAFE_INTEGER} (Number.MAX_SAFE_INTEGER) are supported.`)}}this._set("fields",y)}},fieldsIndex:{readOnly:!0,get(){return j.Z.fromLayer(this)}},outFields:{type:[String],json:{read:!1},set:function(y){this._userOutFields=y,this.notifyChange("outFields")},get:function(){const y=this._userOutFields;if(!y?.length)return null;if(y.includes("*"))return["*"];if(!this.fields)return y;for(const R of y)this.fieldsIndex?.has(R)||i.Z.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field",`Invalid field ${R} found in outFields`,{layer:this,outFields:y});return(0,m.Q0)(this.fieldsIndex,y)}}}}},60507:(Q,S,o)=>{function m(t,r){return function Z(t,r){return r?.mode?r.mode:function i(t){return t?G:L}(t).mode}(null!=t&&t.hasZ,r)}function U(t,r,l){return l&&l.mode!==r?`${t} only support ${r} elevation mode`:null}function D(t,r,l){return l?.mode===r?`${t} do not support ${r} elevation mode`:null}function $(t,r){return null!=r?.featureExpressionInfo&&"0"!==r.featureExpressionInfo.expression?`${t} do not support featureExpressionInfo`:null}function K(t,r){r&&t.warn(".elevationInfo=",r)}o.d(S,{LR:()=>K,Uy:()=>U,VW:()=>m,Wb:()=>D,kf:()=>$}),o(29505);const G={mode:"absolute-height",offset:0},L={mode:"on-the-ground",offset:null}}}]);