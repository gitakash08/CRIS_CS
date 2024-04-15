"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[4079],{95324:(Y,Z,a)=>{function g(h){return null!=x(h)||null!=j(h)}function A(h){return S.test(h)}function N(h){return x(h)??j(h)}function j(h){const p=new Date(h);return function L(h,p){if(Number.isNaN(h.getTime()))return!1;let y=!0;if(R&&/\d+\W*$/.test(p)){const T=p.match(/[a-zA-Z]{2,}/);if(T){let P=!1,f=0;for(;!P&&f<=T.length;)P=!O.test(T[f]),f++;y=!P}}return y}(p,h)?Number.isNaN(p.getTime())?null:p.getTime()-6e4*p.getTimezoneOffset():null}function x(h){const p=S.exec(h);if(!p?.groups)return null;const y=p.groups,T=+y.year,P=+y.month-1,f=+y.day,U=+(y.hours??"0"),q=+(y.minutes??"0"),B=+(y.seconds??"0");if(U>23||q>59||B>59)return null;const Q=y.ms??"0",$=Q?+Q.padEnd(3,"0").substring(0,3):0;let W;return W=y.isUTC||!y.offsetSign?Date.UTC(T,P,f,U,q,B,$):6e4*("+"===y.offsetSign?-1:1)*(60*+y.offsetHours+ +y.offsetMinutes)+Date.UTC(T,P,f,U,q,B,$),Number.isNaN(W)?null:W}a.d(Z,{mu:()=>A,of:()=>g,sG:()=>N});const S=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/,O=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,R=!Number.isNaN(new Date("technology 10").getTime())},84079:(Y,Z,a)=>{a.r(Z),a.d(Z,{default:()=>W});var g=a(15861),A=a(84792),N=a(59213),j=a(26584),x=a(63290),S=a(10699),L=a(91179),O=a(37053),R=a(82054),h=a(81975),p=a(82959),y=a(60331),T=a(58775),P=a(56554),f=a(35775),U=a(60466),q=a(85),B=a(90194),Q=a(28302);const $={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class W{constructor(){var s=this;this._queryEngine=null,this._snapshotFeatures=function(){var i=(0,g.Z)(function*(r){const u=yield s._fetch(r);return s._createFeatures(u)});return function(r){return i.apply(this,arguments)}}()}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._createDefaultAttributes=null}load(s,i={}){var r=this;return(0,g.Z)(function*(){r._loadOptions={url:s.url,customParameters:s.customParameters};const u=[],[_]=yield Promise.all([s.url?r._fetch(i?.signal):null,r._checkProjection(s.spatialReference)]),d=(0,T.my)(_,{geometryType:s.geometryType}),m=s.fields||d.fields||[],I=null!=s.hasZ?s.hasZ:d.hasZ,F=d.geometryType;let M=s.objectIdField||d.objectIdFieldName||"__OBJECTID";const t=s.spatialReference||O.Zn;let e=s.timeInfo;m===d.fields&&d.unknownFields.length>0&&u.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:d.unknownFields}});const n=new U.Z(m);let o=n.get(M);o?("esriFieldTypeString"!==o.type&&(o.type="esriFieldTypeOID"),o.editable=!1,o.nullable=!1,M=o.name):(o={alias:M,name:M,type:"string"===d.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},m.unshift(o));const l={};for(const c of m){if(null==c.name&&(c.name=c.alias),null==c.alias&&(c.alias=c.name),!c.name)throw new j.Z("geojson-layer:invalid-field-name","field name is missing",{field:c});if(!q.v.jsonValues.includes(c.type))throw new j.Z("geojson-layer:invalid-field-type",`invalid type for field "${c.name}"`,{field:c});if(c.name!==o.name){const D=(0,B.os)(c);void 0!==D&&(l[c.name]=D)}null==c.length&&(c.length=(0,B.ZR)(c))}if(e){if(e.startTimeField){const c=n.get(e.startTimeField);c?(e.startTimeField=c.name,c.type="esriFieldTypeDate"):e.startTimeField=null}if(e.endTimeField){const c=n.get(e.endTimeField);c?(e.endTimeField=c.name,c.type="esriFieldTypeDate"):e.endTimeField=null}if(e.trackIdField){const c=n.get(e.trackIdField);c?e.trackIdField=c.name:(e.trackIdField=null,u.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:e}}))}e.startTimeField||e.endTimeField||(u.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:e}}),e=null)}const b=F?(0,P.bU)(F):void 0,w=n.dateFields.length?{timeZoneIANA:Q.pt}:null,E={warnings:u,featureErrors:[],layerDefinition:{...$,drawingInfo:b??void 0,templates:(0,P.Hq)(l),extent:void 0,geometryType:F,objectIdField:M,fields:m,hasZ:!!I,timeInfo:e,dateFieldsTimeReference:w}};r._queryEngine=new y.q({fieldsIndex:U.Z.fromLayerJSON({fields:m,timeInfo:e,dateFieldsTimeReference:w}),geometryType:F,hasM:!1,hasZ:I,objectIdField:M,spatialReference:t,timeInfo:e,featureStore:new h.Z({geometryType:F,hasM:!1,hasZ:I}),cacheSpatialQueries:!0});const C=r._queryEngine.fieldsIndex.requiredFields.indexOf(o);C>-1&&r._queryEngine.fieldsIndex.requiredFields.splice(C,1),r._createDefaultAttributes=(0,P.Dm)(l,M);const v=yield r._createFeatures(_);r._objectIdGenerator=r._createObjectIdGenerator(r._queryEngine,v);const H=r._normalizeFeatures(v,E.featureErrors);r._queryEngine.featureStore.addMany(H);const{fullExtent:J,timeExtent:G}=yield r._queryEngine.fetchRecomputedExtents();if(E.layerDefinition.extent=J,G){const{start:c,end:D}=G;E.layerDefinition.timeInfo.timeExtent=[c,D]}return E})()}applyEdits(s){var i=this;return(0,g.Z)(function*(){const{spatialReference:r,geometryType:u}=i._queryEngine;return yield Promise.all([(0,f.b)(r,u),(0,p._W)(s.adds,r),(0,p._W)(s.updates,r)]),yield i._waitSnapshotComplete(),i._applyEdits(s)})()}queryFeatures(s={},i={}){var r=this;return(0,g.Z)(function*(){return yield r._waitSnapshotComplete(),r._queryEngine.executeQuery(s,i.signal)})()}queryFeatureCount(s={},i={}){var r=this;return(0,g.Z)(function*(){return yield r._waitSnapshotComplete(),r._queryEngine.executeQueryForCount(s,i.signal)})()}queryObjectIds(s={},i={}){var r=this;return(0,g.Z)(function*(){return yield r._waitSnapshotComplete(),r._queryEngine.executeQueryForIds(s,i.signal)})()}queryExtent(s={},i={}){var r=this;return(0,g.Z)(function*(){return yield r._waitSnapshotComplete(),r._queryEngine.executeQueryForExtent(s,i.signal)})()}querySnapping(s,i={}){var r=this;return(0,g.Z)(function*(){return yield r._waitSnapshotComplete(),r._queryEngine.executeQueryForSnapping(s,i.signal)})()}refresh(s){var i=this;return(0,g.Z)(function*(){i._loadOptions.customParameters=s,i._snapshotTask?.abort(),i._snapshotTask=(0,N.vr)(i._snapshotFeatures),i._snapshotTask.promise.then(_=>{i._queryEngine.featureStore.clear(),i._objectIdGenerator=i._createObjectIdGenerator(i._queryEngine,_);const d=i._normalizeFeatures(_);d&&i._queryEngine.featureStore.addMany(d)},_=>{i._queryEngine.featureStore.clear(),(0,S.D_)(_)||x.Z.getLogger("esri.layers.GeoJSONLayer").error(new j.Z("geojson-layer:refresh","An error occurred during refresh",{error:_}))}),yield i._waitSnapshotComplete();const{fullExtent:r,timeExtent:u}=yield i._queryEngine.fetchRecomputedExtents();return{extent:r,timeExtent:u}})()}_createFeatures(s){var i=this;return(0,g.Z)(function*(){if(null==s)return[];const{geometryType:r,hasZ:u,objectIdField:_}=i._queryEngine,d=(0,T.lG)(s,{geometryType:r,hasZ:u,objectIdField:_});if(!(0,O.fS)(i._queryEngine.spatialReference,O.Zn))for(const m of d)null!=m.geometry&&(m.geometry=(0,R.GH)((0,p.iV)((0,R.di)(m.geometry,i._queryEngine.geometryType,i._queryEngine.hasZ,!1),O.Zn,i._queryEngine.spatialReference)));return d})()}_waitSnapshotComplete(){var s=this;return(0,g.Z)(function*(){if(s._snapshotTask&&!s._snapshotTask.finished){try{yield s._snapshotTask.promise}catch{}return s._waitSnapshotComplete()}})()}_fetch(s){var i=this;return(0,g.Z)(function*(){const{url:r,customParameters:u}=i._loadOptions,_=(yield(0,A.Z)(r,{responseType:"json",query:{...u},signal:s})).data;return(0,T.O3)(_),_})()}_normalizeFeatures(s,i){const{objectIdField:r,fieldsIndex:u}=this._queryEngine,_=[];for(const d of s){const m=this._createDefaultAttributes(),I=(0,f.O0)(u,m,d.attributes,!0);I?i?.push(I):(this._assignObjectId(m,d.attributes,!0),d.attributes=m,d.objectId=m[r],_.push(d))}return _}_applyEdits(s){var i=this;return(0,g.Z)(function*(){const{adds:r,updates:u,deletes:_}=s,d={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(r?.length&&i._applyAddEdits(d,r),u?.length&&i._applyUpdateEdits(d,u),_?.length){for(const F of _)d.deleteResults.push((0,f.d1)(F));i._queryEngine.featureStore.removeManyById(_)}const{fullExtent:m,timeExtent:I}=yield i._queryEngine.fetchRecomputedExtents();return{extent:m,timeExtent:I,featureEditResults:d}})()}_applyAddEdits(s,i){const{addResults:r}=s,{geometryType:u,hasM:_,hasZ:d,objectIdField:m,spatialReference:I,featureStore:F,fieldsIndex:M}=this._queryEngine,t=[];for(const e of i){if(e.geometry&&u!==(0,L.Ji)(e.geometry)){r.push((0,f.av)("Incorrect geometry type."));continue}const n=this._createDefaultAttributes(),o=(0,f.O0)(M,n,e.attributes);if(o)r.push(o);else{if(this._assignObjectId(n,e.attributes),e.attributes=n,null!=e.uid&&(s.uidToObjectId[e.uid]=e.attributes[m]),null!=e.geometry){const l=e.geometry.spatialReference??I;e.geometry=(0,p.iV)((0,f.og)(e.geometry,l),l,I)}t.push(e),r.push((0,f.d1)(e.attributes[m]))}}F.addMany((0,R.Yn)([],t,u,d,_,m))}_applyUpdateEdits({updateResults:s},i){const{geometryType:r,hasM:u,hasZ:_,objectIdField:d,spatialReference:m,featureStore:I,fieldsIndex:F}=this._queryEngine;for(const M of i){const{attributes:t,geometry:e}=M,n=t?.[d];if(null==n){s.push((0,f.av)(`Identifier field ${d} missing`));continue}if(!I.has(n)){s.push((0,f.av)(`Feature with object id ${n} missing`));continue}const o=(0,R.EI)(I.getFeature(n),r,_,u);if(null!=e){if(r!==(0,L.Ji)(e)){s.push((0,f.av)("Incorrect geometry type."));continue}const l=e.spatialReference??m;o.geometry=(0,p.iV)((0,f.og)(e,l),l,m)}if(t){const l=(0,f.O0)(F,o.attributes,t);if(l){s.push(l);continue}}I.add((0,R.XA)(o,r,_,u,d)),s.push((0,f.d1)(n))}}_createObjectIdGenerator(s,i){const r=s.fieldsIndex.get(s.objectIdField);if("esriFieldTypeString"===r.type)return()=>r.name+"-"+Date.now().toString(16);let u=Number.NEGATIVE_INFINITY;for(const _ of i)_.objectId&&(u=Math.max(u,_.objectId));return u=Math.max(0,u)+1,()=>u++}_assignObjectId(s,i,r=!1){const u=this._queryEngine.objectIdField;s[u]=r&&u in i?i[u]:this._objectIdGenerator()}_checkProjection(s){return(0,g.Z)(function*(){try{yield(0,p._W)(O.Zn,s)}catch{throw new j.Z("geojson-layer","Projection not supported")}})()}}},58775:(Y,Z,a)=>{a.d(Z,{O3:()=>I,lG:()=>M,my:()=>F,q9:()=>O});var g=a(95324),A=a(26584),N=a(37053),j=a(66385),x=a(88071),S=a(90194);const L={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function O(t){return L[t]}function*R(t){switch(t.type){case"Feature":yield t;break;case"FeatureCollection":for(const e of t.features)e&&(yield e)}}function*h(t){if(t)switch(t.type){case"Point":yield t.coordinates;break;case"LineString":case"MultiPoint":yield*t.coordinates;break;case"MultiLineString":case"Polygon":for(const e of t.coordinates)yield*e;break;case"MultiPolygon":for(const e of t.coordinates)for(const n of e)yield*n}}function y(t){for(const e of t)if(e.length>2)return!0;return!1}function f(t){let e=0;for(let n=0;n<t.length;n++){const o=t[n],l=t[(n+1)%t.length];e+=o[0]*l[1]-l[0]*o[1]}return e<=0}function U(t){const e=t[0],n=t[t.length-1];return e[0]===n[0]&&e[1]===n[1]&&e[2]===n[2]||t.push(e),t}function q(t,e,n){switch(e.type){case"LineString":return function B(t,e,n){return u(t,e.coordinates,n),t}(t,e,n);case"MultiLineString":return function Q(t,e,n){for(const o of e.coordinates)u(t,o,n);return t}(t,e,n);case"MultiPoint":return function $(t,e,n){return u(t,e.coordinates,n),t}(t,e,n);case"MultiPolygon":return function W(t,e,n){for(const o of e.coordinates){i(t,o[0],n);for(let l=1;l<o.length;l++)r(t,o[l],n)}return t}(t,e,n);case"Point":return function V(t,e,n){return d(t,e.coordinates,n),t}(t,e,n);case"Polygon":return function s(t,e,n){const o=e.coordinates;i(t,o[0],n);for(let l=1;l<o.length;l++)r(t,o[l],n);return t}(t,e,n)}}function i(t,e,n){const o=U(e);!function T(t){return!f(t)}(o)?u(t,o,n):_(t,o,n)}function r(t,e,n){const o=U(e);!function P(t){return f(t)}(o)?u(t,o,n):_(t,o,n)}function u(t,e,n){for(const o of e)d(t,o,n);t.lengths.push(e.length)}function _(t,e,n){for(let o=e.length-1;o>=0;o--)d(t,e[o],n);t.lengths.push(e.length)}function d(t,e,n){const[o,l,b]=e;t.coords.push(o,l),n.hasZ&&t.coords.push(b||0)}function m(t){switch(typeof t){case"string":return(0,g.mu)(t)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function I(t,e=4326){if(!t)throw new A.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==t.type&&"FeatureCollection"!==t.type)throw new A.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:t});const{crs:n}=t;if(!n)return;const o="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,l=(0,N.oR)({wkid:e})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${e})$`,"i");if(!o||!l.test(o))throw new A.Z("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function F(t,e={}){const n=[],o=new Set,l=new Set;let b,w=!1,E=null,C=!1,{geometryType:v=null}=e,H=!1;for(const G of R(t)){const{geometry:c,properties:D,id:z}=G;if((!c||(v||(v=O(c.type)),O(c.type)===v))&&(w||(w=y(h(c))),C||(C=null!=z,C&&(b=typeof z,D&&(E=Object.keys(D).filter(k=>D[k]===z)))),D&&E&&C&&null!=z&&(E.length>1?E=E.filter(k=>D[k]===z):1===E.length&&(E=D[E[0]]===z?E:[])),!H&&D)){let k=!0;for(const K in D){if(o.has(K))continue;const X=D[K];if(null==X){k=!1,l.add(K);continue}const ee=m(X);if("unknown"===ee){l.add(K);continue}l.delete(K),o.add(K);const te=(0,S.q6)(K);te&&n.push({name:te,alias:K,type:ee})}H=k}}const J=(0,S.q6)(1===E?.length&&E[0]||null)??void 0;if(J)for(const G of n)if(G.name===J&&(0,S.H7)(G)){G.type="esriFieldTypeOID";break}return{fields:n,geometryType:v,hasZ:w,objectIdFieldName:J,objectIdFieldType:b,unknownFields:Array.from(l)}}function M(t,e){return Array.from(function*p(t,e={}){const{geometryType:n,objectIdField:o}=e;for(const l of t){const{geometry:b,properties:w,id:E}=l;if(b&&O(b.type)!==n)continue;const C=w||{};let v;o&&(v=C[o],null==E||v||(C[o]=v=E)),yield new j.u_(b?q(new x.Z,b,e):null,C,null,v??void 0)}}(R(t),e))}},56554:(Y,Z,a)=>{a.d(Z,{Dm:()=>O,Hq:()=>R,MS:()=>h,bU:()=>x});var g=a(8314),A=a(58817),N=a(87757),j=a(24837);function x(p){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===p||"esriGeometryMultipoint"===p?j.I4:"esriGeometryPolyline"===p?j.ET:j.lF}}}const S=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let L=1;function O(p,y){if((0,g.Z)("esri-csp-restrictions"))return()=>({[y]:null,...p});try{let T=`this.${y} = null;`;for(const f in p)T+=`this${S.test(f)?`.${f}`:`["${f}"]`} = ${JSON.stringify(p[f])};`;const P=new Function(`\n      return class AttributesClass$${L++} {\n        constructor() {\n          ${T};\n        }\n      }\n    `)();return()=>new P}catch{return()=>({[y]:null,...p})}}function R(p={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,A.d9)(p)}}]}function h(p,y){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:p},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:y,supportsDelete:y,supportsEditing:y,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:y,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:N.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:y,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);