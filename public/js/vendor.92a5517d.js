(self["webpackChunkicesi_materno"]=self["webpackChunkicesi_materno"]||[]).push([[736],{97458:(e,a,n)=>{"use strict";n.d(a,{Jn:()=>U,qX:()=>F,Xd:()=>G,Mq:()=>W,ZF:()=>Z,KN:()=>q});var i=n(17429),r=n(50004),o=n(95479);
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
class t{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(s(e)){const a=e.getImmediate();return`${a.library}/${a.version}`}return null})).filter((e=>e)).join(" ")}}function s(e){const a=e.getComponent();return"VERSION"===(null===a||void 0===a?void 0:a.type)}const l="@firebase/app",u="0.7.5",c=new r.Yd("@firebase/app"),d="@firebase/app-compat",h="@firebase/analytics-compat",m="@firebase/analytics",p="@firebase/app-check-compat",v="@firebase/app-check",k="@firebase/auth",g="@firebase/auth-compat",f="@firebase/database",b="@firebase/database-compat",y="@firebase/functions",S="@firebase/functions-compat",M="@firebase/installations",A="@firebase/installations-compat",B="@firebase/messaging",j="@firebase/messaging-compat",x="@firebase/performance",P="@firebase/performance-compat",T="@firebase/remote-config",w="@firebase/remote-config-compat",C="@firebase/storage",K="@firebase/storage-compat",L="@firebase/firestore",N="@firebase/firestore-compat",_="firebase",z="9.2.0",R="[DEFAULT]",D={[l]:"fire-core",[d]:"fire-core-compat",[m]:"fire-analytics",[h]:"fire-analytics-compat",[v]:"fire-app-check",[p]:"fire-app-check-compat",[k]:"fire-auth",[g]:"fire-auth-compat",[f]:"fire-rtdb",[b]:"fire-rtdb-compat",[y]:"fire-fn",[S]:"fire-fn-compat",[M]:"fire-iid",[A]:"fire-iid-compat",[B]:"fire-fcm",[j]:"fire-fcm-compat",[x]:"fire-perf",[P]:"fire-perf-compat",[T]:"fire-rc",[w]:"fire-rc-compat",[C]:"fire-gcs",[K]:"fire-gcs-compat",[L]:"fire-fst",[N]:"fire-fst-compat","fire-js":"fire-js",[_]:"fire-js-all"},H=new Map,E=new Map;function V(e,a){try{e.container.addComponent(a)}catch(n){c.debug(`Component ${a.name} failed to register with FirebaseApp ${e.name}`,n)}}function G(e){const a=e.name;if(E.has(a))return c.debug(`There were multiple attempts to register component ${a}.`),!1;E.set(a,e);for(const n of H.values())V(n,e);return!0}function F(e,a){return e.container.getProvider(a)}
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
const I={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},O=new o.LL("app","Firebase",I);
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
class J{constructor(e,a,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},a),this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw O.create("app-deleted",{appName:this._name})}}
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
 */const U=z;function Z(e,a={}){if("object"!==typeof a){const e=a;a={name:e}}const n=Object.assign({name:R,automaticDataCollectionEnabled:!1},a),r=n.name;if("string"!==typeof r||!r)throw O.create("bad-app-name",{appName:String(r)});const t=H.get(r);if(t){if((0,o.vZ)(e,t.options)&&(0,o.vZ)(n,t.config))return t;throw O.create("duplicate-app",{appName:r})}const s=new i.H0(r);for(const i of E.values())s.addComponent(i);const l=new J(e,n,s);return H.set(r,l),l}function W(e=R){const a=H.get(e);if(!a)throw O.create("no-app",{appName:e});return a}function q(e,a,n){var r;let o=null!==(r=D[e])&&void 0!==r?r:e;n&&(o+=`-${n}`);const t=o.match(/\s|\//),s=a.match(/\s|\//);if(t||s){const e=[`Unable to register library "${o}" with version "${a}":`];return t&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),t&&s&&e.push("and"),s&&e.push(`version name "${a}" contains illegal characters (whitespace or "/")`),void c.warn(e.join(" "))}G(new i.wA(`${o}-version`,(()=>({library:o,version:a})),"VERSION"))}
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
function $(e){G(new i.wA("platform-logger",(e=>new t(e)),"PRIVATE")),q(l,u,e),q(l,u,"esm2017"),q("fire-js","")}$("")},17429:(e,a,n)=>{"use strict";n.d(a,{wA:()=>o,H0:()=>c});var i=n(28430),r=n(95479),o=function(){function e(e,a,n){this.name=e,this.instanceFactory=a,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),t="[DEFAULT]",s=function(){function e(e,a){this.name=e,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var a=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(a)){var n=new r.BH;if(this.instancesDeferred.set(a,n),this.isInitialized(a)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:a});i&&n.resolve(i)}catch(o){}}return this.instancesDeferred.get(a).promise},e.prototype.getImmediate=function(e){var a,n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(a=null===e||void 0===e?void 0:e.optional)&&void 0!==a&&a;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var a,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(u(e))try{this.getOrInitializeService({instanceIdentifier:t})}catch(m){}try{for(var r=(0,i.XA)(this.instancesDeferred.entries()),o=r.next();!o.done;o=r.next()){var s=(0,i.CR)(o.value,2),l=s[0],c=s[1],d=this.normalizeInstanceIdentifier(l);try{var h=this.getOrInitializeService({instanceIdentifier:d});c.resolve(h)}catch(m){}}}catch(p){a={error:p}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=t),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return(0,i.mG)(this,void 0,void 0,(function(){var e;return(0,i.Jh)(this,(function(a){switch(a.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all((0,i.ev)((0,i.ev)([],(0,i.CR)(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),(0,i.CR)(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return a.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=t),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e=t),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var a,n;void 0===e&&(e={});var r=e.options,o=void 0===r?{}:r,t=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(t))throw Error(this.name+"("+t+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var s=this.getOrInitializeService({instanceIdentifier:t,options:o});try{for(var l=(0,i.XA)(this.instancesDeferred.entries()),u=l.next();!u.done;u=l.next()){var c=(0,i.CR)(u.value,2),d=c[0],h=c[1],m=this.normalizeInstanceIdentifier(d);t===m&&h.resolve(s)}}catch(p){a={error:p}}finally{try{u&&!u.done&&(n=l.return)&&n.call(l)}finally{if(a)throw a.error}}return s},e.prototype.onInit=function(e,a){var n,i=this.normalizeInstanceIdentifier(a),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);var o=this.instances.get(i);return o&&e(o,i),function(){r.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,a){var n,r,o=this.onInitCallbacks.get(a);if(o)try{for(var t=(0,i.XA)(o),s=t.next();!s.done;s=t.next()){var l=s.value;try{l(e,a)}catch(u){}}}catch(c){n={error:c}}finally{try{s&&!s.done&&(r=t.return)&&r.call(t)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var a=e.instanceIdentifier,n=e.options,i=void 0===n?{}:n,r=this.instances.get(a);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:l(a),options:i}),this.instances.set(a,r),this.instancesOptions.set(a,i),this.invokeOnInitCallbacks(r,a),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,a,r)}catch(o){}return r||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=t),this.component?this.component.multipleInstances?e:t:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();function l(e){return e===t?void 0:e}function u(e){return"EAGER"===e.instantiationMode}
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
 */var c=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var a=this.getProvider(e.name);if(a.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);a.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){var a=this.getProvider(e.name);a.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var a=new s(e,this);return this.providers.set(e,a),a},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()},61214:(e,a,n)=>{"use strict";var i=n(97458),r=n(17429),o=n(95479),t=n(93968);const s="@firebase/installations",l="0.5.2",u=1e4,c=`w:${l}`,d="FIS_v2",h="https://firebaseinstallations.googleapis.com/v1",m=36e5,p="installations",v="Installations",k={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},g=new o.LL(p,v,k);function f(e){return e instanceof o.ZR&&e.code.includes("request-failed")}
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
 */function b({projectId:e}){return`${h}/projects/${e}/installations`}function y(e){return{token:e.token,requestStatus:2,expiresIn:j(e.expiresIn),creationTime:Date.now()}}async function S(e,a){const n=await a.json(),i=n.error;return g.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function M({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function A(e,{refreshToken:a}){const n=M(e);return n.append("Authorization",x(a)),n}async function B(e){const a=await e();return a.status>=500&&a.status<600?e():a}function j(e){return Number(e.replace("s","000"))}function x(e){return`${d} ${e}`}
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
 */async function P(e,{fid:a}){const n=b(e),i=M(e),r={fid:a,authVersion:d,appId:e.appId,sdkVersion:c},o={method:"POST",headers:i,body:JSON.stringify(r)},t=await B((()=>fetch(n,o)));if(t.ok){const e=await t.json(),n={fid:e.fid||a,registrationStatus:2,refreshToken:e.refreshToken,authToken:y(e.authToken)};return n}throw await S("Create Installation",t)}
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
 */function T(e){return new Promise((a=>{setTimeout(a,e)}))}
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
 */function w(e){const a=btoa(String.fromCharCode(...e));return a.replace(/\+/g,"-").replace(/\//g,"_")}
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
 */const C=/^[cdef][\w-]{21}$/,K="";function L(){try{const e=new Uint8Array(17),a=self.crypto||self.msCrypto;a.getRandomValues(e),e[0]=112+e[0]%16;const n=N(e);return C.test(n)?n:K}catch(e){return K}}function N(e){const a=w(e);return a.substr(0,22)}
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
 */function _(e){return`${e.appName}!${e.appId}`}
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
 */const z=new Map;function R(e,a){const n=_(e);D(n,a),H(n,a)}function D(e,a){const n=z.get(e);if(n)for(const i of n)i(a)}function H(e,a){const n=V();n&&n.postMessage({key:e,fid:a}),G()}let E=null;function V(){return!E&&"BroadcastChannel"in self&&(E=new BroadcastChannel("[Firebase] FID Change"),E.onmessage=e=>{D(e.data.key,e.data.fid)}),E}function G(){0===z.size&&E&&(E.close(),E=null)}
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
 */const F="firebase-installations-database",I=1,O="firebase-installations-store";let J=null;function U(){return J||(J=(0,t.openDb)(F,I,(e=>{switch(e.oldVersion){case 0:e.createObjectStore(O)}}))),J}async function Z(e,a){const n=_(e),i=await U(),r=i.transaction(O,"readwrite"),o=r.objectStore(O),t=await o.get(n);return await o.put(a,n),await r.complete,t&&t.fid===a.fid||R(e,a.fid),a}async function W(e){const a=_(e),n=await U(),i=n.transaction(O,"readwrite");await i.objectStore(O).delete(a),await i.complete}async function q(e,a){const n=_(e),i=await U(),r=i.transaction(O,"readwrite"),o=r.objectStore(O),t=await o.get(n),s=a(t);return void 0===s?await o.delete(n):await o.put(s,n),await r.complete,!s||t&&t.fid===s.fid||R(e,s.fid),s}
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
 */async function $(e){let a;const n=await q(e,(n=>{const i=Y(n),r=Q(e,i);return a=r.registrationPromise,r.installationEntry}));return n.fid===K?{installationEntry:await a}:{installationEntry:n,registrationPromise:a}}function Y(e){const a=e||{fid:L(),registrationStatus:0};return ne(a)}function Q(e,a){if(0===a.registrationStatus){if(!navigator.onLine){const e=Promise.reject(g.create("app-offline"));return{installationEntry:a,registrationPromise:e}}const n={fid:a.fid,registrationStatus:1,registrationTime:Date.now()},i=X(e,n);return{installationEntry:n,registrationPromise:i}}return 1===a.registrationStatus?{installationEntry:a,registrationPromise:ee(e)}:{installationEntry:a}}async function X(e,a){try{const n=await P(e,a);return Z(e,n)}catch(n){throw f(n)&&409===n.customData.serverCode?await W(e):await Z(e,{fid:a.fid,registrationStatus:0}),n}}async function ee(e){let a=await ae(e);while(1===a.registrationStatus)await T(100),a=await ae(e);if(0===a.registrationStatus){const{installationEntry:a,registrationPromise:n}=await $(e);return n||a}return a}function ae(e){return q(e,(e=>{if(!e)throw g.create("installation-not-found");return ne(e)}))}function ne(e){return ie(e)?{fid:e.fid,registrationStatus:0}:e}function ie(e){return 1===e.registrationStatus&&e.registrationTime+u<Date.now()}
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
 */async function re({appConfig:e,platformLoggerProvider:a},n){const i=oe(e,n),r=A(e,n),o=a.getImmediate({optional:!0});o&&r.append("x-firebase-client",o.getPlatformInfoString());const t={installation:{sdkVersion:c}},s={method:"POST",headers:r,body:JSON.stringify(t)},l=await B((()=>fetch(i,s)));if(l.ok){const e=await l.json(),a=y(e);return a}throw await S("Generate Auth Token",l)}function oe(e,{fid:a}){return`${b(e)}/${a}/authTokens:generate`}
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
 */async function te(e,a=!1){let n;const i=await q(e.appConfig,(i=>{if(!ce(i))throw g.create("not-registered");const r=i.authToken;if(!a&&de(r))return i;if(1===r.requestStatus)return n=se(e,a),i;{if(!navigator.onLine)throw g.create("app-offline");const a=me(i);return n=ue(e,a),a}})),r=n?await n:i.authToken;return r}async function se(e,a){let n=await le(e.appConfig);while(1===n.authToken.requestStatus)await T(100),n=await le(e.appConfig);const i=n.authToken;return 0===i.requestStatus?te(e,a):i}function le(e){return q(e,(e=>{if(!ce(e))throw g.create("not-registered");const a=e.authToken;return pe(a)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function ue(e,a){try{const n=await re(e,a),i=Object.assign(Object.assign({},a),{authToken:n});return await Z(e.appConfig,i),n}catch(n){if(!f(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},a),{authToken:{requestStatus:0}});await Z(e.appConfig,n)}else await W(e.appConfig);throw n}}function ce(e){return void 0!==e&&2===e.registrationStatus}function de(e){return 2===e.requestStatus&&!he(e)}function he(e){const a=Date.now();return a<e.creationTime||e.creationTime+e.expiresIn<a+m}function me(e){const a={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:a})}function pe(e){return 1===e.requestStatus&&e.requestTime+u<Date.now()}
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
 */async function ve(e){const a=e,{installationEntry:n,registrationPromise:i}=await $(a.appConfig);return i?i.catch(console.error):te(a).catch(console.error),n.fid}
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
 */async function ke(e,a=!1){const n=e;await ge(n.appConfig);const i=await te(n,a);return i.token}async function ge(e){const{registrationPromise:a}=await $(e);a&&await a}
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
function fe(e){if(!e||!e.options)throw be("App Configuration");if(!e.name)throw be("App Name");const a=["projectId","apiKey","appId"];for(const n of a)if(!e.options[n])throw be(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function be(e){return g.create("missing-app-config-values",{valueName:e})}
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
 */const ye="installations",Se="installations-internal",Me=e=>{const a=e.getProvider("app").getImmediate(),n=fe(a),r=(0,i.qX)(a,"platform-logger"),o={app:a,appConfig:n,platformLoggerProvider:r,_delete:()=>Promise.resolve()};return o},Ae=e=>{const a=e.getProvider("app").getImmediate(),n=(0,i.qX)(a,ye).getImmediate(),r={getId:()=>ve(n),getToken:e=>ke(n,e)};return r};function Be(){(0,i.Xd)(new r.wA(ye,Me,"PUBLIC")),(0,i.Xd)(new r.wA(Se,Ae,"PRIVATE"))}Be(),(0,i.KN)(s,l),(0,i.KN)(s,l,"esm2017")},50004:(e,a,n)=>{"use strict";n.d(a,{in:()=>r,Yd:()=>u});
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
const i=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const o={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},t=r.INFO,s={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},l=(e,a,...n)=>{if(a<e.logLevel)return;const i=(new Date).toISOString(),r=s[a];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${a})`);console[r](`[${i}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=t,this._logHandler=l,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},95479:(e,a,n)=>{"use strict";n.d(a,{BH:()=>s,LL:()=>y,ZR:()=>b,zI:()=>g,tV:()=>t,$s:()=>D,ne:()=>w,vZ:()=>B,pd:()=>T,m9:()=>H,z$:()=>l,ru:()=>c,d:()=>h,xb:()=>A,w1:()=>m,hl:()=>v,uI:()=>u,b$:()=>d,Mn:()=>p,xO:()=>x,zd:()=>P,eu:()=>k});
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
const i=function(e){const a=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?a[n++]=r:r<2048?(a[n++]=r>>6|192,a[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),a[n++]=r>>18|240,a[n++]=r>>12&63|128,a[n++]=r>>6&63|128,a[n++]=63&r|128):(a[n++]=r>>12|224,a[n++]=r>>6&63|128,a[n++]=63&r|128)}return a},r=function(e){const a=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)a[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=e[n++];a[i++]=String.fromCharCode((31&r)<<6|63&o)}else if(r>239&&r<365){const o=e[n++],t=e[n++],s=e[n++],l=((7&r)<<18|(63&o)<<12|(63&t)<<6|63&s)-65536;a[i++]=String.fromCharCode(55296+(l>>10)),a[i++]=String.fromCharCode(56320+(1023&l))}else{const o=e[n++],t=e[n++];a[i++]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&t)}}return a.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,a){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=a?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const a=e[r],o=r+1<e.length,t=o?e[r+1]:0,s=r+2<e.length,l=s?e[r+2]:0,u=a>>2,c=(3&a)<<4|t>>4;let d=(15&t)<<2|l>>6,h=63&l;s||(h=64,o||(d=64)),i.push(n[u],n[c],n[d],n[h])}return i.join("")},encodeString(e,a){return this.HAS_NATIVE_SUPPORT&&!a?btoa(e):this.encodeByteArray(i(e),a)},decodeString(e,a){return this.HAS_NATIVE_SUPPORT&&!a?atob(e):r(this.decodeStringToByteArray(e,a))},decodeStringToByteArray(e,a){this.init_();const n=a?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const a=n[e.charAt(r++)],o=r<e.length,t=o?n[e.charAt(r)]:0;++r;const s=r<e.length,l=s?n[e.charAt(r)]:64;++r;const u=r<e.length,c=u?n[e.charAt(r)]:64;if(++r,null==a||null==t||null==l||null==c)throw Error();const d=a<<2|t>>4;if(i.push(d),64!==l){const e=t<<4&240|l>>2;if(i.push(e),64!==c){const e=l<<6&192|c;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},t=function(e){try{return o.decodeString(e,!0)}catch(a){console.error("base64Decode failed: ",a)}return null};
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
class s{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,a)=>{this.resolve=e,this.reject=a}))}wrapCallback(e){return(a,n)=>{a?this.reject(a):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(a):e(a,n))}}}
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
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function u(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function c(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function h(){return l().indexOf("Electron/")>=0}function m(){const e=l();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function p(){return l().indexOf("MSAppHost/")>=0}function v(){return"object"===typeof indexedDB}function k(){return new Promise(((e,a)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;a((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){a(n)}}))}function g(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
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
const f="FirebaseError";class b extends Error{constructor(e,a,n){super(a),this.code=e,this.customData=n,this.name=f,Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,y.prototype.create)}}class y{constructor(e,a,n){this.service=e,this.serviceName=a,this.errors=n}create(e,...a){const n=a[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?S(r,n):"Error",t=`${this.serviceName}: ${o} (${i}).`,s=new b(i,t,n);return s}}function S(e,a){return e.replace(M,((e,n)=>{const i=a[n];return null!=i?String(i):`<${n}?>`}))}const M=/\{\$([^}]+)}/g;
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
 */function A(e){for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a))return!1;return!0}function B(e,a){if(e===a)return!0;const n=Object.keys(e),i=Object.keys(a);for(const r of n){if(!i.includes(r))return!1;const n=e[r],o=a[r];if(j(n)&&j(o)){if(!B(n,o))return!1}else if(n!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function j(e){return null!==e&&"object"===typeof e}
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
 */function x(e){const a=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{a.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):a.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return a.length?"&"+a.join("&"):""}function P(e){const a={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,i]=e.split("=");a[decodeURIComponent(n)]=decodeURIComponent(i)}})),a}function T(e){const a=e.indexOf("?");if(!a)return"";const n=e.indexOf("#",a);return e.substring(a,n>0?n:void 0)}
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
 */function w(e,a){const n=new C(e,a);return n.subscribe.bind(n)}class C{constructor(e,a){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=a,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((a=>{a.next(e)}))}error(e){this.forEachObserver((a=>{a.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,a,n){let i;if(void 0===e&&void 0===a&&void 0===n)throw new Error("Missing Observer.");i=K(e,["next","error","complete"])?e:{next:e,error:a,complete:n},void 0===i.next&&(i.next=L),void 0===i.error&&(i.error=L),void 0===i.complete&&(i.complete=L);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let a=0;a<this.observers.length;a++)this.sendOne(a,e)}sendOne(e,a){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{a(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function K(e,a){if("object"!==typeof e||null===e)return!1;for(const n of a)if(n in e&&"function"===typeof e[n])return!0;return!1}function L(){}
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
const N=1e3,_=2,z=144e5,R=.5;function D(e,a=N,n=_){const i=a*Math.pow(n,e),r=Math.round(R*i*(Math.random()-.5)*2);return Math.min(z,i+r)}
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
const s="analytics",l="firebase_id",u="origin",c=6e4,d="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",h="https://www.googletagmanager.com/gtag/js",m=new r.Yd("@firebase/analytics");
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
function p(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function v(e,a){const n=document.createElement("script");n.src=`${h}?l=${e}&id=${a}`,n.async=!0,document.head.appendChild(n)}function k(e){let a=[];return Array.isArray(window[e])?a=window[e]:window[e]=a,a}async function g(e,a,n,i,r,o){const t=i[r];try{if(t)await a[t];else{const e=await p(n),i=e.find((e=>e.measurementId===r));i&&await a[i.appId]}}catch(s){m.error(s)}e("config",r,o)}async function f(e,a,n,i,r){try{let o=[];if(r&&r["send_to"]){let e=r["send_to"];Array.isArray(e)||(e=[e]);const i=await p(n);for(const n of e){const e=i.find((e=>e.measurementId===n)),r=e&&a[e.appId];if(!r){o=[];break}o.push(r)}}0===o.length&&(o=Object.values(a)),await Promise.all(o),e("event",i,r||{})}catch(o){m.error(o)}}function b(e,a,n,i){async function r(r,o,t){try{"event"===r?await f(e,a,n,o,t):"config"===r?await g(e,a,n,i,o,t):e("set",o)}catch(s){m.error(s)}}return r}function y(e,a,n,i,r){let o=function(...e){window[i].push(arguments)};return window[r]&&"function"===typeof window[r]&&(o=window[r]),window[r]=b(o,e,a,n),{gtagCore:o,wrappedGtag:window[r]}}function S(){const e=window.document.getElementsByTagName("script");for(const a of Object.values(e))if(a.src&&a.src.includes(h))return a;return null}
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
 */const M={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},A=new o.LL("analytics","Analytics",M),B=30,j=1e3;class x{constructor(e={},a=j){this.throttleMetadata=e,this.intervalMillis=a}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,a){this.throttleMetadata[e]=a}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const P=new x;function T(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function w(e){var a;const{appId:n,apiKey:i}=e,r={method:"GET",headers:T(i)},o=d.replace("{app-id}",n),t=await fetch(o,r);if(200!==t.status&&304!==t.status){let e="";try{const n=await t.json();(null===(a=n.error)||void 0===a?void 0:a.message)&&(e=n.error.message)}catch(s){}throw A.create("config-fetch-failed",{httpStatus:t.status,responseMessage:e})}return t.json()}async function C(e,a=P,n){const{appId:i,apiKey:r,measurementId:o}=e.options;if(!i)throw A.create("no-app-id");if(!r){if(o)return{measurementId:o,appId:i};throw A.create("no-api-key")}const t=a.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new _;return setTimeout((async()=>{s.abort()}),void 0!==n?n:c),K({appId:i,apiKey:r,measurementId:o},t,s,a)}async function K(e,{throttleEndTimeMillis:a,backoffCount:n},i,r=P){const{appId:t,measurementId:s}=e;try{await L(i,a)}catch(l){if(s)return m.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${l.message}]`),{appId:t,measurementId:s};throw l}try{const a=await w(e);return r.deleteThrottleMetadata(t),a}catch(l){if(!N(l)){if(r.deleteThrottleMetadata(t),s)return m.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${l.message}]`),{appId:t,measurementId:s};throw l}const a=503===Number(l.customData.httpStatus)?(0,o.$s)(n,r.intervalMillis,B):(0,o.$s)(n,r.intervalMillis),u={throttleEndTimeMillis:Date.now()+a,backoffCount:n+1};return r.setThrottleMetadata(t,u),m.debug(`Calling attemptFetch again in ${a} millis`),K(e,u,i,r)}}function L(e,a){return new Promise(((n,i)=>{const r=Math.max(a-Date.now(),0),o=setTimeout(n,r);e.addEventListener((()=>{clearTimeout(o),i(A.create("fetch-throttle",{throttleEndTimeMillis:a}))}))}))}function N(e){if(!(e instanceof o.ZR)||!e.customData)return!1;const a=Number(e.customData["httpStatus"]);return 429===a||500===a||503===a||504===a}class _{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
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
 */async function z(){if(!(0,o.hl)())return m.warn(A.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,o.eu)()}catch(e){return m.warn(A.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function R(e,a,n,i,r,o,t){var s;const c=C(e);c.then((a=>{n[a.measurementId]=a.appId,e.options.measurementId&&a.measurementId!==e.options.measurementId&&m.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${a.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>m.error(e))),a.push(c);const d=z().then((e=>e?i.getId():void 0)),[h,p]=await Promise.all([c,d]);S()||v(o,h.measurementId),r("js",new Date);const k=null!==(s=null===t||void 0===t?void 0:t.config)&&void 0!==s?s:{};return k[u]="firebase",k.update=!0,null!=p&&(k[l]=p),r("config",h.measurementId,k),h.measurementId}
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
 */class D{constructor(e){this.app=e}_delete(){return delete H[this.app.options.appId],Promise.resolve()}}let H={},E=[];const V={};let G,F,I="dataLayer",O="gtag",J=!1;function U(){const e=[];if((0,o.ru)()&&e.push("This is a browser extension environment."),(0,o.zI)()||e.push("Cookies are not available."),e.length>0){const a=e.map(((e,a)=>`(${a+1}) ${e}`)).join(" "),n=A.create("invalid-analytics-context",{errorInfo:a});m.warn(n.message)}}function Z(e,a,n){U();const i=e.options.appId;if(!i)throw A.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw A.create("no-api-key");m.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=H[i])throw A.create("already-exists",{id:i});if(!J){k(I);const{wrappedGtag:e,gtagCore:a}=y(H,E,V,I,O);F=e,G=a,J=!0}H[i]=R(e,E,V,a,G,I,n);const r=new D(e);return r}
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
 */async function W(e,a,n,i,r){if(r&&r.global)e("event",n,i);else{const r=await a,o=Object.assign(Object.assign({},i),{send_to:r});e("event",n,o)}}function q(e=(0,i.Mq)()){e=(0,o.m9)(e);const a=(0,i.qX)(e,s);return a.isInitialized()?a.getImmediate():$(e)}function $(e,a={}){const n=(0,i.qX)(e,s);if(n.isInitialized()){const e=n.getImmediate();if((0,o.vZ)(a,n.getOptions()))return e;throw A.create("already-initialized")}const r=n.initialize({options:a});return r}function Y(e,a,n,i){e=(0,o.m9)(e),W(F,H[e.app.options.appId],a,n,i).catch((e=>m.error(e)))}const Q="@firebase/analytics",X="0.7.2";function ee(){function e(e){try{const a=e.getProvider(s).getImmediate();return{logEvent:(e,n,i)=>Y(a,e,n,i)}}catch(a){throw A.create("interop-component-reg-failed",{reason:a})}}(0,i.Xd)(new t.wA(s,((e,{options:a})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Z(n,i,a)}),"PUBLIC")),(0,i.Xd)(new t.wA("analytics-internal",e,"PRIVATE")),(0,i.KN)(Q,X),(0,i.KN)(Q,X,"esm2017")}ee()},5720:(e,a,n)=>{"use strict";n.d(a,{ZF:()=>i.ZF});var i=n(97458),r="firebase",o="9.2.0";
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
(0,i.KN)(r,o,"app")},87480:(e,a,n)=>{"use strict";n.d(a,{v0:()=>oi,e5:()=>ta,w7:()=>sa});var i=n(95479),r=n(97458),o=n(28430),t=n(50004),s=n(17429);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=l,c=new i.LL("auth","Firebase",l()),d=new t.Yd("@firebase/auth");function h(e,...a){d.logLevel<=t["in"].ERROR&&d.error(`Auth (${r.Jn}): ${e}`,...a)}
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
 */function m(e,...a){throw k(e,...a)}function p(e,...a){return k(e,...a)}function v(e,a,n){const r=Object.assign(Object.assign({},u()),{[a]:n}),o=new i.LL("auth","Firebase",r);return o.create(a,{appName:e.name})}function k(e,...a){if("string"!==typeof e){const n=a[0],i=[...a.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return c.create(e,...a)}function g(e,a,...n){if(!e)throw k(a,...n)}function f(e){const a="INTERNAL ASSERTION FAILED: "+e;throw h(a),new Error(a)}function b(e,a){e||f(a)}
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
 */const y=new Map;function S(e){b(e instanceof Function,"Expected a class definition");let a=y.get(e);return a?(b(a instanceof e,"Instance stored in cache mismatched with class"),a):(a=new e,y.set(e,a),a)}
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
 */function M(e,a){const n=(0,r.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.vZ)(r,null!==a&&void 0!==a?a:{}))return e;m(e,"already-initialized")}const o=n.initialize({options:a});return o}function A(e,a){const n=(null===a||void 0===a?void 0:a.persistence)||[],i=(Array.isArray(n)?n:[n]).map(S);(null===a||void 0===a?void 0:a.errorMap)&&e._updateErrorMap(a.errorMap),e._initializeWithPersistence(i,null===a||void 0===a?void 0:a.popupRedirectResolver)}
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
 */function B(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function j(){return"http:"===x()||"https:"===x()}function x(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function P(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(j()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function T(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
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
 */class w{constructor(e,a){this.shortDelay=e,this.longDelay=a,b(a>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return P()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function C(e,a){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return a?`${n}${a.startsWith("/")?a.slice(1):a}`:n}
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
 */class K{static initialize(e,a,n){this.fetchImpl=e,a&&(this.headersImpl=a),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void f("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void f("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void f("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const L={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},N=new w(3e4,6e4);
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
 */function _(e,a){return e.tenantId&&!a.tenantId?Object.assign(Object.assign({},a),{tenantId:e.tenantId}):a}async function z(e,a,n,r,o={}){return R(e,o,(()=>{let o={},t={};r&&("GET"===a?t=r:o={body:JSON.stringify(r)});const s=(0,i.xO)(Object.assign({key:e.config.apiKey},t)).slice(1),l=new(K.headers());return l.set("Content-Type","application/json"),l.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&l.set("X-Firebase-Locale",e.languageCode),K.fetch()(H(e,e.config.apiHost,n,s),Object.assign({method:a,headers:l,referrerPolicy:"no-referrer"},o))}))}async function R(e,a,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},L),a);try{const a=new E(e),i=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw V(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[n,t]=a.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw V(e,"email-already-in-use",o);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(t)throw v(e,s,t);m(e,s)}}catch(o){if(o instanceof i.ZR)throw o;m(e,"network-request-failed")}}async function D(e,a,n,i,r={}){const o=await z(e,a,n,i,r);return"mfaPendingCredential"in o&&m(e,"multi-factor-auth-required",{_serverResponse:o}),o}function H(e,a,n,i){const r=`${a}${n}?${i}`;return e.config.emulator?C(e.config,r):`${e.config.apiScheme}://${r}`}class E{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,a)=>{this.timer=setTimeout((()=>a(p(this.auth,"timeout"))),N.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(e,a,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=p(e,a,i);return r.customData._tokenResponse=n,r}
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
 */async function G(e,a){return z(e,"POST","/v1/accounts:delete",a)}async function F(e,a){return z(e,"POST","/v1/accounts:lookup",a)}
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
 */function I(e){if(e)try{const a=new Date(Number(e));if(!isNaN(a.getTime()))return a.toUTCString()}catch(a){}}
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
 */async function O(e,a=!1){const n=(0,i.m9)(e),r=await n.getIdToken(a),o=U(r);g(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const t="object"===typeof o.firebase?o.firebase:void 0,s=null===t||void 0===t?void 0:t["sign_in_provider"];return{claims:o,token:r,authTime:I(J(o.auth_time)),issuedAtTime:I(J(o.iat)),expirationTime:I(J(o.exp)),signInProvider:s||null,signInSecondFactor:(null===t||void 0===t?void 0:t["sign_in_second_factor"])||null}}function J(e){return 1e3*Number(e)}function U(e){const[a,n,r]=e.split(".");if(void 0===a||void 0===n||void 0===r)return h("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.tV)(n);return e?JSON.parse(e):(h("Failed to decode base64 JWT payload"),null)}catch(o){return h("Caught error parsing JWT payload as JSON",o),null}}function Z(e){const a=U(e);return g(a,"internal-error"),g("undefined"!==typeof a.exp,"internal-error"),g("undefined"!==typeof a.iat,"internal-error"),Number(a.exp)-Number(a.iat)}
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
 */async function W(e,a,n=!1){if(n)return a;try{return await a}catch(r){throw r instanceof i.ZR&&q(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function q({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */class ${constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var a;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(a=this.user.stsTokenManager.expirationTime)&&void 0!==a?a:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const a=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),a)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
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
 */class Y{constructor(e,a){this.createdAt=e,this.lastLoginAt=a,this._initializeTime()}_initializeTime(){this.lastSignInTime=I(this.lastLoginAt),this.creationTime=I(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Q(e){var a;const n=e.auth,i=await e.getIdToken(),r=await W(e,F(n,{idToken:i}));g(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const o=r.users[0];e._notifyReloadListener(o);const t=(null===(a=o.providerUserInfo)||void 0===a?void 0:a.length)?ae(o.providerUserInfo):[],s=ee(e.providerData,t),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===s||void 0===s?void 0:s.length),c=!!l&&u,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new Y(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function X(e){const a=(0,i.m9)(e);await Q(a),await a.auth._persistUserIfCurrent(a),a.auth._notifyListenersIfCurrent(a)}function ee(e,a){const n=e.filter((e=>!a.some((a=>a.providerId===e.providerId))));return[...n,...a]}function ae(e){return e.map((e=>{var{providerId:a}=e,n=(0,o._T)(e,["providerId"]);return{providerId:a,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
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
 */async function ne(e,a){const n=await R(e,{},(()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:a}).slice(1),{tokenApiHost:r,apiKey:o}=e.config,t=H(e,r,"/v1/token",`key=${o}`);return K.fetch()(t,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
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
 */class ie{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g("undefined"!==typeof e.idToken,"internal-error"),g("undefined"!==typeof e.refreshToken,"internal-error");const a="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Z(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,a)}async getToken(e,a=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),a||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,a){const{accessToken:n,refreshToken:i,expiresIn:r}=await ne(e,a);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,a,n){this.refreshToken=a||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,a){const{refreshToken:n,accessToken:i,expirationTime:r}=a,o=new ie;return n&&(g("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),i&&(g("string"===typeof i,"internal-error",{appName:e}),o.accessToken=i),r&&(g("number"===typeof r,"internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ie,this.toJSON())}_performRefresh(){return f("not implemented")}}
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
 */function re(e,a){g("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:a})}class oe{constructor(e){var{uid:a,auth:n,stsTokenManager:i}=e,r=(0,o._T)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new $(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=a,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new Y(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const a=await W(this,this.stsTokenManager.getToken(this.auth,e));return g(a,this.auth,"internal-error"),this.accessToken!==a&&(this.accessToken=a,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),a}getIdTokenResult(e){return O(this,e)}reload(){return X(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,a=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),a&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await W(this,G(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,a){var n,i,r,o,t,s,l,u;const c=null!==(n=a.displayName)&&void 0!==n?n:void 0,d=null!==(i=a.email)&&void 0!==i?i:void 0,h=null!==(r=a.phoneNumber)&&void 0!==r?r:void 0,m=null!==(o=a.photoURL)&&void 0!==o?o:void 0,p=null!==(t=a.tenantId)&&void 0!==t?t:void 0,v=null!==(s=a._redirectEventId)&&void 0!==s?s:void 0,k=null!==(l=a.createdAt)&&void 0!==l?l:void 0,f=null!==(u=a.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:y,isAnonymous:S,providerData:M,stsTokenManager:A}=a;g(b&&A,e,"internal-error");const B=ie.fromJSON(this.name,A);g("string"===typeof b,e,"internal-error"),re(c,e.name),re(d,e.name),g("boolean"===typeof y,e,"internal-error"),g("boolean"===typeof S,e,"internal-error"),re(h,e.name),re(m,e.name),re(p,e.name),re(v,e.name),re(k,e.name),re(f,e.name);const j=new oe({uid:b,auth:e,email:d,emailVerified:y,displayName:c,isAnonymous:S,photoURL:m,phoneNumber:h,tenantId:p,stsTokenManager:B,createdAt:k,lastLoginAt:f});return M&&Array.isArray(M)&&(j.providerData=M.map((e=>Object.assign({},e)))),v&&(j._redirectEventId=v),j}static async _fromIdTokenResponse(e,a,n=!1){const i=new ie;i.updateFromServerResponse(a);const r=new oe({uid:a.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Q(r),r}}
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
 */class te{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,a){this.storage[e]=a}async _get(e){const a=this.storage[e];return void 0===a?null:a}async _remove(e){delete this.storage[e]}_addListener(e,a){}_removeListener(e,a){}}te.type="NONE";const se=te;
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
 */function le(e,a,n){return`firebase:${e}:${a}:${n}`}class ue{constructor(e,a,n){this.persistence=e,this.auth=a,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=le(this.userKey,i.apiKey,r),this.fullPersistenceKey=le("persistence",i.apiKey,r),this.boundEventHandler=a._onStorageEvent.bind(a),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const a=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,a?this.setCurrentUser(a):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,a,n="authUser"){if(!a.length)return new ue(S(se),e,n);const i=(await Promise.all(a.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||S(se);const o=le(n,e.config.apiKey,e.name);let t=null;for(const u of a)try{const a=await u._get(o);if(a){const n=oe._fromJSON(e,a);u!==r&&(t=n),r=u;break}}catch(l){}const s=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&s.length?(r=s[0],t&&await r._set(o,t.toJSON()),await Promise.all(a.map((async e=>{if(e!==r)try{await e._remove(o)}catch(l){}}))),new ue(r,e,n)):new ue(r,e,n)}}
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
 */function ce(e){const a=e.toLowerCase();if(a.includes("opera/")||a.includes("opr/")||a.includes("opios/"))return"Opera";if(pe(a))return"IEMobile";if(a.includes("msie")||a.includes("trident/"))return"IE";if(a.includes("edge/"))return"Edge";if(de(a))return"Firefox";if(a.includes("silk/"))return"Silk";if(ke(a))return"Blackberry";if(ge(a))return"Webos";if(he(a))return"Safari";if((a.includes("chrome/")||me(a))&&!a.includes("edge/"))return"Chrome";if(ve(a))return"Android";{const a=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(a);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function de(e=(0,i.z$)()){return/firefox\//i.test(e)}function he(e=(0,i.z$)()){const a=e.toLowerCase();return a.includes("safari/")&&!a.includes("chrome/")&&!a.includes("crios/")&&!a.includes("android")}function me(e=(0,i.z$)()){return/crios\//i.test(e)}function pe(e=(0,i.z$)()){return/iemobile/i.test(e)}function ve(e=(0,i.z$)()){return/android/i.test(e)}function ke(e=(0,i.z$)()){return/blackberry/i.test(e)}function ge(e=(0,i.z$)()){return/webos/i.test(e)}function fe(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)}function be(e=(0,i.z$)()){var a;return fe(e)&&!!(null===(a=window.navigator)||void 0===a?void 0:a.standalone)}function ye(){return(0,i.w1)()&&10===document.documentMode}function Se(e=(0,i.z$)()){return fe(e)||ve(e)||ge(e)||ke(e)||/windows phone/i.test(e)||pe(e)}function Me(){try{return!(!window||window===window.top)}catch(e){return!1}}
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
 */function Ae(e,a=[]){let n;switch(e){case"Browser":n=ce((0,i.z$)());break;case"Worker":n=`${ce((0,i.z$)())}-${e}`;break;default:n=e}const o=a.length?a.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.Jn}/${o}`}
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
 */class Be{constructor(e,a){this.app=e,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xe(this),this.idTokenSubscription=new xe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,a){return a&&(this._popupRedirectResolver=S(a)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await ue.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(a),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var a;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(a=this.redirectUser)||void 0===a?void 0:a._redirectEventId,r=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);i&&i!==r||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let a=null;try{a=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return a}async reloadAndSetCurrentUserOrClear(e){try{await Q(e)}catch(a){if("auth/network-request-failed"!==a.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=T()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const a=e?(0,i.m9)(e):null;return a&&g(a.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(a&&a._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(S(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,a,n){return this.registerStateListener(this.authStateSubscription,e,a,n)}onIdTokenChanged(e,a,n){return this.registerStateListener(this.idTokenSubscription,e,a,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,a){const n=await this.getOrInitRedirectPersistenceManager(a);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const a=e&&S(e)||this._popupRedirectResolver;g(a,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[S(a._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var a,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(a=this._currentUser)||void 0===a?void 0:a._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,a;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(a=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==a?a:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,a,n,i){if(this._deleted)return()=>{};const r="function"===typeof a?a:a.next.bind(a),o=this._isInitialized?Promise.resolve():this._initializationPromise;return g(o,this,"internal-error"),o.then((()=>r(this.currentUser))),"function"===typeof a?e.addObserver(a,n,i):e.addObserver(a)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ae(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function je(e){return(0,i.m9)(e)}class xe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)((e=>this.observer=e))}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
class Pe{constructor(e,a){this.providerId=e,this.signInMethod=a}toJSON(){return f("not implemented")}_getIdTokenResponse(e){return f("not implemented")}_linkToIdToken(e,a){return f("not implemented")}_getReauthenticationResolver(e){return f("not implemented")}}
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
 */async function Te(e,a){return z(e,"POST","/v1/accounts:update",a)}
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
async function we(e,a){return D(e,"POST","/v1/accounts:signInWithPassword",_(e,a))}
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
async function Ce(e,a){return D(e,"POST","/v1/accounts:signInWithEmailLink",_(e,a))}async function Ke(e,a){return D(e,"POST","/v1/accounts:signInWithEmailLink",_(e,a))}
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
 */class Le extends Pe{constructor(e,a,n,i=null){super("password",n),this._email=e,this._password=a,this._tenantId=i}static _fromEmailAndPassword(e,a){return new Le(e,a,"password")}static _fromEmailAndCode(e,a,n=null){return new Le(e,a,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const a="string"===typeof e?JSON.parse(e):e;if((null===a||void 0===a?void 0:a.email)&&(null===a||void 0===a?void 0:a.password)){if("password"===a.signInMethod)return this._fromEmailAndPassword(a.email,a.password);if("emailLink"===a.signInMethod)return this._fromEmailAndCode(a.email,a.password,a.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return we(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ce(e,{email:this._email,oobCode:this._password});default:m(e,"internal-error")}}async _linkToIdToken(e,a){switch(this.signInMethod){case"password":return Te(e,{idToken:a,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ke(e,{idToken:a,email:this._email,oobCode:this._password});default:m(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Ne(e,a){return D(e,"POST","/v1/accounts:signInWithIdp",_(e,a))}
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
 */const _e="http://localhost";class ze extends Pe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const a=new ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(a.idToken=e.idToken),e.accessToken&&(a.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(a.nonce=e.nonce),e.pendingToken&&(a.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(a.accessToken=e.oauthToken,a.secret=e.oauthTokenSecret):m("argument-error"),a}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const a="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=a,r=(0,o._T)(a,["providerId","signInMethod"]);if(!n||!i)return null;const t=new ze(n,i);return t.idToken=r.idToken||void 0,t.accessToken=r.accessToken||void 0,t.secret=r.secret,t.nonce=r.nonce,t.pendingToken=r.pendingToken||null,t}_getIdTokenResponse(e){const a=this.buildRequest();return Ne(e,a)}_linkToIdToken(e,a){const n=this.buildRequest();return n.idToken=a,Ne(e,n)}_getReauthenticationResolver(e){const a=this.buildRequest();return a.autoCreate=!1,Ne(e,a)}buildRequest(){const e={requestUri:_e,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const a={};this.idToken&&(a["id_token"]=this.idToken),this.accessToken&&(a["access_token"]=this.accessToken),this.secret&&(a["oauth_token_secret"]=this.secret),a["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(a["nonce"]=this.nonce),e.postBody=(0,i.xO)(a)}return e}}
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
 */async function Re(e,a){return z(e,"POST","/v1/accounts:sendVerificationCode",_(e,a))}async function De(e,a){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",_(e,a))}async function He(e,a){const n=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",_(e,a));if(n.temporaryProof)throw V(e,"account-exists-with-different-credential",n);return n}const Ee={["USER_NOT_FOUND"]:"user-not-found"};async function Ve(e,a){const n=Object.assign(Object.assign({},a),{operation:"REAUTH"});return D(e,"POST","/v1/accounts:signInWithPhoneNumber",_(e,n),Ee)}
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
 */class Ge extends Pe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,a){return new Ge({verificationId:e,verificationCode:a})}static _fromTokenResponse(e,a){return new Ge({phoneNumber:e,temporaryProof:a})}_getIdTokenResponse(e){return De(e,this._makeVerificationRequest())}_linkToIdToken(e,a){return He(e,Object.assign({idToken:a},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ve(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:a,verificationId:n,verificationCode:i}=this.params;return e&&a?{temporaryProof:e,phoneNumber:a}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:a,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||a||i||r?new Ge({verificationId:a,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
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
 */function Fe(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ie(e){const a=(0,i.zd)((0,i.pd)(e))["link"],n=a?(0,i.zd)((0,i.pd)(a))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(e))["deep_link_id"],o=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return o||r||n||a||e}class Oe{constructor(e){var a,n,r,o,t,s;const l=(0,i.zd)((0,i.pd)(e)),u=null!==(a=l["apiKey"])&&void 0!==a?a:null,c=null!==(n=l["oobCode"])&&void 0!==n?n:null,d=Fe(null!==(r=l["mode"])&&void 0!==r?r:null);g(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=null!==(o=l["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(t=l["languageCode"])&&void 0!==t?t:null,this.tenantId=null!==(s=l["tenantId"])&&void 0!==s?s:null}static parseLink(e){const a=Ie(e);try{return new Oe(a)}catch(n){return null}}}
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
class Je{constructor(){this.providerId=Je.PROVIDER_ID}static credential(e,a){return Le._fromEmailAndPassword(e,a)}static credentialWithLink(e,a){const n=Oe.parseLink(a);return g(n,"argument-error"),Le._fromEmailAndCode(e,n.code,n.tenantId)}}Je.PROVIDER_ID="password",Je.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Je.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Ue{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class Ze extends Ue{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
class We extends Ze{constructor(){super("facebook.com")}static credential(e){return ze._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return We.credential(e.oauthAccessToken)}catch(a){return null}}}We.FACEBOOK_SIGN_IN_METHOD="facebook.com",We.PROVIDER_ID="facebook.com";
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
class qe extends Ze{constructor(){super("google.com"),this.addScope("profile")}static credential(e,a){return ze._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:a})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:a,oauthAccessToken:n}=e;if(!a&&!n)return null;try{return qe.credential(a,n)}catch(i){return null}}}qe.GOOGLE_SIGN_IN_METHOD="google.com",qe.PROVIDER_ID="google.com";
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
class $e extends Ze{constructor(){super("github.com")}static credential(e){return ze._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return $e.credential(e.oauthAccessToken)}catch(a){return null}}}$e.GITHUB_SIGN_IN_METHOD="github.com",$e.PROVIDER_ID="github.com";
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
class Ye extends Ze{constructor(){super("twitter.com")}static credential(e,a){return ze._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:a})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:a,oauthTokenSecret:n}=e;if(!a||!n)return null;try{return Ye.credential(a,n)}catch(i){return null}}}Ye.TWITTER_SIGN_IN_METHOD="twitter.com",Ye.PROVIDER_ID="twitter.com";
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
class Qe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,a,n,i=!1){const r=await oe._fromIdTokenResponse(e,n,i),o=Xe(n),t=new Qe({user:r,providerId:o,_tokenResponse:n,operationType:a});return t}static async _forOperation(e,a,n){await e._updateTokensIfNecessary(n,!0);const i=Xe(n);return new Qe({user:e,providerId:i,_tokenResponse:n,operationType:a})}}function Xe(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class ea extends i.ZR{constructor(e,a,n,i){var r;super(a.code,a.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,ea.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:a.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,a,n,i){return new ea(e,a,n,i)}}function aa(e,a,n,i){const r="reauthenticate"===a?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ea._fromErrorAndOperation(e,n,a,i);throw n}))}
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
 */async function na(e,a,n=!1){const i=await W(e,a._linkToIdToken(e.auth,await e.getIdToken()),n);return Qe._forOperation(e,"link",i)}
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
async function ia(e,a,n=!1){const{auth:i}=e,r="reauthenticate";try{const o=await W(e,aa(i,r,a,e),n);g(o.idToken,i,"internal-error");const t=U(o.idToken);g(t,i,"internal-error");const{sub:s}=t;return g(e.uid===s,i,"user-mismatch"),Qe._forOperation(e,r,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&m(i,"user-mismatch"),o}}
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
 */async function ra(e,a,n=!1){const i="signIn",r=await aa(e,i,a),o=await Qe._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(o.user),o}async function oa(e,a){return ra(je(e),a)}function ta(e,a,n){return oa((0,i.m9)(e),Je.credential(a,n))}
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
 */function sa(e){return(0,i.m9)(e).signOut()}
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
function la(e,a){return z(e,"POST","/v2/accounts/mfaEnrollment:start",_(e,a))}function ua(e,a){return z(e,"POST","/v2/accounts/mfaEnrollment:finalize",_(e,a))}new WeakMap;const ca="__sak";
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
 */class da{constructor(e,a){this.storageRetriever=e,this.type=a}_isAvailable(){try{return this.storage?(this.storage.setItem(ca,"1"),this.storage.removeItem(ca),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,a){return this.storage.setItem(e,JSON.stringify(a)),Promise.resolve()}_get(e){const a=this.storage.getItem(e);return Promise.resolve(a?JSON.parse(a):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */function ha(){const e=(0,i.z$)();return he(e)||fe(e)}const ma=1e3,pa=10;class va extends da{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,a)=>this.onStorageEvent(e,a),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ha()&&Me(),this.fallbackToPolling=Se(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const a of Object.keys(this.listeners)){const n=this.storage.getItem(a),i=this.localCache[a];n!==i&&e(a,i,n)}}onStorageEvent(e,a=!1){if(!e.key)return void this.forAllChangedKeys(((e,a,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(a?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!a)return}const i=()=>{const e=this.storage.getItem(n);(a||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);ye()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,pa):i()}notifyListeners(e,a){this.localCache[e]=a;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(a?JSON.parse(a):a)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,a,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:a,newValue:n}),!0)}))}),ma)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,a){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(a)}_removeListener(e,a){this.listeners[e]&&(this.listeners[e].delete(a),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,a){await super._set(e,a),this.localCache[e]=JSON.stringify(a)}async _get(e){const a=await super._get(e);return this.localCache[e]=JSON.stringify(a),a}async _remove(e){await super._remove(e),delete this.localCache[e]}}va.type="LOCAL";const ka=va;
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
 */class ga extends da{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,a){}_removeListener(e,a){}}ga.type="SESSION";const fa=ga;
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
 */function ba(e){return Promise.all(e.map((async e=>{try{const a=await e;return{fulfilled:!0,value:a}}catch(a){return{fulfilled:!1,reason:a}}})))}
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
 */class ya{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const a=this.receivers.find((a=>a.isListeningto(e)));if(a)return a;const n=new ya(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const a=e,{eventId:n,eventType:i,data:r}=a.data,o=this.handlersMap[i];if(!(null===o||void 0===o?void 0:o.size))return;a.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const t=Array.from(o).map((async e=>e(a.origin,r))),s=await ba(t);a.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:s})}_subscribe(e,a){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(a)}_unsubscribe(e,a){this.handlersMap[e]&&a&&this.handlersMap[e].delete(a),a&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Sa(e="",a=10){let n="";for(let i=0;i<a;i++)n+=Math.floor(10*Math.random());return e+n}
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
 */ya.receivers=[];class Ma{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,a,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise(((t,s)=>{const l=Sa("",20);i.port1.start();const u=setTimeout((()=>{s(new Error("unsupported_event"))}),n);o={messageChannel:i,onMessage(e){const a=e;if(a.data.eventId===l)switch(a.data.status){case"ack":clearTimeout(u),r=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),t(a.data.response);break;default:clearTimeout(u),clearTimeout(r),s(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:a},[i.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
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
 */function Aa(){return window}function Ba(e){Aa().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function ja(){return"undefined"!==typeof Aa()["WorkerGlobalScope"]&&"function"===typeof Aa()["importScripts"]}async function xa(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Pa(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Ta(){return ja()?self:null}
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
 */const wa="firebaseLocalStorageDb",Ca=1,Ka="firebaseLocalStorage",La="fbase_key";class Na{constructor(e){this.request=e}toPromise(){return new Promise(((e,a)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{a(this.request.error)}))}))}}function _a(e,a){return e.transaction([Ka],a?"readwrite":"readonly").objectStore(Ka)}function za(){const e=indexedDB.deleteDatabase(wa);return new Na(e).toPromise()}function Ra(){const e=indexedDB.open(wa,Ca);return new Promise(((a,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const a=e.result;try{a.createObjectStore(Ka,{keyPath:La})}catch(i){n(i)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Ka)?a(n):(n.close(),await za(),a(await Ra()))}))}))}async function Da(e,a,n){const i=_a(e,!0).put({[La]:a,value:n});return new Na(i).toPromise()}async function Ha(e,a){const n=_a(e,!1).get(a),i=await new Na(n).toPromise();return void 0===i?null:i.value}function Ea(e,a){const n=_a(e,!0).delete(a);return new Na(n).toPromise()}const Va=800,Ga=3;class Fa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ra()),this.db}async _withRetries(e){let a=0;while(1)try{const a=await this._openDb();return await e(a)}catch(n){if(a++>Ga)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ja()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ya._getInstance(Ta()),this.receiver._subscribe("keyChanged",(async(e,a)=>{const n=await this._poll();return{keyProcessed:n.includes(a.key)}})),this.receiver._subscribe("ping",(async(e,a)=>["keyChanged"]))}async initializeSender(){var e,a;if(this.activeServiceWorker=await xa(),!this.activeServiceWorker)return;this.sender=new Ma(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(a=n[0])||void 0===a?void 0:a.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Pa()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(a){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ra();return await Da(e,ca,"1"),await Ea(e,ca),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,a){return this._withPendingWrite((async()=>(await this._withRetries((n=>Da(n,e,a))),this.localCache[e]=a,this.notifyServiceWorker(e))))}async _get(e){const a=await this._withRetries((a=>Ha(a,e)));return this.localCache[e]=a,a}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((a=>Ea(a,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const a=_a(e,!1).getAll();return new Na(a).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const a=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),a.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),a.push(i));return a}notifyListeners(e,a){this.localCache[e]=a;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(a)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Va)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,a){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(a)}_removeListener(e,a){this.listeners[e]&&(this.listeners[e].delete(a),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Fa.type="LOCAL";const Ia=Fa;
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
 */function Oa(e,a){return z(e,"POST","/v2/accounts/mfaSignIn:start",_(e,a))}function Ja(e,a){return z(e,"POST","/v2/accounts/mfaSignIn:finalize",_(e,a))}
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
function Ua(){var e,a;return null!==(a=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==a?a:document}function Za(e){return new Promise(((a,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=a,i.onerror=e=>{const a=p("internal-error");a.customData=e,n(a)},i.type="text/javascript",i.charset="UTF-8",Ua().appendChild(i)}))}function Wa(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
Wa("rcb"),new w(3e4,6e4);
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
const qa="recaptcha";async function $a(e,a,n){var i;const r=await n.verify();try{let o;if(g("string"===typeof r,e,"argument-error"),g(n.type===qa,e,"argument-error"),o="string"===typeof a?{phoneNumber:a}:a,"session"in o){const a=o.session;if("phoneNumber"in o){g("enroll"===a.type,e,"internal-error");const n=await la(e,{idToken:a.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{g("signin"===a.type,e,"internal-error");const n=(null===(i=o.multiFactorHint)||void 0===i?void 0:i.uid)||o.multiFactorUid;g(n,e,"missing-multi-factor-info");const t=await Oa(e,{mfaPendingCredential:a.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return t.phoneResponseInfo.sessionInfo}}{const{sessionInfo:a}=await Re(e,{phoneNumber:o.phoneNumber,recaptchaToken:r});return a}}finally{n._reset()}}
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
class Ya{constructor(e){this.providerId=Ya.PROVIDER_ID,this.auth=je(e)}verifyPhoneNumber(e,a){return $a(this.auth,e,(0,i.m9)(a))}static credential(e,a){return Ge._fromVerification(e,a)}static credentialFromResult(e){const a=e;return Ya.credentialFromTaggedObject(a)}static credentialFromError(e){return Ya.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:a,temporaryProof:n}=e;return a&&n?Ge._fromTokenResponse(a,n):null}}
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
 */
function Qa(e,a){return a?S(a):(g(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Ya.PROVIDER_ID="phone",Ya.PHONE_SIGN_IN_METHOD="phone";class Xa extends Pe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ne(e,this._buildIdpRequest())}_linkToIdToken(e,a){return Ne(e,this._buildIdpRequest(a))}_getReauthenticationResolver(e){return Ne(e,this._buildIdpRequest())}_buildIdpRequest(e){const a={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(a.idToken=e),a}}function en(e){return ra(e.auth,new Xa(e),e.bypassAuthState)}function an(e){const{auth:a,user:n}=e;return g(n,a,"internal-error"),ia(n,new Xa(e),e.bypassAuthState)}async function nn(e){const{auth:a,user:n}=e;return g(n,a,"internal-error"),na(n,new Xa(e),e.bypassAuthState)}
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
 */class rn{constructor(e,a,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(a)?a:[a]}execute(){return new Promise((async(e,a)=>{this.pendingPromise={resolve:e,reject:a};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:a,sessionId:n,postBody:i,tenantId:r,error:o,type:t}=e;if(o)return void this.reject(o);const s={auth:this.auth,requestUri:a,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(t)(s))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return en;case"linkViaPopup":case"linkViaRedirect":return nn;case"reauthViaPopup":case"reauthViaRedirect":return an;default:m(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const on=new w(2e3,1e4);class tn extends rn{constructor(e,a,n,i,r){super(e,a,i,r),this.provider=n,this.authWindow=null,this.pollId=null,tn.currentPopupAction&&tn.currentPopupAction.cancel(),tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=Sa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var a,n;(null===(n=null===(a=this.authWindow)||void 0===a?void 0:a.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,on.get())};e()}}tn.currentPopupAction=null;
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
const sn="pendingRedirect",ln=new Map;class un extends rn{constructor(e,a,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],a,void 0,n),this.eventId=null}async execute(){let e=ln.get(this.auth._key());if(!e){try{const a=await cn(this.resolver,this.auth),n=a?await super.execute():null;e=()=>Promise.resolve(n)}catch(a){e=()=>Promise.reject(a)}ln.set(this.auth._key(),e)}return this.bypassAuthState||ln.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const a=await this.auth._redirectUserForId(e.eventId);if(a)return this.user=a,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function cn(e,a){const n=hn(a),i=dn(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}function dn(e){return S(e._redirectPersistence)}function hn(e){return le(sn,e.config.apiKey,e.name)}
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
 */async function mn(e,a,n=!1){const i=je(e),r=Qa(i,a),o=new un(i,r,n),t=await o.execute();return t&&!n&&(delete t.user._redirectEventId,await i._persistUserIfCurrent(t.user),await i._setRedirectUser(null,a)),t}
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
const pn=6e5;class vn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let a=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(a=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!fn(e)||(this.hasHandledPotentialRedirect=!0,a||(this.queuedRedirectEvent=e,a=!0)),a}sendToConsumer(e,a){var n;if(e.error&&!gn(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";a.onError(p(this.auth,i))}else a.onAuthEvent(e)}isEventForConsumer(e,a){const n=null===a.eventId||!!e.eventId&&e.eventId===a.eventId;return a.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pn&&this.cachedEventUids.clear(),this.cachedEventUids.has(kn(e))}saveEventToCache(e){this.cachedEventUids.add(kn(e)),this.lastProcessedEventTime=Date.now()}}function kn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function gn({type:e,error:a}){return"unknown"===e&&"auth/no-auth-event"===(null===a||void 0===a?void 0:a.code)}function fn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gn(e);default:return!1}}
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
 */async function bn(e,a={}){return z(e,"GET","/v1/projects",a)}
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
 */const yn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sn=/^https?/;async function Mn(e){if(e.config.emulator)return;const{authorizedDomains:a}=await bn(e);for(const i of a)try{if(An(i))return}catch(n){}m(e,"unauthorized-domain")}function An(e){const a=B(),{protocol:n,hostname:i}=new URL(a);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===a.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Sn.test(n))return!1;if(yn.test(e))return i===e;const r=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+r+"|"+r+")$","i");return o.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Bn=new w(3e4,6e4);function jn(){const e=Aa().___jsl;if(null===e||void 0===e?void 0:e.H)for(const a of Object.keys(e.H))if(e.H[a].r=e.H[a].r||[],e.H[a].L=e.H[a].L||[],e.H[a].r=[...e.H[a].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function xn(e){return new Promise(((a,n)=>{var i,r,o;function t(){jn(),gapi.load("gapi.iframes",{callback:()=>{a(gapi.iframes.getContext())},ontimeout:()=>{jn(),n(p(e,"network-request-failed"))},timeout:Bn.get()})}if(null===(r=null===(i=Aa().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)a(gapi.iframes.getContext());else{if(!(null===(o=Aa().gapi)||void 0===o?void 0:o.load)){const a=Wa("iframefcb");return Aa()[a]=()=>{gapi.load?t():n(p(e,"network-request-failed"))},Za(`https://apis.google.com/js/api.js?onload=${a}`)}t()}})).catch((e=>{throw Pn=null,e}))}let Pn=null;function Tn(e){return Pn=Pn||xn(e),Pn}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const wn=new w(5e3,15e3),Cn="__/auth/iframe",Kn="emulator/auth/iframe",Ln={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true"},Nn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _n(e){const a=e.config;g(a.authDomain,e,"auth-domain-config-required");const n=a.emulator?C(a,Kn):`https://${e.config.authDomain}/${Cn}`,o={apiKey:a.apiKey,appName:e.name,v:r.Jn},t=Nn.get(e.config.apiHost);t&&(o.eid=t);const s=e._getFrameworks();return s.length&&(o.fw=s.join(",")),`${n}?${(0,i.xO)(o).slice(1)}`}async function zn(e){const a=await Tn(e),n=Aa().gapi;return g(n,e,"internal-error"),a.open({where:document.body,url:_n(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ln,dontclear:!0},(a=>new Promise((async(n,i)=>{await a.restyle({setHideOnLeave:!1});const r=p(e,"network-request-failed"),o=Aa().setTimeout((()=>{i(r)}),wn.get());function t(){Aa().clearTimeout(o),n(a)}a.ping(t).then(t,(()=>{i(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Rn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dn=500,Hn=600,En="_blank",Vn="http://localhost";class Gn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Fn(e,a,n,r=Dn,o=Hn){const t=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Rn),{width:r.toString(),height:o.toString(),top:t,left:s}),c=(0,i.z$)().toLowerCase();n&&(l=me(c)?En:n),de(c)&&(a=a||Vn,u.scrollbars="yes");const d=Object.entries(u).reduce(((e,[a,n])=>`${e}${a}=${n},`),"");if(be(c)&&"_self"!==l)return In(a||"",l),new Gn(null);const h=window.open(a||"",l,d);g(h,e,"popup-blocked");try{h.focus()}catch(m){}return new Gn(h)}function In(e,a){const n=document.createElement("a");n.href=e,n.target=a;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */const On="__/auth/handler",Jn="emulator/auth/handler";function Un(e,a,n,o,t,s){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:r.Jn,eventId:t};if(a instanceof Ue){a.setDefaultLanguage(e.languageCode),l.providerId=a.providerId||"",(0,i.xb)(a.getCustomParameters())||(l.customParameters=JSON.stringify(a.getCustomParameters()));for(const[e,a]of Object.entries(s||{}))l[e]=a}if(a instanceof Ze){const e=a.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const u=l;for(const i of Object.keys(u))void 0===u[i]&&delete u[i];return`${Zn(e)}?${(0,i.xO)(u).slice(1)}`}function Zn({config:e}){return e.emulator?C(e,Jn):`https://${e.authDomain}/${On}`}
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
 */const Wn="webStorageSupport";class qn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fa,this._completeRedirectFn=mn}async _openPopup(e,a,n,i){var r;b(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Un(e,a,n,B(),i);return Fn(e,o,Sa())}async _openRedirect(e,a,n,i){return await this._originValidation(e),Ba(Un(e,a,n,B(),i)),new Promise((()=>{}))}_initialize(e){const a=e._key();if(this.eventManagers[a]){const{manager:e,promise:n}=this.eventManagers[a];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[a]={promise:n},n}async initAndGetManager(e){const a=await zn(e),n=new vn(e);return a.register("authEvent",(a=>{g(null===a||void 0===a?void 0:a.authEvent,e,"invalid-auth-event");const i=n.onEvent(a.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=a,n}_isIframeWebStorageSupported(e,a){const n=this.iframes[e._key()];n.send(Wn,{type:Wn},(n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[Wn];void 0!==r&&a(!!r),m(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const a=e._key();return this.originValidationPromises[a]||(this.originValidationPromises[a]=Mn(e)),this.originValidationPromises[a]}get _shouldInitProactively(){return Se()||he()||fe()}}const $n=qn;class Yn{constructor(e){this.factorId=e}_process(e,a,n){switch(a.type){case"enroll":return this._finalizeEnroll(e,a.credential,n);case"signin":return this._finalizeSignIn(e,a.credential);default:return f("unexpected MultiFactorSessionType")}}}class Qn extends Yn{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Qn(e)}_finalizeEnroll(e,a,n){return ua(e,{idToken:a,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,a){return Ja(e,{mfaPendingCredential:a,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Xn{constructor(){}static assertion(e){return Qn._fromCredential(e)}}Xn.FACTOR_ID="phone";var ei="@firebase/auth",ai="0.19.0";
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
class ni{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const a=await this.auth.currentUser.getIdToken(e);return{accessToken:a}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const a=this.auth.onIdTokenChanged((a=>{var n;e((null===(n=a)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,a),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const a=this.internalListeners.get(e);a&&(this.internalListeners.delete(e),a(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function ii(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ri(e){(0,r.Xd)(new s.wA("auth",((a,{options:n})=>{const i=a.getProvider("app").getImmediate(),{apiKey:r,authDomain:o}=i.options;return(a=>{g(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),g(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:a.name});const i={apiKey:r,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ae(e)},t=new Be(a,i);return A(t,n),t})(i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,a,n)=>{const i=e.getProvider("auth-internal");i.initialize()}))),(0,r.Xd)(new s.wA("auth-internal",(e=>{const a=je(e.getProvider("auth").getImmediate());return(e=>new ni(e))(a)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KN)(ei,ai,ii(e)),(0,r.KN)(ei,ai,"esm2017")}
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
 */function oi(e=(0,r.Mq)()){const a=(0,r.qX)(e,"auth");return a.isInitialized()?a.getImmediate():M(e,{popupRedirectResolver:$n,persistence:[Ia,ka,fa]})}ri("Browser")},28127:(e,a,n)=>{"use strict";n.d(a,{ET:()=>fd,hJ:()=>Mc,JU:()=>Ac,ad:()=>Pc,cf:()=>bd,Xo:()=>hd,IO:()=>cd,r7:()=>gd});var i,r=n(97458),o=n(17429),t=n(50004),s=n(95479),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},c=c||{},d=l||self;function h(){}function m(e){var a=typeof e;return a="object"!=a?a:e?Array.isArray(e)?"array":a:"null","array"==a||"object"==a&&"number"==typeof e.length}function p(e){var a=typeof e;return"object"==a&&null!=e||"function"==a}function v(e){return Object.prototype.hasOwnProperty.call(e,k)&&e[k]||(e[k]=++g)}var k="closure_uid_"+(1e9*Math.random()>>>0),g=0;function f(e,a,n){return e.call.apply(e.bind,arguments)}function b(e,a,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(a,n)}}return function(){return e.apply(a,arguments)}}function y(e,a,n){return y=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:b,y.apply(null,arguments)}function S(e,a){var n=Array.prototype.slice.call(arguments,1);return function(){var a=n.slice();return a.push.apply(a,arguments),e.apply(this,a)}}function M(e,a){function n(){}n.prototype=a.prototype,e.Z=a.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,i){for(var r=Array(arguments.length-2),o=2;o<arguments.length;o++)r[o-2]=arguments[o];return a.prototype[n].apply(e,r)}}function A(){this.s=this.s,this.o=this.o}var B=0,j={};A.prototype.s=!1,A.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=B)){var e=v(this);delete j[e]}},A.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const x=Array.prototype.indexOf?function(e,a){return Array.prototype.indexOf.call(e,a,void 0)}:function(e,a){if("string"===typeof e)return"string"!==typeof a||1!=a.length?-1:e.indexOf(a,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===a)return n;return-1},P=Array.prototype.forEach?function(e,a,n){Array.prototype.forEach.call(e,a,n)}:function(e,a,n){const i=e.length,r="string"===typeof e?e.split(""):e;for(let o=0;o<i;o++)o in r&&a.call(n,r[o],o,e)};function T(e){e:{var a=Un;const n=e.length,i="string"===typeof e?e.split(""):e;for(let r=0;r<n;r++)if(r in i&&a.call(void 0,i[r],r,e)){a=r;break e}a=-1}return 0>a?null:"string"===typeof e?e.charAt(a):e[a]}function w(e){return Array.prototype.concat.apply([],arguments)}function C(e){const a=e.length;if(0<a){const n=Array(a);for(let i=0;i<a;i++)n[i]=e[i];return n}return[]}function K(e){return/^[\s\xa0]*$/.test(e)}var L,N=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function _(e,a){return-1!=e.indexOf(a)}function z(e,a){return e<a?-1:e>a?1:0}e:{var R=d.navigator;if(R){var D=R.userAgent;if(D){L=D;break e}}L=""}function H(e,a,n){for(const i in e)a.call(n,e[i],i,e)}function E(e){const a={};for(const n in e)a[n]=e[n];return a}var V="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function G(e,a){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)e[n]=i[n];for(let a=0;a<V.length;a++)n=V[a],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function F(e){return F[" "](e),e}function I(e){var a=ne;return Object.prototype.hasOwnProperty.call(a,9)?a[9]:a[9]=e(9)}F[" "]=h;var O,J=_(L,"Opera"),U=_(L,"Trident")||_(L,"MSIE"),Z=_(L,"Edge"),W=Z||U,q=_(L,"Gecko")&&!(_(L.toLowerCase(),"webkit")&&!_(L,"Edge"))&&!(_(L,"Trident")||_(L,"MSIE"))&&!_(L,"Edge"),$=_(L.toLowerCase(),"webkit")&&!_(L,"Edge");function Y(){var e=d.document;return e?e.documentMode:void 0}e:{var Q="",X=function(){var e=L;return q?/rv:([^\);]+)(\)|;)/.exec(e):Z?/Edge\/([\d\.]+)/.exec(e):U?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):$?/WebKit\/(\S+)/.exec(e):J?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(X&&(Q=X?X[1]:""),U){var ee=Y();if(null!=ee&&ee>parseFloat(Q)){O=String(ee);break e}}O=Q}var ae,ne={};function ie(){return I((function(){let e=0;const a=N(String(O)).split("."),n=N("9").split("."),i=Math.max(a.length,n.length);for(let t=0;0==e&&t<i;t++){var r=a[t]||"",o=n[t]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==r[0].length&&0==o[0].length)break;e=z(0==r[1].length?0:parseInt(r[1],10),0==o[1].length?0:parseInt(o[1],10))||z(0==r[2].length,0==o[2].length)||z(r[2],o[2]),r=r[3],o=o[3]}while(0==e)}return 0<=e}))}if(d.document&&U){var re=Y();ae=re||(parseInt(O,10)||void 0)}else ae=void 0;var oe=ae,te=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,a=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",h,a),d.removeEventListener("test",h,a)}catch(n){}return e}();function se(e,a){this.type=e,this.g=this.target=a,this.defaultPrevented=!1}function le(e,a){if(se.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=a,a=e.relatedTarget){if(q){e:{try{F(a.nodeName);var r=!0;break e}catch(o){}r=!1}r||(a=null)}}else"mouseover"==n?a=e.fromElement:"mouseout"==n&&(a=e.toElement);this.relatedTarget=a,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ue[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&le.Z.h.call(this)}}se.prototype.h=function(){this.defaultPrevented=!0},M(le,se);var ue={2:"touch",3:"pen",4:"mouse"};le.prototype.h=function(){le.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ce="closure_listenable_"+(1e6*Math.random()|0),de=0;function he(e,a,n,i,r){this.listener=e,this.proxy=null,this.src=a,this.type=n,this.capture=!!i,this.ia=r,this.key=++de,this.ca=this.fa=!1}function me(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function pe(e){this.src=e,this.g={},this.h=0}function ve(e,a){var n=a.type;if(n in e.g){var i,r=e.g[n],o=x(r,a);(i=0<=o)&&Array.prototype.splice.call(r,o,1),i&&(me(a),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ke(e,a,n,i){for(var r=0;r<e.length;++r){var o=e[r];if(!o.ca&&o.listener==a&&o.capture==!!n&&o.ia==i)return r}return-1}pe.prototype.add=function(e,a,n,i,r){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var t=ke(e,a,i,r);return-1<t?(a=e[t],n||(a.fa=!1)):(a=new he(a,this.src,o,!!i,r),a.fa=n,e.push(a)),a};var ge="closure_lm_"+(1e6*Math.random()|0),fe={};function be(e,a,n,i,r){if(i&&i.once)return Me(e,a,n,i,r);if(Array.isArray(a)){for(var o=0;o<a.length;o++)be(e,a[o],n,i,r);return null}return n=we(n),e&&e[ce]?e.N(a,n,p(i)?!!i.capture:!!i,r):ye(e,a,n,!1,i,r)}function ye(e,a,n,i,r,o){if(!a)throw Error("Invalid event type");var t=p(r)?!!r.capture:!!r,s=Pe(e);if(s||(e[ge]=s=new pe(e)),n=s.add(a,n,i,t,o),n.proxy)return n;if(i=Se(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)te||(r=t),void 0===r&&(r=!1),e.addEventListener(a.toString(),i,r);else if(e.attachEvent)e.attachEvent(je(a.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function Se(){function e(n){return a.call(e.src,e.listener,n)}var a=xe;return e}function Me(e,a,n,i,r){if(Array.isArray(a)){for(var o=0;o<a.length;o++)Me(e,a[o],n,i,r);return null}return n=we(n),e&&e[ce]?e.O(a,n,p(i)?!!i.capture:!!i,r):ye(e,a,n,!0,i,r)}function Ae(e,a,n,i,r){if(Array.isArray(a))for(var o=0;o<a.length;o++)Ae(e,a[o],n,i,r);else i=p(i)?!!i.capture:!!i,n=we(n),e&&e[ce]?(e=e.i,a=String(a).toString(),a in e.g&&(o=e.g[a],n=ke(o,n,i,r),-1<n&&(me(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete e.g[a],e.h--)))):e&&(e=Pe(e))&&(a=e.g[a.toString()],e=-1,a&&(e=ke(a,n,i,r)),(n=-1<e?a[e]:null)&&Be(n))}function Be(e){if("number"!==typeof e&&e&&!e.ca){var a=e.src;if(a&&a[ce])ve(a.i,e);else{var n=e.type,i=e.proxy;a.removeEventListener?a.removeEventListener(n,i,e.capture):a.detachEvent?a.detachEvent(je(n),i):a.addListener&&a.removeListener&&a.removeListener(i),(n=Pe(a))?(ve(n,e),0==n.h&&(n.src=null,a[ge]=null)):me(e)}}}function je(e){return e in fe?fe[e]:fe[e]="on"+e}function xe(e,a){if(e.ca)e=!0;else{a=new le(a,this);var n=e.listener,i=e.ia||e.src;e.fa&&Be(e),e=n.call(i,a)}return e}function Pe(e){return e=e[ge],e instanceof pe?e:null}var Te="__closure_events_fn_"+(1e9*Math.random()>>>0);function we(e){return"function"===typeof e?e:(e[Te]||(e[Te]=function(a){return e.handleEvent(a)}),e[Te])}function Ce(){A.call(this),this.i=new pe(this),this.P=this,this.I=null}function Ke(e,a){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=a.type||a,"string"===typeof a)a=new se(a,e);else if(a instanceof se)a.target=a.target||e;else{var r=a;a=new se(i,e),G(a,r)}if(r=!0,n)for(var o=n.length-1;0<=o;o--){var t=a.g=n[o];r=Le(t,i,!0,a)&&r}if(t=a.g=e,r=Le(t,i,!0,a)&&r,r=Le(t,i,!1,a)&&r,n)for(o=0;o<n.length;o++)t=a.g=n[o],r=Le(t,i,!1,a)&&r}function Le(e,a,n,i){if(a=e.i.g[String(a)],!a)return!0;a=a.concat();for(var r=!0,o=0;o<a.length;++o){var t=a[o];if(t&&!t.ca&&t.capture==n){var s=t.listener,l=t.ia||t.src;t.fa&&ve(e.i,t),r=!1!==s.call(l,i)&&r}}return r&&!i.defaultPrevented}M(Ce,A),Ce.prototype[ce]=!0,Ce.prototype.removeEventListener=function(e,a,n,i){Ae(this,e,a,n,i)},Ce.prototype.M=function(){if(Ce.Z.M.call(this),this.i){var e,a=this.i;for(e in a.g){for(var n=a.g[e],i=0;i<n.length;i++)me(n[i]);delete a.g[e],a.h--}}this.I=null},Ce.prototype.N=function(e,a,n,i){return this.i.add(String(e),a,!1,n,i)},Ce.prototype.O=function(e,a,n,i){return this.i.add(String(e),a,!0,n,i)};var Ne=d.JSON.stringify;function _e(){var e=Ie;let a=null;return e.g&&(a=e.g,e.g=e.g.next,e.g||(e.h=null),a.next=null),a}class ze{constructor(){this.h=this.g=null}add(e,a){const n=De.get();n.set(e,a),this.h?this.h.next=n:this.g=n,this.h=n}}var Re,De=new class{constructor(e,a){this.i=e,this.j=a,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new He),(e=>e.reset()));class He{constructor(){this.next=this.g=this.h=null}set(e,a){this.h=e,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}function Ee(e){d.setTimeout((()=>{throw e}),0)}function Ve(e,a){Re||Ge(),Fe||(Re(),Fe=!0),Ie.add(e,a)}function Ge(){var e=d.Promise.resolve(void 0);Re=function(){e.then(Oe)}}var Fe=!1,Ie=new ze;function Oe(){for(var e;e=_e();){try{e.h.call(e.g)}catch(n){Ee(n)}var a=De;a.j(e),100>a.h&&(a.h++,e.next=a.g,a.g=e)}Fe=!1}function Je(e,a){Ce.call(this),this.h=e||1,this.g=a||d,this.j=y(this.kb,this),this.l=Date.now()}function Ue(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Ze(e,a,n){if("function"===typeof e)n&&(e=y(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=y(e.handleEvent,e)}return 2147483647<Number(a)?-1:d.setTimeout(e,a||0)}function We(e){e.g=Ze((()=>{e.g=null,e.i&&(e.i=!1,We(e))}),e.j);const a=e.h;e.h=null,e.m.apply(null,a)}M(Je,Ce),i=Je.prototype,i.da=!1,i.S=null,i.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ke(this,"tick"),this.da&&(Ue(this),this.start()))}},i.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){Je.Z.M.call(this),Ue(this),delete this.g};class qe extends A{constructor(e,a){super(),this.m=e,this.j=a,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:We(this)}M(){super.M(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $e(e){A.call(this),this.h=e,this.g={}}M($e,A);var Ye=[];function Qe(e,a,n,i){Array.isArray(n)||(n&&(Ye[0]=n.toString()),n=Ye);for(var r=0;r<n.length;r++){var o=be(a,n[r],i||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function Xe(e){H(e.g,(function(e,a){this.g.hasOwnProperty(a)&&Be(e)}),e),e.g={}}function ea(){this.g=!0}function aa(e,a,n,i,r,o){e.info((function(){if(e.g)if(o)for(var t="",s=o.split("&"),l=0;l<s.length;l++){var u=s[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");t=2<=d.length&&"type"==d[1]?t+(c+"=")+u+"&":t+(c+"=redacted&")}}else t=null;else t=o;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+a+"\n"+n+"\n"+t}))}function na(e,a,n,i,r,o,t){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+a+"\n"+n+"\n"+o+" "+t}))}function ia(e,a,n,i){e.info((function(){return"XMLHTTP TEXT ("+a+"): "+oa(e,n)+(i?" "+i:"")}))}function ra(e,a){e.info((function(){return"TIMEOUT: "+a}))}function oa(e,a){if(!e.g)return a;if(!a)return null;try{var n=JSON.parse(a);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var o=r[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var t=1;t<r.length;t++)r[t]=""}}}return Ne(n)}catch(s){return a}}$e.prototype.M=function(){$e.Z.M.call(this),Xe(this)},$e.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ea.prototype.Aa=function(){this.g=!1},ea.prototype.info=function(){};var ta={},sa=null;function la(){return sa=sa||new Ce}function ua(e){se.call(this,ta.Ma,e)}function ca(e){const a=la();Ke(a,new ua(a,e))}function da(e,a){se.call(this,ta.STAT_EVENT,e),this.stat=a}function ha(e){const a=la();Ke(a,new da(a,e))}function ma(e,a){se.call(this,ta.Na,e),this.size=a}function pa(e,a){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){e()}),a)}ta.Ma="serverreachability",M(ua,se),ta.STAT_EVENT="statevent",M(da,se),ta.Na="timingevent",M(ma,se);var va={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ka={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ga(){}function fa(e){return e.h||(e.h=e.i())}function ba(){}ga.prototype.h=null;var ya,Sa={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ma(){se.call(this,"d")}function Aa(){se.call(this,"c")}function Ba(){}function ja(e,a,n,i){this.l=e,this.j=a,this.m=n,this.X=i||1,this.V=new $e(this),this.P=Pa,e=W?125:void 0,this.W=new Je(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new xa}function xa(){this.i=null,this.g="",this.h=!1}M(Ma,se),M(Aa,se),M(Ba,ga),Ba.prototype.g=function(){return new XMLHttpRequest},Ba.prototype.i=function(){return{}},ya=new Ba;var Pa=45e3,Ta={},wa={};function Ca(e,a,n){e.K=1,e.v=an(qa(a)),e.s=n,e.U=!0,Ka(e,null)}function Ka(e,a){e.F=Date.now(),za(e),e.A=qa(e.v);var n=e.A,i=e.X;Array.isArray(i)||(i=[String(i)]),gn(n.h,"t",i),e.C=0,n=e.l.H,e.h=new xa,e.g=Ai(e.l,n?a:null,!e.s),0<e.O&&(e.L=new qe(y(e.Ia,e,e.g),e.O)),Qe(e.V,e.g,"readystatechange",e.gb),a=e.H?E(e.H):{},e.s?(e.u||(e.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,a)):(e.u="GET",e.g.ea(e.A,e.u,null,a)),ca(1),aa(e.j,e.u,e.A,e.m,e.X,e.s)}function La(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Na(e,a,n){let i,r=!0;for(;!e.I&&e.C<n.length;){if(i=_a(e,n),i==wa){4==a&&(e.o=4,ha(14),r=!1),ia(e.j,e.m,null,"[Incomplete Response]");break}if(i==Ta){e.o=4,ha(15),ia(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}ia(e.j,e.m,i,null),Va(e,i)}La(e)&&i!=wa&&i!=Ta&&(e.h.g="",e.C=0),4!=a||0!=n.length||e.h.h||(e.o=1,ha(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.aa&&(e.aa=!0,a=e.l,a.g==e&&a.$&&!a.L&&(a.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),vi(a),a.L=!0,ha(11))):(ia(e.j,e.m,n,"[Invalid Chunked Response]"),Ea(e),Ha(e))}function _a(e,a){var n=e.C,i=a.indexOf("\n",n);return-1==i?wa:(n=Number(a.substring(n,i)),isNaN(n)?Ta:(i+=1,i+n>a.length?wa:(a=a.substr(i,n),e.C=i+n,a)))}function za(e){e.Y=Date.now()+e.P,Ra(e,e.P)}function Ra(e,a){if(null!=e.B)throw Error("WatchDog timer not null");e.B=pa(y(e.eb,e),a)}function Da(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function Ha(e){0==e.l.G||e.I||fi(e.l,e)}function Ea(e){Da(e);var a=e.L;a&&"function"==typeof a.na&&a.na(),e.L=null,Ue(e.W),Xe(e.V),e.g&&(a=e.g,e.g=null,a.abort(),a.na())}function Va(e,a){try{var n=e.l;if(0!=n.G&&(n.g==e||jn(n.i,e)))if(n.I=e.N,!e.J&&jn(n.i,e)&&3==n.G){try{var i=n.Ca.g.parse(a)}catch(u){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;gi(n),oi(n)}pi(n),ha(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=pa(y(n.ab,n),6e3));if(1>=Bn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else yi(n,11)}else if((e.J||n.g==e)&&gi(n),!K(a))for(r=n.Ca.g.parse(a),a=0;a<r.length;a++){let u=r[a];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const a=u[3];null!=a&&(n.ma=a,n.h.info("VER="+n.ma));const r=u[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const c=u[5];null!=c&&"number"===typeof c&&0<c&&(i=1.5*c,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var o=i.i;!o.g&&(_(e,"spdy")||_(e,"quic")||_(e,"h2"))&&(o.j=o.l,o.g=new Set,o.h&&(xn(o,o.h),o.h=null))}if(i.D){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.sa=e,en(i.F,i.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var t=e;if(i.oa=Mi(i,i.H?i.la:null,i.W),t.J){Pn(i.i,t);var s=t,l=i.K;l&&s.setTimeout(l),s.B&&(Da(s),za(s)),i.g=t}else mi(i);0<n.l.length&&li(n)}else"stop"!=u[0]&&"close"!=u[0]||yi(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?yi(n,7):ri(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}ca(4)}catch(u){}}function Ga(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(m(e)){for(var a=[],n=e.length,i=0;i<n;i++)a.push(e[i]);return a}for(i in a=[],n=0,e)a[n++]=e[i];return a}function Fa(e,a){if(e.forEach&&"function"==typeof e.forEach)e.forEach(a,void 0);else if(m(e)||"string"===typeof e)P(e,a,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(m(e)||"string"===typeof e){n=[];for(var i=e.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,e)n[i++]=r;i=Ga(e),r=i.length;for(var o=0;o<r;o++)a.call(void 0,i[o],n&&n[o],e)}}function Ia(e,a){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(e)if(e instanceof Ia)for(n=e.T(),i=0;i<n.length;i++)this.set(n[i],e.get(n[i]));else for(i in e)this.set(i,e[i])}function Oa(e){if(e.i!=e.g.length){for(var a=0,n=0;a<e.g.length;){var i=e.g[a];Ja(e.h,i)&&(e.g[n++]=i),a++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=a=0;a<e.g.length;)i=e.g[a],Ja(r,i)||(e.g[n++]=i,r[i]=1),a++;e.g.length=n}}function Ja(e,a){return Object.prototype.hasOwnProperty.call(e,a)}i=ja.prototype,i.setTimeout=function(e){this.P=e},i.gb=function(e){e=e.target;const a=this.L;a&&3==Qn(e)?a.l():this.Ia(e)},i.Ia=function(e){try{if(e==this.g)e:{const c=Qn(this.g);var a=this.g.Da();const h=this.g.ba();if(!(3>c)&&(3!=c||W||this.g&&(this.h.h||this.g.ga()||Xn(this.g)))){this.I||4!=c||7==a||ca(8==a||0>=h?3:2),Da(this);var n=this.g.ba();this.N=n;a:if(La(this)){var i=Xn(this.g);e="";var r=i.length,o=4==Qn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ea(this),Ha(this);var t="";break a}this.h.i=new d.TextDecoder}for(a=0;a<r;a++)this.h.h=!0,e+=this.h.i.decode(i[a],{stream:o&&a==r-1});i.splice(0,r),this.h.g+=e,this.C=0,t=this.h.g}else t=this.g.ga();if(this.i=200==n,na(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){a:{if(this.g){var s,l=this.g;if((s=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(s)){var u=s;break a}}u=null}if(!(n=u)){this.i=!1,this.o=3,ha(12),Ea(this),Ha(this);break e}ia(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Va(this,n)}this.U?(Na(this,c,t),W&&this.i&&3==c&&(Qe(this.V,this.W,"tick",this.fb),this.W.start())):(ia(this.j,this.m,t,null),Va(this,t)),4==c&&Ea(this),this.i&&!this.I&&(4==c?fi(this.l,this):(this.i=!1,za(this)))}else 400==n&&0<t.indexOf("Unknown SID")?(this.o=3,ha(12)):(this.o=0,ha(13)),Ea(this),Ha(this)}}}catch(c){}},i.fb=function(){if(this.g){var e=Qn(this.g),a=this.g.ga();this.C<a.length&&(Da(this),Na(this,e,a),this.i&&4!=e&&za(this))}},i.cancel=function(){this.I=!0,Ea(this)},i.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(ra(this.j,this.A),2!=this.K&&(ca(3),ha(17)),Ea(this),this.o=2,Ha(this)):Ra(this,this.Y-e)},i=Ia.prototype,i.R=function(){Oa(this);for(var e=[],a=0;a<this.g.length;a++)e.push(this.h[this.g[a]]);return e},i.T=function(){return Oa(this),this.g.concat()},i.get=function(e,a){return Ja(this.h,e)?this.h[e]:a},i.set=function(e,a){Ja(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=a},i.forEach=function(e,a){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],o=this.get(r);e.call(a,o,r,this)}};var Ua=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Za(e,a){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var o=e[n].substring(0,i);r=e[n].substring(i+1)}else o=e[n];a(o,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Wa(e,a){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Wa){this.g=void 0!==a?a:e.g,$a(this,e.j),this.s=e.s,Ya(this,e.i),Qa(this,e.m),this.l=e.l,a=e.h;var n=new mn;n.i=a.i,a.g&&(n.g=new Ia(a.g),n.h=a.h),Xa(this,n),this.o=e.o}else e&&(n=String(e).match(Ua))?(this.g=!!a,$a(this,n[1]||"",!0),this.s=on(n[2]||""),Ya(this,n[3]||"",!0),Qa(this,n[4]),this.l=on(n[5]||"",!0),Xa(this,n[6]||"",!0),this.o=on(n[7]||"")):(this.g=!!a,this.h=new mn(null,this.g))}function qa(e){return new Wa(e)}function $a(e,a,n){e.j=n?on(a,!0):a,e.j&&(e.j=e.j.replace(/:$/,""))}function Ya(e,a,n){e.i=n?on(a,!0):a}function Qa(e,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);e.m=a}else e.m=null}function Xa(e,a,n){a instanceof mn?(e.h=a,bn(e.h,e.g)):(n||(a=tn(a,dn)),e.h=new mn(a,e.g))}function en(e,a,n){e.h.set(a,n)}function an(e){return en(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function nn(e){return e instanceof Wa?qa(e):new Wa(e,void 0)}function rn(e,a,n,i){var r=new Wa(null,void 0);return e&&$a(r,e),a&&Ya(r,a),n&&Qa(r,n),i&&(r.l=i),r}function on(e,a){return e?a?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tn(e,a,n){return"string"===typeof e?(e=encodeURI(e).replace(a,sn),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function sn(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Wa.prototype.toString=function(){var e=[],a=this.j;a&&e.push(tn(a,ln,!0),":");var n=this.i;return(n||"file"==a)&&(e.push("//"),(a=this.s)&&e.push(tn(a,ln,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(tn(n,"/"==n.charAt(0)?cn:un,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tn(n,hn)),e.join("")};var ln=/[#\/\?@]/g,un=/[#\?:]/g,cn=/[#\?]/g,dn=/[#\?@]/g,hn=/#/g;function mn(e,a){this.h=this.g=null,this.i=e||null,this.j=!!a}function pn(e){e.g||(e.g=new Ia,e.h=0,e.i&&Za(e.i,(function(a,n){e.add(decodeURIComponent(a.replace(/\+/g," ")),n)})))}function vn(e,a){pn(e),a=fn(e,a),Ja(e.g.h,a)&&(e.i=null,e.h-=e.g.get(a).length,e=e.g,Ja(e.h,a)&&(delete e.h[a],e.i--,e.g.length>2*e.i&&Oa(e)))}function kn(e,a){return pn(e),a=fn(e,a),Ja(e.g.h,a)}function gn(e,a,n){vn(e,a),0<n.length&&(e.i=null,e.g.set(fn(e,a),C(n)),e.h+=n.length)}function fn(e,a){return a=String(a),e.j&&(a=a.toLowerCase()),a}function bn(e,a){a&&!e.j&&(pn(e),e.i=null,e.g.forEach((function(e,a){var n=a.toLowerCase();a!=n&&(vn(this,a),gn(this,n,e))}),e)),e.j=a}i=mn.prototype,i.add=function(e,a){pn(this),this.i=null,e=fn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(a),this.h+=1,this},i.forEach=function(e,a){pn(this),this.g.forEach((function(n,i){P(n,(function(n){e.call(a,n,i,this)}),this)}),this)},i.T=function(){pn(this);for(var e=this.g.R(),a=this.g.T(),n=[],i=0;i<a.length;i++)for(var r=e[i],o=0;o<r.length;o++)n.push(a[i]);return n},i.R=function(e){pn(this);var a=[];if("string"===typeof e)kn(this,e)&&(a=w(a,this.g.get(fn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)a=w(a,e[n])}return a},i.set=function(e,a){return pn(this),this.i=null,e=fn(this,e),kn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[a]),this.h+=1,this},i.get=function(e,a){return e?(e=this.R(e),0<e.length?String(e[0]):a):a},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],a=this.g.T(),n=0;n<a.length;n++){var i=a[n],r=encodeURIComponent(String(i));i=this.R(i);for(var o=0;o<i.length;o++){var t=r;""!==i[o]&&(t+="="+encodeURIComponent(String(i[o]))),e.push(t)}}return this.i=e.join("&")};var yn=class{constructor(e,a){this.h=e,this.g=a}};function Sn(e){this.l=e||Mn,d.PerformanceNavigationTiming?(e=d.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(d.g&&d.g.Ea&&d.g.Ea()&&d.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Mn=10;function An(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Bn(e){return e.h?1:e.g?e.g.size:0}function jn(e,a){return e.h?e.h==a:!!e.g&&e.g.has(a)}function xn(e,a){e.g?e.g.add(a):e.h=a}function Pn(e,a){e.h&&e.h==a?e.h=null:e.g&&e.g.has(a)&&e.g.delete(a)}function Tn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let a=e.i;for(const n of e.g.values())a=a.concat(n.D);return a}return C(e.i)}function wn(){}function Cn(){this.g=new wn}function Kn(e,a,n){const i=n||"";try{Fa(e,(function(e,n){let r=e;p(e)&&(r=Ne(e)),a.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw a.push(i+"type="+encodeURIComponent("_badmap")),r}}function Ln(e,a){const n=new ea;if(d.Image){const i=new Image;i.onload=S(Nn,n,i,"TestLoadImage: loaded",!0,a),i.onerror=S(Nn,n,i,"TestLoadImage: error",!1,a),i.onabort=S(Nn,n,i,"TestLoadImage: abort",!1,a),i.ontimeout=S(Nn,n,i,"TestLoadImage: timeout",!1,a),d.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else a(!1)}function Nn(e,a,n,i,r){try{a.onload=null,a.onerror=null,a.onabort=null,a.ontimeout=null,r(i)}catch(o){}}function _n(e){this.l=e.$b||null,this.j=e.ib||!1}function zn(e,a){Ce.call(this),this.D=e,this.u=a,this.m=void 0,this.readyState=Rn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Sn.prototype.cancel=function(){if(this.i=Tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},wn.prototype.stringify=function(e){return d.JSON.stringify(e,void 0)},wn.prototype.parse=function(e){return d.JSON.parse(e,void 0)},M(_n,ga),_n.prototype.g=function(){return new zn(this.l,this.j)},_n.prototype.i=function(e){return function(){return e}}({}),M(zn,Ce);var Rn=0;function Dn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Hn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,En(e)}function En(e){e.onreadystatechange&&e.onreadystatechange.call(e)}i=zn.prototype,i.open=function(e,a){if(this.readyState!=Rn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=a,this.readyState=1,En(this)},i.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(a.body=e),(this.D||d).fetch(new Request(this.B,a)).then(this.Va.bind(this),this.ha.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Hn(this)),this.readyState=Rn},i.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,En(this)),this.g&&(this.readyState=3,En(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},i.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var a=e.value?e.value:new Uint8Array(0);(a=this.A.decode(a,{stream:!e.done}))&&(this.response=this.responseText+=a)}e.done?Hn(this):En(this),3==this.readyState&&Dn(this)}},i.Ua=function(e){this.g&&(this.response=this.responseText=e,Hn(this))},i.Ta=function(e){this.g&&(this.response=e,Hn(this))},i.ha=function(){this.g&&Hn(this)},i.setRequestHeader=function(e,a){this.v.append(e,a)},i.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],a=this.h.entries();for(var n=a.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=a.next();return e.join("\r\n")},Object.defineProperty(zn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Vn=d.JSON.parse;function Gn(e){Ce.call(this),this.headers=new Ia,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fn,this.K=this.L=!1}M(Gn,Ce);var Fn="",In=/^https?$/i,On=["POST","PUT"];function Jn(e){return U&&ie()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Un(e){return"content-type"==e.toLowerCase()}function Zn(e,a){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=a,e.m=5,Wn(e),$n(e)}function Wn(e){e.D||(e.D=!0,Ke(e,"complete"),Ke(e,"error"))}function qn(e){if(e.h&&"undefined"!=typeof c&&(!e.C[1]||4!=Qn(e)||2!=e.ba()))if(e.v&&4==Qn(e))Ze(e.Fa,0,e);else if(Ke(e,"readystatechange"),4==Qn(e)){e.h=!1;try{const l=e.ba();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break e;default:a=!1}var n;if(!(n=a)){var i;if(i=0===l){var r=String(e.H).match(Ua)[1]||null;if(!r&&d.self&&d.self.location){var o=d.self.location.protocol;r=o.substr(0,o.length-1)}i=!In.test(r?r.toLowerCase():"")}n=i}if(n)Ke(e,"complete"),Ke(e,"success");else{e.m=6;try{var t=2<Qn(e)?e.g.statusText:""}catch(s){t=""}e.j=t+" ["+e.ba()+"]",Wn(e)}}finally{$n(e)}}}function $n(e,a){if(e.g){Yn(e);const i=e.g,r=e.C[0]?h:null;e.g=null,e.C=null,a||Ke(e,"ready");try{i.onreadystatechange=r}catch(n){}}}function Yn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function Qn(e){return e.g?e.g.readyState:0}function Xn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Fn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(a){return null}}function ei(e){let a="";return H(e,(function(e,n){a+=n,a+=":",a+=e,a+="\r\n"})),a}function ai(e,a,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=ei(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):en(e,a,n))}function ni(e,a,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||a}function ii(e){this.za=0,this.l=[],this.h=new ea,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ni("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ni("baseRetryDelayMs",5e3,e),this.$a=ni("retryDelaySeedMs",1e4,e),this.Ya=ni("forwardChannelMaxRetries",2,e),this.ra=ni("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Sn(e&&e.concurrentRequestLimit),this.Ca=new Cn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function ri(e){if(ti(e),3==e.G){var a=e.V++,n=qa(e.F);en(n,"SID",e.J),en(n,"RID",a),en(n,"TYPE","terminate"),di(e,n),a=new ja(e,e.h,a,void 0),a.K=2,a.v=an(qa(n)),n=!1,d.navigator&&d.navigator.sendBeacon&&(n=d.navigator.sendBeacon(a.v.toString(),"")),!n&&d.Image&&((new Image).src=a.v,n=!0),n||(a.g=Ai(a.l,null),a.g.ea(a.v)),a.F=Date.now(),za(a)}Si(e)}function oi(e){e.g&&(vi(e),e.g.cancel(),e.g=null)}function ti(e){oi(e),e.u&&(d.clearTimeout(e.u),e.u=null),gi(e),e.i.cancel(),e.m&&("number"===typeof e.m&&d.clearTimeout(e.m),e.m=null)}function si(e,a){e.l.push(new yn(e.Za++,a)),3==e.G&&li(e)}function li(e){An(e.i)||e.m||(e.m=!0,Ve(e.Ha,e),e.C=0)}function ui(e,a){return!(Bn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=a.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=pa(y(e.Ha,e,a),bi(e,e.C)),e.C++,!0))}function ci(e,a){var n;n=a?a.m:e.V++;const i=qa(e.F);en(i,"SID",e.J),en(i,"RID",n),en(i,"AID",e.U),di(e,i),e.o&&e.s&&ai(i,e.o,e.s),n=new ja(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),a&&(e.l=a.D.concat(e.l)),a=hi(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),xn(e.i,n),Ca(n,i,a)}function di(e,a){e.j&&Fa({},(function(e,n){en(a,n,e)}))}function hi(e,a,n){n=Math.min(e.l.length,n);var i=e.j?y(e.j.Oa,e.j,e):null;e:{var r=e.l;let a=-1;for(;;){const e=["count="+n];-1==a?0<n?(a=r[0].h,e.push("ofs="+a)):a=0:e.push("ofs="+a);let o=!0;for(let t=0;t<n;t++){let n=r[t].h;const s=r[t].g;if(n-=a,0>n)a=Math.max(0,r[t].h-100),o=!1;else try{Kn(s,e,"req"+n+"_")}catch(ar){i&&i(s)}}if(o){i=e.join("&");break e}}}return e=e.l.splice(0,n),a.D=e,i}function mi(e){e.g||e.u||(e.Y=1,Ve(e.Ga,e),e.A=0)}function pi(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=pa(y(e.Ga,e),bi(e,e.A)),e.A++,!0)}function vi(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function ki(e){e.g=new ja(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var a=qa(e.oa);en(a,"RID","rpc"),en(a,"SID",e.J),en(a,"CI",e.N?"0":"1"),en(a,"AID",e.U),di(e,a),en(a,"TYPE","xmlhttp"),e.o&&e.s&&ai(a,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=an(qa(a)),n.s=null,n.U=!0,Ka(n,e)}function gi(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function fi(e,a){var n=null;if(e.g==a){gi(e),vi(e),e.g=null;var i=2}else{if(!jn(e.i,a))return;n=a.D,Pn(e.i,a),i=1}if(e.I=a.N,0!=e.G)if(a.i)if(1==i){n=a.s?a.s.length:0,a=Date.now()-a.F;var r=e.C;i=la(),Ke(i,new ma(i,n,a,r)),li(e)}else mi(e);else if(r=a.o,3==r||0==r&&0<e.I||!(1==i&&ui(e,a)||2==i&&pi(e)))switch(n&&0<n.length&&(a=e.i,a.i=a.i.concat(n)),r){case 1:yi(e,5);break;case 4:yi(e,10);break;case 3:yi(e,6);break;default:yi(e,2)}}function bi(e,a){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*a}function yi(e,a){if(e.h.info("Error code "+a),2==a){var n=null;e.j&&(n=null);var i=y(e.jb,e);n||(n=new Wa("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||$a(n,"https"),an(n)),Ln(n.toString(),i)}else ha(2);e.G=0,e.j&&e.j.va(a),Si(e),ti(e)}function Si(e){e.G=0,e.I=-1,e.j&&(0==Tn(e.i).length&&0==e.l.length||(e.i.i.length=0,C(e.l),e.l.length=0),e.j.ua())}function Mi(e,a,n){let i=nn(n);if(""!=i.i)a&&Ya(i,a+"."+i.i),Qa(i,i.m);else{const e=d.location;i=rn(e.protocol,a?a+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&H(e.aa,(function(e,a){en(i,a,e)})),a=e.D,n=e.sa,a&&n&&en(i,a,n),en(i,"VER",e.ma),di(e,i),i}function Ai(e,a,n){if(a&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return a=n&&e.Ba&&!e.qa?new Gn(new _n({ib:!0})):new Gn(e.qa),a.L=e.H,a}function Bi(){}function ji(){if(U&&!(10<=Number(oe)))throw Error("Environmental error: no available transport.")}function xi(e,a){Ce.call(this),this.g=new ii(a),this.l=e,this.h=a&&a.messageUrlParams||null,e=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(e?e["X-WebChannel-Content-Type"]=a.messageContentType:e={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.ya&&(e?e["X-WebChannel-Client-Profile"]=a.ya:e={"X-WebChannel-Client-Profile":a.ya}),this.g.P=e,(e=a&&a.httpHeadersOverwriteParam)&&!K(e)&&(this.g.o=e),this.A=a&&a.supportsCrossDomainXhr||!1,this.v=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!K(a)&&(this.g.D=a,e=this.h,null!==e&&a in e&&(e=this.h,a in e&&delete e[a])),this.j=new wi(this)}function Pi(e){Ma.call(this);var a=e.__sm__;if(a){e:{for(const n in a){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,a=null!==a&&e in a?a[e]:void 0),this.data=a}else this.data=e}function Ti(){Aa.call(this),this.status=1}function wi(e){this.g=e}i=Gn.prototype,i.ea=function(e,a,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);a=a?a.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ya.g(),this.C=this.u?fa(this.u):fa(ya),this.g.onreadystatechange=y(this.Fa,this);try{this.F=!0,this.g.open(a,String(e),!0),this.F=!1}catch(o){return void Zn(this,o)}e=n||"";const r=new Ia(this.headers);i&&Fa(i,(function(e,a){r.set(a,e)})),i=T(r.T()),n=d.FormData&&e instanceof d.FormData,!(0<=x(On,a))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(e,a){this.g.setRequestHeader(a,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Yn(this),0<this.B&&((this.K=Jn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=y(this.pa,this)):this.A=Ze(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){Zn(this,o)}},i.pa=function(){"undefined"!=typeof c&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ke(this,"timeout"),this.abort(8))},i.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ke(this,"complete"),Ke(this,"abort"),$n(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$n(this,!0)),Gn.Z.M.call(this)},i.Fa=function(){this.s||(this.F||this.v||this.l?qn(this):this.cb())},i.cb=function(){qn(this)},i.ba=function(){try{return 2<Qn(this)?this.g.status:-1}catch(e){return-1}},i.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},i.Qa=function(e){if(this.g){var a=this.g.responseText;return e&&0==a.indexOf(e)&&(a=a.substring(e.length)),Vn(a)}},i.Da=function(){return this.m},i.La=function(){return"string"===typeof this.j?this.j:String(this.j)},i=ii.prototype,i.ma=8,i.G=1,i.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(a){}},i.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new ja(this,this.h,e,void 0);let o=this.s;if(this.P&&(o?(o=E(o),G(o,this.P)):o=this.P),null===this.o&&(r.H=o),this.ja)e:{for(var a=0,n=0;n<this.l.length;n++){var i=this.l[n];if(i="__data__"in i.g&&(i=i.g.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(a+=i,4096<a){a=n;break e}if(4096===a||n===this.l.length-1){a=n+1;break e}}a=1e3}else a=1e3;a=hi(this,r,a),n=qa(this.F),en(n,"RID",e),en(n,"CVER",22),this.D&&en(n,"X-HTTP-Session-Id",this.D),di(this,n),this.o&&o&&ai(n,this.o,o),xn(this.i,r),this.Ra&&en(n,"TYPE","init"),this.ja?(en(n,"$req",a),en(n,"SID","null"),r.$=!0,Ca(r,n,null)):Ca(r,n,a),this.G=2}}else 3==this.G&&(e?ci(this,e):0==this.l.length||An(this.i)||ci(this))},i.Ga=function(){if(this.u=null,ki(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=pa(y(this.bb,this),e)}},i.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ha(10),oi(this),ki(this))},i.ab=function(){null!=this.v&&(this.v=null,oi(this),pi(this),ha(19))},i.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ha(2)):(this.h.info("Failed to ping google.com"),ha(1))},i=Bi.prototype,i.xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Oa=function(){},ji.prototype.g=function(e,a){return new xi(e,a)},M(xi,Ce),xi.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,a=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Ve(y(e.hb,e,a))),ha(0),e.W=a,e.aa=n||{},e.N=e.X,e.F=Mi(e,null,e.W),li(e)},xi.prototype.close=function(){ri(this.g)},xi.prototype.u=function(e){if("string"===typeof e){var a={};a.__data__=e,si(this.g,a)}else this.v?(a={},a.__data__=Ne(e),si(this.g,a)):si(this.g,e)},xi.prototype.M=function(){this.g.j=null,delete this.j,ri(this.g),delete this.g,xi.Z.M.call(this)},M(Pi,Ma),M(Ti,Aa),M(wi,Bi),wi.prototype.xa=function(){Ke(this.g,"a")},wi.prototype.wa=function(e){Ke(this.g,new Pi(e))},wi.prototype.va=function(e){Ke(this.g,new Ti(e))},wi.prototype.ua=function(){Ke(this.g,"b")},ji.prototype.createWebChannel=ji.prototype.g,xi.prototype.send=xi.prototype.u,xi.prototype.open=xi.prototype.m,xi.prototype.close=xi.prototype.close,va.NO_ERROR=0,va.TIMEOUT=8,va.HTTP_ERROR=6,ka.COMPLETE="complete",ba.EventType=Sa,Sa.OPEN="a",Sa.CLOSE="b",Sa.ERROR="c",Sa.MESSAGE="d",Ce.prototype.listen=Ce.prototype.N,Gn.prototype.listenOnce=Gn.prototype.O,Gn.prototype.getLastError=Gn.prototype.La,Gn.prototype.getLastErrorCode=Gn.prototype.Da,Gn.prototype.getStatus=Gn.prototype.ba,Gn.prototype.getResponseJson=Gn.prototype.Qa,Gn.prototype.getResponseText=Gn.prototype.ga,Gn.prototype.send=Gn.prototype.ea;var Ci=u.createWebChannelTransport=function(){return new ji},Ki=u.getStatEventTarget=function(){return la()},Li=u.ErrorCode=va,Ni=u.EventType=ka,_i=u.Event=ta,zi=u.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Ri=u.FetchXmlHttpFactory=_n,Di=u.WebChannel=ba,Hi=u.XhrIo=Gn;const Ei="@firebase/firestore";
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
 */class Vi{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Vi.UNAUTHENTICATED=new Vi(null),Vi.GOOGLE_CREDENTIALS=new Vi("google-credentials-uid"),Vi.FIRST_PARTY=new Vi("first-party-uid"),Vi.MOCK_USER=new Vi("mock-user");
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
let Gi="9.2.0";
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
 */const Fi=new t.Yd("@firebase/firestore");function Ii(){return Fi.logLevel}function Oi(e,...a){if(Fi.logLevel<=t["in"].DEBUG){const n=a.map(Zi);Fi.debug(`Firestore (${Gi}): ${e}`,...n)}}function Ji(e,...a){if(Fi.logLevel<=t["in"].ERROR){const n=a.map(Zi);Fi.error(`Firestore (${Gi}): ${e}`,...n)}}function Ui(e,...a){if(Fi.logLevel<=t["in"].WARN){const n=a.map(Zi);Fi.warn(`Firestore (${Gi}): ${e}`,...n)}}function Zi(e){if("string"==typeof e)return e;try{return a=e,JSON.stringify(a)}catch(a){return e}
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
 */var a}
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
 */function Wi(e="Unexpected state"){const a=`FIRESTORE (${Gi}) INTERNAL ASSERTION FAILED: `+e;throw Ji(a),new Error(a)}function qi(e,a){e||Wi()}function $i(e,a){return e}
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
 */const Yi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Qi extends Error{constructor(e,a){super(a),this.code=e,this.message=a,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Xi{constructor(){this.promise=new Promise(((e,a)=>{this.resolve=e,this.reject=a}))}}
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
 */class er{constructor(e,a){this.user=a,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class ar{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,a){e.enqueueRetryable((()=>a(Vi.UNAUTHENTICATED)))}shutdown(){}}class nr{constructor(e){this.t=e,this.currentUser=Vi.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,a){let n=this.i;const i=e=>this.i!==n?(n=this.i,a(e)):Promise.resolve();let r=new Xi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Xi,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const a=r;e.enqueueRetryable((async()=>{await a.promise,await i(this.currentUser)}))},t=e=>{Oi("FirebaseCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((e=>t(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?t(e):(Oi("FirebaseCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Xi)}}),0),o()}getToken(){const e=this.i,a=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(a).then((a=>this.i!==e?(Oi("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(qi("string"==typeof a.accessToken),new er(a.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return qi(null===e||"string"==typeof e),new Vi(e)}}class ir{constructor(e,a,n){this.h=e,this.l=a,this.m=n,this.type="FirstParty",this.user=Vi.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},a=this.h.auth.getAuthHeaderValueForFirstParty([]);return a&&(e.Authorization=a),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class rr{constructor(e,a,n){this.h=e,this.l=a,this.m=n}getToken(){return Promise.resolve(new ir(this.h,this.l,this.m))}start(e,a){e.enqueueRetryable((()=>a(Vi.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}
/**
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
 */class or{constructor(e,a){this.previousValue=e,a&&(a.sequenceNumberHandler=e=>this.g(e),this.p=e=>a.writeSequenceNumber(e))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}
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
 */function tr(e){const a="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(a&&"function"==typeof a.getRandomValues)a.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}
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
 */or.T=-1;class sr{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=tr(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<a&&(n+=e.charAt(i[r]%e.length))}return n}}function lr(e,a){return e<a?-1:e>a?1:0}function ur(e,a,n){return e.length===a.length&&e.every(((e,i)=>n(e,a[i])))}
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
class cr{constructor(e,a){if(this.seconds=e,this.nanoseconds=a,a<0)throw new Qi(Yi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+a);if(a>=1e9)throw new Qi(Yi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+a);if(e<-62135596800)throw new Qi(Yi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Qi(Yi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return cr.fromMillis(Date.now())}static fromDate(e){return cr.fromMillis(e.getTime())}static fromMillis(e){const a=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*a));return new cr(a,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?lr(this.nanoseconds,e.nanoseconds):lr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class dr{constructor(e){this.timestamp=e}static fromTimestamp(e){return new dr(e)}static min(){return new dr(new cr(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 *
 *
/**
 * @license
 *