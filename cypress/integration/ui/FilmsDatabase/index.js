import { Given, Then, But } from 'cypress-cucumber-preprocessor/steps';

Then(/^the list should contain "([^"]*)"$/, function(title) {
  cy.contains(title);
});

Given(/^a visitor requests the film listing$/, function() {
  cy.visit('/films');
});

But(/^the list should not contain "([^"]*)"$/, function(title) {
  cy.contains(title).should('not.exist');
});

Given(/^a visitor requests the list of films with "([^"]*)"$/, function(name) {
  cy.visit('/persons');
  cy.contains(name).click();
});

Given(/^a visitor requests the list of characters in "([^"]*)"$/, function(
  title
) {
  cy.visit('/films');
  cy.contains(title).click();
});
