import { customElement, LitElement, property, css } from 'lit-element'
import { html } from 'lit-html'

@customElement('timer-actions')
export class TimerActions extends LitElement {


  @property({ type: Boolean })
  started = false

  @property({ type: Boolean })
  stopped = false

  createRenderRoot() {
    return this
  }

  render() {
    return html`
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
    `
  }

  start() {
    this.dispatchEvent(
      new CustomEvent('start')
    )
  }

  stop() {
    this.dispatchEvent(
      new CustomEvent('stop')
    )

  }
}
