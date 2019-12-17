import {Given, Then, But} from 'cypress-cucumber-preprocessor/steps';

Given(/^a visitor requests the film listing$/, function() {
  cy.graphqlQuery(`{ allFilms { title } }`).then( result => {
    cy.state('list', result.body.data.allFilms);
  });
});

Given(/^a visitor requests the list of films with "([^"]*)"$/, function(name) {
  cy.graphqlQuery(`{ Person (id: "1") { films { title } } }`).then( result => {
    cy.state('list', result.body.data.Person.films);
  });
});

Given(/^a visitor requests the list of characters in "([^"]*)"$/, function() {
  cy.graphqlQuery(`{ Film (id: "1") { characters { name } } }`).then( result => {
    cy.state('list', result.body.data.Film.characters);
  });
});

Then(/^the list should contain "([^"]*)"$/, function(title) {
  expect(cy.state('list').filter(item => (item.title === title || item.name === title)).length).to.equal(1);
});

But(/^the list should not contain "([^"]*)"$/, function(title) {
  expect(cy.state('list').filter(item => (item.title === title || item.name === title)).length).to.equal(0);
});
