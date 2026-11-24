$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/QA/Selenium_Workspace1/FreeCrmBDDFramework/src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Contact Page Feature",
  "description": "",
  "id": "free-crm-contact-page-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM contact page test scenario",
  "description": "",
  "id": "free-crm-contact-page-feature;free-crm-contact-page-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "user enters the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to the new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contacts detail \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003ccompanyname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 14,
      "value": "#your steps should we different if we use the same words then it gives the same step definition error"
    }
  ],
  "line": 16,
  "name": "",
  "description": "",
  "id": "free-crm-contact-page-feature;free-crm-contact-page-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "companyname"
      ],
      "line": 17,
      "id": "free-crm-contact-page-feature;free-crm-contact-page-test-scenario;;1"
    },
    {
      "cells": [
        "Manpreet0079",
        "Dhiman\u00262612",
        "Dev",
        "Matharu",
        "Ebay"
      ],
      "line": 18,
      "id": "free-crm-contact-page-feature;free-crm-contact-page-test-scenario;;2"
    },
    {
      "cells": [
        "Manpreet0079",
        "Dhiman\u00262612",
        "Diya",
        "Sharma",
        "Meesho"
      ],
      "line": 19,
      "id": "free-crm-contact-page-feature;free-crm-contact-page-test-scenario;;3"
    },
    {
      "cells": [
        "Manpreet0079",
        "Dhiman\u00262612",
        "Nadar",
        "Kaur",
        "Google"
      ],
      "line": 20,
      "id": "free-crm-contact-page-feature;free-crm-contact-page-test-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM contact page test scenario",
  "description": "",
  "id": "free-crm-contact-page-feature;free-crm-contact-page-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters the \"Manpreet0079\" and \"Dhiman\u00262612\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to the new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contacts detail \"Dev\" and \"Matharu\" and \"Ebay\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 4003997500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 42061500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manpreet0079",
      "offset": 17
    },
    {
      "val": "Dhiman\u00262612",
      "offset": 36
    }
  ],
  "location": "LoginStepDefinition.user_enters_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 214902500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 86438300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 2005559200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_the_new_contacts_page()"
});
formatter.result({
  "duration": 447621100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dev",
      "offset": 29
    },
    {
      "val": "Matharu",
      "offset": 39
    },
    {
      "val": "Ebay",
      "offset": 53
    }
  ],
  "location": "LoginStepDefinition.user_enters_contacts_detail_and_and(String,String,String)"
});
formatter.result({
  "duration": 456222300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_window()"
});
formatter.result({
  "duration": 900002800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Free CRM contact page test scenario",
  "description": "",
  "id": "free-crm-contact-page-feature;free-crm-contact-page-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters the \"Manpreet0079\" and \"Dhiman\u00262612\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to the new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contacts detail \"Diya\" and \"Sharma\" and \"Meesho\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 4046871500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 4097000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manpreet0079",
      "offset": 17
    },
    {
      "val": "Dhiman\u00262612",
      "offset": 36
    }
  ],
  "location": "LoginStepDefinition.user_enters_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 96854800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 40949200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 2010392500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_the_new_contacts_page()"
});
formatter.result({
  "duration": 416821800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Diya",
      "offset": 29
    },
    {
      "val": "Sharma",
      "offset": 40
    },
    {
      "val": "Meesho",
      "offset": 53
    }
  ],
  "location": "LoginStepDefinition.user_enters_contacts_detail_and_and(String,String,String)"
});
formatter.result({
  "duration": 441797100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_window()"
});
formatter.result({
  "duration": 687669500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Free CRM contact page test scenario",
  "description": "",
  "id": "free-crm-contact-page-feature;free-crm-contact-page-test-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters the \"Manpreet0079\" and \"Dhiman\u00262612\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to the new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contacts detail \"Nadar\" and \"Kaur\" and \"Google\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 3689181500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 28940100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manpreet0079",
      "offset": 17
    },
    {
      "val": "Dhiman\u00262612",
      "offset": 36
    }
  ],
  "location": "LoginStepDefinition.user_enters_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 180638500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 85750900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 2005732300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_the_new_contacts_page()"
});
formatter.result({
  "duration": 448619700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nadar",
      "offset": 29
    },
    {
      "val": "Kaur",
      "offset": 41
    },
    {
      "val": "Google",
      "offset": 52
    }
  ],
  "location": "LoginStepDefinition.user_enters_contacts_detail_and_and(String,String,String)"
});
formatter.result({
  "duration": 438047400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_window()"
});
formatter.result({
  "duration": 683953800,
  "status": "passed"
});
});