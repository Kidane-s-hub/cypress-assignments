// Question 1
// Uses custom command (cy.readExcel) that wraps the task.
describe("Read Excel File Test", () => {
  it("Reads data from Excel and logs each row", () => {
    // Path to the Excel file in your fixtures
    // const filePath = "cypress/fixtures/data/testData.xlsx";

    cy.readExcelData("cypress/fixtures/data/testData.xlsx").then((rows) => {
      // Loop through each row and log the data to the Cypress command log
      rows.forEach((row) => {
        // Log specific columns (e.g., Username, Password) to the Cypress command log
        cy.log(`Username: ${row.username}, Password: ${row.password}`); // Using template literals to format the log output.
      });
    });
  });
});


