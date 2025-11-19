// Q 5 and 6
describe(" check box", () => {
  it(" check box", () => {
    cy.visit(" https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkbox-example > fieldset > legend").should("exist");
    cy.get("#checkBoxOption1").check().should("be.checked");
    cy.get("#checkBoxOption2").check().should("be.checked");
    cy.get("#checkBoxOption3").check().should("be.checked");
  });

  // Q 7
  it.only("Dropdown", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#dropdown-class-example").select("option3");
    cy.get("#dropdown-class-example")
      .select("option3")
      .should("contain.text", "Option3");
  });


});
