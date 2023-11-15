/// <reference types="cypress" />

import { signInForm } from "../lib/signInForm";

// ***********************************************

Cypress.Commands.add("cnhLogin", (username: string, password: string) => {
    cy.contains("Sign In").click();
    signInForm.usernameInput().type(username);
    signInForm.nextButton().click();
    signInForm.passwordInput().type(password);
    signInForm.signInButton().click();
});

