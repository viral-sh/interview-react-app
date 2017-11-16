import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import path from 'path'
import cors from 'cors'
import http from 'http'
import gracefulShutdown from 'http-graceful-shutdown'

import { publicRouter } from './router'
import './api-emp'
/* server/index.js - Server Entrypoint  */

const debug = require('debug')('server:api')
const isDevEnv = (
  !process.env.NODE_ENV ||
  process.env.NODE_ENV == null ||
  process.env.NODE_ENV.toLowerCase() === 'development'
)

const app = express()
app.use(compression())
app.use(express.static(path.join(__dirname, '/../../build')))

app.use(bodyParser.json({ limit: '0.5mb' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// RPC first
publicRouter.get('/health', function (req, res) {
  debug('health checked')
  res.send('{"status":"OK"}')
})

app.use('/', publicRouter)

// Default App Error Handler
app.use(function (err, req, res, next) {
  debug('Global error handler')
  debug('Error: ', err.message, err.stack, err)
  res.status(500).send('Internal Server Error')
})

let main = async () => {
  debug('starting server...')
  let httpServer = http.Server(app)

  app.use(function (req, res) {
    // 404
    res.status(404).send('404 error')
  })
  httpServer.listen(4000, function () {
    debug('Server API running on 4000')
  })

  // Cleanup function - this can include any sync, async cleanups
  async function cleanup () {

  }

  // This enables the graceful shutdown with advanced options
  gracefulShutdown(httpServer, {
    signals: 'SIGINT SIGTERM',
    timeout: 30000,
    development: isDevEnv,
    onShutdown: cleanup,
    finally: () => debug('Graceful shutdown complete')
  })

  // Setting maxListeners to infinite to suppress warnings generated
  // by EventEmitter due to gracefulShutdown
  process.setMaxListeners(0)
}
main()
