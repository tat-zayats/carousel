// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html',
    'vue'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'vue/jsx-uses-vars': 2,
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    "linebreak-style" : ["error", "windows"],
    "no-param-reassign" : ["error", { "props": false }],
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "arrow-parens": ["error", "as-needed"],
    "no-console": ["warn"],
    "array-callback-return": ["warn"],
    "no-param-reassign": ["warn"],
    "consistent-return": ["warn"],
    "indent": ["warn", "tab"],
    "no-plusplus": ["warn"],
    "no-trailing-spaces": ["warn"],
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
