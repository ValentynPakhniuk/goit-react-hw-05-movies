"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{9321:function(t,e,n){n.d(e,{F$:function(){return g},JS:function(){return o},UA:function(){return h},gL:function(){return v},v9:function(){return l}});var r=n(5861),a=n(7757),s=n.n(a),u=n(1243),c="https://api.themoviedb.org/3/trending/all/day",i="ff752eca5c4aa6fb3d3aed4452b80b84";function o(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function t(e){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(c,"?api_key=").concat(i),t.next=3,u.Z.get(n,{signal:e.signal});case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function t(e){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(i,"&language=en-US&page=1&include_adult=false"),t.next=3,u.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(s().mark((function t(e){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"),t.next=3,u.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark((function t(e){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"),t.next=3,u.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(s().mark((function t(e){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"),t.next=3,u.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},1247:function(t,e,n){n.r(e);var r=n(5861),a=n(9439),s=n(7757),u=n.n(s),c=n(9321),i=n(2791),o=n(9014),p=n(7689),l=n(9245),f=n(184);e.default=function(){var t=(0,p.UO)().movieId,e=(0,i.useState)(null),n=(0,a.Z)(e,2),s=n[0],h=n[1],d=(0,i.useState)(null),g=(0,a.Z)(d,2),m=g[0],v=g[1],b=(0,i.useState)(!1),x=(0,a.Z)(b,2),w=x[0],y=x[1];return(0,i.useEffect)((function(){function e(){return(e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,v(null),e.next=5,(0,c.F$)(t);case 5:if(0!==(n=e.sent).cast.length){e.next=9;break}return h(null),e.abrupt("return");case 9:h(n),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),v(e.t0),o.Am.error(e.t0.response.data.status_message);case 16:return e.prev=16,y(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,12,16,19]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.a,{isLoading:w}),m&&(0,f.jsx)("h2",{children:m.response.data.status_message}),null===s?(0,f.jsx)("p",{children:"Not Found Cast"}):(0,f.jsx)("ul",{children:s.cast.map((function(t){return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:null!==t.profile_path?"https://image.tmdb.org/t/p/original".concat(t.profile_path):"https://thumbs.dreamstime.com/b/best-design-global-news-digital-illusration-71660044.jpg",alt:s.name,width:"150"}),(0,f.jsx)("p",{children:t.name}),(0,f.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})]})}}}]);
//# sourceMappingURL=247.f1f964be.chunk.js.map