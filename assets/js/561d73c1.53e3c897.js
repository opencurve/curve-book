"use strict";(self.webpackChunkcurve_book=self.webpackChunkcurve_book||[]).push([[8877],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),c=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(o.Provider,{value:r},e.children)},s="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(t),m=a,f=s["".concat(o,".").concat(m)]||s[m]||v[m]||l;return t?n.createElement(f,u(u({ref:r},p),{},{components:t})):n.createElement(f,u({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,u=new Array(l);u[0]=m;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i[s]="string"==typeof e?e:a,u[1]=i;for(var c=2;c<l;c++)u[c]=t[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6319:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>u,default:()=>v,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const l={},u="CurveFS \u52a9\u529b\u7f51\u6613\u4e91\u5546\uff0c\u89e3\u51b3\u8bed\u97f3\u8bc6\u522b\u8bad\u7ec3\u6570\u636e\u589e\u957f\u9700\u6c42",i={unversionedId:"CurveFS/usecase/asr-storage",id:"CurveFS/usecase/asr-storage",title:"CurveFS \u52a9\u529b\u7f51\u6613\u4e91\u5546\uff0c\u89e3\u51b3\u8bed\u97f3\u8bc6\u522b\u8bad\u7ec3\u6570\u636e\u589e\u957f\u9700\u6c42",description:"\u4e91\u5546 ASR \u8bad\u7ec3\u6570\u636e\u5feb\u901f\u589e\u957f\u9762\u4e34\u56f0\u5883",source:"@site/docs/03-CurveFS/01-usecase/08-asr-storage.md",sourceDirName:"03-CurveFS/01-usecase",slug:"/CurveFS/usecase/asr-storage",permalink:"/CurveFS/usecase/asr-storage",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CurveFS\u5728AI\u8bad\u7ec3\u573a\u666f\u4e0b\u7684\u964d\u672c\u63d0\u6548\u5b9e\u8df5",permalink:"/CurveFS/usecase/ai-storage"},next:{title:"\u90e8\u7f72",permalink:"/category/\u90e8\u7f72-1"}},o={},c=[{value:"\u4e91\u5546 ASR \u8bad\u7ec3\u6570\u636e\u5feb\u901f\u589e\u957f\u9762\u4e34\u56f0\u5883",id:"\u4e91\u5546-asr-\u8bad\u7ec3\u6570\u636e\u5feb\u901f\u589e\u957f\u9762\u4e34\u56f0\u5883",level:2},{value:"CurveFS",id:"curvefs",level:2},{value:"CurveFS\u662f\u4ec0\u4e48",id:"curvefs\u662f\u4ec0\u4e48",level:3},{value:"CurveFS \u5e94\u7528\u4ef7\u503c",id:"curvefs-\u5e94\u7528\u4ef7\u503c",level:3},{value:"\u9879\u76ee\u672a\u6765\u89c4\u5212\u548c\u5c55\u671b",id:"\u9879\u76ee\u672a\u6765\u89c4\u5212\u548c\u5c55\u671b",level:3}],p={toc:c},s="wrapper";function v(e){let{components:r,...l}=e;return(0,a.kt)(s,(0,n.Z)({},p,l,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"curvefs-\u52a9\u529b\u7f51\u6613\u4e91\u5546\u89e3\u51b3\u8bed\u97f3\u8bc6\u522b\u8bad\u7ec3\u6570\u636e\u589e\u957f\u9700\u6c42"},"CurveFS \u52a9\u529b\u7f51\u6613\u4e91\u5546\uff0c\u89e3\u51b3\u8bed\u97f3\u8bc6\u522b\u8bad\u7ec3\u6570\u636e\u589e\u957f\u9700\u6c42"),(0,a.kt)("h2",{id:"\u4e91\u5546-asr-\u8bad\u7ec3\u6570\u636e\u5feb\u901f\u589e\u957f\u9762\u4e34\u56f0\u5883"},"\u4e91\u5546 ASR \u8bad\u7ec3\u6570\u636e\u5feb\u901f\u589e\u957f\u9762\u4e34\u56f0\u5883"),(0,a.kt)("p",null,"\u968f\u7740\u8bed\u97f3\u6280\u672f\u5728\u5404\u884c\u5404\u4e1a\u7684\u5e7f\u6cdb\u5e94\u7528\uff0c\u81ea\u52a8\u8bed\u97f3\u8bc6\u522b(ASR)\u6b63\u5728\u6210\u4e3a\u4f17\u591a\u4e91\u670d\u52a1\u5546\u7684\u6838\u5fc3\u7ade\u4e89\u529b\u3002\n\u4f46 ASR \u6a21\u578b\u7684\u6301\u7eed\u4f18\u5316\u9700\u8981\u5927\u91cf\u8bad\u7ec3\u6570\u636e\u7684\u652f\u6301,\u5982\u4f55\u9ad8\u6548\u7ba1\u7406\u6d77\u91cf\u8bad\u7ec3\u6570\u636e\u6210\u4e3a\u4e91\u5546\u9762\u4e34\u7684\u4e00\u4e2a\u96be\u9898\u3002"),(0,a.kt)("p",null,"\u7f51\u6613\u4e91\u5546\u5728\u53d1\u5c55 ASR \u4e1a\u52a1\u8fc7\u7a0b\u4e2d\uff0c\u5b58\u50a8\u9762\u4e34\u4e86\u5de8\u5927\u6311\u6218\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06\u6d77\u91cf\u8bad\u7ec3\u6570\u636e\u4fdd\u5b58\u5728\u5355\u4e2a\u8282\u70b9\u4e0a\uff0c\u4e0d\u4ec5\u5b58\u50a8\u8d44\u6e90\u5229\u7528\u7387\u4f4e\u4e0b\uff0c\u4e5f\u4f7f\u6570\u636e\u96be\u4ee5\u88ab\u591a\u4e2a\u8bad\u7ec3\u4efb\u52a1\u5171\u4eab\u8bbf\u95ee\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4ec5\u5b58\u653e\u5728\u672c\u5730\u8fd8\u5e26\u6765\u6570\u636e\u4e22\u5931\u98ce\u9669\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u968f\u7740\u8bed\u97f3\u6570\u636e\u91cf\u5448\u6307\u6570\u589e\u957f\uff0c\u5355\u8282\u70b9\u5b58\u50a8\u65e9\u5df2\u65e0\u6cd5\u8d1f\u8377\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u7a7a\u95f4\u6ee1\u6ea2\uff0c\u5c06\u4e25\u91cd\u5236\u7ea6\u4e1a\u52a1\u8fdb\u4e00\u6b65\u6269\u5f20\u3002")),(0,a.kt)("p",null,"\u9488\u5bf9\u5b58\u50a8\u9762\u4e34\u7684\u8fd9\u4e9b\u56f0\u5883\uff0c\u7f51\u6613\u4e91\u5546\u8feb\u5207\u9700\u8981\u627e\u5230\u4e00\u4e2a\u66f4\u4f18\u7684\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\u3002"),(0,a.kt)("h2",{id:"curvefs"},"CurveFS"),(0,a.kt)("p",null,"\u4e3a\u89e3\u51b3\u8fd9\u4e00\u75db\u70b9,\u7f51\u6613\u4e91\u5546\u51b3\u5b9a\u5f15\u5165\u5f00\u6e90\u5b58\u50a8\u7cfb\u7edfCurveFS\u3002"),(0,a.kt)("h3",{id:"curvefs\u662f\u4ec0\u4e48"},"CurveFS\u662f\u4ec0\u4e48"),(0,a.kt)("p",null,"CurveFS\u662f\u4e00\u4e2a\u57fa\u4e8e Fuse\u5b9e\u73b0\u7684\u517c\u5bb9POSIX \u63a5\u53e3\u7684\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\uff0c\u67b6\u6784\u5982\u4e0b\u56fe\u6240\u793a:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"curvefs arch",src:t(8418).Z,width:"971",height:"569"})),(0,a.kt)("p",null,"CurveFS\u7531\u4e09\u4e2a\u90e8\u5206\u7ec4\u6210\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5ba2\u6237\u7aef curve-fuse\uff0c\u548c\u5143\u6570\u636e\u96c6\u7fa4\u4ea4\u4e92\u5904\u7406\u6587\u4ef6\u5143\u6570\u636e\u589e\u5220\u6539\u67e5\u8bf7\u6c42\uff0c\u548c\u6570\u636e\u96c6\u7fa4\u4ea4\u4e92\u5904\u7406\u6587\u4ef6\u6570\u636e\u7684\u589e\u5220\u6539\u67e5\u8bf7\u6c42\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5143\u6570\u636e\u96c6\u7fa4 metaserver cluster\uff0c\u7528\u4e8e\u63a5\u6536\u548c\u5904\u7406\u5143\u6570\u636e(inode \u548c dentry)\u7684\u589e\u5220\u6539\u67e5\u8bf7\u6c42\u3002\nmetaserver cluster\u7684\u67b6\u6784\u5177\u6709\u9ad8\u53ef\u9760\u3001\u9ad8\u53ef\u7528\u3001\u9ad8\u53ef\u6269\u7684\u7279\u70b9\uff1aMDS\u7528\u4e8e\u7ba1\u7406\u96c6\u7fa4\u62d3\u6251\u7ed3\u6784\uff0c\u8d44\u6e90\u8c03\u5ea6\u3002\nmetaserver \u662f\u6570\u636e\u8282\u70b9\uff0c\u4e00\u4e2a metaserver \u5bf9\u5e94\u7ba1\u7406\u4e00\u4e2a\u7269\u7406\u78c1\u76d8\u3002\nCurveFS \u4f7f\u7528 Raft \u4fdd\u8bc1\u5143\u6570\u636e\u7684\u53ef\u9760\u6027\u548c\u53ef\u7528\u6027\uff0cRaft\u590d\u5236\u7ec4\u7684\u57fa\u672c\u5355\u5143\u662f copyset\u3002\n\u4e00\u4e2a metaserver \u4e0a\u5305\u542b\u591a\u4e2a copyset \u590d\u5236\u7ec4\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6570\u636e\u96c6\u7fa4 data cluster\uff0c\u7528\u4e8e\u63a5\u6536\u548c\u5904\u7406\u6587\u4ef6\u6570\u636e\u7684\u589e\u5220\u6539\u67e5\u3002\ndata cluster \u76ee\u524d\u652f\u6301\u4e24\u5b58\u50a8\u7c7b\u578b\uff1a\u652f\u6301 S3 \u63a5\u53e3\u7684\u5bf9\u8c61\u5b58\u50a8\u4ee5\u53ca CurveBS\uff08\u5f00\u53d1\u4e2d\uff09\u3002"))),(0,a.kt)("p",null,"CurveFS \u4e00\u4e2a\u72ec\u7279\u7684\u8bbe\u8ba1\u662f\u5176\u540e\u7aef\u5b58\u50a8\u65e2\u53ef\u5bf9\u63a5 S3 \u5bf9\u8c61\u5b58\u50a8\uff0c\u4e5f\u53ef\u5bf9\u63a5 Curve \u81ea\u7814\u7684\u5757\u5b58\u50a8\u3002\n\u8fd9\u8d4b\u4e88\u7528\u6237\u9ad8\u5ea6\u7684\u7075\u6d3b\u6027\uff1a\u5bf9\u6027\u80fd\u8981\u6c42\u8f83\u9ad8\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u53ef\u9009\u62e9\u90e8\u7f72\u5728 Curve \u9ad8\u6027\u80fd\u5757\u5b58\u50a8\uff1b\u5bf9\u6210\u672c\u654f\u611f\u7684\u4e1a\u52a1\uff0c\u5219\u53ef\u4ee5\u5229\u7528 S3 \u5b58\u50a8\u7684\u4f18\u52bf\u6765\u964d\u4f4e\u6210\u672c\u3002\nCurveFS \u517c\u5bb9\u4e24\u79cd\u5b58\u50a8\u540e\u7aef\u7684\u7279\u6027\uff0c\u4f7f\u5176\u53ef\u4ee5\u9002\u5e94\u4e0d\u540c\u4e1a\u52a1\u7684\u5b58\u50a8\u9700\u6c42\uff0c\u65e2\u4fdd\u8bc1\u9ad8\u6027\u80fd\uff0c\u4e5f\u63a7\u5236\u5b58\u50a8\u6210\u672c\u3002"),(0,a.kt)("h3",{id:"curvefs-\u5e94\u7528\u4ef7\u503c"},"CurveFS \u5e94\u7528\u4ef7\u503c"),(0,a.kt)("p",null,"\u76f8\u8f83\u4e8e\u672c\u5730\u5b58\u50a8\u800c\u8a00\uff0cCurveFS \u5177\u6709\u4ee5\u4e0b\u4f18\u52bf:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5c06\u8bad\u7ec3\u6570\u636e\u5b58\u50a8\u5728\u4e91\u7aef\u5bf9\u8c61\u5b58\u50a8\uff0c\u5b9e\u73b0\u8d44\u6e90\u5f39\u6027\u6269\u5c55")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7edf\u4e00\u7ba1\u7406\u8bad\u7ec3\u6570\u636e,\u652f\u6301\u591a\u8282\u70b9\u5171\u4eab\u8bbf\u95ee")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u540e\u7aef\u63a5\u5165 NOS \u4f4e\u9891\u5b58\u50a8\uff0c\u76f8\u6bd4\u672c\u5730\u5b58\u50a8\u80fd\u591f\u5927\u5e45\u964d\u4f4e ASR \u8bad\u7ec3\u5b58\u50a8\u6210\u672c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u652f\u6301\u6570\u636e\u591a\u7ea7\u7f13\u5b58\uff0c\u63d0\u5347\u8bad\u7ec3\u6548\u7387\u7ea6 30 %"))),(0,a.kt)("p",null,"\u4e0e\u4fdd\u5b58\u5728\u5355\u673a\u4e0a\u7684\u4f20\u7edf\u65b9\u5f0f\u76f8\u6bd4\uff0cCurveFS\u4e91\u7aef\u90e8\u7f72\u65b9\u6848\u867d\u7136\u6570\u636e\u8bfb\u53d6\u901f\u5ea6\u7565\u4f4e\uff0c\u4f46\u8003\u8651\u5230\u672a\u6765\u8bad\u7ec3\u6570\u636e\u91cf\u7684\u589e\u957f\u9700\u6c42\uff0c\u5176\u6269\u5c55\u6027\u548c\u8d44\u6e90\u4f18\u5316\u80fd\u529b\u5df2\u5927\u5927\u8d85\u8d8a\u672c\u5730\u5b58\u50a8\u3002"),(0,a.kt)("p",null,"Curve\u5171\u4eab\u6587\u4ef6\u5b58\u50a8\u7cfb\u7edf\u4e0d\u4ec5\u9002\u7528\u4e8e ASR \u4e1a\u52a1\u573a\u666f\uff0c\u5728 ElasticSearch \u7b49\u5927\u6570\u636e\u5b58\u50a8\u5206\u6790\u4e1a\u52a1\u573a\u666f\u4e5f\u6709\u5e94\u7528\uff0c\u76ee\u524d\u4e5f\u5728\u591a\u4e2a\u96c6\u56e2\u5185\u90e8\u4e1a\u52a1\u573a\u666f\u843d\u5730\u4f7f\u7528\u3002"),(0,a.kt)("h3",{id:"\u9879\u76ee\u672a\u6765\u89c4\u5212\u548c\u5c55\u671b"},"\u9879\u76ee\u672a\u6765\u89c4\u5212\u548c\u5c55\u671b"),(0,a.kt)("p",null,"\u4f46\u662f\uff0cCurveFS\u4e5f\u9762\u4e34\u4e00\u5b9a\u7684\u6311\u6218\u3002\n\u7531\u4e8eASR\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\u9700\u8981\u9891\u7e41\u8bfb\u53d6\u6570\u636e\uff0c\u8fd9\u5bf9\u4e91\u5b58\u50a8\u7684\u8bbf\u95ee\u901f\u5ea6\u548c\u7a33\u5b9a\u6027\u63d0\u51fa\u4e86\u8f83\u9ad8\u8981\u6c42\u3002\n\u4e91\u5b58\u50a8\u7531\u4e8e\u7f51\u7edc\u4f20\u8f93\u7684\u5f71\u54cd\uff0c\u8bfb\u53d6\u901f\u5ea6\u96be\u4ee5\u4e0e\u672c\u5730\u5b58\u50a8\u76f8\u6bd4\u3002\n\u8fd9\u4e9b\u5728 CurveFS \u7684\u540e\u7eed\u7248\u672c\u8fed\u4ee3\u4e2d\u6301\u7eed\u4f18\u5316\uff0c\u5305\u62ec\u4f18\u5316\u5143\u6570\u636e\u6027\u80fd\u548c\u591a\u7ea7\u7f13\u5b58\u7b49\u3002"),(0,a.kt)("h1",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,"\u4f5c\u4e3a\u4e00\u4e2a\u5e74\u8f7b\u7684\u9879\u76ee\uff0cCurve\u4ecd\u5728\u5feb\u901f\u8fed\u4ee3\u3002\u672a\u6765Curve\u4f1a\u7ee7\u7eed\u4f18\u5316\u5728AI\u548c\u5927\u6570\u636e\u5206\u6790\u573a\u666f\u7684\u9002\u914d\u80fd\u529b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0e\u5404\u7c7bAI\u6846\u67b6\u6df1\u5ea6\u96c6\u6210\uff0c\u63d0\u4f9b\u81ea\u52a8\u5316\u7684\u6570\u636e\u9884\u70ed\u3001\u8bad\u7ec3\u4f18\u5316\u7b49\u529f\u80fd,\u63d0\u5347AI\u8bad\u7ec3\u7684\u6613\u7528\u6027\u548c\u6548\u7387\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 HDFS \u63a5\u53e3\uff0c\u4f7f\u5176\u80fd\u591f\u7edf\u4e00\u5e94\u7528\u4e8e\u6570\u636e\u6536\u96c6\u3001\u5b58\u50a8\u4e0e\u5206\u6790\u5904\u7406\uff0c\u5b9e\u73b0\u6570\u636e\u751f\u547d\u5468\u671f\u7684\u65e0\u7f1d\u7ba1\u7406\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u66f4\u591a\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u4e2d\u843d\u5730,\u4e30\u5bcc\u89e3\u51b3\u65b9\u6848\u7ecf\u9a8c\u3002")),(0,a.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e9b\u52aa\u529b\uff0cCurve\u6b63\u5728\u6210\u957f\u4e3a\u4e00\u4e2a\u6210\u719f\u3001\u5f3a\u5927\u3001\u9002\u7528\u8303\u56f4\u5e7f\u6cdb\u7684\u5f00\u6e90\u5b58\u50a8\u7cfb\u7edf,\u4e3a\u7528\u6237\u63d0\u4f9b\u7b80\u5355\u9ad8\u6548\u7684\u5b58\u50a8\u670d\u52a1\u3002\u5b83\u7684\u53d1\u5c55\u524d\u666f\u5e7f\u9614\uff0c\u5fc5\u5c06\u4e3a\u5f00\u6e90\u793e\u533a\u505a\u51fa\u91cd\u8981\u8d21\u732e\u3002"))}v.isMDXComponent=!0},8418:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/curvefs_architecture-3f978bb3235810ab3994ccd36a79bbb8.png"}}]);