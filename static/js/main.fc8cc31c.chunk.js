(this["webpackJsonpmachine-coding-practice"]=this["webpackJsonpmachine-coding-practice"]||[]).push([[0],{26:function(e){e.exports=JSON.parse('[{"id":1,"productName":"Skinny Men Grey Jeans","productImage":"https://rukminim1.flixcart.com/image/880/1056/kqttg280/jean/y/1/c/32-mss21jn702-metronaut-original-imag4rczh5hcfnrt.jpeg?q=50","price":629,"size":"S","brand":"spyker","category":"men","quantity":1},{"id":2,"productName":"Skinny Men Light Blue Jeans","productImage":"https://rukminim1.flixcart.com/image/714/857/kqttg280/jean/l/q/y/32-mss21jn649-metronaut-original-imag4rcn3cue2yna.jpeg?q=50","price":699,"size":"M","brand":"lives","category":"men","quantity":1},{"id":3,"productName":"Slim Men Light Blue Jeans","productImage":"https://rukminim1.flixcart.com/image/714/857/kqttg280/jean/7/c/f/32-mss21jn655-metronaut-original-imag4rcne3qhmjyn.jpeg?q=50","price":524,"size":"L","brand":"lee","category":"men","quantity":1},{"id":4,"productName":"Super Skinny Women Blue","productImage":"https://rukminim1.flixcart.com/image/714/857/kerfl3k0hlty2aw-0/jean/s/n/6/28-1-ttjn001521-tokyo-talkies-original-imafvejzh9chyhjh.jpeg?q=50","price":408,"size":"S","brand":"lives","category":"women","quantity":1},{"id":5,"productName":"Skinny Women Blue Jeans","productImage":"https://rukminim1.flixcart.com/image/714/857/jvzkb680/jean/3/q/y/30-ttjn001607-tokyo-talkies-original-imafgrvbv9sewwcv.jpeg?q=50","price":551,"size":"M","brand":"spyker","category":"women","quantity":1},{"id":6,"productName":"Super Skinny Women Grey","productImage":"https://rukminim1.flixcart.com/image/714/857/jrjizrk0/jean/v/n/4/26-ttjn001632-tokyo-talkies-original-imafdawg5ausnka3.jpeg?q=50","price":599,"size":"L","brand":"lee","category":"women","quantity":1}]')},37:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c.n(a),n=c(11),i=c.n(n),s=(c(37),c(12)),l=c(67),j=c(69),d=c(71),o=c(68),u=c(70),b=c(66),m=c(1),O=Object(a.createContext)(),h=function(e){var t=e.children,c=Object(a.useState)("Product-List"),r=Object(s.a)(c,2),n=r[0],i=r[1];return Object(m.jsx)(O.Provider,{value:{route:n,setRoute:i},children:t})},p=function(){var e=Object(a.useContext)(O).setRoute;return Object(m.jsx)("div",{className:"header",children:Object(m.jsxs)("div",{className:"header-button-div",children:[Object(m.jsx)(b.a,{onClick:function(){return e("Cart")},variant:"contained",id:"herder-button",color:"primary",children:"Cart"}),Object(m.jsx)(b.a,{onClick:function(){return e("Product-List")},variant:"contained",color:"primary",children:"Menu"})]})})},x=c(27),g=c(10),v=Object(a.createContext)(),y=function(e){var t=e.children,c=Object(a.useReducer)((function(e,t){switch(t.type){case"ADD_TO_CART":return Object(g.a)(Object(g.a)({},e),{},{cartlist:e.cartlist.includes(t.payload)?e.cartlist:[].concat(Object(x.a)(e.cartlist),[t.payload])});case"REMOVE_FROM_CART":return Object(g.a)(Object(g.a)({},e),{},{cartlist:e.cartlist.filter((function(e){return e.id!==t.payload.id}))});case"QUANTITY_PLUS":return Object(g.a)(Object(g.a)({},e),{},{cartlist:e.cartlist.map((function(e){return e.id===t.payload.id?Object(g.a)(Object(g.a)({},e),{},{quantity:e.quantity+1}):e}))});case"QUANTITY_MINUS":return Object(g.a)(Object(g.a)({},e),{},{cartlist:e.cartlist.map((function(e){return e.id===t.payload.id?Object(g.a)(Object(g.a)({},e),{},{quantity:e.quantity-1}):e}))})}}),{cartlist:[]}),r=Object(s.a)(c,2),n=r[0],i=r[1];return Object(m.jsx)(v.Provider,{value:{state:n,dispatch:i},children:t})},N=function(e){var t=e.product,c=Object(a.useContext)(v),r=c.state,n=c.dispatch;return Object(m.jsxs)("div",{className:"product-card",children:[Object(m.jsx)("img",{className:"card-img",src:t.productImage}),Object(m.jsxs)("div",{className:"card-content",children:[Object(m.jsxs)("div",{className:"card-name-div",children:[Object(m.jsx)("p",{className:"product-name",children:t.productName}),Object(m.jsx)("h4",{children:t.price}),Object(m.jsx)("p",{children:t.size})," "]}),r.cartlist.includes(t)?Object(m.jsx)("button",{className:"add-to-cart-btn",children:"Added to cart"}):Object(m.jsx)("button",{onClick:function(){return n({type:"ADD_TO_CART",payload:t})},className:"add-to-cart-btn",children:"Add to cart"})]})]})},f=c(26),k=function(){var e=r.a.useState("female"),t=Object(s.a)(e,2),c=t[0],a=t[1],n=function(e){a(e.target.value)};return Object(m.jsxs)("div",{className:"product-list-page",children:[Object(m.jsx)(p,{}),Object(m.jsxs)("div",{className:"product-list-page-main",children:[Object(m.jsxs)("div",{className:"filter-list",children:[Object(m.jsxs)(o.a,{component:"fieldset",children:[Object(m.jsx)(u.a,{component:"legend",children:"Gender"}),Object(m.jsxs)(j.a,{"aria-label":"gender",name:"gender1",value:c,onChange:n,children:[Object(m.jsx)(d.a,{value:"female",control:Object(m.jsx)(l.a,{}),label:"Female"}),Object(m.jsx)(d.a,{value:"male",control:Object(m.jsx)(l.a,{}),label:"Male"}),Object(m.jsx)(d.a,{value:"other",control:Object(m.jsx)(l.a,{}),label:"Other"})]})]}),Object(m.jsxs)(o.a,{component:"fieldset",children:[Object(m.jsx)(u.a,{component:"legend",children:"Price"}),Object(m.jsxs)(j.a,{"aria-label":"gender",name:"gender1",value:c,onChange:n,children:[Object(m.jsx)(d.a,{value:"female",control:Object(m.jsx)(l.a,{}),label:"Female"}),Object(m.jsx)(d.a,{value:"male",control:Object(m.jsx)(l.a,{}),label:"High-tO-Low"}),Object(m.jsx)(d.a,{value:"other",control:Object(m.jsx)(l.a,{}),label:"Low-to-High"})]})]}),Object(m.jsxs)(o.a,{component:"fieldset",children:[Object(m.jsx)(u.a,{component:"legend",children:"brand"}),Object(m.jsxs)(j.a,{"aria-label":"gender",name:"gender1",value:c,onChange:n,children:[Object(m.jsx)(d.a,{value:"female",control:Object(m.jsx)(l.a,{}),label:"Female"}),Object(m.jsx)(d.a,{value:"male",control:Object(m.jsx)(l.a,{}),label:"MONTREZ"}),Object(m.jsx)(d.a,{value:"other",control:Object(m.jsx)(l.a,{}),label:"BLIVE"})]})]})]}),Object(m.jsx)("div",{className:"product-list",children:f.map((function(e){return Object(m.jsx)(N,{product:e},e.id)}))})]})]})},C=function(e){var t=e.product,c=Object(a.useContext)(v),r=(c.state,c.dispatch);return Object(m.jsxs)("div",{className:"product-cart-card",children:[Object(m.jsx)("img",{className:"cart-card-img",src:t.productImage}),Object(m.jsxs)("div",{className:"cart-card-content",children:[Object(m.jsxs)("div",{className:"cart-card-name-div",children:[Object(m.jsx)("p",{className:"product-name",children:t.productName}),Object(m.jsx)("h4",{children:t.price}),Object(m.jsx)("p",{children:t.size})," "]}),Object(m.jsxs)("div",{className:"quantity-btn-div",children:[Object(m.jsx)("button",{onClick:function(){return r({type:"QUANTITY_PLUS",payload:t})},className:"add-to-cart-card-btn",children:"+"})," ",t.quantity,Object(m.jsx)("button",{onClick:function(){return r({type:"QUANTITY_MINUS",payload:t})},disabled:t.quantity<1,className:"add-to-cart-card-btn",children:"-"})]}),Object(m.jsx)("button",{onClick:function(){return r({type:"REMOVE_FROM_CART",payload:t})},className:"add-to-cart-card-btn",children:"Remove"})]})]})},q=function(){var e=Object(a.useContext)(v).state;var t=e.cartlist.map((function(e){return e.price})).reduce((function(e,t){return e+t}),0);console.log(e);return Object(m.jsxs)("div",{className:"cart",children:[Object(m.jsx)(p,{}),Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Cart"})}),Object(m.jsxs)("div",{className:"cart-main",children:[Object(m.jsxs)("div",{className:"cart-item-list",children:[Object(m.jsx)("h2",{children:"My Cart"}),0===e.cartlist.length?Object(m.jsx)("h1",{className:"product-cart-card",children:"YOUR CART IS EMPTY"}):e.cartlist.map((function(e){return Object(m.jsx)(C,{product:e},e.id)}))]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Product Details"}),Object(m.jsxs)("div",{className:"cart-calculation",children:[Object(m.jsx)("div",{className:"cart-calculation-item",children:e.cartlist.map((function(e){return Object(m.jsxs)("div",{className:"item-name-price",children:[Object(m.jsx)("h4",{children:e.productName})," ",Object(m.jsxs)("h4",{children:[e.price," Rs."]})]})}))}),Object(m.jsxs)("div",{className:"cart-calculation-total",children:[" ",Object(m.jsxs)("div",{className:"discount",children:[Object(m.jsx)("h4",{children:"Discount:"})," ",Object(m.jsxs)("h4",{children:["-",50," Rs."]})]}),Object(m.jsxs)("div",{className:"total-price",children:[Object(m.jsx)("h4",{children:"Total:"})," ",Object(m.jsxs)("h4",{children:[0===e.cartlist.length?0:t-50," Rs."]})]})]})]})]})]})]})};function S(){var e=Object(a.useContext)(O).route;return xx,Object(m.jsxs)("div",{className:"App",children:["Product-List"===e&&Object(m.jsx)(k,{}),"Cart"===e&&Object(m.jsx)(q,{})]})}var R=document.getElementById("root");i.a.render(Object(m.jsx)(a.StrictMode,{children:Object(m.jsx)(h,{children:Object(m.jsx)(y,{children:Object(m.jsx)(S,{})})})}),R)}},[[43,1,2]]]);
//# sourceMappingURL=main.fc8cc31c.chunk.js.map