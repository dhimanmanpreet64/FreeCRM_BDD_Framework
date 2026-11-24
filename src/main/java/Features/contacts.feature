Feature: Free CRM Contact Page Feature

Scenario Outline: Free CRM contact page test scenario
 
Given user is already on Login Page
When title of login page is Free CRM software for customer relationship management, sales, and support.
Then user enters the "<username>" and "<password>"  
Then user clicks on login button
Then user is on home page
Then user moves to the new contacts page
Then user enters contacts detail "<firstname>" and "<lastname>" and "<companyname>"
Then close the browser

#your steps should we different if we use the same words then it gives the same step definition error

Examples: 
     | username     | password    | firstname | lastname | companyname |
     | Manpreet0079 | Dhiman&2612 | Dev       | Matharu  | Ebay        |
     | Manpreet0079 | Dhiman&2612 |Diya       | Sharma   | Meesho      |
     | Manpreet0079 | Dhiman&2612 | Nadar     | Kaur     | Google      |
     