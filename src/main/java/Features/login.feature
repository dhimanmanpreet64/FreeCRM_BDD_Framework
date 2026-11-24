Feature: Free CRM Login Feature

Scenario: Free CRM Login Test scenario
# 
# without example keyword
Given user is already on Login Page
When title of login page is Free CRM software for customer relationship management, sales, and support.
Then user enters the "Manpreet0079" and "Dhiman&2612"  
Then user clicks on login button
Then user is on home page
Then close the browser


#Scenario Outline: Free CRM Login Test scenario
# 
# # with example keyword
# # line 19 is parameterized with the data
#Given user is already on Login Page
#When title of login page is Free CRM software for customer relationship management, sales, and support.
#Then user enters the "<username>" and "<password>"  
#Then user clicks on login button
#Then user is on home page
#Then close the browser
#
#Examples: 
#  | username     | password    |
#  | Manpreet0079 | Dhiman&2612 |
#  | Prabhjot5959 | Aries7258*  |
#  