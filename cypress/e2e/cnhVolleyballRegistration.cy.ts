describe('Program Registration', () => {
  specify('Sign in and register', () => {
    cy.visit(Cypress.env("registrationUrl"));
    cy.cnhLogin(Cypress.env("username"), Cypress.env("password"));
    // TODO: Register
  })
})