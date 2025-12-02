describe("Bookstore Cart Functionality", () => {
  beforeEach(() => {
    // Visit the homepage of the bookstore before each test
    cy.visit("https://practice.expandtesting.com/bookstore");
  });

  it("should start with an empty cart (item count = 0)", () => {
    // Ensure the cart item count badge exists and is '0' when the page loads
    cy.get(".nav-link.position-relative .badge") // Selector for the cart count badge
      .should("exist") // Ensure the badge exists
      .invoke("text") // Get the text content of the badge
      .then((text) => {
        // Clean up the text (strip non-breaking spaces and trim whitespace)
        const strippedText = text.replace(/\u00A0/g, "").trim();

        // Log the strippedText for debugging purposes
        cy.log("Stripped Text: " + strippedText);

        // Assert the cart item count is '0'
        expect(strippedText).to.equal("");
      });
  });

  it("should update cart item count when two books are added", () => {
    // Find the "Add to Cart" button for the first book and click it
    cy.get('[data-testid="cart-674108466cb6226060a20d44"]') // Selector for the "Add to Cart" button for the first book
      .click();

    // Find the "Add to Cart" button for the second book and click it
    cy.get('[data-testid="cart-67410b8c6cb6226060a20da4"]') // Selector for the "Add to Cart" button for the second book
      .click();

    // Verify that the cart item count updates to '2'
    cy.get(".nav-link.position-relative .badge") // Selector for the cart item count badge
      .should("exist") // Ensure the badge exists
      .invoke("text") // Get the text content of the badge
      .then((text) => {
        // Clean up the text (strip non-breaking spaces and trim whitespace)
        const strippedText = text.replace(/\u00A0/g, "").trim();

        // Log the strippedText for debugging purposes
        cy.log("Stripped Text: " + strippedText);

        // Assert the cart item count is '2'
        expect(strippedText).to.equal("2");
      });
  });
});
