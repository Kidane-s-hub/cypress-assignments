// Practice on #checkbox3
// describe("Checkbox Enable/Disable Test", () => {
//   it("Should verify checkbox disabled state and then enable it", () => {
//     cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

//     const checkbox = cy.get("#checkBoxOption3");

//     // Force disable the checkbox for testing
//     checkbox.invoke("attr", "disabled", true);

//     // Verify it is now disabled
//     checkbox.should("be.disabled");

//     // Enable the checkbox
//     checkbox.invoke("removeAttr", "disabled");

//     // Verify it is enabled
//     checkbox.should("not.be.disabled");

//     // Check the checkbox
//     checkbox.check().should("be.checked");
//   });
// });

// All check boxes 
describe("Checkbox Enable/Disable Test for All 3", () => {
  it("Should disable, enable, and select all checkboxes", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Select all 3 checkboxes
    cy.get("input[type='checkbox']").as("checkboxes"); // aliases all checkboxes

    // Step 1: Force disable all checkboxes
    cy.get("@checkboxes").each(($el) => {
      cy.wrap($el).invoke("attr", "disabled", true);
    });

    // Step 2: Verify all checkboxes are disabled
    cy.get("@checkboxes").each(($el) => {
      cy.wrap($el).should("be.disabled");
    });

    // Step 3: Enable all checkboxes
    cy.get("@checkboxes").each(($el) => {
      cy.wrap($el).invoke("removeAttr", "disabled");
    });

    // Step 4: Verify all checkboxes are enabled
    cy.get("@checkboxes").each(($el) => {
      cy.wrap($el).should("not.be.disabled");
    });

    // Step 5: Check all checkboxes
    cy.get("@checkboxes").each(($el) => {
      cy.wrap($el).check().should("be.checked");
    });
  });
});
