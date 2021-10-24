const componentConfig = require('./config/component')
const pageConfig = require('./config/page')
const utilConfig = require('./config/util')
const hookConfig = require('./config/hook')

/** @type {import('plop').NodePlopAPI} */
module.exports = (plop) => {
  plop.setGenerator('component', componentConfig)

  plop.setGenerator('page', pageConfig)

  plop.setGenerator('util', utilConfig)

  plop.setGenerator('hook', hookConfig)
}
