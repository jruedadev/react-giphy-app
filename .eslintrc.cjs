/* eslint-env node */

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true, // Agregamos "node" para reconocer el entorno Node.js
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021, // Cambiamos a 2021 para admitir la última versión de ECMAScript
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', // Cambiamos a "detect" para que ESLint detecte la versión de React automáticamente
    },
  },
  plugins: ['react', 'react-hooks', 'react-refresh'], // Agregamos los plugins de react y react-hooks
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
