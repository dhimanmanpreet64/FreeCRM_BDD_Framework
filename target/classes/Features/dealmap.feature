Feature: Free CRM Deal Page Feature

Scenario: Free CRM deals page test scenario

Given user is already on Login Page
When title of login page is Free CRM software for customer relationship management, sales, and support.
Then user enters the username and password
| username     | password    |
| Manpreet0079 | Dhiman&2612 |

Then user clicks on login button
Then user is on home page
Then user moves to the new deals page

Then user enters deals detail
| title       | amount | probability | commission |
| test deal 2 | 1000   | 90          | 80         |
| test deal 3 | 2000   | 70          | 20         |
| test deal 4 | 5000   | 50          | 30         |

Then close the browser