module.exports = {
  collectCoverageFrom: [
    '**/*.js',
    '!**/node_modules/**',
  ],
  coverageDirectory: '_coverage',
  moduleDirectories: ['lib', 'node_modules'],
  moduleFileExtensions: ['js', 'json'],
  moduleNameMapper: {
    'VeemSDK': '<rootDir>/lib',
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest/setup-test-framework-script.js',
    '<rootDir>/jest/setup-chai-plugins.js',
  ],
  testMatch: ['**/__tests__/?(*.)+(spec).js'],
  testRunner: 'jest-circus/runner',
  verbose: true,
}
