"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[7400],{27400:(_,d,s)=>{s.r(d),s.d(d,{CalciteListItemGroup:()=>h,defineCustomElement:()=>g});var i=s(76210),c=s(18564),u=s(89251);const f=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalListItemGroupDefaultSlotChange=(0,i.yM)(this,"calciteInternalListItemGroupDefaultSlotChange",6),this.handleDefaultSlotChange=()=>{this.calciteInternalListItemGroupDefaultSlotChange.emit()},this.disabled=!1,this.heading=void 0,this.visualLevel=null}connectedCallback(){const{el:a}=this;this.visualLevel=(0,u.a)(a,!0),(0,c.c)(this)}componentDidRender(){(0,c.u)(this)}disconnectedCallback(){(0,c.d)(this)}render(){const{heading:a,visualLevel:r}=this;return(0,i.h)(i.AA,null,(0,i.h)("tr",{class:"container",style:{"--calcite-list-item-spacing-indent-multiplier":`${r}`}},(0,i.h)("td",{class:"heading",colSpan:u.M},a)),(0,i.h)("slot",{onSlotchange:this.handleDefaultSlotChange}))}get el(){return this}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);--calcite-list-item-spacing-indent:1rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{margin:0px;display:flex;flex:1 1 0%;background-color:var(--calcite-ui-foreground-2);padding:0.75rem;font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-2)}.heading{padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}::slotted(calcite-list-item){--tw-shadow:0 -1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 -1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);margin-block-start:1px}::slotted(calcite-list-item:nth-child(1 of :not([hidden]))){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);margin-block-start:0px}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-list-item-group",{disabled:[516],heading:[513],visualLevel:[32]}]);function o(){typeof customElements>"u"||["calcite-list-item-group"].forEach(r=>{"calcite-list-item-group"===r&&(customElements.get(r)||customElements.define(r,f))})}o();const h=f,g=o},18564:(_,d,s)=>{s.d(d,{c:()=>C,d:()=>D,u:()=>r});var i=s(76210);const n=/firefox/i.test(function u(){if(!i.Z5.isBrowser)return"";const t=function c(){return navigator.userAgentData}();return t?.brands?t.brands.map(({brand:e,version:v})=>`${e}/${v}`).join(" "):navigator.userAgent}()),l=n?new WeakMap:null;function f(){const{disabled:t}=this;t||HTMLElement.prototype.click.call(this)}function o(t){const e=t.target;if(n&&!l.get(e))return;const{disabled:v}=e;v&&t.preventDefault()}const h=["mousedown","mouseup","click"];function g(t){if(n&&!l.get(t.target))return;const{disabled:e}=t.target;e&&(t.stopImmediatePropagation(),t.preventDefault())}const a={capture:!0};function r(t,e=!1){if(t.disabled)return t.el.setAttribute("tabindex","-1"),t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void b(t);p(t),"function"==typeof e?t.el.setAttribute("tabindex",e.call(t)?"0":"-1"):!0===e?t.el.setAttribute("tabindex","0"):!1===e&&t.el.removeAttribute("tabindex"),t.el.removeAttribute("aria-disabled")}function b(t){t.el.click=f,function w(t){t&&(t.addEventListener("pointerdown",o,a),h.forEach(e=>t.addEventListener(e,g,a)))}(n?m(t):t.el)}function m(t){return l.get(t.el)}function p(t){delete t.el.click,function E(t){t&&(t.removeEventListener("pointerdown",o,a),h.forEach(e=>t.removeEventListener(e,g,a)))}(n?m(t):t.el)}function C(t){t.disabled&&n&&(l.set(t.el,t.el.parentElement||t.el),b(t))}function D(t){n&&(l.delete(t.el),p(t))}}}]);