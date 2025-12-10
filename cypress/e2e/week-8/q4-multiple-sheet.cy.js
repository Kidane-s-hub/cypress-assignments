// cypress/integration/loadExcelData.spec.js

describe("Load and Display Data from Multiple Sheets", () => {
  it("should load and display data from all sheets in the Excel file", () => {
    // Specify the file path to the Excel file in the fixtures folder
    const filePath = "cypress/fixtures/data/multi-sheet-data.xlsx";

    // Use the custom command to load data from the Excel file
    cy.loadMultipleSheetData(filePath).then((sheetData) => {
      // Directly access the data from each sheet (e.g., loginData, employeeInfo, salaryInfo)
      const loginData = sheetData.loginData; // Data from the "loginData" sheet
      const employeeInfo = sheetData.employeeInfo; // Data from the "employeeInfo" sheet
      const salaryInfo = sheetData.salaryInfo; // Data from the "salaryInfo" sheet

      // Display the data from the "loginData" sheet
      cy.log(`Data from sheet: loginData`);
      cy.log(JSON.stringify(loginData, null, 2)); // Log the data in a formatted way
      // Optional assertion to check data
      expect(loginData.length).to.be.greaterThan(0); // Ensure there's data in "loginData" sheet

      // Display the data from the "employeeInfo" sheet
      cy.log(`Data from sheet: employeeInfo`);
      cy.log(JSON.stringify(employeeInfo, null, 2)); // Log the data in a formatted way
      // Optional assertion to check data
      expect(employeeInfo.length).to.be.greaterThan(0); // Ensure there's data in "employeeInfo" sheet

      // Display the data from the "salaryInfo" sheet
      cy.log(`Data from sheet: salaryInfo`);
      cy.log(JSON.stringify(salaryInfo, null, 2)); // Log the data in a formatted way
      // Optional assertion to check data
      expect(salaryInfo.length).to.be.greaterThan(0); // Ensure there's data in "salaryInfo" sheet
    });
  });
});
