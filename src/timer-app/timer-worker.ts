
export class TimerWorker {
  private _counter: number;
  private _updateCallback = () => {}
  private intervalId = 0

  constructor(init = 0) {
    this._counter = init;
  }

  get counter() {
    return this._counter
  }

  increment(delta = 1) {
    this._counter += delta;

    this._updateCallback()
  }

  setUpdateCallback(cb: () => void) {
    this._updateCallback = cb
  }

  startTimer() {
    this.stopTimer()
    this.intervalId = setInterval(() => {
      this._counter++
      this._updateCallback()
    }, 10)
  }

  stopTimer() {
    clearInterval(this.intervalId)
  }
}
