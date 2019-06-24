Feature: Cucumber learnings
  As a user of Cucumber
  I want to understand the possible functionality

  #simple intro
  Scenario: I am able to run a cucumber test
    Given I have set up Cucumber correctly
    When I execute a test
    Then the test runs correctly

    #Exepressions
    Scenario: I have 10 "hotdogs" to eat
      Given I have 10 "hotdogs" to eat
      And I have 30 minutes to eat them
      When I start eating
      And the timer starts at 30 minutes
      Then I'm able to eat them in the time
      And not be sick

      #no added code needed
      Scenario: We will only use what we have written
        Given I have 20 "hotdogs" to eat
        And I have 45 minutes to eat them
        Then I'm able to eat them in the time

        #Scenario Outline example

        Scenario Outline: Validate club entry
          Given <name> attempt entering a club
          When the bouncer check my <age>
          And age is above the minimum 18 years of age
          Then I am able to gain access

          Examples:
          | name    | age |
          | "Dave"  | 19  |
          | "Rahul" | 17  |
          | "Sheldon" | 18|


