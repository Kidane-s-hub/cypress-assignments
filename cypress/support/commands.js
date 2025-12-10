// ***********************************************
import "cypress-file-upload";
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
// *******************************************

// Question 1
// The readExcelFile task reads the Excel file, converts it into JSON, and returns it to the test.
Cypress.Commands.add("readExcelData", (relativePath) => {
  // Call the task to read the Excel file with the provided relative path
  return cy.task("readExcelFile", relativePath);
});

// Question 2
Cypress.Commands.add("writeEmployeeData", (filePath, data) => {
  return cy.task("writeEmployeeExcel", { filePath, data });
});


// Question 3
Cypress.Commands.add(
  "updateExcelData",
  ({ filePath, sheetName, row, column, newValue }) => {
    return cy.task("updateExcel", {
      filePath,
      sheetName,
      row,
      column,
      newValue,
    });
  }
);

// Question 4
Cypress.Commands.add("loadMultipleSheetData", (filePath) => {
  // Call the custom task defined in plugins to read the Excel data
  cy.task("loadMultiSheetData", { filePath }).then((sheetData) => {
    return sheetData; // Return the loaded sheet data to the test
  });
});

// Question 5
// Q5 - Read the login data
Cypress.Commands.add("readExcelData", () => {
  return cy.task("readQ5Excel");
});

// Q5 - Write back test results
Cypress.Commands.add("writeQ5Result", (rowNumber, result) => {
  return cy.task("writeQ5Excel", { rowNumber, result });
});

// EMPLOYEE - Write employee records
Cypress.Commands.add("writeEmployeeData", (filePath, data) => {
  return cy.task("writeEmployeeExcel", { filePath, data });
});


// Question 7 
Cypress.Commands.add("filterDepartment", (department) => {
  return cy.task("filterEmployeesByDepartment", { department });
});

Cypress.Commands.add("readFilteredDepartment", (department) => {
  return cy.task("readFilteredSheet", { department });
});


