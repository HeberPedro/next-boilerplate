/** @type {import('plop').PlopGenerator} */
const config = {
  description: 'Create a React Page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Page name?'
    }
  ],
  actions: [
    {
      type: 'addMany',
      destination: '../src/pages/{{pascalCase name}}',
      templateFiles: 'templates/page',
      base: 'templates/page'
    }
  ]
}

module.exports = config
