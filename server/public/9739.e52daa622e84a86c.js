"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[9739,1e3],{43703:(ce,N,n)=>{function y(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function j(b){return[b[0],b[1],b[2],b[3],b[4],b[5],b[6],b[7],b[8],b[9],b[10],b[11],b[12],b[13],b[14],b[15]]}function v(b,L){return new Float64Array(b,L,16)}n.d(N,{I:()=>F,a:()=>y,b:()=>j,c:()=>v});const F=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:F,clone:j,create:y,createView:v,fromValues:function H(b,L,J,Q,P,u,g,d,O,T,Z,x,B,U,l,p){return[b,L,J,Q,P,u,g,d,O,T,Z,x,B,U,l,p]}},Symbol.toStringTag,{value:"Module"}))},79800:(ce,N,n)=>{n.d(N,{a:()=>F,b:()=>v,c:()=>j,d:()=>L,e:()=>q,n:()=>J,s:()=>b,t:()=>H});var y=n(96286);function j(u,g,d){H(u.typedBuffer,g.typedBuffer,d,u.typedBufferStride,g.typedBufferStride)}function H(u,g,d,O=3,T=O){if(u.length/O!==Math.ceil(g.length/T))return y.c.error("source and destination buffers need to have the same number of elements"),u;const Z=u.length/O,x=d[0],B=d[1],U=d[2],l=d[4],p=d[5],A=d[6],I=d[8],X=d[9],Y=d[10],k=d[12],W=d[13],ae=d[14];let ee=0,te=0;for(let oe=0;oe<Z;oe++){const pe=g[ee],ie=g[ee+1],ye=g[ee+2];u[te]=x*pe+l*ie+I*ye+k,u[te+1]=B*pe+p*ie+X*ye+W,u[te+2]=U*pe+A*ie+Y*ye+ae,ee+=T,te+=O}return u}function v(u,g,d){F(u.typedBuffer,g.typedBuffer,d,u.typedBufferStride,g.typedBufferStride)}function F(u,g,d,O=3,T=O){if(u.length/O!==Math.ceil(g.length/T))return void y.c.error("source and destination buffers need to have the same number of elements");const Z=u.length/O,x=d[0],B=d[1],U=d[2],l=d[3],p=d[4],A=d[5],I=d[6],X=d[7],Y=d[8];let k=0,W=0;for(let ae=0;ae<Z;ae++){const ee=g[k],te=g[k+1],oe=g[k+2];u[W]=x*ee+l*te+I*oe,u[W+1]=B*ee+p*te+X*oe,u[W+2]=U*ee+A*te+Y*oe,k+=T,W+=O}}function q(u,g,d){b(u.typedBuffer,g,d,u.typedBufferStride)}function b(u,g,d,O=3){const T=Math.min(u.length/O,g.count),Z=g.typedBuffer,x=g.typedBufferStride;let B=0,U=0;for(let l=0;l<T;l++)u[U]=d*Z[B],u[U+1]=d*Z[B+1],u[U+2]=d*Z[B+2],B+=x,U+=O}function L(u,g){J(u.typedBuffer,g.typedBuffer,u.typedBufferStride,g.typedBufferStride)}function J(u,g,d=3,O=d){const T=Math.min(u.length/d,g.length/O);let Z=0,x=0;for(let B=0;B<T;B++){const U=g[Z],l=g[Z+1],p=g[Z+2],A=U*U+l*l+p*p;if(A>0){const I=1/Math.sqrt(A);u[x]=I*U,u[x+1]=I*l,u[x+2]=I*p}Z+=O,x+=d}}Object.freeze(Object.defineProperty({__proto__:null,normalize:J,normalizeView:L,scale:b,scaleView:q,shiftRight:function Q(u,g,d){const O=Math.min(u.count,g.count),T=u.typedBuffer,Z=u.typedBufferStride,x=g.typedBuffer,B=g.typedBufferStride;let U=0,l=0;for(let p=0;p<O;p++)T[l]=x[U]>>d,T[l+1]=x[U+1]>>d,T[l+2]=x[U+2]>>d,U+=B,l+=Z},transformMat3:F,transformMat3View:v,transformMat4:H,transformMat4View:j},Symbol.toStringTag,{value:"Module"}))},80130:(ce,N,n)=>{n.d(N,{Z:()=>g});var y=n(17626),j=n(79608),H=n(86810),v=n(77712),L=(n(90912),n(85931),n(8314),n(55342)),J=n(76898),Q=n(28093),P=n(72642);let u=class extends((0,j.J)(H.wq)){constructor(d){super(d),this.type="georeferenced-relative",this.isRelative=!0,this.isGeoreferenced=!0,this.origin=(0,Q.c)()}getOriginPoint(d){const[O,T,Z]=this.origin;return new P.Z({x:O,y:T,z:Z,spatialReference:d})}setOriginFromPoint({x:d,y:O,z:T}){this.origin=(0,Q.f)(d,O,T??0)}};(0,y._)([(0,L.J)({georeferencedRelative:"georeferenced-relative"},{readOnly:!0})],u.prototype,"type",void 0),(0,y._)([(0,v.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],u.prototype,"origin",void 0),u=(0,y._)([(0,J.j)("esri.geometry.support.MeshGeoreferencedRelativeVertexSpace")],u);const g=u},96286:(ce,N,n)=>{n.d(N,{c:()=>j});const j=n(63290).Z.getLogger("esri.views.3d.support.buffer.math")},96603:(ce,N,n)=>{n.d(N,{CP:()=>q,JG:()=>d,LL:()=>b,NZ:()=>L,fV:()=>O,vj:()=>x,yT:()=>U,zE:()=>B});var y=n(15861),j=n(84792),H=n(85931),v=n(10699),F=n(35391);class q{constructor(p,A,I){this.assetName=p,this.assetMimeType=A,this.parts=I}equals(p){return this===p||this.assetName===p.assetName&&this.assetMimeType===p.assetMimeType&&(0,H.fS)(this.parts,p.parts,(A,I)=>A.equals(I))}isOnService(p){return this.parts.every(A=>A.isOnService(p))}makeHash(){let p="";for(const A of this.parts)p+=A.partHash;return p}toBlob(p){var A=this;return(0,y.Z)(function*(){const{parts:I}=A;if(1===I.length)return I[0].toBlob(p);const X=yield Promise.all(I.map(Y=>Y.toBlob(p)));return(0,v.k_)(p),new Blob(X)})()}}class b{constructor(p,A){this.partUrl=p,this.partHash=A}equals(p){return this===p||this.partUrl===p.partUrl&&this.partHash===p.partHash}isOnService(p){return this.partUrl.startsWith(`${p.path}/assets/`)}toBlob(p){var A=this;return(0,y.Z)(function*(){const{data:I}=yield(0,j.Z)(A.partUrl,{responseType:"blob"});return(0,v.k_)(p),I})()}}function L(l){return function u(l){return!!l&&(Array.isArray(l)?l.some(g):g(l))}(l?.source)}function J(l){return!!Array.isArray(l)&&l.every(p=>p instanceof q)}const Q=/^(model\/gltf\+json)|(model\/gltf-binary)$/,P=/\.(gltf|glb)/i;function g(l){if(l instanceof File){const{type:p,name:A}=l;return Q.test(p)||P.test(A)}return Q.test(l.assetMimeType)||P.test(l.assetName)}function d(l,p){if(!l)return!1;const{source:A}=l;return function T(l,p){return Array.isArray(l)?l.length>0&&l.every(I=>Z(I,p)):Z(l,p)}(A,p)}function O(l,p){if(l===p)return!0;const{source:A}=l,{source:I}=p;if(A===I)return!0;if(J(A)&&J(I)){if(A.length!==I.length)return!1;const X=(W,ae)=>W.assetName<ae.assetName?-1:W.assetName>ae.assetName?1:0,Y=[...A].sort(X),k=[...I].sort(X);for(let W=0;W<Y.length;++W)if(!Y[W].equals(k[W]))return!1;return!0}return!1}function Z(l,p){return l instanceof q&&l.isOnService(p)}function x(l,p){return l instanceof File?(0,F.dm)(l,p):(0,F.S0)(l.assetMimeType,p)??(0,F.Ow)(l.assetName,p)}function B(l){return Array.isArray(l)?l:[l]}function U(l){return!!l.original}},87757:(ce,N,n)=>{n.d(N,{g:()=>y});const y={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},81913:(ce,N,n)=>{n.r(N),n.d(N,{applyEdits:()=>U,checkEditingCapabilities:()=>Ae,isFeatureIdentifierArrayWithGlobalId:()=>B,isFeatureIdentifierArrayWithObjectId:()=>Z,isFeatureIdentifierWithGlobalId:()=>x,isFeatureIdentifierWithObjectId:()=>T,normalizeCollections:()=>ye,normalizeEdits:()=>ve,normalizeGeometries:()=>pe,shallowCloneFeature:()=>fe,uploadAssets:()=>Ee});var y=n(15861),j=n(88879),H=n(74333),v=n(26584),F=n(58817),q=n(63290),b=n(10699),L=n(21726),J=n(35948),Q=n(93555),P=n(6733),u=n(90194),g=n(35391),d=n(72469);function O(s){return null!=s?.applyEdits}function T(s){return"object"==typeof s&&null!=s&&"objectId"in s&&!!s.objectId}function Z(s){return s.every(T)}function x(s){return"object"==typeof s&&null!=s&&"globalId"in s&&!!s.globalId}function B(s){return s.every(x)}function U(s,o,f){return l.apply(this,arguments)}function l(){return l=(0,y.Z)(function*(s,o,f,h={}){let _;const he=h.gdbVersion??("gdbVersion"in s?s.gdbVersion:null);(0,P.lQ)(s)&&s.url?_=(0,P.jF)(s.url,s.layerId,he,"original-and-current-features"===h.returnServiceEditsOption):(_=(0,b.hh)(),_.promise.then(C=>{(C.addedFeatures.length||C.updatedFeatures.length||C.deletedFeatures.length||C.addedAttachments.length||C.updatedAttachments.length||C.deletedAttachments.length)&&s.emit("edits",C)}),s.emit("apply-edits",{result:_.promise}));try{const{results:R,edits:C}=yield function p(s,o,f,h){return A.apply(this,arguments)}(s,o,f,h),re=w=>w.filter(be=>!be.error).map(F.d9),ue={edits:C,addedFeatures:re(R.addFeatureResults),updatedFeatures:re(R.updateFeatureResults),deletedFeatures:re(R.deleteFeatureResults),addedAttachments:re(R.addAttachmentResults),updatedAttachments:re(R.updateAttachmentResults),deletedAttachments:re(R.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:R.editMoment?new Date(R.editMoment):null,globalIdToObjectId:h.globalIdToObjectId};return R.editedFeatureResults?.length&&(ue.editedFeatures=R.editedFeatureResults),_.resolve(ue),R}catch(R){throw _.reject(R),R}}),l.apply(this,arguments)}function A(){return A=(0,y.Z)(function*(s,o,f,h){if(yield s.load(),!O(o))throw new v.Z(`${s.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:s});if(!(0,d.ln)(s))throw new v.Z(`${s.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:s});const{edits:_,options:M}=yield function I(s,o,f){return X.apply(this,arguments)}(s,f,h);return _.addFeatures?.length||_.updateFeatures?.length||_.deleteFeatures?.length||_.addAttachments?.length||_.updateAttachments?.length||_.deleteAttachments?.length?{edits:_,results:yield o.applyEdits(_,M)}:{edits:_,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}),A.apply(this,arguments)}function X(){return X=(0,y.Z)(function*(s,o,f){const h=(0,d.S1)(s),he=null!=s.infoFor3D;if(Ae(o,h,f,!(!o||!(o.addFeatures||o.updateFeatures||o.deleteFeatures)),!(!o||!(o.addAttachments||o.updateAttachments||o.deleteAttachments)),`${s.type}-layer`),!h.data.isVersioned&&f?.gdbVersion)throw new v.Z(`${s.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!h.editing.supportsRollbackOnFailure&&f?.rollbackOnFailureEnabled)throw new v.Z(`${s.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const R={...f};if(null!=R.rollbackOnFailureEnabled||h.editing.supportsRollbackOnFailure||(R.rollbackOnFailureEnabled=!0),R.rollbackOnFailureEnabled||"original-and-current-features"!==R.returnServiceEditsOption||(!1===R.rollbackOnFailureEnabled&&q.Z.getLogger("esri.layers.graphics.editingSupport").warn(`${s.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwrritten and set to true."),R.rollbackOnFailureEnabled=!0),!h.editing.supportsReturnServiceEditsInSourceSpatialReference&&R.returnServiceEditsInSourceSR)throw new v.Z(`${s.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(R.returnServiceEditsInSourceSR&&"original-and-current-features"!==R.returnServiceEditsOption)throw new v.Z(`${s.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const C=ve(o,h,`${s.type}-layer`),re=f?.globalIdUsed||he,ue=s.fields.filter(w=>"big-integer"===w.type||"oid"===w.type&&(w.length||0)>=8);if(re){const{globalIdField:w}=s;if(null==w)throw new v.Z(`${s.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");C.addFeatures.forEach(be=>function oe(s,o){const{attributes:f}=s;null==f[o]&&(f[o]=(0,J.zS)())}(be,w))}return C.addFeatures.forEach(w=>function W(s,o,f,h){Y(s,o,f,h),k(s,o)}(w,s,re,ue)),C.updateFeatures.forEach(w=>function ee(s,o,f,h){Y(s,o,f,h),k(s,o);const _=(0,d.S1)(o);if("geometry"in s&&null!=s.geometry&&!_?.editing.supportsGeometryUpdate)throw new v.Z(`${o.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}(w,s,re,ue)),C.deleteFeatures.forEach(w=>function ae(s,o,f,h){Y(s,o,f,h)}(w,s,re,ue)),C.addAttachments.forEach(w=>te(w,s)),C.updateAttachments.forEach(w=>te(w,s)),he&&(yield function Fe(s,o){return Oe.apply(this,arguments)}(C,s)),{edits:yield pe(C),options:R}}),X.apply(this,arguments)}function Y(s,o,f,h){if(f){if("attributes"in s&&!s.attributes[o.globalIdField])throw new v.Z(`${o.type}-layer:invalid-parameter`,`Feature should have '${o.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in s)&&!s.globalId)throw new v.Z(`${o.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(h.length&&"attributes"in s)for(const _ of h){const M=s.attributes[_.name];if(void 0!==M&&!(0,u.d2)(_,M))throw new v.Z(`${o.type}-layer:invalid-parameter`,`Big-integer field '${_.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:s})}if("geometry"in s&&null!=s.geometry){if(s.geometry.hasZ&&!1===o.capabilities?.data.supportsZ)throw new v.Z(`${o.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(s.geometry.hasM&&!1===o.capabilities?.data.supportsM)throw new v.Z(`${o.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function k(s,o){if("geometry"in s&&"mesh"===s.geometry?.type&&null!=o.infoFor3D){const{geometry:f}=s;if(f.vertexSpace.isGeoreferenced)throw new v.Z(`${o.type}-layer:georeferenced-mesh-unsupported`,"Uploading georeferenced meshes to a layer is not supported.")}}function te(s,o){const{feature:f,attachment:h}=s;if(!f||"attributes"in f&&!f.attributes[o.globalIdField])throw new v.Z(`${o.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in f)&&!f.globalId)throw new v.Z(`${o.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!h.globalId)throw new v.Z(`${o.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!h.data&&!h.uploadId)throw new v.Z(`${o.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(h.data instanceof File&&h.data.name||h.name))throw new v.Z(`${o.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!o.capabilities?.editing.supportsUploadWithItemId&&h.uploadId)throw new v.Z(`${o.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof h.data){const _=(0,L.sJ)(h.data);if(_&&!_.isBase64)throw new v.Z(`${o.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function pe(s){return ie.apply(this,arguments)}function ie(){return(ie=(0,y.Z)(function*(s){const o=s.addFeatures??[],f=s.updateFeatures??[],h=o.concat(f).map(R=>R.geometry),_=yield(0,Q.aX)(h),M=o.length,he=f.length;return _.slice(0,M).forEach((R,C)=>o[C].geometry=R),_.slice(M,M+he).forEach((R,C)=>f[C].geometry=R),s})).apply(this,arguments)}function ye(s){return{addFeatures:Array.from(s?.addFeatures??[]),updateFeatures:Array.from(s?.updateFeatures??[]),deleteFeatures:s&&H.Z.isCollection(s.deleteFeatures)?s.deleteFeatures.toArray():s.deleteFeatures||[],addAttachments:s.addAttachments||[],updateAttachments:s.updateAttachments||[],deleteAttachments:s.deleteAttachments||[]}}function ve(s,o,f){const h=ye(s);if(h.addFeatures?.length&&!o.operations.supportsAdd)throw new v.Z(`${f}:unsupported-operation`,"Layer does not support adding features.");if(h.updateFeatures?.length&&!o.operations.supportsUpdate)throw new v.Z(`${f}:unsupported-operation`,"Layer does not support updating features.");if(h.deleteFeatures?.length&&!o.operations.supportsDelete)throw new v.Z(`${f}:unsupported-operation`,"Layer does not support deleting features.");return h.addFeatures=h.addFeatures.map(fe),h.updateFeatures=h.updateFeatures.map(fe),h.addAssetFeatures=[],h}function Ae(s,o,f,h,_,M){if(!s||!h&&!_)throw new v.Z(`${M}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!o.editing.supportsGlobalId&&f?.globalIdUsed)throw new v.Z(`${M}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!o.editing.supportsGlobalId&&_)throw new v.Z(`${M}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!f?.globalIdUsed&&_)throw new v.Z(`${M}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}function fe(s){const o=new j.Z;return s.attributes||(s.attributes={}),o.geometry=s.geometry,o.attributes=s.attributes,o}function Oe(){return(Oe=(0,y.Z)(function*(s,o){if(null==o.infoFor3D)return;const{infoFor3D:f}=o,h=(0,g.S0)("model/gltf-binary",f.supportedFormats)??(0,g.Ow)("glb",f.supportedFormats);if(!h||!f.editFormats.includes(h))throw new v.Z(`${o.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");s.addAssetFeatures??=[];const{addAssetFeatures:_}=s;for(const M of s.addFeatures??[])ne(M)&&_.push(M);for(const M of s.updateFeatures??[])ne(M)&&_.push(M)})).apply(this,arguments)}function ne(s){return"mesh"===s?.geometry?.type}function Ee(s,o,f,h){if(!O(o))throw new v.Z(`${s.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:s});if(!o.uploadAssets)throw new v.Z(`${s.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:s});return o.uploadAssets(f,h)}},79739:(ce,N,n)=>{n.r(N),n.d(N,{default:()=>Te});var y=n(15861),j=n(17626),v=(n(29132),n(24263)),F=n(84792),q=n(97478),b=n(85931),L=n(26584),J=n(8314),Q=n(2076),P=n(47996),u=n(63290),g=n(94113),d=n(10699),O=n(21726),T=n(35948),Z=n(77712),B=(n(90912),n(76898)),U=n(2004),l=n(28347),p=n(43703),A=n(80130),I=n(79800);function X(t){const{vertexSpace:r}=t;if(r.isRelative)return t.clone();const{anchor:e}=t,a=e.clone(),i=(0,l.d)(Y,[-a.x,-a.y,-a.z]),c=new A.Z({origin:[a.x,a.y,a.z]}),m=t.cloneWithVertexSpace(c),{position:E}=m.vertexAttributes;return m.vertexAttributes.position=(0,I.t)(new Float64Array(E.length),E,i),m.vertexAttributesChanged(),m}const Y=(0,p.a)();var k=n(96603),W=n(88879),ae=n(16730),ee=n(5464),te=n(91179),oe=n(81913);function pe(t,r,e){return ie.apply(this,arguments)}function ie(){return(ie=(0,y.Z)(function*(t,r,e){const{geometry:a}=r,i={...r.attributes};if(null!=e&&"mesh"===a?.type){const{transformFieldRoles:c}=e,{origin:m,spatialReference:E,transform:D}=a,S=t.spatialReference;yield(0,ee.initializeProjection)(E,S);const G=(0,ee.project)(m,S);if(i[c.originX]=G.x,i[c.originY]=G.y,i[c.originZ]=G.z??0,null!=D){const{translation:K,scale:V,rotation:se}=D,{vertexSpace:me}=a,le=me.isGeoreferenced?1:(0,ae.r6)(E)/(0,ae.r6)(S);i[c.translationX]=K[0]*le,i[c.translationY]=K[2]*le,i[c.translationZ]=-K[1]*le,i[c.scaleX]=V[0],i[c.scaleY]=V[2],i[c.scaleZ]=V[1],i[c.rotationX]=se[0],i[c.rotationY]=se[2],i[c.rotationZ]=-se[1],i[c.rotationDeg]=se[3]}return{attributes:i}}return null==a?{attributes:i}:"mesh"===a.type||"extent"===a.type?null:{geometry:a.toJSON(),attributes:i}})).apply(this,arguments)}function ve(){return(ve=(0,y.Z)(function*(t,r){const e=yield Promise.all((r.addAttachments??[]).map(c=>Ae(t,c))),a=yield Promise.all((r.updateAttachments??[]).map(c=>Ae(t,c))),i=r.deleteAttachments??[];return e.length||a.length||i.length?{adds:e,updates:a,deletes:[...i]}:null})).apply(this,arguments)}function Ae(t,r){return fe.apply(this,arguments)}function fe(){return(fe=(0,y.Z)(function*(t,r){const{feature:e,attachment:a}=r,{globalId:i,name:c,contentType:m,data:E,uploadId:D}=a,S={globalId:i};if(e&&("attributes"in e?S.parentGlobalId=e.attributes?.[t.globalIdField]:e.globalId&&(S.parentGlobalId=e.globalId)),D)S.uploadId=D;else if(E){const G=yield(0,O.IR)(E);G&&(S.contentType=G.mediaType,S.data=G.data),E instanceof File&&(S.name=E.name)}return c&&(S.name=c),m&&(S.contentType=m),S})).apply(this,arguments)}function ne(t){const r=!0===t.success?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:r?new L.Z("feature-layer-source:edit-failure",r.description,{code:r.code}):null}}function Ee(t,r){return new W.Z({attributes:t.attributes,geometry:(0,te.im)({...t.geometry,spatialReference:r})})}function s(t,r){return{adds:t?.adds?.map(e=>Ee(e,r))||[],updates:t?.updates?.map(e=>({original:Ee(e[0],r),current:Ee(e[1],r)}))||[],deletes:t?.deletes?.map(e=>Ee(e,r))||[],spatialReference:r}}var f=n(56554),h=n(4802),_=n(38305),M=n(56347),he=n(35391),R=n(2865),C=n(20514),re=n(96854),ue=n(67385),w=n(65234);const be=new Q.X({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),Me=new Set(["Feature Layer","Oriented Imagery Layer","Table"]),Ze=new Q.X({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let _e=class extends P.Z{constructor(){var t;super(...arguments),t=this,this.type="feature-layer",this.refresh=(0,d.Ds)((0,y.Z)(function*(){yield t.load();const r=t.sourceJSON.editingInfo?.lastEditDate;if(null==r)return{dataChanged:!0,updates:{}};try{yield t._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const e=r!==t.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:e,updates:e?{editingInfo:t.sourceJSON.editingInfo,extent:t.sourceJSON.extent}:null}})),this._ongoingAssetUploads=new Map}load(t){const e=this._fetchService(this.layer.sourceJSON,{...t}).then(()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,t)).then(()=>this._ensureLatestMetadata(t));return this.addResolvingPromise(e),Promise.resolve(this)}get queryTask(){const{capabilities:t,parsedUrl:r,dynamicDataSource:e,infoFor3D:a,gdbVersion:i,spatialReference:c,fieldsIndex:m}=this.layer,E=(0,J.Z)("featurelayer-pbf")&&t?.query.supportsFormatPBF&&null==a;return new h.Z({url:r.path,pbfSupported:E,fieldsIndex:m,infoFor3D:a,dynamicDataSource:e,gdbVersion:i,sourceSpatialReference:c,queryAttachmentsSupported:t?.operations?.supportsQueryAttachments??!1})}addAttachment(t,r){var e=this;return(0,y.Z)(function*(){yield e.load();const{layer:a}=e;yield(0,M.nU)(a,"editing");const i=t.attributes[a.objectIdField],c=a.parsedUrl.path+"/"+i+"/addAttachment",m=e._getLayerRequestOptions(),E=e._getFormDataForAttachment(r,m.query);try{return ne((yield(0,F.Z)(c,{body:E})).data.addAttachmentResult)}catch(D){throw e._createAttachmentErrorResult(i,D)}})()}updateAttachment(t,r,e){var a=this;return(0,y.Z)(function*(){yield a.load();const{layer:i}=a;yield(0,M.nU)(i,"editing");const c=t.attributes[i.objectIdField],m=i.parsedUrl.path+"/"+c+"/updateAttachment",E=a._getLayerRequestOptions({query:{attachmentId:r}}),D=a._getFormDataForAttachment(e,E.query);try{return ne((yield(0,F.Z)(m,{body:D})).data.updateAttachmentResult)}catch(S){throw a._createAttachmentErrorResult(c,S)}})()}applyEdits(t,r){var e=this;return(0,y.Z)(function*(){yield e.load();const{layer:a}=e;yield(0,M.nU)(a,"editing");const i=a.infoFor3D,c=null!=i,m=c||(r?.globalIdUsed??!1),E=c?yield e._uploadMeshesAndGetAssetMapEditsJSON(t):null,D=t.addFeatures?.map(z=>pe(e.layer,z,i))??[],S=(yield Promise.all(D)).filter(b.pC),G=t.updateFeatures?.map(z=>pe(e.layer,z,i))??[],K=(yield Promise.all(G)).filter(b.pC),V=function Fe(t,r,e){if(!r||0===r.length)return[];if(e&&(0,oe.isFeatureIdentifierArrayWithGlobalId)(r))return r.map(i=>i.globalId);if((0,oe.isFeatureIdentifierArrayWithObjectId)(r))return r.map(i=>i.objectId);const a=e?t.globalIdField:t.objectIdField;return a?r.map(i=>i.getAttribute(a)):[]}(e.layer,t.deleteFeatures,m);(0,C.P)(S,K,a.spatialReference);const se=yield function ye(t,r){return ve.apply(this,arguments)}(e.layer,t),me=a.capabilities.editing.supportsAsyncApplyEdits&&c,le=r?.gdbVersion||a.gdbVersion,$={gdbVersion:le,rollbackOnFailure:r?.rollbackOnFailureEnabled,useGlobalIds:m,returnEditMoment:r?.returnEditMoment,usePreviousEditMoment:r?.usePreviousEditMoment,async:me};yield(0,ue.Px)(e.layer.url,le,!0);const Se=(0,ue.JV)(e.layer.url,le||null);r?.returnServiceEditsOption?($.edits=JSON.stringify([{id:a.layerId,adds:S,updates:K,deletes:V,attachments:se,assetMaps:E}]),$.returnServiceEditsOption=be.toJSON(r?.returnServiceEditsOption),$.returnServiceEditsInSourceSR=r?.returnServiceEditsInSourceSR):($.adds=S.length?JSON.stringify(S):null,$.updates=K.length?JSON.stringify(K):null,$.deletes=V.length?m?JSON.stringify(V):V.join(","):null,$.attachments=se&&JSON.stringify(se),$.assetMaps=null!=E?JSON.stringify(E):void 0);const de=e._getLayerRequestOptions({method:"post",query:$});Se&&(de.authMode="immediate",de.query.returnEditMoment=!0,de.query.sessionId=ue.U8);const ge=r?.returnServiceEditsOption?a.url:a.parsedUrl.path;let Re;try{Re=me?yield e._asyncApplyEdits(ge+"/applyEdits",de):yield(0,F.Z)(ge+"/applyEdits",de)}catch(z){if(!function o(t){const r=t.details.raw,a=+r.extendedCode;return 500==+r.code&&(-2147217144===a||-2147467261===a)}(z))throw z;de.authMode="immediate",Re=me?yield e._asyncApplyEdits(ge+"/applyEdits",de):yield(0,F.Z)(ge+"/applyEdits",de)}return!a.capabilities.operations?.supportsEditing&&a.effectiveCapabilities?.operations?.supportsEditing&&(yield v.id?.findCredential(a.url)?.refreshToken()),e._createEditsResult(Re)})()}deleteAttachments(t,r){var e=this;return(0,y.Z)(function*(){yield e.load();const{layer:a}=e;yield(0,M.nU)(a,"editing");const i=t.attributes[a.objectIdField],c=a.parsedUrl.path+"/"+i+"/deleteAttachments";try{return(yield(0,F.Z)(c,e._getLayerRequestOptions({query:{attachmentIds:r.join(",")},method:"post"}))).data.deleteAttachmentResults.map(ne)}catch(m){throw e._createAttachmentErrorResult(i,m)}})()}fetchRecomputedExtents(t={}){var r=this;return this.load({signal:t.signal}).then((0,y.Z)(function*(){const a=r._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:i,url:c}=r.layer,{data:m}=yield(0,F.Z)(`${c}/${i}`,a),{id:E,extent:D,fullExtent:S,timeExtent:G}=m,K=D||S;return{id:E,fullExtent:K&&U.Z.fromJSON(K),timeExtent:G&&q.Z.fromJSON({start:G[0],end:G[1]})}}))}queryAttachments(t,r={}){var e=this;return(0,y.Z)(function*(){yield e.load();const a=e._getLayerRequestOptions(r);return e.queryTask.executeAttachmentQuery(t,a)})()}queryFeatures(t,r){var e=this;return(0,y.Z)(function*(){yield e.load();const a=yield e.queryTask.execute(t,{...r,query:e._createRequestQueryOptions(r)});return t.outStatistics?.length&&a.features.length&&a.features.forEach(i=>{const c=i.attributes;t.outStatistics?.forEach(({outStatisticFieldName:m})=>{if(m){const E=m.toLowerCase();E&&E in c&&m!==E&&(c[m]=c[E],delete c[E])}})}),a})()}queryFeaturesJSON(t,r){var e=this;return(0,y.Z)(function*(){return yield e.load(),e.queryTask.executeJSON(t,{...r,query:e._createRequestQueryOptions(r)})})()}queryObjectIds(t,r){var e=this;return(0,y.Z)(function*(){return yield e.load(),e.queryTask.executeForIds(t,{...r,query:e._createRequestQueryOptions(r)})})()}queryFeatureCount(t,r){var e=this;return(0,y.Z)(function*(){return yield e.load(),e.queryTask.executeForCount(t,{...r,query:e._createRequestQueryOptions(r)})})()}queryExtent(t,r){var e=this;return(0,y.Z)(function*(){return yield e.load(),e.queryTask.executeForExtent(t,{...r,query:e._createRequestQueryOptions(r)})})()}queryRelatedFeatures(t,r){var e=this;return(0,y.Z)(function*(){return yield e.load(),e.queryTask.executeRelationshipQuery(t,{...r,query:e._createRequestQueryOptions(r)})})()}queryRelatedFeaturesCount(t,r){var e=this;return(0,y.Z)(function*(){return yield e.load(),e.queryTask.executeRelationshipQueryForCount(t,{...r,query:e._createRequestQueryOptions(r)})})()}queryTopFeatures(t,r){var e=this;return(0,y.Z)(function*(){return yield e.load(),e.queryTask.executeTopFeaturesQuery(t,{...r,query:e._createRequestQueryOptions(r)})})()}queryTopObjectIds(t,r){var e=this;return(0,y.Z)(function*(){return yield e.load(),e.queryTask.executeForTopIds(t,{...r,query:e._createRequestQueryOptions(r)})})()}queryTopExtents(t,r){var e=this;return(0,y.Z)(function*(){return yield e.load(),e.queryTask.executeForTopExtents(t,{...r,query:e._createRequestQueryOptions(r)})})()}queryTopCount(t,r){var e=this;return(0,y.Z)(function*(){return yield e.load(),e.queryTask.executeForTopCount(t,{...r,query:e._createRequestQueryOptions(r)})})()}fetchPublishingStatus(){var t=this;return(0,y.Z)(function*(){if(!(0,_.M8)(t.layer.url))return"unavailable";const r=(0,O.v_)(t.layer.url,"status"),e=yield(0,F.Z)(r,{query:{f:"json"}});return Ze.fromJSON(e.data.status)})()}uploadAssets(t,r){var e=this;return(0,y.Z)(function*(){const{uploadAssets:a}=yield n.e(4159).then(n.bind(n,64159));return a(t,{layer:e.layer,ongoingUploads:e._ongoingAssetUploads},r)})()}_asyncApplyEdits(t,r){return(0,y.Z)(function*(){const e=(yield(0,F.Z)(t,r)).data.statusUrl;for(;;){const a=(yield(0,F.Z)(e,{query:{f:"json"},responseType:"json"})).data;switch(a.status){case"Completed":return(0,F.Z)(a.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new L.Z("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new L.Z("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}yield(0,d.e4)(De)}})()}_createRequestQueryOptions(t){const r={...this.layer.customParameters,token:this.layer.apiKey,...t?.query};return this.layer.datesInUnknownTimezone&&(r.timeReferenceUnknownClient=!0),r}_fetchService(t,r){var e=this;return(0,y.Z)(function*(){if(!t){const i={};(0,J.Z)("featurelayer-advanced-symbols")&&(i.returnAdvancedSymbols=!0),r?.cacheBust&&(i._ts=Date.now());const{data:c}=yield(0,F.Z)(e.layer.parsedUrl.path,e._getLayerRequestOptions({query:i,signal:r?.signal}));t=c}e.sourceJSON=yield e._patchServiceJSON(t,r?.signal);const a=t.type;if(!Me.has(a))throw new L.Z("feature-layer-source:unsupported-type",`Source type "${a}" is not supported`)})()}_patchServiceJSON(t,r){var e=this;return(0,y.Z)(function*(){if("Table"!==t.type&&t.geometryType&&!t?.drawingInfo?.renderer&&!t.defaultSymbol){const a=(0,f.bU)(t.geometryType).renderer;(0,g.RB)("drawingInfo.renderer",a,t)}if("esriGeometryMultiPatch"===t.geometryType&&t.infoFor3D&&(t.geometryType="mesh"),null==t.extent)try{const{data:a}=yield(0,F.Z)(e.layer.url,e._getLayerRequestOptions({signal:r}));a.spatialReference&&(t.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:a.spatialReference})}catch(a){(0,d.r9)(a)}return t})()}_ensureLatestMetadata(t){var r=this;return(0,y.Z)(function*(){if(r.layer.userHasUpdateItemPrivileges&&r.sourceJSON.cacheMaxAge>0)return r._fetchService(null,{...t,cacheBust:!0})})()}_uploadMeshesAndGetAssetMapEditsJSON(t){var r=this;return(0,y.Z)(function*(){const{addAssetFeatures:e}=t;if(!e?.length)return null;const a=yield r._filterRedundantAssetMaps(e);if(!e?.length)return null;const i=new Array,c=new Map;for(const m of a){const{geometry:E}=m,{vertexSpace:D}=E;if(D.isRelative)i.push(E);else{const S=X(E);c.set(S,E),m.geometry=S,i.push(S)}}yield r.uploadAssets(i);for(const[m,E]of c)E.addExternalSources(m.metadata.externalSources.items);return{adds:r._getAssetMapEditsJSON(a),updates:[],deletes:[]}})()}_getAssetMapEditsJSON(t){const r=new Array,e=this.layer.globalIdField,a=this.layer.parsedUrl;for(const i of t){const c=i.geometry,{metadata:m}=c,E=m.getExternalSourcesOnService(a),D=i.getAttribute(e);if(0===E.length){u.Z.getLogger(this).error(`Skipping feature ${D}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:S}=E.find(k.yT)??E[0],{vertexSpace:G}=c,K=G.isGeoreferenced?["PROJECT_VERTICES"]:[];for(const V of S)1===V.parts.length?r.push({globalId:(0,T.zS)(),parentGlobalId:D,assetName:V.assetName,assetHash:V.parts[0].partHash,flags:K}):u.Z.getLogger(this).error(`Skipping asset ${V.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return r}_createEditsResult(t){const r=t.data,{layerId:e}=this.layer,a=[];let i=null;if(Array.isArray(r))for(const m of r)a.push({id:m.id,editedFeatures:m.editedFeatures}),m.id===e&&(i={addResults:m.addResults??[],updateResults:m.updateResults??[],deleteResults:m.deleteResults??[],attachments:m.attachments,editMoment:m.editMoment});else i=r;const c=function Oe(t){const r=t?.assetMaps;if(r){for(const i of r.addResults)i.success||u.Z.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${i.globalId}.`);for(const i of r.updateResults)i.success||u.Z.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${i.globalId}.`)}const e=t?.attachments,a={addFeatureResults:t?.addResults?.map(ne)??[],updateFeatureResults:t?.updateResults?.map(ne)??[],deleteFeatureResults:t?.deleteResults?.map(ne)??[],addAttachmentResults:e?.addResults?e.addResults.map(ne):[],updateAttachmentResults:e?.updateResults?e.updateResults.map(ne):[],deleteAttachmentResults:e?.deleteResults?e.deleteResults.map(ne):[]};return t?.editMoment&&(a.editMoment=t.editMoment),a}(i);if(a.length>0){c.editedFeatureResults=[];for(const m of a){const{editedFeatures:E}=m,D=E?.spatialReference?new w.Z(E.spatialReference):null;c.editedFeatureResults.push({layerId:m.id,editedFeatures:s(E,D)})}}return c}_createAttachmentErrorResult(t,r){return{objectId:t,globalId:null,error:new L.Z("feature-layer-source:attachment-failure",r.details.messages?.[0]||r.message,{code:r.details.httpStatus||r.details.messageCode})}}_getFormDataForAttachment(t,r){const e=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(e)for(const a in r){const i=r[a];null!=i&&(e.set?e.set(a,i):e.append(a,i))}return e}_getLayerRequestOptions(t={}){const{parsedUrl:r,gdbVersion:e,dynamicDataSource:a}=this.layer;return{...t,query:{gdbVersion:e,layer:a?JSON.stringify({source:a}):void 0,...r.query,f:"json",...this._createRequestQueryOptions(t)},responseType:"json"}}_filterRedundantAssetMaps(t){var r=this;return(0,y.Z)(function*(){const{layer:e}=r,{globalIdField:a,infoFor3D:i,parsedUrl:c}=e;if(null==i||null==a)return t;const m=(0,he.$6)(i);if(null==m)return t;const E=(0,O.v_)(c.path,`../${m.id}`),D=new Array,S=new Array;for(const $ of t)$.geometry.metadata.getExternalSourcesOnService(c).length>0?S.push($):D.push($);const G=S.map($=>$.getAttribute(a)).filter(b.pC);if(0===G.length)return t;const{assetMapFieldRoles:{parentGlobalId:K,assetHash:V}}=i,se=new re.Z;se.where=`${K} IN (${G.map($=>`'${$}'`)})`,se.outFields=[V,K],se.returnGeometry=!1;const me=yield(0,R.e)(E,se),{features:le}=me;return 0===le.length?t:[...D,...S.filter($=>{const Se=$.getAttribute(a);if(!Se)return!0;const{metadata:de}=$.geometry,ge=le.filter(z=>z.getAttribute(K)===Se);if(0===ge.length)return!0;const Re=ge.map(z=>z.getAttribute(V));return de.getExternalSourcesOnService(c).flatMap(({source:z})=>z.flatMap(Ie=>Ie.parts.map(Pe=>Pe.partHash))).some(z=>Re.every(Ie=>z!==Ie))})]})()}};(0,j._)([(0,Z.Cb)()],_e.prototype,"type",void 0),(0,j._)([(0,Z.Cb)({constructOnly:!0})],_e.prototype,"layer",void 0),(0,j._)([(0,Z.Cb)({readOnly:!0})],_e.prototype,"queryTask",null),_e=(0,j._)([(0,B.j)("esri.layers.graphics.sources.FeatureLayerSource")],_e);const De=1e3,Te=_e},56554:(ce,N,n)=>{n.d(N,{Dm:()=>L,Hq:()=>J,MS:()=>Q,bU:()=>F});var y=n(8314),j=n(58817),H=n(87757),v=n(24837);function F(P){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===P||"esriGeometryMultipoint"===P?v.I4:"esriGeometryPolyline"===P?v.ET:v.lF}}}const q=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let b=1;function L(P,u){if((0,y.Z)("esri-csp-restrictions"))return()=>({[u]:null,...P});try{let g=`this.${u} = null;`;for(const O in P)g+=`this${q.test(O)?`.${O}`:`["${O}"]`} = ${JSON.stringify(P[O])};`;const d=new Function(`\n      return class AttributesClass$${b++} {\n        constructor() {\n          ${g};\n        }\n      }\n    `)();return()=>new d}catch{return()=>({[u]:null,...P})}}function J(P={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,j.d9)(P)}}]}function Q(P,u){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:P},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:u,supportsDelete:u,supportsEditing:u,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:u,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:H.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:u,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);