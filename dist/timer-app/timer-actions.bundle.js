(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{13:function(t,e,s){"use strict";s.r(e),s.d(e,"TimerActions",function(){return r});var o=s(9),n=s(4),c=function(t,e,s,o){var n,c=arguments.length,a=c<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(a=(c<3?n(a):c>3?n(e,s,a):n(e,s))||a);return c>3&&a&&Object.defineProperty(e,s,a),a},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let r=class extends o.a{constructor(){super(...arguments),this.started=!1,this.stopped=!1}createRenderRoot(){return this}render(){return n.b`
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
    `}start(){this.dispatchEvent(new CustomEvent("start"))}stop(){this.dispatchEvent(new CustomEvent("stop"))}};c([Object(o.e)({type:Boolean}),a("design:type",Object)],r.prototype,"started",void 0),c([Object(o.e)({type:Boolean}),a("design:type",Object)],r.prototype,"stopped",void 0),r=c([Object(o.c)("timer-actions")],r)}}]);