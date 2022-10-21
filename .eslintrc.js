module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    // Prettier always goes last.
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    react: {
      version: '18',
    },
  },
  plugins: [
    '@typescript-eslint',
    'tailwindcss',
    'promise',
    'simple-import-sort',
    'import',
    'no-only-tests',
    'react',
    'react-hooks',
  ],
  rules: {
    'no-unused-vars': ['off'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'simple-import-sort/imports': 'error',
    'sort-imports': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-only-tests/no-only-tests': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': ['off'],
    'react/prefer-stateless-function': ['error'],
    'react/react-in-jsx-scope': ['off'],
  },
};