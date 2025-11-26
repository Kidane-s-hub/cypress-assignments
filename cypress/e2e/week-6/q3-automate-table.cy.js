// Dynamic table
// Searching for a specific item (“Rice”)
// Handling pagination until the item is found
// Validating row content (name, price, discount)
describe("Dynamic Web Table with Pagination", () => {
    // const itemToSearch = "Rice";
  it("Searches for Rice across pages and validates row data", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    // Simple function to search page
    function searchForRice() {
      cy.get("table tr td:nth-child(1)") // first column of each row
        .each(($el, index, list) => {
          if ($el.text().includes("Rice")) {
            // Validate the item
            cy.wrap($el).should("contain", "Rice");

            // Validate Price (2nd column)
            cy.get("table tr td:nth-child(2)")
              .eq(index)
              .then(($price) => {
                const price = $price.text().trim();
                cy.log("Price: " + price);

                // Example assertion
                expect(price).to.equal("37");
              });

            // Validate Discount (3rd column)
            cy.get("table tr td:nth-child(3)")
              .eq(index)
              .then(($discount) => {
                const discount = $discount.text().trim();
                cy.log("Discount: " + discount);

                // Example assertion
                expect(discount).to.equal("46");
              });
          }
        })
        .then(($list) => {
          // Check if "Rice" was found on this page
          const found = $list
            .toArray()
            .some((cell) => cell.innerText.includes("Rice"));

          // If not found → go to next page
          if (!found) {
            cy.get("a[aria-label='Next']").then(($next) => {
              if (!$next.hasClass("disabled")) {
                cy.wrap($next).click();
                searchForRice(); // search again on next page
              }
            });
          }
        });
    }

    // Start search from page 1
    searchForRice();
  });
});