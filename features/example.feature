Feature: Example of mock call causing timeouts

  Scenario: Page loads causing timeouts
    Given I have reached a page
    When I load the same page again
    Then I should see an error
