@UI @COMPLETED
Feature: Languages
  A language switcher in the page header allows visitors to change the websites,
  language which will cause all translated interface texts to change.

  Scenario: English is the default language
    Given a user visits the home page
    Then the page title should read "Welcome"
    And the main navigation should contain "Home"

  Scenario: Switch the language
    Given a user visits the home page
    When the user uses the language switcher to change the site language to "Deutsch"
    Then the page title should read "Willkommen"
    And the main navigation should contain "Startseite"
