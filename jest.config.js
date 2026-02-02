module.exports = {
  testEnvironment: "node",

  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["01-basic-test-01/**/*.{js,ts}"],
  coverageReporters: ["lcov", "text-summary"],

  testPathIgnorePatterns: ["/node_modules/", "/test-e2e/"],

  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "./reports",
        outputName: "junit.xml",
      },
    ],
  ],

  // optional safety net
  coverageThreshold: {
    global: {
      lines: 60,
      statements: 60,
    },
  },
};
