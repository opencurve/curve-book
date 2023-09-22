"use strict";(self.webpackChunkcurve_book=self.webpackChunkcurve_book||[]).push([[2222],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var l=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=l.createContext({}),p=function(e){var t=l.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},o="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),o=p(r),d=a,k=o["".concat(c,".").concat(d)]||o[d]||v[d]||n;return r?l.createElement(k,u(u({ref:t},s),{},{components:r})):l.createElement(k,u({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,u=new Array(n);u[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[o]="string"==typeof e?e:a,u[1]=i;for(var p=2;p<n;p++)u[p]=r[p];return l.createElement.apply(null,u)}return l.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1763:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>v,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var l=r(7462),a=(r(7294),r(3905));const n={},u="CurveFS\u5728AI\u8bad\u7ec3\u573a\u666f\u4e0b\u7684\u964d\u672c\u63d0\u6548\u5b9e\u8df5",i={unversionedId:"CurveFS/usecase/ai-storage",id:"CurveFS/usecase/ai-storage",title:"CurveFS\u5728AI\u8bad\u7ec3\u573a\u666f\u4e0b\u7684\u964d\u672c\u63d0\u6548\u5b9e\u8df5",description:"\u4e00\u3001\u9879\u76ee\u80cc\u666f",source:"@site/docs/03-CurveFS/01-usecase/07-ai-storage.md",sourceDirName:"03-CurveFS/01-usecase",slug:"/CurveFS/usecase/ai-storage",permalink:"/CurveFS/usecase/ai-storage",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CurveFS\u5728Elasticsearch\u51b7\u70ed\u6570\u636e\u5b58\u50a8\u4e2d\u7684\u5e94\u7528",permalink:"/CurveFS/usecase/elasticsearch-cold-data"},next:{title:"\u90e8\u7f72",permalink:"/category/\u90e8\u7f72-1"}},c={},p=[{value:"\u4e00\u3001\u9879\u76ee\u80cc\u666f",id:"\u4e00\u9879\u76ee\u80cc\u666f",level:2},{value:"\u53ef\u6269\u5c55\u6027\u95ee\u9898",id:"\u53ef\u6269\u5c55\u6027\u95ee\u9898",level:3},{value:"\u6027\u80fd\u95ee\u9898",id:"\u6027\u80fd\u95ee\u9898",level:3},{value:"\u6210\u672c\u95ee\u9898",id:"\u6210\u672c\u95ee\u9898",level:3},{value:"\u4e8c\u3001\u9879\u76ee\u601d\u8def\u548c\u65b9\u6848",id:"\u4e8c\u9879\u76ee\u601d\u8def\u548c\u65b9\u6848",level:2},{value:"\u6587\u4ef6\u7cfb\u7edf\u7684\u5143\u6570\u636e\u72ec\u7acb\u5b58\u5b58\u50a8",id:"\u6587\u4ef6\u7cfb\u7edf\u7684\u5143\u6570\u636e\u72ec\u7acb\u5b58\u5b58\u50a8",level:3},{value:"\u6587\u4ef6\u7cfb\u7edf\u6570\u636e\u5b58\u50a8\u7684\u964d\u672c\u589e\u6548",id:"\u6587\u4ef6\u7cfb\u7edf\u6570\u636e\u5b58\u50a8\u7684\u964d\u672c\u589e\u6548",level:3},{value:"\u6587\u4ef6\u7cfb\u7edf\u6570\u636e\u548c\u5143\u6570\u636e\u90fd\u652f\u6301\u591a\u7ea7\u7f13\u5b58",id:"\u6587\u4ef6\u7cfb\u7edf\u6570\u636e\u548c\u5143\u6570\u636e\u90fd\u652f\u6301\u591a\u7ea7\u7f13\u5b58",level:3},{value:"\u6570\u636e\u7f13\u5b58",id:"\u6570\u636e\u7f13\u5b58",level:4},{value:"\u5143\u6570\u636e\u7f13\u5b58",id:"\u5143\u6570\u636e\u7f13\u5b58",level:4},{value:"\u6587\u4ef6\u7cfb\u7edf\u652f\u6301\u6570\u636e\u9884\u8bfb\u548c\u9884\u70ed",id:"\u6587\u4ef6\u7cfb\u7edf\u652f\u6301\u6570\u636e\u9884\u8bfb\u548c\u9884\u70ed",level:3},{value:"\u652f\u6301\u9884\u8bfb\uff08Prefetch\uff09",id:"\u652f\u6301\u9884\u8bfbprefetch",level:4},{value:"\u652f\u6301\u9884\u70ed\uff08warmup\uff09",id:"\u652f\u6301\u9884\u70edwarmup",level:4},{value:"\u4e09\u3001\u9879\u76ee\u5f71\u54cd\u529b\u548c\u4ea7\u51fa\u4ef7\u503c",id:"\u4e09\u9879\u76ee\u5f71\u54cd\u529b\u548c\u4ea7\u51fa\u4ef7\u503c",level:2},{value:"\u4e3a\u4e1a\u52a1\u964d\u672c\u63d0\u6548",id:"\u4e3a\u4e1a\u52a1\u964d\u672c\u63d0\u6548",level:3},{value:"\u56db\u3001\u9879\u76ee\u672a\u6765\u89c4\u5212\u548c\u5c55\u671b",id:"\u56db\u9879\u76ee\u672a\u6765\u89c4\u5212\u548c\u5c55\u671b",level:2}],s={toc:p},o="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(o,(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"curvefs\u5728ai\u8bad\u7ec3\u573a\u666f\u4e0b\u7684\u964d\u672c\u63d0\u6548\u5b9e\u8df5"},"CurveFS\u5728AI\u8bad\u7ec3\u573a\u666f\u4e0b\u7684\u964d\u672c\u63d0\u6548\u5b9e\u8df5"),(0,a.kt)("h2",{id:"\u4e00\u9879\u76ee\u80cc\u666f"},"\u4e00\u3001\u9879\u76ee\u80cc\u666f"),(0,a.kt)("p",null,"\u5728\u5f53\u4eca\u5927\u6570\u636e\u548c\u4eba\u5de5\u667a\u80fd\u9886\u57df\u7684\u5feb\u901f\u53d1\u5c55\u4e2d\uff0c\u968f\u7740\u6570\u636e\u91cf\u7684\u7206\u70b8\u5f0f\u589e\u957f\uff0c\u5bf9\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\u7684\u5b58\u50a8\u53ef\u6269\u5c55\u6027\u3001\u6210\u672c\u548c\u6027\u80fd\u63d0\u51fa\u4e86\u66f4\u9ad8\u7684\u8981\u6c42\u3002\u5728\u6b64\u5927\u52bf\u6240\u8d8b\u4e4b\u4e0b\uff0c\u676d\u7814\u4e91\u8ba1\u7b97\u56e2\u961f\u5f00\u53d1\u4e86Curve\u5171\u4eab\u6587\u4ef6\u5b58\u50a8\u7cfb\u7edf\u6765\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\u3002"),(0,a.kt)("p",null,"Curve\u5171\u4eab\u6587\u4ef6\u5b58\u50a8\u7cfb\u7edf\u65e8\u5728\u89e3\u51b3\u4ee5\u4e0b\u95ee\u9898\uff1a"),(0,a.kt)("h3",{id:"\u53ef\u6269\u5c55\u6027\u95ee\u9898"},"\u53ef\u6269\u5c55\u6027\u95ee\u9898"),(0,a.kt)("p",null,"\u968f\u7740\u6587\u4ef6\u6570\u91cf\u7684\u589e\u957f\uff0c\u73b0\u6709\u7684\u6587\u4ef6\u7cfb\u7edf\u5982CephFS\u548cHDFS\u7b49\u5143\u6570\u636e\u7684\u53ef\u6269\u5c55\u6027\u4e0d\u8db3\uff0c\u65e0\u6cd5\u6ee1\u8db3\u5927\u89c4\u6a21\u6587\u4ef6\u5b58\u50a8\u7684\u9700\u6c42\u3002Curve\u6587\u4ef6\u7cfb\u7edf\u5c06\u63d0\u4f9b\u53ef\u6269\u5c55\u7684\u5171\u4eab\u6587\u4ef6\u5b58\u50a8\uff0c\u89e3\u51b3\u5143\u6570\u636e\u7ba1\u7406\u7684\u95ee\u9898\u3002"),(0,a.kt)("h3",{id:"\u6027\u80fd\u95ee\u9898"},"\u6027\u80fd\u95ee\u9898"),(0,a.kt)("p",null,"\u968f\u7740\u6587\u4ef6\u6570\u91cf\u7684\u589e\u52a0\uff0c\u6587\u4ef6\u5143\u6570\u636e\u7684\u6027\u80fd\u4f1a\u5927\u5e45\u4e0b\u964d\u3002\u6b64\u5916\uff0c\u5c0f\u6587\u4ef6\u7684\u8bfb\u5199\u6027\u80fd\u4e5f\u6bd4\u8f83\u5dee\uff0c\u8fd9\u4f1a\u5bf9\u5927\u6570\u636e\u548cAI\u7b49\u4e1a\u52a1\u4ea7\u751f\u5f71\u54cd\u3002Curve\u6587\u4ef6\u7cfb\u7edf\u5c06\u4f18\u5316\u5143\u6570\u636e\u7ba1\u7406\uff0c\u63d0\u9ad8\u6587\u4ef6\u68c0\u7d22\u6548\u7387\uff0c\u5e76\u6539\u5584\u5c0f\u6587\u4ef6\u7684\u8bfb\u5199\u6027\u80fd\u3002"),(0,a.kt)("h3",{id:"\u6210\u672c\u95ee\u9898"},"\u6210\u672c\u95ee\u9898"),(0,a.kt)("p",null,"\u73b0\u6709\u7684\u6587\u4ef6\u7cfb\u7edf\u901a\u5e38\u91c7\u7528\u4e24\u526f\u672c\u6216\u4e09\u526f\u672c\u6280\u672f\uff0c\u4f46\u5b9e\u9645\u4e0a80%\u7684\u6570\u636e\u90fd\u662f\u51b7\u6570\u636e\uff0c\u4f7f\u7528\u591a\u526f\u672c\u6280\u672f\u5b58\u50a8\u6210\u672c\u8f83\u9ad8\u3002Curve\u6587\u4ef6\u7cfb\u7edf\u5c06\u91c7\u7528\u66f4\u9ad8\u6548\u7684\u6570\u636e\u5b58\u50a8\u7b56\u7565\uff0c\u964d\u4f4e\u5b58\u50a8\u6210\u672c\uff0c\u63d0\u9ad8\u8d44\u6e90\u5229\u7528\u7387\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\uff0cCurve\u6587\u4ef6\u7cfb\u7edf\u4e0d\u4ec5\u5c06\u4e3a\u516c\u53f8\u7684\u6838\u5fc3\u4e1a\u52a1\u63d0\u4f9b\u7a33\u5b9a\u3001\u9ad8\u6548\u7684\u5b58\u50a8\u652f\u6301\uff0c\u540c\u65f6\u4e5f\u4f1a\u5bf9\u5f00\u6e90\u793e\u533a\u505a\u51fa\u91cd\u8981\u8d21\u732e\u3002\u6211\u4eec\u81f4\u529b\u4e8e\u5c06Curve\u6587\u4ef6\u7cfb\u7edf\u6253\u9020\u6210\u4e3a\u4e00\u6b3e\u5e7f\u6cdb\u4f7f\u7528\u7684\u5f00\u6e90\u5b58\u50a8\u8f6f\u4ef6\uff0c\u4e3a\u5168\u7403\u7684\u5f00\u53d1\u8005\u793e\u533a\u63d0\u4f9b\u53ef\u6269\u5c55\u3001\u9ad8\u6027\u80fd\u548c\u4f4e\u6210\u672c\u7684\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\u3002\u6211\u4eec\u76f8\u4fe1\uff0cCurve\u6587\u4ef6\u7cfb\u7edf\u7684\u7814\u53d1\u548c\u5e94\u7528\u5c06\u4fc3\u8fdb\u6280\u672f\u521b\u65b0\uff0c\u63a8\u52a8\u6574\u4e2a\u5f00\u6e90\u793e\u533a\u7684\u53d1\u5c55\u3002"),(0,a.kt)("h2",{id:"\u4e8c\u9879\u76ee\u601d\u8def\u548c\u65b9\u6848"},"\u4e8c\u3001\u9879\u76ee\u601d\u8def\u548c\u65b9\u6848"),(0,a.kt)("h3",{id:"\u6587\u4ef6\u7cfb\u7edf\u7684\u5143\u6570\u636e\u72ec\u7acb\u5b58\u5b58\u50a8"},"\u6587\u4ef6\u7cfb\u7edf\u7684\u5143\u6570\u636e\u72ec\u7acb\u5b58\u5b58\u50a8"),(0,a.kt)("p",null,"\u89e3\u51b3\u5143\u6570\u636e\u589e\u957f\u5e26\u6765\u7684\u6269\u5c55\u6027\u548c\u6027\u80fd\u8981\u6c42\u3002\u901a\u8fc7\u521b\u65b0\u7684\u8bbe\u8ba1\u548c\u5b9e\u73b0\uff0c\u4f7f\u5f97\u5176\u4e2d\u5143\u6570\u636e\u88ab\u5b58\u50a8\u5728\u4e00\u4e2a\u72ec\u7acb\u7684\u96c6\u7fa4\u4e2d\u3002\u968f\u7740\u6587\u4ef6\u6570\u91cf\u7684\u4e0d\u65ad\u589e\u52a0\uff0c\u5143\u6570\u636e\u96c6\u7fa4\u53ef\u4ee5\u6301\u7eed\u6269\u5c55\uff0c\u786e\u4fdd\u4e86\u5143\u6570\u636e\u7684\u7ebf\u6027\u6269\u5c55\u80fd\u529b\u3002\u8fd9\u79cd\u8bbe\u8ba1\u6709\u6548\u5730\u89e3\u51b3\u4e86\u4f20\u7edf\u6587\u4ef6\u7cfb\u7edf\u5728\u5904\u7406\u5927\u89c4\u6a21\u6587\u4ef6\u65f6\u9762\u4e34\u7684\u6027\u80fd\u548c\u53ef\u6269\u5c55\u6027\u6311\u6218\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"curvefs arch",src:r(4096).Z,width:"1170",height:"672"})),(0,a.kt)("p",null,"Curve\u5171\u4eab\u6587\u4ef6\u5b58\u50a8\u7cfb\u7edf\u901a\u8fc7\u5bf9\u5143\u6570\u636e\u8fdb\u884c\u5408\u7406\u7684\u5206\u7247\uff0c\u4f7f\u5f97\u591a\u4e2a\u5206\u7247\u53ef\u4ee5\u5206\u5e03\u5728\u7531\u591a\u53f0\u670d\u52a1\u5668\u7ec4\u6210\u7684\u5143\u6570\u636e\u96c6\u7fa4\u4e2d\u3002\u5f53\u524d\u65b9\u6848\u6309\u7167inodeid\u8fdb\u884c\u5206\u7247\uff0c\u6309\u7167\u7b97\u6cd5serverid = (inodeid / inode_per_segment) mod metaserver_num\u8fdb\u884c\u5206\u7247\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u6309\u7167\u6bcf\u4e2a\u5206\u7247\u7ba1\u7406100\u4e2ainodeid\uff0c\u67093\u4e2ametaserver\uff0c\u90a3\u4e48\u5206\u7247\u4fe1\u606f\u5c06\u5982\u4e0b\u3002\u5982\u679c\u5143\u6570\u636e\u6570\u91cf\u589e\u52a0\uff0c\u53ef\u4ee5\u901a\u8fc7\u589e\u52a0\u5143\u6570\u636e\u96c6\u7fa4\u7684\u670d\u52a1\u5668\u6765\u5b9e\u73b0\u7ebf\u6027\u6269\u5c55\u7684\u76ee\u6807\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"curvefs meta arch",src:r(6231).Z,width:"882",height:"506"})),(0,a.kt)("h3",{id:"\u6587\u4ef6\u7cfb\u7edf\u6570\u636e\u5b58\u50a8\u7684\u964d\u672c\u589e\u6548"},"\u6587\u4ef6\u7cfb\u7edf\u6570\u636e\u5b58\u50a8\u7684\u964d\u672c\u589e\u6548"),(0,a.kt)("p",null,"\u6587\u4ef6\u6570\u636e\u6700\u7ec8\u5b58\u50a8\u5728S3\u4e0a\uff0c\u4f8b\u5982\u96c6\u56e2\u5185\u90e8\u7684NOS\u3001\u963f\u91cc\u4e91OSS\u3001AWS S3\u7b49\u3002S3\u901a\u5e38\u4f7f\u7528EC\u6280\u672f\uff08\u4e00\u822c\u53ef\u4ee5\u652f\u63011.2\u526f\u672c\uff09\uff0c\u76f8\u6bd42\u526f\u672c\u62163\u526f\u672c\uff0c\u5728\u4fdd\u8bc1\u53ef\u9760\u6027\u7684\u540c\u65f6\u53ef\u4ee5\u5927\u5e45\u5ea6\u964d\u4f4e\u5b58\u50a8\u6210\u672c\u3002"),(0,a.kt)("p",null,"\u4ee5\u7f51\u6613\u5bf9\u8c61\u5b58\u50a8\u8fd9\u8fb9\u5f53\u524d\u4e3b\u6d41\u7684EC 20+4\u4f7f\u7528\u4e3a\u4f8b\uff0c\u8be5\u4f7f\u7528\u65b9\u5f0f\u76f8\u5f53\u4e8e1.2\u526f\u672c\u3002\u56e0\u6b64\uff0c\u4ee5\u9700\u89811PB\u4f7f\u7528\u7a7a\u95f4\u4e3a\u4f8b\uff0c\u4f7f\u7528Curve\u5171\u4eab\u6587\u4ef6\u5b58\u50a8\u7cfb\u7edf+1.2\u526f\u672c\u5bf9\u8c61\u5b58\u50a8\u53ea\u9700\u89811.2PB\u7a7a\u95f4\uff0c\u76f8\u6bd4\u672c\u5730\u76d82\u526f\u672c\u53ef\u4ee5\u8282\u7701\u7ea6800TB\u7684\u5bb9\u91cf\uff0c\u6210\u672c\u4f18\u5316\u6548\u679c\u975e\u5e38\u663e\u8457\u3002"),(0,a.kt)("h3",{id:"\u6587\u4ef6\u7cfb\u7edf\u6570\u636e\u548c\u5143\u6570\u636e\u90fd\u652f\u6301\u591a\u7ea7\u7f13\u5b58"},"\u6587\u4ef6\u7cfb\u7edf\u6570\u636e\u548c\u5143\u6570\u636e\u90fd\u652f\u6301\u591a\u7ea7\u7f13\u5b58"),(0,a.kt)("p",null,"\u5728\u5de5\u7a0b\u5b9e\u8df5\u4e2d\uff0c\u7531\u4e8eS3\u548c\u5143\u6570\u636e\u96c6\u7fa4\u90fd\u9700\u8981\u901a\u8fc7\u7f51\u7edc\u8fdb\u884c\u8bbf\u95ee\uff0c\u6bcf\u6b21\u8bfb\u5199\u64cd\u4f5c\u90fd\u4f1a\u7ecf\u8fc7\u7f51\u7edc\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bf9\u4e1a\u52a1\u6027\u80fd\u4ea7\u751f\u8d1f\u9762\u5f71\u54cd\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cCurve\u5171\u4eab\u6587\u4ef6\u5b58\u50a8\u7cfb\u7edf\u5728\u4fdd\u8bc1\u591a\u6302\u8f7d\u70b9\u4e00\u81f4\u6027\u7684\u60c5\u51b5\u4e0b\uff0c\u8fdb\u884c\u4e86\u6570\u636e\u548c\u5143\u6570\u636e\u7684\u6027\u80fd\u4f18\u5316\uff0c\u4e3b\u8981\u601d\u8def\u662f\u589e\u52a0\u7f13\u5b58\u3002"),(0,a.kt)("h4",{id:"\u6570\u636e\u7f13\u5b58"},"\u6570\u636e\u7f13\u5b58"),(0,a.kt)("p",null,"\u6570\u636e\u652f\u6301\u591a\u7ea7\u7f13\u5b58\uff0c\u4e3b\u8981\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5185\u5b58\u7f13\u5b58\uff1a\u7528\u4e8e\u52a0\u901f\u5f53\u524d\u8282\u70b9\u4e0a\u7684\u8bfb\u5199\u901f\u5ea6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u672c\u5730\u7f13\u5b58\uff1a\u540c\u6837\u7528\u4e8e\u52a0\u901f\u5f53\u524d\u8282\u70b9\u4e0a\u7684\u8bfb\u5199\u901f\u5ea6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5168\u5c40\u7f13\u5b58\u96c6\u7fa4\uff1a\u7528\u4e8e\u52a0\u901f\u5f53\u524d\u8282\u70b9\u4ee5\u53ca\u591a\u8282\u70b9\u6570\u636e\u5171\u4eab\u65f6\u7684\u901f\u5ea6\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"curvefs data cache arch",src:r(3184).Z,width:"899",height:"504"})),(0,a.kt)("h4",{id:"\u5143\u6570\u636e\u7f13\u5b58"},"\u5143\u6570\u636e\u7f13\u5b58"),(0,a.kt)("p",null,"\u5143\u6570\u636e\u7f13\u5b58\u652f\u6301metaserver\u7aef\u5185\u5b58\u7f13\u5b58\u3001kernel\u7f13\u5b58\u548c\u672c\u5730\u5ba2\u6237\u7aef\u7f13\u5b58\u3002"),(0,a.kt)("p",null,"\u7f13\u5b58\u4f55\u65f6\u52a0\u8f7d\u6216\u5931\u6548\u662f\u5143\u6570\u636e\u7f13\u5b58\u7684\u96be\u70b9\u3002\u4e0e\u91c7\u7528\u5206\u5e03\u5f0f\u9501\u7684\u505a\u6cd5\u76f8\u6bd4\uff0cCurve\u5171\u4eab\u6587\u4ef6\u5b58\u50a8\u7cfb\u7edf\u9009\u62e9\u4e0d\u5b9e\u73b0\u590d\u6742\u7684\u5206\u5e03\u5f0f\u9501\u673a\u5236\uff0c\u800c\u662f\u57fa\u4e8e\u4e1a\u52a1\u5206\u6790\u4e0d\u9700\u8981\u5b8c\u5168\u5f3a\u4e00\u81f4\u6027\u7684\u524d\u63d0\uff0c\u4e3a\u6bcf\u79cd\u7c7b\u578b\u7684\u7f13\u5b58\u6570\u636e\u5236\u5b9a\u4e86\u4e00\u4e9b\u89c4\u5219\uff0c\u5728\u6ee1\u8db3\u4e1a\u52a1\u4e00\u81f4\u6027\u7684\u524d\u63d0\u4e0b\u63d0\u4f9b\u4e86\u8f83\u597d\u7684\u6027\u80fd\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u901a\u8fc7\u7ed3\u5408VFS\u5c42\u7684\u91cd\u8bd5\u673a\u5236\uff0cCurve\u5171\u4eab\u6587\u4ef6\u5b58\u50a8\u7cfb\u7edf\u63d0\u4f9b\u4e86\u5b8c\u5584\u7684CTO\uff08close-to-open\uff09\u4e00\u81f4\u6027\uff0c\u5b8c\u5168\u6ee1\u8db3CTO\u8bed\u4e49\u3002\u76f8\u5bf9\u4e8eJuiceFS\u7b49\u4f9d\u8d56\u7528\u6237\u7f13\u5b58\u65f6\u957f\u914d\u7f6e\u6765\u5b9e\u73b0CTO\u7684\u5b58\u50a8\u7cfb\u7edf\uff0cCurve\u5171\u4eab\u6587\u4ef6\u5b58\u50a8\u7cfb\u7edf\u5177\u6709\u66f4\u597d\u7684\u6027\u80fd\uff0c\u5e76\u5728\u4efb\u4f55\u573a\u666f\u4e0b\u90fd\u80fd\u4fdd\u8bc1CTO\u4e00\u81f4\u6027\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"curvefs meta cache arch",src:r(8614).Z,width:"829",height:"560"})),(0,a.kt)("h3",{id:"\u6587\u4ef6\u7cfb\u7edf\u652f\u6301\u6570\u636e\u9884\u8bfb\u548c\u9884\u70ed"},"\u6587\u4ef6\u7cfb\u7edf\u652f\u6301\u6570\u636e\u9884\u8bfb\u548c\u9884\u70ed"),(0,a.kt)("h4",{id:"\u652f\u6301\u9884\u8bfbprefetch"},"\u652f\u6301\u9884\u8bfb\uff08Prefetch\uff09"),(0,a.kt)("p",null,"\u5373\u5728\u6570\u636e\u8bbf\u95ee\u65f6\uff0c\u53ef\u4ee5\u5c06\u6587\u4ef6\u8d85\u8fc7\u8bbf\u95ee\u957f\u5ea6\u5916\u7684\u6570\u636e\u63d0\u524d\u8bfb\u5165\u7f13\u5b58\u3002"),(0,a.kt)("h4",{id:"\u652f\u6301\u9884\u70edwarmup"},"\u652f\u6301\u9884\u70ed\uff08warmup\uff09"),(0,a.kt)("p",null,"AI\u7528\u6237\u53ef\u4ee5\u5728\u8bad\u7ec3\u524d\u5c06\u4e91\u7aef\u6570\u636e\u6309\u9700\u62f7\u8d1d\u5230\u6307\u5b9a\u7684\u4efb\u610f\u7f13\u5b58\u5c42\u3002\u8fd9\u6837\uff0c\u5728\u540e\u7eed\u8bbf\u95ee\u65f6\u53ef\u4ee5\u63d0\u4f9b\u66f4\u597d\u7684\u6027\u80fd\uff0c\u5927\u5927\u8282\u7701\u8bad\u7ec3\u65f6\u95f4\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"curvefs warmup",src:r(1720).Z,width:"821",height:"459"})),(0,a.kt)("h2",{id:"\u4e09\u9879\u76ee\u5f71\u54cd\u529b\u548c\u4ea7\u51fa\u4ef7\u503c"},"\u4e09\u3001\u9879\u76ee\u5f71\u54cd\u529b\u548c\u4ea7\u51fa\u4ef7\u503c"),(0,a.kt)("h3",{id:"\u4e3a\u4e1a\u52a1\u964d\u672c\u63d0\u6548"},"\u4e3a\u4e1a\u52a1\u964d\u672c\u63d0\u6548"),(0,a.kt)("p",null,"\u676d\u7814\u591a\u5a92\u4f53\u56e2\u961f AI \u4e1a\u52a1\u4f7f\u7528\u4e09\u526f\u672c Ceph \u5185\u6838\u6587\u4ef6\u5b58\u50a8\u6765\u652f\u6491AI\u573a\u666f\uff0c\u5305\u62ec\u901a\u7528\u3001AI\u76f8\u5173\u7684\u5404\u79cd\u6d41\u7a0b\u3002AI \u4e1a\u52a1\u5b58\u50a8\u7684\u6570\u636e\u91cf\u662f\u5de8\u5927\u7684\uff0c\u4f46\u5176\u4e2d 80% \u90fd\u662f\u51b7\u6570\u636e\uff0c\u4f7f\u7528\u4e09\u526f\u672c\u5b58\u50a8\u6210\u672c\u5f88\u9ad8\u3002\u4e1a\u52a1\u671f\u671b\u627e\u4e00\u4e2a\u6587\u4ef6\u7cfb\u7edf\u66ff\u6362 Ceph\uff0c\u5728\u4fdd\u8bc1\u6027\u80fd\u7684\u540c\u65f6\u80fd\u591f\u964d\u4f4e\u5b58\u50a8\u6210\u672c\u3002"),(0,a.kt)("p",null,"\u540c\u6837 Curve\u5171\u4eab\u6587\u4ef6\u5b58\u50a8\u7cfb\u7edf\u53ef\u4ee5\u65e0\u7f1d\u63a5\u5165\u4e1a\u52a1\uff0c\u76ee\u524d\u676d\u7814\u591a\u5a92\u4f53 AI \u4e1a\u52a1\u5df2\u5168\u91cf\u8fc1\u5165 Curve\u5171\u4eab\u6587\u4ef6\u5b58\u50a8\u7cfb\u7edf\uff0c\u4e1a\u52a1\u4f7f\u7528\u540e\u7684\u6536\u76ca\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6210\u672c\u4e0b\u964d\uff1aCurve\u5171\u4eab\u6587\u4ef6\u5b58\u50a8\u7cfb\u7edf \u540e\u7aef\u63a5\u5165 NOS\u4f4e\u9891\u5b58\u50a8\uff0c\u76f8\u6bd43\u526f\u672c\u5b58\u50a8\u6bcf\u5e74\u6bcf PB \u6570\u636e\u5b58\u50a8\u53ef\u8282\u7ea640%\u6210\u672c"),(0,a.kt)("li",{parentName:"ul"},"\u6027\u80fd\u6536\u76ca\uff1a\u5728\u901a\u7528\u573a\u666f Curve\u5171\u4eab\u6587\u4ef6\u5b58\u50a8\u7cfb\u7edf\u6027\u80fd\u548c Ceph \u5185\u6838\u6587\u4ef6\u7cfb\u7edf\u5dee\u4e0d\u591a\u6301\u5e73\uff0c\u5728 AI \u5b58\u50a8\u5bc6\u96c6\u578b\u7684\u7279\u5f81\u63d0\u53d6\u548c\u90e8\u5206\u7279\u5f81\u8bad\u7ec3\u573a\u666f\u6027\u80fd\u63d0\u534730%+\uff0c\u8ba1\u7b97\u5bc6\u96c6\u578b\u7279\u5f81\u8bad\u7ec3\u573a\u666f\u6027\u80fd\u548cCeph\u5185\u6838\u6587\u4ef6\u7cfb\u7edf\u6301\u5e73\u3002\u5c24\u5176\u662f\u5728\u6602\u8d35\u7684GPU\u8282\u70b9\u4e0a\uff0c\u5b58\u50a8\u6027\u80fd\u63d0\u5347\u53ef\u4ee5\u5e26\u6765\u66f4\u9ad8\u7684GPU\u5229\u7528\u6548\u7387\uff0c\u4ece\u800c\u964d\u4f4e\u8bad\u7ec3\u6210\u672c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u5347\u8bad\u7ec3\u4efb\u52a1\u5e76\u53d1\u5ea6\uff1a\u4f7f\u7528Ceph\u6587\u4ef6\u7cfb\u7edf\u4f5c\u4e3aAI\u8bad\u7ec3\u6570\u636e\u96c6\u5b58\u50a8\u540e\u7aef\u65f6\uff0c\u6240\u6709\u6570\u636e\u9700\u8981\u5b9e\u65f6\u4ece\u5b58\u50a8\u540e\u7aef\u8bfb\u53d6\uff0c\u4e00\u65e6\u4e1a\u52a1\u6709\u591a\u4e2aAI\u4efb\u52a1\u9700\u8981\u5e76\u53d1\u6267\u884c\uff0c\u5c31\u4f1a\u5bfc\u81f4Ceph\u6587\u4ef6\u7cfb\u7edf\u5b58\u50a8\u540e\u7aef\u8d1f\u8f7d\u8d85\u51fa\u96c6\u7fa4\u603b\u80fd\u529b\uff0c\u6700\u7ec8\u5bfc\u81f4\u8bad\u7ec3\u4efb\u52a1\u8017\u65f6\u5927\u5927\u62c9\u957f\u3002Curve\u5171\u4eab\u6587\u4ef6\u5b58\u50a8\u7cfb\u7edf\u901a\u8fc7\u5229\u7528\u591a\u7ea7\u7f13\u5b58\u52a0\u901f\u80fd\u529b\uff0c\u5927\u90e8\u5206\u8bad\u7ec3\u6570\u636e\u53ea\u9700\u8981\u4ece\u5b58\u50a8\u540e\u7aef\u8bfb\u53d6\u4e00\u6b21\u5373\u53ef\u7f13\u5b58\u5230\u672c\u5730\u6216\u5206\u5e03\u5f0f\u7f13\u5b58\u96c6\u7fa4\uff0c\u4ece\u800c\u964d\u4f4e\u5bf9\u5b58\u50a8\u540e\u7aef\u7684\u6027\u80fd\u9700\u6c42\uff0c\u628a\u8d1f\u8f7d\u5206\u6563\u5230\u8bad\u7ec3\u8282\u70b9\u6216\u5206\u5e03\u5f0f\u7f13\u5b58\u96c6\u7fa4\uff0c\u6781\u5927\u63d0\u5347\u8bad\u7ec3\u4efb\u52a1\u7684\u5e76\u53d1\u5ea6\uff0c\u51cf\u5c11\u591a\u4e2a\u8bad\u7ec3\u4efb\u52a1\u4e4b\u95f4\u7684\u4e92\u76f8\u5f71\u54cd\u3002")),(0,a.kt)("p",null,"\u53e6\u5916\u4e91\u97f3\u4e50\u5e7f\u544a\u7b97\u6cd5\u56e2\u961fAI\u4e1a\u52a1\u4e5f\u5df2\u7ecf\u843d\u5730\u4f7f\u7528Curve\u5171\u4eab\u6587\u4ef6\u5b58\u50a8\u7cfb\u7edf\uff0c\u7a33\u5b9a\u8fd0\u884c\u534a\u5e74\u591a\u3002"),(0,a.kt)("p",null,"Curve\u5171\u4eab\u6587\u4ef6\u5b58\u50a8\u7cfb\u7edf\u4e0d\u4ec5\u9002\u7528\u4e8eAI\u4e1a\u52a1\u573a\u666f\uff0c\u8fd8\u9002\u7528\u4e8eElasticSearch\u7b49\u5927\u6570\u636e\u5b58\u50a8\u5206\u6790\u4e1a\u52a1\u573a\u666f\uff0c\u76ee\u524d\u4e5f\u5728\u591a\u4e2a\u96c6\u56e2\u5185\u90e8\u4e1a\u52a1\u573a\u666f\u843d\u5730\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"\u56db\u9879\u76ee\u672a\u6765\u89c4\u5212\u548c\u5c55\u671b"},"\u56db\u3001\u9879\u76ee\u672a\u6765\u89c4\u5212\u548c\u5c55\u671b"),(0,a.kt)("p",null,"Curve \u662f\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\uff08\u5305\u62ec\u5171\u4eab\u6587\u4ef6\u5b58\u50a8\u548c\u5757\u5b58\u50a8\u4e24\u4e2a\u5b50\u9879\u76ee\uff09\uff0c\u4e0d\u4ec5\u670d\u52a1\u4e8e\u7f51\u6613\u5185\u90e8\uff0c\u4e5f\u670d\u52a1\u4e8e\u5916\u90e8\u7528\u6237\uff0c\u5f53\u524d\u5916\u90e8\u4ecd\u7136\u5b58\u5728\u5927\u91cf\u7684 AI \u4e1a\u52a1\u573a\u666f\u4e0b\u7684\u5b58\u50a8\u9700\u6c42\uff0c\u76ee\u524d Curve\u5171\u4eab\u6587\u4ef6\u5b58\u50a8\u7cfb\u7edf\u5728 AI \u573a\u666f\u4e0b\u7684\u843d\u5730\uff0c\u5df2\u8bc1\u660e\u5176\u5728\u8be5\u573a\u666f\u4e0b\u7684\u6027\u4ef7\u6bd4\u4f18\u52bf\uff0c\u66f4\u6709\u5229\u4e8e\u540e\u7eed\u5728\u8be5\u573a\u666f\u4e0b\u7684\u63a8\u5e7f\u3002"),(0,a.kt)("p",null,"Curve \u4f5c\u4e3a\u4e00\u4e2a\u5e74\u8f7b\u7684\u6587\u4ef6\u7cfb\u7edf\uff0c\u4ecd\u5728\u5feb\u901f\u8fed\u4ee3\u53d1\u5c55\u4e2d\uff0c\u540e\u7eed\u5c06\u7ee7\u7eed\u805a\u7126\u5728 AI \u3001\u5927\u6570\u636e\u5b58\u50a8\u7b49\u573a\u666f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u548c AI \u6846\u67b6\u7684\u878d\u5408\uff1a\u505a\u5230\u2f83\u52a8\u9884\u70ed\u3001\u8bad\u7ec3\u8282\u70b9\u548c\u7f13\u5b58\u8282\u70b9\u7684\u4eb2\u548c\u6027\u8c03\u5ea6\u3001\u4e0e\u5404\u7c7b\u7b97\u6cd5\u5e73\u53f0\u7684\u6df1\u5ea6\u878d\u5408\u7b49\uff0c\u8fdb\u4e00\u6b65\u63d0\u5347AI\u8bad\u7ec3\u573a\u666f\u4e0b\u7684\u6613\u7528\u6027\u548c\u6027\u80fd\u8868\u73b0"),(0,a.kt)("li",{parentName:"ul"},"\u2f24\u6570\u636e\u548c AI \u7684\u878d\u5408\uff1a\u63d0\u4f9b HDFS \u63a5\u2f1d\uff0c\u4f7f\u2f64 Curve\u5171\u4eab\u6587\u4ef6\u5b58\u50a8\u7cfb\u7edf\u5373\u53ef\u4ee5\u2f64\u5728\u6570\u636e\u2f63\u4ea7\u6536\u96c6\u4e5f\u53ef\u4ee5\u2f64\u4e8e\u540e\u7eed\u5904\u7406\u548c\u8bad\u7ec3"),(0,a.kt)("li",{parentName:"ul"},"\u63a8\u52a8\u5728\u66f4\u591a\u4e1a\u52a1\u573a\u666f\u7684\u843d\u5730")))}v.isMDXComponent=!0},4096:(e,t,r)=>{r.d(t,{Z:()=>l});const l=r.p+"assets/images/curvefs-arch-v2-04d6725115ee4a33aae09c8ab0af7201.webp"},3184:(e,t,r)=>{r.d(t,{Z:()=>l});const l=r.p+"assets/images/curvefs-data-cache-arch-856d05060fcc8fadbeda09024859409d.webp"},6231:(e,t,r)=>{r.d(t,{Z:()=>l});const l=r.p+"assets/images/curvefs-meta-arch-24bc47886dd26fa64f61d477c3e04051.webp"},8614:(e,t,r)=>{r.d(t,{Z:()=>l});const l=r.p+"assets/images/curvefs-meta-cache-arch-934896ba5bcfffe7fe92455d8aa251ff.webp"},1720:(e,t,r)=>{r.d(t,{Z:()=>l});const l=r.p+"assets/images/curvefs-warmup-557fa09de4aeb6d75d2d4fd859dec918.webp"}}]);