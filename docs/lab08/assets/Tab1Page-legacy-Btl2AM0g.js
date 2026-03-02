System.register(["./index-legacy-TjoAXU1J.js"],function(t,e){"use strict";var n,i,s,r,o,a,c,l,h,u,d,p,f,g,m,y,v,w,b,S,_,E,I,C,T,A,k,P,O,D;return{setters:[t=>{n=t.d,i=t.r,s=t.c,r=t.w,o=t.u,a=t.I,c=t.a,l=t.b,h=t.e,u=t.f,d=t.g,p=t.h,f=t.i,g=t.j,m=t.k,y=t.l,v=t.m,w=t.n,b=t.o,S=t.p,_=t.q,E=t.t,I=t.s,C=t.F,T=t.v,A=t.x,k=t.y,P=t.z,O=t.A,D=t.B}],execute:function(){/*! Capacitor: https://capacitorjs.com/ - MIT License */var e;!function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"}(e||(e={}));class x extends Error{constructor(t,e,n){super(t),this.message=t,this.code=e,this.data=n}}const L=t=>{const n=t.CapacitorCustomPlatform||null,i=t.Capacitor||{},s=i.Plugins=i.Plugins||{},r=()=>null!==n?n.name:(t=>{var e,n;return(null==t?void 0:t.androidBridge)?"android":(null===(n=null===(e=null==t?void 0:t.webkit)||void 0===e?void 0:e.messageHandlers)||void 0===n?void 0:n.bridge)?"ios":"web"})(t),o=t=>{var e;return null===(e=i.PluginHeaders)||void 0===e?void 0:e.find(e=>e.name===t)},a=new Map;return i.convertFileSrc||(i.convertFileSrc=t=>t),i.getPlatform=r,i.handleError=e=>t.console.error(e),i.isNativePlatform=()=>"web"!==r(),i.isPluginAvailable=t=>{const e=a.get(t);return!!(null==e?void 0:e.platforms.has(r()))||!!o(t)},i.registerPlugin=(t,c={})=>{const l=a.get(t);if(l)return console.warn(`Capacitor plugin "${t}" already registered. Cannot register plugins twice.`),l.proxy;const h=r(),u=o(t);let d;const p=s=>{let r;const o=(...o)=>{const a=(async()=>(!d&&h in c?d=d="function"==typeof c[h]?await c[h]():c[h]:null!==n&&!d&&"web"in c&&(d=d="function"==typeof c.web?await c.web():c.web),d))().then(n=>{const a=((n,s)=>{var r,o;if(!u){if(n)return null===(o=n[s])||void 0===o?void 0:o.bind(n);throw new x(`"${t}" plugin is not implemented on ${h}`,e.Unimplemented)}{const e=null==u?void 0:u.methods.find(t=>s===t.name);if(e)return"promise"===e.rtype?e=>i.nativePromise(t,s.toString(),e):(e,n)=>i.nativeCallback(t,s.toString(),e,n);if(n)return null===(r=n[s])||void 0===r?void 0:r.bind(n)}})(n,s);if(a){const t=a(...o);return r=null==t?void 0:t.remove,t}throw new x(`"${t}.${s}()" is not implemented on ${h}`,e.Unimplemented)});return"addListener"===s&&(a.remove=async()=>r()),a};return o.toString=()=>`${s.toString()}() { [capacitor code] }`,Object.defineProperty(o,"name",{value:s,writable:!1,configurable:!1}),o},f=p("addListener"),g=p("removeListener"),m=(t,e)=>{const n=f({eventName:t},e),i=async()=>{const i=await n;g({eventName:t,callbackId:i},e)},s=new Promise(t=>n.then(()=>t({remove:i})));return s.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await i()},s},y=new Proxy({},{get(t,e){switch(e){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return u?m:f;case"removeListener":return g;default:return p(e)}}});return s[t]=y,a.set(t,{name:t,proxy:y,platforms:new Set([...Object.keys(c),...u?[h]:[]])}),y},i.Exception=x,i.DEBUG=!!i.DEBUG,i.isLoggingEnabled=!!i.isLoggingEnabled,i},j=(t=>t.Capacitor=L(t))("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}),R=j.registerPlugin;class M{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,e){let n=!1;this.listeners[t]||(this.listeners[t]=[],n=!0),this.listeners[t].push(e);const i=this.windowListeners[t];return i&&!i.registered&&this.addWindowListener(i),n&&this.sendRetainedArgumentsForEvent(t),Promise.resolve({remove:async()=>this.removeListener(t,e)})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,e,n){const i=this.listeners[t];if(i)i.forEach(t=>t(e));else if(n){let n=this.retainedEventArguments[t];n||(n=[]),n.push(e),this.retainedEventArguments[t]=n}}hasListeners(t){var e;return!!(null===(e=this.listeners[t])||void 0===e?void 0:e.length)}registerWindowListener(t,e){this.windowListeners[e]={registered:!1,windowEventName:t,pluginEventName:e,handler:t=>{this.notifyListeners(e,t)}}}unimplemented(t="not implemented"){return new j.Exception(t,e.Unimplemented)}unavailable(t="not available"){return new j.Exception(t,e.Unavailable)}async removeListener(t,e){const n=this.listeners[t];if(!n)return;const i=n.indexOf(e);this.listeners[t].splice(i,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const e=this.retainedEventArguments[t];e&&(delete this.retainedEventArguments[t],e.forEach(e=>{this.notifyListeners(t,e)}))}}const N=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),$=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class F extends M{async getCookies(){const t=document.cookie,e={};return t.split(";").forEach(t=>{if(t.length<=0)return;let[n,i]=t.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");n=$(n).trim(),i=$(i).trim(),e[n]=i}),e}async setCookie(t){try{const e=N(t.key),n=N(t.value),i=t.expires?`; expires=${t.expires.replace("expires=","")}`:"",s=(t.path||"/").replace("path=",""),r=null!=t.url&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${e}=${n||""}${i}; path=${s}; ${r};`}catch(e){return Promise.reject(e)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const e of t)document.cookie=e.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}R("CapacitorCookies",{web:()=>new F});const U=(t,e={})=>{const n=Object.assign({method:t.method||"GET",headers:t.headers},e),i=((t={})=>{const e=Object.keys(t);return Object.keys(t).map(t=>t.toLocaleLowerCase()).reduce((n,i,s)=>(n[i]=t[e[s]],n),{})})(t.headers)["content-type"]||"";if("string"==typeof t.data)n.body=t.data;else if(i.includes("application/x-www-form-urlencoded")){const e=new URLSearchParams;for(const[n,i]of Object.entries(t.data||{}))e.set(n,i);n.body=e.toString()}else if(i.includes("multipart/form-data")||t.data instanceof FormData){const e=new FormData;if(t.data instanceof FormData)t.data.forEach((t,n)=>{e.append(n,t)});else for(const n of Object.keys(t.data))e.append(n,t.data[n]);n.body=e;const i=new Headers(n.headers);i.delete("content-type"),n.headers=i}else(i.includes("application/json")||"object"==typeof t.data)&&(n.body=JSON.stringify(t.data));return n};class B extends M{async request(t){const e=U(t,t.webFetchExtra),n=((t,e=!0)=>t?Object.entries(t).reduce((t,n)=>{const[i,s]=n;let r,o;return Array.isArray(s)?(o="",s.forEach(t=>{r=e?encodeURIComponent(t):t,o+=`${i}=${r}&`}),o.slice(0,-1)):(r=e?encodeURIComponent(s):s,o=`${i}=${r}`),`${t}&${o}`},"").substr(1):null)(t.params,t.shouldEncodeUrlParams),i=n?`${t.url}?${n}`:t.url,s=await fetch(i,e),r=s.headers.get("content-type")||"";let o,a,{responseType:c="text"}=s.ok?t:{};switch(r.includes("application/json")&&(c="json"),c){case"arraybuffer":case"blob":a=await s.blob(),o=await(async t=>new Promise((e,n)=>{const i=new FileReader;i.onload=()=>{const t=i.result;e(t.indexOf(",")>=0?t.split(",")[1]:t)},i.onerror=t=>n(t),i.readAsDataURL(t)}))(a);break;case"json":o=await s.json();break;default:o=await s.text()}const l={};return s.headers.forEach((t,e)=>{l[e]=t}),{data:o,headers:l,status:s.status,url:s.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}var q,H,V,z,W;R("CapacitorHttp",{web:()=>new B}),function(t){t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT"}(q||(q={})),function(t){t.StatusBar="StatusBar",t.NavigationBar="NavigationBar"}(H||(H={}));class J extends M{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}R("SystemBars",{web:()=>new J}),function(t){t.Prompt="PROMPT",t.Camera="CAMERA",t.Photos="PHOTOS"}(V||(V={})),function(t){t.Rear="REAR",t.Front="FRONT"}(z||(z={})),function(t){t.Uri="uri",t.Base64="base64",t.DataUrl="dataUrl"}(W||(W={}));class K extends M{async getPhoto(t){return new Promise(async(e,n)=>{if(t.webUseInput||t.source===V.Photos)this.fileInputExperience(t,e,n);else if(t.source===V.Prompt){let i=document.querySelector("pwa-action-sheet");i||(i=document.createElement("pwa-action-sheet"),document.body.appendChild(i)),i.header=t.promptLabelHeader||"Photo",i.cancelable=!1,i.options=[{title:t.promptLabelPhoto||"From Photos"},{title:t.promptLabelPicture||"Take Picture"}],i.addEventListener("onSelection",async i=>{0===i.detail?this.fileInputExperience(t,e,n):this.cameraExperience(t,e,n)})}else this.cameraExperience(t,e,n)})}async pickImages(t){return new Promise(async(t,e)=>{this.multipleFileInputExperience(t,e)})}async cameraExperience(t,e,n){if(customElements.get("pwa-camera-modal")){const s=document.createElement("pwa-camera-modal");s.facingMode=t.direction===z.Front?"user":"environment",document.body.appendChild(s);try{await s.componentOnReady(),s.addEventListener("onPhoto",async i=>{const r=i.detail;null===r?n(new x("User cancelled photos app")):r instanceof Error?n(r):e(await this._getCameraPhoto(r,t)),s.dismiss(),document.body.removeChild(s)}),s.present()}catch(i){this.fileInputExperience(t,e,n)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."),this.fileInputExperience(t,e,n)}fileInputExperience(t,e,n){let i=document.querySelector("#_capacitor-camera-input");const s=()=>{var t;null===(t=i.parentNode)||void 0===t||t.removeChild(i)};i||(i=document.createElement("input"),i.id="_capacitor-camera-input",i.type="file",i.hidden=!0,document.body.appendChild(i),i.addEventListener("change",n=>{const r=i.files[0];let o="jpeg";if("image/png"===r.type?o="png":"image/gif"===r.type&&(o="gif"),"dataUrl"===t.resultType||"base64"===t.resultType){const n=new FileReader;n.addEventListener("load",()=>{if("dataUrl"===t.resultType)e({dataUrl:n.result,format:o});else if("base64"===t.resultType){const t=n.result.split(",")[1];e({base64String:t,format:o})}s()}),n.readAsDataURL(r)}else e({webPath:URL.createObjectURL(r),format:o}),s()}),i.addEventListener("cancel",t=>{n(new x("User cancelled photos app")),s()})),i.accept="image/*",i.capture=!0,t.source===V.Photos||t.source===V.Prompt?i.removeAttribute("capture"):t.direction===z.Front?i.capture="user":t.direction===z.Rear&&(i.capture="environment"),i.click()}multipleFileInputExperience(t,e){let n=document.querySelector("#_capacitor-camera-input-multiple");const i=()=>{var t;null===(t=n.parentNode)||void 0===t||t.removeChild(n)};n||(n=document.createElement("input"),n.id="_capacitor-camera-input-multiple",n.type="file",n.hidden=!0,n.multiple=!0,document.body.appendChild(n),n.addEventListener("change",e=>{const s=[];for(let t=0;t<n.files.length;t++){const e=n.files[t];let i="jpeg";"image/png"===e.type?i="png":"image/gif"===e.type&&(i="gif"),s.push({webPath:URL.createObjectURL(e),format:i})}t({photos:s}),i()}),n.addEventListener("cancel",t=>{e(new x("User cancelled photos app")),i()})),n.accept="image/*",n.click()}_getCameraPhoto(t,e){return new Promise((n,i)=>{const s=new FileReader,r=t.type.split("/")[1];"uri"===e.resultType?n({webPath:URL.createObjectURL(t),format:r,saved:!1}):(s.readAsDataURL(t),s.onloadend=()=>{const t=s.result;"dataUrl"===e.resultType?n({dataUrl:t,format:r,saved:!1}):n({base64String:t.split(",")[1],format:r,saved:!1})},s.onerror=t=>{i(t)})})}async checkPermissions(){if("undefined"==typeof navigator||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");try{return{camera:(await window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch(t){throw this.unavailable("Camera permissions are not available in this browser")}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}async pickLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}async getLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}}const G=R("Camera",{web:()=>new K});class X{static async fromFile(t){return{base64:await new Promise((e,n)=>{const i=new FileReader;i.onloadend=()=>{const t=String(i.result||"").split(",")[1];if(!t)return n(new Error("Invalid base64 data"));e(t)},i.onerror=()=>n(i.error),i.readAsDataURL(t)}),mimeType:t.type||"image/jpeg"}}static async fromCamera(){const t=await G.getPhoto({source:V.Prompt,resultType:W.Base64,quality:85});if(!t.base64String)throw new Error("No base64 from camera");return{base64:t.base64String,mimeType:t.format?`image/${t.format}`:"image/jpeg"}}}
/**
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
             */var Y={};
/**
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
             */const Z=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296==(64512&s)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++i)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},Q={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const e=t[s],r=s+1<t.length,o=r?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,l=e>>2,h=(3&e)<<4|o>>4;let u=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(u=64)),i.push(n[l],n[h],n[u],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Z(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(r>>10)),e[i++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],r=s<t.length?n[t.charAt(s)]:0;++s;const o=s<t.length?n[t.charAt(s)]:64;++s;const a=s<t.length?n[t.charAt(s)]:64;if(++s,null==e||null==r||null==o||null==a)throw new tt;const c=e<<2|r>>4;if(i.push(c),64!==o){const t=r<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const et=function(t){return function(t){const e=Z(t);return Q.encodeByteArray(e,!0)}(t).replace(/\./g,"")},nt=()=>
/**
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
             */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
/**
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
             */().__FIREBASE_DEFAULTS__,it=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&function(t){try{return Q.decodeString(t,!0)}catch(n){console.error("base64Decode failed: ",n)}return null}(t[1]);return e&&JSON.parse(e)},st=()=>{try{return nt()||(()=>{if("undefined"==typeof process)return;const t=Y.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||it()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},rt=t=>{const e=(t=>{var e;return null===(e=st())||void 0===e||null===(e=e.emulatorHosts)||void 0===e?void 0:e[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},ot=()=>{var t;return null===(t=st())||void 0===t?void 0:t.config};
/**
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
             */
class at{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
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
             */function ct(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}const lt={};let ht=!1;function ut(t,e){if("undefined"==typeof window||"undefined"==typeof document||!ct(window.location.host)||lt[t]===e||lt[t]||ht)return;function n(t){return`__firebase__banner__${t}`}lt[t]=e;const i="__firebase__banner",s=function(){const t={prod:[],emulator:[]};for(const e of Object.keys(lt))lt[e]?t.emulator.push(e):t.prod.push(e);return t}().prod.length>0;function r(){const t=document.createElement("span");return t.style.cursor="pointer",t.style.marginLeft="16px",t.style.fontSize="24px",t.innerHTML=" &times;",t.onclick=()=>{ht=!0,function(){const t=document.getElementById(i);t&&t.remove()}()},t}function o(){const t=function(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}(i),e=n("text"),o=document.getElementById(e)||document.createElement("span"),a=n("learnmore"),c=document.getElementById(a)||document.createElement("a"),l=n("preprendIcon"),h=document.getElementById(l)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(t.created){const e=t.element;!function(t){t.style.display="flex",t.style.background="#7faaf0",t.style.position="fixed",t.style.bottom="5px",t.style.left="5px",t.style.padding=".5em",t.style.borderRadius="5px",t.style.alignItems="center"}(e),function(t,e){t.setAttribute("id",e),t.innerText="Learn more",t.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",t.setAttribute("target","__blank"),t.style.paddingLeft="5px",t.style.textDecoration="underline"}(c,a);const n=r();!function(t,e){t.setAttribute("width","24"),t.setAttribute("id",e),t.setAttribute("height","24"),t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("fill","none"),t.style.marginLeft="-6px"}(h,l),e.append(h,o,c,n),document.body.appendChild(e)}s?(o.innerText="Preview backend disconnected.",h.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(h.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',o.innerText="Preview backend running in this workspace."),o.setAttribute("id",e)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",o):o()}function dt(){try{return"object"==typeof indexedDB}catch(t){return!1}}function pt(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}})}class ft extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gt.prototype.create)}}class gt{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],r=s?function(t,e){return t.replace(mt,(t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`})}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new ft(i,o,n)}}const mt=/\{\$([^}]+)}/g;function yt(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const n=t[s],r=e[s];if(vt(n)&&vt(r)){if(!yt(n,r))return!1}else if(n!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function vt(t){return null!==t&&"object"==typeof t}
/**
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
             */function wt(t,e=1e3,n=2){const i=e*Math.pow(n,t),s=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+s)}
/**
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
             */function bt(t){return t&&t._delegate?t._delegate:t}class St{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
             */const _t="[DEFAULT]";
/**
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
             */class Et{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new at;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
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
             */(t))try{this.getOrInitializeService({instanceIdentifier:_t})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=_t){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=_t){return this.instances.has(t)}getOptions(t=_t){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,r]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(s)&&r.resolve(i);return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===_t?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}var i;return n||null}normalizeInstanceIdentifier(t=_t){return this.component?this.component.multipleInstances?t:_t:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class It{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Et(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
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
             */var Ct;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(Ct||(Ct={}));const Tt={debug:Ct.DEBUG,verbose:Ct.VERBOSE,info:Ct.INFO,warn:Ct.WARN,error:Ct.ERROR,silent:Ct.SILENT},At=Ct.INFO,kt={[Ct.DEBUG]:"log",[Ct.VERBOSE]:"log",[Ct.INFO]:"info",[Ct.WARN]:"warn",[Ct.ERROR]:"error"},Pt=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),s=kt[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${i}]  ${t.name}:`,...n)};class Ot{constructor(t){this.name=t,this._logLevel=At,this._logHandler=Pt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ct))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Tt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ct.DEBUG,...t),this._logHandler(this,Ct.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ct.VERBOSE,...t),this._logHandler(this,Ct.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ct.INFO,...t),this._logHandler(this,Ct.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ct.WARN,...t),this._logHandler(this,Ct.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ct.ERROR,...t),this._logHandler(this,Ct.ERROR,...t)}}let Dt,xt;const Lt=new WeakMap,jt=new WeakMap,Rt=new WeakMap,Mt=new WeakMap,Nt=new WeakMap;let $t={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return jt.get(t);if("objectStoreNames"===e)return t.objectStoreNames||Rt.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bt(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function Ft(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(xt||(xt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(qt(this),e),Bt(Lt.get(this))}:function(...e){return Bt(t.apply(qt(this),e))}:function(e,...n){const i=t.call(qt(this),e,...n);return Rt.set(i,e.sort?e.sort():[e]),Bt(i)}}function Ut(t){return"function"==typeof t?Ft(t):(t instanceof IDBTransaction&&function(t){if(jt.has(t))return;const e=new Promise((e,n)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",r),t.removeEventListener("abort",r)},s=()=>{e(),i()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",r),t.addEventListener("abort",r)});jt.set(t,e)}(t),e=t,(Dt||(Dt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(t=>e instanceof t)?new Proxy(t,$t):t);var e}function Bt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise((e,n)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",r)},s=()=>{e(Bt(t.result)),i()},r=()=>{n(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",r)});return e.then(e=>{e instanceof IDBCursor&&Lt.set(e,t)}).catch(()=>{}),Nt.set(e,t),e}(t);if(Mt.has(t))return Mt.get(t);const e=Ut(t);return e!==t&&(Mt.set(t,e),Nt.set(e,t)),e}const qt=t=>Nt.get(t);function Ht(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Bt(o);return i&&o.addEventListener("upgradeneeded",t=>{i(Bt(o.result),t.oldVersion,t.newVersion,Bt(o.transaction),t)}),n&&o.addEventListener("blocked",t=>n(t.oldVersion,t.newVersion,t)),a.then(t=>{r&&t.addEventListener("close",()=>r()),s&&t.addEventListener("versionchange",t=>s(t.oldVersion,t.newVersion,t))}).catch(()=>{}),a}const Vt=["get","getKey","getAll","getAllKeys","count"],zt=["put","add","delete","clear"],Wt=new Map;function Jt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Wt.get(e))return Wt.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=zt.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!Vt.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&r.done]))[0]};return Wt.set(e,r),r}var Kt;Kt=$t,$t={...Kt,get:(t,e,n)=>Jt(t,e)||Kt.get(t,e,n),has:(t,e)=>!!Jt(t,e)||Kt.has(t,e)};
/**
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
             */
class Gt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}const Xt="@firebase/app",Yt="0.14.8",Zt=new Ot("@firebase/app"),Qt="@firebase/app-compat",te="@firebase/analytics-compat",ee="@firebase/analytics",ne="@firebase/app-check-compat",ie="@firebase/app-check",se="@firebase/auth",re="@firebase/auth-compat",oe="@firebase/database",ae="@firebase/data-connect",ce="@firebase/database-compat",le="@firebase/functions",he="@firebase/functions-compat",ue="@firebase/installations",de="@firebase/installations-compat",pe="@firebase/messaging",fe="@firebase/messaging-compat",ge="@firebase/performance",me="@firebase/performance-compat",ye="@firebase/remote-config",ve="@firebase/remote-config-compat",we="@firebase/storage",be="@firebase/storage-compat",Se="@firebase/firestore",_e="@firebase/ai",Ee="@firebase/firestore-compat",Ie="firebase",Ce="[DEFAULT]",Te={[Xt]:"fire-core",[Qt]:"fire-core-compat",[ee]:"fire-analytics",[te]:"fire-analytics-compat",[ie]:"fire-app-check",[ne]:"fire-app-check-compat",[se]:"fire-auth",[re]:"fire-auth-compat",[oe]:"fire-rtdb",[ae]:"fire-data-connect",[ce]:"fire-rtdb-compat",[le]:"fire-fn",[he]:"fire-fn-compat",[ue]:"fire-iid",[de]:"fire-iid-compat",[pe]:"fire-fcm",[fe]:"fire-fcm-compat",[ge]:"fire-perf",[me]:"fire-perf-compat",[ye]:"fire-rc",[ve]:"fire-rc-compat",[we]:"fire-gcs",[be]:"fire-gcs-compat",[Se]:"fire-fst",[Ee]:"fire-fst-compat",[_e]:"fire-vertex","fire-js":"fire-js",[Ie]:"fire-js-all"},Ae=new Map,ke=new Map,Pe=new Map;function Oe(t,e){try{t.container.addComponent(e)}catch(n){Zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function De(t){const e=t.name;if(Pe.has(e))return Zt.debug(`There were multiple attempts to register component ${e}.`),!1;Pe.set(e,t);for(const n of Ae.values())Oe(n,t);for(const n of ke.values())Oe(n,t);return!0}function xe(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Le(t){return null!=t&&void 0!==t.settings}
/**
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
             */const je=new gt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
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
             */
class Re{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new St("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw je.create("app-deleted",{appName:this._name})}}
/**
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
             */function Me(t,e={}){let n=t;"object"!=typeof e&&(e={name:e});const i={name:Ce,automaticDataCollectionEnabled:!0,...e},s=i.name;if("string"!=typeof s||!s)throw je.create("bad-app-name",{appName:String(s)});if(n||(n=ot()),!n)throw je.create("no-options");const r=Ae.get(s);if(r){if(yt(n,r.options)&&yt(i,r.config))return r;throw je.create("duplicate-app",{appName:s})}const o=new It(s);for(const c of Pe.values())o.addComponent(c);const a=new Re(n,i,o);return Ae.set(s,a),a}function Ne(t=Ce){const e=Ae.get(t);if(!e&&t===Ce&&ot())return Me();if(!e)throw je.create("no-app",{appName:t});return e}function $e(t,e,n){var i;let s=null!==(i=Te[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${s}" with version "${e}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Zt.warn(t.join(" "))}De(new St(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}
/**
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
             */const Fe="firebase-heartbeat-store";let Ue=null;function Be(){return Ue||(Ue=Ht("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)try{t.createObjectStore(Fe)}catch(n){console.warn(n)}}}).catch(t=>{throw je.create("idb-open",{originalErrorMessage:t.message})})),Ue}async function qe(t,e){try{const n=(await Be()).transaction(Fe,"readwrite"),i=n.objectStore(Fe);await i.put(e,He(t)),await n.done}catch(n){if(n instanceof ft)Zt.warn(n.message);else{const t=je.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});Zt.warn(t.message)}}}function He(t){return`${t.name}!${t.options.appId}`}
/**
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
             */class Ve{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new We(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){try{var t;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ze();var e;if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(t=>t.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>30){const t=function(t){if(0===t.length)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}
/**
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
             */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(t,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Zt.warn(n)}}async getHeartbeatsHeader(){try{var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=ze(),{heartbeatsToSend:n,unsentEntries:i}=function(t,e=1024){const n=[];let i=t.slice();for(const s of t){const t=n.find(t=>t.agent===s.agent);if(t){if(t.dates.push(s.date),Je(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Je(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),s=et(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Zt.warn(e),""}}}function ze(){return(new Date).toISOString().substring(0,10)}class We{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!dt()&&pt().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=(await Be()).transaction(Fe),n=await e.objectStore(Fe).get(He(t));return await e.done,n}catch(e){if(e instanceof ft)Zt.warn(e.message);else{const t=je.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Zt.warn(t.message)}}}(this.app);return null!=t&&t.heartbeats?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){var e;const n=await this.read();return qe(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){if(await this._canUseIndexedDBPromise){var e;const n=await this.read();return qe(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Je(t){return et(JSON.stringify({version:2,heartbeats:t})).length}var Ke;Ke="",De(new St("platform-logger",t=>new Gt(t),"PRIVATE")),De(new St("heartbeat",t=>new Ve(t),"PRIVATE")),$e(Xt,Yt,Ke),$e(Xt,Yt,"esm2020"),$e("fire-js","");var Ge="@firebase/ai",Xe="2.8.0";
/**
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
             */
const Ye="AI",Ze="us-central1",Qe="v1beta",tn=Xe;
/**
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
             */
class en extends ft{constructor(t,e,n){const i=`${Ye}: ${e} (${Ye}/${t})`;super(t,i),this.code=t,this.customErrorData=n,Error.captureStackTrace&&Error.captureStackTrace(this,en),Object.setPrototypeOf(this,en.prototype),this.toString=()=>i}}
/**
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
             */const nn=["user","model","function","system"],sn="HARM_SEVERITY_UNSUPPORTED",rn="SAFETY",on="RECITATION",an="prefer_on_device",cn="only_on_device",ln="only_in_cloud",hn="prefer_in_cloud",un="on_device",dn="in_cloud",pn="error",fn="request-error",gn="response-error",mn="fetch-error",yn="invalid-content",vn="api-not-enabled",wn="invalid-schema",bn="no-api-key",Sn="no-app-id",_n="no-model",En="no-project-id",In="parse-failed",Cn="unsupported",Tn="string",An="number",kn="integer",Pn="boolean",On="array",Dn="object",xn="VERTEX_AI",Ln="GOOGLE_AI";
/**
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
             */
class jn{constructor(t){this.backendType=t}}class Rn extends jn{constructor(){super(Ln)}_getModelPath(t,e){return`/${Qe}/projects/${t}/${e}`}_getTemplatePath(t,e){return`/${Qe}/projects/${t}/templates/${e}`}}class Mn extends jn{constructor(t=Ze){super(xn),this.location=t||Ze}_getModelPath(t,e){return`/${Qe}/projects/${t}/locations/${this.location}/${e}`}_getTemplatePath(t,e){return`/${Qe}/projects/${t}/locations/${this.location}/templates/${e}`}}
/**
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
             */
/**
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
             */
const Nn=new Ot("@firebase/vertexai");var $n;!function(t){t.UNAVAILABLE="unavailable",t.DOWNLOADABLE="downloadable",t.DOWNLOADING="downloading",t.AVAILABLE="available"}($n||($n={}));
/**
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
             */
const Fn=[{type:"image"}];class Un{constructor(t,e,n){this.languageModelProvider=t,this.mode=e,this.isDownloading=!1,this.onDeviceParams={createOptions:{expectedInputs:Fn}},n&&(this.onDeviceParams=n,this.onDeviceParams.createOptions?this.onDeviceParams.createOptions.expectedInputs||(this.onDeviceParams.createOptions.expectedInputs=Fn):this.onDeviceParams.createOptions={expectedInputs:Fn})}async isAvailable(t){if(!this.mode)return Nn.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===ln)return Nn.debug('On-device inference unavailable because mode is "only_in_cloud".'),!1;const e=await this.downloadIfAvailable();if(this.mode===cn){if(e===$n.UNAVAILABLE)throw new en(vn,"Local LanguageModel API not available in this environment.");return e!==$n.DOWNLOADABLE&&e!==$n.DOWNLOADING||(Nn.debug("Waiting for download of LanguageModel to complete."),await this.downloadPromise,!0)}return e!==$n.AVAILABLE?(Nn.debug(`On-device inference unavailable because availability is "${e}".`),!1):!!Un.isOnDeviceRequest(t)||(Nn.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(t){const e=await this.createSession(),n=await Promise.all(t.contents.map(Un.toLanguageModelMessage)),i=await e.prompt(n,this.onDeviceParams.promptOptions);return Un.toResponse(i)}async generateContentStream(t){const e=await this.createSession(),n=await Promise.all(t.contents.map(Un.toLanguageModelMessage)),i=e.promptStreaming(n,this.onDeviceParams.promptOptions);return Un.toStreamResponse(i)}async countTokens(t){throw new en(fn,"Count Tokens is not yet available for on-device model.")}static isOnDeviceRequest(t){if(0===t.contents.length)return Nn.debug("Empty prompt rejected for on-device inference."),!1;for(const e of t.contents){if("function"===e.role)return Nn.debug('"Function" role rejected for on-device inference.'),!1;for(const t of e.parts)if(t.inlineData&&-1===Un.SUPPORTED_MIME_TYPES.indexOf(t.inlineData.mimeType))return Nn.debug(`Unsupported mime type "${t.inlineData.mimeType}" rejected for on-device inference.`),!1}return!0}async downloadIfAvailable(){var t;const e=await(null===(t=this.languageModelProvider)||void 0===t?void 0:t.availability(this.onDeviceParams.createOptions));return e===$n.DOWNLOADABLE&&this.download(),e}download(){var t;this.isDownloading||(this.isDownloading=!0,this.downloadPromise=null===(t=this.languageModelProvider)||void 0===t?void 0:t.create(this.onDeviceParams.createOptions).finally(()=>{this.isDownloading=!1}))}static async toLanguageModelMessage(t){const e=await Promise.all(t.parts.map(Un.toLanguageModelMessageContent));return{role:Un.toLanguageModelMessageRole(t.role),content:e}}static async toLanguageModelMessageContent(t){if(t.text)return{type:"text",value:t.text};if(t.inlineData){const e=await fetch(`data:${t.inlineData.mimeType};base64,${t.inlineData.data}`),n=await e.blob();return{type:"image",value:await createImageBitmap(n)}}throw new en(fn,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(t){return"model"===t?"assistant":"user"}async createSession(){if(!this.languageModelProvider)throw new en(Cn,"Chrome AI requested for unsupported browser version.");const t=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=t,t}static toResponse(t){return{json:async()=>({candidates:[{content:{parts:[{text:t}]}}]})}}static toStreamResponse(t){const e=new TextEncoder;return{body:t.pipeThrough(new TransformStream({transform(t,n){const i=JSON.stringify({candidates:[{content:{role:"model",parts:[{text:t}]}}]});n.enqueue(e.encode(`data: ${i}\n\n`))}}))}}}function Bn(t,e,n){if(void 0!==e&&t)return new Un(e.LanguageModel,t,n)}
/**
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
             */Un.SUPPORTED_MIME_TYPES=["image/jpeg","image/png"];class qn{constructor(t,e,n,i,s){this.app=t,this.backend=e,this.chromeAdapterFactory=s;const r=null==i?void 0:i.getImmediate({optional:!0}),o=null==n?void 0:n.getImmediate({optional:!0});this.auth=o||null,this.appCheck=r||null,this.location=e instanceof Mn?e.location:""}_delete(){return Promise.resolve()}set options(t){this._options=t}get options(){return this._options}}
/**
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
             */function Hn(t,{instanceIdentifier:e}){if(!e)throw new en(pn,"AIService instance identifier is undefined.");const n=function(t){const e=t.split("/");if(e[0]!==Ye)throw new en(pn,`Invalid instance identifier, unknown prefix '${e[0]}'`);switch(e[1]){case"vertexai":const n=e[2];if(!n)throw new en(pn,`Invalid instance identifier, unknown location '${t}'`);return new Mn(n);case"googleai":return new Rn;default:throw new en(pn,`Invalid instance identifier string: '${t}'`)}}(e),i=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new qn(i,n,s,r,Bn)}
/**
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
             */
/**
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
             */
class Vn{constructor(t,e){this._apiSettings=function(t){var e,n,i;if(null===(e=t.app)||void 0===e||null===(e=e.options)||void 0===e||!e.apiKey)throw new en(bn,'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.');if(null===(n=t.app)||void 0===n||null===(n=n.options)||void 0===n||!n.projectId)throw new en(En,'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');if(null===(i=t.app)||void 0===i||null===(i=i.options)||void 0===i||!i.appId)throw new en(Sn,'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.');const s={apiKey:t.app.options.apiKey,project:t.app.options.projectId,appId:t.app.options.appId,automaticDataCollectionEnabled:t.app.automaticDataCollectionEnabled,location:t.location,backend:t.backend};if(Le(t.app)&&t.app.settings.appCheckToken){const e=t.app.settings.appCheckToken;s.getAppCheckToken=()=>Promise.resolve({token:e})}else if(t.appCheck){var r;null!==(r=t.options)&&void 0!==r&&r.useLimitedUseAppCheckTokens?s.getAppCheckToken=()=>t.appCheck.getLimitedUseToken():s.getAppCheckToken=()=>t.appCheck.getToken()}return t.auth&&(s.getAuthToken=()=>t.auth.getToken()),s}(t),this.model=Vn.normalizeModelName(e,this._apiSettings.backend.backendType)}static normalizeModelName(t,e){return e===Ln?Vn.normalizeGoogleAIModelName(t):Vn.normalizeVertexAIModelName(t)}static normalizeGoogleAIModelName(t){return`models/${t}`}static normalizeVertexAIModelName(t){let e;return e=t.includes("/")?t.startsWith("models/")?`publishers/google/${t}`:t:`publishers/google/models/${t}`,e}}
/**
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
             */const zn="AbortError";class Wn{constructor(t){this.params=t}toString(){const t=new URL(this.baseUrl);return t.pathname=this.pathname,t.search=this.queryParams.toString(),t.toString()}get pathname(){return this.params.templateId?`${this.params.apiSettings.backend._getTemplatePath(this.params.apiSettings.project,this.params.templateId)}:${this.params.task}`:`${this.params.apiSettings.backend._getModelPath(this.params.apiSettings.project,this.params.model)}:${this.params.task}`}get baseUrl(){var t,e;return null!==(t=null===(e=this.params.singleRequestOptions)||void 0===e?void 0:e.baseUrl)&&void 0!==t?t:"https://firebasevertexai.googleapis.com"}get queryParams(){const t=new URLSearchParams;return this.params.stream&&t.set("alt","sse"),t}}async function Jn(t){const e=new Headers;if(e.append("Content-Type","application/json"),e.append("x-goog-api-client",function(t){const e=[];return e.push(`gl-js/${tn}`),e.push(`fire/${tn}`),t.params.apiSettings.inferenceMode!==an&&t.params.apiSettings.inferenceMode!==hn||e.push("hybrid"),e.join(" ")}(t)),e.append("x-goog-api-key",t.params.apiSettings.apiKey),t.params.apiSettings.automaticDataCollectionEnabled&&e.append("X-Firebase-Appid",t.params.apiSettings.appId),t.params.apiSettings.getAppCheckToken){const n=await t.params.apiSettings.getAppCheckToken();n&&(e.append("X-Firebase-AppCheck",n.token),n.error&&Nn.warn(`Unable to obtain a valid App Check token: ${n.error.message}`))}if(t.params.apiSettings.getAuthToken){const n=await t.params.apiSettings.getAuthToken();n&&e.append("Authorization",`Firebase ${n.accessToken}`)}return e}async function Kn(t,e){var n,i;const s=new Wn(t);let r;const o=null===(n=t.singleRequestOptions)||void 0===n?void 0:n.signal,a=null!=(null===(i=t.singleRequestOptions)||void 0===i?void 0:i.timeout)&&t.singleRequestOptions.timeout>=0?t.singleRequestOptions.timeout:18e4,c=new AbortController,l=setTimeout(()=>{c.abort(new DOMException("Timeout has expired.",zn)),Nn.debug(`Aborting request to ${s} due to timeout (${a}ms)`)},a),h=AbortSignal.any(o?[o,c.signal]:[c.signal]);var u;if(o&&o.aborted)throw clearTimeout(l),new DOMException(null!==(u=o.reason)&&void 0!==u?u:"Aborted externally before fetch",zn);try{const t={method:"POST",headers:await Jn(s),signal:h,body:e};if(r=await fetch(s.toString(),t),!r.ok){let t,e="";try{const n=await r.json();e=n.error.message,n.error.details&&(e+=` ${JSON.stringify(n.error.details)}`,t=n.error.details)}catch(d){}if(403===r.status&&t&&t.some(t=>"SERVICE_DISABLED"===t.reason)&&t.some(t=>{var e;return null===(e=t.links)||void 0===e||null===(e=e[0])||void 0===e?void 0:e.description.includes("Google developers console API activation")}))throw new en(vn,`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${s.params.apiSettings.project}/ailogic/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:r.status,statusText:r.statusText,errorDetails:t});throw new en(mn,`Error fetching from ${s}: [${r.status} ${r.statusText}] ${e}`,{status:r.status,statusText:r.statusText,errorDetails:t})}}catch(d){let t=d;throw d.code!==mn&&d.code!==vn&&d instanceof Error&&d.name!==zn&&(t=new en(pn,`Error fetching from ${s.toString()}: ${d.message}`),t.stack=d.stack),t}finally{clearTimeout(l)}return r}
/**
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
             */function Gn(t){if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&Nn.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Qn(t.candidates[0]))throw new en(gn,`Response error: ${ti(t)}. Response body stored in error.response`,{response:t});return!0}return!1}function Xn(t,e=dn){t.candidates&&!t.candidates[0].hasOwnProperty("index")&&(t.candidates[0].index=0);const n=function(t){return t.text=()=>{if(Gn(t))return Yn(t,t=>!t.thought);if(t.promptFeedback)throw new en(gn,`Text not available. ${ti(t)}`,{response:t});return""},t.thoughtSummary=()=>{if(Gn(t)){const e=Yn(t,t=>!!t.thought);return""===e?void 0:e}if(t.promptFeedback)throw new en(gn,`Thought summary not available. ${ti(t)}`,{response:t})},t.inlineDataParts=()=>{if(Gn(t))return function(t){var e;const n=[];if(null!==(e=t.candidates)&&void 0!==e&&null!==(e=e[0].content)&&void 0!==e&&e.parts)for(const s of null===(i=t.candidates)||void 0===i||null===(i=i[0].content)||void 0===i?void 0:i.parts){var i;s.inlineData&&n.push(s)}return n.length>0?n:void 0}(t);if(t.promptFeedback)throw new en(gn,`Data not available. ${ti(t)}`,{response:t})},t.functionCalls=()=>{if(Gn(t))return function(t){var e;const n=[];if(null!==(e=t.candidates)&&void 0!==e&&null!==(e=e[0].content)&&void 0!==e&&e.parts)for(const s of null===(i=t.candidates)||void 0===i||null===(i=i[0].content)||void 0===i?void 0:i.parts){var i;s.functionCall&&n.push(s.functionCall)}return n.length>0?n:void 0}(t);if(t.promptFeedback)throw new en(gn,`Function call not available. ${ti(t)}`,{response:t})},t}(t);return n.inferenceSource=e,n}function Yn(t,e){var n;const i=[];if(null!==(n=t.candidates)&&void 0!==n&&null!==(n=n[0].content)&&void 0!==n&&n.parts)for(const r of null===(s=t.candidates)||void 0===s||null===(s=s[0].content)||void 0===s?void 0:s.parts){var s;r.text&&e(r)&&i.push(r.text)}return i.length>0?i.join(""):""}const Zn=[on,rn];function Qn(t){return!!t.finishReason&&Zn.some(e=>e===t.finishReason)}function ti(t){var e;let n="";var i,s;if(t.candidates&&0!==t.candidates.length||!t.promptFeedback){if(null!==(e=t.candidates)&&void 0!==e&&e[0]){const e=t.candidates[0];Qn(e)&&(n+=`Candidate was blocked due to ${e.finishReason}`,e.finishMessage&&(n+=`: ${e.finishMessage}`))}}else n+="Response was blocked",null!==(i=t.promptFeedback)&&void 0!==i&&i.blockReason&&(n+=` due to ${t.promptFeedback.blockReason}`),null!==(s=t.promptFeedback)&&void 0!==s&&s.blockReasonMessage&&(n+=`: ${t.promptFeedback.blockReasonMessage}`);return n}
/**
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
             */function ei(t){var e,n;if(null===(e=t.safetySettings)||void 0===e||e.forEach(t=>{if(t.method)throw new en(Cn,"SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),null!==(n=t.generationConfig)&&void 0!==n&&n.topK){const e=Math.round(t.generationConfig.topK);e!==t.generationConfig.topK&&(Nn.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),t.generationConfig.topK=e)}return t}function ni(t){return{candidates:t.candidates?ii(t.candidates):void 0,prompt:t.promptFeedback?si(t.promptFeedback):void 0,usageMetadata:t.usageMetadata}}function ii(t){const e=[];let n;return e&&t.forEach(t=>{var i;let s;if(t.citationMetadata&&(s={citations:t.citationMetadata.citationSources}),t.safetyRatings&&(n=t.safetyRatings.map(t=>{var e,n,i;return{...t,severity:null!==(e=t.severity)&&void 0!==e?e:sn,probabilityScore:null!==(n=t.probabilityScore)&&void 0!==n?n:0,severityScore:null!==(i=t.severityScore)&&void 0!==i?i:0}})),null!==(i=t.content)&&void 0!==i&&null!==(i=i.parts)&&void 0!==i&&i.some(t=>null==t?void 0:t.videoMetadata))throw new en(Cn,"Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");const r={index:t.index,content:t.content,finishReason:t.finishReason,finishMessage:t.finishMessage,safetyRatings:n,citationMetadata:s,groundingMetadata:t.groundingMetadata,urlContextMetadata:t.urlContextMetadata};e.push(r)}),e}function si(t){const e=[];return t.safetyRatings.forEach(t=>{var n,i,s;e.push({category:t.category,probability:t.probability,severity:null!==(n=t.severity)&&void 0!==n?n:sn,probabilityScore:null!==(i=t.probabilityScore)&&void 0!==i?i:0,severityScore:null!==(s=t.severityScore)&&void 0!==s?s:0,blocked:t.blocked})}),{blockReason:t.blockReason,safetyRatings:e,blockReasonMessage:t.blockReasonMessage}}
/**
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
             */const ri=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function oi(t,e,n){const i=function(t){const e=t.getReader();return new ReadableStream({start(t){let n="";return i();function i(){return e.read().then(({value:e,done:s})=>{if(s)return n.trim()?void t.error(new en(In,"Failed to parse stream")):void t.close();n+=e;let r,o=n.match(ri);for(;o;){try{r=JSON.parse(o[1])}catch(a){return void t.error(new en(In,`Error parsing JSON response: "${o[1]}`))}t.enqueue(r),n=n.substring(o[0].length),o=n.match(ri)}return i()})}}})}(t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))),[s,r]=i.tee();return{stream:ci(s,e,n),response:ai(r,e,n)}}async function ai(t,e,n){const i=[],s=t.getReader();for(;;){const{done:t,value:r}=await s.read();if(t){let t=li(i);return e.backend.backendType===Ln&&(t=ni(t)),Xn(t,n)}i.push(r)}}async function*ci(t,e,n){const i=t.getReader();for(;;){var s,r;const{value:t,done:o}=await i.read();if(o)break;let a;a=e.backend.backendType===Ln?Xn(ni(t),n):Xn(t,n);const c=null===(s=a.candidates)||void 0===s?void 0:s[0];(null!=c&&null!==(r=c.content)&&void 0!==r&&r.parts||null!=c&&c.finishReason||null!=c&&c.citationMetadata||null!=c&&c.urlContextMetadata)&&(yield a)}}function li(t){const e=t[t.length-1],n={promptFeedback:null==e?void 0:e.promptFeedback};for(const i of t)if(i.candidates)for(const t of i.candidates){const e=t.index||0;n.candidates||(n.candidates=[]),n.candidates[e]||(n.candidates[e]={index:t.index}),n.candidates[e].citationMetadata=t.citationMetadata,n.candidates[e].finishReason=t.finishReason,n.candidates[e].finishMessage=t.finishMessage,n.candidates[e].safetyRatings=t.safetyRatings,n.candidates[e].groundingMetadata=t.groundingMetadata;const i=t.urlContextMetadata;if("object"==typeof i&&null!==i&&Object.keys(i).length>0&&(n.candidates[e].urlContextMetadata=i),t.content){if(!t.content.parts)continue;n.candidates[e].content||(n.candidates[e].content={role:t.content.role||"user",parts:[]});for(const i of t.content.parts){const t={...i};""!==i.text&&Object.keys(t).length>0&&n.candidates[e].content.parts.push(t)}}}return n}
/**
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
             */const hi=[mn,pn,vn];async function ui(t,e,n,i){if(!e)return{response:await i(),inferenceSource:dn};switch(e.mode){case cn:if(await e.isAvailable(t))return{response:await n(),inferenceSource:un};throw new en(Cn,"Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.");case ln:return{response:await i(),inferenceSource:dn};case hn:try{return{response:await i(),inferenceSource:dn}}catch(s){if(s instanceof en&&hi.includes(s.code))return{response:await n(),inferenceSource:un};throw s}case an:return await e.isAvailable(t)?{response:await n(),inferenceSource:un}:{response:await i(),inferenceSource:dn};default:throw new en(pn,`Unexpected infererence mode: ${e.mode}`)}}
/**
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
             */async function di(t,e,n,i,s){const r=await ui(n,i,()=>i.generateContentStream(n),()=>async function(t,e,n,i){return t.backend.backendType===Ln&&(n=ei(n)),Kn({task:"streamGenerateContent",model:e,apiSettings:t,stream:!0,singleRequestOptions:i},JSON.stringify(n))}(t,e,n,s));return oi(r.response,t,r.inferenceSource)}async function pi(t,e,n,i,s){const r=await ui(n,i,()=>i.generateContent(n),()=>async function(t,e,n,i){return t.backend.backendType===Ln&&(n=ei(n)),Kn({model:e,task:"generateContent",apiSettings:t,stream:!1,singleRequestOptions:i},JSON.stringify(n))}(t,e,n,s)),o=await async function(t,e){const n=await t.json();return e.backend.backendType===Ln?ni(n):n}
/**
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
             */(r.response,t);return{response:Xn(o,r.inferenceSource)}}function fi(t){if(null!=t)return"string"==typeof t?{role:"system",parts:[{text:t}]}:t.text?{role:"system",parts:[t]}:t.parts?t.role?t:{role:"system",parts:t.parts}:void 0}function gi(t){let e=[];if("string"==typeof t)e=[{text:t}];else for(const n of t)"string"==typeof n?e.push({text:n}):e.push(n);return function(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let i=!1,s=!1;for(const r of t)"functionResponse"in r?(n.parts.push(r),s=!0):(e.parts.push(r),i=!0);if(i&&s)throw new en(yn,"Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!i&&!s)throw new en(yn,"No Content is provided for sending chat message.");return i?e:n}(e)}function mi(t){let e;return e=t.contents?t:{contents:[gi(t)]},t.systemInstruction&&(e.systemInstruction=fi(t.systemInstruction)),e}
/**
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
             */const yi=["text","inlineData","functionCall","functionResponse","thought","thoughtSignature"],vi={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","thought","thoughtSignature"],system:["text"]},wi={user:["model"],function:["model"],model:["user","function"],system:[]},bi="SILENT_ERROR";class Si{constructor(t,e,n,i,s){this.model=e,this.chromeAdapter=n,this.params=i,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=t,null!=i&&i.history&&(function(t){let e=null;for(const n of t){const{role:t,parts:i}=n;if(!e&&"user"!==t)throw new en(yn,`First Content should be with role 'user', got ${t}`);if(!nn.includes(t))throw new en(yn,`Each item should include role field. Got ${t} but valid roles are: ${JSON.stringify(nn)}`);if(!Array.isArray(i))throw new en(yn,"Content should have 'parts' property with an array of Parts");if(0===i.length)throw new en(yn,"Each Content should have at least one part");const s={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,executableCode:0,codeExecutionResult:0};for(const e of i)for(const t of yi)t in e&&(s[t]+=1);const r=vi[t];for(const e of yi)if(!r.includes(e)&&s[e]>0)throw new en(yn,`Content with role '${t}' can't contain '${e}' part`);if(e&&!wi[t].includes(e.role))throw new en(yn,`Content with role '${t}' can't follow '${e.role}'. Valid previous roles: ${JSON.stringify(wi)}`);e=n}}
/**
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
             */(i.history),this._history=i.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,e){var n,i,s,r,o;await this._sendPromise;const a=gi(t),c={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(i=this.params)||void 0===i?void 0:i.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(r=this.params)||void 0===r?void 0:r.toolConfig,systemInstruction:null===(o=this.params)||void 0===o?void 0:o.systemInstruction,contents:[...this._history,a]};let l={};return this._sendPromise=this._sendPromise.then(()=>pi(this._apiSettings,this.model,c,this.chromeAdapter,{...this.requestOptions,...e})).then(t=>{if(t.response.candidates&&t.response.candidates.length>0){var e,n;this._history.push(a);const i={parts:(null===(e=t.response.candidates)||void 0===e?void 0:e[0].content.parts)||[],role:(null===(n=t.response.candidates)||void 0===n?void 0:n[0].content.role)||"model"};this._history.push(i)}else{const e=ti(t.response);e&&Nn.warn(`sendMessage() was unsuccessful. ${e}. Inspect response object for details.`)}l=t}),await this._sendPromise,l}async sendMessageStream(t,e){var n,i,s,r,o;await this._sendPromise;const a=gi(t),c={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(i=this.params)||void 0===i?void 0:i.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(r=this.params)||void 0===r?void 0:r.toolConfig,systemInstruction:null===(o=this.params)||void 0===o?void 0:o.systemInstruction,contents:[...this._history,a]},l=di(this._apiSettings,this.model,c,this.chromeAdapter,{...this.requestOptions,...e});return this._sendPromise=this._sendPromise.then(()=>l).catch(t=>{throw new Error(bi)}).then(t=>t.response).then(t=>{if(t.candidates&&t.candidates.length>0){this._history.push(a);const e={...t.candidates[0].content};e.role||(e.role="model"),this._history.push(e)}else{const e=ti(t);e&&Nn.warn(`sendMessageStream() was unsuccessful. ${e}. Inspect response object for details.`)}}).catch(t=>{t.message!==bi&&"AbortError"!==t.name&&Nn.error(t)}),l}}
/**
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
             */async function _i(t,e,n,i,s){if((null==i?void 0:i.mode)===cn)throw new en(Cn,"countTokens() is not supported for on-device models.");return async function(t,e,n,i){let s="";if(t.backend.backendType===Ln){const t=function(t,e){return{generateContentRequest:{model:e,...t}}}(n,e);s=JSON.stringify(t)}else s=JSON.stringify(n);return(await Kn({model:e,task:"countTokens",apiSettings:t,stream:!1,singleRequestOptions:i},s)).json()}(t,e,n,s)}
/**
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
             */class Ei extends Vn{constructor(t,e,n,i){super(t,e.model),this.chromeAdapter=i,this.generationConfig=e.generationConfig||{},function(t){var e,n;if(null!=(null===(e=t.thinkingConfig)||void 0===e?void 0:e.thinkingBudget)&&null!==(n=t.thinkingConfig)&&void 0!==n&&n.thinkingLevel)throw new en(Cn,"Cannot set both thinkingBudget and thinkingLevel in a config.")}
/**
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
             */(this.generationConfig),this.safetySettings=e.safetySettings||[],this.tools=e.tools,this.toolConfig=e.toolConfig,this.systemInstruction=fi(e.systemInstruction),this.requestOptions=n||{}}async generateContent(t,e){const n=mi(t);return pi(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...n},this.chromeAdapter,{...this.requestOptions,...e})}async generateContentStream(t,e){const n=mi(t);return di(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...n},this.chromeAdapter,{...this.requestOptions,...e})}startChat(t){return new Si(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...t},this.requestOptions)}async countTokens(t,e){const n=mi(t);return _i(this._apiSettings,this.model,n,this.chromeAdapter,{...this.requestOptions,...e})}}class Ii{constructor(t){if(!t.type&&!t.anyOf)throw new en(wn,"A schema must have either a 'type' or an 'anyOf' array of sub-schemas.");for(const e in t)this[e]=t[e];this.type=t.type,this.format=t.hasOwnProperty("format")?t.format:void 0,this.nullable=!!t.hasOwnProperty("nullable")&&!!t.nullable}toJSON(){const t={type:this.type};for(const e in this)this.hasOwnProperty(e)&&void 0!==this[e]&&("required"===e&&this.type!==Dn||(t[e]=this[e]));return t}static array(t){return new Pi(t,t.items)}static object(t){return new Oi(t,t.properties,t.optionalProperties)}static string(t){return new ki(t)}static enumString(t){return new ki(t,t.enum)}static integer(t){return new Ci(t)}static number(t){return new Ti(t)}static boolean(t){return new Ai(t)}static anyOf(t){return new Di(t)}}class Ci extends Ii{constructor(t){super({type:kn,...t})}}class Ti extends Ii{constructor(t){super({type:An,...t})}}class Ai extends Ii{constructor(t){super({type:Pn,...t})}}class ki extends Ii{constructor(t,e){super({type:Tn,...t}),this.enum=e}toJSON(){const t=super.toJSON();return this.enum&&(t.enum=this.enum),t}}class Pi extends Ii{constructor(t,e){super({type:On,...t}),this.items=e}toJSON(){const t=super.toJSON();return t.items=this.items.toJSON(),t}}class Oi extends Ii{constructor(t,e,n=[]){super({type:Dn,...t}),this.properties=e,this.optionalProperties=n}toJSON(){const t=super.toJSON();t.properties={...this.properties};const e=[];if(this.optionalProperties)for(const n of this.optionalProperties)if(!this.properties.hasOwnProperty(n))throw new en(wn,`Property "${n}" specified in "optionalProperties" does not exist.`);for(const n in this.properties)this.properties.hasOwnProperty(n)&&(t.properties[n]=this.properties[n].toJSON(),this.optionalProperties.includes(n)||e.push(n));return e.length>0&&(t.required=e),delete t.optionalProperties,t}}class Di extends Ii{constructor(t){if(0===t.anyOf.length)throw new en(wn,"The 'anyOf' array must not be empty.");super({...t,type:void 0}),this.anyOf=t.anyOf}toJSON(){const t=super.toJSON();return this.anyOf&&Array.isArray(this.anyOf)&&(t.anyOf=this.anyOf.map(t=>t.toJSON())),t}}
/**
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
             */De(new St(Ye,Hn,"PUBLIC").setMultipleInstances(!0)),$e(Ge,Xe),$e(Ge,Xe,"esm2020"),
/**
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
             */
$e("firebase","12.9.0","app");var xi,Li="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
            Copyright The Closure Library Authors.
            SPDX-License-Identifier: Apache-2.0
            */(function(){var t;
/** @license

             Copyright The Closure Library Authors.
             SPDX-License-Identifier: Apache-2.0
            */function e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function n(t,e,n){n||(n=0);const i=Array(16);if("string"==typeof e)for(var s=0;s<16;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;s<16;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];let r,o=t.g[3];r=e+(o^n&(s^o))+i[0]+3614090360&4294967295,r=o+(s^(e=n+(r<<7&4294967295|r>>>25))&(n^s))+i[1]+3905402710&4294967295,o=e+(r<<12&4294967295|r>>>20),r=s+(n^o&(e^n))+i[2]+606105819&4294967295,r=n+(e^(s=o+(r<<17&4294967295|r>>>15))&(o^e))+i[3]+3250441966&4294967295,r=e+(o^(n=s+(r<<22&4294967295|r>>>10))&(s^o))+i[4]+4118548399&4294967295,r=o+(s^(e=n+(r<<7&4294967295|r>>>25))&(n^s))+i[5]+1200080426&4294967295,o=e+(r<<12&4294967295|r>>>20),r=s+(n^o&(e^n))+i[6]+2821735955&4294967295,r=n+(e^(s=o+(r<<17&4294967295|r>>>15))&(o^e))+i[7]+4249261313&4294967295,r=e+(o^(n=s+(r<<22&4294967295|r>>>10))&(s^o))+i[8]+1770035416&4294967295,r=o+(s^(e=n+(r<<7&4294967295|r>>>25))&(n^s))+i[9]+2336552879&4294967295,o=e+(r<<12&4294967295|r>>>20),r=s+(n^o&(e^n))+i[10]+4294925233&4294967295,r=n+(e^(s=o+(r<<17&4294967295|r>>>15))&(o^e))+i[11]+2304563134&4294967295,r=e+(o^(n=s+(r<<22&4294967295|r>>>10))&(s^o))+i[12]+1804603682&4294967295,r=o+(s^(e=n+(r<<7&4294967295|r>>>25))&(n^s))+i[13]+4254626195&4294967295,o=e+(r<<12&4294967295|r>>>20),r=s+(n^o&(e^n))+i[14]+2792965006&4294967295,r=n+(e^(s=o+(r<<17&4294967295|r>>>15))&(o^e))+i[15]+1236535329&4294967295,r=e+(s^o&((n=s+(r<<22&4294967295|r>>>10))^s))+i[1]+4129170786&4294967295,r=o+(n^s&((e=n+(r<<5&4294967295|r>>>27))^n))+i[6]+3225465664&4294967295,o=e+(r<<9&4294967295|r>>>23),r=s+(e^n&(o^e))+i[11]+643717713&4294967295,r=n+(o^e&((s=o+(r<<14&4294967295|r>>>18))^o))+i[0]+3921069994&4294967295,r=e+(s^o&((n=s+(r<<20&4294967295|r>>>12))^s))+i[5]+3593408605&4294967295,r=o+(n^s&((e=n+(r<<5&4294967295|r>>>27))^n))+i[10]+38016083&4294967295,o=e+(r<<9&4294967295|r>>>23),r=s+(e^n&(o^e))+i[15]+3634488961&4294967295,r=n+(o^e&((s=o+(r<<14&4294967295|r>>>18))^o))+i[4]+3889429448&4294967295,r=e+(s^o&((n=s+(r<<20&4294967295|r>>>12))^s))+i[9]+568446438&4294967295,r=o+(n^s&((e=n+(r<<5&4294967295|r>>>27))^n))+i[14]+3275163606&4294967295,o=e+(r<<9&4294967295|r>>>23),r=s+(e^n&(o^e))+i[3]+4107603335&4294967295,r=n+(o^e&((s=o+(r<<14&4294967295|r>>>18))^o))+i[8]+1163531501&4294967295,r=e+(s^o&((n=s+(r<<20&4294967295|r>>>12))^s))+i[13]+2850285829&4294967295,r=o+(n^s&((e=n+(r<<5&4294967295|r>>>27))^n))+i[2]+4243563512&4294967295,o=e+(r<<9&4294967295|r>>>23),r=s+(e^n&(o^e))+i[7]+1735328473&4294967295,r=n+(o^e&((s=o+(r<<14&4294967295|r>>>18))^o))+i[12]+2368359562&4294967295,r=e+((n=s+(r<<20&4294967295|r>>>12))^s^o)+i[5]+4294588738&4294967295,r=o+((e=n+(r<<4&4294967295|r>>>28))^n^s)+i[8]+2272392833&4294967295,o=e+(r<<11&4294967295|r>>>21),r=s+(o^e^n)+i[11]+1839030562&4294967295,r=n+((s=o+(r<<16&4294967295|r>>>16))^o^e)+i[14]+4259657740&4294967295,r=e+((n=s+(r<<23&4294967295|r>>>9))^s^o)+i[1]+2763975236&4294967295,r=o+((e=n+(r<<4&4294967295|r>>>28))^n^s)+i[4]+1272893353&4294967295,o=e+(r<<11&4294967295|r>>>21),r=s+(o^e^n)+i[7]+4139469664&4294967295,r=n+((s=o+(r<<16&4294967295|r>>>16))^o^e)+i[10]+3200236656&4294967295,r=e+((n=s+(r<<23&4294967295|r>>>9))^s^o)+i[13]+681279174&4294967295,r=o+((e=n+(r<<4&4294967295|r>>>28))^n^s)+i[0]+3936430074&4294967295,o=e+(r<<11&4294967295|r>>>21),r=s+(o^e^n)+i[3]+3572445317&4294967295,r=n+((s=o+(r<<16&4294967295|r>>>16))^o^e)+i[6]+76029189&4294967295,r=e+((n=s+(r<<23&4294967295|r>>>9))^s^o)+i[9]+3654602809&4294967295,r=o+((e=n+(r<<4&4294967295|r>>>28))^n^s)+i[12]+3873151461&4294967295,o=e+(r<<11&4294967295|r>>>21),r=s+(o^e^n)+i[15]+530742520&4294967295,r=n+((s=o+(r<<16&4294967295|r>>>16))^o^e)+i[2]+3299628645&4294967295,r=e+(s^((n=s+(r<<23&4294967295|r>>>9))|~o))+i[0]+4096336452&4294967295,r=o+(n^((e=n+(r<<6&4294967295|r>>>26))|~s))+i[7]+1126891415&4294967295,o=e+(r<<10&4294967295|r>>>22),r=s+(e^(o|~n))+i[14]+2878612391&4294967295,r=n+(o^((s=o+(r<<15&4294967295|r>>>17))|~e))+i[5]+4237533241&4294967295,r=e+(s^((n=s+(r<<21&4294967295|r>>>11))|~o))+i[12]+1700485571&4294967295,r=o+(n^((e=n+(r<<6&4294967295|r>>>26))|~s))+i[3]+2399980690&4294967295,o=e+(r<<10&4294967295|r>>>22),r=s+(e^(o|~n))+i[10]+4293915773&4294967295,r=n+(o^((s=o+(r<<15&4294967295|r>>>17))|~e))+i[1]+2240044497&4294967295,r=e+(s^((n=s+(r<<21&4294967295|r>>>11))|~o))+i[8]+1873313359&4294967295,r=o+(n^((e=n+(r<<6&4294967295|r>>>26))|~s))+i[15]+4264355552&4294967295,o=e+(r<<10&4294967295|r>>>22),r=s+(e^(o|~n))+i[6]+2734768916&4294967295,r=n+(o^((s=o+(r<<15&4294967295|r>>>17))|~e))+i[13]+1309151649&4294967295,r=e+(s^((n=s+(r<<21&4294967295|r>>>11))|~o))+i[4]+4149444226&4294967295,r=o+(n^((e=n+(r<<6&4294967295|r>>>26))|~s))+i[11]+3174756917&4294967295,o=e+(r<<10&4294967295|r>>>22),r=s+(e^(o|~n))+i[2]+718787259&4294967295,r=n+(o^((s=o+(r<<15&4294967295|r>>>17))|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(r<<21&4294967295|r>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+o&4294967295}function i(t,e){this.h=e;const n=[];let i=!0;for(let s=t.length-1;s>=0;s--){const r=0|t[s];i&&r==e||(n[s]=r,i=!1)}this.g=n}!function(t,e){function n(){}n.prototype=e.prototype,t.F=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.D=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}(e,function(){this.blockSize=-1}),e.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.v=function(t,e){void 0===e&&(e=t.length);const i=e-this.blockSize,s=this.C;let r=this.h,o=0;for(;o<e;){if(0==r)for(;o<=i;)n(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<e;)if(s[r++]=t.charCodeAt(o++),r==this.blockSize){n(this,s),r=0;break}}else for(;o<e;)if(s[r++]=t[o++],r==this.blockSize){n(this,s),r=0;break}}this.h=r,this.o+=e},e.prototype.A=function(){var t=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;e=8*this.o;for(var n=t.length-8;n<t.length;++n)t[n]=255&e,e/=256;for(this.v(t),t=Array(16),e=0,n=0;n<4;++n)for(let i=0;i<32;i+=8)t[e++]=this.g[n]>>>i&255;return t};var s={};function r(t){return-128<=t&&t<128?function(t,e){var n=s;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,function(t){return new i([0|t],t<0?-1:0)}):new i([0|t],t<0?-1:0)}function o(t){if(isNaN(t)||!isFinite(t))return a;if(t<0)return d(o(-t));const e=[];let n=1;for(let i=0;t>=n;i++)e[i]=t/n|0,n*=4294967296;return new i(e,0)}var a=r(0),c=r(1),l=r(16777216);function h(t){if(0!=t.h)return!1;for(let e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function u(t){return-1==t.h}function d(t){const e=t.g.length,n=[];for(let i=0;i<e;i++)n[i]=~t.g[i];return new i(n,~t.h).add(c)}function p(t,e){return t.add(d(e))}function f(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function g(t,e){this.g=t,this.h=e}function m(t,e){if(h(e))throw Error("division by zero");if(h(t))return new g(a,a);if(u(t))return e=m(d(t),e),new g(d(e.g),d(e.h));if(u(e))return e=m(t,d(e)),new g(d(e.g),e.h);if(t.g.length>30){if(u(t)||u(e))throw Error("slowDivide_ only works with positive integers.");for(var n=c,i=e;i.l(t)<=0;)n=y(n),i=y(i);var s=v(n,1),r=v(i,1);for(i=v(i,2),n=v(n,2);!h(i);){var l=r.add(i);l.l(t)<=0&&(s=s.add(n),r=l),i=v(i,1),n=v(n,1)}return e=p(t,s.j(e)),new g(s,e)}for(s=a;t.l(e)>=0;){for(n=Math.max(1,Math.floor(t.m()/e.m())),i=(i=Math.ceil(Math.log(n)/Math.LN2))<=48?1:Math.pow(2,i-48),l=(r=o(n)).j(e);u(l)||l.l(t)>0;)l=(r=o(n-=i)).j(e);h(r)&&(r=c),s=s.add(r),t=p(t,l)}return new g(s,t)}function y(t){const e=t.g.length+1,n=[];for(let i=0;i<e;i++)n[i]=t.i(i)<<1|t.i(i-1)>>>31;return new i(n,t.h)}function v(t,e){const n=e>>5;e%=32;const s=t.g.length-n,r=[];for(let i=0;i<s;i++)r[i]=e>0?t.i(i+n)>>>e|t.i(i+n+1)<<32-e:t.i(i+n);return new i(r,t.h)}(t=i.prototype).m=function(){if(u(this))return-d(this).m();let t=0,e=1;for(let n=0;n<this.g.length;n++){const i=this.i(n);t+=(i>=0?i:4294967296+i)*e,e*=4294967296}return t},t.toString=function(t){if((t=t||10)<2||36<t)throw Error("radix out of range: "+t);if(h(this))return"0";if(u(this))return"-"+d(this).toString(t);const e=o(Math.pow(t,6));var n=this;let i="";for(;;){const s=m(n,e).g;let r=(((n=p(n,s.j(e))).g.length>0?n.g[0]:n.h)>>>0).toString(t);if(h(n=s))return r+i;for(;r.length<6;)r="0"+r;i=r+i}},t.i=function(t){return t<0?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return u(t=p(this,t))?-1:h(t)?0:1},t.abs=function(){return u(this)?d(this):this},t.add=function(t){const e=Math.max(this.g.length,t.g.length),n=[];let s=0;for(let i=0;i<=e;i++){let e=s+(65535&this.i(i))+(65535&t.i(i)),r=(e>>>16)+(this.i(i)>>>16)+(t.i(i)>>>16);s=r>>>16,e&=65535,r&=65535,n[i]=r<<16|e}return new i(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(h(this)||h(t))return a;if(u(this))return u(t)?d(this).j(d(t)):d(d(this).j(t));if(u(t))return d(this.j(d(t)));if(this.l(l)<0&&t.l(l)<0)return o(this.m()*t.m());const e=this.g.length+t.g.length,n=[];for(var s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(let e=0;e<t.g.length;e++){const i=this.i(s)>>>16,r=65535&this.i(s),o=t.i(e)>>>16,a=65535&t.i(e);n[2*s+2*e]+=r*a,f(n,2*s+2*e),n[2*s+2*e+1]+=i*a,f(n,2*s+2*e+1),n[2*s+2*e+1]+=r*o,f(n,2*s+2*e+1),n[2*s+2*e+2]+=i*o,f(n,2*s+2*e+2)}for(t=0;t<e;t++)n[t]=n[2*t+1]<<16|n[2*t];for(t=e;t<2*e;t++)n[t]=0;return new i(n,0)},t.B=function(t){return m(this,t).h},t.and=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let i=0;i<e;i++)n[i]=this.i(i)&t.i(i);return new i(n,this.h&t.h)},t.or=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let i=0;i<e;i++)n[i]=this.i(i)|t.i(i);return new i(n,this.h|t.h)},t.xor=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let i=0;i<e;i++)n[i]=this.i(i)^t.i(i);return new i(n,this.h^t.h)},e.prototype.digest=e.prototype.A,e.prototype.reset=e.prototype.u,e.prototype.update=e.prototype.v,i.prototype.add=i.prototype.add,i.prototype.multiply=i.prototype.j,i.prototype.modulo=i.prototype.B,i.prototype.compare=i.prototype.l,i.prototype.toNumber=i.prototype.m,i.prototype.toString=i.prototype.toString,i.prototype.getBits=i.prototype.i,i.fromNumber=o,i.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if((n=n||10)<2||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return d(t(e.substring(1),n));if(e.indexOf("-")>=0)throw Error('number format error: interior "-" character');const i=o(Math.pow(n,8));let s=a;for(let a=0;a<e.length;a+=8){var r=Math.min(8,e.length-a);const t=parseInt(e.substring(a,a+r),n);r<8?(r=o(Math.pow(n,r)),s=s.j(r).add(o(t))):(s=s.j(i),s=s.add(o(t)))}return s},xi=i}).apply(void 0!==Li?Li:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var ji="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};(function(){var t,e=Object.defineProperty,n=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof ji&&ji];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);function i(t,i){if(i)t:{var s=n;t=t.split(".");for(var r=0;r<t.length-1;r++){var o=t[r];if(!(o in s))break t;s=s[o]}(i=i(r=s[t=t[t.length-1]]))!=r&&null!=i&&e(s,t,{configurable:!0,writable:!0,value:i})}}i("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(t){return t||function(t){var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push([e,t[e]]);return n}});
/** @license

             Copyright The Closure Library Authors.
             SPDX-License-Identifier: Apache-2.0
            */
var s=s||{},r=this||self;function o(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function a(t,e,n){return t.call.apply(t.bind,arguments)}function c(t,e,n){return(c=a).apply(null,arguments)}function l(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function h(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Ob=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}var u="undefined"!=typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function d(t){const e=t.length;if(e>0){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function p(t,e){for(let i=1;i<arguments.length;i++){const e=arguments[i];var n=typeof e;if("array"==(n="object"!=n?n:e?Array.isArray(e)?"array":n:"null")||"object"==n&&"number"==typeof e.length){n=t.length||0;const i=e.length||0;t.length=n+i;for(let s=0;s<i;s++)t[n+s]=e[s]}else t.push(e)}}function f(t){r.setTimeout(()=>{throw t},0)}function g(){var t=b;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var m=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return this.h>0?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new y,t=>t.reset());class y{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let v,w=!1,b=new class{constructor(){this.h=this.g=null}add(t,e){const n=m.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},S=()=>{const t=Promise.resolve(void 0);v=()=>{t.then(_)}};function _(){for(var t;t=g();){try{t.h.call(t.g)}catch(n){f(n)}var e=m;e.j(t),e.h<100&&(e.h++,t.next=e.g,e.g=t)}w=!1}function E(){this.u=this.u,this.C=this.C}function I(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},I.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!r.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};r.addEventListener("test",t,e),r.removeEventListener("test",t,e)}catch(n){}return t}();function T(t){return/^[\s\xa0]*$/.test(t)}function A(t,e){I.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,e)}h(A,I),A.prototype.init=function(t,e){const n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=e,(e=t.relatedTarget)||("mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement)),this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&A.Z.h.call(this)},A.prototype.h=function(){A.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var k="closure_listenable_"+(1e6*Math.random()|0),P=0;function O(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++P,this.da=this.fa=!1}function D(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function x(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function L(t){const e={};for(const n in t)e[n]=t[n];return e}const j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(t,e){let n,i;for(let s=1;s<arguments.length;s++){for(n in i=arguments[s],i)t[n]=i[n];for(let e=0;e<j.length;e++)n=j[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function M(t){this.src=t,this.g={},this.h=0}function N(t,e){const n=e.type;if(n in t.g){var i,s=t.g[n],r=Array.prototype.indexOf.call(s,e,void 0);(i=r>=0)&&Array.prototype.splice.call(s,r,1),i&&(D(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function $(t,e,n,i){for(let s=0;s<t.length;++s){const r=t[s];if(!r.da&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}M.prototype.add=function(t,e,n,i,s){const r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);const o=$(t,e,i,s);return o>-1?(e=t[o],n||(e.fa=!1)):((e=new O(e,this.src,r,!!i,s)).fa=n,t.push(e)),e};var F="closure_lm_"+(1e6*Math.random()|0),U={};function B(t,e,n,i,s){if(Array.isArray(e)){for(let r=0;r<e.length;r++)B(t,e[r],n,i,s);return null}return n=K(n),t&&t[k]?t.J(e,n,!!o(i)&&!!i.capture,s):function(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");const a=o(s)?!!s.capture:!!s;let c=W(t);if(c||(t[F]=c=new M(t)),(n=c.add(e,n,i,a,r)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=z;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)C||(s=a),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(V(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}(t,e,n,!1,i,s)}function q(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)q(t,e[r],n,i,s);else i=o(i)?!!i.capture:!!i,n=K(n),t&&t[k]?(t=t.i,(r=String(e).toString())in t.g&&(n=$(e=t.g[r],n,i,s))>-1&&(D(e[n]),Array.prototype.splice.call(e,n,1),0==e.length&&(delete t.g[r],t.h--))):t&&(t=W(t))&&(e=t.g[e.toString()],t=-1,e&&(t=$(e,n,i,s)),(n=t>-1?e[t]:null)&&H(n))}function H(t){if("number"!=typeof t&&t&&!t.da){var e=t.src;if(e&&e[k])N(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(V(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=W(e))?(N(n,t),0==n.h&&(n.src=null,e[F]=null)):D(t)}}}function V(t){return t in U?U[t]:U[t]="on"+t}function z(t,e){if(t.da)t=!0;else{e=new A(e,this);const n=t.listener,i=t.ha||t.src;t.fa&&H(t),t=n.call(i,e)}return t}function W(t){return(t=t[F])instanceof M?t:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function K(t){return"function"==typeof t?t:(t[J]||(t[J]=function(e){return t.handleEvent(e)}),t[J])}function G(){E.call(this),this.i=new M(this),this.M=this,this.G=null}function X(t,e){var n,i=t.G;if(i)for(n=[];i;i=i.G)n.push(i);if(t=t.M,i=e.type||e,"string"==typeof e)e=new I(e,t);else if(e instanceof I)e.target=e.target||t;else{var s=e;R(e=new I(i,t),s)}let r,o;if(s=!0,n)for(o=n.length-1;o>=0;o--)r=e.g=n[o],s=Y(r,i,!0,e)&&s;if(r=e.g=t,s=Y(r,i,!0,e)&&s,s=Y(r,i,!1,e)&&s,n)for(o=0;o<n.length;o++)r=e.g=n[o],s=Y(r,i,!1,e)&&s}function Y(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();let s=!0;for(let r=0;r<e.length;++r){const o=e[r];if(o&&!o.da&&o.capture==n){const e=o.listener,n=o.ha||o.src;o.fa&&N(t.i,o),s=!1!==e.call(n,i)&&s}}return s&&!i.defaultPrevented}function Z(t){t.g=function(t,e){if("function"!=typeof t){if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=c(t.handleEvent,t)}return Number(e)>2147483647?-1:r.setTimeout(t,e||0)}(()=>{t.g=null,t.i&&(t.i=!1,Z(t))},t.l);const e=t.h;t.h=null,t.m.apply(null,e)}h(G,E),G.prototype[k]=!0,G.prototype.removeEventListener=function(t,e,n,i){q(this,t,e,n,i)},G.prototype.N=function(){if(G.Z.N.call(this),this.i){var t=this.i;for(const e in t.g){const n=t.g[e];for(let t=0;t<n.length;t++)D(n[t]);delete t.g[e],t.h--}}this.G=null},G.prototype.J=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},G.prototype.K=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};class Q extends E{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:Z(this)}N(){super.N(),this.g&&(r.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(t){E.call(this),this.h=t,this.g={}}h(tt,E);var et=[];function nt(t){x(t.g,function(t,e){this.g.hasOwnProperty(e)&&H(t)},t),t.g={}}tt.prototype.N=function(){tt.Z.N.call(this),nt(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var it=r.JSON.stringify,st=r.JSON.parse,rt=class{stringify(t){return r.JSON.stringify(t,void 0)}parse(t){return r.JSON.parse(t,void 0)}};function ot(){}var at={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ct(){I.call(this,"d")}function lt(){I.call(this,"c")}h(ct,I),h(lt,I);var ht={},ut=null;function dt(){return ut=ut||new G}function pt(t){I.call(this,ht.Ia,t)}function ft(t){const e=dt();X(e,new pt(e))}function gt(t,e){I.call(this,ht.STAT_EVENT,t),this.stat=e}function mt(t){const e=dt();X(e,new gt(e,t))}function yt(t,e){I.call(this,ht.Ja,t),this.size=e}function vt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return r.setTimeout(function(){t()},e)}function wt(){this.g=!0}function bt(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{const r=JSON.parse(e);if(r)for(t=0;t<r.length;t++)if(Array.isArray(r[t])){var n=r[t];if(!(n.length<2)){var i=n[1];if(Array.isArray(i)&&!(i.length<1)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(let t=1;t<i.length;t++)i[t]=""}}}return it(r)}catch(r){return e}}(t,n)+(i?" "+i:"")})}ht.Ia="serverreachability",h(pt,I),ht.STAT_EVENT="statevent",h(gt,I),ht.Ja="timingevent",h(yt,I),wt.prototype.ua=function(){this.g=!1},wt.prototype.info=function(){};var St,_t={NO_ERROR:0,TIMEOUT:8};function Et(){}function It(t){return encodeURIComponent(String(t))}function Ct(t){var e=1;t=t.split(":");const n=[];for(;e>0&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Tt(t,e,n,i){this.j=t,this.i=e,this.l=n,this.S=i||1,this.V=new tt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new At}function At(){this.i=null,this.g="",this.h=!1}h(Et,ot),Et.prototype.g=function(){return new XMLHttpRequest},St=new Et;var kt={},Pt={};function Ot(t,e,n){t.M=1,t.A=ee(Xt(e)),t.u=n,t.R=!0,Dt(t,null)}function Dt(t,e){t.F=Date.now(),jt(t),t.B=Xt(t.A);var n=t.B,i=t.S;Array.isArray(i)||(i=[String(i)]),ge(n.i,"t",i),t.C=0,n=t.j.L,t.h=new At,t.g=en(t.j,n?e:null,!t.u),t.P>0&&(t.O=new Q(c(t.Y,t,t.g),t.P)),e=t.V,n=t.g,i=t.ba;var s="readystatechange";Array.isArray(s)||(s&&(et[0]=s.toString()),s=et);for(let r=0;r<s.length;r++){const t=B(n,s[r],i||e.handleEvent,!1,e.h||e);if(!t)break;e.g[t.key]=t}e=t.J?L(t.J):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,e)):(t.v="GET",t.g.ea(t.B,t.v,null,e)),ft(),function(t,e,n,i,s,r){t.info(function(){if(t.g)if(r){var o="",a=r.split("&");for(let t=0;t<a.length;t++){var c=a[t].split("=");if(c.length>1){const t=c[0];c=c[1];const e=t.split("_");o=e.length>=2&&"type"==e[1]?o+(t+"=")+c+"&":o+(t+"=redacted&")}}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o})}(t.i,t.v,t.B,t.l,t.S,t.u)}function xt(t){return!!t.g&&"GET"==t.v&&2!=t.M&&t.j.Aa}function Lt(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Pt:(n=Number(e.substring(n,i)),isNaN(n)?kt:(i+=1)+n>e.length?Pt:(e=e.slice(i,i+n),t.C=i+n,e))}function jt(t){t.T=Date.now()+t.H,Rt(t,t.H)}function Rt(t,e){if(null!=t.D)throw Error("WatchDog timer not null");t.D=vt(c(t.aa,t),e)}function Mt(t){t.D&&(r.clearTimeout(t.D),t.D=null)}function Nt(t){0==t.j.I||t.K||Xe(t.j,t)}function $t(t){Mt(t);var e=t.O;e&&"function"==typeof e.dispose&&e.dispose(),t.O=null,nt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.dispose())}function Ft(t,e){try{var n=t.j;if(0!=n.I&&(n.g==t||Vt(n.h,t)))if(!t.L&&Vt(n.h,t)&&3==n.I){try{var i=n.Ba.g.parse(e)}catch(h){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.v){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ge(n),Fe(n)}We(n),mt(18)}}else n.xa=s[1],0<n.xa-n.K&&s[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=vt(c(n.Va,n),6e3));Ht(n.h)<=1&&n.ta&&(n.ta=void 0)}else Ze(n,11)}else if((t.L||n.g==t)&&Ge(n),!T(e))for(s=n.Ba.g.parse(e),e=0;e<s.length;e++){let c=s[e];const h=c[0];if(!(h<=n.K))if(n.K=h,c=c[1],2==n.I)if("c"==c[0]){n.M=c[1],n.ba=c[2];const e=c[3];null!=e&&(n.ka=e,n.j.info("VER="+n.ka));const s=c[4];null!=s&&(n.za=s,n.j.info("SVER="+n.za));const h=c[5];null!=h&&"number"==typeof h&&h>0&&(i=1.5*h,n.O=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(zt(r,r.h),r.h=null))}if(i.G){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.wa=t,te(i.J,i.G,t))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-t.F,n.j.info("Handshake RTT: "+n.T+"ms"));var o=t;if((i=n).na=tn(i,i.L?i.ba:null,i.W),o.L){Wt(i.h,o);var a=o,l=i.O;l&&(a.H=l),a.D&&(Mt(a),jt(a)),i.g=o}else ze(i);n.i.length>0&&Be(n)}else"stop"!=c[0]&&"close"!=c[0]||Ze(n,7);else 3==n.I&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Ze(n,7):$e(n):"noop"!=c[0]&&n.l&&n.l.qa(c),n.A=0)}ft()}catch(h){}}Tt.prototype.ba=function(t){t=t.target;const e=this.O;e&&3==je(t)?e.j():this.Y(t)},Tt.prototype.Y=function(t){try{if(t==this.g)t:{const c=je(this.g),l=this.g.ya();if(this.g.ca(),!(c<3)&&(3!=c||this.g&&(this.h.h||this.g.la()||Re(this.g)))){this.K||4!=c||7==l||ft(),Mt(this);var e=this.g.ca();this.X=e;var n=function(t){if(!xt(t))return t.g.la();const e=Re(t.g);if(""===e)return"";let n="";const i=e.length,s=4==je(t.g);if(!t.h.i){if("undefined"==typeof TextDecoder)return $t(t),Nt(t),"";t.h.i=new r.TextDecoder}for(let r=0;r<i;r++)t.h.h=!0,n+=t.h.i.decode(e[r],{stream:!(s&&r==i-1)});return e.length=0,t.h.g+=n,t.C=0,t.h.g}(this);if(this.o=200==e,function(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o})}(this.i,this.v,this.B,this.l,this.S,c,e),this.o){if(this.U&&!this.L){e:{if(this.g){var i,s=this.g;if((i=s.g?s.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(i)){var o=i;break e}}o=null}if(!(t=o)){this.o=!1,this.m=3,mt(12),$t(this),Nt(this);break t}bt(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ft(this,t)}if(this.R){let e;for(t=!0;!this.K&&this.C<n.length;){if(e=Lt(this,n),e==Pt){4==c&&(this.m=4,mt(14),t=!1),bt(this.i,this.l,null,"[Incomplete Response]");break}if(e==kt){this.m=4,mt(15),bt(this.i,this.l,n,"[Invalid Chunk]"),t=!1;break}bt(this.i,this.l,e,null),Ft(this,e)}if(xt(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=c||0!=n.length||this.h.h||(this.m=1,mt(16),t=!1),this.o=this.o&&t,t){if(n.length>0&&!this.W){this.W=!0;var a=this.j;a.g==this&&a.aa&&!a.P&&(a.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Je(a),a.P=!0,mt(11))}}else bt(this.i,this.l,n,"[Invalid Chunked Response]"),$t(this),Nt(this)}else bt(this.i,this.l,n,null),Ft(this,n);4==c&&$t(this),this.o&&!this.K&&(4==c?Xe(this.j,this):(this.o=!1,jt(this)))}else(function(t){const e={};t=(t.g&&je(t)>=2&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(T(t[i]))continue;var n=Ct(t[i]);const s=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,function(t){return t.join(", ")})})(this.g),400==e&&n.indexOf("Unknown SID")>0?(this.m=3,mt(12)):(this.m=0,mt(13)),$t(this),Nt(this)}}}catch(c){}},Tt.prototype.cancel=function(){this.K=!0,$t(this)},Tt.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(function(t,e){t.info(function(){return"TIMEOUT: "+e})}(this.i,this.B),2!=this.M&&(ft(),mt(17)),$t(this),this.m=2,Nt(this)):Rt(this,this.T-t)};var Ut=class{constructor(t,e){this.g=t,this.map=e}};function Bt(t){this.l=t||10,t=r.PerformanceNavigationTiming?(t=r.performance.getEntriesByType("navigation")).length>0&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(r.chrome&&r.chrome.loadTimes&&r.chrome.loadTimes()&&r.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function qt(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Ht(t){return t.h?1:t.g?t.g.size:0}function Vt(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function zt(t,e){t.g?t.g.add(e):t.h=e}function Wt(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Jt(t){if(null!=t.h)return t.i.concat(t.h.G);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.G);return e}return d(t.i)}Bt.prototype.cancel=function(){if(this.i=Jt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var Kt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gt(t){let e;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,t instanceof Gt?(this.l=t.l,Yt(this,t.j),this.o=t.o,this.g=t.g,Zt(this,t.u),this.h=t.h,Qt(this,me(t.i)),this.m=t.m):t&&(e=String(t).match(Kt))?(this.l=!1,Yt(this,e[1]||"",!0),this.o=ne(e[2]||""),this.g=ne(e[3]||"",!0),Zt(this,e[4]),this.h=ne(e[5]||"",!0),Qt(this,e[6]||"",!0),this.m=ne(e[7]||"")):(this.l=!1,this.i=new he(null,this.l))}function Xt(t){return new Gt(t)}function Yt(t,e,n){t.j=n?ne(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Zt(t,e){if(e){if(e=Number(e),isNaN(e)||e<0)throw Error("Bad port number "+e);t.u=e}else t.u=null}function Qt(t,e,n){e instanceof he?(t.i=e,function(t,e){e&&!t.j&&(ue(t),t.i=null,t.g.forEach(function(t,e){const n=e.toLowerCase();e!=n&&(de(this,e),ge(this,n,t))},t)),t.j=e}(t.i,t.l)):(n||(e=ie(e,ce)),t.i=new he(e,t.l))}function te(t,e,n){t.i.set(e,n)}function ee(t){return te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ne(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ie(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,se),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function se(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Gt.prototype.toString=function(){const t=[];var e=this.j;e&&t.push(ie(e,re,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(ie(e,re,!0),"@"),t.push(It(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.u)&&t.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(ie(n,"/"==n.charAt(0)?ae:oe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",ie(n,le)),t.join("")},Gt.prototype.resolve=function(t){const e=Xt(this);let n=!!t.j;n?Yt(e,t.j):n=!!t.o,n?e.o=t.o:n=!!t.g,n?e.g=t.g:n=null!=t.u;var i=t.h;if(n)Zt(e,t.u);else if(n=!!t.h){if("/"!=i.charAt(0))if(this.g&&!this.h)i="/"+i;else{var s=e.h.lastIndexOf("/");-1!=s&&(i=e.h.slice(0,s+1)+i)}if(".."==(s=i)||"."==s)i="";else if(-1!=s.indexOf("./")||-1!=s.indexOf("/.")){i=0==s.lastIndexOf("/",0),s=s.split("/");const t=[];for(let e=0;e<s.length;){const n=s[e++];"."==n?i&&e==s.length&&t.push(""):".."==n?((t.length>1||1==t.length&&""!=t[0])&&t.pop(),i&&e==s.length&&t.push("")):(t.push(n),i=!0)}i=t.join("/")}else i=s}return n?e.h=i:n=""!==t.i.toString(),n?Qt(e,me(t.i)):n=!!t.m,n&&(e.m=t.m),e};var re=/[#\/\?@]/g,oe=/[#\?:]/g,ae=/[#\?]/g,ce=/[#\?@]/g,le=/#/g;function he(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ue(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(let n=0;n<t.length;n++){const i=t[n].indexOf("=");let s,r=null;i>=0?(s=t[n].substring(0,i),r=t[n].substring(i+1)):s=t[n],e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function de(t,e){ue(t),e=ye(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function pe(t,e){return ue(t),e=ye(t,e),t.g.has(e)}function fe(t,e){ue(t);let n=[];if("string"==typeof e)pe(t,e)&&(n=n.concat(t.g.get(ye(t,e))));else for(t=Array.from(t.g.values()),e=0;e<t.length;e++)n=n.concat(t[e]);return n}function ge(t,e,n){de(t,e),n.length>0&&(t.i=null,t.g.set(ye(t,e),d(n)),t.h+=n.length)}function me(t){const e=new he;return e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),e}function ye(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ve(t,e,n,i,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),i(n)}catch(r){}}function we(){this.g=new rt}function be(t){this.i=t.Sb||null,this.h=t.ab||!1}function Se(t,e){G.call(this),this.H=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function _e(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}function Ee(t){t.readyState=4,t.l=null,t.j=null,t.B=null,Ie(t)}function Ie(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function Ce(t){let e="";return x(t,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}function Te(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Ce(n),"string"==typeof t?null!=n&&It(n):te(t,e,n))}function Ae(t){G.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(t=he.prototype).add=function(t,e){ue(this),this.i=null,t=ye(this,t);let n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){ue(this),this.g.forEach(function(n,i){n.forEach(function(n){t.call(e,n,i,this)},this)},this)},t.set=function(t,e){return ue(this),this.i=null,pe(this,t=ye(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t&&(t=fe(this,t)).length>0?String(t[0]):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(let i=0;i<e.length;i++){var n=e[i];const s=It(n);n=fe(this,n);for(let e=0;e<n.length;e++){let i=s;""!==n[e]&&(i+="="+It(n[e])),t.push(i)}}return this.i=t.join("&")},h(be,ot),be.prototype.g=function(){return new Se(this.i,this.h)},h(Se,G),(t=Se.prototype).open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=e,this.readyState=1,Ie(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const e={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(e.body=t),(this.H||r).fetch(new Request(this.D,e)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,Ee(this)),this.readyState=0},t.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ie(this)),this.g&&(this.readyState=3,Ie(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(void 0!==r.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;_e(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))},t.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.B.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ee(this):Ie(this),3==this.readyState&&_e(this)}},t.Oa=function(t){this.g&&(this.response=this.responseText=t,Ee(this))},t.Na=function(t){this.g&&(this.response=t,Ee(this))},t.ga=function(){this.g&&Ee(this)},t.setRequestHeader=function(t,e){this.A.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Se.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),h(Ae,G);var ke=/^https?$/i,Pe=["POST","PUT"];function Oe(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.o=5,De(t),Le(t)}function De(t){t.A||(t.A=!0,X(t,"complete"),X(t,"error"))}function xe(t){if(t.h&&void 0!==s)if(t.v&&4==je(t))setTimeout(t.Ca.bind(t),0);else if(X(t,"readystatechange"),4==je(t)){t.h=!1;try{const s=t.ca();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===s){let e=String(t.D).match(Kt)[1]||null;!e&&r.self&&r.self.location&&(e=r.self.location.protocol.slice(0,-1)),i=!ke.test(e?e.toLowerCase():"")}n=i}if(n)X(t,"complete"),X(t,"success");else{t.o=6;try{var o=je(t)>2?t.g.statusText:""}catch(a){o=""}t.l=o+" ["+t.ca()+"]",De(t)}}finally{Le(t)}}}function Le(t,e){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const i=t.g;t.g=null,e||X(t,"ready");try{i.onreadystatechange=null}catch(n){}}}function je(t){return t.g?t.g.readyState:0}function Re(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Me(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ne(t){this.za=0,this.i=[],this.j=new wt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Me("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Me("baseRetryDelayMs",5e3,t),this.Za=Me("retryDelaySeedMs",1e4,t),this.Ta=Me("forwardChannelMaxRetries",2,t),this.va=Me("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new Bt(t&&t.concurrentRequestLimit),this.Ba=new we,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function $e(t){if(Ue(t),3==t.I){var e=t.V++,n=Xt(t.J);if(te(n,"SID",t.M),te(n,"RID",e),te(n,"TYPE","terminate"),He(t,n),(e=new Tt(t,t.j,e)).M=2,e.A=ee(Xt(n)),n=!1,r.navigator&&r.navigator.sendBeacon)try{n=r.navigator.sendBeacon(e.A.toString(),"")}catch(i){}!n&&r.Image&&((new Image).src=e.A,n=!0),n||(e.g=en(e.j,null),e.g.ea(e.A)),e.F=Date.now(),jt(e)}Qe(t)}function Fe(t){t.g&&(Je(t),t.g.cancel(),t.g=null)}function Ue(t){Fe(t),t.v&&(r.clearTimeout(t.v),t.v=null),Ge(t),t.h.cancel(),t.m&&("number"==typeof t.m&&r.clearTimeout(t.m),t.m=null)}function Be(t){if(!qt(t.h)&&!t.m){t.m=!0;var e=t.Ea;v||S(),w||(v(),w=!0),b.add(e,t),t.D=0}}function qe(t,e){var n;n=e?e.l:t.V++;const i=Xt(t.J);te(i,"SID",t.M),te(i,"RID",n),te(i,"AID",t.K),He(t,i),t.u&&t.o&&Te(i,t.u,t.o),n=new Tt(t,t.j,n,t.D+1),null===t.u&&(n.J=t.o),e&&(t.i=e.G.concat(t.i)),e=Ve(t,n,1e3),n.H=Math.round(.5*t.va)+Math.round(.5*t.va*Math.random()),zt(t.h,n),Ot(n,i,e)}function He(t,e){t.H&&x(t.H,function(t,n){te(e,n,t)}),t.l&&x({},function(t,n){te(e,n,t)})}function Ve(t,e,n){n=Math.min(t.i.length,n);const i=t.l?c(t.l.Ka,t.l,t):null;t:{var s=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?n>0?(e=s[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let c=!0;for(let l=0;l<n;l++){var r=s[l].g;const n=s[l].map;if((r-=e)<0)e=Math.max(0,s[l].g-100),c=!1;else try{r="req"+r+"_"||"";try{var a=n instanceof Map?n:Object.entries(n);for(const[e,n]of a){let i=n;o(n)&&(i=it(n)),t.push(r+e+"="+encodeURIComponent(i))}}catch(ls){throw t.push(r+"type="+encodeURIComponent("_badmap")),ls}}catch(ls){i&&i(n)}}if(c){a=t.join("&");break t}}a=void 0}return t=t.i.splice(0,n),e.G=t,a}function ze(t){if(!t.g&&!t.v){t.Y=1;var e=t.Da;v||S(),w||(v(),w=!0),b.add(e,t),t.A=0}}function We(t){return!(t.g||t.v||t.A>=3||(t.Y++,t.v=vt(c(t.Da,t),Ye(t,t.A)),t.A++,0))}function Je(t){null!=t.B&&(r.clearTimeout(t.B),t.B=null)}function Ke(t){t.g=new Tt(t,t.j,"rpc",t.Y),null===t.u&&(t.g.J=t.o),t.g.P=0;var e=Xt(t.na);te(e,"RID","rpc"),te(e,"SID",t.M),te(e,"AID",t.K),te(e,"CI",t.F?"0":"1"),!t.F&&t.ia&&te(e,"TO",t.ia),te(e,"TYPE","xmlhttp"),He(t,e),t.u&&t.o&&Te(e,t.u,t.o),t.O&&(t.g.H=t.O);var n=t.g;t=t.ba,n.M=1,n.A=ee(Xt(e)),n.u=null,n.R=!0,Dt(n,t)}function Ge(t){null!=t.C&&(r.clearTimeout(t.C),t.C=null)}function Xe(t,e){var n=null;if(t.g==e){Ge(t),Je(t),t.g=null;var i=2}else{if(!Vt(t.h,e))return;n=e.G,Wt(t.h,e),i=1}if(0!=t.I)if(e.o)if(1==i){n=e.u?e.u.length:0,e=Date.now()-e.F;var s=t.D;X(i=dt(),new yt(i,n)),Be(t)}else ze(t);else if(3==(s=e.m)||0==s&&e.X>0||!(1==i&&function(t,e){return!(Ht(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.G.concat(t.i),0):1==t.I||2==t.I||t.D>=(t.Sa?0:t.Ta)||(t.m=vt(c(t.Ea,t,e),Ye(t,t.D)),t.D++,0)))}(t,e)||2==i&&We(t)))switch(n&&n.length>0&&(e=t.h,e.i=e.i.concat(n)),s){case 1:Ze(t,5);break;case 4:Ze(t,10);break;case 3:Ze(t,6);break;default:Ze(t,2)}}function Ye(t,e){let n=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(n*=2),n*e}function Ze(t,e){if(t.j.info("Error code "+e),2==e){var n=c(t.bb,t),i=t.Ua;const e=!i;i=new Gt(i||"//www.google.com/images/cleardot.gif"),r.location&&"http"==r.location.protocol||Yt(i,"https"),ee(i),e?function(t,e){const n=new wt;if(r.Image){const i=new Image;i.onload=l(ve,n,"TestLoadImage: loaded",!0,e,i),i.onerror=l(ve,n,"TestLoadImage: error",!1,e,i),i.onabort=l(ve,n,"TestLoadImage: abort",!1,e,i),i.ontimeout=l(ve,n,"TestLoadImage: timeout",!1,e,i),r.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}(i.toString(),n):function(t,e){new wt;const n=new AbortController,i=setTimeout(()=>{n.abort(),ve(0,0,!1,e)},1e4);fetch(t,{signal:n.signal}).then(t=>{clearTimeout(i),t.ok?ve(0,0,!0,e):ve(0,0,!1,e)}).catch(()=>{clearTimeout(i),ve(0,0,!1,e)})}(i.toString(),n)}else mt(2);t.I=0,t.l&&t.l.pa(e),Qe(t),Ue(t)}function Qe(t){if(t.I=0,t.ja=[],t.l){const e=Jt(t.h);0==e.length&&0==t.i.length||(p(t.ja,e),p(t.ja,t.i),t.h.i.length=0,d(t.i),t.i.length=0),t.l.oa()}}function tn(t,e,n){var i=n instanceof Gt?Xt(n):new Gt(n);if(""!=i.g)e&&(i.g=e+"."+i.g),Zt(i,i.u);else{var s=r.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;const t=new Gt(null);i&&Yt(t,i),e&&(t.g=e),s&&Zt(t,s),n&&(t.h=n),i=t}return n=t.G,e=t.wa,n&&e&&te(i,n,e),te(i,"VER",t.ka),He(t,i),i}function en(t,e,n){if(e&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Aa&&!t.ma?new Ae(new be({ab:n})):new Ae(t.ma)).Fa(t.L),e}function nn(){}function sn(t,e){G.call(this),this.g=new Ne(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.sa&&(t?t["X-WebChannel-Client-Profile"]=e.sa:t={"X-WebChannel-Client-Profile":e.sa}),this.g.U=t,(t=e&&e.Qb)&&!T(t)&&(this.g.u=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!T(e)&&(this.g.G=e,null!==(t=this.h)&&e in t&&e in(t=this.h)&&delete t[e]),this.j=new an(this)}function rn(t){ct.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function on(){lt.call(this),this.status=1}function an(t){this.g=t}(t=Ae.prototype).Fa=function(t){this.H=t},t.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():St.g(),this.g.onreadystatechange=u(c(this.Ca,this));try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(o){return void Oe(this,o)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),s=r.FormData&&t instanceof r.FormData,!(Array.prototype.indexOf.call(Pe,e,void 0)>=0)||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,a]of n)this.g.setRequestHeader(r,a);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(o){Oe(this,o)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,X(this,"complete"),X(this,"abort"),Le(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Le(this,!0)),Ae.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?xe(this):this.Xa())},t.Xa=function(){xe(this)},t.isActive=function(){return!!this.g},t.ca=function(){try{return je(this)>2?this.g.status:-1}catch(t){return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.La=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),st(e)}},t.ya=function(){return this.o},t.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=Ne.prototype).ka=8,t.I=1,t.connect=function(t,e,n,i){mt(0),this.W=t,this.H=e||{},n&&void 0!==i&&(this.H.OSID=n,this.H.OAID=i),this.F=this.X,this.J=tn(this,null,this.W),Be(this)},t.Ea=function(t){if(this.m)if(this.m=null,1==this.I){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Tt(this,this.j,t);let r=this.o;if(this.U&&(r?(r=L(r),R(r,this.U)):r=this.U),null!==this.u||this.R||(s.J=r,r=null),this.S)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.map&&"string"==typeof(i=i.map.__data__)?i.length:void 0))break;if((e+=i)>4096){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Ve(this,s,e),te(n=Xt(this.J),"RID",t),te(n,"CVER",22),this.G&&te(n,"X-HTTP-Session-Id",this.G),He(this,n),r&&(this.R?e="headers="+It(Ce(r))+"&"+e:this.u&&Te(n,this.u,r)),zt(this.h,s),this.Ra&&te(n,"TYPE","init"),this.S?(te(n,"$req",e),te(n,"SID","null"),s.U=!0,Ot(s,n,null)):Ot(s,n,e),this.I=2}}else 3==this.I&&(t?qe(this,t):0==this.i.length||qt(this.h)||qe(this))},t.Da=function(){if(this.v=null,Ke(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=vt(c(this.Wa,this),t)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,mt(10),Fe(this),Ke(this))},t.Va=function(){null!=this.C&&(this.C=null,Fe(this),We(this),mt(19))},t.bb=function(t){t?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=nn.prototype).ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){},h(sn,G),sn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},sn.prototype.close=function(){$e(this.g)},sn.prototype.o=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=it(t),t=n);e.i.push(new Ut(e.Ya++,t)),3==e.I&&Be(e)},sn.prototype.N=function(){this.g.l=null,delete this.j,$e(this.g),delete this.g,sn.Z.N.call(this)},h(rn,ct),h(on,lt),h(an,nn),an.prototype.ra=function(){X(this.g,"a")},an.prototype.qa=function(t){X(this.g,new rn(t))},an.prototype.pa=function(t){X(this.g,new on)},an.prototype.oa=function(){X(this.g,"b")},sn.prototype.send=sn.prototype.o,sn.prototype.open=sn.prototype.m,sn.prototype.close=sn.prototype.close,_t.NO_ERROR=0,_t.TIMEOUT=8,_t.HTTP_ERROR=6,at.OPEN="a",at.CLOSE="b",at.ERROR="c",at.MESSAGE="d",G.prototype.listen=G.prototype.J,Ae.prototype.listenOnce=Ae.prototype.K,Ae.prototype.getLastError=Ae.prototype.Ha,Ae.prototype.getLastErrorCode=Ae.prototype.ya,Ae.prototype.getStatus=Ae.prototype.ca,Ae.prototype.getResponseJson=Ae.prototype.La,Ae.prototype.getResponseText=Ae.prototype.la,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Fa}).apply(void 0!==ji?ji:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});
/**
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
             */
class Ri{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ri.UNAUTHENTICATED=new Ri(null),Ri.GOOGLE_CREDENTIALS=new Ri("google-credentials-uid"),Ri.FIRST_PARTY=new Ri("first-party-uid"),Ri.MOCK_USER=new Ri("mock-user");
/**
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
             */
let Mi="12.9.0";
/**
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
             */
/**
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
             */
const Ni=new Ot("@firebase/firestore");function $i(t,...e){if(Ni.logLevel<=Ct.DEBUG){const n=e.map(Ui);Ni.debug(`Firestore (${Mi}): ${t}`,...n)}}function Fi(t,...e){if(Ni.logLevel<=Ct.ERROR){const n=e.map(Ui);Ni.error(`Firestore (${Mi}): ${t}`,...n)}}function Ui(t){if("string"==typeof t)return t;try{return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
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
             */function Bi(t,e,n){let i="Unexpected state";"string"==typeof e?i=e:n=e,qi(t,i,n)}function qi(t,e,n){let i=`FIRESTORE (${Mi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(void 0!==n)try{i+=" CONTEXT: "+JSON.stringify(n)}catch(t){i+=" CONTEXT: "+n}throw Fi(i),new Error(i)}function Hi(t,e,n,i){let s="Unexpected state";"string"==typeof n?s=n:i=n,t||qi(e,s,i)}
/**
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
             */const Vi="cancelled",zi="invalid-argument",Wi="failed-precondition";class Ji extends ft{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
             */class Ki{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
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
             */class Gi{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Xi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Ri.UNAUTHENTICATED))}shutdown(){}}class Yi{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Zi{constructor(t){this.t=t,this.currentUser=Ri.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Hi(void 0===this.o,42304);let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new Ki;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ki,t.enqueueRetryable(()=>i(this.currentUser))};const r=()=>{const e=s;t.enqueueRetryable(async()=>{await e.promise,await i(this.currentUser)})},o=t=>{$i("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),r())};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):($i("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ki)}},0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?($i("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Hi("string"==typeof e.accessToken,31837,{l:e}),new Gi(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Hi(null===t||"string"==typeof t,2055,{h:t}),new Ri(t)}}class Qi{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=Ri.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ts{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Qi(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(Ri.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class es{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ns{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Le(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Hi(void 0===this.o,3512);const n=t=>{null!=t.error&&$i("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.m;return this.m=t.token,$i("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const i=t=>{$i("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(t=>i(t)),setTimeout(()=>{if(!this.appCheck){const t=this.V.getImmediate({optional:!0});t?i(t):$i("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new es(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(Hi("string"==typeof t.token,44558,{tokenResult:t}),this.m=t.token,new es(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
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
             */function is(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
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
             */class ss{static newId(){const t=62*Math.floor(256/62);let e="";for(;e.length<20;){const n=is(40);for(let i=0;i<n.length;++i)e.length<20&&n[i]<t&&(e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[i]%62))}return e}}function rs(t,e){return t<e?-1:t>e?1:0}const os=55296,as=57343;function cs(t){const e=t.charCodeAt(0);return e>=os&&e<=as}
/**
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
             */const ls="__name__";class hs{constructor(t,e,n){void 0===e?e=0:e>t.length&&Bi(637,{offset:e,range:t.length}),void 0===n?n=t.length-e:n>t.length-e&&Bi(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===hs.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof hs?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=hs.compareSegments(t.get(i),e.get(i));if(0!==n)return n}return rs(t.length,e.length)}static compareSegments(t,e){const n=hs.isNumericId(t),i=hs.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?hs.extractNumericId(t).compare(hs.extractNumericId(e)):function(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.charAt(i),s=e.charAt(i);if(n!==s)return cs(n)===cs(s)?rs(n,s):cs(n)?1:-1}return rs(t.length,e.length)}(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return xi.fromString(t.substring(4,t.length-2))}}class us extends hs{construct(t,e,n){return new us(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Ji(zi,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new us(e)}static emptyPath(){return new us([])}}const ds=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ps extends hs{construct(t,e,n){return new ps(t,e,n)}static isValidIdentifier(t){return ds.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ps.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===ls}static keyField(){return new ps([ls])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new Ji(zi,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Ji(zi,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Ji(zi,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++)}if(s(),r)throw new Ji(zi,"Unterminated ` in path: "+t);return new ps(e)}static emptyPath(){return new ps([])}}
/**
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
             */class fs{constructor(t){this.path=t}static fromPath(t){return new fs(us.fromString(t))}static fromName(t){return new fs(us.fromString(t).popFirst(5))}static empty(){return new fs(us.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===us.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return us.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new fs(new us(t.slice()))}}function gs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ji(zi,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=function(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Bi(12329,{type:typeof t})}(t);throw new Ji(zi,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
             */function ms(t,e){const n={typeString:t};return e&&(n.value=e),n}function ys(t,e){if(!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(t))throw new Ji(zi,"JSON must be an object");let n;for(const i in e)if(e[i]){const s=e[i].typeString,r="value"in e[i]?{value:e[i].value}:void 0;if(!(i in t)){n=`JSON missing required field: '${i}'`;break}const o=t[i];if(s&&typeof o!==s){n=`JSON field '${i}' must be a ${s}.`;break}if(void 0!==r&&o!==r.value){n=`Expected '${i}' field to equal '${r.value}'`;break}}if(n)throw new Ji(zi,n);return!0}
/**
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
             */const vs=-62135596800,ws=1e6;class bs{static now(){return bs.fromMillis(Date.now())}static fromDate(t){return bs.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*ws);return new bs(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Ji(zi,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Ji(zi,"Timestamp nanoseconds out of range: "+e);if(t<vs)throw new Ji(zi,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Ji(zi,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ws}_compareTo(t){return this.seconds===t.seconds?rs(this.nanoseconds,t.nanoseconds):rs(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:bs._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(ys(t,bs._jsonSchema))return new bs(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-vs;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}bs._jsonSchemaVersion="firestore/timestamp/1.0",bs._jsonSchema={type:ms("string",bs._jsonSchemaVersion),seconds:ms("number"),nanoseconds:ms("number")};
/**
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
             */
class Ss extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
             */class _s{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Ss("Invalid base64 string: "+t):t}}(t);return new _s(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new _s(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
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
             */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return rs(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}_s.EMPTY_BYTE_STRING=new _s("");const Es="(default)";class Is{constructor(t,e){this.projectId=t,this.database=e||Es}static empty(){return new Is("","")}get isDefaultDatabase(){return this.database===Es}isEqual(t){return t instanceof Is&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
             */
class Cs{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}
/**
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
             */
var Ts,As,ks,Ps;function Os(){return"undefined"!=typeof document?document:null}(As=Ts||(Ts={}))[As.OK=0]="OK",As[As.CANCELLED=1]="CANCELLED",As[As.UNKNOWN=2]="UNKNOWN",As[As.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",As[As.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",As[As.NOT_FOUND=5]="NOT_FOUND",As[As.ALREADY_EXISTS=6]="ALREADY_EXISTS",As[As.PERMISSION_DENIED=7]="PERMISSION_DENIED",As[As.UNAUTHENTICATED=16]="UNAUTHENTICATED",As[As.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",As[As.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",As[As.ABORTED=10]="ABORTED",As[As.OUT_OF_RANGE=11]="OUT_OF_RANGE",As[As.UNIMPLEMENTED=12]="UNIMPLEMENTED",As[As.INTERNAL=13]="INTERNAL",As[As.UNAVAILABLE=14]="UNAVAILABLE",As[As.DATA_LOSS=15]="DATA_LOSS",
/**
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
             */
new xi([4294967295,4294967295],0);class Ds{constructor(t,e,n=1e3,i=1.5,s=6e4){this.Ci=t,this.timerId=e,this.R_=n,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-n);i>0&&$i("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}
/**
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
             */class xs{constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Ki,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new xs(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ji(Vi,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}(Ps=ks||(ks={})).Ma="default",Ps.Cache="cache";
/**
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
             */
const Ls=new Map,js="firestore.googleapis.com",Rs=!0;
/**
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
             */class Ms{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new Ji(zi,"Can't provide ssl option if host option is not set");this.host=js,this.ssl=Rs}else this.host=t.host,this.ssl=null!==(e=t.ssl)&&void 0!==e?e:Rs;if(this.isUsingEmulator=void 0!==t.emulatorOptions,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Ji(zi,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,i){if(!0===e&&!0===i)throw new Ji(zi,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=
/**
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
             */
function(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e}(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Ji(zi,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Ji(zi,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Ji(zi,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
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
             */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ns{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ms({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ji(Wi,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Ji(Wi,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ms(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Xi;switch(t.type){case"firstParty":return new ts(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Ji(zi,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ls.get(t);e&&($i("ComponentProvider","Removing Datastore"),Ls.delete(t),e.terminate())}(this),Promise.resolve()}}function $s(t,e,n,i={}){t=gs(t,Ns);const s=ct(e),r=t._getSettings(),o={...r,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(async function(t){(await fetch(t,{credentials:"include"})).ok}
/**
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
             */(`https://${a}`),ut("Firestore",!0)),r.host!==js&&r.host!==a&&function(t,...e){if(Ni.logLevel<=Ct.WARN){const n=e.map(Ui);Ni.warn(`Firestore (${Mi}): ${t}`,...n)}}("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...r,host:a,ssl:s,emulatorOptions:i};if(!yt(c,o)&&(t._setSettings(c),i.mockUserToken)){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Ri.MOCK_USER;else{var l;e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r={iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[et(JSON.stringify({alg:"none",type:"JWT"})),et(JSON.stringify(r)),""].join(".")}(i.mockUserToken,null===(l=t._app)||void 0===l?void 0:l.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new Ji(zi,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ri(s)}t._authCredentials=new Yi(new Gi(e,n))}}
/**
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
             */class Fs{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Fs(this.firestore,t,this._query)}}class Us{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bs(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Us(this.firestore,t,this._key)}toJSON(){return{type:Us._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(ys(e,Us._jsonSchema))return new Us(t,n||null,new fs(us.fromString(e.referencePath)))}}Us._jsonSchemaVersion="firestore/documentReference/1.0",Us._jsonSchema={type:ms("string",Us._jsonSchemaVersion),referencePath:ms("string")};class Bs extends Fs{constructor(t,e,n){super(t,e,function(t){return new Cs(t)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Us(this.firestore,null,new fs(t))}withConverter(t){return new Bs(this.firestore,t,this._path)}}
/**
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
             */const qs="AsyncQueue";class Hs{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ds(this,"async_queue_retry"),this._c=()=>{const t=Os();t&&$i(qs,"Visibility state changed to "+t.visibilityState),this.M_.w_()},this.ac=t;const e=Os();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Os();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new Ki;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(0!==this.Yu.length){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!function(t){return"IndexedDbTransactionError"===t.name}(t))throw t;$i(qs,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(t=>{throw this.nc=t,this.rc=!1,Fi("INTERNAL UNHANDLED ERROR: ",Vs(t)),t}).then(t=>(this.rc=!1,t))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=xs.createAndSchedule(this,t,e,n,t=>this.hc(t));return this.tc.push(i),i}uc(){this.nc&&Bi(47125,{Pc:Vs(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do{t=this.ac,await t}while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Vs(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}class zs extends Ns{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Hs,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Hs(t),this._firestoreClient=void 0,await t}}}
/**
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
             */
class Ws{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ws(_s.fromBase64String(t))}catch(t){throw new Ji(zi,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Ws(_s.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ws._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(ys(t,Ws._jsonSchema))return Ws.fromBase64String(t.bytes)}}Ws._jsonSchemaVersion="firestore/bytes/1.0",Ws._jsonSchema={type:ms("string",Ws._jsonSchemaVersion),bytes:ms("string")};
/**
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
             */
class Js{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Ji(zi,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ps(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
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
             */class Ks{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Ji(zi,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Ji(zi,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return rs(this._lat,t._lat)||rs(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ks._jsonSchemaVersion}}static fromJSON(t){if(ys(t,Ks._jsonSchema))return new Ks(t.latitude,t.longitude)}}Ks._jsonSchemaVersion="firestore/geoPoint/1.0",Ks._jsonSchema={type:ms("string",Ks._jsonSchemaVersion),latitude:ms("number"),longitude:ms("number")};
/**
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
             */
class Gs{constructor(t){this._values=(t||[]).map(t=>t)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Gs._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(ys(t,Gs._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(t=>"number"==typeof t))return new Gs(t.vectorValues);throw new Ji(zi,"Expected 'vectorValues' field to be a number array")}}}function Xs(t,e,n){if((e=bt(e))instanceof Js)return e._internalPath;if("string"==typeof e)return function(t,e){if(e.search(Ys)>=0)throw Zs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Js(...e.split("."))._internalPath}catch(n){throw Zs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}(t,e);throw Zs("Field path arguments must be of type string or ",t)}Gs._jsonSchemaVersion="firestore/vectorValue/1.0",Gs._jsonSchema={type:ms("string",Gs._jsonSchemaVersion),vectorValues:ms("object")};const Ys=new RegExp("[~\\*/\\[\\]]");function Zs(t,e,n,i,s){let r=`Function ${e}() called with invalid data`;return r+=". ",new Ji(zi,r+t+"")}const Qs="@firebase/firestore",tr="4.11.0";
/**
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
             */class er{constructor(t,e,n,i,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Us(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new nr(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t,e;return null!==(t=null===(e=this._document)||void 0===e?void 0:e.data.clone().value.mapValue.fields)&&void 0!==t?t:void 0}get(t){if(this._document){const e=this._document.data.field(Xs("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class nr extends er{data(){return super.data()}}class ir{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class sr extends er{constructor(t,e,n,i,s,r){super(t,e,n,i,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new rr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Xs("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Ji(Wi,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=sr._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),t&&t.isValidDocument()&&t.isFoundDocument()?(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e):e}}sr._jsonSchemaVersion="firestore/documentSnapshot/1.0",sr._jsonSchema={type:ms("string",sr._jsonSchemaVersion),bundleSource:ms("string","DocumentSnapshot"),bundleName:ms("string"),bundle:ms("string")};class rr extends sr{data(t={}){return super.data(t)}}class or{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new ir(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new rr(this._firestore,this._userDataWriter,n.key,n,new ir(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Ji(zi,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>{const i=new rr(t._firestore,t._userDataWriter,n.doc.key,n.doc,new ir(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:e++}})}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const i=new rr(t._firestore,t._userDataWriter,e.doc.key,e.doc,new ir(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,r=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:ar(e.type),doc:i,oldIndex:s,newIndex:r}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Ji(Wi,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=or._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=ss.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],i=[];return this.docs.forEach(t=>{null!==t._document&&(e.push(t._document),n.push(this._userDataWriter.convertObjectMap(t._document.data.value.mapValue.fields,"previous")),i.push(t.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function ar(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Bi(61501,{type:t})}}
/**
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
             */or._jsonSchemaVersion="firestore/querySnapshot/1.0",or._jsonSchema={type:ms("string",or._jsonSchemaVersion),bundleSource:ms("string","QuerySnapshot"),bundleName:ms("string"),bundle:ms("string")},function(t,e=!0){Mi="12.9.0",De(new St("firestore",(t,{instanceIdentifier:n,options:i})=>{const s=t.getProvider("app").getImmediate(),r=new zs(new Zi(t.getProvider("auth-internal")),new ns(s,t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Ji(zi,'"projectId" not provided in firebase.initializeApp.');return new Is(t.options.projectId,e)}(s,n),s);return i={useFetchStreams:e,...i},r._setSettings(i),r},"PUBLIC").setMultipleInstances(!0)),$e(Qs,tr,t),$e(Qs,tr,"esm2020")}();const cr="@firebase/installations",lr="0.6.19",hr=1e4,ur=`w:${lr}`,dr="FIS_v2",pr=36e5,fr=new gt("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function gr(t){return t instanceof ft&&t.code.includes("request-failed")}
/**
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
             */function mr({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function yr(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function vr(t,e){const n=(await e.json()).error;return fr.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function wr({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function br(t,{refreshToken:e}){const n=wr(t);return n.append("Authorization",function(t){return`${dr} ${t}`}
/**
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
             */(e)),n}async function Sr(t){const e=await t();return e.status>=500&&e.status<600?t():e}
/**
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
             */function _r(t){return new Promise(e=>{setTimeout(e,t)})}
/**
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
             */
/**
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
             */
const Er=/^[cdef][\w-]{21}$/;function Ir(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){const e=(n=t,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return e.substr(0,22)}
/**
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
             */(t);return Er.test(e)?e:""}catch{return""}}function Cr(t){return`${t.appName}!${t.appId}`}
/**
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
             */const Tr=new Map;function Ar(t,e){const n=Cr(t);kr(n,e),function(t,e){const n=(!Pr&&"BroadcastChannel"in self&&(Pr=new BroadcastChannel("[Firebase] FID Change"),Pr.onmessage=t=>{kr(t.data.key,t.data.fid)}),Pr);n&&n.postMessage({key:t,fid:e}),0===Tr.size&&Pr&&(Pr.close(),Pr=null)}(n,e)}function kr(t,e){const n=Tr.get(t);if(n)for(const i of n)i(e)}let Pr=null;
/**
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
             */
const Or="firebase-installations-store";let Dr=null;function xr(){return Dr||(Dr=Ht("firebase-installations-database",1,{upgrade:(t,e)=>{0===e&&t.createObjectStore(Or)}})),Dr}async function Lr(t,e){const n=Cr(t),i=(await xr()).transaction(Or,"readwrite"),s=i.objectStore(Or),r=await s.get(n);return await s.put(e,n),await i.done,r&&r.fid===e.fid||Ar(t,e.fid),e}async function jr(t){const e=Cr(t),n=(await xr()).transaction(Or,"readwrite");await n.objectStore(Or).delete(e),await n.done}async function Rr(t,e){const n=Cr(t),i=(await xr()).transaction(Or,"readwrite"),s=i.objectStore(Or),r=await s.get(n),o=e(r);return void 0===o?await s.delete(n):await s.put(o,n),await i.done,!o||r&&r.fid===o.fid||Ar(t,o.fid),o}
/**
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
             */async function Mr(t){let e;const n=await Rr(t.appConfig,n=>{const i=function(t){const e=t||{fid:Ir(),registrationStatus:0};return Fr(e)}(n),s=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine)return{installationEntry:e,registrationPromise:Promise.reject(fr.create("app-offline"))};const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(t,e){try{const n=await async function({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=mr(t),s=wr(t),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&s.append("x-firebase-client",t)}const o={fid:n,authVersion:dr,appId:t.appId,sdkVersion:ur},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Sr(()=>fetch(i,a));if(c.ok){const t=await c.json();return{fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:yr(t.authToken)}}throw await vr("Create Installation",c)}(t,e);return Lr(t.appConfig,n)}catch(n){throw gr(n)&&409===n.customData.serverCode?await jr(t.appConfig):await Lr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:i}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:Nr(t)}:{installationEntry:e}}(t,i);return e=s.registrationPromise,s.installationEntry});return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function Nr(t){let e=await $r(t.appConfig);for(;1===e.registrationStatus;)await _r(100),e=await $r(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await Mr(t);return n||e}return e}function $r(t){return Rr(t,t=>{if(!t)throw fr.create("installation-not-found");return Fr(t)})}function Fr(t){return 1===(e=t).registrationStatus&&e.registrationTime+hr<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
/**
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
             */}async function Ur({appConfig:t,heartbeatServiceProvider:e},n){const i=function(t,{fid:e}){return`${mr(t)}/${e}/authTokens:generate`}
/**
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
             */(t,n),s=br(t,n),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&s.append("x-firebase-client",t)}const o={installation:{sdkVersion:ur,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Sr(()=>fetch(i,a));if(c.ok)return yr(await c.json());throw await vr("Generate Auth Token",c)}async function Br(t,e=!1){let n;const i=await Rr(t.appConfig,i=>{if(!Hr(i))throw fr.create("not-registered");const s=i.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+pr}(t)}(s))return i;if(1===s.requestStatus)return n=async function(t,e){let n=await qr(t.appConfig);for(;1===n.authToken.requestStatus;)await _r(100),n=await qr(t.appConfig);const i=n.authToken;return 0===i.requestStatus?Br(t,e):i}(t,e),i;{if(!navigator.onLine)throw fr.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}(i);return n=async function(t,e){try{const n=await Ur(t,e),i={...e,authToken:n};return await Lr(t.appConfig,i),n}catch(n){if(!gr(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n={...e,authToken:{requestStatus:0}};await Lr(t.appConfig,n)}else await jr(t.appConfig);throw n}}(t,e),e}});return n?await n:i.authToken}function qr(t){return Rr(t,t=>{if(!Hr(t))throw fr.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+hr<Date.now()?{...t,authToken:{requestStatus:0}}:t;var n;
/**
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
             */})}function Hr(t){return void 0!==t&&2===t.registrationStatus}
/**
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
             */
async function Vr(t,e=!1){const n=t;return await async function(t){const{registrationPromise:e}=await Mr(t);e&&await e}
/**
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
             */(n),(await Br(n,e)).token}function zr(t){return fr.create("missing-app-config-values",{valueName:t})}
/**
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
             */const Wr="installations",Jr=t=>{const e=t.getProvider("app").getImmediate(),n=function(t){if(!t||!t.options)throw zr("App Configuration");if(!t.name)throw zr("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw zr(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,heartbeatServiceProvider:xe(e,"heartbeat"),_delete:()=>Promise.resolve()}},Kr=t=>{const e=xe(t.getProvider("app").getImmediate(),Wr).getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:i}=await Mr(e);return i?i.catch(console.error):Br(e).catch(console.error),n.fid}(e),getToken:t=>Vr(e,t)}};De(new St(Wr,Jr,"PUBLIC")),De(new St("installations-internal",Kr,"PRIVATE")),$e(cr,lr),$e(cr,lr,"esm2020");
/**
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
             */
const Gr="analytics",Xr="https://www.googletagmanager.com/gtag/js",Yr=new Ot("@firebase/analytics"),Zr=new gt("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
/**
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
             */
function Qr(t){if(!t.startsWith(Xr)){const e=Zr.create("invalid-gtag-resource",{gtagURL:t});return Yr.warn(e.message),""}return t}function to(t){return Promise.all(t.map(t=>t.catch(t=>t)))}function eo(t,e){const n=function(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}("firebase-js-sdk-policy",{createScriptURL:Qr}),i=document.createElement("script"),s=`${Xr}?l=${t}&id=${e}`;i.src=n?null==n?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function no(t,e,n,i){return async function(s,...r){try{if("event"===s){const[i,s]=r;await async function(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let t=s.send_to;Array.isArray(t)||(t=[t]);const i=await to(n);for(const n of t){const t=i.find(t=>t.measurementId===n),s=t&&e[t.appId];if(!s){r=[];break}r.push(s)}}0===r.length&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){Yr.error(r)}}(t,e,n,i,s)}else if("config"===s){const[s,o]=r;await async function(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const t=(await to(n)).find(t=>t.measurementId===s);t&&await e[t.appId]}}catch(a){Yr.error(a)}t("config",s,r)}(t,e,n,i,s,o)}else if("consent"===s){const[e,n]=r;t("consent",e,n)}else if("get"===s){const[e,n,i]=r;t("get",e,n,i)}else if("set"===s){const[e]=r;t("set",e)}else t(s,...r)}catch(o){Yr.error(o)}}}const io=new class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};function so(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ro(t,e=io,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw Zr.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Zr.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ao;return setTimeout(async()=>{a.abort()},6e4),oo({appId:i,apiKey:s,measurementId:r},o,a,e)}async function oo(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=io){const{appId:r,measurementId:o}=t;try{await function(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(Zr.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}(i,e)}catch(c){if(o)return Yr.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:r,measurementId:o};throw c}try{const e=await async function(t){const{appId:e,apiKey:n}=t,i={method:"GET",headers:so(n)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",e),r=await fetch(s,i);if(200!==r.status&&304!==r.status){let t="";try{var o;const e=await r.json();null!==(o=e.error)&&void 0!==o&&o.message&&(t=e.error.message)}catch(a){}throw Zr.create("config-fetch-failed",{httpStatus:r.status,responseMessage:t})}return r.json()}(t);return s.deleteThrottleMetadata(r),e}catch(c){var a;const e=c;if(!function(t){if(!(t instanceof ft&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(e)){if(s.deleteThrottleMetadata(r),o)return Yr.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:r,measurementId:o};throw c}const l=503===Number(null==e||null===(a=e.customData)||void 0===a?void 0:a.httpStatus)?wt(n,s.intervalMillis,30):wt(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return s.setThrottleMetadata(r,h),Yr.debug(`Calling attemptFetch again in ${l} millis`),oo(t,h,i,s)}}class ao{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function co(t,e,n,i,s,r,o){var a;const c=ro(t);c.then(e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&Yr.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(t=>Yr.error(t)),e.push(c);const l=
/**
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
             */
async function(){if(!dt())return Yr.warn(Zr.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await pt()}catch(t){return Yr.warn(Zr.create("indexeddb-unavailable",{errorInfo:null==t?void 0:t.toString()}).message),!1}return!0}().then(t=>t?i.getId():void 0),[h,u]=await Promise.all([c,l]);(function(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Xr)&&n.src.includes(t))return n;return null}
/**
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
             */)(r)||eo(r,h.measurementId),s("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=u&&(d.firebase_id=u),s("config",h.measurementId,d),h.measurementId}
/**
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
             */class lo{constructor(t){this.app=t}_delete(){return delete ho[this.app.options.appId],Promise.resolve()}}let ho={},uo=[];const po={};let fo,go,mo="dataLayer",yo=!1;function vo(){const t=[];if(function(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()&&t.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||t.push("Cookies are not available."),t.length>0){const e=t.map((t,e)=>`(${e+1}) ${t}`).join(" "),n=Zr.create("invalid-analytics-context",{errorInfo:e});Yr.warn(n.message)}}function wo(t,e,n){vo();const i=t.options.appId;if(!i)throw Zr.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw Zr.create("no-api-key");Yr.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=ho[i])throw Zr.create("already-exists",{id:i});if(!yo){!function(t){let e=[];Array.isArray(window[t])?e=window[t]:window[t]=e}(mo);const{wrappedGtag:t,gtagCore:e}=function(t,e,n,i,s){let r=function(...t){window[i].push(arguments)};return window[s]&&"function"==typeof window[s]&&(r=window[s]),window[s]=no(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}(ho,uo,po,mo,"gtag");go=t,fo=e,yo=!0}return ho[i]=co(t,uo,po,e,fo,mo,n),new lo(t)}function bo(t,e,n){t=bt(t),async function(t,e,n,i){if(i&&i.global){const e={};for(const t of Object.keys(n))e[`user_properties.${t}`]=n[t];return t("set",e),Promise.resolve()}t("config",await e,{update:!0,user_properties:n})}(go,ho[t.app.options.appId],e,n).catch(t=>Yr.error(t))}const So="@firebase/analytics",_o="0.10.19";De(new St(Gr,(t,{options:e})=>wo(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e),"PUBLIC")),De(new St("analytics-internal",function(t){try{const e=t.getProvider(Gr).getImmediate();return{logEvent:(t,n,i)=>function(t,e,n,i){t=bt(t),async function(t,e,n,i,s){if(s&&s.global)t("event",n,i);else{const s=await e;t("event",n,{...i,send_to:s})}}(go,ho[t.app.options.appId],e,n,i).catch(t=>Yr.error(t))}(e,t,n,i),setUserProperties:(t,n)=>bo(e,t,n)}}catch(e){throw Zr.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),$e(So,_o),$e(So,_o,"esm2020");const Eo=Me({apiKey:"AIzaSyA3eiH5zNFY5KHoCkX7hz01I8HO864NyGs",authDomain:"lab06-expense-134f0.firebaseapp.com",projectId:"lab06-expense-134f0",storageBucket:"lab06-expense-134f0.firebasestorage.app",messagingSenderId:"121972935627",appId:"1:121972935627:web:228dbc5048bbe7f92dc44e",measurementId:"G-S1S73R6R5P"});!function(t){const e="object"==typeof t?t:Ne(),n="string"==typeof t?t:Es,i=xe(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const t=rt("firestore");t&&$s(i,...t)}}(Eo),function(t=Ne()){const e=xe(t=bt(t),Gr);e.isInitialized()?e.getImmediate():function(t,e={}){const n=xe(t,Gr);if(n.isInitialized()){const t=n.getImmediate();if(yt(e,n.getOptions()))return t;throw Zr.create("already-initialized")}n.initialize({options:e})}(t)}(Eo);const Io=Ii.object({properties:{caption:Ii.string(),tags:Ii.array({items:Ii.string()}),objects:Ii.array({items:Ii.object({properties:{name:Ii.string(),confidence:Ii.number()},optionalProperties:["confidence"]})}),safety:Ii.object({properties:{isSensitive:Ii.boolean(),notes:Ii.string()},optionalProperties:["notes"]})},optionalProperties:["objects","safety"]}),Co=function(t=Ne(),e){var n,i;const s=xe(t=bt(t),Ye),r=null!==(n=null==e?void 0:e.backend)&&void 0!==n?n:new Rn,o={useLimitedUseAppCheckTokens:null!==(i=null==e?void 0:e.useLimitedUseAppCheckTokens)&&void 0!==i&&i},a=function(t){if(t instanceof Rn)return`${Ye}/googleai`;if(t instanceof Mn)return`${Ye}/vertexai/${t.location}`;throw new en(pn,`Invalid backend: ${JSON.stringify(t.backendType)}`)}(r),c=s.getImmediate({identifier:a});return c.options=o,c}(Eo,{backend:new Rn}),To=function(t,e,n){var i;const s=e;let r;if(r=s.mode?s.inCloudParams||{model:"gemini-2.5-flash-lite"}:e,!r.model)throw new en(_n,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");const o=null===(i=t.chromeAdapterFactory)||void 0===i?void 0:i.call(t,s.mode,"undefined"==typeof window?void 0:window,s.onDeviceParams),a=new Ei(t,r,n,o);return a._apiSettings.inferenceMode=s.mode,a}(Co,{model:"gemini-2.5-flash",generationConfig:{responseMimeType:"application/json",responseSchema:Io}});class Ao{static async analyze(t){var e;const n={inlineData:{data:t.base64,mimeType:t.mimeType}},i=null!==(e=(await To.generateContent(["วิเคราะห์ภาพนี้และตอบกลับตาม JSON schema เท่านั้น\n- caption: คำบรรยายสั้น 1 ประโยคภาษาไทย\n- tags: คีย์เวิร์ด 3-8 คำ\n- objects: ถ้าเห็นวัตถุเด่น ให้ระบุชื่อ\n- safety: ถ้าเป็นภาพอ่อนไหวให้ทำเครื่องหมาย",n])).response.text())&&void 0!==e?e:"{}";return JSON.parse(i)}}const ko={key:0,style:{"text-align":"center",margin:"20px 0"}},Po={key:1,style:{"text-align":"center","margin-top":"20px"}},Oo={style:{"font-size":"1.1em","margin-bottom":"15px"}},Do={style:{"margin-bottom":"15px"}},xo={key:0,style:{"margin-bottom":"15px"}},Lo={key:0},jo={key:1},Ro={key:0,style:{color:"var(--ion-color-danger)","font-size":"0.9em","margin-top":"5px"}};t("default",n({__name:"Tab1Page",setup(t){const e=i(null),n=i(null),x=i(""),L=i(null),j=i(!1);async function R(t){var e;const i=null===(e=t.target.files)||void 0===e?void 0:e[0];i&&(n.value=await X.fromFile(i),x.value=URL.createObjectURL(i),L.value=null)}async function M(){j.value=!0;try{const t=await X.fromCamera();n.value=t,x.value=`data:${t.mimeType};base64,${t.base64}`,L.value=null}catch(t){console.error("Camera error:",t)}finally{j.value=!1}}async function N(){if(n.value){j.value=!0;try{L.value=await Ao.analyze(n.value)}catch(t){console.error("Analysis error:",t),alert("เกิดข้อผิดพลาดในการวิเคราะห์ภาพ โปรดลองอีกครั้ง")}finally{j.value=!1}}}return(t,i)=>(P(),s(o(a),null,{default:r(()=>[c(o(d),null,{default:r(()=>[c(o(l),{color:"primary"},{default:r(()=>[c(o(h),null,{default:r(()=>[...i[1]||(i[1]=[u("Lab08: Gemini Vision",-1)])]),_:1})]),_:1})]),_:1}),c(o(k),{class:"ion-padding"},{default:r(()=>[p("input",{ref_key:"fileEl",ref:e,type:"file",accept:"image/*",hidden:"",onChange:R},null,544),c(o(m),{expand:"block",color:"light",onClick:i[0]||(i[0]=t=>{var n;return null===(n=e.value)||void 0===n?void 0:n.click()}),class:"ion-margin-bottom"},{default:r(()=>[...i[2]||(i[2]=[u(" อัปโหลดไฟล์ภาพ ",-1)])]),_:1}),c(o(m),{expand:"block",color:"secondary",onClick:M,class:"ion-margin-bottom"},{default:r(()=>[...i[3]||(i[3]=[u(" ถ่ายภาพ (Camera) ",-1)])]),_:1}),x.value?(P(),f("div",ko,[c(o(y),{src:x.value,style:{"max-height":"300px","border-radius":"8px",overflow:"hidden","box-shadow":"0 4px 6px rgba(0,0,0,0.1)"}},null,8,["src"])])):g("",!0),c(o(m),{expand:"block",disabled:!n.value||j.value,onClick:N},{default:r(()=>[...i[4]||(i[4]=[u(" วิเคราะห์ภาพด้วย Gemini AI ",-1)])]),_:1},8,["disabled"]),j.value?(P(),f("div",Po,[c(o(v),{name:"crescent"}),i[5]||(i[5]=p("p",null,"AI กำลังวิเคราะห์รูปภาพ...",-1))])):g("",!0),L.value?(P(),s(o(w),{key:2,style:{margin:"20px 0"}},{default:r(()=>[c(o(b),null,{default:r(()=>[c(o(S),null,{default:r(()=>[...i[6]||(i[6]=[u("ผลการวิเคราะห์",-1)])]),_:1})]),_:1}),c(o(_),null,{default:r(()=>[p("p",Oo,[i[7]||(i[7]=p("strong",null,"รายละเอียด:",-1)),u(" "+E(L.value.caption),1)]),p("div",Do,[i[8]||(i[8]=p("strong",null,"คีย์เวิร์ด:",-1)),i[9]||(i[9]=p("br",null,null,-1)),(P(!0),f(C,null,I(L.value.tags,t=>(P(),s(o(A),{color:"tertiary",key:t,style:{"margin-right":"5px","margin-top":"5px","font-weight":"normal"}},{default:r(()=>[u(E(t),1)]),_:2},1024))),128))]),L.value.objects&&L.value.objects.length>0?(P(),f("div",xo,[i[10]||(i[10]=p("strong",null,"วัตถุที่ตรวจพบ:",-1)),c(o(T),{lines:"none",style:{"margin-top":"5px","border-radius":"8px",background:"var(--ion-color-light)"}},{default:r(()=>[(P(!0),f(C,null,I(L.value.objects,t=>(P(),s(o(O),{key:t.name,color:"light"},{default:r(()=>[c(o(D),null,{default:r(()=>[p("h3",null,E(t.name),1),t.confidence?(P(),f("p",Lo,"ความแม่นยำ: "+E((100*t.confidence).toFixed(0))+"%",1)):g("",!0)]),_:2},1024)]),_:2},1024))),128))]),_:1})])):g("",!0),L.value.safety?(P(),f("div",jo,[c(o(A),{color:L.value.safety.isSensitive?"danger":"success"},{default:r(()=>[u(E(L.value.safety.isSensitive?"⚠️ ภาพเนื้อหาอ่อนไหว":"✅ ภาพปลอดภัย"),1)]),_:1},8,["color"]),L.value.safety.notes?(P(),f("p",Ro,E(L.value.safety.notes),1)):g("",!0)])):g("",!0)]),_:1})]),_:1})):g("",!0)]),_:1})]),_:1}))}}))}}});
