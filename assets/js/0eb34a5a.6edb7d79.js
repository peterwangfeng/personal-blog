(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[8828],{2122:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},9756:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}r.d(t,{Z:function(){return n}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),p=i,v=d["".concat(c,".").concat(p)]||d[p]||f[p]||o;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1712:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7294),i=r(5697),o=r.n(i),a="videoFrame_d6vX";function s(e){var t=e.src;e.bsrc;return n.createElement(n.Fragment,null,n.createElement("iframe",{src:t,loading:"lazy",scrolling:"no",border:0,frameBorder:"no",framespacing:0,allowFullScreen:!0,className:a}))}s.propTypes={src:o().string.isRequired,bsrc:o().string};var c=s},7122:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a=r(1712),s={id:"effects-resizable",title:"\u4f7f\u7528 2 \u884c CSS \u4ee3\u7801\u5b9e\u73b0\u53ef\u7f29\u653e\u7684 HTML \u5143\u7d20",description:"CSS \u91cc\u6709\u4e00\u4e2a resize \u5c5e\u6027\uff0c\u53ef\u4ee5\u7ed9 HTML \u5143\u7d20\u6dfb\u52a0\u4e0a\u7f29\u653e\u6309\u94ae\uff0c\u5c31\u50cf textarea \u5143\u7d20\u7684\u4e00\u6837\u3002\u4e0d\u8fc7\u5b83\u53ea\u80fd\u7ed9\u5757\u7ea7\u5143\u7d20\uff0c\u4f8b\u5982 div \u6dfb\u52a0\uff0c\u5e76\u4e14\u9700\u8981\u628a\u5143\u7d20\u7684 overflow \u5c5e\u6027\u8bbe\u7f6e\u4e3a auto\u3001hidden \u6216 scroll \u5176\u4e2d\u7684\u4e00\u79cd\u3002resize \u5e38\u7528\u7684\u5c5e\u6027\u503c\u6709 horizontal\u3001vertical \u548c both \u4e09\u79cd\u5c5e\u6027\uff0c\u5206\u522b\u63a7\u5236\u662f\u5426\u53ef\u4ee5\u6c34\u5e73\u7f29\u653e\u3001\u5782\u76f4\u7f29\u653e\u6216\u540c\u65f6\u7f29\u653e\u3002",slug:"../effects-resizable",keywords:["css","resizable","resize","\u7279\u6548","\u524d\u7aef","frontend"]},c=void 0,l={unversionedId:"videos/effects/resize/effects-resizable",id:"videos/effects/resize/effects-resizable",isDocsHomePage:!1,title:"\u4f7f\u7528 2 \u884c CSS \u4ee3\u7801\u5b9e\u73b0\u53ef\u7f29\u653e\u7684 HTML \u5143\u7d20",description:"CSS \u91cc\u6709\u4e00\u4e2a resize \u5c5e\u6027\uff0c\u53ef\u4ee5\u7ed9 HTML \u5143\u7d20\u6dfb\u52a0\u4e0a\u7f29\u653e\u6309\u94ae\uff0c\u5c31\u50cf textarea \u5143\u7d20\u7684\u4e00\u6837\u3002\u4e0d\u8fc7\u5b83\u53ea\u80fd\u7ed9\u5757\u7ea7\u5143\u7d20\uff0c\u4f8b\u5982 div \u6dfb\u52a0\uff0c\u5e76\u4e14\u9700\u8981\u628a\u5143\u7d20\u7684 overflow \u5c5e\u6027\u8bbe\u7f6e\u4e3a auto\u3001hidden \u6216 scroll \u5176\u4e2d\u7684\u4e00\u79cd\u3002resize \u5e38\u7528\u7684\u5c5e\u6027\u503c\u6709 horizontal\u3001vertical \u548c both \u4e09\u79cd\u5c5e\u6027\uff0c\u5206\u522b\u63a7\u5236\u662f\u5426\u53ef\u4ee5\u6c34\u5e73\u7f29\u653e\u3001\u5782\u76f4\u7f29\u653e\u6216\u540c\u65f6\u7f29\u653e\u3002",source:"@site/docs/videos/effects/03-resize/index.md",sourceDirName:"videos/effects/03-resize",slug:"/videos/effects/effects-resizable",permalink:"/docs/videos/effects/effects-resizable",editUrl:"https://github.com/peterwangfeng/zxuqian.cn/tree/master/docs/videos/effects/03-resize/index.md",version:"current",frontMatter:{id:"effects-resizable",title:"\u4f7f\u7528 2 \u884c CSS \u4ee3\u7801\u5b9e\u73b0\u53ef\u7f29\u653e\u7684 HTML \u5143\u7d20",description:"CSS \u91cc\u6709\u4e00\u4e2a resize \u5c5e\u6027\uff0c\u53ef\u4ee5\u7ed9 HTML \u5143\u7d20\u6dfb\u52a0\u4e0a\u7f29\u653e\u6309\u94ae\uff0c\u5c31\u50cf textarea \u5143\u7d20\u7684\u4e00\u6837\u3002\u4e0d\u8fc7\u5b83\u53ea\u80fd\u7ed9\u5757\u7ea7\u5143\u7d20\uff0c\u4f8b\u5982 div \u6dfb\u52a0\uff0c\u5e76\u4e14\u9700\u8981\u628a\u5143\u7d20\u7684 overflow \u5c5e\u6027\u8bbe\u7f6e\u4e3a auto\u3001hidden \u6216 scroll \u5176\u4e2d\u7684\u4e00\u79cd\u3002resize \u5e38\u7528\u7684\u5c5e\u6027\u503c\u6709 horizontal\u3001vertical \u548c both \u4e09\u79cd\u5c5e\u6027\uff0c\u5206\u522b\u63a7\u5236\u662f\u5426\u53ef\u4ee5\u6c34\u5e73\u7f29\u653e\u3001\u5782\u76f4\u7f29\u653e\u6216\u540c\u65f6\u7f29\u653e\u3002",slug:"../effects-resizable",keywords:["css","resizable","resize","\u7279\u6548","\u524d\u7aef","frontend"]},sidebar:"videos",previous:{title:"\u4f7f\u7528 CSS \u5b9e\u73b0\u8d5b\u535a\u670b\u514b 2077 \u5b98\u7f51\u6309\u94ae\u8272\u5dee\u6545\u969c",permalink:"/docs/videos/effects/effects-glitch"},next:{title:"\u4f7f\u7528 CSS \u5b9e\u73b0\u6e10\u53d8\u80cc\u666f\u8272\u8fc7\u6e21\u52a8\u753b",permalink:"/docs/videos/effects/css-gradient-animation"}},u=[],f={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"2\u884cCSS\u4ee3\u7801\u5b9e\u73b0\u53ef\u8c03\u6574\u5c3a\u5bf8\u7684UI\u7ec4\u4ef6"),(0,o.kt)(a.Z,{src:"//player.bilibili.com/player.html?aid=971114084&bvid=BV1Hp4y1x7tN&cid=279797633&page=1",bsrc:"https://www.bilibili.com/video/BV1Hp4y1x7tN/",mdxType:"BVideo"}),(0,o.kt)("p",null,"\u6211\u4eec\u77e5\u9053 ",(0,o.kt)("textarea",null)," \u6587\u672c\u6846\u53ef\u4ee5\u4f7f\u7528\u62d6\u62fd\u7684\u65b9\u5f0f\u8c03\u6574\u5b83\u7684\u5927\u5c0f\u3002"),(0,o.kt)("p",null,"\u90a3\u4e48\u53ef\u4e0d\u53ef\u4ee5\u7ed9\u5176\u5b83\u5143\u7d20\u4e5f\u8bbe\u7f6e\u6210\u53ef\u8c03\u6574\u5c3a\u5bf8\u7684\u5462\uff1f"),(0,o.kt)("p",null,"\u7b54\u6848\u662f\u4e0d\u80fd....\u624d\u602a\u3002CSS \u91cc\u6709\u4e00\u4e2a resize \u5c5e\u6027\uff0c\u53ef\u4ee5\u7ed9 HTML \u5143\u7d20\u6dfb\u52a0\u4e0a\u7f29\u653e\u6309\u94ae\uff0c\u5c31\u50cf textarea \u5143\u7d20\u7684\u4e00\u6837\u3002\u4e0d\u8fc7\u5b83\u53ea\u80fd\u7ed9\u5757\u7ea7\u5143\u7d20\uff0c\u4f8b\u5982 div \u6dfb\u52a0\uff0c\u5e76\u4e14\u9700\u8981\u628a\u5143\u7d20\u7684 overflow \u5c5e\u6027\u8bbe\u7f6e\u4e3a auto\u3001hidden \u6216 scroll \u5176\u4e2d\u7684\u4e00\u79cd\u3002resize \u5e38\u7528\u7684\u5c5e\u6027\u503c\u6709 horizontal\u3001vertical \u548c both \u4e09\u79cd\u5c5e\u6027\uff0c\u5206\u522b\u63a7\u5236\u662f\u5426\u53ef\u4ee5\u6c34\u5e73\u7f29\u653e\u3001\u5782\u76f4\u7f29\u653e\u6216\u540c\u65f6\u7f29\u653e\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u662f svg \u6216\u56fe\u7247\uff0c\u90a3\u4e48\u53ef\u4ee5\u628a\u5b83\u4eec\u653e\u5230 div \u5bb9\u5668\u4e2d\uff0c\u5e76\u5360\u6ee1\u5bb9\u5668\u7684 100%\uff0c\u7136\u540e\u901a\u8fc7\u628a\u5bb9\u5668\u8bbe\u7f6e\u4e3a\u53ef\u7f29\u653e\u7684\u4e4b\u540e\uff0c\u91cc\u8fb9\u7684\u56fe\u7247\u4e5f\u5c31\u53ef\u4ee5\u968f\u4e4b\u8c03\u6574\u5c3a\u5bf8\u4e86\u3002"),(0,o.kt)("p",null,"resize \u5c5e\u6027\u652f\u6301 chrome\u3001edge\u3001safari \u7b49\u4e3b\u6d41\u6d4f\u89c8\u5668\uff0c\u4e0d\u652f\u6301 IE\u3002"),(0,o.kt)("p",null,"\u597d\u4e86\uff0c\u8fd9\u4e2a\u5c31\u662f\u5982\u4f55\u5b9e\u73b0\u53ef\u8c03\u6574\u5c3a\u5bf8\u7684 UI \u7ec4\u4ef6\uff0c\u4f60\u5b66\u4f1a\u4e86\u5417\uff1f\u6709\u5e2e\u52a9\u8bf7\u4e09\u8fde\uff0c\u60f3\u4f18\u96c5\u7684\u5b66\u524d\u7aef\uff0c\u8bf7\u5173\u6ce8peternodejs\u524d\u7aef\u5de5\u7a0b\u5e08\uff0c\u611f\u8c22\u89c2\u770b\uff01"),(0,o.kt)("span",null,"\n    ",(0,o.kt)("ins",{parentName:"span",className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-3487507367729662","data-ad-slot":"1964508460"}),"\n  ",(0,o.kt)("script",{parentName:"span"},"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n  ")))}d.isMDXComponent=!0}}]);