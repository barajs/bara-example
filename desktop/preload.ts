import electron from 'electron'
;(window as any).bara = true

// Communication between webapp and electron main process
// Used on oauth flow
;(window as any).ipc = electron.ipcRenderer

if ((window as any).ipc) {
  ;(window as any).ipc.on('post-message', (_e: any, message: any) => {
    window.postMessage(message, '*')
  })
}
