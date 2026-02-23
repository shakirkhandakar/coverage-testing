module.exports = {
  testEnvironment: "node",

  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["01-basic-test-01/**/*.{js,ts}"],
  coverageReporters: ["lcov", "text-summary", "json-summary"],

  testPathIgnorePatterns: ["/node_modules/", "/test-e2e/"],

  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "coverage",
        outputName: "junit.xml",
      },
    ],
  ],

  // optional safety net
  coverageThreshold: {
    global: {
      lines: 30,
      statements: 30,
    },
  },
};
