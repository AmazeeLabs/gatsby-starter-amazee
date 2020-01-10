module.exports = {
  nonGlobalStepDefinitions: true,
  nonGlobalStepBaseDir:
    process.env.CYPRESS_TEST_LEVEL === 'api'
      ? 'cypress/integration/api/'
      : 'cypress/integration/ui/',
};
