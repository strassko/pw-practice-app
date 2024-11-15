Feature: PW -test

    Feature Description
    Scenario: Add data in Block form
        Given I Go to Web Page PWtest
        When I Click on Forms Menu from Features
        When I Click on Form Layouts from Forms Menu
        When I Enter First Name "Strashko" Last Name "Olumchev" in Block Form Section
        When I Enter Email "str@email.com" Website "time.mk" in Block Form Section
        Then I Click on Submit Button in Block Form Section