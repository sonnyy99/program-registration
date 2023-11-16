describe("Program Registration", () => {
  const registrationMinute = 30;
  const registrationHour = 4; // 8PM PST is 4AM in UTC
  const oneDayInMs = 86400000;

  specify("Sign in and register", () => {
    // Sign in one minute before registration time
    cy.waitUntil(
      () =>
        cy
          .task("getCurrentTime")
          .then(
            (currentTime) =>
              currentTime["minute"] === registrationMinute - 1 &&
              currentTime["hour"] === registrationHour
          ),
      { timeout: oneDayInMs, interval: 1000 } // 1 day timeout, check again every second
    ).then(() => {
      cy.cnhLogin(Cypress.env("username"), Cypress.env("password"));
    });

    // Register at registration time
    cy.waitUntil(
      () =>
        cy
          .task("getCurrentTime")
          .then(
            (currentTime) =>
              currentTime["minute"] === registrationMinute &&
              currentTime["hour"] === registrationHour
          ),
      { timeout: oneDayInMs, interval: 1000 } // 1 day timeout, check again every second
    ).then(() => {
      cy.cnhLogin(Cypress.env("username"), Cypress.env("password")); // Will be skipped if the previous login session has not expired
      cy.cnhProgramRegister(Cypress.env("registrationUrl"));
    });
  });
});
