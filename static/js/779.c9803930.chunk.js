"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{9321:function(t,e,n){n.d(e,{F$:function(){return g},JS:function(){return o},UA:function(){return h},gL:function(){return m},v9:function(){return f}});var r=n(5861),a=n(7757),u=n.n(a),s=n(1243),c="https://api.themoviedb.org/3/trending/all/day",i="ff752eca5c4aa6fb3d3aed4452b80b84";function o(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(c,"?api_key=").concat(i),t.next=3,s.Z.get(n,{signal:e.signal});case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(i,"&language=en-US&page=1&include_adult=false"),t.next=3,s.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"),t.next=3,s.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"),t.next=3,s.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"),t.next=3,s.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},9779:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r,a=n(5861),u=n(9439),s=n(7757),c=n.n(s),i=n(9321),o=n(2791),p=n(7689),f=n(168),l=n(6444).ZP.ul(r||(r=(0,f.Z)(["\n  padding: 0 20px; ;\n"]))),h=n(9014),d=n(9245),g=n(184),v=function(){var t=(0,p.UO)().movieId,e=(0,o.useState)(null),n=(0,u.Z)(e,2),r=n[0],s=n[1],f=(0,o.useState)(null),v=(0,u.Z)(f,2),m=v[0],x=v[1],y=(0,o.useState)(!1),b=(0,u.Z)(y,2),w=b[0],k=b[1];return(0,o.useEffect)((function(){function e(){return(e=(0,a.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(null),e.next=4,(0,i.gL)(t);case 4:if(0!==(n=e.sent).results.length){e.next=8;break}return s(null),e.abrupt("return");case 8:s(n),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),x(e.t0),h.Am.error(e.t0.response.data.status_message);case 15:return e.prev=15,k(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,11,15,18]])})))).apply(this,arguments)}k(!0),function(){e.apply(this,arguments)}()}),[t]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d.a,{isLoading:w}),m&&(0,g.jsx)("h2",{children:m.response.data.status_message}),null===r?(0,g.jsx)("p",{children:"Not Found Reviews"}):(0,g.jsx)(l,{children:r.results.map((function(t){return(0,g.jsxs)("li",{children:[(0,g.jsx)("span",{children:"Author: "}),t.author,(0,g.jsx)("p",{children:t.content})]},t.id)}))})]})}}}]);
//# sourceMappingURL=779.c9803930.chunk.js.map