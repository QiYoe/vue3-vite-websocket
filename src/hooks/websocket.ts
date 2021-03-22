import { WS_ADDRESS } from '../configs'

function useWebSocket(
  handleMessage: (this: WebSocket, ev: MessageEvent<any>) => any
) {
  const ws = new WebSocket(WS_ADDRESS)

  const init = () => {
    bindEvent()
  }

  function bindEvent() {
    ws.addEventListener('open', handleOpen, false)
    ws.addEventListener('close', handleClose, false)
    ws.addEventListener('error', handleError, false)
    ws.addEventListener('message', handleMessage, false)
  }

  function handleOpen(e: any) {
    console.log('websocket open', e)
  }
  function handleClose(e: any) {
    console.log('websocket close', e)
  }
  function handleError(e: any) {
    console.log('websocket error', e)
  }

  init()

  return ws
}

export default useWebSocket
