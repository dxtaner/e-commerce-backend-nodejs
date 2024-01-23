module.exports = {
  // The test environment
  testEnvironment: "node",

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],

  // Directories that Jest should ignore
  testPathIgnorePatterns: ["/node_modules/"],

  // Code coverage configuration
  collectCoverage: true,
  coverageDirectory: "coverage",

  // Other configuration options as needed
};
