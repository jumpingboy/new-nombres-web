!function(e){function n(n){for(var r,a,u=n[0],c=n[1],s=n[2],f=0,d=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(n);d.length;)d.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,u=1;u<t.length;u++){var c=t[u];0!==i[c]&&(r=!1)}r&&(o.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},i={0:0},o=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var l=c;o.push([333,1]),t()}({333:function(e,n,t){"use strict";t.r(n);t(334),t(340),t(341),t(342),t(344),t(237),t(350),t(352),t(353),t(355),t(356),t(357),t(360),t(362),t(363),t(365),t(247),t(377),t(378),t(379),t(380),t(381),t(383);var r=t(216),i=t(311),o=t.n(i);function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,n,t,r,i,o,a){try{var u=e[o](a),c=u.value}catch(e){return void t(e)}u.done?n(c):Promise.resolve(c).then(r,i)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){s(o,r,i,a,u,"next",e)}function u(e){s(o,r,i,a,u,"throw",e)}a(void 0)}))}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f(e){return d.apply(this,arguments)}function d(){return(d=l(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){r.b(n).then((function(n){e(n)})).catch((function(e){t(e)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,i,a;return n=e,(t=[{key:"init",value:(a=l(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("./public/models/"+n+"/model.json");case 2:return this.model=e.sent,this.maxLen=10,"nombres-b"==n.substring(0,9)||"nombres-2"==n.substring(0,9)||"nombres-o"==n.substring(0,9)?this.charIndices={"\n":0,"'":1,A:2,B:3,C:4,D:5,E:6,F:7,G:8,H:9,I:10,J:11,K:12,L:13,M:14,N:15,O:16,P:17,Q:18,R:19,S:20,T:21,U:22,V:23,W:24,X:25,Y:26,Z:27,a:28,b:29,c:30,d:31,e:32,f:33,g:34,h:35,i:36,j:37,k:38,l:39,m:40,n:41,o:42,p:43,q:44,r:45,s:46,t:47,u:48,v:49,w:50,x:51,y:52,z:53,"ç":54,"ñ":55}:"english"==n.substring(0,7)?this.charIndices={"\n":0,A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:10,K:11,L:12,M:13,N:14,O:15,P:16,Q:17,R:18,S:19,T:20,U:21,V:22,W:23,X:24,Y:25,Z:26,a:27,b:28,c:29,d:30,e:31,f:32,g:33,h:34,i:35,j:36,k:37,l:38,m:39,n:40,o:41,p:42,q:43,r:44,s:45,t:46,u:47,v:48,w:49,x:50,y:51,z:52}:"nombres-c"==n.substring(0,9)?this.charIndices={"\n":0,A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:10,K:11,L:12,M:13,N:14,R:15,S:16,T:17,U:18,V:19,W:20,X:21,Y:22,Z:23,a:24,b:25,c:26,d:27,e:28,f:29,g:30,h:31,i:32,j:33,k:34,l:35,m:36,n:37,o:38,p:39,q:40,r:41,s:42,t:43,u:44,v:45,w:46,x:47,y:48,z:49,"é":50}:"nombres-pill-c"==n.substring(0,14)?this.charIndices={"\n":0,"'":1,A:2,B:3,C:4,D:5,E:6,F:7,G:8,H:9,I:10,J:11,K:12,L:13,M:14,N:15,O:16,P:17,Q:18,R:19,S:20,T:21,U:22,V:23,W:24,X:25,Y:26,Z:27,a:28,b:29,c:30,d:31,e:32,f:33,g:34,h:35,i:36,j:37,k:38,l:39,m:40,n:41,o:42,p:43,q:44,r:45,s:46,t:47,u:48,v:49,w:50,x:51,y:52,z:53,"é":54,"ñ":55}:this.charIndices={"\n":0,"'":1,A:2,B:3,C:4,D:5,E:6,F:7,G:8,H:9,I:10,J:11,K:12,L:13,M:14,N:15,O:16,P:17,Q:18,R:19,S:20,T:21,U:22,V:23,W:24,X:25,Y:26,Z:27,a:28,b:29,c:30,d:31,e:32,f:33,g:34,h:35,i:36,j:37,k:38,l:39,m:40,n:41,o:42,p:43,q:44,r:45,s:46,t:47,u:48,v:49,w:50,x:51,y:52,z:53,"ñ":54},this.vocabularySize=Object.keys(this.charIndices).length,this.indexChars=this.swap(this.charIndices),e.abrupt("return",this);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{key:"swap",value:function(e){var n={};for(var t in e)n[e[t]]=t;return n}},{key:"argMax",value:function(e){return Array.from(e).map((function(e,n){return[e,n]})).reduce((function(e,n){return n[0]>e[0]?n:e}))[1]}},{key:"sample",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=e.map((function(e){return Math.exp(Math.log(e)/n)})),r=o.a.Multinomial(1,t);return this.argMax(r.draw())}},{key:"generateSeed",value:function(){for(var e="",n=0;n<this.maxLen;++n){var t=Math.floor(Math.random()*(this.vocabularySize-.001));e+=this.indexChars[t]}return console.log("seed",e),e}},{key:"textToTensor",value:function(e){for(var n=e.toLowerCase(),t=r.a([1,this.maxLen,this.vocabularySize],"float32"),i=0;i<n.length;++i){var o=n[i];t.set(1,0,i,this.charIndices[o])}return t.toTensor()}},{key:"trimGeneratedText",value:function(e){var n=e.indexOf(e.match(/[A-Z]/g)[0]),t=e.lastIndexOf("\n");return e.substr(n,t-n)}},{key:"predict",value:function(e,n){for(var t=performance.now(),r=e,i="",o=0;o<100;++o){var a=this.textToTensor(r),u=this.model.predict(a).dataSync(),c=this.sample(u,n),s=this.indexChars[c];r=r.slice(1)+s,i+=s}return{elapsed:performance.now()-t,generated:i=this.trimGeneratedText(i)}}}])&&c(n.prototype,t),i&&c(n,i),e}(),h={Latinx:"nombres-pill-cfx20","Modern Latinx":"nombres-cf-60",English:"english-25","Original Latinx":"nombres-og-alpha"};function m(){return(m=l(regeneratorRuntime.mark((function e(){var n,t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=regeneratorRuntime.mark((function e(){var n,i,o,u,c,s,f,d,h,m,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(r[t],2),i=n[0],o=n[1],e.next=3,(new p).init(o);case 3:u=e.sent,c='<div class="column" id="col-'+o+'"></div>',document.getElementById("container").insertAdjacentHTML("beforeend",c),s=document.getElementById("col-"+o),f='<button id="gen-btn-'+o+'" style="display:inline-block">'+i+"</button>",s.insertAdjacentHTML("beforeend",f),d=document.getElementById("gen-btn-"+o),h='<div class="slidecontainer"><span>Drunkenness</span><br/><input type="range" min="2" max="20" value="5" class="slider" id="drunk-slider-'+o+'"></div>',s.insertAdjacentHTML("beforeend",h),m=document.getElementById("drunk-slider-"+o),s.insertAdjacentHTML("beforeend",'<p id="out-'+o+'"></p>'),v=document.getElementById("out-"+o),d.addEventListener("click",l(regeneratorRuntime.mark((function e(){var n,t,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.innerHTML="Generating names...",n=m.value/10,t=u.generateSeed(),r=u.predict(t,n),i=(r.generated+"\n\n(Generated in "+(r.elapsed/1e3).toFixed(2)+"s)").replace(/(\r\n|\n|\r)/g,"<br/>"),v.innerHTML=i;case 6:case"end":return e.stop()}}),e)}))));case 16:case"end":return e.stop()}}),e)})),t=0,r=Object.entries(h);case 2:if(!(t<r.length)){e.next=7;break}return e.delegateYield(n(),"t0",4);case 4:t++,e.next=2;break;case 7:case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){m.apply(this,arguments)}()},388:function(e,n){},389:function(e,n){},397:function(e,n){},400:function(e,n){},401:function(e,n){}});
//# sourceMappingURL=app.bfdd331f.js.map