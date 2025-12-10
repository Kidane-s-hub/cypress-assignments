describe("Update Employee Salary in Excel", () => {
  it("should update the salary of Temesgen in the IT department", () => {
    // Define the parameters to update the Excel file
    cy.updateExcelData({
      filePath: "cypress/fixtures/data/update-employee-info.xlsx", // Correct relative path to the Excel file
      sheetName: "Sheet1", // Name of the sheet to update in the Excel file
      row: 3, // Row index (1-based in Excel, so row 3 refers to the 3rd row in the Excel file)
      column: "D", // Column in Excel (e.g., 'D' refers to the 4th column in Excel)
      newValue: 10000, // New salary value to update (10000)
    });
  });
});
