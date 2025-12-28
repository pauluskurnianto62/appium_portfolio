Feature: Purchase

  Background:
    Given I am on main menu

  Scenario: Add New Todo
    And I am on new todo page
    And I fill all blanks
    When I click add
    Then Todo list should be added in main menu

  Scenario: Edit Todo
    And I am on edit todo page with title "Beli nasi goreng"
    And I change fills
    When I click edit
    Then todo list should be changed in main menu

  Scenario: Remove Todo
    When I click checked with title "Beli mie goreng"
    Then todo list should be removed in main menu