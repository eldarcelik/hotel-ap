(this["webpackJsonphotel-ap"]=this["webpackJsonphotel-ap"]||[]).push([[0],{203:function(e,t,a){},204:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(47),c=a.n(l),o=a(6),m=a(3);function i(e){var t=e.children,a=e.hero;return r.a.createElement("header",{className:a},t)}function s(e){var t=e.title,a=e.subtitle,n=e.children;return r.a.createElement("div",{className:"banner"},r.a.createElement("h1",null,t),r.a.createElement("div",null),r.a.createElement("p",null,a),n)}i.defaultProps={hero:"defaultHero"};var u=a(14),p=a(12);function f(e){var t=e.title;return r.a.createElement("div",{className:"section-title"},r.a.createElement("h4",null,t),r.a.createElement("div",null))}function E(){var e=Object(n.useState)([{icon:r.a.createElement(p.d,null),title:"free cocktails",info:"Free cocktails throughout the day!"},{icon:r.a.createElement(p.c,null),title:"endless cycling",info:"32km of bicycle path with free bicycles"},{icon:r.a.createElement(p.f,null),title:"free shuttle",info:"Free transfer to and from the airport!"},{icon:r.a.createElement(p.e,null),title:"the best pizza",info:"Italian pizza masters!"}]),t=Object(u.a)(e,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"services",id:"services"},r.a.createElement(f,{title:"services"}),r.a.createElement("div",{className:"services-center"},t.map((function(e,t){return r.a.createElement("article",{key:t,className:"service"},r.a.createElement("span",null,e.icon),r.a.createElement("h6",null,e.title),r.a.createElement("p",null,e.info))})))))}function d(){return r.a.createElement("a",{href:"#services"},r.a.createElement(p.b,{className:"iconSlideDown"}))}var h=a(31),v=a(48),b=a.n(v),g=a(13),y=a(15),N=a(85),k=a(98),O=Object(k.a)({space:"fe2k9onfswsr",accessToken:"4Cy3BYmZroDQXcY5MHJglCs5t9nF88m6hCeRsQND-Fo"}),j=Object(n.createContext)();function x(e){var t=Object(n.useState)({rooms:[],sortedRooms:[],featuredRooms:[],loading:!0,type:"all",capacity:1,price:0,minPrice:0,maxPrice:0,minSize:0,maxSize:0,breakfast:!1,pets:!1}),a=Object(u.a)(t,2),l=a[0],c=a[1],o=function(){var e=Object(N.a)(b.a.mark((function e(){var t,a,n,r,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.getEntries({content_type:"hotelAp",order:"fields.price"});case 3:t=e.sent,a=m(t.items),n=a.filter((function(e){return!0===e.featured})),r=Math.max.apply(Math,Object(y.a)(a.map((function(e){return e.price})))),l=Math.max.apply(Math,Object(y.a)(a.map((function(e){return e.size})))),c((function(e){return Object(g.a)(Object(g.a)({},e),{},{rooms:a,featuredRooms:n,sortedRooms:a,loading:!1,price:r,maxPrice:r,maxSize:l})})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){o()}),[]);var m=function(e){return e.map((function(e){var t=e.sys.id,a=e.fields.images.map((function(e){return e.fields.file.url}));return Object(g.a)(Object(g.a)({},e.fields),{},{images:a,id:t})}))};return r.a.createElement(j.Provider,{value:{data:l,setData:c,getRoom:function(e){return Object(y.a)(l.rooms).find((function(t){return t.slug===e}))},handleChange:function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value,a=e.target.name;c((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(h.a)({},a,t))}))},filterRooms:function(){var e=l.rooms,t=l.type,a=l.capacity,n=l.price,r=l.minSize,o=l.maxSize,m=l.breakfast,i=l.pets,s=Object(y.a)(e);a=parseInt(a),n=parseInt(n),"all"!==t&&(s=s.filter((function(e){return e.type===t}))),1!==a&&(s=s.filter((function(e){return e.capacity>=a}))),s=(s=s.filter((function(e){return e.price<=n}))).filter((function(e){return e.size>=r&&e.size<=o})),m&&(s=s.filter((function(e){return!0===e.breakfast}))),i&&(s=s.filter((function(e){return!0===e.pets}))),c((function(e){return Object(g.a)(Object(g.a)({},e),{},{sortedRooms:s})}))}}},e.children)}j.Consumer;var w=a(90),z=a.n(w);function C(){return r.a.createElement("div",{className:"loading"},r.a.createElement("h3",null,"rooms data loading..."),r.a.createElement("img",{src:z.a,alt:""}))}function F(e){var t=e.room,a=t.name,n=t.slug,l=t.images,c=t.price;return r.a.createElement("article",{className:"room"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:l[0],alt:"signle room"}),r.a.createElement("div",{className:"price-top"},r.a.createElement("h6",null,"$",c),r.a.createElement("p",null,"per night")),r.a.createElement(o.b,{to:"/hotel-ap/rooms/".concat(n),className:"btn-primary room-link"},"Features")),r.a.createElement("p",{className:"room-info"},a))}function S(){var e=Object(n.useContext)(j).data,t=e.loading,a=e.featuredRooms;return a=a.map((function(e){return r.a.createElement(F,{key:e.id,room:e})})),t?r.a.createElement(C,null):r.a.createElement("section",{className:"featured-rooms"},r.a.createElement(f,{title:"featured rooms"}),r.a.createElement("div",{className:"featured-rooms-center"},a))}function R(){return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null,r.a.createElement("div",{className:"centerFlex"},r.a.createElement(s,{title:"treat yourself to a dream vacation",subtitle:"Deluxe Rooms Starting at $299"},r.a.createElement(o.b,{to:"/hotel-ap/rooms",className:"btn-primary"},"Our rooms")),r.a.createElement(d,null))),r.a.createElement(E,null),r.a.createElement(S,null))}var P=function(e,t){var a=e.map((function(e){return e[t]}));return Object(y.a)(new Set(a))};function D(){var e=Object(n.useContext)(j),t=e.data,a=(e.setData,e.handleChange),l=e.filterRooms,c=t.rooms,o=t.type,m=t.capacity,i=t.price,s=t.minPrice,u=t.maxPrice,p=t.minSize,E=t.maxSize,d=t.breakfast,h=t.pets;Object(n.useEffect)((function(){l()}),[o,m,i,p,E,d,h]);var v=P(c,"type");v=(v=["all"].concat(Object(y.a)(v))).map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}));var b=P(c,"capacity");return b=b.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),r.a.createElement("section",{className:"filter-container"},r.a.createElement(f,{title:"search rooms"}),r.a.createElement("form",{className:"filter-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"type"},"room type"),r.a.createElement("select",{name:"type",id:"type",className:"form-control",value:o,onChange:a},v)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"capacity"},"guests"),r.a.createElement("select",{name:"capacity",id:"capacity",className:"form-control",value:m,onChange:a},b)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"price"},"room price $",i),r.a.createElement("input",{name:"price",id:"price",type:"range",className:"form-control",min:s,max:u,value:i,onChange:a})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"size"},"room size"),r.a.createElement("div",{className:"size-inputs"},r.a.createElement("input",{name:"minSize",id:"size",type:"number",className:"size-input",value:p,onChange:a}),r.a.createElement("input",{name:"maxSize",id:"size",type:"number",className:"size-input",value:E,onChange:a}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"single-extra"},r.a.createElement("input",{name:"breakfast",id:"breakfast",type:"checkbox",value:d,onChange:a}),r.a.createElement("label",{htmlFor:"breakfast"},"breakfast")),r.a.createElement("div",{className:"single-extra"},r.a.createElement("input",{name:"pets",id:"pets",type:"checkbox",value:h,onChange:a}),r.a.createElement("label",{htmlFor:"pets"},"pets")))))}function H(){var e=Object(n.useContext)(j).data.sortedRooms;return(e=e.map((function(e){return r.a.createElement(F,{key:e.id,room:e})}))).length?r.a.createElement("section",{className:"roomslist"},r.a.createElement("div",{className:"roomslist-center"},e)):r.a.createElement("div",{className:"empty-search"},"unfortunately no rooms matched your search parametars")}function I(){return Object(n.useContext)(j).data.loading?r.a.createElement(C,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement(H,null))}function M(){return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(i,{hero:"roomsHero"},r.a.createElement(s,{title:"our rooms"},r.a.createElement(o.b,{to:"/hotel-ap",className:"btn-primary"},"Return Home"))),r.a.createElement(I,null))}var T=a(91);function $(){var e=Object(T.a)(["\n    min-height: 60vh;\n    background: url(",") center/cover no-repeat;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return $=function(){return e},e}var B=a(92).a.header($(),(function(e){return e.img})),J=a(96);a(202);function Q(e){var t=Object(n.useState)(e.match.params.slug),a=Object(u.a)(t,1)[0],l=(0,Object(n.useContext)(j).getRoom)(a);if(Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),!l)return r.a.createElement("div",{className:"error"},r.a.createElement("h3",null,"no such room could be found..."),r.a.createElement(o.b,{to:"/hotel-ap/rooms",className:"btn-primary"},"Back to rooms"));var c=l.name,m=l.description,i=l.capacity,p=l.size,E=l.price,d=l.extras,h=l.breakfast,v=l.pets,b=l.images;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{img:b[0]},r.a.createElement(s,{title:"".concat(c," room")},r.a.createElement(o.b,{to:"/hotel-ap/rooms",className:"btn-primary"},"back to rooms"))),r.a.createElement("section",{className:"single-room",style:{width:"80%",margin:"0 auto"}},r.a.createElement("div",{className:"single-room-images"},r.a.createElement(f,{title:"Images"}),r.a.createElement(J.Carousel,null,b.map((function(e,t){return r.a.createElement("img",{key:t,src:e,alt:"Room Images"})})))),r.a.createElement("div",{className:"single-room-info"},r.a.createElement("article",{className:"desc"},r.a.createElement("h3",null,"details"),r.a.createElement("p",null,m)),r.a.createElement("article",{className:"info"},r.a.createElement("h3",null,"info"),r.a.createElement("h6",null,"price: $",E),r.a.createElement("h6",null,"size: $",p," SQFT"),r.a.createElement("h6",null,"max capacity:"," ".concat(i,i>1?" people":" person")),r.a.createElement("h6",null,v?"pets allowed":"no pets allowed"),r.a.createElement("h6",null,h&&"free breakfast included"))),r.a.createElement("section",{className:"room-extras"},r.a.createElement("h6",null,"extras"),r.a.createElement("ul",{className:"extras"},d.map((function(e,t){return r.a.createElement("li",{key:t},e)}))))))}function A(){return r.a.createElement(i,null,r.a.createElement(s,{title:"404",subtitle:"page not found"},r.a.createElement(o.b,{to:"/hotel-ap",className:"btn-primary"},"Return Home")))}var W=a(97);function Y(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],l=t[1],c=function(){l(!a)};return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"nav-center"},r.a.createElement("div",{className:"nav-header"},r.a.createElement(o.b,{to:"/hotel-ap",className:"nav-logo"},r.a.createElement(W.a,null),"OTEL",r.a.createElement("span",null," AP")),r.a.createElement("button",{type:"button",className:"nav-btn",onClick:c},r.a.createElement(p.a,{className:"nav-icon"}))),r.a.createElement("ul",{className:a?"nav-links show-nav":"nav-links"},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/hotel-ap",onClick:c},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/hotel-ap/rooms",onClick:c},"Rooms")))))}a(203);var L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null,r.a.createElement(o.a,null,r.a.createElement(Y,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/hotel-ap",component:R}),r.a.createElement(m.a,{exact:!0,path:"/hotel-ap/rooms",component:M}),r.a.createElement(m.a,{exact:!0,path:"/hotel-ap/rooms/:slug",component:Q}),r.a.createElement(m.a,{component:A})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},49:function(e,t){},90:function(e,t,a){e.exports=a.p+"static/media/loading-arrow.e9ea7394.gif"},99:function(e,t,a){e.exports=a(204)}},[[99,1,2]]]);
//# sourceMappingURL=main.a872caf6.chunk.js.map