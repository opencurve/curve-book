"use strict";(self.webpackChunkcurve_book=self.webpackChunkcurve_book||[]).push([[6473],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=o(a),k=r,d=c["".concat(u,".").concat(k)]||c[k]||s[k]||l;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9741:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={},i="CHANGELOG of v2.6",p={unversionedId:"Release/release-notes-v2.6",id:"Release/release-notes-v2.6",title:"CHANGELOG of v2.6",description:"Previous change logs can be found at CHANGELOG-2.5",source:"@site/docs/06-Release/02-release-notes-v2.6.md",sourceDirName:"06-Release",slug:"/Release/release-notes-v2.6",permalink:"/Release/release-notes-v2.6",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7248\u672c\u53d1\u5e03\u5468\u671f",permalink:"/Release/release-intro"},next:{title:"FAQ",permalink:"/faq"}},u={},o=[{value:"Features",id:"features",level:2},{value:"Improve",id:"improve",level:2},{value:"Bugfix",id:"bugfix",level:2},{value:"Performance",id:"performance",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Configure",id:"configure",level:3},{value:"fio",id:"fio",level:3},{value:"mdtest",id:"mdtest",level:3}],m={toc:o},c="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog-of-v26"},"CHANGELOG of v2.6"),(0,r.kt)("p",null,"Previous change logs can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/opencurve/curve/blob/master/CHANGELOG-2.5.md"},"CHANGELOG-2.5")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/opencurve/curve/pull/2424"},"curvefs/client: add qos for curve-fuse, we can limits the bandwidth"),", thanks to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/UniverseParticle"},"@UniverseParticle"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/opencurve/curve/pull/2270"},"curvefs/client:add memcache to warmup"),", thanks to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Cyber-SiKu"},"@Cyber-SiKu"),".")),(0,r.kt)("h2",{id:"improve"},"Improve"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/opencurve/curve/pull/2387"},"curvefs/client: improve metadata performance"),", thanks to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Wine93"},"@Wine93"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/opencurve/curve/pull/2420"},"curvefs/client: change the data organization format"),", thanks to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/201341"},"@201341"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/opencurve/curve/pull/2252"},"curvefs/client: optimize DiskCacheManager::UmountDiskCache()"),", thanks to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Ziy1-Tan"},"@Ziy1-Tan"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/opencurve/curve/pull/2296"},"curvefs/client: add memcached startup check"),", thanks to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Ziy1-Tan"},"@Ziy1-Tan"),".")),(0,r.kt)("h2",{id:"bugfix"},"Bugfix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/opencurve/curve/pull/2491"},"curvefs/client: enableSumInDir in multi-mount situation"),", thanks to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bit-dance"},"@bit-dance"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/opencurve/curve/pull/2492"},"curvefs/client: fuse client exit when cache size less than 8MB"),", thanks to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Ziy1-Tan"},"@Ziy1-Tan"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/opencurve/curve/pull/2497"},"curvefs/client: remove unused setting fuseMaxSize"),", thanks to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Ziy1-Tan"},"@Ziy1-Tan"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/opencurve/curve/pull/2421"},"curvefs/client: enable async read for FileCacheManager::ReadKVRequest"),", thanks to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Ziy1-Tan"},"@Ziy1-Tan"),".")),(0,r.kt)("h2",{id:"performance"},"Performance"),(0,r.kt)("h3",{id:"hardware"},"Hardware"),(0,r.kt)("p",null,"3 nodes (3",(0,r.kt)("em",{parentName:"p"},"mds, 9"),"metaserver), each with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Intel(R) Xeon(R) CPU E5-2680 v4 @ 2.40GHz"),(0,r.kt)("li",{parentName:"ul"},"256G RAM"),(0,r.kt)("li",{parentName:"ul"},"disk cache: INTEL SSDSC2BB80 800G (IOPS is about 30000+, bandwidth is about 300 MiB)")),(0,r.kt)("h3",{id:"configure"},"Configure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"fs.cto: true\nfs.lookupCache.negativeTimeoutSec: 1\nfs.lookupCache.minUses: 3\nfuseClient.supportKVcache: true\nclient.loglevel: 0\n")),(0,r.kt)("h3",{id:"fio"},"fio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[global]\nrw=randread\ndirect=1\nsize=50G\niodepth=128\nioengine=libaio\nbsrange=4k-4k\nramp_time=10\nruntime=300\ngroup_reporting\n\n[disk01]\nfilename=/path/to/mountpoint/1.txt\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"fio"),(0,r.kt)("th",{parentName:"tr",align:"center"},"IOPS/bandwidth"),(0,r.kt)("th",{parentName:"tr",align:"center"},"avg-latency(ms)"),(0,r.kt)("th",{parentName:"tr",align:"center"},"clat 99.00th (ms)"),(0,r.kt)("th",{parentName:"tr",align:"center"},"clat 99.99th (ms)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"numjobs=1 / size=50GB / 4k randwrite"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4243"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0.23"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0.176"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"numjobs=1 / size=50GB / 4k randwrite"),(0,r.kt)("td",{parentName:"tr",align:"center"},"908"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1.0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"3.5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"104")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"numjobs=1 / size=50GB / 512k write"),(0,r.kt)("td",{parentName:"tr",align:"center"},"412 MiB/s"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2.4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"19"),(0,r.kt)("td",{parentName:"tr",align:"center"},"566")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"numjobs=1 / size=50GB / 512k read"),(0,r.kt)("td",{parentName:"tr",align:"center"},"333 MiB/s"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2.9"),(0,r.kt)("td",{parentName:"tr",align:"center"},"20"),(0,r.kt)("td",{parentName:"tr",align:"center"},"115")))),(0,r.kt)("h3",{id:"mdtest"},"mdtest"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"for i in 1 4 8; do mpirun --allow-run-as-root -np $i mdtest -z 2 -b 3 -I 10000 -d /path/to/mountpoint; done\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Case"),(0,r.kt)("th",{parentName:"tr",align:null},"Dir creation"),(0,r.kt)("th",{parentName:"tr",align:null},"Dir stat"),(0,r.kt)("th",{parentName:"tr",align:null},"Dir removal"),(0,r.kt)("th",{parentName:"tr",align:null},"File creation"),(0,r.kt)("th",{parentName:"tr",align:null},"File stat"),(0,r.kt)("th",{parentName:"tr",align:null},"File read"),(0,r.kt)("th",{parentName:"tr",align:null},"File removal"),(0,r.kt)("th",{parentName:"tr",align:null},"Tree creation"),(0,r.kt)("th",{parentName:"tr",align:null},"Tree removal"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client*1"),(0,r.kt)("td",{parentName:"tr",align:null},"341"),(0,r.kt)("td",{parentName:"tr",align:null},"395991"),(0,r.kt)("td",{parentName:"tr",align:null},"291"),(0,r.kt)("td",{parentName:"tr",align:null},"334"),(0,r.kt)("td",{parentName:"tr",align:null},"383844"),(0,r.kt)("td",{parentName:"tr",align:null},"3694"),(0,r.kt)("td",{parentName:"tr",align:null},"309"),(0,r.kt)("td",{parentName:"tr",align:null},"322"),(0,r.kt)("td",{parentName:"tr",align:null},"851")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client*4"),(0,r.kt)("td",{parentName:"tr",align:null},"385"),(0,r.kt)("td",{parentName:"tr",align:null},"123266"),(0,r.kt)("td",{parentName:"tr",align:null},"288"),(0,r.kt)("td",{parentName:"tr",align:null},"361"),(0,r.kt)("td",{parentName:"tr",align:null},"1515592"),(0,r.kt)("td",{parentName:"tr",align:null},"15056"),(0,r.kt)("td",{parentName:"tr",align:null},"310"),(0,r.kt)("td",{parentName:"tr",align:null},"363"),(0,r.kt)("td",{parentName:"tr",align:null},"16")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client*8"),(0,r.kt)("td",{parentName:"tr",align:null},"415"),(0,r.kt)("td",{parentName:"tr",align:null},"22138"),(0,r.kt)("td",{parentName:"tr",align:null},"314"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"2811416"),(0,r.kt)("td",{parentName:"tr",align:null},"20976"),(0,r.kt)("td",{parentName:"tr",align:null},"347"),(0,r.kt)("td",{parentName:"tr",align:null},"355"),(0,r.kt)("td",{parentName:"tr",align:null},"8")))))}s.isMDXComponent=!0}}]);