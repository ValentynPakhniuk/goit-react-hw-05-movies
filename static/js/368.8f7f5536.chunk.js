"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[368],{9321:function(n,t,e){e.d(t,{F$:function(){return d},JS:function(){return o},UA:function(){return h},gL:function(){return m},v9:function(){return l}});var r=e(5861),a=e(7757),u=e.n(a),i=e(1243),s="https://api.themoviedb.org/3/trending/all/day",c="ff752eca5c4aa6fb3d3aed4452b80b84";function o(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"?api_key=").concat(c),n.next=3,i.Z.get(e,{signal:t.signal});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function n(t,e){var r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(c,"&language=en-US&page=1&include_adult=false"),n.next=3,i.Z.get(r,{signal:e.signal});case 3:return a=n.sent,n.abrupt("return",a.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function n(t,e){var r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c,"&language=en-US"),n.next=3,i.Z.get(r,{signal:e.signal});case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n,t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function n(t,e){var r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"),n.next=3,i.Z.get(r,{signal:e.signal});case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n,t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function n(t,e){var r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"),n.next=3,i.Z.get(r,{signal:e.signal});case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},8475:function(n,t,e){e.d(t,{g:function(){return o}});var r,a=e(7689),u=e(1087),i=e(168),s=e(6444).ZP.li(r||(r=(0,i.Z)(["\n  width: 100%;\n"]))),c=e(184),o=function(n){var t=n.film,e=t.id,r=t.title,i=t.name,o=(0,a.TH)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s,{children:(0,c.jsx)(u.rU,{to:"/movies/".concat(e),state:{from:o},children:r||i})})})}},6368:function(n,t,e){e.r(t);var r=e(3433),a=e(5861),u=e(9439),i=e(7757),s=e.n(i),c=e(9321),o=e(8475),p=e(1077),l=e(2791),f=e(9014),h=e(9245),g=e(184);t.default=function(n){var t=n.searchText,e=(0,l.useState)(null),i=(0,u.Z)(e,2),d=i[0],v=i[1],m=(0,l.useState)(!1),x=(0,u.Z)(m,2),y=x[0],b=x[1],Z=(0,l.useState)(null),w=(0,u.Z)(Z,2),k=w[0],_=w[1];return(0,l.useEffect)((function(){var n=new AbortController;if(""!==t&&t){var e=function(){var e=(0,a.Z)(s().mark((function e(){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(null),e.prev=1,e.next=4,(0,c.v9)(t,n);case 4:if(0!==(a=e.sent).length){e.next=8;break}return v(null),e.abrupt("return",f.Am.error("Sorry, there are no films matching your search query. Please try again."));case 8:v((0,r.Z)(a)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.response&&(_(e.t0),f.Am.error(e.t0.response.data.status_message));case 14:return e.prev=14,b(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}();return b(!0),e(),function(){n.abort()}}}),[t]),(0,g.jsxs)("section",{children:[(0,g.jsx)(h.a,{isLoading:y}),k&&(0,g.jsx)("h2",{children:k.response.data.status_message}),d&&(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(p.C,{children:d.map((function(n){return(0,g.jsx)(o.g,{film:n},n.id)}))})})]})}},1077:function(n,t,e){e.d(t,{C:function(){return c},v:function(){return s}});var r,a,u=e(168),i=e(6444),s=i.ZP.h1(r||(r=(0,u.Z)(["\n  margin-left: 20px;\n  margin-bottom: 10px;\n"]))),c=i.ZP.ul(a||(a=(0,u.Z)(["\n  display: flex;\n  gap: 5px;\n  flex-direction: column;\n"])))}}]);
//# sourceMappingURL=368.8f7f5536.chunk.js.map