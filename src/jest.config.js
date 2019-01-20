module.exports = {
    testPathIgnorePatterns: ['<rootDir>/scripts/', '<rootDir>/node_modules/'],
    coverageDirectory: '<rootDir>/coverage/',
    coverageReporters: ['html', 'cobertura', 'lcov'],
    collectCoverage: true,
    collectCoverageFrom: ['**/src/apps/**/*.{js,jsx}'],
    setupFiles: ['./src/setupTests.js'],
    moduleNameMapper: {
      '\\.(css|scss)$': '<rootDir>/config/styleMock.js'
    },
    transformIgnorePatterns: ['node_modules/(?!(@cargill/cgl-dxo-fe-platform)/)'],
    setupTestFrameworkScriptFile: '<rootDir>/jestSetup/index.js',
    testURL: 'http://example.test/products/CT400',
    timers: "fake"
  };
  