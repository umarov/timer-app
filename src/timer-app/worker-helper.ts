import { proxy } from 'comlinkjs'

import { TimerWorkerInterface } from './timer-worker-interface'

export async function createProxiedWorker(importedWorkerFile: Promise<any>, workerName: string) {
  const { [workerName]: workerClass } = await importedWorkerFile
  const workerFile = new Blob(
    [
      'importScripts("https://cdn.jsdelivr.net/npm/comlinkjs@3/umd/comlink.js");',
      `const ${workerName} = ${workerClass.toString()};`,
      `Comlink.expose(${workerName}, self);`,
    ],
    { type: 'application/javascript' }
  )

  const worker = (await proxy(new Worker(URL.createObjectURL(workerFile)))) as TimerWorkerInterface

  return worker
}
