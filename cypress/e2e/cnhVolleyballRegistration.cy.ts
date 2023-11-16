describe("Program Registration", () => {
  const registrationMinute = 30;
  const oneDayInMs = 86400000;
  specify("Sign in and register", () => {
    cy.cnhLogin(Cypress.env("username"), Cypress.env("password"));
    cy.waitUntil(
      () =>
        cy
          .task("getCurrentMinute")
          .then((minute) => minute === registrationMinute),
      { timeout: oneDayInMs, interval: 1000 } // 1 day timeout, check again every second
    ).then(() => {
      cy.cnhLogin(Cypress.env("username"), Cypress.env("password")); // Will be skipped if the previous login session has not expired
      cy.cnhProgramRegister(Cypress.env("registrationUrl"));
    });
  });
});
