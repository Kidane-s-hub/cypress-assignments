describe("Assignment: Handling Table with Checkboxes", () => {
  it("Handles checkboxes inside the table and validates UI changes", () => {
    cy.visit("https://vinothqaacademy.com/webtable/");

    // Locate the checkboxes
    cy.get("#myTable tbody tr").as("rows");
    cy.get("@rows").should("have.length.at.least", 1); // check if row length iss greater tahn 1 and each tr = one row

    //select some checkboxes
    cy.get("@rows").eq(0).find('input[type="checkbox"]').as("firstRowCheck");
    cy.get("@rows").eq(2).find('input[type="checkbox"]').as("thirdRowCheck");

    cy.get("@firstRowCheck").check().should("be.checked");
    cy.get("@thirdRowCheck").check().should("be.checked");

    // Verify the correct rows are selected
    cy.get('#myTable input[type="checkbox"]:checked').should("have.length", 2);

    cy.get("@firstRowCheck").should("be.checked");
    cy.get("@thirdRowCheck").should("be.checked");

    // Deselect a checkbox
    cy.get("@firstRowCheck").uncheck();
    cy.get("@firstRowCheck").should("not.be.checked");

    cy.get('#myTable input[type="checkbox"]:checked').should("have.length", 1); // now only the third row is selected

    // Delete button should remove selected row
    cy.get("#deleteBtn").click();

    // The row with checkbox previously checked should be removed (third row sshould be removed)
    cy.get("@rows").should("not.contain", "Vinoth R");
  });
});
