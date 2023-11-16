describe("Program Registration", () => {
  const registrationMinute = 30;
  specify("Sign in and register", () => {
    cy.cnhLogin(Cypress.env("username"), Cypress.env("password"));
    cy.waitUntil(
      () =>
        cy
          .task("getCurrentMinute")
          .then((minute) => minute === registrationMinute),
      { timeout: 180000, interval: 1000 } // 3 minute timeout, check again every second
    ).then(() => {
      cy.cnhProgramRegister(Cypress.env("registrationUrl"));
    });
  });
});
