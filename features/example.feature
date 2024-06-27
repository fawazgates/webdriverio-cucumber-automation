@tag
Feature: Login feature

  Background:
    Given I am on the saucedemo login page

  @tag
  Scenario Outline: Successful login with valid credentials
    When I login with username "<username>" and password "<password>"
    Then I should see the products page
    And I should see the product "Sauce Labs Backpack" in the inventory

    Examples:
      | username       | password      |
      | standard_user  | secret_sauce  |
