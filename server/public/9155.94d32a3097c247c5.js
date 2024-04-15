"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[9155],{95324:(J,A,a)=>{function h(y){return null!=b(y)||null!=O(y)}function $(y){return N.test(y)}function P(y){return b(y)??O(y)}function O(y){const f=new Date(y);return function U(y,f){if(Number.isNaN(y.getTime()))return!1;let c=!0;if(w&&/\d+\W*$/.test(f)){const v=f.match(/[a-zA-Z]{2,}/);if(v){let x=!1,g=0;for(;!x&&g<=v.length;)x=!j.test(v[g]),g++;c=!x}}return c}(f,y)?Number.isNaN(f.getTime())?null:f.getTime()-6e4*f.getTimezoneOffset():null}function b(y){const f=N.exec(y);if(!f?.groups)return null;const c=f.groups,v=+c.year,x=+c.month-1,g=+c.day,M=+(c.hours??"0"),G=+(c.minutes??"0"),L=+(c.seconds??"0");if(M>23||G>59||L>59)return null;const Q=c.ms??"0",Z=Q?+Q.padEnd(3,"0").substring(0,3):0;let D;return D=c.isUTC||!c.offsetSign?Date.UTC(v,x,g,M,G,L,Z):6e4*("+"===c.offsetSign?-1:1)*(60*+c.offsetHours+ +c.offsetMinutes)+Date.UTC(v,x,g,M,G,L,Z),Number.isNaN(D)?null:D}a.d(A,{mu:()=>$,of:()=>h,sG:()=>P});const N=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/,j=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,w=!Number.isNaN(new Date("technology 10").getTime())},39155:(J,A,a)=>{a.r(A),a.d(A,{default:()=>ye});var h=a(15861),P=(a(29132),a(84792)),O=a(59213),b=a(95324),N=a(26584),U=a(63290),j=a(10699),w=a(21726),y=a(5464),f=a(15994),c=a(37053),v=a(46367),x=a(66385),g=a(88071),M=a(81975),G=a(82959),L=a(60331),Q=a(75327),Z=a(90194);const D=/^\s*"([\S\s]*)"\s*$/,V=/""/g,B="\n",ie=[","," ",";","|","\t"];function*q(s,n,e){let t=0;for(;t<=s.length;){const r=s.indexOf(n,t),i=s.substring(t,r>-1?r:void 0);t+=i.length+n.length,e&&!i.trim()||(yield i)}}function K(s){const n=s.includes("\r\n")?"\r\n":B;return q(s,n,!0)}function Y(s,n){return q(s,n,!1)}function*_(s,n,e,t=(()=>Object.create(null))){const r=K(s);r.next();let i="",o="",u=0,d=t(),m=0;e:for(const S of r){const F=Y(S,e);for(const E of F)if(i+=o+E,o="",u+=X(E),u%2==0){if(u>0){const C=D.exec(i);if(!C){d=t(),m=0,i="",u=0;continue e}d[n[m]]=C[1].replaceAll(V,'"'),m++}else d[n[m]]=i,m++;i="",u=0}else o=e;0===u?(yield d,d=t(),m=0):o=B}}function k(s,n){const e=W(s,n).filter(r=>null!=r),t=e.map(r=>(0,Z.q6)(r));for(let r=t.length-1;r>=0;r--)t[r]||(t.splice(r,1),e.splice(r,1));return{names:t,aliases:e}}function W(s,n){if(!s?.length)return[];const e=[];let t="",r="",i=0;const o=Y(s,n);for(const u of o)if(t+=r+u,r="",i+=X(u),i%2==0){if(i>0){const d=D.exec(t);d&&e.push(d[1].replaceAll(V,'"'))}else e.push(t);t="",i=0}else r=n;return e}function X(s){let n=0,e=0;for(e=s.indexOf('"',e);e>=0;)n++,e=s.indexOf('"',e+1);return n}function se(s,n,e){n=(0,Z.q6)(n)?.toLowerCase(),e=(0,Z.q6)(e)?.toLowerCase();const t=s.map(o=>o.toLowerCase()),r=n?s[t.indexOf(n)]:null,i=e?s[t.indexOf(e)]:null;return{longitudeFieldName:r||s[t.indexOf(ue.find(o=>t.includes(o)))],latitudeFieldName:i||s[t.indexOf(ae.find(o=>t.includes(o)))]}}function le(s){if(!s.length)return"string";const n=/[^+\-.,0-9]/;return s.map(e=>{if(""!==e){if(!n.test(e)){let t=z(e);if(!isNaN(t))return/[.,]/.test(e)||!Number.isInteger(t)||t>214783647||t<-214783648?"double":"integer";if(e.includes("E")&&(t=Number(e),!Number.isNaN(t)||e.includes(",")&&(e=e.replace(",","."),t=Number(e),!Number.isNaN(t))))return"double"}return(0,b.of)(e)?"date":"string"}}).reduce((e,t)=>void 0===e?t:void 0===t?e:e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0)}const z=function(){const s=(0,Q.lt)(),n=new RegExp("^"+s.regexp+"$"),e=new RegExp("["+s.group+"\\s\\xa0]","g"),t=s.factor;return r=>{const i=n.exec(r);if(s.factor=t,!i)return NaN;let o=i[1];if(!i[1]){if(!i[2])return NaN;o=i[2],s.factor*=-1}return o=o.replace(e,"").replace(s.decimal,"."),+o*s.factor}}(),ae=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],ue=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"];var ee=a(56554),H=a(60466),te=a(28302),de=a(65234);const ce=(0,ee.bU)("esriGeometryPoint"),fe=["csv"],pe=[0,0];class me{constructor(n,e){this.x=n,this.y=e}}class ye{constructor(){var n=this;this._queryEngine=null,this._snapshotFeatures=function(){var e=(0,h.Z)(function*(t){const r=yield n._fetch(t);return n._createFeatures(r)});return function(t){return e.apply(this,arguments)}}()}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}load(n,e={}){var t=this;return(0,h.Z)(function*(){t._loadOptions=n;const[r]=yield Promise.all([t._fetch(e.signal),t._checkProjection(n?.parsingOptions?.spatialReference)]),i=function he(s,n){const e=n.parsingOptions||{},t={delimiter:e.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:e.latitudeField,longitudeFieldName:e.longitudeField}},r=t.layerDefinition={name:(0,w.vt)(n.url,fe)||"csv",dateFieldsTimeReference:{timeZoneIANA:te.pt},drawingInfo:ce,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:e.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:e.spatialReference||{wkid:4326}}},i=K(s),o=i.next().value?.trim(),u=i.next().value?.trim();if(!o)throw new N.Z("csv-layer:empty-csv","CSV is empty",{csv:s});const{delimiter:d,locationInfo:m}=function re(s,n,e){s=s.trim(),n=n?.trim();const t=[],r=Array.from(new Set([e?.delimiter,...ie])).filter(o=>null!=o);for(const o of r){const u=W(s,o).length,d=W(n,o).length??u;u>1&&t.push({weight:Math.min(u,d),delimiter:o})}const i=t.sort(({weight:o},{weight:u})=>u-o).map(({delimiter:o})=>o);for(const o of i){const u=se(k(s,o).names,e?.longitudeField,e?.latitudeField);if(u.longitudeFieldName&&u.latitudeFieldName)return{delimiter:o,locationInfo:u}}return{delimiter:i[0],locationInfo:null}}(o,u,e);if(!d)throw new N.Z("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:o,secondLine:u,parsingOptions:e});if(!m)throw new N.Z("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:o,secondLine:u,parsingOptions:e});t.locationInfo=m,t.delimiter=d;const{names:S,aliases:F}=k(o,d),E=function oe(s,n,e,t,r){const i=[],o=_(s,e,n),u=[];for(const d of o){if(10===u.length)break;u.push(d)}for(let d=0;d<e.length;d++){const m=e[d],S=t[d];if(m===r.longitudeFieldName||m===r.latitudeFieldName)i.push({name:m,type:"esriFieldTypeDouble",alias:S});else{let F;switch(le(u.map(E=>E[m]))){case"integer":F="esriFieldTypeInteger";break;case"double":F="esriFieldTypeDouble";break;case"date":F="esriFieldTypeDate";break;default:F="esriFieldTypeString"}i.push({name:m,type:F,alias:S,length:(0,Z.ZR)(F)})}}return i}(s,t.delimiter,S,F,t.locationInfo);if(e.fields?.length){const p=new H.Z(e.fields);for(const l of E){const T=p.get(l.name);T&&Object.assign(l,T)}}if(!E.some(p=>"esriFieldTypeOID"===p.type&&(r.objectIdField=p.name,!0))){const p={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};r.objectIdField=p.name,E.unshift(p)}r.fields=E;const C=new H.Z(r.fields);if(t.locationInfo&&(t.locationInfo.latitudeFieldName=C.get(t.locationInfo.latitudeFieldName).name,t.locationInfo.longitudeFieldName=C.get(t.locationInfo.longitudeFieldName).name),r.timeInfo){const p=r.timeInfo;if(p.startTimeField){const l=C.get(p.startTimeField);l?(p.startTimeField=l.name,l.type="esriFieldTypeDate"):p.startTimeField=null}if(p.endTimeField){const l=C.get(p.endTimeField);l?(p.endTimeField=l.name,l.type="esriFieldTypeDate"):p.endTimeField=null}if(p.trackIdField){const l=C.get(p.trackIdField);p.trackIdField=l?l.name:null}p.startTimeField||p.endTimeField||(r.timeInfo=null)}return t}(r,n);t._locationInfo=i.locationInfo,t._delimiter=i.delimiter,t._queryEngine=t._createQueryEngine(i);const o=yield t._createFeatures(r);t._queryEngine.featureStore.addMany(o);const{fullExtent:u,timeExtent:d}=yield t._queryEngine.fetchRecomputedExtents();if(i.layerDefinition.extent=u,d){const{start:m,end:S}=d;i.layerDefinition.timeInfo.timeExtent=[m,S]}return i})()}applyEdits(){return(0,h.Z)(function*(){throw new N.Z("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")})()}queryFeatures(n={},e={}){var t=this;return(0,h.Z)(function*(){return yield t._waitSnapshotComplete(),t._queryEngine.executeQuery(n,e.signal)})()}queryFeatureCount(n={},e={}){var t=this;return(0,h.Z)(function*(){return yield t._waitSnapshotComplete(),t._queryEngine.executeQueryForCount(n,e.signal)})()}queryObjectIds(n={},e={}){var t=this;return(0,h.Z)(function*(){return yield t._waitSnapshotComplete(),t._queryEngine.executeQueryForIds(n,e.signal)})()}queryExtent(n={},e={}){var t=this;return(0,h.Z)(function*(){return yield t._waitSnapshotComplete(),t._queryEngine.executeQueryForExtent(n,e.signal)})()}querySnapping(n,e={}){var t=this;return(0,h.Z)(function*(){return yield t._waitSnapshotComplete(),t._queryEngine.executeQueryForSnapping(n,e.signal)})()}refresh(n){var e=this;return(0,h.Z)(function*(){e._loadOptions.customParameters=n,e._snapshotTask?.abort(),e._snapshotTask=(0,O.vr)(e._snapshotFeatures),e._snapshotTask.promise.then(i=>{e._queryEngine.featureStore.clear(),i&&e._queryEngine.featureStore.addMany(i)},i=>{e._queryEngine.featureStore.clear(),(0,j.D_)(i)||U.Z.getLogger("esri.layers.CSVLayer").error(new N.Z("csv-layer:refresh","An error occurred during refresh",{error:i}))}),yield e._waitSnapshotComplete();const{fullExtent:t,timeExtent:r}=yield e._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:r}})()}_waitSnapshotComplete(){var n=this;return(0,h.Z)(function*(){if(n._snapshotTask&&!n._snapshotTask.finished){try{yield n._snapshotTask.promise}catch{}return n._waitSnapshotComplete()}})()}_fetch(n){var e=this;return(0,h.Z)(function*(){const{url:t,customParameters:r}=e._loadOptions;if(!t)throw new N.Z("csv-layer:invalid-source","url not defined");const i=(0,w.mN)(t);return(yield(0,P.Z)(i.path,{query:{...i.query,...r},responseType:"text",signal:n})).data})()}_createQueryEngine(n){const{objectIdField:e,fields:t,extent:r,timeInfo:i}=n.layerDefinition,o=new M.Z({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new L.q({fieldsIndex:H.Z.fromLayerJSON({fields:t,dateFieldsTimeReference:{timeZoneIANA:te.pt}}),geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:i,objectIdField:e,spatialReference:r.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:o})}_createFeatures(n){var e=this;return(0,h.Z)(function*(){const{latitudeFieldName:t,longitudeFieldName:r}=e._locationInfo,{objectIdField:i,fieldsIndex:o,spatialReference:u}=e._queryEngine;let d=[];const m=[],S=o.fields.filter(l=>l.name!==i).map(l=>l.name);let F=0;const E={};for(const l of o.fields)if("esriFieldTypeOID"!==l.type&&"esriFieldTypeGlobalID"!==l.type){const T=(0,Z.os)(l);void 0!==T&&(E[l.name]=T)}const C=_(n,S,e._delimiter,(0,ee.Dm)(E,i));for(const l of C){const T=e._parseCoordinateValue(l[t]),R=e._parseCoordinateValue(l[r]);if(null!=R&&null!=T&&!isNaN(T)&&!isNaN(R)){l[t]=T,l[r]=R;for(const I in l)if(I!==t&&I!==r)if(o.isDateField(I))l[I]=(0,b.sG)(l[I]);else if(o.isNumericField(I)){const ne=z(l[I]);l[I]=isNaN(ne)?null:ne}l[i]=F,F++,d.push(new me(R,T)),m.push(l)}}if(!(0,c.fS)({wkid:4326},u))if((0,c.sS)(u))for(const l of d)[l.x,l.y]=(0,v.hG)(l.x,l.y,pe);else d=(0,y.projectMany)(f.N,d,de.Z.WGS84,u,null,null);const p=[];for(let l=0;l<d.length;l++){const{x:T,y:R}=d[l],I=m[l];I[i]=l+1,p.push(new x.u_(new g.Z([],[T,R]),I,null,I[i]))}return p})()}_parseCoordinateValue(n){if(null==n||""===n)return null;let e=z(n);return(isNaN(e)||Math.abs(e)>181)&&(e=parseFloat(n)),e}_checkProjection(n){return(0,h.Z)(function*(){try{yield(0,G._W)(c.Zn,n)}catch{throw new N.Z("csv-layer:projection-not-supported","Projection not supported")}})()}}},56554:(J,A,a)=>{a.d(A,{Dm:()=>j,Hq:()=>w,MS:()=>y,bU:()=>b});var h=a(8314),$=a(58817),P=a(87757),O=a(24837);function b(f){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===f||"esriGeometryMultipoint"===f?O.I4:"esriGeometryPolyline"===f?O.ET:O.lF}}}const N=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let U=1;function j(f,c){if((0,h.Z)("esri-csp-restrictions"))return()=>({[c]:null,...f});try{let v=`this.${c} = null;`;for(const g in f)v+=`this${N.test(g)?`.${g}`:`["${g}"]`} = ${JSON.stringify(f[g])};`;const x=new Function(`\n      return class AttributesClass$${U++} {\n        constructor() {\n          ${v};\n        }\n      }\n    `)();return()=>new x}catch{return()=>({[c]:null,...f})}}function w(f={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,$.d9)(f)}}]}function y(f,c){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:f},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:c,supportsDelete:c,supportsEditing:c,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:c,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:P.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:c,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);