@Funtional
Feature: Free CRM tagging tests

@End2End
Scenario: Login with the correct username and password
Given user enters valid username and password

@RegressionTest
Scenario: Login with the incorrect username and password
Given user enters invalid username and password

@End2End
Scenario: create new company
Given this is new company link

@SmokeTest @RegressionTest
Scenario: create new deal
Given this is new deal link

@End2End @RegressionTest
Scenario: create new task
Given this is new task link

@SmokeTest @RegressionTest
Scenario: create new case
Given this is new case link

@End2End @RegressionTest
Scenario: create new email
Given this is new email link

@SmokeTest @End2End
Scenario: create new search
Given this is new seacrh link

@RegressionTest
Scenario: create new call list
Given this is new call list link

@SmokeTest @RegressionTest
Scenario: create new report
Given this is new reposrt link

@SmokeTest
Scenario: create new docs
Given this is new docs link

@End2End
Scenario: create new form
Given this is new form link

@SmokeTest @RegressionTest
Scenario: create new alert
Given this is new alert link

@RegressionTest
Scenario: search for letf panel
Given this is seacrh for left panel

@SmokeTest @End2End
Scenario: verify CRMPRO logo
Given this is to verify the logo

@RegressionTest
Scenario: verify the help link
Given validate the help link

@SmokeTest
Scenario: create new resources
Given this is new resources link

@End2End
Scenario: close the browser
Given this is to close the browser


#Cucumber has already provided a way to organize your scenario execution by using tags in feature file. We can define each scenario with a useful tag. 
#Later, in the runner file, we can decide which specific tag (and so as the scenario(s)) we want Cucumber to execute. 

#Tag starts with “@”. After “@” you can have any relevant text to define your tag like @SmokeTests just above the scenarios 
#you like to mark. Then to target these tagged scenarios just specify the tags names in the CucumberOptions as tags = {“@SmokeTests”}.

#Tagging not just specifically works with Scenarios, it also works with Features. Means you can also tag your features files. 
#Any tag that exists on a Feature will be inherited by Scenario, Scenario Outline or Examples.