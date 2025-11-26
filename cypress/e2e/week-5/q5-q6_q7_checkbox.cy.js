// Q 5
describe(" check box", () => {
  it(" check box", () => {
    cy.visit(" https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkbox-example > fieldset > legend").should("exist");
    cy.get("#checkBoxOption1").check().should("be.checked");
    cy.get("#checkBoxOption2").check().should("be.checked");
    cy.get("#checkBoxOption3").check().should("be.checked");
  });

  // Q 6
  it("Checks multiple checkboxes using iteration", () => {
    // Visit the website
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // List of checkbox values to select
    const checkboxValues = ["option1", "option2"];
    // Loop through each checkbox value and check it
    checkboxValues.forEach((value) => {
      cy.get(`input[type="checkbox"][value="${value}"]`)
        .check()
        .should("be.checked");
    });
  });

  it("Selects multiple checkboxes without iteration or variables", () => {
    // Visit the page
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Check checkboxes directly by value
    cy.get('input[value="option1"]').check().should("be.checked");
    cy.get('input[value="option2"]').check().should("be.checked");
  });

  // Q 7
  it("Dropdown", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#dropdown-class-example").select("option3");
    cy.get("#dropdown-class-example")
      .select("option3")
      .should("contain.text", "Option3");
  });

  it.only("Types text and selects France from the autocomplete list", () => {
    // Visit the page
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Type part of the country name
    cy.get("#autocomplete").type("Fra");

    // Iterate through the suggestions and click the matching one
    cy.get(".ui-menu-item div").each(($el) => {
      if ($el.text() === "France") {
        cy.wrap($el).click();
      }
    });

    // Verify the selected country is displayed in the input box
    cy.get("#autocomplete").should("have.value", "France");
  });

  //    What This Test Does

  // Types "Fra" into the autocomplete field.

  // Cypress iterates through all suggestion items using .each().

  // When the suggestion equals France, it clicks it.

  // Then validates that France is filled into the textbox.
});
