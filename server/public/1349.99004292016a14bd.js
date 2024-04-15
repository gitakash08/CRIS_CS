"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[1349],{47123:(I,T,t)=>{t.d(T,{T:()=>D});var m=t(15861),C=t(10699),p=t(35133),R=t(28082),h=t(26268),d=t(23841),O=t(16730),E=t(21254),o=t(87526),f=t(17807),y=t(25575),M=t(31637);function L(V,s){const i=s.length;if(V<s[0].value||1===i)return s[0].size;for(let r=1;r<i;r++)if(V<s[r].value)return s[r-1].size+(V-s[r-1].value)/(s[r].value-s[r-1].value)*(s[r].size-s[r-1].size);return s[i-1].size}class S{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.outsideLabelsVisible=!1,this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=f.v}getSizeVVFieldStops(s){const i=this._vvSizeFieldStops;if(i)switch(i.type){case"static":return i;case"level-dependent":return i.levels[s]??(()=>{let r=1/0,e=0;for(const a in i.levels){const v=parseFloat(a),l=Math.abs(s-v);l<r&&(r=l,e=v)}if(r===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const n=2**((s-e)/2),u=i.levels[e],c=new Float32Array(u.values);return c[2]*=n,c[3]*=n,{sizes:u.sizes,values:c}})();default:return}}get vvMaterialParameters(){return this._vvMaterialParameters}update(s){null!=this._vvInfo&&this._updateVisualVariables(this._vvInfo.vvRanges,s)}setInfo(s,i,r){this._updateEffects(r),this._vvInfo=i,this._technique=(0,y.EJ)(s),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,s)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:(0,M.hc)("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(s){this.outsideLabelsVisible=null!=s&&s.excludedLabelsVisible}_updateVisualVariables(s,i){const r=this._vvMaterialParameters;if(r.vvOpacityEnabled=!1,r.vvSizeEnabled=!1,r.vvColorEnabled=!1,r.vvRotationEnabled=!1,!s)return;const e=s.size;if(e){if(r.vvSizeEnabled=!0,e.minMaxValue){const a=e.minMaxValue;let v,l;if((0,o.$K)(a.minSize)&&(0,o.$K)(a.maxSize))if((0,o.hj)(a.minSize)&&(0,o.hj)(a.maxSize))v=(0,d.F2)(a.minSize),l=(0,d.F2)(a.maxSize);else{const g=i.scale;v=(0,d.F2)(L(g,a.minSize.stops)),l=(0,d.F2)(L(g,a.maxSize.stops))}this.vvSizeMinMaxValue.set([a.minDataValue,a.maxDataValue,v,l])}if(e.scaleStops&&(this.vvSizeScaleStopsValue=(0,d.F2)(L(i.scale,e.scaleStops.stops))),e.unitValue){const a=(0,O.c9)(i.spatialReference)/E.a[e.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=a/i.resolution}e.fieldStops&&(this._vvSizeFieldStops=e.fieldStops)}const n=s.color;n&&(r.vvColorEnabled=!0,this.vvColorValues.set(n.values),this.vvColors.set(n.colors));const u=s.opacity;u&&(r.vvOpacityEnabled=!0,this.vvOpacityValues.set(u.values),this.vvOpacities.set(u.opacities));const c=s.rotation;c&&(r.vvRotationEnabled=!0,r.vvRotationType=c.type)}}class D extends h.Z{constructor(s){super(s),this._rendererInfo=new S,this._materialItemsRequestQueue=new p.Z,this.attributeView=new R.H(()=>this.onAttributeStoreUpdate())}destroy(){this.children.forEach(s=>s.destroy()),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(s,i,r){this._rendererInfo.setInfo(s,i,r),this.requestRender()}getMaterialItems(s,i){var r=this;return(0,m.Z)(function*(){if(!s||0===s.length)return[];const e=(0,C.hh)();return r._materialItemsRequestQueue.push({items:s,abortOptions:i,resolver:e}),r.requestRender(),e.promise})()}doRender(s){if(s.context.capabilities.enable("textureFloat"),s.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let i=this._materialItemsRequestQueue.pop();for(;i;)this._processMaterialItemRequest(s,i),i=this._materialItemsRequestQueue.pop()}super.doRender(s)}renderChildren(s){for(const i of this.children)i.commit(s);this._rendererInfo.update(s.state),super.renderChildren(s)}createRenderParams(s){const i=super.createRenderParams(s);return i.rendererInfo=this._rendererInfo,i.attributeView=this.attributeView,i}onAttributeStoreUpdate(){}_processMaterialItemRequest(s,{items:i,abortOptions:r,resolver:e}){const{painter:n,pixelRatio:u}=s,c=i.map(a=>n.textureManager.rasterizeItem(a.symbol,u,a.glyphIds,r));Promise.all(c).then(a=>{if(!this.stage)return void e.reject();const v=a.map((l,g)=>({id:i[g].id,mosaicItem:l}));e.resolve(v)},e.reject)}}},26268:(I,T,t)=>{t.d(T,{Z:()=>O});var m=t(8314),C=t(39406),p=t(44589),R=t(8650),h=t(13382);const d=(E,o)=>E.key.level-o.key.level!=0?E.key.level-o.key.level:E.key.row-o.key.row!=0?E.key.row-o.key.row:E.key.col-o.key.col;class O extends p.Z{constructor(o){super(),this._tileInfoView=o}renderChildren(o){this.sortChildren(d),this.setStencilReference(o),super.renderChildren(o)}createRenderParams(o){const{state:f}=o,y=super.createRenderParams(o);return y.requiredLevel=this._tileInfoView.getClosestInfoForScale(f.scale).level,y.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(f.scale),y}prepareRenderPasses(o){const f=super.prepareRenderPasses(o);return f.push(o.registerRenderPass({name:"stencil",brushes:[h.Z],drawPhase:C.jx.DEBUG|C.jx.MAP|C.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,m.Z)("esri-tiles-debug")&&f.push(o.registerRenderPass({name:"tileInfo",brushes:[R.Z],drawPhase:C.jx.DEBUG,target:()=>this.children})),f}getStencilTarget(){return this.children}setStencilReference(o){let f=1;for(const y of this.children)y.stencilRef=f++}}},11349:(I,T,t)=>{t.r(T),t.d(T,{default:()=>u});var m=t(17626),C=t(91558),p=t(88879),R=t(62208),h=t(32917),d=t(77712),f=(t(90912),t(85931),t(8314),t(76898)),y=t(51470),M=t(79608),L=t(86810);let S=class extends((0,M.J)(L.wq)){constructor(c){super(c),this.frameCenter=null,this.frameOutline=null,this.lineOfSight=null,this.sensorLocation=null,this.sensorTrail=null}};(0,m._)([(0,d.Cb)({type:Boolean})],S.prototype,"frameCenter",void 0),(0,m._)([(0,d.Cb)({type:Boolean})],S.prototype,"frameOutline",void 0),(0,m._)([(0,d.Cb)({type:Boolean})],S.prototype,"lineOfSight",void 0),(0,m._)([(0,d.Cb)({type:Boolean})],S.prototype,"sensorLocation",void 0),(0,m._)([(0,d.Cb)({type:Boolean})],S.prototype,"sensorTrail",void 0),S=(0,m._)([(0,f.j)("esri.layers.support.TelemetryDisplay")],S);const D=S;var V=t(37384),s=t(36275),i=t(78209),r=t(45611);const e=new C.Z([255,127,0]);let n=class extends((0,V.y)(r.Z)){constructor(){super(...arguments),this._graphicsLayer=new y.Z,this._frameOutlineGraphic=new p.Z({symbol:{type:"simple-fill",outline:{type:"simple-line",color:e}}}),this._sensorTrailGraphic=new p.Z({symbol:{type:"simple-line",color:e}}),this._lineOfSightGraphic=new p.Z({symbol:{type:"simple-line",color:e}}),this._sensorLocationGraphic=new p.Z({symbol:{type:"simple-marker",color:e}}),this._frameCenterGraphic=new p.Z({symbol:{type:"simple-marker",color:e}}),this.layer=null,this.symbolColor=e,this.visibleTelemetryElements=null}destroy(){this._graphicsLayer=(0,R.SC)(this._graphicsLayer)}initialize(){this.addHandles((0,h.YP)(()=>this.symbolColor,()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor},h.nn)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new D({frameCenter:this.layer.telemetryDisplay?.frameCenter??!0,frameOutline:this.layer.telemetryDisplay?.frameOutline??!0,lineOfSight:this.layer.telemetryDisplay?.lineOfSight??!0,sensorLocation:this.layer.telemetryDisplay?.sensorLocation??!0,sensorTrail:this.layer.telemetryDisplay?.sensorTrail??!0})}attach(){this.graphicsView=new i.Z({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new s.Z(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([(0,h.YP)(()=>[this.layer.telemetryDisplay?.frameCenter,this.layer.telemetryDisplay?.frameOutline,this.layer.telemetryDisplay?.sensorLocation,this.layer.telemetryDisplay?.sensorTrail,this.layer.telemetryDisplay?.lineOfSight],()=>this._updateVisibleTelemetryElements(),h.nn),(0,h.YP)(()=>[this.layer.telemetry,this.visibleTelemetryElements?.frameCenter,this.visibleTelemetryElements?.frameOutline,this.visibleTelemetryElements?.sensorLocation,this.visibleTelemetryElements?.sensorTrail,this.visibleTelemetryElements?.lineOfSight],()=>this._updateGraphicGeometries(),h.nn)])}detach(){this.container.removeAllChildren(),this.graphicsView=(0,R.SC)(this.graphicsView)}supportsSpatialReference(c){return!0}moveStart(){}moveEnd(){}viewChange(){this.graphicsView.viewChange()}update(c){this.graphicsView.processUpdate(c)}isUpdating(){return!this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail)}_updateGraphicGeometries(){const{telemetry:c}=this.layer,{visibleTelemetryElements:a}=this;c&&a&&(this._frameOutlineGraphic.geometry=a.frameOutline&&c.frameOutline?this.layer.telemetry.frameOutline:null,this._sensorTrailGraphic.geometry=a.sensorTrail&&c.sensorTrail?this.layer.telemetry.sensorTrail:null,this._lineOfSightGraphic.geometry=a.lineOfSight&&c.lineOfSight?this.layer.telemetry.lineOfSight:null,this._sensorLocationGraphic.geometry=a.sensorLocation&&c.sensorLocation?this.layer.telemetry.sensorLocation:null,this._frameCenterGraphic.geometry=a.frameCenter&&c.frameCenter?this.layer.telemetry.frameCenter:null)}};(0,m._)([(0,d.Cb)()],n.prototype,"graphicsView",void 0),(0,m._)([(0,d.Cb)()],n.prototype,"layer",void 0),(0,m._)([(0,d.Cb)()],n.prototype,"symbolColor",void 0),(0,m._)([(0,d.Cb)({type:D})],n.prototype,"visibleTelemetryElements",void 0),n=(0,m._)([(0,f.j)("esri.views.2d.layers.VideoLayerView2D")],n);const u=n},55051:(I,T,t)=>{t.d(T,{Z:()=>s});var m=t(62208),C=t(47123),p=t(30217),R=t(49966),h=t(9545),d=t(14658),O=t(93555),E=t(57477),o=t(87526),f=t(83994),y=t(67969),M=t(49353);const L=Math.PI/180;class D extends E.s{constructor(r){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=(0,R.c)(),this._localOrigin={x:0,y:0},this._getBounds=r}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,m.M2)(this._program)}doRender(r){const{context:e}=r,n=this._getBounds();if(n.length<1)return;this._createShaderProgram(e),this._updateMatricesAndLocalOrigin(r),this._updateBufferData(e,n),e.setBlendingEnabled(!0),e.setDepthTestEnabled(!1),e.setStencilWriteMask(0),e.setStencilTestEnabled(!1),e.setBlendFunction(y.zi.ONE,y.zi.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0);const u=this._program;e.bindVAO(this._vao),e.useProgram(u),u.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),e.gl.lineWidth(1),e.drawElements(y.MX.LINES,8*n.length,y.g.UNSIGNED_INT,0),e.bindVAO()}_createTransforms(){return{dvs:(0,R.c)()}}_createShaderProgram(r){this._program||(this._program=r.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",V().attributes))}_updateMatricesAndLocalOrigin(r){const{state:e}=r,{displayMat3:n,size:u,resolution:c,pixelRatio:a,rotation:v,viewpoint:l}=e,g=L*v,{x:b,y:A}=l.targetGeometry,B=(0,O.or)(b,e.spatialReference);this._localOrigin.x=B,this._localOrigin.y=A;const P=a*u[0],G=a*u[1],z=c*P,U=c*G,x=(0,p.g)(this._dvsMat3);(0,p.m)(x,x,n),(0,p.h)(x,x,(0,h.f)(P/2,G/2)),(0,p.c)(x,x,(0,d.f)(u[0]/z,-G/U,1)),(0,p.r)(x,x,-g)}_updateBufferData(r,e){const{x:n,y:u}=this._localOrigin,a=new Float32Array(8*e.length),v=new Uint32Array(8*e.length);let l=0,g=0;for(const b of e)b&&(a[2*l]=b[0]-n,a[2*l+1]=b[1]-u,a[2*l+2]=b[0]-n,a[2*l+3]=b[3]-u,a[2*l+4]=b[2]-n,a[2*l+5]=b[3]-u,a[2*l+6]=b[2]-n,a[2*l+7]=b[1]-u,v[g]=l+0,v[g+1]=l+3,v[g+2]=l+3,v[g+3]=l+2,v[g+4]=l+2,v[g+5]=l+1,v[g+6]=l+1,v[g+7]=l+0,l+=4,g+=8);if(this._vertexBuffer?this._vertexBuffer.setData(a.buffer):this._vertexBuffer=f.f.createVertex(r,y.l1.DYNAMIC_DRAW,a.buffer),this._indexBuffer?this._indexBuffer.setData(v):this._indexBuffer=f.f.createIndex(r,y.l1.DYNAMIC_DRAW,v),!this._vao){const b=V();this._vao=new M.U(r,b.attributes,b.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const V=()=>(0,o.cM)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:y.g.FLOAT}]});let s=class extends C.T{constructor(i){super(i),this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=(0,m.SC)(this._boundsRenderer)}enableRenderingBounds(i){this._boundsRenderer=new D(i),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(i,r){i.patch(r),this.contains(i)||this.addChild(i),this.requestRender()}onTileError(i){i.clear(),this.contains(i)||this.addChild(i)}_renderChildren(i,r){for(const e of this.children)e.isReady&&e.hasData&&(e.commit(i),i.context.setStencilFunction(y.wb.EQUAL,e.stencilRef,255),e.getDisplayList().replay(i,e,r))}}},36275:(I,T,t)=>{t.d(T,{Z:()=>p});var m=t(39406),C=t(55051);class p extends C.Z{renderChildren(h){this.attributeView.update(),this.children.some(d=>d.hasData)&&(this.attributeView.bindTextures(h.context,!1),super.renderChildren(h),h.drawPhase===m.jx.MAP&&this._renderChildren(h),this.hasHighlight&&h.drawPhase===m.jx.HIGHLIGHT&&this._renderHighlight(h),this._boundsRenderer&&this._boundsRenderer.doRender(h))}_renderHighlight(h){const{painter:d}=h,O=d.effects.highlight;O.bind(h),this._renderChildren(h,O.defines),O.draw(h),O.unbind()}}}}]);