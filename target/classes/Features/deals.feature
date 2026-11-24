Feature: Free CRM Deal Page Feature

Scenario: Free CRM deals page test scenario

Given user is already on Login Page
When title of login page is Free CRM software for customer relationship management, sales, and support.
Then user enters the username and password
| Manpreet0079 | Dhiman&2612 |

Then user clicks on login button
Then user is on home page
Then user moves to the new deals page

Then user enters deals detail
| test deal 1 | 1000 | 90 | 80 |

Then close the browser

# test data tables
# here the data below the lines belongs to that particular line