/* eslint-disable @typescript-eslint/no-namespace */
import "cypress-failed-log";

declare global {
  namespace Cypress {
    interface Chainable {
      cnhLogin(username: string, password: string): Chainable<void>;
      cnhProgramRegister(registrationUrl: string): Chainable<void>;
    }
  }
}

require("./commands");
