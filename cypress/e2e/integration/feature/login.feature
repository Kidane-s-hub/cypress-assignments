Feature: Evangadi Login

  Scenario: Successful login with valid credentials
    Given I open the Evangadi login page
    When I enter a valid email and password
    And I click on the login button
    Then I should be redirected to the dashboard
