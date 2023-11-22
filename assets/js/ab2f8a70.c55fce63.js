"use strict";(self.webpackChunkcurve_book=self.webpackChunkcurve_book||[]).push([[1644],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>N});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,N=m["".concat(i,".").concat(k)]||m[k]||u[k]||o;return n?a.createElement(N,l(l({ref:t},c),{},{components:n})):a.createElement(N,l({ref:t},c))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},l="Curve \u4fee\u6539snapshotclone\u914d\u7f6e",p={unversionedId:"CurveBS/maintenance/administrator-guide/curvebs-controlpanel-config-snapshot",id:"CurveBS/maintenance/administrator-guide/curvebs-controlpanel-config-snapshot",title:"Curve \u4fee\u6539snapshotclone\u914d\u7f6e",description:"1. \u9002\u7528\u73af\u5883:",source:"@site/docs/02-CurveBS/07-maintenance/02-administrator-guide/21-curvebs-controlpanel-config-snapshot.md",sourceDirName:"02-CurveBS/07-maintenance/02-administrator-guide",slug:"/CurveBS/maintenance/administrator-guide/curvebs-controlpanel-config-snapshot",permalink:"/CurveBS/maintenance/administrator-guide/curvebs-controlpanel-config-snapshot",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Curve \u91cd\u542fsnapshotclone",permalink:"/CurveBS/maintenance/administrator-guide/curvebs-controlpanel-restart-snapshot"},next:{title:"Curve \u5347\u7ea7snapshotclone",permalink:"/CurveBS/maintenance/administrator-guide/curvebs-controlpanel-upgrade-snapshot"}},i={},s=[],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"curve-\u4fee\u6539snapshotclone\u914d\u7f6e"},"Curve \u4fee\u6539snapshotclone\u914d\u7f6e"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9002\u7528\u73af\u5883:"),(0,r.kt)("li",{parentName:"ol"},"\u7248\u672c\u53f7: v1.2.6+"),(0,r.kt)("li",{parentName:"ol"},"CurveAdm\u7248\u672c\uff1av0.2.0+"),(0,r.kt)("li",{parentName:"ol"},"\u6700\u540e\u66f4\u65b0\u65e5\u671f: 2023/09/30"),(0,r.kt)("li",{parentName:"ol"},"\u5c42\u9762: \u7ba1\u63a7\u9762"),(0,r.kt)("li",{parentName:"ol"},"\u8fd0\u7ef4\u7ea7\u522b: P1"),(0,r.kt)("li",{parentName:"ol"},"\u6240\u5c5e\u4ea7\u54c1: \u5b58\u50a8"),(0,r.kt)("li",{parentName:"ol"},"\u9700\u6c42\u660e\u7ec6: \u8282\u70b9\u540d\u79f0\uff0c\u5177\u4f53\u7684snapshotclone\u670d\u52a1"),(0,r.kt)("li",{parentName:"ol"},"\u9a8c\u6536\u6807\u51c6: \u6307\u5b9a\u7684snapshotclone\u670d\u52a1\u542f\u52a8\u6210\u529f\uff0c\u96c6\u7fa4\u5065\u5eb7"),(0,r.kt)("li",{parentName:"ol"},"\u53c2\u8003\u6b65\u9aa4:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"1. \u9700\u8981\u5148\u786e\u8ba4\u5f53\u524d\u96c6\u7fa4\u662f\u5426\u5065\u5eb7\uff1a\n   $ curve bs status cluster\n   \u7ed3\u679c\u8f93\u51fa\u6709\u4e0b\u9762\u5b57\u6837\u5219\u96c6\u7fa4\u5065\u5eb7\uff1aCluster health is:  ok\n   \n   \u6ce8\uff1a1. \u96c6\u7fa4\u5065\u5eb7\uff08ok\uff09\uff1a\u5982\u679c\u96c6\u7fa4\u5065\u5eb7\uff0c\u7ee7\u7eed\u6267\u884c\u540e\u7eed\u6b65\u9aa4\u3002\u91cd\u542f\u5f53\u524d\u670d\u52a1\u540e\u9700\u786e\u4fdd\u96c6\u7fa4\u4ecd\u662f\u5065\u5eb7\u72b6\u6001\u3002\n      2. \u96c6\u7fa4\u5f02\u5e38\uff08warn/error\uff09\uff1a\n         \u4f7f\u7528\u5de5\u5177\u67e5\u770b\u662f\u5426\u662fsnapshotclone\u5f02\u5e38\uff1a\n         $ curve bs status snapshotclone\n         2.1 \u5982\u679c\u662f\u5f53\u524d\u8981\u91cd\u542f\u7684\u670d\u52a1\u5bfc\u81f4\u7684\u5f02\u5e38\uff08warn/error\uff09\u5e76\u5e0c\u671b\u901a\u8fc7\u4fee\u6539\u914d\u7f6e\u6062\u590d\uff0c\u5219\u7ee7\u7eed\u6267\u884c\u540e\u7eed\u6b65\u9aa4\u3002\u4f46\u91cd\u542f\u4e4b\u540e\u4e0d\u80fd\u4fdd\u8bc1\u96c6\u7fa4\u662f\u5065\u5eb7\u72b6\u6001\u3002\n         2.2 \u5982\u679c\u5f53\u524d\u8981\u91cd\u542f\u7684\u670d\u52a1\u6b63\u5e38\uff0c\u5176\u4ed6\u7684\u670d\u52a1\u5f02\u5e38\u5bfc\u81f4\u7684\u96c6\u7fa4\u4e0d\u5065\u5eb7\uff0c\u5219\u7ee7\u7eed\u6267\u884c\u540e\u7eed\u6b65\u9aa4\u3002\u4f46\u662f\u91cd\u542f\u5f53\u524d\u670d\u52a1\u540e\u96c6\u7fa4\u4ecd\u7136\u5904\u4e8e\u4e0d\u5065\u5eb7\u72b6\u6001\u3002\n   \n2. \u5907\u4efd\u672c\u5730\u96c6\u7fa4\u62d3\u6251\u6587\u4ef6\uff1a\n   $ cp topology.yaml topology-old.yaml\n\n   \u6ce8\uff1a\u5f53\u672c\u5730\u62d3\u6251\u6587\u4ef6\u4e22\u5931\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u4fdd\u5b58\u5f53\u524d\u7684\u96c6\u7fa4\u62d3\u6251\u6765\u6062\u590d\uff1a\n   $ curveadm config show > topology.yaml\n\n3. \u7f16\u8f91\u672c\u5730\u96c6\u7fa4\u62d3\u6251\u6587\u4ef6\uff0c\u5728\u62d3\u6251\u6587\u4ef6\u4e2d\u589e\u52a0/\u5220\u9664/\u4fee\u6539snapshotclone\u670d\u52a1\u7684\u914d\u7f6e\u9879\uff1a\n   $ vim topology.yaml\n   \n4. \u63d0\u4ea4\u4fee\u6539\u7684\u96c6\u7fa4\u62d3\u6251:\n   $ curveadm config commit topology.yaml\n   \n5. \u91cd\u65b0\u52a0\u8f7d\u670d\u52a1\uff1a\n   $ curveadm reload --role snapshotclone\n   \n   CurveAdm \u4f7f\u7528\u4e0a\u8ff0\u547d\u4ee4\u9ed8\u8ba4\u91cd\u65b0\u52a0\u8f7d\u96c6\u7fa4\u4e2d\u7684\u6240\u6709 snapshotclone \u670d\u52a1\uff0c\u5982\u9700\u91cd\u65b0\u52a0\u8f7d\u6307\u5b9a\u670d\u52a1\uff0c\u53ef\u901a\u8fc7\u6dfb\u52a0\u4ee5\u4e0b 3 \u4e2a\u9009\u9879\u6765\u5b9e\u73b0\uff1a\n\n    --id: \u91cd\u65b0\u52a0\u8f7d\u6307\u5b9a id \u7684\u670d\u52a1\n    --host: \u91cd\u65b0\u52a0\u8f7d\u6307\u5b9a\u4e3b\u673a\u7684\u6240\u6709\u670d\u52a1\n    --role: \u91cd\u65b0\u52a0\u8f7d\u6307\u5b9a\u89d2\u8272\u7684\u6240\u6709\u670d\u52a1 \n    \u4ee5\u4e0a 3 \u4e2a\u9009\u9879\u53ef\u4efb\u610f\u7ec4\u5408\u4f7f\u7528\uff0c\u670d\u52a1\u5bf9\u5e94\u7684 id\u3001host\u3001role \u53ef\u901a\u8fc7 curveadm status \u6765\u67e5\u770b\u3002\n\n    \u793a\u4f8b 1\uff1a\u91cd\u65b0\u52a0\u8f7d id \u4e3a c9570c0d0252 \u7684snapshotclone\u670d\u52a1\n    $ curveadm reload --id c9570c0d0252\n    \n    \u793a\u4f8b 2\uff1a\u91cd\u65b0\u52a0\u8f7d server-host1 \u8fd9\u53f0\u4e3b\u673a\u4e0a\u7684\u6240\u6709 snapshotclone \u670d\u52a1\n    $ curveadm reload --host server-host1 --role snapshotclone\n    \n    \u793a\u4f8b 3\uff1a \u91cd\u65b0\u52a0\u8f7d\u6240\u6709\u7684snapshotclone\u670d\u52a1\uff08\u9700\u786e\u8ba4\uff09\n    \u63d0\u9192\uff1a\u8be5\u64cd\u4f5c\u4f1a\u91cd\u542f\u673a\u5668\u4e2d\u7684\u6240\u6709snapshotclone\u670d\u52a1\uff0c\u6240\u4ee5\u5728\u6267\u884c\u4e0b\u5217\u64cd\u4f5c\u65f6\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4IO\u77ed\u6682\u65f6\u95f4\u7684\u6296\u52a8\u3002\n    $ curveadm reload --role snapshotclone\n   \n6. \u518d\u6b21\u67e5\u770b\u6307\u5b9a\u7684snapshotclone\u670d\u52a1\u662f\u5426\u5df2\u7ecf\u542f\u52a8\uff08Status\u4e3aUp\u72b6\u6001\uff09\uff1a\n   $ curveadm status\n\n7. \u67e5\u770b\u96c6\u7fa4\u7684\u5065\u5eb7\u72b6\u6001\uff1a\n   $ curve bs status cluster\n   \u7ed3\u679c\u8f93\u51fa\u6709\u4e0b\u9762\u5b57\u6837\u5219\u96c6\u7fa4\u5065\u5eb7\uff1aCluster health is:  ok\n\n   \u6ce8\uff1a\u5982\u679c\u96c6\u7fa4\u5728\u4fee\u6539\u6b64snaoshot\u7684\u914d\u7f6e\u4e4b\u524d\u5065\u5eb7\uff0c\u5219\u9700\u8981\u4fdd\u8bc1\u4fee\u6539\u6b64\u670d\u52a1\u914d\u7f6e\u540e\u96c6\u7fa4\u4ecd\u662f\u5065\u5eb7\u72b6\u6001\uff1b\n      \u5982\u679c\u96c6\u7fa4\u5728\u4fee\u6539\u6b64snaoshot\u670d\u52a1\u914d\u7f6e\u4e4b\u524d\u5f02\u5e38\uff0c\u5219\u6709\u4ee5\u4e0b\u4e24\u79cd\u60c5\u51b5\uff1a\n      1. \u4fee\u6539\u6b64snaoshot\u670d\u52a1\u914d\u7f6e\u4e4b\u524d\uff0c\u662f\u7531\u5f53\u524dsnaoshot\u670d\u52a1\u5bfc\u81f4\u7684\u96c6\u7fa4\u5f02\u5e38\uff0c\u5219\u4fee\u6539\u5f53\u524d\u670d\u52a1\u7684\u914d\u7f6e\u540e\u4e0d\u80fd\u4fdd\u8bc1\u96c6\u7fa4\u4ecd\u7136\u662f\u5065\u5eb7\u7684\uff0c\u662f\u7b26\u5408\u9884\u671f\u7684\u3002\n      2. \u4fee\u6539\u6b64snaoshot\u670d\u52a1\u914d\u7f6e\u4e4b\u524d\uff0c\u4e0d\u662f\u5f53\u524dsnaoshot\u670d\u52a1\u5bfc\u81f4\u7684\u96c6\u7fa4\u5f02\u5e38\uff0c\u5219\u4fee\u6539\u5f53\u524d\u670d\u52a1\u7684\u914d\u7f6e\u540e\u4ecd\u7136\u662f\u4e0d\u5065\u5eb7\u7684\u72b6\u6001\uff0c\u662f\u7b26\u5408\u9884\u671f\u7684\u3002\n")),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},"\u53c2\u8003\u5f71\u54cd:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u60c5\u51b51\uff1a\u4fee\u6539\u90e8\u5206snapshotclone\u670d\u52a1\u914d\u7f6e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u65f6\u95f4: \u65e0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e1a\u52a1\u65b9: \u65e0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f71\u54cd\u4e3b\u9898: \u65e0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7528\u6237\uff1a\u65e0")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u60c5\u51b52\uff1a\u540c\u65f6\u4fee\u6539\u6240\u6709\u7684snapshotclone\u670d\u52a1\u914d\u7f6e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u65f6\u95f4: \u5728\u6240\u6709\u7684snapshotclone\u4fee\u6539\u914d\u7f6e\u53ca\u91cd\u542f\u8fc7\u7a0b\u4e2d\uff0c\u5feb\u7167\u670d\u52a1\u4e0d\u53ef\u7528")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e1a\u52a1\u65b9: \u6240\u6709\u4f7f\u7528\u5f53\u524d\u96c6\u7fa4\u7684\u4e1a\u52a1\u65b9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f71\u54cd\u4e3b\u9898: snapshotclone\u6b63\u5728\u4fee\u6539\u914d\u7f6e\uff0c\u670d\u52a1\u91cd\u542f\u4e2d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7528\u6237\uff1a\u6240\u6709\u4f7f\u7528\u5f53\u524d\u96c6\u7fa4\u7684\u7528\u6237"))))),(0,r.kt)("ol",{start:12},(0,r.kt)("li",{parentName:"ol"},"\u53c2\u8003\u98ce\u9669")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u60c5\u51b51\uff1a\u4fee\u6539\u90e8\u5206snapshotclone\u670d\u52a1\u914d\u7f6e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6570\u636e\u9762\uff1a\u65e0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7ba1\u63a7\u9762\uff1a\u65e0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6062\u590d\u80fd\u529b\uff1a\u65e0\u9700\u6062\u590d")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u60c5\u51b52\uff1a\u540c\u65f6\u4fee\u6539\u6240\u6709\u7684snapshotclone\u670d\u52a1\u914d\u7f6e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6570\u636e\u9762\uff1a\u65e0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7ba1\u63a7\u9762\uff1a\u5feb\u7167\u670d\u52a1\u77ed\u6682\u4e0d\u53ef\u7528\uff0c\u7b49\u5f85\u914d\u7f6e\u4fee\u6539\u5b8c\u6210\u91cd\u542f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6062\u590d\u80fd\u529b\uff1a\u65e0\u9700\u6062\u590d"))))),(0,r.kt)("ol",{start:13},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u53c2\u8003\u56de\u6eda\u7b56\u7565: \u56de\u9000snapshotclone\u914d\u7f6e\u5230\u4e4b\u524d\u7684\u503c")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9700\u6c42\u53d1\u8d77\u65b9: CURVE")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u6536\u65b9:")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8bc4\u5ba1\u8d23\u4efb\u4eba: SRE\u8d1f\u8d23\u4eba\uff0cSA\u8d1f\u8d23\u4eba\uff0cCURVE\u8d1f\u8d23\u4eba")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7528\u6237\u901a\u77e5\u8d23\u4efb\u4eba: \u6280\u672f\u652f\u6301")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6267\u884c\u8d23\u4efb\u4eba: CURVE/SA")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6d4b\u8bd5\u56de\u5f52\u8d23\u4efb\u4eba: CURVE")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6267\u884c\u5ba1\u6838\u8d23\u4efb\u4eba: SA/CURVE/SRE"))))}u.isMDXComponent=!0}}]);