package com.spartaglobal.cucumberintro.stepdefs;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MultiExamplesStepDefs {

    private String food;
    private int eatingMinutes;
    private int quantity;
    private String name;
    private int age;
    private int entryAge;


    //intro to cucumber
    @Given("I have set up Cucumber correctly")
    public void i_have_set_up_Cucumber_correctly() {
        // Write code here that turns the phrase above into concrete actions

    }

    @When("I execute a test")
    public void i_execute_a_test() {
        // Write code here that turns the phrase above into concrete actions

    }

    @Then("the test runs correctly")
    public void the_test_runs_correctly() {
        // Write code here that turns the phrase above into concrete actions

    }



    //hotdog story
    @Given("I have {int} {string} to eat")
    public void i_have_hotdogs_to_eat(Integer quantity, String food) {
        this.quantity = quantity;
        this.food = food;
        System.out.println(this.food + " ");

    }

    @And("I have {int} minutes to eat them")
    public void i_have_minutes_to_eat_them(Integer minutes) {
        this.eatingMinutes=minutes;
        System.out.println(this.eatingMinutes + " minutes ");
    }

    @When("I start eating")
    public void i_start_eating() {
        // Write code here that turns the phrase above into concrete actions

    }

    @And("the timer starts at {int} minutes")
    public void the_timer_starts_at_minutes(Integer minutes) {
        // Write code here that turns the phrase above into concrete actions

    }

    @Then("I'm able to eat them in the time")
    public void i_m_able_to_eat_them_in_the_time() {
        System.out.println(this.eatingMinutes / this.quantity + "  per minutes \n");
    }

    @And("not be sick")
    public void not_be_sick() {
        // Write code here that turns the phrase above into concrete actions
    }


    //club bouncer
    @Given("{string} attempt entering a club")
    public void attempt_entering_a_club(String name) {
        this.name = name;
    }

    @When("the bouncer check my {int}")
    public void the_bouncer_check_my(Integer age) {
        this.age = age;
    }

    @And("age is above the minimum {int} years of age")
    public void age_is_above_the_minimum_years_of_age(Integer entryAge) {
        this.entryAge = entryAge;
    }

    @Then("I am able to gain access")
    public void i_am_able_to_gain_access() {
        // Write code here that turns the phrase above into concrete actions
        if (this.age >= this.entryAge){
            System.out.println(this.name + " got int wooooo! \n");
        }else{
            System.out.println(this.name + " too young bruh \n");
        }
    }




}
