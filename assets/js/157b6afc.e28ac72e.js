(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[8983],{2122:function(n,e,t){"use strict";function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}t.d(e,{Z:function(){return r}})},9756:function(n,e,t){"use strict";function r(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}t.d(e,{Z:function(){return r}})},3905:function(n,e,t){"use strict";t.d(e,{Zo:function(){return s},kt:function(){return g}});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=r.createContext({}),a=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},s=function(n){var e=a(n.components);return r.createElement(l.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,l=n.parentName,s=u(n,["components","mdxType","originalType","parentName"]),f=a(t),g=i,d=f["".concat(l,".").concat(g)]||f[g]||p[g]||o;return t?r.createElement(d,c(c({ref:e},s),{},{components:t})):r.createElement(d,c({ref:e},s))}));function g(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,c=new Array(o);c[0]=f;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=n,u.mdxType="string"==typeof n?n:i,c[1]=u;for(var a=2;a<o;a++)c[a]=t[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3919:function(n,e,t){"use strict";function r(n){return!0===/^(\w*:|\/\/)/.test(n)}function i(n){return void 0!==n&&!r(n)}t.d(e,{b:function(){return r},Z:function(){return i}})},4996:function(n,e,t){"use strict";t.d(e,{C:function(){return o},Z:function(){return c}});var r=t(2263),i=t(3919);function o(){var n=(0,r.Z)().siteConfig,e=(n=void 0===n?{}:n).baseUrl,t=void 0===e?"/":e,o=n.url;return{withBaseUrl:function(n,e){return function(n,e,t,r){var o=void 0===r?{}:r,c=o.forcePrependBaseUrl,u=void 0!==c&&c,l=o.absolute,a=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if((0,i.b)(t))return t;if(u)return e+t;var s=t.startsWith(e)?t:e+t.replace(/^\//,"");return a?n+s:s}(o,t,n,e)}}}function c(n,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(n,e)}},2262:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return a},default:function(){return p}});var r=t(2122),i=t(9756),o=(t(7294),t(3905)),c=(t(4996),{slug:"HTTP/3",title:"HTTP/3\u5c1d\u9c9c",author:"peternodejs",author_url:"https://github.com/peterwangfeng",description:"\u65b0\u4e00\u6ce2JavaScript Web\u6846\u67b6",tags:["\u524d\u7aef","nginx","http/3","nginx-quic"]}),u=void 0,l={permalink:"/HTTP/3",source:"@site/blog/2022-11-07-nginx-quic.md",title:"HTTP/3\u5c1d\u9c9c",description:"\u65b0\u4e00\u6ce2JavaScript Web\u6846\u67b6",date:"2022-11-07T00:00:00.000Z",formattedDate:"2022\u5e7411\u67087\u65e5",tags:[{label:"\u524d\u7aef",permalink:"/tags/\u524d\u7aef"},{label:"nginx",permalink:"/tags/nginx"},{label:"http/3",permalink:"/tags/http-3"},{label:"nginx-quic",permalink:"/tags/nginx-quic"}],readingTime:.78,truncated:!0,prevItem:{title:"\u73b0\u4ee3CSS\u6837\u5f0f\u91cd\u7f6e\u6700\u4f73\u5b9e\u8df5\uff01",permalink:"/CSS"},nextItem:{title:"\u65b0\u4e00\u6ce2JavaScript Web\u6846\u67b6",permalink:"/web framework"}},a=[{value:"\u90e8\u7f72",id:"\u90e8\u7f72",children:[]},{value:"\u4e0b\u8f7dBoringSSL",id:"\u4e0b\u8f7dboringssl",children:[]},{value:"\u4e0b\u8f7dNginx\u7684QUIC\u7248",id:"\u4e0b\u8f7dnginx\u7684quic\u7248",children:[]},{value:"\u5bf9\u7f16\u8bd1\u597d\u7684nginx\u8fdb\u884c\u914d\u7f6e\uff0c\u542f\u52a8",id:"\u5bf9\u7f16\u8bd1\u597d\u7684nginx\u8fdb\u884c\u914d\u7f6e\uff0c\u542f\u52a8",children:[{value:"\u8fdb\u5165/usr/local/nginx/conf/\u76ee\u5f55\u5bf9nginx.conf\u8fdb\u884c\u914d\u7f6e\u3001\u542f\u52a8\u670d\u52a1 \u670d\u52a1\u5668\u914d\u7f6enginx.conf\uff1a",id:"\u8fdb\u5165usrlocalnginxconf\u76ee\u5f55\u5bf9nginxconf\u8fdb\u884c\u914d\u7f6e\u3001\u542f\u52a8\u670d\u52a1-\u670d\u52a1\u5668\u914d\u7f6enginxconf\uff1a",children:[]}]},{value:"\u6d4b\u8bd5\u6548\u679c",id:"\u6d4b\u8bd5\u6548\u679c",children:[]}],s={toc:a};function p(n){var e=n.components,t=(0,i.Z)(n,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"HTTP/3\u771f\u725b\u903c"),(0,o.kt)("p",null,"\u968f\u7740\u6280\u672f\u7684\u53d1\u5c55\uff0cQUIC\uff0cHTTP3\u6e10\u6e10\u5411\u6211\u4eec\u8d70\u6765\u3002\u672c\u6587\u7b97\u662f\u7b14\u8005\u7684\u4e00\u4e2a\u8bb0\u5f55\u8d34\uff0c\u56e0\u4e3a\u5b9e\u9a8c\u7684\u9700\u8981\uff0c\u9700\u8981\u5b9e\u73b0\u57fa\u4e8eQUIC\u7684\u76f4\u64ad\u6216\u8005\u70b9\u64ad\uff0c\u56e0\u4e3a\u5bf9QUIC\u548cHTTP3\u7684\u4e0d\u719f\u6089\uff0c\u6240\u4ee5\u5f00\u8d34\u4e00\u70b9\u4e00\u70b9\u8bb0\u5f55\u76f8\u5173\u6280\u672f\u7684\u5b9e\u73b0\u3002"),(0,o.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,o.kt)("p",null,"\u672c\u6587\u901a\u8fc7\u90e8\u7f72Nginx\u5b98\u65b9\u7684QUIC\u5206\u652f\u6765\u5b9e\u73b0\u7684\u6d4f\u89c8\u5668\u548cnginx-quic\u670d\u52a1\u5668\u7c97\u7565\u7684HTTP3\u901a\u4fe1 \u4f7f\u7528centos"),(0,o.kt)("h2",{id:"\u4e0b\u8f7dboringssl"},"\u4e0b\u8f7dBoringSSL"),(0,o.kt)("p",null,"BoringSSL \u662f\u7531\u8c37\u6b4c\u5f00\u53d1,\u4ece OpenSSL \u4e2d\u5206\u79bb\u7684\u4e00\u4e2a\u5206\u652f\u3002BoringSSL \u662f Chrome/Chromium\u3001Android\uff08\u4f46\u5b83\u4e0d\u662f NDK \u7684\u4e00\u90e8\u5206\uff09\u548c\u8bb8\u591a\u5176\u4ed6\u5e94\u7528\u7a0b\u5e8f/\u7a0b\u5e8f\u4e2d\u7684 SSL \u5e93\u3002"),(0,o.kt)("p",null,"\u7531\u4e8enginx quic\u7248\u672c\u4f7f\u7528\u4e86\u65b0\u7684tls1.3\u534f\u8bae\uff0c\u9700\u8981openssl\u652f\u6301quic\uff0c\u4f46\u76ee\u524d\u7684openssl\u7248\u672c\u6ca1\u6709\u5bf9\u5e94\u7684\u652f\u6301\uff0c\u6240\u4ee5\u8fd9\u91cc\u4f7f\u7528google\u7684boringssl\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"  mkdir nginx-http3\n  cd nginx-http3\n  git clone https://github.com/google/boringssl.git\n  cd boringssl\n  mkdir build\n  cd build\n  cmake ..\n  make\n")),(0,o.kt)("h2",{id:"\u4e0b\u8f7dnginx\u7684quic\u7248"},"\u4e0b\u8f7dNginx\u7684QUIC\u7248"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'hg clone -b quic https://hg.nginx.org/nginx-quic\ncd nginx-quic\n./auto/configure --with-debug --with-http_v3_module \\\n      --with-cc-opt="-I../boringssl/include" \\\n      --with-ld-opt="-L../boringssl/build/ssl \\\n      -L../boringssl/build/crypto"\nmake \nmake install\n')),(0,o.kt)("h2",{id:"\u5bf9\u7f16\u8bd1\u597d\u7684nginx\u8fdb\u884c\u914d\u7f6e\uff0c\u542f\u52a8"},"\u5bf9\u7f16\u8bd1\u597d\u7684nginx\u8fdb\u884c\u914d\u7f6e\uff0c\u542f\u52a8"),(0,o.kt)("h3",{id:"\u8fdb\u5165usrlocalnginxconf\u76ee\u5f55\u5bf9nginxconf\u8fdb\u884c\u914d\u7f6e\u3001\u542f\u52a8\u670d\u52a1-\u670d\u52a1\u5668\u914d\u7f6enginxconf\uff1a"},"\u8fdb\u5165/usr/local/nginx/conf/\u76ee\u5f55\u5bf9nginx.conf\u8fdb\u884c\u914d\u7f6e\u3001\u542f\u52a8\u670d\u52a1 \u670d\u52a1\u5668\u914d\u7f6enginx.conf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},'events {\n    worker_connections  1024;\n}\n http {\n        log_format quic \'$remote_addr - $remote_user [$time_local] \'\n                        \'"$request" $status $body_bytes_sent \'\n                        \'"$http_referer" "$http_user_agent" "$quic"\';\n\n        access_log logs/access.log quic;\n\n        server {\n            # for better compatibility it\'s recommended\n            # to use the same port for quic and https\n            listen 8443 http3 reuseport;\n            listen 8443 ssl;\n\n            ssl_certificate     server.crt;\n            ssl_certificate_key server.key;\n            ssl_protocols       TLSv1.3;\n\n            location / {\n                # required for browsers to direct them into quic port\n                add_header Alt-Svc \'h3=":8443"; ma=86400\';\n            }\n        }\n    }\n')),(0,o.kt)("h2",{id:"\u6d4b\u8bd5\u6548\u679c"},"\u6d4b\u8bd5\u6548\u679c"),(0,o.kt)("p",null,"\u6253\u5f00\u6700\u65b0\u7684chrome\u6216\u8005edge\u6d4f\u89c8\u5668 \u6253\u5f00\u5f00\u53d1\u8005\u5de5\u5177 \u5207\u6362\u5230network\u6807\u7b7e\u9875\u8bbf\u95ee\u9875\u9762\u4f1a\u770b\u5230 protocol\u4e3ah3\u8bf4\u660e\u5f00\u542f\u6210\u529f\u3002"))}p.isMDXComponent=!0}}]);