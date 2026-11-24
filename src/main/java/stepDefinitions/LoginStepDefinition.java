/*
 * package stepDefinitions;
 * 
 * import org.openqa.selenium.By; import org.openqa.selenium.JavascriptExecutor;
 * import org.openqa.selenium.WebDriver; import org.openqa.selenium.WebElement;
 * import org.openqa.selenium.firefox.FirefoxDriver; import
 * org.openqa.selenium.interactions.Actions;
 * 
 * import cucumber.api.java.en.Given; import cucumber.api.java.en.Then; import
 * cucumber.api.java.en.When; import org.junit.Assert;
 * 
 * public class LoginStepDefinition { WebDriver driver;
 * 
 * @Given("^user is already on Login Page$") public void
 * user_already_on_login_page() {
 * 
 * System.setProperty("webdriver.gecko.driver", "C:/QA/geckodriver.exe"); driver
 * = new FirefoxDriver(); driver.get("https://classic.crmpro.com/"); }
 * 
 * @When("^title of login page is Free CRM software for customer relationship management, sales, and support.$"
 * ) public void title_of_login_page_is_free_crm() { String title =
 * driver.getTitle(); System.out.println(title); Assert.
 * assertEquals("Free CRM software for customer relationship management, sales, and support."
 * , title); } //Reg Exp: //1. \"([^\"]*)\" --- to read data from feature file
 * //2. \"(.*)\"
 * 
 * 
 * @Then("^user enters the \"([^\"]*)\" and \"([^\"]*)\"$") public void
 * user_enters_the_username_and_password(String username, String password) {
 * driver.findElement(By.name("username")).sendKeys(username);
 * driver.findElement(By.name("password")).sendKeys(password); }
 * 
 * @Then("^user clicks on login button$") public void
 * user_clicks_on_login_button() { WebElement loginBtn =
 * driver.findElement(By.xpath("//input[@type='submit']")); JavascriptExecutor
 * js = (JavascriptExecutor)driver; js.executeScript("arguments[0].click();",
 * loginBtn);
 * 
 * }
 * 
 * @Then("^user is on home page$") public void user_is_on_home_page() throws
 * InterruptedException { Thread.sleep(2000); String home_title =
 * driver.getTitle(); System.out.println("Home page title is "+home_title);
 * Assert.assertEquals("CRMPRO", home_title);
 * 
 * }
 * 
 * @Then("^user moves to the new contacts page$") public void
 * user_moves_to_the_new_contacts_page(){ driver.switchTo().frame("mainpanel");
 * Actions action = new Actions(driver);
 * action.moveToElement(driver.findElement(By.xpath(
 * "//a[contains(text(),'Contacts')]"))).build().perform();
 * driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
 * }
 * 
 * @Then("^user enters contacts detail \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$"
 * ) public void user_enters_contacts_detail(String firstname, String lastname,
 * String companyname){
 * driver.findElement(By.id("first_name")).sendKeys(firstname);
 * driver.findElement(By.id("surname")).sendKeys(lastname);
 * driver.findElement(By.name("client_lookup")).sendKeys(companyname);
 * driver.findElement(By.xpath("//input[@type ='submit'  and @value ='Save']")).
 * click();
 * 
 * }
 * 
 * 
 * 
 * 
 * @Then("^close the browser$") public void close_the_window() { driver.quit();
 * }
 * 
 * }
 */