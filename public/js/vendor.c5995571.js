(self["webpackChunkicesi_materno"]=self["webpackChunkicesi_materno"]||[]).push([[736],{97458:(a,e,i)=>{"use strict";i.d(e,{Jn:()=>U,qX:()=>F,Xd:()=>G,Mq:()=>W,ZF:()=>Z,KN:()=>q});var n=i(17429),o=i(50004),r=i(95479);
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
class t{constructor(a){this.container=a}getPlatformInfoString(){const a=this.container.getProviders();return a.map((a=>{if(s(a)){const e=a.getImmediate();return`${e.library}/${e.version}`}return null})).filter((a=>a)).join(" ")}}function s(a){const e=a.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const l="@firebase/app",u="0.7.5",c=new o.Yd("@firebase/app"),d="@firebase/app-compat",m="@firebase/analytics-compat",h="@firebase/analytics",p="@firebase/app-check-compat",v="@firebase/app-check",k="@firebase/auth",g="@firebase/auth-compat",f="@firebase/database",b="@firebase/database-compat",y="@firebase/functions",S="@firebase/functions-compat",M="@firebase/installations",A="@firebase/installations-compat",B="@firebase/messaging",j="@firebase/messaging-compat",P="@firebase/performance",x="@firebase/performance-compat",K="@firebase/remote-config",T="@firebase/remote-config-compat",C="@firebase/storage",w="@firebase/storage-compat",L="@firebase/firestore",z="@firebase/firestore-compat",N="firebase",_="9.2.0",R="[DEFAULT]",D={[l]:"fire-core",[d]:"fire-core-compat",[h]:"fire-analytics",[m]:"fire-analytics-compat",[v]:"fire-app-check",[p]:"fire-app-check-compat",[k]:"fire-auth",[g]:"fire-auth-compat",[f]:"fire-rtdb",[b]:"fire-rtdb-compat",[y]:"fire-fn",[S]:"fire-fn-compat",[M]:"fire-iid",[A]:"fire-iid-compat",[B]:"fire-fcm",[j]:"fire-fcm-compat",[P]:"fire-perf",[x]:"fire-perf-compat",[K]:"fire-rc",[T]:"fire-rc-compat",[C]:"fire-gcs",[w]:"fire-gcs-compat",[L]:"fire-fst",[z]:"fire-fst-compat","fire-js":"fire-js",[N]:"fire-js-all"},H=new Map,E=new Map;function V(a,e){try{a.container.addComponent(e)}catch(i){c.debug(`Component ${e.name} failed to register with FirebaseApp ${a.name}`,i)}}function G(a){const e=a.name;if(E.has(e))return c.debug(`There were multiple attempts to register component ${e}.`),!1;E.set(e,a);for(const i of H.values())V(i,a);return!0}function F(a,e){return a.container.getProvider(e)}
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
const I={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},J=new r.LL("app","Firebase",I);
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
class O{constructor(a,e,i){this._isDeleted=!1,this._options=Object.assign({},a),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new n.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(a){this.checkDestroyed(),this._automaticDataCollectionEnabled=a}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(a){this._isDeleted=a}checkDestroyed(){if(this.isDeleted)throw J.create("app-deleted",{appName:this._name})}}
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
 */const U=_;function Z(a,e={}){if("object"!==typeof e){const a=e;e={name:a}}const i=Object.assign({name:R,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!==typeof o||!o)throw J.create("bad-app-name",{appName:String(o)});const t=H.get(o);if(t){if((0,r.vZ)(a,t.options)&&(0,r.vZ)(i,t.config))return t;throw J.create("duplicate-app",{appName:o})}const s=new n.H0(o);for(const n of E.values())s.addComponent(n);const l=new O(a,i,s);return H.set(o,l),l}function W(a=R){const e=H.get(a);if(!e)throw J.create("no-app",{appName:a});return e}function q(a,e,i){var o;let r=null!==(o=D[a])&&void 0!==o?o:a;i&&(r+=`-${i}`);const t=r.match(/\s|\//),s=e.match(/\s|\//);if(t||s){const a=[`Unable to register library "${r}" with version "${e}":`];return t&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),t&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void c.warn(a.join(" "))}G(new n.wA(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
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
function Y(a){G(new n.wA("platform-logger",(a=>new t(a)),"PRIVATE")),q(l,u,a),q(l,u,"esm2017"),q("fire-js","")}Y("")},75361:(a,e,i)=>{"use strict";i.d(e,{Xb:()=>te,v0:()=>on});var n=i(95479),o=i(97458),r=i(28430),t=i(50004),s=i(17429);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=l,c=new n.LL("auth","Firebase",l()),d=new t.Yd("@firebase/auth");function m(a,...e){d.logLevel<=t["in"].ERROR&&d.error(`Auth (${o.Jn}): ${a}`,...e)}
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
 */function h(a,...e){throw k(a,...e)}function p(a,...e){return k(a,...e)}function v(a,e,i){const o=Object.assign(Object.assign({},u()),{[e]:i}),r=new n.LL("auth","Firebase",o);return r.create(e,{appName:a.name})}function k(a,...e){if("string"!==typeof a){const i=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=a.name),a._errorFactory.create(i,...n)}return c.create(a,...e)}function g(a,e,...i){if(!a)throw k(e,...i)}function f(a){const e="INTERNAL ASSERTION FAILED: "+a;throw m(e),new Error(e)}function b(a,e){a||f(e)}
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
 */const y=new Map;function S(a){b(a instanceof Function,"Expected a class definition");let e=y.get(a);return e?(b(e instanceof a,"Instance stored in cache mismatched with class"),e):(e=new a,y.set(a,e),e)}
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
 */function M(a,e){const i=(0,o.qX)(a,"auth");if(i.isInitialized()){const a=i.getImmediate(),o=i.getOptions();if((0,n.vZ)(o,null!==e&&void 0!==e?e:{}))return a;h(a,"already-initialized")}const r=i.initialize({options:e});return r}function A(a,e){const i=(null===e||void 0===e?void 0:e.persistence)||[],n=(Array.isArray(i)?i:[i]).map(S);(null===e||void 0===e?void 0:e.errorMap)&&a._updateErrorMap(e.errorMap),a._initializeWithPersistence(n,null===e||void 0===e?void 0:e.popupRedirectResolver)}
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
 */function B(){var a;return"undefined"!==typeof self&&(null===(a=self.location)||void 0===a?void 0:a.href)||""}function j(){return"http:"===P()||"https:"===P()}function P(){var a;return"undefined"!==typeof self&&(null===(a=self.location)||void 0===a?void 0:a.protocol)||null}
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
 */function x(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(j()||(0,n.ru)()||"connection"in navigator))||navigator.onLine}function K(){if("undefined"===typeof navigator)return null;const a=navigator;return a.languages&&a.languages[0]||a.language||null}
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
 */class T{constructor(a,e){this.shortDelay=a,this.longDelay=e,b(e>a,"Short delay should be less than long delay!"),this.isMobile=(0,n.uI)()||(0,n.b$)()}get(){return x()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function C(a,e){b(a.emulator,"Emulator should always be set here");const{url:i}=a.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}
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
 */class w{static initialize(a,e,i){this.fetchImpl=a,e&&(this.headersImpl=e),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void f("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void f("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void f("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const L={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},z=new T(3e4,6e4);
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
 */function N(a,e){return a.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:a.tenantId}):e}async function _(a,e,i,o,r={}){return R(a,r,(()=>{let r={},t={};o&&("GET"===e?t=o:r={body:JSON.stringify(o)});const s=(0,n.xO)(Object.assign({key:a.config.apiKey},t)).slice(1),l=new(w.headers());return l.set("Content-Type","application/json"),l.set("X-Client-Version",a._getSdkClientVersion()),a.languageCode&&l.set("X-Firebase-Locale",a.languageCode),w.fetch()(H(a,a.config.apiHost,i,s),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))}))}async function R(a,e,i){a._canInitEmulator=!1;const o=Object.assign(Object.assign({},L),e);try{const e=new E(a),n=await Promise.race([i(),e.promise]);e.clearNetworkTimeout();const r=await n.json();if("needConfirmation"in r)throw V(a,"account-exists-with-different-credential",r);if(n.ok&&!("errorMessage"in r))return r;{const e=n.ok?r.errorMessage:r.error.message,[i,t]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===i)throw V(a,"credential-already-in-use",r);if("EMAIL_EXISTS"===i)throw V(a,"email-already-in-use",r);const s=o[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(t)throw v(a,s,t);h(a,s)}}catch(r){if(r instanceof n.ZR)throw r;h(a,"network-request-failed")}}async function D(a,e,i,n,o={}){const r=await _(a,e,i,n,o);return"mfaPendingCredential"in r&&h(a,"multi-factor-auth-required",{_serverResponse:r}),r}function H(a,e,i,n){const o=`${e}${i}?${n}`;return a.config.emulator?C(a.config,o):`${a.config.apiScheme}://${o}`}class E{constructor(a){this.auth=a,this.timer=null,this.promise=new Promise(((a,e)=>{this.timer=setTimeout((()=>e(p(this.auth,"timeout"))),z.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(a,e,i){const n={appName:a.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);const o=p(a,e,n);return o.customData._tokenResponse=i,o}
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
 */async function G(a,e){return _(a,"POST","/v1/accounts:delete",e)}async function F(a,e){return _(a,"POST","/v1/accounts:lookup",e)}
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
 */function I(a){if(a)try{const e=new Date(Number(a));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
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
 */async function J(a,e=!1){const i=(0,n.m9)(a),o=await i.getIdToken(e),r=U(o);g(r&&r.exp&&r.auth_time&&r.iat,i.auth,"internal-error");const t="object"===typeof r.firebase?r.firebase:void 0,s=null===t||void 0===t?void 0:t["sign_in_provider"];return{claims:r,token:o,authTime:I(O(r.auth_time)),issuedAtTime:I(O(r.iat)),expirationTime:I(O(r.exp)),signInProvider:s||null,signInSecondFactor:(null===t||void 0===t?void 0:t["sign_in_second_factor"])||null}}function O(a){return 1e3*Number(a)}function U(a){const[e,i,o]=a.split(".");if(void 0===e||void 0===i||void 0===o)return m("JWT malformed, contained fewer than 3 sections"),null;try{const a=(0,n.tV)(i);return a?JSON.parse(a):(m("Failed to decode base64 JWT payload"),null)}catch(r){return m("Caught error parsing JWT payload as JSON",r),null}}function Z(a){const e=U(a);return g(e,"internal-error"),g("undefined"!==typeof e.exp,"internal-error"),g("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
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
 */async function W(a,e,i=!1){if(i)return e;try{return await e}catch(o){throw o instanceof n.ZR&&q(o)&&a.auth.currentUser===a&&await a.auth.signOut(),o}}function q({code:a}){return"auth/user-disabled"===a||"auth/user-token-expired"===a}
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
 */class Y{constructor(a){this.user=a,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(a){var e;if(a){const a=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),a}{this.errorBackoff=3e4;const a=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,i=a-Date.now()-3e5;return Math.max(0,i)}}schedule(a=!1){if(!this.isRunning)return;const e=this.getInterval(a);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(a){return void("auth/network-request-failed"===a.code&&this.schedule(!0))}this.schedule()}}
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
 */class ${constructor(a,e){this.createdAt=a,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=I(this.lastLoginAt),this.creationTime=I(this.createdAt)}_copy(a){this.createdAt=a.createdAt,this.lastLoginAt=a.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Q(a){var e;const i=a.auth,n=await a.getIdToken(),o=await W(a,F(i,{idToken:n}));g(null===o||void 0===o?void 0:o.users.length,i,"internal-error");const r=o.users[0];a._notifyReloadListener(r);const t=(null===(e=r.providerUserInfo)||void 0===e?void 0:e.length)?ea(r.providerUserInfo):[],s=aa(a.providerData,t),l=a.isAnonymous,u=!(a.email&&r.passwordHash)&&!(null===s||void 0===s?void 0:s.length),c=!!l&&u,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new $(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(a,d)}async function X(a){const e=(0,n.m9)(a);await Q(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aa(a,e){const i=a.filter((a=>!e.some((e=>e.providerId===a.providerId))));return[...i,...e]}function ea(a){return a.map((a=>{var{providerId:e}=a,i=(0,r._T)(a,["providerId"]);return{providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}}))}
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
 */async function ia(a,e){const i=await R(a,{},(()=>{const i=(0,n.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:r}=a.config,t=H(a,o,"/v1/token",`key=${r}`);return w.fetch()(t,{method:"POST",headers:{"X-Client-Version":a._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:i})}));return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}
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
 */class na{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(a){g(a.idToken,"internal-error"),g("undefined"!==typeof a.idToken,"internal-error"),g("undefined"!==typeof a.refreshToken,"internal-error");const e="expiresIn"in a&&"undefined"!==typeof a.expiresIn?Number(a.expiresIn):Z(a.idToken);this.updateTokensAndExpiration(a.idToken,a.refreshToken,e)}async getToken(a,e=!1){return g(!this.accessToken||this.refreshToken,a,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(a,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(a,e){const{accessToken:i,refreshToken:n,expiresIn:o}=await ia(a,e);this.updateTokensAndExpiration(i,n,Number(o))}updateTokensAndExpiration(a,e,i){this.refreshToken=e||null,this.accessToken=a||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(a,e){const{refreshToken:i,accessToken:n,expirationTime:o}=e,r=new na;return i&&(g("string"===typeof i,"internal-error",{appName:a}),r.refreshToken=i),n&&(g("string"===typeof n,"internal-error",{appName:a}),r.accessToken=n),o&&(g("number"===typeof o,"internal-error",{appName:a}),r.expirationTime=o),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(a){this.accessToken=a.accessToken,this.refreshToken=a.refreshToken,this.expirationTime=a.expirationTime}_clone(){return Object.assign(new na,this.toJSON())}_performRefresh(){return f("not implemented")}}
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
 */function oa(a,e){g("string"===typeof a||"undefined"===typeof a,"internal-error",{appName:e})}class ra{constructor(a){var{uid:e,auth:i,stsTokenManager:n}=a,o=(0,r._T)(a,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.metadata=new $(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(a){const e=await W(this,this.stsTokenManager.getToken(this.auth,a));return g(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(a){return J(this,a)}reload(){return X(this)}_assign(a){this!==a&&(g(this.uid===a.uid,this.auth,"internal-error"),this.displayName=a.displayName,this.photoURL=a.photoURL,this.email=a.email,this.emailVerified=a.emailVerified,this.phoneNumber=a.phoneNumber,this.isAnonymous=a.isAnonymous,this.tenantId=a.tenantId,this.providerData=a.providerData.map((a=>Object.assign({},a))),this.metadata._copy(a.metadata),this.stsTokenManager._assign(a.stsTokenManager))}_clone(a){return new ra(Object.assign(Object.assign({},this),{auth:a,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(a){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=a,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(a){this.reloadListener?this.reloadListener(a):this.reloadUserInfo=a}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(a,e=!1){let i=!1;a.idToken&&a.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(a),i=!0),e&&await Q(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const a=await this.getIdToken();return await W(this,G(this.auth,{idToken:a})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((a=>Object.assign({},a))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(a,e){var i,n,o,r,t,s,l,u;const c=null!==(i=e.displayName)&&void 0!==i?i:void 0,d=null!==(n=e.email)&&void 0!==n?n:void 0,m=null!==(o=e.phoneNumber)&&void 0!==o?o:void 0,h=null!==(r=e.photoURL)&&void 0!==r?r:void 0,p=null!==(t=e.tenantId)&&void 0!==t?t:void 0,v=null!==(s=e._redirectEventId)&&void 0!==s?s:void 0,k=null!==(l=e.createdAt)&&void 0!==l?l:void 0,f=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:y,isAnonymous:S,providerData:M,stsTokenManager:A}=e;g(b&&A,a,"internal-error");const B=na.fromJSON(this.name,A);g("string"===typeof b,a,"internal-error"),oa(c,a.name),oa(d,a.name),g("boolean"===typeof y,a,"internal-error"),g("boolean"===typeof S,a,"internal-error"),oa(m,a.name),oa(h,a.name),oa(p,a.name),oa(v,a.name),oa(k,a.name),oa(f,a.name);const j=new ra({uid:b,auth:a,email:d,emailVerified:y,displayName:c,isAnonymous:S,photoURL:h,phoneNumber:m,tenantId:p,stsTokenManager:B,createdAt:k,lastLoginAt:f});return M&&Array.isArray(M)&&(j.providerData=M.map((a=>Object.assign({},a)))),v&&(j._redirectEventId=v),j}static async _fromIdTokenResponse(a,e,i=!1){const n=new na;n.updateFromServerResponse(e);const o=new ra({uid:e.localId,auth:a,stsTokenManager:n,isAnonymous:i});return await Q(o),o}}
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
 */class ta{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(a,e){this.storage[a]=e}async _get(a){const e=this.storage[a];return void 0===e?null:e}async _remove(a){delete this.storage[a]}_addListener(a,e){}_removeListener(a,e){}}ta.type="NONE";const sa=ta;
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
 */function la(a,e,i){return`firebase:${a}:${e}:${i}`}class ua{constructor(a,e,i){this.persistence=a,this.auth=e,this.userKey=i;const{config:n,name:o}=this.auth;this.fullUserKey=la(this.userKey,n.apiKey,o),this.fullPersistenceKey=la("persistence",n.apiKey,o),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(a){return this.persistence._set(this.fullUserKey,a.toJSON())}async getCurrentUser(){const a=await this.persistence._get(this.fullUserKey);return a?ra._fromJSON(this.auth,a):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(a){if(this.persistence===a)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=a,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(a,e,i="authUser"){if(!e.length)return new ua(S(sa),a,i);const n=(await Promise.all(e.map((async a=>{if(await a._isAvailable())return a})))).filter((a=>a));let o=n[0]||S(sa);const r=la(i,a.config.apiKey,a.name);let t=null;for(const u of e)try{const e=await u._get(r);if(e){const i=ra._fromJSON(a,e);u!==o&&(t=i),o=u;break}}catch(l){}const s=n.filter((a=>a._shouldAllowMigration));return o._shouldAllowMigration&&s.length?(o=s[0],t&&await o._set(r,t.toJSON()),await Promise.all(e.map((async a=>{if(a!==o)try{await a._remove(r)}catch(l){}}))),new ua(o,a,i)):new ua(o,a,i)}}
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
 */function ca(a){const e=a.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(da(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ka(e))return"Blackberry";if(ga(e))return"Webos";if(ma(e))return"Safari";if((e.includes("chrome/")||ha(e))&&!e.includes("edge/"))return"Chrome";if(va(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=a.match(e);if(2===(null===i||void 0===i?void 0:i.length))return i[1]}return"Other"}function da(a=(0,n.z$)()){return/firefox\//i.test(a)}function ma(a=(0,n.z$)()){const e=a.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ha(a=(0,n.z$)()){return/crios\//i.test(a)}function pa(a=(0,n.z$)()){return/iemobile/i.test(a)}function va(a=(0,n.z$)()){return/android/i.test(a)}function ka(a=(0,n.z$)()){return/blackberry/i.test(a)}function ga(a=(0,n.z$)()){return/webos/i.test(a)}function fa(a=(0,n.z$)()){return/iphone|ipad|ipod/i.test(a)}function ba(a=(0,n.z$)()){var e;return fa(a)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function ya(){return(0,n.w1)()&&10===document.documentMode}function Sa(a=(0,n.z$)()){return fa(a)||va(a)||ga(a)||ka(a)||/windows phone/i.test(a)||pa(a)}function Ma(){try{return!(!window||window===window.top)}catch(a){return!1}}
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
 */function Aa(a,e=[]){let i;switch(a){case"Browser":i=ca((0,n.z$)());break;case"Worker":i=`${ca((0,n.z$)())}-${a}`;break;default:i=a}const r=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${o.Jn}/${r}`}
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
 */class Ba{constructor(a,e){this.app=a,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pa(this),this.idTokenSubscription=new Pa(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=a.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(a,e){return e&&(this._popupRedirectResolver=S(e)),this._initializationPromise=this.queue((async()=>{var i;this._deleted||(this.persistenceManager=await ua.create(this,a),this._deleted||((null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const a=await this.assertedPersistence.getCurrentUser();return this.currentUser||a?this.currentUser&&a&&this.currentUser.uid===a.uid?(this._currentUser._assign(a),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(a):void 0}async initializeCurrentUser(a){var e;let i=await this.assertedPersistence.getCurrentUser();if(a&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,o=null===i||void 0===i?void 0:i._redirectEventId,r=await this.tryRedirectSignIn(a);n&&n!==o||!(null===r||void 0===r?void 0:r.user)||(i=r.user)}return i?i._redirectEventId?(g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(a){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,a,!0)}catch(i){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(a){try{await Q(a)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(a)}useDeviceLanguage(){this.languageCode=K()}async _delete(){this._deleted=!0}async updateCurrentUser(a){const e=a?(0,n.m9)(a):null;return e&&g(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(a){if(!this._deleted)return a&&g(this.tenantId===a.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(a),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(a){return this.queue((async()=>{await this.assertedPersistence.setPersistence(S(a))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(a){this._errorFactory=new n.LL("auth","Firebase",a())}onAuthStateChanged(a,e,i){return this.registerStateListener(this.authStateSubscription,a,e,i)}onIdTokenChanged(a,e,i){return this.registerStateListener(this.idTokenSubscription,a,e,i)}toJSON(){var a;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(a=this._currentUser)||void 0===a?void 0:a.toJSON()}}async _setRedirectUser(a,e){const i=await this.getOrInitRedirectPersistenceManager(e);return null===a?i.removeCurrentUser():i.setCurrentUser(a)}async getOrInitRedirectPersistenceManager(a){if(!this.redirectPersistenceManager){const e=a&&S(a)||this._popupRedirectResolver;g(e,this,"argument-error"),this.redirectPersistenceManager=await ua.create(this,[S(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(a){var e,i;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===a?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===a?this.redirectUser:null}async _persistUserIfCurrent(a){if(a===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(a)))}_notifyListenersIfCurrent(a){a===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var a,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=null!==(e=null===(a=this.currentUser)||void 0===a?void 0:a.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(a,e,i,n){if(this._deleted)return()=>{};const o="function"===typeof e?e:e.next.bind(e),r=this._isInitialized?Promise.resolve():this._initializationPromise;return g(r,this,"internal-error"),r.then((()=>o(this.currentUser))),"function"===typeof e?a.addObserver(e,i,n):a.addObserver(e)}async directlySetCurrentUser(a){this.currentUser&&this.currentUser!==a&&(this._currentUser._stopProactiveRefresh(),a&&this.isProactiveRefreshEnabled&&a._startProactiveRefresh()),this.currentUser=a,a?await this.assertedPersistence.setCurrentUser(a):await this.assertedPersistence.removeCurrentUser()}queue(a){return this.operations=this.operations.then(a,a),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(a){a&&!this.frameworks.includes(a)&&(this.frameworks.push(a),this.frameworks.sort(),this.clientVersion=Aa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function ja(a){return(0,n.m9)(a)}class Pa{constructor(a){this.auth=a,this.observer=null,this.addObserver=(0,n.ne)((a=>this.observer=a))}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
class xa{constructor(a,e){this.providerId=a,this.signInMethod=e}toJSON(){return f("not implemented")}_getIdTokenResponse(a){return f("not implemented")}_linkToIdToken(a,e){return f("not implemented")}_getReauthenticationResolver(a){return f("not implemented")}}
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
 */async function Ka(a,e){return _(a,"POST","/v1/accounts:update",e)}
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
async function Ta(a,e){return D(a,"POST","/v1/accounts:signInWithPassword",N(a,e))}
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
async function Ca(a,e){return D(a,"POST","/v1/accounts:signInWithEmailLink",N(a,e))}async function wa(a,e){return D(a,"POST","/v1/accounts:signInWithEmailLink",N(a,e))}
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
 */class La extends xa{constructor(a,e,i,n=null){super("password",i),this._email=a,this._password=e,this._tenantId=n}static _fromEmailAndPassword(a,e){return new La(a,e,"password")}static _fromEmailAndCode(a,e,i=null){return new La(a,e,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(a){const e="string"===typeof a?JSON.parse(a):a;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(a){switch(this.signInMethod){case"password":return Ta(a,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ca(a,{email:this._email,oobCode:this._password});default:h(a,"internal-error")}}async _linkToIdToken(a,e){switch(this.signInMethod){case"password":return Ka(a,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return wa(a,{idToken:e,email:this._email,oobCode:this._password});default:h(a,"internal-error")}}_getReauthenticationResolver(a){return this._getIdTokenResponse(a)}}
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
 */async function za(a,e){return D(a,"POST","/v1/accounts:signInWithIdp",N(a,e))}
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
 */const Na="http://localhost";class _a extends xa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(a){const e=new _a(a.providerId,a.signInMethod);return a.idToken||a.accessToken?(a.idToken&&(e.idToken=a.idToken),a.accessToken&&(e.accessToken=a.accessToken),a.nonce&&!a.pendingToken&&(e.nonce=a.nonce),a.pendingToken&&(e.pendingToken=a.pendingToken)):a.oauthToken&&a.oauthTokenSecret?(e.accessToken=a.oauthToken,e.secret=a.oauthTokenSecret):h("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(a){const e="string"===typeof a?JSON.parse(a):a,{providerId:i,signInMethod:n}=e,o=(0,r._T)(e,["providerId","signInMethod"]);if(!i||!n)return null;const t=new _a(i,n);return t.idToken=o.idToken||void 0,t.accessToken=o.accessToken||void 0,t.secret=o.secret,t.nonce=o.nonce,t.pendingToken=o.pendingToken||null,t}_getIdTokenResponse(a){const e=this.buildRequest();return za(a,e)}_linkToIdToken(a,e){const i=this.buildRequest();return i.idToken=e,za(a,i)}_getReauthenticationResolver(a){const e=this.buildRequest();return e.autoCreate=!1,za(a,e)}buildRequest(){const a={requestUri:Na,returnSecureToken:!0};if(this.pendingToken)a.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),a.postBody=(0,n.xO)(e)}return a}}
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
 */async function Ra(a,e){return _(a,"POST","/v1/accounts:sendVerificationCode",N(a,e))}async function Da(a,e){return D(a,"POST","/v1/accounts:signInWithPhoneNumber",N(a,e))}async function Ha(a,e){const i=await D(a,"POST","/v1/accounts:signInWithPhoneNumber",N(a,e));if(i.temporaryProof)throw V(a,"account-exists-with-different-credential",i);return i}const Ea={["USER_NOT_FOUND"]:"user-not-found"};async function Va(a,e){const i=Object.assign(Object.assign({},e),{operation:"REAUTH"});return D(a,"POST","/v1/accounts:signInWithPhoneNumber",N(a,i),Ea)}
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
 */class Ga extends xa{constructor(a){super("phone","phone"),this.params=a}static _fromVerification(a,e){return new Ga({verificationId:a,verificationCode:e})}static _fromTokenResponse(a,e){return new Ga({phoneNumber:a,temporaryProof:e})}_getIdTokenResponse(a){return Da(a,this._makeVerificationRequest())}_linkToIdToken(a,e){return Ha(a,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(a){return Va(a,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:a,phoneNumber:e,verificationId:i,verificationCode:n}=this.params;return a&&e?{temporaryProof:a,phoneNumber:e}:{sessionInfo:i,code:n}}toJSON(){const a={providerId:this.providerId};return this.params.phoneNumber&&(a.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(a.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(a.verificationCode=this.params.verificationCode),this.params.verificationId&&(a.verificationId=this.params.verificationId),a}static fromJSON(a){"string"===typeof a&&(a=JSON.parse(a));const{verificationId:e,verificationCode:i,phoneNumber:n,temporaryProof:o}=a;return i||e||n||o?new Ga({verificationId:e,verificationCode:i,phoneNumber:n,temporaryProof:o}):null}}
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
 */function Fa(a){switch(a){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ia(a){const e=(0,n.zd)((0,n.pd)(a))["link"],i=e?(0,n.zd)((0,n.pd)(e))["deep_link_id"]:null,o=(0,n.zd)((0,n.pd)(a))["deep_link_id"],r=o?(0,n.zd)((0,n.pd)(o))["link"]:null;return r||o||i||e||a}class Ja{constructor(a){var e,i,o,r,t,s;const l=(0,n.zd)((0,n.pd)(a)),u=null!==(e=l["apiKey"])&&void 0!==e?e:null,c=null!==(i=l["oobCode"])&&void 0!==i?i:null,d=Fa(null!==(o=l["mode"])&&void 0!==o?o:null);g(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=null!==(r=l["continueUrl"])&&void 0!==r?r:null,this.languageCode=null!==(t=l["languageCode"])&&void 0!==t?t:null,this.tenantId=null!==(s=l["tenantId"])&&void 0!==s?s:null}static parseLink(a){const e=Ia(a);try{return new Ja(e)}catch(i){return null}}}
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
class Oa{constructor(){this.providerId=Oa.PROVIDER_ID}static credential(a,e){return La._fromEmailAndPassword(a,e)}static credentialWithLink(a,e){const i=Ja.parseLink(e);return g(i,"argument-error"),La._fromEmailAndCode(a,i.code,i.tenantId)}}Oa.PROVIDER_ID="password",Oa.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Oa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Ua{constructor(a){this.providerId=a,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(a){this.defaultLanguageCode=a}setCustomParameters(a){return this.customParameters=a,this}getCustomParameters(){return this.customParameters}}
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
 */class Za extends Ua{constructor(){super(...arguments),this.scopes=[]}addScope(a){return this.scopes.includes(a)||this.scopes.push(a),this}getScopes(){return[...this.scopes]}}
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
class Wa extends Za{constructor(){super("facebook.com")}static credential(a){return _a._fromParams({providerId:Wa.PROVIDER_ID,signInMethod:Wa.FACEBOOK_SIGN_IN_METHOD,accessToken:a})}static credentialFromResult(a){return Wa.credentialFromTaggedObject(a)}static credentialFromError(a){return Wa.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a||!("oauthAccessToken"in a))return null;if(!a.oauthAccessToken)return null;try{return Wa.credential(a.oauthAccessToken)}catch(e){return null}}}Wa.FACEBOOK_SIGN_IN_METHOD="facebook.com",Wa.PROVIDER_ID="facebook.com";
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
class qa extends Za{constructor(){super("google.com"),this.addScope("profile")}static credential(a,e){return _a._fromParams({providerId:qa.PROVIDER_ID,signInMethod:qa.GOOGLE_SIGN_IN_METHOD,idToken:a,accessToken:e})}static credentialFromResult(a){return qa.credentialFromTaggedObject(a)}static credentialFromError(a){return qa.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;const{oauthIdToken:e,oauthAccessToken:i}=a;if(!e&&!i)return null;try{return qa.credential(e,i)}catch(n){return null}}}qa.GOOGLE_SIGN_IN_METHOD="google.com",qa.PROVIDER_ID="google.com";
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
class Ya extends Za{constructor(){super("github.com")}static credential(a){return _a._fromParams({providerId:Ya.PROVIDER_ID,signInMethod:Ya.GITHUB_SIGN_IN_METHOD,accessToken:a})}static credentialFromResult(a){return Ya.credentialFromTaggedObject(a)}static credentialFromError(a){return Ya.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a||!("oauthAccessToken"in a))return null;if(!a.oauthAccessToken)return null;try{return Ya.credential(a.oauthAccessToken)}catch(e){return null}}}Ya.GITHUB_SIGN_IN_METHOD="github.com",Ya.PROVIDER_ID="github.com";
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
class $a extends Za{constructor(){super("twitter.com")}static credential(a,e){return _a._fromParams({providerId:$a.PROVIDER_ID,signInMethod:$a.TWITTER_SIGN_IN_METHOD,oauthToken:a,oauthTokenSecret:e})}static credentialFromResult(a){return $a.credentialFromTaggedObject(a)}static credentialFromError(a){return $a.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;const{oauthAccessToken:e,oauthTokenSecret:i}=a;if(!e||!i)return null;try{return $a.credential(e,i)}catch(n){return null}}}
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
async function Qa(a,e){return D(a,"POST","/v1/accounts:signUp",N(a,e))}
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
 */$a.TWITTER_SIGN_IN_METHOD="twitter.com",$a.PROVIDER_ID="twitter.com";class Xa{constructor(a){this.user=a.user,this.providerId=a.providerId,this._tokenResponse=a._tokenResponse,this.operationType=a.operationType}static async _fromIdTokenResponse(a,e,i,n=!1){const o=await ra._fromIdTokenResponse(a,i,n),r=ae(i),t=new Xa({user:o,providerId:r,_tokenResponse:i,operationType:e});return t}static async _forOperation(a,e,i){await a._updateTokensIfNecessary(i,!0);const n=ae(i);return new Xa({user:a,providerId:n,_tokenResponse:i,operationType:e})}}function ae(a){return a.providerId?a.providerId:"phoneNumber"in a?"phone":null}
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
class ee extends n.ZR{constructor(a,e,i,n){var o;super(e.code,e.message),this.operationType=i,this.user=n,Object.setPrototypeOf(this,ee.prototype),this.customData={appName:a.name,tenantId:null!==(o=a.tenantId)&&void 0!==o?o:void 0,_serverResponse:e.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(a,e,i,n){return new ee(a,e,i,n)}}function ie(a,e,i,n){const o="reauthenticate"===e?i._getReauthenticationResolver(a):i._getIdTokenResponse(a);return o.catch((i=>{if("auth/multi-factor-auth-required"===i.code)throw ee._fromErrorAndOperation(a,i,e,n);throw i}))}
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
 */async function ne(a,e,i=!1){const n=await W(a,e._linkToIdToken(a.auth,await a.getIdToken()),i);return Xa._forOperation(a,"link",n)}
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
async function oe(a,e,i=!1){const{auth:n}=a,o="reauthenticate";try{const r=await W(a,ie(n,o,e,a),i);g(r.idToken,n,"internal-error");const t=U(r.idToken);g(t,n,"internal-error");const{sub:s}=t;return g(a.uid===s,n,"user-mismatch"),Xa._forOperation(a,o,r)}catch(r){throw"auth/user-not-found"===(null===r||void 0===r?void 0:r.code)&&h(n,"user-mismatch"),r}}
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
 */async function re(a,e,i=!1){const n="signIn",o=await ie(a,n,e),r=await Xa._fromIdTokenResponse(a,n,o);return i||await a._updateCurrentUser(r.user),r}async function te(a,e,i){const n=ja(a),o=await Qa(n,{returnSecureToken:!0,email:e,password:i}),r=await Xa._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(r.user),r}
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
function se(a,e){return _(a,"POST","/v2/accounts/mfaEnrollment:start",N(a,e))}function le(a,e){return _(a,"POST","/v2/accounts/mfaEnrollment:finalize",N(a,e))}new WeakMap;const ue="__sak";
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
 */class ce{constructor(a,e){this.storageRetriever=a,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(ue,"1"),this.storage.removeItem(ue),Promise.resolve(!0)):Promise.resolve(!1)}catch(a){return Promise.resolve(!1)}}_set(a,e){return this.storage.setItem(a,JSON.stringify(e)),Promise.resolve()}_get(a){const e=this.storage.getItem(a);return Promise.resolve(e?JSON.parse(e):null)}_remove(a){return this.storage.removeItem(a),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */function de(){const a=(0,n.z$)();return ma(a)||fa(a)}const me=1e3,he=10;class pe extends ce{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(a,e)=>this.onStorageEvent(a,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=de()&&Ma(),this.fallbackToPolling=Sa(),this._shouldAllowMigration=!0}forAllChangedKeys(a){for(const e of Object.keys(this.listeners)){const i=this.storage.getItem(e),n=this.localCache[e];i!==n&&a(e,n,i)}}onStorageEvent(a,e=!1){if(!a.key)return void this.forAllChangedKeys(((a,e,i)=>{this.notifyListeners(a,i)}));const i=a.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(i);if(a.newValue!==n)null!==a.newValue?this.storage.setItem(i,a.newValue):this.storage.removeItem(i);else if(this.localCache[i]===a.newValue&&!e)return}const n=()=>{const a=this.storage.getItem(i);(e||this.localCache[i]!==a)&&this.notifyListeners(i,a)},o=this.storage.getItem(i);ya()&&o!==a.newValue&&a.newValue!==a.oldValue?setTimeout(n,he):n()}notifyListeners(a,e){this.localCache[a]=e;const i=this.listeners[a];if(i)for(const n of Array.from(i))n(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((a,e,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:a,oldValue:e,newValue:i}),!0)}))}),me)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(a,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[a]||(this.listeners[a]=new Set,this.localCache[a]=this.storage.getItem(a)),this.listeners[a].add(e)}_removeListener(a,e){this.listeners[a]&&(this.listeners[a].delete(e),0===this.listeners[a].size&&delete this.listeners[a]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(a,e){await super._set(a,e),this.localCache[a]=JSON.stringify(e)}async _get(a){const e=await super._get(a);return this.localCache[a]=JSON.stringify(e),e}async _remove(a){await super._remove(a),delete this.localCache[a]}}pe.type="LOCAL";const ve=pe;
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
 */class ke extends ce{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(a,e){}_removeListener(a,e){}}ke.type="SESSION";const ge=ke;
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
 */function fe(a){return Promise.all(a.map((async a=>{try{const e=await a;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
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
 */class be{constructor(a){this.eventTarget=a,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(a){const e=this.receivers.find((e=>e.isListeningto(a)));if(e)return e;const i=new be(a);return this.receivers.push(i),i}isListeningto(a){return this.eventTarget===a}async handleEvent(a){const e=a,{eventId:i,eventType:n,data:o}=e.data,r=this.handlersMap[n];if(!(null===r||void 0===r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:i,eventType:n});const t=Array.from(r).map((async a=>a(e.origin,o))),s=await fe(t);e.ports[0].postMessage({status:"done",eventId:i,eventType:n,response:s})}_subscribe(a,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[a]||(this.handlersMap[a]=new Set),this.handlersMap[a].add(e)}_unsubscribe(a,e){this.handlersMap[a]&&e&&this.handlersMap[a].delete(e),e&&0!==this.handlersMap[a].size||delete this.handlersMap[a],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function ye(a="",e=10){let i="";for(let n=0;n<e;n++)i+=Math.floor(10*Math.random());return a+i}
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
 */be.receivers=[];class Se{constructor(a){this.target=a,this.handlers=new Set}removeMessageHandler(a){a.messageChannel&&(a.messageChannel.port1.removeEventListener("message",a.onMessage),a.messageChannel.port1.close()),this.handlers.delete(a)}async _send(a,e,i=50){const n="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let o,r;return new Promise(((t,s)=>{const l=ye("",20);n.port1.start();const u=setTimeout((()=>{s(new Error("unsupported_event"))}),i);r={messageChannel:n,onMessage(a){const e=a;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),o=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(o),t(e.data.response);break;default:clearTimeout(u),clearTimeout(o),s(new Error("invalid_response"));break}}},this.handlers.add(r),n.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:a,eventId:l,data:e},[n.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
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
 */function Me(){return window}function Ae(a){Me().location.href=a}
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
 */function Be(){return"undefined"!==typeof Me()["WorkerGlobalScope"]&&"function"===typeof Me()["importScripts"]}async function je(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const a=await navigator.serviceWorker.ready;return a.active}catch(a){return null}}function Pe(){var a;return(null===(a=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===a?void 0:a.controller)||null}function xe(){return Be()?self:null}
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
 */const Ke="firebaseLocalStorageDb",Te=1,Ce="firebaseLocalStorage",we="fbase_key";class Le{constructor(a){this.request=a}toPromise(){return new Promise(((a,e)=>{this.request.addEventListener("success",(()=>{a(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function ze(a,e){return a.transaction([Ce],e?"readwrite":"readonly").objectStore(Ce)}function Ne(){const a=indexedDB.deleteDatabase(Ke);return new Le(a).toPromise()}function _e(){const a=indexedDB.open(Ke,Te);return new Promise(((e,i)=>{a.addEventListener("error",(()=>{i(a.error)})),a.addEventListener("upgradeneeded",(()=>{const e=a.result;try{e.createObjectStore(Ce,{keyPath:we})}catch(n){i(n)}})),a.addEventListener("success",(async()=>{const i=a.result;i.objectStoreNames.contains(Ce)?e(i):(i.close(),await Ne(),e(await _e()))}))}))}async function Re(a,e,i){const n=ze(a,!0).put({[we]:e,value:i});return new Le(n).toPromise()}async function De(a,e){const i=ze(a,!1).get(e),n=await new Le(i).toPromise();return void 0===n?null:n.value}function He(a,e){const i=ze(a,!0).delete(e);return new Le(i).toPromise()}const Ee=800,Ve=3;class Ge{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await _e()),this.db}async _withRetries(a){let e=0;while(1)try{const e=await this._openDb();return await a(e)}catch(i){if(e++>Ve)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Be()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=be._getInstance(xe()),this.receiver._subscribe("keyChanged",(async(a,e)=>{const i=await this._poll();return{keyProcessed:i.includes(e.key)}})),this.receiver._subscribe("ping",(async(a,e)=>["keyChanged"]))}async initializeSender(){var a,e;if(this.activeServiceWorker=await je(),!this.activeServiceWorker)return;this.sender=new Se(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&(null===(a=i[0])||void 0===a?void 0:a.fulfilled)&&(null===(e=i[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(a){if(this.sender&&this.activeServiceWorker&&Pe()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:a},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const a=await _e();return await Re(a,ue,"1"),await He(a,ue),!0}catch(a){}return!1}async _withPendingWrite(a){this.pendingWrites++;try{await a()}finally{this.pendingWrites--}}async _set(a,e){return this._withPendingWrite((async()=>(await this._withRetries((i=>Re(i,a,e))),this.localCache[a]=e,this.notifyServiceWorker(a))))}async _get(a){const e=await this._withRetries((e=>De(e,a)));return this.localCache[a]=e,e}async _remove(a){return this._withPendingWrite((async()=>(await this._withRetries((e=>He(e,a))),delete this.localCache[a],this.notifyServiceWorker(a))))}async _poll(){const a=await this._withRetries((a=>{const e=ze(a,!1).getAll();return new Le(e).toPromise()}));if(!a)return[];if(0!==this.pendingWrites)return[];const e=[],i=new Set;for(const{fbase_key:n,value:o}of a)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(o)&&(this.notifyListeners(n,o),e.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!i.has(n)&&(this.notifyListeners(n,null),e.push(n));return e}notifyListeners(a,e){this.localCache[a]=e;const i=this.listeners[a];if(i)for(const n of Array.from(i))n(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Ee)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(a,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[a]||(this.listeners[a]=new Set,this._get(a)),this.listeners[a].add(e)}_removeListener(a,e){this.listeners[a]&&(this.listeners[a].delete(e),0===this.listeners[a].size&&delete this.listeners[a]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ge.type="LOCAL";const Fe=Ge;
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
 */function Ie(a,e){return _(a,"POST","/v2/accounts/mfaSignIn:start",N(a,e))}function Je(a,e){return _(a,"POST","/v2/accounts/mfaSignIn:finalize",N(a,e))}
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
function Oe(){var a,e;return null!==(e=null===(a=document.getElementsByTagName("head"))||void 0===a?void 0:a[0])&&void 0!==e?e:document}function Ue(a){return new Promise(((e,i)=>{const n=document.createElement("script");n.setAttribute("src",a),n.onload=e,n.onerror=a=>{const e=p("internal-error");e.customData=a,i(e)},n.type="text/javascript",n.charset="UTF-8",Oe().appendChild(n)}))}function Ze(a){return`__${a}${Math.floor(1e6*Math.random())}`}
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
Ze("rcb"),new T(3e4,6e4);
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
const We="recaptcha";async function qe(a,e,i){var n;const o=await i.verify();try{let r;if(g("string"===typeof o,a,"argument-error"),g(i.type===We,a,"argument-error"),r="string"===typeof e?{phoneNumber:e}:e,"session"in r){const e=r.session;if("phoneNumber"in r){g("enroll"===e.type,a,"internal-error");const i=await se(a,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:o}});return i.phoneSessionInfo.sessionInfo}{g("signin"===e.type,a,"internal-error");const i=(null===(n=r.multiFactorHint)||void 0===n?void 0:n.uid)||r.multiFactorUid;g(i,a,"missing-multi-factor-info");const t=await Ie(a,{mfaPendingCredential:e.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:o}});return t.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Ra(a,{phoneNumber:r.phoneNumber,recaptchaToken:o});return e}}finally{i._reset()}}
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
class Ye{constructor(a){this.providerId=Ye.PROVIDER_ID,this.auth=ja(a)}verifyPhoneNumber(a,e){return qe(this.auth,a,(0,n.m9)(e))}static credential(a,e){return Ga._fromVerification(a,e)}static credentialFromResult(a){const e=a;return Ye.credentialFromTaggedObject(e)}static credentialFromError(a){return Ye.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;const{phoneNumber:e,temporaryProof:i}=a;return e&&i?Ga._fromTokenResponse(e,i):null}}
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
function $e(a,e){return e?S(e):(g(a._popupRedirectResolver,a,"argument-error"),a._popupRedirectResolver)}
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
 */Ye.PROVIDER_ID="phone",Ye.PHONE_SIGN_IN_METHOD="phone";class Qe extends xa{constructor(a){super("custom","custom"),this.params=a}_getIdTokenResponse(a){return za(a,this._buildIdpRequest())}_linkToIdToken(a,e){return za(a,this._buildIdpRequest(e))}_getReauthenticationResolver(a){return za(a,this._buildIdpRequest())}_buildIdpRequest(a){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return a&&(e.idToken=a),e}}function Xe(a){return re(a.auth,new Qe(a),a.bypassAuthState)}function ai(a){const{auth:e,user:i}=a;return g(i,e,"internal-error"),oe(i,new Qe(a),a.bypassAuthState)}async function ei(a){const{auth:e,user:i}=a;return g(i,e,"internal-error"),ne(i,new Qe(a),a.bypassAuthState)}
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
 */class ii{constructor(a,e,i,n,o=!1){this.auth=a,this.resolver=i,this.user=n,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(a,e)=>{this.pendingPromise={resolve:a,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}}))}async onAuthEvent(a){const{urlResponse:e,sessionId:i,postBody:n,tenantId:o,error:r,type:t}=a;if(r)return void this.reject(r);const s={auth:this.auth,requestUri:e,sessionId:i,tenantId:o||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(t)(s))}catch(l){this.reject(l)}}onError(a){this.reject(a)}getIdpTask(a){switch(a){case"signInViaPopup":case"signInViaRedirect":return Xe;case"linkViaPopup":case"linkViaRedirect":return ei;case"reauthViaPopup":case"reauthViaRedirect":return ai;default:h(this.auth,"internal-error")}}resolve(a){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(a),this.unregisterAndCleanUp()}reject(a){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(a),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const ni=new T(2e3,1e4);class oi extends ii{constructor(a,e,i,n,o){super(a,e,n,o),this.provider=i,this.authWindow=null,this.pollId=null,oi.currentPopupAction&&oi.currentPopupAction.cancel(),oi.currentPopupAction=this}async executeNotNull(){const a=await this.execute();return g(a,this.auth,"internal-error"),a}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const a=ye();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],a),this.authWindow.associatedEvent=a,this.resolver._originValidation(this.auth).catch((a=>{this.reject(a)})),this.resolver._isIframeWebStorageSupported(this.auth,(a=>{a||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var a;return(null===(a=this.authWindow)||void 0===a?void 0:a.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oi.currentPopupAction=null}pollUserCancellation(){const a=()=>{var e,i;(null===(i=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===i?void 0:i.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(a,ni.get())};a()}}oi.currentPopupAction=null;
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
const ri="pendingRedirect",ti=new Map;class si extends ii{constructor(a,e,i=!1){super(a,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,i),this.eventId=null}async execute(){let a=ti.get(this.auth._key());if(!a){try{const e=await li(this.resolver,this.auth),i=e?await super.execute():null;a=()=>Promise.resolve(i)}catch(e){a=()=>Promise.reject(e)}ti.set(this.auth._key(),a)}return this.bypassAuthState||ti.set(this.auth._key(),(()=>Promise.resolve(null))),a()}async onAuthEvent(a){if("signInViaRedirect"===a.type)return super.onAuthEvent(a);if("unknown"!==a.type){if(a.eventId){const e=await this.auth._redirectUserForId(a.eventId);if(e)return this.user=e,super.onAuthEvent(a);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function li(a,e){const i=ci(e),n=ui(a);if(!await n._isAvailable())return!1;const o="true"===await n._get(i);return await n._remove(i),o}function ui(a){return S(a._redirectPersistence)}function ci(a){return la(ri,a.config.apiKey,a.name)}
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
 */async function di(a,e,i=!1){const n=ja(a),o=$e(n,e),r=new si(n,o,i),t=await r.execute();return t&&!i&&(delete t.user._redirectEventId,await n._persistUserIfCurrent(t.user),await n._setRedirectUser(null,e)),t}
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
const mi=6e5;class hi{constructor(a){this.auth=a,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(a){this.consumers.add(a),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,a)&&(this.sendToConsumer(this.queuedRedirectEvent,a),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(a){this.consumers.delete(a)}onEvent(a){if(this.hasEventBeenHandled(a))return!1;let e=!1;return this.consumers.forEach((i=>{this.isEventForConsumer(a,i)&&(e=!0,this.sendToConsumer(a,i),this.saveEventToCache(a))})),this.hasHandledPotentialRedirect||!ki(a)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=a,e=!0)),e}sendToConsumer(a,e){var i;if(a.error&&!vi(a)){const n=(null===(i=a.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";e.onError(p(this.auth,n))}else e.onAuthEvent(a)}isEventForConsumer(a,e){const i=null===e.eventId||!!a.eventId&&a.eventId===e.eventId;return e.filter.includes(a.type)&&i}hasEventBeenHandled(a){return Date.now()-this.lastProcessedEventTime>=mi&&this.cachedEventUids.clear(),this.cachedEventUids.has(pi(a))}saveEventToCache(a){this.cachedEventUids.add(pi(a)),this.lastProcessedEventTime=Date.now()}}function pi(a){return[a.type,a.eventId,a.sessionId,a.tenantId].filter((a=>a)).join("-")}function vi({type:a,error:e}){return"unknown"===a&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function ki(a){switch(a.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vi(a);default:return!1}}
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
 */async function gi(a,e={}){return _(a,"GET","/v1/projects",e)}
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
 */const fi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bi=/^https?/;async function yi(a){if(a.config.emulator)return;const{authorizedDomains:e}=await gi(a);for(const n of e)try{if(Si(n))return}catch(i){}h(a,"unauthorized-domain")}function Si(a){const e=B(),{protocol:i,hostname:n}=new URL(e);if(a.startsWith("chrome-extension://")){const o=new URL(a);return""===o.hostname&&""===n?"chrome-extension:"===i&&a.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===i&&o.hostname===n}if(!bi.test(i))return!1;if(fi.test(a))return n===a;const o=a.replace(/\./g,"\\."),r=new RegExp("^(.+\\."+o+"|"+o+")$","i");return r.test(n)}
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
 */const Mi=new T(3e4,6e4);function Ai(){const a=Me().___jsl;if(null===a||void 0===a?void 0:a.H)for(const e of Object.keys(a.H))if(a.H[e].r=a.H[e].r||[],a.H[e].L=a.H[e].L||[],a.H[e].r=[...a.H[e].L],a.CP)for(let i=0;i<a.CP.length;i++)a.CP[i]=null}function Bi(a){return new Promise(((e,i)=>{var n,o,r;function t(){Ai(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ai(),i(p(a,"network-request-failed"))},timeout:Mi.get()})}if(null===(o=null===(n=Me().gapi)||void 0===n?void 0:n.iframes)||void 0===o?void 0:o.Iframe)e(gapi.iframes.getContext());else{if(!(null===(r=Me().gapi)||void 0===r?void 0:r.load)){const e=Ze("iframefcb");return Me()[e]=()=>{gapi.load?t():i(p(a,"network-request-failed"))},Ue(`https://apis.google.com/js/api.js?onload=${e}`)}t()}})).catch((a=>{throw ji=null,a}))}let ji=null;function Pi(a){return ji=ji||Bi(a),ji}
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
 */const xi=new T(5e3,15e3),Ki="__/auth/iframe",Ti="emulator/auth/iframe",Ci={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true"},wi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Li(a){const e=a.config;g(e.authDomain,a,"auth-domain-config-required");const i=e.emulator?C(e,Ti):`https://${a.config.authDomain}/${Ki}`,r={apiKey:e.apiKey,appName:a.name,v:o.Jn},t=wi.get(a.config.apiHost);t&&(r.eid=t);const s=a._getFrameworks();return s.length&&(r.fw=s.join(",")),`${i}?${(0,n.xO)(r).slice(1)}`}async function zi(a){const e=await Pi(a),i=Me().gapi;return g(i,a,"internal-error"),e.open({where:document.body,url:Li(a),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ci,dontclear:!0},(e=>new Promise((async(i,n)=>{await e.restyle({setHideOnLeave:!1});const o=p(a,"network-request-failed"),r=Me().setTimeout((()=>{n(o)}),xi.get());function t(){Me().clearTimeout(r),i(e)}e.ping(t).then(t,(()=>{n(o)}))}))))}
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
 */const Ni={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_i=500,Ri=600,Di="_blank",Hi="http://localhost";class Ei{constructor(a){this.window=a,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(a){}}}function Vi(a,e,i,o=_i,r=Ri){const t=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-o)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Ni),{width:o.toString(),height:r.toString(),top:t,left:s}),c=(0,n.z$)().toLowerCase();i&&(l=ha(c)?Di:i),da(c)&&(e=e||Hi,u.scrollbars="yes");const d=Object.entries(u).reduce(((a,[e,i])=>`${a}${e}=${i},`),"");if(ba(c)&&"_self"!==l)return Gi(e||"",l),new Ei(null);const m=window.open(e||"",l,d);g(m,a,"popup-blocked");try{m.focus()}catch(h){}return new Ei(m)}function Gi(a,e){const i=document.createElement("a");i.href=a,i.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}
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
 */const Fi="__/auth/handler",Ii="emulator/auth/handler";function Ji(a,e,i,r,t,s){g(a.config.authDomain,a,"auth-domain-config-required"),g(a.config.apiKey,a,"invalid-api-key");const l={apiKey:a.config.apiKey,appName:a.name,authType:i,redirectUrl:r,v:o.Jn,eventId:t};if(e instanceof Ua){e.setDefaultLanguage(a.languageCode),l.providerId=e.providerId||"",(0,n.xb)(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,e]of Object.entries(s||{}))l[a]=e}if(e instanceof Za){const a=e.getScopes().filter((a=>""!==a));a.length>0&&(l.scopes=a.join(","))}a.tenantId&&(l.tid=a.tenantId);const u=l;for(const n of Object.keys(u))void 0===u[n]&&delete u[n];return`${Oi(a)}?${(0,n.xO)(u).slice(1)}`}function Oi({config:a}){return a.emulator?C(a,Ii):`https://${a.authDomain}/${Fi}`}
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
 */const Ui="webStorageSupport";class Zi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ge,this._completeRedirectFn=di}async _openPopup(a,e,i,n){var o;b(null===(o=this.eventManagers[a._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");const r=Ji(a,e,i,B(),n);return Vi(a,r,ye())}async _openRedirect(a,e,i,n){return await this._originValidation(a),Ae(Ji(a,e,i,B(),n)),new Promise((()=>{}))}_initialize(a){const e=a._key();if(this.eventManagers[e]){const{manager:a,promise:i}=this.eventManagers[e];return a?Promise.resolve(a):(b(i,"If manager is not set, promise should be"),i)}const i=this.initAndGetManager(a);return this.eventManagers[e]={promise:i},i}async initAndGetManager(a){const e=await zi(a),i=new hi(a);return e.register("authEvent",(e=>{g(null===e||void 0===e?void 0:e.authEvent,a,"invalid-auth-event");const n=i.onEvent(e.authEvent);return{status:n?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[a._key()]={manager:i},this.iframes[a._key()]=e,i}_isIframeWebStorageSupported(a,e){const i=this.iframes[a._key()];i.send(Ui,{type:Ui},(i=>{var n;const o=null===(n=null===i||void 0===i?void 0:i[0])||void 0===n?void 0:n[Ui];void 0!==o&&e(!!o),h(a,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(a){const e=a._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=yi(a)),this.originValidationPromises[e]}get _shouldInitProactively(){return Sa()||ma()||fa()}}const Wi=Zi;class qi{constructor(a){this.factorId=a}_process(a,e,i){switch(e.type){case"enroll":return this._finalizeEnroll(a,e.credential,i);case"signin":return this._finalizeSignIn(a,e.credential);default:return f("unexpected MultiFactorSessionType")}}}class Yi extends qi{constructor(a){super("phone"),this.credential=a}static _fromCredential(a){return new Yi(a)}_finalizeEnroll(a,e,i){return le(a,{idToken:e,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(a,e){return Je(a,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class $i{constructor(){}static assertion(a){return Yi._fromCredential(a)}}$i.FACTOR_ID="phone";var Qi="@firebase/auth",Xi="0.19.0";
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
class an{constructor(a){this.auth=a,this.internalListeners=new Map}getUid(){var a;return this.assertAuthConfigured(),(null===(a=this.auth.currentUser)||void 0===a?void 0:a.uid)||null}async getToken(a){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(a);return{accessToken:e}}addAuthTokenListener(a){if(this.assertAuthConfigured(),this.internalListeners.has(a))return;const e=this.auth.onIdTokenChanged((e=>{var i;a((null===(i=e)||void 0===i?void 0:i.stsTokenManager.accessToken)||null)}));this.internalListeners.set(a,e),this.updateProactiveRefresh()}removeAuthTokenListener(a){this.assertAuthConfigured();const e=this.internalListeners.get(a);e&&(this.internalListeners.delete(a),e(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function en(a){switch(a){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function nn(a){(0,o.Xd)(new s.wA("auth",((e,{options:i})=>{const n=e.getProvider("app").getImmediate(),{apiKey:o,authDomain:r}=n.options;return(e=>{g(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),g(!(null===r||void 0===r?void 0:r.includes(":")),"argument-error",{appName:e.name});const n={apiKey:o,authDomain:r,clientPlatform:a,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Aa(a)},t=new Ba(e,n);return A(t,i),t})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((a,e,i)=>{const n=a.getProvider("auth-internal");n.initialize()}))),(0,o.Xd)(new s.wA("auth-internal",(a=>{const e=ja(a.getProvider("auth").getImmediate());return(a=>new an(a))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,o.KN)(Qi,Xi,en(a)),(0,o.KN)(Qi,Xi,"esm2017")}
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
 */function on(a=(0,o.Mq)()){const e=(0,o.qX)(a,"auth");return e.isInitialized()?e.getImmediate():M(a,{popupRedirectResolver:Wi,persistence:[Fe,ve,ge]})}nn("Browser")},17429:(a,e,i)=>{"use strict";i.d(e,{wA:()=>r,H0:()=>c});var n=i(28430),o=i(95479),r=function(){function a(a,e,i){this.name=a,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return a.prototype.setInstantiationMode=function(a){return this.instantiationMode=a,this},a.prototype.setMultipleInstances=function(a){return this.multipleInstances=a,this},a.prototype.setServiceProps=function(a){return this.serviceProps=a,this},a.prototype.setInstanceCreatedCallback=function(a){return this.onInstanceCreated=a,this},a}(),t="[DEFAULT]",s=function(){function a(a,e){this.name=a,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return a.prototype.get=function(a){var e=this.normalizeInstanceIdentifier(a);if(!this.instancesDeferred.has(e)){var i=new o.BH;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:e});n&&i.resolve(n)}catch(r){}}return this.instancesDeferred.get(e).promise},a.prototype.getImmediate=function(a){var e,i=this.normalizeInstanceIdentifier(null===a||void 0===a?void 0:a.identifier),n=null!==(e=null===a||void 0===a?void 0:a.optional)&&void 0!==e&&e;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(n)return null;throw o}},a.prototype.getComponent=function(){return this.component},a.prototype.setComponent=function(a){var e,i;if(a.name!==this.name)throw Error("Mismatching Component "+a.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=a,this.shouldAutoInitialize()){if(u(a))try{this.getOrInitializeService({instanceIdentifier:t})}catch(h){}try{for(var o=(0,n.XA)(this.instancesDeferred.entries()),r=o.next();!r.done;r=o.next()){var s=(0,n.CR)(r.value,2),l=s[0],c=s[1],d=this.normalizeInstanceIdentifier(l);try{var m=this.getOrInitializeService({instanceIdentifier:d});c.resolve(m)}catch(h){}}}catch(p){e={error:p}}finally{try{r&&!r.done&&(i=o.return)&&i.call(o)}finally{if(e)throw e.error}}}},a.prototype.clearInstance=function(a){void 0===a&&(a=t),this.instancesDeferred.delete(a),this.instancesOptions.delete(a),this.instances.delete(a)},a.prototype.delete=function(){return(0,n.mG)(this,void 0,void 0,(function(){var a;return(0,n.Jh)(this,(function(e){switch(e.label){case 0:return a=Array.from(this.instances.values()),[4,Promise.all((0,n.ev)((0,n.ev)([],(0,n.CR)(a.filter((function(a){return"INTERNAL"in a})).map((function(a){return a.INTERNAL.delete()})))),(0,n.CR)(a.filter((function(a){return"_delete"in a})).map((function(a){return a._delete()})))))];case 1:return e.sent(),[2]}}))}))},a.prototype.isComponentSet=function(){return null!=this.component},a.prototype.isInitialized=function(a){return void 0===a&&(a=t),this.instances.has(a)},a.prototype.getOptions=function(a){return void 0===a&&(a=t),this.instancesOptions.get(a)||{}},a.prototype.initialize=function(a){var e,i;void 0===a&&(a={});var o=a.options,r=void 0===o?{}:o,t=this.normalizeInstanceIdentifier(a.instanceIdentifier);if(this.isInitialized(t))throw Error(this.name+"("+t+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var s=this.getOrInitializeService({instanceIdentifier:t,options:r});try{for(var l=(0,n.XA)(this.instancesDeferred.entries()),u=l.next();!u.done;u=l.next()){var c=(0,n.CR)(u.value,2),d=c[0],m=c[1],h=this.normalizeInstanceIdentifier(d);t===h&&m.resolve(s)}}catch(p){e={error:p}}finally{try{u&&!u.done&&(i=l.return)&&i.call(l)}finally{if(e)throw e.error}}return s},a.prototype.onInit=function(a,e){var i,n=this.normalizeInstanceIdentifier(e),o=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;o.add(a),this.onInitCallbacks.set(n,o);var r=this.instances.get(n);return r&&a(r,n),function(){o.delete(a)}},a.prototype.invokeOnInitCallbacks=function(a,e){var i,o,r=this.onInitCallbacks.get(e);if(r)try{for(var t=(0,n.XA)(r),s=t.next();!s.done;s=t.next()){var l=s.value;try{l(a,e)}catch(u){}}}catch(c){i={error:c}}finally{try{s&&!s.done&&(o=t.return)&&o.call(t)}finally{if(i)throw i.error}}},a.prototype.getOrInitializeService=function(a){var e=a.instanceIdentifier,i=a.options,n=void 0===i?{}:i,o=this.instances.get(e);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:l(e),options:n}),this.instances.set(e,o),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(o,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,o)}catch(r){}return o||null},a.prototype.normalizeInstanceIdentifier=function(a){return void 0===a&&(a=t),this.component?this.component.multipleInstances?a:t:a},a.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},a}();function l(a){return a===t?void 0:a}function u(a){return"EAGER"===a.instantiationMode}
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
 */var c=function(){function a(a){this.name=a,this.providers=new Map}return a.prototype.addComponent=function(a){var e=this.getProvider(a.name);if(e.isComponentSet())throw new Error("Component "+a.name+" has already been registered with "+this.name);e.setComponent(a)},a.prototype.addOrOverwriteComponent=function(a){var e=this.getProvider(a.name);e.isComponentSet()&&this.providers.delete(a.name),this.addComponent(a)},a.prototype.getProvider=function(a){if(this.providers.has(a))return this.providers.get(a);var e=new s(a,this);return this.providers.set(a,e),e},a.prototype.getProviders=function(){return Array.from(this.providers.values())},a}()},61214:(a,e,i)=>{"use strict";var n=i(97458),o=i(17429),r=i(95479),t=i(93968);const s="@firebase/installations",l="0.5.2",u=1e4,c=`w:${l}`,d="FIS_v2",m="https://firebaseinstallations.googleapis.com/v1",h=36e5,p="installations",v="Installations",k={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},g=new r.LL(p,v,k);function f(a){return a instanceof r.ZR&&a.code.includes("request-failed")}
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
 */function b({projectId:a}){return`${m}/projects/${a}/installations`}function y(a){return{token:a.token,requestStatus:2,expiresIn:j(a.expiresIn),creationTime:Date.now()}}async function S(a,e){const i=await e.json(),n=i.error;return g.create("request-failed",{requestName:a,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function M({apiKey:a}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":a})}function A(a,{refreshToken:e}){const i=M(a);return i.append("Authorization",P(e)),i}async function B(a){const e=await a();return e.status>=500&&e.status<600?a():e}function j(a){return Number(a.replace("s","000"))}function P(a){return`${d} ${a}`}
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
 */async function x(a,{fid:e}){const i=b(a),n=M(a),o={fid:e,authVersion:d,appId:a.appId,sdkVersion:c},r={method:"POST",headers:n,body:JSON.stringify(o)},t=await B((()=>fetch(i,r)));if(t.ok){const a=await t.json(),i={fid:a.fid||e,registrationStatus:2,refreshToken:a.refreshToken,authToken:y(a.authToken)};return i}throw await S("Create Installation",t)}
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
 */function K(a){return new Promise((e=>{setTimeout(e,a)}))}
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
 */function T(a){const e=btoa(String.fromCharCode(...a));return e.replace(/\+/g,"-").replace(/\//g,"_")}
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
 */const C=/^[cdef][\w-]{21}$/,w="";function L(){try{const a=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(a),a[0]=112+a[0]%16;const i=z(a);return C.test(i)?i:w}catch(a){return w}}function z(a){const e=T(a);return e.substr(0,22)}
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
 */function N(a){return`${a.appName}!${a.appId}`}
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
 */const _=new Map;function R(a,e){const i=N(a);D(i,e),H(i,e)}function D(a,e){const i=_.get(a);if(i)for(const n of i)n(e)}function H(a,e){const i=V();i&&i.postMessage({key:a,fid:e}),G()}let E=null;function V(){return!E&&"BroadcastChannel"in self&&(E=new BroadcastChannel("[Firebase] FID Change"),E.onmessage=a=>{D(a.data.key,a.data.fid)}),E}function G(){0===_.size&&E&&(E.close(),E=null)}
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
 */const F="firebase-installations-database",I=1,J="firebase-installations-store";let O=null;function U(){return O||(O=(0,t.openDb)(F,I,(a=>{switch(a.oldVersion){case 0:a.createObjectStore(J)}}))),O}async function Z(a,e){const i=N(a),n=await U(),o=n.transaction(J,"readwrite"),r=o.objectStore(J),t=await r.get(i);return await r.put(e,i),await o.complete,t&&t.fid===e.fid||R(a,e.fid),e}async function W(a){const e=N(a),i=await U(),n=i.transaction(J,"readwrite");await n.objectStore(J).delete(e),await n.complete}async function q(a,e){const i=N(a),n=await U(),o=n.transaction(J,"readwrite"),r=o.objectStore(J),t=await r.get(i),s=e(t);return void 0===s?await r.delete(i):await r.put(s,i),await o.complete,!s||t&&t.fid===s.fid||R(a,s.fid),s}
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
 */async function Y(a){let e;const i=await q(a,(i=>{const n=$(i),o=Q(a,n);return e=o.registrationPromise,o.installationEntry}));return i.fid===w?{installationEntry:await e}:{installationEntry:i,registrationPromise:e}}function $(a){const e=a||{fid:L(),registrationStatus:0};return ia(e)}function Q(a,e){if(0===e.registrationStatus){if(!navigator.onLine){const a=Promise.reject(g.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const i={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=X(a,i);return{installationEntry:i,registrationPromise:n}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:aa(a)}:{installationEntry:e}}async function X(a,e){try{const i=await x(a,e);return Z(a,i)}catch(i){throw f(i)&&409===i.customData.serverCode?await W(a):await Z(a,{fid:e.fid,registrationStatus:0}),i}}async function aa(a){let e=await ea(a);while(1===e.registrationStatus)await K(100),e=await ea(a);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:i}=await Y(a);return i||e}return e}function ea(a){return q(a,(a=>{if(!a)throw g.create("installation-not-found");return ia(a)}))}function ia(a){return na(a)?{fid:a.fid,registrationStatus:0}:a}function na(a){return 1===a.registrationStatus&&a.registrationTime+u<Date.now()}
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
 */async function oa({appConfig:a,platformLoggerProvider:e},i){const n=ra(a,i),o=A(a,i),r=e.getImmediate({optional:!0});r&&o.append("x-firebase-client",r.getPlatformInfoString());const t={installation:{sdkVersion:c}},s={method:"POST",headers:o,body:JSON.stringify(t)},l=await B((()=>fetch(n,s)));if(l.ok){const a=await l.json(),e=y(a);return e}throw await S("Generate Auth Token",l)}function ra(a,{fid:e}){return`${b(a)}/${e}/authTokens:generate`}
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
 */async function ta(a,e=!1){let i;const n=await q(a.appConfig,(n=>{if(!ca(n))throw g.create("not-registered");const o=n.authToken;if(!e&&da(o))return n;if(1===o.requestStatus)return i=sa(a,e),n;{if(!navigator.onLine)throw g.create("app-offline");const e=ha(n);return i=ua(a,e),e}})),o=i?await i:n.authToken;return o}async function sa(a,e){let i=await la(a.appConfig);while(1===i.authToken.requestStatus)await K(100),i=await la(a.appConfig);const n=i.authToken;return 0===n.requestStatus?ta(a,e):n}function la(a){return q(a,(a=>{if(!ca(a))throw g.create("not-registered");const e=a.authToken;return pa(e)?Object.assign(Object.assign({},a),{authToken:{requestStatus:0}}):a}))}async function ua(a,e){try{const i=await oa(a,e),n=Object.assign(Object.assign({},e),{authToken:i});return await Z(a.appConfig,n),i}catch(i){if(!f(i)||401!==i.customData.serverCode&&404!==i.customData.serverCode){const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Z(a.appConfig,i)}else await W(a.appConfig);throw i}}function ca(a){return void 0!==a&&2===a.registrationStatus}function da(a){return 2===a.requestStatus&&!ma(a)}function ma(a){const e=Date.now();return e<a.creationTime||a.creationTime+a.expiresIn<e+h}function ha(a){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},a),{authToken:e})}function pa(a){return 1===a.requestStatus&&a.requestTime+u<Date.now()}
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
 */async function va(a){const e=a,{installationEntry:i,registrationPromise:n}=await Y(e.appConfig);return n?n.catch(console.error):ta(e).catch(console.error),i.fid}
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
 */async function ka(a,e=!1){const i=a;await ga(i.appConfig);const n=await ta(i,e);return n.token}async function ga(a){const{registrationPromise:e}=await Y(a);e&&await e}
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
function fa(a){if(!a||!a.options)throw ba("App Configuration");if(!a.name)throw ba("App Name");const e=["projectId","apiKey","appId"];for(const i of e)if(!a.options[i])throw ba(i);return{appName:a.name,projectId:a.options.projectId,apiKey:a.options.apiKey,appId:a.options.appId}}function ba(a){return g.create("missing-app-config-values",{valueName:a})}
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
 */const ya="installations",Sa="installations-internal",Ma=a=>{const e=a.getProvider("app").getImmediate(),i=fa(e),o=(0,n.qX)(e,"platform-logger"),r={app:e,appConfig:i,platformLoggerProvider:o,_delete:()=>Promise.resolve()};return r},Aa=a=>{const e=a.getProvider("app").getImmediate(),i=(0,n.qX)(e,ya).getImmediate(),o={getId:()=>va(i),getToken:a=>ka(i,a)};return o};function Ba(){(0,n.Xd)(new o.wA(ya,Ma,"PUBLIC")),(0,n.Xd)(new o.wA(Sa,Aa,"PRIVATE"))}Ba(),(0,n.KN)(s,l),(0,n.KN)(s,l,"esm2017")},50004:(a,e,i)=>{"use strict";i.d(e,{in:()=>o,Yd:()=>u});
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
const n=[];var o;(function(a){a[a["DEBUG"]=0]="DEBUG",a[a["VERBOSE"]=1]="VERBOSE",a[a["INFO"]=2]="INFO",a[a["WARN"]=3]="WARN",a[a["ERROR"]=4]="ERROR",a[a["SILENT"]=5]="SILENT"})(o||(o={}));const r={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},t=o.INFO,s={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},l=(a,e,...i)=>{if(e<a.logLevel)return;const n=(new Date).toISOString(),o=s[e];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[o](`[${n}]  ${a.name}:`,...i)};class u{constructor(a){this.name=a,this._logLevel=t,this._logHandler=l,this._userLogHandler=null,n.push(this)}get logLevel(){return this._logLevel}set logLevel(a){if(!(a in o))throw new TypeError(`Invalid value "${a}" assigned to \`logLevel\``);this._logLevel=a}setLogLevel(a){this._logLevel="string"===typeof a?r[a]:a}get logHandler(){return this._logHandler}set logHandler(a){if("function"!==typeof a)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=a}get userLogHandler(){return this._userLogHandler}set userLogHandler(a){this._userLogHandler=a}debug(...a){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...a),this._logHandler(this,o.DEBUG,...a)}log(...a){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...a),this._logHandler(this,o.VERBOSE,...a)}info(...a){this._userLogHandler&&this._userLogHandler(this,o.INFO,...a),this._logHandler(this,o.INFO,...a)}warn(...a){this._userLogHandler&&this._userLogHandler(this,o.WARN,...a),this._logHandler(this,o.WARN,...a)}error(...a){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...a),this._logHandler(this,o.ERROR,...a)}}},95479:(a,e,i)=>{"use strict";i.d(e,{BH:()=>s,LL:()=>f,ZR:()=>g,zI:()=>v,tV:()=>t,$s:()=>_,ne:()=>x,vZ:()=>M,pd:()=>P,m9:()=>R,z$:()=>l,ru:()=>c,xb:()=>S,w1:()=>m,hl:()=>h,uI:()=>u,b$:()=>d,xO:()=>B,zd:()=>j,eu:()=>p});
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
const n=function(a){const e=[];let i=0;for(let n=0;n<a.length;n++){let o=a.charCodeAt(n);o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=63&o|128):55296===(64512&o)&&n+1<a.length&&56320===(64512&a.charCodeAt(n+1))?(o=65536+((1023&o)<<10)+(1023&a.charCodeAt(++n)),e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=63&o|128):(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=63&o|128)}return e},o=function(a){const e=[];let i=0,n=0;while(i<a.length){const o=a[i++];if(o<128)e[n++]=String.fromCharCode(o);else if(o>191&&o<224){const r=a[i++];e[n++]=String.fromCharCode((31&o)<<6|63&r)}else if(o>239&&o<365){const r=a[i++],t=a[i++],s=a[i++],l=((7&o)<<18|(63&r)<<12|(63&t)<<6|63&s)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(1023&l))}else{const r=a[i++],t=a[i++];e[n++]=String.fromCharCode((15&o)<<12|(63&r)<<6|63&t)}}return e.join("")},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(a,e){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let o=0;o<a.length;o+=3){const e=a[o],r=o+1<a.length,t=r?a[o+1]:0,s=o+2<a.length,l=s?a[o+2]:0,u=e>>2,c=(3&e)<<4|t>>4;let d=(15&t)<<2|l>>6,m=63&l;s||(m=64,r||(d=64)),n.push(i[u],i[c],i[d],i[m])}return n.join("")},encodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(a):this.encodeByteArray(n(a),e)},decodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(a):o(this.decodeStringToByteArray(a,e))},decodeStringToByteArray(a,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let o=0;o<a.length;){const e=i[a.charAt(o++)],r=o<a.length,t=r?i[a.charAt(o)]:0;++o;const s=o<a.length,l=s?i[a.charAt(o)]:64;++o;const u=o<a.length,c=u?i[a.charAt(o)]:64;if(++o,null==e||null==t||null==l||null==c)throw Error();const d=e<<2|t>>4;if(n.push(d),64!==l){const a=t<<4&240|l>>2;if(n.push(a),64!==c){const a=l<<6&192|c;n.push(a)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}},t=function(a){try{return r.decodeString(a,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
class s{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((a,e)=>{this.resolve=a,this.reject=e}))}wrapCallback(a){return(e,i)=>{e?this.reject(e):this.resolve(i),"function"===typeof a&&(this.promise.catch((()=>{})),1===a.length?a(e):a(e,i))}}}
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
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function u(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function c(){const a="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof a&&void 0!==a.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function m(){const a=l();return a.indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0}function h(){return"object"===typeof indexedDB}function p(){return new Promise(((a,e)=>{try{let i=!0;const n="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(n);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(n),a(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var a;e((null===(a=o.error)||void 0===a?void 0:a.message)||"")}}catch(i){e(i)}}))}function v(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
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
const k="FirebaseError";class g extends Error{constructor(a,e,i){super(e),this.code=a,this.customData=i,this.name=k,Object.setPrototypeOf(this,g.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,f.prototype.create)}}class f{constructor(a,e,i){this.service=a,this.serviceName=e,this.errors=i}create(a,...e){const i=e[0]||{},n=`${this.service}/${a}`,o=this.errors[a],r=o?b(o,i):"Error",t=`${this.serviceName}: ${r} (${n}).`,s=new g(n,t,i);return s}}function b(a,e){return a.replace(y,((a,i)=>{const n=e[i];return null!=n?String(n):`<${i}?>`}))}const y=/\{\$([^}]+)}/g;
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
 */function S(a){for(const e in a)if(Object.prototype.hasOwnProperty.call(a,e))return!1;return!0}function M(a,e){if(a===e)return!0;const i=Object.keys(a),n=Object.keys(e);for(const o of i){if(!n.includes(o))return!1;const i=a[o],r=e[o];if(A(i)&&A(r)){if(!M(i,r))return!1}else if(i!==r)return!1}for(const o of n)if(!i.includes(o))return!1;return!0}function A(a){return null!==a&&"object"===typeof a}
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
 */function B(a){const e=[];for(const[i,n]of Object.entries(a))Array.isArray(n)?n.forEach((a=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(a))})):e.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function j(a){const e={},i=a.replace(/^\?/,"").split("&");return i.forEach((a=>{if(a){const[i,n]=a.split("=");e[decodeURIComponent(i)]=decodeURIComponent(n)}})),e}function P(a){const e=a.indexOf("?");if(!e)return"";const i=a.indexOf("#",e);return a.substring(e,i>0?i:void 0)}
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
 */function x(a,e){const i=new K(a,e);return i.subscribe.bind(i)}class K{constructor(a,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{a(this)})).catch((a=>{this.error(a)}))}next(a){this.forEachObserver((e=>{e.next(a)}))}error(a){this.forEachObserver((e=>{e.error(a)})),this.close(a)}complete(){this.forEachObserver((a=>{a.complete()})),this.close()}subscribe(a,e,i){let n;if(void 0===a&&void 0===e&&void 0===i)throw new Error("Missing Observer.");n=T(a,["next","error","complete"])?a:{next:a,error:e,complete:i},void 0===n.next&&(n.next=C),void 0===n.error&&(n.error=C),void 0===n.complete&&(n.complete=C);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(a){}})),this.observers.push(n),o}unsubscribeOne(a){void 0!==this.observers&&void 0!==this.observers[a]&&(delete this.observers[a],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(a){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,a)}sendOne(a,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[a])try{e(this.observers[a])}catch(i){"undefined"!==typeof console&&console.error&&console.error(i)}}))}close(a){this.finalized||(this.finalized=!0,void 0!==a&&(this.finalError=a),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function T(a,e){if("object"!==typeof a||null===a)return!1;for(const i of e)if(i in a&&"function"===typeof a[i])return!0;return!1}function C(){}
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
const w=1e3,L=2,z=144e5,N=.5;function _(a,e=w,i=L){const n=e*Math.pow(i,a),o=Math.round(N*n*(Math.random()-.5)*2);return Math.min(z,n+o)}
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
const s="analytics",l="firebase_id",u="origin",c=6e4,d="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",m="https://www.googletagmanager.com/gtag/js",h=new o.Yd("@firebase/analytics");
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
function p(a){return Promise.all(a.map((a=>a.catch((a=>a)))))}function v(a,e){const i=document.createElement("script");i.src=`${m}?l=${a}&id=${e}`,i.async=!0,document.head.appendChild(i)}function k(a){let e=[];return Array.isArray(window[a])?e=window[a]:window[a]=e,e}async function g(a,e,i,n,o,r){const t=n[o];try{if(t)await e[t];else{const a=await p(i),n=a.find((a=>a.measurementId===o));n&&await e[n.appId]}}catch(s){h.error(s)}a("config",o,r)}async function f(a,e,i,n,o){try{let r=[];if(o&&o["send_to"]){let a=o["send_to"];Array.isArray(a)||(a=[a]);const n=await p(i);for(const i of a){const a=n.find((a=>a.measurementId===i)),o=a&&e[a.appId];if(!o){r=[];break}r.push(o)}}0===r.length&&(r=Object.values(e)),await Promise.all(r),a("event",n,o||{})}catch(r){h.error(r)}}function b(a,e,i,n){async function o(o,r,t){try{"event"===o?await f(a,e,i,r,t):"config"===o?await g(a,e,i,n,r,t):a("set",r)}catch(s){h.error(s)}}return o}function y(a,e,i,n,o){let r=function(...a){window[n].push(arguments)};return window[o]&&"function"===typeof window[o]&&(r=window[o]),window[o]=b(r,a,e,i),{gtagCore:r,wrappedGtag:window[o]}}function S(){const a=window.document.getElementsByTagName("script");for(const e of Object.values(a))if(e.src&&e.src.includes(m))return e;return null}
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
 */const M={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},A=new r.LL("analytics","Analytics",M),B=30,j=1e3;class P{constructor(a={},e=j){this.throttleMetadata=a,this.intervalMillis=e}getThrottleMetadata(a){return this.throttleMetadata[a]}setThrottleMetadata(a,e){this.throttleMetadata[a]=e}deleteThrottleMetadata(a){delete this.throttleMetadata[a]}}const x=new P;function K(a){return new Headers({Accept:"application/json","x-goog-api-key":a})}async function T(a){var e;const{appId:i,apiKey:n}=a,o={method:"GET",headers:K(n)},r=d.replace("{app-id}",i),t=await fetch(r,o);if(200!==t.status&&304!==t.status){let a="";try{const i=await t.json();(null===(e=i.error)||void 0===e?void 0:e.message)&&(a=i.error.message)}catch(s){}throw A.create("config-fetch-failed",{httpStatus:t.status,responseMessage:a})}return t.json()}async function C(a,e=x,i){const{appId:n,apiKey:o,measurementId:r}=a.options;if(!n)throw A.create("no-app-id");if(!o){if(r)return{measurementId:r,appId:n};throw A.create("no-api-key")}const t=e.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new N;return setTimeout((async()=>{s.abort()}),void 0!==i?i:c),w({appId:n,apiKey:o,measurementId:r},t,s,e)}async function w(a,{throttleEndTimeMillis:e,backoffCount:i},n,o=x){const{appId:t,measurementId:s}=a;try{await L(n,e)}catch(l){if(s)return h.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${l.message}]`),{appId:t,measurementId:s};throw l}try{const e=await T(a);return o.deleteThrottleMetadata(t),e}catch(l){if(!z(l)){if(o.deleteThrottleMetadata(t),s)return h.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${l.message}]`),{appId:t,measurementId:s};throw l}const e=503===Number(l.customData.httpStatus)?(0,r.$s)(i,o.intervalMillis,B):(0,r.$s)(i,o.intervalMillis),u={throttleEndTimeMillis:Date.now()+e,backoffCount:i+1};return o.setThrottleMetadata(t,u),h.debug(`Calling attemptFetch again in ${e} millis`),w(a,u,n,o)}}function L(a,e){return new Promise(((i,n)=>{const o=Math.max(e-Date.now(),0),r=setTimeout(i,o);a.addEventListener((()=>{clearTimeout(r),n(A.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}function z(a){if(!(a instanceof r.ZR)||!a.customData)return!1;const e=Number(a.customData["httpStatus"]);return 429===e||500===e||503===e||504===e}class N{constructor(){this.listeners=[]}addEventListener(a){this.listeners.push(a)}abort(){this.listeners.forEach((a=>a()))}}
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
 */async function _(){if(!(0,r.hl)())return h.warn(A.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,r.eu)()}catch(a){return h.warn(A.create("indexeddb-unavailable",{errorInfo:a}).message),!1}return!0}async function R(a,e,i,n,o,r,t){var s;const c=C(a);c.then((e=>{i[e.measurementId]=e.appId,a.options.measurementId&&e.measurementId!==a.options.measurementId&&h.warn(`The measurement ID in the local Firebase config (${a.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((a=>h.error(a))),e.push(c);const d=_().then((a=>a?n.getId():void 0)),[m,p]=await Promise.all([c,d]);S()||v(r,m.measurementId),o("js",new Date);const k=null!==(s=null===t||void 0===t?void 0:t.config)&&void 0!==s?s:{};return k[u]="firebase",k.update=!0,null!=p&&(k[l]=p),o("config",m.measurementId,k),m.measurementId}
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
 */class D{constructor(a){this.app=a}_delete(){return delete H[this.app.options.appId],Promise.resolve()}}let H={},E=[];const V={};let G,F,I="dataLayer",J="gtag",O=!1;function U(){const a=[];if((0,r.ru)()&&a.push("This is a browser extension environment."),(0,r.zI)()||a.push("Cookies are not available."),a.length>0){const e=a.map(((a,e)=>`(${e+1}) ${a}`)).join(" "),i=A.create("invalid-analytics-context",{errorInfo:e});h.warn(i.message)}}function Z(a,e,i){U();const n=a.options.appId;if(!n)throw A.create("no-app-id");if(!a.options.apiKey){if(!a.options.measurementId)throw A.create("no-api-key");h.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${a.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=H[n])throw A.create("already-exists",{id:n});if(!O){k(I);const{wrappedGtag:a,gtagCore:e}=y(H,E,V,I,J);F=a,G=e,O=!0}H[n]=R(a,E,V,e,G,I,i);const o=new D(a);return o}
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
 */async function W(a,e,i,n,o){if(o&&o.global)a("event",i,n);else{const o=await e,r=Object.assign(Object.assign({},n),{send_to:o});a("event",i,r)}}function q(a=(0,n.Mq)()){a=(0,r.m9)(a);const e=(0,n.qX)(a,s);return e.isInitialized()?e.getImmediate():Y(a)}function Y(a,e={}){const i=(0,n.qX)(a,s);if(i.isInitialized()){const a=i.getImmediate();if((0,r.vZ)(e,i.getOptions()))return a;throw A.create("already-initialized")}const o=i.initialize({options:e});return o}function $(a,e,i,n){a=(0,r.m9)(a),W(F,H[a.app.options.appId],e,i,n).catch((a=>h.error(a)))}const Q="@firebase/analytics",X="0.7.2";function aa(){function a(a){try{const e=a.getProvider(s).getImmediate();return{logEvent:(a,i,n)=>$(e,a,i,n)}}catch(e){throw A.create("interop-component-reg-failed",{reason:e})}}(0,n.Xd)(new t.wA(s,((a,{options:e})=>{const i=a.getProvider("app").getImmediate(),n=a.getProvider("installations-internal").getImmediate();return Z(i,n,e)}),"PUBLIC")),(0,n.Xd)(new t.wA("analytics-internal",a,"PRIVATE")),(0,n.KN)(Q,X),(0,n.KN)(Q,X,"esm2017")}aa()},5720:(a,e,i)=>{"use strict";i.d(e,{ZF:()=>n.ZF});var n=i(97458),o="firebase",r="9.2.0";
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
(0,n.KN)(o,r,"app")},98511:(a,e,i)=>{"use strict";i.d(e,{v0:()=>n.v0});var n=i(75361)},28127:(a,e,i)=>{"use strict";i.d(e,{ad:()=>Eo});var n,o=i(97458),r=i(17429),t=i(50004),s=(i(95479),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof i.g?i.g:"undefined"!==typeof self?self:{}),l={},u=u||{},c=s||self;function d(){}function m(a){var e=typeof a;return e="object"!=e?e:a?Array.isArray(a)?"array":e:"null","array"==e||"object"==e&&"number"==typeof a.length}function h(a){var e=typeof a;return"object"==e&&null!=a||"function"==e}function p(a){return Object.prototype.hasOwnProperty.call(a,v)&&a[v]||(a[v]=++k)}var v="closure_uid_"+(1e9*Math.random()>>>0),k=0;function g(a,e,i){return a.call.apply(a.bind,arguments)}function f(a,e,i){if(!a)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),a.apply(e,i)}}return function(){return a.apply(e,arguments)}}function b(a,e,i){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g:f,b.apply(null,arguments)}function y(a,e){var i=Array.prototype.slice.call(arguments,1);return function(){var e=i.slice();return e.push.apply(e,arguments),a.apply(this,e)}}function S(a,e){function i(){}i.prototype=e.prototype,a.Z=e.prototype,a.prototype=new i,a.prototype.constructor=a,a.Vb=function(a,i,n){for(var o=Array(arguments.length-2),r=2;r<arguments.length;r++)o[r-2]=arguments[r];return e.prototype[i].apply(a,o)}}function M(){this.s=this.s,this.o=this.o}var A=0,B={};M.prototype.s=!1,M.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=A)){var a=p(this);delete B[a]}},M.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const j=Array.prototype.indexOf?function(a,e){return Array.prototype.indexOf.call(a,e,void 0)}:function(a,e){if("string"===typeof a)return"string"!==typeof e||1!=e.length?-1:a.indexOf(e,0);for(let i=0;i<a.length;i++)if(i in a&&a[i]===e)return i;return-1},P=Array.prototype.forEach?function(a,e,i){Array.prototype.forEach.call(a,e,i)}:function(a,e,i){const n=a.length,o="string"===typeof a?a.split(""):a;for(let r=0;r<n;r++)r in o&&e.call(i,o[r],r,a)};function x(a){a:{var e=Ji;const i=a.length,n="string"===typeof a?a.split(""):a;for(let o=0;o<i;o++)if(o in n&&e.call(void 0,n[o],o,a)){e=o;break a}e=-1}return 0>e?null:"string"===typeof a?a.charAt(e):a[e]}function K(a){return Array.prototype.concat.apply([],arguments)}function T(a){const e=a.length;if(0<e){const i=Array(e);for(let n=0;n<e;n++)i[n]=a[n];return i}return[]}function C(a){return/^[\s\xa0]*$/.test(a)}var w,L=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function z(a,e){return-1!=a.indexOf(e)}function N(a,e){return a<e?-1:a>e?1:0}a:{var _=c.navigator;if(_){var R=_.userAgent;if(R){w=R;break a}}w=""}function D(a,e,i){for(const n in a)e.call(i,a[n],n,a)}function H(a){const e={};for(const i in a)e[i]=a[i];return e}var E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(a,e){let i,n;for(let o=1;o<arguments.length;o++){for(i in n=arguments[o],n)a[i]=n[i];for(let e=0;e<E.length;e++)i=E[e],Object.prototype.hasOwnProperty.call(n,i)&&(a[i]=n[i])}}function G(a){return G[" "](a),a}function F(a){var e=ea;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=a(9)}G[" "]=d;var I,J=z(w,"Opera"),O=z(w,"Trident")||z(w,"MSIE"),U=z(w,"Edge"),Z=U||O,W=z(w,"Gecko")&&!(z(w.toLowerCase(),"webkit")&&!z(w,"Edge"))&&!(z(w,"Trident")||z(w,"MSIE"))&&!z(w,"Edge"),q=z(w.toLowerCase(),"webkit")&&!z(w,"Edge");function Y(){var a=c.document;return a?a.documentMode:void 0}a:{var $="",Q=function(){var a=w;return W?/rv:([^\);]+)(\)|;)/.exec(a):U?/Edge\/([\d\.]+)/.exec(a):O?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a):q?/WebKit\/(\S+)/.exec(a):J?/(?:Version)[ \/]?(\S+)/.exec(a):void 0}();if(Q&&($=Q?Q[1]:""),O){var X=Y();if(null!=X&&X>parseFloat($)){I=String(X);break a}}I=$}var aa,ea={};function ia(){return F((function(){let a=0;const e=L(String(I)).split("."),i=L("9").split("."),n=Math.max(e.length,i.length);for(let t=0;0==a&&t<n;t++){var o=e[t]||"",r=i[t]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==o[0].length&&0==r[0].length)break;a=N(0==o[1].length?0:parseInt(o[1],10),0==r[1].length?0:parseInt(r[1],10))||N(0==o[2].length,0==r[2].length)||N(o[2],r[2]),o=o[3],r=r[3]}while(0==a)}return 0<=a}))}if(c.document&&O){var na=Y();aa=na||(parseInt(I,10)||void 0)}else aa=void 0;var oa=aa,ra=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,e=Object.defineProperty({},"passive",{get:function(){a=!0}});try{c.addEventListener("test",d,e),c.removeEventListener("test",d,e)}catch(i){}return a}();function ta(a,e){this.type=a,this.g=this.target=e,this.defaultPrevented=!1}function sa(a,e){if(ta.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var i=this.type=a.type,n=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=e,e=a.relatedTarget){if(W){a:{try{G(e.nodeName);var o=!0;break a}catch(r){}o=!1}o||(e=null)}}else"mouseover"==i?e=a.fromElement:"mouseout"==i&&(e=a.toElement);this.relatedTarget=e,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType="string"===typeof a.pointerType?a.pointerType:la[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&sa.Z.h.call(this)}}ta.prototype.h=function(){this.defaultPrevented=!0},S(sa,ta);var la={2:"touch",3:"pen",4:"mouse"};sa.prototype.h=function(){sa.Z.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ua="closure_listenable_"+(1e6*Math.random()|0),ca=0;function da(a,e,i,n,o){this.listener=a,this.proxy=null,this.src=e,this.type=i,this.capture=!!n,this.ia=o,this.key=++ca,this.ca=this.fa=!1}function ma(a){a.ca=!0,a.listener=null,a.proxy=null,a.src=null,a.ia=null}function ha(a){this.src=a,this.g={},this.h=0}function pa(a,e){var i=e.type;if(i in a.g){var n,o=a.g[i],r=j(o,e);(n=0<=r)&&Array.prototype.splice.call(o,r,1),n&&(ma(e),0==a.g[i].length&&(delete a.g[i],a.h--))}}function va(a,e,i,n){for(var o=0;o<a.length;++o){var r=a[o];if(!r.ca&&r.listener==e&&r.capture==!!i&&r.ia==n)return o}return-1}ha.prototype.add=function(a,e,i,n,o){var r=a.toString();a=this.g[r],a||(a=this.g[r]=[],this.h++);var t=va(a,e,n,o);return-1<t?(e=a[t],i||(e.fa=!1)):(e=new da(e,this.src,r,!!n,o),e.fa=i,a.push(e)),e};var ka="closure_lm_"+(1e6*Math.random()|0),ga={};function fa(a,e,i,n,o){if(n&&n.once)return Sa(a,e,i,n,o);if(Array.isArray(e)){for(var r=0;r<e.length;r++)fa(a,e[r],i,n,o);return null}return i=Ka(i),a&&a[ua]?a.N(e,i,h(n)?!!n.capture:!!n,o):ba(a,e,i,!1,n,o)}function ba(a,e,i,n,o,r){if(!e)throw Error("Invalid event type");var t=h(o)?!!o.capture:!!o,s=Pa(a);if(s||(a[ka]=s=new ha(a)),i=s.add(e,i,n,t,r),i.proxy)return i;if(n=ya(),i.proxy=n,n.src=a,n.listener=i,a.addEventListener)ra||(o=t),void 0===o&&(o=!1),a.addEventListener(e.toString(),n,o);else if(a.attachEvent)a.attachEvent(Ba(e.toString()),n);else{if(!a.addListener||!a.removeListener)throw Error("addEventListener and attachEvent are unavailable.");a.addListener(n)}return i}function ya(){function a(i){return e.call(a.src,a.listener,i)}var e=ja;return a}function Sa(a,e,i,n,o){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Sa(a,e[r],i,n,o);return null}return i=Ka(i),a&&a[ua]?a.O(e,i,h(n)?!!n.capture:!!n,o):ba(a,e,i,!0,n,o)}function Ma(a,e,i,n,o){if(Array.isArray(e))for(var r=0;r<e.length;r++)Ma(a,e[r],i,n,o);else n=h(n)?!!n.capture:!!n,i=Ka(i),a&&a[ua]?(a=a.i,e=String(e).toString(),e in a.g&&(r=a.g[e],i=va(r,i,n,o),-1<i&&(ma(r[i]),Array.prototype.splice.call(r,i,1),0==r.length&&(delete a.g[e],a.h--)))):a&&(a=Pa(a))&&(e=a.g[e.toString()],a=-1,e&&(a=va(e,i,n,o)),(i=-1<a?e[a]:null)&&Aa(i))}function Aa(a){if("number"!==typeof a&&a&&!a.ca){var e=a.src;if(e&&e[ua])pa(e.i,a);else{var i=a.type,n=a.proxy;e.removeEventListener?e.removeEventListener(i,n,a.capture):e.detachEvent?e.detachEvent(Ba(i),n):e.addListener&&e.removeListener&&e.removeListener(n),(i=Pa(e))?(pa(i,a),0==i.h&&(i.src=null,e[ka]=null)):ma(a)}}}function Ba(a){return a in ga?ga[a]:ga[a]="on"+a}function ja(a,e){if(a.ca)a=!0;else{e=new sa(e,this);var i=a.listener,n=a.ia||a.src;a.fa&&Aa(a),a=i.call(n,e)}return a}function Pa(a){return a=a[ka],a instanceof ha?a:null}var xa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ka(a){return"function"===typeof a?a:(a[xa]||(a[xa]=function(e){return a.handleEvent(e)}),a[xa])}function Ta(){M.call(this),this.i=new ha(this),this.P=this,this.I=null}function Ca(a,e){var i,n=a.I;if(n)for(i=[];n;n=n.I)i.push(n);if(a=a.P,n=e.type||e,"string"===typeof e)e=new ta(e,a);else if(e instanceof ta)e.target=e.target||a;else{var o=e;e=new ta(n,a),V(e,o)}if(o=!0,i)for(var r=i.length-1;0<=r;r--){var t=e.g=i[r];o=wa(t,n,!0,e)&&o}if(t=e.g=a,o=wa(t,n,!0,e)&&o,o=wa(t,n,!1,e)&&o,i)for(r=0;r<i.length;r++)t=e.g=i[r],o=wa(t,n,!1,e)&&o}function wa(a,e,i,n){if(e=a.i.g[String(e)],!e)return!0;e=e.concat();for(var o=!0,r=0;r<e.length;++r){var t=e[r];if(t&&!t.ca&&t.capture==i){var s=t.listener,l=t.ia||t.src;t.fa&&pa(a.i,t),o=!1!==s.call(l,n)&&o}}return o&&!n.defaultPrevented}S(Ta,M),Ta.prototype[ua]=!0,Ta.prototype.removeEventListener=function(a,e,i,n){Ma(this,a,e,i,n)},Ta.prototype.M=function(){if(Ta.Z.M.call(this),this.i){var a,e=this.i;for(a in e.g){for(var i=e.g[a],n=0;n<i.length;n++)ma(i[n]);delete e.g[a],e.h--}}this.I=null},Ta.prototype.N=function(a,e,i,n){return this.i.add(String(a),e,!1,i,n)},Ta.prototype.O=function(a,e,i,n){return this.i.add(String(a),e,!0,i,n)};var La=c.JSON.stringify;function za(){var a=Fa;let e=null;return a.g&&(e=a.g,a.g=a.g.next,a.g||(a.h=null),e.next=null),e}class Na{constructor(){this.h=this.g=null}add(a,e){const i=Ra.get();i.set(a,e),this.h?this.h.next=i:this.g=i,this.h=i}}var _a,Ra=new class{constructor(a,e){this.i=a,this.j=e,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}((()=>new Da),(a=>a.reset()));class Da{constructor(){this.next=this.g=this.h=null}set(a,e){this.h=a,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ha(a){c.setTimeout((()=>{throw a}),0)}function Ea(a,e){_a||Va(),Ga||(_a(),Ga=!0),Fa.add(a,e)}function Va(){var a=c.Promise.resolve(void 0);_a=function(){a.then(Ia)}}var Ga=!1,Fa=new Na;function Ia(){for(var a;a=za();){try{a.h.call(a.g)}catch(i){Ha(i)}var e=Ra;e.j(a),100>e.h&&(e.h++,a.next=e.g,e.g=a)}Ga=!1}function Ja(a,e){Ta.call(this),this.h=a||1,this.g=e||c,this.j=b(this.kb,this),this.l=Date.now()}function Oa(a){a.da=!1,a.S&&(a.g.clearTimeout(a.S),a.S=null)}function Ua(a,e,i){if("function"===typeof a)i&&(a=b(a,i));else{if(!a||"function"!=typeof a.handleEvent)throw Error("Invalid listener argument");a=b(a.handleEvent,a)}return 2147483647<Number(e)?-1:c.setTimeout(a,e||0)}function Za(a){a.g=Ua((()=>{a.g=null,a.i&&(a.i=!1,Za(a))}),a.j);const e=a.h;a.h=null,a.m.apply(null,e)}S(Ja,Ta),n=Ja.prototype,n.da=!1,n.S=null,n.kb=function(){if(this.da){var a=Date.now()-this.l;0<a&&a<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-a):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ca(this,"tick"),this.da&&(Oa(this),this.start()))}},n.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},n.M=function(){Ja.Z.M.call(this),Oa(this),delete this.g};class Wa extends M{constructor(a,e){super(),this.m=a,this.j=e,this.h=null,this.i=!1,this.g=null}l(a){this.h=arguments,this.g?this.i=!0:Za(this)}M(){super.M(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qa(a){M.call(this),this.h=a,this.g={}}S(qa,M);var Ya=[];function $a(a,e,i,n){Array.isArray(i)||(i&&(Ya[0]=i.toString()),i=Ya);for(var o=0;o<i.length;o++){var r=fa(e,i[o],n||a.handleEvent,!1,a.h||a);if(!r)break;a.g[r.key]=r}}function Qa(a){D(a.g,(function(a,e){this.g.hasOwnProperty(e)&&Aa(a)}),a),a.g={}}function Xa(){this.g=!0}function ae(a,e,i,n,o,r){a.info((function(){if(a.g)if(r)for(var t="",s=r.split("&"),l=0;l<s.length;l++){var u=s[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");t=2<=d.length&&"type"==d[1]?t+(c+"=")+u+"&":t+(c+"=redacted&")}}else t=null;else t=r;return"XMLHTTP REQ ("+n+") [attempt "+o+"]: "+e+"\n"+i+"\n"+t}))}function ee(a,e,i,n,o,r,t){a.info((function(){return"XMLHTTP RESP ("+n+") [ attempt "+o+"]: "+e+"\n"+i+"\n"+r+" "+t}))}function ie(a,e,i,n){a.info((function(){return"XMLHTTP TEXT ("+e+"): "+oe(a,i)+(n?" "+n:"")}))}function ne(a,e){a.info((function(){return"TIMEOUT: "+e}))}function oe(a,e){if(!a.g)return e;if(!e)return null;try{var i=JSON.parse(e);if(i)for(a=0;a<i.length;a++)if(Array.isArray(i[a])){var n=i[a];if(!(2>n.length)){var o=n[1];if(Array.isArray(o)&&!(1>o.length)){var r=o[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var t=1;t<o.length;t++)o[t]=""}}}return La(i)}catch(s){return e}}qa.prototype.M=function(){qa.Z.M.call(this),Qa(this)},qa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xa.prototype.Aa=function(){this.g=!1},Xa.prototype.info=function(){};var re={},te=null;function se(){return te=te||new Ta}function le(a){ta.call(this,re.Ma,a)}function ue(a){const e=se();Ca(e,new le(e,a))}function ce(a,e){ta.call(this,re.STAT_EVENT,a),this.stat=e}function de(a){const e=se();Ca(e,new ce(e,a))}function me(a,e){ta.call(this,re.Na,a),this.size=e}function he(a,e){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");return c.setTimeout((function(){a()}),e)}re.Ma="serverreachability",S(le,ta),re.STAT_EVENT="statevent",S(ce,ta),re.Na="timingevent",S(me,ta);var pe={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ve={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ke(){}function ge(a){return a.h||(a.h=a.i())}function fe(){}ke.prototype.h=null;var be,ye={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Se(){ta.call(this,"d")}function Me(){ta.call(this,"c")}function Ae(){}function Be(a,e,i,n){this.l=a,this.j=e,this.m=i,this.X=n||1,this.V=new qa(this),this.P=Pe,a=Z?125:void 0,this.W=new Ja(a),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new je}function je(){this.i=null,this.g="",this.h=!1}S(Se,ta),S(Me,ta),S(Ae,ke),Ae.prototype.g=function(){return new XMLHttpRequest},Ae.prototype.i=function(){return{}},be=new Ae;var Pe=45e3,xe={},Ke={};function Te(a,e,i){a.K=1,a.v=ai(We(e)),a.s=i,a.U=!0,Ce(a,null)}function Ce(a,e){a.F=Date.now(),Ne(a),a.A=We(a.v);var i=a.A,n=a.X;Array.isArray(n)||(n=[String(n)]),vi(i.h,"t",n),a.C=0,i=a.l.H,a.h=new je,a.g=Mn(a.l,i?e:null,!a.s),0<a.O&&(a.L=new Wa(b(a.Ia,a,a.g),a.O)),$a(a.V,a.g,"readystatechange",a.gb),e=a.H?H(a.H):{},a.s?(a.u||(a.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.s,e)):(a.u="GET",a.g.ea(a.A,a.u,null,e)),ue(1),ae(a.j,a.u,a.A,a.m,a.X,a.s)}function we(a){return!!a.g&&("GET"==a.u&&2!=a.K&&a.l.Ba)}function Le(a,e,i){let n,o=!0;for(;!a.I&&a.C<i.length;){if(n=ze(a,i),n==Ke){4==e&&(a.o=4,de(14),o=!1),ie(a.j,a.m,null,"[Incomplete Response]");break}if(n==xe){a.o=4,de(15),ie(a.j,a.m,i,"[Invalid Chunk]"),o=!1;break}ie(a.j,a.m,n,null),Ee(a,n)}we(a)&&n!=Ke&&n!=xe&&(a.h.g="",a.C=0),4!=e||0!=i.length||a.h.h||(a.o=1,de(16),o=!1),a.i=a.i&&o,o?0<i.length&&!a.aa&&(a.aa=!0,e=a.l,e.g==a&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+i.length),pn(e),e.L=!0,de(11))):(ie(a.j,a.m,i,"[Invalid Chunked Response]"),He(a),De(a))}function ze(a,e){var i=a.C,n=e.indexOf("\n",i);return-1==n?Ke:(i=Number(e.substring(i,n)),isNaN(i)?xe:(n+=1,n+i>e.length?Ke:(e=e.substr(n,i),a.C=n+i,e)))}function Ne(a){a.Y=Date.now()+a.P,_e(a,a.P)}function _e(a,e){if(null!=a.B)throw Error("WatchDog timer not null");a.B=he(b(a.eb,a),e)}function Re(a){a.B&&(c.clearTimeout(a.B),a.B=null)}function De(a){0==a.l.G||a.I||gn(a.l,a)}function He(a){Re(a);var e=a.L;e&&"function"==typeof e.na&&e.na(),a.L=null,Oa(a.W),Qa(a.V),a.g&&(e=a.g,a.g=null,e.abort(),e.na())}function Ee(a,e){try{var i=a.l;if(0!=i.G&&(i.g==a||Ai(i.i,a)))if(i.I=a.N,!a.J&&Ai(i.i,a)&&3==i.G){try{var n=i.Ca.g.parse(e)}catch(u){n=null}if(Array.isArray(n)&&3==n.length){var o=n;if(0==o[0]){a:if(!i.u){if(i.g){if(!(i.g.F+3e3<a.F))break a;kn(i),on(i)}hn(i),de(18)}}else i.ta=o[1],0<i.ta-i.U&&37500>o[2]&&i.N&&0==i.A&&!i.v&&(i.v=he(b(i.ab,i),6e3));if(1>=Mi(i.i)&&i.ka){try{i.ka()}catch(u){}i.ka=void 0}}else bn(i,11)}else if((a.J||i.g==a)&&kn(i),!C(e))for(o=i.Ca.g.parse(e),e=0;e<o.length;e++){let u=o[e];if(i.U=u[0],u=u[1],2==i.G)if("c"==u[0]){i.J=u[1],i.la=u[2];const e=u[3];null!=e&&(i.ma=e,i.h.info("VER="+i.ma));const o=u[4];null!=o&&(i.za=o,i.h.info("SVER="+i.za));const c=u[5];null!=c&&"number"===typeof c&&0<c&&(n=1.5*c,i.K=n,i.h.info("backChannelRequestTimeoutMs_="+n)),n=i;const d=a.g;if(d){const a=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(a){var r=n.i;!r.g&&(z(a,"spdy")||z(a,"quic")||z(a,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Bi(r,r.h),r.h=null))}if(n.D){const a=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;a&&(n.sa=a,Xe(n.F,n.D,a))}}i.G=3,i.j&&i.j.xa(),i.$&&(i.O=Date.now()-a.F,i.h.info("Handshake RTT: "+i.O+"ms")),n=i;var t=a;if(n.oa=Sn(n,n.H?n.la:null,n.W),t.J){ji(n.i,t);var s=t,l=n.K;l&&s.setTimeout(l),s.B&&(Re(s),Ne(s)),n.g=t}else mn(n);0<i.l.length&&sn(i)}else"stop"!=u[0]&&"close"!=u[0]||bn(i,7);else 3==i.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?bn(i,7):nn(i):"noop"!=u[0]&&i.j&&i.j.wa(u),i.A=0)}ue(4)}catch(u){}}function Ve(a){if(a.R&&"function"==typeof a.R)return a.R();if("string"===typeof a)return a.split("");if(m(a)){for(var e=[],i=a.length,n=0;n<i;n++)e.push(a[n]);return e}for(n in e=[],i=0,a)e[i++]=a[n];return e}function Ge(a,e){if(a.forEach&&"function"==typeof a.forEach)a.forEach(e,void 0);else if(m(a)||"string"===typeof a)P(a,e,void 0);else{if(a.T&&"function"==typeof a.T)var i=a.T();else if(a.R&&"function"==typeof a.R)i=void 0;else if(m(a)||"string"===typeof a){i=[];for(var n=a.length,o=0;o<n;o++)i.push(o)}else for(o in i=[],n=0,a)i[n++]=o;n=Ve(a),o=n.length;for(var r=0;r<o;r++)e.call(void 0,n[r],i&&i[r],a)}}function Fe(a,e){this.h={},this.g=[],this.i=0;var i=arguments.length;if(1<i){if(i%2)throw Error("Uneven number of arguments");for(var n=0;n<i;n+=2)this.set(arguments[n],arguments[n+1])}else if(a)if(a instanceof Fe)for(i=a.T(),n=0;n<i.length;n++)this.set(i[n],a.get(i[n]));else for(n in a)this.set(n,a[n])}function Ie(a){if(a.i!=a.g.length){for(var e=0,i=0;e<a.g.length;){var n=a.g[e];Je(a.h,n)&&(a.g[i++]=n),e++}a.g.length=i}if(a.i!=a.g.length){var o={};for(i=e=0;e<a.g.length;)n=a.g[e],Je(o,n)||(a.g[i++]=n,o[n]=1),e++;a.g.length=i}}function Je(a,e){return Object.prototype.hasOwnProperty.call(a,e)}n=Be.prototype,n.setTimeout=function(a){this.P=a},n.gb=function(a){a=a.target;const e=this.L;e&&3==Yi(a)?e.l():this.Ia(a)},n.Ia=function(a){try{if(a==this.g)a:{const d=Yi(this.g);var e=this.g.Da();const m=this.g.ba();if(!(3>d)&&(3!=d||Z||this.g&&(this.h.h||this.g.ga()||$i(this.g)))){this.I||4!=d||7==e||ue(8==e||0>=m?3:2),Re(this);var i=this.g.ba();this.N=i;e:if(we(this)){var n=$i(this.g);a="";var o=n.length,r=4==Yi(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){He(this),De(this);var t="";break e}this.h.i=new c.TextDecoder}for(e=0;e<o;e++)this.h.h=!0,a+=this.h.i.decode(n[e],{stream:r&&e==o-1});n.splice(0,o),this.h.g+=a,this.C=0,t=this.h.g}else t=this.g.ga();if(this.i=200==i,ee(this.j,this.u,this.A,this.m,this.X,d,i),this.i){if(this.$&&!this.J){e:{if(this.g){var s,l=this.g;if((s=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(s)){var u=s;break e}}u=null}if(!(i=u)){this.i=!1,this.o=3,de(12),He(this),De(this);break a}ie(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ee(this,i)}this.U?(Le(this,d,t),Z&&this.i&&3==d&&($a(this.V,this.W,"tick",this.fb),this.W.start())):(ie(this.j,this.m,t,null),Ee(this,t)),4==d&&He(this),this.i&&!this.I&&(4==d?gn(this.l,this):(this.i=!1,Ne(this)))}else 400==i&&0<t.indexOf("Unknown SID")?(this.o=3,de(12)):(this.o=0,de(13)),He(this),De(this)}}}catch(d){}},n.fb=function(){if(this.g){var a=Yi(this.g),e=this.g.ga();this.C<e.length&&(Re(this),Le(this,a,e),this.i&&4!=a&&Ne(this))}},n.cancel=function(){this.I=!0,He(this)},n.eb=function(){this.B=null;const a=Date.now();0<=a-this.Y?(ne(this.j,this.A),2!=this.K&&(ue(3),de(17)),He(this),this.o=2,De(this)):_e(this,this.Y-a)},n=Fe.prototype,n.R=function(){Ie(this);for(var a=[],e=0;e<this.g.length;e++)a.push(this.h[this.g[e]]);return a},n.T=function(){return Ie(this),this.g.concat()},n.get=function(a,e){return Je(this.h,a)?this.h[a]:e},n.set=function(a,e){Je(this.h,a)||(this.i++,this.g.push(a)),this.h[a]=e},n.forEach=function(a,e){for(var i=this.T(),n=0;n<i.length;n++){var o=i[n],r=this.get(o);a.call(e,r,o,this)}};var Oe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ue(a,e){if(a){a=a.split("&");for(var i=0;i<a.length;i++){var n=a[i].indexOf("="),o=null;if(0<=n){var r=a[i].substring(0,n);o=a[i].substring(n+1)}else r=a[i];e(r,o?decodeURIComponent(o.replace(/\+/g," ")):"")}}}function Ze(a,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,a instanceof Ze){this.g=void 0!==e?e:a.g,qe(this,a.j),this.s=a.s,Ye(this,a.i),$e(this,a.m),this.l=a.l,e=a.h;var i=new di;i.i=e.i,e.g&&(i.g=new Fe(e.g),i.h=e.h),Qe(this,i),this.o=a.o}else a&&(i=String(a).match(Oe))?(this.g=!!e,qe(this,i[1]||"",!0),this.s=ni(i[2]||""),Ye(this,i[3]||"",!0),$e(this,i[4]),this.l=ni(i[5]||"",!0),Qe(this,i[6]||"",!0),this.o=ni(i[7]||"")):(this.g=!!e,this.h=new di(null,this.g))}function We(a){return new Ze(a)}function qe(a,e,i){a.j=i?ni(e,!0):e,a.j&&(a.j=a.j.replace(/:$/,""))}function Ye(a,e,i){a.i=i?ni(e,!0):e}function $e(a,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);a.m=e}else a.m=null}function Qe(a,e,i){e instanceof di?(a.h=e,gi(a.h,a.g)):(i||(e=oi(e,ui)),a.h=new di(e,a.g))}function Xe(a,e,i){a.h.set(e,i)}function ai(a){return Xe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ei(a){return a instanceof Ze?We(a):new Ze(a,void 0)}function ii(a,e,i,n){var o=new Ze(null,void 0);return a&&qe(o,a),e&&Ye(o,e),i&&$e(o,i),n&&(o.l=n),o}function ni(a,e){return a?e?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function oi(a,e,i){return"string"===typeof a?(a=encodeURI(a).replace(e,ri),i&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ri(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(15&a).toString(16)}Ze.prototype.toString=function(){var a=[],e=this.j;e&&a.push(oi(e,ti,!0),":");var i=this.i;return(i||"file"==e)&&(a.push("//"),(e=this.s)&&a.push(oi(e,ti,!0),"@"),a.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i=this.m,null!=i&&a.push(":",String(i))),(i=this.l)&&(this.i&&"/"!=i.charAt(0)&&a.push("/"),a.push(oi(i,"/"==i.charAt(0)?li:si,!0))),(i=this.h.toString())&&a.push("?",i),(i=this.o)&&a.push("#",oi(i,ci)),a.join("")};var ti=/[#\/\?@]/g,si=/[#\?:]/g,li=/[#\?]/g,ui=/[#\?@]/g,ci=/#/g;function di(a,e){this.h=this.g=null,this.i=a||null,this.j=!!e}function mi(a){a.g||(a.g=new Fe,a.h=0,a.i&&Ue(a.i,(function(e,i){a.add(decodeURIComponent(e.replace(/\+/g," ")),i)})))}function hi(a,e){mi(a),e=ki(a,e),Je(a.g.h,e)&&(a.i=null,a.h-=a.g.get(e).length,a=a.g,Je(a.h,e)&&(delete a.h[e],a.i--,a.g.length>2*a.i&&Ie(a)))}function pi(a,e){return mi(a),e=ki(a,e),Je(a.g.h,e)}function vi(a,e,i){hi(a,e),0<i.length&&(a.i=null,a.g.set(ki(a,e),T(i)),a.h+=i.length)}function ki(a,e){return e=String(e),a.j&&(e=e.toLowerCase()),e}function gi(a,e){e&&!a.j&&(mi(a),a.i=null,a.g.forEach((function(a,e){var i=e.toLowerCase();e!=i&&(hi(this,e),vi(this,i,a))}),a)),a.j=e}n=di.prototype,n.add=function(a,e){mi(this),this.i=null,a=ki(this,a);var i=this.g.get(a);return i||this.g.set(a,i=[]),i.push(e),this.h+=1,this},n.forEach=function(a,e){mi(this),this.g.forEach((function(i,n){P(i,(function(i){a.call(e,i,n,this)}),this)}),this)},n.T=function(){mi(this);for(var a=this.g.R(),e=this.g.T(),i=[],n=0;n<e.length;n++)for(var o=a[n],r=0;r<o.length;r++)i.push(e[n]);return i},n.R=function(a){mi(this);var e=[];if("string"===typeof a)pi(this,a)&&(e=K(e,this.g.get(ki(this,a))));else{a=this.g.R();for(var i=0;i<a.length;i++)e=K(e,a[i])}return e},n.set=function(a,e){return mi(this),this.i=null,a=ki(this,a),pi(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[e]),this.h+=1,this},n.get=function(a,e){return a?(a=this.R(a),0<a.length?String(a[0]):e):e},n.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var a=[],e=this.g.T(),i=0;i<e.length;i++){var n=e[i],o=encodeURIComponent(String(n));n=this.R(n);for(var r=0;r<n.length;r++){var t=o;""!==n[r]&&(t+="="+encodeURIComponent(String(n[r]))),a.push(t)}}return this.i=a.join("&")};var fi=class{constructor(a,e){this.h=a,this.g=e}};function bi(a){this.l=a||yi,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol)):a=!!(c.g&&c.g.Ea&&c.g.Ea()&&c.g.Ea().Zb),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yi=10;function Si(a){return!!a.h||!!a.g&&a.g.size>=a.j}function Mi(a){return a.h?1:a.g?a.g.size:0}function Ai(a,e){return a.h?a.h==e:!!a.g&&a.g.has(e)}function Bi(a,e){a.g?a.g.add(e):a.h=e}function ji(a,e){a.h&&a.h==e?a.h=null:a.g&&a.g.has(e)&&a.g.delete(e)}function Pi(a){if(null!=a.h)return a.i.concat(a.h.D);if(null!=a.g&&0!==a.g.size){let e=a.i;for(const i of a.g.values())e=e.concat(i.D);return e}return T(a.i)}function xi(){}function Ki(){this.g=new xi}function Ti(a,e,i){const n=i||"";try{Ge(a,(function(a,i){let o=a;h(a)&&(o=La(a)),e.push(n+i+"="+encodeURIComponent(o))}))}catch(o){throw e.push(n+"type="+encodeURIComponent("_badmap")),o}}function Ci(a,e){const i=new Xa;if(c.Image){const n=new Image;n.onload=y(wi,i,n,"TestLoadImage: loaded",!0,e),n.onerror=y(wi,i,n,"TestLoadImage: error",!1,e),n.onabort=y(wi,i,n,"TestLoadImage: abort",!1,e),n.ontimeout=y(wi,i,n,"TestLoadImage: timeout",!1,e),c.setTimeout((function(){n.ontimeout&&n.ontimeout()}),1e4),n.src=a}else e(!1)}function wi(a,e,i,n,o){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,o(n)}catch(r){}}function Li(a){this.l=a.$b||null,this.j=a.ib||!1}function zi(a,e){Ta.call(this),this.D=a,this.u=e,this.m=void 0,this.readyState=Ni,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bi.prototype.cancel=function(){if(this.i=Pi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const a of this.g.values())a.cancel();this.g.clear()}},xi.prototype.stringify=function(a){return c.JSON.stringify(a,void 0)},xi.prototype.parse=function(a){return c.JSON.parse(a,void 0)},S(Li,ke),Li.prototype.g=function(){return new zi(this.l,this.j)},Li.prototype.i=function(a){return function(){return a}}({}),S(zi,Ta);var Ni=0;function _i(a){a.j.read().then(a.Sa.bind(a)).catch(a.ha.bind(a))}function Ri(a){a.readyState=4,a.l=null,a.j=null,a.A=null,Di(a)}function Di(a){a.onreadystatechange&&a.onreadystatechange.call(a)}n=zi.prototype,n.open=function(a,e){if(this.readyState!=Ni)throw this.abort(),Error("Error reopening a connection");this.C=a,this.B=e,this.readyState=1,Di(this)},n.send=function(a){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};a&&(e.body=a),(this.D||c).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},n.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ri(this)),this.readyState=Ni},n.Va=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Di(this)),this.g&&(this.readyState=3,Di(this),this.g)))if("arraybuffer"===this.responseType)a.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof c.ReadableStream&&"body"in a){if(this.j=a.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_i(this)}else a.text().then(this.Ua.bind(this),this.ha.bind(this))},n.Sa=function(a){if(this.g){if(this.u&&a.value)this.response.push(a.value);else if(!this.u){var e=a.value?a.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!a.done}))&&(this.response=this.responseText+=e)}a.done?Ri(this):Di(this),3==this.readyState&&_i(this)}},n.Ua=function(a){this.g&&(this.response=this.responseText=a,Ri(this))},n.Ta=function(a){this.g&&(this.response=a,Ri(this))},n.ha=function(){this.g&&Ri(this)},n.setRequestHeader=function(a,e){this.v.append(a,e)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],e=this.h.entries();for(var i=e.next();!i.done;)i=i.value,a.push(i[0]+": "+i[1]),i=e.next();return a.join("\r\n")},Object.defineProperty(zi.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(a){this.m=a?"include":"same-origin"}});var Hi=c.JSON.parse;function Ei(a){Ta.call(this),this.headers=new Fe,this.u=a||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Vi,this.K=this.L=!1}S(Ei,Ta);var Vi="",Gi=/^https?$/i,Fi=["POST","PUT"];function Ii(a){return O&&ia()&&"number"===typeof a.timeout&&void 0!==a.ontimeout}function Ji(a){return"content-type"==a.toLowerCase()}function Oi(a,e){a.h=!1,a.g&&(a.l=!0,a.g.abort(),a.l=!1),a.j=e,a.m=5,Ui(a),Wi(a)}function Ui(a){a.D||(a.D=!0,Ca(a,"complete"),Ca(a,"error"))}function Zi(a){if(a.h&&"undefined"!=typeof u&&(!a.C[1]||4!=Yi(a)||2!=a.ba()))if(a.v&&4==Yi(a))Ua(a.Fa,0,a);else if(Ca(a,"readystatechange"),4==Yi(a)){a.h=!1;try{const l=a.ba();a:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break a;default:e=!1}var i;if(!(i=e)){var n;if(n=0===l){var o=String(a.H).match(Oe)[1]||null;if(!o&&c.self&&c.self.location){var r=c.self.location.protocol;o=r.substr(0,r.length-1)}n=!Gi.test(o?o.toLowerCase():"")}i=n}if(i)Ca(a,"complete"),Ca(a,"success");else{a.m=6;try{var t=2<Yi(a)?a.g.statusText:""}catch(s){t=""}a.j=t+" ["+a.ba()+"]",Ui(a)}}finally{Wi(a)}}}function Wi(a,e){if(a.g){qi(a);const n=a.g,o=a.C[0]?d:null;a.g=null,a.C=null,e||Ca(a,"ready");try{n.onreadystatechange=o}catch(i){}}}function qi(a){a.g&&a.K&&(a.g.ontimeout=null),a.A&&(c.clearTimeout(a.A),a.A=null)}function Yi(a){return a.g?a.g.readyState:0}function $i(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.J){case Vi:case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Qi(a){let e="";return D(a,(function(a,i){e+=i,e+=":",e+=a,e+="\r\n"})),e}function Xi(a,e,i){a:{for(n in i){var n=!1;break a}n=!0}n||(i=Qi(i),"string"===typeof a?null!=i&&encodeURIComponent(String(i)):Xe(a,e,i))}function an(a,e,i){return i&&i.internalChannelParams&&i.internalChannelParams[a]||e}function en(a){this.za=0,this.l=[],this.h=new Xa,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=an("failFast",!1,a),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=an("baseRetryDelayMs",5e3,a),this.$a=an("retryDelaySeedMs",1e4,a),this.Ya=an("forwardChannelMaxRetries",2,a),this.ra=an("forwardChannelRequestTimeoutMs",2e4,a),this.qa=a&&a.xmlHttpFactory||void 0,this.Ba=a&&a.Yb||!1,this.K=void 0,this.H=a&&a.supportsCrossDomainXhr||!1,this.J="",this.i=new bi(a&&a.concurrentRequestLimit),this.Ca=new Ki,this.ja=a&&a.fastHandshake||!1,this.Ra=a&&a.Wb||!1,a&&a.Aa&&this.h.Aa(),a&&a.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&a&&a.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!a||!1!==a.Xb}function nn(a){if(rn(a),3==a.G){var e=a.V++,i=We(a.F);Xe(i,"SID",a.J),Xe(i,"RID",e),Xe(i,"TYPE","terminate"),cn(a,i),e=new Be(a,a.h,e,void 0),e.K=2,e.v=ai(We(i)),i=!1,c.navigator&&c.navigator.sendBeacon&&(i=c.navigator.sendBeacon(e.v.toString(),"")),!i&&c.Image&&((new Image).src=e.v,i=!0),i||(e.g=Mn(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ne(e)}yn(a)}function on(a){a.g&&(pn(a),a.g.cancel(),a.g=null)}function rn(a){on(a),a.u&&(c.clearTimeout(a.u),a.u=null),kn(a),a.i.cancel(),a.m&&("number"===typeof a.m&&c.clearTimeout(a.m),a.m=null)}function tn(a,e){a.l.push(new fi(a.Za++,e)),3==a.G&&sn(a)}function sn(a){Si(a.i)||a.m||(a.m=!0,Ea(a.Ha,a),a.C=0)}function ln(a,e){return!(Mi(a.i)>=a.i.j-(a.m?1:0))&&(a.m?(a.l=e.D.concat(a.l),!0):!(1==a.G||2==a.G||a.C>=(a.Xa?0:a.Ya))&&(a.m=he(b(a.Ha,a,e),fn(a,a.C)),a.C++,!0))}function un(a,e){var i;i=e?e.m:a.V++;const n=We(a.F);Xe(n,"SID",a.J),Xe(n,"RID",i),Xe(n,"AID",a.U),cn(a,n),a.o&&a.s&&Xi(n,a.o,a.s),i=new Be(a,a.h,i,a.C+1),null===a.o&&(i.H=a.s),e&&(a.l=e.D.concat(a.l)),e=dn(a,i,1e3),i.setTimeout(Math.round(.5*a.ra)+Math.round(.5*a.ra*Math.random())),Bi(a.i,i),Te(i,n,e)}function cn(a,e){a.j&&Ge({},(function(a,i){Xe(e,i,a)}))}function dn(a,e,i){i=Math.min(a.l.length,i);var n=a.j?b(a.j.Oa,a.j,a):null;a:{var o=a.l;let e=-1;for(;;){const a=["count="+i];-1==e?0<i?(e=o[0].h,a.push("ofs="+e)):e=0:a.push("ofs="+e);let r=!0;for(let t=0;t<i;t++){let i=o[t].h;const s=o[t].g;if(i-=e,0>i)e=Math.max(0,o[t].h-100),r=!1;else try{Ti(s,a,"req"+i+"_")}catch(Fn){n&&n(s)}}if(r){n=a.join("&");break a}}}return a=a.l.splice(0,i),e.D=a,n}function mn(a){a.g||a.u||(a.Y=1,Ea(a.Ga,a),a.A=0)}function hn(a){return!(a.g||a.u||3<=a.A)&&(a.Y++,a.u=he(b(a.Ga,a),fn(a,a.A)),a.A++,!0)}function pn(a){null!=a.B&&(c.clearTimeout(a.B),a.B=null)}function vn(a){a.g=new Be(a,a.h,"rpc",a.Y),null===a.o&&(a.g.H=a.s),a.g.O=0;var e=We(a.oa);Xe(e,"RID","rpc"),Xe(e,"SID",a.J),Xe(e,"CI",a.N?"0":"1"),Xe(e,"AID",a.U),cn(a,e),Xe(e,"TYPE","xmlhttp"),a.o&&a.s&&Xi(e,a.o,a.s),a.K&&a.g.setTimeout(a.K);var i=a.g;a=a.la,i.K=1,i.v=ai(We(e)),i.s=null,i.U=!0,Ce(i,a)}function kn(a){null!=a.v&&(c.clearTimeout(a.v),a.v=null)}function gn(a,e){var i=null;if(a.g==e){kn(a),pn(a),a.g=null;var n=2}else{if(!Ai(a.i,e))return;i=e.D,ji(a.i,e),n=1}if(a.I=e.N,0!=a.G)if(e.i)if(1==n){i=e.s?e.s.length:0,e=Date.now()-e.F;var o=a.C;n=se(),Ca(n,new me(n,i,e,o)),sn(a)}else mn(a);else if(o=e.o,3==o||0==o&&0<a.I||!(1==n&&ln(a,e)||2==n&&hn(a)))switch(i&&0<i.length&&(e=a.i,e.i=e.i.concat(i)),o){case 1:bn(a,5);break;case 4:bn(a,10);break;case 3:bn(a,6);break;default:bn(a,2)}}function fn(a,e){let i=a.Pa+Math.floor(Math.random()*a.$a);return a.j||(i*=2),i*e}function bn(a,e){if(a.h.info("Error code "+e),2==e){var i=null;a.j&&(i=null);var n=b(a.jb,a);i||(i=new Ze("//www.google.com/images/cleardot.gif"),c.location&&"http"==c.location.protocol||qe(i,"https"),ai(i)),Ci(i.toString(),n)}else de(2);a.G=0,a.j&&a.j.va(e),yn(a),rn(a)}function yn(a){a.G=0,a.I=-1,a.j&&(0==Pi(a.i).length&&0==a.l.length||(a.i.i.length=0,T(a.l),a.l.length=0),a.j.ua())}function Sn(a,e,i){let n=ei(i);if(""!=n.i)e&&Ye(n,e+"."+n.i),$e(n,n.m);else{const a=c.location;n=ii(a.protocol,e?e+"."+a.hostname:a.hostname,+a.port,i)}return a.aa&&D(a.aa,(function(a,e){Xe(n,e,a)})),e=a.D,i=a.sa,e&&i&&Xe(n,e,i),Xe(n,"VER",a.ma),cn(a,n),n}function Mn(a,e,i){if(e&&!a.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=i&&a.Ba&&!a.qa?new Ei(new Li({ib:!0})):new Ei(a.qa),e.L=a.H,e}function An(){}function Bn(){if(O&&!(10<=Number(oa)))throw Error("Environmental error: no available transport.")}function jn(a,e){Ta.call(this),this.g=new en(e),this.l=a,this.h=e&&e.messageUrlParams||null,a=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.s=a,a=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(a?a["X-WebChannel-Content-Type"]=e.messageContentType:a={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(a?a["X-WebChannel-Client-Profile"]=e.ya:a={"X-WebChannel-Client-Profile":e.ya}),this.g.P=a,(a=e&&e.httpHeadersOverwriteParam)&&!C(a)&&(this.g.o=a),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!C(e)&&(this.g.D=e,a=this.h,null!==a&&e in a&&(a=this.h,e in a&&delete a[e])),this.j=new Kn(this)}function Pn(a){Se.call(this);var e=a.__sm__;if(e){a:{for(const i in e){a=i;break a}a=void 0}(this.i=a)&&(a=this.i,e=null!==e&&a in e?e[a]:void 0),this.data=e}else this.data=a}function xn(){Me.call(this),this.status=1}function Kn(a){this.g=a}n=Ei.prototype,n.ea=function(a,e,i,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+a);e=e?e.toUpperCase():"GET",this.H=a,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():be.g(),this.C=this.u?ge(this.u):ge(be),this.g.onreadystatechange=b(this.Fa,this);try{this.F=!0,this.g.open(e,String(a),!0),this.F=!1}catch(r){return void Oi(this,r)}a=i||"";const o=new Fe(this.headers);n&&Ge(n,(function(a,e){o.set(e,a)})),n=x(o.T()),i=c.FormData&&a instanceof c.FormData,!(0<=j(Fi,e))||n||i||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),o.forEach((function(a,e){this.g.setRequestHeader(e,a)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{qi(this),0<this.B&&((this.K=Ii(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.pa,this)):this.A=Ua(this.pa,this.B,this)),this.v=!0,this.g.send(a),this.v=!1}catch(r){Oi(this,r)}},n.pa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ca(this,"timeout"),this.abort(8))},n.abort=function(a){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=a||7,Ca(this,"complete"),Ca(this,"abort"),Wi(this))},n.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wi(this,!0)),Ei.Z.M.call(this)},n.Fa=function(){this.s||(this.F||this.v||this.l?Zi(this):this.cb())},n.cb=function(){Zi(this)},n.ba=function(){try{return 2<Yi(this)?this.g.status:-1}catch(a){return-1}},n.ga=function(){try{return this.g?this.g.responseText:""}catch(a){return""}},n.Qa=function(a){if(this.g){var e=this.g.responseText;return a&&0==e.indexOf(a)&&(e=e.substring(a.length)),Hi(e)}},n.Da=function(){return this.m},n.La=function(){return"string"===typeof this.j?this.j:String(this.j)},n=en.prototype,n.ma=8,n.G=1,n.hb=function(a){try{this.h.info("Origin Trials invoked: "+a)}catch(e){}},n.Ha=function(a){if(this.m)if(this.m=null,1==this.G){if(!a){this.V=Math.floor(1e5*Math.random()),a=this.V++;const o=new Be(this,this.h,a,void 0);let r=this.s;if(this.P&&(r?(r=H(r),V(r,this.P)):r=this.P),null===this.o&&(o.H=r),this.ja)a:{for(var e=0,i=0;i<this.l.length;i++){var n=this.l[i];if(n="__data__"in n.g&&(n=n.g.__data__,"string"===typeof n)?n.length:void 0,void 0===n)break;if(e+=n,4096<e){e=i;break a}if(4096===e||i===this.l.length-1){e=i+1;break a}}e=1e3}else e=1e3;e=dn(this,o,e),i=We(this.F),Xe(i,"RID",a),Xe(i,"CVER",22),this.D&&Xe(i,"X-HTTP-Session-Id",this.D),cn(this,i),this.o&&r&&Xi(i,this.o,r),Bi(this.i,o),this.Ra&&Xe(i,"TYPE","init"),this.ja?(Xe(i,"$req",e),Xe(i,"SID","null"),o.$=!0,Te(o,i,null)):Te(o,i,e),this.G=2}}else 3==this.G&&(a?un(this,a):0==this.l.length||Si(this.i)||un(this))},n.Ga=function(){if(this.u=null,vn(this),this.$&&!(this.L||null==this.g||0>=this.O)){var a=2*this.O;this.h.info("BP detection timer enabled: "+a),this.B=he(b(this.bb,this),a)}},n.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,de(10),on(this),vn(this))},n.ab=function(){null!=this.v&&(this.v=null,on(this),hn(this),de(19))},n.jb=function(a){a?(this.h.info("Successfully pinged google.com"),de(2)):(this.h.info("Failed to ping google.com"),de(1))},n=An.prototype,n.xa=function(){},n.wa=function(){},n.va=function(){},n.ua=function(){},n.Oa=function(){},Bn.prototype.g=function(a,e){return new jn(a,e)},S(jn,Ta),jn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var a=this.g,e=this.l,i=this.h||void 0;a.Wa&&(a.h.info("Origin Trials enabled."),Ea(b(a.hb,a,e))),de(0),a.W=e,a.aa=i||{},a.N=a.X,a.F=Sn(a,null,a.W),sn(a)},jn.prototype.close=function(){nn(this.g)},jn.prototype.u=function(a){if("string"===typeof a){var e={};e.__data__=a,tn(this.g,e)}else this.v?(e={},e.__data__=La(a),tn(this.g,e)):tn(this.g,a)},jn.prototype.M=function(){this.g.j=null,delete this.j,nn(this.g),delete this.g,jn.Z.M.call(this)},S(Pn,Se),S(xn,Me),S(Kn,An),Kn.prototype.xa=function(){Ca(this.g,"a")},Kn.prototype.wa=function(a){Ca(this.g,new Pn(a))},Kn.prototype.va=function(a){Ca(this.g,new xn(a))},Kn.prototype.ua=function(){Ca(this.g,"b")},Bn.prototype.createWebChannel=Bn.prototype.g,jn.prototype.send=jn.prototype.u,jn.prototype.open=jn.prototype.m,jn.prototype.close=jn.prototype.close,pe.NO_ERROR=0,pe.TIMEOUT=8,pe.HTTP_ERROR=6,ve.COMPLETE="complete",fe.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",Ta.prototype.listen=Ta.prototype.N,Ei.prototype.listenOnce=Ei.prototype.O,Ei.prototype.getLastError=Ei.prototype.La,Ei.prototype.getLastErrorCode=Ei.prototype.Da,Ei.prototype.getStatus=Ei.prototype.ba,Ei.prototype.getResponseJson=Ei.prototype.Qa,Ei.prototype.getResponseText=Ei.prototype.ga,Ei.prototype.send=Ei.prototype.ea;l.createWebChannelTransport=function(){return new Bn},l.getStatEventTarget=function(){return se()},l.ErrorCode=pe,l.EventType=ve,l.Event=re,l.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},l.FetchXmlHttpFactory=Li,l.WebChannel=fe,l.XhrIo=Ei;const Tn="@firebase/firestore";
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
 */class Cn{constructor(a){this.uid=a}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(a){return a.uid===this.uid}}Cn.UNAUTHENTICATED=new Cn(null),Cn.GOOGLE_CREDENTIALS=new Cn("google-credentials-uid"),Cn.FIRST_PARTY=new Cn("first-party-uid"),Cn.MOCK_USER=new Cn("mock-user");
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
let wn="9.2.0";
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
 */const Ln=new t.Yd("@firebase/firestore");function zn(a,...e){if(Ln.logLevel<=t["in"].DEBUG){const i=e.map(_n);Ln.debug(`Firestore (${wn}): ${a}`,...i)}}function Nn(a,...e){if(Ln.logLevel<=t["in"].ERROR){const i=e.map(_n);Ln.error(`Firestore (${wn}): ${a}`,...i)}}function _n(a){if("string"==typeof a)return a;try{return e=a,JSON.stringify(e)}catch(e){return a}
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
 */var e}
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
 */function Rn(a="Unexpected state"){const e=`FIRESTORE (${wn}) INTERNAL ASSERTION FAILED: `+a;throw Nn(e),new Error(e)}function Dn(a,e){a||Rn()}
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
const Hn={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class En extends Error{constructor(a,e){super(e),this.code=a,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Vn{constructor(){this.promise=new Promise(((a,e)=>{this.resolve=a,this.reject=e}))}}
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
 */class Gn{constructor(a,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${a}`}}class Fn{getToken(){return Promise.resolve(null)}invalidateToken(){}start(a,e){a.enqueueRetryable((()=>e(Cn.UNAUTHENTICATED)))}shutdown(){}}class In{constructor(a){this.t=a,this.currentUser=Cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(a,e){let i=this.i;const n=a=>this.i!==i?(i=this.i,e(a)):Promise.resolve();let o=new Vn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Vn,a.enqueueRetryable((()=>n(this.currentUser)))};const r=()=>{const e=o;a.enqueueRetryable((async()=>{await e.promise,await n(this.currentUser)}))},t=a=>{zn("FirebaseCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((a=>t(a))),setTimeout((()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?t(a):(zn("FirebaseCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Vn)}}),0),r()}getToken(){const a=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==a?(zn("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Dn("string"==typeof e.accessToken),new Gn(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const a=this.auth&&this.auth.getUid();return Dn(null===a||"string"==typeof a),new Cn(a)}}class Jn{constructor(a,e,i){this.h=a,this.l=e,this.m=i,this.type="FirstParty",this.user=Cn.FIRST_PARTY}get authHeaders(){const a={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(a.Authorization=e),this.m&&(a["X-Goog-Iam-Authorization-Token"]=this.m),a}}class On{constructor(a,e,i){this.h=a,this.l=e,this.m=i}getToken(){return Promise.resolve(new Jn(this.h,this.l,this.m))}start(a,e){a.enqueueRetryable((()=>e(Cn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}
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
 */class Un{constructor(a,e){this.previousValue=a,e&&(e.sequenceNumberHandler=a=>this.g(a),this.p=a=>e.writeSequenceNumber(a))}g(a){return this.previousValue=Math.max(a,this.previousValue),this.previousValue}next(){const a=++this.previousValue;return this.p&&this.p(a),a}}
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
 */function Zn(a){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(a);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(i);else for(let n=0;n<a;n++)i[n]=Math.floor(256*Math.random());return i}
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
 */Un.T=-1;class Wn{static I(){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/a.length)*a.length;let i="";for(;i.length<20;){const n=Zn(40);for(let o=0;o<n.length;++o)i.length<20&&n[o]<e&&(i+=a.charAt(n[o]%a.length))}return i}}function qn(a,e){return a<e?-1:a>e?1:0}
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
class Yn{constructor(a,e,i){void 0===e?e=0:e>a.length&&Rn(),void 0===i?i=a.length-e:i>a.length-e&&Rn(),this.segments=a,this.offset=e,this.len=i}get length(){return this.len}isEqual(a){return 0===Yn.comparator(this,a)}child(a){const e=this.segments.slice(this.offset,this.limit());return a instanceof Yn?a.forEach((a=>{e.push(a)})):e.push(a),this.construct(e)}limit(){return this.offset+this.length}popFirst(a){return a=void 0===a?1:a,this.construct(this.segments,this.offset+a,this.length-a)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(a){return this.segments[this.offset+a]}isEmpty(){return 0===this.length}isPrefixOf(a){if(a.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==a.get(e))return!1;return!0}isImmediateParentOf(a){if(this.length+1!==a.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==a.get(e))return!1;return!0}forEach(a){for(let e=this.offset,i=this.limit();e<i;e++)a(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(a,e){const i=Math.min(a.length,e.length);for(let n=0;n<i;n++){const i=a.get(n),o=e.get(n);if(i<o)return-1;if(i>o)return 1}return a.length<e.length?-1:a.length>e.length?1:0}}class $n extends Yn{construct(a,e,i){return new $n(a,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...a){const e=[];for(const i of a){if(i.indexOf("//")>=0)throw new En(Hn.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter((a=>a.length>0)))}return new $n(e)}static emptyPath(){return new $n([])}}
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
class Qn{constructor(a){this.binaryString=a}static fromBase64String(a){const e=atob(a);return new Qn(e)}static fromUint8Array(a){const e=function(a){let e="";for(let i=0;i<a.length;++i)e+=String.fromCharCode(a[i]);return e}(a);return new Qn(e)}toBase64(){return a=this.binaryString,btoa(a);var a}toUint8Array(){return function(a){const e=new Uint8Array(a.length);for(let i=0;i<a.length;i++)e[i]=a.charCodeAt(i);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(a){return qn(this.binaryString,a.binaryString)}isEqual(a){return this.binaryString===a.binaryString}}Qn.EMPTY_BYTE_STRING=new Qn("");
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
class Xn{constructor(a){this.path=a}static fromPath(a){return new Xn($n.fromString(a))}static fromName(a){return new Xn($n.fromString(a).popFirst(5))}hasCollectionId(a){return this.path.length>=2&&this.path.get(this.path.length-2)===a}isEqual(a){return null!==a&&0===$n.comparator(this.path,a.path)}toString(){return this.path.toString()}static comparator(a,e){return $n.comparator(a.path,e.path)}static isDocumentKey(a){return a.length%2==0}static fromSegments(a){return new Xn(new $n(a.slice()))}}
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
var ao,eo;(eo=ao||(ao={}))[eo.OK=0]="OK",eo[eo.CANCELLED=1]="CANCELLED",eo[eo.UNKNOWN=2]="UNKNOWN",eo[eo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",eo[eo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",eo[eo.NOT_FOUND=5]="NOT_FOUND",eo[eo.ALREADY_EXISTS=6]="ALREADY_EXISTS",eo[eo.PERMISSION_DENIED=7]="PERMISSION_DENIED",eo[eo.UNAUTHENTICATED=16]="UNAUTHENTICATED",eo[eo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",eo[eo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",eo[eo.ABORTED=10]="ABORTED",eo[eo.OUT_OF_RANGE=11]="OUT_OF_RANGE",eo[eo.UNIMPLEMENTED=12]="UNIMPLEMENTED",eo[eo.INTERNAL=13]="INTERNAL",eo[eo.UNAVAILABLE=14]="UNAVAILABLE",eo[eo.DATA_LOSS=15]="DATA_LOSS";
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
class io{constructor(a,e){this.comparator=a,this.root=e||oo.EMPTY}insert(a,e){return new io(this.comparator,this.root.insert(a,e,this.comparator).copy(null,null,oo.BLACK,null,null))}remove(a){return new io(this.comparator,this.root.remove(a,this.comparator).copy(null,null,oo.BLACK,null,null))}get(a){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(a,e.key);if(0===i)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(a){let e=0,i=this.root;for(;!i.isEmpty();){const n=this.comparator(a,i.key);if(0===n)return e+i.left.size;n<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(a){return this.root.inorderTraversal(a)}forEach(a){this.inorderTraversal(((e,i)=>(a(e,i),!1)))}toString(){const a=[];return this.inorderTraversal(((e,i)=>(a.push(`${e}:${i}`),!1))),`{${a.join(", ")}}`}reverseTraversal(a){return this.root.reverseTraversal(a)}getIterator(){return new no(this.root,null,this.comparator,!1)}getIteratorFrom(a){return new no(this.root,a,this.comparator,!1)}getReverseIterator(){return new no(this.root,null,this.comparator,!0)}getReverseIteratorFrom(a){return new no(this.root,a,this.comparator,!0)}}class no{constructor(a,e,i,n){this.isReverse=n,this.nodeStack=[];let o=1;for(;!a.isEmpty();)if(o=e?i(a.key,e):1,n&&(o*=-1),o<0)a=this.isReverse?a.left:a.right;else{if(0===o){this.nodeStack.push(a);break}this.nodeStack.push(a),a=this.isReverse?a.right:a.left}}getNext(){let a=this.nodeStack.pop();const e={key:a.key,value:a.value};if(this.isReverse)for(a=a.left;!a.isEmpty();)this.nodeStack.push(a),a=a.right;else for(a=a.right;!a.isEmpty();)this.nodeStack.push(a),a=a.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const a=this.nodeStack[this.nodeStack.length-1];return{key:a.key,value:a.value}}}class oo{constructor(a,e,i,n,o){this.key=a,this.value=e,this.color=null!=i?i:oo.RED,this.left=null!=n?n:oo.EMPTY,this.right=null!=o?o:oo.EMPTY,this.size=this.left.size+1+this.right.size}copy(a,e,i,n,o){return new oo(null!=a?a:this.key,null!=e?e:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=o?o:this.right)}isEmpty(){return!1}inorderTraversal(a){return this.left.inorderTraversal(a)||a(this.key,this.value)||this.right.inorderTraversal(a)}reverseTraversal(a){return this.right.reverseTraversal(a)||a(this.key,this.value)||this.left.reverseTraversal(a)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(a,e,i){let n=this;const o=i(a,n.key);return n=o<0?n.copy(null,null,null,n.left.insert(a,e,i),null):0===o?n.copy(null,e,null,null,null):n.copy(null,null,null,null,n.right.insert(a,e,i)),n.fixUp()}removeMin(){if(this.left.isEmpty())return oo.EMPTY;let a=this;return a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.removeMin(),null),a.fixUp()}remove(a,e){let i,n=this;if(e(a,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(a,e),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===e(a,n.key)){if(n.right.isEmpty())return oo.EMPTY;i=n.right.min(),n=n.copy(i.key,i.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(a,e))}return n.fixUp()}isRed(){return this.color}fixUp(){let a=this;return a.right.isRed()&&!a.left.isRed()&&(a=a.rotateLeft()),a.left.isRed()&&a.left.left.isRed()&&(a=a.rotateRight()),a.left.isRed()&&a.right.isRed()&&(a=a.colorFlip()),a}moveRedLeft(){let a=this.colorFlip();return a.right.left.isRed()&&(a=a.copy(null,null,null,null,a.right.rotateRight()),a=a.rotateLeft(),a=a.colorFlip()),a}moveRedRight(){let a=this.colorFlip();return a.left.left.isRed()&&(a=a.rotateRight(),a=a.colorFlip()),a}rotateLeft(){const a=this.copy(null,null,oo.RED,null,this.right.left);return this.right.copy(null,null,this.color,a,null)}rotateRight(){const a=this.copy(null,null,oo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,a)}colorFlip(){const a=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,a,e)}checkMaxDepth(){const a=this.check();return Math.pow(2,a)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Rn();if(this.right.isRed())throw Rn();const a=this.left.check();if(a!==this.right.check())throw Rn();return a+(this.isRed()?0:1)}}oo.EMPTY=null,oo.RED=!0,oo.BLACK=!1,oo.EMPTY=new class{constructor(){this.size=0}get key(){throw Rn()}get value(){throw Rn()}get color(){throw Rn()}get left(){throw Rn()}get right(){throw Rn()}copy(a,e,i,n,o){return this}insert(a,e,i){return new oo(a,e)}remove(a,e){return this}isEmpty(){return!0}inorderTraversal(a){return!1}reverseTraversal(a){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class ro{constructor(a){this.comparator=a,this.data=new io(this.comparator)}has(a){return null!==this.data.get(a)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(a){return this.data.indexOf(a)}forEach(a){this.data.inorderTraversal(((e,i)=>(a(e),!1)))}forEachInRange(a,e){const i=this.data.getIteratorFrom(a[0]);for(;i.hasNext();){const n=i.getNext();if(this.comparator(n.key,a[1])>=0)return;e(n.key)}}forEachWhile(a,e){let i;for(i=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!a(i.getNext().key))return}firstAfterOrEqual(a){const e=this.data.getIteratorFrom(a);return e.hasNext()?e.getNext().key:null}getIterator(){return new to(this.data.getIterator())}getIteratorFrom(a){return new to(this.data.getIteratorFrom(a))}add(a){return this.copy(this.data.remove(a).insert(a,!0))}delete(a){return this.has(a)?this.copy(this.data.remove(a)):this}isEmpty(){return this.data.isEmpty()}unionWith(a){let e=this;return e.size<a.size&&(e=a,a=this),a.forEach((a=>{e=e.add(a)})),e}isEqual(a){if(!(a instanceof ro))return!1;if(this.size!==a.size)return!1;const e=this.data.getIterator(),i=a.data.getIterator();for(;e.hasNext();){const a=e.getNext().key,n=i.getNext().key;if(0!==this.comparator(a,n))return!1}return!0}toArray(){const a=[];return this.forEach((e=>{a.push(e)})),a}toString(){const a=[];return this.forEach((e=>a.push(e))),"SortedSet("+a.toString()+")"}copy(a){const e=new ro(this.comparator);return e.data=a,e}}class to{constructor(a){this.iter=a}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */new io(Xn.comparator);new io(Xn.comparator);new io(Xn.comparator);new ro(Xn.comparator);new ro(qn);
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
(()=>{const a={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const a={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})();
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
function so(a){let e="";for(let i=0;i<a.length;i++)e.length>0&&(e=uo(e)),e=lo(a.get(i),e);return uo(e)}function lo(a,e){let i=e;const n=a.length;for(let o=0;o<n;o++){const e=a.charAt(o);switch(e){case"\0":i+="";break;case"":i+="";break;default:i+=e}}return i}function uo(a){return a+""}class co{constructor(a,e,i){this.ownerId=a,this.allowTabSynchronization=e,this.leaseTimestampMs=i}}co.store="owner",co.key="owner";class mo{constructor(a,e,i){this.userId=a,this.lastAcknowledgedBatchId=e,this.lastStreamToken=i}}mo.store="mutationQueues",mo.keyPath="userId";class ho{constructor(a,e,i,n,o){this.userId=a,this.batchId=e,this.localWriteTimeMs=i,this.baseMutations=n,this.mutations=o}}ho.store="mutations",ho.keyPath="batchId",ho.userMutationsIndex="userMutationsIndex",ho.userMutationsKeyPath=["userId","batchId"];class po{constructor(){}static prefixForUser(a){return[a]}static prefixForPath(a,e){return[a,so(e)]}static key(a,e,i){return[a,so(e),i]}}po.store="documentMutations",po.PLACEHOLDER=new po;class vo{constructor(a,e,i,n,o,r){this.unknownDocument=a,this.noDocument=e,this.document=i,this.hasCommittedMutations=n,this.readTime=o,this.parentPath=r}}vo.store="remoteDocuments",vo.readTimeIndex="readTimeIndex",vo.readTimeIndexPath="readTime",vo.collectionReadTimeIndex="collectionReadTimeIndex",vo.collectionReadTimeIndexPath=["parentPath","readTime"];class ko{constructor(a){this.byteSize=a}}ko.store="remoteDocumentGlobal",ko.key="remoteDocumentGlobalKey";class go{constructor(a,e,i,n,o,r,t){this.targetId=a,this.canonicalId=e,this.readTime=i,this.resumeToken=n,this.lastListenSequenceNumber=o,this.lastLimboFreeSnapshotVersion=r,this.query=t}}go.store="targets",go.keyPath="targetId",go.queryTargetsIndexName="queryTargetsIndex",go.queryTargetsKeyPath=["canonicalId","targetId"];class fo{constructor(a,e,i){this.targetId=a,this.path=e,this.sequenceNumber=i}}fo.store="targetDocuments",fo.keyPath=["targetId","path"],fo.documentTargetsIndex="documentTargetsIndex",fo.documentTargetsKeyPath=["path","targetId"];class bo{constructor(a,e,i,n){this.highestTargetId=a,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=i,this.targetCount=n}}bo.key="targetGlobalKey",bo.store="targetGlobal";class yo{constructor(a,e){this.collectionId=a,this.parent=e}}yo.store="collectionParents",yo.keyPath=["collectionId","parent"];class So{constructor(a,e,i,n){this.clientId=a,this.updateTimeMs=e,this.networkEnabled=i,this.inForeground=n}}So.store="clientMetadata",So.keyPath="clientId";class Mo{constructor(a,e,i){this.bundleId=a,this.createTime=e,this.version=i}}Mo.store="bundles",Mo.keyPath="bundleId";class Ao{constructor(a,e,i){this.name=a,this.readTime=e,this.bundledQuery=i}}Ao.store="namedQueries",Ao.keyPath="name";mo.store,ho.store,po.store,vo.store,go.store,co.store,bo.store,fo.store,So.store,ko.store,yo.store,Mo.store,Ao.store;function Bo(a){return"IndexedDbTransactionError"===a.name}class jo{constructor(a,e,i){this.cacheSizeCollectionThreshold=a,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}static withCacheSize(a){return new jo(a,jo.DEFAULT_COLLECTION_PERCENTILE,jo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */jo.DEFAULT_COLLECTION_PERCENTILE=10,jo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,jo.DEFAULT=new jo(41943040,jo.DEFAULT_COLLECTION_PERCENTILE,jo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),jo.DISABLED=new jo(-1,0,0);function Po(){return"undefined"!=typeof document?document:null}
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
 */class xo{constructor(a,e,i=1e3,n=1.5,o=6e4){this.Oe=a,this.timerId=e,this.Qi=i,this.Wi=n,this.Gi=o,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(a){this.cancel();const e=Math.floor(this.zi+this.Zi()),i=Math.max(0,Date.now()-this.Ji),n=Math.max(0,e-i);n>0&&zn("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,n,(()=>(this.Ji=Date.now(),a()))),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
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
class Ko{constructor(a,e,i,n,o){this.asyncQueue=a,this.timerId=e,this.targetTimeMs=i,this.op=n,this.removalCallback=o,this.deferred=new Vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}static createAndSchedule(a,e,i,n,o){const r=Date.now()+i,t=new Ko(a,e,r,n,o);return t.start(i),t}start(a){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),a)}skipDelay(){return this.handleDelayElapsed()}cancel(a){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new En(Hn.CANCELLED,"Operation cancelled"+(a?": "+a:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((a=>this.deferred.resolve(a)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function To(a,e){if(Nn("AsyncQueue",`${e}: ${a}`),Bo(a))return new En(Hn.UNAVAILABLE,`${e}: ${a}`);throw a}
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
class Co{constructor(a,e,i){this.credentials=a,this.asyncQueue=e,this.databaseInfo=i,this.user=Cn.UNAUTHENTICATED,this.clientId=Wn.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,(async a=>{zn("FirestoreClient","Received user=",a.uid),await this.credentialListener(a),this.user=a}))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(a){this.credentialListener=a}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new En(Hn.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const a=new Vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),a.resolve()}catch(e){const i=To(e,"Failed to shutdown persistence");a.reject(i)}})),a.promise}}class wo{constructor(a,e,i,n,o,r,t,s){this.databaseId=a,this.appId=e,this.persistenceKey=i,this.host=n,this.ssl=o,this.forceLongPolling=r,this.autoDetectLongPolling=t,this.useFetchStreams=s}}class Lo{constructor(a,e){this.projectId=a,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(a){return a instanceof Lo&&a.projectId===this.projectId&&a.database===this.database}}
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
 */const zo=new Map;
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
 */function No(a,e,i,n){if(!0===e&&!0===n)throw new En(Hn.INVALID_ARGUMENT,`${a} and ${i} cannot be used together.`)}
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
class _o{constructor(a){var e;if(void 0===a.host){if(void 0!==a.ssl)throw new En(Hn.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=a.host,this.ssl=null===(e=a.ssl)||void 0===e||e;if(this.credentials=a.credentials,this.ignoreUndefinedProperties=!!a.ignoreUndefinedProperties,void 0===a.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==a.cacheSizeBytes&&a.cacheSizeBytes<1048576)throw new En(Hn.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=a.cacheSizeBytes}this.experimentalForceLongPolling=!!a.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!a.experimentalAutoDetectLongPolling,this.useFetchStreams=!!a.useFetchStreams,No("experimentalForceLongPolling",a.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",a.experimentalAutoDetectLongPolling)}isEqual(a){return this.host===a.host&&this.ssl===a.ssl&&this.credentials===a.credentials&&this.cacheSizeBytes===a.cacheSizeBytes&&this.experimentalForceLongPolling===a.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===a.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===a.ignoreUndefinedProperties&&this.useFetchStreams===a.useFetchStreams}}
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
 */class Ro{constructor(a,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _o({}),this._settingsFrozen=!1,a instanceof Lo?this._databaseId=a:(this._app=a,this._databaseId=function(a){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new En(Hn.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(a.options.projectId)}(a))}get app(){if(!this._app)throw new En(Hn.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(a){if(this._settingsFrozen)throw new En(Hn.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _o(a),void 0!==a.credentials&&(this._credentials=function(a){if(!a)return new Fn;switch(a.type){case"gapi":const e=a.client;return Dn(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new On(e,a.sessionIndex||"0",a.iamToken||null);case"provider":return a.client;default:throw new En(Hn.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(a.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(a){const e=zo.get(a);e&&(zn("ComponentProvider","Removing Datastore"),zo.delete(a),e.terminate())}(this),Promise.resolve()}}
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
class Do{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new xo(this,"async_queue_retry"),this.Rc=()=>{const a=Po();a&&zn("AsyncQueue","Visibility state changed to "+a.visibilityState),this.ar.tr()};const a=Po();a&&"function"==typeof a.addEventListener&&a.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(a){this.enqueue(a)}enqueueAndForgetEvenWhileRestricted(a){this.bc(),this.Pc(a)}enterRestrictedMode(a){if(!this.gc){this.gc=!0,this.Ic=a||!1;const e=Po();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Rc)}}enqueue(a){if(this.bc(),this.gc)return new Promise((()=>{}));const e=new Vn;return this.Pc((()=>this.gc&&this.Ic?Promise.resolve():(a().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(a){this.enqueueAndForget((()=>(this.mc.push(a),this.vc())))}async vc(){if(0!==this.mc.length){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(S){if(!Bo(S))throw S;zn("AsyncQueue","Operation failed with retryable error: "+S)}this.mc.length>0&&this.ar.Xi((()=>this.vc()))}}Pc(a){const e=this._c.then((()=>(this.Ec=!0,a().catch((a=>{this.Tc=a,this.Ec=!1;const e=function(a){let e=a.message||"";return a.stack&&(e=a.stack.includes(a.message)?a.stack:a.message+"\n"+a.stack),e}
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
 */(a);throw Nn("INTERNAL UNHANDLED ERROR: ",e),a})).then((a=>(this.Ec=!1,a))))));return this._c=e,e}enqueueAfterDelay(a,e,i){this.bc(),this.Ac.indexOf(a)>-1&&(e=0);const n=Ko.createAndSchedule(this,a,e,i,(a=>this.Vc(a)));return this.yc.push(n),n}bc(){this.Tc&&Rn()}verifyOperationInProgress(){}async Sc(){let a;do{a=this._c,await a}while(a!==this._c)}Dc(a){for(const e of this.yc)if(e.timerId===a)return!0;return!1}Cc(a){return this.Sc().then((()=>{this.yc.sort(((a,e)=>a.targetTimeMs-e.targetTimeMs));for(const e of this.yc)if(e.skipDelay(),"all"!==a&&e.timerId===a)break;return this.Sc()}))}Nc(a){this.Ac.push(a)}Vc(a){const e=this.yc.indexOf(a);this.yc.splice(e,1)}}class Ho extends Ro{constructor(a,e){super(a,e),this.type="firestore",this._queue=new Do,this._persistenceKey="name"in a?a.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Vo(this),this._firestoreClient.terminate()}}function Eo(a=(0,o.Mq)()){return(0,o.qX)(a,"firestore").getImmediate()}function Vo(a){var e;const i=a._freezeSettings(),n=function(a,e,i,n){return new wo(a,e,i,n.host,n.ssl,n.experimentalForceLongPolling,n.experimentalAutoDetectLongPolling,n.useFetchStreams)}(a._databaseId,(null===(e=a._app)||void 0===e?void 0:e.options.appId)||"",a._persistenceKey,i);a._firestoreClient=new Co(a._credentials,a._queue,n)}!function(a,e=!0){!function(a){wn=a}(o.Jn),(0,o.Xd)(new r.wA("firestore",((a,{options:i})=>{const n=a.getProvider("app").getImmediate(),o=new Ho(n,new In(a.getProvider("auth-internal")));return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o}),"PUBLIC")),(0,o.KN)(Tn,"3.2.0",a),(0,o.KN)(Tn,"3.2.0","esm2017")}()},1794:(a,e,i)=>{"use strict";i.d(e,{$C:()=>k});var n=i(97458),o=i(95479),r=i(17429);
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
const t="functions";
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
class s{constructor(a,e,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=a.getImmediate({optional:!0}),this.messaging=e.getImmediate({optional:!0}),this.auth||a.get().then((a=>this.auth=a),(()=>{})),this.messaging||e.get().then((a=>this.messaging=a),(()=>{})),this.appCheck||i.get().then((a=>this.appCheck=a),(()=>{}))}async getAuthToken(){if(this.auth)try{const a=await this.auth.getToken();return null===a||void 0===a?void 0:a.accessToken}catch(a){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(a){return}}async getAppCheckToken(){if(this.appCheck){const a=await this.appCheck.getToken();return a.error?null:a.token}return null}async getContext(){const a=await this.getAuthToken(),e=await this.getMessagingToken(),i=await this.getAppCheckToken();return{authToken:a,messagingToken:e,appCheckToken:i}}}
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
 */const l="us-central1";class u{constructor(a,e,i,n,o=l,r){this.app=a,this.fetchImpl=r,this.emulatorOrigin=null,this.contextProvider=new s(e,i,n),this.cancelAllRequests=new Promise((a=>{this.deleteService=()=>Promise.resolve(a())}));try{const a=new URL(o);this.customDomain=a.origin,this.region=l}catch(t){this.customDomain=null,this.region=o}}_delete(){return this.deleteService()}_url(a){const e=this.app.options.projectId;if(null!==this.emulatorOrigin){const i=this.emulatorOrigin;return`${i}/${e}/${this.region}/${a}`}return null!==this.customDomain?`${this.customDomain}/${a}`:`https://${this.region}-${e}.cloudfunctions.net/${a}`}}const c="@firebase/functions",d="0.7.3",m="auth-internal",h="app-check-internal",p="messaging-internal";function v(a,e){const i=(e,{instanceIdentifier:i})=>{const n=e.getProvider("app").getImmediate(),o=e.getProvider(m),r=e.getProvider(p),t=e.getProvider(h);return new u(n,o,r,t,i,a)};(0,n.Xd)(new r.wA(t,i,"PUBLIC").setMultipleInstances(!0)),(0,n.KN)(c,d,e),(0,n.KN)(c,d,"esm2017")}
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
 */function k(a=(0,n.Mq)(),e=l){const i=(0,n.qX)((0,o.m9)(a),t),r=i.getImmediate({identifier:e});return r}v(fetch.bind(self))},5931:(a,e,i)=>{"use strict";i.d(e,{r:()=>Ya});var n=i(95479),o=i(50004),r=i(97458),t=i(17429);i(61214);const s="@firebase/performance",l="0.5.2",u=l,c="FB-PERF-TRACE-START",d="FB-PERF-TRACE-STOP",m="FB-PERF-TRACE-MEASURE",h="_wt_",p="_fp",v="_fcp",k="_fid",g="@firebase/performance/config",f="@firebase/performance/configexpire",b="performance",y="Performance",S={["trace started"]:"Trace {$traceName} was started before.",["trace stopped"]:"Trace {$traceName} is not running.",["nonpositive trace startTime"]:"Trace {$traceName} startTime should be positive.",["nonpositive trace duration"]:"Trace {$traceName} duration should be positive.",["no window"]:"Window is not available.",["no app id"]:"App id is not available.",["no project id"]:"Project id is not available.",["no api key"]:"Api key is not available.",["invalid cc log"]:"Attempted to queue invalid cc event",["FB not default"]:"Performance can only start when Firebase app instance is the default one.",["RC response not ok"]:"RC response is not ok",["invalid attribute name"]:"Attribute name {$attributeName} is invalid.",["invalid attribute value"]:"Attribute value {$attributeValue} is invalid.",["invalid custom metric name"]:"Custom metric name {$customMetricName} is invalid",["invalid String merger input"]:"Input for String merger is invalid, contact support team to resolve.",["already initialized"]:"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},M=new n.LL(b,y,S),A=new o.Yd(y);
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
let B,j,P,x;A.logLevel=o["in"].INFO;class K{constructor(a){if(this.window=a,!a)throw M.create("no window");this.performance=a.performance,this.PerformanceObserver=a.PerformanceObserver,this.windowLocation=a.location,this.navigator=a.navigator,this.document=a.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=a.localStorage),a.perfMetrics&&a.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=a.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(a){this.performance&&this.performance.mark&&this.performance.mark(a)}measure(a,e,i){this.performance&&this.performance.measure&&this.performance.measure(a,e,i)}getEntriesByType(a){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(a):[]}getEntriesByName(a){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(a):[]}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return fetch&&Promise&&(0,n.zI)()?!!(0,n.hl)()||(A.info("IndexedDB is not supported by current browswer"),!1):(A.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)}setupObserver(a,e){if(!this.PerformanceObserver)return;const i=new this.PerformanceObserver((a=>{for(const i of a.getEntries())e(i)}));i.observe({entryTypes:[a]})}static getInstance(){return void 0===B&&(B=new K(j)),B}}function T(a){j=a}
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
 */function C(a){const e=a.getId();return e.then((a=>{P=a})),e}function w(){return P}function L(a){const e=a.getToken();return e.then((a=>{})),e}
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
/**
 * @license
 *