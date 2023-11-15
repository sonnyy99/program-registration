describe("Program Registration", () => {
  specify("Sign in and register", () => {
    cy.cnhLogin(Cypress.env("username"), Cypress.env("password"));
    cy.cnhProgramRegister(Cypress.env("registrationUrl"));
  });
});
