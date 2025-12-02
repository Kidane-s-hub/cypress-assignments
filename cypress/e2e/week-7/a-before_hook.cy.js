// It was hard working on evangadi.com (could not find access svg of the logout)
// ****************************************
// ****************************************

describe("Sauce Demo Login and Logout Flow Using Hooks", () => {
  // The 'before' hook will run before any test cases.
  before(() => {
    // Visit the Sauce Demo login page
    cy.visit("https://www.saucedemo.com");

    // Enter valid credentials to log in
    cy.get('input[id="user-name"]').type("standard_user"); // Valid username
    cy.get('input[id="password"]').type("secret_sauce"); // Valid password

    // Click the login button
    cy.get('input[id="login-button"]').click();

    // Ensure the user is logged in by checking for an element on the inventory page (e.g., "Sauce Labs Backpack")
    cy.contains("Sauce Labs Backpack").should("be.visible");
  });

  // Test case to validate a visible item in the inventory
  it("Validates that inventory items are visible after login", () => {
    // Ensure that at least one product is visible in the inventory
    cy.get(".inventory_item").should("have.length.greaterThan", 0);
  });

  // The 'after' hook will run after all tests in the suite have completed.
  after(() => {
    // Click the menu button to reveal the logout option
    cy.get('button[id="react-burger-menu-btn"]').click();

    // Click the logout button
    cy.get('a[id="logout_sidebar_link"]').click();

    // Verify the user is redirected back to the login page after logout
    cy.url().should("eq", "https://www.saucedemo.com/");
    cy.get('input[id="user-name"]').should("be.visible"); // Ensure login form is visible
  });
});
