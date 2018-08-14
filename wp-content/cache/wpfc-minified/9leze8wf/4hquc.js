// source --> //localhost/wordpress/wp-content/plugins/a3-lazy-load/assets/js/jquery.lazyloadxt.extra.min.js?ver=1.9.1 
/* Lazy Load XT 1.1.0 | MIT License */
!function(m,y,e,o){var p="lazyLoadXT",w="lazied",z="load error",t="lazy-hidden",C=e.documentElement||e.body,b={autoInit:!0,selector:"img[data-src]",blankImage:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",throttle:99,forceLoad:y.onscroll===o||!!y.operamini||!C.getBoundingClientRect,loadEvent:"pageshow",updateEvent:"load orientationchange resize scroll touchmove focus",forceEvent:"lazyloadall",oninit:{removeClass:"lazy"},onshow:{addClass:t},onload:{removeClass:t,addClass:"lazy-loaded"},onerror:{removeClass:t},checkDuplicates:!0},n={srcAttr:"data-src",edgeX:0,edgeY:0,visibleOnly:!0},a=m(y),E=m.isFunction,d=m.extend,T=m.data||function(e,t){return m(e).data(t)},L=[],I=0,r=0;function c(e,t){return e[t]===o?b[t]:e[t]}function X(){var e=y.pageYOffset;return e===o?C.scrollTop:e}function B(e,t){var o=b["on"+e];o&&(E(o)?o.call(t[0]):(o.addClass&&t.addClass(o.addClass),o.removeClass&&t.removeClass(o.removeClass))),t.trigger("lazy"+e,[t]),u()}function k(e){B(e.type,m(this).off(z,k))}function i(e){if(L.length){e=e||b.forceLoad,I=1/0;var t,o,n=X(),a=y.innerHeight||C.clientHeight,r=y.innerWidth||C.clientWidth;for(t=0,o=L.length;t<o;t++){var i,s=L[t],l=s[0],d=s[p],c=!1,u=e||T(l,w)<0;if(m.contains(C,l)){if(e||!d.visibleOnly||l.offsetWidth||l.offsetHeight){if(!u){var f=l.getBoundingClientRect(),h=d.edgeX,v=d.edgeY;u=(i=f.top+n-v-a)<=n&&f.bottom>-v&&f.left<=r+h&&f.right>-h}if(u){s.on(z,k),B("show",s);var A=d.srcAttr,g=E(A)?A(s):l.getAttribute(A);g&&(l.src=g),c=!0}else i<I&&(I=i)}}else c=!0;c&&(L.splice(t--,1),o--)}o||B("complete",m(C))}}function s(){1<r?(r=1,i(),setTimeout(s,b.throttle)):r=0}function u(e){L.length&&(e&&"scroll"===e.type&&e.currentTarget===y&&I>=X()||(r||setTimeout(s,0),r=2))}function l(){a.lazyLoadXT()}function f(){i(!0)}m[p]=d(b,n,m[p]),m.fn[p]=function(a){var e,r=c(a=a||{},"blankImage"),i=c(a,"checkDuplicates"),t=c(a,"scrollContainer"),s=c(a,"show"),l={};for(e in m(t).on("scroll",u),n)l[e]=c(a,e);return this.each(function(e,t){if(t===y)m(b.selector).lazyLoadXT(a);else{var o=i&&T(t,w),n=m(t).data(w,s?-1:1);if(o)return void u();r&&"IMG"===t.tagName&&!t.src&&(t.src=r),n[p]=d({},l),B("init",n),L.push(n),u()}})},m(e).ready(function(){B("start",a),a.on(b.updateEvent,u).on(b.forceEvent,f),m(e).on(b.updateEvent,u),b.autoInit&&(a.on(b.loadEvent,l),l())})}(window.jQuery||window.Zepto||window.$,window,document),function(s){var o=s.lazyLoadXT;o.selector+=",video,iframe[data-src],embed[data-src]",o.videoPoster="data-poster",s(document).on("lazyshow","video",function(e,t){var a=t.lazyLoadXT.srcAttr,r=s.isFunction(a),i=!1;t.attr("poster",t.attr(o.videoPoster)),t.children("source,track").each(function(e,t){var o=s(t),n=r?a(o):o.attr(a);n&&(o.attr("src",n),i=!0)}),i&&void 0!==s(this).attr("preload")&&"none"!=s(this).attr("preload")&&this.load(),s(this).removeClass("lazy-hidden")}),s(document).on("lazyshow","embed",function(e,t){s(this).removeClass("lazy-hidden")})}(window.jQuery||window.Zepto||window.$);
// source --> //localhost/wordpress/wp-content/plugins/a3-lazy-load/assets/js/jquery.lazyloadxt.srcset.min.js?ver=1.9.1 
/* Lazy Load XT 1.1.0 | MIT License */
!function(c,i,o,t){var d,u,l=c.lazyLoadXT,n="srcset"in new Image,x=/^\s*(\S*)/,w=/\S\s+(\d+)w/,f=/\S\s+(\d+)h/,h=/\S\s+([\d\.]+)x/,p=[0,1/0],m=[0,1],e={srcsetAttr:"data-srcset",srcsetExtended:!0,srcsetBaseAttr:"data-srcset-base",srcsetExtAttr:"data-srcset-ext"},g={w:0,h:0,x:0};for(d in e)void 0===l[d]&&(l[d]=e[d]);function A(t,e){return Math[e].apply(null,c.map(t,function(t){return t[d]}))}function v(t){return t[d]>=g[d]||t[d]===u}function E(t){return t[d]===u}function s(t){var e=t.attr(l.srcsetAttr);if(!e)return!1;var r=c.map(e.replace(/(\s[\d.]+[whx]),/g,"$1 @,@ ").split(" @,@ "),function(t){return{url:x.exec(t)[1],w:parseFloat((w.exec(t)||p)[1]),h:parseFloat((f.exec(t)||p)[1]),x:parseFloat((h.exec(t)||m)[1])}});if(!r.length)return!1;var n,s,a=o.documentElement;for(n in g={w:i.innerWidth||a.clientWidth,h:i.innerHeight||a.clientHeight,x:i.devicePixelRatio||1})d=n,u=A(r,"max"),r=c.grep(r,v);for(n in g)d=n,u=A(r,"min"),r=c.grep(r,E);return s=r[0].url,l.srcsetExtended&&(s=(t.attr(l.srcsetBaseAttr)||"")+s+(t.attr(l.srcsetExtAttr)||"")),s}l.selector+=",img["+l.srcsetAttr+"]",c(o).on("lazyshow","img",function(t,e){var r=e.attr(l.srcsetAttr);r&&(!l.srcsetExtended&&n?(e.attr("srcset",r),e.attr("data-srcset","")):e.lazyLoadXT.srcAttr=s)})}(window.jQuery||window.Zepto||window.$,window,document);