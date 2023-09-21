"use strict";(self.webpackChunkcurve_book=self.webpackChunkcurve_book||[]).push([[490],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},i=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},v="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),v=p(t),d=a,m=v["".concat(c,".").concat(d)]||v[d]||s[d]||l;return t?n.createElement(m,o(o({ref:r},i),{},{components:t})):n.createElement(m,o({ref:r},i))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u[v]="string"==typeof e?e:a,o[1]=u;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7415:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const l={},o="\u79bb\u7ebf\u90e8\u7f72\u6587\u6863",u={unversionedId:"CurveFS/deploy/offline-deploy",id:"CurveFS/deploy/offline-deploy",title:"\u79bb\u7ebf\u90e8\u7f72\u6587\u6863",description:"\u79bb\u7ebf\u73af\u5883\u51c6\u5907",source:"@site/docs/03-CurveFS/02-deploy/02-offline-deploy.md",sourceDirName:"03-CurveFS/02-deploy",slug:"/CurveFS/deploy/offline-deploy",permalink:"/CurveFS/deploy/offline-deploy",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CurveFS \u5feb\u901f\u4f53\u9a8c",permalink:"/CurveFS/deploy/quickstart"},next:{title:"\u9759\u6001PV\u914d\u7f6e",permalink:"/CurveFS/deploy/static-pv"}},c={},p=[{value:"\u79bb\u7ebf\u73af\u5883\u51c6\u5907",id:"\u79bb\u7ebf\u73af\u5883\u51c6\u5907",level:2},{value:"Curve\u955c\u50cf\u51c6\u5907",id:"curve\u955c\u50cf\u51c6\u5907",level:3},{value:"\u672c\u5730\u955c\u50cf\u4ed3\u5e93\u642d\u5efa",id:"\u672c\u5730\u955c\u50cf\u4ed3\u5e93\u642d\u5efa",level:3},{value:"\u4fee\u6539\u955c\u50cf\u5730\u5740",id:"\u4fee\u6539\u955c\u50cf\u5730\u5740",level:3},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u5b89\u88c5CurveAdm",id:"\u5b89\u88c5curveadm",level:3},{value:"\u4e3b\u673a\u914d\u7f6e",id:"\u4e3b\u673a\u914d\u7f6e",level:3},{value:"Curve\u670d\u52a1\u7aef\u90e8\u7f72",id:"curve\u670d\u52a1\u7aef\u90e8\u7f72",level:3},{value:"client\u7aef\u90e8\u7f72",id:"client\u7aef\u90e8\u7f72",level:3}],i={toc:p},v="wrapper";function s(e){let{components:r,...t}=e;return(0,a.kt)(v,(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u79bb\u7ebf\u90e8\u7f72\u6587\u6863"},"\u79bb\u7ebf\u90e8\u7f72\u6587\u6863"),(0,a.kt)("h2",{id:"\u79bb\u7ebf\u73af\u5883\u51c6\u5907"},"\u79bb\u7ebf\u73af\u5883\u51c6\u5907"),(0,a.kt)("h3",{id:"curve\u955c\u50cf\u51c6\u5907"},"Curve\u955c\u50cf\u51c6\u5907"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u62c9\u53d6\u955c\u50cf\nCurve\u5b98\u65b9\u955c\u50cf\uff08\u5982",(0,a.kt)("inlineCode",{parentName:"li"},"opencurve/curve/curvefs:v2.4"),"\uff09\u5230\u672c\u5730\u73af\u5883\uff08\u53ef\u8bbf\u95ee\u5916\u7f51\u7684\u673a\u5668\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo docker pull opencurve/curve/curvefs:v2.4\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5bfc\u51fa\u955c\u50cf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u4e0b\u8f7d\u5230\u7684Curve\u955c\u50cf\n$ sudo docker image ls\nopencurve/curve/curvefs  v2.4  5717f16d4bec   1 months ago   1.84GB\n\n# \u5bfc\u51fa\u955c\u50cf\n$ sudo  docker save -o curve_v2.4.tar 5717f16d4bec\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u62f7\u8d1d\u955c\u50cf\u5230\u672c\u5730\u4ed3\u5e93\u8282\u70b9")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ scp curve_v2.4.tar  ${desthost}:/path/to/save/image\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u5bfc\u5165\u955c\u50cf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker load --input curve_v2.4.tar\n\n# \u67e5\u770b\u5bfc\u5165\u7684\u955c\u50cf\n$ sudo  docker image ls \nopencurve/curve/curvefs  v2.4  5717f16d4bec   1 months ago   1.84GB\n")),(0,a.kt)("h3",{id:"\u672c\u5730\u955c\u50cf\u4ed3\u5e93\u642d\u5efa"},"\u672c\u5730\u955c\u50cf\u4ed3\u5e93\u642d\u5efa"),(0,a.kt)("p",null,"\u4f7f\u7528docker-registry\u6765\u8fdb\u884c\u672c\u5730\u4ed3\u5e93\u7684\u642d\u5efa\uff0c\u642d\u5efa\u5b8c\u672c\u5730\u4ed3\u5e93\u540e, \u628a\u524d\u9762\u6b65\u9aa4\u4e2d\u4e0b\u8f7d\u7684Curve\u955c\u50cf\u4e0a\u4f20\u5230\u672c\u5730\u4ed3\u5e93\u3002\u4e3b\u8981\u6709\u4ee5\u4e0b\u51e0\u6b65\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8fd0\u884c docker-registry")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run -d -p 5000:5000 --restart=always --name registry registry\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u6807\u8bb0Curve\u955c\u50cf\n\u6807\u8bb0\u4e0b\u8f7d\u5230\u7684Curve\u955c\u50cf\uff0c\u6bd4\u5982\u628a\u4e0b\u8f7d\u6765\u7684\u955c\u50cf\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"opencurve/curve/curvefs:v2.4"),"\uff09\u6807\u8bb0\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1:5000/curvefs:v2.4_local"),"\uff08\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1"),"\u4e3a\u672c\u5730\u4ed3\u5e93\u670d\u52a1IP\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"5000"),"\u4e3a\u672c\u5730\u4ed3\u5e93\u670d\u52a1\u7aef\u53e3\u53f7\uff0c\u8bf7\u6839\u636e\u5b9e\u9645\u73af\u5883\u4fee\u6539\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u4e0b\u8f7d\u5230\u7684Curve\u955c\u50cf\n$ sudo  docker image ls \nopencurve/curve/curvefs  v2.4  5717f16d4bec   1 months ago   1.84GB\n\n# \u6807\u8bb0\u955c\u50cf\n$ sudo docker tag opencurve/curve/curvefs:v2.4  127.0.0.1:5000/curvefs:v2.4_local\n\n# \u67e5\u770b\u6807\u8bb0\u5b8c\u7684\u955c\u50cf\n$ sudo  docker image ls\n 127.0.0.1:5000/curvefs                           v2.4_local                       5717f16d4bec   13 months ago   1.84GB\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u4e0a\u4f20\u955c\u50cf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker push 127.0.0.1:5000/curvefs:v2.4_local\n")),(0,a.kt)("p",null,"\u66f4\u591a\u8be6\u60c5\u53ef\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://yeasy.gitbook.io/docker_practice/repository/registry"},"\u79c1\u6709\u4ed3\u5e93\u642d\u5efa")),(0,a.kt)("h3",{id:"\u4fee\u6539\u955c\u50cf\u5730\u5740"},"\u4fee\u6539\u955c\u50cf\u5730\u5740"),(0,a.kt)("p",null,"\u4fee\u6539\u5ba2\u6237\u7aef\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"client.yaml"),"\u4ee5\u53ca\u670d\u52a1\u7aef\u96c6\u7fa4\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"topology.yaml"),"\u4e2d\u7684\u955c\u50cf\u5730\u5740\u914d\u7f6e\u9879\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"container_image"),"\uff09\u4e3a\u672c\u5730\u4ed3\u5e93\u955c\u50cf\u5730\u5740\uff08\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:5000/curvefs:v2.4_local"),"\uff09"),(0,a.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,a.kt)("h3",{id:"\u5b89\u88c5curveadm"},"\u5b89\u88c5CurveAdm"),(0,a.kt)("p",null,"CurveAdm\u662fCurve\u90e8\u7f72\u5de5\u5177\uff0c\u6709\u5916\u7f51\u7684\u673a\u5668\u53ef\u4ee5\u4e00\u952e\u5b89\u88c5\uff0c\u5177\u4f53\u5b89\u88c5\u53c2\u89c1",(0,a.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curveadm/wiki/install-curveadm#%E5%AE%89%E8%A3%85-curveadm"},"CurveAdm\u5b89\u88c5")),(0,a.kt)("p",null,"\u4f46\u7531\u4e8e\u672c\u6587\u662f\u4ecb\u7ecd\u5185\u7f51\u73af\u5883\u7684\u90e8\u7f72\uff0c\u6240\u4ee5\u9700\u6309\u5982\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u8f7dCurveAdm\u5230\u672c\u5730\u53ef\u8bbf\u95ee\u5916\u7f51\u673a\u5668\uff0c\u4e0b\u8f7d\u5730\u5740\uff08\u6700\u65b0\u7248\u672c\u53ef\u54a8\u8be2Curve\u793e\u533a\u6210\u5458\uff09\uff1a ",(0,a.kt)("a",{parentName:"li",href:"https://curveadm.nos-eastchina1.126.net/release/curveadm-v0.2.0.tar.gz"},"CurveAdm")," "),(0,a.kt)("li",{parentName:"ul"},"\u628aCurveAdm\u62f7\u8d1d\u5230\u5185\u7f51\u5b89\u88c5\u9700\u90e8\u7f72Curve\u96c6\u7fa4\u7684\u4e3b\u63a7\u673a"),(0,a.kt)("li",{parentName:"ul"},"\u89e3\u538bCurveAdm"),(0,a.kt)("li",{parentName:"ul"},"\u62f7\u8d1d\u6267\u884c\u7a0b\u5e8f\u5e76\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ mv curveadm ~/.curveadm\n\n# \u53ef\u8003\u8651\u66f4\u65b0\u5230~/.bash_profile\u8fdb\u884c\u6301\u4e45\u5316\n$ export PATH=~/.curveadm/bin:$PATH\n")),(0,a.kt)("h3",{id:"\u4e3b\u673a\u914d\u7f6e"},"\u4e3b\u673a\u914d\u7f6e"),(0,a.kt)("p",null,"\u914d\u7f6eCurve\u96c6\u7fa4\u8981\u4f7f\u7528\u7684\u670d\u52a1\u5668\u5217\u8868\uff0c\u63d0\u4ea4\u5217\u8868\u7ed9CurveAdm\u7ba1\u7406\u3002\u4e3b\u673a\u914d\u7f6e\u8fc7\u7a0b\u6bd4\u8f83\u7b80\u5355\uff0c\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"hosts.yaml"),"\u4e2d\u6dfb\u52a0\u5b9e\u9645\u4e3b\u673a\u540d\u548cip\uff0c\u7136\u540e\u63d0\u4ea4\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,a.kt)("p",null,"\u5177\u4f53\u914d\u7f6e\u53c2\u8003\u6587\u6863\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curveadm/wiki/hosts#%E4%B8%BB%E6%9C%BA%E9%85%8D%E7%BD%AE"},"\u4e3b\u673a\u7ba1\u7406")),(0,a.kt)("h3",{id:"curve\u670d\u52a1\u7aef\u90e8\u7f72"},"Curve\u670d\u52a1\u7aef\u90e8\u7f72"),(0,a.kt)("p",null,"\u9700\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"topology.yaml"),"\u4e2d\u7684\u955c\u50cf\u4e3a\u672c\u5730\u955c\u50cf\u5730\u5740\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: curvefs\nglobal:\n  container_image: 127.0.0.1:5000/curvefs:v2.4_local  ## \u4fee\u6539\u4e3a\u672c\u5730\u955c\u50cf\n")),(0,a.kt)("p",null,"\u5176\u4ed6\u7684\u914d\u7f6e\u9879\u8bf7\u53c2\u8003\u6587\u6863 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curveadm/wiki/curvefs-cluster-deployment"},"CurveFS\u96c6\u7fa4\u90e8\u7f72")," \u6216 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curveadm/wiki/curvebs-cluster-deployment"},"CurveBS\u96c6\u7fa4\u90e8\u7f72")),(0,a.kt)("h3",{id:"client\u7aef\u90e8\u7f72"},"client\u7aef\u90e8\u7f72"),(0,a.kt)("p",null,"\u9700\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"client.yaml"),"\u4e2d\u7684\u955c\u50cf\u4e3a\u672c\u5730\u955c\u50cf\u5730\u5740\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: curvefs\nglobal:\n  container_image: 127.0.0.1:5000/curvefs:v2.4_local ## \u4fee\u6539\u4e3a\u672c\u5730\u955c\u50cf\n")),(0,a.kt)("p",null,"\u5176\u4ed6\u7684\u914d\u7f6e\u9879\u8bf7\u53c2\u8003\u6587\u6863 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curveadm/wiki/curvefs-client-deployment"},"\u90e8\u7f72CurveFS\u5ba2\u6237\u7aef")," \u6216 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curveadm/wiki/curvebs-client-deployment"},"\u90e8\u7f72CurveBS\u5ba2\u6237\u7aef")))}s.isMDXComponent=!0}}]);