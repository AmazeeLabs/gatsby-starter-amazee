(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{HruE:function(e,a,t){"use strict";t.r(a),t.d(a,"FilmQuery",(function(){return u}));var i=t("q1tI"),r=t.n(i),l=(t("pJf4"),t("9Koi")),n=t("NieG"),s=t("333z"),c=t("CUij"),m=t("Rh6+"),o=function(e){var a=e.film,t=Object(l.a)().t;return r.a.createElement(c.a,null,r.a.createElement(s.a,{description:t("swapi.pages.films-film.description",{title:a.title})}),r.a.createElement(m.a,{className:"mb-2",sectionTitle:t("swapi.pages.films.title")},a.title),a.episodeId&&r.a.createElement("p",{className:"mb-8"},t("swapi.pages.films-film.episode",{episodeId:a.episodeId})),r.a.createElement("h2",null,t("swapi.pages.films-film.characters")),r.a.createElement(n.a,{items:a.characters.map((function(e){return{id:e.id,label:e.name,path:"/characters/"+e.id}}))}))},p=t("M43v"),u="3428361937";a.default=Object(p.a)((function(e){var a=e.data;return r.a.createElement(o,{film:a.swapi.film})}))},NieG:function(e,a,t){"use strict";var i=t("q1tI"),r=t.n(i),l=t("8uSu");a.a=function(e){var a=e.items;return a.length?r.a.createElement("ul",null,a.map((function(e){return r.a.createElement("li",{key:e.id,className:"border-solid border-gray-300 border-b-2 last:border-b-0"},r.a.createElement(l.a,{to:e.path,className:"block px-5 py-2 hover:bg-gray-100",noLinkStyles:!0},e.label))}))):r.a.createElement("p",{className:"text-center italic"},"No results found.")}}}]);
//# sourceMappingURL=component---src-templates-films-film-tsx-bf8e0a8f28293ce8239b.js.map