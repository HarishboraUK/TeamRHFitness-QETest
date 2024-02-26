Feature: Home Page Navigation

    As a User,
    I should be able to navigate through all the links having correct labels and description
    
    @E2E
    Scenario: Validate home page items having item label and item description
        When I check all the items in the home page
        Then I navigate to the items and verify label and description