"use strict";(self.webpackChunkcurve_book=self.webpackChunkcurve_book||[]).push([[6893],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(7294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},i="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),i=c(t),m=l,d=i["".concat(u,".").concat(m)]||i[m]||v[m]||a;return t?n.createElement(d,o(o({ref:r},s),{},{components:t})):n.createElement(d,o({ref:r},s))}));function d(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=m;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p[i]="string"==typeof e?e:l,o[1]=p;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1213:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>v,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=t(7462),l=(t(7294),t(3905));const a={},o="Kubernetes \u4e0a\u90e8\u7f72 CurveFS \u96c6\u7fa4",p={unversionedId:"CurveFS/deploy/deploy-with-k8s-operator",id:"CurveFS/deploy/deploy-with-k8s-operator",title:"Kubernetes \u4e0a\u90e8\u7f72 CurveFS \u96c6\u7fa4",description:"curve-operator\u4ee3\u7801\u4ed3\u5e93\uff1ahttps://github.com/opencurve/curve-operator/blob/master/docs/readme_cn.md",source:"@site/docs/03-CurveFS/02-deploy/03-deploy-with-k8s-operator.md",sourceDirName:"03-CurveFS/02-deploy",slug:"/CurveFS/deploy/deploy-with-k8s-operator",permalink:"/CurveFS/deploy/deploy-with-k8s-operator",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7269\u7406\u673a\u90e8\u7f72 CurveFS \u96c6\u7fa4",permalink:"/CurveFS/deploy/deploy-with-curveadm"},next:{title:"\u79bb\u7ebf\u90e8\u7f72 CurveFS \u96c6\u7fa4",permalink:"/CurveFS/deploy/offline-deploy"}},u={},c=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"0. \u5148\u51b3\u6761\u4ef6",id:"0-\u5148\u51b3\u6761\u4ef6",level:3},{value:"1. \u5b89\u88c5Operator",id:"1-\u5b89\u88c5operator",level:3},{value:"2. \u90e8\u7f72Curve\u96c6\u7fa4",id:"2-\u90e8\u7f72curve\u96c6\u7fa4",level:3},{value:"3. \u68c0\u67e5\u96c6\u7fa4\u7684\u5065\u5eb7\u72b6\u6001",id:"3-\u68c0\u67e5\u96c6\u7fa4\u7684\u5065\u5eb7\u72b6\u6001",level:3},{value:"Curve CSI",id:"curve-csi",level:2},{value:"\u5220\u9664",id:"\u5220\u9664",level:2},{value:"1. \u5220\u9664\u96c6\u7fa4CR",id:"1-\u5220\u9664\u96c6\u7fa4cr",level:3},{value:"2. \u5220\u9664Operator\u4ee5\u53ca\u76f8\u5173\u7684\u8d44\u6e90",id:"2-\u5220\u9664operator\u4ee5\u53ca\u76f8\u5173\u7684\u8d44\u6e90",level:3},{value:"3. \u5220\u9664\u6301\u4e45\u5316\u5728\u5bbf\u4e3b\u673a\u7684\u6570\u636e\u548c\u65e5\u5fd7\uff08\u614e\u91cd\uff09",id:"3-\u5220\u9664\u6301\u4e45\u5316\u5728\u5bbf\u4e3b\u673a\u7684\u6570\u636e\u548c\u65e5\u5fd7\u614e\u91cd",level:3}],s={toc:c},i="wrapper";function v(e){let{components:r,...a}=e;return(0,l.kt)(i,(0,n.Z)({},s,a,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kubernetes-\u4e0a\u90e8\u7f72-curvefs-\u96c6\u7fa4"},"Kubernetes \u4e0a\u90e8\u7f72 CurveFS \u96c6\u7fa4"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"curve-operator"),"\u4ee3\u7801\u4ed3\u5e93\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curve-operator/blob/master/docs/readme_cn.md"},"https://github.com/opencurve/curve-operator/blob/master/docs/readme_cn.md")),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,"Curve-Operator\u7528\u4e8e\u7ba1\u7406 ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/home/"},"Kubernetes")," \u7cfb\u7edf\u4e0a\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curve"},"Curve")," \u96c6\u7fa4\u3002\u66f4\u8fdb\u4e00\u6b65\u5730\u652f\u6301Curve\u5b9e\u73b0\u4e91\u539f\u751f\u7684\u5206\u5e03\u5f0f\u5b58\u50a8\u7cfb\u7edf\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Curve BS deploy architecture",src:t(4687).Z,width:"1235",height:"662"})),(0,l.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,l.kt)("h3",{id:"0-\u5148\u51b3\u6761\u4ef6"},"0. \u5148\u51b3\u6761\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5Kubernetes1.19/1.20\u7248\u672c\u3002")),(0,l.kt)("h3",{id:"1-\u5b89\u88c5operator"},"1. \u5b89\u88c5Operator"),(0,l.kt)("p",null,"\u9996\u5148\u9700\u8981\u5b89\u88c5Curve Operaotr\uff0c\u7136\u540e\u518d\u90e8\u7f72 Curve \u96c6\u7fa4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/opencurve/curve-operator.git\n$ cd curve-operator\n$ kubectl apply -f config/deploy/\n")),(0,l.kt)("p",null,"\u5b89\u88c5\u6210\u529f\u540e\uff0c\u9ed8\u8ba4\u4f1a\u521b\u5efa",(0,l.kt)("inlineCode",{parentName:"p"},"curve")," namespace\uff0c\u786e\u8ba4curve-operator\u5904\u4e8eRunning\u72b6\u6001\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pod -n curve\nNAME                              READY   STATUS    RESTARTS   AGE\ncurve-operator-69bc69c75d-jfsjg   1/1     Running   0          7s\n")),(0,l.kt)("h3",{id:"2-\u90e8\u7f72curve\u96c6\u7fa4"},"2. \u90e8\u7f72Curve\u96c6\u7fa4"),(0,l.kt)("p",null,"Operator\u90e8\u7f72\u96c6\u7fa4\u57fa\u4e8e\u58f0\u660e\u5f0f\u7684API\uff0c\u4f60\u53ef\u4ee5\u5728\u8fd9\u4e2a\u76ee\u5f55 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curve-operator/tree/master/config/samples"},"config/sample")," \u4e0b\u627e\u5230\u6240\u6709\u7684\u58f0\u660e\u5f0fyaml\u4f8b\u5b50\u3002\u5e76\u4e14\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4fee\u6539\u4ece\u800c\u80fd\u591f\u7b26\u5408\u4f60\u5f53\u524d\u7684\u90e8\u7f72\u73af\u5883\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curve-operator/blob/master/config/samples/bscluster-onehost.yaml"},"CurveBS \u5355\u673a\u90e8\u7f72")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curve-operator/blob/master/config/samples/cluster.yaml"},"CurveBS \u4e09\u526f\u672c\u90e8\u7f72")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curve-operator/blob/master/config/samples/fscluster-onehost.yaml"},"CurveFS \u5355\u673a\u90e8\u7f72")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curve-operator/blob/master/config/samples/fscluster.yaml"},"CurveFS \u4e09\u526f\u672c\u90e8\u7f72")),(0,l.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4ee5\u90e8\u7f72\u4e09\u526f\u672c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"CurveBS")," \u96c6\u7fa4\u4e3a\u4f8b\u8fdb\u884c\u8bf4\u660e\u3002\u8fd9\u91cc\u7684\u58f0\u660e\u6587\u4ef6\u662f",(0,l.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curve-operator/blob/master/config/samples/cluster.yaml"},"cluster.yaml"),"\u3002\u4f60\u53ef\u4ee5\u6839\u636eyaml\u6587\u4ef6\u4e2d\u7684\u6ce8\u91ca\u8be6\u7ec6\u7684\u4e86\u89e3\u6bcf\u4e00\u4e2a\u914d\u7f6e\u9879\u7684\u4f5c\u7528\uff0c\u4ece\u800c\u81ea\u5b9a\u4e49\u4fee\u6539\u3002"),(0,l.kt)("p",null,"\u8f93\u5165\u5982\u4e0b\u547d\u4ee4\u521b\u5efa\u96c6\u7fa4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl apply -f config/samples/cluster.yaml\n")),(0,l.kt)("p",null,"\u67e5\u770b\u5f53\u524d ",(0,l.kt)("inlineCode",{parentName:"p"},"curve")," namespac \u4e0b\u7684\u6240\u6709\u7684pod\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n curve get pod\n\nNAME                                                          READY   STATUS      RESTARTS   AGE\ncurve-chunkserver-curve-operator-node1-vdc-556fc99467-5nx9q   1/1     Running     0          5m45s\ncurve-chunkserver-curve-operator-node2-vdc-7cf89768f9-hmcrs   1/1     Running     0          5m45s\ncurve-chunkserver-curve-operator-node3-vdc-f77dd85dc-z5bws    1/1     Running     0          5m45s\ncurve-etcd-a-d5bbfb755-lzgrm                                  1/1     Running     0          41m\ncurve-etcd-b-66c5b54f75-6nnnt                                 1/1     Running     0          41m\ncurve-etcd-c-86b7964f87-cj8zk                                 1/1     Running     0          41m\ncurve-mds-a-7b5989bddd-ln2sm                                  1/1     Running     0          40m\ncurve-mds-b-56d8f58645-gv6pd                                  1/1     Running     0          40m\ncurve-mds-c-997c7fd-vt5hw                                     1/1     Running     0          40m\ngen-logical-pool-rzhlz                                        0/1     Completed   0          5m15s\ngen-physical-pool-chnw8                                       0/1     Completed   0          5m45s\nprepare-chunkfile-curve-operator-node1-vdc-znb66              0/1     Completed   0          40m\nprepare-chunkfile-curve-operator-node2-vdc-6gf2z              0/1     Completed   0          40m\nprepare-chunkfile-curve-operator-node3-vdc-2bkxm              0/1     Completed   0          40m\nread-config-k272k                                             0/1     Completed   0          41m\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8bf4\u660e\uff1a\u5728\u6267\u884c\u5b8capply\u547d\u4ee4\u4e4b\u540e\uff0c\u901a\u8fc7get\u547d\u4ee4\u4f60\u53ef\u4ee5\u4e0d\u80fd\u7acb\u523b\u5c31\u80fd\u770b\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"chunkserver")," pods\u3002\u56e0\u4e3a\u78c1\u76d8\u9700\u8981\u8fdb\u884c\u683c\u5f0f\u5316\uff0c\u8fd9\u4e2a\u683c\u5f0f\u5316\u7684\u8fc7\u7a0b\u662f\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"prepare-chunkfile")," jobs\u53bb\u5b8c\u6210\u7684\u3002\u6240\u4ee5\u53ef\u80fd\u4f1a\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4\u4e4b\u540e\u624d\u4f1a\u770b\u5230\u6240\u6709\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"chunkserver")," pods\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u5177\u4f53\u7684\u7b49\u5f85\u65f6\u95f4\u9700\u8981\u6839\u636e\u4f60\u7684\u78c1\u76d8\u7684\u5927\u5c0f\u4ee5\u53ca\u4f60\u5b9a\u4e49\u7684\u683c\u5f0f\u5316\u7684\u767e\u5206\u6bd4\uff0c\u8fd9\u4e2a\u65f6\u95f4\u53ef\u80fd\u4f1a\u5f88\u957f\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u65e5\u5fd7\u67e5\u770b\u683c\u5f0f\u5316\u7684\u8fdb\u7a0b\u3002")),(0,l.kt)("h3",{id:"3-\u68c0\u67e5\u96c6\u7fa4\u7684\u5065\u5eb7\u72b6\u6001"},"3. \u68c0\u67e5\u96c6\u7fa4\u7684\u5065\u5eb7\u72b6\u6001"),(0,l.kt)("p",null,"\u4e3a\u4e86\u68c0\u67e5\u90e8\u7f72\u7684\u96c6\u7fa4\u662f\u5426\u662f\u5065\u5eb7\u7684\uff0c\u9700\u8981\u8fdb\u5165\u4efb\u4f55\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"curve-chunkserver")," pod\uff0c\u7136\u540e\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"curve_ops_tool status")," \u53bb\u67e5\u770b\u96c6\u7fa4\u7684\u5065\u5eb7\u72b6\u6001\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl exec -it <any one chunkserver pod> -- bash\n$ curve_ops_tool status\n\nCluster status:\ncluster is healthy\ntotal copysets: 100, unhealthy copysets: 0, unhealthy_ratio: 0%\nphysical pool number: 1, logical pool number: 1\nSpace info:\nphysical: total = 1178GB, used = 6GB(0.56%), left = 1171GB(99.44%)\nlogical: total = 392GB, used = 41GB(10.44%, can be recycled = 0GB(0.00%)), left = 351GB(89.56%), created file size = 60GB(15.28%)\n\nClient status:\nnebd-server: version-1.2.5+2c4861ca: 1\n...\n")),(0,l.kt)("h2",{id:"curve-csi"},"Curve CSI"),(0,l.kt)("p",null,"\u5728Kubernetes\u7cfb\u7edf\u4e2d\uff0c\u9700\u8981\u521b\u5efaPVC\u4ece\u800c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Curve")," \u4f5c\u4e3apod\u7684\u540e\u7aef\u5b58\u50a8\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u90e8\u7f72\u5bf9\u63a5 Curvebs \u96c6\u7fa4\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curve-csi"},"curve-csi")," \u6216\u8005\u662f\u5bf9\u63a5 Curvefs \u96c6\u7fa4\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curvefs-csi"},"curvefs-csi"),"\u3002\u5982\u4f55\u90e8\u7f72\u4ee5\u53ca\u5177\u4f53\u7684\u5b9e\u73b0\u7ec6\u8282\u53ef\u4ee5\u53c2\u8003\u5bf9\u5e94\u7684\u9879\u76ee\u6587\u6863\u3002"),(0,l.kt)("h2",{id:"\u5220\u9664"},"\u5220\u9664"),(0,l.kt)("p",null,"\u4e3a\u4e86\u5220\u9664\u5df2\u7ecf\u90e8\u7f72\u7684Curve\u96c6\u7fa4\u5e76\u4e14\u6e05\u695a\u5176\u4e2d\u7684\u6570\u636e\uff0c\u53ef\u80fd\u9700\u8981\u7ecf\u5386\u5982\u4e0b\u6b65\u9aa4\u3002"),(0,l.kt)("h3",{id:"1-\u5220\u9664\u96c6\u7fa4cr"},"1. \u5220\u9664\u96c6\u7fa4CR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n curve delete curvecluster my-cluster\n")),(0,l.kt)("p",null,"\u4e3a\u4e86\u9a8c\u8bc1cluster CR\u5df2\u7ecf\u88ab\u5220\u9664\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n curve get curvecluster\n")),(0,l.kt)("h3",{id:"2-\u5220\u9664operator\u4ee5\u53ca\u76f8\u5173\u7684\u8d44\u6e90"},"2. \u5220\u9664Operator\u4ee5\u53ca\u76f8\u5173\u7684\u8d44\u6e90"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl delete -f config/deploy/\n")),(0,l.kt)("h3",{id:"3-\u5220\u9664\u6301\u4e45\u5316\u5728\u5bbf\u4e3b\u673a\u7684\u6570\u636e\u548c\u65e5\u5fd7\u614e\u91cd"},"3. \u5220\u9664\u6301\u4e45\u5316\u5728\u5bbf\u4e3b\u673a\u7684\u6570\u636e\u548c\u65e5\u5fd7\uff08\u614e\u91cd\uff09"),(0,l.kt)("p",null,"\u4e3a\u4e86\u5f7b\u5e95\u7684\u6e05\u9664\u96c6\u7fa4\uff0c\u9700\u8981\u628a\u96c6\u7fa4\u4e2d\u7684\u6570\u636e\u548c\u65e5\u5fd7\u5168\u90e8\u6e05\u9664\u3002\u8fd9\u4e2a\u76ee\u5f55\u662f\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"cluster.yaml"),"\u6587\u4ef6\u4e2d\u5b9a\u4e49\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"hostDataDir"),"\u914d\u7f6e\u9879\u3002\u6ce8\u610f\uff0c\u5728\u90e8\u7f72\u65b0\u96c6\u7fa4\u4e4b\u524d\u4e00\u5b9a\u8981\u5c06\u8fd9\u4e2a\u914d\u7f6e\u76ee\u5f55\u4e0b\u7684\u5185\u5bb9\u5220\u9664\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u591a\u526f\u672c\u90e8\u5206\u7684\u96c6\u7fa4\uff0c\u6570\u636e\u5206\u5e03\u5728\u5404\u4e2a\u96c6\u7fa4\u8282\u70b9\u4e0a\uff0c\u6240\u4ee5\u9700\u8981\u767b\u5f55\u5404\u4e2a\u8282\u70b9\u8fdb\u884c\u5220\u9664\u3002\u4f8b\u5982\uff0c\u5982\u679c\u914d\u7f6e\u7684\u76ee\u5f55\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"/curvebs"),"\u7684\u8bdd\uff0c\u5219\u9700\u8981\u5220\u9664\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6570\u636e\u548c\u65e5\u5fd7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"rm -rf /curvebs\n")))}v.isMDXComponent=!0},4687:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/curve-operator-deploy-arch-d72b2a729c9f820e3a1ee99f21f045e9.jpg"}}]);