// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var buildEnv = require('./prod.env');

if (process.env.DEV_ENV === 'testing') {
  buildEnv = require('./test.env');
} else if (process.env.DEV_ENV === 'labing') {
  buildEnv = require('./lab.env');
}

var path1 = buildEnv.CDN;
path1 = path1.replace(/"/g, '');

module.exports = {
  build: {
    env: buildEnv,
    index: path.resolve(__dirname, '../docs/index.html'),
    assetsRoot: path.resolve(__dirname, '../docs'),
    assetsSubDirectory: 'static',
    assetsPublicPath: path1,
    productionSourceMap: false,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8082,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
    },
    cssSourceMap: false
  }
}
