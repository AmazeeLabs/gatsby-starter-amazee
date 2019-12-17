@UI
Feature: Languages
  A language switcher in the page header allows visitors to change the websites,
  language which will cause all translated interface texts to change.

  Scenario: English is the default language
    Given a user visits the page for movie listings
    Then the page title should read "Movie listing"

  Scenario: Switch the language
    Given a user visits the page for movie listings
    When the user uses the language switcher to change the site language to "Deutsch"
    Then the page title should read "Filmliste"
