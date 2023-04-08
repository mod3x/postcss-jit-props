module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'es2021',
    project: './tsconfig.json',
  },

  plugins: ['@typescript-eslint'],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],

  env: {
    node: true,
    es2021: true,
  },
}
