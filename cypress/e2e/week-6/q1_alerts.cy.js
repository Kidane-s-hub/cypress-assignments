// This example includes:

// Clicking each alert button
// Capturing & asserting the alert text
// Accepting / dismissing confirmation alerts
// Providing text to prompt alerts
// Validating the results displayed on the page

describe("Handling JavaScript Alerts", () => {
  // Q1 - Hanle alerts (alert, confirmation, and prompt).
  it("Handles simple alert", () => {
    cy.visit("https://vinothqaacademy.com/alert-and-popup/");
    // Listen to window:alert event
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("I am an alert box!"); // verify alert tex
    });

    cy.contains("button", "Alert Box").click();
    //  cy.get('[name="alertbox"]').click();

    cy.get("#demotwo").should("contain", "You clicked on OK!");
  });

  it("Handles confirmation alert - OK!", () => {
    cy.visit("https://vinothqaacademy.com/alert-and-popup/");
    cy.on("window:confirm", (confirmText) => {
      expect(confirmText).to.equal("Confirm pop up with OK and Cancel button"); // verify text
      return true; // OK!
    });

    cy.contains("button", "Confirm Alert Box").click();

    cy.get("#demo").should("contain", "You clicked on OK!");
  });

  it("Handles confirmation - Cancel", () => {
    cy.visit("https://vinothqaacademy.com/alert-and-popup/");
    cy.on("window:confirm", (confirmText) => {
      expect(confirmText).to.equal("Confirm pop up with OK and Cancel button");
      return false; // Cancel
    });

    cy.contains("button", "Confirm Alert Box").click();

    cy.get("#demo").should("contain", "You clicked on Cancel!");
  });
 
  it("Handle prompt", () => {
    cy.visit("https://vinothqaacademy.com/alert-and-popup/");
    // Stub the prompt to provide text
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Yes"); // command type prompt and we should  return eithr Yes or No
    });

    cy.contains("button", "Prompt Alert Box").click();

    // Validate page result after entering prompt text
    cy.get("#demoone").should("contain", "Thanks");
  });
});
