module.exports = {
  root: true,
  parserOptions: {
    project: 'tsconfig.eslint.json',
  },
  env: {
    node: true,
    jest: true,
  },
  extends: ['xo-space/esnext', 'xo-typescript'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    '@typescript-eslint/explicit-function-return-type': 0,
    'capitalized-comments': 0,
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/camelcase': 0,
    quotes: 0,
    'quote-props': 0,
    'no-script-url': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
};
