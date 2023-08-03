"use strict";(self.webpackChunkcurve_book=self.webpackChunkcurve_book||[]).push([[1563],{3905:(t,e,r)=>{r.d(e,{Zo:()=>o,kt:()=>u});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},p=Object.keys(t);for(a=0;a<p.length;a++)r=p[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(a=0;a<p.length;a++)r=p[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var m=a.createContext({}),c=function(t){var e=a.useContext(m),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},o=function(t){var e=c(t.components);return a.createElement(m.Provider,{value:e},t.children)},k="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,p=t.originalType,m=t.parentName,o=l(t,["components","mdxType","originalType","parentName"]),k=c(r),N=n,u=k["".concat(m,".").concat(N)]||k[N]||d[N]||p;return r?a.createElement(u,i(i({ref:e},o),{},{components:r})):a.createElement(u,i({ref:e},o))}));function u(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var p=r.length,i=new Array(p);i[0]=N;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l[k]="string"==typeof t?t:n,i[1]=l;for(var c=2;c<p;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}N.displayName="MDXCreateElement"},7471:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const p={},i="CurveBS\u5bf9\u6bd4Ceph RBD",l={unversionedId:"CurveBS/comparison/CurveBS-vs-Ceph-rbd",id:"CurveBS/comparison/CurveBS-vs-Ceph-rbd",title:"CurveBS\u5bf9\u6bd4Ceph RBD",description:"\u9ad8\u6027\u80fd | \u66f4\u7a33\u5b9a | \u6613\u8fd0\u7ef4 | \u4e91\u539f\u751f",source:"@site/docs/02-CurveBS/04-comparison/01-CurveBS-vs-Ceph-rbd.md",sourceDirName:"02-CurveBS/04-comparison",slug:"/CurveBS/comparison/CurveBS-vs-Ceph-rbd",permalink:"/CurveBS/comparison/CurveBS-vs-Ceph-rbd",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u540c\u7c7b\u8f6f\u4ef6\u5bf9\u6bd4",permalink:"/category/\u540c\u7c7b\u8f6f\u4ef6\u5bf9\u6bd4"},next:{title:"\u67b6\u6784",permalink:"/category/\u67b6\u6784"}},m={},c=[],o={toc:c},k="wrapper";function d(t){let{components:e,...p}=t;return(0,n.kt)(k,(0,a.Z)({},o,p,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"curvebs\u5bf9\u6bd4ceph-rbd"},"CurveBS\u5bf9\u6bd4Ceph RBD"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u9ad8\u6027\u80fd | \u66f4\u7a33\u5b9a | \u6613\u8fd0\u7ef4 | \u4e91\u539f\u751f")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9ad8\u6027\u80fd : CurveBS vs CephBS"),(0,n.kt)("p",{parentName:"li"},"  CurveBS: v1.2.0"),(0,n.kt)("p",{parentName:"li"},"  CephBS: L/N\n\u6027\u80fd:\n\u5757\u5b58\u50a8\u573a\u666f\u4e0b\uff0cCurveBS\u968f\u673a\u8bfb\u5199\u6027\u80fd\u8fdc\u4f18\u4e8eCephBS\u3002\n\u6d4b\u8bd5\u73af\u5883\uff1a6\u53f0\u670d\u52a1\u5668*20\u5757SATA SSD\uff0cE5-2660 v4\uff0c256G\uff0c3\u526f\u672c\uff0c\u4f7f\u7528nbd\u573a\u666f\u3002"),(0,n.kt)("p",{parentName:"li"},"  \u5355\u5377\u573a\u666f\uff1a\n",(0,n.kt)("img",{alt:"\u5355\u5377\u573a\u666f",src:r(7774).Z,width:"1881",height:"391"})),(0,n.kt)("p",{parentName:"li"},"  \u591a\u5377\u573a\u666f\uff1a\n",(0,n.kt)("img",{alt:"\u591a\u5377\u573a\u666f",src:r(6827).Z,width:"1870",height:"389"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u66f4\u7a33\u5b9a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5757\u5b58\u50a8\u573a\u666f\u4e0b\uff0c\u5e38\u89c1\u5f02\u5e38CurveBS\u7684\u7a33\u5b9a\u6027\u4f18\u4e8eCephBS\u3002"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u5f02\u5e38\u573a\u666f"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u5355\u76d8\u6545\u969c"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u6162\u76d8"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u673a\u5668\u5b95\u673a"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u673a\u5668\u5361\u4f4f"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"CephBS"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u6296\u52a87s"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u6301\u7eedio\u6296\u52a8"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u6296\u52a87s"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u4e0d\u53ef\u6062\u590d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"CurveBS"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u6296\u52a84s"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u65e0\u5f71\u54cd"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u6296\u52a84s"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u6296\u52a84s"))))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6613\u8fd0\u7ef4"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6211\u4eec\u5f00\u53d1\u4e86 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curveadm/wiki"},"CurveAdm"),"\u6765\u5e2e\u52a9\u8fd0\u7ef4\u4eba\u5458\u3002"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u5de5\u5177"),(0,n.kt)("th",{parentName:"tr",align:"center"},"CephAdm"),(0,n.kt)("th",{parentName:"tr",align:"center"},"CurveAdm"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u4e00\u952e\u5b89\u88c5"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u4e00\u952e\u90e8\u7f72"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c(\u6b65\u9aa4\u7a0d\u591a)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"playground"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u591a\u96c6\u7fa4\u7ba1\u7406"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u4e00\u952e\u6269\u5bb9"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c(\u6b65\u9aa4\u7a0d\u591a)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u4e00\u952e\u5347\u7ea7"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u4e00\u952e\u505c\u670d"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u4e00\u952e\u6e05\u7406"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u90e8\u7f72\u73af\u5883\u68c0\u6d4b"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u64cd\u4f5c\u5ba1\u8ba1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u5468\u8fb9\u7ec4\u4ef6\u90e8\u7f72"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u4e00\u952e\u65e5\u5fd7\u4e0a\u62a5"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u96c6\u7fa4\u72b6\u6001\u7edf\u8ba1\u4e0a\u62a5"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u9519\u8bef\u7801\u5206\u7c7b\u53ca\u89e3\u51b3\u65b9\u6848"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8fd0\u7ef4\n\u5757\u5b58\u50a8\u573a\u666f\u4e0b\uff0cCurveBS\u5e38\u89c1\u8fd0\u7ef4\u66f4\u53cb\u597d\u3002"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8fd0\u7ef4\u573a\u666f"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u5ba2\u6237\u7aef\u5347\u7ea7"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u5747\u8861"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"CephBS"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u4e0d\u652f\u6301\u70ed\u5347\u7ea7"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u5916\u90e8\u63d2\u4ef6\u8c03\u6574\uff0c\u5f71\u54cd\u4e1a\u52a1IO")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"CurveBS"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u652f\u6301\u70ed\u5347\u7ea7\uff0c\u79d2\u7ea7\u6296\u52a8"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u81ea\u52a8\u5747\u8861\uff0c\u5bf9\u4e1a\u52a1IO\u65e0\u5f71\u54cd"))))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4e91\u539f\u751f"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u90e8\u7f72\uff1a\u8be6\u89c1",(0,n.kt)("a",{parentName:"li",href:"https://github.com/opencurve/curve-operator"},"curve-operator")),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\uff1a\u8be6\u89c1",(0,n.kt)("a",{parentName:"li",href:"https://github.com/opencurve/curve-csi"},"curve-csi")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/opencurve/curve/wiki/Roadmap_CN"},"\u6211\u4eec\u5bf9\u4e91\u539f\u751f\u7684\u7406\u89e3"),"\u3002")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"TBD")))}d.isMDXComponent=!0},7774:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/1-nbd-90a51b47df41f948827cb31c8071111b.jpg"},6827:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/10-nbd-3bab1b4a1cb8f5caf1d65d656b6267ef.jpg"}}]);