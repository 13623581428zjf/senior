'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  REALM: '"cashier.lenovomm.com"',
  BASE_API: '"/api"',
})
