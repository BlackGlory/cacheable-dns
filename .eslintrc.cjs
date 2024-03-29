module.exports = {
  root: true
, parser: '@typescript-eslint/parser'
, plugins: [
    '@typescript-eslint'
  ]
, extends: [
    'eslint:recommended'
  , 'plugin:@typescript-eslint/recommended'
  ]
, rules: {
    'no-useless-escape': 'off'
  , 'no-var': 'off'
  , '@typescript-eslint/no-var-requires': 'off'
  , '@typescript-eslint/no-non-null-assertion': 'off'
  , '@typescript-eslint/explicit-module-boundary-types': 'off'
  , '@typescript-eslint/no-duplicate-enum-values': 'off'
  }
}
