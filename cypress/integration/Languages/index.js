import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

Given(/^a user visits the page for movie listings$/, function() {
  cy.visit('/');
});

Then(/^the page title should read "([^"]*)"$/, function(title) {
  cy.get('h1').contains(title);
});

When(/^the user uses the language switcher to change the site language to "([^"]*)"$/, function(lang) {
  cy.get('#language-switcher').contains(lang).then(result => {
    cy.get('#language-switcher').select(result.attr('value'));
    // TODO: We have to wait for Gatsby to navigate.
    cy.wait(1000);
  });
});
