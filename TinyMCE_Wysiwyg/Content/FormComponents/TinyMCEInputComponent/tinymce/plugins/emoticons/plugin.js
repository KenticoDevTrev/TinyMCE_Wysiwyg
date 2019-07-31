/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.5 (2019-05-09)
 */
!function(d){"use strict";var n,t,e,r,o,u,i=tinymce.util.Tools.resolve("tinymce.PluginManager"),c=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t]},a=function(n){return function(){return n}},l=function(n){return n},f=a(!1),s=a(!0),m=f,g=s,y=function(){return p},p=(r={fold:function(n,t){return n()},is:m,isSome:m,isNone:g,getOr:e=function(n){return n},getOrThunk:t=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:e,orThunk:t,map:y,ap:y,each:function(){},bind:y,flatten:y,exists:m,forall:g,filter:y,equals:n=function(n){return n.isNone()},equals_:n,toArray:function(){return[]},toString:a("none()")},Object.freeze&&Object.freeze(r),r),h=function(e){var n=function(){return e},t=function(){return o},r=function(n){return n(e)},o={fold:function(n,t){return t(e)},is:function(n){return e===n},isSome:g,isNone:m,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:t,orThunk:t,map:function(n){return h(n(e))},ap:function(n){return n.fold(y,function(n){return h(n(e))})},each:function(n){n(e)},bind:r,flatten:n,exists:r,forall:r,filter:function(n){return n(e)?o:p},equals:function(n){return n.is(e)},equals_:function(n,t){return n.fold(m,function(n){return t(e,n)})},toArray:function(){return[e]},toString:function(){return"some("+e+")"}};return o},v={some:h,none:y,from:function(n){return null===n||n===undefined?p:h(n)}},O=(o="function",function(n){return function(n){if(null===n)return"null";var t=typeof n;return"object"===t&&Array.prototype.isPrototypeOf(n)?"array":"object"===t&&String.prototype.isPrototypeOf(n)?"string":t}(n)===o}),b=function(n,t){for(var e=0,r=n.length;e<r;e++)if(t(n[e],e,n))return v.some(e);return v.none()},w=(Array.prototype.slice,O(Array.from)&&Array.from,function(n,t){return-1!==n.indexOf(t)}),k=function(n,t){return w(n.title.toLowerCase(),t)||(e=n.keywords,b(e,function(n){return w(n.toLowerCase(),t)}).isSome());var e},A=function(n,t,e){for(var r=[],o=t.toLowerCase(),i=e.fold(function(){return f},function(t){return function(n){return t<=n}}),u=0;u<n.length&&(0!==t.length&&!k(n[u],o)||(r.push({value:n[u]["char"],text:n[u].title,icon:n[u]["char"]}),!i(r.length)));u++);return r},j=function(n){var t=n,e=function(){return t};return{get:e,set:function(n){t=n},clone:function(){return j(e())}}},C="undefined"!=typeof d.window?d.window:Function("return this;")(),T=Object.keys,S=Object.hasOwnProperty,_=function(n,t){for(var e=T(n),r=0,o=e.length;r<o;r++){var i=e[r];t(n[i],i,n)}},x=function(r,o){var i={};return _(r,function(n,t){var e=o(n,t,r);i[e.k]=e.v}),i},D=function(e){return{is:function(n){return e===n},isValue:s,isError:f,getOr:a(e),getOrThunk:a(e),getOrDie:a(e),or:function(n){return D(e)},orThunk:function(n){return D(e)},fold:function(n,t){return t(e)},map:function(n){return D(n(e))},mapError:function(n){return D(e)},each:function(n){n(e)},bind:function(n){return n(e)},exists:function(n){return n(e)},forall:function(n){return n(e)},toOption:function(){return v.some(e)}}},L=function(e){return{is:f,isValue:f,isError:s,getOr:l,getOrThunk:function(n){return n()},getOrDie:function(){return n=String(e),function(){throw new Error(n)}();var n},or:function(n){return n},orThunk:function(n){return n()},fold:function(n,t){return n(e)},map:function(n){return L(e)},mapError:function(n){return L(n(e))},each:c,bind:function(n){return L(e)},exists:f,forall:s,toOption:v.none}},E={value:D,error:L,fromOption:function(n,t){return n.fold(function(){return L(t)},D)}},P=Object.prototype.hasOwnProperty,F=(u=function(n,t){return t},function(){for(var n=new Array(arguments.length),t=0;t<n.length;t++)n[t]=arguments[t];if(0===n.length)throw new Error("Can't merge zero objects");for(var e={},r=0;r<n.length;r++){var o=n[r];for(var i in o)P.call(o,i)&&(e[i]=u(e[i],o[i]))}return e}),N=tinymce.util.Tools.resolve("tinymce.dom.ScriptLoader"),q=tinymce.util.Tools.resolve("tinymce.util.Promise"),z=tinymce.util.Tools.resolve("tinymce.util.Delay"),I=function(n,t){return n.getParam("emoticons_database_url",t+"/js/emojis"+n.suffix+".js")},U=function(n){return n.getParam("emoticons_append",{},"object")},M="All",R={symbols:"Symbols",people:"People",animals_and_nature:"Animals and Nature",food_and_drink:"Food and Drink",activity:"Activity",travel_and_places:"Travel and Places",objects:"Objects",flags:"Flags",user:"User Defined"},V="emoticons_plugin_database",B=function(n,t){return e=n,r=t,S.call(e,r)?n[t]:t;var e,r},G=function(n){var r,t=U(n);return r=function(n){return F({keywords:[],category:"user"},n)},x(t,function(n,t,e){return{k:t,v:r(n,t,e)}})},H=function(r,o){var u=j(v.none()),c=j(v.none());r.on("init",function(){N.ScriptLoader.loadScript(o,function(){(function(n){if(C.tinymce[V]){var t=E.value(C.tinymce[V]);return delete C.tinymce[V],t}return E.error("URL "+n+" did not contain the expected format for emoticons")})(o).fold(function(n){d.console.log(n),u.set(v.some({})),c.set(v.some([]))},function(n){var t,o,i,e=G(r);t=F(n,e),o={},i=[],_(t,function(n,t){var e={title:t,keywords:n.keywords,"char":n["char"],category:B(R,n.category)},r=o[e.category]!==undefined?o[e.category]:[];o[e.category]=r.concat([e]),i.push(e)}),u.set(v.some(o)),c.set(v.some(i))})},function(){})});var n=function(){return c.get().getOr([])},i=function(){return u.get().isSome()&&c.get().isSome()};return{listCategories:function(){return[M].concat(T(u.get().getOr({})))},hasLoaded:i,waitForLoad:function(){return i()?q.resolve(!0):new q(function(n,t){var e=3,r=z.setInterval(function(){i()?(z.clearInterval(r),n(!0)):--e<0&&(d.console.log("Could not load emojis from url: "+o),z.clearInterval(r),t(!1))},500)})},listAll:n,listCategory:function(t){return t===M?n():u.get().bind(function(n){return v.from(n[t])}).getOr([])}}},J="pattern",K=function(o,c){var e,r,i,n={pattern:"",results:A(c.listAll(),"",v.some(300))},u=(e=function(n){var t,e,r,o,i,u=a.get();e=u,r=(t=n).getData(),o=c.listCategory(e),i=A(o,r[J],e===M?v.some(300):v.none()),t.setData({results:i})},r=200,i=null,{cancel:function(){null!==i&&(d.clearTimeout(i),i=null)},throttle:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];null!==i&&d.clearTimeout(i),i=d.setTimeout(function(){e.apply(null,n),i=null},r)}}),a=j(M),t={label:"Search",type:"input",name:J},l={type:"collection",name:"results"},f=function(){return{title:"Emoticons",size:"normal",body:{type:"tabpanel",tabs:function(n,t){for(var e=n.length,r=new Array(e),o=0;o<e;o++){var i=n[o];r[o]=t(i,o,n)}return r}(c.listCategories(),function(n){return{title:n,items:[t,l]}})},initialData:n,onTabChange:function(n,t){a.set(t),u.throttle(n)},onChange:u.throttle,onAction:function(n,t){var e,r;"results"===t.name&&(e=o,r=t.value,e.insertContent(r),n.close())},buttons:[{type:"cancel",text:"Close",primary:!0}]}},s=o.windowManager.open(f());s.focus(J),c.hasLoaded()||(s.block("Loading emoticons..."),c.waitForLoad().then(function(){s.redial(f()),u.throttle(s),s.focus(J),s.unblock()})["catch"](function(n){s.redial({title:"Emoticons",body:{type:"panel",items:[{type:"alertbanner",level:"error",icon:"warning",text:"<p>Could not load emoticons</p>"}]},buttons:[{type:"cancel",text:"Close",primary:!0}],initialData:{pattern:"",results:[]}}),s.focus(J),s.unblock()}))},Q=function(n,t){var e=function(){return K(n,t)};n.ui.registry.addButton("emoticons",{tooltip:"Emoticons",icon:"emoji",onAction:e}),n.ui.registry.addMenuItem("emoticons",{text:"Emoticons...",icon:"emoji",onAction:e})};i.add("emoticons",function(n,t){var r,o,e=I(n,t),i=H(n,e);Q(n,i),o=i,(r=n).ui.registry.addAutocompleter("emoticons",{ch:":",columns:"auto",minChars:2,fetch:function(t,e){return o.waitForLoad().then(function(){var n=o.listAll();return A(n,t,v.some(e))})},onAction:function(n,t,e){r.selection.setRng(t),r.insertContent(e),n.hide()}})}),function W(){}}(window);