import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"


Given(/^I Go to Web Page PWtest$/, () => {
    cy.visit('/')
});

When(/^I Click on Forms Menu from Features$/, () => {
    cy.fixture('formselectors').then((sel) => {
        cy.get(sel.formsMenu)
            .should('be.visible')
            .click()
    })
});

When(/^I Click on Form Layouts from Forms Menu$/, () => {
    cy.fixture('formselectors').then((sel) => {
        cy.get(sel.formsLayoutButton)
            .should('be.visible')
            .click()
    })
});

When(/^I Enter First Name "([^"]*)" Last Name "([^"]*)" in Block Form Section$/, (firstname: string, lastname: string) => {
    cy.fixture('selectors').then((sel) => {
        cy.get(sel.firstNameInputField)
            .should('be.visible')
            .type(firstname)
        cy.get(sel.lastNameInputField)
            .should('be.visible')
            .type(lastname)
    })
});


When(/^I Enter Email "([^"]*)" Website "([^"]*)" in Block Form Section$/, (email: string, website: string) => {
    cy.fixture('selectors').then((sel) => {
        cy.get(sel.emailInputField)
            .should('be.visible')
            .type(email)
        cy.get(sel.webSiteInputField)
            .should('be.visible')
            .type(website)
    })
});


Then(/^I Click on Submit Button in Block Form Section$/, () => {
    cy.get('form[class="ng-untouched ng-pristine ng-valid"] button[type="submit"]').contains('Submit')
        .should('be.visible')
        .click()
});


