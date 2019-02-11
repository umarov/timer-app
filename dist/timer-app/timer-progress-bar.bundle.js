(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{12:function(e,r,s){"use strict";s.r(r),s.d(r,"TimerProgressBar",function(){return o});var t=s(9),n=function(e,r,s,t){var n,a=arguments.length,o=a<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,s):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,r,s,t);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(o=(a<3?n(o):a>3?n(r,s,o):n(r,s))||o);return a>3&&o&&Object.defineProperty(r,s,o),o},a=function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)};let o=class extends t.a{constructor(){super(...arguments),this.startProgress=!1}createRenderRoot(){return this}render(){return t.d`
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
    `}};n([Object(t.e)({type:Boolean}),a("design:type",Object)],o.prototype,"startProgress",void 0),o=n([Object(t.c)("timer-progress-bar")],o)}}]);