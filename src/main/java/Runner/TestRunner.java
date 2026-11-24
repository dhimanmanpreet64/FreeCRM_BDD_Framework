package Runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		// important
		features = "C:/QA/Selenium_Workspace1/FreeCrmBDDFramework/src/main/java/Features/deals.feature", //the path of the feature files
		glue={"stepDefinitions"}, //the path of the step definition files
		format= {"pretty","html:test-output","json: json_output/cucumber.json","junit: junit_xml/cucumber.xml"},//to generate different types of reporting
	    dryRun = false, //to check the mapping is proper between feature file and step def file----- if dryrun is true will just check the test cases but to run the tests dryRun must be false
		monochrome = true, // display the console output  in a proper readable format
		strict = true//it will check if any step is not defined in step definition file but it it will execute the program and fails the undefined step 
		)

public class TestRunner {

}
