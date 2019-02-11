export interface TimerWorkerInterface {
  counter: Promise<number>
  formattedCounter: Promise<{
    milliseconds: string
    seconds: string
    minutes: string
    hours: string
  }>

  increment: (delta?: number, callback?: (value: number) => void) => Promise<void>

  setUpdateCallback: (cb: () => void) => void

  startTimer: () => void
  stopTimer: () => void
}
