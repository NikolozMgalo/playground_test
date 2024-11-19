Feature: playground test

    Background: 
        Given I am on the main page

    Scenario: Authentication testing
        When I select Sample App page
        And I enter username
        And I enter password
        And I click on login button
        Then I should see welcome message

    @trivial
    Scenario: Text Input test
        When I select text input
        And I write text in the input field
        And I click on the button
        Then Button name should change