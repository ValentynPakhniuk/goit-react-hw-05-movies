"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[33],{9321:function(n,e,t){t.d(e,{F$:function(){return x},JS:function(){return u},UA:function(){return h},gL:function(){return v},v9:function(){return l}});var r=t(5861),a=t(7757),i=t.n(a),s=t(1243),c="https://api.themoviedb.org/3/trending/all/day",o="ff752eca5c4aa6fb3d3aed4452b80b84";function u(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(c,"?api_key=").concat(o),n.next=3,s.Z.get(t,{signal:e.signal});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(o,"&language=en-US&page=1&include_adult=false"),n.next=3,s.Z.get(t);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(o,"&language=en-US"),n.next=3,s.Z.get(t);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"),n.next=3,s.Z.get(t);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"),n.next=3,s.Z.get(t);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},5033:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,i,s,c,o=t(5861),u=t(9439),p=t(7757),l=t.n(p),d=t(2791),h=t(9321),f=t(7689),x=t(1087),g=t(168),v=t(6444),m=v.ZP.button(r||(r=(0,g.Z)(["\n  display: inline-flex;\n  gap: 3px;\n  cursor: pointer;\n  margin-left: 20px;\n  margin-bottom: 5px;\n"]))),j=v.ZP.ul(a||(a=(0,g.Z)(["\n  display: flex;\n  gap: 10px;\n  list-style-type: none;\n  padding: 0px;\n"]))),b=v.ZP.div(i||(i=(0,g.Z)(["\n  display: flex;\n  gap: 15px;\n  padding: 0 20px;\n  margin-bottom: 20px;\n"]))),y=v.ZP.div(s||(s=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 20px;\n  border-top: 2px solid gray;\n  border-bottom: 2px solid gray;\n  width: 100vw;\n\n  & p {\n    margin: 0;\n  }\n"]))),w=v.ZP.h2(c||(c=(0,g.Z)(["\n  margin: 0px;\n"]))),Z=t(9014),k=t(9245),_=t(5899),U=t(184),S=function(){var n,e,t=(0,f.UO)().movieId,r=(0,d.useState)(null),a=(0,u.Z)(r,2),i=a[0],s=a[1],c=(0,d.useState)(null),p=(0,u.Z)(c,2),g=p[0],v=p[1],S=(0,f.TH)(),A=(0,d.useRef)(null!==(n=null===(e=S.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),P=(0,d.useState)(!1),C=(0,u.Z)(P,2),F=C[0],L=C[1];return(0,d.useEffect)((function(){function n(){return(n=(0,o.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return L(!0),n.prev=1,v(null),n.next=5,(0,h.UA)(t);case 5:if(e=n.sent){n.next=9;break}return s(null),n.abrupt("return",Z.Am.error("Not found"));case 9:s(e),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(1),v(n.t0),Z.Am.error(n.t0.response.data.status_message);case 16:return n.prev=16,L(!1),n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[1,12,16,19]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]),(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(k.a,{isLoading:F}),(0,U.jsx)(x.rU,{to:A.current,children:(0,U.jsxs)(m,{children:[(0,U.jsx)(_.bs3,{size:"16"}),(0,U.jsx)("span",{children:"Go back"})]})}),g&&(0,U.jsx)("h2",{children:g.response.data.status_message}),i&&(0,U.jsxs)(b,{children:[(0,U.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(i.poster_path),alt:i.title||i.name,width:"250"}),(0,U.jsxs)("div",{children:[(0,U.jsxs)("h2",{children:[i.title||i.name," (",i.release_date.slice(0,4),")"]}),(0,U.jsxs)("p",{children:["Use score: ",(10*i.vote_average).toFixed(0),"%"]}),(0,U.jsx)("h3",{children:"Overview"}),(0,U.jsx)("p",{children:i.overview||(0,U.jsx)("span",{children:"No information"})}),(0,U.jsx)("h4",{children:"Genres"}),(0,U.jsx)(j,{children:i.genres.map((function(n){return(0,U.jsx)("li",{children:n.name},n.id)}))})||(0,U.jsx)("span",{children:"No information"})]})]}),(0,U.jsxs)(y,{children:[(0,U.jsx)(w,{children:"Additional information"}),(0,U.jsx)("p",{children:(0,U.jsx)(x.rU,{to:"cast",children:"Cast"})}),(0,U.jsx)("p",{children:(0,U.jsx)(x.rU,{to:"reviews",children:"Reviews"})})]}),(0,U.jsx)(d.Suspense,{fallback:(0,U.jsx)(k.a,{isLoading:!0}),children:(0,U.jsx)(f.j3,{})})]})}}}]);
//# sourceMappingURL=33.f6a4c709.chunk.js.map