(this.webpackJsonpclothix=this.webpackJsonpclothix||[]).push([[0],{16:function(e,n,t){"use strict";var r=t(5),c=function(e){return{type:r.g,user:e}},a=function(){return{type:r.h}},i=function(e){return{type:r.a,itemToAdd:e}},o=function(e){return{type:r.e,itemToRemoveId:e}},u=function(e){return{type:r.f,itemToRemoveId:e}},l=t(17),s=function(){return function(e){e({type:r.c}),l.d.collection("collections").get().then((function(n){var t=Object(l.b)(n);e(function(e){return{type:r.d,collections:e}}(t))})).catch((function(n){return e(function(e){return{type:r.b,errorMessage:e.message}}(n.message))}))}};t.d(n,"e",(function(){return c})),t.d(n,"f",(function(){return a})),t.d(n,"a",(function(){return i})),t.d(n,"d",(function(){return u})),t.d(n,"c",(function(){return o})),t.d(n,"b",(function(){return s}))},17:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"d",(function(){return p})),t.d(n,"e",(function(){return b})),t.d(n,"c",(function(){return m})),t.d(n,"b",(function(){return h}));var r=t(18),c=t.n(r),a=t(13),i=t(24),o=t(23),u=t.n(o);t(67),t(70);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(t,!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}u.a.initializeApp({apiKey:"AIzaSyDUlA7CZRYZY4YnYRs_yGMbZLkKPEzwiNI",authDomain:"clothix-9a176.firebaseapp.com",databaseURL:"https://clothix-9a176.firebaseio.com",projectId:"clothix-9a176",storageBucket:"clothix-9a176.appspot.com",messagingSenderId:"1059121015550",appId:"1:1059121015550:web:1ce406731674c78cd393af",measurementId:"G-BQ1CDT8FRF"});var f=u.a.auth(),p=u.a.firestore(),d=new u.a.auth.GoogleAuthProvider;d.setCustomParameters({prompt:"select_account"});var b=function(){return f.signInWithPopup(d)},m=function(){var e=Object(i.a)(c.a.mark((function e(n,t){var r,a,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return r=p.doc("users/".concat(n.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=16;break}return a=n.displayName,i=n.email,o=new Date,e.prev=9,e.next=12,r.set(s({displayName:a,email:i,createdAt:o},t));case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.abrupt("return",r);case 17:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(n,t){return e.apply(this,arguments)}}(),h=function(e){return e.docs.map((function(e){var n=e.data(),t=n.title,r=n.items;return{routeName:encodeURI(t.toLowerCase()),id:e.id,title:t,items:r}})).reduce((function(e,n){return e[n.title.toLowerCase()]=n,e}),{})};u.a},27:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return o}));var r=t(11),c=function(e){return e.cart},a=Object(r.a)([c],(function(e){return e.visible})),i=Object(r.a)([c],(function(e){return e.cartItems})),o=Object(r.a)([i],(function(e){return e.reduce((function(e,n){return e+n.price*n.quantity}),0)}))},37:function(e,n,t){"use strict";var r=t(36),c=t(0),a=t.n(c),i=t(2),o=t(3);function u(){var e=Object(i.a)(['\n  min-width: 100px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: "Open Sans Condensed";\n  font-weight: bolder;\n  justify-content: center;\n  cursor: pointer;\n\n  ',"\n"]);return u=function(){return e},e}function l(){var e=Object(i.a)(["\n  background-color: #4285f4;\n  color: white;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]);return l=function(){return e},e}function s(){var e=Object(i.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]);return s=function(){return e},e}function f(){var e=Object(i.a)(["\n  background-color: black;\n  color: white;\n  border: none;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]);return f=function(){return e},e}var p=Object(o.b)(f()),d=Object(o.b)(s()),b=Object(o.b)(l()),m=o.c.button(u(),(function(e){return e.isGoogleAuthBtn?b:e.inverted?d:p}));n.a=function(e){var n=e.children,t=e.clicked,c=e.inverted,i=e.isGoogleAuthBtn,o=Object(r.a)(e,["children","clicked","inverted","isGoogleAuthBtn"]);return a.a.createElement(m,Object.assign({inverted:c,isGoogleAuthBtn:i},o,{onClick:t}),n)}},42:function(e,n,t){"use strict";var r=t(0),c=t.n(r),a=t(2),i=t(3);function o(){var e=Object(a.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return o=function(){return e},e}function u(){var e=Object(a.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return u=function(){return e},e}var l=i.c.div(u()),s=i.c.div(o());n.a=function(){return c.a.createElement(l,null,c.a.createElement(s,null))}},5:function(e,n,t){"use strict";t.d(n,"g",(function(){return r})),t.d(n,"h",(function(){return c})),t.d(n,"a",(function(){return a})),t.d(n,"f",(function(){return i})),t.d(n,"e",(function(){return o})),t.d(n,"c",(function(){return u})),t.d(n,"d",(function(){return l})),t.d(n,"b",(function(){return s}));var r="SET_CURRENT_USER",c="TOGGLE_CART_VISIBILITY",a="ADD_ITEM",i="REMOVE_ITEM",o="REMOVE_CHECKOUT_ITEM",u="FETCH_COLLECTIONS_START",l="FETCH_COLLECTIONS_SUCCESS",s="FETCH_COLLECTIONS_FAILURE"},54:function(e,n,t){e.exports=t(74)},59:function(e,n,t){},72:function(e,n,t){},74:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),a=t(26),i=t.n(a),o=(t(59),t(10)),u=t(44),l=t(7),s=t(45),f=t.n(s),p=t(46),d=t(28),b=t(47),m=t.n(b),h=t(13),g=t(5);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(t,!0).forEach((function(n){Object(h.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var y={currentUser:null},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case g.g:return v({},e,{currentUser:n.user});default:return e}},E=t(51);function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(t,!0).forEach((function(n){Object(h.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var k={visible:!1,cartItems:[]},P=function(e,n){return e.find((function(e){return e.id===n.id}))?e.map((function(e){return e.id===n.id?w({},e,{quantity:e.quantity+1}):e})):[].concat(Object(E.a)(e),[w({},n,{quantity:1})])},C=function(e,n){return 1===e.find((function(e){return e.id===n})).quantity?e.filter((function(e){return e.id!==n})):e.map((function(e){return e.id===n?w({},e,{quantity:e.quantity-1}):e}))},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case g.h:return w({},e,{visible:!e.visible});case g.a:return w({},e,{cartItems:P(e.cartItems,n.itemToAdd)});case g.f:return w({},e,{cartItems:C(e.cartItems,n.itemToRemoveId)});case g.e:return w({},e,{cartItems:e.cartItems.filter((function(e){return e.id!==n.itemToRemoveId}))});default:return e}};function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(t,!0).forEach((function(n){Object(h.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var T={shopData:null,isFetching:!0,errorMessage:""},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case g.c:return U({},e,{isFetching:!0});case g.d:return U({},e,{shopData:n.collections,isFetching:!1});case g.b:return U({},e,{isFetching:!1,errorMessage:n.errorMessage});default:return e}},R={items:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0;return n.type,e},A={key:"root",storage:m.a,whitelist:["cart"]},_=Object(l.c)({user:j,cart:I,shop:D,directory:z}),M=Object(d.a)(A,_),G=[p.a,f.a],L=Object(l.e)(M,l.a.apply(void 0,G)),B=Object(d.b)(L),H=t(20),N=t(18),q=t.n(N),F=t(24),V=t(19),Y=t(16),K=t(2),W=t(3);function Z(){var e=Object(K.a)(["\n    body {\n        font-family: 'Open Sans Condensed', sans-serif;\n        padding: 20px 60px;\n\n        @media screen and (max-width: 800px) {\n            padding: 10px;\n        }\n    }\n\n    a {\n        text-decoration: none;\n        color: black;\n    }\n\n    a:hover {\n        text-decoration: underline;\n    }\n\n    * {\n        box-sizing: border-box;\n    }\n"]);return Z=function(){return e},e}var J=Object(W.a)(Z()),Q=t(11),$=Object(Q.a)([function(e){return e.user}],(function(e){return e.currentUser})),X=t(17),ee=t(27);function ne(){return(ne=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function te(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var re=c.a.createElement("title",null,"Group"),ce=c.a.createElement("desc",null,"Created with Sketch."),ae=c.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},c.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},c.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),c.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),c.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),c.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),c.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),ie=function(e){var n=e.svgRef,t=e.title,r=te(e,["svgRef","title"]);return c.a.createElement("svg",ne({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:n},r),void 0===t?re:t?c.a.createElement("title",null,t):null,ce,ae)},oe=c.a.forwardRef((function(e,n){return c.a.createElement(ie,ne({svgRef:n},e))}));t.p,t(72);function ue(){return(ue=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function le(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var se=c.a.createElement("g",null),fe=c.a.createElement("g",null),pe=c.a.createElement("g",null),de=c.a.createElement("g",null),be=c.a.createElement("g",null),me=c.a.createElement("g",null),he=c.a.createElement("g",null),ge=c.a.createElement("g",null),Oe=c.a.createElement("g",null),ve=c.a.createElement("g",null),ye=c.a.createElement("g",null),je=c.a.createElement("g",null),Ee=c.a.createElement("g",null),xe=c.a.createElement("g",null),we=c.a.createElement("g",null),ke=function(e){var n=e.svgRef,t=e.title,r=le(e,["svgRef","title"]);return c.a.createElement("svg",ue({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:n},r),t?c.a.createElement("title",null,t):null,c.a.createElement("g",null,c.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),se,fe,pe,de,be,me,he,ge,Oe,ve,ye,je,Ee,xe,we)},Pe=c.a.forwardRef((function(e,n){return c.a.createElement(ke,ue({svgRef:n},e))}));t.p;function Ce(){var e=Object(K.a)(["\n  position: absolute;\n  font-size: 10px;\n  font-weight: bold;\n  bottom: 12px;\n"]);return Ce=function(){return e},e}function Ie(){var e=Object(K.a)(["\n  width: 24px;\n  height: 24px;\n"]);return Ie=function(){return e},e}function Se(){var e=Object(K.a)(["\n  width: 45px;\n  height: 45px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n"]);return Se=function(){return e},e}var Ue=W.c.div(Se()),Te=Object(W.c)(Pe)(Ie()),De=W.c.span(Ce()),Re=Object(o.b)((function(e){return{quantity:e.cart.cartItems.length}}))((function(e){var n=e.clicked,t=e.quantity;return c.a.createElement(Ue,{onClick:n},c.a.createElement(Te,null),c.a.createElement(De,null,t))}));function ze(){var e=Object(K.a)(["\n  cursor: pointer;\n  align-self: center;\n"]);return ze=function(){return e},e}function Ae(){var e=Object(K.a)(["\n  font-size: 16px;\n"]);return Ae=function(){return e},e}function _e(){var e=Object(K.a)(["\n  font-size: 16px;\n"]);return _e=function(){return e},e}function Me(){var e=Object(K.a)(["\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 10px 20px;\n"]);return Me=function(){return e},e}function Ge(){var e=Object(K.a)(["\n  width: 30%;\n"]);return Ge=function(){return e},e}function Le(){var e=Object(K.a)(["\n  width: 100%;\n  display: flex;\n  height: 80px;\n  margin-bottom: 15px;\n"]);return Le=function(){return e},e}var Be=W.c.div(Le()),He=W.c.img.attrs((function(e){return{src:e.imageUrl,alt:e.name}}))(Ge()),Ne=W.c.div(Me()),qe=W.c.span(_e()),Fe=W.c.span(Ae()),Ve=W.c.div(ze()),Ye=Object(o.b)(null,(function(e){return{removeItem:function(n){return e(Y.c(n))}}}))((function(e){var n=e.item,t=e.removeItem,r=n.id,a=n.imageUrl,i=n.name,o=n.price,u=n.quantity;return c.a.createElement(Be,null,c.a.createElement(He,{imageUrl:a,name:i}),c.a.createElement(Ne,null,c.a.createElement(qe,null,i),c.a.createElement(Fe,null,u," x $",o)),c.a.createElement(Ve,{onClick:function(){return t(r)}},"\u2718"))})),Ke=t(37);function We(){var e=Object(K.a)(["\n  margin: 20px auto;\n"]);return We=function(){return e},e}function Ze(){var e=Object(K.a)(["\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n"]);return Ze=function(){return e},e}function Je(){var e=Object(K.a)(["\n  position: absolute;\n  width: 240px;\n  height: 340px;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  border: 1px solid black;\n  background-color: white;\n  top: 90px;\n  right: 60px;\n  z-index: 5;\n\n  .button {\n    margin-top: auto;\n  }\n"]);return Je=function(){return e},e}var Qe=W.c.div(Je()),$e=W.c.div(Ze()),Xe=W.c.h3(We()),en=function(e){var n=e.cartItems,t=e.history,r=e.dispatch;return c.a.createElement(Qe,null,c.a.createElement($e,null,n.length>0?n.map((function(e){return c.a.createElement(Ye,{key:e.id,item:e})})):c.a.createElement(Xe,null,"Your cart is empty!")),c.a.createElement(Ke.a,{clicked:function(){t.push("/checkout"),r(Y.f())}},"CHECKOUT"))},nn=Object(Q.b)({cartItems:ee.b}),tn=Object(l.d)(V.g,Object(o.b)(nn))(en);function rn(){var e=Object(K.a)(["\n  ","\n"]);return rn=function(){return e},e}function cn(){var e=Object(K.a)(["\n  ","\n"]);return cn=function(){return e},e}function an(){var e=Object(K.a)(["\n  font-size: 20px;\n  padding: 10px 15px;\n  cursor: pointer;\n\n  &.active {\n    text-decoration: underline;\n  }\n\n  @media screen and (max-width: 800px) {\n    font-size: 16px;\n  }\n"]);return an=function(){return e},e}function on(){var e=Object(K.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  @media screen and (max-width: 800px) {\n    width: 80%;\n  }\n"]);return on=function(){return e},e}function un(){var e=Object(K.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n\n  @media screen and (max-width: 800px) {\n    width: 50px;\n    padding: 0;\n  }\n"]);return un=function(){return e},e}function ln(){var e=Object(K.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n\n  @media screen and (max-width: 800px) {\n    height: 60px;\n    padding: 10px;\n    margin-bottom: 0;\n  }\n"]);return ln=function(){return e},e}var sn=W.c.div(ln()),fn=Object(W.c)(H.b)(un()),pn=W.c.div(on()),dn=Object(W.b)(an()),bn=Object(W.c)(H.b)(cn(),dn),mn=W.c.div(rn(),dn),hn=Object(Q.b)({currentUser:$,cartVisible:ee.a}),gn=Object(o.b)(hn,(function(e){return{toggleCartVisibility:function(){return e(Y.f())}}}))((function(e){var n=e.currentUser,t=e.cartVisible,r=e.toggleCartVisibility;return c.a.createElement(sn,null,c.a.createElement(fn,{to:"/"},c.a.createElement(oe,null)),c.a.createElement(pn,null,c.a.createElement(bn,{to:"/shop"},"SHOP"),c.a.createElement(bn,{to:"/contact"},"CONTACT"),n?c.a.createElement(mn,{as:"div",onClick:function(){return X.a.signOut()}},"SIGN OUT"):c.a.createElement(bn,{to:"/auth"},"SIGN IN"),c.a.createElement(Re,{clicked:r})),t?c.a.createElement(tn,null):null)})),On=t(42);function vn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function yn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?vn(t,!0).forEach((function(n){Object(h.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):vn(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var jn=c.a.lazy((function(){return t.e(6).then(t.bind(null,88))})),En=c.a.lazy((function(){return t.e(4).then(t.bind(null,86))})),xn=c.a.lazy((function(){return t.e(5).then(t.bind(null,87))})),wn=c.a.lazy((function(){return t.e(3).then(t.bind(null,89))})),kn=Object(Q.b)({currentUser:$}),Pn=Object(o.b)(kn,(function(e){return{setCurrentUser:function(n){return e(Y.e(n))}}}))((function(e){var n=e.setCurrentUser;return Object(r.useEffect)((function(){var e=X.a.onAuthStateChanged(function(){var e=Object(F.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,Object(X.c)(t);case 3:e.sent.onSnapshot((function(e){var t=yn({id:e.id},e.data());n(t)})),e.next=8;break;case 7:n(t);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());return function(){e()}}),[n]),c.a.createElement(r.Fragment,null,c.a.createElement(J,null),c.a.createElement(gn,null),c.a.createElement(r.Suspense,{fallback:c.a.createElement(On.a,null)},c.a.createElement(V.d,null,c.a.createElement(V.b,{path:"/auth",render:function(){return e.currentUser?c.a.createElement(V.a,{to:"/"}):c.a.createElement(xn,null)}}),c.a.createElement(V.b,{path:"/checkout",component:wn}),c.a.createElement(V.b,{path:"/shop",component:En}),c.a.createElement(V.b,{path:"/",component:jn}))))}));i.a.render(c.a.createElement(o.a,{store:L},c.a.createElement(H.a,{basename:"/clothix/#"},c.a.createElement(u.a,{persistor:B},c.a.createElement(Pn,null)))),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.49ab1849.chunk.js.map