import {
  LitElement, html, customElement, property, css
} from 'lit-element';

@customElement('timer-app')
export class TimerApp extends LitElement {
  static styles = css`

  `

  @property()
  name = 'Muzafar'

  render() {
    return html`
      Hello from ${this.name}
    `
  }
}
