(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{15:function(t,s,e){"use strict";e.r(s),e.d(s,"TimerWorker",function(){return i});class i{constructor(t=0){this._updateCallback=(()=>{}),this.intervalId=0,this.hours="0",this.minutes="0",this.seconds="0",this.milliseconds="0",this._counter=t}get counter(){return this._counter}get formattedCounter(){return{milliseconds:this.milliseconds,seconds:this.seconds,minutes:this.minutes,hours:this.hours}}increment(t=1){this._counter+=t,this.formatTimerValue(this._counter),this._updateCallback()}setUpdateCallback(t){this._updateCallback=t}startTimer(){this.stopTimer(),this.intervalId=setInterval(()=>{this.increment()},10)}stopTimer(){clearInterval(this.intervalId)}formatTimerValue(t){this.milliseconds=`${t%100}`,this.seconds=this.getSeconds(t),this.minutes=this.getMinutes(t),this.hours=this.getHours(t)}getSeconds(t){const s=t/100;if(s>=1){return(s%60).toString().split(".")[0]}return"0"}getMinutes(t){const s=t/100/60;if(s>=1){return(s%60).toString().split(".")[0]}return"0"}getHours(t){const s=t/100/60/60;if(s>=1){return s.toString().split(".")[0]}return"0"}}}}]);