module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-console": "off",
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-cycle': 'off',
    "no-use-before-define": [2, { "functions": false, "classes": false }],
    "space-before-function-paren": 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
