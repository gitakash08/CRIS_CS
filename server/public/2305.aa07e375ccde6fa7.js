"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[2305],{62305:(Z,f,n)=>{n.r(f),n.d(f,{default:()=>j});var a=n(15861),P=n(59213),E=n(26584),R=n(63290),d=n(10699),M=n(37053),g=n(82054),S=n(81975),h=n(82959),T=n(60331),m=n(58775),C=n(35775),F=n(29636),D=n(60466),I=n(28302);class j{constructor(){this._queryEngine=null,this._customParameters=null}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}load(r,t){var e=this;return(0,a.Z)(function*(){const{getFeatureUrl:l,getFeatureOutputFormat:y,fields:s,geometryType:i,featureType:u,objectIdField:p,customParameters:o}=r,{spatialReference:_,getFeatureSpatialReference:c}=(0,F.fU)(l,u,r.spatialReference);e._featureType=u,e._customParameters=o,e._getFeatureUrl=l,e._getFeatureOutputFormat=y,e._getFeatureSpatialReference=c;try{yield(0,h._W)(c,_)}catch{throw new E.Z("unsupported-projection","Projection not supported",{inSpatialReference:c,outSpatialReference:_})}(0,d.k_)(t);const O=D.Z.fromLayerJSON({fields:s,dateFieldsTimeReference:s.some(U=>"esriFieldTypeDate"===U.type)?{timeZoneIANA:I.pt}:null}),v=yield e._snapshotFeatures({fieldsIndex:O,geometryType:i,objectIdField:p,spatialReference:_},t.signal);return e._queryEngine=new T.q({fieldsIndex:O,geometryType:i,hasM:!1,hasZ:!1,objectIdField:p,spatialReference:_,timeInfo:null,featureStore:new S.Z({geometryType:i,hasM:!1,hasZ:!1})}),e._queryEngine.featureStore.addMany(v),{extent:(yield e._queryEngine.fetchRecomputedExtents()).fullExtent}})()}applyEdits(){return(0,a.Z)(function*(){throw new E.Z("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")})()}queryFeatures(r={},t={}){var e=this;return(0,a.Z)(function*(){return yield e._waitSnapshotComplete(),e._queryEngine.executeQuery(r,t.signal)})()}queryFeatureCount(r={},t={}){var e=this;return(0,a.Z)(function*(){return yield e._waitSnapshotComplete(),e._queryEngine.executeQueryForCount(r,t.signal)})()}queryObjectIds(r={},t={}){var e=this;return(0,a.Z)(function*(){return yield e._waitSnapshotComplete(),e._queryEngine.executeQueryForIds(r,t.signal)})()}queryExtent(r={},t={}){var e=this;return(0,a.Z)(function*(){return yield e._waitSnapshotComplete(),e._queryEngine.executeQueryForExtent(r,t.signal)})()}querySnapping(r,t={}){var e=this;return(0,a.Z)(function*(){return yield e._waitSnapshotComplete(),e._queryEngine.executeQueryForSnapping(r,t.signal)})()}refresh(r){var t=this;return(0,a.Z)(function*(){return t._customParameters=r,t._snapshotTask?.abort(),t._snapshotTask=(0,P.vr)(e=>t._snapshotFeatures(t._queryEngine,e)),t._snapshotTask.promise.then(e=>{t._queryEngine.featureStore.clear(),e&&t._queryEngine.featureStore.addMany(e)},e=>{t._queryEngine.featureStore.clear(),(0,d.D_)(e)||R.Z.getLogger("esri.layers.WFSLayer").error(new E.Z("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))}),yield t._waitSnapshotComplete(),{extent:(yield t._queryEngine.fetchRecomputedExtents()).fullExtent}})()}_waitSnapshotComplete(){var r=this;return(0,a.Z)(function*(){if(r._snapshotTask&&!r._snapshotTask.finished){try{yield r._snapshotTask.promise}catch{}return r._waitSnapshotComplete()}})()}_snapshotFeatures({objectIdField:r,geometryType:t,spatialReference:e,fieldsIndex:l},y){var s=this;return(0,a.Z)(function*(){const i=yield(0,F.Bm)(s._getFeatureUrl??"",s._featureType.typeName,s._getFeatureSpatialReference,s._getFeatureOutputFormat,{customParameters:s._customParameters,signal:y});(0,m.O3)(i,s._getFeatureSpatialReference.wkid),(0,d.k_)(y);const u=(0,m.lG)(i,{geometryType:t,hasZ:!1,objectIdField:r});if(!(0,M.fS)(e,s._getFeatureSpatialReference))for(const o of u)null!=o.geometry&&(o.geometry=(0,g.GH)((0,h.iV)((0,g.di)(o.geometry,t,!1,!1),s._getFeatureSpatialReference,e)));let p=1;for(const o of u){const _={};(0,C.O0)(l,_,o.attributes,!0),o.attributes=_,null==_[r]&&(o.objectId=_[r]=p++)}return u})()}}}}]);