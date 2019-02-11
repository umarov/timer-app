export class TimerWorker {
  private _counter: number
  private _updateCallback = () => {}
  private intervalId = 0
  private hours = '0'
  private minutes = '0'
  private seconds = '0'
  private milliseconds = '0'


  constructor(init = 0) {
    this._counter = init
  }

  get counter() {
    return this._counter
  }

  get formattedCounter() {
    return {
      milliseconds: this.milliseconds,
      seconds: this.seconds,
      minutes: this.minutes,
      hours: this.hours
    }
  }

  increment(delta = 1) {
    this._counter += delta

    this._updateCallback()
  }

  setUpdateCallback(cb: () => void) {
    this._updateCallback = cb
  }

  startTimer() {
    this.stopTimer()
    this.intervalId = setInterval(() => {
      this._counter++
      this.formatTimerValue(this._counter)
      this._updateCallback()
    }, 10)
  }

  stopTimer() {
    clearInterval(this.intervalId)
  }

  formatTimerValue(value: number) {
    this.milliseconds = `${value % 100}`
    this.seconds = this.getSeconds(value)
    this.minutes = this.getMinutes(value)
    this.hours = this.getHours(value)


  }

  getSeconds(value: number) {
    const seconds = value / 100

    if (seconds >= 1) {
      const stringNumber = (seconds % 60).toString()
      return stringNumber.split('.')[0]

    } else {
      return '0'
    }
  }

  getMinutes(value: number) {
    const minutes = value / 100 / 60

    if (minutes >= 1) {
      const stringNumber = minutes.toString()
      return stringNumber.split('.')[0]

    } else {
      return '0'
    }
  }

  getHours(value: number) {
    const hours = value / 100 / 60 / 60

    if (hours >= 1) {
      const stringNumber = hours.toString()
      return stringNumber.split('.')[0]

    } else {
      return '0'
    }
  }
}



