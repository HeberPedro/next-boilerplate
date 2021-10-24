/** @type {import('plop').PlopGenerator} */
const config = {
  description: 'Create a React hook',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Hook name?'
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../src/hooks/{{camelCase name}}/index.ts',
      templateFile: 'templates/hook/index.ts.hbs'
    }
  ]
}

module.exports = config
