import {Given, Then, But} from 'cypress-cucumber-preprocessor/steps';

Then(/^the list should contain "([^"]*)"$/, function(title) {
  cy.contains(title);
});

Given(/^a visitor requests the film listing$/, function() {
  cy.visit('/')
});

But(/^the list should not contain "([^"]*)"$/, function(title) {
  cy.contains(title).should('not.exist');
});

Given(/^a visitor requests the list of films with "([^"]*)"$/, function(name) {
  cy.visit('/person/1');
});

Given(/^a visitor requests the list of characters in "([^"]*)"$/, function() {
  cy.visit('/film/1');
});
