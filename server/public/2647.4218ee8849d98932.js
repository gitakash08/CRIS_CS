"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[2647],{96160:(Ne,le,T)=>{T.d(le,{D:()=>ve,b:()=>Ge});var L=T(52382),C=T(73132),G=T(13934),H=T(78925),U=T(24255),R=T(60355),N=T(53107),k=T(84833),K=T(72326),Te=T(36603),Se=T(58173),ue=T(21799),F=T(52071),Z=T(75958),pe=T(29052),we=T(57581),me=T(36412),Pe=T(31166),ce=T(10109),Me=T(96395),de=T(98898),Oe=T(92724),Re=T(72968),fe=T(70489),Le=T(1485),He=T(67022),ke=T(72397),st=T(49974),Ue=T(99198),Et=T(97139),gt=T(69960),Pt=T(65787),Ve=T(17625),_t=T(22355),it=T(35387),be=T(44835),We=T(16396);function Ge(ne){const re=new _t.kG,{vertex:Xe,fragment:q,varyings:oe}=re;if((0,Ue.Sv)(Xe,ne),re.include(k.f),oe.add("vpos","vec3"),re.include(Le.k,ne),re.include(R.fQ,ne),re.include(F.L,ne),ne.hasColorTextureTransform&&re.include(fe.av),ne.output===G.H.Color||ne.output===G.H.Alpha){ne.hasNormalTextureTransform&&re.include(fe.NI),ne.hasEmissionTextureTransform&&re.include(fe.R5),ne.hasOcclusionTextureTransform&&re.include(fe.jF),ne.hasMetallicRoughnessTextureTransform&&re.include(fe.DT),(0,Ue.hY)(Xe,ne),re.include(N.O,ne),re.include(U.w,ne);const ge=ne.normalType===N.r.Attribute||ne.normalType===N.r.Compressed;ge&&ne.offsetBackfaces&&re.include(C.w),re.include(pe.Q,ne),re.include(ue.Bb,ne),ne.instancedColor&&re.attributes.add(We.T.INSTANCECOLOR,"vec4"),oe.add("vPositionLocal","vec3"),re.include(Te.D,ne),re.include(L.qj,ne),re.include(K.R,ne),re.include(Se.c,ne),Xe.uniforms.add(new gt.N("externalColor",W=>W.externalColor)),oe.add("vcolorExt","vec4"),ne.multipassEnabled&&oe.add("depth","float"),Xe.code.add(Ve.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${ne.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${Ve.H.float(He.b)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${ge?Ve.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${ne.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${ge&&ne.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${ne.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${ne.hasColorTextureTransform?Ve.H`forwardColorUV();`:""}
        ${ne.hasNormalTextureTransform?Ve.H`forwardNormalUV();`:""}
        ${ne.hasEmissionTextureTransform?Ve.H`forwardEmissiveUV();`:""}
        ${ne.hasOcclusionTextureTransform?Ve.H`forwardOcclusionUV();`:""}
        ${ne.hasMetallicRoughnessTextureTransform?Ve.H`forwardMetallicRoughnessUV();`:""}
      }
    `)}switch(ne.output){case G.H.Alpha:re.include(H.f5,ne),re.include(ke.z,ne),re.include(ce.l,ne),q.uniforms.add(new Pt.p("opacity",ge=>ge.opacity),new Pt.p("layerOpacity",ge=>ge.layerOpacity)),ne.hasColorTexture&&q.uniforms.add(new it.A("tex",ge=>ge.texture)),q.include(st.y),q.code.add(Ve.H`
      void main() {
        discardBySlice(vpos);
        ${ne.multipassEnabled?"terrainDepthTest(depth);":""}
        ${ne.hasColorTexture?Ve.H`
                vec4 texColor = texture(tex, ${ne.hasColorTextureTransform?Ve.H`colorUV`:Ve.H`vuv0`});
                ${ne.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:Ve.H`vec4 texColor = vec4(1.0);`}
        ${ne.hasVertexColors?Ve.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Ve.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case G.H.Color:re.include(H.f5,ne),re.include(me.XP,ne),re.include(we.K,ne),re.include(ke.z,ne),re.include(ne.instancedDoublePrecision?Re.hb:Re.XE,ne),re.include(ce.l,ne),(0,Ue.hY)(q,ne),q.uniforms.add(Xe.uniforms.get("localOrigin"),new Et.J("ambient",ge=>ge.ambient),new Et.J("diffuse",ge=>ge.diffuse),new Pt.p("opacity",ge=>ge.opacity),new Pt.p("layerOpacity",ge=>ge.layerOpacity)),ne.hasColorTexture&&q.uniforms.add(new it.A("tex",ge=>ge.texture)),re.include(Oe.jV,ne),re.include(de.T,ne),q.include(st.y),re.include(Me.k,ne),(0,me.PN)(q),(0,me.sC)(q),(0,Pe.F1)(q),q.code.add(Ve.H`
      void main() {
        discardBySlice(vpos);
        ${ne.multipassEnabled?"terrainDepthTest(depth);":""}
        ${ne.hasColorTexture?Ve.H`
                vec4 texColor = texture(tex, ${ne.hasColorTextureTransform?Ve.H`colorUV`:Ve.H`vuv0`});
                ${ne.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:Ve.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${ne.normalType===N.r.ScreenDerivative?Ve.H`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:Ve.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${ne.pbrMode===Oe.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${ne.receiveShadows?"readShadowMap(vpos, linearDepth)":ne.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${ne.hasVertexColors?Ve.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Ve.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${ne.hasNormalTexture?Ve.H`
                mat3 tangentSpace = ${ne.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${ne.hasNormalTextureTransform?Ve.H`normalUV`:"vuv0"});`:Ve.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${ne.spherical?Ve.H`normalize(posWorld);`:Ve.H`vec3(0.0, 0.0, 1.0);`}

        ${ne.snowCover?Ve.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${ne.pbrMode===Oe.f7.Normal||ne.pbrMode===Oe.f7.Schematic?Ve.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${ne.snowCover?Ve.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:Ve.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${ne.transparencyPassType===be.A.Color?Ve.H`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return re.include(Z.s,ne),re}const ve=Object.freeze(Object.defineProperty({__proto__:null,build:Ge},Symbol.toStringTag,{value:"Module"}))},77133:(Ne,le,T)=>{T.d(le,{R:()=>it,b:()=>_t});var L=T(52382),C=T(73132),G=T(13934),H=T(78925),U=T(24255),R=T(60355),N=T(53107),k=T(84833),K=T(72326),Te=T(36603),Se=T(58173),ue=T(52071),F=T(75958),Z=T(57581),pe=T(36412),we=T(31166),me=T(10109),Pe=T(98898),ce=T(92724),Me=T(72968),de=T(1485),Oe=T(67022),Re=T(72397),fe=T(49974),Le=T(99198),He=T(97139),ke=T(69960),st=T(65787),Ue=T(17625),Et=T(22355),gt=T(35387),Pt=T(44835),Ve=T(16396);function _t(be){const We=new Et.kG,{vertex:Ge,fragment:ve,varyings:ne}=We;return(0,Le.Sv)(Ge,be),We.include(k.f),ne.add("vpos","vec3"),We.include(de.k,be),We.include(R.fQ,be),We.include(ue.L,be),be.output!==G.H.Color&&be.output!==G.H.Alpha||((0,Le.hY)(We.vertex,be),We.include(N.O,be),We.include(U.w,be),be.offsetBackfaces&&We.include(C.w),be.instancedColor&&We.attributes.add(Ve.T.INSTANCECOLOR,"vec4"),ne.add("vNormalWorld","vec3"),ne.add("localvpos","vec3"),be.multipassEnabled&&ne.add("depth","float"),We.include(Te.D,be),We.include(L.qj,be),We.include(K.R,be),We.include(Se.c,be),Ge.uniforms.add(new ke.N("externalColor",re=>re.externalColor)),ne.add("vcolorExt","vec4"),Ge.code.add(Ue.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${be.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${Ue.H.float(Oe.b)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${be.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${be.multipassEnabled?Ue.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),be.output===G.H.Alpha&&(We.include(H.f5,be),We.include(Re.z,be),We.include(me.l,be),ve.uniforms.add(new st.p("opacity",re=>re.opacity),new st.p("layerOpacity",re=>re.layerOpacity)),be.hasColorTexture&&ve.uniforms.add(new gt.A("tex",re=>re.texture)),ve.include(fe.y),ve.code.add(Ue.H`
      void main() {
        discardBySlice(vpos);
        ${be.multipassEnabled?Ue.H`terrainDepthTest(depth);`:""}
        ${be.hasColorTexture?Ue.H`
                vec4 texColor = texture(tex, ${be.hasColorTextureTransform?Ue.H`colorUV`:Ue.H`vuv0`});
                ${be.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:Ue.H`vec4 texColor = vec4(1.0);`}
        ${be.hasVertexColors?Ue.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Ue.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),be.output===G.H.Color&&(We.include(H.f5,be),We.include(pe.XP,be),We.include(Z.K,be),We.include(Re.z,be),We.include(be.instancedDoublePrecision?Me.hb:Me.XE,be),We.include(me.l,be),(0,Le.hY)(We.fragment,be),(0,we.Pe)(ve),(0,pe.PN)(ve),(0,pe.sC)(ve),ve.uniforms.add(Ge.uniforms.get("localOrigin"),Ge.uniforms.get("view"),new He.J("ambient",re=>re.ambient),new He.J("diffuse",re=>re.diffuse),new st.p("opacity",re=>re.opacity),new st.p("layerOpacity",re=>re.layerOpacity)),be.hasColorTexture&&ve.uniforms.add(new gt.A("tex",re=>re.texture)),We.include(ce.jV,be),We.include(Pe.T,be),ve.include(fe.y),(0,we.F1)(ve),ve.code.add(Ue.H`
      void main() {
        discardBySlice(vpos);
        ${be.multipassEnabled?Ue.H`terrainDepthTest(depth);`:""}
        ${be.hasColorTexture?Ue.H`
                vec4 texColor = texture(tex, ${be.hasColorTextureTransform?Ue.H`colorUV`:Ue.H`vuv0`});
                ${be.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:Ue.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${be.pbrMode===ce.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${be.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":be.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${be.hasVertexColors?Ue.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Ue.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${be.snowCover?Ue.H`albedo = mix(albedo, vec3(1), 0.9);`:Ue.H``}
        ${Ue.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${be.pbrMode===ce.f7.Normal||be.pbrMode===ce.f7.Schematic?be.spherical?Ue.H`vec3 normalGround = normalize(vpos + localOrigin);`:Ue.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:Ue.H``}
        ${be.pbrMode===ce.f7.Normal||be.pbrMode===ce.f7.Schematic?Ue.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${be.snowCover?Ue.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:Ue.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${be.transparencyPassType===Pt.A.Color?Ue.H`fragColor = premultiplyAlpha(fragColor);`:Ue.H``}
      }
    `)),We.include(F.s,be),We}const it=Object.freeze(Object.defineProperty({__proto__:null,build:_t},Symbol.toStringTag,{value:"Module"}))},52376:(Ne,le,T)=>{T.d(le,{S:()=>pe,b:()=>ue,g:()=>F});var L=T(67831),C=T(99770),G=T(39523),H=T(47923),U=T(39832),R=T(95285),N=T(65787),k=T(17625),K=T(22355),Te=T(35387);const Se=16;function ue(){const we=new K.kG,me=we.fragment;return we.include(G.k),me.include(H.S),we.include(U.GZ),me.uniforms.add(new N.p("radius",(Pe,ce)=>F(ce.camera))),me.code.add(k.H`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),me.code.add(k.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),me.uniforms.add(new R.A("nearFar",(Pe,ce)=>ce.camera.nearFar),new Te.A("normalMap",Pe=>Pe.normalTexture),new Te.A("depthMap",Pe=>Pe.depthTexture),new N.p("projScale",Pe=>Pe.projScale),new Te.A("rnm",Pe=>Pe.noiseTexture),new R.A("rnmScale",(Pe,ce)=>(0,L.s)(Z,ce.camera.fullWidth/Pe.noiseTexture.descriptor.width,ce.camera.fullHeight/Pe.noiseTexture.descriptor.height)),new N.p("intensity",Pe=>Pe.intensity),new R.A("screenSize",(Pe,ce)=>(0,L.s)(Z,ce.camera.fullWidth,ce.camera.fullHeight))),we.outputs.add("fragOcclusion","float"),me.code.add(k.H`
    void main(void) {
      fillSphere();
      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
        fragOcclusion = 0.0;
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w < 0.5;

      float sum = 0.0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${k.H.int(Se)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          if (texture(normalMap, tcTap).w < 0.5) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${k.H.int(Se)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),we}function F(we){return Math.max(10,20*we.computeScreenPixelSizeAtDist(Math.abs(4*we.relativeElevation)))}const Z=(0,C.a)(),pe=Object.freeze(Object.defineProperty({__proto__:null,build:ue,getRadius:F},Symbol.toStringTag,{value:"Module"}))},86962:(Ne,le,T)=>{T.d(le,{S:()=>F,b:()=>ue});var L=T(84161),C=T(39523),G=T(47923),H=T(32181),U=T(95285),R=T(65787),N=T(17625),k=T(22355),K=T(5864),Te=T(35387);const Se=4;function ue(){const Z=new k.kG,pe=Z.fragment;Z.include(C.k);const we=(Se+1)/2,me=1/(2*we*we);return pe.include(G.S),pe.uniforms.add(new Te.A("depthMap",Pe=>Pe.depthTexture),new K.R("tex",Pe=>Pe.colorTexture),new H.q("blurSize",Pe=>Pe.blurSize),new R.p("projScale",(Pe,ce)=>{const Me=(0,L.o)(ce.camera.eye,ce.camera.center);return Me>5e4?Math.max(0,Pe.projScale-(Me-5e4)):Pe.projScale}),new U.A("nearFar",(Pe,ce)=>ce.camera.nearFar)),pe.code.add(N.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${N.H.float(me)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),Z.outputs.add("fragBlur","float"),pe.code.add(N.H`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${N.H.int(Se)}; r <= ${N.H.int(Se)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),Z}const F=Object.freeze(Object.defineProperty({__proto__:null,build:ue},Symbol.toStringTag,{value:"Module"}))},48977:(Ne,le,T)=>{T.d(le,{a:()=>Pe,c:()=>Oe,g:()=>K,j:()=>_t,k:()=>Me,m:()=>Te,s:()=>k});var L=T(550),C=T(78451),G=T(28093),H=T(39863),U=T(84161),R=T(993);function k(W,$,se){se*=.5;const X=Math.sin(se);return W[0]=X*$[0],W[1]=X*$[1],W[2]=X*$[2],W[3]=Math.cos(se),W}function K(W,$){const se=2*Math.acos($[3]),X=Math.sin(se/2);return X>(0,H.g)()?(W[0]=$[0]/X,W[1]=$[1]/X,W[2]=$[2]/X):(W[0]=1,W[1]=0,W[2]=0),se}function Te(W,$,se){const X=$[0],ee=$[1],Ee=$[2],Q=$[3],he=se[0],Fe=se[1],Ke=se[2],$e=se[3];return W[0]=X*$e+Q*he+ee*Ke-Ee*Fe,W[1]=ee*$e+Q*Fe+Ee*he-X*Ke,W[2]=Ee*$e+Q*Ke+X*Fe-ee*he,W[3]=Q*$e-X*he-ee*Fe-Ee*Ke,W}function pe(W,$,se,X){const ee=$[0],Ee=$[1],Q=$[2],he=$[3];let Fe,Ke,$e,Dt,Mt,Ct=se[0],mt=se[1],Tt=se[2],At=se[3];return Ke=ee*Ct+Ee*mt+Q*Tt+he*At,Ke<0&&(Ke=-Ke,Ct=-Ct,mt=-mt,Tt=-Tt,At=-At),1-Ke>(0,H.g)()?(Fe=Math.acos(Ke),$e=Math.sin(Fe),Dt=Math.sin((1-X)*Fe)/$e,Mt=Math.sin(X*Fe)/$e):(Dt=1-X,Mt=X),W[0]=Dt*ee+Mt*Ct,W[1]=Dt*Ee+Mt*mt,W[2]=Dt*Q+Mt*Tt,W[3]=Dt*he+Mt*At,W}function Pe(W,$){return W[0]=-$[0],W[1]=-$[1],W[2]=-$[2],W[3]=$[3],W}function ce(W,$){const se=$[0]+$[4]+$[8];let X;if(se>0)X=Math.sqrt(se+1),W[3]=.5*X,X=.5/X,W[0]=($[5]-$[7])*X,W[1]=($[6]-$[2])*X,W[2]=($[1]-$[3])*X;else{let ee=0;$[4]>$[0]&&(ee=1),$[8]>$[3*ee+ee]&&(ee=2);const Ee=(ee+1)%3,Q=(ee+2)%3;X=Math.sqrt($[3*ee+ee]-$[3*Ee+Ee]-$[3*Q+Q]+1),W[ee]=.5*X,X=.5/X,W[3]=($[3*Ee+Q]-$[3*Q+Ee])*X,W[Ee]=($[3*Ee+ee]+$[3*ee+Ee])*X,W[Q]=($[3*Q+ee]+$[3*ee+Q])*X}return W}function Me(W,$,se,X){const ee=.5*Math.PI/180;$*=ee,se*=ee,X*=ee;const Ee=Math.sin($),Q=Math.cos($),he=Math.sin(se),Fe=Math.cos(se),Ke=Math.sin(X),$e=Math.cos(X);return W[0]=Ee*Fe*$e-Q*he*Ke,W[1]=Q*he*$e+Ee*Fe*Ke,W[2]=Q*Fe*Ke-Ee*he*$e,W[3]=Q*Fe*$e+Ee*he*Ke,W}const Oe=R.c,Re=R.s,fe=R.a,Le=Te,He=R.b,ke=R.d,st=R.l,Ue=R.f,Et=Ue,gt=R.g,Pt=gt,Ve=R.n,_t=R.h,it=R.e,We=(0,G.c)(),Ge=(0,G.f)(1,0,0),ve=(0,G.f)(0,1,0),re=(0,C.a)(),Xe=(0,C.a)(),oe=(0,L.a)();Object.freeze(Object.defineProperty({__proto__:null,add:fe,calculateW:function Z(W,$){const se=$[0],X=$[1],ee=$[2];return W[0]=se,W[1]=X,W[2]=ee,W[3]=Math.sqrt(Math.abs(1-se*se-X*X-ee*ee)),W},conjugate:Pe,copy:Oe,dot:ke,equals:it,exactEquals:_t,fromEuler:Me,fromMat3:ce,getAxisAngle:K,identity:function N(W){return W[0]=0,W[1]=0,W[2]=0,W[3]=1,W},invert:function me(W,$){const se=$[0],X=$[1],ee=$[2],Ee=$[3],Q=se*se+X*X+ee*ee+Ee*Ee,he=Q?1/Q:0;return W[0]=-se*he,W[1]=-X*he,W[2]=-ee*he,W[3]=Ee*he,W},len:Et,length:Ue,lerp:st,mul:Le,multiply:Te,normalize:Ve,random:function we(W){const $=H.R,se=$(),X=$(),ee=$(),Ee=Math.sqrt(1-se),Q=Math.sqrt(se);return W[0]=Ee*Math.sin(2*Math.PI*X),W[1]=Ee*Math.cos(2*Math.PI*X),W[2]=Q*Math.sin(2*Math.PI*ee),W[3]=Q*Math.cos(2*Math.PI*ee),W},rotateX:function Se(W,$,se){se*=.5;const X=$[0],ee=$[1],Ee=$[2],Q=$[3],he=Math.sin(se),Fe=Math.cos(se);return W[0]=X*Fe+Q*he,W[1]=ee*Fe+Ee*he,W[2]=Ee*Fe-ee*he,W[3]=Q*Fe-X*he,W},rotateY:function ue(W,$,se){se*=.5;const X=$[0],ee=$[1],Ee=$[2],Q=$[3],he=Math.sin(se),Fe=Math.cos(se);return W[0]=X*Fe-Ee*he,W[1]=ee*Fe+Q*he,W[2]=Ee*Fe+X*he,W[3]=Q*Fe-ee*he,W},rotateZ:function F(W,$,se){se*=.5;const X=$[0],ee=$[1],Ee=$[2],Q=$[3],he=Math.sin(se),Fe=Math.cos(se);return W[0]=X*Fe+ee*he,W[1]=ee*Fe-X*he,W[2]=Ee*Fe+Q*he,W[3]=Q*Fe-Ee*he,W},rotationTo:function be(W,$,se){const X=(0,U.j)($,se);return X<-.999999?((0,U.b)(We,Ge,$),(0,U.k)(We)<1e-6&&(0,U.b)(We,ve,$),(0,U.n)(We,We),k(W,We,Math.PI),W):X>.999999?(W[0]=0,W[1]=0,W[2]=0,W[3]=1,W):((0,U.b)(We,$,se),W[0]=We[0],W[1]=We[1],W[2]=We[2],W[3]=1+X,Ve(W,W))},scale:He,set:Re,setAxes:function q(W,$,se,X){const ee=oe;return ee[0]=se[0],ee[3]=se[1],ee[6]=se[2],ee[1]=X[0],ee[4]=X[1],ee[7]=X[2],ee[2]=-$[0],ee[5]=-$[1],ee[8]=-$[2],Ve(W,ce(W,ee))},setAxisAngle:k,slerp:pe,sqlerp:function ne(W,$,se,X,ee,Ee){return pe(re,$,ee,Ee),pe(Xe,se,X,Ee),pe(W,re,Xe,2*Ee*(1-Ee)),W},sqrLen:Pt,squaredLength:gt,str:function de(W){return"quat("+W[0]+", "+W[1]+", "+W[2]+", "+W[3]+")"}},Symbol.toStringTag,{value:"Module"}))},1101:(Ne,le,T)=>{T.d(le,{r:()=>L});class L{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(G,H){return this._outer.get(G)?.get(H)}set(G,H,U){const R=this._outer.get(G);R?R.set(H,U):this._outer.set(G,new Map([[H,U]]))}delete(G,H){const U=this._outer.get(G);U&&(U.delete(H),0===U.size&&this._outer.delete(G))}forEach(G){this._outer.forEach((H,U)=>G(H,U))}}},42647:(Ne,le,T)=>{T.r(le),T.d(le,{fetch:()=>ns,gltfToEngineResources:()=>tn,parseUrl:()=>en});var L=T(15861),C=T(83100),G=T(30217),H=T(550),U=T(28347),R=T(43703),N=T(84161),k=T(28093),K=T(5548),Te=T(55713);function Se(P,x=!1){return P<=Te.c8?x?new Array(P).fill(0):new Array(P):new Float32Array(P)}var pe=T(60479),we=T(79800),me=T(63657),Pe=T(35995),ce=T(9554),Me=T(63470),de=T(9160),Oe=T(12495),Re=T(96170),fe=T(19574),Le=T(49966),He=T(9545);function ke(P){if(null==P)return null;const x=null!=P.offset?P.offset:He.Z,O=null!=P.rotation?P.rotation:0,D=null!=P.scale?P.scale:He.O,ae=(0,Le.f)(1,0,0,0,1,0,x[0],x[1],1),J=(0,Le.f)(Math.cos(O),-Math.sin(O),0,Math.sin(O),Math.cos(O),0,0,0,1),Y=(0,Le.f)(D[0],0,0,0,D[1],0,0,0,1),ie=(0,Le.c)();return(0,G.m)(ie,J,Y),(0,G.m)(ie,ae,ie),ie}class st{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class Ue{constructor(x,O,D){this.name=x,this.lodThreshold=O,this.pivotOffset=D,this.stageResources=new st,this.numberOfVertices=0}}var Et=T(84792),gt=T(59213),Pt=T(27306),Ve=T(26584),_t=T(63290),it=T(1101),be=T(10699),We=T(10349),Ge=T(28844),ve=T(70026),ne=T(94255),re=T(42743),Xe=T(13150),q=T(8314),oe=T(61885),ge=T(62208),W=T(21726),$=T(33899),se=T(54346);let ee;var Ee,P;(P=Ee||(Ee={}))[P.ETC1_RGB=0]="ETC1_RGB",P[P.ETC2_RGBA=1]="ETC2_RGBA",P[P.BC1_RGB=2]="BC1_RGB",P[P.BC3_RGBA=3]="BC3_RGBA",P[P.BC4_R=4]="BC4_R",P[P.BC5_RG=5]="BC5_RG",P[P.BC7_M6_RGB=6]="BC7_M6_RGB",P[P.BC7_M5_RGBA=7]="BC7_M5_RGBA",P[P.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",P[P.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",P[P.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",P[P.ATC_RGB=11]="ATC_RGB",P[P.ATC_RGBA=12]="ATC_RGBA",P[P.FXT1_RGB=17]="FXT1_RGB",P[P.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",P[P.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",P[P.ETC2_EAC_R11=20]="ETC2_EAC_R11",P[P.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",P[P.RGBA32=13]="RGBA32",P[P.RGB565=14]="RGB565",P[P.BGR565=15]="BGR565",P[P.RGBA4444=16]="RGBA4444";var Q=T(67969),he=T(18952),Fe=T(26906);let Ke=null,$e=null;function Dt(){return Mt.apply(this,arguments)}function Mt(){return Mt=(0,L.Z)(function*(){return null==$e&&($e=function X(){if(null==ee){const P=x=>(0,se.V)(`esri/libs/basisu/${x}`);ee=T.e(2405).then(T.bind(T,52405)).then(x=>x.b).then(({default:x})=>x({locateFile:P}).then(O=>(O.initializeBasis(),delete O.then,O)))}return ee}(),Ke=yield $e),$e}),Mt.apply(this,arguments)}function Tt(P,x,O,D,ae){const J=(0,Fe.RG)(x?Q.q_.COMPRESSED_RGBA8_ETC2_EAC:Q.q_.COMPRESSED_RGB8_ETC2);return Math.ceil(O*D*J*(ae&&P>1?(4**P-1)/(3*4**(P-1)):1))}function At(P){return P.getNumImages()>=1&&!P.isUASTC()}function Rt(P){return P.getFaces()>=1&&P.isETC1S()}function bt(){return bt=(0,L.Z)(function*(P,x,O){null==Ke&&(Ke=yield Dt());const D=new Ke.BasisFile(new Uint8Array(O));if(!At(D))return null;D.startTranscoding();const ae=te(P,x,D.getNumLevels(0),D.getHasAlpha(),D.getImageWidth(0,0),D.getImageHeight(0,0),(J,Y)=>D.getImageTranscodedSizeInBytes(0,J,Y),(J,Y,ie)=>D.transcodeImage(ie,0,J,Y,0,0));return D.close(),D.delete(),ae}),bt.apply(this,arguments)}function V(){return V=(0,L.Z)(function*(P,x,O){null==Ke&&(Ke=yield Dt());const D=new Ke.KTX2File(new Uint8Array(O));if(!Rt(D))return null;D.startTranscoding();const ae=te(P,x,D.getLevels(),D.getHasAlpha(),D.getWidth(),D.getHeight(),(J,Y)=>D.getImageTranscodedSizeInBytes(J,0,0,Y),(J,Y,ie)=>D.transcodeImage(ie,J,0,0,Y,0,-1,-1));return D.close(),D.delete(),ae}),V.apply(this,arguments)}function te(P,x,O,D,ae,J,Y,ie){const{compressedTextureETC:j,compressedTextureS3TC:Ce}=P.capabilities,[Ae,ze]=j?D?[Ee.ETC2_RGBA,Q.q_.COMPRESSED_RGBA8_ETC2_EAC]:[Ee.ETC1_RGB,Q.q_.COMPRESSED_RGB8_ETC2]:Ce?D?[Ee.BC3_RGBA,Q.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Ee.BC1_RGB,Q.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Ee.RGBA32,Q.VI.RGBA],tt=x.hasMipmap?O:Math.min(1,O),Qe=[];for(let ot=0;ot<tt;ot++)Qe.push(new Uint8Array(Y(ot,Ae))),ie(ot,Ae,Qe[ot]);return x.internalFormat=ze,x.hasMipmap=Qe.length>1,x.samplingMode=x.hasMipmap?Q.cw.LINEAR_MIPMAP_LINEAR:Q.cw.LINEAR,x.width=ae,x.height=J,new he.x(P,x,{type:"compressed",levels:Qe})}var xe=T(12699),De=T(24425);const _e=_t.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),je=542327876,dt=131072,Lt=4;function Kt(P){return P.charCodeAt(0)+(P.charCodeAt(1)<<8)+(P.charCodeAt(2)<<16)+(P.charCodeAt(3)<<24)}const Ie=Kt("DXT1"),ye=Kt("DXT3"),Be=Kt("DXT5"),et=31,lt=0,rt=1,qe=2,It=3,Gt=4,$t=7,Wt=20,kt=21;function ar(P,x,O){if(P instanceof ImageData)return ar(Lr(P),x,O);const D=document.createElement("canvas");return D.width=x,D.height=O,D.getContext("2d").drawImage(P,0,0,D.width,D.height),D}function Lr(P){const x=document.createElement("canvas");x.width=P.width,x.height=P.height;const O=x.getContext("2d");if(null==O)throw new Ve.Z("Failed to create 2d context from HTMLCanvasElement");return O.putImageData(P,0,0),x}var lr,jt=T(2282),rn=T(31548);class Ir extends xe.c{get parameters(){return this._parameters}constructor(x,O){super(),this._data=x,this.type=De.U.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new oe.Z,this._parameters={...sn,...O},this._startPreload(x)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(x){null!=x&&(x instanceof HTMLVideoElement?(this.frameUpdate=O=>this._frameUpdate(x,O),this._startPreloadVideoElement(x)):x instanceof HTMLImageElement&&this._startPreloadImageElement(x))}_startPreloadVideoElement(x){if(!((0,W.jc)(x.src)||"auto"===x.preload&&x.crossOrigin)){x.preload="auto",x.crossOrigin="anonymous";const O=!x.paused;if(x.src=x.src,O&&x.autoplay){const D=()=>{x.removeEventListener("canplay",D),x.play()};x.addEventListener("canplay",D)}}}_startPreloadImageElement(x){(0,W.HK)(x.src)||(0,W.jc)(x.src)||x.crossOrigin||(x.crossOrigin="anonymous",x.src=x.src)}_createDescriptor(x){const O=new rn.X;return O.wrapMode=this._parameters.wrap??Q.e8.REPEAT,O.flipped=!this._parameters.noUnpackFlip,O.samplingMode=this._parameters.mipmap?Q.cw.LINEAR_MIPMAP_LINEAR:Q.cw.LINEAR,O.hasMipmap=!!this._parameters.mipmap,O.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,O.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?x.parameters.maxMaxAnisotropy:1),O}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.gpuMemoryUsage||function nn(P,x){if(null==P)return 0;if((0,Te.eP)(P)||(0,Te.lq)(P))return x.encoding===re.Ti.KTX2_ENCODING?function mt(P,x){if(null==Ke)return P.byteLength;const O=new Ke.KTX2File(new Uint8Array(P)),D=Rt(O)?Tt(O.getLevels(),O.getHasAlpha(),O.getWidth(),O.getHeight(),x):0;return O.close(),O.delete(),D}(P,!!x.mipmap):x.encoding===re.Ti.BASIS_ENCODING?function Ct(P,x){if(null==Ke)return P.byteLength;const O=new Ke.BasisFile(new Uint8Array(P)),D=At(O)?Tt(O.getNumLevels(0),O.getHasAlpha(),O.getImageWidth(0,0),O.getImageHeight(0,0),x):0;return O.close(),O.delete(),D}(P,!!x.mipmap):P.byteLength;const{width:O,height:D}=P instanceof Image||P instanceof ImageData||P instanceof HTMLCanvasElement||P instanceof HTMLVideoElement?wr(P):x;return(x.mipmap?4/3:1)*O*D*(x.components||4)||0}(this._data,this._parameters)}load(x){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const O=this._data;return null==O?(this._glTexture=new he.x(x,this._createDescriptor(x),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof O?this._loadFromURL(x,O):O instanceof Image?this._loadFromImageElement(x,O):O instanceof HTMLVideoElement?this._loadFromVideoElement(x,O):O instanceof ImageData||O instanceof HTMLCanvasElement?this._loadFromImage(x,O):((0,Te.eP)(O)||(0,Te.lq)(O))&&this._parameters.encoding===re.Ti.DDS_ENCODING?this._loadFromDDSData(x,O):((0,Te.eP)(O)||(0,Te.lq)(O))&&this._parameters.encoding===re.Ti.KTX2_ENCODING?this._loadFromKTX2(x,O):((0,Te.eP)(O)||(0,Te.lq)(O))&&this._parameters.encoding===re.Ti.BASIS_ENCODING?this._loadFromBasis(x,O):(0,Te.lq)(O)?this._loadFromPixelData(x,O):(0,Te.eP)(O)?this._loadFromPixelData(x,new Uint8Array(O)):null)}_frameUpdate(x,O){return null==this._glTexture||x.readyState<lr.HAVE_CURRENT_DATA||O===x.currentTime?O:(this._glTexture.setData(x),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),x.currentTime)}_loadFromDDSData(x,O){return this._glTexture=function qt(P,x,O){const D=function Jt(P,x){const O=new Int32Array(P,0,et);if(O[lt]!==je)return _e.error("Invalid magic number in DDS header"),null;if(!(O[Wt]&Lt))return _e.error("Unsupported format, must contain a FourCC code"),null;const D=O[kt];let ae,J;switch(D){case Ie:ae=8,J=Q.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case ye:ae=16,J=Q.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Be:ae=16,J=Q.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return _e.error("Unsupported FourCC code:",function Qt(P){return String.fromCharCode(255&P,P>>8&255,P>>16&255,P>>24&255)}(D)),null}let Y=1,ie=O[Gt],j=O[It];!(3&ie)&&!(3&j)||(_e.warn("Rounding up compressed texture size to nearest multiple of 4."),ie=ie+3&-4,j=j+3&-4);const Ce=ie,Ae=j;let ze,tt;O[qe]&dt&&!1!==x&&(Y=Math.max(1,O[$t]));let Qe=O[rt]+4;const ot=[];for(let pt=0;pt<Y;++pt)tt=(ie+3>>2)*(j+3>>2)*ae,ze=new Uint8Array(P,Qe,tt),ot.push(ze),Qe+=tt,ie=Math.max(1,ie>>1),j=Math.max(1,j>>1);return{textureData:{type:"compressed",levels:ot},internalFormat:J,width:Ce,height:Ae}}(O,x.hasMipmap??!1);if(null==D)throw new Error("DDS texture data is null");const{textureData:ae,internalFormat:J,width:Y,height:ie}=D;return x.samplingMode=ae.levels.length>1?Q.cw.LINEAR_MIPMAP_LINEAR:Q.cw.LINEAR,x.hasMipmap=ae.levels.length>1,x.internalFormat=J,x.width=Y,x.height=ie,new he.x(P,x,ae)}(x,this._createDescriptor(x),O),this._glTexture}_loadFromKTX2(x,O){return this._loadAsync(()=>function zt(P,x,O){return V.apply(this,arguments)}(x,this._createDescriptor(x),O).then(D=>(this._glTexture=D,D)))}_loadFromBasis(x,O){return this._loadAsync(()=>function yt(P,x,O){return bt.apply(this,arguments)}(x,this._createDescriptor(x),O).then(D=>(this._glTexture=D,D)))}_loadFromPixelData(x,O){(0,jt.hu)(this._parameters.width>0&&this._parameters.height>0);const D=this._createDescriptor(x);return D.pixelFormat=1===this._parameters.components?Q.VI.LUMINANCE:3===this._parameters.components?Q.VI.RGB:Q.VI.RGBA,D.width=this._parameters.width??0,D.height=this._parameters.height??0,this._glTexture=new he.x(x,D,O),this._glTexture}_loadFromURL(x,O){var D=this;return this._loadAsync(function(){var ae=(0,L.Z)(function*(J){const Y=yield(0,ve.t)(O,{signal:J});return(0,be.k_)(J),D._loadFromImage(x,Y)});return function(J){return ae.apply(this,arguments)}}())}_loadFromImageElement(x,O){var D=this;return O.complete?this._loadFromImage(x,O):this._loadAsync(function(){var ae=(0,L.Z)(function*(J){const Y=yield(0,$.fY)(O,O.src,!1,J);return(0,be.k_)(J),D._loadFromImage(x,Y)});return function(J){return ae.apply(this,arguments)}}())}_loadFromVideoElement(x,O){return O.readyState>=lr.HAVE_CURRENT_DATA?this._loadFromImage(x,O):this._loadFromVideoElementAsync(x,O)}_loadFromVideoElementAsync(x,O){return this._loadAsync(D=>new Promise((ae,J)=>{const Y=()=>{O.removeEventListener("loadeddata",ie),O.removeEventListener("error",j),(0,ge.hw)(Ce)},ie=()=>{O.readyState>=lr.HAVE_CURRENT_DATA&&(Y(),ae(this._loadFromImage(x,O)))},j=Ae=>{Y(),J(Ae||new Ve.Z("Failed to load video"))};O.addEventListener("loadeddata",ie),O.addEventListener("error",j);const Ce=(0,be.fu)(D,()=>j((0,be.zE)()))}))}_loadFromImage(x,O){let D=O;if(!(D instanceof HTMLVideoElement)){const{maxTextureSize:Y}=x.parameters;D=this._parameters.downsampleUncompressed?function hr(P,x){let J=P.width*P.height;if(J<4096)return P instanceof ImageData?Lr(P):P;let Y=P.width,ie=P.height;do{Y=Math.ceil(Y/2),ie=Math.ceil(ie/2),J=Y*ie}while(J>1048576||null!=x&&(Y>x||ie>x));return ar(P,Y,ie)}(D,Y):function or(P,x){const O=Math.max(P.width,P.height);if(O<=x)return P;const D=x/O;return ar(P,Math.round(P.width*D),Math.round(P.height*D))}(D,Y)}const ae=wr(D);this._parameters.width=ae.width,this._parameters.height=ae.height;const J=this._createDescriptor(x);return J.pixelFormat=3===this._parameters.components?Q.VI.RGB:Q.VI.RGBA,J.width=ae.width,J.height=ae.height,this._glTexture=new he.x(x,J,D),this._glTexture}_loadAsync(x){const O=new AbortController;this._loadingController=O;const D=x(O.signal);this._loadingPromise=D;const ae=()=>{this._loadingController===O&&(this._loadingController=null),this._loadingPromise===D&&(this._loadingPromise=null)};return D.then(ae,ae),D}unload(){if(this._glTexture=(0,ge.M2)(this._glTexture),null!=this._loadingController){const x=this._loadingController;this._loadingController=null,this._loadingPromise=null,x.abort()}this.events.emit("unloaded")}}function wr(P){return P instanceof HTMLVideoElement?{width:P.videoWidth,height:P.videoHeight}:P}!function(P){P[P.HAVE_NOTHING=0]="HAVE_NOTHING",P[P.HAVE_METADATA=1]="HAVE_METADATA",P[P.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",P[P.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",P[P.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(lr||(lr={}));const sn={wrap:{s:Q.e8.REPEAT,t:Q.e8.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};var vt=T(16396),fr=T(59617),an=T(19625),wt=T(13934),nr=T(53107),sr=T(96395),cr=T(92724),on=T(44621),Br=T(40723),dr=T(88569),_r=T(5894),Ur=T(97126),Fr=T(477);const Nr=new class dn{constructor(x=0){this.offset=x,this.sphere=(0,Ur.c)(),this.tmpVertex=(0,k.c)()}applyToVertex(x,O,D){const ae=this.objectTransform.transform,J=(0,N.s)(vr,x,O,D),Y=(0,N.e)(J,J,ae),ie=this.offset/(0,N.l)(Y);return(0,N.q)(Y,Y,Y,ie),(0,N.e)(this.tmpVertex,Y,this.objectTransform.inverse),this.tmpVertex}applyToMinMax(x,O){const D=this.offset/(0,N.l)(x);(0,N.q)(x,x,x,D);const ae=this.offset/(0,N.l)(O);(0,N.q)(O,O,O,ae)}applyToAabb(x){const O=this.offset/Math.sqrt(x[0]*x[0]+x[1]*x[1]+x[2]*x[2]);x[0]+=x[0]*O,x[1]+=x[1]*O,x[2]+=x[2]*O;const D=this.offset/Math.sqrt(x[3]*x[3]+x[4]*x[4]+x[5]*x[5]);return x[3]+=x[3]*D,x[4]+=x[4]*D,x[5]+=x[5]*D,x}applyToBoundingSphere(x){const O=(0,N.l)(x);return(0,N.q)(this.sphere,x,x,this.offset/O),this.sphere[3]=x[3]+x[3]*this.offset/O,this.sphere}};new class cn{constructor(x=0){this.componentLocalOriginLength=0,this._tmpVertex=(0,k.c)(),this._mbs=(0,Ur.c)(),this._obb=(0,Fr.Ue)(),this._totalOffset=0,this._offset=0,this._resetOffset(x)}_resetOffset(x){this._offset=x,this._totalOffset=x}set offset(x){this._resetOffset(x)}get offset(){return this._offset}set componentOffset(x){this._totalOffset=this._offset+x}set localOrigin(x){this.componentLocalOriginLength=(0,N.l)(x)}applyToVertex(x,O,D){const ae=(0,N.s)(vr,x,O,D),J=(0,N.s)(Pr,x,O,D+this.componentLocalOriginLength),Y=this._totalOffset/(0,N.l)(J);return(0,N.q)(this._tmpVertex,ae,J,Y),this._tmpVertex}applyToAabb(x){const O=(0,N.s)(vr,x[0],x[1],x[2]+this.componentLocalOriginLength),D=(0,N.s)(Pr,x[3],x[4],x[5]+this.componentLocalOriginLength),ae=(0,N.z)(Wr,O),J=(0,N.z)(jr,D),Y=(0,N.w)(Vr,O),ie=(0,N.w)(hn,D),j=(0,N.x)(Gr,Y,ie);j[0]=ae[0]*J[0]<0?0:j[0],j[1]=ae[1]*J[1]<0?0:j[1],j[2]=ae[2]*J[2]<0?0:j[2];const Ce=(0,N.l)(j);if(Ce<this._totalOffset)return x[0]-=O[0]<0?this._totalOffset:0,x[1]-=O[1]<0?this._totalOffset:0,x[2]-=O[2]<0?this._totalOffset:0,x[3]+=D[0]>0?this._totalOffset:0,x[4]+=D[1]>0?this._totalOffset:0,x[5]+=D[2]>0?this._totalOffset:0,x;const Ae=(0,N.D)(Gr,Y,ie),ze=(0,N.l)(Ae),tt=this._totalOffset/ze,Qe=this._totalOffset/Ce;return x[0]+=O[0]*(O[0]>0?tt:Qe),x[1]+=O[1]*(O[1]>0?tt:Qe),x[2]+=O[2]*(O[2]>0?tt:Qe),x[3]+=D[0]*(D[0]<0?tt:Qe),x[4]+=D[1]*(D[1]<0?tt:Qe),x[5]+=D[2]*(D[2]<0?tt:Qe),x}applyToMbs(x){const O=(0,N.l)(x);return(0,N.q)(this._mbs,x,x,this._totalOffset/O),this._mbs[3]=x[3]+x[3]*this._totalOffset/O,this._mbs}applyToObb(x){return(0,Fr.gI)(x,this._totalOffset,this._totalOffset,fr.JY.Global,this._obb),this._obb}},new class ln{constructor(x=0){this.offset=x,this.tmpVertex=(0,k.c)()}applyToVertex(x,O,D){const ae=(0,N.s)(vr,x,O,D),J=(0,N.g)(Pr,ae,this.localOrigin),Y=this.offset/(0,N.l)(J);return(0,N.q)(this.tmpVertex,ae,J,Y),this.tmpVertex}applyToAabb(x){const O=Wr,D=jr,ae=Vr;for(let j=0;j<3;++j)O[j]=x[0+j]+this.localOrigin[j],D[j]=x[3+j]+this.localOrigin[j],ae[j]=O[j];const J=this.applyToVertex(O[0],O[1],O[2]);for(let j=0;j<3;++j)x[j]=J[j],x[j+3]=J[j];const Y=j=>{const Ce=this.applyToVertex(j[0],j[1],j[2]);for(let Ae=0;Ae<3;++Ae)x[Ae]=Math.min(x[Ae],Ce[Ae]),x[Ae+3]=Math.max(x[Ae+3],Ce[Ae])};for(let j=1;j<8;++j){for(let Ce=0;Ce<3;++Ce)ae[Ce]=j&1<<Ce?D[Ce]:O[Ce];Y(ae)}let ie=0;for(let j=0;j<3;++j)O[j]*D[j]<0&&(ie|=1<<j);if(0!==ie&&7!==ie)for(let j=0;j<8;++j)if(!(ie&j)){for(let Ce=0;Ce<3;++Ce)ae[Ce]=ie&1<<Ce?0:j&1<<Ce?O[Ce]:D[Ce];Y(ae)}for(let j=0;j<3;++j)x[j]-=this.localOrigin[j],x[j+3]-=this.localOrigin[j];return x}};const vr=(0,k.c)(),Pr=(0,k.c)(),Wr=(0,k.c)(),jr=(0,k.c)(),Vr=(0,k.c)(),hn=(0,k.c)(),Gr=(0,k.c)();function Kr(P,x,O){const{data:D,indices:ae}=P,J=x.typedBuffer,Y=x.typedBufferStride,ie=ae.length;O*=Y;for(let j=0;j<ie;++j){const Ce=2*ae[j];J[O]=D[Ce],J[O+1]=D[Ce+1],O+=Y}}function $r(P,x,O,D){const{data:ae,indices:J}=P,Y=x.typedBuffer,ie=x.typedBufferStride,j=J.length;if(O*=ie,null==D||1===D)for(let Ce=0;Ce<j;++Ce){const Ae=3*J[Ce];Y[O]=ae[Ae],Y[O+1]=ae[Ae+1],Y[O+2]=ae[Ae+2],O+=ie}else for(let Ce=0;Ce<j;++Ce){const Ae=3*J[Ce];for(let ze=0;ze<D;++ze)Y[O]=ae[Ae],Y[O+1]=ae[Ae+1],Y[O+2]=ae[Ae+2],O+=ie}}function Jr(P,x,O,D=1){const{data:ae,indices:J}=P,Y=x.typedBuffer,ie=x.typedBufferStride,j=J.length;if(O*=ie,1===D)for(let Ce=0;Ce<j;++Ce){const Ae=4*J[Ce];Y[O]=ae[Ae],Y[O+1]=ae[Ae+1],Y[O+2]=ae[Ae+2],Y[O+3]=ae[Ae+3],O+=ie}else for(let Ce=0;Ce<j;++Ce){const Ae=4*J[Ce];for(let ze=0;ze<D;++ze)Y[O]=ae[Ae],Y[O+1]=ae[Ae+1],Y[O+2]=ae[Ae+2],Y[O+3]=ae[Ae+3],O+=ie}}function pn(P,x,O,D,ae=1){const J=x.typedBuffer,Y=x.typedBufferStride;if(D*=Y,1===ae)for(let ie=0;ie<O;++ie)J[D]=P[0],J[D+1]=P[1],J[D+2]=P[2],J[D+3]=P[3],D+=Y;else for(let ie=0;ie<O;++ie)for(let j=0;j<ae;++j)J[D]=P[0],J[D+1]=P[1],J[D+2]=P[2],J[D+3]=P[3],D+=Y}function Tn(P,x,O,D,ae,J){switch(P){case vt.T.POSITION:{(0,jt.hu)(3===x.size);const Y=ae.getField(P,pe.ct);(0,jt.hu)(!!Y,`No buffer view for ${P}`),Y&&function fn(P,x,O,D,ae=1){if(!x)return void $r(P,O,D,ae);const{data:J,indices:Y}=P,ie=O.typedBuffer,j=O.typedBufferStride,Ce=Y.length,Ae=x[0],ze=x[1],tt=x[2],Qe=x[4],ot=x[5],pt=x[6],Bt=x[8],Vt=x[9],Ut=x[10],Nt=x[12],Xt=x[13],Ht=x[14];D*=j;let St=0,ct=0,ut=0;const ht=(0,U.y)(x)?ft=>{St=J[ft]+Nt,ct=J[ft+1]+Xt,ut=J[ft+2]+Ht}:ft=>{const at=J[ft],xt=J[ft+1],nt=J[ft+2];St=Ae*at+Qe*xt+Bt*nt+Nt,ct=ze*at+ot*xt+Vt*nt+Xt,ut=tt*at+pt*xt+Ut*nt+Ht};if(1===ae)for(let ft=0;ft<Ce;++ft)ht(3*Y[ft]),ie[D]=St,ie[D+1]=ct,ie[D+2]=ut,D+=j;else for(let ft=0;ft<Ce;++ft){ht(3*Y[ft]);for(let at=0;at<ae;++at)ie[D]=St,ie[D+1]=ct,ie[D+2]=ut,D+=j}}(x,O,Y,J);break}case vt.T.NORMAL:{(0,jt.hu)(3===x.size);const Y=ae.getField(P,pe.ct);(0,jt.hu)(!!Y,`No buffer view for ${P}`),Y&&function _n(P,x,O,D,ae=1){if(!x)return void $r(P,O,D,ae);const{data:J,indices:Y}=P,ie=x,j=O.typedBuffer,Ce=O.typedBufferStride,Ae=Y.length,ze=ie[0],tt=ie[1],Qe=ie[2],ot=ie[4],pt=ie[5],Bt=ie[6],Vt=ie[8],Ut=ie[9],Nt=ie[10],Xt=!(0,U.z)(ie);D*=Ce;let ct=0,ut=0,ht=0;const ft=(0,U.y)(ie)?at=>{ct=J[at],ut=J[at+1],ht=J[at+2]}:at=>{const xt=J[at],nt=J[at+1],Ot=J[at+2];ct=ze*xt+ot*nt+Vt*Ot,ut=tt*xt+pt*nt+Ut*Ot,ht=Qe*xt+Bt*nt+Nt*Ot};if(1===ae)if(Xt)for(let at=0;at<Ae;++at){ft(3*Y[at]);const xt=ct*ct+ut*ut+ht*ht;if(xt<.999999&&xt>1e-6){const nt=1/Math.sqrt(xt);j[D]=ct*nt,j[D+1]=ut*nt,j[D+2]=ht*nt}else j[D]=ct,j[D+1]=ut,j[D+2]=ht;D+=Ce}else for(let at=0;at<Ae;++at)ft(3*Y[at]),j[D]=ct,j[D+1]=ut,j[D+2]=ht,D+=Ce;else for(let at=0;at<Ae;++at){if(ft(3*Y[at]),Xt){const xt=ct*ct+ut*ut+ht*ht;if(xt<.999999&&xt>1e-6){const nt=1/Math.sqrt(xt);ct*=nt,ut*=nt,ht*=nt}}for(let xt=0;xt<ae;++xt)j[D]=ct,j[D+1]=ut,j[D+2]=ht,D+=Ce}}(x,D,Y,J);break}case vt.T.NORMALCOMPRESSED:{(0,jt.hu)(2===x.size);const Y=ae.getField(P,pe.or);(0,jt.hu)(!!Y,`No buffer view for ${P}`),Y&&Kr(x,Y,J);break}case vt.T.UV0:{(0,jt.hu)(2===x.size);const Y=ae.getField(P,pe.Eu);(0,jt.hu)(!!Y,`No buffer view for ${P}`),Y&&Kr(x,Y,J);break}case vt.T.COLOR:case vt.T.SYMBOLCOLOR:{const Y=ae.getField(P,pe.mc);(0,jt.hu)(!!Y,`No buffer view for ${P}`),(0,jt.hu)(3===x.size||4===x.size),!Y||3!==x.size&&4!==x.size||function vn(P,x,O,D,ae=1){const{data:J,indices:Y}=P,ie=O.typedBuffer,j=O.typedBufferStride,Ce=Y.length;if(D*=j,x!==J.length||4!==x)if(1!==ae)if(4!==x)for(let Ae=0;Ae<Ce;++Ae){const ze=3*Y[Ae];for(let tt=0;tt<ae;++tt)ie[D]=J[ze],ie[D+1]=J[ze+1],ie[D+2]=J[ze+2],ie[D+3]=255,D+=j}else for(let Ae=0;Ae<Ce;++Ae){const ze=4*Y[Ae];for(let tt=0;tt<ae;++tt)ie[D]=J[ze],ie[D+1]=J[ze+1],ie[D+2]=J[ze+2],ie[D+3]=J[ze+3],D+=j}else{if(4===x){for(let Ae=0;Ae<Ce;++Ae){const ze=4*Y[Ae];ie[D]=J[ze],ie[D+1]=J[ze+1],ie[D+2]=J[ze+2],ie[D+3]=J[ze+3],D+=j}return}for(let Ae=0;Ae<Ce;++Ae){const ze=3*Y[Ae];ie[D]=J[ze],ie[D+1]=J[ze+1],ie[D+2]=J[ze+2],ie[D+3]=255,D+=j}}else{ie[D]=J[0],ie[D+1]=J[1],ie[D+2]=J[2],ie[D+3]=J[3];const Ae=new Uint32Array(O.typedBuffer.buffer,O.start),ze=j/4,tt=Ae[D/=4];D+=ze;const Qe=Ce*ae;for(let ot=1;ot<Qe;++ot)Ae[D]=tt,D+=ze}}(x,x.size,Y,J);break}case vt.T.COLORFEATUREATTRIBUTE:{const Y=ae.getField(P,pe.ly);(0,jt.hu)(!!Y,`No buffer view for ${P}`),(0,jt.hu)(1===x.size),Y&&1===x.size&&function gn(P,x,O){const{data:D,indices:ae}=P,J=x.typedBuffer,Y=x.typedBufferStride,ie=ae.length,j=D[0];O*=Y;for(let Ce=0;Ce<ie;++Ce)J[O]=j,O+=Y}(x,Y,J);break}case vt.T.TANGENT:{(0,jt.hu)(4===x.size);const Y=ae.getField(P,pe.ek);(0,jt.hu)(!!Y,`No buffer view for ${P}`),Y&&function mn(P,x,O,D,ae=1){if(!x)return void Jr(P,O,D,ae);const{data:J,indices:Y}=P,j=O.typedBuffer,Ce=O.typedBufferStride,Ae=Y.length,ze=x[0],tt=x[1],Qe=x[2],ot=x[4],pt=x[5],Bt=x[6],Vt=x[8],Ut=x[9],Nt=x[10],Xt=!(0,U.z)(x);if(D*=Ce,1===ae)for(let ct=0;ct<Ae;++ct){const ut=4*Y[ct],ht=J[ut],ft=J[ut+1],at=J[ut+2],xt=J[ut+3];let nt=ze*ht+ot*ft+Vt*at,Ot=tt*ht+pt*ft+Ut*at,Ft=Qe*ht+Bt*ft+Nt*at;if(Xt){const Zt=nt*nt+Ot*Ot+Ft*Ft;if(Zt<.999999&&Zt>1e-6){const er=1/Math.sqrt(Zt);nt*=er,Ot*=er,Ft*=er}}j[D]=nt,j[D+1]=Ot,j[D+2]=Ft,j[D+3]=xt,D+=Ce}else for(let ct=0;ct<Ae;++ct){const ut=4*Y[ct],ht=J[ut],ft=J[ut+1],at=J[ut+2],xt=J[ut+3];let nt=ze*ht+ot*ft+Vt*at,Ot=tt*ht+pt*ft+Ut*at,Ft=Qe*ht+Bt*ft+Nt*at;if(Xt){const Zt=nt*nt+Ot*Ot+Ft*Ft;if(Zt<.999999&&Zt>1e-6){const er=1/Math.sqrt(Zt);nt*=er,Ot*=er,Ft*=er}}for(let Zt=0;Zt<ae;++Zt)j[D]=nt,j[D+1]=Ot,j[D+2]=Ft,j[D+3]=xt,D+=Ce}}(x,D,Y,J);break}case vt.T.PROFILERIGHT:case vt.T.PROFILEUP:case vt.T.PROFILEVERTEXANDNORMAL:case vt.T.FEATUREVALUE:{(0,jt.hu)(4===x.size);const Y=ae.getField(P,pe.ek);(0,jt.hu)(!!Y,`No buffer view for ${P}`),Y&&Jr(x,Y,J)}}}class Mn{constructor(x){this.vertexBufferLayout=x}elementCount(x){return x.attributes.get(vt.T.POSITION).indices.length}write(x,O,D,ae,J){!function En(P,x,O,D,ae,J){for(const Y of x.fields.keys()){const ie=P.attributes.get(Y),j=ie?.indices;if(ie&&j)Tn(Y,ie,O,D,ae,J);else if(Y===vt.T.OBJECTANDLAYERIDCOLOR&&null!=P.objectAndLayerIdColor){const Ce=P.attributes.get(vt.T.POSITION)?.indices;if(Ce){const Ae=Ce.length,ze=ae.getField(Y,pe.mc);pn(P.objectAndLayerIdColor,ze,Ae,J)}}}}(D,this.vertexBufferLayout,x,O,ae,J)}}var Yr=T(21778),xn=T(4794),gr=T(36603),On=T(21799),Pn=T(67022),Xr=T(651),Dn=T(91056),Cn=T(39114),An=T(12407);const yn={mask:255},Sn={function:{func:Q.wb.ALWAYS,ref:re.hU.OutlineVisualElementMask,mask:re.hU.OutlineVisualElementMask},operation:{fail:Q.xS.KEEP,zFail:Q.xS.KEEP,zPass:Q.xS.ZERO}},Rn={function:{func:Q.wb.ALWAYS,ref:re.hU.OutlineVisualElementMask,mask:re.hU.OutlineVisualElementMask},operation:{fail:Q.xS.KEEP,zFail:Q.xS.KEEP,zPass:Q.xS.REPLACE}};var pr=T(44835);const Zr=[1,1,.5],Ln=[0,.6,.2],In=[0,1,.2];var wn=T(96160),Er=T(2078);class Bn extends On.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,k.e)(Zr),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=re.Vr.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=(0,k.f)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=nr.r.Attribute,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,k.f)(.2,.2,.2),this.diffuse=(0,k.f)(.8,.8,.8),this.externalColor=(0,xn.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,k.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=re.Gv.Less,this.textureAlphaMode=re.JJ.Blend,this.textureAlphaCutoff=Pn.F,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Br.yD.Occlude,this.isDecoration=!1}}class ur extends Dn.A{initializeConfiguration(x,O){O.spherical=x.viewingMode===fr.JY.Global,O.doublePrecisionRequiresObfuscation=x.rctx.driverTest.doublePrecisionRequiresObfuscation.result,O.textureCoordinateType=O.hasColorTexture||O.hasMetallicRoughnessTexture||O.hasEmissionTexture||O.hasOcclusionTexture||O.hasNormalTexture?gr.N.Default:gr.N.None,O.objectAndLayerIdColorInstanced=O.instanced}initializeProgram(x){return this._initializeProgram(x,ur.shader)}_initializeProgram(x,O){return new An.$(x.rctx,O.get().build(this.configuration),Cn.i)}_convertDepthTestFunction(x){return x===re.Gv.Lequal?Q.wb.LEQUAL:Q.wb.LESS}_makePipeline(x,O){const D=this.configuration,ae=x===pr.A.NONE,J=x===pr.A.FrontFace;return(0,Er.sm)({blending:D.output!==wt.H.Color&&D.output!==wt.H.Alpha||!D.transparent?null:ae?dr.wu:(0,dr.j7)(x),culling:Un(D)?(0,Er.zp)(D.cullFace):null,depthTest:{func:(0,dr.Bh)(x,this._convertDepthTestFunction(D.customDepthTest))},depthWrite:(ae||J)&&D.writeDepth?Er.LZ:null,colorWrite:Er.BK,stencilWrite:D.hasOccludees?yn:null,stencilTest:D.hasOccludees?O?Rn:Sn:null,polygonOffset:ae||J?null:(0,dr.je)(D.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(x){return x?this._occludeePipelineState:super.getPipeline()}}function Un(P){return P.cullFace!==re.Vr.None||!P.hasSlicePlane&&!P.transparent&&!P.doubleSidedMode}ur.shader=new Xr.J(wn.D,()=>T.e(3907).then(T.bind(T,83907)));var Je=T(17626),Ye=T(87601),Fn=T(60355),Nn=T(37847);class Tr extends Fn.PO{}(0,Je._)([(0,Ye.o)({constValue:!0})],Tr.prototype,"hasSliceHighlight",void 0),(0,Je._)([(0,Ye.o)({constValue:!1})],Tr.prototype,"hasSliceInVertexProgram",void 0),(0,Je._)([(0,Ye.o)({constValue:Nn.P.Pass})],Tr.prototype,"pbrTextureBindType",void 0);class Ze extends Tr{constructor(){super(...arguments),this.output=wt.H.Color,this.alphaDiscardMode=re.JJ.Opaque,this.doubleSidedMode=sr.q.None,this.pbrMode=cr.f7.Disabled,this.cullFace=re.Vr.None,this.transparencyPassType=pr.A.NONE,this.normalType=nr.r.Attribute,this.textureCoordinateType=gr.N.None,this.customDepthTest=re.Gv.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,Je._)([(0,Ye.o)({count:wt.H.COUNT})],Ze.prototype,"output",void 0),(0,Je._)([(0,Ye.o)({count:re.JJ.COUNT})],Ze.prototype,"alphaDiscardMode",void 0),(0,Je._)([(0,Ye.o)({count:sr.q.COUNT})],Ze.prototype,"doubleSidedMode",void 0),(0,Je._)([(0,Ye.o)({count:cr.f7.COUNT})],Ze.prototype,"pbrMode",void 0),(0,Je._)([(0,Ye.o)({count:re.Vr.COUNT})],Ze.prototype,"cullFace",void 0),(0,Je._)([(0,Ye.o)({count:pr.A.COUNT})],Ze.prototype,"transparencyPassType",void 0),(0,Je._)([(0,Ye.o)({count:nr.r.COUNT})],Ze.prototype,"normalType",void 0),(0,Je._)([(0,Ye.o)({count:gr.N.COUNT})],Ze.prototype,"textureCoordinateType",void 0),(0,Je._)([(0,Ye.o)({count:re.Gv.COUNT})],Ze.prototype,"customDepthTest",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"spherical",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"hasVertexColors",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"hasSymbolColors",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"hasVerticalOffset",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"hasSlicePlane",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"hasSliceHighlight",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"hasColorTexture",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"hasMetallicRoughnessTexture",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"hasEmissionTexture",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"hasOcclusionTexture",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"hasNormalTexture",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"hasScreenSizePerspective",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"hasVertexTangents",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"hasOccludees",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"multipassEnabled",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"hasModelTransformation",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"offsetBackfaces",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"vvSize",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"vvColor",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"receiveShadows",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"receiveAmbientOcclusion",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"textureAlphaPremultiplied",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"instanced",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"instancedColor",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"objectAndLayerIdColorInstanced",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"instancedDoublePrecision",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"writeDepth",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"transparent",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"enableOffset",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"cullAboveGround",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"snowCover",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"hasColorTextureTransform",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"hasEmissionTextureTransform",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"hasNormalTextureTransform",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"hasOcclusionTextureTransform",void 0),(0,Je._)([(0,Ye.o)()],Ze.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,Je._)([(0,Ye.o)({constValue:!1})],Ze.prototype,"occlusionPass",void 0),(0,Je._)([(0,Ye.o)({constValue:!0})],Ze.prototype,"hasVvInstancing",void 0),(0,Je._)([(0,Ye.o)({constValue:!1})],Ze.prototype,"useCustomDTRExponentForWater",void 0),(0,Je._)([(0,Ye.o)({constValue:!1})],Ze.prototype,"supportsTextureAtlas",void 0),(0,Je._)([(0,Ye.o)({constValue:!0})],Ze.prototype,"useFillLights",void 0);var Hn=T(77133);class Mr extends ur{initializeConfiguration(x,O){super.initializeConfiguration(x,O),O.hasMetallicRoughnessTexture=!1,O.hasEmissionTexture=!1,O.hasOcclusionTexture=!1,O.hasNormalTexture=!1,O.hasModelTransformation=!1,O.normalType=nr.r.Attribute,O.doubleSidedMode=sr.q.WindingOrder,O.hasVertexTangents=!1}initializeProgram(x){return this._initializeProgram(x,Mr.shader)}}Mr.shader=new Xr.J(Hn.R,()=>T.e(3959).then(T.bind(T,93959)));class xr extends Br.F5{constructor(x){super(x,jn),this.supportsEdges=!0,this._configuration=new Ze,this._vertexBufferLayout=function Vn(P){const x=(0,an.U$)().vec3f(vt.T.POSITION);return P.normalType===nr.r.Compressed?x.vec2i16(vt.T.NORMALCOMPRESSED,{glNormalized:!0}):x.vec3f(vt.T.NORMAL),P.hasVertexTangents&&x.vec4f(vt.T.TANGENT),(P.textureId||P.normalTextureId||P.metallicRoughnessTextureId||P.emissiveTextureId||P.occlusionTextureId)&&x.vec2f(vt.T.UV0),P.hasVertexColors&&x.vec4u8(vt.T.COLOR),P.hasSymbolColors&&x.vec4u8(vt.T.SYMBOLCOLOR),(0,q.Z)("enable-feature:objectAndLayerId-rendering")&&x.vec4u8(vt.T.OBJECTANDLAYERIDCOLOR),x}(this.parameters)}isVisibleForOutput(x){return x!==wt.H.Shadow&&x!==wt.H.ShadowExcludeHighlight&&x!==wt.H.ShadowHighlight||this.parameters.castShadows}isVisible(){const x=this.parameters;if(!super.isVisible()||0===x.layerOpacity)return!1;const{hasInstancedColor:O,hasVertexColors:D,hasSymbolColors:ae,vvColor:J}=x,Y="replace"===x.colorMixMode,ie=x.opacity>0,j=x.externalColor&&x.externalColor[3]>0,Ce=O||J||ae;return D&&Ce?Y||ie:D?Y?j:ie:Ce?Y||ie:Y?j:ie}getConfiguration(x,O){return this._configuration.output=x,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?re.Vr.None:this.parameters.cullFace,this._configuration.multipassEnabled=O.multipassEnabled,this._configuration.cullAboveGround=O.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,x!==wt.H.Color&&x!==wt.H.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this._configuration.doubleSidedMode=this.parameters.treeRendering?sr.q.WindingOrder:this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?sr.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?sr.q.WindingOrder:sr.q.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=null!=O.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?cr.f7.Schematic:cr.f7.Normal:cr.f7.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=O.transparencyPassType,this._configuration.enableOffset=O.camera.relativeElevation<dr.ve,this._configuration.snowCover=this.hasSnowCover(O),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(x){return null!=x.weather&&x.weatherVisible&&"snowy"===x.weather.type&&"enabled"===x.weather.snowCover}intersect(x,O,D,ae,J,Y){if(null!=this.parameters.verticalOffset){const ie=D.camera;(0,N.s)(Cr,O[12],O[13],O[14]);let j=null;switch(D.viewingMode){case fr.JY.Global:j=(0,N.n)(Qr,Cr);break;case fr.JY.Local:j=(0,N.c)(Qr,$n)}let Ce=0;const Ae=(0,N.f)(Jn,Cr,ie.eye),ze=(0,N.l)(Ae),tt=(0,N.i)(Ae,Ae,1/ze);let Qe=null;this.parameters.screenSizePerspective&&(Qe=(0,N.j)(j,tt)),Ce+=(0,Yr.Hx)(ie,ze,this.parameters.verticalOffset,Qe??0,this.parameters.screenSizePerspective),(0,N.i)(j,j,Ce),(0,N.t)(Dr,j,D.transform.inverseRotation),ae=(0,N.f)(Gn,ae,Dr),J=(0,N.f)(Kn,J,Dr)}(0,Yr.Bw)(x,D,ae,J,function un(P){return null!=P?(Nr.offset=P,Nr):null}(D.verticalOffset),Y)}produces(x,O){return!(O!==wt.H.Color&&O!==wt.H.Alpha&&O!==wt.H.Depth&&O!==wt.H.Normal&&O!==wt.H.Shadow&&O!==wt.H.ShadowHighlight&&O!==wt.H.ShadowExcludeHighlight&&O!==wt.H.Highlight&&O!==wt.H.ObjectAndLayerIdColor||x!==(this.parameters.transparent?this.parameters.writeDepth?_r.r.TRANSPARENT_MATERIAL:_r.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:_r.r.OPAQUE_MATERIAL)&&x!==_r.r.DRAPED_MATERIAL)}createGLMaterial(x){return new zn(x)}createBufferWriter(){return new Mn(this._vertexBufferLayout)}}class zn extends on.F{constructor(x){super({...x,...x.material.parameters})}_updateShadowState(x){x.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:x.shadowMap.enabled})}_updateOccludeeState(x){x.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:x.hasOccludees})}beginSlot(x){this._output!==wt.H.Color&&this._output!==wt.H.Alpha||(this._updateShadowState(x),this._updateOccludeeState(x));const O=this._material.parameters;this.updateTexture(O.textureId);const D=x.camera.viewInverseTransposeMatrix;return(0,N.s)(O.origin,D[3],D[7],D[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(O.treeRendering?Mr:ur,x)}}const jn=new class Wn extends Bn{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}},Gn=(0,k.c)(),Kn=(0,k.c)(),$n=(0,k.f)(0,0,1),Qr=(0,k.c)(),Dr=(0,k.c)(),Cr=(0,k.c)(),Jn=(0,k.c)(),tr=_t.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function Ar(){return Ar=(0,L.Z)(function*(P,x){const O=yield function Xn(P,x){return yr.apply(this,arguments)}(P,x),D=yield function es(P,x){return Rr.apply(this,arguments)}(O.textureDefinitions??{},x);let ae=0;for(const J in D)if(D.hasOwnProperty(J)){const Y=D[J];ae+=Y?.image?Y.image.width*Y.image.height*4:0}return{resource:O,textures:D,size:ae+(0,Pt.Ul)(O)}}),Ar.apply(this,arguments)}function yr(){return yr=(0,L.Z)(function*(P,x){const O=x?.streamDataRequester;if(O)return function Zn(P,x,O){return Sr.apply(this,arguments)}(P,O,x);const D=yield(0,gt.q6)((0,Et.Z)(P,x));if(!0===D.ok)return D.value.data;(0,be.r9)(D.error),kr(D.error)}),yr.apply(this,arguments)}function Sr(){return Sr=(0,L.Z)(function*(P,x,O){const D=yield(0,gt.q6)(x.request(P,"json",O));if(!0===D.ok)return D.value;(0,be.r9)(D.error),kr(D.error.details.url)}),Sr.apply(this,arguments)}function kr(P){throw new Ve.Z("",`Request for object resource failed: ${P}`)}function Qn(P){const x=P.params,O=x.topology;let D=!0;switch(x.vertexAttributes||(tr.warn("Geometry must specify vertex attributes"),D=!1),x.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const J=x.faces;if(J){if(x.vertexAttributes)for(const Y in x.vertexAttributes){const ie=J[Y];ie?.values?(null!=ie.valueType&&"UInt32"!==ie.valueType&&(tr.warn(`Unsupported indexed geometry indices type '${ie.valueType}', only UInt32 is currently supported`),D=!1),null!=ie.valuesPerElement&&1!==ie.valuesPerElement&&(tr.warn(`Unsupported indexed geometry values per element '${ie.valuesPerElement}', only 1 is currently supported`),D=!1)):(tr.warn(`Indexed geometry does not specify face indices for '${Y}' attribute`),D=!1)}}else tr.warn("Indexed geometries must specify faces"),D=!1;break}default:tr.warn(`Unsupported topology '${O}'`),D=!1}P.params.material||(tr.warn("Geometry requires material"),D=!1);const ae=P.params.vertexAttributes;for(const J in ae)ae[J].values||(tr.warn("Geometries with externally defined attributes are not yet supported"),D=!1);return D}function qn(P){const x=(0,K.cS)();return P.forEach(O=>{const D=O.boundingInfo;null!=D&&((0,K.pp)(x,D.bbMin),(0,K.pp)(x,D.bbMax))}),x}function Rr(){return Rr=(0,L.Z)(function*(P,x){const O=new Array;for(const J in P){const Y=P[J],ie=Y.images[0].data;if(!ie){tr.warn("Externally referenced texture data is not yet supported");continue}const j=Y.encoding+";base64,"+ie,Ce="/textureDefinitions/"+J,Ae="rgba"===Y.channels?Y.alphaChannelUsage||"transparency":"none",ze={noUnpackFlip:!0,wrap:{s:Q.e8.REPEAT,t:Q.e8.REPEAT},preMultiplyAlpha:qr(Ae)!==re.JJ.Opaque},tt=null!=x&&x.disableTextures?Promise.resolve(null):(0,ve.t)(j,x);O.push(tt.then(Qe=>({refId:Ce,image:Qe,parameters:ze,alphaChannelUsage:Ae})))}const D=yield Promise.all(O),ae={};for(const J of D)ae[J.refId]=J;return ae}),Rr.apply(this,arguments)}function qr(P){switch(P){case"mask":return re.JJ.Mask;case"maskAndTransparency":return re.JJ.MaskBlend;case"none":return re.JJ.Opaque;default:return re.JJ.Blend}}function ts(P){const x=P.params;return{id:1,material:x.material,texture:x.texture,region:x.texture}}const rs=new We.G(1,2,"wosr");var ir=T(79331);function ns(P,x){return br.apply(this,arguments)}function br(){return br=(0,L.Z)(function*(P,x){const O=en((0,C.pJ)(P));if("wosr"===O.fileType){const ze=yield x.cache?x.cache.loadWOSR(O.url,x):function Yn(P,x){return Ar.apply(this,arguments)}(O.url,x),{engineResources:tt,referenceBoundingBox:Qe}=function kn(P,x){const O=new Array,D=new Array,ae=new Array,J=new it.r,Y=P.resource,ie=We.G.parse(Y.version||"1.0","wosr");rs.validate(ie);const j=Y.model.name,Ce=Y.model.geometries,Ae=Y.materialDefinitions??{},ze=P.textures;let tt=0;const Qe=new Map;for(let ot=0;ot<Ce.length;ot++){const pt=Ce[ot];if(!Qn(pt))continue;const Bt=ts(pt),Vt=pt.params.vertexAttributes,Ut=[],Nt=nt=>{if("PerAttributeArray"===pt.params.topology)return null;const Ot=pt.params.faces;for(const Ft in Ot)if(Ft===nt)return Ot[Ft].values;return null},Xt=Vt[vt.T.POSITION],Ht=Xt.values.length/Xt.valuesPerElement;for(const nt in Vt){const Ot=Vt[nt],Ft=Ot.values,Zt=Nt(nt)??(0,Ge.KF)(Ht);Ut.push([nt,new ne.a(Ft,Zt,Ot.valuesPerElement,!0)])}const St=Bt.texture,ct=ze&&ze[St];if(ct&&!Qe.has(St)){const{image:nt,parameters:Ot}=ct,Ft=new Ir(nt,Ot);D.push(Ft),Qe.set(St,Ft)}const ut=Qe.get(St),ht=ut?ut.id:void 0,ft=Bt.material;let at=J.get(ft,St);if(null==at){const nt=Ae[ft.substring(ft.lastIndexOf("/")+1)].params;1===nt.transparency&&(nt.transparency=0);const Ot=ct&&ct.alphaChannelUsage,Ft=nt.transparency>0||"transparency"===Ot||"maskAndTransparency"===Ot,Zt=ct?qr(ct.alphaChannelUsage):void 0,er={ambient:(0,k.e)(nt.diffuse),diffuse:(0,k.e)(nt.diffuse),opacity:1-(nt.transparency||0),transparent:Ft,textureAlphaMode:Zt,textureAlphaCutoff:.33,textureId:ht,initTextureTransparent:!0,doubleSided:!0,cullFace:re.Vr.None,colorMixMode:nt.externalColorMixMode||"tint",textureAlphaPremultiplied:ct?.parameters.preMultiplyAlpha??!1};x?.materialParameters&&Object.assign(er,x.materialParameters),at=new xr(er),J.set(ft,St,at)}ae.push(at);const xt=new Xe.Z(at,Ut);tt+=Ut.find(nt=>nt[0]===vt.T.POSITION)?.[1]?.indices.length??0,O.push(xt)}return{engineResources:[{name:j,stageResources:{textures:D,materials:ae,geometries:O},pivotOffset:Y.model.pivotOffset,numberOfVertices:tt,lodThreshold:null}],referenceBoundingBox:qn(O)}}(ze,x);return{lods:tt,referenceBoundingBox:Qe,isEsriSymbolResource:!1,isWosr:!0}}const D=yield x.cache?x.cache.loadGLTF(O.url,x,!!x.usePBR):(0,Oe.Q)(new de.C(x.streamDataRequester),O.url,x,x.usePBR),ae=D.model.meta?.ESRI_proxyEllipsoid,J=D.meta.isEsriSymbolResource&&null!=ae&&D.meta.uri.includes("/RealisticTrees/");J&&!D.customMeta.esriTreeRendering&&(D.customMeta.esriTreeRendering=!0,function os(P,x){for(let O=0;O<P.model.lods.length;++O){const D=P.model.lods[O];for(const ae of D.parts){const J=ae.attributes.normal;if(null==J)return;const Y=ae.attributes.position,ie=Y.count,j=(0,k.c)(),Ce=(0,k.c)(),Ae=(0,k.c)(),ze=new Uint8Array(4*ie),tt=new Float64Array(3*ie),Qe=(0,U.i)((0,R.a)(),ae.transform);let ot=0,pt=0;for(let Bt=0;Bt<ie;Bt++){Y.getVec(Bt,Ce),J.getVec(Bt,j),(0,N.e)(Ce,Ce,ae.transform),(0,N.f)(Ae,Ce,x.center),(0,N.B)(Ae,Ae,x.radius);const Vt=Ae[2],Ut=(0,N.l)(Ae),Nt=Math.min(.45+.55*Ut*Ut,1);(0,N.B)(Ae,Ae,x.radius),null!==Qe&&(0,N.e)(Ae,Ae,Qe),(0,N.n)(Ae,Ae),O+1!==P.model.lods.length&&P.model.lods.length>1&&(0,N.p)(Ae,Ae,j,Vt>-1?.2:Math.min(-4*Vt-3.8,1)),tt[ot]=Ae[0],tt[ot+1]=Ae[1],tt[ot+2]=Ae[2],ot+=3,ze[pt]=255*Nt,ze[pt+1]=255*Nt,ze[pt+2]=255*Nt,ze[pt+3]=255,pt+=4}ae.attributes.normal=new pe.ct(tt),ae.attributes.color=new pe.mc(ze)}}}(D,ae));const Y=!!x.usePBR,ie=D.meta.isEsriSymbolResource?{usePBR:Y,isSchematic:!1,treeRendering:J,mrrFactors:[...In]}:{usePBR:Y,isSchematic:!1,treeRendering:!1,mrrFactors:[...Zr]},j={...x.materialParameters,treeRendering:J},{engineResources:Ce,referenceBoundingBox:Ae}=tn(D,ie,j,x.skipHighLods&&null==O.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:O.specifiedLodIndex});return{lods:Ce,referenceBoundingBox:Ae,isEsriSymbolResource:D.meta.isEsriSymbolResource,isWosr:!1}}),br.apply(this,arguments)}function en(P){const x=P.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return x?{fileType:"gltf",url:x[1],specifiedLodIndex:null!=x[4]?Number(x[4]):null}:P.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:P,specifiedLodIndex:null}:{fileType:"unknown",url:P,specifiedLodIndex:null}}function tn(P,x,O,D){const ae=P.model,J=new Array,Y=new Map,ie=new Map,j=ae.lods.length,Ce=(0,K.cS)();return ae.lods.forEach((Ae,ze)=>{const tt=!0===D.skipHighLods&&(j>1&&0===ze||j>3&&1===ze)||!1===D.skipHighLods&&null!=D.singleLodIndex&&ze!==D.singleLodIndex;if(tt&&0!==ze)return;const Qe=new Ue(Ae.name,Ae.lodThreshold,[0,0,0]);Ae.parts.forEach(ot=>{const pt=tt?new xr({}):function ss(P,x,O,D,ae,J,Y){const ie=x.material+(x.attributes.normal?"_normal":"")+(x.attributes.color?"_color":"")+(x.attributes.texCoord0?"_texCoord0":"")+(x.attributes.tangent?"_tangent":""),j=P.materials.get(x.material),Ce=null!=x.attributes.texCoord0,Ae=null!=x.attributes.normal;if(null==j)return null;const ze=function is(P){switch(P){case"BLEND":return re.JJ.Blend;case"MASK":return re.JJ.Mask;case"OPAQUE":case null:case void 0:return re.JJ.Opaque}}(j.alphaMode);if(!J.has(ie)){if(Ce){const Ht=(St,ct=!1)=>{if(null!=St&&!Y.has(St)){const ut=P.textures.get(St);if(null!=ut){const ht=ut.data;Y.set(St,new Ir((0,fe.$A)(ht)?ht.data:ht,{...ut.parameters,preMultiplyAlpha:!(0,fe.$A)(ht)&&ct,encoding:(0,fe.$A)(ht)&&null!=ht.encoding?ht.encoding:void 0}))}}};Ht(j.textureColor,ze!==re.JJ.Opaque),Ht(j.textureNormal),Ht(j.textureOcclusion),Ht(j.textureEmissive),Ht(j.textureMetallicRoughness)}const Qe=j.color[0]**(1/ir.j),ot=j.color[1]**(1/ir.j),pt=j.color[2]**(1/ir.j),Bt=j.emissiveFactor[0]**(1/ir.j),Vt=j.emissiveFactor[1]**(1/ir.j),Ut=j.emissiveFactor[2]**(1/ir.j),Nt=null!=j.textureColor&&Ce?Y.get(j.textureColor):null,Xt=function bn({normalTexture:P,metallicRoughnessTexture:x,metallicFactor:O,roughnessFactor:D,emissiveTexture:ae,emissiveFactor:J,occlusionTexture:Y}){return null==P&&null==x&&null==ae&&(null==J||(0,N.h)(J,k.Z))&&null==Y&&(null==D||1===D)&&(null==O||1===O||0===O)}({normalTexture:j.textureNormal,metallicRoughnessTexture:j.textureMetallicRoughness,metallicFactor:j.metallicFactor,roughnessFactor:j.roughnessFactor,emissiveTexture:j.textureEmissive,emissiveFactor:j.emissiveFactor,occlusionTexture:j.textureOcclusion});J.set(ie,new xr({...D,transparent:ze===re.JJ.Blend,customDepthTest:re.Gv.Lequal,textureAlphaMode:ze,textureAlphaCutoff:j.alphaCutoff,diffuse:[Qe,ot,pt],ambient:[Qe,ot,pt],opacity:j.opacity,doubleSided:j.doubleSided,doubleSidedType:"winding-order",cullFace:j.doubleSided?re.Vr.None:re.Vr.Back,hasVertexColors:!!x.attributes.color,hasVertexTangents:!!x.attributes.tangent,normalType:Ae?nr.r.Attribute:nr.r.ScreenDerivative,castShadows:!0,textureId:Nt?.id,colorMixMode:j.colorMixMode,normalTextureId:null!=j.textureNormal&&Ce?Y.get(j.textureNormal).id:void 0,textureAlphaPremultiplied:null!=Nt&&!!Nt.parameters.preMultiplyAlpha,occlusionTextureId:null!=j.textureOcclusion&&Ce?Y.get(j.textureOcclusion).id:void 0,emissiveTextureId:null!=j.textureEmissive&&Ce?Y.get(j.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=j.textureMetallicRoughness&&Ce?Y.get(j.textureMetallicRoughness).id:void 0,emissiveFactor:[Bt,Vt,Ut],mrrFactors:Xt?[...Ln]:[j.metallicFactor,j.roughnessFactor,D.mrrFactors[2]],isSchematic:Xt,colorTextureTransformMatrix:ke(j.colorTextureTransform),normalTextureTransformMatrix:ke(j.normalTextureTransform),occlusionTextureTransformMatrix:ke(j.occlusionTextureTransform),emissiveTextureTransformMatrix:ke(j.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:ke(j.metallicRoughnessTextureTransform),...ae}))}const tt=J.get(ie);if(O.stageResources.materials.push(tt),Ce){const Qe=ot=>{null!=ot&&O.stageResources.textures.push(Y.get(ot))};Qe(j.textureColor),Qe(j.textureNormal),Qe(j.textureOcclusion),Qe(j.textureEmissive),Qe(j.textureMetallicRoughness)}return tt}(ae,ot,Qe,x,O,Y,ie),{geometry:Bt,vertexCount:Vt}=function as(P,x){const O=P.attributes.position.count,D=(0,Re.p)(P.indices||O,P.primitiveType),ae=Se(3*O),{typedBuffer:J,typedBufferStride:Y}=P.attributes.position;(0,we.t)(ae,J,P.transform,3,Y);const ie=[[vt.T.POSITION,new ne.a(ae,D,3,!0)]];if(null!=P.attributes.normal){const j=Se(3*O),{typedBuffer:Ce,typedBufferStride:Ae}=P.attributes.normal;(0,G.n)(Or,P.transform),(0,we.a)(j,Ce,Or,3,Ae),ie.push([vt.T.NORMAL,new ne.a(j,D,3,!0)])}if(null!=P.attributes.tangent){const j=Se(4*O),{typedBuffer:Ce,typedBufferStride:Ae}=P.attributes.tangent;(0,G.n)(Or,P.transform),(0,me.t)(j,Ce,Or,4,Ae),ie.push([vt.T.TANGENT,new ne.a(j,D,4,!0)])}if(null!=P.attributes.texCoord0){const j=Se(2*O),{typedBuffer:Ce,typedBufferStride:Ae}=P.attributes.texCoord0;(0,Pe.n)(j,Ce,2,Ae),ie.push([vt.T.UV0,new ne.a(j,D,2,!0)])}if(null!=P.attributes.color){const j=new Uint8Array(4*O);4===P.attributes.color.elementCount?P.attributes.color instanceof pe.ek?(0,me.s)(j,P.attributes.color,255):P.attributes.color instanceof pe.mc?(0,Me.c)(j,P.attributes.color):P.attributes.color instanceof pe.v6&&(0,me.s)(j,P.attributes.color,1/256):(j.fill(255),P.attributes.color instanceof pe.ct?(0,we.s)(j,P.attributes.color,255,4):P.attributes.color instanceof pe.ne?(0,ce.c)(j,P.attributes.color.typedBuffer,4,P.attributes.color.typedBufferStride):P.attributes.color instanceof pe.mw&&(0,we.s)(j,P.attributes.color,1/256,4)),ie.push([vt.T.COLOR,new ne.a(j,D,4,!0)])}return{geometry:new Xe.Z(x,ie),vertexCount:O}}(ot,pt??new xr({})),Ut=Bt.boundingInfo;null!=Ut&&0===ze&&((0,K.pp)(Ce,Ut.bbMin),(0,K.pp)(Ce,Ut.bbMax)),null!=pt&&(Qe.stageResources.geometries.push(Bt),Qe.numberOfVertices+=Vt)}),tt||J.push(Qe)}),{engineResources:J,referenceBoundingBox:Ce}}const Or=(0,H.a)()},9044:(Ne,le,T)=>{var C,K;T.d(le,{a9:()=>C}),T(21286),(K=C||(C={}))[K.Multiply=1]="Multiply",K[K.Ignore=2]="Ignore",K[K.Replace=3]="Replace",K[K.Tint=4]="Tint"},19625:(Ne,le,T)=>{T.d(le,{Gw:()=>N,U$:()=>R});var L=T(60479),C=T(81096),G=T(2282);class H{constructor(F,Z){this.layout=F,this.buffer="number"==typeof Z?new ArrayBuffer(Z*F.stride):Z;for(const pe of F.fields.keys()){const we=F.fields.get(pe);this[pe]=new we.constructor(this.buffer,we.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(F,Z){const pe=this[F];return pe&&pe.elementCount===Z.ElementCount&&pe.elementType===Z.ElementType?pe:null}slice(F,Z){return new H(this.layout,this.buffer.slice(F*this.stride,Z*this.stride))}copyFrom(F,Z=0,pe=0,we=F.count){const me=this.stride;if(me%4==0){const Pe=new Uint32Array(F.buffer,Z*me,we*me/4);new Uint32Array(this.buffer,pe*me,we*me/4).set(Pe)}else{const Pe=new Uint8Array(F.buffer,Z*me,we*me);new Uint8Array(this.buffer,pe*me,we*me).set(Pe)}return this}get usedMemory(){return this.byteLength}dispose(){}}class U{constructor(F=null){this._stride=0,this._lastAligned=0,this._fields=new Map,F&&(this._stride=F.stride,F.fields.forEach(Z=>{return this._fields.set(Z[0],{...Z[1],constructor:(ue=Z[1].constructor,Se.get(ue))});var ue}))}vec2f(F,Z){return this._appendField(F,L.Eu,Z),this}vec2f64(F,Z){return this._appendField(F,L.q6,Z),this}vec3f(F,Z){return this._appendField(F,L.ct,Z),this}vec3f64(F,Z){return this._appendField(F,L.fP,Z),this}vec4f(F,Z){return this._appendField(F,L.ek,Z),this}vec4f64(F,Z){return this._appendField(F,L.Cd,Z),this}mat3f(F,Z){return this._appendField(F,L.gK,Z),this}mat3f64(F,Z){return this._appendField(F,L.ey,Z),this}mat4f(F,Z){return this._appendField(F,L.bj,Z),this}mat4f64(F,Z){return this._appendField(F,L.O1,Z),this}vec4u8(F,Z){return this._appendField(F,L.mc,Z),this}f32(F,Z){return this._appendField(F,L.ly,Z),this}f64(F,Z){return this._appendField(F,L.oS,Z),this}u8(F,Z){return this._appendField(F,L.D_,Z),this}u16(F,Z){return this._appendField(F,L.av,Z),this}i8(F,Z){return this._appendField(F,L.Hz,Z),this}vec2i8(F,Z){return this._appendField(F,L.Vs,Z),this}vec2i16(F,Z){return this._appendField(F,L.or,Z),this}vec2u8(F,Z){return this._appendField(F,L.xA,Z),this}vec4u16(F,Z){return this._appendField(F,L.v6,Z),this}u32(F,Z){return this._appendField(F,L.Nu,Z),this}_appendField(F,Z,pe){if(this._fields.has(F))return void(0,G.hu)(!1,`${F} already added to vertex buffer layout`);const we=Z.ElementCount*(0,C.n1)(Z.ElementType),me=this._stride;this._stride+=we,this._fields.set(F,{size:we,constructor:Z,offset:me,optional:pe})}createBuffer(F){return new H(this,F)}createView(F){return new H(this,F)}clone(){const F=new U;return F._stride=this._stride,F._fields=new Map,this._fields.forEach((Z,pe)=>F._fields.set(pe,Z)),F.BufferType=this.BufferType,F}get stride(){if(this._lastAligned!==this._fields.size){let F=1;this._fields.forEach(Z=>F=Math.max(F,(0,C.n1)(Z.constructor.ElementType))),this._stride=Math.floor((this._stride+F-1)/F)*F,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function R(){return new U}class N{constructor(F){this.fields=new Array,F.fields.forEach((Z,pe)=>{const we={...Z,constructor:K(Z.constructor)};this.fields.push([pe,we])}),this.stride=F.stride}}const k=[L.ly,L.Eu,L.ct,L.ek,L.gK,L.bj,L.oS,L.q6,L.fP,L.Cd,L.ey,L.O1,L.D_,L.xA,L.ne,L.mc,L.av,L.TS,L.mw,L.v6,L.Nu,L.qt,L.G5,L.hu,L.Hz,L.Vs,L.P_,L.ir,L.o7,L.or,L.n1,L.zO,L.Jj,L.wA,L.PP,L.TN];function K(ue){return`${ue.ElementType}_${ue.ElementCount}`}const Se=new Map;k.forEach(ue=>Se.set(K(ue),ue))},477:(Ne,le,T)=>{T.d(le,{Ue:()=>me,gI:()=>_t}),T(30217);var C=T(550),G=T(48977),H=T(78451),U=T(84161),R=T(28093),k=(T(993),T(4794)),Se=(T(5548),T(4688),T(59617));function me(ve=[0,0,0],ne=[-1,-1,-1],re=(0,H.a)()){return{center:(0,R.g)(ve),halfSize:(0,R.g)(ne),quaternion:(0,H.b)(re)}}function _t(ve,ne,re,Xe,q){if((0,G.c)(q.quaternion,ve.quaternion),Xe===Se.JY.Global){(0,G.a)(Ge,ve.quaternion),(0,U.v)(it,ve.center,Ge),(0,U.w)(be,it),(0,U.x)(We,be,ve.halfSize),(0,U.u)(We,be,We);const oe=(0,U.l)(We);(0,U.g)(We,be,ve.halfSize);const ge=(0,U.l)(We);if(oe<re)(0,U.c)(q.center,ve.center),(0,U.s)(it,re,re,re),(0,U.g)(q.halfSize,ve.halfSize,it);else{const W=ge>0?1+ne/ge:1,$=oe>0?1+re/oe:1,se=($+W)/2,X=($-W)/2;(0,U.i)(q.halfSize,be,X),(0,U.q)(q.halfSize,q.halfSize,ve.halfSize,se),(0,U.i)(q.center,be,se),(0,U.q)(q.center,q.center,ve.halfSize,X),(0,U.z)(it,it),(0,U.A)(q.center,q.center,it),(0,U.v)(q.center,q.center,q.quaternion)}}else{const oe=(0,U.s)(it,0,0,1);(0,U.q)(q.center,ve.center,oe,(re+ne)/2),(0,G.a)(Ge,ve.quaternion),(0,U.v)(oe,oe,Ge),(0,U.w)(oe,oe),(0,U.q)(q.halfSize,ve.halfSize,oe,(re-ne)/2)}return q}(0,H.a)(),(0,R.c)(),(0,R.c)(),(0,k.c)(),(0,C.a)(),(()=>{const ve=new Int8Array(162);let ne=0;const re=Xe=>{for(let q=0;q<Xe.length;q++)ve[ne+q]=Xe[q];ne+=6};re([6,2,3,1,5,4]),re([0,2,3,1,5,4]),re([0,2,3,7,5,4]),re([0,1,3,2,6,4]),re([0,1,3,2,0,0]),re([0,1,5,7,3,2]),re([0,1,3,7,6,4]),re([0,1,3,7,6,2]),re([0,1,5,7,6,2]),re([0,1,5,4,6,2]),re([0,1,5,4,0,0]),re([0,1,3,7,5,4]),re([0,2,6,4,0,0]),re([0,0,0,0,0,0]),re([1,3,7,5,0,0]),re([2,3,7,6,4,0]),re([2,3,7,6,0,0]),re([2,3,1,5,7,6]),re([0,1,5,7,6,2]),re([0,1,5,7,6,4]),re([0,1,3,7,6,4]),re([4,5,7,6,2,0]),re([4,5,7,6,0,0]),re([4,5,1,3,7,6]),re([0,2,3,7,5,4]),re([6,2,3,7,5,4]),re([6,2,3,1,5,4])})();const it=(0,R.c)(),be=(0,R.c)(),We=(0,R.c)(),Ge=(0,H.a)()},52382:(Ne,le,T)=>{T.d(le,{Zu:()=>R,bA:()=>N,qj:()=>k});var L=T(13934),C=T(51040),G=T(95285),H=T(17625);function U(K){K.varyings.add("linearDepth","float")}function R(K){K.vertex.uniforms.add(new G.A("nearFar",(Te,Se)=>Se.camera.nearFar))}function N(K){K.vertex.code.add(H.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function k(K,Te){const{vertex:Se}=K;switch(Te.output){case L.H.Color:if(Te.receiveShadows)return U(K),void Se.code.add(H.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case L.H.Depth:case L.H.Shadow:case L.H.ShadowHighlight:case L.H.ShadowExcludeHighlight:return K.include(C.up,Te),U(K),R(K),N(K),void Se.code.add(H.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}Se.code.add(H.H`void forwardLinearDepth() {}`)}},73132:(Ne,le,T)=>{T.d(le,{w:()=>C});var L=T(17625);function C(G){G.vertex.code.add(L.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},39523:(Ne,le,T)=>{T.d(le,{k:()=>G});var L=T(17625),C=T(16396);function G(H,U=!0){H.attributes.add(C.T.POSITION,"vec2"),U&&H.varyings.add("uv","vec2"),H.vertex.code.add(L.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${U?L.H`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}},13934:(Ne,le,T)=>{var L,C;T.d(le,{H:()=>L}),(C=L||(L={}))[C.Color=0]="Color",C[C.Depth=1]="Depth",C[C.Normal=2]="Normal",C[C.Shadow=3]="Shadow",C[C.ShadowHighlight=4]="ShadowHighlight",C[C.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",C[C.Highlight=6]="Highlight",C[C.Alpha=7]="Alpha",C[C.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",C[C.CompositeColor=9]="CompositeColor",C[C.COUNT=10]="COUNT"},78925:(Ne,le,T)=>{T.d(le,{f5:()=>Te});var L=T(28347),C=T(43703),G=T(84161),H=T(28093),U=T(77739),N=(T(97139),T(17625));function Te(de,Oe){!function Se(de,Oe,...Re){if(!Oe.hasSlicePlane){const ke=N.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return Oe.hasSliceInVertexProgram&&de.vertex.code.add(ke),void de.fragment.code.add(ke)}Oe.hasSliceInVertexProgram&&de.vertex.uniforms.add(...Re),de.fragment.uniforms.add(...Re);const fe=N.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,Le=N.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,He=Oe.hasSliceHighlight?N.H`
        ${Le}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:N.H`#define highlightSlice(_color_, _pos_) (_color_)`;Oe.hasSliceInVertexProgram&&de.vertex.code.add(fe),de.fragment.code.add(fe),de.fragment.code.add(He)}(de,Oe,new U.B("slicePlaneOrigin",(Re,fe)=>function pe(de,Oe,Re){if(null==Re.slicePlane)return H.Z;const fe=ue(de,Oe,Re),Le=F(fe,Re.slicePlane),He=Z(de,fe,Re);return null!=He?(0,G.e)(Pe,Le,He):Le}(Oe,Re,fe)),new U.B("slicePlaneBasis1",(Re,fe)=>we(Oe,Re,fe,fe.slicePlane?.basis1)),new U.B("slicePlaneBasis2",(Re,fe)=>we(Oe,Re,fe,fe.slicePlane?.basis2)))}function ue(de,Oe,Re){return de.instancedDoublePrecision?(0,G.s)(me,Re.camera.viewInverseTransposeMatrix[3],Re.camera.viewInverseTransposeMatrix[7],Re.camera.viewInverseTransposeMatrix[11]):Oe.slicePlaneLocalOrigin}function F(de,Oe){return null!=de?(0,G.f)(Pe,Oe.origin,de):Oe.origin}function Z(de,Oe,Re){return de.hasSliceTranslatedView?null!=Oe?(0,L.w)(Me,Re.camera.viewMatrix,Oe):Re.camera.viewMatrix:null}function we(de,Oe,Re,fe){if(null==fe||null==Re.slicePlane)return H.Z;const Le=ue(de,Oe,Re),He=F(Le,Re.slicePlane),ke=Z(de,Le,Re);return null!=ke?((0,G.g)(ce,fe,He),(0,G.e)(Pe,He,ke),(0,G.e)(ce,ce,ke),(0,G.f)(ce,ce,Pe)):fe}const me=(0,H.c)(),Pe=(0,H.c)(),ce=(0,H.c)(),Me=(0,C.a)()},24255:(Ne,le,T)=>{T.d(le,{w:()=>G});var L=T(52382),C=T(17625);function G(H){(0,L.bA)(H),H.vertex.code.add(C.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),H.vertex.code.add(C.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},60355:(Ne,le,T)=>{T.d(le,{PO:()=>me,fQ:()=>Me});var L=T(17626),C=T(30217),G=T(550),H=T(43703),U=T(84161),R=T(28093),N=T(13934),k=T(7228),K=T(99198),Te=T(77739),Se=T(17625),ue=T(91574),F=T(63123),Z=T(87601),pe=T(16396),we=T(2757);class me extends Z.m{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}(0,L._)([(0,Z.o)()],me.prototype,"instancedDoublePrecision",void 0),(0,L._)([(0,Z.o)()],me.prototype,"hasModelTransformation",void 0);const ce=(0,G.a)();function Me(Oe,Re){const fe=Re.hasModelTransformation,Le=Re.instancedDoublePrecision;fe&&(Oe.vertex.uniforms.add(new F.g("model",ke=>ke.modelTransformation??H.I)),Oe.vertex.uniforms.add(new ue.c("normalLocalOriginFromModel",ke=>((0,C.n)(ce,ke.modelTransformation??H.I),ce)))),Re.instanced&&Le&&(Oe.attributes.add(pe.T.INSTANCEMODELORIGINHI,"vec3"),Oe.attributes.add(pe.T.INSTANCEMODELORIGINLO,"vec3"),Oe.attributes.add(pe.T.INSTANCEMODEL,"mat3"),Oe.attributes.add(pe.T.INSTANCEMODELNORMAL,"mat3"));const He=Oe.vertex;Le&&(He.include(k.$,Re),He.uniforms.add(new Te.B("viewOriginHi",(ke,st)=>(0,we.U8)((0,U.s)(de,st.camera.viewInverseTransposeMatrix[3],st.camera.viewInverseTransposeMatrix[7],st.camera.viewInverseTransposeMatrix[11]),de)),new Te.B("viewOriginLo",(ke,st)=>(0,we.GB)((0,U.s)(de,st.camera.viewInverseTransposeMatrix[3],st.camera.viewInverseTransposeMatrix[7],st.camera.viewInverseTransposeMatrix[11]),de)))),He.code.add(Se.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${fe?Le?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":Le?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${Le?Se.H`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),He.code.add(Se.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${fe?Le?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":Le?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),Re.output===N.H.Normal&&((0,K._8)(He),He.code.add(Se.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${fe?Le?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":Le?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),Re.hasVertexTangents&&He.code.add(Se.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${fe?Le?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":Le?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const de=(0,R.c)()},53107:(Ne,le,T)=>{T.d(le,{O:()=>H,r:()=>U});var U,R,L=T(94573),C=T(17625),G=T(16396);function H(R,N){switch(N.normalType){case U.Compressed:R.attributes.add(G.T.NORMALCOMPRESSED,"vec2"),R.vertex.code.add(C.H`vec3 normalModel() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
return vec3(normalCompressed + sign(normalCompressed) * min(z, 0.0), z);
}`);break;case U.Attribute:R.attributes.add(G.T.NORMAL,"vec3"),R.vertex.code.add(C.H`vec3 normalModel() {
return normal;
}`);break;case U.ScreenDerivative:R.fragment.code.add(C.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,L.Bg)(N.normalType);case U.COUNT:case U.Ground:}}(R=U||(U={}))[R.Attribute=0]="Attribute",R[R.Compressed=1]="Compressed",R[R.Ground=2]="Ground",R[R.ScreenDerivative=3]="ScreenDerivative",R[R.COUNT=4]="COUNT"},84833:(Ne,le,T)=>{T.d(le,{f:()=>G});var L=T(17625),C=T(16396);function G(H){H.attributes.add(C.T.POSITION,"vec3"),H.vertex.code.add(L.H`vec3 positionModel() { return position; }`)}},72326:(Ne,le,T)=>{T.d(le,{R:()=>N});var L=T(9044),C=T(17625);function G(k){k.vertex.code.add(C.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${C.H.int(L.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${C.H.int(L.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${C.H.int(L.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${C.H.int(L.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var H=T(40938),U=T(16396),R=T(21778);function N(k,K){K.hasSymbolColors?(k.include(G),k.attributes.add(U.T.SYMBOLCOLOR,"vec4"),k.varyings.add("colorMixMode","mediump float"),k.vertex.code.add(C.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(k.fragment.uniforms.add(new H._("colorMixMode",Te=>R.FZ[Te.colorMixMode])),k.vertex.code.add(C.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},36603:(Ne,le,T)=>{T.d(le,{D:()=>U,N:()=>H});var H,R,L=T(94573),C=T(17625),G=T(16396);function U(R,N){switch(N.textureCoordinateType){case H.Default:return R.attributes.add(G.T.UV0,"vec2"),R.varyings.add("vuv0","vec2"),void R.vertex.code.add(C.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case H.Compressed:return R.attributes.add(G.T.UV0,"vec2"),R.varyings.add("vuv0","vec2"),void R.vertex.code.add(C.H`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case H.Atlas:return R.attributes.add(G.T.UV0,"vec2"),R.varyings.add("vuv0","vec2"),R.attributes.add(G.T.UVREGION,"vec4"),R.varyings.add("vuvRegion","vec4"),void R.vertex.code.add(C.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,L.Bg)(N.textureCoordinateType);case H.None:return void R.vertex.code.add(C.H`void forwardTextureCoordinates() {}`);case H.COUNT:return}}(R=H||(H={}))[R.None=0]="None",R[R.Default=1]="Default",R[R.Atlas=2]="Atlas",R[R.Compressed=3]="Compressed",R[R.COUNT=4]="COUNT"},58173:(Ne,le,T)=>{T.d(le,{c:()=>G});var L=T(17625),C=T(16396);function G(H,U){U.hasVertexColors?(H.attributes.add(C.T.COLOR,"vec4"),H.varyings.add("vColor","vec4"),H.vertex.code.add(L.H`void forwardVertexColor() { vColor = color; }`),H.vertex.code.add(L.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):H.vertex.code.add(L.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},21799:(Ne,le,T)=>{T.d(le,{Bb:()=>K,d4:()=>Te});var L=T(94573),C=T(550),H=(T(4794),T(53107)),U=T(51040),R=T(17625),N=T(9546),k=T(91574);function K(ue,F){switch(F.normalType){case H.r.Attribute:case H.r.Compressed:ue.include(H.O,F),ue.varyings.add("vNormalWorld","vec3"),ue.varyings.add("vNormalView","vec3"),ue.vertex.uniforms.add(new N.j("transformNormalGlobalFromModel",Z=>Z.transformNormalGlobalFromModel),new k.c("transformNormalViewFromGlobal",Z=>Z.transformNormalViewFromGlobal)),ue.vertex.code.add(R.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case H.r.Ground:ue.include(U.up,F),ue.varyings.add("vNormalWorld","vec3"),ue.vertex.code.add(R.H`
        void forwardNormal() {
          vNormalWorld = ${F.spherical?R.H`normalize(vPositionWorldCameraRelative);`:R.H`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case H.r.ScreenDerivative:ue.vertex.code.add(R.H`void forwardNormal() {}`);break;default:(0,L.Bg)(F.normalType);case H.r.COUNT:}}class Te extends U.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,C.a)()}}},51040:(Ne,le,T)=>{T.d(le,{su:()=>F,up:()=>ue});var L=T(550),C=T(43703),G=T(28093),H=T(84833),U=T(7228),R=T(77739),N=T(97139),k=T(17625),K=T(9546),Te=T(91574),Se=T(63123);function ue(pe,we){pe.include(H.f);const me=pe.vertex;me.include(U.$,we),pe.varyings.add("vPositionWorldCameraRelative","vec3"),pe.varyings.add("vPosition_view","vec3"),me.uniforms.add(new N.J("transformWorldFromViewTH",Pe=>Pe.transformWorldFromViewTH),new N.J("transformWorldFromViewTL",Pe=>Pe.transformWorldFromViewTL),new Te.c("transformViewFromCameraRelativeRS",Pe=>Pe.transformViewFromCameraRelativeRS),new Se.g("transformProjFromView",Pe=>Pe.transformProjFromView),new K.j("transformWorldFromModelRS",Pe=>Pe.transformWorldFromModelRS),new R.B("transformWorldFromModelTH",Pe=>Pe.transformWorldFromModelTH),new R.B("transformWorldFromModelTL",Pe=>Pe.transformWorldFromModelTL)),me.code.add(k.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),me.code.add(k.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${we.spherical?k.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:k.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),pe.fragment.uniforms.add(new N.J("transformWorldFromViewTL",Pe=>Pe.transformWorldFromViewTL)),me.code.add(k.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),pe.fragment.code.add(k.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class F extends k.K{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,G.c)(),this.transformWorldFromViewTL=(0,G.c)(),this.transformViewFromCameraRelativeRS=(0,L.a)(),this.transformProjFromView=(0,C.a)()}}},85982:(Ne,le,T)=>{T.d(le,{i:()=>U});var L=T(94573),C=T(36603),G=T(17625);function H(R){R.fragment.code.add(G.H`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function U(R,N){switch(R.include(C.D,N),N.textureCoordinateType){case C.N.Default:case C.N.Compressed:return void R.fragment.code.add(G.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case C.N.Atlas:return R.include(H),void R.fragment.code.add(G.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:(0,L.Bg)(N.textureCoordinateType);case C.N.None:case C.N.COUNT:return}}},52071:(Ne,le,T)=>{T.d(le,{L:()=>Z});var L=T(993),C=T(4794),G=T(84161),H=T(28093),U=T(97139),R=T(17625);function N(me){me.vertex.code.add(R.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),me.vertex.code.add(R.H`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),me.vertex.code.add(R.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),me.vertex.code.add(R.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),me.vertex.code.add(R.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),me.vertex.code.add(R.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}const Se=(0,H.c)();var ue=T(99198),F=T(69960);function Z(me,Pe){const ce=me.vertex;Pe.hasVerticalOffset?(function we(me){me.uniforms.add(new F.N("verticalOffset",(Pe,ce)=>{const{minWorldLength:Me,maxWorldLength:de,screenLength:Oe}=Pe.verticalOffset,Re=Math.tan(.5*ce.camera.fovY)/(.5*ce.camera.fullViewport[3]);return(0,L.s)(pe,Oe*(ce.camera.pixelRatio||1),Re,Me,de)}))}(ce),Pe.hasScreenSizePerspective&&(me.include(N),function K(me){me.uniforms.add(new U.J("screenSizePerspectiveAlignment",Pe=>function Te(me){return(0,G.s)(Se,me.parameters.divisor,me.parameters.offset,me.minScaleFactor)}(Pe.screenSizePerspectiveAlignment||Pe.screenSizePerspective)))}(ce),(0,ue.hY)(me.vertex,Pe)),ce.code.add(R.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${Pe.spherical?R.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:R.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${Pe.hasScreenSizePerspective?R.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:R.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):ce.code.add(R.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const pe=(0,C.c)()},75958:(Ne,le,T)=>{T.d(le,{s:()=>Re});var L=T(52382),C=T(13934),G=T(78925),H=T(24255),U=T(53107),R=T(17625),N=T(16396);function k(fe,Le){const He=Le.output===C.H.ObjectAndLayerIdColor,ke=Le.objectAndLayerIdColorInstanced;He&&(fe.varyings.add("objectAndLayerIdColorVarying","vec4"),fe.attributes.add(ke?N.T.INSTANCEOBJECTANDLAYERIDCOLOR:N.T.OBJECTANDLAYERIDCOLOR,"vec4")),fe.vertex.code.add(R.H`
     void forwardObjectAndLayerIdColor() {
      ${He?ke?R.H`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:R.H`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:R.H``} }`),fe.fragment.code.add(R.H`
      void outputObjectAndLayerIdColor() {
        ${He?R.H`fragColor = objectAndLayerIdColorVarying;`:R.H``} }`)}var K=T(36603),Te=T(21799),Se=T(92409),ue=T(19278);function F(fe,Le){switch(Le.output){case C.H.Shadow:case C.H.ShadowHighlight:case C.H.ShadowExcludeHighlight:fe.fragment.include(Se.f),fe.fragment.code.add(R.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case C.H.Depth:fe.fragment.include(ue.n),fe.fragment.code.add(R.H`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}var Z=T(4794),pe=T(35387);const we=(0,Z.f)(1,1,0,1),me=(0,Z.f)(1,0,1,1);function Pe(fe){fe.fragment.uniforms.add(new pe.A("depthTexture",(Le,He)=>He.mainDepth)),fe.fragment.constants.add("occludedHighlightFlag","vec4",we).add("unoccludedHighlightFlag","vec4",me),fe.fragment.code.add(R.H`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}var ce=T(1485),Me=T(72397),de=T(99198),Oe=T(42743);function Re(fe,Le){const{vertex:He,fragment:ke}=fe,st=Le.hasColorTexture&&Le.alphaDiscardMode!==Oe.JJ.Opaque;switch(Le.output){case C.H.Depth:case C.H.Shadow:case C.H.ShadowHighlight:case C.H.ShadowExcludeHighlight:case C.H.ObjectAndLayerIdColor:(0,de.Sv)(He,Le),fe.include(H.w,Le),fe.include(K.D,Le),fe.include(ce.k,Le),fe.include(F,Le),fe.include(G.f5,Le),fe.include(k,Le),(0,L.Zu)(fe),fe.varyings.add("depth","float"),st&&ke.uniforms.add(new pe.A("tex",Ue=>Ue.texture)),He.code.add(R.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),fe.include(Me.z,Le),ke.code.add(R.H`
          void main(void) {
            discardBySlice(vpos);
            ${st?R.H`
                    vec4 texColor = texture(tex, ${Le.hasColorTextureTransform?R.H`colorUV`:R.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${Le.output===C.H.ObjectAndLayerIdColor?R.H`outputObjectAndLayerIdColor();`:R.H`outputDepth(depth);`}
          }
        `);break;case C.H.Normal:(0,de.Sv)(He,Le),fe.include(H.w,Le),fe.include(U.O,Le),fe.include(Te.Bb,Le),fe.include(K.D,Le),fe.include(ce.k,Le),st&&ke.uniforms.add(new pe.A("tex",Et=>Et.texture)),Le.normalType===U.r.ScreenDerivative&&fe.varyings.add("vPositionView","vec3"),He.code.add(R.H`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${Le.normalType===U.r.Attribute||Le.normalType===U.r.Compressed?R.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:R.H`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),fe.include(G.f5,Le),fe.include(Me.z,Le),ke.code.add(R.H`
          void main() {
            discardBySlice(vpos);
            ${st?R.H`
                    vec4 texColor = texture(tex, ${Le.hasColorTextureTransform?R.H`colorUV`:R.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${Le.normalType===U.r.ScreenDerivative?R.H`vec3 normal = screenDerivativeNormal(vPositionView);`:R.H`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break;case C.H.Highlight:(0,de.Sv)(He,Le),fe.include(H.w,Le),fe.include(K.D,Le),fe.include(ce.k,Le),st&&ke.uniforms.add(new pe.A("tex",Ue=>Ue.texture)),He.code.add(R.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),fe.include(G.f5,Le),fe.include(Me.z,Le),fe.include(Pe,Le),ke.code.add(R.H`
          void main() {
            discardBySlice(vpos);
            ${st?R.H`
                    vec4 texColor = texture(tex, ${Le.hasColorTextureTransform?R.H`colorUV`:R.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},47923:(Ne,le,T)=>{T.d(le,{S:()=>G});var L=T(19278),C=T(17625);function G(H){H.include(L.n),H.code.add(C.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTex, 0)));
return linearDepthFromRGBA(texelFetch(depthTex, iuv, 0), nearFar);
}`)}},29052:(Ne,le,T)=>{T.d(le,{Q:()=>K});var L=T(36603),C=T(85982),G=T(96395),H=T(17625),U=T(5864),R=T(35387),N=T(37847),k=T(16396);function K(Te,Se){const ue=Te.fragment;Se.hasVertexTangents?(Te.attributes.add(k.T.TANGENT,"vec4"),Te.varyings.add("vTangent","vec4"),ue.code.add(Se.doubleSidedMode===G.q.WindingOrder?H.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`:H.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):ue.code.add(H.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),Se.textureCoordinateType!==L.N.None&&(Te.include(C.i,Se),ue.uniforms.add(Se.pbrTextureBindType===N.P.Pass?new R.A("normalTexture",F=>F.textureNormal):new U.R("normalTexture",F=>F.textureNormal)),ue.code.add(H.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}},57581:(Ne,le,T)=>{T.d(le,{K:()=>Qt});var L=T(17625),C=T(35387),G=T(17626),H=T(62208),U=T(32917),R=T(27422),N=T(77712),Se=(T(90912),T(85931),T(8314),T(76898)),ue=T(67831);T(1036),T(77029);var Ue,Ie,me=T(67969),Me=(T(85775),T(49266),T(20781)),de=T(18952),Oe=T(31548);(Ie=Ue||(Ue={}))[Ie.RED=0]="RED",Ie[Ie.RG=1]="RG",Ie[Ie.RGBA4=2]="RGBA4",Ie[Ie.RGBA=3]="RGBA",Ie[Ie.RGBA_MIPMAP=4]="RGBA_MIPMAP",Ie[Ie.R16F=5]="R16F",Ie[Ie.RGBA16F=6]="RGBA16F";const Et=new Oe.X;Et.pixelFormat=me.VI.RED,Et.internalFormat=me.lP.R8,Et.wrapMode=me.e8.CLAMP_TO_EDGE;const gt=new Oe.X;gt.pixelFormat=me.VI.RG,gt.internalFormat=me.lP.RG8,gt.wrapMode=me.e8.CLAMP_TO_EDGE;const Pt=new Oe.X;Pt.internalFormat=me.lP.RGBA4,Pt.dataType=me.Br.UNSIGNED_SHORT_4_4_4_4,Pt.wrapMode=me.e8.CLAMP_TO_EDGE;(new Oe.X).wrapMode=me.e8.CLAMP_TO_EDGE;const _t=new Oe.X;_t.wrapMode=me.e8.CLAMP_TO_EDGE,_t.samplingMode=me.cw.LINEAR_MIPMAP_LINEAR,_t.hasMipmap=!0,_t.maxAnisotropy=8;const it=new Oe.X;it.pixelFormat=me.VI.RED,it.dataType=me.Br.HALF_FLOAT,it.internalFormat=me.lP.R16F,it.samplingMode=me.cw.NEAREST;const be=new Oe.X;var Ge;be.dataType=me.Br.HALF_FLOAT,be.internalFormat=me.lP.RGBA16F,be.samplingMode=me.cw.NEAREST,function(Ie){Ie[Ie.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",Ie[Ie.DEPTH_STENCIL_BUFFER=1]="DEPTH_STENCIL_BUFFER",Ie[Ie.DEPTH24_BUFFER=2]="DEPTH24_BUFFER",Ie[Ie.DEPTH16_BUFFER=3]="DEPTH16_BUFFER"}(Ge||(Ge={}));const ve=new Oe.X;ve.pixelFormat=me.VI.DEPTH_STENCIL,ve.dataType=me.Br.UNSIGNED_INT_24_8,ve.samplingMode=me.cw.NEAREST,ve.wrapMode=me.e8.CLAMP_TO_EDGE,new Me.Y(me.Tg.DEPTH24_STENCIL8,4),new Me.Y(me.Tg.DEPTH_COMPONENT24,4),new Me.Y(me.Tg.DEPTH_COMPONENT16,4);var re=T(83761),Xe=T(13934);const q={required:[]},$={required:[Xe.H.Depth,Xe.H.Normal]};class se extends re.Z{consumes(){return q}get usedMemory(){return 0}get isDecoration(){return!1}get running(){return!1}}class X extends se{}var Fe=T(651),Ke=T(91056),$e=T(39114),Dt=T(12407),Mt=T(86962),Ct=T(2078);class mt extends Ke.A{initializeProgram(ye){return new Dt.$(ye.rctx,mt.shader.get().build(),$e.i)}initializePipeline(){return(0,Ct.sm)({colorWrite:Ct.BK})}}mt.shader=new Fe.J(Mt.S,()=>T.e(857).then(T.bind(T,90857)));var At=T(99770);class Rt extends L.K{constructor(){super(...arguments),this.projScale=1}}class yt extends Rt{constructor(){super(...arguments),this.intensity=1}}class bt extends L.K{}class zt extends bt{constructor(){super(...arguments),this.blurSize=(0,At.a)()}}var De,V=T(52376);class te extends Ke.A{initializeProgram(ye){return new Dt.$(ye.rctx,te.shader.get().build(),$e.i)}initializePipeline(){return(0,Ct.sm)({colorWrite:Ct.BK})}}te.shader=new Fe.J(V.S,()=>T.e(3999).then(T.bind(T,73999))),T(90478),function(Ie){Ie[Ie.Antialiasing=0]="Antialiasing",Ie[Ie.HighQualityTransparency=1]="HighQualityTransparency",Ie[Ie.HighResolutionVoxel=2]="HighResolutionVoxel",Ie[Ie.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",Ie[Ie.SSAO=4]="SSAO",Ie[Ie.WaterReflection=5]="WaterReflection",Ie[Ie.HighResolutionShadows=6]="HighResolutionShadows",Ie[Ie.PhysicalPixelRendering=7]="PhysicalPixelRendering"}(De||(De={}));var je=T(5894);const dt=2;let Lt=class extends X{constructor(Ie){super(Ie),this._context=null,this._passParameters=new yt,this._drawParameters=new zt,this.produces=new Map([[je.r.SSAO,()=>this._produces()]])}_produces(){return null!=this._enableTime&&null!=this._context}consumes(){return this._produces()?$:q}initializeRenderContext(Ie){this._context=Ie,this.addHandles([(0,U.YP)(()=>this.view.qualitySettings.ambientOcclusion||this._context?.isFeatureEnabled(De.SSAO),ye=>ye?this._enable():this._disable(),U.tX)])}uninitializeRenderContext(){this._disable(),this._context=null}_disable(){this._passParameters.noiseTexture=(0,H.M2)(this._passParameters.noiseTexture),this._enableTime=null}destroy(){this._disable()}_enable(){if(null!=this._enableTime||!this._context)return;const Ie=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),Be=>Be.charCodeAt(0)),ye=new Oe.X;ye.wrapMode=me.e8.CLAMP_TO_EDGE,ye.pixelFormat=me.VI.RGB,ye.wrapMode=me.e8.REPEAT,ye.hasMipmap=!0,ye.width=32,ye.height=32,this._passParameters.noiseTexture=new de.x(this._context.renderContext.rctx,ye,Ie),null==this._ssaoTechnique&&(this._ssaoTechnique=this._context.techniqueRepository.acquire(te)),null==this._blurTechnique&&(this._blurTechnique=this._context.techniqueRepository.acquire(mt)),this._enableTime=(0,R.HA)(0),this._context?.requestRender()}renderNode(Ie,ye,Be){const et=Ie.bindParameters,lt=et.linearDepth?.colorTexture,rt=Be?.normal?.colorTexture;if(null==this._enableTime||null==this._context||null==lt||!rt)return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=Ie.time,void this._context.requestRender();0===this._enableTime&&(this._enableTime=Ie.time);const qe=Ie.rctx,It=et.camera,Gt=this.view.qualitySettings.fadeDuration,$t=Gt>0?Math.min(Gt,Ie.time-this._enableTime)/Gt:1;this._passParameters.normalTexture=rt,this._passParameters.depthTexture=lt,this._passParameters.projScale=1/It.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Kt/(0,V.g)(It)**6*$t;const Wt=It.fullViewport[2],kt=It.fullViewport[3],qt=Math.round(Wt/dt),Jt=Math.round(kt/dt),Yt=this._context.fbos,rr=Yt.acquire(Ue.RED,Wt,kt);qe.bindFramebuffer(rr.fbo),qe.setViewport(0,0,Wt,kt),qe.bindTechnique(this._ssaoTechnique,this._passParameters,et).bindDraw(this._drawParameters,et,this._passParameters),qe.screen.draw();const hr=qe.bindTechnique(this._blurTechnique,this._passParameters,et);qe.setViewport(0,0,qt,Jt);const or=Yt.acquire(Ue.RED,qt,Jt);qe.bindFramebuffer(or.fbo),this._drawParameters.colorTexture=rr.colorTexture,(0,ue.s)(this._drawParameters.blurSize,0,dt/kt),hr.bindDraw(this._drawParameters,et,this._passParameters),qe.setViewport(0,0,qt,Jt),qe.screen.draw(),rr.release();const ar=Yt.acquire(Ue.RED,qt,Jt);return qe.bindFramebuffer(ar.fbo),qe.setViewport(0,0,Wt,kt),qe.setClearColor(1,1,1,0),qe.clear(me.lk.COLOR_BUFFER_BIT),qe.setViewport(0,0,qt,Jt),this._drawParameters.colorTexture=or.colorTexture,(0,ue.s)(this._drawParameters.blurSize,dt/Wt,0),hr.bindDraw(this._drawParameters,et,this._passParameters),qe.screen.draw(),qe.setViewport4fv(It.fullViewport),or.release(),$t<1&&this._context.requestRender(),ar}};(0,G._)([(0,N.Cb)({constructOnly:!0})],Lt.prototype,"view",void 0),(0,G._)([(0,N.Cb)()],Lt.prototype,"_context",void 0),Lt=(0,G._)([(0,Se.j)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],Lt);const Kt=.5;function Qt(Ie,ye){const Be=Ie.fragment;ye.receiveAmbientOcclusion?(Be.uniforms.add(new C.A("ssaoTex",(et,lt)=>lt.ssao?.colorTexture)),Be.constants.add("blurSizePixelsInverse","float",1/dt),Be.code.add(L.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):Be.code.add(L.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},36412:(Ne,le,T)=>{T.d(le,{XP:()=>$,PN:()=>ge,sC:()=>W});var L=T(94573),C=T(84161),G=T(28093),H=T(993),U=T(4794),R=T(92724),N=T(97139),k=T(69960),K=T(17625);function Te(se,X){const ee=se.fragment,Ee=void 0!==X.lightingSphericalHarmonicsOrder?X.lightingSphericalHarmonicsOrder:2;0===Ee?(ee.uniforms.add(new N.J("lightingAmbientSH0",(Q,he)=>(0,C.s)(Se,he.lighting.sh.r[0],he.lighting.sh.g[0],he.lighting.sh.b[0]))),ee.code.add(K.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===Ee?(ee.uniforms.add(new k.N("lightingAmbientSH_R",(Q,he)=>(0,H.s)(ue,he.lighting.sh.r[0],he.lighting.sh.r[1],he.lighting.sh.r[2],he.lighting.sh.r[3])),new k.N("lightingAmbientSH_G",(Q,he)=>(0,H.s)(ue,he.lighting.sh.g[0],he.lighting.sh.g[1],he.lighting.sh.g[2],he.lighting.sh.g[3])),new k.N("lightingAmbientSH_B",(Q,he)=>(0,H.s)(ue,he.lighting.sh.b[0],he.lighting.sh.b[1],he.lighting.sh.b[2],he.lighting.sh.b[3]))),ee.code.add(K.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===Ee&&(ee.uniforms.add(new N.J("lightingAmbientSH0",(Q,he)=>(0,C.s)(Se,he.lighting.sh.r[0],he.lighting.sh.g[0],he.lighting.sh.b[0])),new k.N("lightingAmbientSH_R1",(Q,he)=>(0,H.s)(ue,he.lighting.sh.r[1],he.lighting.sh.r[2],he.lighting.sh.r[3],he.lighting.sh.r[4])),new k.N("lightingAmbientSH_G1",(Q,he)=>(0,H.s)(ue,he.lighting.sh.g[1],he.lighting.sh.g[2],he.lighting.sh.g[3],he.lighting.sh.g[4])),new k.N("lightingAmbientSH_B1",(Q,he)=>(0,H.s)(ue,he.lighting.sh.b[1],he.lighting.sh.b[2],he.lighting.sh.b[3],he.lighting.sh.b[4])),new k.N("lightingAmbientSH_R2",(Q,he)=>(0,H.s)(ue,he.lighting.sh.r[5],he.lighting.sh.r[6],he.lighting.sh.r[7],he.lighting.sh.r[8])),new k.N("lightingAmbientSH_G2",(Q,he)=>(0,H.s)(ue,he.lighting.sh.g[5],he.lighting.sh.g[6],he.lighting.sh.g[7],he.lighting.sh.g[8])),new k.N("lightingAmbientSH_B2",(Q,he)=>(0,H.s)(ue,he.lighting.sh.b[5],he.lighting.sh.b[6],he.lighting.sh.b[7],he.lighting.sh.b[8]))),ee.code.add(K.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),X.pbrMode!==R.f7.Normal&&X.pbrMode!==R.f7.Schematic||ee.code.add(K.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Se=(0,G.c)(),ue=(0,U.c)();var F=T(57581),Z=T(31166),pe=T(98898),we=T(39337),me=T(85930),Pe=T(37847);class ce extends me.x{constructor(X,ee){super(X,"bool",Pe.P.Pass,(Ee,Q,he)=>Ee.setUniform1b(X,ee(Q,he)))}}var Me=T(65787);T(21286),(0,G.c)();const Xe=.4;function ge(se){se.constants.add("ambientBoostFactor","float",Xe)}function W(se){se.uniforms.add(new Me.p("lightingGlobalFactor",(X,ee)=>ee.lighting.globalFactor))}function $(se,X){const ee=se.fragment;switch(se.include(F.K,X),X.pbrMode!==R.f7.Disabled&&se.include(pe.T,X),se.include(Te,X),se.include(we.e),ee.code.add(K.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${X.pbrMode===R.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),ge(ee),W(ee),(0,Z.Pe)(ee),ee.code.add(K.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${X.spherical?K.H`normalize(vPosWorld)`:K.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,Z.F1)(ee),ee.code.add(K.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),X.pbrMode){case R.f7.Disabled:case R.f7.WaterOnIntegratedMesh:case R.f7.Water:se.include(Z.kR),ee.code.add(K.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case R.f7.Normal:case R.f7.Schematic:ee.code.add(K.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),ee.code.add(K.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),X.useFillLights?ee.uniforms.add(new ce("hasFillLights",(Ee,Q)=>Q.enableFillLights)):ee.constants.add("hasFillLights","bool",!1),ee.code.add(K.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),ee.uniforms.add(new Me.p("lightingSpecularStrength",(Ee,Q)=>Q.lighting.mainLight.specularStrength),new Me.p("lightingEnvironmentStrength",(Ee,Q)=>Q.lighting.mainLight.environmentStrength)),ee.code.add(K.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),ee.code.add(K.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${X.pbrMode!==R.f7.Schematic||X.hasColorTexture?K.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:K.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case R.f7.Terrain:case R.f7.TerrainWithWater:se.include(Z.kR),ee.code.add(K.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,L.Bg)(X.pbrMode);case R.f7.COUNT:}}(0,G.c)()},31166:(Ne,le,T)=>{T.d(le,{F1:()=>H,Pe:()=>G,kR:()=>U});var L=T(97139),C=T(17625);function G(R){R.uniforms.add(new L.J("mainLightDirection",(N,k)=>k.lighting.mainLight.direction))}function H(R){R.uniforms.add(new L.J("mainLightIntensity",(N,k)=>k.lighting.mainLight.intensity))}function U(R){G(R.fragment),H(R.fragment),R.fragment.code.add(C.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}},10109:(Ne,le,T)=>{T.d(le,{l:()=>U});var L=T(47923),C=T(95285),G=T(17625),H=T(35387);function U(N,k){if(!k.multipassEnabled)return;N.fragment.include(L.S),N.fragment.uniforms.add(new H.A("terrainDepthTexture",(Te,Se)=>Se.multipassTerrain.linearDepth?.colorTexture)),N.fragment.uniforms.add(new C.A("nearFar",(Te,Se)=>Se.camera.nearFar));const K=k.occlusionPass;N.fragment.code.add(G.H`
   ${K?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      vec4 data = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);
      float linearDepth = linearDepthFromRGBA(data, nearFar);
      ${K?G.H`return fragmentDepth < linearDepth && data != vec4(0.0, 0.0, 0.0, 1.0);`:G.H`
          if(fragmentDepth ${k.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}},96395:(Ne,le,T)=>{T.d(le,{k:()=>G,q:()=>H});var H,U,L=T(94573),C=T(17625);function G(U,R){const N=U.fragment;switch(N.code.add(C.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),R.doubleSidedMode){case H.None:N.code.add(C.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case H.View:N.code.add(C.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case H.WindingOrder:N.code.add(C.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,L.Bg)(R.doubleSidedMode);case H.COUNT:}}(U=H||(H={}))[U.None=0]="None",U[U.View=1]="View",U[U.WindingOrder=2]="WindingOrder",U[U.COUNT=3]="COUNT"},98898:(Ne,le,T)=>{T.d(le,{T:()=>U});var L=T(17625);function C(N){const k=N.fragment.code;k.add(L.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),k.add(L.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),k.add(L.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var G=T(92724),H=T(39337);function U(N,k){const K=N.fragment.code;N.include(H.e),k.pbrMode!==G.f7.Normal&&k.pbrMode!==G.f7.Schematic&&k.pbrMode!==G.f7.Terrain&&k.pbrMode!==G.f7.TerrainWithWater||(K.add(L.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),K.add(L.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),k.pbrMode!==G.f7.Normal&&k.pbrMode!==G.f7.Schematic||(N.include(C),K.add(L.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),K.add(L.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),K.add(L.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),K.add(L.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},92724:(Ne,le,T)=>{T.d(le,{f7:()=>K,jV:()=>Se});var K,ue,L=T(85982),C=T(77739),G=T(97139),H=T(17625),U=T(5864),R=T(35387),N=T(37847);function Se(ue,F){const Z=ue.fragment;if(F.pbrMode===K.Normal&&(F.hasMetallicRoughnessTexture||F.hasEmissionTexture||F.hasOcclusionTexture)&&ue.include(L.i,F),F.pbrMode!==K.Schematic)if(F.pbrMode!==K.Disabled){if(F.pbrMode===K.Normal){Z.code.add(H.H`vec3 mrr;
vec3 emission;
float occlusion;`);const we=F.pbrTextureBindType;F.hasMetallicRoughnessTexture&&(Z.uniforms.add(we===N.P.Pass?new R.A("texMetallicRoughness",me=>me.textureMetallicRoughness):new U.R("texMetallicRoughness",me=>me.textureMetallicRoughness)),Z.code.add(H.H`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),F.hasEmissionTexture&&(Z.uniforms.add(we===N.P.Pass?new R.A("texEmission",me=>me.textureEmissive):new U.R("texEmission",me=>me.textureEmissive)),Z.code.add(H.H`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),F.hasOcclusionTexture?(Z.uniforms.add(we===N.P.Pass?new R.A("texOcclusion",me=>me.textureOcclusion):new U.R("texOcclusion",me=>me.textureOcclusion)),Z.code.add(H.H`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):Z.code.add(H.H`float getBakedOcclusion() { return 1.0; }`),we===N.P.Pass?Z.uniforms.add(new G.J("emissionFactor",me=>me.emissiveFactor),new G.J("mrrFactors",me=>me.mrrFactors)):Z.uniforms.add(new C.B("emissionFactor",me=>me.emissiveFactor),new C.B("mrrFactors",me=>me.mrrFactors)),Z.code.add(H.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${F.hasMetallicRoughnessTexture?H.H`applyMetallnessAndRoughness(${F.hasMetallicRoughnessTextureTransform?H.H`metallicRoughnessUV`:"vuv0"});`:""}

      ${F.hasEmissionTexture?H.H`applyEmission(${F.hasEmissiveTextureTransform?H.H`emissiveUV`:"vuv0"});`:""}

      ${F.hasOcclusionTexture?H.H`applyOcclusion(${F.hasOcclusionTextureTransform?H.H`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else Z.code.add(H.H`float getBakedOcclusion() { return 1.0; }`);else Z.code.add(H.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}T(44621),(ue=K||(K={}))[ue.Disabled=0]="Disabled",ue[ue.Normal=1]="Normal",ue[ue.Schematic=2]="Schematic",ue[ue.Water=3]="Water",ue[ue.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",ue[ue.Terrain=5]="Terrain",ue[ue.TerrainWithWater=6]="TerrainWithWater",ue[ue.COUNT=7]="COUNT"},39337:(Ne,le,T)=>{T.d(le,{e:()=>C});var L=T(17625);function C(G){G.vertex.code.add(L.H`const float PI = 3.141592653589793;`),G.fragment.code.add(L.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},72968:(Ne,le,T)=>{T.d(le,{XE:()=>me,hb:()=>we}),T(43703),T(28093);var G=T(92409),H=T(69960),U=T(40938),R=T(17625),N=T(85930),k=T(37847);class K extends N.x{constructor(Me,de,Oe){super(Me,"mat4",k.P.Draw,(Re,fe,Le,He)=>Re.setUniformMatrix4fv(Me,de(fe,Le,He)),Oe)}}class Te extends N.x{constructor(Me,de,Oe){super(Me,"mat4",k.P.Pass,(Re,fe,Le)=>Re.setUniformMatrix4fv(Me,de(fe,Le)),Oe)}}var Se=T(35387);function we(ce,Me){Me.receiveShadows&&(ce.fragment.uniforms.add(new Te("shadowMapMatrix",(de,Oe)=>Oe.shadowMap.getShadowMapMatrices(de.origin),4)),Pe(ce))}function me(ce,Me){Me.receiveShadows&&(ce.fragment.uniforms.add(new K("shadowMapMatrix",(de,Oe)=>Oe.shadowMap.getShadowMapMatrices(de.origin),4)),Pe(ce))}function Pe(ce){const Me=ce.fragment;Me.include(G.f),Me.uniforms.add(new Se.A("shadowMapTex",(de,Oe)=>Oe.shadowMap.depthTexture),new U._("numCascades",(de,Oe)=>Oe.shadowMap.numCascades),new H.N("cascadeDistances",(de,Oe)=>Oe.shadowMap.cascadeDistances)),Me.code.add(R.H`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMapTex, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMapTex);
}`)}},70489:(Ne,le,T)=>{T.d(le,{DT:()=>k,NI:()=>U,R5:()=>R,av:()=>H,jF:()=>N});var L=T(49966),C=T(17625),G=T(91574);function H(K){K.vertex.uniforms.add(new G.c("colorTextureTransformMatrix",Te=>null!=Te.colorTextureTransformMatrix?Te.colorTextureTransformMatrix:(0,L.c)())),K.varyings.add("colorUV","vec2"),K.vertex.code.add(C.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function U(K){K.vertex.uniforms.add(new G.c("normalTextureTransformMatrix",Te=>null!=Te.normalTextureTransformMatrix?Te.normalTextureTransformMatrix:(0,L.c)())),K.varyings.add("normalUV","vec2"),K.vertex.code.add(C.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function R(K){K.vertex.uniforms.add(new G.c("emissiveTextureTransformMatrix",Te=>null!=Te.emissiveTextureTransformMatrix?Te.emissiveTextureTransformMatrix:(0,L.c)())),K.varyings.add("emissiveUV","vec2"),K.vertex.code.add(C.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function N(K){K.vertex.uniforms.add(new G.c("occlusionTextureTransformMatrix",Te=>null!=Te.occlusionTextureTransformMatrix?Te.occlusionTextureTransformMatrix:(0,L.c)())),K.varyings.add("occlusionUV","vec2"),K.vertex.code.add(C.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function k(K){K.vertex.uniforms.add(new G.c("metallicRoughnessTextureTransformMatrix",Te=>null!=Te.metallicRoughnessTextureTransformMatrix?Te.metallicRoughnessTextureTransformMatrix:(0,L.c)())),K.varyings.add("metallicRoughnessUV","vec2"),K.vertex.code.add(C.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}},1485:(Ne,le,T)=>{T.d(le,{k:()=>zt});var L=T(97139),C=T(85930),G=T(37847);class H extends C.x{constructor(te,xe,De){super(te,"vec4",G.P.Pass,(_e,je,dt)=>_e.setUniform4fv(te,xe(je,dt)),De)}}class U extends C.x{constructor(te,xe,De){super(te,"float",G.P.Pass,(_e,je,dt)=>_e.setUniform1fv(te,xe(je,dt)),De)}}var R=T(17625),N=T(91574),k=T(16396),Z=(T(8314),T(21286),T(30217),T(550),T(28347),T(43703)),we=(T(84161),T(28093)),Pe=(T(21254),T(17626)),ce=T(83761),Me=T(77712),Re=(T(90912),T(85931),T(76898));let fe=class extends ce.Z{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};var He,ke,V;(0,Pe._)([(0,Me.Cb)()],fe.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,Pe._)([(0,Me.Cb)()],fe.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,Pe._)([(0,Me.Cb)()],fe.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,Pe._)([(0,Me.Cb)()],fe.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,Pe._)([(0,Me.Cb)()],fe.prototype,"LABELS_SHOW_BORDER",void 0),(0,Pe._)([(0,Me.Cb)()],fe.prototype,"TEXT_SHOW_BASELINE",void 0),(0,Pe._)([(0,Me.Cb)()],fe.prototype,"TEXT_SHOW_BORDER",void 0),(0,Pe._)([(0,Me.Cb)()],fe.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,Pe._)([(0,Me.Cb)()],fe.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,Pe._)([(0,Me.Cb)()],fe.prototype,"SHOW_POI",void 0),(0,Pe._)([(0,Me.Cb)()],fe.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,Pe._)([(0,Me.Cb)()],fe.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,Pe._)([(0,Me.Cb)()],fe.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,Pe._)([(0,Me.Cb)()],fe.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,Pe._)([(0,Me.Cb)()],fe.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,Pe._)([(0,Me.Cb)()],fe.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,Pe._)([(0,Me.Cb)()],fe.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,Pe._)([(0,Me.Cb)()],fe.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,Pe._)([(0,Me.Cb)()],fe.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,Pe._)([(0,Me.Cb)()],fe.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,Pe._)([(0,Me.Cb)()],fe.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,Pe._)([(0,Me.Cb)()],fe.prototype,"LINE_WIREFRAMES",void 0),fe=(0,Pe._)([(0,Re.j)("esri.views.3d.support.DebugFlags")],fe),new fe,(V=He||(He={}))[V.Undefined=0]="Undefined",V[V.DefinedSize=1]="DefinedSize",V[V.DefinedScale=2]="DefinedScale",function(V){V[V.Undefined=0]="Undefined",V[V.DefinedAngle=1]="DefinedAngle"}(ke||(ke={})),(0,Z.a)(),(0,we.c)(),(0,Z.a)(),T(40723);const bt=8;function zt(V,te){const{vertex:xe,attributes:De}=V;te.hasVvInstancing&&(te.vvSize||te.vvColor)&&De.add(k.T.INSTANCEFEATUREATTRIBUTE,"vec4"),te.vvSize?(xe.uniforms.add(new L.J("vvSizeMinSize",_e=>_e.vvSize.minSize)),xe.uniforms.add(new L.J("vvSizeMaxSize",_e=>_e.vvSize.maxSize)),xe.uniforms.add(new L.J("vvSizeOffset",_e=>_e.vvSize.offset)),xe.uniforms.add(new L.J("vvSizeFactor",_e=>_e.vvSize.factor)),xe.uniforms.add(new N.c("vvSymbolRotationMatrix",_e=>_e.vvSymbolRotationMatrix)),xe.uniforms.add(new L.J("vvSymbolAnchor",_e=>_e.vvSymbolAnchor)),xe.code.add(R.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),xe.code.add(R.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${te.hasVvInstancing?R.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):xe.code.add(R.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),te.vvColor?(xe.constants.add("vvColorNumber","int",bt),xe.uniforms.add(new U("vvColorValues",_e=>_e.vvColor.values,bt),new H("vvColorColors",_e=>_e.vvColor.colors,bt)),xe.code.add(R.H`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${te.hasVvInstancing?R.H`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):xe.code.add(R.H`vec4 vvColor() { return vec4(1.0); }`)}},67022:(Ne,le,T)=>{T.d(le,{F:()=>L,b:()=>C});const L=.1,C=.001},72397:(Ne,le,T)=>{T.d(le,{z:()=>K});var L=T(67022),C=T(17625);function G(ue){ue.fragment.code.add(C.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${C.H.float(L.b)}) { discard; } }
  `)}T(85930),T(37847);var N=T(65787),k=T(42743);function K(ue,F){!function Se(ue,F,Z){const pe=ue.fragment;switch(F.alphaDiscardMode!==k.JJ.Mask&&F.alphaDiscardMode!==k.JJ.MaskBlend||pe.uniforms.add(Z),F.alphaDiscardMode){case k.JJ.Blend:return ue.include(G);case k.JJ.Opaque:pe.code.add(C.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case k.JJ.Mask:pe.code.add(C.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case k.JJ.MaskBlend:ue.fragment.code.add(C.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(ue,F,new N.p("textureAlphaCutoff",Z=>Z.textureAlphaCutoff))}},39832:(Ne,le,T)=>{T.d(le,{GZ:()=>k});var L=T(67831),C=T(99770),G=T(993),H=T(4794),U=T(95285),R=T(69960),N=T(17625);function k(F){F.fragment.uniforms.add(new R.N("projInfo",(Z,pe)=>function K(F){const Z=F.camera.projectionMatrix;return 0===Z[11]?(0,G.s)(Te,2/(F.camera.fullWidth*Z[0]),2/(F.camera.fullHeight*Z[5]),(1+Z[12])/Z[0],(1+Z[13])/Z[5]):(0,G.s)(Te,-2/(F.camera.fullWidth*Z[0]),-2/(F.camera.fullHeight*Z[5]),(1-Z[8])/Z[0],(1-Z[9])/Z[5])}(pe))),F.fragment.uniforms.add(new U.A("zScale",(Z,pe)=>function Se(F){return 0===F.camera.projectionMatrix[11]?(0,L.s)(ue,0,1):(0,L.s)(ue,1,0)}(pe))),F.fragment.code.add(N.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const Te=(0,H.c)(),ue=(0,C.a)()},7228:(Ne,le,T)=>{T.d(le,{$:()=>C});var L=T(17625);function C({code:G},H){G.add(H.doublePrecisionRequiresObfuscation?L.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`:L.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},49974:(Ne,le,T)=>{T.d(le,{y:()=>H});var L=T(9044),C=T(17625);function G(U){U.code.add(C.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function H(U){U.include(G),U.code.add(C.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${C.H.int(L.a9.Multiply)}) {
        return allMixed;
      }
      if (mode == ${C.H.int(L.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${C.H.int(L.a9.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${C.H.int(L.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${C.H.int(L.a9.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},92409:(Ne,le,T)=>{T.d(le,{f:()=>C});var L=T(17625);function C(G){G.code.add(L.H`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}},19278:(Ne,le,T)=>{T.d(le,{n:()=>C});var L=T(17625);function C(G){G.code.add(L.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},99198:(Ne,le,T)=>{T.d(le,{hY:()=>ue,Sv:()=>F,_8:()=>we});var L=T(28347),C=T(43703),G=T(84161),H=T(28093),U=T(77739),R=T(97139),k=(T(65787),T(85930)),K=T(37847);class Te extends k.x{constructor(ce,Me){super(ce,"mat4",K.P.Draw,(de,Oe,Re)=>de.setUniformMatrix4fv(ce,Me(Oe,Re)))}}var Se=T(63123);function ue(Pe,ce){ce.instancedDoublePrecision?Pe.constants.add("cameraPosition","vec3",H.Z):Pe.uniforms.add(new U.B("cameraPosition",(Me,de)=>(0,G.s)(pe,de.camera.viewInverseTransposeMatrix[3]-Me.origin[0],de.camera.viewInverseTransposeMatrix[7]-Me.origin[1],de.camera.viewInverseTransposeMatrix[11]-Me.origin[2])))}function F(Pe,ce){if(!ce.instancedDoublePrecision)return void Pe.uniforms.add(new Se.g("proj",(de,Oe)=>Oe.camera.projectionMatrix),new Te("view",(de,Oe)=>(0,L.w)(Z,Oe.camera.viewMatrix,de.origin)),new U.B("localOrigin",de=>de.origin));const Me=de=>(0,G.s)(pe,de.camera.viewInverseTransposeMatrix[3],de.camera.viewInverseTransposeMatrix[7],de.camera.viewInverseTransposeMatrix[11]);Pe.uniforms.add(new Se.g("proj",(de,Oe)=>Oe.camera.projectionMatrix),new Se.g("view",(de,Oe)=>(0,L.w)(Z,Oe.camera.viewMatrix,Me(Oe))),new R.J("localOrigin",(de,Oe)=>Me(Oe)))}const Z=(0,C.a)(),pe=(0,H.c)();function we(Pe){Pe.uniforms.add(new Se.g("viewNormal",(ce,Me)=>Me.camera.viewInverseTransposeMatrix))}},32181:(Ne,le,T)=>{T.d(le,{q:()=>G});var L=T(85930),C=T(37847);class G extends L.x{constructor(U,R){super(U,"vec2",C.P.Draw,(N,k,K,Te)=>N.setUniform2fv(U,R(k,K,Te)))}}},95285:(Ne,le,T)=>{T.d(le,{A:()=>G});var L=T(85930),C=T(37847);class G extends L.x{constructor(U,R){super(U,"vec2",C.P.Pass,(N,k,K)=>N.setUniform2fv(U,R(k,K)))}}},77739:(Ne,le,T)=>{T.d(le,{B:()=>G});var L=T(85930),C=T(37847);class G extends L.x{constructor(U,R){super(U,"vec3",C.P.Draw,(N,k,K,Te)=>N.setUniform3fv(U,R(k,K,Te)))}}},97139:(Ne,le,T)=>{T.d(le,{J:()=>G});var L=T(85930),C=T(37847);class G extends L.x{constructor(U,R){super(U,"vec3",C.P.Pass,(N,k,K)=>N.setUniform3fv(U,R(k,K)))}}},69960:(Ne,le,T)=>{T.d(le,{N:()=>G});var L=T(85930),C=T(37847);class G extends L.x{constructor(U,R){super(U,"vec4",C.P.Pass,(N,k,K)=>N.setUniform4fv(U,R(k,K)))}}},65787:(Ne,le,T)=>{T.d(le,{p:()=>G});var L=T(85930),C=T(37847);class G extends L.x{constructor(U,R){super(U,"float",C.P.Pass,(N,k,K)=>N.setUniform1f(U,R(k,K)))}}},40938:(Ne,le,T)=>{T.d(le,{_:()=>G});var L=T(85930),C=T(37847);class G extends L.x{constructor(U,R){super(U,"int",C.P.Pass,(N,k,K)=>N.setUniform1i(U,R(k,K)))}}},9546:(Ne,le,T)=>{T.d(le,{j:()=>G});var L=T(85930),C=T(37847);class G extends L.x{constructor(U,R){super(U,"mat3",C.P.Draw,(N,k,K)=>N.setUniformMatrix3fv(U,R(k,K)))}}},91574:(Ne,le,T)=>{T.d(le,{c:()=>G});var L=T(85930),C=T(37847);class G extends L.x{constructor(U,R){super(U,"mat3",C.P.Pass,(N,k,K)=>N.setUniformMatrix3fv(U,R(k,K)))}}},63123:(Ne,le,T)=>{T.d(le,{g:()=>G});var L=T(85930),C=T(37847);class G extends L.x{constructor(U,R){super(U,"mat4",C.P.Pass,(N,k,K)=>N.setUniformMatrix4fv(U,R(k,K)))}}},22355:(Ne,le,T)=>{T.d(le,{kG:()=>N});var L=T(26584),C=T(63290),G=T(37847),H=T(2282);const U=C.Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class R{constructor(){this._includedModules=new Map}include(ce,Me){if(this._includedModules.has(ce)){const de=this._includedModules.get(ce);if(de!==Me){U.error("Trying to include shader module multiple times with different sets of options.");const Oe=new Set;for(const Re of Object.keys(de))de[Re]!==ce[Re]&&Oe.add(Re);for(const Re of Object.keys(ce))de[Re]!==ce[Re]&&Oe.add(Re);Oe.forEach(Re=>console.error(`  ${Re}: current ${de[Re]} new ${ce[Re]}`))}}else this._includedModules.set(ce,Me),ce(this.builder,Me)}}class N extends R{constructor(){super(...arguments),this.vertex=new Te,this.fragment=new Te,this.attributes=new Se,this.varyings=new ue,this.extensions=new F,this.constants=new pe,this.outputs=new Z}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(ce){const Me=this.extensions.generateSource(ce),de=this.attributes.generateSource(ce),Oe=this.varyings.generateSource(ce),Re="vertex"===ce?this.vertex:this.fragment,fe=Re.uniforms.generateSource(),Le=Re.code.generateSource(),He="vertex"===ce?me:we,ke=this.constants.generateSource().concat(Re.constants.generateSource()),st=this.outputs.generateSource(ce);return`#version 300 es\n${Me.join("\n")}\n\n${He}\n\n${ke.join("\n")}\n\n${fe.join("\n")}\n\n${de.join("\n")}\n\n${Oe.join("\n")}\n\n${st.join("\n")}\n\n${Le.join("\n")}`}generateBindPass(ce){const Me=new Map;this.vertex.uniforms.entries.forEach(Re=>{const fe=Re.bind[G.P.Pass];fe&&Me.set(Re.name,fe)}),this.fragment.uniforms.entries.forEach(Re=>{const fe=Re.bind[G.P.Pass];fe&&Me.set(Re.name,fe)});const de=Array.from(Me.values()),Oe=de.length;return(Re,fe)=>{for(let Le=0;Le<Oe;++Le)de[Le](ce,Re,fe)}}generateBindDraw(ce){const Me=new Map;this.vertex.uniforms.entries.forEach(Re=>{const fe=Re.bind[G.P.Draw];fe&&Me.set(Re.name,fe)}),this.fragment.uniforms.entries.forEach(Re=>{const fe=Re.bind[G.P.Draw];fe&&Me.set(Re.name,fe)});const de=Array.from(Me.values()),Oe=de.length;return(Re,fe,Le)=>{for(let He=0;He<Oe;++He)de[He](ce,Re,fe,Le)}}}class k{constructor(){this._entries=new Map}add(...ce){for(const Me of ce)this._add(Me)}get(ce){return this._entries.get(ce)}_add(ce){if(null!=ce){if(this._entries.has(ce.name)&&!this._entries.get(ce.name).equals(ce))throw new L.Z(`Duplicate uniform name ${ce.name} for different uniform type`);this._entries.set(ce.name,ce)}else U.error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map(ce=>null!=ce.arraySize?`uniform ${ce.type} ${ce.name}[${ce.arraySize}];`:`uniform ${ce.type} ${ce.name};`)}get entries(){return Array.from(this._entries.values())}}class K{constructor(){this._entries=new Array}add(ce){this._entries.push(ce)}generateSource(){return this._entries}}class Te extends R{constructor(){super(...arguments),this.uniforms=new k,this.code=new K,this.constants=new pe}get builder(){return this}}class Se{constructor(){this._entries=new Array}add(ce,Me){this._entries.push([ce,Me])}generateSource(ce){return"fragment"===ce?[]:this._entries.map(Me=>`in ${Me[1]} ${Me[0]};`)}}class ue{constructor(){this._entries=new Map}add(ce,Me){this._entries.has(ce)&&(0,H.hu)(this._entries.get(ce)===Me),this._entries.set(ce,Me)}generateSource(ce){const Me=new Array;return this._entries.forEach((de,Oe)=>Me.push("vertex"===ce?`out ${de} ${Oe};`:`in ${de} ${Oe};`)),Me}}class F{constructor(){this._entries=new Set}add(ce){this._entries.add(ce)}generateSource(ce){const Me="vertex"===ce?F.ALLOWLIST_VERTEX:F.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(de=>Me.includes(de)).map(de=>`#extension ${de} : enable`)}}F.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],F.ALLOWLIST_VERTEX=[];class Z{constructor(){this._entries=new Map}add(ce,Me,de=0){const Oe=this._entries.get(de);Oe?(0,H.hu)(Oe.name===ce&&Oe.type===Me,`Fragment shader output location ${de} occupied`):this._entries.set(de,{name:ce,type:Me})}generateSource(ce){if("vertex"===ce)return[];0===this._entries.size&&this._entries.set(0,{name:Z.DEFAULT_NAME,type:Z.DEFAULT_TYPE});const Me=new Array;return this._entries.forEach((de,Oe)=>Me.push(`layout(location = ${Oe}) out ${de.type} ${de.name};`)),Me}}Z.DEFAULT_TYPE="vec4",Z.DEFAULT_NAME="fragColor";class pe{constructor(){this._entries=new Set}add(ce,Me,de){let Oe="ERROR_CONSTRUCTOR_STRING";switch(Me){case"float":Oe=pe._numberToFloatStr(de);break;case"int":Oe=pe._numberToIntStr(de);break;case"bool":Oe=de.toString();break;case"vec2":Oe=`vec2(${pe._numberToFloatStr(de[0])},                            ${pe._numberToFloatStr(de[1])})`;break;case"vec3":Oe=`vec3(${pe._numberToFloatStr(de[0])},                            ${pe._numberToFloatStr(de[1])},                            ${pe._numberToFloatStr(de[2])})`;break;case"vec4":Oe=`vec4(${pe._numberToFloatStr(de[0])},                            ${pe._numberToFloatStr(de[1])},                            ${pe._numberToFloatStr(de[2])},                            ${pe._numberToFloatStr(de[3])})`;break;case"ivec2":Oe=`ivec2(${pe._numberToIntStr(de[0])},                             ${pe._numberToIntStr(de[1])})`;break;case"ivec3":Oe=`ivec3(${pe._numberToIntStr(de[0])},                             ${pe._numberToIntStr(de[1])},                             ${pe._numberToIntStr(de[2])})`;break;case"ivec4":Oe=`ivec4(${pe._numberToIntStr(de[0])},                             ${pe._numberToIntStr(de[1])},                             ${pe._numberToIntStr(de[2])},                             ${pe._numberToIntStr(de[3])})`;break;case"mat2":case"mat3":case"mat4":Oe=`${Me}(${Array.prototype.map.call(de,Re=>pe._numberToFloatStr(Re)).join(", ")})`}return this._entries.add(`const ${Me} ${ce} = ${Oe};`),this}static _numberToIntStr(ce){return ce.toFixed(0)}static _numberToFloatStr(ce){return Number.isInteger(ce)?ce.toFixed(1):ce.toString()}generateSource(){return Array.from(this._entries)}}const we="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",me="precision highp float;\nprecision highp sampler2D;"},5864:(Ne,le,T)=>{T.d(le,{R:()=>G});var L=T(85930),C=T(37847);class G extends L.x{constructor(U,R){super(U,"sampler2D",C.P.Draw,(N,k,K)=>N.bindTexture(U,R(k,K)))}}},35387:(Ne,le,T)=>{T.d(le,{A:()=>G});var L=T(85930),C=T(37847);class G extends L.x{constructor(U,R){super(U,"sampler2D",C.P.Pass,(N,k,K)=>N.bindTexture(U,R(k,K)))}}},85930:(Ne,le,T)=>{T.d(le,{x:()=>C});var L=T(37847);class C{constructor(H,U,R,N,k=null){if(this.name=H,this.type=U,this.arraySize=k,this.bind={[L.P.Pass]:null,[L.P.Draw]:null},N)switch(R){case L.P.Pass:this.bind[L.P.Pass]=N;break;case L.P.Draw:this.bind[L.P.Draw]=N}}equals(H){return this.type===H.type&&this.name===H.name&&this.arraySize===H.arraySize}}},17625:(Ne,le,T)=>{T.d(le,{H:()=>G,K:()=>C});const C=class L{};function G(H,...U){let R="";for(let N=0;N<U.length;N++)R+=H[N]+U[N];return R+=H[H.length-1],R}var H;(H=G||(G={})).int=function U(N){return Math.round(N).toString()},H.float=function R(N){return N.toPrecision(8)}},37847:(Ne,le,T)=>{var L,C;T.d(le,{P:()=>L}),(C=L||(L={}))[C.Pass=0]="Pass",C[C.Draw=1]="Draw"},651:(Ne,le,T)=>{T.d(le,{J:()=>C});var L=T(15861);class C{constructor(H,U){this._module=H,this._loadModule=U}get(){return this._module}reload(){var H=this;return(0,L.Z)(function*(){return H._module=yield H._loadModule(),H._module})()}}},91056:(Ne,le,T)=>{T.d(le,{A:()=>G});var L=T(62208),C=T(67969);class G{constructor(U,R,N){this.release=N,this.initializeConfiguration(U,R),this._configuration=R.snapshot(),this._program=this.initializeProgram(U),this._pipeline=this.initializePipeline(U.rctx.capabilities)}destroy(){this._program=(0,L.M2)(this._program),this._pipeline=this._configuration=null}reload(U){(0,L.M2)(this._program),this._program=this.initializeProgram(U),this._pipeline=this.initializePipeline(U.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(U){this.program.assertCompatibleVertexAttributeLocations(U)}get primitiveType(){return C.MX.TRIANGLES}getPipeline(U,R,N){return this._pipeline}initializeConfiguration(U,R){}}},87601:(Ne,le,T)=>{T.d(le,{m:()=>C,o:()=>G});var L=T(17625);class C extends L.K{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const U=this._parameterNames,R={key:this.key};for(const N of U)R[N]=this[N];return R}}function G(H={}){return(U,R)=>{if(U._parameterNames=U._parameterNames??[],U._parameterNames.push(R),null!=H.constValue)Object.defineProperty(U,R,{get:()=>H.constValue});else{const N=U._parameterNames.length-1,K=Math.ceil(Math.log2(H.count||2)),Te=U._parameterBits??[0];let Se=0;for(;Te[Se]+K>16;)Se++,Se>=Te.length&&Te.push(0);U._parameterBits=Te;const ue=Te[Se],F=(1<<K)-1<<ue;Te[Se]+=K,Object.defineProperty(U,R,{get(){return this[N]},set(Z){if(this[N]!==Z&&(this[N]=Z,this._keyDirty=!0,this._parameterBits[Se]=this._parameterBits[Se]&~F|+Z<<ue&F,"number"!=typeof Z&&"boolean"!=typeof Z))throw new Error("Configuration value for "+R+" must be boolean or number, got "+typeof Z)}})}}}},94255:(Ne,le,T)=>{T.d(le,{U:()=>L,a:()=>C});class L{constructor(H,U,R=U){this.data=H,this.size=U,this.stride=R}}class C extends L{constructor(H,U,R,N=!1,k=R){super(H,R,k),this.indices=U,this.exclusive=N}}},39114:(Ne,le,T)=>{T.d(le,{i:()=>C});var L=T(16396);const C=new Map([[L.T.POSITION,0],[L.T.NORMAL,1],[L.T.NORMALCOMPRESSED,1],[L.T.UV0,2],[L.T.COLOR,3],[L.T.COLORFEATUREATTRIBUTE,3],[L.T.SIZE,4],[L.T.TANGENT,4],[L.T.AUXPOS1,5],[L.T.SYMBOLCOLOR,5],[L.T.AUXPOS2,6],[L.T.FEATUREATTRIBUTE,6],[L.T.INSTANCEFEATUREATTRIBUTE,6],[L.T.INSTANCECOLOR,7],[L.T.OBJECTANDLAYERIDCOLOR,7],[L.T.INSTANCEOBJECTANDLAYERIDCOLOR,7],[L.T.INSTANCEMODEL,8],[L.T.INSTANCEMODELNORMAL,12],[L.T.INSTANCEMODELORIGINHI,11],[L.T.INSTANCEMODELORIGINLO,15]])},44621:(Ne,le,T)=>{T.d(le,{F:()=>R});var L=T(62208),C=T(10699),G=T(17625),H=T(42743);class U{constructor(K){this._material=K.material,this._techniqueRepository=K.techniqueRep,this._output=K.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(K,Te){return this._technique=this._techniqueRepository.releaseAndAcquire(K,this._material.getConfiguration(this._output,Te),this._technique),this._technique}ensureResources(K){return H.Rw.LOADED}}class R extends U{constructor(K){super(K),this._numLoading=0,this._disposed=!1,this._textureRepository=K.textureRepository,this._textureId=K.textureId,this._acquire(K.textureId,Te=>this._texture=Te),this._acquire(K.normalTextureId,Te=>this._textureNormal=Te),this._acquire(K.emissiveTextureId,Te=>this._textureEmissive=Te),this._acquire(K.occlusionTextureId,Te=>this._textureOcclusion=Te),this._acquire(K.metallicRoughnessTextureId,Te=>this._textureMetallicRoughness=Te)}dispose(){this._texture=(0,L.RY)(this._texture),this._textureNormal=(0,L.RY)(this._textureNormal),this._textureEmissive=(0,L.RY)(this._textureEmissive),this._textureOcclusion=(0,L.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,L.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(K){return 0===this._numLoading?H.Rw.LOADED:H.Rw.LOADING}get textureBindParameters(){return new N(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(K){null!=this._texture&&K===this._texture.id||(this._texture=(0,L.RY)(this._texture),this._textureId=K,this._acquire(this._textureId,Te=>this._texture=Te))}_acquire(K,Te){if(null==K)return void Te(null);const Se=this._textureRepository.acquire(K);if((0,C.y8)(Se))return++this._numLoading,void Se.then(ue=>{if(this._disposed)return(0,L.RY)(ue),void Te(null);Te(ue)}).finally(()=>--this._numLoading);Te(Se)}}class N extends G.K{constructor(K=null,Te=null,Se=null,ue=null,F=null){super(),this.texture=K,this.textureNormal=Te,this.textureEmissive=Se,this.textureOcclusion=ue,this.textureMetallicRoughness=F}}},40723:(Ne,le,T)=>{T.d(le,{F5:()=>k,yD:()=>Te});var Te,ue,L=T(28093),G=(T(17625),T(42743)),H=T(12699),U=T(24425),R=T(39114),N=T(21778);class k extends H.c{constructor(F,Z){super(),this.type=U.U.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=R.i,this._pp0=(0,L.f)(0,0,1),this._pp1=(0,L.f)(0,0,0),this._parameters=(0,N.Uf)(F,Z),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(F){return!1}setParameters(F,Z=!0){(0,N.LO)(this._parameters,F)&&(this.validateParameters(this._parameters),Z&&this.parametersChanged())}validateParameters(F){}get visible(){return this._visible}set visible(F){F!==this._visible&&(this._visible=F,this.parametersChanged())}shouldRender(F){return this.isVisible()&&this.isVisibleForOutput(F.output)&&(!this.parameters.isDecoration||F.bindParameters.decorations===G.Iq.ON)&&0!=(this.parameters.renderOccluded&F.renderOccludedMask)}isVisibleForOutput(F){return!0}get renderPriority(){return this._renderPriority}set renderPriority(F){F!==this._renderPriority&&(this._renderPriority=F,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository?.materialChanged(this)}intersectDraped(F,Z,pe,we,me,Pe){return this._pp0[0]=this._pp1[0]=we[0],this._pp0[1]=this._pp1[1]=we[1],this.intersect(F,Z,pe,this._pp0,this._pp1,me)}}(ue=Te||(Te={}))[ue.None=0]="None",ue[ue.Occlude=1]="Occlude",ue[ue.Transparent=2]="Transparent",ue[ue.OccludeAndTransparent=4]="OccludeAndTransparent",ue[ue.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",ue[ue.Opaque=16]="Opaque"},88569:(Ne,le,T)=>{T.d(le,{Bh:()=>ue,IB:()=>R,j7:()=>N,je:()=>Se,ve:()=>K,wu:()=>H});var L=T(44835),C=T(67969),G=T(2078);const H=(0,G.wK)(C.zi.SRC_ALPHA,C.zi.ONE,C.zi.ONE_MINUS_SRC_ALPHA,C.zi.ONE_MINUS_SRC_ALPHA),U=(0,G.if)(C.zi.ONE,C.zi.ONE),R=(0,G.if)(C.zi.ZERO,C.zi.ONE_MINUS_SRC_ALPHA);function N(F){return F===L.A.FrontFace?null:F===L.A.Alpha?R:U}const K=5e5,Te={factor:-1,units:-2};function Se(F){return F?Te:null}function ue(F,Z=C.wb.LESS){return F===L.A.NONE||F===L.A.FrontFace?Z:C.wb.LEQUAL}},12407:(Ne,le,T)=>{T.d(le,{$:()=>G});var L=T(77029),C=T(81653);class G{constructor(U,R,N){this._context=U,this._locations=N,this._textures=new Map,this._freeTextureUnits=new L.Z({deallocator:null}),this._glProgram=U.programCache.acquire(R.generate("vertex"),R.generate("fragment"),N),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=R.generateBindPass(this),this.bindDraw=R.generateBindDraw(this),this._fragmentUniforms=(0,C.hZ)()?R.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(U,R){this._glProgram.setUniform1i(U,R?1:0)}setUniform1i(U,R){this._glProgram.setUniform1i(U,R)}setUniform1f(U,R){this._glProgram.setUniform1f(U,R)}setUniform2fv(U,R){this._glProgram.setUniform2fv(U,R)}setUniform3fv(U,R){this._glProgram.setUniform3fv(U,R)}setUniform4fv(U,R){this._glProgram.setUniform4fv(U,R)}setUniformMatrix3fv(U,R){this._glProgram.setUniformMatrix3fv(U,R)}setUniformMatrix4fv(U,R){this._glProgram.setUniformMatrix4fv(U,R)}setUniform1fv(U,R){this._glProgram.setUniform1fv(U,R)}setUniform1iv(U,R){this._glProgram.setUniform1iv(U,R)}setUniform2iv(U,R){this._glProgram.setUniform3iv(U,R)}setUniform3iv(U,R){this._glProgram.setUniform3iv(U,R)}setUniform4iv(U,R){this._glProgram.setUniform4iv(U,R)}assertCompatibleVertexAttributeLocations(U){U.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(U,R){if(null==R?.glName){const k=this._textures.get(U);return k&&(this._context.bindTexture(null,k.unit),this._freeTextureUnit(k),this._textures.delete(U)),null}let N=this._textures.get(U);return null==N?(N=this._allocTextureUnit(R),this._textures.set(U,N)):N.texture=R,this._context.useProgram(this),this.setUniform1i(U,N.unit),this._context.bindTexture(R,N.unit),N.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((U,R)=>{this._context.bindTexture(U.texture,U.unit),this.setUniform1i(R,U.unit)}),null!=this._fragmentUniforms&&this._fragmentUniforms.forEach(U=>{"sampler2D"!==U.type&&"samplerCube"!==U.type||this._textures.has(U.name)||console.error(`Texture sampler ${U.name} has no bound texture`)})}_allocTextureUnit(U){return{texture:U,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(U){this._freeTextureUnits.push(U.unit)}}},5894:(Ne,le,T)=>{var L,C;T.d(le,{r:()=>L}),(C=L||(L={}))[C.INTEGRATED_MESH=0]="INTEGRATED_MESH",C[C.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",C[C.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",C[C.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",C[C.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",C[C.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",C[C.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",C[C.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",C[C.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",C[C.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",C[C.ANTIALIASING=10]="ANTIALIASING",C[C.COMPOSITE=11]="COMPOSITE",C[C.BLIT=12]="BLIT",C[C.SSAO=13]="SSAO",C[C.HIGHLIGHT=14]="HIGHLIGHT",C[C.SHADOW_HIGHLIGHT=15]="SHADOW_HIGHLIGHT",C[C.ENVIRONMENT_OPAQUE=16]="ENVIRONMENT_OPAQUE",C[C.ENVIRONMENT_TRANSPARENT=17]="ENVIRONMENT_TRANSPARENT",C[C.LASERLINES=18]="LASERLINES",C[C.LASERLINES_CONTRAST_CONTROL=19]="LASERLINES_CONTRAST_CONTROL",C[C.HUD_MATERIAL=20]="HUD_MATERIAL",C[C.LABEL_MATERIAL=21]="LABEL_MATERIAL",C[C.LINE_CALLOUTS=22]="LINE_CALLOUTS",C[C.LINE_CALLOUTS_HUD_DEPTH=23]="LINE_CALLOUTS_HUD_DEPTH",C[C.DRAPED_MATERIAL=24]="DRAPED_MATERIAL",C[C.DRAPED_WATER=25]="DRAPED_WATER",C[C.VOXEL=26]="VOXEL",C[C.MAX_SLOTS=27]="MAX_SLOTS"},44835:(Ne,le,T)=>{var L,C;T.d(le,{A:()=>L}),(C=L||(L={}))[C.Color=0]="Color",C[C.Alpha=1]="Alpha",C[C.FrontFace=2]="FrontFace",C[C.NONE=3]="NONE",C[C.COUNT=4]="COUNT"},21778:(Ne,le,T)=>{T.d(le,{FZ:()=>Xe,Uf:()=>ve,Bw:()=>He,LO:()=>ne,Hx:()=>Ge});var L=T(85931),C=T(21286),G=T(84161),H=T(28093),U=T(5548),R=T(24425);T(59617),(0,C.Vl)(10),(0,C.Vl)(12),(0,C.Vl)(70),(0,C.Vl)(40);const de={scale:0,factor:0,minScaleFactor:0};var Re=T(2282),fe=T(16396);const Le=(0,U.Ue)();function He(oe,ge,W,$,se,X){if(oe.visible)if(oe.boundingInfo)(0,Re.hu)(oe.type===R.U.Mesh),st(oe.boundingInfo,W,$,ge.tolerance,se,X);else{const ee=oe.attributes.get(fe.T.POSITION),Ee=ee.indices;Et(W,$,0,Ee.length/3,Ee,ee,void 0,se,X)}}const ke=(0,H.c)();function st(oe,ge,W,$,se,X){if(null==oe)return;const ee=function it(oe,ge,W){return(0,G.s)(W,1/(ge[0]-oe[0]),1/(ge[1]-oe[1]),1/(ge[2]-oe[2]))}(ge,W,ke);if((0,U.op)(Le,oe.bbMin),(0,U.Tn)(Le,oe.bbMax),se?.applyToAabb(Le),function be(oe,ge,W,$){return function We(oe,ge,W,$,se){const X=(oe[0]-$-ge[0])*W[0],ee=(oe[3]+$-ge[0])*W[0];let Ee=Math.min(X,ee),Q=Math.max(X,ee);const he=(oe[1]-$-ge[1])*W[1],Fe=(oe[4]+$-ge[1])*W[1];if(Q=Math.min(Q,Math.max(he,Fe)),Q<0||(Ee=Math.max(Ee,Math.min(he,Fe)),Ee>Q))return!1;const Ke=(oe[2]-$-ge[2])*W[2],$e=(oe[5]+$-ge[2])*W[2];return Q=Math.min(Q,Math.max(Ke,$e)),!(Q<0)&&(Ee=Math.max(Ee,Math.min(Ke,$e)),!(Ee>Q)&&Ee<se)}(oe,ge,W,$,1/0)}(Le,ge,ee,$)){const{primitiveIndices:Ee,position:Q}=oe,he=Ee?Ee.length:Q.indices.length/3;if(he>q){const Fe=oe.getChildren();if(void 0!==Fe){for(const Ke of Fe)st(Ke,ge,W,$,se,X);return}}Et(ge,W,0,he,Q.indices,Q,Ee,se,X)}}const Ue=(0,H.c)();function Et(oe,ge,W,$,se,X,ee,Ee,Q){if(ee)return function gt(oe,ge,W,$,se,X,ee,Ee,Q){const{data:he,stride:Fe}=X,Ke=oe[0],$e=oe[1],Dt=oe[2],Mt=ge[0]-Ke,Ct=ge[1]-$e,mt=ge[2]-Dt;for(let Tt=W;Tt<$;++Tt){const At=ee[Tt];let Rt=3*At,yt=Fe*se[Rt++],bt=he[yt++],zt=he[yt++],V=he[yt];yt=Fe*se[Rt++];let te=he[yt++],xe=he[yt++],De=he[yt];yt=Fe*se[Rt];let _e=he[yt++],je=he[yt++],dt=he[yt];null!=Ee&&([bt,zt,V]=Ee.applyToVertex(bt,zt,V,Tt),[te,xe,De]=Ee.applyToVertex(te,xe,De,Tt),[_e,je,dt]=Ee.applyToVertex(_e,je,dt,Tt));const Lt=te-bt,Kt=xe-zt,Qt=De-V,Ie=_e-bt,ye=je-zt,Be=dt-V,et=Ct*Be-ye*mt,lt=mt*Ie-Be*Mt,rt=Mt*ye-Ie*Ct,qe=Lt*et+Kt*lt+Qt*rt;if(Math.abs(qe)<=Number.EPSILON)continue;const It=Ke-bt,Gt=$e-zt,$t=Dt-V,Wt=It*et+Gt*lt+$t*rt;if(qe>0){if(Wt<0||Wt>qe)continue}else if(Wt>0||Wt<qe)continue;const kt=Gt*Qt-Kt*$t,qt=$t*Lt-Qt*It,Jt=It*Kt-Lt*Gt,Yt=Mt*kt+Ct*qt+mt*Jt;if(qe>0){if(Yt<0||Wt+Yt>qe)continue}else if(Yt>0||Wt+Yt<qe)continue;const rr=(Ie*kt+ye*qt+Be*Jt)/qe;rr>=0&&Q(rr,_t(Lt,Kt,Qt,Ie,ye,Be,Ue),At,!1)}}(oe,ge,W,$,se,X,ee,Ee,Q);const{data:he,stride:Fe}=X,Ke=oe[0],$e=oe[1],Dt=oe[2],Mt=ge[0]-Ke,Ct=ge[1]-$e,mt=ge[2]-Dt;for(let Tt=W,At=3*W;Tt<$;++Tt){let Rt=Fe*se[At++],yt=he[Rt++],bt=he[Rt++],zt=he[Rt];Rt=Fe*se[At++];let V=he[Rt++],te=he[Rt++],xe=he[Rt];Rt=Fe*se[At++];let De=he[Rt++],_e=he[Rt++],je=he[Rt];null!=Ee&&([yt,bt,zt]=Ee.applyToVertex(yt,bt,zt,Tt),[V,te,xe]=Ee.applyToVertex(V,te,xe,Tt),[De,_e,je]=Ee.applyToVertex(De,_e,je,Tt));const dt=V-yt,Lt=te-bt,Kt=xe-zt,Qt=De-yt,Ie=_e-bt,ye=je-zt,Be=Ct*ye-Ie*mt,et=mt*Qt-ye*Mt,lt=Mt*Ie-Qt*Ct,rt=dt*Be+Lt*et+Kt*lt;if(Math.abs(rt)<=Number.EPSILON)continue;const qe=Ke-yt,It=$e-bt,Gt=Dt-zt,$t=qe*Be+It*et+Gt*lt;if(rt>0){if($t<0||$t>rt)continue}else if($t>0||$t<rt)continue;const Wt=It*Kt-Lt*Gt,kt=Gt*dt-Kt*qe,qt=qe*Lt-dt*It,Jt=Mt*Wt+Ct*kt+mt*qt;if(rt>0){if(Jt<0||$t+Jt>rt)continue}else if(Jt>0||$t+Jt<rt)continue;const Yt=(Qt*Wt+Ie*kt+ye*qt)/rt;Yt>=0&&Q(Yt,_t(dt,Lt,Kt,Qt,Ie,ye,Ue),Tt,!1)}}const Pt=(0,H.c)(),Ve=(0,H.c)();function _t(oe,ge,W,$,se,X,ee){return(0,G.s)(Pt,oe,ge,W),(0,G.s)(Ve,$,se,X),(0,G.b)(ee,Pt,Ve),(0,G.n)(ee,ee),ee}function Ge(oe,ge,W,$,se){let X=(W.screenLength||0)*oe.pixelRatio;null!=se&&(X=function we(oe,ge,W,$){return function ue(oe,ge){return(0,C.t7)(oe*Math.max(ge.scale,ge.minScaleFactor),oe,ge.factor)}(oe,function Se(oe,ge,W){const $=W.parameters;return de.scale=Math.min($.divisor/(ge-$.offset),1),de.factor=function Te(oe){return Math.abs(oe*oe*oe)}(oe),de}(ge,W,$))}(X,$,ge,se));const ee=X*Math.tan(.5*oe.fovY)/(.5*oe.fullHeight);return(0,C.uZ)(ee*ge,W.minWorldLength||0,null!=W.maxWorldLength?W.maxWorldLength:1/0)}function ve(oe,ge){const W=ge?ve(ge):{};for(const $ in oe){let se=oe[$];se?.forEach&&(se=re(se)),null==se&&$ in W||(W[$]=se)}return W}function ne(oe,ge){let W=!1;for(const $ in ge){const se=ge[$];void 0!==se&&(Array.isArray(se)?null===oe[$]?(oe[$]=se.slice(),W=!0):(0,L.Vx)(oe[$],se)&&(W=!0):oe[$]!==se&&(W=!0,oe[$]=se))}return W}function re(oe){const ge=[];return oe.forEach(W=>ge.push(W)),ge}const Xe={multiply:1,ignore:2,replace:3,tint:4},q=1e3},2078:(Ne,le,T)=>{T.d(le,{BK:()=>K,LZ:()=>k,if:()=>G,jp:()=>Xe,sm:()=>ce,wK:()=>H,zp:()=>N});var L=T(42743),C=T(67969);function G(q,oe,ge=C.db.ADD,W=[0,0,0,0]){return{srcRgb:q,srcAlpha:q,dstRgb:oe,dstAlpha:oe,opRgb:ge,opAlpha:ge,color:{r:W[0],g:W[1],b:W[2],a:W[3]}}}function H(q,oe,ge,W,$=C.db.ADD,se=C.db.ADD,X=[0,0,0,0]){return{srcRgb:q,srcAlpha:oe,dstRgb:ge,dstAlpha:W,opRgb:$,opAlpha:se,color:{r:X[0],g:X[1],b:X[2],a:X[3]}}}const U={face:C.LR.BACK,mode:C.Wf.CCW},R={face:C.LR.FRONT,mode:C.Wf.CCW},N=q=>q===L.Vr.Back?U:q===L.Vr.Front?R:null,k={zNear:0,zFar:1},K={r:!0,g:!0,b:!0,a:!0};function Te(q){return Oe.intern(q)}function Se(q){return fe.intern(q)}function ue(q){return He.intern(q)}function F(q){return st.intern(q)}function Z(q){return Et.intern(q)}function pe(q){return Pt.intern(q)}function we(q){return _t.intern(q)}function me(q){return be.intern(q)}function Pe(q){return Ge.intern(q)}function ce(q){return ne.intern(q)}class Me{constructor(oe,ge){this._makeKey=oe,this._makeRef=ge,this._interns=new Map}intern(oe){if(!oe)return null;const ge=this._makeKey(oe),W=this._interns;return W.has(ge)||W.set(ge,this._makeRef(oe)),W.get(ge)??null}}function de(q){return"["+q.join(",")+"]"}const Oe=new Me(Re,q=>({__tag:"Blending",...q}));function Re(q){return q?de([q.srcRgb,q.srcAlpha,q.dstRgb,q.dstAlpha,q.opRgb,q.opAlpha,q.color.r,q.color.g,q.color.b,q.color.a]):null}const fe=new Me(Le,q=>({__tag:"Culling",...q}));function Le(q){return q?de([q.face,q.mode]):null}const He=new Me(ke,q=>({__tag:"PolygonOffset",...q}));function ke(q){return q?de([q.factor,q.units]):null}const st=new Me(Ue,q=>({__tag:"DepthTest",...q}));function Ue(q){return q?de([q.func]):null}const Et=new Me(gt,q=>({__tag:"StencilTest",...q}));function gt(q){return q?de([q.function.func,q.function.ref,q.function.mask,q.operation.fail,q.operation.zFail,q.operation.zPass]):null}const Pt=new Me(Ve,q=>({__tag:"DepthWrite",...q}));function Ve(q){return q?de([q.zNear,q.zFar]):null}const _t=new Me(it,q=>({__tag:"ColorWrite",...q}));function it(q){return q?de([q.r,q.g,q.b,q.a]):null}const be=new Me(We,q=>({__tag:"StencilWrite",...q}));function We(q){return q?de([q.mask]):null}const Ge=new Me(ve,q=>({__tag:"DrawBuffers",...q}));function ve(q){return q?de(q.buffers):null}const ne=new Me(function re(q){return q?de([Re(q.blending),Le(q.culling),ke(q.polygonOffset),Ue(q.depthTest),gt(q.stencilTest),Ve(q.depthWrite),it(q.colorWrite),We(q.stencilWrite),ve(q.drawBuffers)]):null},q=>({blending:Te(q.blending),culling:Se(q.culling),polygonOffset:ue(q.polygonOffset),depthTest:F(q.depthTest),stencilTest:Z(q.stencilTest),depthWrite:pe(q.depthWrite),colorWrite:we(q.colorWrite),stencilWrite:me(q.stencilWrite),drawBuffers:Pe(q.drawBuffers)}));class Xe{constructor(oe){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=oe}setPipeline(oe){(this._pipelineInvalid||oe!==this._pipeline)&&(this._setBlending(oe.blending),this._setCulling(oe.culling),this._setPolygonOffset(oe.polygonOffset),this._setDepthTest(oe.depthTest),this._setStencilTest(oe.stencilTest),this._setDepthWrite(oe.depthWrite),this._setColorWrite(oe.colorWrite),this._setStencilWrite(oe.stencilWrite),this._setDrawBuffers(oe.drawBuffers),this._pipeline=oe),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(oe){this._blending=this._setSubState(oe,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(oe){this._culling=this._setSubState(oe,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(oe){this._polygonOffset=this._setSubState(oe,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(oe){this._depthTest=this._setSubState(oe,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(oe){this._stencilTest=this._setSubState(oe,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(oe){this._depthWrite=this._setSubState(oe,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(oe){this._colorWrite=this._setSubState(oe,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(oe){this._stencilWrite=this._setSubState(oe,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(oe){this._drawBuffers=this._setSubState(oe,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(oe,ge,W,$){return(W||oe!==ge)&&($(oe),this._pipelineInvalid=!0),oe}}}}]);