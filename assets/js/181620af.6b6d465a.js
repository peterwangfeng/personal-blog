(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[9853],{2122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},9756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1712:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),a=n(5697),o=n.n(a),l="videoFrame_d6vX";function i(e){var t=e.src;e.bsrc;return r.createElement(r.Fragment,null,r.createElement("iframe",{src:t,loading:"lazy",scrolling:"no",border:0,frameBorder:"no",framespacing:0,allowFullScreen:!0,className:l}))}i.propTypes={src:o().string.isRequired,bsrc:o().string};var u=i},7745:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l=n(1712),i={id:"vue-echarts-doughnut-chart",title:"Vue 3.0 + ECharts \u5b9e\u73b0\u7535\u5f71\u7968\u623f\u81ea\u5b9a\u4e49\u73af\u5f62\u56fe\u6559\u7a0b",slug:"../vue-echarts-doughnut-chart",description:"\u4e0a\u671f\u89c6\u9891\u6211\u4eec\u5b9e\u73b0\u4e86\u7968\u623f\u7684\u67f1\u72b6\u56fe\u5c55\u793a\uff0c\u90a3\u4e48\u8fd9\u671f\u89c6\u9891\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u73af\u5f62\u56fe\u7684\u914d\u7f6e\u3002\u5148\u770b\u4e00\u4e0b\u6700\u7ec8\u6548\u679c\uff0c\u73af\u5f62\u56fe\u7684\u5404\u4e2a\u90e8\u5206\u8868\u793a\u7684\u662f\u67d0\u4e2a\u7535\u5f71\u7684\u7968\u623f\u5360\u6bd4\uff0c\u5360\u6bd4\u8d8a\u9ad8\u7684\u989c\u8272\u8d8a\u6d45\uff0c\u5360\u6bd4\u8d8a\u4f4e\u7684\u989c\u8272\u8d8a\u6df1\uff0c\u6bcf\u90e8\u5206\u8fd8\u4f1a\u6709\u6307\u793a\u7ebf\uff0c\u914d\u6709\u6587\u672c\u6307\u660e\u8fd9\u5757\u533a\u57df\u662f\u54ea\u90e8\u7535\u5f71\uff0c\u5360\u6bd4\u662f\u591a\u5c11\u3002\u9f20\u6807\u79fb\u5230\u67d0\u533a\u57df\u7684\u65f6\u5019\uff0c\u4f1a\u663e\u793a\u63d0\u793a\u6846\uff0c\u4e0a\u9762\u6709\u7535\u5f71\u540d\u548c\u5177\u4f53\u7684\u6570\u503c\u3002\u5728\u5927\u4f53\u4e86\u89e3\u505a\u6210\u4ec0\u4e48\u6837\u4e4b\u540e\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u7ec4\u4ef6\u7684\u4e3b\u8981\u4ee3\u7801\u3002",keywords:["vue","echarts","vue-echarts","\u67f1\u72b6\u56fe","\u524d\u7aef","frontend"]},u=void 0,s={unversionedId:"videos/vue/vue-echarts-doughnut-chart/vue-echarts-doughnut-chart",id:"videos/vue/vue-echarts-doughnut-chart/vue-echarts-doughnut-chart",isDocsHomePage:!1,title:"Vue 3.0 + ECharts \u5b9e\u73b0\u7535\u5f71\u7968\u623f\u81ea\u5b9a\u4e49\u73af\u5f62\u56fe\u6559\u7a0b",description:"\u4e0a\u671f\u89c6\u9891\u6211\u4eec\u5b9e\u73b0\u4e86\u7968\u623f\u7684\u67f1\u72b6\u56fe\u5c55\u793a\uff0c\u90a3\u4e48\u8fd9\u671f\u89c6\u9891\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u73af\u5f62\u56fe\u7684\u914d\u7f6e\u3002\u5148\u770b\u4e00\u4e0b\u6700\u7ec8\u6548\u679c\uff0c\u73af\u5f62\u56fe\u7684\u5404\u4e2a\u90e8\u5206\u8868\u793a\u7684\u662f\u67d0\u4e2a\u7535\u5f71\u7684\u7968\u623f\u5360\u6bd4\uff0c\u5360\u6bd4\u8d8a\u9ad8\u7684\u989c\u8272\u8d8a\u6d45\uff0c\u5360\u6bd4\u8d8a\u4f4e\u7684\u989c\u8272\u8d8a\u6df1\uff0c\u6bcf\u90e8\u5206\u8fd8\u4f1a\u6709\u6307\u793a\u7ebf\uff0c\u914d\u6709\u6587\u672c\u6307\u660e\u8fd9\u5757\u533a\u57df\u662f\u54ea\u90e8\u7535\u5f71\uff0c\u5360\u6bd4\u662f\u591a\u5c11\u3002\u9f20\u6807\u79fb\u5230\u67d0\u533a\u57df\u7684\u65f6\u5019\uff0c\u4f1a\u663e\u793a\u63d0\u793a\u6846\uff0c\u4e0a\u9762\u6709\u7535\u5f71\u540d\u548c\u5177\u4f53\u7684\u6570\u503c\u3002\u5728\u5927\u4f53\u4e86\u89e3\u505a\u6210\u4ec0\u4e48\u6837\u4e4b\u540e\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u7ec4\u4ef6\u7684\u4e3b\u8981\u4ee3\u7801\u3002",source:"@site/docs/videos/vue/06-vue-echarts-doughnut-chart/index.md",sourceDirName:"videos/vue/06-vue-echarts-doughnut-chart",slug:"/videos/vue/vue-echarts-doughnut-chart",permalink:"/docs/videos/vue/vue-echarts-doughnut-chart",editUrl:"https://github.com/peterwangfeng/zxuqian.cn/tree/master/docs/videos/vue/06-vue-echarts-doughnut-chart/index.md",version:"current",frontMatter:{id:"vue-echarts-doughnut-chart",title:"Vue 3.0 + ECharts \u5b9e\u73b0\u7535\u5f71\u7968\u623f\u81ea\u5b9a\u4e49\u73af\u5f62\u56fe\u6559\u7a0b",slug:"../vue-echarts-doughnut-chart",description:"\u4e0a\u671f\u89c6\u9891\u6211\u4eec\u5b9e\u73b0\u4e86\u7968\u623f\u7684\u67f1\u72b6\u56fe\u5c55\u793a\uff0c\u90a3\u4e48\u8fd9\u671f\u89c6\u9891\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u73af\u5f62\u56fe\u7684\u914d\u7f6e\u3002\u5148\u770b\u4e00\u4e0b\u6700\u7ec8\u6548\u679c\uff0c\u73af\u5f62\u56fe\u7684\u5404\u4e2a\u90e8\u5206\u8868\u793a\u7684\u662f\u67d0\u4e2a\u7535\u5f71\u7684\u7968\u623f\u5360\u6bd4\uff0c\u5360\u6bd4\u8d8a\u9ad8\u7684\u989c\u8272\u8d8a\u6d45\uff0c\u5360\u6bd4\u8d8a\u4f4e\u7684\u989c\u8272\u8d8a\u6df1\uff0c\u6bcf\u90e8\u5206\u8fd8\u4f1a\u6709\u6307\u793a\u7ebf\uff0c\u914d\u6709\u6587\u672c\u6307\u660e\u8fd9\u5757\u533a\u57df\u662f\u54ea\u90e8\u7535\u5f71\uff0c\u5360\u6bd4\u662f\u591a\u5c11\u3002\u9f20\u6807\u79fb\u5230\u67d0\u533a\u57df\u7684\u65f6\u5019\uff0c\u4f1a\u663e\u793a\u63d0\u793a\u6846\uff0c\u4e0a\u9762\u6709\u7535\u5f71\u540d\u548c\u5177\u4f53\u7684\u6570\u503c\u3002\u5728\u5927\u4f53\u4e86\u89e3\u505a\u6210\u4ec0\u4e48\u6837\u4e4b\u540e\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u7ec4\u4ef6\u7684\u4e3b\u8981\u4ee3\u7801\u3002",keywords:["vue","echarts","vue-echarts","\u67f1\u72b6\u56fe","\u524d\u7aef","frontend"]},sidebar:"videos",previous:{title:"Vue 3.0 + Echarts \u7535\u5f71\u7968\u623f\u6570\u636e\u53ef\u89c6\u5316\u67f1\u72b6\u56fe\u5c55\u793a",permalink:"/docs/videos/vue/vue-echarts-bar-chart"},next:{title:"TypeScript \u5165\u95e8\u6559\u7a0b",permalink:"/docs/videos/ts/typscript-intro"}},c=[{value:"\u521b\u5efa\u7ec4\u4ef6",id:"\u521b\u5efa\u7ec4\u4ef6",children:[]},{value:"\u7f16\u5199\u914d\u7f6e",id:"\u7f16\u5199\u914d\u7f6e",children:[]},{value:"\u9884\u89c8\u6548\u679c",id:"\u9884\u89c8\u6548\u679c",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e0a\u671f\u89c6\u9891\u6211\u4eec\u5b9e\u73b0\u4e86\u7968\u623f\u7684\u67f1\u72b6\u56fe\u5c55\u793a\uff0c\u90a3\u4e48\u8fd9\u671f\u89c6\u9891\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u73af\u5f62\u56fe\u7684\u914d\u7f6e\u3002\u5148\u770b\u4e00\u4e0b\u6700\u7ec8\u6548\u679c\uff0c\u73af\u5f62\u56fe\u7684\u5404\u4e2a\u90e8\u5206\u8868\u793a\u7684\u662f\u67d0\u4e2a\u7535\u5f71\u7684\u7968\u623f\u5360\u6bd4\uff0c\u5360\u6bd4\u8d8a\u9ad8\u7684\u989c\u8272\u8d8a\u6d45\uff0c\u5360\u6bd4\u8d8a\u4f4e\u7684\u989c\u8272\u8d8a\u6df1\uff0c\u6bcf\u90e8\u5206\u8fd8\u4f1a\u6709\u6307\u793a\u7ebf\uff0c\u914d\u6709\u6587\u672c\u6307\u660e\u8fd9\u5757\u533a\u57df\u662f\u54ea\u90e8\u7535\u5f71\uff0c\u5360\u6bd4\u662f\u591a\u5c11\u3002\u9f20\u6807\u79fb\u5230\u67d0\u533a\u57df\u7684\u65f6\u5019\uff0c\u4f1a\u663e\u793a\u63d0\u793a\u6846\uff0c\u4e0a\u9762\u6709\u7535\u5f71\u540d\u548c\u5177\u4f53\u7684\u6570\u503c\u3002"),(0,o.kt)(l.Z,{src:"//player.bilibili.com/player.html?aid=205062554&bvid=BV1zh411U7Xi&cid=321904256&page=1",mdxType:"BVideo"}),(0,o.kt)("p",null,"\u5728\u5927\u4f53\u4e86\u89e3\u505a\u6210\u4ec0\u4e48\u6837\u4e4b\u540e\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u7ec4\u4ef6\u7684\u4e3b\u8981\u4ee3\u7801\u3002"),(0,o.kt)("h2",{id:"\u521b\u5efa\u7ec4\u4ef6"},"\u521b\u5efa\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u73af\u5f62\u56fe\u7ec4\u4ef6\u7684\u4ee3\u7801\u4f4d\u4e8e src/components/DoughnutChart.vue \u4e2d\uff0c\u5b83\u7684\u4ee3\u7801\u8ddf\u67f1\u72b6\u56fe\u7684\u51e0\u4e4e\u4e00\u6837\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6839\u636e\u4f20\u9012\u8fdb\u6765\u7684\u7968\u623f\u6570\u636e\u751f\u6210\u56fe\u8868\u6570\u636e\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u8981\u6ce8\u610f\u7684\u662f\uff0c\u73af\u5f62\u56fe\u9700\u8981\u7684\u6570\u636e\u53ea\u6709\u4e00\u4e2a\u7ef4\u5ea6\uff0c\u5728 populateMovieData() \u51fd\u6570\u4e2d\u53ea\u8fd4\u56de\u4e86\u4e00\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u4e2d\u7684\u5bf9\u8c61\u6709 name \u548c value \u5c5e\u6027\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6700\u540e\u4f7f\u7528\u5c01\u88c5\u7684 echarts \u57fa\u7840\u7ec4\u4ef6\u8fdb\u884c\u6e32\u67d3\u3002")),(0,o.kt)("p",null,"\u56e0\u4e3a\u548c\u67f1\u72b6\u56fe\u7684\u4ee3\u7801\u6781\u5176\u76f8\u4f3c\uff0c\u90a3\u4e48\u6211\u4eec\u662f\u5426\u53ef\u4ee5\u628a\u5b83\u62bd\u79bb\u6210\u901a\u7528\u7684\u5462\uff1f\u7b54\u6848\u662f\u80af\u5b9a\u7684\uff0c\u53ef\u4ee5\u53c2\u7167\u4e4b\u524d\u7684 Vue 3 Todo App \u6559\u7a0b\u628a\u5b83\u62bd\u79bb\u6210 composables\uff0c\u8fd9\u91cc\u5c31\u4e0d\u6f14\u793a\u4e86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <Chart :options="options" />\n</template>\n\n<script setup>\nimport Chart from "./Chart.vue";\nimport doughnutChartCreator from "../charts/doughnutChart.js";\nimport { computed, toRefs } from "vue";\n\nconst props = defineProps({\n  boxOfficeData: Array,\n});\n\nconst { boxOfficeData } = toRefs(props);\n\nconst options = computed(() => {\n  const data = populateMovieData(boxOfficeData.value);\n  return doughnutChartCreator(data);\n});\n\nfunction populateMovieData(rawData) {\n  let data = [];\n  rawData.forEach((movie) => {\n    data.push({\n      name: movie?.name,\n      value: movie?.boxOffice,\n    });\n  });\n  return data;\n}\n<\/script>\n\n')),(0,o.kt)("span",null,"\n    ",(0,o.kt)("ins",{parentName:"span",className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-3487507367729662","data-ad-slot":"3539166782"}),"\n  ",(0,o.kt)("script",{parentName:"span"},"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n  ")),(0,o.kt)("h2",{id:"\u7f16\u5199\u914d\u7f6e"},"\u7f16\u5199\u914d\u7f6e"),(0,o.kt)("p",null,"\u6211\u4eec\u63a5\u4e0b\u6765\u770b\u4e00\u4e0b doughnutChartCreator() \u4e2d\u7684\u914d\u7f6e\u9879\uff0c\u4ee3\u7801\u4f4d\u4e8e src/charts/doughnutChart.js \u4e2d\u3002\u5b83\u5bfc\u51fa\u4e86\u4e00\u4e2a\u63a5\u6536 data \u4f5c\u4e3a\u53c2\u6570\u7684\u51fd\u6570\uff0c\u5e76\u8fd4\u56de\u56fe\u8868\u7684\u914d\u7f6e\u9879\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u5b83\u4eec\u7684\u542b\u4e49\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"title \u90e8\u5206\u548c\u67f1\u72b6\u56fe\u7684\u4e00\u6837\uff0c\u8bbe\u7f6e\u4e86\u6807\u9898\u548c\u5b57\u4f53\u3002"),(0,o.kt)("li",{parentName:"ul"},"tooltip \u662f\u8bbe\u7f6e\u9f20\u6807\u79fb\u5230\u73af\u5f62\u56fe\u67d0\u4e2a\u533a\u57df\u65f6\uff0c\u5f39\u51fa\u7684\u63d0\u793a\u6846\u3002",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"trigger \u8bbe\u7f6e\u4e3a item \u610f\u601d\u4e3a\u89e6\u53d1\u63d0\u793a\u6846\u7684\u662f\u73af\u5f62\u56fe\u7684\u5404\u5757\u533a\u57df\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u540e\u9762\u7684\u5c5e\u6027\u5206\u522b\u8bbe\u7f6e\u4e86\u5185\u95f4\u8ddd\u3001\u8fb9\u6846\u3001\u9634\u5f71\u548c\u6587\u672c\u6837\u5f0f\u3002\u5185\u95f4\u8ddd\u7684\u8bbe\u7f6e\u65b9\u6cd5\u3001\u987a\u5e8f\u548c css \u4e2d\u7684\u4e00\u6837\uff0c\u53ea\u662f\u7528\u6570\u7ec4\u8868\u793a\uff0cextraCssText \u5219\u662f\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u7684 css \u6837\u5f0f\u3002"))),(0,o.kt)("li",{parentName:"ul"},"color \u8bbe\u7f6e\u73af\u5f62\u56fe\u6240\u7528\u5230\u7684\u989c\u8272\uff0c\u901a\u8fc7 hsl \u989c\u8272\u8868\u793a\u6cd5\u8868\u793a\uff0c\u53ea\u9700\u8981\u8c03\u6574\u9971\u548c\u5ea6\u548c\u4eae\u5ea6\u90e8\u5206\uff0c\u5c31\u80fd\u8868\u793a\u6d45\u7ea2\u5230\u6df1\u7ea2\u7684\u989c\u8272\u3002"),(0,o.kt)("li",{parentName:"ul"},"series \u7528\u6765\u914d\u7f6e\u73af\u5f62\u672c\u8eab\u3002",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\u4e3a pie \u997c\u56fe\uff0c\u7136\u540e\u901a\u8fc7 radis \u8bbe\u7f6e\u5185\u3001\u5916\u534a\u5f84\u6765\u628a\u5b83\u53d8\u6210\u73af\u5f62\u56fe\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8d77\u59cb\u89d2\u5ea6\u8bbe\u7f6e\u4e3a 160 \u5ea6\uff0c\u8fd9\u6837\u5404\u4e2a\u7535\u5f71\u5728\u56fe\u8868\u4e2d\u7684\u5206\u5e03\u6bd4\u8f83\u5e73\u5747\u3002\u518d\u8bbe\u7f6e\u8ddd\u79bb\u4e0a\u65b9 60 \u4e2a\u8ddd\u79bb\u5355\u4f4d\u3002"),(0,o.kt)("li",{parentName:"ul"},"label \u7528\u6765\u8bbe\u7f6e\u73af\u5f62\u56fe\u5404\u4e2a\u90e8\u5206\u7684\u6587\u672c\u8bf4\u660e\uff0c\u7ed9\u5b83\u8bbe\u7f6e\u4e3a\u663e\u793a\u5728\u5916\u4fa7\uff0c\u4e0e\u6307\u793a\u7ebf\u5bf9\u9f50\uff0c\u8c03\u6574\u8fb9\u754c\u7684\u8ddd\u79bb\uff0c\u989c\u8272\u548c\u5b57\u4f53\u3002",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"label \u4e2d\u7684\u6587\u672c\u4f7f\u7528 formatter \u548c rich \u6765\u5bf9\u67d0\u90e8\u5206\u6587\u672c\u5355\u72ec\u8bbe\u7f6e\u6837\u5f0f\u3002"),(0,o.kt)("li",{parentName:"ul"},"formatter \u4e2d\u7684 {b}\u3001{d} \u662f\u5360\u4f4d\u7b26\uff0c\u5206\u522b\u8868\u793a\u6570\u636e\u540d\uff0c\u4e5f\u5c31\u662f\u7535\u5f71\u540d\uff0c\u548c\u767e\u5206\u6bd4\u3002 {d}% \u524d\u8fb9\u7684 d | \u76f8\u5f53\u4e8e\u662f css \u4e2d\u7684 class\uff0c\u53ef\u4ee5\u5728 rich \u4e2d\u5f15\u7528\u3002"),(0,o.kt)("li",{parentName:"ul"},"rich \u91cc\u901a\u8fc7\u5f15\u7528 d \u6765\u8bbe\u7f6e\u767e\u5206\u6bd4\u7684\u6837\u5f0f\uff0c\u7ed9\u6587\u5b57\u6dfb\u52a0\u80cc\u666f\u3001\u5706\u89d2\u548c\u95f4\u8ddd\uff0c\u8fd9\u6837\u6587\u5b57\u5c31\u4f1a\u663e\u793a\u4e3a tag \u6837\u5f0f\uff0c\u7136\u540e\u8bbe\u7f6e\u5b57\u4f53\u989c\u8272\u548c\u52a0\u7c97\u3002"))),(0,o.kt)("li",{parentName:"ul"},"emphasis \u8bbe\u7f6e\u9f20\u6807\u79fb\u5230\u73af\u5f62\u533a\u57df\u540e\u7684\u9ad8\u4eae\u6837\u5f0f\uff0c\u7ed9 label \u8bbe\u7f6e\u52a0\u7c97\u5e76\u589e\u52a0\u5b57\u4f53\u5c3a\u5bf8\uff0c\u8fd9\u6837\u9f20\u6807\u79fb\u4e0a\u53bb\uff0clabel \u5c31\u6709\u4e86\u653e\u5927\u7684\u6548\u679c\u3002"),(0,o.kt)("li",{parentName:"ul"},"labelLine \u7528\u4e8e\u8bbe\u7f6e\u6307\u793a\u7ebf\u7684\u6837\u5f0f\u3002",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"length \u8bbe\u7f6e\u8d77\u59cb\u6bb5\u957f\u5ea6\uff0clength2 \u8bbe\u7f6e\u5f2f\u6298\u540e\u7684\u957f\u5ea6\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u518d\u628a\u5b83\u8bbe\u7f6e\u4e3a\u5e73\u6ed1\u3001\u865a\u7ebf\u3002"))),(0,o.kt)("li",{parentName:"ul"},"\u6700\u540e\uff0c\u628a\u4f20\u9012\u8fdb\u6765\u7684 data \u8bbe\u7f6e\u5230 series \u4e2d\u3002")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'export default (data) => ({\n  title: {\n    text: "\u7535\u5f71\u5f53\u65e5\u7efc\u5408\u7968\u623f\u5360\u6bd4",\n    subtext: "\u6570\u636e\u6765\u81ea\u732b\u773c\u7535\u5f71\uff08\u975e\u5b9e\u65f6\uff09",\n    textStyle: {\n      fontSize: 24,\n      color: "hsl(0deg, 100%, 100%)",\n    },\n    subtextStyle: {\n      fontSize: 14,\n      color: "hsl(0deg, 20%, 75%)",\n    },\n  },\n  tooltip: {\n    trigger: "item",\n    padding: [14, 24],\n    borderWidth: 0,\n    extraCssText: "box-shadow: 0 0 24px hsl(0, 100%, 50%, 0.2);",\n    textStyle: {\n      fontWeight: "bold",\n      color: "hsl(0deg, 0%, 40%)",\n    },\n  },\n  color: [\n    "hsl(0deg, 100%, 70%)",\n    "hsl(0deg, 90%, 60%)",\n    "hsl(0deg, 80%, 50%)",\n    "hsl(0deg, 70%, 45%)",\n    "hsl(0deg, 60%, 40%)",\n    "hsl(0deg, 50%, 35%)",\n    "hsl(0deg, 40%, 30%)",\n  ],\n  series: [\n    {\n      type: "pie",\n      radius: ["50%", "70%"],\n      startAngle: 160,\n      top: 60,\n      label: {\n        show: true,\n        position: "outer",\n        alignTo: "labelLine",\n        edgeDistance: "3%",\n        distanceToLabelLine: 20,\n        color: "hsl(0deg, 100%, 98%)",\n        fontSize: 14,\n        fontWeight: "bold",\n        formatter: "{b} {d|{d}%}",\n        rich: {\n          d: {\n            backgroundColor: "hsl(0deg, 100%, 70%)",\n            borderRadius: 4,\n            padding: [4, 8],\n            color: "white",\n            fontWeight: "bold",\n          },\n        },\n      },\n      emphasis: {\n        label: {\n          show: true,\n          fontSize: 18,\n          fontWeight: "bold",\n        },\n      },\n      labelLine: {\n        length: 30,\n        length2: "20%",\n        smooth: true,\n        lineStyle: {\n          type: "dashed",\n        },\n      },\n      data: data,\n    },\n  ],\n  backgroundColor: "transparent",\n});\n')),(0,o.kt)("h2",{id:"\u9884\u89c8\u6548\u679c"},"\u9884\u89c8\u6548\u679c"),(0,o.kt)("p",null,"\u6211\u4eec\u5728 App.vue \u7684 template \u4e2d\u52a0\u8f7d DoughnutChart \u7ec4\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <div class="wrapper">\n    <BarChart :boxOfficeData="boxOfficeData" class="chart" />\n    <DoughnutChart :boxOfficeData="boxOfficeData" class="chart" />\n  </div>\n</template>\n')),(0,o.kt)("span",null,"\n    ",(0,o.kt)("ins",{parentName:"span",className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-3487507367729662","data-ad-slot":"1964508460"}),"\n  ",(0,o.kt)("script",{parentName:"span"},"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n  ")),(0,o.kt)("p",null,"\u542f\u52a8\u4e00\u4e0b\u670d\u52a1\uff0c\u5c31\u53ef\u4ee5\u770b\u5230\u73af\u5f62\u56fe\u7684\u5b9e\u9645\u6548\u679c\u4e86\u3002\n\u597d\u4e86\uff0c\u8fd9\u4e2a\u5c31\u662f Vue + Echarts \u5b9e\u73b0\u7535\u5f71\u7968\u623f\u73af\u5f62\u56fe\u7684\u6559\u7a0b\uff0c\u4f60\u5b66\u4f1a\u4e86\u5417\uff1f\u5982\u679c\u6709\u5e2e\u52a9\uff0c\u8bf7\u4e09\u8fde\uff0c\u60f3\u66f4\u597d\u7684\u5b66\u524d\u7aef\uff0c\u8bf7\u5173\u6ce8peternodejs\u524d\u7aef\u5de5\u7a0b\u5e08\uff0c\u611f\u8c22\u89c2\u770b\uff01"))}d.isMDXComponent=!0}}]);