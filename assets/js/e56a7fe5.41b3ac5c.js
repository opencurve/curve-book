"use strict";(self.webpackChunkcurve_book=self.webpackChunkcurve_book||[]).push([[6976],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>s});var n=t(7294);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,u=function(e,r){if(null==e)return{};var t,n,u={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(u[t]=e[t]);return u}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var p=n.createContext({}),i=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=i(e.components);return n.createElement(p.Provider,{value:r},e.children)},v="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,u=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),v=i(t),m=u,s=v["".concat(p,".").concat(m)]||v[m]||d[m]||o;return t?n.createElement(s,a(a({ref:r},c),{},{components:t})):n.createElement(s,a({ref:r},c))}));function s(e,r){var t=arguments,u=r&&r.mdxType;if("string"==typeof e||u){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[v]="string"==typeof e?e:u,a[1]=l;for(var i=2;i<o;i++)a[i]=t[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9733:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=t(7462),u=(t(7294),t(3905));const o={},a="\u7269\u7406\u673a\u90e8\u7f72 CurveFS \u96c6\u7fa4",l={unversionedId:"CurveFS/deploy/deploy-with-curveadm",id:"CurveFS/deploy/deploy-with-curveadm",title:"\u7269\u7406\u673a\u90e8\u7f72 CurveFS \u96c6\u7fa4",description:"\u4e3a\u4e86\u63d0\u5347 Curve \u7684\u8fd0\u7ef4\u4fbf\u5229\u6027\uff0c\u6211\u4eec\u8bbe\u8ba1\u5f00\u53d1\u4e86 CurveAdm \u9879\u76ee\uff0c\u5176\u4e3b\u8981\u7528\u4e8e\u90e8\u7f72\u548c\u7ba1\u7406 Curve \u96c6\u7fa4\uff0c\u76ee\u524d\u5df2\u652f\u6301\u90e8\u7f72CurveBS & CurveFS\uff0c\u76f8\u5173\u4f7f\u7528\u6587\u6863\u8bf7\u53c2\u8003 CurveAdm\u7528\u6237\u624b\u518c\uff0c\u5e76\u6839\u636e\u624b\u518c\u9996\u5148\u5b89\u88c5CurveAdm\u5de5\u5177\u4e4b\u540e\u518d\u8fdb\u884cCurve\u96c6\u7fa4\u7684\u90e8\u7f72\u3002",source:"@site/docs/03-CurveFS/02-deploy/02-deploy-with-curveadm.md",sourceDirName:"03-CurveFS/02-deploy",slug:"/CurveFS/deploy/deploy-with-curveadm",permalink:"/CurveFS/deploy/deploy-with-curveadm",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CurveFS \u5feb\u901f\u4f53\u9a8c",permalink:"/CurveFS/deploy/quickstart"},next:{title:"Kubernetes \u4e0a\u90e8\u7f72 CurveFS \u96c6\u7fa4",permalink:"/CurveFS/deploy/deploy-with-k8s-operator"}},p={},i=[{value:"\u90e8\u7f72 CurveFS \u96c6\u7fa4",id:"\u90e8\u7f72-curvefs-\u96c6\u7fa4",level:2},{value:"1. \u51c6\u5907\u8282\u70b9\u5217\u8868",id:"1-\u51c6\u5907\u8282\u70b9\u5217\u8868",level:3},{value:"2. \u51c6\u5907\u96c6\u7fa4\u62d3\u6251\u6587\u4ef6",id:"2-\u51c6\u5907\u96c6\u7fa4\u62d3\u6251\u6587\u4ef6",level:3},{value:"3. \u90e8\u7f72\u96c6\u7fa4",id:"3-\u90e8\u7f72\u96c6\u7fa4",level:3},{value:"4. \u90e8\u7f72\u5ba2\u6237\u7aef",id:"4-\u90e8\u7f72\u5ba2\u6237\u7aef",level:3},{value:"5. \u90e8\u7f72\u5206\u5e03\u5f0f\u7f13\u5b58\u3010\u53ef\u9009\u3011",id:"5-\u90e8\u7f72\u5206\u5e03\u5f0f\u7f13\u5b58\u53ef\u9009",level:3},{value:"\u547d\u4ee4\u884c\u5de5\u5177",id:"\u547d\u4ee4\u884c\u5de5\u5177",level:2}],c={toc:i},v="wrapper";function d(e){let{components:r,...t}=e;return(0,u.kt)(v,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"\u7269\u7406\u673a\u90e8\u7f72-curvefs-\u96c6\u7fa4"},"\u7269\u7406\u673a\u90e8\u7f72 CurveFS \u96c6\u7fa4"),(0,u.kt)("p",null,"\u4e3a\u4e86\u63d0\u5347 Curve \u7684\u8fd0\u7ef4\u4fbf\u5229\u6027\uff0c\u6211\u4eec\u8bbe\u8ba1\u5f00\u53d1\u4e86 ",(0,u.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curveadm"},"CurveAdm")," \u9879\u76ee\uff0c\u5176\u4e3b\u8981\u7528\u4e8e\u90e8\u7f72\u548c\u7ba1\u7406 Curve \u96c6\u7fa4\uff0c\u76ee\u524d\u5df2\u652f\u6301\u90e8\u7f72CurveBS & CurveFS\uff0c\u76f8\u5173\u4f7f\u7528\u6587\u6863\u8bf7\u53c2\u8003 ",(0,u.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curveadm/wiki"},"CurveAdm\u7528\u6237\u624b\u518c"),"\uff0c\u5e76\u6839\u636e\u624b\u518c\u9996\u5148\u5b89\u88c5CurveAdm\u5de5\u5177\u4e4b\u540e\u518d\u8fdb\u884cCurve\u96c6\u7fa4\u7684\u90e8\u7f72\u3002"),(0,u.kt)("h2",{id:"\u90e8\u7f72-curvefs-\u96c6\u7fa4"},"\u90e8\u7f72 CurveFS \u96c6\u7fa4"),(0,u.kt)("p",null,"\u4f7f\u7528 CurveAdm \u90e8\u7f72 CurveFS \u96c6\u7fa4\u8fc7\u7a0b\u4e2d\u5982\u9047\u5230\u9519\u8bef\uff0c\u4f1a\u5728\u7ec8\u7aef\u6253\u5370\u5bf9\u5e94\u7684\u9519\u8bef\u7801\u548c\u89e3\u51b3\u65b9\u6848\u94fe\u63a5\uff0c\u5982\u53c2\u8003\u89e3\u51b3\u65b9\u6848\u94fe\u63a5\u7684\u6307\u5bfc\u540e\u4ecd\u7136\u65e0\u6cd5\u89e3\u51b3\u9519\u8bef\u95ee\u9898\uff0c\u53ef\u4ee5\u6dfb\u52a0\u7ec8\u7aef\u6253\u5370\u7684\u5fae\u4fe1\u53f7\u6765\u4e0e\u6211\u4eec\u53d6\u5f97\u8fdb\u4e00\u6b65\u8054\u7cfb\u3002"),(0,u.kt)("p",null,"\u96c6\u7fa4\u90e8\u7f72\u8fc7\u7a0b\u5f53\u524d\u4e3b\u8981\u5206\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\u4e3b\u8981\u6b65\u9aa4\uff1a"),(0,u.kt)("h3",{id:"1-\u51c6\u5907\u8282\u70b9\u5217\u8868"},"1. \u51c6\u5907\u8282\u70b9\u5217\u8868"),(0,u.kt)("p",null,"\u8be6\u7ec6\u6b65\u9aa4\u8bf7\u53c2\u9605\u6587\u6863\uff1a",(0,u.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curveadm/wiki/hosts"},"\u4e3b\u673a\u7ba1\u7406")),(0,u.kt)("h3",{id:"2-\u51c6\u5907\u96c6\u7fa4\u62d3\u6251\u6587\u4ef6"},"2. \u51c6\u5907\u96c6\u7fa4\u62d3\u6251\u6587\u4ef6"),(0,u.kt)("p",null,"\u8be6\u7ec6\u6b65\u9aa4\u8bf7\u53c2\u9605\u6587\u6863\uff1a",(0,u.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curveadm/wiki/topology#curvefs-%E9%9B%86%E7%BE%A4%E6%8B%93%E6%89%91"},"\u96c6\u7fa4\u62d3\u6251")),(0,u.kt)("h3",{id:"3-\u90e8\u7f72\u96c6\u7fa4"},"3. \u90e8\u7f72\u96c6\u7fa4"),(0,u.kt)("p",null,"\u90e8\u7f72\u96c6\u7fa4\u547d\u4ee4\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0cCurveAdm\u5de5\u5177\u4f1a\u81ea\u52a8\u6267\u884c\u90e8\u7f72\u73af\u5883\u9884\u68c0\u5de5\u4f5c\uff0c\u4ee5\u786e\u4fdd\u6240\u6709\u8282\u70b9\u5747\u6ee1\u8db3\u90e8\u7f72\u6761\u4ef6\uff0c\u53ea\u8981\u5f53\u4e00\u5207\u68c0\u6d4b\u6b63\u5e38\u624d\u4f1a\u771f\u6b63\u5f00\u59cb\u90e8\u7f72\u96c6\u7fa4\uff0c\u5173\u4e8e\u9884\u68c0\u7684\u4ecb\u7ecd\u8bf7\u53c2\u9605\u6587\u6863\uff1a",(0,u.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curveadm/wiki/precheck"},"\u73af\u5883\u9884\u68c0")),(0,u.kt)("p",null,"\u5173\u4e8e\u96c6\u7fa4\u90e8\u7f72\u7684\u8be6\u7ec6\u6b65\u9aa4\u8bf7\u53c2\u9605\u6587\u6863\uff1a",(0,u.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curveadm/wiki/curvefs-cluster-deployment"},"\u90e8\u7f72\u96c6\u7fa4")),(0,u.kt)("h3",{id:"4-\u90e8\u7f72\u5ba2\u6237\u7aef"},"4. \u90e8\u7f72\u5ba2\u6237\u7aef"),(0,u.kt)("p",null,"\u8be6\u7ec6\u6b65\u9aa4\u8bf7\u53c2\u9605\u6587\u6863\uff1a",(0,u.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curveadm/wiki/curvefs-client-deployment"},"\u90e8\u7f72\u5ba2\u6237\u7aef")),(0,u.kt)("h3",{id:"5-\u90e8\u7f72\u5206\u5e03\u5f0f\u7f13\u5b58\u53ef\u9009"},"5. \u90e8\u7f72\u5206\u5e03\u5f0f\u7f13\u5b58\u3010\u53ef\u9009\u3011"),(0,u.kt)("p",null,"\u5982\u9700\u8fdb\u4e00\u6b65\u63d0\u5347\u6027\u80fd\uff0c\u53ef\u4ee5\u4e3a CurveFS \u96c6\u7fa4\u90e8\u7f72\u5206\u5e03\u5f0f\u7f13\u5b58\u670d\u52a1\uff08\u5f53\u524d\u57fa\u4e8ememcached\u96c6\u7fa4\uff09\uff0cCurveFS \u5ba2\u6237\u7aef\u7f13\u5b58\u5f53\u524d\u6709\u5185\u5b58\u3001\u672c\u5730\u786c\u76d8\u3001\u5206\u5e03\u5f0f\u7f13\u5b583\u7c7b\uff0c\u5206\u522b\u4e3aL1\u3001L2\u3001L3\u7ea7\u7f13\u5b58\uff0c\u5747\u652f\u6301\u8bfb\u5199\u7f13\u5b58\u3002"),(0,u.kt)("p",null,"\u90e8\u7f72\u5206\u5e03\u5f0f\u7f13\u5b58\u7684\u8be6\u7ec6\u6b65\u9aa4\u8bf7\u53c2\u9605\u6587\u6863\uff1a",(0,u.kt)("a",{parentName:"p",href:"https://docs.opencurve.io/CurveFS/deploy/distributed-cache"},"\u90e8\u7f72\u5206\u5e03\u5f0f\u7f13\u5b58")),(0,u.kt)("h2",{id:"\u547d\u4ee4\u884c\u5de5\u5177"},"\u547d\u4ee4\u884c\u5de5\u5177"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"CurveFS \u63d0\u4f9b\u4e86\u547d\u4ee4\u884c\u5de5\u5177\u4ee5\u67e5\u770b\u96c6\u7fa4\u72b6\u6001\u548c\u8fdb\u884c\u57fa\u672c\u96c6\u7fa4\u64cd\u4f5c\uff1a",(0,u.kt)("a",{parentName:"li",href:"https://docs.opencurve.io/CurveFS/maintenance/command-line-tools"},"\u547d\u4ee4\u884c\u5de5\u5177\u8bf4\u660e")),(0,u.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u96c6\u7fa4\u7ba1\u7406\u5458\uff0c\u53ef\u4ee5\u53c2\u9605\u7ba1\u7406\u5458\u6307\u5bfc\u6587\u6863\u6765\u5b8c\u6210\u5bf9\u96c6\u7fa4\u7684\u8fd0\u7ef4\u7ba1\u7406\u5de5\u4f5c\uff1a",(0,u.kt)("a",{parentName:"li",href:"https://docs.opencurve.io/CurveFS/maintenance/administrator-guide"},"\u8fd0\u7ef4\u5de5\u5177\u8bf4\u660e"))))}d.isMDXComponent=!0}}]);