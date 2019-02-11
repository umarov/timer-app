(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{14:function(e,t,i){"use strict";i.r(t),i.d(t,"TimerDisplay",function(){return d});var s=i(9),r=function(e,t,i,s){var r,c=arguments.length,d=c<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(d=(c<3?r(d):c>3?r(t,i,d):r(t,i))||d);return c>3&&d&&Object.defineProperty(t,i,d),d},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends s.a{constructor(){super(...arguments),this.hours=0,this.minutes=0,this.seconds=0,this.milliseconds=0}createRenderRoot(){return this}render(){return s.d`
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
    `}};r([Object(s.e)({type:Number}),c("design:type",Object)],d.prototype,"hours",void 0),r([Object(s.e)({type:Number}),c("design:type",Object)],d.prototype,"minutes",void 0),r([Object(s.e)({type:Number}),c("design:type",Object)],d.prototype,"seconds",void 0),r([Object(s.e)({type:Number}),c("design:type",Object)],d.prototype,"milliseconds",void 0),d=r([Object(s.c)("timer-display")],d)}}]);