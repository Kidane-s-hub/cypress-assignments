import "cypress-iframe";

describe("Switch Between Main Page and iFrame", () => {
  it("Demonstrates switching between main page and iframe", () => {
    // Visit the AutomationPractice page
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // 1 - Interact with a main page element ---
    // Type into the 'Name' input field
    cy.get("#name").type("Test User");

    // 2 - Switch into the iframe and interact with elements inside it
    cy.frameLoaded("#courses-iframe"); // Wait for iframe to load
    cy.iframe()
      .find("a[href*='mentorship']") // Find the Mentorship link
      .eq(0)
      .should("be.visible")
      .click();

    // Verify heading inside iframe (success message)
    cy.iframe()
      .find("h1")
      .should("be.visible")
      .and("contain.text", "Get Personal Guidance from Rahul Shetty");

    // 3 -Switch back to main page and interact with elements
    // Cypress automatically switches back to the main page after using cy.get()
    cy.get("#checkBoxOption1") // Click a checkbox on the main page
      .should("be.visible")
      .check()
      .should("be.checked");

    // Optionally, type something else on the main page
    cy.get("#alertbtn").click(); // Click the alert button
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains(
        "Hello Test User, share this practice page and share your knowledge"
      );
    });
  });
});
