// install plugin  npm install -D cypress-iframe
// Then, in cypress/support/commands.js (or e2e.js for Cypress 12+) => import 'cypress-iframe';

import "cypress-iframe";

describe("Handling Button Inside an iFrame", () => {
  it("Clicks a button inside the iframe and verifies success message", () => {
    // Visit the page
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Wait for the iframe to fully load
    cy.frameLoaded("#courses-iframe");

    // Switch context to the iframe and click the "Mentorship" link (acting as button)
    cy.iframe()
      .find("a[href*='mentorship']")
      .eq(0) // first Mentorship link
      .should("be.visible")
      .click();

    // Verify that a success message or page heading is displayed inside the iframe
    cy.iframe()
      .find("h1")
      .should("be.visible")
      .and("contain.text", "Get Personal Guidance from Rahul Shetty"); // will pass even if extra text exists
  });
});
