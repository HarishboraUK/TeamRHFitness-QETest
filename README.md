# Mobile Automation with Appium & WebdriverIO


<h3><ins>Description:</h3>

Mobile automation testing using WebdriverIO and Cucumber 

<h3><ins>Requirements</h3>
  
- NodeJS
- Appium Server
- Appium Inspector (to find selector)
- Android Studio (for device emulator)
- RH Fitness Test App

<h3><ins>Inside the project:</h3>

- <b>WebdriverIO Packages</b>
    - Cucumber as Test Framework
    - Mutlicucumber Report as Test Reporter
    - Appium Server as a service to run the test
    - Appium Driver (`uiautomator2` & `xcuitest`)
    - features folder contains all the cucumber feature files (for ST/E2E/Component)
    - step_definition contains all the step definiton page wise
    - resources > pages having action (contains page methods) assert (contains verification) selector (contains locators, android and ios APP_TYPE env variable to be passed from package.json)
    - resources > shared contains all the common methods and variable file to store common configs

<h3><ins>How to setup:</h3>

- Clone the project \
  Run `npm install`

<h3><ins>How to run the test:</h3>
        
<h4>Android:</h4>

- all the test
    - `npm run test-android` \
    or
    - `npm run test-ios`

<h3><ins>Common issue might happen:</h3>

- Appium doesn't start automatically during the test (in local)
    
    - to solve the issue, just run the Appium server manually and re-run your test.

- WDA (web driver agent) is not installed in iOS Simultor when tried to run the test

    - to solve the issue, try to run Appium Inspector and access the Simulator, It might take some time for the first time but once the WDA is installed, the test / inspection will run normal.

<h3><ins>How the report look like?</h3>

<h4>Multicucumber Report will open automatically after test execution</h4>

<h3><ins>Extra:</h3>

- env and yaml file can be created for high level configs and user credentials
- Locators and test data can be saved and passed throgh yaml files in 2 or 3 dimensional form
- Wdio parallel module can be added to run mulitple scenarios inside feature file to run parallely
- Reusable step defintion for click, verify, enter , select etc can be created to reuse step definiton and code. Locator to be stored in yml file. Component wise step definiton has laso it's importance
- example:
    - """ Scenario Outline: Validate home page <Item> link having item label as <Item_Label> and item description as <Item_Description>
        When I click on "<Item_Label>" on "HomePage"
        Then I verify text <Item_Label> of <Item> on "HomePage"
        And I verify text <Item_Description> of <Item> on "HomePage"

        Examples:
            | Item         | Item_Label  | Item_Description  |
            | item1        | item1_label | item1_description |
            | second_item  | Item 2      | Item description  |
            | third_item   | Item 3      | Item description  |
            | fourth_item  | Item 4      | Item description  |
            | fifth_item   | Item 5      | Item description  |
            | sixth_item   | Item 6      | Item description  |
            | seventh_item | Item 7      | Item description  |
            | eighth_item  | Item 8      | Item description  | """



