import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given(/^a user visits the home page$/, function() {
  cy.visit('/');
});

Then(/^the page title should read "([^"]*)"$/, function(title) {
  cy.get('h1').contains(title);
});

Then(/^the main navigation should contain "([^"]*)"$/, function(title) {
  cy.get('nav > h2#navigation ~ ul').contains(title);
});

When(
  /^the user uses the language switcher to change the site language to "([^"]*)"$/,
  function(lang) {
    cy.get('#language-switcher')
      .contains(lang)
      .then(result => {
        const langCode = result.attr('value');
        cy.get('#language-switcher').select(langCode);
        // Wait for gatsby to actually change the window location, since this might
        // not include a HTTP request that cypress waits for automatically.
        cy.waitForNavigate();
      });
  }
);
