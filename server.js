'use strict'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const koa = require('koa')
const koaStatic = require('koa-static')

let app = koa()

app.use(koaStatic('public'))

app.listen(3000)
