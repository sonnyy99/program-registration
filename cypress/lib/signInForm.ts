export const signInForm = {
  usernameInput() {
    return cy.get("input[id='txtEmailUsernameLogin']");
  },
  nextButton() {
    return cy.get("button[id='btnNextSignInFirst']");
  },
  passwordInput() {
    return cy.get("input[id='txtSignInPassword']");
  },
  signInButton() {
    return cy.get("button[id='btnSignIn']");
  },
};
