(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8425fa22"],{"057f":function(t,n,e){var r=e("fc6a"),o=e("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(n){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?a(t):o(r(t))}},"1dde":function(t,n,e){var r=e("d039"),o=e("b622"),i=e("2d00"),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[],e=n.constructor={};return e[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},4192:function(t,n,e){"use strict";e("94d8")},"4df4":function(t,n,e){"use strict";var r=e("0366"),o=e("7b0b"),i=e("9bdd"),c=e("e95a"),a=e("50c4"),u=e("8418"),f=e("35a1");t.exports=function(t){var n,e,s,l,d,b,v=o(t),p="function"==typeof this?this:Array,m=arguments.length,y=m>1?arguments[1]:void 0,h=void 0!==y,g=f(v),O=0;if(h&&(y=r(y,m>2?arguments[2]:void 0,2)),void 0==g||p==Array&&c(g))for(n=a(v.length),e=new p(n);n>O;O++)b=h?y(v[O],O):v[O],u(e,O,b);else for(l=g.call(v),d=l.next,e=new p;!(s=d.call(l)).done;O++)b=h?i(l,y,[s.value,O],!0):s.value,u(e,O,b);return e.length=O,e}},"65f0":function(t,n,e){var r=e("861d"),o=e("e8b5"),i=e("b622"),c=i("species");t.exports=function(t,n){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)?r(e)&&(e=e[c],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},"732e":function(t,n,e){},"746f":function(t,n,e){var r=e("428f"),o=e("5135"),i=e("e538"),c=e("9bf2").f;t.exports=function(t){var n=r.Symbol||(r.Symbol={});o(n,t)||c(n,t,{value:i.f(t)})}},8418:function(t,n,e){"use strict";var r=e("c04e"),o=e("9bf2"),i=e("5c6c");t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},8523:function(t,n,e){"use strict";e("732e")},"94d8":function(t,n,e){},"9bdd":function(t,n,e){var r=e("825a"),o=e("2a62");t.exports=function(t,n,e,i){try{return i?n(r(e)[0],e[1]):n(e)}catch(c){throw o(t),c}}},a4d3:function(t,n,e){"use strict";var r=e("23e7"),o=e("da84"),i=e("d066"),c=e("c430"),a=e("83ab"),u=e("4930"),f=e("fdbf"),s=e("d039"),l=e("5135"),d=e("e8b5"),b=e("861d"),v=e("825a"),p=e("7b0b"),m=e("fc6a"),y=e("c04e"),h=e("5c6c"),g=e("7c73"),O=e("df75"),j=e("241c"),w=e("057f"),S=e("7418"),A=e("06cf"),x=e("9bf2"),k=e("d1e7"),I=e("9112"),L=e("6eeb"),P=e("5692"),C=e("f772"),$=e("d012"),E=e("90e3"),T=e("b622"),z=e("e538"),N=e("746f"),F=e("d44e"),J=e("69f3"),U=e("b727").forEach,B=C("hidden"),M="Symbol",D="prototype",Q=T("toPrimitive"),R=J.set,W=J.getterFor(M),q=Object[D],G=o.Symbol,H=i("JSON","stringify"),K=A.f,V=x.f,X=w.f,Y=k.f,Z=P("symbols"),_=P("op-symbols"),tt=P("string-to-symbol-registry"),nt=P("symbol-to-string-registry"),et=P("wks"),rt=o.QObject,ot=!rt||!rt[D]||!rt[D].findChild,it=a&&s((function(){return 7!=g(V({},"a",{get:function(){return V(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=K(q,n);r&&delete q[n],V(t,n,e),r&&t!==q&&V(q,n,r)}:V,ct=function(t,n){var e=Z[t]=g(G[D]);return R(e,{type:M,tag:t,description:n}),a||(e.description=n),e},at=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},ut=function(t,n,e){t===q&&ut(_,n,e),v(t);var r=y(n,!0);return v(e),l(Z,r)?(e.enumerable?(l(t,B)&&t[B][r]&&(t[B][r]=!1),e=g(e,{enumerable:h(0,!1)})):(l(t,B)||V(t,B,h(1,{})),t[B][r]=!0),it(t,r,e)):V(t,r,e)},ft=function(t,n){v(t);var e=m(n),r=O(e).concat(vt(e));return U(r,(function(n){a&&!lt.call(e,n)||ut(t,n,e[n])})),t},st=function(t,n){return void 0===n?g(t):ft(g(t),n)},lt=function(t){var n=y(t,!0),e=Y.call(this,n);return!(this===q&&l(Z,n)&&!l(_,n))&&(!(e||!l(this,n)||!l(Z,n)||l(this,B)&&this[B][n])||e)},dt=function(t,n){var e=m(t),r=y(n,!0);if(e!==q||!l(Z,r)||l(_,r)){var o=K(e,r);return!o||!l(Z,r)||l(e,B)&&e[B][r]||(o.enumerable=!0),o}},bt=function(t){var n=X(m(t)),e=[];return U(n,(function(t){l(Z,t)||l($,t)||e.push(t)})),e},vt=function(t){var n=t===q,e=X(n?_:m(t)),r=[];return U(e,(function(t){!l(Z,t)||n&&!l(q,t)||r.push(Z[t])})),r};if(u||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=E(t),e=function(t){this===q&&e.call(_,t),l(this,B)&&l(this[B],n)&&(this[B][n]=!1),it(this,n,h(1,t))};return a&&ot&&it(q,n,{configurable:!0,set:e}),ct(n,t)},L(G[D],"toString",(function(){return W(this).tag})),L(G,"withoutSetter",(function(t){return ct(E(t),t)})),k.f=lt,x.f=ut,A.f=dt,j.f=w.f=bt,S.f=vt,z.f=function(t){return ct(T(t),t)},a&&(V(G[D],"description",{configurable:!0,get:function(){return W(this).description}}),c||L(q,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:G}),U(O(et),(function(t){N(t)})),r({target:M,stat:!0,forced:!u},{for:function(t){var n=String(t);if(l(tt,n))return tt[n];var e=G(n);return tt[n]=e,nt[e]=n,e},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(nt,t))return nt[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!a},{create:st,defineProperty:ut,defineProperties:ft,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:bt,getOwnPropertySymbols:vt}),r({target:"Object",stat:!0,forced:s((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(p(t))}}),H){var pt=!u||s((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));r({target:"JSON",stat:!0,forced:pt},{stringify:function(t,n,e){var r,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(r=n,(b(n)||void 0!==t)&&!at(t))return d(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!at(n))return n}),o[1]=n,H.apply(null,o)}})}G[D][Q]||I(G[D],Q,G[D].valueOf),F(G,M),$[B]=!0},a630:function(t,n,e){var r=e("23e7"),o=e("4df4"),i=e("1c7e"),c=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:c},{from:o})},ae7f:function(t,n,e){"use strict";e.r(n);var r=e("7a23"),o=Object(r["g"])("h2",null,"Food page",-1),i=Object(r["g"])("h3",null,"Please choose your menu:",-1);function c(t,n,e,c,a,u){var f=Object(r["x"])("calculator");return Object(r["p"])(),Object(r["d"])(r["a"],null,[o,i,Object(r["g"])(f,{itemList:a.itemList,onUpdateAmount:u.updateAmount},null,8,["itemList","onUpdateAmount"])],64)}e("c740");var a={class:"main-wrap"},u={class:"food-item"},f={class:"label"},s={class:"label"},l={class:"button-wrap"},d={class:"amount-item"},b={class:"main-wrap"},v={class:"total"},p=Object(r["g"])("div",null,"Total:",-1),m={style:{"font-size":"1.1rem"}};function y(t,n,e,o,i,c){return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("div",a,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(e.itemList,(function(n){return Object(r["p"])(),Object(r["d"])("div",{class:"food-content",key:n},[Object(r["g"])("div",u,[Object(r["g"])("div",f,Object(r["z"])(n.label),1),Object(r["g"])("div",s,"$"+Object(r["z"])(n.price),1)]),Object(r["g"])("div",l,[n.amount>0?(Object(r["p"])(),Object(r["d"])("div",{key:0,class:"button-containted",onClick:function(e){return t.$emit("updateAmount","minus",n.label)}}," - ",8,["onClick"])):Object(r["e"])("",!0),Object(r["g"])("div",d,Object(r["z"])(n.amount),1),Object(r["g"])("div",{class:"button-containted",onClick:function(e){return t.$emit("updateAmount","add",n.label)}},"+",8,["onClick"])])])})),128))]),Object(r["g"])("div",b,[Object(r["g"])("div",v,[p,Object(r["g"])("div",m,[Object(r["g"])("div",null,Object(r["z"])(c.calculateTotal)+"$",1)])])])],64)}var h=e("b85c"),g={name:"calculator",data:function(){return{}},computed:{calculateTotal:function(){var t,n=0,e=Object(h["a"])(this.itemList);try{for(e.s();!(t=e.n()).done;){var r=t.value;console.log(r.amount*r.price),n+=r.amount*r.price}}catch(o){e.e(o)}finally{e.f()}return n}},props:{itemList:Object},emits:["updateAmount","getIndex"]};e("4192");g.render=y;var O=g,j={data:function(){return{itemList:[{label:"Beef Steak",price:30,amount:0},{label:"Roasted Carrots",price:10,amount:0},{label:"Phở",price:90,amount:0}]}},methods:{updateAmount:function(t,n){if("minus"===t){var e=this.itemList.findIndex((function(t){return t.label==n}));this.itemList[e].amount--}else{var r=this.itemList.findIndex((function(t){return t.label==n}));this.itemList[r].amount++}}},components:{calculator:O}};e("8523");j.render=c;n["default"]=j},b0c0:function(t,n,e){var r=e("83ab"),o=e("9bf2").f,i=Function.prototype,c=i.toString,a=/^\s*function ([^ (]*)/,u="name";r&&!(u in i)&&o(i,u,{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},b727:function(t,n,e){var r=e("0366"),o=e("44ad"),i=e("7b0b"),c=e("50c4"),a=e("65f0"),u=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,s=4==t,l=6==t,d=7==t,b=5==t||l;return function(v,p,m,y){for(var h,g,O=i(v),j=o(O),w=r(p,m,3),S=c(j.length),A=0,x=y||a,k=n?x(v,S):e||d?x(v,0):void 0;S>A;A++)if((b||A in j)&&(h=j[A],g=w(h,A,O),t))if(n)k[A]=g;else if(g)switch(t){case 3:return!0;case 5:return h;case 6:return A;case 2:u.call(k,h)}else switch(t){case 4:return!1;case 7:u.call(k,h)}return l?-1:f||s?s:k}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},b85c:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),e("fb6a"),e("b0c0"),e("a630");function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function o(t,n){if(t){if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}function i(t,n){var e;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=o(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,u=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return a=t.done,t},e:function(t){u=!0,c=t},f:function(){try{a||null==e["return"]||e["return"]()}finally{if(u)throw c}}}}},c740:function(t,n,e){"use strict";var r=e("23e7"),o=e("b727").findIndex,i=e("44d2"),c="findIndex",a=!0;c in[]&&Array(1)[c]((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(c)},d28b:function(t,n,e){var r=e("746f");r("iterator")},e01a:function(t,n,e){"use strict";var r=e("23e7"),o=e("83ab"),i=e("da84"),c=e("5135"),a=e("861d"),u=e("9bf2").f,f=e("e893"),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof d?new s(t):void 0===t?s():s(t);return""===t&&(l[n]=!0),n};f(d,s);var b=d.prototype=s.prototype;b.constructor=d;var v=b.toString,p="Symbol(test)"==String(s("test")),m=/^Symbol\((.*)\)[^)]+$/;u(b,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,n=v.call(t);if(c(l,t))return"";var e=p?n.slice(7,-1):n.replace(m,"$1");return""===e?void 0:e}}),r({global:!0,forced:!0},{Symbol:d})}},e538:function(t,n,e){var r=e("b622");n.f=r},e8b5:function(t,n,e){var r=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fb6a:function(t,n,e){"use strict";var r=e("23e7"),o=e("861d"),i=e("e8b5"),c=e("23cb"),a=e("50c4"),u=e("fc6a"),f=e("8418"),s=e("b622"),l=e("1dde"),d=l("slice"),b=s("species"),v=[].slice,p=Math.max;r({target:"Array",proto:!0,forced:!d},{slice:function(t,n){var e,r,s,l=u(this),d=a(l.length),m=c(t,d),y=c(void 0===n?d:n,d);if(i(l)&&(e=l.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)?o(e)&&(e=e[b],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return v.call(l,m,y);for(r=new(void 0===e?Array:e)(p(y-m,0)),s=0;m<y;m++,s++)m in l&&f(r,s,l[m]);return r.length=s,r}})}}]);
//# sourceMappingURL=chunk-8425fa22.014d1efc.js.map