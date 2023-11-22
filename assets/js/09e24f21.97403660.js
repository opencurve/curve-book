"use strict";(self.webpackChunkcurve_book=self.webpackChunkcurve_book||[]).push([[16],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),s=c(r),k=a,m=s["".concat(p,".").concat(k)]||s[k]||v[k]||u;return r?n.createElement(m,l(l({ref:t},i),{},{components:r})):n.createElement(m,l({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,l=new Array(u);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<u;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},8562:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>v,frontMatter:()=>u,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const u={},l="\u521b\u4e91\u878d\u8fbe\u57fa\u4e8eCurve\u5757\u5b58\u50a8\u7684\u8d85\u878d\u5408\u573a\u666f\u5b9e\u8df5",o={unversionedId:"CurveBS/usecase/chuangyun",id:"CurveBS/usecase/chuangyun",title:"\u521b\u4e91\u878d\u8fbe\u57fa\u4e8eCurve\u5757\u5b58\u50a8\u7684\u8d85\u878d\u5408\u573a\u666f\u5b9e\u8df5",description:"1. \u521b\u4e91\u878d\u8fbe\u80cc\u666f",source:"@site/docs/02-CurveBS/01-usecase/04-chuangyun.md",sourceDirName:"02-CurveBS/01-usecase",slug:"/CurveBS/usecase/chuangyun",permalink:"/CurveBS/usecase/chuangyun",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CurveBS RDMA+SPDK \u7248\u672c\u5728\u7f51\u6613\u6570\u636e\u5e93\u573a\u666f\u7684\u843d\u5730\u5b9e\u8df5",permalink:"/CurveBS/usecase/rdma-spdk"},next:{title:"\u626c\u5dde\u4e07\u65b9\u57fa\u4e8e\u7533\u5a01\u5e73\u53f0\u7684Curve\u5757\u5b58\u50a8\u5728\u9ad8\u6027\u80fd\u548c\u8d85\u878d\u5408\u573a\u666f\u4e0b\u7684\u5b9e\u8df5",permalink:"/CurveBS/usecase/wanfang"}},p={},c=[{value:"1. \u521b\u4e91\u878d\u8fbe\u80cc\u666f",id:"1-\u521b\u4e91\u878d\u8fbe\u80cc\u666f",level:2},{value:"2. \u8d85\u878d\u5408\u4e1a\u52a1\u80cc\u666f",id:"2-\u8d85\u878d\u5408\u4e1a\u52a1\u80cc\u666f",level:2},{value:"3. \u65b9\u6848\u9009\u578b",id:"3-\u65b9\u6848\u9009\u578b",level:2},{value:"4. \u65b9\u6848\u843d\u5730",id:"4-\u65b9\u6848\u843d\u5730",level:2}],i={toc:c},s="wrapper";function v(e){let{components:t,...u}=e;return(0,a.kt)(s,(0,n.Z)({},i,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u521b\u4e91\u878d\u8fbe\u57fa\u4e8ecurve\u5757\u5b58\u50a8\u7684\u8d85\u878d\u5408\u573a\u666f\u5b9e\u8df5"},"\u521b\u4e91\u878d\u8fbe\u57fa\u4e8eCurve\u5757\u5b58\u50a8\u7684\u8d85\u878d\u5408\u573a\u666f\u5b9e\u8df5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u4f5c\u8005\u7b80\u4ecb\uff1a\u738b\u5f66\u7075\uff08wangyanling@oct-ea.com\uff09\uff0c\u66fe\u5728XSky\u7b49\u516c\u53f8\u4ece\u4e8b\u5b58\u50a8\u8fd0\u7ef4\u5f00\u53d1\u5de5\u4f5c\uff0c\n\u76ee\u524d\u62c5\u4efb\u521b\u4e91\u878d\u8fbe\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\u4e13\u5bb6\u30022021\u5e74\u5f00\u59cb\u5173\u6ce8Curve\u793e\u533a\uff0c\u4f7f\u7528\u3001\u90e8\u7f72\u3001\u8fd0\u7ef4Curve\u96c6\n\u7fa4\uff0c\u4e5f\u5728\u4ee3\u7801\u4e0a\u505a\u4e00\u4e9b\u539f\u578b\u5b9e\u9a8c\uff0c\u5bf9\u793e\u533a\u6709\u6d53\u539a\u5174\u8da3\u3002\n")),(0,a.kt)("h2",{id:"1-\u521b\u4e91\u878d\u8fbe\u80cc\u666f"},"1. \u521b\u4e91\u878d\u8fbe\u80cc\u666f"),(0,a.kt)("p",null,"\u521b\u4e91\u878d\u8fbe\u662f\u4e00\u5bb6\u4ee5\u6d77\u91cf\u6570\u636e\u7684\u5b58\u7ba1\u7528\u4e3a\u6838\u5fc3\uff0c\u4ee5\u4f01\u4e1a\u7ea7\u79c1\u6709\u4e91\u5efa\u8bbe\u80fd\u529b\u4e3a\u57fa\u7840\uff0c\u5e76\u63d0\u4f9b\u6570\u636e\u8d44\u4ea7\u548c\u6570\u636e\u4e2d\u53f0\u4ea7\u54c1\u548c\u89e3\u51b3\u65b9\u6848\u7684\u9ad8\u65b0\u6280\u672f\u4f01\u4e1a\u3002"),(0,a.kt)("h2",{id:"2-\u8d85\u878d\u5408\u4e1a\u52a1\u80cc\u666f"},"2. \u8d85\u878d\u5408\u4e1a\u52a1\u80cc\u666f"),(0,a.kt)("p",null,"\u8fd1\u5e74\u6765\uff0c\u4e3a\u4e86\u4f18\u5316\u4eba\u4eec\u7eb3\u7a0e\u7f34\u8d39\u7684\u670d\u52a1\u4f53\u9a8c\uff0c\u5404\u7701\u5e02\u7a0e\u52a1\u7cfb\u7edf\u9010\u6b65\u6784\u5efa\u4e86\u9762\u5411\u7a0e\u52a1\u529e\u4e8b\u5927\u5385\u7684\u5404\u79cd\u521b\u65b0\u578b\u667a\u6167\u8bbe\u5907\u548c\u667a\u6167\u5e94\u7528,\u5982\u529e\u7a0e\u4e00\u4f53\u673a\uff0c\u667a\u6167\u7a0e\u52a1\u5927\u5c4f\uff0c\u8bed\u97f3\u8f85\u52a9\u8bbe\u5907\u3001\u4ee5\u53ca\u4e1a\u52a1\u6d41\u7a0b\u8f85\u52a9AI\u673a\u5668\u4eba\u7b49\u3002",(0,a.kt)("strong",{parentName:"p"},"\u6781\u5927\u4fbf\u5229\u4eba\u4eec\u7a0e\u4e1a\u52a1\u4f53\u9a8c\u7684\u540c\u65f6\u4e5f\u5bf9IT\u96c6\u6210\u548cIT\u57fa\u7840\u8bbe\u65bd\u63d0\u51fa\u4e86\u66f4\u9ad8\u7684\u8981\u6c42\u3002")," "),(0,a.kt)("p",null,"\u521b\u4e91\u878d\u8fbe\u627f\u5efa\u4e86\u591a\u5730\u7684\u667a\u6167\u7a0e\u52a1\u5927\u5385\u89e3\u51b3\u65b9\u6848\uff0c\u5728\u5b9e\u8df5\u4e2d\uff0c\u6211\u4eec\u53d1\u73b0\u667a\u6167\u4e8b\u52a1\u5927\u5385\u7684\u4e1a\u52a1\u6709\u5982\u4e0b\u7279\u70b9\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5404\u7c7b\u667a\u6167\u7a0e\u52a1\u5e94\u7528\u7cfb\u7edf",(0,a.kt)("strong",{parentName:"li"},"\u6570\u91cf\u8f83\u591a")),(0,a.kt)("li",{parentName:"ol"},"\u529e\u4e8b\u5927\u5385\u7684\u4e1a\u52a1\u573a\u666f\u5bf9\u670d\u52a1\u7684",(0,a.kt)("strong",{parentName:"li"},"\u5b9e\u65f6\u6027\u548c\u53ef\u7528\u6027"),"\u4e5f\u6709\u8f83\u9ad8\u8981\u6c42"),(0,a.kt)("li",{parentName:"ol"},"\u5e94\u7528\u4e0d\u4ec5\u4ec5\u9700\u8981\u6570\u636e\u5e93\u7b49\u7ed3\u6784\u5316\u6570\u636e\uff0c\u4e5f\u9700\u8981\u4e00\u5b9a\u89c4\u6a21\u7684",(0,a.kt)("strong",{parentName:"li"},"\u975e\u7ed3\u6784\u5316\u6570\u636e"),"\u7684\u5b58\u50a8\u9700\u6c42")),(0,a.kt)("p",null,"\u6839\u636e\u4ee5\u4e0a\u7279\u70b9\uff0c\u6211\u4eec\u603b\u7ed3\u51fa\u4e86\u667a\u6167\u7a0e\u52a1\u57fa\u7840\u8bbe\u65bd\u7684\u9700\u6c42\uff1a\u7a33\u5b9a\u3001\u53ef\u9760\uff0c\u9002\u5e94\u4e8e\u8d85\u878d\u5408\u96c6\u7fa4\u73af\u5883\uff08\u89c4\u6a213-6\u8282\u70b9\uff09\u7684\u5206\u5e03\u5f0f\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\uff0c\u63d0\u4f9b\u4e91\u4e3b\u673a\u548c\u5bf9\u8c61\u5b58\u50a8\uff0c\u4fdd\u8bc1\u6570\u636e\u5b89\u5168\u6027\u3001\u548c\u7a33\u5b9a\u53ef\u9760\u8fd0\u884c\u3002"),(0,a.kt)("h2",{id:"3-\u65b9\u6848\u9009\u578b"},"3. \u65b9\u6848\u9009\u578b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5bf9\u4e8e\u5bf9\u8c61\u5b58\u50a8"),"\uff0c\u521b\u4e91\u878d\u8fbe\u6709\u81ea\u7814\u7684OEOS, \u6709\u51b7\u70ed\u6570\u636e\u81ea\u52a8\u5206\u5c42\u548c\u667a\u80fd\u7f16\u6392\u673a\u5236\uff0c\u5b9e\u73b0\u4e86\u6d77\u91cf\u6570\u636e\u7684\u6301\u4e45\u5316\u5b58\u50a8\uff0c\u540c\u65f6\u4e5f\u6ee1\u8db3\u4e86\u6d77\u91cf\u5c0f\u6587\u4ef6\u7684\u9ad8IO\u6027\u80fd\u8981\u6c42\u3002\u53ef\u4ee5\u4e3a\u5404\u7c7b\u667a\u6167\u5e94\u7528\u63d0\u4f9b\u975e\u7ed3\u6784\u5316\u6570\u636e\u7684\u5b58\u7ba1\u7528\u6cbb\u7406\u5e73\u53f0\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5bf9\u4e8e\u5757\u5b58\u50a8"),"\uff0c\u975e\u5e38\u77e5\u540d\u7684\u6709ceph\uff0c\u4f46\u662f\u5f00\u6e90\u7248\u672c\u7684ceph\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u662f\u6709\u5f88\u591a\u7a33\u5b9a\u6027\u7684\u95ee\u9898\uff0c\u5e38\u89c4\u7684\u4e00\u4e9b\u5f02\u5e38\u90fd\u4f1a\u5f15\u8d77IO\u6296\u52a8, \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/530nTRxHHE5ghSItctqYvA"},"Curve \u66ff\u6362 Ceph \u5728\u7f51\u6613\u4e91\u97f3\u4e50\u7684\u5b9e\u8df5")," \u4e2d\u63d0\u5230\u7684\u95ee\u9898\u4e5f\u7c7b\u4f3c\u3002\u8fd9\u4e9b\u95ee\u9898\u548cCeph\u7684\u4e00\u81f4\u6027\u534f\u8bae\u3001\u6570\u636e\u653e\u7f6e\u7b97\u6cd5\u90fd\u76f8\u5173\uff0c\u57fa\u4e8e\u5f00\u6e90\u7248\u672c\u53bb\u6539\u52a8\u590d\u6742\u5ea6\u548c\u5de5\u4f5c\u91cf\u90fd\u5f88\u5927\u3002\u540c\u65f6\uff0c\u6211\u4eec\u6ce8\u610f\u5230\u4e86\u5f00\u6e90\u7684Curve\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u548cCurve\u793e\u533a\u591a\u6b21\u6df1\u5165\u7684\u6280\u672f\u4ea4\u6d41\uff0c\u4e86\u89e3\u5230Curve\u5206\u5e03\u5f0f\u5b58\u50a8\u901a\u8fc7\u5bf9\u6570\u636e\u5757\u7684\u6570\u636e\u6446\u653e\u673a\u5236\u7684\u4f18\u5316\uff0c\u6210\u529f\u89e3\u51b3\u4e86Ceph\u7c7b\u5b58\u50a8\u4e2dCRUSH\u7b97\u6cd5\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u7684\u5de8\u5927\u4e0d\u786e\u5b9a\u6027\uff0c\u4ece\u800c\u5177\u6709\u751f\u4ea7\u73af\u5883\u6240\u9700\u8981\u7684\u7a33\u5b9a\u6027\u548c\u9ad8\u53ef\u9760\u6027\u3002\u56e0\u6b64\uff0c\u57fa\u4e8eCurve\u6784\u5efa\u5206\u5e03\u5f0f\u5757\u5b58\u50a8\uff0c\u4f5c\u4e3a\u865a\u62df\u5316\u73af\u5883\u7684\u6570\u636e\u5e95\u5ea7\uff0c\u5177\u6709\u6bd4Ceph\u4ea7\u54c1\u5177\u6709\u66f4\u9ad8\u7684\u53ef\u9760\u6027\u548c\u6570\u636e\u5b89\u5168\u6027\u3002"),(0,a.kt)("p",null,"\u7279\u522b\u9700\u8981\u63d0\u5230\u7684\u662fCurve\u5757\u5b58\u50a8\u5728\u5feb\u7167\u4e0a\u7684\u8bbe\u8ba1\u3002Curve\u5757\u5b58\u50a8\u7684\u5feb\u7167\u652f\u6301\u4e0a\u4f20\u5230S3,\u4e0d\u9650\u5236\u5feb\u7167\u6570\u91cf\u5e76\u4e14\u964d\u4f4e\u4e86\u5feb\u7167\u7684\u5b58\u50a8\u6210\u672c\u3002\u8fd9\u4e00\u8bbe\u8ba1\u548c\u6211\u4eec\u81ea\u7814\u7684\u5bf9\u8c61\u5b58\u50a8OEOS\u53ef\u4ee5\u5b8c\u7f8e\u7ed3\u5408\u3002"),(0,a.kt)("h2",{id:"4-\u65b9\u6848\u843d\u5730"},"4. \u65b9\u6848\u843d\u5730"),(0,a.kt)("p",null,"\u6211\u4eec\u5bf9Curve\u5757\u5b58\u50a8\u8fdb\u884c\u4e86\u6df1\u5165\u7684\u6d4b\u8bd5\uff0c\u5f53\u524d\u5df2\u7ecf\u5728\u9879\u76ee\u4e2d\u6210\u529f\u6784\u5efa\u4e86\u57fa\u4e8eCurve\u7684\u5206\u5e03\u5f0f\u5757\u5b58\u50a8\u548c\u521b\u4e91OEOS\u5bf9\u8c61\u5b58\u50a8\u7ed3\u5408\u7684\u5206\u5e03\u5f0f\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\uff0c\u4e3a\u667a\u6167\u7a0e\u52a1\u9879\u76ee\u4e2d\u63d0\u4f9b\u4e86\u7edf\u4e00\u5b58\u50a8\u57fa\u7840\u8bbe\u65bd\u3002\u4e3a\u667a\u6167\u7a0e\u52a1\u63d0\u4f9b\u4e86\u6709\u529b\u7684\u6280\u672f\u652f\u6491\uff0c\u5e76\u5728\u591a\u5730\u5e02\u7684\u65b0\u5efa\u667a\u6167\u7a0e\u52a1\u5927\u5385\u9879\u76ee\u4e2d\u5f97\u5230\u4e86\u6210\u529f\u5e94\u7528\u3002"),(0,a.kt)("p",null,"\u6574\u4f53\u7684\u67b6\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"arch",src:r(953).Z,width:"1720",height:"852"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u5757\u5b58\u50a8\u548c\u5bf9\u8c61\u5b58\u50a8\uff0c\u652f\u6301ISCSI\u3001S3\u3001NFS\u3001SMB\u534f\u8bae"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u5b58\u50a8\u652f\u6301\u51b7\u70ed\u5206\u5c42\uff0c\u652f\u6301EC"),(0,a.kt)("li",{parentName:"ul"},"\u5757\u5b58\u50a8\u63d0\u4f9b\u9ad8\u6027\u80fd\uff0c\u5feb\u7167\u6570\u636e\u652f\u6301\u8f6c\u50a8\u5230\u5bf9\u8c61\u5b58\u50a8\u4e2d"),(0,a.kt)("li",{parentName:"ul"},"\u6240\u6709\u670d\u52a1\u9ad8\u53ef\u7528\uff0c\u4efb\u4e00\u8282\u70b9\u6545\u969c\u4e0d\u5f71\u54cd\u7528\u6237IO")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5728\u9879\u76ee\u843d\u5730\u7684\u8fc7\u7a0b\u4e2d\uff0c\u7ed3\u5408Curve\u7684\u7279\u70b9\u548c\u4e1a\u52a1\u573a\u666f\uff0c\u603b\u7ed3\u4e86\u4e00\u4e9b\u865a\u62df\u5316\u573a\u666f\u4e0b\u7684\u4f7f\u7528\u7ecf\u9a8c\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. \u4e1a\u52a1\u77ed\u6682\u7684IO\u6ce2\u5cf0")),(0,a.kt)("p",null,"\u5728KVM\u865a\u62df\u5316\u573a\u666f\u4e0b\uff0c\u5f53\u7528KVM\u955c\u50cf\u751f\u6210\u865a\u62df\u673a\u5b9e\u4f8b\u7684\u65f6\u5019\uff0c\u4f1a\u6709\u77ed\u6682\u7684IO\u6ce2\u5cf0\uff085000-6000 IOPS\uff09\uff0c\u4e4b\u540e\u5219\u6d88\u5931\u3002\u800c\u4e1a\u52a1\u573a\u666f\u591a\u6570\u60c5\u51b5\u4e0b\u5bf9IO\u7684\u8981\u6c42\u4e0d\u9ad8\u3002\n\u56e0\u6b64\uff0c\u6211\u4eec\u8bbe\u8ba1\u4e86\u4e24\u4e2a\u903b\u8f91\u6c60\uff0c\u4e00\u4e2aSSD\u76d8\u903b\u8f91\u6c60\uff0c\u548c\u4e00\u4e2a\u673a\u68b0\u76d8\u903b\u8f91\u6c60\u3002KVM\u865a\u62df\u673a\u5219\u5236\u4f5c\u621040G\u7684\u7cfb\u7edf\u76d8\u3002\u8fd9\u6837\uff0c\u6240\u6709\u7684KVM\u7cfb\u7edf\u76d8\u90fd\u5206\u914d\u5728SSD\u903b\u8f91\u6c60\u4e2d\uff0c\u800c\u6570\u636e\u76d8\u5206\u914d\u5728\u673a\u68b0\u76d8\u903b\u8f91\u6c60\u4e2d\uff0c\u4ece\u800c\u89e3\u51b3\u4e86KVM\u955c\u50cf\u95ee\u9898\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. nebd\u670d\u52a1\u7684\u5355\u70b9\u548c\u6027\u80fd\u95ee\u9898")),(0,a.kt)("p",null,"Curve \u793e\u533a\u63d0\u4f9b\u7684curve-tgt\u7248\u672c\u662f\u57fa\u4e8e",(0,a.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curve/blob/master/docs/cn/nebd.md"},"nebd"),"\u7684\uff0cnebd\u662f\u4e3a\u4e86\u89e3\u8026\u4e0a\u5c42\u5e94\u7528\u548ccurve-sdk\u6240\u52a0\u7684\u70ed\u5347\u7ea7\u6a21\u5757\u3002\u4f46\u5728\u5b9e\u8df5\u4e2d\uff0c\u8fd9\u4e2a\u670d\u52a1\u6709\u53ef\u80fd\u5b58\u5728\u5355\u70b9\u95ee\u9898\uff0c\u4e14\u5bf9IO\u65f6\u5ef6\u4e5f\u670915%\u5de6\u53f3\u7684\u6d88\u8017\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u5728\u793e\u533a\u7248",(0,a.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curve-tgt"},"curve-tgt"),"\u57fa\u7840\u4e0a\u505a\u4e86\u4e00\u70b9\u6539\u8fdb\uff0c\u8ba9curve-tgt\u7684backend\u76f4\u63a5\u8c03\u7528Curve\u5ba2\u6237\u7aef\uff08libcurve.so\uff09\uff0c\u6d4b\u8bd5\u8bc1\u660e\u4e5f\u5f88\u7a33\u5b9a\uff0c\u5e76\u4e14\u4e5f\u63d0\u9ad8\u4e86\u6027\u80fd\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0ccurve-tgt\u8fd8\u6709\u4e00\u4e2a\u591a\u8282\u70b9\u8d1f\u8f7d\u5747\u8861\u7684\u95ee\u9898\u3002\u6211\u4eec\u7684\u89e3\u51b3\u601d\u8def\u662f\uff0c\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u5f00\u4e24\u4e2acurve-tgt\u8fdb\u7a0b\uff083260\u548c3261\u7aef\u53e3\uff09\uff0c\u4f20\u7edf\u76843260\u7aef\u53e3\u4ec5\u7528\u4e8eiscsi discovery\uff0c\u5f53\u6536\u5230iscsi login\u547d\u4ee4\u7684\u65f6\u5019\uff0c\u5229\u7528iscsi\u7684login redirect\u673a\u5236\uff0c\u8c03\u7528loadbalancer\uff0c\u53d6\u7b2c\u4e8c\u4e2a\u8fdb\u7a0b\uff083261\u7aef\u53e3\uff09\u505a\u91cd\u5b9a\u5411\u3002Loadbalancer\u8fdb\u7a0b\u968f\u673a\u9009\u53d6\u6240\u6709active\u8282\u70b9\u7684\u4e00\u4e2a\uff0c\u91cd\u5b9a\u5411\u5230\u8be5\u8282\u70b9\u76843261\u7aef\u53e3\u4e0a\uff0c\u5b8c\u6210login\u3002\u6700\u540e\u4e00\u70b9\uff0c\u518d\u901a\u8fc7keepalived\u4e3a3260\u7aef\u53e3\u63d0\u4f9b\u4e00\u4e2a\u865aIP\u673a\u5236\uff0c\u5219\u4fdd\u8bc1\u4e86discovery\u8fc7\u7a0b\u4e0d\u4f1a\u56e0\u4e3a\u5355\u8282\u70b9\u6389\u7535\u800c\u5931\u6548\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. \u96c6\u7fa4\u6574\u4f53\u6389\u7535")),(0,a.kt)("p",null,"\u548c\u793e\u533a\u8ba8\u8bba\u540e\uff0c\u6211\u4eec\u89e3\u51b3\u601d\u8def\u662f\uff1a\u5728\u5206\u6790\u51faUPS\u5e02\u7535\u6545\u969c\u65f6\uff0c\u7b2c\u4e00\u6b65\u628a\u524d\u7aefcurve-tgt\u8fdb\u7a0b\u505c\u6b62\u6389\uff0c\u7b2c\u4e8c\u6b65\u96c6\u7fa4\u6240\u6709\u7684\u5377\u505a\u4e00\u6b21\u5feb\u7167\uff0c\u7b2c\u4e09\u6b65\u505a\u4e00\u6b21fsync\uff0c\u4fdd\u8bc1\u6240\u6709\u5185\u5b58\u4e2d\u7684\u6570\u636e\u90fd\u5237\u5230\u76d8\u4e0a\uff0c\u6700\u540e\u505c\u6b62\u96c6\u7fa4\u3002"))}v.isMDXComponent=!0},953:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1117-arc-0f303b102e34001af6eed4b5fbf51d48.jpg"}}]);