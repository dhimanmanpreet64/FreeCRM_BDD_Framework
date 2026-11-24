$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/QA/Selenium_Workspace1/FreeCrmBDDFramework/src/main/java/Features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Deal Page Feature",
  "description": "",
  "id": "free-crm-deal-page-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM deals page test scenario",
  "description": "",
  "id": "free-crm-deal-page-feature;free-crm-deals-page-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM software for customer relationship management, sales, and support.",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters the username and password",
  "rows": [
    {
      "cells": [
        "Manpreet0079",
        "Dhiman\u00262612"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user moves to the new deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters deals detail",
  "rows": [
    {
      "cells": [
        "test deal 1",
        "1000",
        "90",
        "80"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepDefiniton.user_already_on_login_page()"
});
formatter.result({
  "duration": 4145337200,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefiniton.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 39966500,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefiniton.user_enters_the_username_and_password(DataTable)"
});
formatter.result({
  "duration": 248881600,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefiniton.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 118484900,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefiniton.user_is_on_home_page()"
});
formatter.result({
  "duration": 2009164100,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefiniton.user_moves_to_the_new_deals_page()"
});
formatter.result({
  "duration": 423567700,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefiniton.user_enters_deals_detail(DataTable)"
});
formatter.result({
  "duration": 505547700,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefiniton.close_the_window()"
});
formatter.result({
  "duration": 683089700,
  "status": "passed"
});
});