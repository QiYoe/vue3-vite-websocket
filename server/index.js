const WebScorket = require('ws')

  ; ((Ws) => {

    const server = new Ws.Server({ port: 8080 })

    const init = () => {
      bindEvent()
    }

    function bindEvent () {
      server.on('open', handleOpen)
      server.on('close', handleClose)
      server.on('eror', handleError)
      server.on('connection', handleConnection)
    }

    function handleOpen () {
      console.log('WebSocket Open')
    }
    function handleClose () {
      console.log('WebSocket Close')
    }
    function handleError () {
      console.log('WebSocket Error')
    }
    function handleConnection (ws) {
      console.log('WebSocket Connection')
      ws.on('message', handleMessage)
    }

    function handleMessage (msg) {
      server.clients.forEach(c => {
        c.send(msg)
      })
      console.log(msg)
    }

    init()

  })(WebScorket)