"use strict";(self.webpackChunkCRIS=self.webpackChunkCRIS||[]).push([[587],{10587:(F,v,u)=>{u.r(v),u.d(v,{addOrUpdateResource:()=>I,contentToBlob:()=>C,fetchResources:()=>E,getSiblingOfSameType:()=>D,getSiblingOfSameTypeI:()=>M,removeAllResources:()=>b,removeResource:()=>O,splitPrefixFileNameAndExtension:()=>h});var l=u(15861),x=u(84792),R=u(26584),o=u(21726);function E(e){return p.apply(this,arguments)}function p(){return(p=(0,l.Z)(function*(e,t={},r){yield e.load(r);const n=(0,o.v_)(e.itemUrl,"resources"),{start:a=1,num:y=10,sortOrder:i="asc",sortField:c="created"}=t,s={query:{start:a,num:y,sortOrder:i,sortField:c,token:e.apiKey},signal:r?.signal},g=yield e.portal.request(n,s);return{total:g.total,nextStart:g.nextStart,resources:g.resources.map(({created:U,size:T,resource:j})=>({created:new Date(U),size:T,resource:e.resourceFromPath(j)}))}})).apply(this,arguments)}function I(e,t,r,n){return d.apply(this,arguments)}function d(){return(d=(0,l.Z)(function*(e,t,r,n){if(!e.hasPath())throw new R.Z(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const a=e.portalItem;yield a.load(n);const y=(0,o.v_)(a.userItemUrl,"add"===t?"addResources":"updateResources"),[i,c]=P(e.path),s=new FormData;return i&&"."!==i&&s.append("resourcesPrefix",i),null!=n&&n.compress&&s.append("compress","true"),s.append("fileName",c),s.append("file",r,c),s.append("f","json"),n?.access&&s.append("access",n.access),yield a.portal.request(y,{method:"post",body:s,signal:n?.signal}),e})).apply(this,arguments)}function O(e,t,r){return _.apply(this,arguments)}function _(){return(_=(0,l.Z)(function*(e,t,r){if(!t.hasPath())throw new R.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");yield e.load(r);const n=(0,o.v_)(e.userItemUrl,"removeResources");yield e.portal.request(n,{method:"post",query:{resource:t.path},signal:r?.signal}),t.portalItem=null})).apply(this,arguments)}function b(e,t){return m.apply(this,arguments)}function m(){return(m=(0,l.Z)(function*(e,t){yield e.load(t);const r=(0,o.v_)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:t?.signal})})).apply(this,arguments)}function P(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function h(e){const[t,r]=function S(e){const t=(0,o.Ml)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[n,a]=P(t);return[n,a,r]}function C(e){return f.apply(this,arguments)}function f(){return(f=(0,l.Z)(function*(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(yield(0,x.Z)(e.url,{responseType:"blob"})).data})).apply(this,arguments)}function D(e,t){if(!e.hasPath())return null;const[r,,n]=h(e.path);return e.portalItem.resourceFromPath((0,o.v_)(r,t+n))}function M(e,t){if(!e.hasPath())return null;const[r,,n]=h(e.path);return e.portalItem.resourceFromPath((0,o.v_)(r,t+n))}}}]);