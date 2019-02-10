export interface TimerWorkerInterface {

  counter: Promise<number>

  increment: (delta?: number, callback?: (value: number) => void) => Promise<void>

  setUpdateCallback: (cb: () => void) => void

  startTimer: () => void
  stopTimer: () => void
}
