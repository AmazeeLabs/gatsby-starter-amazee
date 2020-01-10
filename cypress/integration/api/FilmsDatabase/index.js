import { Given, Then, But } from 'cypress-cucumber-preprocessor/steps';

Given(/^a visitor requests the film listing$/, function() {
  cy.graphqlQuery(`{ allFilms { title } }`).then(result => {
    cy.state('list', result.body.data.allFilms);
  });
});

Given(/^a visitor requests the list of films with "([^"]*)"$/, function(name) {
  cy.graphqlQuery(`{ allPersons { name, id } }`).then(result => {
    const id = result.body.data.allPersons.filter(p => p.name === name).pop()
      .id;
    cy.graphqlQuery(
      `query ($id: ID!) { Person(id: $id) { films { title } } }`,
      { id }
    ).then(result => {
      cy.state('list', result.body.data.Person.films);
    });
  });
});

Given(/^a visitor requests the list of characters in "([^"]*)"$/, function(
  title
) {
  cy.graphqlQuery(`{ allFilms { title, id } }`).then(result => {
    const id = result.body.data.allFilms.filter(f => f.title === title).pop()
      .id;
    cy.graphqlQuery(
      `query ($id: ID!) { Film(id: $id) { characters { name } } }`,
      { id }
    ).then(result => {
      cy.state('list', result.body.data.Film.characters);
    });
  });
});

Then(/^the list should contain "([^"]*)"$/, function(title) {
  expect(
    cy.state('list').filter(item => item.title === title || item.name === title)
      .length
  ).to.equal(1);
});

But(/^the list should not contain "([^"]*)"$/, function(title) {
  expect(
    cy.state('list').filter(item => item.title === title || item.name === title)
      .length
  ).to.equal(0);
});
