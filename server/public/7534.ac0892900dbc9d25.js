"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[7534],{27369:(B,S,t)=>{t.d(S,{L:()=>n});var r=t(15861),I=t(45205);class n{constructor(){this._serviceMetadatas=new Map}fetchServiceMetadata(m,p){var P=this;return(0,r.Z)(function*(){const g=P._serviceMetadatas.get(m);if(g)return g;const O=yield(0,I.T)(m,p);return P._serviceMetadatas.set(m,O),O})()}}},39593:(B,S,t)=>{t.d(S,{w:()=>O});var r=t(15861),I=t(24263),n=t(84792),a=t(26584),m=t(10699),p=t(38305),P=t(31099),g=t(55463);function O(u,c){return N.apply(this,arguments)}function N(){return N=(0,r.Z)(function*(u,c){const y=(0,p.Qc)(u);if(!y)throw new a.Z("invalid-url","Invalid scene service url");const i={...c,sceneServerUrl:y.url.path,layerId:y.sublayer??void 0};if(i.sceneLayerItem??=(yield function T(u){return o.apply(this,arguments)}(i)),null==i.sceneLayerItem)return v(i.sceneServerUrl.replace("/SceneServer","/FeatureServer"),i);const h=yield function A(u){return G.apply(this,arguments)}(i);if(!h?.url)throw new a.Z("related-service-not-found","Could not find feature service through portal item relationship");const j=yield v(h.url,i);return j.portalItem=h,j}),N.apply(this,arguments)}function o(){return o=(0,r.Z)(function*(u){const c=(yield s(u)).serviceItemId;if(!c)return null;const y=new g.default({id:c,apiKey:u.apiKey}),i=yield function E(u){return D.apply(this,arguments)}(u);null!=i&&(y.portal=new P.Z({url:i}));try{return y.load({signal:u.signal})}catch(h){return(0,m.r9)(h),null}}),o.apply(this,arguments)}function s(u){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(function*(u){if(u.rootDocument)return u.rootDocument;const c={query:{f:"json",token:u.apiKey},responseType:"json",signal:u.signal};try{const y=yield(0,n.Z)(u.sceneServerUrl,c);u.rootDocument=y.data}catch{u.rootDocument={}}return u.rootDocument})).apply(this,arguments)}function D(){return(D=(0,r.Z)(function*(u){const c=I.id?.findServerInfo(u.sceneServerUrl);if(c?.owningSystemUrl)return c.owningSystemUrl;const y=u.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const i=(yield(0,n.Z)(y,{query:{f:"json"},responseType:"json",signal:u.signal})).data.owningSystemUrl;if(i)return i}catch(i){(0,m.r9)(i)}return null})).apply(this,arguments)}function v(u,c){return R.apply(this,arguments)}function R(){return(R=(0,r.Z)(function*(u,c){const y=(0,p.Qc)(u);if(!y)throw new a.Z("invalid-feature-service-url","Invalid feature service url");const i=y.url.path,h=c.layerId;if(null==h)return{serverUrl:i};const j=s(c),K=C=>(0,n.Z)(i,{query:{f:"json"},responseType:"json",authMode:C,signal:c.signal}),$=K("anonymous").catch(()=>K("no-prompt")),[V,Q]=yield Promise.all([$,j]),F=Q?.layers,x=V.data&&V.data.layers;if(!Array.isArray(x))throw new Error("expected layers array");if(Array.isArray(F)){for(let C=0;C<Math.min(F.length,x.length);C++)if(F[C].id===h)return{serverUrl:i,layerId:x[C].id}}else if(null!=h&&h<x.length)return{serverUrl:i,layerId:x[h].id};throw new Error("could not find matching associated sublayer")})).apply(this,arguments)}function G(){return(G=(0,r.Z)(function*({sceneLayerItem:u,signal:c}){if(!u)return null;try{const y=(yield u.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:c})).find(h=>"Feature Service"===h.type)||null;if(!y)return null;const i=new g.default({portal:y.portal,id:y.id});return yield i.load(),i}catch(y){return(0,m.r9)(y),null}})).apply(this,arguments)}},30164:(B,S,t)=>{t.d(S,{T:()=>I});var r=t(15861);const I={BingMapsLayer:(n=(0,r.Z)(function*(){return(yield t.e(2248).then(t.bind(t,72248))).default}),function(){return n.apply(this,arguments)}),BuildingSceneLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(4199),t.e(5366),t.e(4430),t.e(415),t.e(2432),t.e(9709),t.e(4629),t.e(3784),t.e(9319)]).then(t.bind(t,19319))).default});return function(){return n.apply(this,arguments)}}(),CSVLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(4199),t.e(5366),t.e(4430),t.e(415),t.e(5625)]).then(t.bind(t,85625))).default});return function(){return n.apply(this,arguments)}}(),DimensionLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(8592),t.e(326)]).then(t.bind(t,90326))).default});return function(){return n.apply(this,arguments)}}(),ElevationLayer:function(){var n=(0,r.Z)(function*(){return(yield t.e(3327).then(t.bind(t,3327))).default});return function(){return n.apply(this,arguments)}}(),FeatureLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(4199),t.e(5366),t.e(4430),t.e(415)]).then(t.bind(t,80415))).default});return function(){return n.apply(this,arguments)}}(),GeoJSONLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(4199),t.e(5366),t.e(2903)]).then(t.bind(t,72903))).default});return function(){return n.apply(this,arguments)}}(),GeoRSSLayer:function(){var n=(0,r.Z)(function*(){return(yield t.e(6306).then(t.bind(t,96306))).default});return function(){return n.apply(this,arguments)}}(),GroupLayer:function(){var n=(0,r.Z)(function*(){return(yield t.e(5700).then(t.bind(t,55700))).default});return function(){return n.apply(this,arguments)}}(),ImageryLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(6926),t.e(2863),t.e(6606),t.e(3216),t.e(2328)]).then(t.bind(t,62328))).default});return function(){return n.apply(this,arguments)}}(),ImageryTileLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(6926),t.e(8594),t.e(2863),t.e(6606),t.e(6241),t.e(3216),t.e(8592),t.e(4316)]).then(t.bind(t,4316))).default});return function(){return n.apply(this,arguments)}}(),IntegratedMeshLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(2432),t.e(8592),t.e(362)]).then(t.bind(t,31370))).default});return function(){return n.apply(this,arguments)}}(),KMLLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(8592),t.e(8411)]).then(t.bind(t,38411))).default});return function(){return n.apply(this,arguments)}}(),LineOfSightLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(8592),t.e(468)]).then(t.bind(t,83602))).default});return function(){return n.apply(this,arguments)}}(),LinkChartLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(337),t.e(5366),t.e(774),t.e(9466),t.e(331),t.e(1599),t.e(8592),t.e(8005)]).then(t.bind(t,28005))).default});return function(){return n.apply(this,arguments)}}(),MapImageLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.resolve().then(t.bind(t,48887))).default});return function(){return n.apply(this,arguments)}}(),MapNotesLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(4199),t.e(5366),t.e(4430),t.e(415),t.e(8592),t.e(9859)]).then(t.bind(t,19859))).default});return function(){return n.apply(this,arguments)}}(),MediaLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(8592),t.e(9347)]).then(t.bind(t,24762))).default});return function(){return n.apply(this,arguments)}}(),OGCFeatureLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(4199),t.e(5366),t.e(9628),t.e(2955)]).then(t.bind(t,36554))).default});return function(){return n.apply(this,arguments)}}(),OpenStreetMapLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(8592),t.e(1591)]).then(t.bind(t,71591))).default});return function(){return n.apply(this,arguments)}}(),OrientedImageryLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(4199),t.e(5366),t.e(4430),t.e(415),t.e(6150)]).then(t.bind(t,66150))).default});return function(){return n.apply(this,arguments)}}(),PointCloudLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(2432),t.e(8592),t.e(7155)]).then(t.bind(t,7155))).default});return function(){return n.apply(this,arguments)}}(),RouteLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(403),t.e(4940)]).then(t.bind(t,84940))).default});return function(){return n.apply(this,arguments)}}(),SceneLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(5366),t.e(2432),t.e(9709),t.e(4629),t.e(3784),t.e(8592),t.e(6933)]).then(t.bind(t,27559))).default});return function(){return n.apply(this,arguments)}}(),StreamLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(4199),t.e(5366),t.e(289)]).then(t.bind(t,70289))).default});return function(){return n.apply(this,arguments)}}(),SubtypeGroupLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(5366),t.e(4430),t.e(1976)]).then(t.bind(t,81976))).default});return function(){return n.apply(this,arguments)}}(),TileLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.resolve().then(t.bind(t,59735))).default});return function(){return n.apply(this,arguments)}}(),UnknownLayer:function(){var n=(0,r.Z)(function*(){return(yield t.e(6339).then(t.bind(t,56339))).default});return function(){return n.apply(this,arguments)}}(),UnsupportedLayer:function(){var n=(0,r.Z)(function*(){return(yield t.e(6240).then(t.bind(t,16240))).default});return function(){return n.apply(this,arguments)}}(),VectorTileLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(4336),t.e(8364),t.e(8592),t.e(2826)]).then(t.bind(t,10193))).default});return function(){return n.apply(this,arguments)}}(),VoxelLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(2432),t.e(8592),t.e(3521)]).then(t.bind(t,26007))).default});return function(){return n.apply(this,arguments)}}(),WFSLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(4199),t.e(5366),t.e(9636),t.e(8762)]).then(t.bind(t,98762))).default});return function(){return n.apply(this,arguments)}}(),WMSLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(8592),t.e(6894)]).then(t.bind(t,46894))).default});return function(){return n.apply(this,arguments)}}(),WMTSLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(8592),t.e(9526)]).then(t.bind(t,69526))).default});return function(){return n.apply(this,arguments)}}(),WebTileLayer:function(){var n=(0,r.Z)(function*(){return(yield t.e(8592).then(t.bind(t,28678))).default});return function(){return n.apply(this,arguments)}}()};var n},73391:(B,S,t)=>{t.d(S,{$O:()=>a,CD:()=>N,Ok:()=>p,Q4:()=>P,XX:()=>g,_Y:()=>O,bS:()=>n});var r=t(15861),I=t(39593);function n(o){const s={id:o.id,name:o.name};return"Oriented Imagery Layer"===o.type&&(s.layerType="OrientedImageryLayer"),s}function a(o,s,d){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(function*(o,s,d){if(null==o?.layers||null==o?.tables){const E=yield d.fetchServiceMetadata(s);(o=o||{}).layers=o.layers||E?.layers?.map(n),o.tables=o.tables||E?.tables?.map(n)}return o})).apply(this,arguments)}function p(o){const s=o.layers;if(s?.length)return s[0].id;const d=o.tables;return d?.length?d[0].id:null}function P(o){return(o?.layers?.length??0)+(o?.tables?.length??0)}function g(o){const s=[];return o?.layers?.forEach(d=>{"SubtypeGroupLayer"===d.layerType&&s.push(d.id)}),s}function O(o){return o?.layers?.filter(({layerType:s})=>"OrientedImageryLayer"===s).map(({id:s})=>s)}function N(o,s,d){return T.apply(this,arguments)}function T(){return(T=(0,r.Z)(function*(o,s,d){if(!o?.url)return s??{};if(s??={},!s.layers){const v=yield d.fetchServiceMetadata(o.url);s.layers=v.layers?.map(n)}const{serverUrl:E,portalItem:D}=yield(0,I.w)(o.url,{sceneLayerItem:o}).catch(()=>({serverUrl:null,portalItem:null}));if(null==E)return s.tables=[],s;if(!s.tables&&D){const v=yield D.fetchData();if(v?.tables)s.tables=v.tables.map(n);else{const R=yield d.fetchServiceMetadata(E);s.tables=R?.tables?.map(n)}}if(s.tables)for(const v of s.tables)v.url=`${E}/${v.id}`;return s})).apply(this,arguments)}},7534:(B,S,t)=>{t.r(S),t.d(S,{fromItem:()=>N,selectLayerClassPath:()=>d});var r=t(15861),I=t(26584),n=t(39593),a=t(27369),m=t(72469),p=t(30164),P=t(55463),g=t(73391),O=t(37281);function N(e){return T.apply(this,arguments)}function T(){return T=(0,r.Z)(function*(e){!e.portalItem||e.portalItem instanceof P.default||(e={...e,portalItem:new P.default(e.portalItem)});const l=yield function o(e){return s.apply(this,arguments)}(e.portalItem);return new l.constructor({portalItem:e.portalItem,...l.properties})}),T.apply(this,arguments)}function s(){return s=(0,r.Z)(function*(e){yield e.load();const l=new a.L;return function D(e){return v.apply(this,arguments)}(yield d(e,l))}),s.apply(this,arguments)}function d(e,l){return E.apply(this,arguments)}function E(){return E=(0,r.Z)(function*(e,l){switch(e.type){case"Map Service":return function R(e,l){return A.apply(this,arguments)}(e,l);case"Feature Service":return function G(e,l){return u.apply(this,arguments)}(e,l);case"Feature Collection":return function i(e){return h.apply(this,arguments)}(e);case"Scene Service":return function c(e,l){return y.apply(this,arguments)}(e,l);case"Image Service":return function j(e,l){return K.apply(this,arguments)}(e,l);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"CSV":return{className:"CSVLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};case"Group Layer":return{className:"GroupLayer"};default:throw new I.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}),E.apply(this,arguments)}function v(){return(v=(0,r.Z)(function*(e){const f=p.T[e.className];return{constructor:yield f(),properties:e.properties}})).apply(this,arguments)}function A(){return A=(0,r.Z)(function*(e,l){return(yield function _(e,l){return X.apply(this,arguments)}(e,l))?{className:"TileLayer"}:{className:"MapImageLayer"}}),A.apply(this,arguments)}function u(){return(u=(0,r.Z)(function*(e,l){const f=yield b(e,l);if("object"==typeof f){const L={};return null!=f.id&&(L.layerId=f.id),{className:f.className||"FeatureLayer",properties:L}}return{className:"GroupLayer"}})).apply(this,arguments)}function y(){return(y=(0,r.Z)(function*(e,l){const f=yield b(e,l,(0,r.Z)(function*(){try{if(!e.url)return[];const{serverUrl:L}=yield(0,n.w)(e.url,{sceneLayerItem:e});return(yield l.fetchServiceMetadata(L))?.tables??[]}catch{return[]}}));if("object"==typeof f){const L={};let M;if(null!=f.id?(L.layerId=f.id,M=`${e.url}/layers/${f.id}`):M=e.url,e.typeKeywords?.length)for(const U of Object.keys(m.fb))if(e.typeKeywords.includes(U))return{className:m.fb[U]};const W=yield l.fetchServiceMetadata(M);return{className:m.fb[W?.layerType]||"SceneLayer",properties:L}}return!1===f&&"Voxel"===(yield l.fetchServiceMetadata(e.url))?.layerType?{className:"VoxelLayer"}:{className:"GroupLayer"}})).apply(this,arguments)}function h(){return(h=(0,r.Z)(function*(e){yield e.load();const l=(0,O._$)(e,"Map Notes"),f=(0,O._$)(e,"Markup");if(l||f)return{className:"MapNotesLayer"};if((0,O._$)(e,"Route Layer"))return{className:"RouteLayer"};const L=yield e.fetchData();return 1===(0,g.Q4)(L)?{className:"FeatureLayer"}:{className:"GroupLayer"}})).apply(this,arguments)}function K(){return(K=(0,r.Z)(function*(e,l){yield e.load();const f=e.typeKeywords?.map(H=>H.toLowerCase())??[];if(f.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(f.includes("tiled imagery"))return{className:"ImageryTileLayer"};const M=(yield e.fetchData())?.layerType;if("ArcGISTiledImageServiceLayer"===M)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===M)return{className:"ImageryLayer"};const W=yield l.fetchServiceMetadata(e.url),U=W.cacheType?.toLowerCase(),Z=W.capabilities?.toLowerCase().includes("tilesonly");return"map"===U||Z?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}})).apply(this,arguments)}function X(){return(X=(0,r.Z)(function*(e,l){return(yield l.fetchServiceMetadata(e.url)).tileInfo})).apply(this,arguments)}function b(e,l,f){return Y.apply(this,arguments)}function Y(){return(Y=(0,r.Z)(function*(e,l,f){const L=e.url;if(!L||/\/\d+$/.test(L))return{};yield e.load();let M=yield e.fetchData();if("Feature Service"===e.type){const U=yield(0,g.$O)(M,L,l),Z=z(U);if("object"==typeof Z){const H=(0,g.XX)(U),tt=(0,g._Y)(U);Z.className=null!=Z.id&&H.includes(Z.id)?"SubtypeGroupLayer":null!=Z.id&&tt?.includes(Z.id)?"OrientedImageryLayer":"FeatureLayer"}return Z}if("Scene Service"===e.type&&(M=yield(0,g.CD)(e,M,l)),(0,g.Q4)(M)>0)return z(M);const W=yield l.fetchServiceMetadata(L);return f&&(W.tables=yield f()),z(W)})).apply(this,arguments)}function z(e){return 1===(0,g.Q4)(e)&&{id:(0,g.Ok)(e)}}},45205:(B,S,t)=>{t.d(S,{T:()=>n});var r=t(15861),I=t(84792);function n(m,p){return a.apply(this,arguments)}function a(){return(a=(0,r.Z)(function*(m,p){const{data:P}=yield(0,I.Z)(m,{responseType:"json",query:{f:"json",...p?.customParameters,token:p?.apiKey}});return P})).apply(this,arguments)}}}]);