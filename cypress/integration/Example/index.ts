/// <reference types="Cypress" />
const { Given, Then } = require('cypress-cucumber-preprocessor/steps');
export {};

Given('a user is visiting the movie listing', () => {
  cy.visit('/');
});

Then('"A new hope" should be displayed', () => {
  cy.contains('A new hope');
});
