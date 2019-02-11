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
          width: 45vw;
          height: 130px;
          text-align: center;
          display: flex;
          justify-content: center;
        }
      </style>

      <div class="timer-display">
        <div class="mdc-card"><p>${this.hours} hours</p></div>
        <div class="mdc-card"><p>${this.minutes} minutes</p></div>
        <div class="mdc-card"><p>${this.seconds} seconds</p></div>
        <div class="mdc-card"><p>${this.milliseconds} milliseconds</p></div>
      </div>
    `
  }
}
