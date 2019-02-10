import { LitElement, html, customElement, property, css } from 'lit-element'

import { proxy, proxyValue } from 'comlinkjs'

import { TimerWorkerInterface } from './timer-worker-interface'
const importComlink = 'importScripts("https://cdn.jsdelivr.net/npm/comlinkjs@3/umd/comlink.js");'

@customElement('timer-app')
export class TimerApp extends LitElement {
  static styles = css`
    .hidden {
      display: none;
    }

    .mdc-card {
      padding: 1rem;
    }
  `

  timerWorker?: TimerWorkerInterface

  @property({ type: Boolean })
  componentReady = false

  @property({ type: Boolean })
  timerStarted = false


  @property({ type: Number })
  counter = 0

  constructor() {
    super()
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css"
      />

      <div class="mdc-card mdc-card--outlined ${this.componentReady ? '' : 'hidden'}">
        <div class="my-card__media mdc-card__media mdc-card__media--16-9">
          <div class="mdc-card__media-content">
            <h1>${this.counter}</h1>
            <div role="progressbar" class="mdc-linear-progress ${this.timerStarted ? 'mdc-linear-progress--indeterminate' : ''}">
              <div class="mdc-linear-progress__buffering-dots"></div>
              <div class="mdc-linear-progress__buffer"></div>
              <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
                <span class="mdc-linear-progress__bar-inner"></span>
              </div>
              <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                <span class="mdc-linear-progress__bar-inner"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mdc-card__actions">
          <button class="mdc-button mdc-card__action mdc-card__action--button" @click="${this.startTimer}" ?disabled="${this.timerStarted}">
            <span class="mdc-button__label">Start</span>
          </button>
          <button class="mdc-button mdc-card__action mdc-card__action--button" @click="${this.stopTimer}" ?disabled="${!this.timerStarted}">
            <span class="mdc-button__label">Stop</span>
          </button>
        </div>
      </div>
    `
  }

  async connectedCallback() {
    super.connectedCallback()
    try {
      const { TimerWorker: workerClass } = await import('./timer-worker')
      const workerFile = new Blob(
        [`(() => { ${importComlink} self['TimerWorker']=${workerClass.toString()};Comlink.expose(TimerWorker, self); })()`],
        { type: 'application/javascript' }
      )

      const TimerWorker = (await proxy(
        new Worker(URL.createObjectURL(workerFile))
      )) as TimerWorkerInterface
      // @ts-ignore
      this.timerWorker = await new TimerWorker()
      if (this.timerWorker) {
        this.counter = await this.timerWorker.counter
        await this.timerWorker.setUpdateCallback(
          proxyValue(() => {
            document.dispatchEvent(new CustomEvent('value-updated'))
          })
        )
      }

      document.addEventListener('value-updated', async () => {
        if (this.timerWorker) {
          this.counter = await this.timerWorker.counter
        }
      })
    } catch (err) {
      console.error(err)
    }

    this.componentReady = true
  }

  disconnectedCallback() {
    this.stopTimer()
    this.timerWorker = undefined
  }

  async startTimer() {
    if (this.timerWorker) {
      await this.timerWorker.startTimer()
      this.timerStarted = true
    }
  }

  async stopTimer() {
    if (this.timerWorker) {
      await this.timerWorker.stopTimer()
      this.timerStarted = false
    }
  }
}
