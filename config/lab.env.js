var merge = require('webpack-merge')
var devEnv = require('./dev.env')
var constant = require('./constant.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"labing"',
  CDN: constant.CDN_LABING,
})
