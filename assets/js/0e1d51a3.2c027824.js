(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[9977],{2122:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return a}})},9756:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,{Z:function(){return a}})},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(t),d=r,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||l;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1712:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var a=t(7294),r=t(5697),l=t.n(r),o="videoFrame_d6vX";function i(e){var n=e.src;e.bsrc;return a.createElement(a.Fragment,null,a.createElement("iframe",{src:n,loading:"lazy",scrolling:"no",border:0,frameBorder:"no",framespacing:0,allowFullScreen:!0,className:o}))}i.propTypes={src:l().string.isRequired,bsrc:l().string};var s=i},9610:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var a=t(2122),r=t(9756),l=(t(7294),t(3905)),o=t(1712),i={id:"vue-echarts-bar-chart",title:"Vue 3.0 + Echarts \u7535\u5f71\u7968\u623f\u6570\u636e\u53ef\u89c6\u5316\u67f1\u72b6\u56fe\u5c55\u793a",slug:"../vue-echarts-bar-chart",description:"\u6570\u636e\u53ef\u89c6\u5316\u5df2\u7ecf\u6210\u4e3a\u524d\u7aef\u53d1\u5c55\u7684\u4e00\u4e2a\u91cd\u8981\u7684\u65b9\u5411\u4e86\uff0c\u5229\u7528\u5927\u6570\u636e\u53ef\u4ee5\u9884\u6d4b\u8d8b\u52bf\u3001\u884c\u4e3a\u3002\u90a3\u4e48\u6570\u636e\u5728\u8fdb\u884c\u8ba1\u7b97\u51fa\u6765\u4e4b\u540e\uff0c\u6700\u91cd\u8981 \u7684\u4e00\u6b65\u5c31\u662f\u8fdb\u884c\u5c55\u793a\uff0c\u4e0d\u5c55\u793a\u51fa\u6765\uff0c\u518d\u597d\u7684\u6570\u636e\u4e5f\u6ca1\u8bf4\u670d\u529b\u3002\u8fd9\u4e2a\u89c6\u9891\u5c31\u770b\u4e00\u4e0b\uff0c\u5982\u4f55\u5229\u7528\u54b1\u4eec\u4e0a\u671f\u5c01\u88c5\u597d\u7684 Vue Echarts \u7ec4\u4ef6\uff0c\u6765\u5c55\u793a\u4e00\u4e0b\u7535\u5f71\u7968\u623f\u67f1\u72b6\u56fe\u7684\u5b9e\u73b0\u8fc7\u7a0b\u3002\u5148\u770b\u4e00\u6548\u679c\u3002",keywords:["vue","echarts","\u67f1\u72b6\u56fe","\u7968\u623f","\u524d\u7aef","frontend"]},s=void 0,c={unversionedId:"videos/vue/vue-echarts-bar-chart/vue-echarts-bar-chart",id:"videos/vue/vue-echarts-bar-chart/vue-echarts-bar-chart",isDocsHomePage:!1,title:"Vue 3.0 + Echarts \u7535\u5f71\u7968\u623f\u6570\u636e\u53ef\u89c6\u5316\u67f1\u72b6\u56fe\u5c55\u793a",description:"\u6570\u636e\u53ef\u89c6\u5316\u5df2\u7ecf\u6210\u4e3a\u524d\u7aef\u53d1\u5c55\u7684\u4e00\u4e2a\u91cd\u8981\u7684\u65b9\u5411\u4e86\uff0c\u5229\u7528\u5927\u6570\u636e\u53ef\u4ee5\u9884\u6d4b\u8d8b\u52bf\u3001\u884c\u4e3a\u3002\u90a3\u4e48\u6570\u636e\u5728\u8fdb\u884c\u8ba1\u7b97\u51fa\u6765\u4e4b\u540e\uff0c\u6700\u91cd\u8981 \u7684\u4e00\u6b65\u5c31\u662f\u8fdb\u884c\u5c55\u793a\uff0c\u4e0d\u5c55\u793a\u51fa\u6765\uff0c\u518d\u597d\u7684\u6570\u636e\u4e5f\u6ca1\u8bf4\u670d\u529b\u3002\u8fd9\u4e2a\u89c6\u9891\u5c31\u770b\u4e00\u4e0b\uff0c\u5982\u4f55\u5229\u7528\u54b1\u4eec\u4e0a\u671f\u5c01\u88c5\u597d\u7684 Vue Echarts \u7ec4\u4ef6\uff0c\u6765\u5c55\u793a\u4e00\u4e0b\u7535\u5f71\u7968\u623f\u67f1\u72b6\u56fe\u7684\u5b9e\u73b0\u8fc7\u7a0b\u3002\u5148\u770b\u4e00\u6548\u679c\u3002",source:"@site/docs/videos/vue/05-vue-echarts-bar-chart/index.md",sourceDirName:"videos/vue/05-vue-echarts-bar-chart",slug:"/videos/vue/vue-echarts-bar-chart",permalink:"/docs/videos/vue/vue-echarts-bar-chart",editUrl:"https://github.com/peterwangfeng/zxuqian.cn/tree/master/docs/videos/vue/05-vue-echarts-bar-chart/index.md",version:"current",frontMatter:{id:"vue-echarts-bar-chart",title:"Vue 3.0 + Echarts \u7535\u5f71\u7968\u623f\u6570\u636e\u53ef\u89c6\u5316\u67f1\u72b6\u56fe\u5c55\u793a",slug:"../vue-echarts-bar-chart",description:"\u6570\u636e\u53ef\u89c6\u5316\u5df2\u7ecf\u6210\u4e3a\u524d\u7aef\u53d1\u5c55\u7684\u4e00\u4e2a\u91cd\u8981\u7684\u65b9\u5411\u4e86\uff0c\u5229\u7528\u5927\u6570\u636e\u53ef\u4ee5\u9884\u6d4b\u8d8b\u52bf\u3001\u884c\u4e3a\u3002\u90a3\u4e48\u6570\u636e\u5728\u8fdb\u884c\u8ba1\u7b97\u51fa\u6765\u4e4b\u540e\uff0c\u6700\u91cd\u8981 \u7684\u4e00\u6b65\u5c31\u662f\u8fdb\u884c\u5c55\u793a\uff0c\u4e0d\u5c55\u793a\u51fa\u6765\uff0c\u518d\u597d\u7684\u6570\u636e\u4e5f\u6ca1\u8bf4\u670d\u529b\u3002\u8fd9\u4e2a\u89c6\u9891\u5c31\u770b\u4e00\u4e0b\uff0c\u5982\u4f55\u5229\u7528\u54b1\u4eec\u4e0a\u671f\u5c01\u88c5\u597d\u7684 Vue Echarts \u7ec4\u4ef6\uff0c\u6765\u5c55\u793a\u4e00\u4e0b\u7535\u5f71\u7968\u623f\u67f1\u72b6\u56fe\u7684\u5b9e\u73b0\u8fc7\u7a0b\u3002\u5148\u770b\u4e00\u6548\u679c\u3002",keywords:["vue","echarts","\u67f1\u72b6\u56fe","\u7968\u623f","\u524d\u7aef","frontend"]},sidebar:"videos",previous:{title:"\u5c01\u88c5 Echarts \u4e3a Vue.js \u7ec4\u4ef6\u6559\u7a0b",permalink:"/docs/videos/vue/vue-echarts-integration"},next:{title:"Vue 3.0 + ECharts \u5b9e\u73b0\u7535\u5f71\u7968\u623f\u81ea\u5b9a\u4e49\u73af\u5f62\u56fe\u6559\u7a0b",permalink:"/docs/videos/vue/vue-echarts-doughnut-chart"}},u=[{value:"\u51c6\u5907\u6570\u636e",id:"\u51c6\u5907\u6570\u636e",children:[]},{value:"\u52a0\u8f7d\u6570\u636e",id:"\u52a0\u8f7d\u6570\u636e",children:[]},{value:"\u521b\u5efa\u67f1\u72b6\u56fe\u7ec4\u4ef6",id:"\u521b\u5efa\u67f1\u72b6\u56fe\u7ec4\u4ef6",children:[]},{value:"\u914d\u7f6e\u67f1\u72b6\u56fe",id:"\u914d\u7f6e\u67f1\u72b6\u56fe",children:[]},{value:"\u4f7f\u7528\u67f1\u72b6\u56fe\u7ec4\u4ef6",id:"\u4f7f\u7528\u67f1\u72b6\u56fe\u7ec4\u4ef6",children:[]},{value:"\u9884\u89c8\u6548\u679c",id:"\u9884\u89c8\u6548\u679c",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],p={toc:u};function f(e){var n=e.components,i=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6570\u636e\u53ef\u89c6\u5316\u5df2\u7ecf\u6210\u4e3a\u524d\u7aef\u53d1\u5c55\u7684\u4e00\u4e2a\u91cd\u8981\u7684\u65b9\u5411\u4e86\uff0c\u5229\u7528\u5927\u6570\u636e\u53ef\u4ee5\u9884\u6d4b\u8d8b\u52bf\u3001\u884c\u4e3a\u3002\u90a3\u4e48\u6570\u636e\u5728\u8fdb\u884c\u8ba1\u7b97\u51fa\u6765\u4e4b\u540e\uff0c\u6700\u91cd\u8981 \u7684\u4e00\u6b65\u5c31\u662f\u8fdb\u884c\u5c55\u793a\uff0c\u4e0d\u5c55\u793a\u51fa\u6765\uff0c\u518d\u597d\u7684\u6570\u636e\u4e5f\u6ca1\u8bf4\u670d\u529b\u3002"),(0,l.kt)(o.Z,{src:"//player.bilibili.com/player.html?aid=799924670&bvid=BV14y4y1b7tU&cid=318765309&page=1",mdxType:"BVideo"}),(0,l.kt)("p",null,"\u8fd9\u4e2a\u89c6\u9891\u5c31\u770b\u4e00\u4e0b\uff0c\u5982\u4f55\u5229\u7528\u54b1\u4eec\u4e0a\u671f\u5c01\u88c5\u597d\u7684 Vue Echarts \u7ec4\u4ef6\uff0c\u6765\u5c55\u793a\u4e00\u4e0b\u7535\u5f71\u7968\u623f\u67f1\u72b6\u56fe\u7684\u5b9e\u73b0\u8fc7\u7a0b\u3002\u5148\u770b\u4e00\u6548\u679c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:t(8632).Z})),(0,l.kt)("p",null,"\u8fd9\u91cc\u7684\u6570\u636e\u662f\u8fc7\u5e74\u671f\u95f4\u4ece\u732b\u773c\u7535\u5f71\u91cc\u83b7\u5f97\u7684\uff0c\u53ea\u53d6\u4e86\u6392\u540d\u9760\u524d\u7684\u51e0\u90e8\u7535\u5f71\uff0c\u5c55\u793a\u5b83\u4eec\u5f53\u65e5\u7684\u7efc\u5408\u7968\u623f\u6570\u636e\u3002\u67f1\u72b6\u56fe\u662f\u6a2a\u5411\u8868\u793a\u7684\uff0cy \u8f74\u4e3a\u5206\u7c7b\uff0c\u4e5f\u5c31\u662f\u7535\u5f71\u7684\u540d\u5b57\uff0c\u6309\u7968\u623f\u7531\u9ad8\u5230\u4f4e\u6392\u5e8f\u3002x \u8f74\u4e3a\u7968\u623f\u6570\u503c\uff0c\u5e76\u663e\u793a\u5206\u9694\u7ebf\u3002\u67f1\u5b50\u4e3a\u6e10\u53d8\u7684\u7ea2\u8272\uff0c\u5e76\u4e14\u8d8a\u9760\u4e0b\u900f\u660e\u5ea6\u8d8a\u4f4e\u3002\u9f20\u6807\u79fb\u4e0a\u53bb\u7684\u65f6\u5019\uff0c\u67f1\u5b50\u4f1a\u9ad8\u4eae\u663e\u793a\uff0c\u5e76\u4e14\u628a\u5176\u5b83\u7684\u67f1\u5b50\u53d8\u6697\uff0c\u540c\u65f6\u5728\u53f3\u4fa7\u663e\u793a\u5f53\u524d\u67f1\u5b50\u4ee3\u8868\u7684\u6570\u503c\u3002\n\u56e0\u4e3a\u524d\u51e0\u671f\u89c6\u9891\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 Vite \u521b\u5efa Vue3 \u7684\u9879\u76ee\uff08==\u63d2\u5165\u89c6\u9891\u5f39\u5e55==\uff09\uff0c\u5e76\u4e14\u5c01\u88c5\u4e86 Echarts \u7ec4\u4ef6\uff0c\u90a3\u4e48\u8fd9\u91cc\u6211\u4eec\u5c31\u770b\u4e00\u4e0b\u67f1\u72b6\u56fe\u7684\u914d\u7f6e\u3002"),(0,l.kt)("h2",{id:"\u51c6\u5907\u6570\u636e"},"\u51c6\u5907\u6570\u636e"),(0,l.kt)("p",null,"\u9996\u5148\u6765\u51c6\u5907\u793a\u4f8b\u6570\u636e\uff0c\u4ece\u732b\u773c\u7535\u5f71\u83b7\u53d6\u7684\u6570\u636e\u653e\u5230\u4e86 public/boxOffice.json \u6587\u4ef6\u4e2d\uff0c\u540e\u9762\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 /boxOffice.json \u8fd9\u4e2a\u8def\u5f84\u6765\u6a21\u62df\u52a0\u8f7d\u8fdc\u7a0b\u6570\u636e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'fecth("/boxOffice.json");\n')),(0,l.kt)("span",null,"\n    ",(0,l.kt)("ins",{parentName:"span",className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-3487507367729662","data-ad-slot":"3539166782"}),"\n  ",(0,l.kt)("script",{parentName:"span"},"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n  ")),(0,l.kt)("p",null,"\u6587\u4ef6\u91cc\u662f json \u683c\u5f0f\u7684\u6570\u636e\uff0c\u7ed3\u6784\u4e3a\uff1a\u5b58\u653e\u4e86\u5bf9\u8c61\u7684\u6570\u7ec4\uff0c\u5bf9\u8c61\u4e2d name \u4e3a\u7535\u5f71\u540d\uff0cboxOffice \u4e3a\u7968\u623f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "\u4f60\u597d\uff0c\u674e\u7115\u82f1",\n    "boxOffice": 3570.68\n  },\n  {\n    "name": "\u5510\u4eba\u8857\u63a2\u68483",\n    "boxOffice": 1228.29\n  },\n  {\n    "name": "\u523a\u6740\u5c0f\u8bf4\u5bb6",\n    "boxOffice": 690.94\n  },\n  {\n    "name": "\u4eba\u6f6e\u6c79\u6d8c",\n    "boxOffice": 644.34\n  },\n  {\n    "name": "\u718a\u51fa\u6ca1\xb7\u72c2\u91ce\u5927\u9646",\n    "boxOffice": 409.9\n  },\n  {\n    "name": "\u65b0\u795e\u699c\uff1a\u54ea\u5412\u91cd\u751f",\n    "boxOffice": 368.5\n  },\n  {\n    "name": "\u4f8d\u795e\u4ee4",\n    "boxOffice": 98.75\n  }\n]\n')),(0,l.kt)("h2",{id:"\u52a0\u8f7d\u6570\u636e"},"\u52a0\u8f7d\u6570\u636e"),(0,l.kt)("p",null,"\u518d\u6765\u52a0\u8f7d\u6570\u636e\uff0c\u6253\u5f00 App.vue\uff0c\u5728 js \u4ee3\u7801\u4e2d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e00\u4e2a boxOfficeData Ref\uff0c\u5b83\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u7528\u6765\u4fdd\u5b58\u52a0\u8f7d\u7684\u8fdc\u7a0b\u7968\u623f\u6570\u636e\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u63a5\u7740\u5b9a\u4e49 fetchData \u51fd\u6570\uff0c\u5b83\u662f async \u7684\uff0c\u56e0\u4e3a\u6211\u4eec\u9700\u8981\u8bf7\u6c42\u670d\u52a1\u5668\uff0c\u8fd9\u662f\u4e00\u4e2a\u8017\u65f6\u7684\u64cd\u4f5c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728 fetchData \u91cc\u8fb9\u4f7f\u7528 fetch() \u8bf7\u6c42\u6570\u636e\uff0c\u8fd9\u91cc\u628a\u6211\u4eec\u7684\u6a21\u62df\u6570\u636e\u8def\u5f84\u4f20\u9012\u7ed9\u5b83\uff0c\u5b83\u4f1a\u9ed8\u8ba4\u4ee5 GET \u65b9\u5f0f\u8bf7\u6c42\u6570\u636e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e4b\u540e\u4f7f\u7528 res.json() \u6765\u628a\u83b7\u53d6\u7684\u6570\u636e\u8f6c\u6362\u4e3a JavaScript Object\uff0c\u8fd9\u91cc\u662f\u4e2a\u6570\u7ec4\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u540e\u628a\u7ed3\u679c\u653e\u5230 boxOfficeData \u8fd9\u4e2a\u54cd\u5e94\u5f0f\u7684 ref \u4e2d\u3002")),(0,l.kt)("p",null,"\u52a0\u8f7d\u6570\u636e\u7684\u64cd\u4f5c\u63a8\u8350\u5728\u7ec4\u4ef6\u6302\u8f7d\u4e4b\u540e\uff0c\u6240\u4ee5\u4f7f\u7528 onMounted() \u751f\u547d\u5468\u671f\uff0c\u5728\u91cc\u8fb9\u8c03\u7528 fetchData()\u3002\u8fd9\u4e9b\u5185\u7f6e\u7684\u51fd\u6570\u522b\u5fd8\u4e86\u5bfc\u5165\u8fdb\u6765\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'import { onMounted, ref, watchEffect } from "vue";\n\nconst boxOfficeData = ref([]);\n\nconst fetchData = async () => {\n  const res = await fetch("/boxOffice.json");\n  const data = await res.json();\n  boxOfficeData.value = data;\n};\n\nonMounted(() => {\n  fetchData();\n});\n')),(0,l.kt)("h2",{id:"\u521b\u5efa\u67f1\u72b6\u56fe\u7ec4\u4ef6"},"\u521b\u5efa\u67f1\u72b6\u56fe\u7ec4\u4ef6"),(0,l.kt)("p",null,"\u73b0\u5728\u6765\u521b\u5efa\u67f1\u72b6\u56fe\u7ec4\u4ef6\u3002\u4e0a\u4e00\u6b65\u83b7\u53d6\u5230\u7684\u6570\u636e\u4f1a\u901a\u8fc7\u5c5e\u6027\u4f20\u9012\u7ed9\u67f1\u72b6\u56fe\u7ec4\u4ef6\uff0c\u6211\u4eec\u5728 src/components \u4e0b\u65b0\u5efa\u4e00\u4e2a BarChart.vue \u6587\u4ef6\uff0c\u5728\u91cc\u8fb9\u7f16\u5199\u7ec4\u4ef6\u4ee3\u7801\u3002\u9996\u5148\u770b JavaScript \u90e8\u5206\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u4e2a\u7ec4\u4ef6\u8981\u63a5\u6536\u7968\u623f\u6570\u636e\u6765\u5c55\u793a\uff0c\u4f7f\u7528 defineProps() \u6765\u6307\u5b9a\u8981\u63a5\u6536\u7684\u5c5e\u6027\uff0cboxOfficeData\uff0c\u5b83\u662f\u6570\u7ec4\u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u4fdd\u8bc1\u5728\u4f7f\u7528\u5bf9\u8c61\u89e3\u6784\u8bed\u6cd5\u540e\uff0c\u5176\u4e2d\u7684\u5c5e\u6027\u4ecd\u7136\u662f\u54cd\u5e94\u5f0f\u7684\uff0c\u6211\u4eec\u4f7f\u7528 toRefs \u628a props \u4e2d\u6240\u6709\u7684\u5c5e\u6027\u8f6c\u6362\u4e3a Ref\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e4b\u540e\u6839\u636e boxOfficeData \u6765\u751f\u6210\u56fe\u8868\u914d\u7f6e\uff0c\u6211\u4eec\u4f7f\u7528 computed() \u6765\u8ba9\u7968\u623f\u6570\u636e\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u81ea\u52a8\u66f4\u65b0\u56fe\u8868\u914d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728 computed() \u91cc\u8fb9\uff0c\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 populateMovieData() \u51fd\u6570\u6765\u628a\u7968\u623f\u539f\u59cb\u6570\u636e\u53d8\u6362\u6210 echarts \u9700\u8981\u7684\u6570\u636e\u683c\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u628a\u8fd4\u56de\u7684\u7ed3\u679c\u4f20\u9012\u7ed9 barChartOptionCreator()\uff0c\u8fd9\u4e2a\u5c31\u662f\u7528\u4e8e\u751f\u6210\u56fe\u8868\u914d\u7f6e\u7684\uff0c\u7a0d\u540e\u518d\u770b\u5b83\u7684\u4ee3\u7801\u3002")),(0,l.kt)("p",null,"\u8fd9\u91cc\u7684 populateMovieData() \u51fd\u6570\u4f1a\u63a5\u6536\u539f\u59cb\u7968\u623f\u6570\u636e\uff0c\u7136\u540e\u628a\u7535\u5f71\u540d\u548c\u7968\u623f\u6570\u503c\u5206\u5f00\uff0c\u5206\u522b\u4fdd\u5b58\u5230\u5355\u72ec\u7684\u6570\u7ec4\u4e2d\u3002\u56e0\u4e3a echarts \u7684\u5750\u6807\u8f74\u7c7b\u522b\u548c\u6570\u503c\u662f\u5206\u5f00\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'import Chart from "./Chart.vue";\nimport barChartOptionCreator from "../charts/barChart.js";\nimport { computed, defineProps, toRefs } from "vue";\n\nconst props = defineProps({\n  boxOfficeData: Array,\n});\n\nconst { boxOfficeData } = toRefs(props);\n\nconst options = computed(() => {\n  const { names, boxOffices } = populateMovieData(boxOfficeData.value);\n  return barChartOptionCreator(names, boxOffices);\n});\n\nfunction populateMovieData(rawData) {\n  let names = [];\n  let boxOffices = [];\n  rawData.forEach((movie) => {\n    names.push(movie?.name);\n    boxOffices.push(movie?.boxOffice);\n  });\n\n  return { names, boxOffices };\n}\n')),(0,l.kt)("p",null,"\u5728 template \u4e2d\uff0c\u4f7f\u7528\u4e4b\u524d\u5c01\u88c5\u597d\u7684 echarts \u7ec4\u4ef6\uff0c\u628a options \u5c5e\u6027\u4f20\u9012\u7ed9\u5b83\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'<template>\n  \x3c!-- \u5982\u679c\u53ea\u6709\u4e00\u4e2a\u9876\u5c42\u6807\u7b7e\uff0c:class=$attrs.class \u53ef\u4ee5\u7701\u7565 --\x3e\n  <Chart :options="options" :class="$attrs.class" />\n</template>\n')),(0,l.kt)("p",null,'\u8fd9\u91cc\u6ce8\u610f\uff0c:class="$attrs.class" \u662f\u8bf4\u5982\u679c\u5176\u5b83\u7ec4\u4ef6\u7528\u5230\u8fd9\u4e2a\u7ec4\u4ef6\u65f6\uff0c\u8be5\u628a class \u5c5e\u6027\u4f20\u9012\u7ed9\u8c01\uff0c\u4e0d\u8fc7\u5f53 template \u4e2d\u53ea\u6709\u4e00\u4e2a\u7ec4\u4ef6\u65f6\u53ef\u4ee5\u7701\u7565\u3002'),(0,l.kt)("h2",{id:"\u914d\u7f6e\u67f1\u72b6\u56fe"},"\u914d\u7f6e\u67f1\u72b6\u56fe"),(0,l.kt)("p",null,"\uff08\u5de6\u8fb9\u653e\u4ee3\u7801\uff0c\u53f3\u8fb9\u653e\u56fe\u6f14\u793a\uff09\n\u63a5\u4e0b\u6765\u6211\u4eec\u770b\u4e0b\u67f1\u72b6\u56fe\u7684\u914d\u7f6e\uff0c\u5728 src/charts \u76ee\u5f55\u4e0b\u65b0\u5efa\u4e00\u4e2a barChart.js \u6587\u4ef6\uff0c\u5728\u91cc\u8fb9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bfc\u51fa\u4e00\u4e2a\u51fd\u6570\uff0c\u51fd\u6570\u63a5\u6536 categories \u548c data \u4e24\u4e2a\u53c2\u6570\uff0c\u5206\u522b\u662f\u5750\u6807\u8f74\u5206\u7c7b\u548c\u6570\u636e\uff0c\u4e5f\u5c31\u662f\u4e4b\u524d\u4f20\u9012\u7684\u7535\u5f71\u540d\u548c\u7968\u623f\u3002"),(0,l.kt)("li",{parentName:"ul"},"title \u5c5e\u6027\u5b9a\u4e49\u4e86\u56fe\u8868\u7684\u6807\u9898\u3001\u526f\u6807\u9898\u3001\u6807\u9898\u6837\u5f0f\uff08\u6709\u6587\u5b57\u5927\u5c0f\u548c\u989c\u8272\uff09\uff0c\u4ee5\u53ca\u526f\u6807\u9898\u7684\u6837\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},"grid \u5c5e\u6027\u5b9a\u4e49\u4e86\u56fe\u8868\u7684\u6574\u4e2a\u7f51\u683c\u7684\u6837\u5f0f\uff0c\u5206\u522b\u8bbe\u7f6e\u4e86\u5de6\u3001\u53f3\u3001\u4e0b\u3001\u4e0a\u7684\u504f\u79fb\uff0c\u53ef\u4ee5\u662f\u5177\u4f53\u6570\u503c\u4e5f\u53ef\u4ee5\u662f\u767e\u5206\u6bd4\u3002containLabel \u662f\u8bf4\u5728\u8ba1\u7b97\u504f\u79fb\u65f6\uff0c\u662f\u4e0d\u662f\u8981\u628a\u5750\u6807\u8f74\u7684\u6587\u672c\u7b97\u8fdb\u53bb\uff0c\u8fd9\u91cc\u8bbe\u7f6e\u4e3a true\uff0c\u8ba1\u7b97\u8fdb\u53bb\uff0c\u9632\u6b62\u56e0\u504f\u79fb\u4e0d\u591f\u800c\u5bfc\u81f4\u6587\u672c\u663e\u793a\u4e0d\u5168\u3002"),(0,l.kt)("li",{parentName:"ul"},"xAxis \u7528\u4e8e\u8bbe\u7f6e x \u5750\u6807\u8f74\uff0ctype \u8bbe\u7f6e\u5b83\u7684\u7c7b\u578b\u4e3a value\uff0c\u6570\u503c\u578b\uff0c\u56e0\u4e3a\u6211\u4eec\u7684\u67f1\u72b6\u56fe\u662f\u6a2a\u5411\u7684\uff0cx \u8f74\u662f\u6570\u636e\u3002\u7136\u540e\u8bbe\u7f6e\u5206\u9694\u7ebf splitLine \u6837\u5f0f\u4e3a\u865a\u7ebf\u3001\u7070\u8272\uff0c\u4ee5\u53ca\u5750\u6807\u8f74\u6587\u672c axisLabel \u5b57\u4f53\u6837\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},"yAxis \u8bbe\u7f6e y \u5750\u6807\u8f74\uff0c\u7c7b\u578b\u4e3a category \u7c7b\u522b\u578b\uff0c\u53d6\u503c\u4e3a\u4f20\u9012\u8fdb\u6765\u7684 categories \u53c2\u6570\uff0c\u5373\u7535\u5f71\u540d\uff0c\u8bbe\u7f6e\u53cd\u5411\u6392\u5e8f\uff0c\u6570\u503c\u5927\u7684\u9760\u4e0a\uff0c\u4e0d\u663e\u793a\u5750\u6807\u7ebf\u548c\u523b\u5ea6\u7ebf\uff0c\u518d\u8bbe\u7f6e\u5750\u6807\u6587\u672c\u5b57\u4f53\u6837\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},"series \u5c31\u662f\u8bbe\u7f6e\u56fe\u8868\u4e86\uff0c\u7531\u4e8e\u6211\u4eec\u6ca1\u663e\u793a\u56fe\u4f8b\uff0c\u6240\u4ee5 name \u662f\u53ef\u9009\u7684\uff0c\u8fd9\u91cc\u8bbe\u7f6e\u4e3a\u7efc\u5408\u7968\u623f\uff0c\u4f46\u662f\u5b83\u4e0d\u4f1a\u663e\u793a\uff0c\u7c7b\u578b\u8bbe\u7f6e\u4e3a\u67f1\u72b6\u56fe\uff0c\u6570\u636e\u4e3a\u4f20\u9012\u8fdb\u6765\u7684 data \u53c2\u6570\uff0c\u5373\u7968\u623f\u3002\u8bbe\u7f6e\u67f1\u5b50\u6700\u5927\u5bbd\u5ea6\u4e3a 14\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6211\u4eec\u7a0d\u540e\u518d\u770b emphasis\u3002\u4e0b\u9762\u7684 itemStyle \u662f\u8bbe\u7f6e\u67f1\u5b50\u7684\u6837\u5f0f\u7684\uff0c\u6bcf\u6839\u67f1\u5b50\u90fd\u662f\u7531\u6df1\u7ea2\u5230\u6d45\u7ea2\u7684\u6e10\u53d8\u8272\uff0c\u90a3\u4e48\u4f7f\u7528 color \u5c5e\u6027\uff0c\u628a type \u8bbe\u7f6e\u4e3a linear \u5c31\u6210\u4e3a\u4e86\u7ebf\u6027\u6e10\u53d8\uff0cx\u3001y\u3001x2\u3001y2 \u8bbe\u7f6e\u6e10\u53d8\u533a\u57df\uff0c\u53d6\u503c\u4e3a 0 - 1\uff0c\u5373\u767e\u5206\u6bd4\uff0ccolorStops \u5219\u8bbe\u7f6e\u6e10\u53d8\u533a\u57df\u7684\u989c\u8272\uff0c\u8fd9\u91cc 0% \u4e3a\u6df1\u7ea2\uff0c100%\u4e3a\u6d45\u7ea2\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u63a5\u7740\u901a\u8fc7 borderRadius \u8bbe\u7f6e\u5706\u89d2\uff0cshadowBlur \u548c shadowColor \u5206\u522b\u8bbe\u7f6e\u67f1\u5b50\u9634\u5f71\u6a21\u7cca\u534a\u5f84\u548c\u989c\u8272\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u5b8c series \u540e\uff0c\u8bbe\u7f6e\u56fe\u8868\u80cc\u666f\u8272\u4e3a\u900f\u660e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u67f1\u72b6\u56fe\u7684\u989c\u8272\u4ece\u4e0a\u5230\u4e0b\u4f1a\u8d8a\u6765\u8d8a\u6697\uff0c\u8fd9\u662f\u56e0\u4e3a\u6839\u636e\u6570\u636e\u7684\u4e0d\u540c\uff0c\u989c\u8272\u7684\u900f\u660e\u5ea6\u4e5f\u4e0d\u540c\uff0c\u6570\u636e\u503c\u8d8a\u5c0f\u7684\uff0c\u900f\u660e\u5ea6\u8d8a\u4f4e\uff08\u5373\u66f4\u900f\u660e\uff09\uff0c\u9664\u4e86\u624b\u52a8\u8ba1\u7b97\u6570\u503c\u548c\u900f\u660e\u5ea6\u7684\u6620\u5c04\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u901a\u8fc7 VisualMap \u6765\u8bbe\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"VisualMap \u662f\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u4f46\u6211\u4eec\u53ea\u662f\u5355\u7eaf\u7684\u7528 VisualMap \u6765\u8ba1\u7b97\u6620\u5c04\u503c\uff0c\u4e0d\u9700\u8981\u663e\u793a\u5b83\uff0c\u6240\u4ee5\u8bbe\u7f6e show \u4e3a false\uff0c\u7136\u540e\u6700\u5c0f\u503c\u4e3a 0\uff0c\u6700\u5927\u503c\u4e3a 3600\uff0c\u6570\u636e\u7ef4\u5ea6\u4e3a\u7b2c 1 \u7ef4\uff0c\u7136\u540e\u7528 inRange \u5c5e\u6027\u8bbe\u7f6e\u6620\u5c04\u5230\u7684\u900f\u660e\u5ea6\uff0c\u4e3a 0.3 \u5230 1\u3002\u4e5f\u662f\u662f\u8bf4\u7968\u623f\u533a\u95f4\u8bbe\u7f6e\u4e3a 0 \u5230 3600\uff0c\u7136\u540e\u6620\u5c04\u5230\u900f\u660e\u5ea6\u5c31\u662f 0.3 \u5230 1\u3002\u8fd9\u6837\u5c31\u914d\u7f6e\u597d\u4e86\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u540e\u770b\u4e00\u4e0b emphasis\uff0c\u8fd9\u4e2a\u662f\u914d\u7f6e\u9f20\u6807\u79fb\u52a8\u5230\u67f1\u5b50\u4e0a\u65f6\u7684\u9ad8\u4eae\u6837\u5f0f\uff0c\u8fd9\u91cc\u8bbe\u7f6e\u5b83\u81ea\u5df1\u4e3a\u7126\u70b9\uff0c\u4f1a\u628a\u5176\u5b83\u67f1\u5b50\u53d8\u6697\uff0c\u7136\u540e\u5728\u9ad8\u4eae\u7684\u67f1\u5b50\u7684\u53f3\u4fa7\u663e\u793a label\uff0c\u5e76\u8bbe\u7f6e label \u7684\u6837\u5f0f\uff0c\u540c\u65f6\u628a\u67f1\u5b50\u7684\u6e10\u53d8\u8272\u518d\u8c03\u4eae\u4e00\u4e9b\uff0c\u4f5c\u4e3a\u9ad8\u4eae\u6837\u5f0f\u3002\u6700\u540e\u628a\u9634\u5f71\u8c03\u5927\uff0c\u8ba9\u5b83\u6709\u6d6e\u52a8\u7684\u611f\u89c9\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u5bfc\u51fa\u4e00\u4e2a\u51fd\u6570\uff0c\u65b9\u4fbf\u672a\u6765\u6dfb\u52a0\u81ea\u5b9a\u4e49\u5c5e\u6027\nexport default (categories = [], data = []) => {\n  return {\n    title: {\n      text: "\u7535\u5f71\u5f53\u65e5\u7efc\u5408\u7968\u623f\u6392\u884c",\n      subtext: "\u6570\u636e\u6765\u81ea\u732b\u773c\u7535\u5f71\uff08\u975e\u5b9e\u65f6\uff09",\n      textStyle: {\n        fontSize: 24,\n        color: "hsl(0deg, 100%, 100%)",\n      },\n      subtextStyle: {\n        fontSize: 14,\n        color: "hsl(0deg, 20%, 75%)",\n      },\n    },\n    grid: {\n      left: "3%",\n      right: "4%",\n      bottom: "3%",\n      top: 80,\n      containLabel: true,\n    },\n    xAxis: {\n      type: "value",\n      splitLine: {\n        lineStyle: {\n          type: "dashed",\n          color: "#333",\n        },\n      },\n      axisLabel: {\n        fontWeight: "bold",\n        color: "#eee",\n        fontSize: 14,\n        fontFamily: "Raleway",\n        margin: 24,\n      },\n    },\n    yAxis: {\n      type: "category",\n      data: categories,\n      inverse: true,\n      axisLine: {\n        show: false,\n      },\n      axisTick: {\n        show: false,\n      },\n      axisLabel: {\n        fontWeight: "bold",\n        color: "hsl(0deg, 100%, 98%)",\n        fontSize: 14,\n        margin: 24,\n      },\n    },\n    series: [\n      {\n        name: "\u7efc\u5408\u7968\u623f",\n        type: "bar",\n        data: data,\n        barMaxWidth: 14,\n        emphasis: {\n          focus: "self",\n          label: {\n            show: true,\n            position: "right",\n            color: "hsl(0deg, 100%, 60%)",\n            fontSize: 14,\n            fontWeight: "bold",\n          },\n          itemStyle: {\n            color: {\n              type: "linear",\n              x: 0,\n              y: 0,\n              x2: 1,\n              y2: 1,\n              colorStops: [\n                {\n                  offset: 0,\n                  color: "hsl(0deg, 100%, 60%)",\n                },\n                {\n                  offset: 1,\n                  color: "hsl(0deg, 80%, 60%)",\n                },\n              ],\n            },\n            shadowBlur: 24,\n          },\n        },\n        itemStyle: {\n          color: {\n            type: "linear",\n            x: 0,\n            y: 0,\n            x2: 1,\n            y2: 1,\n            colorStops: [\n              {\n                offset: 0,\n                color: "hsl(0deg, 80%, 50%)",\n              },\n              {\n                offset: 1,\n                color: "hsl(0deg, 100%, 60%)",\n              },\n            ],\n          },\n          borderRadius: [0, 4, 4, 0],\n          shadowBlur: 8,\n          shadowColor: "hsl(0deg, 100%, 50%, 0.3)",\n        },\n      },\n    ],\n    backgroundColor: "transparent",\n    visualMap: [\n      {\n        show: false,\n        min: 0,\n        max: 3600,\n        dimension: 0,\n        inRange: {\n          opacity: [0.3, 1],\n        },\n      },\n    ],\n  };\n};\n')),(0,l.kt)("h2",{id:"\u4f7f\u7528\u67f1\u72b6\u56fe\u7ec4\u4ef6"},"\u4f7f\u7528\u67f1\u72b6\u56fe\u7ec4\u4ef6"),(0,l.kt)("p",null,"\u5728\u914d\u7f6e\u5b8c\u67f1\u72b6\u56fe\u540e\uff0c\u6211\u4eec\u5728 App.vue \u4e2d\u4f7f\u7528\u5b83\uff08\u8bb0\u5f97\u5bfc\u5165\uff09\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u628a BarChart \u7ec4\u4ef6\u653e\u5230 class \u4e3a wrapper \u7684 div \u5bb9\u5668\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u628a boxOfficeData \u4f20\u9012\u7ed9\u5b83\uff0c\u5e76\u6dfb\u52a0\u4e00\u4e2a chart class \u6837\u5f0f\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <div class="wrapper">\n    <BarChart :boxOfficeData="boxOfficeData" class="chart" />\n  </div>\n</template>\n')),(0,l.kt)("p",null,"\u6837\u5f0f\u91cc\u4e3b\u8981\u8bbe\u7f6e\u4e86\u80cc\u666f\u8272\u548c\u5bb9\u5668\u7684\u5e03\u5c40\u3002\u5bb9\u5668\u4f7f\u7528 grid \u5e03\u5c40\uff0c\u628a\u56fe\u8868\u653e\u5230\u4e2d\u95f4\uff0c\u8fd9\u91cc\u8bbe\u7f6e\u4e3a\u4e86\u4e24\u884c\uff0c\u662f\u4e3a\u4e86\u7ed9\u4e0b\u671f\u89c6\u9891\u7684\u73af\u5f62\u56fe\u7559\u51fa\u7a7a\u4f4d\uff0c\u6700\u540e\u518d\u8bbe\u7f6e\u67f1\u72b6\u56fe\u7684\u5bbd\u9ad8\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background: hsl(210deg, 20%, 10%);\n}\n\n.wrapper {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  width: 100vw;\n  height: 100vh;\n  align-items: center;\n  justify-items: center;\n}\n.wrapper .chart {\n  width: 80%;\n  height: 400px;\n}\n")),(0,l.kt)("h2",{id:"\u9884\u89c8\u6548\u679c"},"\u9884\u89c8\u6548\u679c"),(0,l.kt)("p",null,"\u8fd0\u884c yarn dev \u6765\u770b\u4e00\u4e0b\u6548\u679c\uff0c\u8fd9\u4e2a\u5c31\u662f\u6211\u4eec\u6700\u7ec8\u914d\u7f6e\u7684\u67f1\u72b6\u56fe\u3002"),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u5728\u8fd9\u4e2a\u89c6\u9891\u4e2d\uff0c\u6211\u4eec\u4f5c\u4e86\u8fd9\u4e9b\u64cd\u4f5c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u51c6\u5907\u793a\u4f8b\u7968\u623f\u6570\u636e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728 App.vue \u4e2d\u83b7\u53d6\u7968\u623f\u6570\u636e\u5e76\u4f20\u9012\u7ed9 barChart \u7ec4\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"barChart \u7ec4\u4ef6\u6839\u636e\u539f\u59cb\u7968\u623f\u6570\u636e\uff0c\u6784\u5efa echarts \u6240\u9700\u8981\u7684\u6570\u636e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u81ea\u5b9a\u4e49\u7684\u67f1\u72b6\u56fe\u914d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u67f1\u72b6\u56fe\u6837\u5f0f\u3002")),(0,l.kt)("span",null,"\n    ",(0,l.kt)("ins",{parentName:"span",className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-3487507367729662","data-ad-slot":"1964508460"}),"\n  ",(0,l.kt)("script",{parentName:"span"},"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n  ")),(0,l.kt)("p",null,"\u597d\u4e86\uff0c\u8fd9\u4e2a\u5c31\u662f\u4f7f\u7528 echarts \u81ea\u5b9a\u4e49\u67f1\u72b6\u56fe\u5c55\u793a\u7968\u623f\u6570\u636e\u7684\u8fc7\u7a0b\uff0c\u4f60\u5b66\u4f1a\u4e86\u5417\uff1f\u5982\u679c\u6709\u5e2e\u52a9\uff0c\u8bf7\u4e09\u8fde\uff0c\u60f3\u66f4\u597d\u7684\u5b66\u524d\u7aef\uff0c\u8bf7\u5173\u6ce8peternodejs\u524d\u7aef\u5de5\u7a0b\u5e08\uff0c\u611f\u8c22\u89c2\u770b\uff01"))}f.isMDXComponent=!0},8632:function(e,n,t){"use strict";n.Z=t.p+"assets/images/2021-04-09-22-07-10-4be3ceb9afa89a4c8af64c43f865d964.webp"}}]);