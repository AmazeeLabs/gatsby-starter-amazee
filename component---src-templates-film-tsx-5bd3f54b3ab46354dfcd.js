(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/88p":function(e,t,a){"use strict";var r=a("q1tI"),i=a("8Rtz");t.a=function(e){var t=e.items;return t.length?r.createElement("ul",null,t.map((function(e){return r.createElement("li",{key:e.id,className:"border-solid border-gray-300 border-b-2 last:border-b-0"},r.createElement(i.a,{to:e.path,className:"block px-5 py-2 hover:bg-gray-100"},e.label))}))):r.createElement("p",{className:"text-center italic"},"No results found.")}},"E/k1":function(e,t,a){"use strict";a.r(t),a.d(t,"FilmQuery",(function(){return l}));a("pJf4");var r=a("q1tI"),i=a("9Koi"),s=a("/88p"),l="3428361937";t.default=function(e){var t=e.data,a=Object(i.a)().t;return r.createElement(r.Fragment,null,r.createElement("h1",{className:"mb-2"},t.swapi.film.title),t.swapi.film.episodeId&&r.createElement("p",{className:"mb-8"},a("swapi.films.episode","Episode {{episodeId}}",{episodeId:t.swapi.film.episodeId})),r.createElement("h2",null,a("swapi.pages.characters","Characters")),r.createElement(s.a,{items:t.swapi.film.characters.map((function(e){return{id:e.id,label:e.name,path:"/characters/"+e.id}}))}))}}}]);
//# sourceMappingURL=component---src-templates-film-tsx-5bd3f54b3ab46354dfcd.js.map