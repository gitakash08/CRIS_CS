"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[853],{48977:(an,Y,o)=>{o.d(Y,{a:()=>V,c:()=>rn,g:()=>N,j:()=>F,k:()=>D,m:()=>z,s:()=>X});var m=o(550),p=o(78451),j=o(28093),L=o(39863),y=o(84161),l=o(993);function X(n,t,a){a*=.5;const _=Math.sin(a);return n[0]=_*t[0],n[1]=_*t[1],n[2]=_*t[2],n[3]=Math.cos(a),n}function N(n,t){const a=2*Math.acos(t[3]),_=Math.sin(a/2);return _>(0,L.g)()?(n[0]=t[0]/_,n[1]=t[1]/_,n[2]=t[2]/_):(n[0]=1,n[1]=0,n[2]=0),a}function z(n,t,a){const _=t[0],s=t[1],c=t[2],g=t[3],T=a[0],A=a[1],$=a[2],w=a[3];return n[0]=_*w+g*T+s*$-c*A,n[1]=s*w+g*A+c*T-_*$,n[2]=c*w+g*$+_*A-s*T,n[3]=g*w-_*T-s*A-c*$,n}function U(n,t,a,_){const s=t[0],c=t[1],g=t[2],T=t[3];let A,$,w,cn,on,En=a[0],un=a[1],fn=a[2],Mn=a[3];return $=s*En+c*un+g*fn+T*Mn,$<0&&($=-$,En=-En,un=-un,fn=-fn,Mn=-Mn),1-$>(0,L.g)()?(A=Math.acos($),w=Math.sin(A),cn=Math.sin((1-_)*A)/w,on=Math.sin(_*A)/w):(cn=1-_,on=_),n[0]=cn*s+on*En,n[1]=cn*c+on*un,n[2]=cn*g+on*fn,n[3]=cn*T+on*Mn,n}function V(n,t){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=t[3],n}function O(n,t){const a=t[0]+t[4]+t[8];let _;if(a>0)_=Math.sqrt(a+1),n[3]=.5*_,_=.5/_,n[0]=(t[5]-t[7])*_,n[1]=(t[6]-t[2])*_,n[2]=(t[1]-t[3])*_;else{let s=0;t[4]>t[0]&&(s=1),t[8]>t[3*s+s]&&(s=2);const c=(s+1)%3,g=(s+2)%3;_=Math.sqrt(t[3*s+s]-t[3*c+c]-t[3*g+g]+1),n[s]=.5*_,_=.5/_,n[3]=(t[3*c+g]-t[3*g+c])*_,n[c]=(t[3*c+s]+t[3*s+c])*_,n[g]=(t[3*g+s]+t[3*s+g])*_}return n}function D(n,t,a,_){const s=.5*Math.PI/180;t*=s,a*=s,_*=s;const c=Math.sin(t),g=Math.cos(t),T=Math.sin(a),A=Math.cos(a),$=Math.sin(_),w=Math.cos(_);return n[0]=c*A*w-g*T*$,n[1]=g*T*w+c*A*$,n[2]=g*A*$-c*T*w,n[3]=g*A*w+c*T*$,n}const rn=l.c,nn=l.s,tn=l.a,_n=z,h=l.b,I=l.d,d=l.l,J=l.f,k=J,Z=l.g,P=Z,v=l.n,F=l.h,H=l.e,x=(0,j.c)(),sn=(0,j.f)(1,0,0),q=(0,j.f)(0,1,0),ln=(0,p.a)(),r=(0,p.a)(),u=(0,m.a)();Object.freeze(Object.defineProperty({__proto__:null,add:tn,calculateW:function K(n,t){const a=t[0],_=t[1],s=t[2];return n[0]=a,n[1]=_,n[2]=s,n[3]=Math.sqrt(Math.abs(1-a*a-_*_-s*s)),n},conjugate:V,copy:rn,dot:I,equals:H,exactEquals:F,fromEuler:D,fromMat3:O,getAxisAngle:N,identity:function Q(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n},invert:function C(n,t){const a=t[0],_=t[1],s=t[2],c=t[3],g=a*a+_*_+s*s+c*c,T=g?1/g:0;return n[0]=-a*T,n[1]=-_*T,n[2]=-s*T,n[3]=c*T,n},len:k,length:J,lerp:d,mul:_n,multiply:z,normalize:v,random:function S(n){const t=L.R,a=t(),_=t(),s=t(),c=Math.sqrt(1-a),g=Math.sqrt(a);return n[0]=c*Math.sin(2*Math.PI*_),n[1]=c*Math.cos(2*Math.PI*_),n[2]=g*Math.sin(2*Math.PI*s),n[3]=g*Math.cos(2*Math.PI*s),n},rotateX:function W(n,t,a){a*=.5;const _=t[0],s=t[1],c=t[2],g=t[3],T=Math.sin(a),A=Math.cos(a);return n[0]=_*A+g*T,n[1]=s*A+c*T,n[2]=c*A-s*T,n[3]=g*A-_*T,n},rotateY:function R(n,t,a){a*=.5;const _=t[0],s=t[1],c=t[2],g=t[3],T=Math.sin(a),A=Math.cos(a);return n[0]=_*A-c*T,n[1]=s*A+g*T,n[2]=c*A+_*T,n[3]=g*A-s*T,n},rotateZ:function B(n,t,a){a*=.5;const _=t[0],s=t[1],c=t[2],g=t[3],T=Math.sin(a),A=Math.cos(a);return n[0]=_*A+s*T,n[1]=s*A-_*T,n[2]=c*A+g*T,n[3]=g*A-c*T,n},rotationTo:function G(n,t,a){const _=(0,y.j)(t,a);return _<-.999999?((0,y.b)(x,sn,t),(0,y.k)(x)<1e-6&&(0,y.b)(x,q,t),(0,y.n)(x,x),X(n,x,Math.PI),n):_>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):((0,y.b)(x,t,a),n[0]=x[0],n[1]=x[1],n[2]=x[2],n[3]=1+_,v(n,n))},scale:h,set:nn,setAxes:function E(n,t,a,_){const s=u;return s[0]=a[0],s[3]=a[1],s[6]=a[2],s[1]=_[0],s[4]=_[1],s[7]=_[2],s[2]=-t[0],s[5]=-t[1],s[8]=-t[2],v(n,O(n,s))},setAxisAngle:X,slerp:U,sqlerp:function b(n,t,a,_,s,c){return U(ln,t,s,c),U(r,a,_,c),U(n,ln,r,2*c*(1-c)),n},sqrLen:P,squaredLength:Z,str:function en(n){return"quat("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"}},Symbol.toStringTag,{value:"Module"}))},21575:(an,Y,o)=>{o.d(Y,{B:()=>X});var m=o(21286),p=o(28347),j=o(28093);function L(B,K,U){const S=Math.sin(B),C=Math.cos(B),V=Math.sin(K),O=Math.cos(K),D=U;return D[0]=-S,D[4]=-V*C,D[8]=O*C,D[12]=0,D[1]=C,D[5]=-V*S,D[9]=O*S,D[13]=0,D[2]=0,D[6]=O,D[10]=V,D[14]=0,D[3]=0,D[7]=0,D[11]=0,D[15]=1,D}var l=o(4587),Q=o(37053);function X(B,K,U,S){if(null==B||null==S)return!1;const C=(0,l.eT)(B,l.Jz),V=(0,l.eT)(S,l.sp);if(C===V&&!N(V)&&(C!==l.Ej.UNKNOWN||(0,Q.fS)(B,S)))return(0,p.d)(U,K),!0;if(N(V)){const O=l.rf[C][l.Ej.LON_LAT],D=l.rf[l.Ej.LON_LAT][V];return null!=O&&null!=D&&(O(K,0,W,0),D(W,0,R,0),L(z*W[0],z*W[1],U),U[12]=R[0],U[13]=R[1],U[14]=R[2],!0)}if((V===l.Ej.WEB_MERCATOR||V===l.Ej.PLATE_CARREE)&&(C===l.Ej.WGS84||C===l.Ej.CGCS2000&&V===l.Ej.PLATE_CARREE||C===l.Ej.SPHERICAL_ECEF||C===l.Ej.WEB_MERCATOR)){const O=l.rf[C][l.Ej.LON_LAT],D=l.rf[l.Ej.LON_LAT][V];return null!=O&&null!=D&&(O(K,0,W,0),D(W,0,R,0),C===l.Ej.SPHERICAL_ECEF?function y(B,K,U){L(B,K,U),(0,p.t)(U,U)}(z*W[0],z*W[1],U):(0,p.g)(U),U[12]=R[0],U[13]=R[1],U[14]=R[2],!0)}return!1}function N(B){return B===l.Ej.SPHERICAL_ECEF||B===l.Ej.SPHERICAL_MARS_PCPF||B===l.Ej.SPHERICAL_MOON_PCPF}const z=(0,m.Vl)(1),W=(0,j.c)(),R=(0,j.c)()},81863:(an,Y,o)=>{o.d(Y,{rS:()=>X});var m=o(92383),p=o(65234),j=o(37053);const L=new p.Z(m.kU),y=new p.Z(m.JL),l=new p.Z(m.mM);function X(N){return N&&((0,j.BZ)(N)||(0,j.fS)(N,y))?y:N&&((0,j.V2)(N)||(0,j.fS)(N,l))?l:L}new p.Z(m.pn)},57517:(an,Y,o)=>{o.d(Y,{Z:()=>R});var m=o(17626),p=o(79608),j=o(86810),N=(o(63290),o(90912),o(85931),o(8314),o(26584),o(55342)),z=o(76898);let W=class extends((0,p.J)(j.wq)){constructor(){super({}),this.type="georeferenced",this.isRelative=!1,this.isGeoreferenced=!0}};(0,m._)([(0,N.J)({georeferenced:"georeferenced"},{readOnly:!0})],W.prototype,"type",void 0),W=(0,m._)([(0,z.j)("esri.geometry.support.MeshGeoreferencedVertexSpace")],W);const R=W},99746:(an,Y,o)=>{o.d(Y,{Z:()=>V});var U,m=o(17626),p=o(86810),j=o(77712),Q=(o(90912),o(85931),o(8314),o(76898)),X=o(28347),N=o(43703),z=o(48977),W=o(78451),R=o(84161),B=o(28093),K=o(89586);let S=U=class extends p.wq{constructor(O){super(O),this.translation=(0,B.c)(),this.rotationAxis=(0,B.e)(K.up),this.rotationAngle=0,this.scale=(0,B.f)(1,1,1)}get rotation(){return(0,K.uT)(this.rotationAxis,this.rotationAngle)}set rotation(O){this.rotationAxis=(0,B.g)((0,K.ZZ)(O)),this.rotationAngle=(0,K.EU)(O)}get localMatrix(){const O=(0,N.a)();return(0,z.s)(C,(0,K.ZZ)(this.rotation),(0,K.WH)(this.rotation)),(0,X.f)(O,C,this.translation,this.scale),O}get localMatrixInverse(){return(0,X.i)((0,N.a)(),this.localMatrix)}applyLocal(O,D){return(0,R.e)(D,O,this.localMatrix)}applyLocalInverse(O,D){return(0,R.e)(D,O,this.localMatrixInverse)}equals(O){return this===O||null!=O&&(0,X.e)(this.localMatrix,O.localMatrix)}clone(){const O={translation:(0,B.g)(this.translation),rotationAxis:(0,B.g)(this.rotationAxis),rotationAngle:this.rotationAngle,scale:(0,B.g)(this.scale)};return new U(O)}};(0,m._)([(0,j.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],S.prototype,"translation",void 0),(0,m._)([(0,j.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],S.prototype,"rotationAxis",void 0),(0,m._)([(0,j.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],S.prototype,"rotationAngle",void 0),(0,m._)([(0,j.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],S.prototype,"scale",void 0),(0,m._)([(0,j.Cb)()],S.prototype,"rotation",null),(0,m._)([(0,j.Cb)()],S.prototype,"localMatrix",null),(0,m._)([(0,j.Cb)()],S.prototype,"localMatrixInverse",null),S=U=(0,m._)([(0,Q.j)("esri.geometry.support.MeshTransform")],S);const C=(0,W.a)(),V=S},89586:(an,Y,o)=>{o.d(Y,{EU:()=>S,Ue:()=>l,WH:()=>C,ZZ:()=>U,qC:()=>B,qw:()=>K,uT:()=>W,up:()=>O});var m=o(21286),p=o(48977),j=o(78451),L=o(84161),y=o(28093);function l(h=O){return[h[0],h[1],h[2],h[3]]}function W(h,I,d=l()){return(0,L.c)(d,h),d[3]=I,d}function B(h,I,d=l()){return(0,p.s)(D,h,C(h)),(0,p.s)(en,I,C(I)),(0,p.m)(D,en,D),function V(h,I){return h[3]=I,h}(d,(0,m.BV)((0,p.g)(d,D)))}function K(h,I,d,J=l()){return W(y.U,h,nn),W(y.b,I,tn),W(y.d,d,_n),B(nn,tn,nn),B(nn,_n,J),J}function U(h){return h}function S(h){return h[3]}function C(h){return(0,m.Vl)(h[3])}const O=[0,0,1,0],D=(0,j.a)(),en=(0,j.a)(),nn=(l(),l()),tn=l(),_n=l()},92545:(an,Y,o)=>{o.d(Y,{A:()=>j,h:()=>p});var m=o(63290);function p(L,y){return L.isGeographic||L.isWebMercator&&(y?.geographic??!0)}function j(L,y,l){null!=l?.geographic&&l.geographic!==!L.isGeoreferenced&&m.Z.getLogger(y).warnOnce(`Specifying the 'geographic' parameter (${l.geographic}) for a Mesh vertex space of type "${L.type}" is not supported. This parameter will be ignored.`)}},60853:(an,Y,o)=>{o.r(Y),o.d(Y,{applyTransform:()=>en,georeference:()=>D,georeferenceApplyTransform:()=>rn,georeferenceByTransform:()=>nn,project:()=>h,ungeoreference:()=>tn,ungeoreferenceByTransform:()=>_n});var m=o(16730),p=o(550),j=o(28347),L=o(43703),y=o(84161),l=o(28093),Q=o(30217),X=o(5464),N=o(81863),z=o(21575),W=o(39774),R=o(36344),B=o(80130),K=o(57517),U=o(28036),S=o(99746),C=o(79800),V=o(92545),O=o(65231);function D(r,E,u){return(0,V.h)(E.spatialReference,u)?function d(r,E,u){const M=E.spatialReference,n=F(E,u,q),t=new Float64Array(r.position.length),a=function J(r,E,u,M){(0,C.t)(M,r,E);const n=new Float64Array(r.length);return(0,O.To)(M,n,u)}(r.position,n,M,t),_=(0,Q.n)(ln,n);return{position:a,normal:k(a,t,r.normal,_,M),tangent:Z(a,t,r.tangent,_,M)}}(r,E,u):function I(r,E,u){const M=new Float64Array(r.position.length),n=r.position,t=E.x,a=E.y,_=E.z??0,s=sn(u?u.unit:null,E.spatialReference);for(let c=0;c<n.length;c+=3)M[c]=n[c]*s+t,M[c+1]=n[c+1]*s+a,M[c+2]=n[c+2]*s+_;return{position:M,normal:r.normal,tangent:r.tangent}}(r,E,u)}function en(r,E=L.I){const{position:u,normal:M,tangent:n}=r;return{position:(0,C.t)(new Float64Array(u.length),u,E),normal:null!=M?(0,O.w9)(M,new Float32Array(M.length),E):null,tangent:null!=n?(0,O.VS)(n,new Float32Array(n.length),E):null}}function rn(r,E,u,M){const{position:n,normal:t,tangent:a}=r;return E.isRelative?D(en(r,u?.localMatrix),E.getOriginPoint(M),{geographic:!E.isGeoreferenced}):{position:n,normal:t,tangent:a}}function nn(r,E,u){if(u?.useTransform){const{position:M,normal:n,tangent:t}=r,{x:a,y:_,z:s}=E,c=(0,l.f)(a,_,s??0);return{vertexAttributes:{position:M,normal:n,tangent:t},vertexSpace:u.geographic??1?new U.Z({origin:c}):new B.Z({origin:c}),transform:new S.Z}}return{vertexAttributes:D(r,E,u),vertexSpace:new K.Z,transform:null}}function tn(r,E,u){return(0,V.h)(E.spatialReference,u)?function v(r,E,u){const M=E.spatialReference;F(E,u,q);const n=(0,j.i)(b,q),t=new Float64Array(r.position.length),a=function H(r,E,u,M){const n=(0,O.XO)(r,E,M),t=new Float64Array(n.length);return(0,C.t)(t,n,u),t}(r.position,M,n,t),_=(0,Q.n)(ln,n);return{position:a,normal:G(r.normal,r.position,t,M,_),tangent:x(r.tangent,r.position,t,M,_)}}(r,E,u):P(r,E,u)}function _n(r,E,u,M,n){if(!E.isRelative)return tn(r,M,n);const{spatialReference:t}=M,a=rn(r,E,u,t);return M.equals(E.getOriginPoint(t))?P(a,M,n):tn(a,M,n)}function h({positions:r,transform:E,vertexSpace:u,inSpatialReference:M,outSpatialReference:n,outPositions:t,localMode:a}){const _=u.isRelative?u.origin:l.Z,s=u.isRelative?E?.localMatrix??L.I:L.I;if(u.isGeoreferenced){const A=t??(0,R.bg)(r.length);if((0,j.a)(s,L.I)?(0,R.JK)(A,r):(0,C.t)(A,r,s),!(0,y.h)(_,l.Z)){const[$,w,cn]=_;for(let on=0;on<A.length;on+=3)A[on]+=$,A[on+1]+=w,A[on+2]+=cn}return(0,W.projectBuffer)(A,M,0,A,n,0,A.length/3),A}let c=M;const g=(0,N.rS)(M);c=n.isWebMercator&&a||!(0,X.canProjectWithoutEngine)(M,g)?c:g,(0,z.B)(M,_,q,c),(0,j.m)(q,q,s);const T=t??(0,R.bg)(r.length);return(0,C.t)(T,r,q),(0,W.projectBuffer)(T,c,0,T,n,0,T.length/3),T}function k(r,E,u,M,n){if(null==u)return null;const t=new Float32Array(u.length);return(0,C.a)(t,u,M),(0,O.Yk)(t,r,E,n,t),t}function Z(r,E,u,M,n){if(null==u)return null;const t=new Float32Array(u.length);(0,C.a)(t,u,M,4);for(let a=3;a<t.length;a+=4)t[a]=u[a];return(0,O.M2)(t,r,E,n,t),t}function P(r,E,u){const M=new Float64Array(r.position.length),n=r.position,t=E.x,a=E.y,_=E.z??0,s=sn(u?u.unit:null,E.spatialReference);for(let c=0;c<n.length;c+=3)M[c]=(n[c]-t)/s,M[c+1]=(n[c+1]-a)/s,M[c+2]=(n[c+2]-_)/s;return{position:M,normal:r.normal,tangent:r.tangent}}function F(r,E,u){(0,z.B)(r.spatialReference,[r.x,r.y,r.z??0],u,(0,N.rS)(r.spatialReference));const M=sn(E?E.unit:null,r.spatialReference);return(0,j.b)(u,u,[M,M,M]),u}function G(r,E,u,M,n){if(null==r)return null;const t=(0,O.Iz)(r,E,u,M,new Float32Array(r.length));return(0,C.a)(t,t,n),t}function x(r,E,u,M,n){if(null==r)return null;const t=(0,O.wi)(r,E,u,M,new Float32Array(r.length));return(0,C.a)(t,t,n,4),t}function sn(r,E){if(null==r)return 1;const u=(0,m.r6)(E);return 1/(0,m.En)(u,"meters",r)}const q=(0,L.a)(),b=(0,L.a)(),ln=(0,p.a)()},65231:(an,Y,o)=>{o.d(Y,{Iz:()=>U,M2:()=>rn,To:()=>V,VS:()=>D,XO:()=>C,Yk:()=>S,w9:()=>O,wi:()=>en});var m=o(63290),p=o(30217),j=o(550),L=o(43703),y=o(84161),l=o(28093),Q=o(81863),X=o(21575),N=o(39774),z=o(37053),W=o(46367),R=o(60479),B=o(79800);const K=m.Z.getLogger("esri.geometry.support.meshUtils.normalProjection");function U(P,v,F,H,G){return tn(H)?(nn(I.TO_PCPF,R.ct.fromTypedArray(P),R.fP.fromTypedArray(v),R.fP.fromTypedArray(F),H,R.ct.fromTypedArray(G)),G):(K.error("Cannot convert spatial reference to PCPF"),G)}function S(P,v,F,H,G){return tn(H)?(nn(I.FROM_PCPF,R.ct.fromTypedArray(P),R.fP.fromTypedArray(v),R.fP.fromTypedArray(F),H,R.ct.fromTypedArray(G)),G):(K.error("Cannot convert to spatial reference from PCPF"),G)}function C(P,v,F){return(0,N.projectBuffer)(P,v,0,F,(0,Q.rS)(v),0,P.length/3),F}function V(P,v,F){return(0,N.projectBuffer)(P,(0,Q.rS)(F),0,v,F,0,P.length/3),v}function O(P,v,F){return(0,p.n)(Z,F),(0,B.a)(v,P,Z),(0,p.i)(Z)||(0,B.n)(v,v),v}function D(P,v,F){if((0,p.n)(Z,F),(0,B.a)(v,P,Z,4),(0,p.i)(Z)||(0,B.n)(v,v,4),P!==v)for(let H=3;H<P.length;H+=4)v[H]=P[H];return v}function en(P,v,F,H,G){if(!tn(H))return K.error("Cannot convert spatial reference to PCPF"),G;nn(I.TO_PCPF,R.ct.fromTypedArray(P,4*Float32Array.BYTES_PER_ELEMENT),R.fP.fromTypedArray(v),R.fP.fromTypedArray(F),H,R.ct.fromTypedArray(G,4*Float32Array.BYTES_PER_ELEMENT));for(let x=3;x<P.length;x+=4)G[x]=P[x];return G}function rn(P,v,F,H,G){if(!tn(H))return K.error("Cannot convert to spatial reference from PCPF"),G;nn(I.FROM_PCPF,R.ct.fromTypedArray(P,16),R.fP.fromTypedArray(v),R.fP.fromTypedArray(F),H,R.ct.fromTypedArray(G,16));for(let x=3;x<P.length;x+=4)G[x]=P[x];return G}function nn(P,v,F,H,G,x){if(!v)return;const sn=F.count,q=(0,Q.rS)(G);if(_n(G))for(let b=0;b<sn;b++)H.getVec(b,d),v.getVec(b,J),(0,X.B)(q,d,k,q),(0,p.f)(Z,k),P===I.FROM_PCPF&&(0,p.t)(Z,Z),(0,y.t)(J,J,Z),x.setVec(b,J);else for(let b=0;b<sn;b++){H.getVec(b,d),v.getVec(b,J),(0,X.B)(q,d,k,q),(0,p.f)(Z,k);const ln=(0,W.mZ)(F.get(b,1));let r=Math.cos(ln);P===I.TO_PCPF&&(r=1/r),Z[0]*=r,Z[1]*=r,Z[2]*=r,Z[3]*=r,Z[4]*=r,Z[5]*=r,P===I.FROM_PCPF&&(0,p.t)(Z,Z),(0,y.t)(J,J,Z),(0,y.n)(J,J),x.setVec(b,J)}return x}function tn(P){return _n(P)||function h(P){return P.isWebMercator}(P)}function _n(P){return P.isWGS84||(0,z.yW)(P)||(0,z.BZ)(P)||(0,z.V2)(P)}var I,P;(P=I||(I={}))[P.TO_PCPF=0]="TO_PCPF",P[P.FROM_PCPF=1]="FROM_PCPF";const d=(0,l.c)(),J=(0,l.c)(),k=(0,L.a)(),Z=(0,j.a)()}}]);