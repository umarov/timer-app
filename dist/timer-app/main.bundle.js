!function(e){function t(t){for(var n,s,i=t[0],o=t[1],a=0,l=[];a<i.length;a++)s=i[a],r[s]&&l.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(c&&c(t);l.length;)l.shift()()}var n={},r={0:0};function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,s){n=r[e]=[t,s]});t.push(n[2]=i);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=function(e){return s.p+""+({1:"timer-actions",2:"timer-display",3:"timer-progress-bar",4:"timer-worker"}[e]||e)+".bundle.js"}(e),o=function(t){a.onerror=a.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+s+": "+i+")");o.type=s,o.request=i,n[1](o)}r[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="dist/timer-app/",s.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var c=o;s(s.s=11)}([function(e,t,n){"use strict";n.d(t,"f",function(){return r}),n.d(t,"g",function(){return s}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return l}),n.d(t,"e",function(){return u});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${r}--\x3e`,i=new RegExp(`${r}|${s}`),o="$lit$";class a{constructor(e,t){this.parts=[],this.element=t;let n=-1,s=0;const a=[],c=t=>{const d=t.content,h=document.createTreeWalker(d,133,null,!1);let p=0;for(;h.nextNode();){n++;const t=h.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const a=t.attributes;let c=0;for(let e=0;e<a.length;e++)a[e].value.indexOf(r)>=0&&c++;for(;c-- >0;){const r=e.strings[s],a=u.exec(r)[2],c=a.toLowerCase()+o,l=t.getAttribute(c).split(i);this.parts.push({type:"attribute",index:n,name:a,strings:l}),t.removeAttribute(c),s+=l.length-1}}"TEMPLATE"===t.tagName&&c(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(r)>=0){const r=t.parentNode,o=e.split(i),c=o.length-1;for(let e=0;e<c;e++)r.insertBefore(""===o[e]?l():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++n});""===o[c]?(r.insertBefore(l(),t),a.push(t)):t.data=o[c],s+=c}}else if(8===t.nodeType)if(t.data===r){const e=t.parentNode;null!==t.previousSibling&&n!==p||(n++,e.insertBefore(l(),t)),p=n,this.parts.push({type:"node",index:n}),null===t.nextSibling?t.data="":(a.push(t),n--),s++}else{let e=-1;for(;-1!==(e=t.data.indexOf(r,e+1));)this.parts.push({type:"node",index:-1})}}};c(t);for(const e of a)e.parentNode.removeChild(e)}}const c=e=>-1!==e.index,l=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"d",function(){return h}),n.d(t,"b",function(){return p}),n.d(t,"e",function(){return f}),n.d(t,"c",function(){return v});var r=n(7),s=n(3),i=n(2),o=n(10),a=n(5),c=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const l=e=>null===e||!("object"==typeof e||"function"==typeof e);class u{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new d(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class d{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===i.a||l(e)&&e===this.value||(this.value=e,Object(r.a)(e)||(this.committer.dirty=!0))}commit(){for(;Object(r.a)(this.value);){const e=this.value;this.value=i.a,e(this)}this.value!==i.a&&this.committer.commit()}}class h{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Object(c.c)()),this.endNode=e.appendChild(Object(c.c)())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=Object(c.c)()),e._insert(this.endNode=Object(c.c)())}insertAfterPart(e){e._insert(this.startNode=Object(c.c)()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;Object(r.a)(this._pendingValue);){const e=this._pendingValue;this._pendingValue=i.a,e(this)}const e=this._pendingValue;e!==i.a&&(l(e)?e!==this.value&&this._commitText(e):e instanceof a.b?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===i.b?(this.value=i.b,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof o.a&&this.value.template===t)this.value.update(e.values);else{const n=new o.a(t,e.processor,this.options),r=n._clone();n.update(e.values),this._commitNode(r),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const s of e)void 0===(n=t[r])&&(n=new h(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(s),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){Object(s.b)(this.startNode.parentNode,e.nextSibling,this.endNode)}}class p{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;Object(r.a)(this._pendingValue);){const e=this._pendingValue;this._pendingValue=i.a,e(this)}if(this._pendingValue===i.a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=i.a}}class f extends u{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new m(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class m extends d{}let y=!1;try{const e={get capture(){return y=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class v{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;Object(r.a)(this._pendingValue);){const e=this._pendingValue;this._pendingValue=i.a,e(this)}if(this._pendingValue===i.a)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),s&&(this._options=g(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=i.a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const g=e=>e&&(y?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return s});
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r={},s={}},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return s}),n.d(t,"b",function(){return i});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,t,n=null,r=null)=>{let s=t;for(;s!==n;){const t=s.nextSibling;e.insertBefore(s,r),s=t}},i=(e,t,n=null)=>{let r=t;for(;r!==n;){const t=r.nextSibling;e.removeChild(r),r=t}}},function(e,t,n){"use strict";var r=n(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const s=new class{handleAttributeExpressions(e,t,n,s){const i=t[0];return"."===i?new r.e(e,t.slice(1),n).parts:"@"===i?[new r.c(e,t.slice(1),s.eventContext)]:"?"===i?[new r.b(e,t.slice(1),n)]:new r.a(e,t,n).parts}handleTextExpression(e){return new r.d(e)}};var i=n(5);n(7),n(3),n(2),n(8),n(6),n(10),n(0);n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i.b}),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const o=(e,...t)=>new i.b(e,t,"html",s)},function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return o});var r=n(3),s=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class i{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){const e=this.strings[n],r=s.e.exec(e);t+=r?e.substr(0,r.index)+r[1]+r[2]+s.b+r[3]+s.f:e+s.g}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class o extends i{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),Object(r.c)(t,n.firstChild),e}}},function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return i});var r=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function s(e){let t=i.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},i.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(r.f);return void 0===(n=t.keyString.get(s))&&(n=new r.a(e,e.getTemplateElement()),t.keyString.set(s,n)),t.stringsArray.set(e.strings,n),n}const i=new Map},function(e,t,n){"use strict";n.d(t,"a",function(){return s});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=new WeakMap,s=e=>"function"==typeof e&&r.has(e)},function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a});var r=n(3),s=n(1),i=n(6);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=new WeakMap,a=(e,t,n)=>{let a=o.get(t);void 0===a&&(Object(r.b)(t,t.firstChild),o.set(t,a=new s.d(Object.assign({templateFactory:i.b},n))),a.appendInto(t)),a.setValue(e),a.commit()}},function(e,t,n){"use strict";var r=n(4),s=n(3),i=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=133;function a(e,t){const{element:{content:n},parts:r}=e,s=document.createTreeWalker(n,o,null,!1);let i=l(r),a=r[i],c=-1,u=0;const d=[];let h=null;for(;s.nextNode();){c++;const e=s.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(d.push(e),null===h&&(h=e)),null!==h&&u++;void 0!==a&&a.index===c;)a.index=null!==h?-1:a.index-u,a=r[i=l(r,i)]}d.forEach(e=>e.parentNode.removeChild(e))}const c=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,o,null,!1);for(;n.nextNode();)t++;return t},l=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(Object(i.d)(t))return n}return-1};var u=n(8),d=n(6),h=n(10),p=n(5);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const f=(e,t)=>`${e}--${t}`;let m=!0;void 0===window.ShadyCSS?m=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),m=!1);const y=e=>t=>{const n=f(t.type,e);let r=d.a.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},d.a.set(n,r));let s=r.stringsArray.get(t.strings);if(void 0!==s)return s;const o=t.strings.join(i.f);if(void 0===(s=r.keyString.get(o))){const n=t.getTemplateElement();m&&window.ShadyCSS.prepareTemplateDom(n,e),s=new i.a(t,n),r.keyString.set(o,s)}return r.stringsArray.set(t.strings,s),s},v=["html","svg"],g=new Set,b=(e,t,n)=>{g.add(n);const r=e.querySelectorAll("style");if(0===r.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,n);const s=document.createElement("style");for(let e=0;e<r.length;e++){const t=r[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}if((e=>{v.forEach(t=>{const n=d.a.get(f(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),a(e,n)})})})(n),function(e,t,n=null){const{element:{content:r},parts:s}=e;if(null==n)return void r.appendChild(t);const i=document.createTreeWalker(r,o,null,!1);let a=l(s),u=0,d=-1;for(;i.nextNode();)for(d++,i.currentNode===n&&(u=c(t),n.parentNode.insertBefore(t,n));-1!==a&&s[a].index===d;){if(u>0){for(;-1!==a;)s[a].index+=u,a=l(s,a);return}a=l(s,a)}}(t,s,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(s,t.element.content.firstChild);const e=new Set;e.add(s),a(t,e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=((e,t)=>e);const _={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},S=(e,t)=>t!==e&&(t==t||e==e),w={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:S},P=Promise.resolve(!0),C=1,x=4,E=8,T=16,O=32;class k extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=P,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=w){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const r=this[e];this[n]=t,this.requestUpdate(e,r)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=S){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||_,s="function"==typeof r?r:r.fromAttribute;return s?s(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||_.toAttribute)(e,n)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|O,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=w){const r=this.constructor,s=r._attributeNameForProperty(e,n);if(void 0!==s){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|E,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=this._updateState&~E}}_attributeToProperty(e,t){if(this._updateState&E)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r)||w;this._updateState=this._updateState|T,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~T}}requestUpdate(e,t){let n=!0;if(void 0!==e&&!this._changedProperties.has(e)){const r=this.constructor,s=r._classProperties.get(e)||w;r._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.set(e,t),!0!==s.reflect||this._updateState&T||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):n=!1}return!this._hasRequestedUpdate&&n&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let e;this._updateState=this._updateState|x;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);const n=this.performUpdate();null!=n&&"function"==typeof n.then&&await n,e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&O}get _hasRequestedUpdate(){return this._updateState&x}get hasUpdated(){return this._updateState&C}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&C||(this._updateState=this._updateState|C,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~x}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}k.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const N=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t),A=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}}:Object.assign({},t,{finisher(n){n.createProperty(t.key,e)}}),j=(e,t,n)=>{t.constructor.createProperty(n,e)};function V(e){return(t,n)=>void 0!==n?j(e,t,n):A(e,t)}L((e,t)=>e.querySelector(t)),L((e,t)=>e.querySelectorAll(t));const R=(e,t,n)=>{Object.defineProperty(t,n,e)},M=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function L(e){return t=>(n,r)=>{const s={get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0};return void 0!==r?R(s,n,r):M(s,n)}}const U="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol();class ${constructor(e,t){if(t!==W)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(U?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const z=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof $)return e.cssText;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new $(n,W)};n.d(t,"a",function(){return q}),n.d(t,"c",function(){return N}),n.d(t,"e",function(){return V}),n.d(t,"d",function(){return r.b}),n.d(t,"b",function(){return z}),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const H=e=>e.flat?e.flat(1/0):function e(t,n=[]){for(let r=0,s=t.length;r<s;r++){const s=t[r];Array.isArray(s)?e(s,n):n.push(s)}return n}(e);class q extends k{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){H(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?U?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof r.a&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}q.finalized=!0,q.render=((e,t,n)=>{const r=n.scopeName,i=u.a.has(t),o=t instanceof ShadowRoot&&m&&e instanceof p.b,a=o&&!g.has(r),c=a?document.createDocumentFragment():t;if(Object(u.b)(e,c,Object.assign({templateFactory:y(r)},n)),a){const e=u.a.get(c);u.a.delete(c),e.value instanceof h.a&&b(c,e.value.template,r),Object(s.b)(t,t.firstChild),t.appendChild(c),u.a.set(t,e)}!i&&o&&window.ShadyCSS.styleElement(t.host)})},function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(3),s=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class i{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=r.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,i=0;const o=e=>{const r=document.createTreeWalker(e,133,null,!1);let a=r.nextNode();for(;n<t.length&&null!==a;){const e=t[n];if(Object(s.d)(e))if(i===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(a,e.name,e.strings,this.options));n++}else i++,"TEMPLATE"===a.nodeName&&o(a.content),a=r.nextNode();else this._parts.push(void 0),n++}};return o(e),r.a&&(document.adoptNode(e),customElements.upgrade(e)),e}}},function(e,t,n){"use strict";n.r(t);var r=n(9);const s=["ArrayBuffer","MessagePort","OffscreenCanvas"].filter(e=>e in self).map(e=>self[e]),i=Math.floor(Math.random()*Number.MAX_SAFE_INTEGER),o=Symbol("proxyValue"),a=Symbol("throw"),c=new Map([["PROXY",{canHandle:e=>e&&e[o],serialize:e=>{const{port1:t,port2:n}=new MessageChannel;return function(e,t){b(t)&&(t=m(t));if(!y(t))throw Error("endpoint does not have all of addEventListener, removeEventListener and postMessage defined");v(t),g(t,async function(n){if(!n.data.id||!n.data.callPath)return;const r=n.data;let s=await r.callPath.slice(0,-1).reduce((e,t)=>e[t],e),i=await r.callPath.reduce((e,t)=>e[t],e),o=i,l=[];if("APPLY"!==r.type&&"CONSTRUCT"!==r.type||(l=r.argumentsList.map(p)),"APPLY"===r.type)try{o=await i.apply(s,l)}catch(e){(o=e)[a]=!0}if("CONSTRUCT"===r.type)try{o=d(o=new i(...l))}catch(e){(o=e)[a]=!0}return"SET"===r.type&&(i[r.property]=r.value,o=!0),(o=function(e){for(const[t,n]of c)if(n.canHandle(e)){const r=n.serialize(e);return{value:{type:t,value:r}}}return{value:{type:"RAW",value:e}}}(o)).id=r.id,t.postMessage(o,w([o]))})}(e,t),n},deserialize:e=>u(e)}],["THROW",{canHandle:e=>e&&e[a],serialize:e=>{const t=e&&e.message,n=e&&e.stack;return Object.assign({},e,{message:t,stack:n})},deserialize:e=>{throw Object.assign(Error(),e)}}]]);let l=0;function u(e,t){if(b(e)&&(e=m(e)),!y(e))throw Error("endpoint does not have all of addEventListener, removeEventListener and postMessage defined");return v(e),function e(t,n=[],r=function(){}){return new Proxy(r,{construct:(e,r,s)=>t({type:"CONSTRUCT",callPath:n,argumentsList:r}),apply:(r,s,i)=>"bind"===n[n.length-1]?e(t,n.slice(0,-1)):t({type:"APPLY",callPath:n,argumentsList:i}),get(r,s,i){if("then"===s&&0===n.length)return{then:()=>i};if("then"===s){const e=t({type:"GET",callPath:n});return Promise.resolve(e).then.bind(e)}return e(t,n.concat(s),r[s])},set:(e,r,s,i)=>t({type:"SET",callPath:n,property:r,value:s})})}(async t=>{let n=[];return"APPLY"!==t.type&&"CONSTRUCT"!==t.type||(n=t.argumentsList.map(h)),p((await function(e,t,n){const r=`${i}-${l++}`;return new Promise(s=>{g(e,function t(n){n.data.id===r&&(!function(e,t){e.removeEventListener("message",t)}(e,t),s(n))}),t=Object.assign({},t,{id:r}),e.postMessage(t,n)})}(e,Object.assign({},t,{argumentsList:n}),w(n))).data.value)},[],t)}function d(e){return e[o]=!0,e}function h(e){for(const[t,n]of c)if(n.canHandle(e))return{type:t,value:n.serialize(e)};let t=[];for(const n of S(e))for(const[e,r]of c)r.canHandle(n.value)&&t.push({path:n.path,wrappedValue:{type:e,value:r.serialize(n.value)}});for(const n of t){n.path.slice(0,-1).reduce((e,t)=>e[t],e)[n.path[n.path.length-1]]=null}return{type:"RAW",value:e,wrappedChildren:t}}function p(e){if(c.has(e.type)){return c.get(e.type).deserialize(e.value)}if(function(e){return"RAW"===e.type}(e)){for(const t of e.wrappedChildren||[]){if(!c.has(t.wrappedValue.type))throw Error(`Unknown value type "${e.type}" at ${t.path.join(".")}`);const n=c.get(t.wrappedValue.type).deserialize(t.wrappedValue.value);f(e.value,t.path,n)}return e.value}throw Error(`Unknown value type "${e.type}"`)}function f(e,t,n){const r=t.slice(-1)[0];t.slice(0,-1).reduce((e,t)=>e[t],e)[r]=n}function m(e){if("Window"!==self.constructor.name)throw Error("self is not a window");return{addEventListener:self.addEventListener.bind(self),removeEventListener:self.removeEventListener.bind(self),postMessage:(t,n)=>e.postMessage(t,"*",n)}}function y(e){return"addEventListener"in e&&"removeEventListener"in e&&"postMessage"in e}function v(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.start()}function g(e,t){e.addEventListener("message",t)}function b(e){return["window","length","location","parent","opener"].every(t=>t in e)}function _(e){return s.some(t=>e instanceof t)}function*S(e,t=[],n=null){if(!e)return;if(n||(n=new WeakSet),n.has(e))return;if("string"==typeof e)return;if("object"==typeof e&&n.add(e),ArrayBuffer.isView(e))return;yield{value:e,path:t};const r=Object.keys(e);for(const s of r)yield*S(e[s],[...t,s],n)}function w(e){const t=[];for(const n of S(e))_(n.value)&&t.push(n.value);return t}n.d(t,"TimerApp",function(){return x});var P=function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},C=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};n.e(3).then(n.bind(null,12)),n.e(1).then(n.bind(null,13)),n.e(2).then(n.bind(null,14));let x=class extends r.a{constructor(){super(...arguments),this.componentReady=!1,this.timerStarted=!1,this.formattedValue={milliseconds:"0",seconds:"0",minutes:"0",hours:"0"}}render(){return r.d`
      <link
        rel="stylesheet"
        href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css"
      />

      <div class="${this.componentReady?"":"hidden"}">
        <timer-display
          hours="${this.formattedValue.hours}"
          minutes="${this.formattedValue.minutes}"
          seconds="${this.formattedValue.seconds}"
          milliseconds="${this.formattedValue.milliseconds}"
        >
        </timer-display>
        <timer-progress-bar ?startProgress="${this.timerStarted}"></timer-progress-bar>

        <div>
          <timer-actions
            @start="${this.startTimer}"
            @stop="${this.stopTimer}"
            ?started="${this.timerStarted}"
            ?stopped="${!this.timerStarted}"
          >
          </timer-actions>
        </div>
      </div>
    `}async connectedCallback(){super.connectedCallback();try{const e=await async function(e,t){const{[t]:n}=await e,r=new Blob(['importScripts("https://cdn.jsdelivr.net/npm/comlinkjs@3/umd/comlink.js");',`const ${t} = ${n.toString()};`,`Comlink.expose(${t}, self);`],{type:"application/javascript"});return await u(new Worker(URL.createObjectURL(r)))}(n.e(4).then(n.bind(null,15)),"TimerWorker");this.timerWorker=await new e,await this.setupWorker()}catch(e){console.error(e)}this.componentReady=!0}disconnectedCallback(){this.stopTimer(),this.timerWorker=void 0,super.disconnectedCallback()}async startTimer(){this.timerWorker&&(await this.timerWorker.startTimer(),this.timerStarted=!0)}async stopTimer(){this.timerWorker&&(await this.timerWorker.stopTimer(),this.timerStarted=!1)}async setupWorker(){this.timerWorker&&(this.formattedValue=await this.timerWorker.formattedCounter,await this.timerWorker.setUpdateCallback(d(()=>{requestAnimationFrame(()=>{document.dispatchEvent(new CustomEvent("timer-value-updated"))})}))),document.addEventListener("timer-value-updated",async()=>{this.timerWorker&&"visible"===document.visibilityState&&(this.formattedValue=await this.timerWorker.formattedCounter)})}};x.styles=r.b`
    .hidden {
      display: none;
    }

    .mdc-card {
      padding: 1rem;
    }
  `,P([Object(r.e)({type:Boolean}),C("design:type",Object)],x.prototype,"componentReady",void 0),P([Object(r.e)({type:Boolean}),C("design:type",Object)],x.prototype,"timerStarted",void 0),P([Object(r.e)({type:Object}),C("design:type",Object)],x.prototype,"formattedValue",void 0),x=P([Object(r.c)("timer-app")],x)}]);