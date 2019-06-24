$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:multipleexamples.feature");
formatter.feature({
  "name": "Cucumber learnings",
  "description": "  As a user of Cucumber\n  I want to understand the possible functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "I am able to run a cucumber test",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have set up Cucumber correctly",
  "keyword": "Given "
});
formatter.match({
  "location": "MultiExamplesStepDefs.i_have_set_up_Cucumber_correctly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I execute a test",
  "keyword": "When "
});
formatter.match({
  "location": "MultiExamplesStepDefs.i_execute_a_test()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the test runs correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiExamplesStepDefs.the_test_runs_correctly()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "I have 10 \"hotdogs\" to eat",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have 10 \"hotdogs\" to eat",
  "keyword": "Given "
});
formatter.match({
  "location": "MultiExamplesStepDefs.i_have_hotdogs_to_eat(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have 30 minutes to eat them",
  "keyword": "And "
});
formatter.match({
  "location": "MultiExamplesStepDefs.i_have_minutes_to_eat_them(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I start eating",
  "keyword": "When "
});
formatter.match({
  "location": "MultiExamplesStepDefs.i_start_eating()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the timer starts at 30 minutes",
  "keyword": "And "
});
formatter.match({
  "location": "MultiExamplesStepDefs.the_timer_starts_at_minutes(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I\u0027m able to eat them in the time",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiExamplesStepDefs.i_m_able_to_eat_them_in_the_time()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "not be sick",
  "keyword": "And "
});
formatter.match({
  "location": "MultiExamplesStepDefs.not_be_sick()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "We will only use what we have written",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have 20 \"hotdogs\" to eat",
  "keyword": "Given "
});
formatter.match({
  "location": "MultiExamplesStepDefs.i_have_hotdogs_to_eat(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have 45 minutes to eat them",
  "keyword": "And "
});
formatter.match({
  "location": "MultiExamplesStepDefs.i_have_minutes_to_eat_them(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I\u0027m able to eat them in the time",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiExamplesStepDefs.i_m_able_to_eat_them_in_the_time()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate club entry",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "\u003cname\u003e attempt entering a club",
  "keyword": "Given "
});
formatter.step({
  "name": "the bouncer check my \u003cage\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "age is above the minimum 18 years of age",
  "keyword": "And "
});
formatter.step({
  "name": "I am able to gain access",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "age"
      ]
    },
    {
      "cells": [
        "\"Dave\"",
        "19"
      ]
    },
    {
      "cells": [
        "\"Rahul\"",
        "17"
      ]
    },
    {
      "cells": [
        "\"Sheldon\"",
        "18"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate club entry",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "\"Dave\" attempt entering a club",
  "keyword": "Given "
});
formatter.match({
  "location": "MultiExamplesStepDefs.attempt_entering_a_club(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the bouncer check my 19",
  "keyword": "When "
});
formatter.match({
  "location": "MultiExamplesStepDefs.the_bouncer_check_my(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "age is above the minimum 18 years of age",
  "keyword": "And "
});
formatter.match({
  "location": "MultiExamplesStepDefs.age_is_above_the_minimum_years_of_age(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to gain access",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiExamplesStepDefs.i_am_able_to_gain_access()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate club entry",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "\"Rahul\" attempt entering a club",
  "keyword": "Given "
});
formatter.match({
  "location": "MultiExamplesStepDefs.attempt_entering_a_club(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the bouncer check my 17",
  "keyword": "When "
});
formatter.match({
  "location": "MultiExamplesStepDefs.the_bouncer_check_my(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "age is above the minimum 18 years of age",
  "keyword": "And "
});
formatter.match({
  "location": "MultiExamplesStepDefs.age_is_above_the_minimum_years_of_age(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to gain access",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiExamplesStepDefs.i_am_able_to_gain_access()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate club entry",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "\"Sheldon\" attempt entering a club",
  "keyword": "Given "
});
formatter.match({
  "location": "MultiExamplesStepDefs.attempt_entering_a_club(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the bouncer check my 18",
  "keyword": "When "
});
formatter.match({
  "location": "MultiExamplesStepDefs.the_bouncer_check_my(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "age is above the minimum 18 years of age",
  "keyword": "And "
});
formatter.match({
  "location": "MultiExamplesStepDefs.age_is_above_the_minimum_years_of_age(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to gain access",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiExamplesStepDefs.i_am_able_to_gain_access()"
});
formatter.result({
  "status": "passed"
});
});