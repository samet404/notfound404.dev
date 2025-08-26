import type { TimerWorkerPostMsgData } from './presenceTimeWorker'

const presenceTimeWorker: {
  current: Worker | null
} = {
  current: null,
}

export const getPresenceTimeWorker = () => {
  if (!presenceTimeWorker.current) {
    presenceTimeWorker.current = new Worker(
      new URL('./presenceTimeWorker.ts', import.meta.url),
      {
        type: 'module',
      },
    )
  }

  return presenceTimeWorker as {
    current: Worker
  }
}

export const postMsgToTimerWorker = (msg: TimerWorkerPostMsgData) =>
  getPresenceTimeWorker().current.postMessage(msg)


export const terminateTimerWorker = (): void => {
    presenceTimeWorker.current?.terminate()
    presenceTimeWorker.current = null
}