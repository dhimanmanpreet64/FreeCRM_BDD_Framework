/*
 * package stepDefinitions;
 * 
 * import org.openqa.selenium.By; import org.openqa.selenium.WebDriver; import
 * org.openqa.selenium.WebElement; import
 * org.openqa.selenium.interactions.Actions;
 * 
 * import cucumber.api.java.en.Given; import cucumber.api.java.en.Then; import
 * cucumber.api.java.en.When; import org.junit.Assert;
 * 
 * 
 * public class HomePageStepDefinition { WebDriver driver;
 * 
 * 
 * @Given("^user is already on the home page$") public void
 * user_is_already_on_the_home_page(){
 * 
 * String title = driver.getTitle(); System.out.println(title);
 * Assert.assertEquals("CRMPRO", title); }
 * 
 * @When("^user mouse is on the contacts link$") public void
 * user_mouse_is_on_the_contacts_link(){ driver.switchTo().frame("mainpanel");
 * Actions action = new Actions(driver); WebElement contactLink=
 * driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"));
 * action.moveToElement(contactLink).build().perform(); }
 * 
 * @Then("^user clicks on the new contact link$") public void
 * user_clicks_on_the_new_contact_link() { }
 * 
 * @Then("^user enters the firstname and lastname$") public void
 * user_enters_the_firstname_and_lastname() { }
 * 
 * @Then("^user clicks on the save button$") public void
 * user_clicks_on_the_save_button() { }
 * 
 * @Then("^verify new contact created$") public void
 * verify_new_contact_created() { }
 * 
 * 
 * }
 */