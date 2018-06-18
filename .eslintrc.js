const isProduction = process.env.NODE_ENV === 'production';

const errorIfProduction = isProduction ? 'error' : 'off';

module.exports = {
  root: true,
  extends: ['plugin:vue/recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  globals: {
    process: true
  },
  rules: {
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 7
      }
    ],
    'no-console': errorIfProduction,
    'no-debugger': errorIfProduction,
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/attributes-order': 'error',
    'vue/html-quotes': ['error', 'double'],
    'vue/html-self-closing': false
  },
  overrides: [
    {
      files: ['src/**/*.spec.js'],
      env: {
        jest: true
      },
      rules: {
        'import/no-extraneous-dependencies': 'off'
      }
    },
    {
      files: ['*.js'],
      env: {
        node: true
      }
    }
  ]
};
