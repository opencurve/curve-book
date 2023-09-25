"use strict";(self.webpackChunkcurve_book=self.webpackChunkcurve_book||[]).push([[2458],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=a.createContext({}),o=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=o(r),k=l,m=s["".concat(c,".").concat(k)]||s[k]||d[k]||n;return r?a.createElement(m,u(u({ref:t},p),{},{components:r})):a.createElement(m,u({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,u=new Array(n);u[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:l,u[1]=i;for(var o=2;o<n;o++)u[o]=r[o];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},840:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>o});var a=r(7462),l=(r(7294),r(3905));const n={},u="Curvefs CSI \u9a71\u52a8\u7a0b\u5e8f",i={unversionedId:"CurveFS/deploy/csi",id:"CurveFS/deploy/csi",title:"Curvefs CSI \u9a71\u52a8\u7a0b\u5e8f",description:"\u4ecb\u7ecd",source:"@site/docs/03-CurveFS/02-deploy/06-csi.md",sourceDirName:"03-CurveFS/02-deploy",slug:"/CurveFS/deploy/csi",permalink:"/CurveFS/deploy/csi",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 CurveAdm \u90e8\u7f72\u5206\u5e03\u5f0f\u7f13\u5b58",permalink:"/CurveFS/deploy/distributed-cache"},next:{title:"\u9759\u6001PV\u914d\u7f6e",permalink:"/CurveFS/deploy/static-pv"}},c={},o=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"CSI \u5df2\u5b9e\u73b0\u63a5\u53e3",id:"csi-\u5df2\u5b9e\u73b0\u63a5\u53e3",level:2},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:2},{value:"\u901a\u8fc7 kubectl",id:"\u901a\u8fc7-kubectl",level:3},{value:"DiskCache\u914d\u7f6e\u76f8\u5173",id:"diskcache\u914d\u7f6e\u76f8\u5173",level:4},{value:"\u6784\u5efa\u72b6\u6001",id:"\u6784\u5efa\u72b6\u6001",level:2},{value:"\u5728\u5176\u4ed6k8s\u53d1\u884c\u7248\u4e0a\u4f7f\u7528",id:"\u5728\u5176\u4ed6k8s\u53d1\u884c\u7248\u4e0a\u4f7f\u7528",level:2},{value:"\u540e\u7eed\u5de5\u4f5c",id:"\u540e\u7eed\u5de5\u4f5c",level:2}],p={toc:o},s="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(s,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"curvefs-csi-\u9a71\u52a8\u7a0b\u5e8f"},"Curvefs CSI \u9a71\u52a8\u7a0b\u5e8f"),(0,l.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("p",null,"CurveFS CSI \u9a71\u52a8\u7a0b\u5e8f\u5b9e\u73b0\u5bb9\u5668\u7f16\u6392\u5668\u7684 CSI \u89c4\u8303\u6765\u7ba1\u7406 CurveFS \u6587\u4ef6\u7cfb\u7edf\u3002"),(0,l.kt)("p",null,"\u4ee3\u7801\u5e93\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curvefs-csi"},"https://github.com/opencurve/curvefs-csi")),(0,l.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kubernetes 1.18+")),(0,l.kt)("h2",{id:"csi-\u5df2\u5b9e\u73b0\u63a5\u53e3"},"CSI \u5df2\u5b9e\u73b0\u63a5\u53e3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ControllerServer: CreateVolume, DeleteVolume, ValidateVolumeCapabilities"),(0,l.kt)("li",{parentName:"ul"},"NodeServer: NodePublishVolume, NodeUnpublishVolume, NodeGetInfo, NodeGetCapabilities"),(0,l.kt)("li",{parentName:"ul"},"IdentityServer: GetPluginInfo, Probe, GetPluginCapabilities")),(0,l.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,l.kt)("h3",{id:"\u901a\u8fc7-kubectl"},"\u901a\u8fc7 kubectl"),(0,l.kt)("p",null,"1.\u7ed9\u8282\u70b9\u6dfb\u52a0\u6807\u7b7e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl label node <nodename> curvefs-csi-controller=enabled\n# \u4e3a pod \u8fd0\u884c\u7684\u6240\u6709\u8282\u70b9\u6dfb\u52a0\u4ee5\u4e0b\u6807\u7b7e\nkubectl label node <nodename> curvefs-csi-node=enabled\n")),(0,l.kt)("p",null,"2.\u90e8\u7f72csi\u9a71\u52a8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f deploy/csi-driver.yaml\nkubectl apply -f deploy/csi-rbac.yaml\nkubectl apply -f deploy/csi-controller-deployment.yaml\nkubectl apply -f deploy/csi-node-daemonset.yaml\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u6ce8\u610f\uff1a\u5982\u679c\u60a8\u60f3\u542f\u7528DiskCache\uff0c\u8bf7\u9605\u8bfb\u4e0b\u9762\u7684\u76f8\u5173\u90e8\u5206\n")),(0,l.kt)("p",null,"3.\u521b\u5efastorage class\u548cpvc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u590d\u5236\u5e76\u586b\u5199 storageclass-default.yaml \u4e2d\u7684\u5f85\u586b\u5145\u9879\nkubectl apply -f storageclass.yaml\n# \u590d\u5236\u5e76\u4fee\u6539pvc-default.yaml\nkubectl apply -f pvc.yaml\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u73b0\u5728\u60a8\u53ef\u4ee5\u5c06\u6b64 pvc \u7ed1\u5b9a\u5230 pod")),(0,l.kt)("h4",{id:"diskcache\u914d\u7f6e\u76f8\u5173"},"DiskCache\u914d\u7f6e\u76f8\u5173"),(0,l.kt)("p",null,"DiskCache \u662f\u5ba2\u6237\u7aef\u4f7f\u7528\u57fa\u4e8e\u78c1\u76d8\u7684\u7f13\u5b58\u6765\u63d0\u9ad8 io \u6027\u80fd\u3002"),(0,l.kt)("p",null,"\u5982\u679cclient\u9700\u8981\u5f00\u542fdiskcache\u5e76\u4f7f\u7528\u5bbf\u4e3b\u673a\u989d\u5916\u7684\u786c\u76d8\u6216\u4e91\u76d8\uff0c\u9700\u8981\u5728csi driver\u90e8\u7f72\u4e4b\u524d\u5148\u628a\u4e91\u76d8\u6216\u8005\u672c\u5730\u76d8\u6302\u8f7d\u597d\u3002\u4e4b\u540e\u683c\u5f0f\u5316\u786c\u76d8\u6216\u4e91\u76d8\u7136\u540emount\u5230\u4e00\u4e2apath\uff08\u5982/data/curvefs-diskcache\uff09\uff0c\u7136\u540e\u901a\u8fc7hostpath\u7684\u65b9\u5f0f\u6620\u5c04\u8fdbcsi\u7684daemonset pod\u91cc\u7684/curvefs/client/data/cache\u8def\u5f84\uff0c\u914d\u7f6e\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u8fd9\u4e2ayaml\uff1a"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curvefs-csi/blob/main/deploy/csi-node-daemonset-enable-cache.yaml"},"https://github.com/opencurve/curvefs-csi/blob/main/deploy/csi-node-daemonset-enable-cache.yaml")),(0,l.kt)("p",null,"\u4e0a\u8ff0\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 /data/curvefs-diskcache \u5bf9\u5e94\u7684\u5c31\u662f\u4e0a\u9762\u914d\u7f6e\u7684\u7f13\u5b58\u76d8\u76ee\u5f55\uff0c\u53ef\u4ee5\u4fee\u6539\u4e3a\u81ea\u5df1\u81ea\u5b9a\u4e49\u7684\u8def\u5f84\u540d\u79f0\u3002"),(0,l.kt)("p",null,"\u4e4b\u540e\u5c06\u201cdiskCache.diskCacheType=2\u201d\u6216\u201cdiskCache.diskCacheType=1\u201d\u6dfb\u52a0\u5230storageclass.yaml\u7684mountOptions\u90e8\u5206\uff0c2\u8868\u793a\u5f00\u542fread\u548cwrite\u7f13\u5b58, 1\u4e3aread\u7f13\u5b58\uff0c\u9ed8\u8ba4\u4e3a0\u662f\u65e0\u7f13\u5b58\u3002"),(0,l.kt)("p",null,"\u5df2\u77e5\u95ee\u9898\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u542f\u7528discache\uff08\u7c7b\u578b=2\uff0c\u5199\u5165\uff09\u540e\uff0cmetadatasever \u4e2d\u7684\u5143\u6570\u636e\u5c06\u6bd4 s3 \u5b58\u50a8\u4e2d\u7684\u6570\u636e\u66f4\u65b0\uff0c\u5982\u679c csi \u8282\u70b9 pod \u5d29\u6e83\u4f46\u5199\u5165\u7f13\u5b58\u672a\u5b8c\u5168\u4e0a\u4f20\u5230 s3 \u5b58\u50a8\uff0c\u60a8\u53ef\u80fd\u4f1a\u4e22\u5931\u8fd9\u90e8\u5206\u6570\u636e\u3002 \u91cd\u65b0\u6302\u8f7d\u4f1a\u5d29\u6e83\uff0c\u56e0\u4e3a\u4f60\u53ea\u6709\u5143\u6570\u636e\u4f46\u6ca1\u6709\u6570\u636e\uff08\u8fd8\u6ca1\u6709\u5237\u65b0\u5230 s3\uff09\u3002")),(0,l.kt)("h2",{id:"\u6784\u5efa\u72b6\u6001"},"\u6784\u5efa\u72b6\u6001"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Curvefs CSI \u9a71\u52a8\u7a0b\u5e8f\u7248\u672c"),(0,l.kt)("th",{parentName:"tr",align:null},"CurveFS \u7248\u672c"),(0,l.kt)("th",{parentName:"tr",align:null},"CurveFS CSI \u9a71\u52a8\u7a0b\u5e8f\u6620\u50cf"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v1.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"v2.3.0-rc0"),(0,l.kt)("td",{parentName:"tr",align:null},"curvecsi/curvefscsi:v1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v1.0.1"),(0,l.kt)("td",{parentName:"tr",align:null},"v2.4.0-beta2"),(0,l.kt)("td",{parentName:"tr",align:null},"curvecsi/curvefscsi:v1.0.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v1.0.2"),(0,l.kt)("td",{parentName:"tr",align:null},"v2.5.0-beta"),(0,l.kt)("td",{parentName:"tr",align:null},"curvecsi/curvefscsi:v1.0.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v1.0.3"),(0,l.kt)("td",{parentName:"tr",align:null},"v2.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"curvecsi/curvefscsi:v1.0.3")))),(0,l.kt)("p",null,"\u66f4\u591a\u7248\u672c\u8bf7\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curvefs-csi/blob/main/README.md#build-status"},"https://github.com/opencurve/curvefs-csi/blob/main/README.md#build-status")),(0,l.kt)("h2",{id:"\u5728\u5176\u4ed6k8s\u53d1\u884c\u7248\u4e0a\u4f7f\u7528"},"\u5728\u5176\u4ed6k8s\u53d1\u884c\u7248\u4e0a\u4f7f\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"KubeSphere\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://www.kubesphere.io/zh/blogs/kubesphere-curve/"},"https://www.kubesphere.io/zh/blogs/kubesphere-curve/")),(0,l.kt)("li",{parentName:"ul"},"Rainbond\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://www.rainbond.com/blog/curve/"},"https://www.rainbond.com/blog/curve/"))),(0,l.kt)("h2",{id:"\u540e\u7eed\u5de5\u4f5c"},"\u540e\u7eed\u5de5\u4f5c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u66f4\u591a\u521b\u5efa/\u5b89\u88c5\u9009\u9879\u652f\u6301\uff08\u9700\u8981\u672a\u6765\u7684 CurveFS \u652f\u6301\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5c06 s3 ak/sk \u7b49\u654f\u611f\u4fe1\u606f\u79fb\u81f3secret\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u5b50\u8def\u5f84\u6302\u8f7d\u652f\u6301\uff08\u9700\u8981\u672a\u6765\u7684 CurveFS \u652f\u6301\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5c06fuse\u6302\u8f7d\u70b9\u9694\u79bb\u5230\u4e00\u4e2a\u5355\u72ec\u7684 Pod \u4e2d\uff0c\u7075\u611f\u6765\u81ea juicefs-csi"),(0,l.kt)("li",{parentName:"ul"},"\u5bb9\u91cf\u914d\u989d\u652f\u6301\uff08\u9700\u8981\u672a\u6765\u7684 CurveFS \u652f\u6301\uff09")))}d.isMDXComponent=!0}}]);