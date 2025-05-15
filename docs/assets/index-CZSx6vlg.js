(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var U;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(U||(U={}));/**
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
 */var H;(function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"})(H||(H={}));var k;(function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(k||(k={}));/**
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
 */const F=["user","model","function","system"];var P;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",e.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(P||(P={}));var j;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(j||(j={}));var K;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(K||(K={}));var Y;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(Y||(Y={}));var S;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.SPII="SPII",e.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",e.OTHER="OTHER"})(S||(S={}));var q;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(q||(q={}));var W;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(W||(W={}));var V;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(V||(V={}));/**
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
 */class v extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class T extends v{constructor(t,n){super(t),this.response=n}}class ae extends v{constructor(t,n,s,o){super(t),this.status=n,this.statusText=s,this.errorDetails=o}}class b extends v{}class re extends v{}/**
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
 */const ve="https://generativelanguage.googleapis.com",ye="v1beta",me="0.24.1",Ce="genai-js";var R;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(R||(R={}));class _e{constructor(t,n,s,o,i){this.model=t,this.task=n,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var t,n;const s=((t=this.requestOptions)===null||t===void 0?void 0:t.apiVersion)||ye;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||ve}/${s}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function Ie(e){const t=[];return e!=null&&e.apiClient&&t.push(e.apiClient),t.push(`${Ce}/${me}`),t.join(" ")}async function be(e){var t;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",Ie(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let s=(t=e.requestOptions)===null||t===void 0?void 0:t.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new b(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,i]of s.entries()){if(o==="x-goog-api-key")throw new b(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new b(`Header name ${o} can only be set using the apiClient field`);n.append(o,i)}}return n}async function Oe(e,t,n,s,o,i){const a=new _e(e,t,n,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},we(i)),{method:"POST",headers:await be(a),body:o})}}async function L(e,t,n,s,o,i={},a=fetch){const{url:r,fetchOptions:c}=await Oe(e,t,n,s,o,i);return Re(r,c,a)}async function Re(e,t,n=fetch){let s;try{s=await n(e,t)}catch(o){Te(o,e)}return s.ok||await Ae(s,e),s}function Te(e,t){let n=e;throw n.name==="AbortError"?(n=new re(`Request aborted when fetching ${t.toString()}: ${e.message}`),n.stack=e.stack):e instanceof ae||e instanceof b||(n=new v(`Error fetching from ${t.toString()}: ${e.message}`),n.stack=e.stack),n}async function Ae(e,t){let n="",s;try{const o=await e.json();n=o.error.message,o.error.details&&(n+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new ae(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${n}`,e.status,e.statusText,s)}function we(e){const t={};if((e==null?void 0:e.signal)!==void 0||(e==null?void 0:e.timeout)>=0){const n=new AbortController;(e==null?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),e!=null&&e.signal&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}/**
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
 */function $(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),D(e.candidates[0]))throw new T(`${I(e)}`,e);return Se(e)}else if(e.promptFeedback)throw new T(`Text not available. ${I(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),D(e.candidates[0]))throw new T(`${I(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),J(e)[0]}else if(e.promptFeedback)throw new T(`Function call not available. ${I(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),D(e.candidates[0]))throw new T(`${I(e)}`,e);return J(e)}else if(e.promptFeedback)throw new T(`Function call not available. ${I(e)}`,e)},e}function Se(e){var t,n,s,o;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```"+a.executableCode.language+`
`+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function J(e){var t,n,s,o;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.functionCall&&i.push(a.functionCall);if(i.length>0)return i}const Ne=[S.RECITATION,S.SAFETY,S.LANGUAGE];function D(e){return!!e.finishReason&&Ne.includes(e.finishReason)}function I(e){var t,n,s;let o="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)o+="Response was blocked",!((t=e.promptFeedback)===null||t===void 0)&&t.blockReason&&(o+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((s=e.candidates)===null||s===void 0)&&s[0]){const i=e.candidates[0];D(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function N(e){return this instanceof N?(this.v=e,this):new N(e)}function Me(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=n.apply(e,t||[]),o,i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(l){s[l]&&(o[l]=function(d){return new Promise(function(E,_){i.push([l,d,E,_])>1||r(l,d)})})}function r(l,d){try{c(s[l](d))}catch(E){C(i[0][3],E)}}function c(l){l.value instanceof N?Promise.resolve(l.value.v).then(p,m):C(i[0][2],l)}function p(l){r("next",l)}function m(l){r("throw",l)}function C(l,d){l(d),i.shift(),i.length&&r(i[0][0],i[0][1])}}/**
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
 */const X=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Le(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=Ge(t),[s,o]=n.tee();return{stream:De(s),response:xe(o)}}async function xe(e){const t=[],n=e.getReader();for(;;){const{done:s,value:o}=await n.read();if(s)return $(Be(t));t.push(o)}}function De(e){return Me(this,arguments,function*(){const n=e.getReader();for(;;){const{value:s,done:o}=yield N(n.read());if(o)break;yield yield N($(s))}})}function Ge(e){const t=e.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return t.read().then(({value:a,done:r})=>{if(r){if(o.trim()){s.error(new v("Failed to parse stream"));return}s.close();return}o+=a;let c=o.match(X),p;for(;c;){try{p=JSON.parse(c[1])}catch{s.error(new v(`Error parsing JSON response: "${c[1]}"`));return}s.enqueue(p),o=o.substring(c[0].length),c=o.match(X)}return i()}).catch(a=>{let r=a;throw r.stack=a.stack,r.name==="AbortError"?r=new re("Request aborted when reading from the stream"):r=new v("Error reading from the stream"),r})}}})}function Be(e){const t=e[e.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const s of e){if(s.candidates){let o=0;for(const i of s.candidates)if(n.candidates||(n.candidates=[]),n.candidates[o]||(n.candidates[o]={index:o}),n.candidates[o].citationMetadata=i.citationMetadata,n.candidates[o].groundingMetadata=i.groundingMetadata,n.candidates[o].finishReason=i.finishReason,n.candidates[o].finishMessage=i.finishMessage,n.candidates[o].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[o].content||(n.candidates[o].content={role:i.content.role||"user",parts:[]});const a={};for(const r of i.content.parts)r.text&&(a.text=r.text),r.functionCall&&(a.functionCall=r.functionCall),r.executableCode&&(a.executableCode=r.executableCode),r.codeExecutionResult&&(a.codeExecutionResult=r.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),n.candidates[o].content.parts.push(a)}o++}s.usageMetadata&&(n.usageMetadata=s.usageMetadata)}return n}/**
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
 */async function ce(e,t,n,s){const o=await L(t,R.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),s);return Le(o)}async function de(e,t,n,s){const i=await(await L(t,R.GENERATE_CONTENT,e,!1,JSON.stringify(n),s)).json();return{response:$(i)}}/**
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
 */function le(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function M(e){let t=[];if(typeof e=="string")t=[{text:e}];else for(const n of e)typeof n=="string"?t.push({text:n}):t.push(n);return $e(t)}function $e(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let s=!1,o=!1;for(const i of e)"functionResponse"in i?(n.parts.push(i),o=!0):(t.parts.push(i),s=!0);if(s&&o)throw new v("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new v("No content is provided for sending chat message.");return s?t:n}function Ue(e,t){var n;let s={model:t==null?void 0:t.model,generationConfig:t==null?void 0:t.generationConfig,safetySettings:t==null?void 0:t.safetySettings,tools:t==null?void 0:t.tools,toolConfig:t==null?void 0:t.toolConfig,systemInstruction:t==null?void 0:t.systemInstruction,cachedContent:(n=t==null?void 0:t.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const o=e.generateContentRequest!=null;if(e.contents){if(o)throw new b("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=e.contents}else if(o)s=Object.assign(Object.assign({},s),e.generateContentRequest);else{const i=M(e);s.contents=[i]}return{generateContentRequest:s}}function z(e){let t;return e.contents?t=e:t={contents:[M(e)]},e.systemInstruction&&(t.systemInstruction=le(e.systemInstruction)),t}function He(e){return typeof e=="string"||Array.isArray(e)?{content:M(e)}:e}/**
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
 */const Q=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],ke={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Fe(e){let t=!1;for(const n of e){const{role:s,parts:o}=n;if(!t&&s!=="user")throw new v(`First content should be with role 'user', got ${s}`);if(!F.includes(s))throw new v(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(F)}`);if(!Array.isArray(o))throw new v("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new v("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const r of o)for(const c of Q)c in r&&(i[c]+=1);const a=ke[s];for(const r of Q)if(!a.includes(r)&&i[r]>0)throw new v(`Content with role '${s}' can't contain '${r}' part`);t=!0}}function Z(e){var t;if(e.candidates===void 0||e.candidates.length===0)return!1;const n=(t=e.candidates[0])===null||t===void 0?void 0:t.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const s of n.parts)if(s===void 0||Object.keys(s).length===0||s.text!==void 0&&s.text==="")return!1;return!0}/**
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
 */const ee="SILENT_ERROR";class Pe{constructor(t,n,s,o={}){this.model=n,this.params=s,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,s!=null&&s.history&&(Fe(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,n={}){var s,o,i,a,r,c;await this._sendPromise;const p=M(t),m={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(c=this.params)===null||c===void 0?void 0:c.cachedContent,contents:[...this._history,p]},C=Object.assign(Object.assign({},this._requestOptions),n);let l;return this._sendPromise=this._sendPromise.then(()=>de(this._apiKey,this.model,m,C)).then(d=>{var E;if(Z(d.response)){this._history.push(p);const _=Object.assign({parts:[],role:"model"},(E=d.response.candidates)===null||E===void 0?void 0:E[0].content);this._history.push(_)}else{const _=I(d.response);_&&console.warn(`sendMessage() was unsuccessful. ${_}. Inspect response object for details.`)}l=d}).catch(d=>{throw this._sendPromise=Promise.resolve(),d}),await this._sendPromise,l}async sendMessageStream(t,n={}){var s,o,i,a,r,c;await this._sendPromise;const p=M(t),m={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(c=this.params)===null||c===void 0?void 0:c.cachedContent,contents:[...this._history,p]},C=Object.assign(Object.assign({},this._requestOptions),n),l=ce(this._apiKey,this.model,m,C);return this._sendPromise=this._sendPromise.then(()=>l).catch(d=>{throw new Error(ee)}).then(d=>d.response).then(d=>{if(Z(d)){this._history.push(p);const E=Object.assign({},d.candidates[0].content);E.role||(E.role="model"),this._history.push(E)}else{const E=I(d);E&&console.warn(`sendMessageStream() was unsuccessful. ${E}. Inspect response object for details.`)}}).catch(d=>{d.message!==ee&&console.error(d)}),l}}/**
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
 */async function je(e,t,n,s){return(await L(t,R.COUNT_TOKENS,e,!1,JSON.stringify(n),s)).json()}/**
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
 */async function Ke(e,t,n,s){return(await L(t,R.EMBED_CONTENT,e,!1,JSON.stringify(n),s)).json()}async function Ye(e,t,n,s){const o=n.requests.map(a=>Object.assign(Object.assign({},a),{model:t}));return(await L(t,R.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:o}),s)).json()}/**
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
 */class te{constructor(t,n,s={}){this.apiKey=t,this._requestOptions=s,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=le(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(t,n={}){var s;const o=z(t),i=Object.assign(Object.assign({},this._requestOptions),n);return de(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}async generateContentStream(t,n={}){var s;const o=z(t),i=Object.assign(Object.assign({},this._requestOptions),n);return ce(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}startChat(t){var n;return new Pe(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},t),this._requestOptions)}async countTokens(t,n={}){const s=Ue(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),n);return je(this.apiKey,this.model,s,o)}async embedContent(t,n={}){const s=He(t),o=Object.assign(Object.assign({},this._requestOptions),n);return Ke(this.apiKey,this.model,s,o)}async batchEmbedContents(t,n={}){const s=Object.assign(Object.assign({},this._requestOptions),n);return Ye(this.apiKey,this.model,t,s)}}/**
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
 */class qe{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new v("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new te(this.apiKey,t,n)}getGenerativeModelFromCachedContent(t,n,s){if(!t.name)throw new b("Cached content must contain a `name` field.");if(!t.model)throw new b("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const a of o)if(n!=null&&n[a]&&t[a]&&(n==null?void 0:n[a])!==t[a]){if(a==="model"){const r=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,c=t.model.startsWith("models/")?t.model.replace("models/",""):t.model;if(r===c)continue}throw new b(`Different value for "${a}" specified in modelParams (${n[a]}) and cachedContent (${t[a]})`)}const i=Object.assign(Object.assign({},n),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new te(this.apiKey,i,s)}}function We(e){const n=new qe(e).getGenerativeModel({model:"gemini-1.5-flash"});async function s(i,a,r){try{const c=`
        I just completed a typing test with the following results:
        - Words per minute (WPM): ${i}
        - Accuracy: ${a}%
        - Total time: ${Math.round(r)} seconds
        
        Please provide a brief assessment of my typing performance and a tip to improve.
        Keep your response under 150 characters.
      `;return(await(await n.generateContent(c)).response).text()}catch(c){return console.error("Error generating feedback with Gemini API:",c),"Error generating feedback. Check your API key and connection."}}async function o(i="medium",a="general"){try{const r=`
        Generate a paragraph for a typing test with the following criteria:
        - Difficulty level: ${i} (vocabulary and sentence complexity)
        - Topic: ${a}
        - Length: 1-3 sentences for 'easy', 3-4 sentences for 'medium', 4-6 sentences for 'hard'
        - Must be coherent and meaningful
        - Avoid extremely uncommon words, symbols or special characters
        - Make it interesting and educational
        
        Return just the paragraph text with no additional commentary, quotes, or formatting.
      `;return(await(await n.generateContent(r)).response).text().trim()}catch(r){return console.error("Error generating paragraph with Gemini API:",r),"An error occurred while generating the paragraph. Using default paragraph instead."}}return{generateFeedback:s,generateParagraph:o}}document.querySelector("#app").innerHTML=`
  <div class="container">
    <h1>AI-Powered Typing Test</h1>
    
    <div class="settings" id="settings-panel">
      <div class="setting-group">
        <label for="difficulty">Difficulty:</label>
        <select id="difficulty">
          <option value="easy">Easy</option>
          <option value="medium" selected>Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      
      <div class="setting-group">
        <label for="topic">Topic:</label>
        <select id="topic">
          <option value="general" selected>General</option>
          <option value="technology">Technology</option>
          <option value="science">Science</option>
          <option value="history">History</option>
          <option value="literature">Literature</option>
        </select>
      </div>
      
      <button id="generate-btn">Generate New Paragraph</button>
    </div>
    
    <div class="timer-container">
      <div class="timer" id="timer">00:00</div>
    </div>
    
    <div class="test-container">
      <div class="loading" id="loading-indicator" style="display: none;">
        <div class="spinner"></div>
        <p>Generating paragraph...</p>
      </div>
      <div class="test-text" id="test-text"></div>
      <textarea id="typing-input" placeholder="Start typing when ready..." disabled></textarea>
    </div>
    
    <div class="controls">
      <button id="start-btn">Start Test</button>
      <button id="reset-btn" disabled>Reset</button>
    </div>
    
    <div class="results" id="results-container" style="display: none;">
      <h2>Results</h2>
      <div class="result-grid">
        <div class="result-card">
          <div class="result-icon">⚡</div>
          <div class="result-value" id="wpm-display">0</div>
          <div class="result-label">WPM</div>
        </div>
        <div class="result-card">
          <div class="result-icon">🎯</div>
          <div class="result-value" id="accuracy-display">0%</</div>
          <div class="result-label">Accuracy</div>
        </div>
        <div class="result-card">
          <div class="result-icon">⏱️</div>
          <div class="result-value" id="time-display">0s</div>
          <div class="result-label">Time</div>
        </div>
      </div>
      <div id="feedback" class="feedback"></div>
      <button id="share-btn">Share Results</button>
    </div>
  </div>
`;const ne=["The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet at least once.","Programming is the process of creating a set of instructions that tell a computer how to perform a task.","Typing speed is measured in words per minute, which is abbreviated as WPM.","A good programmer is someone who always looks both ways before crossing a one-way street.","The best way to predict the future is to invent it. Believe you can change the world and you're halfway there."];let G,w=0,A=!1,se,oe,O="",B=!1;const ie=We("AIzaSyAONiBoc9W-hwqilnWeKY1uvvMWz5EQSiI");document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("typing-input"),t=document.getElementById("test-text"),n=document.getElementById("timer"),s=document.getElementById("start-btn"),o=document.getElementById("reset-btn"),i=document.getElementById("generate-btn"),a=document.getElementById("results-container"),r=document.getElementById("loading-indicator"),c=document.getElementById("difficulty"),p=document.getElementById("topic"),m=document.getElementById("share-btn");function C(){const u=Math.floor(Math.random()*ne.length);return ne[u]}async function l(){if(!B){B=!0,t.innerHTML="",r.style.display="flex";try{const u=c.value,g=p.value,h=await ie.generateParagraph(u,g);O=h,A||d(h)}catch(u){console.error("Error generating paragraph:",u),O=C(),A||d(O)}finally{r.style.display="none",B=!1}}}function d(u){t.innerHTML=u.split("").map(g=>`<span>${g}</span>`).join("")}async function E(){O||await l(),A=!0,se=new Date().getTime(),w=0,a.style.display="none",document.getElementById("feedback").textContent="",s.disabled=!0,o.disabled=!1,e.disabled=!1,c.disabled=!0,p.disabled=!0,i.disabled=!0,d(O),e.value="",e.focus(),G=setInterval(_,1e3)}function _(){w++;const u=Math.floor(w/60),g=w%60;n.textContent=`${u.toString().padStart(2,"0")}:${g.toString().padStart(2,"0")}`}async function ue(){A=!1,oe=new Date().getTime(),clearInterval(G);const u=(oe-se)/1e3,g=e.value.trim(),h=fe(g,u),y=he(O,g);document.getElementById("wpm-display").textContent=h,document.getElementById("accuracy-display").textContent=`${y}%`,document.getElementById("time-display").textContent=`${Math.round(u)}s`,a.style.display="block";try{const f=await ge(h,y,u);document.getElementById("feedback").textContent=f}catch(f){console.error("Error getting feedback:",f),document.getElementById("feedback").textContent="Could not generate feedback at this time."}o.disabled=!1,s.disabled=!1,e.disabled=!0,c.disabled=!1,p.disabled=!1,i.disabled=!1}function fe(u,g){const h=u.split(/\s+/).filter(f=>f.length>0),y=g/60;return Math.round(h.length/y)}function he(u,g){if(!g)return 0;const h=u.split(/\s+/),y=g.split(/\s+/);let f=0;for(let x=0;x<Math.min(h.length,y.length);x++)h[x]===y[x]&&f++;return Math.round(f/h.length*100)}async function ge(u,g,h){return await ie.generateFeedback(u,g,h)}function pe(){clearInterval(G),w=0,n.textContent="00:00",e.value="",t.innerHTML="",A=!1,s.disabled=!1,o.disabled=!0,e.disabled=!0,c.disabled=!1,p.disabled=!1,i.disabled=!1,a.style.display="none"}function Ee(){const u=document.getElementById("wpm-display").textContent,g=document.getElementById("accuracy-display").textContent,h=document.getElementById("time-display").textContent,y=`I just completed a typing test with ${u} WPM, ${g} accuracy in ${h}! #TypingTest`,f=document.createElement("textarea");f.value=y,document.body.appendChild(f),f.select(),document.execCommand("copy"),document.body.removeChild(f),alert("Results copied to clipboard! You can now paste and share them.")}e.addEventListener("input",function(){if(!A)return;const u=e.value,g=O,h=t.querySelectorAll("span"),y=u.split("");for(let f=0;f<h.length;f++)f<y.length?y[f]===h[f].innerText?(h[f].classList.add("correct"),h[f].classList.remove("incorrect")):(h[f].classList.add("incorrect"),h[f].classList.remove("correct")):h[f].classList.remove("correct","incorrect");u.length>=g.length&&ue()}),s.addEventListener("click",E),o.addEventListener("click",pe),i.addEventListener("click",l),m.addEventListener("click",Ee),l()});
