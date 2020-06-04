const nonGlobalStepBaseDir =
  process.env.CYPRESS_TEST_LEVEL === 'api'
    ? 'cypress/integration/api'
    : 'cypress/integration/ui';

module.exports = {
  commonPath: `${nonGlobalStepBaseDir}/common`,
  nonGlobalStepDefinitions: true,
  stepDefinitions: nonGlobalStepBaseDir,
};
