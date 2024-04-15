"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[6899],{47123:(S,R,e)=>{e.d(R,{T:()=>A});var E=e(15861),M=e(10699),y=e(35133),P=e(28082),v=e(26268),g=e(23841),p=e(16730),C=e(21254),c=e(87526),f=e(17807),_=e(25575),b=e(31637);function O(I,t){const i=t.length;if(I<t[0].value||1===i)return t[0].size;for(let n=1;n<i;n++)if(I<t[n].value)return t[n-1].size+(I-t[n-1].value)/(t[n].value-t[n-1].value)*(t[n].size-t[n-1].size);return t[i-1].size}class D{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.outsideLabelsVisible=!1,this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=f.v}getSizeVVFieldStops(t){const i=this._vvSizeFieldStops;if(i)switch(i.type){case"static":return i;case"level-dependent":return i.levels[t]??(()=>{let n=1/0,a=0;for(const r in i.levels){const d=parseFloat(r),l=Math.abs(t-d);l<n&&(n=l,a=d)}if(n===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const s=2**((t-a)/2),o=i.levels[a],h=new Float32Array(o.values);return h[2]*=s,h[3]*=s,{sizes:o.sizes,values:h}})();default:return}}get vvMaterialParameters(){return this._vvMaterialParameters}update(t){null!=this._vvInfo&&this._updateVisualVariables(this._vvInfo.vvRanges,t)}setInfo(t,i,n){this._updateEffects(n),this._vvInfo=i,this._technique=(0,_.EJ)(t),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,t)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:(0,b.hc)("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(t){this.outsideLabelsVisible=null!=t&&t.excludedLabelsVisible}_updateVisualVariables(t,i){const n=this._vvMaterialParameters;if(n.vvOpacityEnabled=!1,n.vvSizeEnabled=!1,n.vvColorEnabled=!1,n.vvRotationEnabled=!1,!t)return;const a=t.size;if(a){if(n.vvSizeEnabled=!0,a.minMaxValue){const r=a.minMaxValue;let d,l;if((0,c.$K)(r.minSize)&&(0,c.$K)(r.maxSize))if((0,c.hj)(r.minSize)&&(0,c.hj)(r.maxSize))d=(0,g.F2)(r.minSize),l=(0,g.F2)(r.maxSize);else{const u=i.scale;d=(0,g.F2)(O(u,r.minSize.stops)),l=(0,g.F2)(O(u,r.maxSize.stops))}this.vvSizeMinMaxValue.set([r.minDataValue,r.maxDataValue,d,l])}if(a.scaleStops&&(this.vvSizeScaleStopsValue=(0,g.F2)(O(i.scale,a.scaleStops.stops))),a.unitValue){const r=(0,p.c9)(i.spatialReference)/C.a[a.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=r/i.resolution}a.fieldStops&&(this._vvSizeFieldStops=a.fieldStops)}const s=t.color;s&&(n.vvColorEnabled=!0,this.vvColorValues.set(s.values),this.vvColors.set(s.colors));const o=t.opacity;o&&(n.vvOpacityEnabled=!0,this.vvOpacityValues.set(o.values),this.vvOpacities.set(o.opacities));const h=t.rotation;h&&(n.vvRotationEnabled=!0,n.vvRotationType=h.type)}}class A extends v.Z{constructor(t){super(t),this._rendererInfo=new D,this._materialItemsRequestQueue=new y.Z,this.attributeView=new P.H(()=>this.onAttributeStoreUpdate())}destroy(){this.children.forEach(t=>t.destroy()),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(t,i,n){this._rendererInfo.setInfo(t,i,n),this.requestRender()}getMaterialItems(t,i){var n=this;return(0,E.Z)(function*(){if(!t||0===t.length)return[];const a=(0,M.hh)();return n._materialItemsRequestQueue.push({items:t,abortOptions:i,resolver:a}),n.requestRender(),a.promise})()}doRender(t){if(t.context.capabilities.enable("textureFloat"),t.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let i=this._materialItemsRequestQueue.pop();for(;i;)this._processMaterialItemRequest(t,i),i=this._materialItemsRequestQueue.pop()}super.doRender(t)}renderChildren(t){for(const i of this.children)i.commit(t);this._rendererInfo.update(t.state),super.renderChildren(t)}createRenderParams(t){const i=super.createRenderParams(t);return i.rendererInfo=this._rendererInfo,i.attributeView=this.attributeView,i}onAttributeStoreUpdate(){}_processMaterialItemRequest(t,{items:i,abortOptions:n,resolver:a}){const{painter:s,pixelRatio:o}=t,h=i.map(r=>s.textureManager.rasterizeItem(r.symbol,o,r.glyphIds,n));Promise.all(h).then(r=>{if(!this.stage)return void a.reject();const d=r.map((l,u)=>({id:i[u].id,mosaicItem:l}));a.resolve(d)},a.reject)}}},26268:(S,R,e)=>{e.d(R,{Z:()=>p});var E=e(8314),M=e(39406),y=e(44589),P=e(8650),v=e(13382);const g=(C,c)=>C.key.level-c.key.level!=0?C.key.level-c.key.level:C.key.row-c.key.row!=0?C.key.row-c.key.row:C.key.col-c.key.col;class p extends y.Z{constructor(c){super(),this._tileInfoView=c}renderChildren(c){this.sortChildren(g),this.setStencilReference(c),super.renderChildren(c)}createRenderParams(c){const{state:f}=c,_=super.createRenderParams(c);return _.requiredLevel=this._tileInfoView.getClosestInfoForScale(f.scale).level,_.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(f.scale),_}prepareRenderPasses(c){const f=super.prepareRenderPasses(c);return f.push(c.registerRenderPass({name:"stencil",brushes:[v.Z],drawPhase:M.jx.DEBUG|M.jx.MAP|M.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,E.Z)("esri-tiles-debug")&&f.push(c.registerRenderPass({name:"tileInfo",brushes:[P.Z],drawPhase:M.jx.DEBUG,target:()=>this.children})),f}getStencilTarget(){return this.children}setStencilReference(c){let f=1;for(const _ of this.children)_.stencilRef=f++}}},36899:(S,R,e)=>{e.r(R),e.d(R,{default:()=>a});var E=e(15861),M=e(17626),y=e(88879),P=e(85931),v=e(74333),g=e(54024),p=e(32917),b=(e(63290),e(90912),e(8314),e(26584),e(76898)),O=e(37384),D=e(36275),A=e(78209),I=e(45611);const t="sublayers",i="layerView";let n=class extends((0,O.y)(I.Z)){constructor(){super(...arguments),this._highlightIds=new Map}fetchPopupFeatures(s){var o=this;return(0,E.Z)(function*(){return Array.from(o.graphicsViews(),h=>h.hitTest(s).filter(r=>!!r.popupTemplate)).flat()})()}*graphicsViews(){null==this._graphicsViewsFeatureCollectionMap?null==this._graphicsViews?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}hitTest(s,o){var h=this;return(0,E.Z)(function*(){return Array.from(h.graphicsViews(),r=>{const d=r.hitTest(s);if(null!=h._graphicsViewsFeatureCollectionMap){const l=h._graphicsViewsFeatureCollectionMap.get(r);for(const u of d)!u.popupTemplate&&l.popupTemplate&&(u.popupTemplate=l.popupTemplate),u.sourceLayer=u.layer=h.layer}return d}).flat().map(r=>({type:"graphic",graphic:r,layer:h.layer,mapPoint:s}))})()}highlight(s){let o;"number"==typeof s?o=[s]:s instanceof y.Z?o=[s.uid]:Array.isArray(s)&&s.length>0?o="number"==typeof s[0]?s:s.map(r=>r&&r.uid):v.Z.isCollection(s)&&(o=s.map(r=>r&&r.uid).toArray());const h=o?.filter(P.pC);return h?.length?(this._addHighlight(h),(0,g.kB)(()=>this._removeHighlight(h))):(0,g.kB)()}update(s){for(const o of this.graphicsViews())o.processUpdate(s)}attach(){const s=this.view,o=()=>this.requestUpdate(),h=this.layer.featureCollections;if(null!=h&&h.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const r of h){const d=new D.Z(this.view.featuresTilingScheme),l=new A.Z({view:s,graphics:r.source,renderer:r.renderer,requestUpdateCallback:o,container:d});this._graphicsViewsFeatureCollectionMap.set(l,r),this.container.addChild(l.container),this.addHandles([(0,p.YP)(()=>r.visible,u=>l.container.visible=u,p.nn),(0,p.YP)(()=>l.updating,()=>this.notifyChange("updating"),p.nn)],i)}this._updateHighlight()}else null!=this.layer.sublayers&&this.addHandles((0,p.on)(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),t)}detach(){this._destroyGraphicsViews(),this.removeHandles(t)}moveStart(){}moveEnd(){}viewChange(){for(const s of this.graphicsViews())s.viewChange()}isUpdating(){for(const s of this.graphicsViews())if(s.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(i);for(const s of this.graphicsViews())s.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),null==this.layer.sublayers)return;const s=[],o=this.view,h=()=>this.requestUpdate();for(const r of this.layer.sublayers){const d=new D.Z(this.view.featuresTilingScheme);d.fadeTransitionEnabled=!0;const l=new A.Z({view:o,graphics:r.graphics,requestUpdateCallback:h,container:d});this.addHandles([r.on("graphic-update",l.graphicUpdateHandler),(0,p.YP)(()=>r.visible,u=>l.container.visible=u,p.nn),(0,p.YP)(()=>l.updating,()=>this.notifyChange("updating"),p.nn)],i),this.container.addChild(l.container),s.push(l)}this._graphicsViews=s,this._updateHighlight()}_addHighlight(s){for(const o of s)if(this._highlightIds.has(o)){const h=this._highlightIds.get(o);this._highlightIds.set(o,h+1)}else this._highlightIds.set(o,1);this._updateHighlight()}_removeHighlight(s){for(const o of s)if(this._highlightIds.has(o)){const h=this._highlightIds.get(o)-1;0===h?this._highlightIds.delete(o):this._highlightIds.set(o,h)}this._updateHighlight()}_updateHighlight(){const s=Array.from(this._highlightIds.keys());for(const o of this.graphicsViews())o.setHighlight(s)}};n=(0,M._)([(0,b.j)("esri.views.2d.layers.MapNotesLayerView2D")],n);const a=n},55051:(S,R,e)=>{e.d(R,{Z:()=>t});var E=e(62208),M=e(47123),y=e(30217),P=e(49966),v=e(9545),g=e(14658),p=e(93555),C=e(57477),c=e(87526),f=e(83994),_=e(67969),b=e(49353);const O=Math.PI/180;class A extends C.s{constructor(n){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=(0,P.c)(),this._localOrigin={x:0,y:0},this._getBounds=n}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,E.M2)(this._program)}doRender(n){const{context:a}=n,s=this._getBounds();if(s.length<1)return;this._createShaderProgram(a),this._updateMatricesAndLocalOrigin(n),this._updateBufferData(a,s),a.setBlendingEnabled(!0),a.setDepthTestEnabled(!1),a.setStencilWriteMask(0),a.setStencilTestEnabled(!1),a.setBlendFunction(_.zi.ONE,_.zi.ONE_MINUS_SRC_ALPHA),a.setColorMask(!0,!0,!0,!0);const o=this._program;a.bindVAO(this._vao),a.useProgram(o),o.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),a.gl.lineWidth(1),a.drawElements(_.MX.LINES,8*s.length,_.g.UNSIGNED_INT,0),a.bindVAO()}_createTransforms(){return{dvs:(0,P.c)()}}_createShaderProgram(n){this._program||(this._program=n.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",I().attributes))}_updateMatricesAndLocalOrigin(n){const{state:a}=n,{displayMat3:s,size:o,resolution:h,pixelRatio:r,rotation:d,viewpoint:l}=a,u=O*d,{x:m,y:B}=l.targetGeometry,L=(0,p.or)(m,a.spatialReference);this._localOrigin.x=L,this._localOrigin.y=B;const x=r*o[0],T=r*o[1],U=h*x,w=h*T,V=(0,y.g)(this._dvsMat3);(0,y.m)(V,V,s),(0,y.h)(V,V,(0,v.f)(x/2,T/2)),(0,y.c)(V,V,(0,g.f)(o[0]/U,-T/w,1)),(0,y.r)(V,V,-u)}_updateBufferData(n,a){const{x:s,y:o}=this._localOrigin,r=new Float32Array(8*a.length),d=new Uint32Array(8*a.length);let l=0,u=0;for(const m of a)m&&(r[2*l]=m[0]-s,r[2*l+1]=m[1]-o,r[2*l+2]=m[0]-s,r[2*l+3]=m[3]-o,r[2*l+4]=m[2]-s,r[2*l+5]=m[3]-o,r[2*l+6]=m[2]-s,r[2*l+7]=m[1]-o,d[u]=l+0,d[u+1]=l+3,d[u+2]=l+3,d[u+3]=l+2,d[u+4]=l+2,d[u+5]=l+1,d[u+6]=l+1,d[u+7]=l+0,l+=4,u+=8);if(this._vertexBuffer?this._vertexBuffer.setData(r.buffer):this._vertexBuffer=f.f.createVertex(n,_.l1.DYNAMIC_DRAW,r.buffer),this._indexBuffer?this._indexBuffer.setData(d):this._indexBuffer=f.f.createIndex(n,_.l1.DYNAMIC_DRAW,d),!this._vao){const m=I();this._vao=new b.U(n,m.attributes,m.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const I=()=>(0,c.cM)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:_.g.FLOAT}]});let t=class extends M.T{constructor(i){super(i),this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=(0,E.SC)(this._boundsRenderer)}enableRenderingBounds(i){this._boundsRenderer=new A(i),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(i,n){i.patch(n),this.contains(i)||this.addChild(i),this.requestRender()}onTileError(i){i.clear(),this.contains(i)||this.addChild(i)}_renderChildren(i,n){for(const a of this.children)a.isReady&&a.hasData&&(a.commit(i),i.context.setStencilFunction(_.wb.EQUAL,a.stencilRef,255),a.getDisplayList().replay(i,a,n))}}},36275:(S,R,e)=>{e.d(R,{Z:()=>y});var E=e(39406),M=e(55051);class y extends M.Z{renderChildren(v){this.attributeView.update(),this.children.some(g=>g.hasData)&&(this.attributeView.bindTextures(v.context,!1),super.renderChildren(v),v.drawPhase===E.jx.MAP&&this._renderChildren(v),this.hasHighlight&&v.drawPhase===E.jx.HIGHLIGHT&&this._renderHighlight(v),this._boundsRenderer&&this._boundsRenderer.doRender(v))}_renderHighlight(v){const{painter:g}=v,p=g.effects.highlight;p.bind(v),this._renderChildren(v,p.defines),p.draw(v),p.unbind()}}}}]);