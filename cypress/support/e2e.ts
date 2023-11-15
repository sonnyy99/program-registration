/* eslint-disable @typescript-eslint/no-namespace */
export {};
declare global {
    namespace Cypress {
        interface Chainable {
            cnhLogin(username: string, password: string): Chainable<void>;
        }
    }
}

require("./commands")