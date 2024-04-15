"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[9526],{69526:(ge,G,u)=>{u.r(G),u.d(G,{default:()=>qe});var X,O=u(15861),a=u(17626),A=u(84792),E=u(85931),M=u(74333),I=u(26584),B=u(58817),ve=u(99959),xe=u(94113),ae=u(10699),F=u(32917),H=u(21726),n=u(77712),Z=(u(90912),u(68653)),Y=u(76898),Se=u(99433),N=u(2004),we=u(44917),Me=u(28678),Ce=u(552),Ie=u(49286),Te=u(6647),Le=u(30346),be=u(99555),ne=u(12585),z=u(2584),Ee=u(35423),Pe=u(91309),Q=u(86810);u(8314);let D=X=class extends Q.wq{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new X;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};(0,a._)([(0,n.Cb)({type:N.Z,json:{read:{source:"fullExtent"}}})],D.prototype,"fullExtent",void 0),(0,a._)([(0,n.Cb)({type:String,json:{read:{source:"id"}}})],D.prototype,"id",void 0),(0,a._)([(0,n.Cb)({type:z.Z,json:{read:{source:"tileInfo"}}})],D.prototype,"tileInfo",void 0),D=X=(0,a._)([(0,Y.j)("esri.layer.support.TileMatrixSet")],D);const Re=D;var k;let P=k=class extends Q.wq{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new k;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};(0,a._)([(0,n.Cb)({json:{read:{source:"id"}}})],P.prototype,"id",void 0),(0,a._)([(0,n.Cb)({json:{read:{source:"title"}}})],P.prototype,"title",void 0),(0,a._)([(0,n.Cb)({json:{read:{source:"abstract"}}})],P.prototype,"description",void 0),(0,a._)([(0,n.Cb)({json:{read:{source:"legendUrl"}}})],P.prototype,"legendUrl",void 0),(0,a._)([(0,n.Cb)({json:{read:{source:"isDefault"}}})],P.prototype,"isDefault",void 0),(0,a._)([(0,n.Cb)({json:{read:{source:"keywords"}}})],P.prototype,"keywords",void 0),P=k=(0,a._)([(0,Y.j)("esri.layer.support.WMTSStyle")],P);const Oe=P;var q;let v=q=class extends Q.wq{constructor(e){super(e),this.description=null,this.fullExtent=null,this.fullExtents=null,this.id=null,this.imageFormats=null,this.layer=null,this.parent=null,this.styles=null,this.title=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}readFullExtent(e,t){return(e=t.fullExtent)?N.Z.fromJSON(e):null}readFullExtents(e,t){return t.fullExtents?.length?t.fullExtents.map(r=>N.Z.fromJSON(r)):t.tileMatrixSets?.map(r=>N.Z.fromJSON(r.fullExtent)).filter(r=>r)??[]}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.includes("image/")||t&&!t.includes(e))&&(e.includes("image/")||(e="image/"+e),t&&!t.includes(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){let e=this._get("styleId");return e||(e=this.styles?.at(0)?.id??""),e}set styleId(e){this._set("styleId",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find(e=>e.id===this.tileMatrixSetId):null}clone(){const e=new q;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent?.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles?.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets?.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};(0,a._)([(0,n.Cb)()],v.prototype,"description",void 0),(0,a._)([(0,n.Cb)()],v.prototype,"fullExtent",void 0),(0,a._)([(0,Z.r)("fullExtent",["fullExtent"])],v.prototype,"readFullExtent",null),(0,a._)([(0,n.Cb)({readOnly:!0})],v.prototype,"fullExtents",void 0),(0,a._)([(0,Z.r)("fullExtents",["fullExtents","tileMatrixSets"])],v.prototype,"readFullExtents",null),(0,a._)([(0,n.Cb)()],v.prototype,"id",void 0),(0,a._)([(0,n.Cb)()],v.prototype,"imageFormat",null),(0,a._)([(0,n.Cb)({json:{read:{source:"formats"}}})],v.prototype,"imageFormats",void 0),(0,a._)([(0,n.Cb)()],v.prototype,"layer",void 0),(0,a._)([(0,n.Cb)()],v.prototype,"parent",void 0),(0,a._)([(0,n.Cb)()],v.prototype,"styleId",null),(0,a._)([(0,n.Cb)({type:M.Z.ofType(Oe),json:{read:{source:"styles"}}})],v.prototype,"styles",void 0),(0,a._)([(0,n.Cb)({json:{write:{ignoreOrigin:!0}}})],v.prototype,"title",void 0),(0,a._)([(0,n.Cb)()],v.prototype,"tileMatrixSetId",void 0),(0,a._)([(0,n.Cb)({readOnly:!0})],v.prototype,"tileMatrixSet",null),(0,a._)([(0,n.Cb)({type:M.Z.ofType(Re),json:{read:{source:"tileMatrixSets"}}})],v.prototype,"tileMatrixSets",void 0),v=q=(0,a._)([(0,Y.j)("esri.layers.support.WMTSSublayer")],v);const K=v;var Ae=u(92383),Fe=u(72642),_=u(84029),ee=u(22825),ue=u(7255),Ue=u(72258);const ce=90.71428571428571;function pe(e){const t=e.replaceAll(/ows:/gi,"");if(!g("Contents",(new DOMParser).parseFromString(t,"text/xml").documentElement))throw new I.Z("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function te(e){return e.nodeType===Node.ELEMENT_NODE}function g(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(te(i)&&i.nodeName===e)return i}return null}function U(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];te(s)&&s.nodeName===e&&r.push(s)}return r}function W(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];te(s)&&s.nodeName===e&&r.push(s)}return r.map(i=>i.textContent).filter(E.pC)}function h(e,t){return e.split(">").forEach(r=>{t&&(t=g(r,t))}),t&&t.textContent}function $(e,t,r,i){let s;return Array.prototype.slice.call(i.childNodes).some(o=>{if(o.nodeName.includes(e)){const c=g(t,o)?.textContent;if(c===r||r.split(":")&&r.split(":")[1]===c)return s=o,!0}return!1}),s}function de(e,t){const r=[],i=e.layerMap?.get(t);if(!i)return null;const s=U("ResourceURL",i),o=U("Dimension",i);let l,c,p,y;return o.length&&(l=h("Identifier",o[0]),c=W("Default",o[0])||W("Value",o[0])),o.length>1&&(p=h("Identifier",o[1]),y=W("Default",o[1])||W("Value",o[1])),e.dimensionMap.set(t,{dimensions:c,dimensions2:y}),s.forEach(f=>{let d=f.getAttribute("template");if("tile"===f.getAttribute("resourceType")){if(l&&c.length)if(d.includes("{"+l+"}"))d=d.replace("{"+l+"}","{dimensionValue}");else{const x=d.toLowerCase().indexOf("{"+l.toLowerCase()+"}");x>-1&&(d=d.substring(0,x)+"{dimensionValue}"+d.substring(x+l.length+2))}if(p&&y.length)if(d.includes("{"+p+"}"))d=d.replace("{"+p+"}","{dimensionValue2}");else{const x=d.toLowerCase().indexOf("{"+p.toLowerCase()+"}");x>-1&&(d=d.substring(0,x)+"{dimensionValue2}"+d.substring(x+p.length+2))}r.push({template:d,format:f.getAttribute("format"),resourceType:"tile"})}}),r}function Be(e){const t=g("WGS84BoundingBox",e),r=t?h("LowerCorner",t).split(" "):["-180","-90"],i=t?h("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function Ke(e){const t=[];return(0,ue.h)(e,{BoundingBox:r=>{if(!r.getAttribute("crs"))return;const i=r.getAttribute("crs").toLowerCase(),s=re(i),o=i.includes("epsg")&&(0,ee.A)(s.wkid);let l,c,p,y;(0,ue.h)(r,{LowerCorner:f=>{[l,c]=f.textContent.split(" ").map(d=>Number.parseFloat(d)),o&&([l,c]=[c,l])},UpperCorner:f=>{[p,y]=f.textContent.split(" ").map(d=>Number.parseFloat(d)),o&&([p,y]=[y,p])}}),t.push({xmin:l,ymin:c,xmax:p,ymax:y,spatialReference:s})}}),t}function $e(e,t){return U("Style",e).map(r=>{const i=g("LegendURL",r),s=g("Keywords",r),o=s?W("Keyword",s):[];let l=i&&i.getAttribute("xlink:href");return t&&(l=l&&l.replace(/^http:/i,"https:")),{abstract:h("Abstract",r),id:h("Identifier",r),isDefault:"true"===r.getAttribute("isDefault"),keywords:o,legendUrl:l,title:h("Title",r)}})}function Je(e,t,r){return U("TileMatrixSetLink",t).map(i=>function Ge(e,t,r){const i=g("TileMatrixSet",t).textContent,s=W("TileMatrix",t),o=r.find(C=>{const j=g("Identifier",C)?.textContent;return!!(j===i||i.split(":")&&i.split(":")[1]===j)}),l=g("TileMatrixSetLimits",t),c=l&&U("TileMatrixLimits",l),p=new Map;if(c?.length)for(const C of c){const T=g("TileMatrix",C).textContent,j=+g("MinTileRow",C).textContent,se=+g("MaxTileRow",C).textContent,le=+g("MinTileCol",C).textContent,oe=+g("MaxTileCol",C).textContent;p.set(T,{minCol:le,maxCol:oe,minRow:j,maxRow:se})}const y=h("SupportedCRS",o).toLowerCase(),f=function He(e,t){return me(g("TileMatrix",e),t)}(o,y),d=f.spatialReference,x=g("TileMatrix",o),L=[parseInt(h("TileWidth",x),10),parseInt(h("TileHeight",x),10)],w=[];s.length?s.forEach((C,T)=>{const j=$("TileMatrix","Identifier",C,o);w.push(ye(j,y,T,i,p))}):U("TileMatrix",o).forEach((C,T)=>{w.push(ye(C,y,T,i,p))});const S=function Ye(e,t,r,i,s){const o=g("BoundingBox",t);let l,c,p,y,f,d;if(o&&(l=h("LowerCorner",o).split(" "),c=h("UpperCorner",o).split(" ")),l&&l.length>1&&c&&c.length>1)p=parseFloat(l[0]),f=parseFloat(l[1]),y=parseFloat(c[0]),d=parseFloat(c[1]);else{const x=g("TileMatrix",t),L=parseInt(h("MatrixWidth",x),10),w=parseInt(h("MatrixHeight",x),10);p=r.x,d=r.y,y=p+L*i[0]*s.resolution,f=d-w*i[1]*s.resolution}return function ze(e,t,r){return"1.0.0"===e&&(0,ee.A)(t.wkid)&&!(r.spatialReference.isGeographic&&r.x<-90&&r.y>=-90)}(e,r.spatialReference,r)?new N.Z(f,p,d,y,r.spatialReference):new N.Z(p,f,y,d,r.spatialReference)}(e,o,f,L,w[0]).toJSON(),V=new z.Z({dpi:96,spatialReference:d,size:L,origin:f,lods:w}).toJSON();return{id:i,fullExtent:S,tileInfo:V}}(e,i,r))}function re(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);900913!==t&&3857!==t||(t=102100);const r=function Qe(e){return e.includes("crs84")||e.includes("crs:84")?J.CRS84:e.includes("crs83")||e.includes("crs:83")?J.CRS83:e.includes("crs27")||e.includes("crs:27")?J.CRS27:null}(e);return null!=r&&(t=r),{wkid:t}}function me(e,t){const r=re(t),[i,s]=h("TopLeftCorner",e).split(" ").map(l=>parseFloat(l)),o=t.includes("epsg")&&(0,ee.A)(r.wkid);return new Fe.Z(o?{x:s,y:i,spatialReference:r}:{x:i,y:s,spatialReference:r})}var J,e,ie;function ye(e,t,r,i,s){const o=re(t),l=h("Identifier",e);let c=parseFloat(h("ScaleDenominator",e));const p=he(o.wkid,c,i);c*=96/ce;const y=+h("MatrixWidth",e),f=+h("MatrixHeight",e),{maxCol:d=y-1,maxRow:x=f-1,minCol:L=0,minRow:w=0}=s.get(l)??{},{x:S,y:V}=me(e,t);return new Ue.Z({cols:[L,d],level:r,levelValue:l,origin:[S,V],scale:c,resolution:p,rows:[w,x]})}function he(e,t,r){let i;return i=_.Z.hasOwnProperty(""+e)?_.Z.values[_.Z[e]]:"default028mm"===r?6370997*Math.PI/180:(0,Ae.e8)(e).metersPerDegree,7*t/25e3/i}(e=J||(J={}))[e.CRS84=4326]="CRS84",e[e.CRS83=4269]="CRS83",e[e.CRS27=4267]="CRS27";const fe={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},Xe=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let m=ie=class extends((0,Ce.h)((0,Le.Q)((0,be.M)((0,Ie.q)((0,Te.I)((0,ve.R)(we.Z))))))){constructor(...e){super(...e),this.activeLayer=null,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.addHandles([(0,F.YP)(()=>this.activeLayer,(t,r)=>{r&&!this.sublayers?.includes(r)&&(r.layer=null,r.parent=null),t&&(t.layer=this,t.parent=this)},F.Z_),(0,F.on)(()=>this.sublayers,"after-add",({item:t})=>{t.layer=this,t.parent=this},F.Z_),(0,F.on)(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=null,t.parent=null},F.Z_),(0,F.YP)(()=>this.sublayers,(t,r)=>{if(r)for(const i of r)i.layer=null,i.parent=null;if(t)for(const i of t)i.layer=this,i.parent=this},F.Z_)])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(ae.r9).then(()=>this._fetchService(e)).catch(t=>{throw(0,ae.r9)(t),new I.Z("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:t})})),Promise.resolve(this)}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new K);let i=t.layers.find(s=>s.id===this.activeLayer.id);return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,o=i?.layerIdentifier;let l=null;const c=i?.tileMatrixSet;c&&(Array.isArray(c)?c.length&&(l=c[0]):l=c);const p=s?.format,y=s?.style;return new K({id:o,imageFormat:p,styleId:y,tileMatrixSetId:l})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const o=(0,xe.hS)("tileMatrixSet.tileInfo",s);t.tileInfo=o?o.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}readSublayersFromService(e,t,r){return function ke(e,t){return e.map(r=>{const i=new K;return i.read(r,t),i})}(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets?.map(e=>e.tileInfo?.spatialReference).toArray().filter(E.pC)??[]}get tilemapCache(){const e=this.activeLayer?.tileMatrixSet?.tileInfo;return e?new Ee.Z(e):void 0}get title(){return this.activeLayer?.title??"Layer"}set title(e){this._overrideIfSome("title",e)}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),i=this._getTileMatrixSetById(e.tileMatrixSetId)?.tileInfo,s=e.fullExtent,o=new Pe.B({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(o.customLayerParameters=this.customLayerParameters),this.customParameters&&(o.customParameters=this.customParameters),new Me.default({fullExtent:s,urlTemplate:t,tileInfo:i,wmtsInfo:o})}fetchTile(e,t,r,i={}){var s=this;return(0,O.Z)(function*(){const{signal:o}=i,l=s.getTileUrl(e,t,r),{data:c}=yield(0,A.Z)(l,{responseType:"image",signal:o});return c})()}fetchImageBitmapTile(e,t,r,i={}){var s=this;return(0,O.Z)(function*(){const{signal:o}=i;if(s.fetchTile!==ie.prototype.fetchTile){const p=yield s.fetchTile(e,t,r,i);return(0,ne.V)(p,e,t,r,o)}const l=s.getTileUrl(e,t,r),{data:c}=yield(0,A.Z)(l,{responseType:"blob",signal:o});return(0,ne.V)(c,e,t,r,o)})()}findSublayerById(e){return this.sublayers?.find(t=>t.id===e)}getTileUrl(e,t,r){const s=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId)?.tileInfo?.lods[e],o=s?s.levelValue||`${s.level}`:`${e}`;let l=this.resourceInfo?"":function Ne(e,t,r,i,s,o,l,c){const p=function We(e,t,r){const i=de(e,t),s=i?.filter(o=>o.format===r);return(s?.length?s:i)??[]}(e,t,i);if(!(p?.length>0))return"";const{dimensionMap:y}=e,f=y.get(t).dimensions?.[0],d=y.get(t).dimensions2?.[0];return p[l%p.length].template.replaceAll(/\{Style\}/gi,s??"").replaceAll(/\{TileMatrixSet\}/gi,r??"").replaceAll(/\{TileMatrix\}/gi,o).replaceAll(/\{TileRow\}/gi,""+l).replaceAll(/\{TileCol\}/gi,""+c).replaceAll(/\{dimensionValue\}/gi,f).replaceAll(/\{dimensionValue2\}/gi,d)}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,o,t,r);return l||(l=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replaceAll(/\{level\}/gi,o).replaceAll(/\{row\}/gi,`${t}`).replaceAll(/\{col\}/gi,`${r}`)),l=this._appendCustomLayerParameters(l),l}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const s=function De(e,t,r,i){const{dimensionMap:s}=e,o=de(e,t);let l="";if(o&&o.length>0){const c=s.get(t).dimensions?.[0],p=s.get(t).dimensions2?.[0];l=o[0].template,l.indexOf(".xxx")===l.length-4&&(l=l.slice(0,-4)),l=l.replaceAll(/\{Style\}/gi,i),l=l.replaceAll(/\{TileMatrixSet\}/gi,r),l=l.replaceAll(/\{TileMatrix\}/gi,"{level}"),l=l.replaceAll(/\{TileRow\}/gi,"{row}"),l=l.replaceAll(/\{TileCol\}/gi,"{col}"),l=l.replaceAll(/\{dimensionValue\}/gi,c),l=l.replaceAll(/\{dimensionValue2\}/gi,p)}return l}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(s)return s}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let s="";return fe[r.toLowerCase()]&&(s=fe[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}_fetchService(e){var t=this;return(0,O.Z)(function*(){let r;if(t.resourceInfo)"KVP"===t.resourceInfo.serviceMode&&(t.url+=t.url.includes("?")?"":"?"),r={ssl:!1,data:t.resourceInfo};else try{r=yield t._getCapabilities(t.serviceMode,e),pe(r.data)}catch{const i="KVP"===t.serviceMode?"RESTful":"KVP";try{r=yield t._getCapabilities(i,e),pe(r.data),t.serviceMode=i}catch(s){throw new I.Z("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:s})}}r.data=t.resourceInfo?function je(e){return e.layers.forEach(t=>{t.tileMatrixSets?.forEach(r=>{const i=r.tileInfo;i&&96!==i.dpi&&(i.lods?.forEach(s=>{s.scale=96*s.scale/i.dpi,s.resolution=he(i.spatialReference?.wkid,s.scale*ce/96,r.id)}),i.dpi=96)})}),e}(r.data):function Ve(e,t){e=e.replaceAll(/ows:/gi,"");const r=(new DOMParser).parseFromString(e,"text/xml").documentElement,i=new Map,s=new Map,o=g("Contents",r);if(!o)throw new I.Z("wmtslayer:wmts-capabilities-xml-is-not-valid");const c=g("OperationsMetadata",r)?.querySelector("[name='GetTile']"),p=c?.getElementsByTagName("Get"),y=p&&Array.prototype.slice.call(p),f=t.url?.indexOf("https"),d=void 0!==f&&f>-1;let x,L,w=t.serviceMode,S=t?.url;y?.length&&y.some(R=>{const b=g("Constraint",R);return!b||$("AllowedValues","Value",w,b)?(S=R.attributes[0].nodeValue,!0):(!b||$("AllowedValues","Value","RESTful",b)||$("AllowedValues","Value","REST",b)?L=R.attributes[0].nodeValue:b&&!$("AllowedValues","Value","KVP",b)||(x=R.attributes[0].nodeValue),!1)}),!S&&(L?(S=L,w="RESTful"):x?(S=x,w="KVP"):S=g("ServiceMetadataURL",r)?.getAttribute("xlink:href"));const V=S.indexOf("1.0.0/");-1===V&&"RESTful"===w?S+="/":V>-1&&(S=S.substring(0,V)),"KVP"===w&&(S+=V>-1?"":"?"),d&&(S=S.replace(/^http:/i,"https:"));const C=h("ServiceIdentification>ServiceTypeVersion",r),T=h("ServiceIdentification>AccessConstraints",r),j=T&&/^none$/i.test(T)?null:T,se=U("Layer",o),le=U("TileMatrixSet",o),oe=se.map(R=>{const b=h("Identifier",R);return i.set(b,R),function Ze(e,t,r,i,s){const o=h("Abstract",t),l=W("Format",t);return{id:e,fullExtent:Be(t),fullExtents:Ke(t),description:o,formats:l,styles:$e(t,i),title:h("Title",t),tileMatrixSets:Je(s,t,r)}}(b,R,le,d,C)});return{copyright:j,dimensionMap:s,layerMap:i,layers:oe,serviceMode:w,tileUrl:S}}(r.data,{serviceMode:t.serviceMode,url:t.url}),r.data&&t.read(r.data,{origin:"service"})})()}_getCapabilities(e,t){var r=this;return(0,O.Z)(function*(){const i=r._getCapabilitiesUrl(e);return yield(0,A.Z)(i,{...t,responseType:"text"})})()}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id)?.tileMatrixSets?.find(i=>i.id===e)}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...(0,B.d9)(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const r=(0,H.mN)(e),i={...r.query,...t},s=(0,H.B7)(i);return""===s?r.path:`${r.path}?${s}`}_getCapabilitiesUrl(e){this.url=(0,H.mN)(this.url).path;let t=this.url;switch(e){case"KVP":t+=`?request=GetCapabilities&service=WMTS&version=${this.version}`;break;case"RESTful":{const r=`/${this.version}/WMTSCapabilities.xml`,i=new RegExp(r,"i");t=t.replace(i,""),t+=r;break}}return this._appendCustomParameters(t)}_getLowerCasedUrlParams(e){if(!e)return null;const t=(0,H.mN)(e).query;if(!t)return null;const r={};return Object.keys(t).forEach(i=>{r[i.toLowerCase()]=t[i]}),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const i=Object.keys(r);i.length&&(e=e?(0,B.d9)(e):{},i.forEach(s=>{e.hasOwnProperty(s)||Xe.has(s)||(e[s]=r[s])}))}return e}};(0,a._)([(0,n.Cb)()],m.prototype,"dimensionMap",void 0),(0,a._)([(0,n.Cb)()],m.prototype,"layerMap",void 0),(0,a._)([(0,n.Cb)({type:K,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],m.prototype,"activeLayer",void 0),(0,a._)([(0,Z.r)("service","activeLayer",["layers"])],m.prototype,"readActiveLayerFromService",null),(0,a._)([(0,Z.r)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],m.prototype,"readActiveLayerFromItemOrWebDoc",null),(0,a._)([(0,Se.c)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:z.Z},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],m.prototype,"writeActiveLayer",null),(0,a._)([(0,n.Cb)({type:String,value:"",json:{write:!0}})],m.prototype,"copyright",void 0),(0,a._)([(0,n.Cb)({type:["show","hide"]})],m.prototype,"listMode",void 0),(0,a._)([(0,n.Cb)({json:{read:!0,write:!0}})],m.prototype,"blendMode",void 0),(0,a._)([(0,n.Cb)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],m.prototype,"customParameters",void 0),(0,a._)([(0,Z.r)(["portal-item","web-document"],"customParameters")],m.prototype,"readCustomParameters",null),(0,a._)([(0,n.Cb)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],m.prototype,"customLayerParameters",void 0),(0,a._)([(0,n.Cb)({type:N.Z,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],m.prototype,"fullExtent",void 0),(0,a._)([(0,n.Cb)({readOnly:!0})],m.prototype,"fullExtents",null),(0,a._)([(0,n.Cb)({type:["WebTiledLayer"]})],m.prototype,"operationalLayerType",void 0),(0,a._)([(0,n.Cb)()],m.prototype,"resourceInfo",void 0),(0,a._)([(0,n.Cb)()],m.prototype,"serviceMode",void 0),(0,a._)([(0,Z.r)(["portal-item","web-document"],"serviceMode",["templateUrl"])],m.prototype,"readServiceMode",null),(0,a._)([(0,n.Cb)({type:M.Z.ofType(K)})],m.prototype,"sublayers",void 0),(0,a._)([(0,Z.r)("service","sublayers",["layers"])],m.prototype,"readSublayersFromService",null),(0,a._)([(0,n.Cb)({readOnly:!0})],m.prototype,"supportedSpatialReferences",null),(0,a._)([(0,n.Cb)({readOnly:!0})],m.prototype,"tilemapCache",null),(0,a._)([(0,n.Cb)({json:{read:{source:"title"}}})],m.prototype,"title",null),(0,a._)([(0,n.Cb)({json:{read:!1},readOnly:!0,value:"wmts"})],m.prototype,"type",void 0),(0,a._)([(0,n.Cb)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],m.prototype,"url",null),(0,a._)([(0,n.Cb)()],m.prototype,"version",void 0),m=ie=(0,a._)([(0,Y.j)("esri.layers.WMTSLayer")],m);const qe=m},7255:(ge,G,u)=>{function O(A,E){if(A&&E)for(const M of A.children)if(M.localName in E){const I=E[M.localName];if("function"==typeof I){const B=I(M);B&&O(M,B)}else O(M,I)}}function*a(A,E){for(const M of A.children)if(M.localName in E){const I=E[M.localName];"function"==typeof I?yield I(M):yield*a(M,I)}}u.d(G,{H:()=>a,h:()=>O})}}]);