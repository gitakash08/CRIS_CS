"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[9628],{95324:(pe,$,l)=>{function j(_){return null!=W(_)||null!=I(_)}function x(_){return Z.test(_)}function D(_){return W(_)??I(_)}function I(_){const p=new Date(_);return function L(_,p){if(Number.isNaN(_.getTime()))return!1;let c=!0;if(N&&/\d+\W*$/.test(p)){const M=p.match(/[a-zA-Z]{2,}/);if(M){let F=!1,h=0;for(;!F&&h<=M.length;)F=!w.test(M[h]),h++;c=!F}}return c}(p,_)?Number.isNaN(p.getTime())?null:p.getTime()-6e4*p.getTimezoneOffset():null}function W(_){const p=Z.exec(_);if(!p?.groups)return null;const c=p.groups,M=+c.year,F=+c.month-1,h=+c.day,C=+(c.hours??"0"),v=+(c.minutes??"0"),k=+(c.seconds??"0");if(C>23||v>59||k>59)return null;const Y=c.ms??"0",G=Y?+Y.padEnd(3,"0").substring(0,3):0;let B;return B=c.isUTC||!c.offsetSign?Date.UTC(M,F,h,C,v,k,G):6e4*("+"===c.offsetSign?-1:1)*(60*+c.offsetHours+ +c.offsetMinutes)+Date.UTC(M,F,h,C,v,k,G),Number.isNaN(B)?null:B}l.d($,{mu:()=>x,of:()=>j,sG:()=>D});const Z=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/,w=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,N=!Number.isNaN(new Date("technology 10").getTime())},58775:(pe,$,l)=>{l.d($,{O3:()=>fe,lG:()=>ie,my:()=>ne,q9:()=>w});var j=l(95324),x=l(26584),D=l(37053),I=l(66385),W=l(88071),Z=l(90194);const L={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function w(e){return L[e]}function*N(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*_(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const n of t)yield*n}}function c(e){for(const t of e)if(t.length>2)return!0;return!1}function h(e){let t=0;for(let n=0;n<e.length;n++){const i=e[n],y=e[(n+1)%e.length];t+=i[0]*y[1]-y[0]*i[1]}return t<=0}function C(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function v(e,t,n){switch(t.type){case"LineString":return function k(e,t,n){return A(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function Y(e,t,n){for(const i of t.coordinates)A(e,i,n);return e}(e,t,n);case"MultiPoint":return function G(e,t,n){return A(e,t.coordinates,n),e}(e,t,n);case"MultiPolygon":return function B(e,t,n){for(const i of t.coordinates){q(e,i[0],n);for(let y=1;y<i.length;y++)se(e,i[y],n)}return e}(e,t,n);case"Point":return function z(e,t,n){return J(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function te(e,t,n){const i=t.coordinates;q(e,i[0],n);for(let y=1;y<i.length;y++)se(e,i[y],n);return e}(e,t,n)}}function q(e,t,n){const i=C(t);!function M(e){return!h(e)}(i)?A(e,i,n):oe(e,i,n)}function se(e,t,n){const i=C(t);!function F(e){return h(e)}(i)?A(e,i,n):oe(e,i,n)}function A(e,t,n){for(const i of t)J(e,i,n);e.lengths.push(t.length)}function oe(e,t,n){for(let i=t.length-1;i>=0;i--)J(e,t[i],n);e.lengths.push(t.length)}function J(e,t,n){const[i,y,S]=t;e.coords.push(i,y),n.hasZ&&e.coords.push(S||0)}function de(e){switch(typeof e){case"string":return(0,j.mu)(e)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function fe(e,t=4326){if(!e)throw new x.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new x.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:n}=e;if(!n)return;const i="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,y=(0,D.oR)({wkid:t})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${t})$`,"i");if(!i||!y.test(i))throw new x.Z("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function ne(e,t={}){const n=[],i=new Set,y=new Set;let S,H=!1,O=null,T=!1,{geometryType:r=null}=t,o=!1;for(const a of N(e)){const{geometry:d,properties:f,id:E}=a;if((!d||(r||(r=w(d.type)),w(d.type)===r))&&(H||(H=c(_(d))),T||(T=null!=E,T&&(S=typeof E,f&&(O=Object.keys(f).filter(m=>f[m]===E)))),f&&O&&T&&null!=E&&(O.length>1?O=O.filter(m=>f[m]===E):1===O.length&&(O=f[O[0]]===E?O:[])),!o&&f)){let m=!0;for(const P in f){if(i.has(P))continue;const Q=f[P];if(null==Q){m=!1,y.add(P);continue}const U=de(Q);if("unknown"===U){y.add(P);continue}y.delete(P),i.add(P);const R=(0,Z.q6)(P);R&&n.push({name:R,alias:P,type:U})}o=m}}const s=(0,Z.q6)(1===O?.length&&O[0]||null)??void 0;if(s)for(const a of n)if(a.name===s&&(0,Z.H7)(a)){a.type="esriFieldTypeOID";break}return{fields:n,geometryType:r,hasZ:H,objectIdFieldName:s,objectIdFieldType:S,unknownFields:Array.from(y)}}function ie(e,t){return Array.from(function*p(e,t={}){const{geometryType:n,objectIdField:i}=t;for(const y of e){const{geometry:S,properties:H,id:O}=y;if(S&&w(S.type)!==n)continue;const T=H||{};let r;i&&(r=T[i],null==O||r||(T[i]=r=O)),yield new I.u_(S?v(new W.Z,S,t):null,T,null,r??void 0)}}(N(e),t))}},56554:(pe,$,l)=>{l.d($,{Dm:()=>w,Hq:()=>N,MS:()=>_,bU:()=>W});var j=l(8314),x=l(58817),D=l(87757),I=l(24837);function W(p){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===p||"esriGeometryMultipoint"===p?I.I4:"esriGeometryPolyline"===p?I.ET:I.lF}}}const Z=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let L=1;function w(p,c){if((0,j.Z)("esri-csp-restrictions"))return()=>({[c]:null,...p});try{let M=`this.${c} = null;`;for(const h in p)M+=`this${Z.test(h)?`.${h}`:`["${h}"]`} = ${JSON.stringify(p[h])};`;const F=new Function(`\n      return class AttributesClass$${L++} {\n        constructor() {\n          ${M};\n        }\n      }\n    `)();return()=>new F}catch{return()=>({[c]:null,...p})}}function N(p={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,x.d9)(p)}}]}function _(p,c){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:p},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:c,supportsDelete:c,supportsEditing:c,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:c,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:D.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:c,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},89628:(pe,$,l)=>{l.d($,{$9:()=>k,G4:()=>te,Lu:()=>v,WW:()=>ie,d:()=>de,eS:()=>oe,gp:()=>se,j:()=>B,w9:()=>Y,yN:()=>fe});var j=l(15861),D=(l(29132),l(84792)),I=l(26584),W=l(63290),Z=l(37053),L=l(46367),w=l(82054),N=l(95786),_=l(58775),p=l(56554),c=l(60466),M=l(85),F=l(28302),h=l(65234);const C=W.Z.getLogger("esri.layers.graphics.sources.ogcfeature"),v="http://www.opengis.net/def/crs/",k=`${v}OGC/1.3/CRS84`;function Y(r,o){return G.apply(this,arguments)}function G(){return(G=(0,j.Z)(function*(r,o,s={},a=5){const{links:d}=r,f=T(d,"items","application/geo+json")||T(d,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(null==f)throw new I.Z("ogc-feature-layer:missing-items-page","Missing items url");const{data:E}=yield(0,D.Z)(f.href,{signal:s.signal,query:{limit:a,...s.customParameters,token:s.apiKey},headers:{accept:"application/geo+json"}});(0,_.O3)(E);const m=(0,_.my)(E,{geometryType:o.geometryType}),P=o.fields||m.fields||[],Q=null!=o.hasZ?o.hasZ:m.hasZ,U=m.geometryType,R=o.objectIdField||m.objectIdFieldName||"OBJECTID";let g=o.timeInfo;const re=P.find(({name:u})=>u===R);if(re)re.editable=!1,re.nullable=!1;else{if(!m.objectIdFieldType)throw new I.Z("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");P.unshift({name:R,alias:R,type:"number"===m.objectIdFieldType?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(R!==m.objectIdFieldName){const u=P.find(({name:b})=>b===m.objectIdFieldName);u&&(u.type="esriFieldTypeInteger")}P===m.fields&&m.unknownFields.length>0&&C.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:m.unknownFields}});for(const u of P){if(null==u.name&&(u.name=u.alias),null==u.alias&&(u.alias=u.name),"esriFieldTypeOID"!==u.type&&"esriFieldTypeGlobalID"!==u.type&&(u.editable=null==u.editable||!!u.editable,u.nullable=null==u.nullable||!!u.nullable),!u.name)throw new I.Z("ogc-feature-layer:invalid-field-name","field name is missing",{field:u});if(!M.v.jsonValues.includes(u.type))throw new I.Z("ogc-feature-layer:invalid-field-type",`invalid type for field "${u.name}"`,{field:u})}if(g){const u=new c.Z(P);if(g.startTimeField){const b=u.get(g.startTimeField);b?(g.startTimeField=b.name,b.type="esriFieldTypeDate"):g.startTimeField=null}if(g.endTimeField){const b=u.get(g.endTimeField);b?(g.endTimeField=b.name,b.type="esriFieldTypeDate"):g.endTimeField=null}if(g.trackIdField){const b=u.get(g.trackIdField);b?g.trackIdField=b.name:(g.trackIdField=null,C.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:g}}))}g.timeReference||={timeZoneIANA:F.pt},g.startTimeField||g.endTimeField||(C.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:g}}),g=null)}return{drawingInfo:U?(0,p.bU)(U):null,extent:O(r),geometryType:U,fields:P,hasZ:!!Q,objectIdField:R,timeInfo:g}})).apply(this,arguments)}function B(r){return z.apply(this,arguments)}function z(){return(z=(0,j.Z)(function*(r,o={}){const{links:s}=r,a=T(s,"data","application/json")||T(s,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if(null==a)throw new I.Z("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:d,customParameters:f,signal:E}=o,{data:m}=yield(0,D.Z)(a.href,{signal:E,headers:{accept:"application/json"},query:{...f,token:d}});return m})).apply(this,arguments)}function te(r){return q.apply(this,arguments)}function q(){return(q=(0,j.Z)(function*(r,o={}){const{links:s}=r,a=T(s,"conformance","application/json")||T(s,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if(null==a)throw new I.Z("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:d,customParameters:f,signal:E}=o,{data:m}=yield(0,D.Z)(a.href,{signal:E,headers:{accept:"application/json"},query:{...f,token:d}});return m})).apply(this,arguments)}function se(r){return A.apply(this,arguments)}function A(){return(A=(0,j.Z)(function*(r,o={}){const{apiKey:s,customParameters:a,signal:d}=o,{data:f}=yield(0,D.Z)(r,{signal:d,headers:{accept:"application/json"},query:{...a,token:s}});return f})).apply(this,arguments)}function oe(r){return J.apply(this,arguments)}function J(){return(J=(0,j.Z)(function*(r,o={}){const s="application/vnd.oai.openapi+json;version=3.0",a=T(r.links,"service-desc",s);if(null==a)return C.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:d,customParameters:f,signal:E}=o,{data:m}=yield(0,D.Z)(a.href,{signal:E,headers:{accept:s},query:{...f,token:d}});return m})).apply(this,arguments)}function de(r){const s=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(r)?.groups;if(!s)return null;const{authority:a,code:d}=s;switch(a.toLowerCase()){case"ogc":switch(d.toLowerCase()){case"crs27":return h.Z.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return h.Z.WGS84.wkid;default:return null}case"esri":case"epsg":{const f=Number.parseInt(d,10);return Number.isNaN(f)?null:f}default:return null}}function fe(r,o,s){return ne.apply(this,arguments)}function ne(){return(ne=(0,j.Z)(function*(r,o,s){const a=yield ie(r,o,s);return(0,w.cn)(a)})).apply(this,arguments)}function ie(r,o,s){return e.apply(this,arguments)}function e(){return(e=(0,j.Z)(function*(r,o,s){const{collection:a,layerDefinition:d,maxRecordCount:f,queryParameters:{apiKey:E,customParameters:m},spatialReference:P,supportedCrs:Q}=r,{links:U}=a,R=T(U,"items","application/geo+json")||T(U,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(null==R)throw new I.Z("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:g,num:re,start:u,timeExtent:b,where:ge}=o;if(o.objectIds)throw new I.Z("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const he=h.Z.fromJSON(P),ee=o.outSpatialReference??he,ae=ee.isWGS84?null:n(ee,Q),Ee=function H(r,o){if(!function t(r){return null!=r&&"extent"===r.type}(r))return null;const{spatialReference:s}=r;if(!s||s.isWGS84)return{bbox:i(r)};const a=n(s,o);return null!=a?{bbox:i(r),"bbox-crs":a}:s.isWebMercator?{bbox:i((0,L.iV)(r,h.Z.WGS84))}:null}(g,Q),Te=function y(r){if(null==r)return null;const{start:o,end:s}=r;return`${null!=o?o.toISOString():".."}/${null!=s?s.toISOString():".."}`}(b),Pe=function S(r){return null!=r&&r&&"1=1"!==r?r:null}(ge),Ie=re??(null!=u&&void 0!==u?10:f),{data:V}=yield(0,D.Z)(R.href,{...s,query:{...m,...Ee,crs:ae,datetime:Te,query:Pe,limit:Ie,startindex:u,token:E},headers:{accept:"application/geo+json"}});let le=!1;V.links&&(le=!!V.links.find(ce=>"next"===ce.rel)),!le&&Number.isInteger(V.numberMatched)&&Number.isInteger(V.numberReturned)&&(le=V.numberReturned<V.numberMatched);const{fields:Oe,geometryType:ue,hasZ:me,objectIdField:ye}=d,_e=(0,_.lG)(V,{geometryType:ue,hasZ:me,objectIdField:ye});if(!ae&&ee.isWebMercator)for(const X of _e)if(null!=X.geometry&&null!=ue){const ce=(0,w.di)(X.geometry,ue,me,!1);ce.spatialReference=h.Z.WGS84,X.geometry=(0,w.GH)((0,L.iV)(ce,ee))}for(const X of _e)X.objectId=X.attributes[ye];const Me=ae||!ae&&ee.isWebMercator?ee.toJSON():Z.Zn,K=new N.Z;return K.exceededTransferLimit=le,K.features=_e,K.fields=Oe,K.geometryType=ue,K.hasZ=me,K.objectIdFieldName=ye,K.spatialReference=Me,K})).apply(this,arguments)}function n(r,o){const{isWebMercator:s,wkid:a}=r;if(!a)return null;const d=s?o[3857]??o[102100]??o[102113]??o[900913]:o[r.wkid];return d?`${v}${d}`:null}function i(r){if(null==r)return"";const{xmin:o,ymin:s,xmax:a,ymax:d}=r;return`${o},${s},${a},${d}`}function O(r){const o=r.extent?.spatial;if(!o)return null;const s=o.bbox[0],a=4===s.length;return{xmin:s[0],ymin:s[1],xmax:a?s[2]:s[3],ymax:a?s[3]:s[4],zmin:a?void 0:s[2],zmax:a?void 0:s[5],spatialReference:h.Z.WGS84.toJSON()}}function T(r,o,s){return r.find(a=>a.rel===o&&a.type===s)||r.find(a=>a.rel===o&&!a.type)}}}]);