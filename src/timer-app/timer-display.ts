import { customElement, LitElement, property, html } from 'lit-element'

@customElement('timer-display')
export class TimerDisplay extends LitElement {
  @property({ type: Number })
  hours = 0

  @property({ type: Number })
  minutes = 0

  @property({ type: Number })
  seconds = 0

  @property({ type: Number })
  milliseconds = 0

  createRenderRoot() {
    return this
  }

  render() {
    return html`
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
    `
  }
}
