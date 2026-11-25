/*
 * package stepDefinitions;
 * 
 * import java.util.List;
 * 
 * import org.junit.Assert; import org.openqa.selenium.By; import
 * org.openqa.selenium.JavascriptExecutor; import org.openqa.selenium.WebDriver;
 * import org.openqa.selenium.WebElement; import
 * org.openqa.selenium.firefox.FirefoxDriver; import
 * org.openqa.selenium.interactions.Actions;
 * 
 * import cucumber.api.DataTable; import cucumber.api.java.en.Given; import
 * cucumber.api.java.en.Then; import cucumber.api.java.en.When;
 * 
 * public class DealsStepDefiniton {
 * 
 * WebDriver driver;
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
 * , title); }
 * 
 * @Then("^user enters the username and password$") public void
 * user_enters_the_username_and_password(DataTable credentials) {
 * List<List<String>> data = credentials.raw(); // raw method gives the access
 * to the table
 * driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
 * driver.findElement(By.name("password")).sendKeys(data.get(0).get(1)); }
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
 * Assert.assertEquals("CRMPRO", home_title); }
 * 
 * @Then("^user moves to the new deals page$") public void
 * user_moves_to_the_new_deals_page() throws InterruptedException{
 * driver.switchTo().frame("mainpanel"); Thread.sleep(3000); Actions action =
 * new Actions(driver); Thread.sleep(3000);
 * action.moveToElement(driver.findElement(By.xpath(
 * "//a[contains(text(),'Deals')]"))).build().perform(); Thread.sleep(3000);
 * driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click(); }
 * 
 * @Then("^user enters deals detail$" ) public void
 * user_enters_deals_detail(DataTable dealData){ List<List<String>> dataValues =
 * dealData.raw();
 * driver.findElement(By.id("title")).sendKeys(dataValues.get(0).get(0));
 * driver.findElement(By.id("amount")).sendKeys(dataValues.get(0).get(1));
 * driver.findElement(By.name("probability")).sendKeys(dataValues.get(0).get(2))
 * ; driver.findElement(By.id("commission")).sendKeys(dataValues.get(0).get(3));
 * 
 * 
 * driver.findElement(By.xpath("//input[@type ='submit'  and @value ='Save']")).
 * click();
 * 
 * }
 * 
 * @Then("^close the browser$") public void close_the_window() { driver.quit();
 * }
 * 
 * 
 * }
 */