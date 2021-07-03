const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');

module.exports = {
    ...jestConfig,
    modulePathIgnorePatterns: ['<rootDir>/.localdevserver'],
    moduleNameMapper: {
      '^c/displayPanel$': '<rootDir>/force-app/test/jest-mocks/c/displayPanel',
      '^thunder/hammerButton$': '<rootDir>/force-app/test/jest-mocks/thunder/hammerButton',
      '^lightning/button$': '<rootDir>/force-app/test/jest-mocks/lightning/button'
      }
};


