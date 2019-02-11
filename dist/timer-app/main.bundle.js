!function(t){var e={};function n(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(r,s,function(e){return t[e]}.bind(null,s));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([function(t,e,n){"use strict";n.d(e,"f",function(){return r}),n.d(e,"g",function(){return s}),n.d(e,"b",function(){return o}),n.d(e,"a",function(){return a}),n.d(e,"d",function(){return c}),n.d(e,"c",function(){return l}),n.d(e,"e",function(){return u});
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
const r=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${r}--\x3e`,i=new RegExp(`${r}|${s}`),o="$lit$";class a{constructor(t,e){this.parts=[],this.element=e;let n=-1,s=0;const a=[],c=e=>{const d=e.content,p=document.createTreeWalker(d,133,null,!1);let h=0;for(;p.nextNode();){n++;const e=p.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const a=e.attributes;let c=0;for(let t=0;t<a.length;t++)a[t].value.indexOf(r)>=0&&c++;for(;c-- >0;){const r=t.strings[s],a=u.exec(r)[2],c=a.toLowerCase()+o,l=e.getAttribute(c).split(i);this.parts.push({type:"attribute",index:n,name:a,strings:l}),e.removeAttribute(c),s+=l.length-1}}"TEMPLATE"===e.tagName&&c(e)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(r)>=0){const r=e.parentNode,o=t.split(i),c=o.length-1;for(let t=0;t<c;t++)r.insertBefore(""===o[t]?l():document.createTextNode(o[t]),e),this.parts.push({type:"node",index:++n});""===o[c]?(r.insertBefore(l(),e),a.push(e)):e.data=o[c],s+=c}}else if(8===e.nodeType)if(e.data===r){const t=e.parentNode;null!==e.previousSibling&&n!==h||(n++,t.insertBefore(l(),e)),h=n,this.parts.push({type:"node",index:n}),null===e.nextSibling?e.data="":(a.push(e),n--),s++}else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)this.parts.push({type:"node",index:-1})}}};c(e);for(const t of a)t.parentNode.removeChild(t)}}const c=t=>-1!==t.index,l=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(t,e,n){"use strict";n.d(e,"h",function(){return l}),n.d(e,"a",function(){return u}),n.d(e,"b",function(){return d}),n.d(e,"e",function(){return p}),n.d(e,"c",function(){return h}),n.d(e,"f",function(){return f}),n.d(e,"g",function(){return m}),n.d(e,"d",function(){return v});var r=n(7),s=n(3),i=n(2),o=n(9),a=n(5),c=n(0);
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
const l=t=>null===t||!("object"==typeof t||"function"==typeof t);class u{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new d(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let r=0;r<e;r++){n+=t[r];const e=this.parts[r];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)n+="string"==typeof e?e:String(e);else n+="string"==typeof t?t:String(t)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class d{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===i.a||l(t)&&t===this.value||(this.value=t,Object(r.b)(t)||(this.committer.dirty=!0))}commit(){for(;Object(r.b)(this.value);){const t=this.value;this.value=i.a,t(this)}this.value!==i.a&&this.committer.commit()}}class p{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Object(c.c)()),this.endNode=t.appendChild(Object(c.c)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=Object(c.c)()),t._insert(this.endNode=Object(c.c)())}insertAfterPart(t){t._insert(this.startNode=Object(c.c)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;Object(r.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=i.a,t(this)}const t=this._pendingValue;t!==i.a&&(l(t)?t!==this.value&&this._commitText(t):t instanceof a.b?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):t===i.b?(this.value=i.b,this.clear()):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&3===e.nodeType?e.data=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof o.a&&this.value.template===e)this.value.update(t.values);else{const n=new o.a(e,t.processor,this.options),r=n._clone();n.update(t.values),this._commitNode(r),this.value=n}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,r=0;for(const s of t)void 0===(n=e[r])&&(n=new p(this.options),e.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(e[r-1])),n.setValue(s),n.commit(),r++;r<e.length&&(e.length=r,this.clear(n&&n.endNode))}clear(t=this.startNode){Object(s.b)(this.startNode.parentNode,t.nextSibling,this.endNode)}}class h{constructor(t,e,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this._pendingValue=t}commit(){for(;Object(r.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=i.a,t(this)}if(this._pendingValue===i.a)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=i.a}}class f extends u{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new m(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class m extends d{}let y=!1;try{const t={get capture(){return y=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class v{constructor(t,e,n){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;Object(r.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=i.a,t(this)}if(this._pendingValue===i.a)return;const t=this._pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),s&&(this._options=g(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=i.a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const g=t=>t&&(y?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return s});
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
const r={},s={}},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"c",function(){return s}),n.d(e,"b",function(){return i});
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
const r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,e,n=null,r=null)=>{let s=e;for(;s!==n;){const e=s.nextSibling;t.insertBefore(s,r),s=e}},i=(t,e,n=null)=>{let r=e;for(;r!==n;){const e=r.nextSibling;t.removeChild(r),r=e}}},function(t,e,n){"use strict";n.r(e);var r=n(1);
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
 */class s{handleAttributeExpressions(t,e,n,s){const i=e[0];if("."===i){return new r.f(t,e.slice(1),n).parts}return"@"===i?[new r.d(t,e.slice(1),s.eventContext)]:"?"===i?[new r.c(t,e.slice(1),n)]:new r.a(t,e,n).parts}handleTextExpression(t){return new r.e(t)}}const i=new s;var o=n(5),a=n(7),c=n(3),l=n(2),u=n(8),d=n(6),p=n(9),h=n(0);n.d(e,"html",function(){return f}),n.d(e,"svg",function(){return m}),n.d(e,"DefaultTemplateProcessor",function(){return s}),n.d(e,"defaultTemplateProcessor",function(){return i}),n.d(e,"directive",function(){return a.a}),n.d(e,"isDirective",function(){return a.b}),n.d(e,"removeNodes",function(){return c.b}),n.d(e,"reparentNodes",function(){return c.c}),n.d(e,"noChange",function(){return l.a}),n.d(e,"nothing",function(){return l.b}),n.d(e,"AttributeCommitter",function(){return r.a}),n.d(e,"AttributePart",function(){return r.b}),n.d(e,"BooleanAttributePart",function(){return r.c}),n.d(e,"EventPart",function(){return r.d}),n.d(e,"isPrimitive",function(){return r.h}),n.d(e,"NodePart",function(){return r.e}),n.d(e,"PropertyCommitter",function(){return r.f}),n.d(e,"PropertyPart",function(){return r.g}),n.d(e,"parts",function(){return u.a}),n.d(e,"render",function(){return u.b}),n.d(e,"templateCaches",function(){return d.a}),n.d(e,"templateFactory",function(){return d.b}),n.d(e,"TemplateInstance",function(){return p.a}),n.d(e,"SVGTemplateResult",function(){return o.a}),n.d(e,"TemplateResult",function(){return o.b}),n.d(e,"createMarker",function(){return h.c}),n.d(e,"isTemplatePartActive",function(){return h.d}),n.d(e,"Template",function(){return h.a}),
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const f=(t,...e)=>new o.b(t,e,"html",i),m=(t,...e)=>new o.a(t,e,"svg",i)},function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return o});var r=n(3),s=n(0);
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
class i{constructor(t,e,n,r){this.strings=t,this.values=e,this.type=n,this.processor=r}getHTML(){const t=this.strings.length-1;let e="";for(let n=0;n<t;n++){const t=this.strings[n],r=s.e.exec(t);e+=r?t.substr(0,r.index)+r[1]+r[2]+s.b+r[3]+s.f:t+s.g}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class o extends i{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,n=e.firstChild;return e.removeChild(n),Object(r.c)(e,n.firstChild),t}}},function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"a",function(){return i});var r=n(0);
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
 */function s(t){let e=i.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},i.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const s=t.strings.join(r.f);return void 0===(n=e.keyString.get(s))&&(n=new r.a(t,t.getTemplateElement()),e.keyString.set(s,n)),e.stringsArray.set(t.strings,n),n}const i=new Map},function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return i});
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
const r=new WeakMap,s=t=>(...e)=>{const n=t(...e);return r.set(n,!0),n},i=t=>"function"==typeof t&&r.has(t)},function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a});var r=n(3),s=n(1),i=n(6);
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
const o=new WeakMap,a=(t,e,n)=>{let a=o.get(e);void 0===a&&(Object(r.b)(e,e.firstChild),o.set(e,a=new s.e(Object.assign({templateFactory:i.b},n))),a.appendInto(e)),a.setValue(t),a.commit()}},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(3),s=n(0);
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
class i{constructor(t,e,n){this._parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this._parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=r.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let n=0,i=0;const o=t=>{const r=document.createTreeWalker(t,133,null,!1);let a=r.nextNode();for(;n<e.length&&null!==a;){const t=e[n];if(Object(s.d)(t))if(i===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(a,t.name,t.strings,this.options));n++}else i++,"TEMPLATE"===a.nodeName&&o(a.content),a=r.nextNode();else this._parts.push(void 0),n++}};return o(t),r.a&&(document.adoptNode(t),customElements.upgrade(t)),t}}},function(t,e,n){"use strict";n.r(e);var r=n(4),s=n(3),i=n(0);
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
const o=133;function a(t,e){const{element:{content:n},parts:r}=t,s=document.createTreeWalker(n,o,null,!1);let i=l(r),a=r[i],c=-1,u=0;const d=[];let p=null;for(;s.nextNode();){c++;const t=s.currentNode;for(t.previousSibling===p&&(p=null),e.has(t)&&(d.push(t),null===p&&(p=t)),null!==p&&u++;void 0!==a&&a.index===c;)a.index=null!==p?-1:a.index-u,a=r[i=l(r,i)]}d.forEach(t=>t.parentNode.removeChild(t))}const c=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,o,null,!1);for(;n.nextNode();)e++;return e},l=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(Object(i.d)(e))return n}return-1};var u=n(8),d=n(6),p=n(9),h=n(5);
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
const f=(t,e)=>`${t}--${e}`;let m=!0;void 0===window.ShadyCSS?m=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),m=!1);const y=t=>e=>{const n=f(e.type,t);let r=d.a.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},d.a.set(n,r));let s=r.stringsArray.get(e.strings);if(void 0!==s)return s;const o=e.strings.join(i.f);if(void 0===(s=r.keyString.get(o))){const n=e.getTemplateElement();m&&window.ShadyCSS.prepareTemplateDom(n,t),s=new i.a(e,n),r.keyString.set(o,s)}return r.stringsArray.set(e.strings,s),s},v=["html","svg"],g=new Set,b=(t,e,n)=>{g.add(n);const r=t.querySelectorAll("style");if(0===r.length)return void window.ShadyCSS.prepareTemplateStyles(e.element,n);const s=document.createElement("style");for(let t=0;t<r.length;t++){const e=r[t];e.parentNode.removeChild(e),s.textContent+=e.textContent}if((t=>{v.forEach(e=>{const n=d.a.get(f(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),a(t,n)})})})(n),function(t,e,n=null){const{element:{content:r},parts:s}=t;if(null==n)return void r.appendChild(e);const i=document.createTreeWalker(r,o,null,!1);let a=l(s),u=0,d=-1;for(;i.nextNode();)for(d++,i.currentNode===n&&(u=c(e),n.parentNode.insertBefore(e,n));-1!==a&&s[a].index===d;){if(u>0){for(;-1!==a;)s[a].index+=u,a=l(s,a);return}a=l(s,a)}}(e,s,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,n),window.ShadyCSS.nativeShadow){const n=e.element.content.querySelector("style");t.insertBefore(n.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(s,e.element.content.firstChild);const t=new Set;t.add(s),a(e,t)}};
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
window.JSCompiler_renameProperty=((t,e)=>t);const _={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},S=(t,e)=>e!==t&&(e==e||t==t),w={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:S},P=Promise.resolve(!0),x=1,C=4,O=8,T=16,E=32;class j extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=P,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const r=this._attributeNameForProperty(n,e);void 0!==r&&(this._attributeToPropertyMap.set(r,n),t.push(r))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=w){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(e){const r=this[t];this[n]=e,this.requestUpdate(t,r)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t.finalize&&t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=S){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,r=e.converter||_,s="function"==typeof r?r:r.fromAttribute;return s?s(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,r=e.converter;return(r&&r.toAttribute||_.toAttribute)(t,n)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|E,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=w){const r=this.constructor,s=r._attributeNameForProperty(t,n);if(void 0!==s){const t=r._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=this._updateState|O,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=this._updateState&~O}}_attributeToProperty(t,e){if(this._updateState&O)return;const n=this.constructor,r=n._attributeToPropertyMap.get(t);if(void 0!==r){const t=n._classProperties.get(r)||w;this._updateState=this._updateState|T,this[r]=n._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~T}}requestUpdate(t,e){let n=!0;if(void 0!==t&&!this._changedProperties.has(t)){const r=this.constructor,s=r._classProperties.get(t)||w;r._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.set(t,e),!0!==s.reflect||this._updateState&T||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):n=!1}return!this._hasRequestedUpdate&&n&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let t;this._updateState=this._updateState|C;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);const n=this.performUpdate();null!=n&&"function"==typeof n.then&&await n,t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&E}get _hasRequestedUpdate(){return this._updateState&C}get hasUpdated(){return this._updateState&x}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&x||(this._updateState=this._updateState|x,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~C}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}j.finalized=!0;
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
const k=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e),R=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}}:Object.assign({},e,{finisher(n){n.createProperty(e.key,t)}}),N=(t,e,n)=>{e.constructor.createProperty(n,t)};function A(t){return(e,n)=>void 0!==n?N(t,e,n):R(t,e)}const V=U((t,e)=>t.querySelector(e)),M=U((t,e)=>t.querySelectorAll(e)),L=(t,e,n)=>{Object.defineProperty(e,n,t)},$=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t});function U(t){return e=>(n,r)=>{const s={get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0};return void 0!==r?L(s,n,r):$(s,n)}}const W=t=>(e,n)=>void 0!==n?((t,e,n)=>{Object.assign(e[n],t)})(t,e,n):((t,e)=>Object.assign({},e,{finisher(n){Object.assign(n.prototype[e.key],t)}}))(t,e),z="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,H=Symbol();class B{constructor(t,e){if(e!==H)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(z?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const q=t=>new B(String(t),H),I=(t,...e)=>{const n=e.reduce((e,n,r)=>e+(t=>{if(t instanceof B)return t.cssText;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[r+1],t[0]);return new B(n,H)};n.d(e,"LitElement",function(){return D}),n.d(e,"defaultConverter",function(){return _}),n.d(e,"notEqual",function(){return S}),n.d(e,"UpdatingElement",function(){return j}),n.d(e,"customElement",function(){return k}),n.d(e,"property",function(){return A}),n.d(e,"query",function(){return V}),n.d(e,"queryAll",function(){return M}),n.d(e,"eventOptions",function(){return W}),n.d(e,"html",function(){return r.html}),n.d(e,"svg",function(){return r.svg}),n.d(e,"TemplateResult",function(){return r.TemplateResult}),n.d(e,"SVGTemplateResult",function(){return r.SVGTemplateResult}),n.d(e,"supportsAdoptingStyleSheets",function(){return z}),n.d(e,"CSSResult",function(){return B}),n.d(e,"unsafeCSS",function(){return q}),n.d(e,"css",function(){return I}),
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const F=t=>t.flat?t.flat(1/0):function t(e,n=[]){for(let r=0,s=e.length;r<s;r++){const s=e[r];Array.isArray(s)?t(s,n):n.push(s)}return n}(t);class D extends j{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){F(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?z?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof r.TemplateResult&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}D.finalized=!0,D.render=((t,e,n)=>{const r=n.scopeName,i=u.a.has(e),o=e instanceof ShadowRoot&&m&&t instanceof h.b,a=o&&!g.has(r),c=a?document.createDocumentFragment():e;if(Object(u.b)(t,c,Object.assign({templateFactory:y(r)},n)),a){const t=u.a.get(c);u.a.delete(c),t.value instanceof p.a&&b(c,t.value.template,r),Object(s.b)(e,e.firstChild),e.appendChild(c),u.a.set(e,t)}!i&&o&&window.ShadyCSS.styleElement(e.host)})},function(t,e,n){"use strict";n.r(e),n.d(e,"transferHandlers",function(){return a}),n.d(e,"proxy",function(){return l}),n.d(e,"proxyValue",function(){return u}),n.d(e,"expose",function(){return d});const r=["ArrayBuffer","MessagePort","OffscreenCanvas"].filter(t=>t in self).map(t=>self[t]),s=Math.floor(Math.random()*Number.MAX_SAFE_INTEGER),i=Symbol("proxyValue"),o=Symbol("throw"),a=new Map([["PROXY",{canHandle:t=>t&&t[i],serialize:t=>{const{port1:e,port2:n}=new MessageChannel;return d(t,e),n},deserialize:t=>l(t)}],["THROW",{canHandle:t=>t&&t[o],serialize:t=>{const e=t&&t.message,n=t&&t.stack;return Object.assign({},t,{message:e,stack:n})},deserialize:t=>{throw Object.assign(Error(),t)}}]]);let c=0;function l(t,e){if(b(t)&&(t=m(t)),!y(t))throw Error("endpoint does not have all of addEventListener, removeEventListener and postMessage defined");return v(t),function t(e,n=[],r=function(){}){return new Proxy(r,{construct:(t,r,s)=>e({type:"CONSTRUCT",callPath:n,argumentsList:r}),apply:(r,s,i)=>"bind"===n[n.length-1]?t(e,n.slice(0,-1)):e({type:"APPLY",callPath:n,argumentsList:i}),get(r,s,i){if("then"===s&&0===n.length)return{then:()=>i};if("then"===s){const t=e({type:"GET",callPath:n});return Promise.resolve(t).then.bind(t)}return t(e,n.concat(s),r[s])},set:(t,r,s,i)=>e({type:"SET",callPath:n,property:r,value:s})})}(async e=>{let n=[];return"APPLY"!==e.type&&"CONSTRUCT"!==e.type||(n=e.argumentsList.map(p)),h((await function(t,e,n){const r=`${s}-${c++}`;return new Promise(s=>{g(t,function e(n){n.data.id===r&&(!function(t,e){t.removeEventListener("message",e)}(t,e),s(n))}),e=Object.assign({},e,{id:r}),t.postMessage(e,n)})}(t,Object.assign({},e,{argumentsList:n}),w(n))).data.value)},[],e)}function u(t){return t[i]=!0,t}function d(t,e){if(b(e)&&(e=m(e)),!y(e))throw Error("endpoint does not have all of addEventListener, removeEventListener and postMessage defined");v(e),g(e,async function(n){if(!n.data.id||!n.data.callPath)return;const r=n.data;let s=await r.callPath.slice(0,-1).reduce((t,e)=>t[e],t),i=await r.callPath.reduce((t,e)=>t[e],t),c=i,l=[];if("APPLY"!==r.type&&"CONSTRUCT"!==r.type||(l=r.argumentsList.map(h)),"APPLY"===r.type)try{c=await i.apply(s,l)}catch(t){(c=t)[o]=!0}if("CONSTRUCT"===r.type)try{c=u(c=new i(...l))}catch(t){(c=t)[o]=!0}return"SET"===r.type&&(i[r.property]=r.value,c=!0),(c=function(t){for(const[e,n]of a)if(n.canHandle(t)){const r=n.serialize(t);return{value:{type:e,value:r}}}return{value:{type:"RAW",value:t}}}(c)).id=r.id,e.postMessage(c,w([c]))})}function p(t){for(const[e,n]of a)if(n.canHandle(t))return{type:e,value:n.serialize(t)};let e=[];for(const n of S(t))for(const[t,r]of a)r.canHandle(n.value)&&e.push({path:n.path,wrappedValue:{type:t,value:r.serialize(n.value)}});for(const n of e){n.path.slice(0,-1).reduce((t,e)=>t[e],t)[n.path[n.path.length-1]]=null}return{type:"RAW",value:t,wrappedChildren:e}}function h(t){if(a.has(t.type)){return a.get(t.type).deserialize(t.value)}if(function(t){return"RAW"===t.type}(t)){for(const e of t.wrappedChildren||[]){if(!a.has(e.wrappedValue.type))throw Error(`Unknown value type "${t.type}" at ${e.path.join(".")}`);const n=a.get(e.wrappedValue.type).deserialize(e.wrappedValue.value);f(t.value,e.path,n)}return t.value}throw Error(`Unknown value type "${t.type}"`)}function f(t,e,n){const r=e.slice(-1)[0];e.slice(0,-1).reduce((t,e)=>t[e],t)[r]=n}function m(t){if("Window"!==self.constructor.name)throw Error("self is not a window");return{addEventListener:self.addEventListener.bind(self),removeEventListener:self.removeEventListener.bind(self),postMessage:(e,n)=>t.postMessage(e,"*",n)}}function y(t){return"addEventListener"in t&&"removeEventListener"in t&&"postMessage"in t}function v(t){(function(t){return"MessagePort"===t.constructor.name})(t)&&t.start()}function g(t,e){t.addEventListener("message",e)}function b(t){return["window","length","location","parent","opener"].every(e=>e in t)}function _(t){return r.some(e=>t instanceof e)}function*S(t,e=[],n=null){if(!t)return;if(n||(n=new WeakSet),n.has(t))return;if("string"==typeof t)return;if("object"==typeof t&&n.add(t),ArrayBuffer.isView(t))return;yield{value:t,path:e};const r=Object.keys(t);for(const s of r)yield*S(t[s],[...e,s],n)}function w(t){const e=[];for(const n of S(t))_(n.value)&&e.push(n.value);return e}},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var s,i=arguments.length,o=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});const o=n(10),a=n(11),c=n(13);Promise.resolve().then(()=>i(n(14))),Promise.resolve().then(()=>i(n(15))),Promise.resolve().then(()=>i(n(16)));let l=class extends o.LitElement{constructor(){super(...arguments),this.componentReady=!1,this.timerStarted=!1,this.formattedValue={milliseconds:"0",seconds:"0",minutes:"0",hours:"0"}}render(){return o.html`
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
    `}async connectedCallback(){super.connectedCallback();try{const t=await c.createProxiedWorker(Promise.resolve().then(()=>i(n(17))),"TimerWorker");this.timerWorker=await new t,await this.setupWorker()}catch(t){console.error(t)}this.componentReady=!0}disconnectedCallback(){this.stopTimer(),this.timerWorker=void 0,super.disconnectedCallback()}async startTimer(){this.timerWorker&&(await this.timerWorker.startTimer(),this.timerStarted=!0)}async stopTimer(){this.timerWorker&&(await this.timerWorker.stopTimer(),this.timerStarted=!1)}async setupWorker(){this.timerWorker&&(this.formattedValue=await this.timerWorker.formattedCounter,await this.timerWorker.setUpdateCallback(a.proxyValue(()=>{"visible"===document.visibilityState&&requestAnimationFrame(()=>{document.dispatchEvent(new CustomEvent("timer-value-updated"))})}))),document.addEventListener("timer-value-updated",async()=>{this.timerWorker&&(this.formattedValue=await this.timerWorker.formattedCounter)})}};l.styles=o.css`
    .hidden {
      display: none;
    }

    .mdc-card {
      padding: 1rem;
    }
  `,r([o.property({type:Boolean}),s("design:type",Object)],l.prototype,"componentReady",void 0),r([o.property({type:Boolean}),s("design:type",Object)],l.prototype,"timerStarted",void 0),r([o.property({type:Object}),s("design:type",Object)],l.prototype,"formattedValue",void 0),l=r([o.customElement("timer-app")],l),e.TimerApp=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(11);e.createProxiedWorker=async function(t,e){const{[e]:n}=await t,s=new Blob(['importScripts("https://cdn.jsdelivr.net/npm/comlinkjs@3/umd/comlink.js");',`const ${e} = ${n.toString()};`,`Comlink.expose(${e}, self);`],{type:"application/javascript"});return await r.proxy(new Worker(URL.createObjectURL(s)))}},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var s,i=arguments.length,o=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});const i=n(10);let o=class extends i.LitElement{constructor(){super(...arguments),this.startProgress=!1}createRenderRoot(){return this}render(){return i.html`
      <div role="progressbar" class="mdc-linear-progress ${this.startProgress?"mdc-linear-progress--indeterminate":""}">
        <div class="mdc-linear-progress__buffering-dots"></div>
        <div class="mdc-linear-progress__buffer"></div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>
    `}};r([i.property({type:Boolean}),s("design:type",Object)],o.prototype,"startProgress",void 0),o=r([i.customElement("timer-progress-bar")],o),e.TimerProgressBar=o},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var s,i=arguments.length,o=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});const i=n(10),o=n(4);let a=class extends i.LitElement{constructor(){super(...arguments),this.started=!1,this.stopped=!1}createRenderRoot(){return this}render(){return o.html`
      <style>
        .timer-actions {
          display: block;
          margin-top: 16px;
        }
      </style>

      <div class="timer-actions">
        <button class="mdc-button" @click="${this.start}" ?disabled="${this.started}">
          <span class="mdc-button__label">Start</span>
        </button>
        <button class="mdc-button" @click="${this.stop}" ?disabled="${this.stopped}">
          <span class="mdc-button__label">Stop</span>
        </button>
      </div>
    `}start(){this.dispatchEvent(new CustomEvent("start"))}stop(){this.dispatchEvent(new CustomEvent("stop"))}};r([i.property({type:Boolean}),s("design:type",Object)],a.prototype,"started",void 0),r([i.property({type:Boolean}),s("design:type",Object)],a.prototype,"stopped",void 0),a=r([i.customElement("timer-actions")],a),e.TimerActions=a},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var s,i=arguments.length,o=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});const i=n(10);let o=class extends i.LitElement{constructor(){super(...arguments),this.hours=0,this.minutes=0,this.seconds=0,this.milliseconds=0}createRenderRoot(){return this}render(){return i.html`
      <style>
        .timer-display {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          align-items: center;
          justify-items: center;
          grid-gap: 16px;
          margin: 8px;
        }

        .mdc-card {
          padding: 1rem;
          width: 40vw;
          height: 130px;
          text-align: center;
          display: flex;
          justify-content: center;
        }
      </style>

      <div class="timer-display">
        <div class="mdc-card"><h1>${this.hours} hours</h1></div>
        <div class="mdc-card"><h2>${this.minutes} minutes</h2></div>
        <div class="mdc-card"><h3>${this.seconds} seconds</h3></div>
        <div class="mdc-card"><p>${this.milliseconds} milliseconds</p></div>
      </div>
    `}};r([i.property({type:Number}),s("design:type",Object)],o.prototype,"hours",void 0),r([i.property({type:Number}),s("design:type",Object)],o.prototype,"minutes",void 0),r([i.property({type:Number}),s("design:type",Object)],o.prototype,"seconds",void 0),r([i.property({type:Number}),s("design:type",Object)],o.prototype,"milliseconds",void 0),o=r([i.customElement("timer-display")],o),e.TimerDisplay=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.TimerWorker=class{constructor(t=0){this._updateCallback=(()=>{}),this.intervalId=0,this.hours="0",this.minutes="0",this.seconds="0",this.milliseconds="0",this._counter=t}get counter(){return this._counter}get formattedCounter(){return{milliseconds:this.milliseconds,seconds:this.seconds,minutes:this.minutes,hours:this.hours}}increment(t=1){this._counter+=t,this._updateCallback()}setUpdateCallback(t){this._updateCallback=t}startTimer(){this.stopTimer(),this.intervalId=setInterval(()=>{this._counter++,this.formatTimerValue(this._counter),this._updateCallback()},10)}stopTimer(){clearInterval(this.intervalId)}formatTimerValue(t){this.milliseconds=`${t%100}`,this.seconds=this.getSeconds(t),this.minutes=this.getMinutes(t),this.hours=this.getHours(t)}getSeconds(t){const e=t/100;return e>=1?(e%60).toString().split(".")[0]:"0"}getMinutes(t){const e=t/100/60;return e>=1?e.toString().split(".")[0]:"0"}getHours(t){const e=t/100/60/60;return e>=1?e.toString().split(".")[0]:"0"}}}]);