"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[5775],{83994:(F,O,o)=>{o.d(O,{f:()=>a});var B=o(15861),N=o(85931),R=o(63290),f=o(55713),A=o(81653),E=o(80738),h=o(67969);const i=R.Z.getLogger("esri.views.webgl.BufferObject");class a{static createIndex(s,n,_){return new a(s,h.w0.ELEMENT_ARRAY_BUFFER,n,_)}static createVertex(s,n,_){return new a(s,h.w0.ARRAY_BUFFER,n,_)}static createUniform(s,n,_){if(s.type!==E.zO.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new a(s,h.w0.UNIFORM_BUFFER,n,_)}static createPixelPack(s,n=h.l1.STREAM_READ,_){if(s.type!==E.zO.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");const u=new a(s,h.w0.PIXEL_PACK_BUFFER,n);return _&&u.setSize(_),u}static createPixelUnpack(s,n=h.l1.STREAM_DRAW,_){if(s.type!==E.zO.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new a(s,h.w0.PIXEL_UNPACK_BUFFER,n,_)}constructor(s,n,_,u){this._context=s,this.bufferType=n,this.usage=_,this._glName=null,this._size=-1,this._indexType=void 0,s.instanceCounter.increment(h._g.BufferObject,this),this._glName=this._context.gl.createBuffer(),(0,A.zu)(this._context.gl),u&&this.setData(u)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteLength(){return this.bufferType===h.w0.ELEMENT_ARRAY_BUFFER?this._indexType===h.g.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===h.w0.ELEMENT_ARRAY_BUFFER||this.bufferType===h.w0.ARRAY_BUFFER}dispose(){this._context?.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(h._g.BufferObject,this),this._context=null):this._glName&&i.warn("Leaked WebGL buffer object")}setSize(s,n=null){if(s<=0&&i.error("Buffer size needs to be positive!"),this.bufferType===h.w0.ELEMENT_ARRAY_BUFFER&&null!=n)switch(this._indexType=n,n){case h.g.UNSIGNED_SHORT:s*=2;break;case h.g.UNSIGNED_INT:s*=4}this._setBufferData(s)}setData(s){if(!s)return;let n=s.byteLength;this.bufferType===h.w0.ELEMENT_ARRAY_BUFFER&&((0,f.Uc)(s)&&(n/=2,this._indexType=h.g.UNSIGNED_SHORT),(0,f.ZY)(s)&&(n/=4,this._indexType=h.g.UNSIGNED_INT)),this._setBufferData(n,s)}_setBufferData(s,n=null){this._size=s;const _=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const u=this._context.gl;u.bufferData(this.bufferType,null!=n?n:s,this.usage),(0,A.zu)(u),this._isVAOAware&&this._context.bindVAO(_)}setSubData(s,n,_,u){if(!s)return;(n<0||n*s.BYTES_PER_ELEMENT>=this.byteLength)&&i.error("offset is out of range!"),_>=u&&i.error("end must be bigger than start!"),(n+(u-_))*s.BYTES_PER_ELEMENT>this.byteLength&&i.error("An attempt to write beyond the end of the buffer!");const p=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const x=this._context.gl;if(this._context.type===E.zO.WEBGL2)x.bufferSubData(this.bufferType,n*s.BYTES_PER_ELEMENT,s,_,u-_);else{const C=0===_&&u===s.length?s:s.subarray(_,u);x.bufferSubData(this.bufferType,n*s.BYTES_PER_ELEMENT,C)}(0,A.zu)(x),this._isVAOAware&&this._context.bindVAO(p)}getSubData(s,n=0,_,u){if(this._context.type!==E.zO.WEBGL2)return void i.error("Get buffer subdata is supported in WebGL2 only!");if(_<0||u<0)return void i.error("Problem getting subdata: offset and length were less than zero!");const p=function g(m){return(0,N.zG)(m)}(s)?s.BYTES_PER_ELEMENT:1;if(p*((_??0)+(u??0))>s.byteLength)return void i.error("Problem getting subdata: offset and length exceeded destination size!");n+p*(u??0)>this.byteLength&&i.warn("Potential problem getting subdata: requested data exceeds buffer size!");const x=this._context.gl;this._context.bindBuffer(this,h.w0.COPY_READ_BUFFER),x.getBufferSubData(h.w0.COPY_READ_BUFFER,n,s,_,u),this._context.unbindBuffer(h.w0.COPY_READ_BUFFER)}getSubDataAsync(s,n=0,_,u){var p=this;return(0,B.Z)(function*(){p._context.type===E.zO.WEBGL2?(yield p._context.clientWaitAsync(),p.getSubData(s,n,_,u)):i.error("Get buffer subdata is supported in WebGL2 only!")})()}}},85775:(F,O,o)=>{o.d(O,{X:()=>n});var B=o(15861),R=(o(8314),o(63290)),f=o(62208),A=o(83994),E=o(81653),h=o(80738),i=o(67969),a=o(72787),g=o(49266),m=o(18952);const s=R.Z.getLogger("esri.views.webgl.FramebufferObject");class n{constructor(t,e,r=null){this._context=t,this._glName=null,this._colorAttachments=new Map,this._depthStencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,t.instanceCounter.increment(i._g.FramebufferObject,this);const c=_(e)?e:new m.x(this._context,e);if(this._colorAttachments.set(i.VY.COLOR_ATTACHMENT0,c),this._validateTextureDescriptor(c.descriptor),this._validateColorAttachmentPoint(i.VY.COLOR_ATTACHMENT0),null!=r)if(function p(l){return _(l)||null!=l&&"pixelFormat"in l}(r))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),this._depthStencilTexture=_(r)?r:new m.x(this._context,r),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else{const d=function u(l){return null!=l&&"type"in l&&l.type===a.B.RenderBuffer}(r)?r:new g.r(this._context,r);this._depthStencilBuffer=d,this._validateRenderBufferDescriptor(d.descriptor)}}dispose(){if(0===this._colorAttachments.size&&!this._glName)return;const t=this._context.getBoundFramebufferObject();this._colorAttachments.forEach((e,r)=>this.detachColorTexture(r)?.dispose()),this.detachDepthStencilBuffer()?.dispose(),this.detachDepthStencilTexture()?.dispose(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(i._g.FramebufferObject,this)}get glName(){return this._glName}get colorTexture(){return this._colorAttachments.get(i.VY.COLOR_ATTACHMENT0)}get depthStencil(){return this._depthStencilTexture||this._depthStencilBuffer}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._colorAttachments.get(i.VY.COLOR_ATTACHMENT0)?.descriptor?.width??0}get height(){return this._colorAttachments.get(i.VY.COLOR_ATTACHMENT0)?.descriptor?.height??0}get gpuMemoryUsage(){return[...this._colorAttachments].reduce((t,[e,r])=>t+r.gpuMemoryUsage,this.depthStencil?.gpuMemoryUsage??0)}getColorTexture(t){const e=this._colorAttachments.get(t);return e&&_(e)?e:null}get colorAttachments(){return[...this._colorAttachments.keys()]}attachColorTexture(t,e=i.VY.COLOR_ATTACHMENT0){t&&(this._validateColorAttachmentPoint(e),this._validateTextureDescriptor(t.descriptor),this.detachColorTexture(e)?.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,e)),this._colorAttachments.set(e,t))}detachColorTexture(t=i.VY.COLOR_ATTACHMENT0){const e=this._colorAttachments.get(t);if(e){if(this._initialized){const r=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t),this._context.bindFramebuffer(r)}return this._colorAttachments.delete(t),e}}setColorTextureTarget(t,e=i.VY.COLOR_ATTACHMENT0){const r=this._colorAttachments.get(e);r&&this._framebufferTexture2D(r.glName,e,t)}attachDepthStencil(t){if(t)switch(t.type){case a.B.Texture:return this._attachDepthStencilTexture(t);case a.B.RenderBuffer:return this._attachDepthStencilBuffer(t)}}_attachDepthStencilTexture(t){if(null==t)return;const e=t.descriptor;e.pixelFormat!==i.VI.DEPTH_STENCIL&&e.pixelFormat!==i.VI.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),e.dataType!==i.Br.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,i.Lu)),this._depthStencilTexture?.dispose(),this._depthStencilTexture=t}detachDepthStencilTexture(){const t=this._depthStencilTexture;return t&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,i.Lu)),this._depthStencilTexture=null,t}_attachDepthStencilBuffer(t){if(null==t)return;const e=t.descriptor;if(this._validateRenderBufferDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const r=this._context.gl,c=this._getGLAttachmentPoint(e);r.framebufferRenderbuffer(i.qi.FRAMEBUFFER,c,r.RENDERBUFFER,t.glName)}this._depthStencilBuffer=t}detachDepthStencilBuffer(){const t=this._depthStencilBuffer;if(t&&this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl,r=this._getGLAttachmentPoint(t.descriptor);e.framebufferRenderbuffer(i.qi.FRAMEBUFFER,r,e.RENDERBUFFER,null)}return this._depthStencilBuffer=null,t}copyToTexture(t,e,r,c,d,D,b){(t<0||e<0||d<0||D<0)&&console.error("Offsets cannot be negative!"),(r<=0||c<=0)&&console.error("Copy width and height must be greater than zero!");const T=b.descriptor;b.descriptor.target!==i.No.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(null==T?.width||null==T?.height||t+r>this.width||e+c>this.height||d+r>T.width||D+c>T.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const M=this._context,S=M.bindTexture(b,m.x.TEXTURE_UNIT_FOR_UPDATES);M.setActiveTexture(m.x.TEXTURE_UNIT_FOR_UPDATES),M.bindFramebuffer(this),M.gl.copyTexSubImage2D(i.No.TEXTURE_2D,0,d,D,t,e,r,c),M.bindTexture(S,m.x.TEXTURE_UNIT_FOR_UPDATES)}readPixels(t,e,r,c,d,D,b){(r<=0||c<=0)&&console.error("Copy width and height must be greater than zero!"),b||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(t,e,r,c,d,D,b)}readPixelsAsync(t,e,r,c,d,D,b){var T=this;return(0,B.Z)(function*(){if(T._context.type!==h.zO.WEBGL2)return(0,E.hZ)()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void T.readPixels(t,e,r,c,d,D,b);const M=T._context.gl,S=A.f.createPixelPack(T._context,i.l1.STREAM_READ,b.byteLength);T._context.bindBuffer(S),T._context.bindFramebuffer(T),M.readPixels(t,e,r,c,d,D,0),T._context.unbindBuffer(i.w0.PIXEL_PACK_BUFFER),yield S.getSubDataAsync(b),S.dispose()})()}resize(t,e){if(this.width===t&&this.height===e)return;const r={width:t,height:e};x(r,this._context.parameters.maxTextureSize),this._colorAttachments.forEach(c=>c.resize(r.width,r.height)),this._depthStencilTexture?.resize(r.width,r.height),this._initialized&&(x(r,this._context.parameters.maxRenderbufferSize),this._depthStencilBuffer?.resize(r.width,r.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1)}initializeAndBind(t=i.qi.FRAMEBUFFER){const e=this._context.gl;if(this._initialized)return void e.bindFramebuffer(t,this.glName);this._glName&&e.deleteFramebuffer(this._glName);const r=e.createFramebuffer();if(e.bindFramebuffer(t,r),this._colorAttachments.forEach((c,d)=>this._framebufferTexture2D(c.glName,d,C(c),t)),this._depthStencilBuffer){const c=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);e.framebufferRenderbuffer(t,c,e.RENDERBUFFER,this._depthStencilBuffer.glName)}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,e.DEPTH_STENCIL_ATTACHMENT,C(this._depthStencilTexture),t);(0,E.hZ)()&&e.checkFramebufferStatus(t)!==e.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=r,this._initialized=!0}_framebufferTexture2D(t,e=i.VY.COLOR_ATTACHMENT0,r=i.No.TEXTURE_2D,c=i.qi.FRAMEBUFFER,d=0){this._context.gl.framebufferTexture2D(c,e,r,t,d)}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthStencilBuffer){if(this._initialized){this._context.bindFramebuffer(this);const e=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);t.framebufferRenderbuffer(i.qi.FRAMEBUFFER,e,t.RENDERBUFFER,null)}this._depthStencilBuffer=(0,f.M2)(this._depthStencilBuffer)}this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=(0,f.M2)(this._depthStencilTexture))}_validateTextureDescriptor(t){t.target!==i.No.TEXTURE_2D&&t.target!==i.No.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),x(t,this._context.parameters.maxTextureSize),this._validateBufferDimensions(t)}_validateRenderBufferDescriptor(t){x(t,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(t)}_validateBufferDimensions(t){t.width<=0&&(t.width=this.width),t.height<=0&&(t.height=this.height),this.width>0&&this.height>0&&(this.width===t.width&&this.height===t.height||console.error("Attachment size must match framebuffer size!"))}_getGLAttachmentPoint(t){switch(t.internalFormat){case i.Tg.DEPTH_COMPONENT16:case i.Tg.DEPTH_COMPONENT24:case i.Tg.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case i.Tg.DEPTH24_STENCIL8:case i.Tg.DEPTH32F_STENCIL8:case i.Tg.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case i.Tg.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}_validateColorAttachmentPoint(t){if(-1===n._MAX_COLOR_ATTACHMENTS){const r=this._context.capabilities.drawBuffers;n._MAX_COLOR_ATTACHMENTS=r?this._context.gl.getParameter(r.MAX_COLOR_ATTACHMENTS):1}const e=t-i.VY.COLOR_ATTACHMENT0;e+1>n._MAX_COLOR_ATTACHMENTS&&R.Z.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${e+1}. Implementation supports up to ${n._MAX_COLOR_ATTACHMENTS} color attachments`)}}function _(l){return null!=l&&"type"in l&&l.type===a.B.Texture}function x(l,t){const e=Math.max(l.width,l.height);if(e>t){s.warn(`Resizing FBO attachment size ${l.width}x${l.height} to device limit ${t}`);const r=t/e;return l.width=Math.round(l.width*r),l.height=Math.round(l.height*r),!1}return!0}function C(l){return l.descriptor.target===i.No.TEXTURE_CUBE_MAP?i.No.TEXTURE_CUBE_MAP_POSITIVE_X:i.No.TEXTURE_2D}n._MAX_COLOR_ATTACHMENTS=-1},49266:(F,O,o)=>{o.d(O,{r:()=>A});var B=o(80738),N=o(67969),R=o(72787),f=o(20781);class A{constructor(h,i){this._context=h,this._descriptor=i,this.type=R.B.RenderBuffer,this._context.instanceCounter.increment(N._g.Renderbuffer,this);const a=this._context.gl;this.glName=a.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:g,height:m,internalFormat:s,multisampled:n}=i;if(n){if(this._context.type!==B.zO.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");a.renderbufferStorageMultisample(a.RENDERBUFFER,this.samples,s,g,m)}else a.renderbufferStorage(a.RENDERBUFFER,s,g,m)}get descriptor(){return this._descriptor}get samples(){const h=this._descriptor.samples,i=this._context.parameters.maxSamples;return h?Math.min(h,i):i}get gpuMemoryUsage(){return(0,f.G)(this._descriptor)}resize(h,i){const a=this._descriptor;if(a.width===h&&a.height===i)return;a.width=h,a.height=i;const g=this._context.gl;this._context.bindRenderbuffer(this),a.multisampled?g.renderbufferStorageMultisample(g.RENDERBUFFER,this.samples,a.internalFormat,a.width,a.height):g.renderbufferStorage(g.RENDERBUFFER,a.internalFormat,a.width,a.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(N._g.Renderbuffer,this),this._context=null)}}},20781:(F,O,o)=>{o.d(O,{G:()=>R,Y:()=>N});var B=o(26906);class N{constructor(A,E,h=E){this.internalFormat=A,this.width=E,this.height=h,this.multisampled=!1,this.samples=1}}function R(f){return f.width<=0||f.height<=0||null==f.internalFormat?0:f.width*f.height*(0,B.RG)(f.internalFormat)}}}]);