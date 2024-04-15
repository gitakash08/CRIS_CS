"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[6554],{46833:(N,E,l)=>{function g(_){return"Enter"===_||" "===_}l.d(E,{i:()=>g,n:()=>f});const f=["0","1","2","3","4","5","6","7","8","9"]},23663:(N,E,l)=>{l.d(E,{B:()=>s,c:()=>J,d:()=>Q,e:()=>m,g:()=>j,i:()=>c,n:()=>q,p:()=>h,s:()=>M});var g=l(46203),f=l(46833),_=l(22757);const d=new RegExp("\\.(0+)?$"),O=new RegExp("0+$");class s{constructor(t){if(t instanceof s)return t;const[n,r]=function x(e){const t=e.split(/[eE]/);if(1===t.length)return e;const n=+e;if(Number.isSafeInteger(n))return`${n}`;const r="-"===e.charAt(0),i=+t[1],u=t[0].split("."),$=(r?u[0].substring(1):u[0])||"",K=u[1]||"",H=i>0?`${$}${((b,v)=>{const D=v>b.length?`${b}${"0".repeat(v-b.length)}`:b;return`${D.slice(0,v)}.${D.slice(v)}`})(K,i)}`:`${((b,v)=>{const D=Math.abs(v)-b.length,k=D>0?`${"0".repeat(D)}${b}`:b;return`${k.slice(0,v)}.${k.slice(v)}`})($,i)}${K}`;return`${r?"-":""}${"."===H.charAt(0)?"0":""}${H.replace(d,"").replace(p,"")}`}(t).split(".").concat("");this.value=BigInt(n+r.padEnd(s.DECIMALS,"0").slice(0,s.DECIMALS))+BigInt(s.ROUNDED&&r[s.DECIMALS]>="5"),this.isNegative="-"===t.charAt(0)}getIntegersAndDecimals(){const t=this.value.toString().replace("-","").padStart(s.DECIMALS+1,"0");return{integers:t.slice(0,-s.DECIMALS),decimals:t.slice(-s.DECIMALS).replace(O,"")}}toString(){const{integers:t,decimals:n}=this.getIntegersAndDecimals();return`${this.isNegative?"-":""}${t}${n.length?"."+n:""}`}formatToParts(t){const{integers:n,decimals:r}=this.getIntegersAndDecimals(),i=t.numberFormatter.formatToParts(BigInt(n));return this.isNegative&&i.unshift({type:"minusSign",value:t.minusSign}),r.length&&(i.push({type:"decimal",value:t.decimal}),r.split("").forEach(u=>i.push({type:"fraction",value:u}))),i}format(t){const{integers:n,decimals:r}=this.getIntegersAndDecimals();return`${this.isNegative?t.minusSign:""}${t.numberFormatter.format(BigInt(n))}${r.length?`${t.decimal}${r.split("").map($=>t.numberFormatter.format(Number($))).join("")}`:""}`}add(t){return s.fromBigInt(this.value+new s(t).value)}subtract(t){return s.fromBigInt(this.value-new s(t).value)}multiply(t){return s._divRound(this.value*new s(t).value,s.SHIFT)}divide(t){return s._divRound(this.value*s.SHIFT,new s(t).value)}}function c(e){return!(!e||isNaN(Number(e)))}function h(e){return e&&function a(e){return f.n.some(t=>e.includes(t))}(e)?y(e,t=>{let n=!1;const r=t.split("").filter((i,u)=>i.match(/\./g)&&!n?(n=!0,!0):!(!i.match(/\-/g)||0!==u)||f.n.includes(i)).join("");return c(r)?new s(r).toString():""}):""}s.DECIMALS=100,s.ROUNDED=!0,s.SHIFT=BigInt("1"+"0".repeat(s.DECIMALS)),s._divRound=(e,t)=>s.fromBigInt(e/t+(s.ROUNDED?e*BigInt(2)/t%BigInt(2):BigInt(0))),s.fromBigInt=e=>Object.assign(Object.create(s.prototype),{value:e,isNegative:e<BigInt(0)});const p=/^([-0])0+(?=\d)/,w=/(?!^\.)\.$/,L=/(?!^-)-/g,I=/^-\b0\b\.?0*$/,A=/0*$/,M=e=>y(e,t=>{const n=t.replace(L,"").replace(w,"").replace(p,"$1");return c(n)?I.test(n)?n:function R(e){const t=e.split(".")[1],n=new s(e).toString(),[r,i]=n.split(".");return t&&i!==t?`${r}.${t}`:n}(n):t});function y(e,t){if(!e)return e;const n=e.toLowerCase().indexOf("e")+1;return n?e.replace(/[eE]*$/g,"").substring(0,n).concat(e.slice(n).replace(/[eE]/g,"")).split(/[eE]/).map((r,i)=>t(1===i?r.replace(/\./g,""):r)).join("e").replace(/^e/,"1e"):t(e)}function m(e,t,n){const r=t.split(".")[1];if(r){const i=r.match(A)[0];if(i&&n.delocalize(e).length!==t.length&&-1===r.indexOf("e")){const u=n.decimal;return(e=e.includes(u)?e:`${e}${u}`).padEnd(e.length+i.length,n.localize("0"))}}return e}const o="en",S=["ar","bg","bs","ca","cs","da","de","el",o,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],T=["ar","bg","bs","ca","cs","da","de","de-AT","de-CH","el",o,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],W=["arab","arabext","bali","beng","deva","fullwide","gujr","guru","hanidec","khmr","knda","laoo","latn","limb","mlym","mong","mymr","orya","tamldec","telu","thai","tibt"],U=e=>W.includes(e),P=(new Intl.NumberFormat).resolvedOptions().numberingSystem,z="arab"!==P&&U(P)?P:"latn";function j(e,t="cldr"){const n="cldr"===t?T:S;return e?n.includes(e)?e:"nb"===(e=e.toLowerCase())?"no":"t9n"===t&&"pt"===e?"pt-BR":(e.includes("-")&&(e=e.replace(/(\w+)-(\w+)/,(r,i,u)=>`${i}-${u.toUpperCase()}`),n.includes(e)||(e=e.split("-")[0])),"zh"===e?"zh-CN":n.includes(e)?e:(console.warn(`Translations for the "${e}" locale are not available and will fall back to the default, English (en).`),o)):o}const C=new Set;function J(e){(function X(e){e.effectiveLocale=function Y(e){return e.el.lang||(0,g.c)(e.el,"[lang]")?.lang||document.documentElement.lang||o}(e)})(e),0===C.size&&B?.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0}),C.add(e)}function Q(e){C.delete(e),0===C.size&&B.disconnect()}const B=(0,_.c)("mutation",e=>{e.forEach(t=>{const n=t.target;C.forEach(r=>{if(!(0,g.x)(n,r.el))return;const u=(0,g.c)(r.el,"[lang]");if(!u)return void(r.effectiveLocale=o);const $=u.lang;r.effectiveLocale=u.hasAttribute("lang")&&""===$?o:$})})}),q=new class V{constructor(){this.delocalize=t=>this._numberFormatOptions?y(t,n=>n.replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex)):t,this.localize=t=>this._numberFormatOptions?y(t,n=>c(n.trim())?new s(n.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):n):t}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(t){if(t.locale=j(t?.locale),t.numberingSystem=(e=t?.numberingSystem,U(e)?e:z),!this._numberFormatOptions&&t.locale===o&&t.numberingSystem===z&&2===Object.keys(t).length||JSON.stringify(this._numberFormatOptions)===JSON.stringify(t))return;var e;this._numberFormatOptions=t,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const n=new Map(this._digits.map((i,u)=>[i,u])),r=new Intl.NumberFormat(this._numberFormatOptions.locale,{numberingSystem:this._numberFormatOptions.numberingSystem}).formatToParts(-12345678.9);this._actualGroup=r.find(i=>"group"===i.type).value,this._group=0===this._actualGroup.trim().length||" "==this._actualGroup?"\xa0":this._actualGroup,this._decimal=r.find(i=>"decimal"===i.type).value,this._minusSign=r.find(i=>"minusSign"===i.type).value,this._getDigitIndex=i=>n.get(i)}}},22757:(N,E,l)=>{l.d(E,{c:()=>f});var g=l(76210);function f(d,O,s){if(!g.Z5.isBrowser)return;const c=function _(d){class O extends window.MutationObserver{constructor(c){super(c),this.observedEntry=[],this.callback=c}observe(c,h){return this.observedEntry.push({target:c,options:h}),super.observe(c,h)}unobserve(c){const h=this.observedEntry.filter(p=>p.target!==c);this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),h.forEach(p=>this.observe(p.target,p.options))}}return"intersection"===d?window.IntersectionObserver:"mutation"===d?O:window.ResizeObserver}(d);return new c(O,s)}},66554:(N,E,l)=>{l.d(E,{c:()=>R,d:()=>y,s:()=>p,u:()=>A});var g=l(15861),f=l(76210),_=l(23663);const d={};function s(){return(s=(0,g.Z)(function*(a,m){const o=`${m}_${a}`;return d[o]||(d[o]=fetch((0,f.K3)(`./assets/${m}/t9n/messages_${a}.json`)).then(S=>(S.ok||c(),S.json())).catch(()=>c())),d[o]})).apply(this,arguments)}function c(){throw new Error("could not fetch component message bundle")}function h(a){a.messages={...a.defaultMessages,...a.messageOverrides}}function p(a){return w.apply(this,arguments)}function w(){return(w=(0,g.Z)(function*(a){a.defaultMessages=yield L(a,a.effectiveLocale),h(a)})).apply(this,arguments)}function L(a,m){return I.apply(this,arguments)}function I(){return I=(0,g.Z)(function*(a,m){if(!f.Z5.isBrowser)return{};const{el:o}=a,T=o.tagName.toLowerCase().replace("calcite-","");return function O(a,m){return s.apply(this,arguments)}((0,_.g)(m,"t9n"),T)}),I.apply(this,arguments)}function A(a,m){return M.apply(this,arguments)}function M(){return(M=(0,g.Z)(function*(a,m){a.defaultMessages=yield L(a,m),h(a)})).apply(this,arguments)}function R(a){a.onMessagesChange=x}function y(a){a.onMessagesChange=void 0}function x(){h(this)}}}]);