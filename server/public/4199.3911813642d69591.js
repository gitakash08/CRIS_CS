"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[4199],{50011:(U,w,l)=>{l.d(w,{F:()=>y,M:()=>c});const c={Base64:0,Hex:1,String:2,Raw:3},O=8,C=(1<<O)-1;function _(i,n){const e=(65535&i)+(65535&n);return(i>>16)+(n>>16)+(e>>16)<<16|65535&e}function S(i,n,e,t,s,r){return _(function E(i,n){return i<<n|i>>>32-n}(_(_(n,i),_(t,r)),s),e)}function v(i,n,e,t,s,r,o){return S(n&e|~n&t,i,n,s,r,o)}function f(i,n,e,t,s,r,o){return S(n&t|e&~t,i,n,s,r,o)}function m(i,n,e,t,s,r,o){return S(n^e^t,i,n,s,r,o)}function p(i,n,e,t,s,r,o){return S(e^(n|~t),i,n,s,r,o)}function y(i,n=c.Hex){const e=n||c.Base64,t=function I(i,n){i[n>>5]|=128<<n%32,i[14+(n+64>>>9<<4)]=n;let e=1732584193,t=-271733879,s=-1732584194,r=271733878;for(let o=0;o<i.length;o+=16){const T=e,L=t,W=s,K=r;e=v(e,t,s,r,i[o],7,-680876936),r=v(r,e,t,s,i[o+1],12,-389564586),s=v(s,r,e,t,i[o+2],17,606105819),t=v(t,s,r,e,i[o+3],22,-1044525330),e=v(e,t,s,r,i[o+4],7,-176418897),r=v(r,e,t,s,i[o+5],12,1200080426),s=v(s,r,e,t,i[o+6],17,-1473231341),t=v(t,s,r,e,i[o+7],22,-45705983),e=v(e,t,s,r,i[o+8],7,1770035416),r=v(r,e,t,s,i[o+9],12,-1958414417),s=v(s,r,e,t,i[o+10],17,-42063),t=v(t,s,r,e,i[o+11],22,-1990404162),e=v(e,t,s,r,i[o+12],7,1804603682),r=v(r,e,t,s,i[o+13],12,-40341101),s=v(s,r,e,t,i[o+14],17,-1502002290),t=v(t,s,r,e,i[o+15],22,1236535329),e=f(e,t,s,r,i[o+1],5,-165796510),r=f(r,e,t,s,i[o+6],9,-1069501632),s=f(s,r,e,t,i[o+11],14,643717713),t=f(t,s,r,e,i[o],20,-373897302),e=f(e,t,s,r,i[o+5],5,-701558691),r=f(r,e,t,s,i[o+10],9,38016083),s=f(s,r,e,t,i[o+15],14,-660478335),t=f(t,s,r,e,i[o+4],20,-405537848),e=f(e,t,s,r,i[o+9],5,568446438),r=f(r,e,t,s,i[o+14],9,-1019803690),s=f(s,r,e,t,i[o+3],14,-187363961),t=f(t,s,r,e,i[o+8],20,1163531501),e=f(e,t,s,r,i[o+13],5,-1444681467),r=f(r,e,t,s,i[o+2],9,-51403784),s=f(s,r,e,t,i[o+7],14,1735328473),t=f(t,s,r,e,i[o+12],20,-1926607734),e=m(e,t,s,r,i[o+5],4,-378558),r=m(r,e,t,s,i[o+8],11,-2022574463),s=m(s,r,e,t,i[o+11],16,1839030562),t=m(t,s,r,e,i[o+14],23,-35309556),e=m(e,t,s,r,i[o+1],4,-1530992060),r=m(r,e,t,s,i[o+4],11,1272893353),s=m(s,r,e,t,i[o+7],16,-155497632),t=m(t,s,r,e,i[o+10],23,-1094730640),e=m(e,t,s,r,i[o+13],4,681279174),r=m(r,e,t,s,i[o],11,-358537222),s=m(s,r,e,t,i[o+3],16,-722521979),t=m(t,s,r,e,i[o+6],23,76029189),e=m(e,t,s,r,i[o+9],4,-640364487),r=m(r,e,t,s,i[o+12],11,-421815835),s=m(s,r,e,t,i[o+15],16,530742520),t=m(t,s,r,e,i[o+2],23,-995338651),e=p(e,t,s,r,i[o],6,-198630844),r=p(r,e,t,s,i[o+7],10,1126891415),s=p(s,r,e,t,i[o+14],15,-1416354905),t=p(t,s,r,e,i[o+5],21,-57434055),e=p(e,t,s,r,i[o+12],6,1700485571),r=p(r,e,t,s,i[o+3],10,-1894986606),s=p(s,r,e,t,i[o+10],15,-1051523),t=p(t,s,r,e,i[o+1],21,-2054922799),e=p(e,t,s,r,i[o+8],6,1873313359),r=p(r,e,t,s,i[o+15],10,-30611744),s=p(s,r,e,t,i[o+6],15,-1560198380),t=p(t,s,r,e,i[o+13],21,1309151649),e=p(e,t,s,r,i[o+4],6,-145523070),r=p(r,e,t,s,i[o+11],10,-1120210379),s=p(s,r,e,t,i[o+2],15,718787259),t=p(t,s,r,e,i[o+9],21,-343485551),e=_(e,T),t=_(t,L),s=_(s,W),r=_(r,K)}return[e,t,s,r]}(function R(i){const n=[];for(let e=0,t=i.length*O;e<t;e+=O)n[e>>5]|=(i.charCodeAt(e/O)&C)<<e%32;return n}(i),i.length*O);switch(e){case c.Raw:return t;case c.Hex:return function P(i){const n="0123456789abcdef",e=[];for(let t=0,s=4*i.length;t<s;t++)e.push(n.charAt(i[t>>2]>>t%4*8+4&15)+n.charAt(i[t>>2]>>t%4*8&15));return e.join("")}(t);case c.String:return function D(i){const n=[];for(let e=0,t=32*i.length;e<t;e+=O)n.push(String.fromCharCode(i[e>>5]>>>e%32&C));return n.join("")}(t);case c.Base64:return function b(i){const t=[];for(let s=0,r=4*i.length;s<r;s+=3){const o=(i[s>>2]>>s%4*8&255)<<16|(i[s+1>>2]>>(s+1)%4*8&255)<<8|i[s+2>>2]>>(s+2)%4*8&255;for(let T=0;T<4;T++)t.push(8*s+6*T>32*i.length?"=":"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(o>>6*(3-T)&63))}return t.join("")}(t)}}},43149:(U,w,l)=>{l.d(w,{Z:()=>S});var b,c=l(17626),O=l(86810),C=l(58817),_=l(77712),D=(l(90912),l(76898)),P=l(95778);let E=b=class extends O.wq{constructor(v){super(v),this.isAutoGenerated=!1,this.name=null,this.alias=null,this.onStatisticField=null,this.onStatisticExpression=null,this.statisticType=null}clone(){return new b({name:this.name,alias:this.alias,isAutoGenerated:this.isAutoGenerated,onStatisticExpression:(0,C.d9)(this.onStatisticExpression),onStatisticField:this.onStatisticField,statisticType:this.statisticType})}};(0,c._)([(0,_.Cb)({type:Boolean,json:{write:!0}})],E.prototype,"isAutoGenerated",void 0),(0,c._)([(0,_.Cb)({type:String,json:{write:!0}})],E.prototype,"name",void 0),(0,c._)([(0,_.Cb)({type:String,json:{write:!0}})],E.prototype,"alias",void 0),(0,c._)([(0,_.Cb)({type:String,json:{write:!0}})],E.prototype,"onStatisticField",void 0),(0,c._)([(0,_.Cb)({type:P.Z,json:{write:!0}})],E.prototype,"onStatisticExpression",void 0),(0,c._)([(0,_.Cb)({type:String,json:{write:!0}})],E.prototype,"statisticType",void 0),E=b=(0,c._)([(0,D.j)("esri.layers.support.AggregateField")],E);const S=E},95778:(U,w,l)=>{l.d(w,{Z:()=>S});var c=l(17626),O=l(79608),C=l(86810),_=l(77712),b=(l(90912),l(85931),l(8314),l(76898));let E=class extends((0,O.J)(C.wq)){constructor(v){super(v),this.expression=null,this.title=null,this.returnType=null}};(0,c._)([(0,_.Cb)({type:String,json:{write:!0}})],E.prototype,"expression",void 0),(0,c._)([(0,_.Cb)({type:String,json:{write:!0}})],E.prototype,"title",void 0),(0,c._)([(0,_.Cb)({type:String,json:{write:!0}})],E.prototype,"returnType",void 0),E=(0,c._)([(0,b.j)("esri.layers.support.ExpressionInfo")],E);const S=E},2319:(U,w,l)=>{l.d(w,{Z:()=>i});var f,c=l(17626),O=l(26584),C=l(86810),_=l(94113),R=l(77712),E=(l(90912),l(85931),l(8314),l(76898)),S=l(71149),v=l(98624);const m={read:{reader:S.ij},write:{writer:S.cW,overridePolicy(){return{allowNull:null!=this.excludedEffect,isRequired:null==this.excludedEffect}}}},p={read:{reader:S.ij},write:{writer:S.cW,overridePolicy(){return{allowNull:null!=this.includedEffect,isRequired:null==this.includedEffect}}}},I={name:"showExcludedLabels",default:!0};let y=f=class extends C.wq{constructor(n){super(n),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(n,e){const t=super.write(n,e);if(e?.origin){if(t.filter){const s=Object.keys(t.filter);if(s.length>1||"where"!==s[0])return e.messages?.push(new O.Z("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:e.layer,effect:this})),null}if("showExcludedLabels"in t)return e.messages?.push(new O.Z("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:e.layer,effect:this})),null}return t}clone(){return new f({filter:null!=this.filter?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};(0,c._)([(0,R.Cb)({type:v.Z,json:{write:{allowNull:!0,writer(n,e,t,s){const r=n?.write({},s);r&&0!==Object.keys(r).length?(0,_.RB)(t,r,e):(0,_.RB)(t,null,e)}}}})],y.prototype,"filter",void 0),(0,c._)([(0,R.Cb)({json:{write:!0,origins:{"web-map":m,"portal-item":m}}})],y.prototype,"includedEffect",void 0),(0,c._)([(0,R.Cb)({json:{write:!0,origins:{"web-map":p,"portal-item":p}}})],y.prototype,"excludedEffect",void 0),(0,c._)([(0,R.Cb)({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":I,"portal-item":I}}})],y.prototype,"excludedLabelsVisible",void 0),y=f=(0,c._)([(0,E.j)("esri.layers.support.FeatureEffect")],y);const i=y},98624:(U,w,l)=>{l.d(w,{Z:()=>I});var v,c=l(17626),O=l(29132),C=l(97478),_=l(2076),R=l(86810),D=l(58817),P=l(77712),E=(l(90912),l(76898)),S=l(96854);const f=new _.X({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),m=new _.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let p=v=class extends R.wq{constructor(y){super(y),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null}createQuery(y={}){const{where:i,geometry:n,spatialRelationship:e,timeExtent:t,objectIds:s,units:r,distance:o}=this;return new S.Z({geometry:(0,D.d9)(n),objectIds:(0,D.d9)(s),spatialRelationship:e,timeExtent:(0,D.d9)(t),where:i,units:r,distance:o,...y})}clone(){const{where:y,geometry:i,spatialRelationship:n,timeExtent:e,objectIds:t,units:s,distance:r}=this;return new v({geometry:(0,D.d9)(i),objectIds:(0,D.d9)(t),spatialRelationship:n,timeExtent:(0,D.d9)(e),where:y,units:s,distance:r})}};(0,c._)([(0,P.Cb)({type:String,json:{write:!0}})],p.prototype,"where",void 0),(0,c._)([(0,P.Cb)({types:O.qM,json:{write:!0}})],p.prototype,"geometry",void 0),(0,c._)([(0,P.Cb)({type:f.apiValues,json:{name:"spatialRel",read:{reader:f.read},write:{allowNull:!1,writer:f.write,overridePolicy(){return{enabled:null!=this.geometry}}}}})],p.prototype,"spatialRelationship",void 0),(0,c._)([(0,P.Cb)({type:Number,json:{write:{overridePolicy(y){return{enabled:null!=y&&null!=this.geometry}}}}})],p.prototype,"distance",void 0),(0,c._)([(0,P.Cb)({type:[Number],json:{write:!0}})],p.prototype,"objectIds",void 0),(0,c._)([(0,P.Cb)({type:m.apiValues,json:{read:m.read,write:{writer:m.write,overridePolicy(y){return{enabled:null!=y&&null!=this.geometry}}}}})],p.prototype,"units",void 0),(0,c._)([(0,P.Cb)({type:C.Z,json:{write:!0}})],p.prototype,"timeExtent",void 0),p=v=(0,c._)([(0,E.j)("esri.layers.support.FeatureFilter")],p);const I=p},62192:(U,w,l)=>{l.d(w,{aV:()=>L,S1:()=>s,os:()=>r,st:()=>o,yR:()=>W});var i,c=l(26584),O=l(8314),C=l(63290),_=l(50011),R=l(43149),D=l(95778),P=l(15312),b=l(68598),E=l(64902),S=l(17626),v=l(58817),f=l(77712),p=(l(90912),l(76898)),I=l(99433),y=l(86971);let n=i=class extends b.Z{writeLevels(a,d,h){for(const g in a)return void(d.stops=this.levels[g])}clone(){return new i({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:(0,y.iY)(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:(0,y.iY)(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops?.map(a=>a.clone()),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions?.clone(),levels:(0,v.d9)(this.levels)})}};(0,S._)([(0,f.Cb)()],n.prototype,"levels",void 0),(0,S._)([(0,I.c)("levels")],n.prototype,"writeLevels",null),n=i=(0,S._)([(0,p.j)("esri.views.2d.engine.LevelDependentSizeVariable")],n);const e=C.Z.getLogger("esri.views.2d.layers.support.clusterUtils");O.Z.add("esri-cluster-arcade-enabled",!0);const t=(0,O.Z)("esri-cluster-arcade-enabled"),s=(a,d,h,g,j)=>{const u=d.clone();if(!W(u))return u;if(u.authoringInfo||(u.authoringInfo=new P.Z),u.authoringInfo.isAutoGenerated=!0,"visualVariables"in u){const M=(u.visualVariables||[]).filter(x=>"$view.scale"!==x.valueExpression),z=r(M);M.forEach(x=>{"rotation"===x.type?x.field?x.field=A(a,x.field,"avg_angle","number"):x.valueExpression&&(x.field=B(a,x.valueExpression,"avg_angle","number"),x.valueExpression=null):x.normalizationField?(x.field=A(a,x.field,"avg_norm","number",x.normalizationField),x.normalizationField=null):x.field?x.field=A(a,x.field,"avg","number"):x.valueExpression&&(x.field=B(a,x.valueExpression,"avg","number"),x.valueExpression=null)}),null==z&&!T(M)&&j&&(M.push(L(h,g)),u.dynamicClusterSize=!0),u.visualVariables=M}switch(u.type){case"simple":break;case"pie-chart":for(const M of u.attributes)M.field?M.field=A(a,M.field,"sum","number"):M.valueExpression&&(M.field=B(a,M.valueExpression,"sum","number"),M.valueExpression=null);break;case"unique-value":u.field?u.field=A(a,u.field,"mode","string"):u.valueExpression&&(u.field=B(a,u.valueExpression,"mode","string"),u.valueExpression=null);break;case"class-breaks":u.normalizationField?(u.field=A(a,u.field,"avg_norm","number",u.normalizationField),u.normalizationField=null):u.field?u.field=A(a,u.field,"avg","number"):u.valueExpression&&(u.field=B(a,u.valueExpression,"avg","number"),u.valueExpression=null)}return u},r=a=>{for(const d of a)if("size"===d.type)return d;return null};function o(a,d,h){const g=a.clone();let j=!1;if("visualVariables"in g){const u=(g.visualVariables||[]).filter(M=>"$view.scale"!==M.valueExpression);null==r(u)&&(g.visualVariables||(g.visualVariables=[]),g.visualVariables.push(L(d,h)),g.dynamicClusterSize=!0,j=!0)}return{renderer:g,didInject:j}}const T=a=>{for(const d of a)if("cluster_count"===d.field)return!0;return!1},L=(a,d)=>{const h=[new E.Z({value:0,size:0}),new E.Z({value:1})];if(null==d)return new b.Z({field:"cluster_count",stops:[...h,new E.Z({value:2,size:0})]});const g=Object.keys(d).reduce((j,u)=>({...j,[u]:[...h,new E.Z({value:Math.max(2,d[u].minValue),size:a.clusterMinSize}),new E.Z({value:Math.max(3,d[u].maxValue),size:a.clusterMaxSize})]}),{});return new n({field:"cluster_count",levels:g})},W=a=>{const d=h=>e.error(new c.Z("Unsupported-renderer",h,{renderer:a}));if(!a)return!1;switch(a.type){case"unique-value":if(a.field2||a.field3)return d("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1;break;case"class-breaks":if(a.normalizationField){const h=a.normalizationType;if("field"!==h)return d(`FeatureReductionCluster does not support a normalizationType of ${h}`),!1}break;case"simple":case"pie-chart":break;default:return d(`FeatureReductionCluster does not support renderers of type ${a.type}`),!1}if(!t){if("valueExpression"in a&&a.valueExpression)return d("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in a&&a.visualVariables||[]).some(h=>!(!("valueExpression"in h)||!h.valueExpression)))return d("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function B(a,d,h,g){const j=(0,_.F)(d),u="mode"===h?`cluster_type_${j}`:"sum"===h?`cluster_sum_${j}`:`cluster_avg_${j}`;return a.some(M=>M.name===u)||a.push(new R.Z({name:u,isAutoGenerated:!0,onStatisticExpression:new D.Z({expression:d,returnType:g}),statisticType:h})),u}function A(a,d,h,g,j){if("cluster_count"===d||a.some(M=>M.name===d))return d;const u=function K(a,d,h){switch(a){case"sum":return`cluster_sum_${d}`;case"avg":case"avg_angle":return`cluster_avg_${d}`;case"mode":return`cluster_type_${d}`;case"avg_norm":{const g=h,j="field",u=d.toLowerCase()+",norm:"+j+","+g.toLowerCase();return"cluster_avg_"+(0,_.F)(u)}}}(h,d,j);return a.some(M=>M.name===u)||a.push(new R.Z("avg_norm"===h?{name:u,isAutoGenerated:!0,onStatisticExpression:new D.Z({expression:`$feature.${d} / $feature.${j}`,returnType:g}),statisticType:"avg"}:{name:u,isAutoGenerated:!0,onStatisticField:d,statisticType:h})),u}}}]);