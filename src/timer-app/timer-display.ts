import { customElement, LitElement, html, property, css } from "lit-element";

@customElement('timer-display')
export class TimerDisplay extends LitElement {
  static styles = css`
    .process-circular__underlay {
      stroke: rgba(0,0,0,.1);
      z-index: 1;
    }

    circle.progress-circular__overlay {
      transition: none;
      color: #4caf50;
    }
  `
  @property({ type: Number, attribute: 'percentage-for-display' })
  percentageForDisplay = 0

  render () {
    return html`
      <svg
          xmlns="http://www.w3.org/2000/svg"
          height="300"
          width="300"
          style="transform: rotate(-90deg);">
          <circle
            fill="transparent"
            cx="150"
            cy="150"
            r="147.5"
            stroke-width="5"
            stroke-dasharray="926.77"
            stroke-dashoffset="0"
            class="progress-circular__underlay"/>
          <circle
            fill="transparent"
            cx="150"
            cy="150"
            r="147.5"
            stroke-width="5"
            stroke-dasharray="926.77"
            stroke-dashoffset="${this.percentageForDisplay % 926.77}"
            class="progress-circular__overlay"
            style="transition: none;"/>
        </svg>
    `
  }
}
