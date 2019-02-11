import { customElement, LitElement, property, html } from "lit-element";

@customElement('timer-progress-bar')
export class TimerProgressBar extends LitElement {
  @property({ type: Boolean })
  startProgress = false

  createRenderRoot() {
    return this
  }

  render() {
    return html`
      <div role="progressbar" class="mdc-linear-progress ${this.startProgress ? 'mdc-linear-progress--indeterminate' : ''}">
        <div class="mdc-linear-progress__buffering-dots"></div>
        <div class="mdc-linear-progress__buffer"></div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>
    `
  }
}
