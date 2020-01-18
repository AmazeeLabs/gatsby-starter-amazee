@COMPLETED
Feature: Films database
  A simple interface the shows a list of all Star Wars films, along with
  the characters appear in them.

  Scenario: List all films
    Given a visitor requests the film listing
    Then the list should contain "A New Hope"
    And the list should contain "The Empire Strikes Back"
    And the list should contain "Return of the Jedi"

  Scenario: List films per character
    Given a visitor requests the list of films with "Luke Skywalker"
    Then the list should contain "A New Hope"
    And the list should contain "The Empire Strikes Back"
    But the list should not contain "Return of the Jedi"

  Scenario: List characters per film
    Given a visitor requests the list of characters in "A New Hope"
    Then the list should contain "Luke Skywalker"
    And the list should contain "Han Solo"
    But the list should not contain "Leia Organa"
