module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  setupFiles: [
    './jest.setup.js'
  ],
  testEnvironment: 'jest-environment-jsdom',
};
