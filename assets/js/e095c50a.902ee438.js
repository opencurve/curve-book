"use strict";(self.webpackChunkcurve_book=self.webpackChunkcurve_book||[]).push([[7770],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},v="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,u=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),v=l(t),m=o,d=v["".concat(i,".").concat(m)]||v[m]||s[m]||u;return t?n.createElement(d,a(a({ref:r},p),{},{components:t})):n.createElement(d,a({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var u=t.length,a=new Array(u);a[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[v]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<u;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4521:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>s,frontMatter:()=>u,metadata:()=>c,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const u={},a="CurveFS \u5feb\u901f\u4f53\u9a8c",c={unversionedId:"CurveFS/deploy/quickstart",id:"CurveFS/deploy/quickstart",title:"CurveFS \u5feb\u901f\u4f53\u9a8c",description:"\u4e3a\u4e86\u63d0\u5347 Curve \u7684\u8fd0\u7ef4\u4fbf\u5229\u6027\uff0c\u6211\u4eec\u8bbe\u8ba1\u5f00\u53d1\u4e86 CurveAdm \u9879\u76ee\uff0c\u5176\u4e3b\u8981\u7528\u4e8e\u90e8\u7f72\u548c\u7ba1\u7406 Curve \u96c6\u7fa4\uff0c\u76ee\u524d\u5df2\u652f\u6301\u90e8\u7f72CurveBS & CurveFS\uff0c\u76f8\u5173\u4f7f\u7528\u6587\u6863\u8bf7\u53c2\u8003 CurveAdm\u7528\u6237\u624b\u518c\uff0c\u5e76\u6839\u636e\u624b\u518c\u9996\u5148\u5b89\u88c5CurveAdm\u5de5\u5177\u4e4b\u540e\u518d\u8fdb\u884cCurve\u96c6\u7fa4\u7684\u90e8\u7f72\u3002",source:"@site/docs/03-CurveFS/02-deploy/01-quickstart.md",sourceDirName:"03-CurveFS/02-deploy",slug:"/CurveFS/deploy/quickstart",permalink:"/CurveFS/deploy/quickstart",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u90e8\u7f72",permalink:"/category/\u90e8\u7f72-1"},next:{title:"\u79bb\u7ebf\u90e8\u7f72\u6587\u6863",permalink:"/CurveFS/deploy/offline-deploy"}},i={},l=[{value:"\u90e8\u7f72All-in-one\u4f53\u9a8c\u73af\u5883",id:"\u90e8\u7f72all-in-one\u4f53\u9a8c\u73af\u5883",level:2},{value:"\u547d\u4ee4\u884c\u5de5\u5177",id:"\u547d\u4ee4\u884c\u5de5\u5177",level:2}],p={toc:l},v="wrapper";function s(e){let{components:r,...t}=e;return(0,o.kt)(v,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"curvefs-\u5feb\u901f\u4f53\u9a8c"},"CurveFS \u5feb\u901f\u4f53\u9a8c"),(0,o.kt)("p",null,"\u4e3a\u4e86\u63d0\u5347 Curve \u7684\u8fd0\u7ef4\u4fbf\u5229\u6027\uff0c\u6211\u4eec\u8bbe\u8ba1\u5f00\u53d1\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curveadm"},"CurveAdm")," \u9879\u76ee\uff0c\u5176\u4e3b\u8981\u7528\u4e8e\u90e8\u7f72\u548c\u7ba1\u7406 Curve \u96c6\u7fa4\uff0c\u76ee\u524d\u5df2\u652f\u6301\u90e8\u7f72CurveBS & CurveFS\uff0c\u76f8\u5173\u4f7f\u7528\u6587\u6863\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curveadm/wiki"},"CurveAdm\u7528\u6237\u624b\u518c"),"\uff0c\u5e76\u6839\u636e\u624b\u518c\u9996\u5148\u5b89\u88c5CurveAdm\u5de5\u5177\u4e4b\u540e\u518d\u8fdb\u884cCurve\u96c6\u7fa4\u7684\u90e8\u7f72\u3002"),(0,o.kt)("h2",{id:"\u90e8\u7f72all-in-one\u4f53\u9a8c\u73af\u5883"},"\u90e8\u7f72All-in-one\u4f53\u9a8c\u73af\u5883"),(0,o.kt)("p",null,"\u8bf7\u53c2\u8003CurveAdm\u7528\u6237\u624b\u518c\u4e2d",(0,o.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curveadm/wiki/curvefs-cluster-deployment"},"CurveFS\u96c6\u7fa4\u90e8\u7f72\u6b65\u9aa4"),"\uff0c\u5355\u673a\u4f53\u9a8c\u73af\u5883\u8bf7\u4f7f\u7528\u201c\u96c6\u7fa4\u62d3\u6251\u6587\u4ef6-\u5355\u673a\u90e8\u7f72\u201d\u6a21\u677f\u3002"),(0,o.kt)("h2",{id:"\u547d\u4ee4\u884c\u5de5\u5177"},"\u547d\u4ee4\u884c\u5de5\u5177"),(0,o.kt)("p",null,"curve \u63d0\u4f9b\u4e86\u547d\u4ee4\u884c\u5de5\u5177\u4ee5\u67e5\u770b\u96c6\u7fa4\u72b6\u6001\u548c\u8fdb\u884c\u57fa\u672c\u96c6\u7fa4\u64cd\u4f5c\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curve/blob/master/tools-v2/README.md"},"\u547d\u4ee4\u884c\u5de5\u5177\u8bf4\u660e")))}s.isMDXComponent=!0}}]);