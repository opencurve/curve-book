"use strict";(self.webpackChunkcurve_book=self.webpackChunkcurve_book||[]).push([[4460],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=o,m=s["".concat(l,".").concat(d)]||s[d]||v[d]||c;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2336:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>v,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const c={},a="CurveBS CSI \u9a71\u52a8\u7a0b\u5e8f",i={unversionedId:"CurveBS/deploy/csi",id:"CurveBS/deploy/csi",title:"CurveBS CSI \u9a71\u52a8\u7a0b\u5e8f",description:"\u7b80\u4ecb",source:"@site/docs/02-CurveBS/02-deploy/05-csi.md",sourceDirName:"02-CurveBS/02-deploy",slug:"/CurveBS/deploy/csi",permalink:"/CurveBS/deploy/csi",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u79bb\u7ebf\u90e8\u7f72 CurveFS \u96c6\u7fa4",permalink:"/CurveBS/deploy/offline-deploy"},next:{title:"iSCSI \u534f\u8bae\u652f\u6301",permalink:"/CurveBS/deploy/iscsi"}},l={},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"CSI \u89c4\u8303\u548c Kubernetes \u7248\u672c\u517c\u5bb9\u6027",id:"csi-\u89c4\u8303\u548c-kubernetes-\u7248\u672c\u517c\u5bb9\u6027",level:3},{value:"\u5f00\u53d1\u8005",id:"\u5f00\u53d1\u8005",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u6d4b\u8bd5\u53ca\u7528\u6237\u624b\u518c",id:"\u6d4b\u8bd5\u53ca\u7528\u6237\u624b\u518c",level:2}],p={toc:u},s="wrapper";function v(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"curvebs-csi-\u9a71\u52a8\u7a0b\u5e8f"},"CurveBS CSI \u9a71\u52a8\u7a0b\u5e8f"),(0,o.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("p",null,"\u8be5\u63d2\u4ef6\u5b9e\u73b0\u4e86 Container Orchestrator(CO) \u548c Curve \u96c6\u7fa4\u4e4b\u95f4\u7684\u5bb9\u5668\u5b58\u50a8\u63a5\u53e3\uff08CSI\uff09\uff0c\u4ece\u800c\u652f\u6301\u52a8\u6001\u5730\u914d\u7f6e Curve \u5377\u5e76\u5c06\u5176\u9644\u52a0\u5230\u5de5\u4f5c\u8d1f\u8f7d\u5bb9\u5668\u3002"),(0,o.kt)("p",null,"Curve \u9879\u76ee\u4fe1\u606f\u8bf7\u53c2\u8003\uff1a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.opencurve.io"},"https://docs.opencurve.io")," "),(0,o.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,o.kt)("p",null,"\u8be5\u9a71\u52a8\u7a0b\u5e8f\u76ee\u524d\u4f7f\u7528csi\u89c4\u8303v1.5.0\u5f00\u53d1\uff0c\u5e76\u652f\u6301kubernetes v1.17+\u3002"),(0,o.kt)("p",null,"\u5176\u4ed6\u542f\u7528 csi-v1.0+ \u7684\u5bb9\u5668\u7f16\u6392\u5668\u73af\u5883\u53ef\u80fd\u4f1a\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,o.kt)("h3",{id:"csi-\u89c4\u8303\u548c-kubernetes-\u7248\u672c\u517c\u5bb9\u6027"},"CSI \u89c4\u8303\u548c Kubernetes \u7248\u672c\u517c\u5bb9\u6027"),(0,o.kt)("p",null,"\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes-csi.github.io/docs/#kubernetes-releases"},"\u517c\u5bb9\u6027\u77e9\u9635"),"\u3002"),(0,o.kt)("h2",{id:"\u5f00\u53d1\u8005"},"\u5f00\u53d1\u8005"),(0,o.kt)("p",null,"\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/container-storage-interface/spec/blob/master/spec.md"},"csi spec"),"\n\u4ee5\u53ca ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curve-csi/tree/master/docs/curve-interface"},"curve interface")," \u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,"\u672cCSI\u9a71\u52a8\u652f\u6301\u539f\u751fk8s\u90e8\u7f72\u53cahelm\u90e8\u7f72\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"kubernetes\u76f4\u63a5\u90e8\u7f72: refer to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/opencurve/curve-csi/blob/master/docs/README.md"},"deploy doc")),(0,o.kt)("li",{parentName:"ol"},"helm chart\u90e8\u7f72: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/opencurve/curve-csi/blob/master/charts/curve-csi/README.md"},"helm installation"))),(0,o.kt)("h2",{id:"\u6d4b\u8bd5\u53ca\u7528\u6237\u624b\u518c"},"\u6d4b\u8bd5\u53ca\u7528\u6237\u624b\u518c"),(0,o.kt)("p",null,"\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curve-csi/blob/master/docs/README.md"},"doc"),"\u3002"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7CSC\u5de5\u5177\u83b7\u53d6\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u5e76\u6d4b\u8bd5\u9a71\u52a8\u7a0b\u5e8f\u3002"))}v.isMDXComponent=!0}}]);