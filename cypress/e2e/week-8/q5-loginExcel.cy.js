describe("Q5: Login Tests from Excel", () => {
  it("Reads Q5 Excel, performs login, and updates status", () => {
    // Step 1: Read Excel rows
    cy.readQ5Excel().then((rows) => {
      // Step 2: Loop through each row
      rows.forEach((row) => {
        cy.loginQ5Row(row).then((status) => {
          // Step 3: Write test result back to Excel
          cy.writeQ5LoginResult(row.rowNumber, status);
        });
      });
    });
  });
});
