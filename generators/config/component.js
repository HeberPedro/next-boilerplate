/** @type {import('plop').PlopGenerator} */
const config = {
  description: 'Create a React Component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name?'
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/index.tsx',
      templateFile: 'templates/component/index.tsx.hbs',
      base: 'templates/component'
    },
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/stories.tsx',
      templateFile: 'templates/component/stories.tsx.hbs',
      base: 'templates/component'
    },
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/styles.ts',
      templateFile: 'templates/component/styles.ts.hbs',
      base: 'templates/component'
    },
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/test.tsx',
      templateFile: 'templates/component/test.tsx.hbs',
      base: 'templates/component'
    }
  ]
}

module.exports = config
