module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true
  },
  extends: [
    'airbnb',
    'airbnb/hooks'
  ],
  rules: {
    // General
    'operator-linebreak': ['error', 'after'],
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'arrow-body-style': 'warn',
    'arrow-parens': ['error', 'as-needed'],
    // React
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-fragments': 'off',
    // Import
    'import/namespace': ['error', { 'allowComputed': true }],
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    // JSX
    'jsx-a11y/label-has-for': 'off' // This rule was deprecated in v6.1.0.
  }
}