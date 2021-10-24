/** @type {import('plop').PlopGenerator} */
const config = {
  description: 'Create an util function',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Util name?'
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../src/utils/{{camelCase name}}/index.tsx',
      templateFile: 'templates/util/index.ts.hbs'
    }
  ]
}

module.exports = config
