(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-685b752a"],{"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,c={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==c.call(t)?a(t):i(r(t))}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),c=n("2d00"),o=i("species");t.exports=function(t){return c>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4df4":function(t,e,n){"use strict";var r=n("0366"),i=n("7b0b"),c=n("9bdd"),o=n("e95a"),a=n("50c4"),u=n("8418"),f=n("35a1");t.exports=function(t){var e,n,s,l,d,b,y=i(t),p="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,g=void 0!==h,m=f(y),O=0;if(g&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==m||p==Array&&o(m))for(e=a(y.length),n=new p(e);e>O;O++)b=g?h(y[O],O):y[O],u(n,O,b);else for(l=m.call(y),d=l.next,n=new p;!(s=d.call(l)).done;O++)b=g?c(l,h,[s.value,O],!0):s.value,u(n,O,b);return n.length=O,n}},"57dd":function(t,e,n){},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),c=n("b622"),o=c("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},6727:function(t,e,n){"use strict";n("57dd")},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),c=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:c.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),i=n("9bf2"),c=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?i.f(t,o,c(0,n)):t[o]=n}},"9bdd":function(t,e,n){var r=n("825a"),i=n("2a62");t.exports=function(t,e,n,c){try{return c?e(r(n)[0],n[1]):e(n)}catch(o){throw i(t),o}}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),c=n("d066"),o=n("c430"),a=n("83ab"),u=n("4930"),f=n("fdbf"),s=n("d039"),l=n("5135"),d=n("e8b5"),b=n("861d"),y=n("825a"),p=n("7b0b"),v=n("fc6a"),h=n("c04e"),g=n("5c6c"),m=n("7c73"),O=n("df75"),j=n("241c"),w=n("057f"),S=n("7418"),A=n("06cf"),k=n("9bf2"),q=n("d1e7"),x=n("9112"),C=n("6eeb"),I=n("5692"),P=n("f772"),T=n("d012"),$=n("90e3"),E=n("b622"),N=n("e538"),J=n("746f"),Q=n("d44e"),F=n("69f3"),L=n("b727").forEach,M=P("hidden"),B="Symbol",D="prototype",W=E("toPrimitive"),G=F.set,H=F.getterFor(B),K=Object[D],R=i.Symbol,U=c("JSON","stringify"),Y=A.f,z=k.f,V=w.f,X=q.f,Z=I("symbols"),_=I("op-symbols"),tt=I("string-to-symbol-registry"),et=I("symbol-to-string-registry"),nt=I("wks"),rt=i.QObject,it=!rt||!rt[D]||!rt[D].findChild,ct=a&&s((function(){return 7!=m(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Y(K,e);r&&delete K[e],z(t,e,n),r&&t!==K&&z(K,e,r)}:z,ot=function(t,e){var n=Z[t]=m(R[D]);return G(n,{type:B,tag:t,description:e}),a||(n.description=e),n},at=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof R},ut=function(t,e,n){t===K&&ut(_,e,n),y(t);var r=h(e,!0);return y(n),l(Z,r)?(n.enumerable?(l(t,M)&&t[M][r]&&(t[M][r]=!1),n=m(n,{enumerable:g(0,!1)})):(l(t,M)||z(t,M,g(1,{})),t[M][r]=!0),ct(t,r,n)):z(t,r,n)},ft=function(t,e){y(t);var n=v(e),r=O(n).concat(yt(n));return L(r,(function(e){a&&!lt.call(n,e)||ut(t,e,n[e])})),t},st=function(t,e){return void 0===e?m(t):ft(m(t),e)},lt=function(t){var e=h(t,!0),n=X.call(this,e);return!(this===K&&l(Z,e)&&!l(_,e))&&(!(n||!l(this,e)||!l(Z,e)||l(this,M)&&this[M][e])||n)},dt=function(t,e){var n=v(t),r=h(e,!0);if(n!==K||!l(Z,r)||l(_,r)){var i=Y(n,r);return!i||!l(Z,r)||l(n,M)&&n[M][r]||(i.enumerable=!0),i}},bt=function(t){var e=V(v(t)),n=[];return L(e,(function(t){l(Z,t)||l(T,t)||n.push(t)})),n},yt=function(t){var e=t===K,n=V(e?_:v(t)),r=[];return L(n,(function(t){!l(Z,t)||e&&!l(K,t)||r.push(Z[t])})),r};if(u||(R=function(){if(this instanceof R)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=$(t),n=function(t){this===K&&n.call(_,t),l(this,M)&&l(this[M],e)&&(this[M][e]=!1),ct(this,e,g(1,t))};return a&&it&&ct(K,e,{configurable:!0,set:n}),ot(e,t)},C(R[D],"toString",(function(){return H(this).tag})),C(R,"withoutSetter",(function(t){return ot($(t),t)})),q.f=lt,k.f=ut,A.f=dt,j.f=w.f=bt,S.f=yt,N.f=function(t){return ot(E(t),t)},a&&(z(R[D],"description",{configurable:!0,get:function(){return H(this).description}}),o||C(K,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:R}),L(O(nt),(function(t){J(t)})),r({target:B,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=R(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!a},{create:st,defineProperty:ut,defineProperties:ft,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:bt,getOwnPropertySymbols:yt}),r({target:"Object",stat:!0,forced:s((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(p(t))}}),U){var pt=!u||s((function(){var t=R();return"[null]"!=U([t])||"{}"!=U({a:t})||"{}"!=U(Object(t))}));r({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,n){var r,i=[t],c=1;while(arguments.length>c)i.push(arguments[c++]);if(r=e,(b(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!at(e))return e}),i[1]=e,U.apply(null,i)}})}R[D][W]||x(R[D],W,R[D].valueOf),Q(R,B),T[M]=!0},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),c=n("1c7e"),o=!c((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:o},{from:i})},a6ab:function(t,e,n){"use strict";n.r(e);n("b0c0");var r=n("7a23"),i=Object(r["g"])("div",{class:"headline-wrap"},[Object(r["g"])("h2",null,"Hatchin Shop")],-1),c={class:"item-label"},o={class:"page-wrap"},a=Object(r["g"])("h3",null,"Your Cart",-1),u={key:0,class:"cart-content-wrap"},f={class:"cart-label"},s={class:"button-wrap"},l={key:0,class:"total-wrap"},d=Object(r["g"])("div",null,"Total:",-1),b={class:"total-price"};function y(t,e,n,y,p,v){return Object(r["p"])(),Object(r["d"])(r["a"],null,[i,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(p.itemList,(function(t){return Object(r["p"])(),Object(r["d"])("div",{class:"main-wrap",key:t},[Object(r["g"])("div",{class:["content-wrap",{selected:!0===t.isSelected}],onClick:function(e){return v.addToCart(t)}},[Object(r["g"])("div",c,[Object(r["g"])("div",null,Object(r["y"])(t.name),1),Object(r["g"])("div",null,"$"+Object(r["y"])(t.price),1)])],10,["onClick"])])})),128)),Object(r["g"])("div",o,[a,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(p.itemList,(function(t){return Object(r["p"])(),Object(r["d"])("div",{class:"cart-wrap",key:t},[!0===t.isSelected&&t.quantity>=0?(Object(r["p"])(),Object(r["d"])("div",u,[Object(r["g"])("div",f,[Object(r["g"])("div",null,Object(r["y"])(t.name)+"   @ "+Object(r["y"])(t.quantity)+"x $"+Object(r["y"])(t.price),1),Object(r["g"])("div",null,"$"+Object(r["y"])(t.quantity*t.price),1),Object(r["g"])("div",s,[Object(r["g"])("div",{onClick:function(e){return v.updatedItemQty("add",t)},class:"button"},"+",8,["onClick"]),Object(r["g"])("div",{onClick:function(e){return v.updatedItemQty("minus",t)},class:"button"},"-",8,["onClick"]),Object(r["g"])("div",{onClick:function(e){return v.updatedItemQty("remove",t)},class:"button"},"x",8,["onClick"])])])])):Object(r["e"])("",!0)])})),128)),v.calculateTotal>0?(Object(r["p"])(),Object(r["d"])("div",l,[d,Object(r["g"])("div",b,"$"+Object(r["y"])(v.calculateTotal)+" ",1)])):Object(r["e"])("",!0)])],64)}var p=n("b85c"),v={name:"Grocery",data:function(){return{itemList:[{name:"Dry Noodle",price:4,quantity:0,isSelected:!1},{name:"White Rice",price:6,quantity:0,isSelected:!1},{name:"Ice Cream",price:9,quantity:0,isSelected:!1},{name:"Kobe Breef",price:10,quantity:0,isSelected:!1},{name:"Fresh Chicken",price:100,quantity:0,isSelected:!1},{name:"Japanese tofu",price:10,quantity:0,isSelected:!1},{name:"Matcha ice cream",price:10,quantity:0,isSelected:!1}]}},computed:{calculateTotal:function(){var t,e=0,n=Object(p["a"])(this.itemList);try{for(n.s();!(t=n.n()).done;){var r=t.value;console.log(r.price*r.quantity),e+=r.quantity*r.price}}catch(i){n.e(i)}finally{n.f()}return e}},methods:{addToCart:function(t){t.isSelected=!t.isSelected,!0===t.isSelected?t.quantity++:t.quantity=0},updatedItemQty:function(t,e){"add"===t?e.quantity++:"remove"===t?(e.isSelected=!1,e.quantity=0):e.quantity--}}};n("6727");v.render=y;e["default"]=v},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,c=Function.prototype,o=c.toString,a=/^\s*function ([^ (]*)/,u="name";r&&!(u in c)&&i(c,u,{configurable:!0,get:function(){try{return o.call(this).match(a)[1]}catch(t){return""}}})},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),c=n("7b0b"),o=n("50c4"),a=n("65f0"),u=[].push,f=function(t){var e=1==t,n=2==t,f=3==t,s=4==t,l=6==t,d=7==t,b=5==t||l;return function(y,p,v,h){for(var g,m,O=c(y),j=i(O),w=r(p,v,3),S=o(j.length),A=0,k=h||a,q=e?k(y,S):n||d?k(y,0):void 0;S>A;A++)if((b||A in j)&&(g=j[A],m=w(g,A,O),t))if(e)q[A]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return A;case 2:u.call(q,g)}else switch(t){case 4:return!1;case 7:u.call(q,g)}return l?-1:f||s?s:q}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},b85c:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("fb6a"),n("b0c0"),n("a630");function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function c(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=i(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,c=function(){};return{s:c,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,o=t},f:function(){try{a||null==n["return"]||n["return"]()}finally{if(u)throw o}}}}},d28b:function(t,e,n){var r=n("746f");r("iterator")},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),c=n("da84"),o=n("5135"),a=n("861d"),u=n("9bf2").f,f=n("e893"),s=c.Symbol;if(i&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new s(t):void 0===t?s():s(t);return""===t&&(l[e]=!0),e};f(d,s);var b=d.prototype=s.prototype;b.constructor=d;var y=b.toString,p="Symbol(test)"==String(s("test")),v=/^Symbol\((.*)\)[^)]+$/;u(b,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=y.call(t);if(o(l,t))return"";var n=p?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("861d"),c=n("e8b5"),o=n("23cb"),a=n("50c4"),u=n("fc6a"),f=n("8418"),s=n("b622"),l=n("1dde"),d=l("slice"),b=s("species"),y=[].slice,p=Math.max;r({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var n,r,s,l=u(this),d=a(l.length),v=o(t,d),h=o(void 0===e?d:e,d);if(c(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!c(n.prototype)?i(n)&&(n=n[b],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return y.call(l,v,h);for(r=new(void 0===n?Array:n)(p(h-v,0)),s=0;v<h;v++,s++)v in l&&f(r,s,l[v]);return r.length=s,r}})}}]);
//# sourceMappingURL=chunk-685b752a.f6775cf8.js.map