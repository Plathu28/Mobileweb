import{d as ga,r as ke,c as sn,w as W,u as G,I as ma,a as Z,b as ya,e as wa,f as Lt,g as _a,h as bt,i as Mt,j as Gt,k as Kn,l as Ea,m as ba,n as va,o as Ia,p as Sa,q as Aa,t as ce,s as xi,F as Fi,v as Ta,x as ji,y as Ca,z as ct,A as Ra,B as Oa}from"./index-o1PMvXXr.js";/*! Capacitor: https://capacitorjs.com/ - MIT License */var fe;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(fe||(fe={}));class le extends Error{constructor(t,s,i){super(t),this.message=t,this.code=s,this.data=i}}const Pa=n=>{var t,s;return n!=null&&n.androidBridge?"android":!((s=(t=n==null?void 0:n.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||s===void 0)&&s.bridge?"ios":"web"},Da=n=>{const t=n.CapacitorCustomPlatform||null,s=n.Capacitor||{},i=s.Plugins=s.Plugins||{},o=()=>t!==null?t.name:Pa(n),c=()=>o()!=="web",l=I=>{const S=v.get(I);return!!(S!=null&&S.platforms.has(o())||p(I))},p=I=>{var S;return(S=s.PluginHeaders)===null||S===void 0?void 0:S.find(O=>O.name===I)},_=I=>n.console.error(I),v=new Map,T=(I,S={})=>{const O=v.get(I);if(O)return console.warn('Capacitor plugin "'.concat(I,'" already registered. Cannot register plugins twice.')),O.proxy;const D=o(),N=p(I);let k;const nt=async()=>(!k&&D in S?k=typeof S[D]=="function"?k=await S[D]():k=S[D]:t!==null&&!k&&"web"in S&&(k=typeof S.web=="function"?k=await S.web():k=S.web),k),it=(u,d)=>{var m,g;if(N){const w=N==null?void 0:N.methods.find(f=>d===f.name);if(w)return w.rtype==="promise"?f=>s.nativePromise(I,d.toString(),f):(f,B)=>s.nativeCallback(I,d.toString(),f,B);if(u)return(m=u[d])===null||m===void 0?void 0:m.bind(u)}else{if(u)return(g=u[d])===null||g===void 0?void 0:g.bind(u);throw new le('"'.concat(I,'" plugin is not implemented on ').concat(D),fe.Unimplemented)}},J=u=>{let d;const m=(...g)=>{const w=nt().then(f=>{const B=it(f,u);if(B){const ot=B(...g);return d=ot==null?void 0:ot.remove,ot}else throw new le('"'.concat(I,".").concat(u,'()" is not implemented on ').concat(D),fe.Unimplemented)});return u==="addListener"&&(w.remove=async()=>d()),w};return m.toString=()=>"".concat(u.toString(),"() { [capacitor code] }"),Object.defineProperty(m,"name",{value:u,writable:!1,configurable:!1}),m},ht=J("addListener"),ut=J("removeListener"),st=(u,d)=>{const m=ht({eventName:u},d),g=async()=>{const f=await m;ut({eventName:u,callbackId:f},d)},w=new Promise(f=>m.then(()=>f({remove:g})));return w.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await g()},w},y=new Proxy({},{get(u,d){switch(d){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return N?st:ht;case"removeListener":return ut;default:return J(d)}}});return i[I]=y,v.set(I,{name:I,proxy:y,platforms:new Set([...Object.keys(S),...N?[D]:[]])}),y};return s.convertFileSrc||(s.convertFileSrc=I=>I),s.getPlatform=o,s.handleError=_,s.isNativePlatform=c,s.isPluginAvailable=l,s.registerPlugin=T,s.Exception=le,s.DEBUG=!!s.DEBUG,s.isLoggingEnabled=!!s.isLoggingEnabled,s},ka=n=>n.Capacitor=Da(n),cs=ka(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),mn=cs.registerPlugin;class yn{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,s){let i=!1;this.listeners[t]||(this.listeners[t]=[],i=!0),this.listeners[t].push(s);const c=this.windowListeners[t];c&&!c.registered&&this.addWindowListener(c),i&&this.sendRetainedArgumentsForEvent(t);const l=async()=>this.removeListener(t,s);return Promise.resolve({remove:l})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,s,i){const o=this.listeners[t];if(!o){if(i){let c=this.retainedEventArguments[t];c||(c=[]),c.push(s),this.retainedEventArguments[t]=c}return}o.forEach(c=>c(s))}hasListeners(t){var s;return!!(!((s=this.listeners[t])===null||s===void 0)&&s.length)}registerWindowListener(t,s){this.windowListeners[s]={registered:!1,windowEventName:t,pluginEventName:s,handler:i=>{this.notifyListeners(s,i)}}}unimplemented(t="not implemented"){return new cs.Exception(t,fe.Unimplemented)}unavailable(t="not available"){return new cs.Exception(t,fe.Unavailable)}async removeListener(t,s){const i=this.listeners[t];if(!i)return;const o=i.indexOf(s);this.listeners[t].splice(o,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const s=this.retainedEventArguments[t];s&&(delete this.retainedEventArguments[t],s.forEach(i=>{this.notifyListeners(t,i)}))}}const Ui=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),$i=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Na extends yn{async getCookies(){const t=document.cookie,s={};return t.split(";").forEach(i=>{if(i.length<=0)return;let[o,c]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");o=$i(o).trim(),c=$i(c).trim(),s[o]=c}),s}async setCookie(t){try{const s=Ui(t.key),i=Ui(t.value),o=t.expires?"; expires=".concat(t.expires.replace("expires=","")):"",c=(t.path||"/").replace("path=",""),l=t.url!=null&&t.url.length>0?"domain=".concat(t.url):"";document.cookie="".concat(s,"=").concat(i||"").concat(o,"; path=").concat(c,"; ").concat(l,";")}catch(s){return Promise.reject(s)}}async deleteCookie(t){try{document.cookie="".concat(t.key,"=; Max-Age=0")}catch(s){return Promise.reject(s)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const s of t)document.cookie=s.replace(/^ +/,"").replace(/=.*/,"=;expires=".concat(new Date().toUTCString(),";path=/"))}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}mn("CapacitorCookies",{web:()=>new Na});const La=async n=>new Promise((t,s)=>{const i=new FileReader;i.onload=()=>{const o=i.result;t(o.indexOf(",")>=0?o.split(",")[1]:o)},i.onerror=o=>s(o),i.readAsDataURL(n)}),Ma=(n={})=>{const t=Object.keys(n);return Object.keys(n).map(o=>o.toLocaleLowerCase()).reduce((o,c,l)=>(o[c]=n[t[l]],o),{})},xa=(n,t=!0)=>n?Object.entries(n).reduce((i,o)=>{const[c,l]=o;let p,_;return Array.isArray(l)?(_="",l.forEach(v=>{p=t?encodeURIComponent(v):v,_+="".concat(c,"=").concat(p,"&")}),_.slice(0,-1)):(p=t?encodeURIComponent(l):l,_="".concat(c,"=").concat(p)),"".concat(i,"&").concat(_)},"").substr(1):null,Fa=(n,t={})=>{const s=Object.assign({method:n.method||"GET",headers:n.headers},t),o=Ma(n.headers)["content-type"]||"";if(typeof n.data=="string")s.body=n.data;else if(o.includes("application/x-www-form-urlencoded")){const c=new URLSearchParams;for(const[l,p]of Object.entries(n.data||{}))c.set(l,p);s.body=c.toString()}else if(o.includes("multipart/form-data")||n.data instanceof FormData){const c=new FormData;if(n.data instanceof FormData)n.data.forEach((p,_)=>{c.append(_,p)});else for(const p of Object.keys(n.data))c.append(p,n.data[p]);s.body=c;const l=new Headers(s.headers);l.delete("content-type"),s.headers=l}else(o.includes("application/json")||typeof n.data=="object")&&(s.body=JSON.stringify(n.data));return s};class ja extends yn{async request(t){const s=Fa(t,t.webFetchExtra),i=xa(t.params,t.shouldEncodeUrlParams),o=i?"".concat(t.url,"?").concat(i):t.url,c=await fetch(o,s),l=c.headers.get("content-type")||"";let{responseType:p="text"}=c.ok?t:{};l.includes("application/json")&&(p="json");let _,v;switch(p){case"arraybuffer":case"blob":v=await c.blob(),_=await La(v);break;case"json":_=await c.json();break;case"document":case"text":default:_=await c.text()}const T={};return c.headers.forEach((I,S)=>{T[S]=I}),{data:_,headers:T,status:c.status,url:c.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}mn("CapacitorHttp",{web:()=>new ja});var Vi;(function(n){n.Dark="DARK",n.Light="LIGHT",n.Default="DEFAULT"})(Vi||(Vi={}));var Bi;(function(n){n.StatusBar="StatusBar",n.NavigationBar="NavigationBar"})(Bi||(Bi={}));class Ua extends yn{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}mn("SystemBars",{web:()=>new Ua});var Jt;(function(n){n.Prompt="PROMPT",n.Camera="CAMERA",n.Photos="PHOTOS"})(Jt||(Jt={}));var Ne;(function(n){n.Rear="REAR",n.Front="FRONT"})(Ne||(Ne={}));var ls;(function(n){n.Uri="uri",n.Base64="base64",n.DataUrl="dataUrl"})(ls||(ls={}));class $a extends yn{async getPhoto(t){return new Promise(async(s,i)=>{if(t.webUseInput||t.source===Jt.Photos)this.fileInputExperience(t,s,i);else if(t.source===Jt.Prompt){let o=document.querySelector("pwa-action-sheet");o||(o=document.createElement("pwa-action-sheet"),document.body.appendChild(o)),o.header=t.promptLabelHeader||"Photo",o.cancelable=!1,o.options=[{title:t.promptLabelPhoto||"From Photos"},{title:t.promptLabelPicture||"Take Picture"}],o.addEventListener("onSelection",async c=>{c.detail===0?this.fileInputExperience(t,s,i):this.cameraExperience(t,s,i)})}else this.cameraExperience(t,s,i)})}async pickImages(t){return new Promise(async(s,i)=>{this.multipleFileInputExperience(s,i)})}async cameraExperience(t,s,i){if(customElements.get("pwa-camera-modal")){const o=document.createElement("pwa-camera-modal");o.facingMode=t.direction===Ne.Front?"user":"environment",document.body.appendChild(o);try{await o.componentOnReady(),o.addEventListener("onPhoto",async c=>{const l=c.detail;l===null?i(new le("User cancelled photos app")):l instanceof Error?i(l):s(await this._getCameraPhoto(l,t)),o.dismiss(),document.body.removeChild(o)}),o.present()}catch(c){this.fileInputExperience(t,s,i)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."),this.fileInputExperience(t,s,i)}fileInputExperience(t,s,i){let o=document.querySelector("#_capacitor-camera-input");const c=()=>{var l;(l=o.parentNode)===null||l===void 0||l.removeChild(o)};o||(o=document.createElement("input"),o.id="_capacitor-camera-input",o.type="file",o.hidden=!0,document.body.appendChild(o),o.addEventListener("change",l=>{const p=o.files[0];let _="jpeg";if(p.type==="image/png"?_="png":p.type==="image/gif"&&(_="gif"),t.resultType==="dataUrl"||t.resultType==="base64"){const v=new FileReader;v.addEventListener("load",()=>{if(t.resultType==="dataUrl")s({dataUrl:v.result,format:_});else if(t.resultType==="base64"){const T=v.result.split(",")[1];s({base64String:T,format:_})}c()}),v.readAsDataURL(p)}else s({webPath:URL.createObjectURL(p),format:_}),c()}),o.addEventListener("cancel",l=>{i(new le("User cancelled photos app")),c()})),o.accept="image/*",o.capture=!0,t.source===Jt.Photos||t.source===Jt.Prompt?o.removeAttribute("capture"):t.direction===Ne.Front?o.capture="user":t.direction===Ne.Rear&&(o.capture="environment"),o.click()}multipleFileInputExperience(t,s){let i=document.querySelector("#_capacitor-camera-input-multiple");const o=()=>{var c;(c=i.parentNode)===null||c===void 0||c.removeChild(i)};i||(i=document.createElement("input"),i.id="_capacitor-camera-input-multiple",i.type="file",i.hidden=!0,i.multiple=!0,document.body.appendChild(i),i.addEventListener("change",c=>{const l=[];for(let p=0;p<i.files.length;p++){const _=i.files[p];let v="jpeg";_.type==="image/png"?v="png":_.type==="image/gif"&&(v="gif"),l.push({webPath:URL.createObjectURL(_),format:v})}t({photos:l}),o()}),i.addEventListener("cancel",c=>{s(new le("User cancelled photos app")),o()})),i.accept="image/*",i.click()}_getCameraPhoto(t,s){return new Promise((i,o)=>{const c=new FileReader,l=t.type.split("/")[1];s.resultType==="uri"?i({webPath:URL.createObjectURL(t),format:l,saved:!1}):(c.readAsDataURL(t),c.onloadend=()=>{const p=c.result;s.resultType==="dataUrl"?i({dataUrl:p,format:l,saved:!1}):i({base64String:p.split(",")[1],format:l,saved:!1})},c.onerror=p=>{o(p)})})}async checkPermissions(){if(typeof navigator>"u"||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");try{return{camera:(await window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch(t){throw this.unavailable("Camera permissions are not available in this browser")}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}async pickLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}async getLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}}const Va=mn("Camera",{web:()=>new $a});class Hi{static async fromFile(t){return{base64:await new Promise((i,o)=>{const c=new FileReader;c.onloadend=()=>{const p=String(c.result||"").split(",")[1];if(!p)return o(new Error("Invalid base64 data"));i(p)},c.onerror=()=>o(c.error),c.readAsDataURL(t)}),mimeType:t.type||"image/jpeg"}}static async fromCamera(){const t=await Va.getPhoto({source:Jt.Prompt,resultType:ls.Base64,quality:85});if(!t.base64String)throw new Error("No base64 from camera");return{base64:t.base64String,mimeType:t.format?"image/".concat(t.format):"image/jpeg"}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=()=>{};var Gi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=function(n){const t=[];let s=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?t[s++]=o:o<2048?(t[s++]=o>>6|192,t[s++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),t[s++]=o>>18|240,t[s++]=o>>12&63|128,t[s++]=o>>6&63|128,t[s++]=o&63|128):(t[s++]=o>>12|224,t[s++]=o>>6&63|128,t[s++]=o&63|128)}return t},Ha=function(n){const t=[];let s=0,i=0;for(;s<n.length;){const o=n[s++];if(o<128)t[i++]=String.fromCharCode(o);else if(o>191&&o<224){const c=n[s++];t[i++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=n[s++],l=n[s++],p=n[s++],_=((o&7)<<18|(c&63)<<12|(l&63)<<6|p&63)-65536;t[i++]=String.fromCharCode(55296+(_>>10)),t[i++]=String.fromCharCode(56320+(_&1023))}else{const c=n[s++],l=n[s++];t[i++]=String.fromCharCode((o&15)<<12|(c&63)<<6|l&63)}}return t.join("")},jr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const c=n[o],l=o+1<n.length,p=l?n[o+1]:0,_=o+2<n.length,v=_?n[o+2]:0,T=c>>2,I=(c&3)<<4|p>>4;let S=(p&15)<<2|v>>6,O=v&63;_||(O=64,l||(S=64)),i.push(s[T],s[I],s[S],s[O])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Fr(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ha(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const s=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const c=s[n.charAt(o++)],p=o<n.length?s[n.charAt(o)]:0;++o;const v=o<n.length?s[n.charAt(o)]:64;++o;const I=o<n.length?s[n.charAt(o)]:64;if(++o,c==null||p==null||v==null||I==null)throw new Ga;const S=c<<2|p>>4;if(i.push(S),v!==64){const O=p<<4&240|v>>2;if(i.push(O),I!==64){const D=v<<6&192|I;i.push(D)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ga extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qa=function(n){const t=Fr(n);return jr.encodeByteArray(t,!0)},ln=function(n){return qa(n).replace(/\./g,"")},za=function(n){try{return jr.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=()=>Wa().__FIREBASE_DEFAULTS__,Ka=()=>{if(typeof process>"u"||typeof Gi>"u")return;const n=Gi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ya=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(s){return}const t=n&&za(n[1]);return t&&JSON.parse(t)},Ur=()=>{try{return Ba()||Ja()||Ka()||Ya()}catch(n){console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(n));return}},Xa=n=>{var t,s;return(s=(t=Ur())==null?void 0:t.emulatorHosts)==null?void 0:s[n]},Za=n=>{const t=Xa(n);if(!t)return;const s=t.lastIndexOf(":");if(s<=0||s+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));const i=parseInt(t.substring(s+1),10);return t[0]==="["?[t.substring(1,s-1),i]:[t.substring(0,s),i]},$r=()=>{var n;return(n=Ur())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,s)=>{this.resolve=t,this.reject=s})}wrapCallback(t){return(s,i)=>{s?this.reject(s):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(s):t(s,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch(t){return!1}}async function tc(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const s={alg:"none",type:"JWT"},i=t||"demo-project",o=n.iat||0,c=n.sub||n.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:"https://securetoken.google.com/".concat(i),aud:i,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ln(JSON.stringify(s)),ln(JSON.stringify(l)),""].join(".")}const Le={};function nc(){const n={prod:[],emulator:[]};for(const t of Object.keys(Le))Le[t]?n.emulator.push(t):n.prod.push(t);return n}function sc(n){let t=document.getElementById(n),s=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),s=!0),{created:s,element:t}}let qi=!1;function ic(n,t){if(typeof window>"u"||typeof document>"u"||!Vr(window.location.host)||Le[n]===t||Le[n]||qi)return;Le[n]=t;function s(S){return"__firebase__banner__".concat(S)}const i="__firebase__banner",c=nc().prod.length>0;function l(){const S=document.getElementById(i);S&&S.remove()}function p(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function _(S,O){S.setAttribute("width","24"),S.setAttribute("id",O),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function v(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{qi=!0,l()},S}function T(S,O){S.setAttribute("id",O),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function I(){const S=sc(i),O=s("text"),D=document.getElementById(O)||document.createElement("span"),N=s("learnmore"),k=document.getElementById(N)||document.createElement("a"),nt=s("preprendIcon"),it=document.getElementById(nt)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const J=S.element;p(J),T(k,N);const ht=v();_(it,nt),J.append(it,D,k,ht),document.body.appendChild(J)}c?(D.innerText="Preview backend disconnected.",it.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(it.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',D.innerText="Preview backend running in this workspace."),D.setAttribute("id",O)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}function rc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Br(){try{return typeof indexedDB=="object"}catch(n){return!1}}function Hr(){return new Promise((n,t)=>{try{let s=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),s||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{s=!1},o.onerror=()=>{var c;t(((c=o.error)==null?void 0:c.message)||"")}}catch(s){t(s)}})}function oc(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="FirebaseError";class Tt extends Error{constructor(t,s,i){super(s),this.code=t,this.customData=i,this.name=ac,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wn.prototype.create)}}class wn{constructor(t,s,i){this.service=t,this.serviceName=s,this.errors=i}create(t,...s){const i=s[0]||{},o="".concat(this.service,"/").concat(t),c=this.errors[t],l=c?cc(c,i):"Error",p="".concat(this.serviceName,": ").concat(l," (").concat(o,").");return new Tt(o,p,i)}}function cc(n,t){return n.replace(lc,(s,i)=>{const o=t[i];return o!=null?String(o):"<".concat(i,"?>")})}const lc=/\{\$([^}]+)}/g;function Ue(n,t){if(n===t)return!0;const s=Object.keys(n),i=Object.keys(t);for(const o of s){if(!i.includes(o))return!1;const c=n[o],l=t[o];if(zi(c)&&zi(l)){if(!Ue(c,l))return!1}else if(c!==l)return!1}for(const o of i)if(!s.includes(o))return!1;return!0}function zi(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=1e3,uc=2,fc=4*60*60*1e3,dc=.5;function Wi(n,t=hc,s=uc){const i=t*Math.pow(s,n),o=Math.round(dc*i*(Math.random()-.5)*2);return Math.min(fc,i+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(n){return n&&n._delegate?n._delegate:n}class Et{constructor(t,s,i){this.name=t,this.instanceFactory=s,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t,s){this.name=t,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const s=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(s)){const i=new Qa;if(this.instancesDeferred.set(s,i),this.isInitialized(s)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:s});o&&i.resolve(o)}catch(o){}}return this.instancesDeferred.get(s).promise}getImmediate(t){var o;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(o=t==null?void 0:t.optional)!=null?o:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(i)return null;throw c}else{if(i)return null;throw Error("Service ".concat(this.name," is not available"))}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,!!this.shouldAutoInitialize()){if(mc(t))try{this.getOrInitializeService({instanceIdentifier:qt})}catch(s){}for(const[s,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);try{const c=this.getOrInitializeService({instanceIdentifier:o});i.resolve(c)}catch(c){}}}}clearInstance(t=qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...t.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=qt){return this.instances.has(t)}getOptions(t=qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:s={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));const o=this.getOrInitializeService({instanceIdentifier:i,options:s});for(const[c,l]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);i===p&&l.resolve(o)}return o}onInit(t,s){var l;const i=this.normalizeInstanceIdentifier(s),o=(l=this.onInitCallbacks.get(i))!=null?l:new Set;o.add(t),this.onInitCallbacks.set(i,o);const c=this.instances.get(i);return c&&t(c,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,s){const i=this.onInitCallbacks.get(s);if(i)for(const o of i)try{o(t,s)}catch(c){}}getOrInitializeService({instanceIdentifier:t,options:s={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:gc(t),options:s}),this.instances.set(t,i),this.instancesOptions.set(t,s),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(o){}return i||null}normalizeInstanceIdentifier(t=qt){return this.component?this.component.multipleInstances?t:qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gc(n){return n===qt?void 0:n}function mc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const s=this.getProvider(t.name);if(s.isComponentSet())throw new Error("Component ".concat(t.name," has already been registered with ").concat(this.name));s.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const s=new pc(t,this);return this.providers.set(t,s),s}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const wc={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},_c=F.INFO,Ec={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},bc=(n,t,...s)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),o=Ec[t];if(o)console[o]("[".concat(i,"]  ").concat(n.name,":"),...s);else throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"))};class _n{constructor(t){this.name=t,this._logLevel=_c,this._logHandler=bc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError('Invalid value "'.concat(t,'" assigned to `logLevel`'));this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?wc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const vc=(n,t)=>t.some(s=>n instanceof s);let Ji,Ki;function Ic(){return Ji||(Ji=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sc(){return Ki||(Ki=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gr=new WeakMap,hs=new WeakMap,qr=new WeakMap,Yn=new WeakMap,Es=new WeakMap;function Ac(n){const t=new Promise((s,i)=>{const o=()=>{n.removeEventListener("success",c),n.removeEventListener("error",l)},c=()=>{s(Ft(n.result)),o()},l=()=>{i(n.error),o()};n.addEventListener("success",c),n.addEventListener("error",l)});return t.then(s=>{s instanceof IDBCursor&&Gr.set(s,n)}).catch(()=>{}),Es.set(t,n),t}function Tc(n){if(hs.has(n))return;const t=new Promise((s,i)=>{const o=()=>{n.removeEventListener("complete",c),n.removeEventListener("error",l),n.removeEventListener("abort",l)},c=()=>{s(),o()},l=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",c),n.addEventListener("error",l),n.addEventListener("abort",l)});hs.set(n,t)}let us={get(n,t,s){if(n instanceof IDBTransaction){if(t==="done")return hs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||qr.get(n);if(t==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return Ft(n[t])},set(n,t,s){return n[t]=s,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Cc(n){us=n(us)}function Rc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...s){const i=n.call(Xn(this),t,...s);return qr.set(i,t.sort?t.sort():[t]),Ft(i)}:Sc().includes(n)?function(...t){return n.apply(Xn(this),t),Ft(Gr.get(this))}:function(...t){return Ft(n.apply(Xn(this),t))}}function Oc(n){return typeof n=="function"?Rc(n):(n instanceof IDBTransaction&&Tc(n),vc(n,Ic())?new Proxy(n,us):n)}function Ft(n){if(n instanceof IDBRequest)return Ac(n);if(Yn.has(n))return Yn.get(n);const t=Oc(n);return t!==n&&(Yn.set(n,t),Es.set(t,n)),t}const Xn=n=>Es.get(n);function zr(n,t,{blocked:s,upgrade:i,blocking:o,terminated:c}={}){const l=indexedDB.open(n,t),p=Ft(l);return i&&l.addEventListener("upgradeneeded",_=>{i(Ft(l.result),_.oldVersion,_.newVersion,Ft(l.transaction),_)}),s&&l.addEventListener("blocked",_=>s(_.oldVersion,_.newVersion,_)),p.then(_=>{c&&_.addEventListener("close",()=>c()),o&&_.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),p}const Pc=["get","getKey","getAll","getAllKeys","count"],Dc=["put","add","delete","clear"],Zn=new Map;function Yi(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Zn.get(t))return Zn.get(t);const s=t.replace(/FromIndex$/,""),i=t!==s,o=Dc.includes(s);if(!(s in(i?IDBIndex:IDBObjectStore).prototype)||!(o||Pc.includes(s)))return;const c=async function(l,...p){const _=this.transaction(l,o?"readwrite":"readonly");let v=_.store;return i&&(v=v.index(p.shift())),(await Promise.all([v[s](...p),o&&_.done]))[0]};return Zn.set(t,c),c}Cc(n=>({...n,get:(t,s,i)=>Yi(t,s)||n.get(t,s,i),has:(t,s)=>!!Yi(t,s)||n.has(t,s)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(Nc(s)){const i=s.getImmediate();return"".concat(i.library,"/").concat(i.version)}else return null}).filter(s=>s).join(" ")}}function Nc(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const fs="@firebase/app",Xi="0.14.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new _n("@firebase/app"),Lc="@firebase/app-compat",Mc="@firebase/analytics-compat",xc="@firebase/analytics",Fc="@firebase/app-check-compat",jc="@firebase/app-check",Uc="@firebase/auth",$c="@firebase/auth-compat",Vc="@firebase/database",Bc="@firebase/data-connect",Hc="@firebase/database-compat",Gc="@firebase/functions",qc="@firebase/functions-compat",zc="@firebase/installations",Wc="@firebase/installations-compat",Jc="@firebase/messaging",Kc="@firebase/messaging-compat",Yc="@firebase/performance",Xc="@firebase/performance-compat",Zc="@firebase/remote-config",Qc="@firebase/remote-config-compat",tl="@firebase/storage",el="@firebase/storage-compat",nl="@firebase/firestore",sl="@firebase/ai",il="@firebase/firestore-compat",rl="firebase",ol="12.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="[DEFAULT]",al={[fs]:"fire-core",[Lc]:"fire-core-compat",[xc]:"fire-analytics",[Mc]:"fire-analytics-compat",[jc]:"fire-app-check",[Fc]:"fire-app-check-compat",[Uc]:"fire-auth",[$c]:"fire-auth-compat",[Vc]:"fire-rtdb",[Bc]:"fire-data-connect",[Hc]:"fire-rtdb-compat",[Gc]:"fire-fn",[qc]:"fire-fn-compat",[zc]:"fire-iid",[Wc]:"fire-iid-compat",[Jc]:"fire-fcm",[Kc]:"fire-fcm-compat",[Yc]:"fire-perf",[Xc]:"fire-perf-compat",[Zc]:"fire-rc",[Qc]:"fire-rc-compat",[tl]:"fire-gcs",[el]:"fire-gcs-compat",[nl]:"fire-fst",[il]:"fire-fst-compat",[sl]:"fire-vertex","fire-js":"fire-js",[rl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new Map,cl=new Map,ps=new Map;function Zi(n,t){try{n.container.addComponent(t)}catch(s){St.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(n.name),s)}}function At(n){const t=n.name;if(ps.has(t))return St.debug("There were multiple attempts to register component ".concat(t,".")),!1;ps.set(t,n);for(const s of hn.values())Zi(s,n);for(const s of cl.values())Zi(s,n);return!0}function ge(n,t){const s=n.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),n.container.getProvider(t)}function Wr(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jt=new wn("app","Firebase",ll);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t,s,i){this._isDeleted=!1,this._options={...t},this._config={...s},this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=ol;function Jr(n,t={}){let s=n;typeof t!="object"&&(t={name:t});const i={name:ds,automaticDataCollectionEnabled:!0,...t},o=i.name;if(typeof o!="string"||!o)throw jt.create("bad-app-name",{appName:String(o)});if(s||(s=$r()),!s)throw jt.create("no-options");const c=hn.get(o);if(c){if(Ue(s,c.options)&&Ue(i,c.config))return c;throw jt.create("duplicate-app",{appName:o})}const l=new yc(o);for(const _ of ps.values())l.addComponent(_);const p=new hl(s,i,l);return hn.set(o,p),p}function bs(n=ds){const t=hn.get(n);if(!t&&n===ds&&$r())return Jr();if(!t)throw jt.create("no-app",{appName:n});return t}function lt(n,t,s){var l;let i=(l=al[n])!=null?l:n;s&&(i+="-".concat(s));const o=i.match(/\s|\//),c=t.match(/\s|\//);if(o||c){const p=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];o&&p.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),o&&c&&p.push("and"),c&&p.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),St.warn(p.join(" "));return}At(new Et("".concat(i,"-version"),()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="firebase-heartbeat-database",dl=1,$e="firebase-heartbeat-store";let Qn=null;function Kr(){return Qn||(Qn=zr(fl,dl,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore($e)}catch(s){console.warn(s)}}}}).catch(n=>{throw jt.create("idb-open",{originalErrorMessage:n.message})})),Qn}async function pl(n){try{const s=(await Kr()).transaction($e),i=await s.objectStore($e).get(Yr(n));return await s.done,i}catch(t){if(t instanceof Tt)St.warn(t.message);else{const s=jt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});St.warn(s.message)}}}async function Qi(n,t){try{const i=(await Kr()).transaction($e,"readwrite");await i.objectStore($e).put(t,Yr(n)),await i.done}catch(s){if(s instanceof Tt)St.warn(s.message);else{const i=jt.create("idb-set",{originalErrorMessage:s==null?void 0:s.message});St.warn(i.message)}}}function Yr(n){return"".concat(n.name,"!").concat(n.options.appId)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=1024,ml=30;class yl{constructor(t){this.container=t,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new _l(s),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,s;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=tr();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)==null?void 0:s.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(l=>l.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>ml){const l=El(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){St.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const s=tr(),{heartbeatsToSend:i,unsentEntries:o}=wl(this._heartbeatsCache.heartbeats),c=ln(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=s,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(s){return St.warn(s),""}}}function tr(){return new Date().toISOString().substring(0,10)}function wl(n,t=gl){const s=[];let i=n.slice();for(const o of n){const c=s.find(l=>l.agent===o.agent);if(c){if(c.dates.push(o.date),er(s)>t){c.dates.pop();break}}else if(s.push({agent:o.agent,dates:[o.date]}),er(s)>t){s.pop();break}i=i.slice(1)}return{heartbeatsToSend:s,unsentEntries:i}}class _l{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Br()?Hr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await pl(this.app);return s!=null&&s.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return Qi(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!=null?i:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return Qi(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!=null?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function er(n){return ln(JSON.stringify({version:2,heartbeats:n})).length}function El(n){if(n.length===0)return-1;let t=0,s=n[0].date;for(let i=1;i<n.length;i++)n[i].date<s&&(s=n[i].date,t=i);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(n){At(new Et("platform-logger",t=>new kc(t),"PRIVATE")),At(new Et("heartbeat",t=>new yl(t),"PRIVATE")),lt(fs,Xi,n),lt(fs,Xi,"esm2020"),lt("fire-js","")}bl("");var nr="@firebase/ai",gs="2.8.0";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de="AI",sr="us-central1",vl="firebasevertexai.googleapis.com",un="v1beta",ir=gs,Il="gl-js",Sl="hybrid",Al=180*1e3,Tl="gemini-2.5-flash-lite";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R extends Tt{constructor(t,s,i){const o=de,c="".concat(o,"/").concat(t),l="".concat(o,": ").concat(s," (").concat(c,")");super(t,l),this.code=t,this.customErrorData=i,Error.captureStackTrace&&Error.captureStackTrace(this,R),Object.setPrototypeOf(this,R.prototype),this.toString=()=>l}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=["user","model","function","system"],Xr={HARM_SEVERITY_UNSUPPORTED:"HARM_SEVERITY_UNSUPPORTED"},or={SAFETY:"SAFETY",RECITATION:"RECITATION"},It={PREFER_ON_DEVICE:"prefer_on_device",ONLY_ON_DEVICE:"only_on_device",ONLY_IN_CLOUD:"only_in_cloud",PREFER_IN_CLOUD:"prefer_in_cloud"},xt={ON_DEVICE:"on_device",IN_CLOUD:"in_cloud"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={ERROR:"error",REQUEST_ERROR:"request-error",RESPONSE_ERROR:"response-error",FETCH_ERROR:"fetch-error",SESSION_CLOSED:"session-closed",INVALID_CONTENT:"invalid-content",API_NOT_ENABLED:"api-not-enabled",INVALID_SCHEMA:"invalid-schema",NO_API_KEY:"no-api-key",NO_APP_ID:"no-app-id",NO_MODEL:"no-model",NO_PROJECT_ID:"no-project-id",PARSE_FAILED:"parse-failed",UNSUPPORTED:"unsupported"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se={STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean",ARRAY:"array",OBJECT:"object"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct={VERTEX_AI:"VERTEX_AI",GOOGLE_AI:"GOOGLE_AI"};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t){this.backendType=t}}class En extends Zr{constructor(){super(Ct.GOOGLE_AI)}_getModelPath(t,s){return"/".concat(un,"/projects/").concat(t,"/").concat(s)}_getTemplatePath(t,s){return"/".concat(un,"/projects/").concat(t,"/templates/").concat(s)}}class vs extends Zr{constructor(t=sr){super(Ct.VERTEX_AI),t?this.location=t:this.location=sr}_getModelPath(t,s){return"/".concat(un,"/projects/").concat(t,"/locations/").concat(this.location,"/").concat(s)}_getTemplatePath(t,s){return"/".concat(un,"/projects/").concat(t,"/locations/").concat(this.location,"/templates/").concat(s)}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(n){if(n instanceof En)return"".concat(de,"/googleai");if(n instanceof vs)return"".concat(de,"/vertexai/").concat(n.location);throw new R(C.ERROR,"Invalid backend: ".concat(JSON.stringify(n.backendType)))}function Rl(n){const t=n.split("/");if(t[0]!==de)throw new R(C.ERROR,"Invalid instance identifier, unknown prefix '".concat(t[0],"'"));switch(t[1]){case"vertexai":const i=t[2];if(!i)throw new R(C.ERROR,"Invalid instance identifier, unknown location '".concat(n,"'"));return new vs(i);case"googleai":return new En;default:throw new R(C.ERROR,"Invalid instance identifier string: '".concat(n,"'"))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=new _n("@firebase/vertexai");var zt;(function(n){n.UNAVAILABLE="unavailable",n.DOWNLOADABLE="downloadable",n.DOWNLOADING="downloading",n.AVAILABLE="available"})(zt||(zt={}));/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=[{type:"image"}];class ft{constructor(t,s,i){this.languageModelProvider=t,this.mode=s,this.isDownloading=!1,this.onDeviceParams={createOptions:{expectedInputs:ts}},i&&(this.onDeviceParams=i,this.onDeviceParams.createOptions?this.onDeviceParams.createOptions.expectedInputs||(this.onDeviceParams.createOptions.expectedInputs=ts):this.onDeviceParams.createOptions={expectedInputs:ts})}async isAvailable(t){if(!this.mode)return Q.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===It.ONLY_IN_CLOUD)return Q.debug('On-device inference unavailable because mode is "only_in_cloud".'),!1;const s=await this.downloadIfAvailable();if(this.mode===It.ONLY_ON_DEVICE){if(s===zt.UNAVAILABLE)throw new R(C.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");return(s===zt.DOWNLOADABLE||s===zt.DOWNLOADING)&&(Q.debug("Waiting for download of LanguageModel to complete."),await this.downloadPromise),!0}return s!==zt.AVAILABLE?(Q.debug('On-device inference unavailable because availability is "'.concat(s,'".')),!1):ft.isOnDeviceRequest(t)?!0:(Q.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(t){const s=await this.createSession(),i=await Promise.all(t.contents.map(ft.toLanguageModelMessage)),o=await s.prompt(i,this.onDeviceParams.promptOptions);return ft.toResponse(o)}async generateContentStream(t){const s=await this.createSession(),i=await Promise.all(t.contents.map(ft.toLanguageModelMessage)),o=s.promptStreaming(i,this.onDeviceParams.promptOptions);return ft.toStreamResponse(o)}async countTokens(t){throw new R(C.REQUEST_ERROR,"Count Tokens is not yet available for on-device model.")}static isOnDeviceRequest(t){if(t.contents.length===0)return Q.debug("Empty prompt rejected for on-device inference."),!1;for(const s of t.contents){if(s.role==="function")return Q.debug('"Function" role rejected for on-device inference.'),!1;for(const i of s.parts)if(i.inlineData&&ft.SUPPORTED_MIME_TYPES.indexOf(i.inlineData.mimeType)===-1)return Q.debug('Unsupported mime type "'.concat(i.inlineData.mimeType,'" rejected for on-device inference.')),!1}return!0}async downloadIfAvailable(){var s;const t=await((s=this.languageModelProvider)==null?void 0:s.availability(this.onDeviceParams.createOptions));return t===zt.DOWNLOADABLE&&this.download(),t}download(){var t;this.isDownloading||(this.isDownloading=!0,this.downloadPromise=(t=this.languageModelProvider)==null?void 0:t.create(this.onDeviceParams.createOptions).finally(()=>{this.isDownloading=!1}))}static async toLanguageModelMessage(t){const s=await Promise.all(t.parts.map(ft.toLanguageModelMessageContent));return{role:ft.toLanguageModelMessageRole(t.role),content:s}}static async toLanguageModelMessageContent(t){if(t.text)return{type:"text",value:t.text};if(t.inlineData){const i=await(await fetch("data:".concat(t.inlineData.mimeType,";base64,").concat(t.inlineData.data))).blob();return{type:"image",value:await createImageBitmap(i)}}throw new R(C.REQUEST_ERROR,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(t){return t==="model"?"assistant":"user"}async createSession(){if(!this.languageModelProvider)throw new R(C.UNSUPPORTED,"Chrome AI requested for unsupported browser version.");const t=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=t,t}static toResponse(t){return{json:async()=>({candidates:[{content:{parts:[{text:t}]}}]})}}static toStreamResponse(t){const s=new TextEncoder;return{body:t.pipeThrough(new TransformStream({transform(i,o){const c=JSON.stringify({candidates:[{content:{role:"model",parts:[{text:i}]}}]});o.enqueue(s.encode("data: ".concat(c,"\n\n")))}}))}}}ft.SUPPORTED_MIME_TYPES=["image/jpeg","image/png"];function Ol(n,t,s){if(typeof t<"u"&&n)return new ft(t.LanguageModel,n,s)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(t,s,i,o,c){this.app=t,this.backend=s,this.chromeAdapterFactory=c;const l=o==null?void 0:o.getImmediate({optional:!0}),p=i==null?void 0:i.getImmediate({optional:!0});this.auth=p||null,this.appCheck=l||null,s instanceof vs?this.location=s.location:this.location=""}_delete(){return Promise.resolve()}set options(t){this._options=t}get options(){return this._options}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(n,{instanceIdentifier:t}){if(!t)throw new R(C.ERROR,"AIService instance identifier is undefined.");const s=Rl(t),i=n.getProvider("app").getImmediate(),o=n.getProvider("auth-internal"),c=n.getProvider("app-check-internal");return new Pl(i,s,o,c,Ol)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(n){var s,i,o,c,l,p,_;if((i=(s=n.app)==null?void 0:s.options)!=null&&i.apiKey)if((c=(o=n.app)==null?void 0:o.options)!=null&&c.projectId){if(!((p=(l=n.app)==null?void 0:l.options)!=null&&p.appId))throw new R(C.NO_APP_ID,'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.')}else throw new R(C.NO_PROJECT_ID,'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');else throw new R(C.NO_API_KEY,'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.');const t={apiKey:n.app.options.apiKey,project:n.app.options.projectId,appId:n.app.options.appId,automaticDataCollectionEnabled:n.app.automaticDataCollectionEnabled,location:n.location,backend:n.backend};if(Wr(n.app)&&n.app.settings.appCheckToken){const v=n.app.settings.appCheckToken;t.getAppCheckToken=()=>Promise.resolve({token:v})}else n.appCheck&&((_=n.options)!=null&&_.useLimitedUseAppCheckTokens?t.getAppCheckToken=()=>n.appCheck.getLimitedUseToken():t.getAppCheckToken=()=>n.appCheck.getToken());return n.auth&&(t.getAuthToken=()=>n.auth.getToken()),t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t,s){this._apiSettings=kl(t),this.model=Me.normalizeModelName(s,this._apiSettings.backend.backendType)}static normalizeModelName(t,s){return s===Ct.GOOGLE_AI?Me.normalizeGoogleAIModelName(t):Me.normalizeVertexAIModelName(t)}static normalizeGoogleAIModelName(t){return"models/".concat(t)}static normalizeVertexAIModelName(t){let s;return t.includes("/")?t.startsWith("models/")?s="publishers/google/".concat(t):s=t:s="publishers/google/models/".concat(t),s}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="Timeout has expired.",es="AbortError";class Ll{constructor(t){this.params=t}toString(){const t=new URL(this.baseUrl);return t.pathname=this.pathname,t.search=this.queryParams.toString(),t.toString()}get pathname(){return this.params.templateId?"".concat(this.params.apiSettings.backend._getTemplatePath(this.params.apiSettings.project,this.params.templateId),":").concat(this.params.task):"".concat(this.params.apiSettings.backend._getModelPath(this.params.apiSettings.project,this.params.model),":").concat(this.params.task)}get baseUrl(){var t,s;return(s=(t=this.params.singleRequestOptions)==null?void 0:t.baseUrl)!=null?s:"https://".concat(vl)}get queryParams(){const t=new URLSearchParams;return this.params.stream&&t.set("alt","sse"),t}}function Ml(n){const t=[];return t.push("".concat(Il,"/").concat(ir)),t.push("fire/".concat(ir)),(n.params.apiSettings.inferenceMode===It.PREFER_ON_DEVICE||n.params.apiSettings.inferenceMode===It.PREFER_IN_CLOUD)&&t.push(Sl),t.join(" ")}async function xl(n){const t=new Headers;if(t.append("Content-Type","application/json"),t.append("x-goog-api-client",Ml(n)),t.append("x-goog-api-key",n.params.apiSettings.apiKey),n.params.apiSettings.automaticDataCollectionEnabled&&t.append("X-Firebase-Appid",n.params.apiSettings.appId),n.params.apiSettings.getAppCheckToken){const s=await n.params.apiSettings.getAppCheckToken();s&&(t.append("X-Firebase-AppCheck",s.token),s.error&&Q.warn("Unable to obtain a valid App Check token: ".concat(s.error.message)))}if(n.params.apiSettings.getAuthToken){const s=await n.params.apiSettings.getAuthToken();s&&t.append("Authorization","Firebase ".concat(s.accessToken))}return t}async function Is(n,t){var v,T,I;const s=new Ll(n);let i;const o=(v=n.singleRequestOptions)==null?void 0:v.signal,c=((T=n.singleRequestOptions)==null?void 0:T.timeout)!=null&&n.singleRequestOptions.timeout>=0?n.singleRequestOptions.timeout:Al,l=new AbortController,p=setTimeout(()=>{l.abort(new DOMException(Nl,es)),Q.debug("Aborting request to ".concat(s," due to timeout (").concat(c,"ms)"))},c),_=AbortSignal.any(o?[o,l.signal]:[l.signal]);if(o&&o.aborted)throw clearTimeout(p),new DOMException((I=o.reason)!=null?I:"Aborted externally before fetch",es);try{const S={method:"POST",headers:await xl(s),signal:_,body:t};if(i=await fetch(s.toString(),S),!i.ok){let O="",D;try{const N=await i.json();O=N.error.message,N.error.details&&(O+=" ".concat(JSON.stringify(N.error.details)),D=N.error.details)}catch(N){}throw i.status===403&&D&&D.some(N=>N.reason==="SERVICE_DISABLED")&&D.some(N=>{var k,nt;return(nt=(k=N.links)==null?void 0:k[0])==null?void 0:nt.description.includes("Google developers console API activation")})?new R(C.API_NOT_ENABLED,"The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console "+"at https://console.firebase.google.com/project/".concat(s.params.apiSettings.project,"/ailogic/ ")+'and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.',{status:i.status,statusText:i.statusText,errorDetails:D}):new R(C.FETCH_ERROR,"Error fetching from ".concat(s,": [").concat(i.status," ").concat(i.statusText,"] ").concat(O),{status:i.status,statusText:i.statusText,errorDetails:D})}}catch(S){let O=S;throw S.code!==C.FETCH_ERROR&&S.code!==C.API_NOT_ENABLED&&S instanceof Error&&S.name!==es&&(O=new R(C.ERROR,"Error fetching from ".concat(s.toString(),": ").concat(S.message)),O.stack=S.stack),O}finally{clearTimeout(p)}return i}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(n){if(n.candidates&&n.candidates.length>0){if(n.candidates.length>1&&Q.warn("This response had ".concat(n.candidates.length," ")+"candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates."),Qr(n.candidates[0]))throw new R(C.RESPONSE_ERROR,"Response error: ".concat(Kt(n),". Response body stored in error.response"),{response:n});return!0}else return!1}function fn(n,t=xt.IN_CLOUD){n.candidates&&!n.candidates[0].hasOwnProperty("index")&&(n.candidates[0].index=0);const s=Fl(n);return s.inferenceSource=t,s}function Fl(n){return n.text=()=>{if(rn(n))return ar(n,t=>!t.thought);if(n.promptFeedback)throw new R(C.RESPONSE_ERROR,"Text not available. ".concat(Kt(n)),{response:n});return""},n.thoughtSummary=()=>{if(rn(n)){const t=ar(n,s=>!!s.thought);return t===""?void 0:t}else if(n.promptFeedback)throw new R(C.RESPONSE_ERROR,"Thought summary not available. ".concat(Kt(n)),{response:n})},n.inlineDataParts=()=>{if(rn(n))return Ul(n);if(n.promptFeedback)throw new R(C.RESPONSE_ERROR,"Data not available. ".concat(Kt(n)),{response:n})},n.functionCalls=()=>{if(rn(n))return jl(n);if(n.promptFeedback)throw new R(C.RESPONSE_ERROR,"Function call not available. ".concat(Kt(n)),{response:n})},n}function ar(n,t){var i,o,c,l;const s=[];if((o=(i=n.candidates)==null?void 0:i[0].content)!=null&&o.parts)for(const p of(l=(c=n.candidates)==null?void 0:c[0].content)==null?void 0:l.parts)p.text&&t(p)&&s.push(p.text);return s.length>0?s.join(""):""}function jl(n){var s,i,o,c;const t=[];if((i=(s=n.candidates)==null?void 0:s[0].content)!=null&&i.parts)for(const l of(c=(o=n.candidates)==null?void 0:o[0].content)==null?void 0:c.parts)l.functionCall&&t.push(l.functionCall);if(t.length>0)return t}function Ul(n){var s,i,o,c;const t=[];if((i=(s=n.candidates)==null?void 0:s[0].content)!=null&&i.parts)for(const l of(c=(o=n.candidates)==null?void 0:o[0].content)==null?void 0:c.parts)l.inlineData&&t.push(l);if(t.length>0)return t}const $l=[or.RECITATION,or.SAFETY];function Qr(n){return!!n.finishReason&&$l.some(t=>t===n.finishReason)}function Kt(n){var s,i,o;let t="";if((!n.candidates||n.candidates.length===0)&&n.promptFeedback)t+="Response was blocked",(s=n.promptFeedback)!=null&&s.blockReason&&(t+=" due to ".concat(n.promptFeedback.blockReason)),(i=n.promptFeedback)!=null&&i.blockReasonMessage&&(t+=": ".concat(n.promptFeedback.blockReasonMessage));else if((o=n.candidates)!=null&&o[0]){const c=n.candidates[0];Qr(c)&&(t+="Candidate was blocked due to ".concat(c.finishReason),c.finishMessage&&(t+=": ".concat(c.finishMessage)))}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n){var t,s;if((t=n.safetySettings)==null||t.forEach(i=>{if(i.method)throw new R(C.UNSUPPORTED,"SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),(s=n.generationConfig)!=null&&s.topK){const i=Math.round(n.generationConfig.topK);i!==n.generationConfig.topK&&(Q.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),n.generationConfig.topK=i)}return n}function Ss(n){return{candidates:n.candidates?Bl(n.candidates):void 0,prompt:n.promptFeedback?Hl(n.promptFeedback):void 0,usageMetadata:n.usageMetadata}}function Vl(n,t){return{generateContentRequest:{model:t,...n}}}function Bl(n){const t=[];let s;return t&&n.forEach(i=>{var l,p;let o;if(i.citationMetadata&&(o={citations:i.citationMetadata.citationSources}),i.safetyRatings&&(s=i.safetyRatings.map(_=>{var v,T,I;return{..._,severity:(v=_.severity)!=null?v:Xr.HARM_SEVERITY_UNSUPPORTED,probabilityScore:(T=_.probabilityScore)!=null?T:0,severityScore:(I=_.severityScore)!=null?I:0}})),(p=(l=i.content)==null?void 0:l.parts)!=null&&p.some(_=>_==null?void 0:_.videoMetadata))throw new R(C.UNSUPPORTED,"Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");const c={index:i.index,content:i.content,finishReason:i.finishReason,finishMessage:i.finishMessage,safetyRatings:s,citationMetadata:o,groundingMetadata:i.groundingMetadata,urlContextMetadata:i.urlContextMetadata};t.push(c)}),t}function Hl(n){const t=[];return n.safetyRatings.forEach(i=>{var o,c,l;t.push({category:i.category,probability:i.probability,severity:(o=i.severity)!=null?o:Xr.HARM_SEVERITY_UNSUPPORTED,probabilityScore:(c=i.probabilityScore)!=null?c:0,severityScore:(l=i.severityScore)!=null?l:0,blocked:i.blocked})}),{blockReason:n.blockReason,safetyRatings:t,blockReasonMessage:n.blockReasonMessage}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Gl(n,t,s){const i=n.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),o=Wl(i),[c,l]=o.tee();return{stream:zl(c,t,s),response:ql(l,t,s)}}async function ql(n,t,s){const i=[],o=n.getReader();for(;;){const{done:c,value:l}=await o.read();if(c){let p=Jl(i);return t.backend.backendType===Ct.GOOGLE_AI&&(p=Ss(p)),fn(p,s)}i.push(l)}}async function*zl(n,t,s){var o,c;const i=n.getReader();for(;;){const{value:l,done:p}=await i.read();if(p)break;let _;t.backend.backendType===Ct.GOOGLE_AI?_=fn(Ss(l),s):_=fn(l,s);const v=(o=_.candidates)==null?void 0:o[0];!((c=v==null?void 0:v.content)!=null&&c.parts)&&!(v!=null&&v.finishReason)&&!(v!=null&&v.citationMetadata)&&!(v!=null&&v.urlContextMetadata)||(yield _)}}function Wl(n){const t=n.getReader();return new ReadableStream({start(i){let o="";return c();function c(){return t.read().then(({value:l,done:p})=>{if(p){if(o.trim()){i.error(new R(C.PARSE_FAILED,"Failed to parse stream"));return}i.close();return}o+=l;let _=o.match(cr),v;for(;_;){try{v=JSON.parse(_[1])}catch(T){i.error(new R(C.PARSE_FAILED,'Error parsing JSON response: "'.concat(_[1])));return}i.enqueue(v),o=o.substring(_[0].length),_=o.match(cr)}return c()})}}})}function Jl(n){const t=n[n.length-1],s={promptFeedback:t==null?void 0:t.promptFeedback};for(const i of n)if(i.candidates)for(const o of i.candidates){const c=o.index||0;s.candidates||(s.candidates=[]),s.candidates[c]||(s.candidates[c]={index:o.index}),s.candidates[c].citationMetadata=o.citationMetadata,s.candidates[c].finishReason=o.finishReason,s.candidates[c].finishMessage=o.finishMessage,s.candidates[c].safetyRatings=o.safetyRatings,s.candidates[c].groundingMetadata=o.groundingMetadata;const l=o.urlContextMetadata;if(typeof l=="object"&&l!==null&&Object.keys(l).length>0&&(s.candidates[c].urlContextMetadata=l),o.content){if(!o.content.parts)continue;s.candidates[c].content||(s.candidates[c].content={role:o.content.role||"user",parts:[]});for(const p of o.content.parts){const _={...p};p.text!==""&&Object.keys(_).length>0&&s.candidates[c].content.parts.push(_)}}}return s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=[C.FETCH_ERROR,C.ERROR,C.API_NOT_ENABLED];async function eo(n,t,s,i){if(!t)return{response:await i(),inferenceSource:xt.IN_CLOUD};switch(t.mode){case It.ONLY_ON_DEVICE:if(await t.isAvailable(n))return{response:await s(),inferenceSource:xt.ON_DEVICE};throw new R(C.UNSUPPORTED,"Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.");case It.ONLY_IN_CLOUD:return{response:await i(),inferenceSource:xt.IN_CLOUD};case It.PREFER_IN_CLOUD:try{return{response:await i(),inferenceSource:xt.IN_CLOUD}}catch(o){if(o instanceof R&&Kl.includes(o.code))return{response:await s(),inferenceSource:xt.ON_DEVICE};throw o}case It.PREFER_ON_DEVICE:return await t.isAvailable(n)?{response:await s(),inferenceSource:xt.ON_DEVICE}:{response:await i(),inferenceSource:xt.IN_CLOUD};default:throw new R(C.ERROR,"Unexpected infererence mode: ".concat(t.mode))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yl(n,t,s,i){return n.backend.backendType===Ct.GOOGLE_AI&&(s=to(s)),Is({task:"streamGenerateContent",model:t,apiSettings:n,stream:!0,singleRequestOptions:i},JSON.stringify(s))}async function no(n,t,s,i,o){const c=await eo(s,i,()=>i.generateContentStream(s),()=>Yl(n,t,s,o));return Gl(c.response,n,c.inferenceSource)}async function Xl(n,t,s,i){return n.backend.backendType===Ct.GOOGLE_AI&&(s=to(s)),Is({model:t,task:"generateContent",apiSettings:n,stream:!1,singleRequestOptions:i},JSON.stringify(s))}async function so(n,t,s,i,o){const c=await eo(s,i,()=>i.generateContent(s),()=>Xl(n,t,s,o)),l=await Zl(c.response,n);return{response:fn(l,c.inferenceSource)}}async function Zl(n,t){const s=await n.json();return t.backend.backendType===Ct.GOOGLE_AI?Ss(s):s}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(n){if(n!=null){if(typeof n=="string")return{role:"system",parts:[{text:n}]};if(n.text)return{role:"system",parts:[n]};if(n.parts)return n.role?n:{role:"system",parts:n.parts}}}function ms(n){let t=[];if(typeof n=="string")t=[{text:n}];else for(const s of n)typeof s=="string"?t.push({text:s}):t.push(s);return Ql(t)}function Ql(n){const t={role:"user",parts:[]},s={role:"function",parts:[]};let i=!1,o=!1;for(const c of n)"functionResponse"in c?(s.parts.push(c),o=!0):(t.parts.push(c),i=!0);if(i&&o)throw new R(C.INVALID_CONTENT,"Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!i&&!o)throw new R(C.INVALID_CONTENT,"No Content is provided for sending chat message.");return i?t:s}function ns(n){let t;return n.contents?t=n:t={contents:[ms(n)]},n.systemInstruction&&(t.systemInstruction=io(n.systemInstruction)),t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=["text","inlineData","functionCall","functionResponse","thought","thoughtSignature"],th={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","thought","thoughtSignature"],system:["text"]},hr={user:["model"],function:["model"],model:["user","function"],system:[]};function eh(n){let t=null;for(const s of n){const{role:i,parts:o}=s;if(!t&&i!=="user")throw new R(C.INVALID_CONTENT,"First Content should be with role 'user', got ".concat(i));if(!rr.includes(i))throw new R(C.INVALID_CONTENT,"Each item should include role field. Got ".concat(i," but valid roles are: ").concat(JSON.stringify(rr)));if(!Array.isArray(o))throw new R(C.INVALID_CONTENT,"Content should have 'parts' property with an array of Parts");if(o.length===0)throw new R(C.INVALID_CONTENT,"Each Content should have at least one part");const c={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,executableCode:0,codeExecutionResult:0};for(const p of o)for(const _ of lr)_ in p&&(c[_]+=1);const l=th[i];for(const p of lr)if(!l.includes(p)&&c[p]>0)throw new R(C.INVALID_CONTENT,"Content with role '".concat(i,"' can't contain '").concat(p,"' part"));if(t&&!hr[i].includes(t.role))throw new R(C.INVALID_CONTENT,"Content with role '".concat(i,"' can't follow '").concat(t.role,"'. Valid previous roles: ").concat(JSON.stringify(hr)));t=s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="SILENT_ERROR";class nh{constructor(t,s,i,o,c){this.model=s,this.chromeAdapter=i,this.params=o,this.requestOptions=c,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=t,o!=null&&o.history&&(eh(o.history),this._history=o.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,s){var l,p,_,v,T;await this._sendPromise;const i=ms(t),o={safetySettings:(l=this.params)==null?void 0:l.safetySettings,generationConfig:(p=this.params)==null?void 0:p.generationConfig,tools:(_=this.params)==null?void 0:_.tools,toolConfig:(v=this.params)==null?void 0:v.toolConfig,systemInstruction:(T=this.params)==null?void 0:T.systemInstruction,contents:[...this._history,i]};let c={};return this._sendPromise=this._sendPromise.then(()=>so(this._apiSettings,this.model,o,this.chromeAdapter,{...this.requestOptions,...s})).then(I=>{var S,O;if(I.response.candidates&&I.response.candidates.length>0){this._history.push(i);const D={parts:((S=I.response.candidates)==null?void 0:S[0].content.parts)||[],role:((O=I.response.candidates)==null?void 0:O[0].content.role)||"model"};this._history.push(D)}else{const D=Kt(I.response);D&&Q.warn("sendMessage() was unsuccessful. ".concat(D,". Inspect response object for details."))}c=I}),await this._sendPromise,c}async sendMessageStream(t,s){var l,p,_,v,T;await this._sendPromise;const i=ms(t),o={safetySettings:(l=this.params)==null?void 0:l.safetySettings,generationConfig:(p=this.params)==null?void 0:p.generationConfig,tools:(_=this.params)==null?void 0:_.tools,toolConfig:(v=this.params)==null?void 0:v.toolConfig,systemInstruction:(T=this.params)==null?void 0:T.systemInstruction,contents:[...this._history,i]},c=no(this._apiSettings,this.model,o,this.chromeAdapter,{...this.requestOptions,...s});return this._sendPromise=this._sendPromise.then(()=>c).catch(I=>{throw new Error(ur)}).then(I=>I.response).then(I=>{if(I.candidates&&I.candidates.length>0){this._history.push(i);const S={...I.candidates[0].content};S.role||(S.role="model"),this._history.push(S)}else{const S=Kt(I);S&&Q.warn("sendMessageStream() was unsuccessful. ".concat(S,". Inspect response object for details."))}}).catch(I=>{I.message!==ur&&I.name!=="AbortError"&&Q.error(I)}),c}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sh(n,t,s,i){let o="";if(n.backend.backendType===Ct.GOOGLE_AI){const l=Vl(s,t);o=JSON.stringify(l)}else o=JSON.stringify(s);return(await Is({model:t,task:"countTokens",apiSettings:n,stream:!1,singleRequestOptions:i},o)).json()}async function ih(n,t,s,i,o){if((i==null?void 0:i.mode)===It.ONLY_ON_DEVICE)throw new R(C.UNSUPPORTED,"countTokens() is not supported for on-device models.");return sh(n,t,s,o)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh extends Me{constructor(t,s,i,o){super(t,s.model),this.chromeAdapter=o,this.generationConfig=s.generationConfig||{},oh(this.generationConfig),this.safetySettings=s.safetySettings||[],this.tools=s.tools,this.toolConfig=s.toolConfig,this.systemInstruction=io(s.systemInstruction),this.requestOptions=i||{}}async generateContent(t,s){const i=ns(t);return so(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...i},this.chromeAdapter,{...this.requestOptions,...s})}async generateContentStream(t,s){const i=ns(t);return no(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...i},this.chromeAdapter,{...this.requestOptions,...s})}startChat(t){return new nh(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...t},this.requestOptions)}async countTokens(t,s){const i=ns(t);return ih(this._apiSettings,this.model,i,this.chromeAdapter,{...this.requestOptions,...s})}}function oh(n){var t,s;if(((t=n.thinkingConfig)==null?void 0:t.thinkingBudget)!=null&&((s=n.thinkingConfig)!=null&&s.thinkingLevel))throw new R(C.UNSUPPORTED,"Cannot set both thinkingBudget and thinkingLevel in a config.")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){if(!t.type&&!t.anyOf)throw new R(C.INVALID_SCHEMA,"A schema must have either a 'type' or an 'anyOf' array of sub-schemas.");for(const s in t)this[s]=t[s];this.type=t.type,this.format=t.hasOwnProperty("format")?t.format:void 0,this.nullable=t.hasOwnProperty("nullable")?!!t.nullable:!1}toJSON(){const t={type:this.type};for(const s in this)this.hasOwnProperty(s)&&this[s]!==void 0&&(s!=="required"||this.type===se.OBJECT)&&(t[s]=this[s]);return t}static array(t){return new hh(t,t.items)}static object(t){return new uh(t,t.properties,t.optionalProperties)}static string(t){return new fr(t)}static enumString(t){return new fr(t,t.enum)}static integer(t){return new ah(t)}static number(t){return new ch(t)}static boolean(t){return new lh(t)}static anyOf(t){return new fh(t)}}class ah extends z{constructor(t){super({type:se.INTEGER,...t})}}class ch extends z{constructor(t){super({type:se.NUMBER,...t})}}class lh extends z{constructor(t){super({type:se.BOOLEAN,...t})}}class fr extends z{constructor(t,s){super({type:se.STRING,...t}),this.enum=s}toJSON(){const t=super.toJSON();return this.enum&&(t.enum=this.enum),t}}class hh extends z{constructor(t,s){super({type:se.ARRAY,...t}),this.items=s}toJSON(){const t=super.toJSON();return t.items=this.items.toJSON(),t}}class uh extends z{constructor(t,s,i=[]){super({type:se.OBJECT,...t}),this.properties=s,this.optionalProperties=i}toJSON(){const t=super.toJSON();t.properties={...this.properties};const s=[];if(this.optionalProperties){for(const i of this.optionalProperties)if(!this.properties.hasOwnProperty(i))throw new R(C.INVALID_SCHEMA,'Property "'.concat(i,'" specified in "optionalProperties" does not exist.'))}for(const i in this.properties)this.properties.hasOwnProperty(i)&&(t.properties[i]=this.properties[i].toJSON(),this.optionalProperties.includes(i)||s.push(i));return s.length>0&&(t.required=s),delete t.optionalProperties,t}}class fh extends z{constructor(t){if(t.anyOf.length===0)throw new R(C.INVALID_SCHEMA,"The 'anyOf' array must not be empty.");super({...t,type:void 0}),this.anyOf=t.anyOf}toJSON(){const t=super.toJSON();return this.anyOf&&Array.isArray(this.anyOf)&&(t.anyOf=this.anyOf.map(s=>s.toJSON())),t}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(n=bs(),t){var p,_;n=Be(n);const s=ge(n,de),i=(p=t==null?void 0:t.backend)!=null?p:new En,o={useLimitedUseAppCheckTokens:(_=t==null?void 0:t.useLimitedUseAppCheckTokens)!=null?_:!1},c=Cl(i),l=s.getImmediate({identifier:c});return l.options=o,l}function ph(n,t,s){var p;const i=t;let o;if(i.mode?o=i.inCloudParams||{model:Tl}:o=t,!o.model)throw new R(C.NO_MODEL,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");const c=(p=n.chromeAdapterFactory)==null?void 0:p.call(n,i.mode,typeof window>"u"?void 0:window,i.onDeviceParams),l=new rh(n,o,s,c);return l._apiSettings.inferenceMode=i.mode,l}function gh(){At(new Et(de,Dl,"PUBLIC").setMultipleInstances(!0)),lt(nr,gs),lt(nr,gs,"esm2020")}gh();var mh="firebase",yh="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt(mh,yh,"app");var dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var As;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,u){function d(){}d.prototype=u.prototype,y.F=u.prototype,y.prototype=new d,y.prototype.constructor=y,y.D=function(m,g,w){for(var f=Array(arguments.length-2),B=2;B<arguments.length;B++)f[B-2]=arguments[B];return u.prototype[g].apply(m,f)}}function s(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(i,s),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(y,u,d){d||(d=0);const m=Array(16);if(typeof u=="string")for(var g=0;g<16;++g)m[g]=u.charCodeAt(d++)|u.charCodeAt(d++)<<8|u.charCodeAt(d++)<<16|u.charCodeAt(d++)<<24;else for(g=0;g<16;++g)m[g]=u[d++]|u[d++]<<8|u[d++]<<16|u[d++]<<24;u=y.g[0],d=y.g[1],g=y.g[2];let w=y.g[3],f;f=u+(w^d&(g^w))+m[0]+3614090360&4294967295,u=d+(f<<7&4294967295|f>>>25),f=w+(g^u&(d^g))+m[1]+3905402710&4294967295,w=u+(f<<12&4294967295|f>>>20),f=g+(d^w&(u^d))+m[2]+606105819&4294967295,g=w+(f<<17&4294967295|f>>>15),f=d+(u^g&(w^u))+m[3]+3250441966&4294967295,d=g+(f<<22&4294967295|f>>>10),f=u+(w^d&(g^w))+m[4]+4118548399&4294967295,u=d+(f<<7&4294967295|f>>>25),f=w+(g^u&(d^g))+m[5]+1200080426&4294967295,w=u+(f<<12&4294967295|f>>>20),f=g+(d^w&(u^d))+m[6]+2821735955&4294967295,g=w+(f<<17&4294967295|f>>>15),f=d+(u^g&(w^u))+m[7]+4249261313&4294967295,d=g+(f<<22&4294967295|f>>>10),f=u+(w^d&(g^w))+m[8]+1770035416&4294967295,u=d+(f<<7&4294967295|f>>>25),f=w+(g^u&(d^g))+m[9]+2336552879&4294967295,w=u+(f<<12&4294967295|f>>>20),f=g+(d^w&(u^d))+m[10]+4294925233&4294967295,g=w+(f<<17&4294967295|f>>>15),f=d+(u^g&(w^u))+m[11]+2304563134&4294967295,d=g+(f<<22&4294967295|f>>>10),f=u+(w^d&(g^w))+m[12]+1804603682&4294967295,u=d+(f<<7&4294967295|f>>>25),f=w+(g^u&(d^g))+m[13]+4254626195&4294967295,w=u+(f<<12&4294967295|f>>>20),f=g+(d^w&(u^d))+m[14]+2792965006&4294967295,g=w+(f<<17&4294967295|f>>>15),f=d+(u^g&(w^u))+m[15]+1236535329&4294967295,d=g+(f<<22&4294967295|f>>>10),f=u+(g^w&(d^g))+m[1]+4129170786&4294967295,u=d+(f<<5&4294967295|f>>>27),f=w+(d^g&(u^d))+m[6]+3225465664&4294967295,w=u+(f<<9&4294967295|f>>>23),f=g+(u^d&(w^u))+m[11]+643717713&4294967295,g=w+(f<<14&4294967295|f>>>18),f=d+(w^u&(g^w))+m[0]+3921069994&4294967295,d=g+(f<<20&4294967295|f>>>12),f=u+(g^w&(d^g))+m[5]+3593408605&4294967295,u=d+(f<<5&4294967295|f>>>27),f=w+(d^g&(u^d))+m[10]+38016083&4294967295,w=u+(f<<9&4294967295|f>>>23),f=g+(u^d&(w^u))+m[15]+3634488961&4294967295,g=w+(f<<14&4294967295|f>>>18),f=d+(w^u&(g^w))+m[4]+3889429448&4294967295,d=g+(f<<20&4294967295|f>>>12),f=u+(g^w&(d^g))+m[9]+568446438&4294967295,u=d+(f<<5&4294967295|f>>>27),f=w+(d^g&(u^d))+m[14]+3275163606&4294967295,w=u+(f<<9&4294967295|f>>>23),f=g+(u^d&(w^u))+m[3]+4107603335&4294967295,g=w+(f<<14&4294967295|f>>>18),f=d+(w^u&(g^w))+m[8]+1163531501&4294967295,d=g+(f<<20&4294967295|f>>>12),f=u+(g^w&(d^g))+m[13]+2850285829&4294967295,u=d+(f<<5&4294967295|f>>>27),f=w+(d^g&(u^d))+m[2]+4243563512&4294967295,w=u+(f<<9&4294967295|f>>>23),f=g+(u^d&(w^u))+m[7]+1735328473&4294967295,g=w+(f<<14&4294967295|f>>>18),f=d+(w^u&(g^w))+m[12]+2368359562&4294967295,d=g+(f<<20&4294967295|f>>>12),f=u+(d^g^w)+m[5]+4294588738&4294967295,u=d+(f<<4&4294967295|f>>>28),f=w+(u^d^g)+m[8]+2272392833&4294967295,w=u+(f<<11&4294967295|f>>>21),f=g+(w^u^d)+m[11]+1839030562&4294967295,g=w+(f<<16&4294967295|f>>>16),f=d+(g^w^u)+m[14]+4259657740&4294967295,d=g+(f<<23&4294967295|f>>>9),f=u+(d^g^w)+m[1]+2763975236&4294967295,u=d+(f<<4&4294967295|f>>>28),f=w+(u^d^g)+m[4]+1272893353&4294967295,w=u+(f<<11&4294967295|f>>>21),f=g+(w^u^d)+m[7]+4139469664&4294967295,g=w+(f<<16&4294967295|f>>>16),f=d+(g^w^u)+m[10]+3200236656&4294967295,d=g+(f<<23&4294967295|f>>>9),f=u+(d^g^w)+m[13]+681279174&4294967295,u=d+(f<<4&4294967295|f>>>28),f=w+(u^d^g)+m[0]+3936430074&4294967295,w=u+(f<<11&4294967295|f>>>21),f=g+(w^u^d)+m[3]+3572445317&4294967295,g=w+(f<<16&4294967295|f>>>16),f=d+(g^w^u)+m[6]+76029189&4294967295,d=g+(f<<23&4294967295|f>>>9),f=u+(d^g^w)+m[9]+3654602809&4294967295,u=d+(f<<4&4294967295|f>>>28),f=w+(u^d^g)+m[12]+3873151461&4294967295,w=u+(f<<11&4294967295|f>>>21),f=g+(w^u^d)+m[15]+530742520&4294967295,g=w+(f<<16&4294967295|f>>>16),f=d+(g^w^u)+m[2]+3299628645&4294967295,d=g+(f<<23&4294967295|f>>>9),f=u+(g^(d|~w))+m[0]+4096336452&4294967295,u=d+(f<<6&4294967295|f>>>26),f=w+(d^(u|~g))+m[7]+1126891415&4294967295,w=u+(f<<10&4294967295|f>>>22),f=g+(u^(w|~d))+m[14]+2878612391&4294967295,g=w+(f<<15&4294967295|f>>>17),f=d+(w^(g|~u))+m[5]+4237533241&4294967295,d=g+(f<<21&4294967295|f>>>11),f=u+(g^(d|~w))+m[12]+1700485571&4294967295,u=d+(f<<6&4294967295|f>>>26),f=w+(d^(u|~g))+m[3]+2399980690&4294967295,w=u+(f<<10&4294967295|f>>>22),f=g+(u^(w|~d))+m[10]+4293915773&4294967295,g=w+(f<<15&4294967295|f>>>17),f=d+(w^(g|~u))+m[1]+2240044497&4294967295,d=g+(f<<21&4294967295|f>>>11),f=u+(g^(d|~w))+m[8]+1873313359&4294967295,u=d+(f<<6&4294967295|f>>>26),f=w+(d^(u|~g))+m[15]+4264355552&4294967295,w=u+(f<<10&4294967295|f>>>22),f=g+(u^(w|~d))+m[6]+2734768916&4294967295,g=w+(f<<15&4294967295|f>>>17),f=d+(w^(g|~u))+m[13]+1309151649&4294967295,d=g+(f<<21&4294967295|f>>>11),f=u+(g^(d|~w))+m[4]+4149444226&4294967295,u=d+(f<<6&4294967295|f>>>26),f=w+(d^(u|~g))+m[11]+3174756917&4294967295,w=u+(f<<10&4294967295|f>>>22),f=g+(u^(w|~d))+m[2]+718787259&4294967295,g=w+(f<<15&4294967295|f>>>17),f=d+(w^(g|~u))+m[9]+3951481745&4294967295,y.g[0]=y.g[0]+u&4294967295,y.g[1]=y.g[1]+(g+(f<<21&4294967295|f>>>11))&4294967295,y.g[2]=y.g[2]+g&4294967295,y.g[3]=y.g[3]+w&4294967295}i.prototype.v=function(y,u){u===void 0&&(u=y.length);const d=u-this.blockSize,m=this.C;let g=this.h,w=0;for(;w<u;){if(g==0)for(;w<=d;)o(this,y,w),w+=this.blockSize;if(typeof y=="string"){for(;w<u;)if(m[g++]=y.charCodeAt(w++),g==this.blockSize){o(this,m),g=0;break}}else for(;w<u;)if(m[g++]=y[w++],g==this.blockSize){o(this,m),g=0;break}}this.h=g,this.o+=u},i.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var u=1;u<y.length-8;++u)y[u]=0;u=this.o*8;for(var d=y.length-8;d<y.length;++d)y[d]=u&255,u/=256;for(this.v(y),y=Array(16),u=0,d=0;d<4;++d)for(let m=0;m<32;m+=8)y[u++]=this.g[d]>>>m&255;return y};function c(y,u){var d=p;return Object.prototype.hasOwnProperty.call(d,y)?d[y]:d[y]=u(y)}function l(y,u){this.h=u;const d=[];let m=!0;for(let g=y.length-1;g>=0;g--){const w=y[g]|0;m&&w==u||(d[g]=w,m=!1)}this.g=d}var p={};function _(y){return-128<=y&&y<128?c(y,function(u){return new l([u|0],u<0?-1:0)}):new l([y|0],y<0?-1:0)}function v(y){if(isNaN(y)||!isFinite(y))return I;if(y<0)return k(v(-y));const u=[];let d=1;for(let m=0;y>=d;m++)u[m]=y/d|0,d*=4294967296;return new l(u,0)}function T(y,u){if(y.length==0)throw Error("number format error: empty string");if(u=u||10,u<2||36<u)throw Error("radix out of range: "+u);if(y.charAt(0)=="-")return k(T(y.substring(1),u));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const d=v(Math.pow(u,8));let m=I;for(let w=0;w<y.length;w+=8){var g=Math.min(8,y.length-w);const f=parseInt(y.substring(w,w+g),u);g<8?(g=v(Math.pow(u,g)),m=m.j(g).add(v(f))):(m=m.j(d),m=m.add(v(f)))}return m}var I=_(0),S=_(1),O=_(16777216);n=l.prototype,n.m=function(){if(N(this))return-k(this).m();let y=0,u=1;for(let d=0;d<this.g.length;d++){const m=this.i(d);y+=(m>=0?m:4294967296+m)*u,u*=4294967296}return y},n.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(D(this))return"0";if(N(this))return"-"+k(this).toString(y);const u=v(Math.pow(y,6));var d=this;let m="";for(;;){const g=ht(d,u).g;d=nt(d,g.j(u));let w=((d.g.length>0?d.g[0]:d.h)>>>0).toString(y);if(d=g,D(d))return w+m;for(;w.length<6;)w="0"+w;m=w+m}},n.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function D(y){if(y.h!=0)return!1;for(let u=0;u<y.g.length;u++)if(y.g[u]!=0)return!1;return!0}function N(y){return y.h==-1}n.l=function(y){return y=nt(this,y),N(y)?-1:D(y)?0:1};function k(y){const u=y.g.length,d=[];for(let m=0;m<u;m++)d[m]=~y.g[m];return new l(d,~y.h).add(S)}n.abs=function(){return N(this)?k(this):this},n.add=function(y){const u=Math.max(this.g.length,y.g.length),d=[];let m=0;for(let g=0;g<=u;g++){let w=m+(this.i(g)&65535)+(y.i(g)&65535),f=(w>>>16)+(this.i(g)>>>16)+(y.i(g)>>>16);m=f>>>16,w&=65535,f&=65535,d[g]=f<<16|w}return new l(d,d[d.length-1]&-2147483648?-1:0)};function nt(y,u){return y.add(k(u))}n.j=function(y){if(D(this)||D(y))return I;if(N(this))return N(y)?k(this).j(k(y)):k(k(this).j(y));if(N(y))return k(this.j(k(y)));if(this.l(O)<0&&y.l(O)<0)return v(this.m()*y.m());const u=this.g.length+y.g.length,d=[];for(var m=0;m<2*u;m++)d[m]=0;for(m=0;m<this.g.length;m++)for(let g=0;g<y.g.length;g++){const w=this.i(m)>>>16,f=this.i(m)&65535,B=y.i(g)>>>16,ot=y.i(g)&65535;d[2*m+2*g]+=f*ot,it(d,2*m+2*g),d[2*m+2*g+1]+=w*ot,it(d,2*m+2*g+1),d[2*m+2*g+1]+=f*B,it(d,2*m+2*g+1),d[2*m+2*g+2]+=w*B,it(d,2*m+2*g+2)}for(y=0;y<u;y++)d[y]=d[2*y+1]<<16|d[2*y];for(y=u;y<2*u;y++)d[y]=0;return new l(d,0)};function it(y,u){for(;(y[u]&65535)!=y[u];)y[u+1]+=y[u]>>>16,y[u]&=65535,u++}function J(y,u){this.g=y,this.h=u}function ht(y,u){if(D(u))throw Error("division by zero");if(D(y))return new J(I,I);if(N(y))return u=ht(k(y),u),new J(k(u.g),k(u.h));if(N(u))return u=ht(y,k(u)),new J(k(u.g),u.h);if(y.g.length>30){if(N(y)||N(u))throw Error("slowDivide_ only works with positive integers.");for(var d=S,m=u;m.l(y)<=0;)d=ut(d),m=ut(m);var g=st(d,1),w=st(m,1);for(m=st(m,2),d=st(d,2);!D(m);){var f=w.add(m);f.l(y)<=0&&(g=g.add(d),w=f),m=st(m,1),d=st(d,1)}return u=nt(y,g.j(u)),new J(g,u)}for(g=I;y.l(u)>=0;){for(d=Math.max(1,Math.floor(y.m()/u.m())),m=Math.ceil(Math.log(d)/Math.LN2),m=m<=48?1:Math.pow(2,m-48),w=v(d),f=w.j(u);N(f)||f.l(y)>0;)d-=m,w=v(d),f=w.j(u);D(w)&&(w=S),g=g.add(w),y=nt(y,f)}return new J(g,y)}n.B=function(y){return ht(this,y).h},n.and=function(y){const u=Math.max(this.g.length,y.g.length),d=[];for(let m=0;m<u;m++)d[m]=this.i(m)&y.i(m);return new l(d,this.h&y.h)},n.or=function(y){const u=Math.max(this.g.length,y.g.length),d=[];for(let m=0;m<u;m++)d[m]=this.i(m)|y.i(m);return new l(d,this.h|y.h)},n.xor=function(y){const u=Math.max(this.g.length,y.g.length),d=[];for(let m=0;m<u;m++)d[m]=this.i(m)^y.i(m);return new l(d,this.h^y.h)};function ut(y){const u=y.g.length+1,d=[];for(let m=0;m<u;m++)d[m]=y.i(m)<<1|y.i(m-1)>>>31;return new l(d,y.h)}function st(y,u){const d=u>>5;u%=32;const m=y.g.length-d,g=[];for(let w=0;w<m;w++)g[w]=u>0?y.i(w+d)>>>u|y.i(w+d+1)<<32-u:y.i(w+d);return new l(g,y.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=v,l.fromString=T,As=l}).apply(typeof dr<"u"?dr:typeof self<"u"?self:typeof window<"u"?window:{});var on=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,t=Object.defineProperty;function s(e){e=[typeof globalThis=="object"&&globalThis,e,typeof window=="object"&&window,typeof self=="object"&&self,typeof on=="object"&&on];for(var r=0;r<e.length;++r){var a=e[r];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var i=s(this);function o(e,r){if(r)t:{var a=i;e=e.split(".");for(var h=0;h<e.length-1;h++){var E=e[h];if(!(E in a))break t;a=a[E]}e=e[e.length-1],h=a[e],r=r(h),r!=h&&r!=null&&t(a,e,{configurable:!0,writable:!0,value:r})}}o("Symbol.dispose",function(e){return e||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(e){return e||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(e){return e||function(r){var a=[],h;for(h in r)Object.prototype.hasOwnProperty.call(r,h)&&a.push([h,r[h]]);return a}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},l=this||self;function p(e){var r=typeof e;return r=="object"&&e!=null||r=="function"}function _(e,r,a){return e.call.apply(e.bind,arguments)}function v(e,r,a){return v=_,v.apply(null,arguments)}function T(e,r){var a=Array.prototype.slice.call(arguments,1);return function(){var h=a.slice();return h.push.apply(h,arguments),e.apply(this,h)}}function I(e,r){function a(){}a.prototype=r.prototype,e.Z=r.prototype,e.prototype=new a,e.prototype.constructor=e,e.Ob=function(h,E,b){for(var A=Array(arguments.length-2),P=2;P<arguments.length;P++)A[P-2]=arguments[P];return r.prototype[E].apply(h,A)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e;function O(e){const r=e.length;if(r>0){const a=Array(r);for(let h=0;h<r;h++)a[h]=e[h];return a}return[]}function D(e,r){for(let h=1;h<arguments.length;h++){const E=arguments[h];var a=typeof E;if(a=a!="object"?a:E?Array.isArray(E)?"array":a:"null",a=="array"||a=="object"&&typeof E.length=="number"){a=e.length||0;const b=E.length||0;e.length=a+b;for(let A=0;A<b;A++)e[a+A]=E[A]}else e.push(E)}}class N{constructor(r,a){this.i=r,this.j=a,this.h=0,this.g=null}get(){let r;return this.h>0?(this.h--,r=this.g,this.g=r.next,r.next=null):r=this.i(),r}}function k(e){l.setTimeout(()=>{throw e},0)}function nt(){var e=y;let r=null;return e.g&&(r=e.g,e.g=e.g.next,e.g||(e.h=null),r.next=null),r}class it{constructor(){this.h=this.g=null}add(r,a){const h=J.get();h.set(r,a),this.h?this.h.next=h:this.g=h,this.h=h}}var J=new N(()=>new ht,e=>e.reset());class ht{constructor(){this.next=this.g=this.h=null}set(r,a){this.h=r,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let ut,st=!1,y=new it,u=()=>{const e=Promise.resolve(void 0);ut=()=>{e.then(d)}};function d(){for(var e;e=nt();){try{e.h.call(e.g)}catch(a){k(a)}var r=J;r.j(e),r.h<100&&(r.h++,e.next=r.g,r.g=e)}st=!1}function m(){this.u=this.u,this.C=this.C}m.prototype.u=!1,m.prototype.dispose=function(){this.u||(this.u=!0,this.N())},m.prototype[Symbol.dispose]=function(){this.dispose()},m.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function g(e,r){this.type=e,this.g=this.target=r,this.defaultPrevented=!1}g.prototype.h=function(){this.defaultPrevented=!0};var w=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var e=!1,r=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const a=()=>{};l.addEventListener("test",a,r),l.removeEventListener("test",a,r)}catch(a){}return e}();function f(e){return/^[\s\xa0]*$/.test(e)}function B(e,r){g.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e&&this.init(e,r)}I(B,g),B.prototype.init=function(e,r){const a=this.type=e.type,h=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;this.target=e.target||e.srcElement,this.g=r,r=e.relatedTarget,r||(a=="mouseover"?r=e.fromElement:a=="mouseout"&&(r=e.toElement)),this.relatedTarget=r,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&B.Z.h.call(this)},B.prototype.h=function(){B.Z.h.call(this);const e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ot="closure_listenable_"+(Math.random()*1e6|0),Mo=0;function xo(e,r,a,h,E){this.listener=e,this.proxy=null,this.src=r,this.type=a,this.capture=!!h,this.ha=E,this.key=++Mo,this.da=this.fa=!1}function qe(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ze(e,r,a){for(const h in e)r.call(a,e[h],h,e)}function Fo(e,r){for(const a in e)r.call(void 0,e[a],a,e)}function Fs(e){const r={};for(const a in e)r[a]=e[a];return r}const js="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Us(e,r){let a,h;for(let E=1;E<arguments.length;E++){h=arguments[E];for(a in h)e[a]=h[a];for(let b=0;b<js.length;b++)a=js[b],Object.prototype.hasOwnProperty.call(h,a)&&(e[a]=h[a])}}function We(e){this.src=e,this.g={},this.h=0}We.prototype.add=function(e,r,a,h,E){const b=e.toString();e=this.g[b],e||(e=this.g[b]=[],this.h++);const A=Sn(e,r,h,E);return A>-1?(r=e[A],a||(r.fa=!1)):(r=new xo(r,this.src,b,!!h,E),r.fa=a,e.push(r)),r};function In(e,r){const a=r.type;if(a in e.g){var h=e.g[a],E=Array.prototype.indexOf.call(h,r,void 0),b;(b=E>=0)&&Array.prototype.splice.call(h,E,1),b&&(qe(r),e.g[a].length==0&&(delete e.g[a],e.h--))}}function Sn(e,r,a,h){for(let E=0;E<e.length;++E){const b=e[E];if(!b.da&&b.listener==r&&b.capture==!!a&&b.ha==h)return E}return-1}var An="closure_lm_"+(Math.random()*1e6|0),Tn={};function $s(e,r,a,h,E){if(Array.isArray(r)){for(let b=0;b<r.length;b++)$s(e,r[b],a,h,E);return null}return a=Hs(a),e&&e[ot]?e.J(r,a,p(h)?!!h.capture:!1,E):jo(e,r,a,!1,h,E)}function jo(e,r,a,h,E,b){if(!r)throw Error("Invalid event type");const A=p(E)?!!E.capture:!!E;let P=Rn(e);if(P||(e[An]=P=new We(e)),a=P.add(r,a,h,A,b),a.proxy)return a;if(h=Uo(),a.proxy=h,h.src=e,h.listener=a,e.addEventListener)w||(E=A),E===void 0&&(E=!1),e.addEventListener(r.toString(),h,E);else if(e.attachEvent)e.attachEvent(Bs(r.toString()),h);else if(e.addListener&&e.removeListener)e.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return a}function Uo(){function e(a){return r.call(e.src,e.listener,a)}const r=$o;return e}function Vs(e,r,a,h,E){if(Array.isArray(r))for(var b=0;b<r.length;b++)Vs(e,r[b],a,h,E);else h=p(h)?!!h.capture:!!h,a=Hs(a),e&&e[ot]?(e=e.i,b=String(r).toString(),b in e.g&&(r=e.g[b],a=Sn(r,a,h,E),a>-1&&(qe(r[a]),Array.prototype.splice.call(r,a,1),r.length==0&&(delete e.g[b],e.h--)))):e&&(e=Rn(e))&&(r=e.g[r.toString()],e=-1,r&&(e=Sn(r,a,h,E)),(a=e>-1?r[e]:null)&&Cn(a))}function Cn(e){if(typeof e!="number"&&e&&!e.da){var r=e.src;if(r&&r[ot])In(r.i,e);else{var a=e.type,h=e.proxy;r.removeEventListener?r.removeEventListener(a,h,e.capture):r.detachEvent?r.detachEvent(Bs(a),h):r.addListener&&r.removeListener&&r.removeListener(h),(a=Rn(r))?(In(a,e),a.h==0&&(a.src=null,r[An]=null)):qe(e)}}}function Bs(e){return e in Tn?Tn[e]:Tn[e]="on"+e}function $o(e,r){if(e.da)e=!0;else{r=new B(r,this);const a=e.listener,h=e.ha||e.src;e.fa&&Cn(e),e=a.call(h,r)}return e}function Rn(e){return e=e[An],e instanceof We?e:null}var On="__closure_events_fn_"+(Math.random()*1e9>>>0);function Hs(e){return typeof e=="function"?e:(e[On]||(e[On]=function(r){return e.handleEvent(r)}),e[On])}function K(){m.call(this),this.i=new We(this),this.M=this,this.G=null}I(K,m),K.prototype[ot]=!0,K.prototype.removeEventListener=function(e,r,a,h){Vs(this,e,r,a,h)};function Y(e,r){var a,h=e.G;if(h)for(a=[];h;h=h.G)a.push(h);if(e=e.M,h=r.type||r,typeof r=="string")r=new g(r,e);else if(r instanceof g)r.target=r.target||e;else{var E=r;r=new g(h,e),Us(r,E)}E=!0;let b,A;if(a)for(A=a.length-1;A>=0;A--)b=r.g=a[A],E=Je(b,h,!0,r)&&E;if(b=r.g=e,E=Je(b,h,!0,r)&&E,E=Je(b,h,!1,r)&&E,a)for(A=0;A<a.length;A++)b=r.g=a[A],E=Je(b,h,!1,r)&&E}K.prototype.N=function(){if(K.Z.N.call(this),this.i){var e=this.i;for(const r in e.g){const a=e.g[r];for(let h=0;h<a.length;h++)qe(a[h]);delete e.g[r],e.h--}}this.G=null},K.prototype.J=function(e,r,a,h){return this.i.add(String(e),r,!1,a,h)},K.prototype.K=function(e,r,a,h){return this.i.add(String(e),r,!0,a,h)};function Je(e,r,a,h){if(r=e.i.g[String(r)],!r)return!0;r=r.concat();let E=!0;for(let b=0;b<r.length;++b){const A=r[b];if(A&&!A.da&&A.capture==a){const P=A.listener,H=A.ha||A.src;A.fa&&In(e.i,A),E=P.call(H,h)!==!1&&E}}return E&&!h.defaultPrevented}function Vo(e,r){if(typeof e!="function")if(e&&typeof e.handleEvent=="function")e=v(e.handleEvent,e);else throw Error("Invalid listener argument");return Number(r)>2147483647?-1:l.setTimeout(e,r||0)}function Gs(e){e.g=Vo(()=>{e.g=null,e.i&&(e.i=!1,Gs(e))},e.l);const r=e.h;e.h=null,e.m.apply(null,r)}class Bo extends m{constructor(r,a){super(),this.m=r,this.l=a,this.h=null,this.i=!1,this.g=null}j(r){this.h=arguments,this.g?this.i=!0:Gs(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function me(e){m.call(this),this.h=e,this.g={}}I(me,m);var qs=[];function zs(e){ze(e.g,function(r,a){this.g.hasOwnProperty(a)&&Cn(r)},e),e.g={}}me.prototype.N=function(){me.Z.N.call(this),zs(this)},me.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pn=l.JSON.stringify,Ho=l.JSON.parse,Go=class{stringify(e){return l.JSON.stringify(e,void 0)}parse(e){return l.JSON.parse(e,void 0)}};function Ws(){}function qo(){}var ye={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Dn(){g.call(this,"d")}I(Dn,g);function kn(){g.call(this,"c")}I(kn,g);var ie={},Js=null;function Nn(){return Js=Js||new K}ie.Ia="serverreachability";function Ks(e){g.call(this,ie.Ia,e)}I(Ks,g);function we(e){const r=Nn();Y(r,new Ks(r))}ie.STAT_EVENT="statevent";function Ys(e,r){g.call(this,ie.STAT_EVENT,e),this.stat=r}I(Ys,g);function X(e){const r=Nn();Y(r,new Ys(r,e))}ie.Ja="timingevent";function Xs(e,r){g.call(this,ie.Ja,e),this.size=r}I(Xs,g);function _e(e,r){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){e()},r)}function Ee(){this.g=!0}Ee.prototype.ua=function(){this.g=!1};function zo(e,r,a,h,E,b){e.info(function(){if(e.g)if(b){var A="",P=b.split("&");for(let j=0;j<P.length;j++){var H=P[j].split("=");if(H.length>1){const q=H[0];H=H[1];const mt=q.split("_");A=mt.length>=2&&mt[1]=="type"?A+(q+"="+H+"&"):A+(q+"=redacted&")}}}else A=null;else A=b;return"XMLHTTP REQ ("+h+") [attempt "+E+"]: "+r+"\n"+a+"\n"+A})}function Wo(e,r,a,h,E,b,A){e.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+E+"]: "+r+"\n"+a+"\n"+b+" "+A})}function re(e,r,a,h){e.info(function(){return"XMLHTTP TEXT ("+r+"): "+Ko(e,a)+(h?" "+h:"")})}function Jo(e,r){e.info(function(){return"TIMEOUT: "+r})}Ee.prototype.info=function(){};function Ko(e,r){if(!e.g)return r;if(!r)return null;try{const b=JSON.parse(r);if(b){for(e=0;e<b.length;e++)if(Array.isArray(b[e])){var a=b[e];if(!(a.length<2)){var h=a[1];if(Array.isArray(h)&&!(h.length<1)){var E=h[0];if(E!="noop"&&E!="stop"&&E!="close")for(let A=1;A<h.length;A++)h[A]=""}}}}return Pn(b)}catch(b){return r}}var Ln={NO_ERROR:0,TIMEOUT:8},Yo={},Zs;function Mn(){}I(Mn,Ws),Mn.prototype.g=function(){return new XMLHttpRequest},Zs=new Mn;function be(e){return encodeURIComponent(String(e))}function Xo(e){var r=1;e=e.split(":");const a=[];for(;r>0&&e.length;)a.push(e.shift()),r--;return e.length&&a.push(e.join(":")),a}function Rt(e,r,a,h){this.j=e,this.i=r,this.l=a,this.S=h||1,this.V=new me(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Qs}function Qs(){this.i=null,this.g="",this.h=!1}var ti={},xn={};function Fn(e,r,a){e.M=1,e.A=Ye(gt(r)),e.u=a,e.R=!0,ei(e,null)}function ei(e,r){e.F=Date.now(),Ke(e),e.B=gt(e.A);var a=e.B,h=e.S;Array.isArray(h)||(h=[String(h)]),pi(a.i,"t",h),e.C=0,a=e.j.L,e.h=new Qs,e.g=ki(e.j,a?r:null,!e.u),e.P>0&&(e.O=new Bo(v(e.Y,e,e.g),e.P)),r=e.V,a=e.g,h=e.ba;var E="readystatechange";Array.isArray(E)||(E&&(qs[0]=E.toString()),E=qs);for(let b=0;b<E.length;b++){const A=$s(a,E[b],h||r.handleEvent,!1,r.h||r);if(!A)break;r.g[A.key]=A}r=e.J?Fs(e.J):{},e.u?(e.v||(e.v="POST"),r["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.B,e.v,e.u,r)):(e.v="GET",e.g.ea(e.B,e.v,null,r)),we(),zo(e.i,e.v,e.B,e.l,e.S,e.u)}Rt.prototype.ba=function(e){e=e.target;const r=this.O;r&&Dt(e)==3?r.j():this.Y(e)},Rt.prototype.Y=function(e){try{if(e==this.g)t:{const P=Dt(this.g),H=this.g.ya(),j=this.g.ca();if(!(P<3)&&(P!=3||this.g&&(this.h.h||this.g.la()||bi(this.g)))){this.K||P!=4||H==7||(H==8||j<=0?we(3):we(2)),jn(this);var r=this.g.ca();this.X=r;var a=Zo(this);if(this.o=r==200,Wo(this.i,this.v,this.B,this.l,this.S,P,r),this.o){if(this.U&&!this.L){e:{if(this.g){var h,E=this.g;if((h=E.g?E.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!f(h)){var b=h;break e}}b=null}if(e=b)re(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Un(this,e);else{this.o=!1,this.m=3,X(12),$t(this),ve(this);break t}}if(this.R){e=!0;let q;for(;!this.K&&this.C<a.length;)if(q=Qo(this,a),q==xn){P==4&&(this.m=4,X(14),e=!1),re(this.i,this.l,null,"[Incomplete Response]");break}else if(q==ti){this.m=4,X(15),re(this.i,this.l,a,"[Invalid Chunk]"),e=!1;break}else re(this.i,this.l,q,null),Un(this,q);if(ni(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),P!=4||a.length!=0||this.h.h||(this.m=1,X(16),e=!1),this.o=this.o&&e,!e)re(this.i,this.l,a,"[Invalid Chunked Response]"),$t(this),ve(this);else if(a.length>0&&!this.W){this.W=!0;var A=this.j;A.g==this&&A.aa&&!A.P&&(A.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),Wn(A),A.P=!0,X(11))}}else re(this.i,this.l,a,null),Un(this,a);P==4&&$t(this),this.o&&!this.K&&(P==4?Ri(this.j,this):(this.o=!1,Ke(this)))}else da(this.g),r==400&&a.indexOf("Unknown SID")>0?(this.m=3,X(12)):(this.m=0,X(13)),$t(this),ve(this)}}}catch(P){}finally{}};function Zo(e){if(!ni(e))return e.g.la();const r=bi(e.g);if(r==="")return"";let a="";const h=r.length,E=Dt(e.g)==4;if(!e.h.i){if(typeof TextDecoder>"u")return $t(e),ve(e),"";e.h.i=new l.TextDecoder}for(let b=0;b<h;b++)e.h.h=!0,a+=e.h.i.decode(r[b],{stream:!(E&&b==h-1)});return r.length=0,e.h.g+=a,e.C=0,e.h.g}function ni(e){return e.g?e.v=="GET"&&e.M!=2&&e.j.Aa:!1}function Qo(e,r){var a=e.C,h=r.indexOf("\n",a);return h==-1?xn:(a=Number(r.substring(a,h)),isNaN(a)?ti:(h+=1,h+a>r.length?xn:(r=r.slice(h,h+a),e.C=h+a,r)))}Rt.prototype.cancel=function(){this.K=!0,$t(this)};function Ke(e){e.T=Date.now()+e.H,si(e,e.H)}function si(e,r){if(e.D!=null)throw Error("WatchDog timer not null");e.D=_e(v(e.aa,e),r)}function jn(e){e.D&&(l.clearTimeout(e.D),e.D=null)}Rt.prototype.aa=function(){this.D=null;const e=Date.now();e-this.T>=0?(Jo(this.i,this.B),this.M!=2&&(we(),X(17)),$t(this),this.m=2,ve(this)):si(this,this.T-e)};function ve(e){e.j.I==0||e.K||Ri(e.j,e)}function $t(e){jn(e);var r=e.O;r&&typeof r.dispose=="function"&&r.dispose(),e.O=null,zs(e.V),e.g&&(r=e.g,e.g=null,r.abort(),r.dispose())}function Un(e,r){try{var a=e.j;if(a.I!=0&&(a.g==e||$n(a.h,e))){if(!e.L&&$n(a.h,e)&&a.I==3){try{var h=a.Ba.g.parse(r)}catch(j){h=null}if(Array.isArray(h)&&h.length==3){var E=h;if(E[0]==0){t:if(!a.v){if(a.g)if(a.g.F+3e3<e.F)en(a),Qe(a);else break t;zn(a),X(18)}}else a.xa=E[1],0<a.xa-a.K&&E[2]<37500&&a.F&&a.A==0&&!a.C&&(a.C=_e(v(a.Va,a),6e3));oi(a.h)<=1&&a.ta&&(a.ta=void 0)}else Bt(a,11)}else if((e.L||a.g==e)&&en(a),!f(r))for(E=a.Ba.g.parse(r),r=0;r<E.length;r++){let j=E[r];const q=j[0];if(!(q<=a.K))if(a.K=q,j=j[1],a.I==2)if(j[0]=="c"){a.M=j[1],a.ba=j[2];const mt=j[3];mt!=null&&(a.ka=mt,a.j.info("VER="+a.ka));const Ht=j[4];Ht!=null&&(a.za=Ht,a.j.info("SVER="+a.za));const kt=j[5];kt!=null&&typeof kt=="number"&&kt>0&&(h=1.5*kt,a.O=h,a.j.info("backChannelRequestTimeoutMs_="+h)),h=a;const Nt=e.g;if(Nt){const nn=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(nn){var b=h.h;b.g||nn.indexOf("spdy")==-1&&nn.indexOf("quic")==-1&&nn.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Vn(b,b.h),b.h=null))}if(h.G){const Jn=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;Jn&&(h.wa=Jn,U(h.J,h.G,Jn))}}a.I=3,a.l&&a.l.ra(),a.aa&&(a.T=Date.now()-e.F,a.j.info("Handshake RTT: "+a.T+"ms")),h=a;var A=e;if(h.na=Di(h,h.L?h.ba:null,h.W),A.L){ai(h.h,A);var P=A,H=h.O;H&&(P.H=H),P.D&&(jn(P),Ke(P)),h.g=A}else Ti(h);a.i.length>0&&tn(a)}else j[0]!="stop"&&j[0]!="close"||Bt(a,7);else a.I==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?Bt(a,7):qn(a):j[0]!="noop"&&a.l&&a.l.qa(j),a.A=0)}}we(4)}catch(j){}}var ta=class{constructor(e,r){this.g=e,this.map=r}};function ii(e){this.l=e||10,l.PerformanceNavigationTiming?(e=l.performance.getEntriesByType("navigation"),e=e.length>0&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ri(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function oi(e){return e.h?1:e.g?e.g.size:0}function $n(e,r){return e.h?e.h==r:e.g?e.g.has(r):!1}function Vn(e,r){e.g?e.g.add(r):e.h=r}function ai(e,r){e.h&&e.h==r?e.h=null:e.g&&e.g.has(r)&&e.g.delete(r)}ii.prototype.cancel=function(){if(this.i=ci(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function ci(e){if(e.h!=null)return e.i.concat(e.h.G);if(e.g!=null&&e.g.size!==0){let r=e.i;for(const a of e.g.values())r=r.concat(a.G);return r}return O(e.i)}var li=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ea(e,r){if(e){e=e.split("&");for(let a=0;a<e.length;a++){const h=e[a].indexOf("=");let E,b=null;h>=0?(E=e[a].substring(0,h),b=e[a].substring(h+1)):E=e[a],r(E,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Ot(e){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let r;e instanceof Ot?(this.l=e.l,Ie(this,e.j),this.o=e.o,this.g=e.g,Se(this,e.u),this.h=e.h,Bn(this,gi(e.i)),this.m=e.m):e&&(r=String(e).match(li))?(this.l=!1,Ie(this,r[1]||"",!0),this.o=Ae(r[2]||""),this.g=Ae(r[3]||"",!0),Se(this,r[4]),this.h=Ae(r[5]||"",!0),Bn(this,r[6]||"",!0),this.m=Ae(r[7]||"")):(this.l=!1,this.i=new Ce(null,this.l))}Ot.prototype.toString=function(){const e=[];var r=this.j;r&&e.push(Te(r,hi,!0),":");var a=this.g;return(a||r=="file")&&(e.push("//"),(r=this.o)&&e.push(Te(r,hi,!0),"@"),e.push(be(a).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.u,a!=null&&e.push(":",String(a))),(a=this.h)&&(this.g&&a.charAt(0)!="/"&&e.push("/"),e.push(Te(a,a.charAt(0)=="/"?ia:sa,!0))),(a=this.i.toString())&&e.push("?",a),(a=this.m)&&e.push("#",Te(a,oa)),e.join("")},Ot.prototype.resolve=function(e){const r=gt(this);let a=!!e.j;a?Ie(r,e.j):a=!!e.o,a?r.o=e.o:a=!!e.g,a?r.g=e.g:a=e.u!=null;var h=e.h;if(a)Se(r,e.u);else if(a=!!e.h){if(h.charAt(0)!="/")if(this.g&&!this.h)h="/"+h;else{var E=r.h.lastIndexOf("/");E!=-1&&(h=r.h.slice(0,E+1)+h)}if(E=h,E==".."||E==".")h="";else if(E.indexOf("./")!=-1||E.indexOf("/.")!=-1){h=E.lastIndexOf("/",0)==0,E=E.split("/");const b=[];for(let A=0;A<E.length;){const P=E[A++];P=="."?h&&A==E.length&&b.push(""):P==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),h&&A==E.length&&b.push("")):(b.push(P),h=!0)}h=b.join("/")}else h=E}return a?r.h=h:a=e.i.toString()!=="",a?Bn(r,gi(e.i)):a=!!e.m,a&&(r.m=e.m),r};function gt(e){return new Ot(e)}function Ie(e,r,a){e.j=a?Ae(r,!0):r,e.j&&(e.j=e.j.replace(/:$/,""))}function Se(e,r){if(r){if(r=Number(r),isNaN(r)||r<0)throw Error("Bad port number "+r);e.u=r}else e.u=null}function Bn(e,r,a){r instanceof Ce?(e.i=r,aa(e.i,e.l)):(a||(r=Te(r,ra)),e.i=new Ce(r,e.l))}function U(e,r,a){e.i.set(r,a)}function Ye(e){return U(e,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),e}function Ae(e,r){return e?r?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Te(e,r,a){return typeof e=="string"?(e=encodeURI(e).replace(r,na),a&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function na(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var hi=/[#\/\?@]/g,sa=/[#\?:]/g,ia=/[#\?]/g,ra=/[#\?@]/g,oa=/#/g;function Ce(e,r){this.h=this.g=null,this.i=e||null,this.j=!!r}function Vt(e){e.g||(e.g=new Map,e.h=0,e.i&&ea(e.i,function(r,a){e.add(decodeURIComponent(r.replace(/\+/g," ")),a)}))}n=Ce.prototype,n.add=function(e,r){Vt(this),this.i=null,e=oe(this,e);let a=this.g.get(e);return a||this.g.set(e,a=[]),a.push(r),this.h+=1,this};function ui(e,r){Vt(e),r=oe(e,r),e.g.has(r)&&(e.i=null,e.h-=e.g.get(r).length,e.g.delete(r))}function fi(e,r){return Vt(e),r=oe(e,r),e.g.has(r)}n.forEach=function(e,r){Vt(this),this.g.forEach(function(a,h){a.forEach(function(E){e.call(r,E,h,this)},this)},this)};function di(e,r){Vt(e);let a=[];if(typeof r=="string")fi(e,r)&&(a=a.concat(e.g.get(oe(e,r))));else for(e=Array.from(e.g.values()),r=0;r<e.length;r++)a=a.concat(e[r]);return a}n.set=function(e,r){return Vt(this),this.i=null,e=oe(this,e),fi(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[r]),this.h+=1,this},n.get=function(e,r){return e?(e=di(this,e),e.length>0?String(e[0]):r):r};function pi(e,r,a){ui(e,r),a.length>0&&(e.i=null,e.g.set(oe(e,r),O(a)),e.h+=a.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],r=Array.from(this.g.keys());for(let h=0;h<r.length;h++){var a=r[h];const E=be(a);a=di(this,a);for(let b=0;b<a.length;b++){let A=E;a[b]!==""&&(A+="="+be(a[b])),e.push(A)}}return this.i=e.join("&")};function gi(e){const r=new Ce;return r.i=e.i,e.g&&(r.g=new Map(e.g),r.h=e.h),r}function oe(e,r){return r=String(r),e.j&&(r=r.toLowerCase()),r}function aa(e,r){r&&!e.j&&(Vt(e),e.i=null,e.g.forEach(function(a,h){const E=h.toLowerCase();h!=E&&(ui(this,h),pi(this,E,a))},e)),e.j=r}function ca(e,r){const a=new Ee;if(l.Image){const h=new Image;h.onload=T(Pt,a,"TestLoadImage: loaded",!0,r,h),h.onerror=T(Pt,a,"TestLoadImage: error",!1,r,h),h.onabort=T(Pt,a,"TestLoadImage: abort",!1,r,h),h.ontimeout=T(Pt,a,"TestLoadImage: timeout",!1,r,h),l.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=e}else r(!1)}function la(e,r){const a=new Ee,h=new AbortController,E=setTimeout(()=>{h.abort(),Pt(a,"TestPingServer: timeout",!1,r)},1e4);fetch(e,{signal:h.signal}).then(b=>{clearTimeout(E),b.ok?Pt(a,"TestPingServer: ok",!0,r):Pt(a,"TestPingServer: server error",!1,r)}).catch(()=>{clearTimeout(E),Pt(a,"TestPingServer: error",!1,r)})}function Pt(e,r,a,h,E){try{E&&(E.onload=null,E.onerror=null,E.onabort=null,E.ontimeout=null),h(a)}catch(b){}}function ha(){this.g=new Go}function Hn(e){this.i=e.Sb||null,this.h=e.ab||!1}I(Hn,Ws),Hn.prototype.g=function(){return new Xe(this.i,this.h)};function Xe(e,r){K.call(this),this.H=e,this.o=r,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(Xe,K),n=Xe.prototype,n.open=function(e,r){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=e,this.D=r,this.readyState=1,Oe(this)},n.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const r={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};e&&(r.body=e),(this.H||l).fetch(new Request(this.D,r)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Re(this)),this.readyState=0},n.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Oe(this)),this.g&&(this.readyState=3,Oe(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;mi(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))};function mi(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}n.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var r=e.value?e.value:new Uint8Array(0);(r=this.B.decode(r,{stream:!e.done}))&&(this.response=this.responseText+=r)}e.done?Re(this):Oe(this),this.readyState==3&&mi(this)}},n.Oa=function(e){this.g&&(this.response=this.responseText=e,Re(this))},n.Na=function(e){this.g&&(this.response=e,Re(this))},n.ga=function(){this.g&&Re(this)};function Re(e){e.readyState=4,e.l=null,e.j=null,e.B=null,Oe(e)}n.setRequestHeader=function(e,r){this.A.append(e,r)},n.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],r=this.h.entries();for(var a=r.next();!a.done;)a=a.value,e.push(a[0]+": "+a[1]),a=r.next();return e.join("\r\n")};function Oe(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Xe.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});function yi(e){let r="";return ze(e,function(a,h){r+=h,r+=":",r+=a,r+="\r\n"}),r}function Gn(e,r,a){t:{for(h in a){var h=!1;break t}h=!0}h||(a=yi(a),typeof e=="string"?a!=null&&be(a):U(e,r,a))}function $(e){K.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I($,K);var ua=/^https?$/i,fa=["POST","PUT"];n=$.prototype,n.Fa=function(e){this.H=e},n.ea=function(e,r,a,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);r=r?r.toUpperCase():"GET",this.D=e,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Zs.g(),this.g.onreadystatechange=S(v(this.Ca,this));try{this.B=!0,this.g.open(r,String(e),!0),this.B=!1}catch(b){wi(this,b);return}if(e=a||"",a=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var E in h)a.set(E,h[E]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const b of h.keys())a.set(b,h.get(b));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(a.keys()).find(b=>b.toLowerCase()=="content-type"),E=l.FormData&&e instanceof l.FormData,!(Array.prototype.indexOf.call(fa,r,void 0)>=0)||h||E||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,A]of a)this.g.setRequestHeader(b,A);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(e),this.v=!1}catch(b){wi(this,b)}};function wi(e,r){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=r,e.o=5,_i(e),Ze(e)}function _i(e){e.A||(e.A=!0,Y(e,"complete"),Y(e,"error"))}n.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,Y(this,"complete"),Y(this,"abort"),Ze(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ze(this,!0)),$.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ei(this):this.Xa())},n.Xa=function(){Ei(this)};function Ei(e){if(e.h&&typeof c<"u"){if(e.v&&Dt(e)==4)setTimeout(e.Ca.bind(e),0);else if(Y(e,"readystatechange"),Dt(e)==4){e.h=!1;try{const b=e.ca();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}var a;if(!(a=r)){var h;if(h=b===0){let A=String(e.D).match(li)[1]||null;!A&&l.self&&l.self.location&&(A=l.self.location.protocol.slice(0,-1)),h=!ua.test(A?A.toLowerCase():"")}a=h}if(a)Y(e,"complete"),Y(e,"success");else{e.o=6;try{var E=Dt(e)>2?e.g.statusText:""}catch(A){E=""}e.l=E+" ["+e.ca()+"]",_i(e)}}finally{Ze(e)}}}}function Ze(e,r){if(e.g){e.m&&(clearTimeout(e.m),e.m=null);const a=e.g;e.g=null,r||Y(e,"ready");try{a.onreadystatechange=null}catch(h){}}}n.isActive=function(){return!!this.g};function Dt(e){return e.g?e.g.readyState:0}n.ca=function(){try{return Dt(this)>2?this.g.status:-1}catch(e){return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},n.La=function(e){if(this.g){var r=this.g.responseText;return e&&r.indexOf(e)==0&&(r=r.substring(e.length)),Ho(r)}};function bi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.F){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(r){return null}}function da(e){const r={};e=(e.g&&Dt(e)>=2&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let h=0;h<e.length;h++){if(f(e[h]))continue;var a=Xo(e[h]);const E=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const b=r[E]||[];r[E]=b,b.push(a)}Fo(r,function(h){return h.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pe(e,r,a){return a&&a.internalChannelParams&&a.internalChannelParams[e]||r}function vi(e){this.za=0,this.i=[],this.j=new Ee,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Pe("failFast",!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Pe("baseRetryDelayMs",5e3,e),this.Za=Pe("retryDelaySeedMs",1e4,e),this.Ta=Pe("forwardChannelMaxRetries",2,e),this.va=Pe("forwardChannelRequestTimeoutMs",2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M="",this.h=new ii(e&&e.concurrentRequestLimit),this.Ba=new ha,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=vi.prototype,n.ka=8,n.I=1,n.connect=function(e,r,a,h){X(0),this.W=e,this.H=r||{},a&&h!==void 0&&(this.H.OSID=a,this.H.OAID=h),this.F=this.X,this.J=Di(this,null,this.W),tn(this)};function qn(e){if(Ii(e),e.I==3){var r=e.V++,a=gt(e.J);if(U(a,"SID",e.M),U(a,"RID",r),U(a,"TYPE","terminate"),De(e,a),r=new Rt(e,e.j,r),r.M=2,r.A=Ye(gt(a)),a=!1,l.navigator&&l.navigator.sendBeacon)try{a=l.navigator.sendBeacon(r.A.toString(),"")}catch(h){}!a&&l.Image&&(new Image().src=r.A,a=!0),a||(r.g=ki(r.j,null),r.g.ea(r.A)),r.F=Date.now(),Ke(r)}Pi(e)}function Qe(e){e.g&&(Wn(e),e.g.cancel(),e.g=null)}function Ii(e){Qe(e),e.v&&(l.clearTimeout(e.v),e.v=null),en(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&l.clearTimeout(e.m),e.m=null)}function tn(e){if(!ri(e.h)&&!e.m){e.m=!0;var r=e.Ea;ut||u(),st||(ut(),st=!0),y.add(r,e),e.D=0}}function pa(e,r){return oi(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=r.G.concat(e.i),!0):e.I==1||e.I==2||e.D>=(e.Sa?0:e.Ta)?!1:(e.m=_e(v(e.Ea,e,r),Oi(e,e.D)),e.D++,!0)}n.Ea=function(e){if(this.m)if(this.m=null,this.I==1){if(!e){this.V=Math.floor(Math.random()*1e5),e=this.V++;const E=new Rt(this,this.j,e);let b=this.o;if(this.U&&(b?(b=Fs(b),Us(b,this.U)):b=this.U),this.u!==null||this.R||(E.J=b,b=null),this.S)t:{for(var r=0,a=0;a<this.i.length;a++){e:{var h=this.i[a];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(r+=h,r>4096){r=a;break t}if(r===4096||a===this.i.length-1){r=a+1;break t}}r=1e3}else r=1e3;r=Ai(this,E,r),a=gt(this.J),U(a,"RID",e),U(a,"CVER",22),this.G&&U(a,"X-HTTP-Session-Id",this.G),De(this,a),b&&(this.R?r="headers="+be(yi(b))+"&"+r:this.u&&Gn(a,this.u,b)),Vn(this.h,E),this.Ra&&U(a,"TYPE","init"),this.S?(U(a,"$req",r),U(a,"SID","null"),E.U=!0,Fn(E,a,null)):Fn(E,a,r),this.I=2}}else this.I==3&&(e?Si(this,e):this.i.length==0||ri(this.h)||Si(this))};function Si(e,r){var a;r?a=r.l:a=e.V++;const h=gt(e.J);U(h,"SID",e.M),U(h,"RID",a),U(h,"AID",e.K),De(e,h),e.u&&e.o&&Gn(h,e.u,e.o),a=new Rt(e,e.j,a,e.D+1),e.u===null&&(a.J=e.o),r&&(e.i=r.G.concat(e.i)),r=Ai(e,a,1e3),a.H=Math.round(e.va*.5)+Math.round(e.va*.5*Math.random()),Vn(e.h,a),Fn(a,h,r)}function De(e,r){e.H&&ze(e.H,function(a,h){U(r,h,a)}),e.l&&ze({},function(a,h){U(r,h,a)})}function Ai(e,r,a){a=Math.min(e.i.length,a);const h=e.l?v(e.l.Ka,e.l,e):null;t:{var E=e.i;let P=-1;for(;;){const H=["count="+a];P==-1?a>0?(P=E[0].g,H.push("ofs="+P)):P=0:H.push("ofs="+P);let j=!0;for(let q=0;q<a;q++){var b=E[q].g;const mt=E[q].map;if(b-=P,b<0)P=Math.max(0,E[q].g-100),j=!1;else try{b="req"+b+"_"||"";try{var A=mt instanceof Map?mt:Object.entries(mt);for(const[Ht,kt]of A){let Nt=kt;p(kt)&&(Nt=Pn(kt)),H.push(b+Ht+"="+encodeURIComponent(Nt))}}catch(Ht){throw H.push(b+"type="+encodeURIComponent("_badmap")),Ht}}catch(Ht){h&&h(mt)}}if(j){A=H.join("&");break t}}A=void 0}return e=e.i.splice(0,a),r.G=e,A}function Ti(e){if(!e.g&&!e.v){e.Y=1;var r=e.Da;ut||u(),st||(ut(),st=!0),y.add(r,e),e.A=0}}function zn(e){return e.g||e.v||e.A>=3?!1:(e.Y++,e.v=_e(v(e.Da,e),Oi(e,e.A)),e.A++,!0)}n.Da=function(){if(this.v=null,Ci(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var e=4*this.T;this.j.info("BP detection timer enabled: "+e),this.B=_e(v(this.Wa,this),e)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,X(10),Qe(this),Ci(this))};function Wn(e){e.B!=null&&(l.clearTimeout(e.B),e.B=null)}function Ci(e){e.g=new Rt(e,e.j,"rpc",e.Y),e.u===null&&(e.g.J=e.o),e.g.P=0;var r=gt(e.na);U(r,"RID","rpc"),U(r,"SID",e.M),U(r,"AID",e.K),U(r,"CI",e.F?"0":"1"),!e.F&&e.ia&&U(r,"TO",e.ia),U(r,"TYPE","xmlhttp"),De(e,r),e.u&&e.o&&Gn(r,e.u,e.o),e.O&&(e.g.H=e.O);var a=e.g;e=e.ba,a.M=1,a.A=Ye(gt(r)),a.u=null,a.R=!0,ei(a,e)}n.Va=function(){this.C!=null&&(this.C=null,Qe(this),zn(this),X(19))};function en(e){e.C!=null&&(l.clearTimeout(e.C),e.C=null)}function Ri(e,r){var a=null;if(e.g==r){en(e),Wn(e),e.g=null;var h=2}else if($n(e.h,r))a=r.G,ai(e.h,r),h=1;else return;if(e.I!=0){if(r.o)if(h==1){a=r.u?r.u.length:0,r=Date.now()-r.F;var E=e.D;h=Nn(),Y(h,new Xs(h,a)),tn(e)}else Ti(e);else if(E=r.m,E==3||E==0&&r.X>0||!(h==1&&pa(e,r)||h==2&&zn(e)))switch(a&&a.length>0&&(r=e.h,r.i=r.i.concat(a)),E){case 1:Bt(e,5);break;case 4:Bt(e,10);break;case 3:Bt(e,6);break;default:Bt(e,2)}}}function Oi(e,r){let a=e.Qa+Math.floor(Math.random()*e.Za);return e.isActive()||(a*=2),a*r}function Bt(e,r){if(e.j.info("Error code "+r),r==2){var a=v(e.bb,e),h=e.Ua;const E=!h;h=new Ot(h||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ie(h,"https"),Ye(h),E?ca(h.toString(),a):la(h.toString(),a)}else X(2);e.I=0,e.l&&e.l.pa(r),Pi(e),Ii(e)}n.bb=function(e){e?(this.j.info("Successfully pinged google.com"),X(2)):(this.j.info("Failed to ping google.com"),X(1))};function Pi(e){if(e.I=0,e.ja=[],e.l){const r=ci(e.h);(r.length!=0||e.i.length!=0)&&(D(e.ja,r),D(e.ja,e.i),e.h.i.length=0,O(e.i),e.i.length=0),e.l.oa()}}function Di(e,r,a){var h=a instanceof Ot?gt(a):new Ot(a);if(h.g!="")r&&(h.g=r+"."+h.g),Se(h,h.u);else{var E=l.location;h=E.protocol,r=r?r+"."+E.hostname:E.hostname,E=+E.port;const b=new Ot(null);h&&Ie(b,h),r&&(b.g=r),E&&Se(b,E),a&&(b.h=a),h=b}return a=e.G,r=e.wa,a&&r&&U(h,a,r),U(h,"VER",e.ka),De(e,h),h}function ki(e,r,a){if(r&&!e.L)throw Error("Can't create secondary domain capable XhrIo object.");return r=e.Aa&&!e.ma?new $(new Hn({ab:a})):new $(e.ma),r.Fa(e.L),r}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ni(){}n=Ni.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function at(e,r){K.call(this),this.g=new vi(r),this.l=e,this.h=r&&r.messageUrlParams||null,e=r&&r.messageHeaders||null,r&&r.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=r&&r.initMessageHeaders||null,r&&r.messageContentType&&(e?e["X-WebChannel-Content-Type"]=r.messageContentType:e={"X-WebChannel-Content-Type":r.messageContentType}),r&&r.sa&&(e?e["X-WebChannel-Client-Profile"]=r.sa:e={"X-WebChannel-Client-Profile":r.sa}),this.g.U=e,(e=r&&r.Qb)&&!f(e)&&(this.g.u=e),this.A=r&&r.supportsCrossDomainXhr||!1,this.v=r&&r.sendRawJson||!1,(r=r&&r.httpSessionIdParam)&&!f(r)&&(this.g.G=r,e=this.h,e!==null&&r in e&&(e=this.h,r in e&&delete e[r])),this.j=new ae(this)}I(at,K),at.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},at.prototype.close=function(){qn(this.g)},at.prototype.o=function(e){var r=this.g;if(typeof e=="string"){var a={};a.__data__=e,e=a}else this.v&&(a={},a.__data__=Pn(e),e=a);r.i.push(new ta(r.Ya++,e)),r.I==3&&tn(r)},at.prototype.N=function(){this.g.l=null,delete this.j,qn(this.g),delete this.g,at.Z.N.call(this)};function Li(e){Dn.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var r=e.__sm__;if(r){t:{for(const a in r){e=a;break t}e=void 0}(this.i=e)&&(e=this.i,r=r!==null&&e in r?r[e]:void 0),this.data=r}else this.data=e}I(Li,Dn);function Mi(){kn.call(this),this.status=1}I(Mi,kn);function ae(e){this.g=e}I(ae,Ni),ae.prototype.ra=function(){Y(this.g,"a")},ae.prototype.qa=function(e){Y(this.g,new Li(e))},ae.prototype.pa=function(e){Y(this.g,new Mi)},ae.prototype.oa=function(){Y(this.g,"b")},at.prototype.send=at.prototype.o,at.prototype.open=at.prototype.m,at.prototype.close=at.prototype.close,Ln.NO_ERROR=0,Ln.TIMEOUT=8,Ln.HTTP_ERROR=6,Yo.COMPLETE="complete",qo.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",K.prototype.listen=K.prototype.J,$.prototype.listenOnce=$.prototype.K,$.prototype.getLastError=$.prototype.Ha,$.prototype.getLastErrorCode=$.prototype.ya,$.prototype.getStatus=$.prototype.ca,$.prototype.getResponseJson=$.prototype.La,$.prototype.getResponseText=$.prototype.la,$.prototype.send=$.prototype.ea,$.prototype.setWithCredentials=$.prototype.Fa}).apply(typeof on<"u"?on:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let He="12.9.0";function wh(n){He=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=new _n("@firebase/firestore");function pt(n,...t){if(pe.logLevel<=F.DEBUG){const s=t.map(Ts);pe.debug("Firestore (".concat(He,"): ").concat(n),...s)}}function ro(n,...t){if(pe.logLevel<=F.ERROR){const s=t.map(Ts);pe.error("Firestore (".concat(He,"): ").concat(n),...s)}}function _h(n,...t){if(pe.logLevel<=F.WARN){const s=t.map(Ts);pe.warn("Firestore (".concat(He,"): ").concat(n),...s)}}function Ts(n){if(typeof n=="string")return n;try{return function(s){return JSON.stringify(s)}(n)}catch(t){return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(n,t,s){let i="Unexpected state";typeof t=="string"?i=t:s=t,oo(n,i,s)}function oo(n,t,s){let i="FIRESTORE (".concat(He,") INTERNAL ASSERTION FAILED: ").concat(t," (ID: ").concat(n.toString(16),")");if(s!==void 0)try{i+=" CONTEXT: "+JSON.stringify(s)}catch(o){i+=" CONTEXT: "+s}throw ro(i),new Error(i)}function xe(n,t,s,i){let o="Unexpected state";typeof s=="string"?o=s:i=s,n||oo(t,o,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class x extends Tt{constructor(t,s){super(t,s),this.code=t,this.message=s,this.toString=()=>"".concat(this.name,": [code=").concat(this.code,"]: ").concat(this.message)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(){this.promise=new Promise((t,s)=>{this.resolve=t,this.reject=s})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(t,s){this.user=s,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(t))}}class Eh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,s){t.enqueueRetryable(()=>s(tt.UNAUTHENTICATED))}shutdown(){}}class bh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,s){this.changeListener=s,t.enqueueRetryable(()=>s(this.token.user))}shutdown(){this.changeListener=null}}class vh{constructor(t){this.t=t,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,s){xe(this.o===void 0,42304);let i=this.i;const o=_=>this.i!==i?(i=this.i,s(_)):Promise.resolve();let c=new Fe;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Fe,t.enqueueRetryable(()=>o(this.currentUser))};const l=()=>{const _=c;t.enqueueRetryable(async()=>{await _.promise,await o(this.currentUser)})},p=_=>{pt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(_=>p(_)),setTimeout(()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?p(_):(pt("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Fe)}},0),l()}getToken(){const t=this.i,s=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(s).then(i=>this.i!==t?(pt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(xe(typeof i.accessToken=="string",31837,{l:i}),new ao(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return xe(t===null||typeof t=="string",2055,{h:t}),new tt(t)}}class Ih{constructor(t,s,i){this.P=t,this.T=s,this.I=i,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Sh{constructor(t,s,i){this.P=t,this.T=s,this.I=i}getToken(){return Promise.resolve(new Ih(this.P,this.T,this.I))}start(t,s){t.enqueueRetryable(()=>s(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ah{constructor(t,s){this.V=s,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wr(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,s){xe(this.o===void 0,3512);const i=c=>{c.error!=null&&pt("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: ".concat(c.error.message));const l=c.token!==this.m;return this.m=c.token,pt("FirebaseAppCheckTokenProvider","Received ".concat(l?"new":"existing"," token.")),l?s(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable(()=>i(c))};const o=c=>{pt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):pt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new pr(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(s=>s?(xe(typeof s.token=="string",44558,{tokenResult:s}),this.m=s.token,new pr(s.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),s=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(s);else for(let i=0;i<n;i++)s[i]=Math.floor(256*Math.random());return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=Th(40);for(let c=0;c<o.length;++c)i.length<20&&o[c]<s&&(i+=t.charAt(o[c]%62))}return i}}function Ut(n,t){return n<t?-1:n>t?1:0}function Rh(n,t){const s=Math.min(n.length,t.length);for(let i=0;i<s;i++){const o=n.charAt(i),c=t.charAt(i);if(o!==c)return ss(o)===ss(c)?Ut(o,c):ss(o)?1:-1}return Ut(n.length,t.length)}const Oh=55296,Ph=57343;function ss(n){const t=n.charCodeAt(0);return t>=Oh&&t<=Ph}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr="__name__";class yt{constructor(t,s,i){s===void 0?s=0:s>t.length&&Ve(637,{offset:s,range:t.length}),i===void 0?i=t.length-s:i>t.length-s&&Ve(1746,{length:i,range:t.length-s}),this.segments=t,this.offset=s,this.len=i}get length(){return this.len}isEqual(t){return yt.comparator(this,t)===0}child(t){const s=this.segments.slice(this.offset,this.limit());return t instanceof yt?t.forEach(i=>{s.push(i)}):s.push(t),this.construct(s)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let s=0;s<this.length;s++)if(this.get(s)!==t.get(s))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let s=0;s<this.length;s++)if(this.get(s)!==t.get(s))return!1;return!0}forEach(t){for(let s=this.offset,i=this.limit();s<i;s++)t(this.segments[s])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,s){const i=Math.min(t.length,s.length);for(let o=0;o<i;o++){const c=yt.compareSegments(t.get(o),s.get(o));if(c!==0)return c}return Ut(t.length,s.length)}static compareSegments(t,s){const i=yt.isNumericId(t),o=yt.isNumericId(s);return i&&!o?-1:!i&&o?1:i&&o?yt.extractNumericId(t).compare(yt.extractNumericId(s)):Rh(t,s)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return As.fromString(t.substring(4,t.length-2))}}class dt extends yt{construct(t,s,i){return new dt(t,s,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const s=[];for(const i of t){if(i.indexOf("//")>=0)throw new x(M.INVALID_ARGUMENT,"Invalid segment (".concat(i,"). Paths must not contain // in them."));s.push(...i.split("/").filter(o=>o.length>0))}return new dt(s)}static emptyPath(){return new dt([])}}const Dh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Wt extends yt{construct(t,s,i){return new Wt(t,s,i)}static isValidIdentifier(t){return Dh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Wt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===gr}static keyField(){return new Wt([gr])}static fromServerFormat(t){const s=[];let i="",o=0;const c=()=>{if(i.length===0)throw new x(M.INVALID_ARGUMENT,"Invalid field path (".concat(t,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));s.push(i),i=""};let l=!1;for(;o<t.length;){const p=t[o];if(p==="\\"){if(o+1===t.length)throw new x(M.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const _=t[o+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new x(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=_,o+=2}else p==="`"?(l=!l,o++):p!=="."||l?(i+=p,o++):(c(),o++)}if(c(),l)throw new x(M.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Wt(s)}static emptyPath(){return new Wt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t){this.path=t}static fromPath(t){return new Yt(dt.fromString(t))}static fromName(t){return new Yt(dt.fromString(t).popFirst(5))}static empty(){return new Yt(dt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&dt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,s){return dt.comparator(t.path,s.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Yt(new dt(t.slice()))}}function kh(n,t,s,i){if(t===!0&&i===!0)throw new x(M.INVALID_ARGUMENT,"".concat(n," and ").concat(s," cannot be used together."))}function Nh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Lh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n="".concat(n.substring(0,20),"...")),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?"a custom ".concat(t," object"):"an object"}}return typeof n=="function"?"a function":Ve(12329,{type:typeof n})}function Mh(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const s=Lh(n);throw new x(M.INVALID_ARGUMENT,"Expected type '".concat(t.name,"', but it was: ").concat(s))}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(n,t){const s={typeString:n};return t&&(s.value=t),s}function Ge(n,t){if(!Nh(n))throw new x(M.INVALID_ARGUMENT,"JSON must be an object");let s;for(const i in t)if(t[i]){const o=t[i].typeString,c="value"in t[i]?{value:t[i].value}:void 0;if(!(i in n)){s="JSON missing required field: '".concat(i,"'");break}const l=n[i];if(o&&typeof l!==o){s="JSON field '".concat(i,"' must be a ").concat(o,".");break}if(c!==void 0&&l!==c.value){s="Expected '".concat(i,"' field to equal '").concat(c.value,"'");break}}if(s)throw new x(M.INVALID_ARGUMENT,s);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=-62135596800,yr=1e6;class wt{static now(){return wt.fromMillis(Date.now())}static fromDate(t){return wt.fromMillis(t.getTime())}static fromMillis(t){const s=Math.floor(t/1e3),i=Math.floor((t-1e3*s)*yr);return new wt(s,i)}constructor(t,s){if(this.seconds=t,this.nanoseconds=s,s<0)throw new x(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+s);if(s>=1e9)throw new x(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+s);if(t<mr)throw new x(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yr}_compareTo(t){return this.seconds===t.seconds?Ut(this.nanoseconds,t.nanoseconds):Ut(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:wt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Ge(t,wt._jsonSchema))return new wt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-mr;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}wt._jsonSchemaVersion="firestore/timestamp/1.0",wt._jsonSchema={type:V("string",wt._jsonSchemaVersion),seconds:V("number"),nanoseconds:V("number")};function xh(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t){this.binaryString=t}static fromBase64String(t){const s=function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new Fh("Invalid base64 string: "+c):c}}(t);return new te(s)}static fromUint8Array(t){const s=function(o){let c="";for(let l=0;l<o.length;++l)c+=String.fromCharCode(o[l]);return c}(t);return new te(s)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(s){return btoa(s)}(this.binaryString)}toUint8Array(){return function(s){const i=new Uint8Array(s.length);for(let o=0;o<s.length;o++)i[o]=s.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ut(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}te.EMPTY_BYTE_STRING=new te("");const ys="(default)";class dn{constructor(t,s){this.projectId=t,this.database=s||ys}static empty(){return new dn("","")}get isDefaultDatabase(){return this.database===ys}isEqual(t){return t instanceof dn&&t.projectId===this.projectId&&t.database===this.database}}function jh(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new x(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dn(n.options.projectId,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(t,s=null,i=[],o=[],c=null,l="F",p=null,_=null){this.path=t,this.collectionGroup=s,this.explicitOrderBy=i,this.filters=o,this.limit=c,this.limitType=l,this.startAt=p,this.endAt=_,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function $h(n){return new Uh(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wr,L;(L=wr||(wr={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new As([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=1048576;function is(){return typeof document<"u"?document:null}class Hh{constructor(t,s,i=1e3,o=1.5,c=6e4){this.Ci=t,this.timerId=s,this.R_=i,this.A_=o,this.V_=c,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const s=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,s-i);o>0&&pt("ExponentialBackoff","Backing off for ".concat(o," ms (base delay: ").concat(this.d_," ms, delay with jitter: ").concat(s," ms, last attempt: ").concat(i," ms ago)")),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t,s,i,o,c){this.asyncQueue=t,this.timerId=s,this.targetTimeMs=i,this.op=o,this.removalCallback=c,this.deferred=new Fe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,s,i,o,c){const l=Date.now()+i,p=new Cs(t,s,l,o,c);return p.start(i),p}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(M.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var _r,Er;(Er=_r||(_r={})).Ma="default",Er.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="ComponentProvider",br=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co="firestore.googleapis.com",vr=!0;class Ir{constructor(t){var s,i;if(t.host===void 0){if(t.ssl!==void 0)throw new x(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=co,this.ssl=vr}else this.host=t.host,this.ssl=(s=t.ssl)!=null?s:vr;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Vh;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Bh)throw new x(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}kh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gh((i=t.experimentalLongPollingOptions)!=null?i:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new x(M.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(c.timeoutSeconds," (must not be NaN)"));if(c.timeoutSeconds<5)throw new x(M.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(c.timeoutSeconds," (minimum allowed value is 5)"));if(c.timeoutSeconds>30)throw new x(M.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(c.timeoutSeconds," (maximum allowed value is 30)"))}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class lo{constructor(t,s,i,o){this._authCredentials=t,this._appCheckCredentials=s,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ir({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ir(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Eh;switch(i.type){case"firstParty":return new Sh(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new x(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(s){const i=br.get(s);i&&(pt(qh,"Removing Datastore"),br.delete(s),i.terminate())}(this),Promise.resolve()}}function zh(n,t,s,i={}){var v;n=Mh(n,lo);const o=Vr(t),c=n._getSettings(),l={...c,emulatorOptions:n._getEmulatorOptions()},p="".concat(t,":").concat(s);o&&(tc("https://".concat(p)),ic("Firestore",!0)),c.host!==co&&c.host!==p&&_h("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _={...c,host:p,ssl:o,emulatorOptions:i};if(!Ue(_,l)&&(n._setSettings(_),i.mockUserToken)){let T,I;if(typeof i.mockUserToken=="string")T=i.mockUserToken,I=tt.MOCK_USER;else{T=ec(i.mockUserToken,(v=n._app)==null?void 0:v.options.projectId);const S=i.mockUserToken.sub||i.mockUserToken.user_id;if(!S)throw new x(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new tt(S)}n._authCredentials=new bh(new ao(T,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(t,s,i){this.converter=s,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Rs(this.firestore,t,this._query)}}class _t{constructor(t,s,i){this.converter=s,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Os(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _t(this.firestore,t,this._key)}toJSON(){return{type:_t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,s,i){if(Ge(s,_t._jsonSchema))return new _t(t,i||null,new Yt(dt.fromString(s.referencePath)))}}_t._jsonSchemaVersion="firestore/documentReference/1.0",_t._jsonSchema={type:V("string",_t._jsonSchemaVersion),referencePath:V("string")};class Os extends Rs{constructor(t,s,i){super(t,s,$h(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _t(this.firestore,null,new Yt(t))}withConverter(t){return new Os(this.firestore,t,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="AsyncQueue";class Ar{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Hh(this,"async_queue_retry"),this._c=()=>{const i=is();i&&pt(Sr,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=t;const s=is();s&&typeof s.addEventListener=="function"&&s.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const s=is();s&&typeof s.removeEventListener=="function"&&s.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const s=new Fe;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(s.resolve,s.reject),s.promise)).then(()=>s.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!xh(t))throw t;pt(Sr,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const s=this.ac.then(()=>(this.rc=!0,t().catch(i=>{throw this.nc=i,this.rc=!1,ro("INTERNAL UNHANDLED ERROR: ",Tr(i)),i}).then(i=>(this.rc=!1,i))));return this.ac=s,s}enqueueAfterDelay(t,s,i){this.uc(),this.oc.indexOf(t)>-1&&(s=0);const o=Cs.createAndSchedule(this,t,s,i,c=>this.hc(c));return this.tc.push(o),o}uc(){this.nc&&Ve(47125,{Pc:Tr(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const s of this.tc)if(s.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((s,i)=>s.targetTimeMs-i.targetTimeMs);for(const s of this.tc)if(s.skipDelay(),t!=="all"&&s.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const s=this.tc.indexOf(t);this.tc.splice(s,1)}}function Tr(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+"\n"+n.stack),t}class Wh extends lo{constructor(t,s,i,o){super(t,s,i,o),this.type="firestore",this._queue=new Ar,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ar(t),this._firestoreClient=void 0,await t}}}function Jh(n,t){const s=typeof n=="object"?n:bs(),i=typeof n=="string"?n:ys,o=ge(s,"firestore").getImmediate({identifier:i});if(!o._initialized){const c=Za("firestore");c&&zh(o,...c)}return o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new vt(te.fromBase64String(t))}catch(s){throw new x(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+s)}}static fromUint8Array(t){return new vt(te.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:vt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Ge(t,vt._jsonSchema))return vt.fromBase64String(t.bytes)}}vt._jsonSchemaVersion="firestore/bytes/1.0",vt._jsonSchema={type:V("string",vt._jsonSchemaVersion),bytes:V("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(...t){for(let s=0;s<t.length;++s)if(t[s].length===0)throw new x(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Wt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t,s){if(!isFinite(t)||t<-90||t>90)throw new x(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(s)||s<-180||s>180)throw new x(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+s);this._lat=t,this._long=s}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Ut(this._lat,t._lat)||Ut(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zt._jsonSchemaVersion}}static fromJSON(t){if(Ge(t,Zt._jsonSchema))return new Zt(t.latitude,t.longitude)}}Zt._jsonSchemaVersion="firestore/geoPoint/1.0",Zt._jsonSchema={type:V("string",Zt._jsonSchemaVersion),latitude:V("number"),longitude:V("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t){this._values=(t||[]).map(s=>s)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,o){if(i.length!==o.length)return!1;for(let c=0;c<i.length;++c)if(i[c]!==o[c])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Qt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Ge(t,Qt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(s=>typeof s=="number"))return new Qt(t.vectorValues);throw new x(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Qt._jsonSchemaVersion="firestore/vectorValue/1.0",Qt._jsonSchema={type:V("string",Qt._jsonSchemaVersion),vectorValues:V("object")};function uo(n,t,s){if((t=Be(t))instanceof ho)return t._internalPath;if(typeof t=="string")return Yh(n,t);throw ws("Field path arguments must be of type string or ",n)}const Kh=new RegExp("[~\\*/\\[\\]]");function Yh(n,t,s){if(t.search(Kh)>=0)throw ws("Invalid field path (".concat(t,"). Paths must not contain '~', '*', '/', '[', or ']'"),n);try{return new ho(...t.split("."))._internalPath}catch(i){throw ws("Invalid field path (".concat(t,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),n)}}function ws(n,t,s,i,o){let c="Function ".concat(t,"() called with invalid data");c+=". ";let l="";return new x(M.INVALID_ARGUMENT,c+n+l)}const Cr="@firebase/firestore",Rr="4.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(t,s,i,o,c){this._firestore=t,this._userDataWriter=s,this._key=i,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Xh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t,s;return(s=(t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)!=null?s:void 0}get(t){if(this._document){const s=this._document.data.field(uo("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s)}}}class Xh extends fo{data(){return super.data()}}class an{constructor(t,s){this.hasPendingWrites=t,this.fromCache=s}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class he extends fo{constructor(t,s,i,o,c,l){super(t,s,i,o,l),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const s=new cn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(s,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,s={}){if(this._document){const i=this._document.data.field(uo("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,s.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new x(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,s={};return s.type=he._jsonSchemaVersion,s.bundle="",s.bundleSource="DocumentSnapshot",s.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?s:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),s.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),s)}}he._jsonSchemaVersion="firestore/documentSnapshot/1.0",he._jsonSchema={type:V("string",he._jsonSchemaVersion),bundleSource:V("string","DocumentSnapshot"),bundleName:V("string"),bundle:V("string")};class cn extends he{data(t={}){return super.data(t)}}class je{constructor(t,s,i,o){this._firestore=t,this._userDataWriter=s,this._snapshot=o,this.metadata=new an(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const t=[];return this.forEach(s=>t.push(s)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,s){this._snapshot.docs.forEach(i=>{t.call(s,new cn(this._firestore,this._userDataWriter,i.key,i,new an(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const s=!!t.includeMetadataChanges;if(s&&this._snapshot.excludesMetadataChanges)throw new x(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===s||(this._cachedChanges=function(o,c){if(o._snapshot.oldDocs.isEmpty()){let l=0;return o._snapshot.docChanges.map(p=>{const _=new cn(o._firestore,o._userDataWriter,p.doc.key,p.doc,new an(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:_,oldIndex:-1,newIndex:l++}})}{let l=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(p=>c||p.type!==3).map(p=>{const _=new cn(o._firestore,o._userDataWriter,p.doc.key,p.doc,new an(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,T=-1;return p.type!==0&&(v=l.indexOf(p.doc.key),l=l.delete(p.doc.key)),p.type!==1&&(l=l.add(p.doc),T=l.indexOf(p.doc.key)),{type:Zh(p.type),doc:_,oldIndex:v,newIndex:T}})}}(this,s),this._cachedChangesIncludeMetadataChanges=s),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new x(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=je._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ch.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const s=[],i=[],o=[];return this.docs.forEach(c=>{c._document!==null&&(s.push(c._document),i.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),o.push(c.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Zh(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ve(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je._jsonSchemaVersion="firestore/querySnapshot/1.0",je._jsonSchema={type:V("string",je._jsonSchemaVersion),bundleSource:V("string","QuerySnapshot"),bundleName:V("string"),bundle:V("string")};(function(t,s=!0){wh(ul),At(new Et("firestore",(i,{instanceIdentifier:o,options:c})=>{const l=i.getProvider("app").getImmediate(),p=new Wh(new vh(i.getProvider("auth-internal")),new Ah(l,i.getProvider("app-check-internal")),jh(l,o),l);return c={useFetchStreams:s,...c},p._setSettings(c),p},"PUBLIC").setMultipleInstances(!0)),lt(Cr,Rr,t),lt(Cr,Rr,"esm2020")})();const po="@firebase/installations",Ps="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=1e4,mo="w:".concat(Ps),yo="FIS_v2",Qh="https://firebaseinstallations.googleapis.com/v1",tu=60*60*1e3,eu="installations",nu="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ee=new wn(eu,nu,su);function wo(n){return n instanceof Tt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o({projectId:n}){return"".concat(Qh,"/projects/").concat(n,"/installations")}function Eo(n){return{token:n.token,requestStatus:2,expiresIn:ru(n.expiresIn),creationTime:Date.now()}}async function bo(n,t){const i=(await t.json()).error;return ee.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function vo({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function iu(n,{refreshToken:t}){const s=vo(n);return s.append("Authorization",ou(t)),s}async function Io(n){const t=await n();return t.status>=500&&t.status<600?n():t}function ru(n){return Number(n.replace("s","000"))}function ou(n){return"".concat(yo," ").concat(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function au({appConfig:n,heartbeatServiceProvider:t},{fid:s}){const i=_o(n),o=vo(n),c=t.getImmediate({optional:!0});if(c){const v=await c.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const l={fid:s,authVersion:yo,appId:n.appId,sdkVersion:mo},p={method:"POST",headers:o,body:JSON.stringify(l)},_=await Io(()=>fetch(i,p));if(_.ok){const v=await _.json();return{fid:v.fid||s,registrationStatus:2,refreshToken:v.refreshToken,authToken:Eo(v.authToken)}}else throw await bo("Create Installation",_)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(n){return new Promise(t=>{setTimeout(t,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=/^[cdef][\w-]{21}$/,_s="";function hu(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const s=uu(n);return lu.test(s)?s:_s}catch(n){return _s}}function uu(n){return cu(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(n){return"".concat(n.appName,"!").concat(n.appId)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=new Map;function To(n,t){const s=bn(n);Co(s,t),fu(s,t)}function Co(n,t){const s=Ao.get(n);if(s)for(const i of s)i(t)}function fu(n,t){const s=du();s&&s.postMessage({key:n,fid:t}),pu()}let Xt=null;function du(){return!Xt&&"BroadcastChannel"in self&&(Xt=new BroadcastChannel("[Firebase] FID Change"),Xt.onmessage=n=>{Co(n.data.key,n.data.fid)}),Xt}function pu(){Ao.size===0&&Xt&&(Xt.close(),Xt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="firebase-installations-database",mu=1,ne="firebase-installations-store";let rs=null;function Ds(){return rs||(rs=zr(gu,mu,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(ne)}}})),rs}async function pn(n,t){const s=bn(n),o=(await Ds()).transaction(ne,"readwrite"),c=o.objectStore(ne),l=await c.get(s);return await c.put(t,s),await o.done,(!l||l.fid!==t.fid)&&To(n,t.fid),t}async function Ro(n){const t=bn(n),i=(await Ds()).transaction(ne,"readwrite");await i.objectStore(ne).delete(t),await i.done}async function vn(n,t){const s=bn(n),o=(await Ds()).transaction(ne,"readwrite"),c=o.objectStore(ne),l=await c.get(s),p=t(l);return p===void 0?await c.delete(s):await c.put(p,s),await o.done,p&&(!l||l.fid!==p.fid)&&To(n,p.fid),p}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(n){let t;const s=await vn(n.appConfig,i=>{const o=yu(i),c=wu(n,o);return t=c.registrationPromise,c.installationEntry});return s.fid===_s?{installationEntry:await t}:{installationEntry:s,registrationPromise:t}}function yu(n){const t=n||{fid:hu(),registrationStatus:0};return Oo(t)}function wu(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ee.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const s={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=_u(n,s);return{installationEntry:s,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Eu(n)}:{installationEntry:t}}async function _u(n,t){try{const s=await au(n,t);return pn(n.appConfig,s)}catch(s){throw wo(s)&&s.customData.serverCode===409?await Ro(n.appConfig):await pn(n.appConfig,{fid:t.fid,registrationStatus:0}),s}}async function Eu(n){let t=await Or(n.appConfig);for(;t.registrationStatus===1;)await So(100),t=await Or(n.appConfig);if(t.registrationStatus===0){const{installationEntry:s,registrationPromise:i}=await ks(n);return i||s}return t}function Or(n){return vn(n,t=>{if(!t)throw ee.create("installation-not-found");return Oo(t)})}function Oo(n){return bu(n)?{fid:n.fid,registrationStatus:0}:n}function bu(n){return n.registrationStatus===1&&n.registrationTime+go<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vu({appConfig:n,heartbeatServiceProvider:t},s){const i=Iu(n,s),o=iu(n,s),c=t.getImmediate({optional:!0});if(c){const v=await c.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const l={installation:{sdkVersion:mo,appId:n.appId}},p={method:"POST",headers:o,body:JSON.stringify(l)},_=await Io(()=>fetch(i,p));if(_.ok){const v=await _.json();return Eo(v)}else throw await bo("Generate Auth Token",_)}function Iu(n,{fid:t}){return"".concat(_o(n),"/").concat(t,"/authTokens:generate")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(n,t=!1){let s;const i=await vn(n.appConfig,c=>{if(!Po(c))throw ee.create("not-registered");const l=c.authToken;if(!t&&Tu(l))return c;if(l.requestStatus===1)return s=Su(n,t),c;{if(!navigator.onLine)throw ee.create("app-offline");const p=Ru(c);return s=Au(n,p),p}});return s?await s:i.authToken}async function Su(n,t){let s=await Pr(n.appConfig);for(;s.authToken.requestStatus===1;)await So(100),s=await Pr(n.appConfig);const i=s.authToken;return i.requestStatus===0?Ns(n,t):i}function Pr(n){return vn(n,t=>{if(!Po(t))throw ee.create("not-registered");const s=t.authToken;return Ou(s)?{...t,authToken:{requestStatus:0}}:t})}async function Au(n,t){try{const s=await vu(n,t),i={...t,authToken:s};return await pn(n.appConfig,i),s}catch(s){if(wo(s)&&(s.customData.serverCode===401||s.customData.serverCode===404))await Ro(n.appConfig);else{const i={...t,authToken:{requestStatus:0}};await pn(n.appConfig,i)}throw s}}function Po(n){return n!==void 0&&n.registrationStatus===2}function Tu(n){return n.requestStatus===2&&!Cu(n)}function Cu(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+tu}function Ru(n){const t={requestStatus:1,requestTime:Date.now()};return{...n,authToken:t}}function Ou(n){return n.requestStatus===1&&n.requestTime+go<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pu(n){const t=n,{installationEntry:s,registrationPromise:i}=await ks(t);return i?i.catch(console.error):Ns(t).catch(console.error),s.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Du(n,t=!1){const s=n;return await ku(s),(await Ns(s,t)).token}async function ku(n){const{registrationPromise:t}=await ks(n);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(n){if(!n||!n.options)throw os("App Configuration");if(!n.name)throw os("App Name");const t=["projectId","apiKey","appId"];for(const s of t)if(!n.options[s])throw os(s);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function os(n){return ee.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="installations",Lu="installations-internal",Mu=n=>{const t=n.getProvider("app").getImmediate(),s=Nu(t),i=ge(t,"heartbeat");return{app:t,appConfig:s,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},xu=n=>{const t=n.getProvider("app").getImmediate(),s=ge(t,Do).getImmediate();return{getId:()=>Pu(s),getToken:o=>Du(s,o)}};function Fu(){At(new Et(Do,Mu,"PUBLIC")),At(new Et(Lu,xu,"PRIVATE"))}Fu();lt(po,Ps);lt(po,Ps,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="analytics",ju="firebase_id",Uu="origin",$u=60*1e3,Vu="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ls="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=new _n("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},rt=new wn("analytics","Analytics",Bu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(n){if(!n.startsWith(Ls)){const t=rt.create("invalid-gtag-resource",{gtagURL:n});return et.warn(t.message),""}return n}function ko(n){return Promise.all(n.map(t=>t.catch(s=>s)))}function Gu(n,t){let s;return window.trustedTypes&&(s=window.trustedTypes.createPolicy(n,t)),s}function qu(n,t){const s=Gu("firebase-js-sdk-policy",{createScriptURL:Hu}),i=document.createElement("script"),o="".concat(Ls,"?l=").concat(n,"&id=").concat(t);i.src=s?s==null?void 0:s.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function zu(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function Wu(n,t,s,i,o,c){const l=i[o];try{if(l)await t[l];else{const _=(await ko(s)).find(v=>v.measurementId===o);_&&await t[_.appId]}}catch(p){et.error(p)}n("config",o,c)}async function Ju(n,t,s,i,o){try{let c=[];if(o&&o.send_to){let l=o.send_to;Array.isArray(l)||(l=[l]);const p=await ko(s);for(const _ of l){const v=p.find(I=>I.measurementId===_),T=v&&t[v.appId];if(T)c.push(T);else{c=[];break}}}c.length===0&&(c=Object.values(t)),await Promise.all(c),n("event",i,o||{})}catch(c){et.error(c)}}function Ku(n,t,s,i){async function o(c,...l){try{if(c==="event"){const[p,_]=l;await Ju(n,t,s,p,_)}else if(c==="config"){const[p,_]=l;await Wu(n,t,s,i,p,_)}else if(c==="consent"){const[p,_]=l;n("consent",p,_)}else if(c==="get"){const[p,_,v]=l;n("get",p,_,v)}else if(c==="set"){const[p]=l;n("set",p)}else n(c,...l)}catch(p){et.error(p)}}return o}function Yu(n,t,s,i,o){let c=function(...l){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(c=window[o]),window[o]=Ku(c,n,t,s),{gtagCore:c,wrappedGtag:window[o]}}function Xu(n){const t=window.document.getElementsByTagName("script");for(const s of Object.values(t))if(s.src&&s.src.includes(Ls)&&s.src.includes(n))return s;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=30,Qu=1e3;class tf{constructor(t={},s=Qu){this.throttleMetadata=t,this.intervalMillis=s}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,s){this.throttleMetadata[t]=s}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const No=new tf;function ef(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function nf(n){var l;const{appId:t,apiKey:s}=n,i={method:"GET",headers:ef(s)},o=Vu.replace("{app-id}",t),c=await fetch(o,i);if(c.status!==200&&c.status!==304){let p="";try{const _=await c.json();(l=_.error)!=null&&l.message&&(p=_.error.message)}catch(_){}throw rt.create("config-fetch-failed",{httpStatus:c.status,responseMessage:p})}return c.json()}async function sf(n,t=No,s){const{appId:i,apiKey:o,measurementId:c}=n.options;if(!i)throw rt.create("no-app-id");if(!o){if(c)return{measurementId:c,appId:i};throw rt.create("no-api-key")}const l=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new af;return setTimeout(async()=>{p.abort()},$u),Lo({appId:i,apiKey:o,measurementId:c},l,p,t)}async function Lo(n,{throttleEndTimeMillis:t,backoffCount:s},i,o=No){var p;const{appId:c,measurementId:l}=n;try{await rf(i,t)}catch(_){if(l)return et.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(l)+' provided in the "measurementId" field in the local Firebase config. ['.concat(_==null?void 0:_.message,"]")),{appId:c,measurementId:l};throw _}try{const _=await nf(n);return o.deleteThrottleMetadata(c),_}catch(_){const v=_;if(!of(v)){if(o.deleteThrottleMetadata(c),l)return et.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(l)+' provided in the "measurementId" field in the local Firebase config. ['.concat(v==null?void 0:v.message,"]")),{appId:c,measurementId:l};throw _}const T=Number((p=v==null?void 0:v.customData)==null?void 0:p.httpStatus)===503?Wi(s,o.intervalMillis,Zu):Wi(s,o.intervalMillis),I={throttleEndTimeMillis:Date.now()+T,backoffCount:s+1};return o.setThrottleMetadata(c,I),et.debug("Calling attemptFetch again in ".concat(T," millis")),Lo(n,I,i,o)}}function rf(n,t){return new Promise((s,i)=>{const o=Math.max(t-Date.now(),0),c=setTimeout(s,o);n.addEventListener(()=>{clearTimeout(c),i(rt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function of(n){if(!(n instanceof Tt)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class af{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function cf(n,t,s,i,o){if(o&&o.global){n("event",s,i);return}else{const c=await t,l={...i,send_to:c};n("event",s,l)}}async function lf(n,t,s,i){if(i&&i.global){const o={};for(const c of Object.keys(s))o["user_properties.".concat(c)]=s[c];return n("set",o),Promise.resolve()}else{const o=await t;n("config",o,{update:!0,user_properties:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hf(){if(Br())try{await Hr()}catch(n){return et.warn(rt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return et.warn(rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function uf(n,t,s,i,o,c,l){var S;const p=sf(n);p.then(O=>{s[O.measurementId]=O.appId,n.options.measurementId&&O.measurementId!==n.options.measurementId&&et.warn("The measurement ID in the local Firebase config (".concat(n.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(O.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")}).catch(O=>et.error(O)),t.push(p);const _=hf().then(O=>{if(O)return i.getId()}),[v,T]=await Promise.all([p,_]);Xu(c)||qu(c,v.measurementId),o("js",new Date);const I=(S=l==null?void 0:l.config)!=null?S:{};return I[Uu]="firebase",I.update=!0,T!=null&&(I[ju]=T),o("config",v.measurementId,I),v.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(t){this.app=t}_delete(){return delete ue[this.app.options.appId],Promise.resolve()}}let ue={},Dr=[];const kr={};let as="dataLayer",df="gtag",Nr,Ms,Lr=!1;function pf(){const n=[];if(rc()&&n.push("This is a browser extension environment."),oc()||n.push("Cookies are not available."),n.length>0){const t=n.map((i,o)=>"(".concat(o+1,") ").concat(i)).join(" "),s=rt.create("invalid-analytics-context",{errorInfo:t});et.warn(s.message)}}function gf(n,t,s){pf();const i=n.options.appId;if(!i)throw rt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)et.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(n.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.');else throw rt.create("no-api-key");if(ue[i]!=null)throw rt.create("already-exists",{id:i});if(!Lr){zu(as);const{wrappedGtag:c,gtagCore:l}=Yu(ue,Dr,kr,as,df);Ms=c,Nr=l,Lr=!0}return ue[i]=uf(n,Dr,kr,t,Nr,as,s),new ff(n)}function mf(n=bs()){n=Be(n);const t=ge(n,gn);return t.isInitialized()?t.getImmediate():yf(n)}function yf(n,t={}){const s=ge(n,gn);if(s.isInitialized()){const o=s.getImmediate();if(Ue(t,s.getOptions()))return o;throw rt.create("already-initialized")}return s.initialize({options:t})}function wf(n,t,s){n=Be(n),lf(Ms,ue[n.app.options.appId],t,s).catch(i=>et.error(i))}function _f(n,t,s,i){n=Be(n),cf(Ms,ue[n.app.options.appId],t,s,i).catch(o=>et.error(o))}const Mr="@firebase/analytics",xr="0.10.19";function Ef(){At(new Et(gn,(t,{options:s})=>{const i=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return gf(i,o,s)},"PUBLIC")),At(new Et("analytics-internal",n,"PRIVATE")),lt(Mr,xr),lt(Mr,xr,"esm2020");function n(t){try{const s=t.getProvider(gn).getImmediate();return{logEvent:(i,o,c)=>_f(s,i,o,c),setUserProperties:(i,o)=>wf(s,i,o)}}catch(s){throw rt.create("interop-component-reg-failed",{reason:s})}}}Ef();const bf={apiKey:"AIzaSyA3eiH5zNFY5KHoCkX7hz01I8HO864NyGs",authDomain:"lab06-expense-134f0.firebaseapp.com",projectId:"lab06-expense-134f0",storageBucket:"lab06-expense-134f0.firebasestorage.app",messagingSenderId:"121972935627",appId:"1:121972935627:web:228dbc5048bbe7f92dc44e",measurementId:"G-S1S73R6R5P"},xs=Jr(bf);Jh(xs);mf(xs);const vf=z.object({properties:{caption:z.string(),tags:z.array({items:z.string()}),objects:z.array({items:z.object({properties:{name:z.string(),confidence:z.number()},optionalProperties:["confidence"]})}),safety:z.object({properties:{isSensitive:z.boolean(),notes:z.string()},optionalProperties:["notes"]})},optionalProperties:["objects","safety"]}),If=dh(xs,{backend:new En}),Sf=ph(If,{model:"gemini-2.5-flash",generationConfig:{responseMimeType:"application/json",responseSchema:vf}});class Af{static async analyze(t){var l;const s="วิเคราะห์ภาพนี้และตอบกลับตาม JSON schema เท่านั้น\n- caption: คำบรรยายสั้น 1 ประโยคภาษาไทย\n- tags: คีย์เวิร์ด 3-8 คำ\n- objects: ถ้าเห็นวัตถุเด่น ให้ระบุชื่อ\n- safety: ถ้าเป็นภาพอ่อนไหวให้ทำเครื่องหมาย",i={inlineData:{data:t.base64,mimeType:t.mimeType}},c=(l=(await Sf.generateContent([s,i])).response.text())!=null?l:"{}";return JSON.parse(c)}}const Tf={key:0,style:{"text-align":"center",margin:"20px 0"}},Cf={key:1,style:{"text-align":"center","margin-top":"20px"}},Rf={style:{"font-size":"1.1em","margin-bottom":"15px"}},Of={style:{"margin-bottom":"15px"}},Pf={key:0,style:{"margin-bottom":"15px"}},Df={key:0},kf={key:1},Nf={key:0,style:{color:"var(--ion-color-danger)","font-size":"0.9em","margin-top":"5px"}},Mf=ga({__name:"Tab1Page",setup(n){const t=ke(null),s=ke(null),i=ke(""),o=ke(null),c=ke(!1);async function l(v){var I;const T=(I=v.target.files)==null?void 0:I[0];T&&(s.value=await Hi.fromFile(T),i.value=URL.createObjectURL(T),o.value=null)}async function p(){c.value=!0;try{const v=await Hi.fromCamera();s.value=v,i.value="data:".concat(v.mimeType,";base64,").concat(v.base64),o.value=null}catch(v){console.error("Camera error:",v)}finally{c.value=!1}}async function _(){if(s.value){c.value=!0;try{o.value=await Af.analyze(s.value)}catch(v){console.error("Analysis error:",v),alert("เกิดข้อผิดพลาดในการวิเคราะห์ภาพ โปรดลองอีกครั้ง")}finally{c.value=!1}}}return(v,T)=>(ct(),sn(G(ma),null,{default:W(()=>[Z(G(_a),null,{default:W(()=>[Z(G(ya),{color:"primary"},{default:W(()=>[Z(G(wa),null,{default:W(()=>[...T[1]||(T[1]=[Lt("Lab08: Gemini Vision",-1)])]),_:1})]),_:1})]),_:1}),Z(G(Ca),{class:"ion-padding"},{default:W(()=>[bt("input",{ref_key:"fileEl",ref:t,type:"file",accept:"image/*",hidden:"",onChange:l},null,544),Z(G(Kn),{expand:"block",color:"light",onClick:T[0]||(T[0]=I=>{var S;return(S=t.value)==null?void 0:S.click()}),class:"ion-margin-bottom"},{default:W(()=>[...T[2]||(T[2]=[Lt(" อัปโหลดไฟล์ภาพ ",-1)])]),_:1}),Z(G(Kn),{expand:"block",color:"secondary",onClick:p,class:"ion-margin-bottom"},{default:W(()=>[...T[3]||(T[3]=[Lt(" ถ่ายภาพ (Camera) ",-1)])]),_:1}),i.value?(ct(),Mt("div",Tf,[Z(G(Ea),{src:i.value,style:{"max-height":"300px","border-radius":"8px",overflow:"hidden","box-shadow":"0 4px 6px rgba(0,0,0,0.1)"}},null,8,["src"])])):Gt("",!0),Z(G(Kn),{expand:"block",disabled:!s.value||c.value,onClick:_},{default:W(()=>[...T[4]||(T[4]=[Lt(" วิเคราะห์ภาพด้วย Gemini AI ",-1)])]),_:1},8,["disabled"]),c.value?(ct(),Mt("div",Cf,[Z(G(ba),{name:"crescent"}),T[5]||(T[5]=bt("p",null,"AI กำลังวิเคราะห์รูปภาพ...",-1))])):Gt("",!0),o.value?(ct(),sn(G(va),{key:2,style:{margin:"20px 0"}},{default:W(()=>[Z(G(Ia),null,{default:W(()=>[Z(G(Sa),null,{default:W(()=>[...T[6]||(T[6]=[Lt("ผลการวิเคราะห์",-1)])]),_:1})]),_:1}),Z(G(Aa),null,{default:W(()=>[bt("p",Rf,[T[7]||(T[7]=bt("strong",null,"รายละเอียด:",-1)),Lt(" "+ce(o.value.caption),1)]),bt("div",Of,[T[8]||(T[8]=bt("strong",null,"คีย์เวิร์ด:",-1)),T[9]||(T[9]=bt("br",null,null,-1)),(ct(!0),Mt(Fi,null,xi(o.value.tags,I=>(ct(),sn(G(ji),{color:"tertiary",key:I,style:{"margin-right":"5px","margin-top":"5px","font-weight":"normal"}},{default:W(()=>[Lt(ce(I),1)]),_:2},1024))),128))]),o.value.objects&&o.value.objects.length>0?(ct(),Mt("div",Pf,[T[10]||(T[10]=bt("strong",null,"วัตถุที่ตรวจพบ:",-1)),Z(G(Ta),{lines:"none",style:{"margin-top":"5px","border-radius":"8px",background:"var(--ion-color-light)"}},{default:W(()=>[(ct(!0),Mt(Fi,null,xi(o.value.objects,I=>(ct(),sn(G(Ra),{key:I.name,color:"light"},{default:W(()=>[Z(G(Oa),null,{default:W(()=>[bt("h3",null,ce(I.name),1),I.confidence?(ct(),Mt("p",Df,"ความแม่นยำ: "+ce((I.confidence*100).toFixed(0))+"%",1)):Gt("",!0)]),_:2},1024)]),_:2},1024))),128))]),_:1})])):Gt("",!0),o.value.safety?(ct(),Mt("div",kf,[Z(G(ji),{color:o.value.safety.isSensitive?"danger":"success"},{default:W(()=>[Lt(ce(o.value.safety.isSensitive?"⚠️ ภาพเนื้อหาอ่อนไหว":"✅ ภาพปลอดภัย"),1)]),_:1},8,["color"]),o.value.safety.notes?(ct(),Mt("p",Nf,ce(o.value.safety.notes),1)):Gt("",!0)])):Gt("",!0)]),_:1})]),_:1})):Gt("",!0)]),_:1})]),_:1}))}});export{Mf as default};
