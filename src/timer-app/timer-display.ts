import { customElement, LitElement, property, html } from 'lit-element'

import { formatTimerValue } from './timer-formatter'
@customElement('timer-display')
export class TimerDisplay extends LitElement {
  @property({
    type: Number,
    converter(value) {
      return formatTimerValue(+value)
    }
  })
  timerValue = {
    milliseconds: '',
    seconds: '',
    minutes: '',
    hours: ''
  }

  createRenderRoot() {
    return this
  }

  render () {
    return html`
    <div>
      <h1>${this.timerValue.hours} hours</h1>
      <h2>${this.timerValue.minutes} minutes</h2>
      <h3>${this.timerValue.seconds} seconds</h3>
      <p>${this.timerValue.milliseconds} milliseconds</p>
    </div>
    `
  }

}
