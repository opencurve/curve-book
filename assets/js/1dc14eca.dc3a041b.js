"use strict";(self.webpackChunkcurve_book=self.webpackChunkcurve_book||[]).push([[9486],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||c;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6482:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const c={},a="\u4f7f\u7528 CurveAdm \u90e8\u7f72\u5206\u5e03\u5f0f\u7f13\u5b58",i={unversionedId:"CurveFS/deploy/distributed-cache",id:"CurveFS/deploy/distributed-cache",title:"\u4f7f\u7528 CurveAdm \u90e8\u7f72\u5206\u5e03\u5f0f\u7f13\u5b58",description:"\u5206\u5e03\u5f0f\u7f13\u5b58\u4ecb\u7ecd",source:"@site/docs/03-CurveFS/02-deploy/05-distributed-cache.md",sourceDirName:"03-CurveFS/02-deploy",slug:"/CurveFS/deploy/distributed-cache",permalink:"/CurveFS/deploy/distributed-cache",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u79bb\u7ebf\u90e8\u7f72 CurveFS \u96c6\u7fa4",permalink:"/CurveFS/deploy/offline-deploy"},next:{title:"CurveFS CSI \u9a71\u52a8\u7a0b\u5e8f",permalink:"/CurveFS/deploy/csi"}},u={},l=[{value:"\u5206\u5e03\u5f0f\u7f13\u5b58\u4ecb\u7ecd",id:"\u5206\u5e03\u5f0f\u7f13\u5b58\u4ecb\u7ecd",level:2},{value:"\u90e8\u7f72\u6b65\u9aa4",id:"\u90e8\u7f72\u6b65\u9aa4",level:3}],p={toc:l},d="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4f7f\u7528-curveadm-\u90e8\u7f72\u5206\u5e03\u5f0f\u7f13\u5b58"},"\u4f7f\u7528 CurveAdm \u90e8\u7f72\u5206\u5e03\u5f0f\u7f13\u5b58"),(0,o.kt)("h2",{id:"\u5206\u5e03\u5f0f\u7f13\u5b58\u4ecb\u7ecd"},"\u5206\u5e03\u5f0f\u7f13\u5b58\u4ecb\u7ecd"),(0,o.kt)("p",null,"\u5206\u5e03\u5f0f\u7f13\u5b58\u96c6\u7fa4\u4e0d\u662f\u5fc5\u987b\u8981\u90e8\u7f72\u7684\uff0c\u4f46\u5982\u9700\u8fdb\u4e00\u6b65\u63d0\u5347\u6027\u80fd\uff0c\u53ef\u4ee5\u4e3a CurveFS \u96c6\u7fa4\u90e8\u7f72\u5206\u5e03\u5f0f\u7f13\u5b58\u670d\u52a1\uff08\u5f53\u524d\u57fa\u4e8ememcached\u96c6\u7fa4\uff09\uff0cCurveFS \u5ba2\u6237\u7aef\u7f13\u5b58\u5f53\u524d\u6709\u5185\u5b58\u3001\u672c\u5730\u786c\u76d8\u3001\u5206\u5e03\u5f0f\u7f13\u5b583\u7c7b\uff0c\u5206\u522b\u4e3aL1\u3001L2\u3001L3\u7ea7\u7f13\u5b58\uff0c\u5747\u652f\u6301\u8bfb\u5199\u7f13\u5b58\u3002"),(0,o.kt)("p",null,"\u57fa\u4e8ememcached\u96c6\u7fa4\u7684\u5206\u5e03\u5f0f\u7f13\u5b58\uff0c\u5f53\u524d\u652f\u6301\u901a\u8fc7Extstore\u6765\u901a\u8fc7\u786c\u76d8\u6269\u5c55\u7f13\u5b58\u5bb9\u91cf\uff0c\u8be6\u60c5\u53ef\u53c2\u4e0e\u5b98\u65b9\u6587\u6863\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/memcached/memcached/wiki/Extstore"},"https://github.com/memcached/memcached/wiki/Extstore")),(0,o.kt)("h3",{id:"\u90e8\u7f72\u6b65\u9aa4"},"\u90e8\u7f72\u6b65\u9aa4"),(0,o.kt)("p",null,"\u90e8\u7f72\u5206\u5e03\u5f0f\u7f13\u5b58\u96c6\u7fa4\uff0c\u4ee5\u53ca\u5c06\u7f13\u5b58\u96c6\u7fa4\u914d\u7f6e\u5230 CurveFS \u96c6\u7fa4\u7684\u8be6\u7ec6\u6b65\u9aa4\u8bf7\u53c2\u9605\u6587\u6863\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curveadm/wiki/deploy_memcached"},"\u90e8\u7f72\u5206\u5e03\u5f0f\u7f13\u5b58")))}s.isMDXComponent=!0}}]);