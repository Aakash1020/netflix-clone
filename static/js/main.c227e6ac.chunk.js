(this["webpackJsonpnetflix--clone"]=this["webpackJsonpnetflix--clone"]||[]).push([[0],{28:function(e,t,n){},46:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),o=n(17),r=n.n(o),s=(n(28),n(5)),l=n.n(s),d=n(6),u=n(4),h=n(18),v=n.n(h).a.create({baseURL:"https://api.themoviedb.org/3"}),f=(n(46),n(19)),b=n(22),j=n.n(b);var p=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,o=Object(i.useState)([]),r=Object(u.a)(o,2),s=r[0],h=r[1],b=Object(i.useState)(""),p=Object(u.a)(b,2),m=p[0],g=p[1];return Object(i.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(n);case 2:return t=e.sent,h(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("div",{className:"row__posters",children:s.map((function(e){return Object(c.jsx)("img",{onClick:function(){return function(e){m?g(""):j()((null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.original_name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);g(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row__poster ".concat(a&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),m&&Object(c.jsx)(f.a,{videoId:m,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},m="de22380c074ccdbc3314adf8e7a20756",g={fetchTrending:"/trending/all/week?api_key=".concat(m,"&language=en-US"),fetchNetflix0riginals:"/discover/tv?api_key=".concat(m,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(m,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(m,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(m,"&with genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(m,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(m,"&with_genres-10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(m,"&Swith genres-99")};n(62),n(63);var _=function(){var e,t,n=Object(i.useState)([]),a=Object(u.a)(n,2),o=a[0],r=a[1];return Object(i.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(g.fetchNetflix0riginals);case 2:return t=e.sent,r(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(o),Object(c.jsx)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===o||void 0===o?void 0:o.backdrop_path,'")'),backgroundPosition:"center center"},children:Object(c.jsxs)("div",{className:"banner__contents",children:[Object(c.jsxs)("div",{className:"title__back",children:[Object(c.jsx)("h1",{className:"banner__title",children:(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.original_name)}),Object(c.jsxs)("div",{className:"banner__buttons",children:[Object(c.jsx)("button",{className:"banner__button",children:"Play"}),Object(c.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(c.jsx)("h1",{className:"banner__description",children:(e=null===o||void 0===o?void 0:o.overview,t=200,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(c.jsx)("div",{className:"fade__bottom"})]})})};n(64);var O=function(){var e=Object(i.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(c.jsx)("div",{className:"nav ".concat(n&&"nav__black"),children:Object(c.jsx)("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"Netflix Logo"})})};var x=function(){return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(O,{}),Object(c.jsx)(_,{}),Object(c.jsx)(p,{title:"Netflix Originals",fetchUrl:g.fetchNetflix0riginals,isLargeRow:!0}),Object(c.jsx)(p,{title:"Trending Now",fetchUrl:g.fetchTrending}),Object(c.jsx)(p,{title:"Top Rated",fetchUrl:g.fetchTopRated}),Object(c.jsx)(p,{title:"Action Movies",fetchUrl:g.fetchActionMovies}),Object(c.jsx)(p,{title:"Comedy movies",fetchUrl:g.fetchComedyMovies}),Object(c.jsx)(p,{title:"Horror Movies",fetchUrl:g.fetchHorrorMovies}),Object(c.jsx)(p,{title:"Romance Movies",fetchUrl:g.fetchRomanceMovies}),Object(c.jsx)(p,{title:"Documentaries",fetchUrl:g.fetchDocumentaries})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),w()}},[[65,1,2]]]);
//# sourceMappingURL=main.c227e6ac.chunk.js.map