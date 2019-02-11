import { LitElement, html, customElement, property, css } from 'lit-element'

import { proxyValue } from 'comlinkjs'

import { TimerWorkerInterface } from './timer-worker-interface'
import { createProxiedWorker } from './worker-helper'
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

  @property({ type: Object })
  formattedValue = {
    milliseconds: '0',
    seconds: '0',
    minutes: '0',
    hours: '0'
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css"
      />

      <div class="${this.componentReady ? '' : 'hidden'}">
        <timer-display
          hours="${this.formattedValue.hours}"
          minutes="${this.formattedValue.minutes}"
          seconds="${this.formattedValue.seconds}"
          milliseconds="${this.formattedValue.milliseconds}"
        >
        </timer-display>
        <timer-progress-bar ?startProgress="${this.timerStarted}"></timer-progress-bar>

        <div>
          <timer-actions
            @start="${this.startTimer}"
            @stop="${this.stopTimer}"
            ?started="${this.timerStarted}"
            ?stopped="${!this.timerStarted}"
          >
          </timer-actions>
        </div>
      </div>
    `
  }

  async connectedCallback() {
    super.connectedCallback()
    try {
      const TimerWorker = await createProxiedWorker(import(/* webpackChunkName: "timer-worker" */'./timer-worker'), 'TimerWorker')
      // @ts-ignore
      this.timerWorker = await new TimerWorker()

      await this.setupWorker()
    } catch (err) {
      console.error(err)
    }

    this.componentReady = true
  }

  disconnectedCallback() {
    this.stopTimer()
    this.timerWorker = undefined
    super.disconnectedCallback()
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

  private async setupWorker() {
    if (this.timerWorker) {
      this.formattedValue = await this.timerWorker.formattedCounter
      await this.timerWorker.setUpdateCallback(
        proxyValue(() => {
          requestAnimationFrame(() => {
            document.dispatchEvent(new CustomEvent('timer-value-updated'))
          })
        })
      )
    }

    document.addEventListener('timer-value-updated', async () => {
      if (this.timerWorker && document.visibilityState === 'visible') {
        this.formattedValue = await this.timerWorker.formattedCounter
      }
    })
  }
}
