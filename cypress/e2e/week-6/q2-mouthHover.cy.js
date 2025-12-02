// ✅ What the instructions require

// Hover over the Hover button

// Reveal the submenu using .invoke("show") (because real hover isn’t supported)

// Verify the submenu is visible

// Click a submenu option (Top / Reload)

// Verify the click action works
describe("Mouseover", () => {
  it("Mousehover", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Hover over the element that triggers the submenu.
    // Cypress does not support real mouse hover, so we force the element to appear using jQuery:

    // cy.get(".mouse-hover-content").trigger('mouseover'); // JS (won't work reliably)
    // cy.get(".mouse-hover-content").invoke("show");      // CSS (works)

    cy.get(".mouse-hover-content").invoke("show").should("be.visible"); // Assert submenu is visible

    // Verify that the submenu is displayed.
    cy.contains("Top").should("be.visible");

    // Click the submenu item (Top)
    cy.contains("Top").click({ force: true }); // force click because hover menus block normal clicks or Click this element even if Cypress thinks it's not clickable.

    // Validate the action works — URL should include 'top'
    cy.url().should("include", "top");
  });
});
