(function(t){function e(e){for(var a,s,c=e[0],i=e[1],u=e[2],p=0,f=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vass_project/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3203:function(t,e,n){"use strict";n("da63")},"4ed3":function(t,e,n){"use strict";n("5c61")},"51f2":function(t,e,n){t.exports=n.p+"img/search.528e3313.svg"},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("HeaderPage"),e("SectionPage"),e("GridImages")],1)},r=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[t._m(0),e("div",{staticClass:"buttons"},[e("input",{attrs:{type:"button",value:"All"},on:{click:t.goToHome}}),e("input",{attrs:{type:"button",value:"Branding"},on:{click:t.goToHome}}),e("input",{attrs:{type:"button",value:"Web"},on:{click:t.goToHome}}),e("input",{attrs:{type:"button",value:"Photography"},on:{click:t.goToHome}}),e("input",{attrs:{type:"button",value:"App"},on:{click:t.goToHome}})]),t._m(1)])},c=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo"},[e("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"search"},[e("img",{attrs:{src:n("51f2")}})])}],i={name:"headerPage",methods:{goToHome(){window.location="#"}}},u=i,l=(n("e2ce"),n("2877")),p=Object(l["a"])(u,s,c,!1,null,"9409d926",null),f=p.exports,g=function(){var t=this;t._self._c;return t._m(0)},b=[function(){var t=this,e=t._self._c;return e("section",[e("span",[t._v(" EXPLORE BEYOND HORIZON ")])])}],d={name:"sectionPage"},m=d,v=(n("fbbd"),Object(l["a"])(m,g,b,!1,null,"5d8077bb",null)),h=v.exports,_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-images"},[e("div",{staticClass:"tabs"},[e("button",{staticClass:"tab",on:{click:function(e){return t.setTabSelect(1)}}},[t._v("All")]),e("button",{staticClass:"tab",on:{click:function(e){return t.setTabSelect(2)}}},[t._v("Pairs")]),e("button",{staticClass:"tab",on:{click:function(e){return t.setTabSelect(3)}}},[t._v("Odd")])]),e("div",{staticClass:"grid-gallery"},[t._l(t.getImagesForShow,(function(t){return[e("ImagesComponent",{key:t.id,attrs:{srcImage:t.url}})]}))],2)])},y=[],O=n("2f62"),S=function(){var t=this,e=t._self._c;return e("img",{staticClass:"grid-gallery__image responsive",attrs:{src:t.srcImage}})},j=[],w={props:{srcImage:String}},I=w,T=(n("b74f"),Object(l["a"])(I,S,j,!1,null,"6096403e",null)),P=T.exports,C={name:"GridImages",components:{ImagesComponent:P},methods:{...Object(O["b"])(["setTabSelect"])},computed:{...Object(O["c"])(["getImagesForShow"])}},x=C,k=(n("3203"),Object(l["a"])(x,_,y,!1,null,"6b175968",null)),H=k.exports,G={name:"App",components:{HeaderPage:f,SectionPage:h,GridImages:H},methods:{...Object(O["b"])(["getImages"])},async created(){await this.getImages()}},A=G,M=(n("4ed3"),Object(l["a"])(A,o,r,!1,null,null,null)),E=M.exports,F=n("bc3a"),B=n.n(F),J=()=>B.a.create({headers:{"Content-Type":"application/json"}});class N{static GetImage(){return J().get("https://jsonplaceholder.typicode.com/albums/1/photos")}}var R=N;a["a"].use(O["a"]);var D=new O["a"].Store({state:{images:[],tabSelect:1},mutations:{getImages(t,e){t.images=e},setTabSelect(t,e){t.tabSelect=e}},actions:{async getImages({commit:t}){const{data:e}=await R.GetImage();t("getImages",e)},setTabSelect({commit:t},e){t("setTabSelect",e)}},getters:{getImagesForShow:t=>{let e=t.images;return 2===t.tabSelect?e=t.images.filter(t=>t.id%2===0):3===t.tabSelect&&(e=t.images.filter(t=>t.id%2!==0)),e}},modules:{}});a["a"].config.productionTip=!1,new a["a"]({store:D,render:t=>t(E)}).$mount("#app")},"5c61":function(t,e,n){},9949:function(t,e,n){},b74f:function(t,e,n){"use strict";n("9949")},b88e:function(t,e,n){},cb30:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},da63:function(t,e,n){},e2ce:function(t,e,n){"use strict";n("b88e")},fbbd:function(t,e,n){"use strict";n("cb30")}});
//# sourceMappingURL=app.0988a8d6.js.map