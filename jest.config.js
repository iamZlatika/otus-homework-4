module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jestSettings.js"],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    "^services(.*)$": "<rootDir>/src/services$1",
    "^components(.*)$": "<rootDir>/src/components$1",
  },
};
