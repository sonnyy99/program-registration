export const registrationForm = {
  selectProgramButton() {
    return cy.get("button[class*='program-select-btn']");
  },
  registerButton() {
    return cy.get("button:contains('Register')");
  },
  nextButton() {
    return cy.get("button[class*='btn-NextRegistrationStep']").first();
  },
  selectProgramFeeOption(feeOption: string) {
    return cy.get("select").select(feeOption);
  },
  proceedToCheckoutButton() {
    return cy.get("button:contains('Proceed to Checkout')").first();
  },
  startCheckoutButton() {
    return cy.get("button[id='checkoutButton']");
  },
  completeCheckoutButton() {
    return cy.get("button[id='btnCheckoutCart']");
  },
};
