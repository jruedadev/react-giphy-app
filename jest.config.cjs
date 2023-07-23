module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    "^.+\\.css$": "jest-transform-stub"
  },
  setupFiles: [
    './jest.setup.js'
  ],
  testEnvironment: 'jest-environment-jsdom',
};
