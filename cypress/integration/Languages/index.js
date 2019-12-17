import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

Given(/^a user visits the page for movie listings$/, function() {
  cy.visit('/');
});

Then(/^the page title should read "([^"]*)"$/, function(title) {
  cy.get('h1').contains(title);
});

When(/^the user uses the language switcher to change the site language to "([^"]*)"$/, function(lang) {
  cy.get('#language-switcher').contains(lang).then(result => {
    const langCode = result.attr('value');
    cy.get('#language-switcher').select(langCode);
    // After switching the language, we have to wait for Gatsby to actually
    // change the url path, since there might not be a http request that cypress
    // will wait for automatically.
    cy.waitUntil(() => cy.window().then(win => {
      return win.location.pathname.substr(1, langCode.length) === langCode;
    }));
  });
});
