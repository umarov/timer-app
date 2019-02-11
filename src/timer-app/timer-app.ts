import { LitElement, html, customElement, property, css } from 'lit-element'

import { proxy, proxyValue } from 'comlinkjs'

import { TimerWorkerInterface } from './timer-worker-interface'
const importComlink = 'importScripts("https://cdn.jsdelivr.net/npm/comlinkjs@3/umd/comlink.js");'
import(/* webpackChunkName: "timer-progress-bar" */ './timer-progress-bar')
import(/* webpackChunkName: "timer-actions" */ './timer-actions')
import(/* webpackChunkName: "timer-display" */ './timer-display')
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

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css"
      />

      <div class="${this.componentReady ? '' : 'hidden'}">
        <timer-display timerValue="${this.counter}"></timer-display>
        <timer-progress-bar ?startProgress="${this.timerStarted}"></timer-progress-bar>

        <div>
          <timer-actions
            @start="${this.startTimer}"
            @stop="${this.stopTimer}"
            ?started="${this.timerStarted}"
            ?stopped="${!this.timerStarted}">
          </timer-actions>
        </div>
      </div>
    `
  }

  async connectedCallback() {
    super.connectedCallback()
    try {
      const { TimerWorker: workerClass } = await import(/* webpackChunkName: "timer-worker" */ './timer-worker')
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
