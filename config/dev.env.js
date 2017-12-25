var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var constant = require('./constant.env')
var cdn = '';

switch (process.env.DEV_ENV) {
  case 'testing':
    cdn = constant.CDN_TESTING;
    break;
  case 'labing':
    cdn = constant.CDN_LABING;
    break;
  case 'production':
    cdn = constant.CDN_PRODUCTION;
    break;
  default:
    cdn = constant.CDN_DEVELOPMENT;
}

module.exports = merge(prodEnv, {
  NODE_ENV: constant.NODE_ENV_DEVELOPMENT,
  CDN: cdn,
})
