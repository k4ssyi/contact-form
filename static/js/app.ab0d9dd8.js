(function(t){function e(e){for(var a,c,s=e[0],l=e[1],i=e[2],d=0,f=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/static/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var i=0;i<s.length;i++)e(s[i]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Header"),n("h2",{staticClass:"subtitle-1 text-center"},[t._v(" ご質問やお問い合わせ、お仕事のご依頼などは下記フォームまたはTwitterのDMにてご連絡下さい。 ")]),n("h3",{staticClass:"subtitle-1 text-center mb-10"},[t._v(" ※ このページは「かっしー(@k4ssyi)」へのお問い合わせページです。 ")]),n("v-content",[n("ContactForms")],1)],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{staticClass:"mb-10",attrs:{dark:"",color:"indigo"}},[n("v-toolbar-title",{staticClass:"font-weight-bold"},[t._v("お問い合わせ")])],1)],1)},s=[],l=n("2877"),i=n("6544"),u=n.n(i),d=n("40dc"),f=n("2a7f"),p={},v=Object(l["a"])(p,c,s,!1,null,null,null),m=v.exports;u()(v,{VAppBar:d["a"],VToolbarTitle:f["a"]});var b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[n("v-card-text",[n("v-text-field",{attrs:{rules:t.nameRules,label:"名前",outlined:"",required:""},model:{value:t.contactForms.name,callback:function(e){t.$set(t.contactForms,"name",e)},expression:"contactForms.name"}}),n("v-text-field",{attrs:{rules:t.emailRules,label:"Eメール",outlined:"",required:""},model:{value:t.contactForms.email,callback:function(e){t.$set(t.contactForms,"email",e)},expression:"contactForms.email"}}),n("v-textarea",{attrs:{rules:t.contentRules,label:"お問い合わせ内容",outlined:"",required:""},model:{value:t.contactForms.content,callback:function(e){t.$set(t.contactForms,"content",e)},expression:"contactForms.content"}}),1===t.status?n("div",{staticClass:"text-center"},[n("v-chip",{attrs:{dark:"",color:"green"}},[t._v("送信成功！")])],1):t._e(),2===t.status?n("div",{staticClass:"text-center"},[n("v-chip",{attrs:{dark:"",color:"red"}},[t._v("送信が失敗しました…")])],1):t._e(),n("v-card-actions",{staticClass:"mb-5 justify-center"},[n("v-btn",{attrs:{disabled:!t.valid,loading:t.loading,color:"primary",large:""},on:{click:t.submit}},[t._v("メールを送信")])],1)],1)],1)],1)],1)},h=[],x=n("bc3a"),g=n.n(x),y=g.a.create({baseURL:"/api/",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"}}),_=y,C={data:function(){return{valid:!0,status:0,loading:!1,contactForms:{name:"",email:"",content:""},nameRules:[function(t){return!!t||"名前の入力は必須です。"}],emailRules:[function(t){return!!t||"Eメールの入力は必須です。"},function(t){return/.+@.+\..+/.test(t)||"有効なEメールを入力してください。"}],contentRules:[function(t){return!!t||"内容の入力は必須です。"}]}},methods:{submit:function(){var t=this;this.loading=!0,_({method:"post",url:"/mail/",data:this.contactForms}).then((function(){t.status=1,t.loading=!1,setTimeout((function(){return t.status=0}),3e3)})).catch((function(e){t.status=2,t.loading=!1,console.log(e.response),setTimeout((function(){return t.status=0}),3e3)}))}}},F=C,j=n("8336"),w=n("b0af"),O=n("99d9"),V=n("cc20"),k=n("a523"),T=n("4bd4"),R=n("8654"),P=n("a844"),$=Object(l["a"])(F,b,h,!1,null,"0f2e022f",null),E=$.exports;u()($,{VBtn:j["a"],VCard:w["a"],VCardActions:O["a"],VCardText:O["b"],VChip:V["a"],VContainer:k["a"],VForm:T["a"],VTextField:R["a"],VTextarea:P["a"]});var M={components:{Header:m,ContactForms:E}},q=M,S=n("7496"),A=n("a75b"),H=Object(l["a"])(q,r,o,!1,null,null,null),B=H.exports;u()(H,{VApp:S["a"],VContent:A["a"]});var J=n("f309");a["a"].use(J["a"]);var L=new J["a"]({});a["a"].config.productionTip=!0,new a["a"]({vuetify:L,render:function(t){return t(B)}}).$mount("#app")}});
//# sourceMappingURL=app.ab0d9dd8.js.map