(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-217e3a40"],{"04e7":function(t,e,n){"use strict";n("109f")},"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,c={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==c.call(t)?a(t):i(r(t))}},"109f":function(t,e,n){},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),c=n("2d00"),o=i("species");t.exports=function(t){return c>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4df4":function(t,e,n){"use strict";var r=n("0366"),i=n("7b0b"),c=n("9bdd"),o=n("e95a"),a=n("50c4"),u=n("8418"),f=n("35a1");t.exports=function(t){var e,n,l,s,d,b,p=i(t),y="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,g=void 0!==h,m=f(p),O=0;if(g&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==m||y==Array&&o(m))for(e=a(p.length),n=new y(e);e>O;O++)b=g?h(p[O],O):p[O],u(n,O,b);else for(s=m.call(p),d=s.next,n=new y;!(l=d.call(s)).done;O++)b=g?c(s,h,[l.value,O],!0):l.value,u(n,O,b);return n.length=O,n}},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),c=n("b622"),o=c("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),c=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:c.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),i=n("9bf2"),c=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?i.f(t,o,c(0,n)):t[o]=n}},"9bdd":function(t,e,n){var r=n("825a"),i=n("2a62");t.exports=function(t,e,n,c){try{return c?e(r(n)[0],n[1]):e(n)}catch(o){throw i(t),o}}},a434:function(t,e,n){"use strict";var r=n("23e7"),i=n("23cb"),c=n("a691"),o=n("50c4"),a=n("7b0b"),u=n("65f0"),f=n("8418"),l=n("1dde"),s=l("splice"),d=Math.max,b=Math.min,p=9007199254740991,y="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!s},{splice:function(t,e){var n,r,l,s,v,h,g=a(this),m=o(g.length),O=i(t,m),j=arguments.length;if(0===j?n=r=0:1===j?(n=0,r=m-O):(n=j-2,r=b(d(c(e),0),m-O)),m+n-r>p)throw TypeError(y);for(l=u(g,r),s=0;s<r;s++)v=O+s,v in g&&f(l,s,g[v]);if(l.length=r,n<r){for(s=O;s<m-r;s++)v=s+r,h=s+n,v in g?g[h]=g[v]:delete g[h];for(s=m;s>m-r+n;s--)delete g[s-1]}else if(n>r)for(s=m-r;s>O;s--)v=s+r-1,h=s+n-1,v in g?g[h]=g[v]:delete g[h];for(s=0;s<n;s++)g[s+O]=arguments[s+2];return g.length=m-r+n,l}})},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),c=n("d066"),o=n("c430"),a=n("83ab"),u=n("4930"),f=n("fdbf"),l=n("d039"),s=n("5135"),d=n("e8b5"),b=n("861d"),p=n("825a"),y=n("7b0b"),v=n("fc6a"),h=n("c04e"),g=n("5c6c"),m=n("7c73"),O=n("df75"),j=n("241c"),w=n("057f"),S=n("7418"),x=n("06cf"),A=n("9bf2"),C=n("d1e7"),k=n("9112"),I=n("6eeb"),q=n("5692"),P=n("f772"),T=n("d012"),E=n("90e3"),$=n("b622"),N=n("e538"),M=n("746f"),Q=n("d44e"),J=n("69f3"),F=n("b727").forEach,L=P("hidden"),B="Symbol",D="prototype",W=$("toPrimitive"),G=J.set,R=J.getterFor(B),U=Object[D],Y=i.Symbol,z=c("JSON","stringify"),H=x.f,K=A.f,V=w.f,X=C.f,Z=q("symbols"),_=q("op-symbols"),tt=q("string-to-symbol-registry"),et=q("symbol-to-string-registry"),nt=q("wks"),rt=i.QObject,it=!rt||!rt[D]||!rt[D].findChild,ct=a&&l((function(){return 7!=m(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=H(U,e);r&&delete U[e],K(t,e,n),r&&t!==U&&K(U,e,r)}:K,ot=function(t,e){var n=Z[t]=m(Y[D]);return G(n,{type:B,tag:t,description:e}),a||(n.description=e),n},at=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Y},ut=function(t,e,n){t===U&&ut(_,e,n),p(t);var r=h(e,!0);return p(n),s(Z,r)?(n.enumerable?(s(t,L)&&t[L][r]&&(t[L][r]=!1),n=m(n,{enumerable:g(0,!1)})):(s(t,L)||K(t,L,g(1,{})),t[L][r]=!0),ct(t,r,n)):K(t,r,n)},ft=function(t,e){p(t);var n=v(e),r=O(n).concat(pt(n));return F(r,(function(e){a&&!st.call(n,e)||ut(t,e,n[e])})),t},lt=function(t,e){return void 0===e?m(t):ft(m(t),e)},st=function(t){var e=h(t,!0),n=X.call(this,e);return!(this===U&&s(Z,e)&&!s(_,e))&&(!(n||!s(this,e)||!s(Z,e)||s(this,L)&&this[L][e])||n)},dt=function(t,e){var n=v(t),r=h(e,!0);if(n!==U||!s(Z,r)||s(_,r)){var i=H(n,r);return!i||!s(Z,r)||s(n,L)&&n[L][r]||(i.enumerable=!0),i}},bt=function(t){var e=V(v(t)),n=[];return F(e,(function(t){s(Z,t)||s(T,t)||n.push(t)})),n},pt=function(t){var e=t===U,n=V(e?_:v(t)),r=[];return F(n,(function(t){!s(Z,t)||e&&!s(U,t)||r.push(Z[t])})),r};if(u||(Y=function(){if(this instanceof Y)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),n=function(t){this===U&&n.call(_,t),s(this,L)&&s(this[L],e)&&(this[L][e]=!1),ct(this,e,g(1,t))};return a&&it&&ct(U,e,{configurable:!0,set:n}),ot(e,t)},I(Y[D],"toString",(function(){return R(this).tag})),I(Y,"withoutSetter",(function(t){return ot(E(t),t)})),C.f=st,A.f=ut,x.f=dt,j.f=w.f=bt,S.f=pt,N.f=function(t){return ot($(t),t)},a&&(K(Y[D],"description",{configurable:!0,get:function(){return R(this).description}}),o||I(U,"propertyIsEnumerable",st,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:Y}),F(O(nt),(function(t){M(t)})),r({target:B,stat:!0,forced:!u},{for:function(t){var e=String(t);if(s(tt,e))return tt[e];var n=Y(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(s(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!a},{create:lt,defineProperty:ut,defineProperties:ft,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:l((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(y(t))}}),z){var yt=!u||l((function(){var t=Y();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}));r({target:"JSON",stat:!0,forced:yt},{stringify:function(t,e,n){var r,i=[t],c=1;while(arguments.length>c)i.push(arguments[c++]);if(r=e,(b(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!at(e))return e}),i[1]=e,z.apply(null,i)}})}Y[D][W]||k(Y[D],W,Y[D].valueOf),Q(Y,B),T[L]=!0},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),c=n("1c7e"),o=!c((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:o},{from:i})},aa3f:function(t,e,n){"use strict";n.r(e);n("b0c0");var r=n("7a23"),i=Object(r["g"])("h2",null,"Shopping",-1),c={class:"item-label"},o={class:"page-wrap"},a=Object(r["g"])("h3",null,"Your Cart",-1),u={key:0,class:"cart-content-wrap"},f={class:"cart-label"},l={class:"button-wrap"},s={key:0,class:"total-wrap"},d=Object(r["g"])("div",null,"Total:",-1),b={class:"total-price"};function p(t,e,n,p,y,v){return Object(r["p"])(),Object(r["d"])(r["a"],null,[i,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(y.itemList,(function(t){return Object(r["p"])(),Object(r["d"])("div",{class:"main-wrap",key:t},[Object(r["g"])("div",{class:["content-wrap",{selected:!0===t.isSelected}],onClick:function(e){return v.updatedCart(t)}},[Object(r["g"])("div",c,[Object(r["g"])("div",null,Object(r["y"])(t.name),1),Object(r["g"])("div",null,"$"+Object(r["y"])(t.price),1)])],10,["onClick"])])})),128)),Object(r["g"])("div",o,[a,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(y.selectedCart,(function(t){return Object(r["p"])(),Object(r["d"])("div",{class:"cart-wrap",key:t},[!0===t.isSelected&&t.quantity>=0?(Object(r["p"])(),Object(r["d"])("div",u,[Object(r["g"])("div",f,[Object(r["g"])("div",null,Object(r["y"])(t.name)+"   @ "+Object(r["y"])(t.quantity)+"x $"+Object(r["y"])(t.price),1),Object(r["g"])("div",null,"$"+Object(r["y"])(t.quantity*t.price),1),Object(r["g"])("div",l,[Object(r["g"])("div",{onClick:function(e){return v.updatedItemQty("add",t)},class:"button"},"+",8,["onClick"]),Object(r["g"])("div",{onClick:function(e){return v.updatedItemQty("minus",t)},class:"button"},"-",8,["onClick"]),Object(r["g"])("div",{onClick:function(e){return v.updatedItemQty("remove",t)},class:"button"},"x",8,["onClick"])])])])):Object(r["e"])("",!0)])})),128)),v.calculateTotal>0?(Object(r["p"])(),Object(r["d"])("div",s,[d,Object(r["g"])("div",b,"$"+Object(r["y"])(v.calculateTotal)+" ",1)])):Object(r["e"])("",!0)])],64)}var y=n("b85c"),v=(n("c740"),n("a434"),{name:"Grocery",data:function(){return{selectedCart:[],itemList:[{name:"Dry Noodle",price:4,quantity:0,isSelected:!1},{name:"White Rice",price:6,quantity:0,isSelected:!1},{name:"Ice Cream",price:9,quantity:0,isSelected:!1},{name:"Breef",price:10,quantity:0,isSelected:!1}]}},computed:{calculateTotal:function(){var t,e=0,n=Object(y["a"])(this.itemList);try{for(n.s();!(t=n.n()).done;){var r=t.value;console.log(r.price*r.quantity),e+=r.quantity*r.price}}catch(i){n.e(i)}finally{n.f()}return e}},methods:{updatedCart:function(t){if(t.isSelected=!t.isSelected,1==t.isSelected)this.selectedCart.unshift(t),t.quantity++;else{var e=this.selectedCart.findIndex((function(e){return e.name==t.name}));this.selectedCart.splice(e,1),t.quantity=0}},updatedItemQty:function(t,e){if("add"===t)e.quantity++;else if("remove"===t){var n=this.selectedCart.findIndex((function(t){return t.name==e.name}));this.selectedCart.splice(n,1),e.isSelected=!1,e.quantity=0}else e.quantity--}}});n("04e7");v.render=p;e["default"]=v},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,c=Function.prototype,o=c.toString,a=/^\s*function ([^ (]*)/,u="name";r&&!(u in c)&&i(c,u,{configurable:!0,get:function(){try{return o.call(this).match(a)[1]}catch(t){return""}}})},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),c=n("7b0b"),o=n("50c4"),a=n("65f0"),u=[].push,f=function(t){var e=1==t,n=2==t,f=3==t,l=4==t,s=6==t,d=7==t,b=5==t||s;return function(p,y,v,h){for(var g,m,O=c(p),j=i(O),w=r(y,v,3),S=o(j.length),x=0,A=h||a,C=e?A(p,S):n||d?A(p,0):void 0;S>x;x++)if((b||x in j)&&(g=j[x],m=w(g,x,O),t))if(e)C[x]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return x;case 2:u.call(C,g)}else switch(t){case 4:return!1;case 7:u.call(C,g)}return s?-1:f||l?l:C}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},b85c:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("fb6a"),n("b0c0"),n("a630");function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function c(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=i(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,c=function(){};return{s:c,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,o=t},f:function(){try{a||null==n["return"]||n["return"]()}finally{if(u)throw o}}}}},c740:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").findIndex,c=n("44d2"),o="findIndex",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),c(o)},d28b:function(t,e,n){var r=n("746f");r("iterator")},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),c=n("da84"),o=n("5135"),a=n("861d"),u=n("9bf2").f,f=n("e893"),l=c.Symbol;if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var s={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(s[e]=!0),e};f(d,l);var b=d.prototype=l.prototype;b.constructor=d;var p=b.toString,y="Symbol(test)"==String(l("test")),v=/^Symbol\((.*)\)[^)]+$/;u(b,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(o(s,t))return"";var n=y?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("861d"),c=n("e8b5"),o=n("23cb"),a=n("50c4"),u=n("fc6a"),f=n("8418"),l=n("b622"),s=n("1dde"),d=s("slice"),b=l("species"),p=[].slice,y=Math.max;r({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var n,r,l,s=u(this),d=a(s.length),v=o(t,d),h=o(void 0===e?d:e,d);if(c(s)&&(n=s.constructor,"function"!=typeof n||n!==Array&&!c(n.prototype)?i(n)&&(n=n[b],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return p.call(s,v,h);for(r=new(void 0===n?Array:n)(y(h-v,0)),l=0;v<h;v++,l++)v in s&&f(r,l,s[v]);return r.length=l,r}})}}]);
//# sourceMappingURL=chunk-217e3a40.69bfccc3.js.map