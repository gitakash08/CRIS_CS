"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[468],{50011:(M,P,y)=>{y.d(P,{F:()=>N,M:()=>j});const j={Base64:0,Hex:1,String:2,Raw:3},d=8,T=(1<<d)-1;function O(r,f){const t=(65535&r)+(65535&f);return(r>>16)+(f>>16)+(t>>16)<<16|65535&t}function Z(r,f,t,n,o,s){return O(function H(r,f){return r<<f|r>>>32-f}(O(O(f,r),O(n,s)),o),t)}function b(r,f,t,n,o,s,i){return Z(f&t|~f&n,r,f,o,s,i)}function v(r,f,t,n,o,s,i){return Z(f&n|t&~n,r,f,o,s,i)}function p(r,f,t,n,o,s,i){return Z(f^t^n,r,f,o,s,i)}function m(r,f,t,n,o,s,i){return Z(t^(f|~n),r,f,o,s,i)}function N(r,f=j.Hex){const t=f||j.Base64,n=function U(r,f){r[f>>5]|=128<<f%32,r[14+(f+64>>>9<<4)]=f;let t=1732584193,n=-271733879,o=-1732584194,s=271733878;for(let i=0;i<r.length;i+=16){const R=t,l=n,a=o,c=s;t=b(t,n,o,s,r[i],7,-680876936),s=b(s,t,n,o,r[i+1],12,-389564586),o=b(o,s,t,n,r[i+2],17,606105819),n=b(n,o,s,t,r[i+3],22,-1044525330),t=b(t,n,o,s,r[i+4],7,-176418897),s=b(s,t,n,o,r[i+5],12,1200080426),o=b(o,s,t,n,r[i+6],17,-1473231341),n=b(n,o,s,t,r[i+7],22,-45705983),t=b(t,n,o,s,r[i+8],7,1770035416),s=b(s,t,n,o,r[i+9],12,-1958414417),o=b(o,s,t,n,r[i+10],17,-42063),n=b(n,o,s,t,r[i+11],22,-1990404162),t=b(t,n,o,s,r[i+12],7,1804603682),s=b(s,t,n,o,r[i+13],12,-40341101),o=b(o,s,t,n,r[i+14],17,-1502002290),n=b(n,o,s,t,r[i+15],22,1236535329),t=v(t,n,o,s,r[i+1],5,-165796510),s=v(s,t,n,o,r[i+6],9,-1069501632),o=v(o,s,t,n,r[i+11],14,643717713),n=v(n,o,s,t,r[i],20,-373897302),t=v(t,n,o,s,r[i+5],5,-701558691),s=v(s,t,n,o,r[i+10],9,38016083),o=v(o,s,t,n,r[i+15],14,-660478335),n=v(n,o,s,t,r[i+4],20,-405537848),t=v(t,n,o,s,r[i+9],5,568446438),s=v(s,t,n,o,r[i+14],9,-1019803690),o=v(o,s,t,n,r[i+3],14,-187363961),n=v(n,o,s,t,r[i+8],20,1163531501),t=v(t,n,o,s,r[i+13],5,-1444681467),s=v(s,t,n,o,r[i+2],9,-51403784),o=v(o,s,t,n,r[i+7],14,1735328473),n=v(n,o,s,t,r[i+12],20,-1926607734),t=p(t,n,o,s,r[i+5],4,-378558),s=p(s,t,n,o,r[i+8],11,-2022574463),o=p(o,s,t,n,r[i+11],16,1839030562),n=p(n,o,s,t,r[i+14],23,-35309556),t=p(t,n,o,s,r[i+1],4,-1530992060),s=p(s,t,n,o,r[i+4],11,1272893353),o=p(o,s,t,n,r[i+7],16,-155497632),n=p(n,o,s,t,r[i+10],23,-1094730640),t=p(t,n,o,s,r[i+13],4,681279174),s=p(s,t,n,o,r[i],11,-358537222),o=p(o,s,t,n,r[i+3],16,-722521979),n=p(n,o,s,t,r[i+6],23,76029189),t=p(t,n,o,s,r[i+9],4,-640364487),s=p(s,t,n,o,r[i+12],11,-421815835),o=p(o,s,t,n,r[i+15],16,530742520),n=p(n,o,s,t,r[i+2],23,-995338651),t=m(t,n,o,s,r[i],6,-198630844),s=m(s,t,n,o,r[i+7],10,1126891415),o=m(o,s,t,n,r[i+14],15,-1416354905),n=m(n,o,s,t,r[i+5],21,-57434055),t=m(t,n,o,s,r[i+12],6,1700485571),s=m(s,t,n,o,r[i+3],10,-1894986606),o=m(o,s,t,n,r[i+10],15,-1051523),n=m(n,o,s,t,r[i+1],21,-2054922799),t=m(t,n,o,s,r[i+8],6,1873313359),s=m(s,t,n,o,r[i+15],10,-30611744),o=m(o,s,t,n,r[i+6],15,-1560198380),n=m(n,o,s,t,r[i+13],21,1309151649),t=m(t,n,o,s,r[i+4],6,-145523070),s=m(s,t,n,o,r[i+11],10,-1120210379),o=m(o,s,t,n,r[i+2],15,718787259),n=m(n,o,s,t,r[i+9],21,-343485551),t=O(t,R),n=O(n,l),o=O(o,a),s=O(s,c)}return[t,n,o,s]}(function A(r){const f=[];for(let t=0,n=r.length*d;t<n;t+=d)f[t>>5]|=(r.charCodeAt(t/d)&T)<<t%32;return f}(r),r.length*d);switch(t){case j.Raw:return n;case j.Hex:return function B(r){const f="0123456789abcdef",t=[];for(let n=0,o=4*r.length;n<o;n++)t.push(f.charAt(r[n>>2]>>n%4*8+4&15)+f.charAt(r[n>>2]>>n%4*8&15));return t.join("")}(n);case j.String:return function z(r){const f=[];for(let t=0,n=32*r.length;t<n;t+=d)f.push(String.fromCharCode(r[t>>5]>>>t%32&T));return f.join("")}(n);case j.Base64:return function W(r){const n=[];for(let o=0,s=4*r.length;o<s;o+=3){const i=(r[o>>2]>>o%4*8&255)<<16|(r[o+1>>2]>>(o+1)%4*8&255)<<8|r[o+2>>2]>>(o+2)%4*8&255;for(let R=0;R<4;R++)n.push(8*o+6*R>32*r.length?"=":"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i>>6*(3-R)&63))}return n.join("")}(n)}}},22558:(M,P,y)=>{function j(d){return d&&"getAtOrigin"in d&&"originOf"in d}y.d(P,{l:()=>j})},83602:(M,P,y)=>{y.r(P),y.d(P,{default:()=>K});var j=y(15861),d=y(17626),T=y(85840);function O(u,x){return A(u)===A(x)}function A(u){if(null==u)return null;let S=null;return S=null!=u.objectId?u.objectId:null!=u.layer&&"objectIdField"in u.layer&&null!=u.layer.objectIdField&&null!=u.attributes?u.attributes[u.layer.objectIdField]:u.uid,null==S?null:`o-${null!=u.layer?u.layer.id:""}-${S}`}const z={json:{write:{writer:function B(u,x){null!=u?.layer?.objectIdField&&null!=u.attributes&&(x.feature={layerId:u.layer.id,objectId:u.attributes[u.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function W(u){if(null!=u.layerId&&null!=u.objectId)return{uid:null,layer:{id:u.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:u.objectId}}}}}}};var H=y(83761),Z=y(79608),b=y(86810),v=y(62208),p=y(77712),r=(y(90912),y(85931),y(8314),y(76898)),f=y(128),t=y(72642),n=y(82706);let o=class extends((0,b.eC)((0,Z.J)(H.Z))){constructor(u){super(u),this.position=null,this.elevationInfo=null,this.feature=null}equals(u){return(0,v._W)(this.position,u.position)&&(0,v._W)(this.elevationInfo,u.elevationInfo)&&O(this.feature,u.feature)}};(0,d._)([(0,p.Cb)({type:t.Z,json:{write:{isRequired:!0}}})],o.prototype,"position",void 0),(0,d._)([(0,p.Cb)({type:n.Z}),(0,f.B)()],o.prototype,"elevationInfo",void 0),(0,d._)([(0,p.Cb)(z)],o.prototype,"feature",void 0),o=(0,d._)([(0,r.j)("esri.analysis.LineOfSightAnalysisObserver")],o);const s=o;let i=class extends((0,b.eC)(Z.j)){constructor(u){super(u),this.position=null,this.elevationInfo=null,this.feature=null}equals(u){return(0,v._W)(this.position,u.position)&&(0,v._W)(this.elevationInfo,u.elevationInfo)&&O(this.feature,u.feature)}};(0,d._)([(0,p.Cb)({type:t.Z}),(0,f.B)()],i.prototype,"position",void 0),(0,d._)([(0,p.Cb)({type:n.Z}),(0,f.B)()],i.prototype,"elevationInfo",void 0),(0,d._)([(0,p.Cb)(z)],i.prototype,"feature",void 0),i=(0,d._)([(0,r.j)("esri.analysis.LineOfSightAnalysisTarget")],i);const R=i;var l=y(74333),a=y(89726),c=y(32917),g=y(5464),I=y(5548),L=y(60507);const C=l.Z.ofType(R);let h=class extends T.Z{constructor(u){super(u),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles((0,c.YP)(()=>this._computeExtent(),u=>{null==u?.pending&&this._set("extent",null!=u?u.extent:null)},c.tX))}get targets(){return this._get("targets")||new C}set targets(u){this._set("targets",(0,a.Z)(u,this.targets,C))}get spatialReference(){return null!=this.observer?.position?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[this.observer?.position]}waitComputeExtent(){var u=this;return(0,j.Z)(function*(){const x=u._computeExtent();return null!=x?x.pending:Promise.resolve()})()}_computeExtent(){const u=this.spatialReference;if(null==this.observer?.position||null==u)return null;const x=F=>"absolute-height"===(0,L.VW)(F.position,F.elevationInfo),S=this.observer.position,D=(0,I.al)(S.x,S.y,S.z,S.x,S.y,S.z);for(const F of this.targets)if(null!=F.position){const $=(0,g.projectOrLoad)(F.position,u);if(null!=$.pending)return{pending:$.pending,extent:null};if(null!=$.geometry){const{x:Q,y:k,z:q}=$.geometry;(0,I.pp)(D,[Q,k,q])}}const J=(0,I.HH)(D,u);return x(this.observer)&&this.targets.every(x)||(J.zmin=void 0,J.zmax=void 0),{pending:null,extent:J}}clear(){this.observer=null,this.targets.removeAll()}};(0,d._)([(0,p.Cb)({type:["line-of-sight"]})],h.prototype,"type",void 0),(0,d._)([(0,p.Cb)({type:s,json:{read:!0,write:!0}})],h.prototype,"observer",void 0),(0,d._)([(0,p.Cb)({cast:a.R,type:C,nonNullable:!0,json:{read:!0,write:!0}})],h.prototype,"targets",null),(0,d._)([(0,p.Cb)({value:null,readOnly:!0})],h.prototype,"extent",void 0),(0,d._)([(0,p.Cb)({readOnly:!0})],h.prototype,"spatialReference",null),(0,d._)([(0,p.Cb)({readOnly:!0})],h.prototype,"requiredPropertiesForEditing",null),h=(0,d._)([(0,r.j)("esri.analysis.LineOfSightAnalysis")],h);const w=h;var V=y(99959),X=y(44917),Y=y(49286);const G=l.Z.ofType(R);let E=class extends((0,Y.q)((0,V.R)(X.Z))){constructor(u){super(u),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new w,this.opacity=1}initialize(){this.addHandles((0,c.YP)(()=>this.analysis,(u,x)=>{null!=x&&x.parent===this&&(x.parent=null),null!=u&&(u.parent=this)},c.tX))}load(){var u=this;return(0,j.Z)(function*(){return null!=u.analysis&&u.addResolvingPromise(u.analysis.waitComputeExtent()),u})()}get observer(){return this.analysis?.observer}set observer(u){const{analysis:x}=this;x&&(x.observer=u)}get targets(){return null!=this.analysis?this.analysis.targets:new l.Z}set targets(u){(0,a.Z)(u,this.analysis?.targets)}get fullExtent(){return null!=this.analysis?this.analysis.extent:null}get spatialReference(){return null!=this.analysis?this.analysis.spatialReference:null}releaseAnalysis(u){this.analysis===u&&(this.analysis=new w)}};(0,d._)([(0,p.Cb)({json:{read:!1},readOnly:!0})],E.prototype,"type",void 0),(0,d._)([(0,p.Cb)({type:["LineOfSightLayer"]})],E.prototype,"operationalLayerType",void 0),(0,d._)([(0,p.Cb)({type:s,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],E.prototype,"observer",null),(0,d._)([(0,p.Cb)({type:G,json:{read:!0,write:{ignoreOrigin:!0}}})],E.prototype,"targets",null),(0,d._)([(0,p.Cb)({nonNullable:!0,json:{read:!1,write:!1}})],E.prototype,"analysis",void 0),(0,d._)([(0,p.Cb)({readOnly:!0})],E.prototype,"fullExtent",null),(0,d._)([(0,p.Cb)({readOnly:!0})],E.prototype,"spatialReference",null),(0,d._)([(0,p.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],E.prototype,"opacity",void 0),(0,d._)([(0,p.Cb)({type:["show","hide"]})],E.prototype,"listMode",void 0),E=(0,d._)([(0,r.j)("esri.layers.LineOfSightLayer")],E);const K=E},60507:(M,P,y)=>{function A(l,a){return function T(l,a){return a?.mode?a.mode:function d(l){return l?s:i}(l).mode}(null!=l&&l.hasZ,a)}function f(l,a,c){return c&&c.mode!==a?`${l} only support ${a} elevation mode`:null}function t(l,a,c){return c?.mode===a?`${l} do not support ${a} elevation mode`:null}function n(l,a){return null!=a?.featureExpressionInfo&&"0"!==a.featureExpressionInfo.expression?`${l} do not support featureExpressionInfo`:null}function o(l,a){a&&l.warn(".elevationInfo=",a)}y.d(P,{LR:()=>o,Uy:()=>f,VW:()=>A,Wb:()=>t,kf:()=>n}),y(29505);const s={mode:"absolute-height",offset:0},i={mode:"on-the-ground",offset:null}}}]);