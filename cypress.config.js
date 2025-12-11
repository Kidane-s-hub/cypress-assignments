const { defineConfig } = require("cypress");
const xlsx = require("xlsx");
const path = require("path");
const ExcelJS = require("exceljs");
// Loads the Cypress Cucumber preprocessor
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  video: true,

  e2e: {
    setupNodeEvents(on, config) {
      projectId: "8yfuhq", // Dashboard
        // Mochawesome plugin
        require("cypress-mochawesome-reporter/plugin")(on);
      // Configure Cucumber preprocessor
      on("file:preprocessor", cucumber());

      // Question 1: Read Excel File
      on("task", {
        readExcelFile(filePath) {
          try {
            const absolutePath = path.resolve(filePath);
            const workbook = xlsx.readFile(absolutePath);
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = xlsx.utils.sheet_to_json(sheet);
            return jsonData;
          } catch (error) {
            console.error("Error reading Excel file:", error);
            throw error;
          }
        },
      });

      // Question 2: Write Excel File
      on("task", {
        writeEmployeeExcel({ filePath, data }) {
          const absolutePath = path.resolve(filePath);

          // Ensure the folder exists
          const dir = path.dirname(absolutePath);
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }

          const workbook = xlsx.utils.book_new();
          const worksheet = xlsx.utils.json_to_sheet(data);
          xlsx.utils.book_append_sheet(workbook, worksheet, "EmployeeDetails");
          xlsx.writeFile(workbook, absolutePath);

          return { success: true, path: absolutePath };
        },
      });

      // Question 3: Update Excel
      on("task", {
        updateExcel({ filePath, sheetName, row, column, newValue }) {
          const fullPath = path.resolve(filePath);
          const workbook = xlsx.readFile(fullPath);
          const worksheet = workbook.Sheets[sheetName];
          if (!worksheet) throw new Error(`Sheet "${sheetName}" not found.`);
          const cellRef = `${column}${row}`;
          worksheet[cellRef] = { v: newValue };
          xlsx.writeFile(workbook, fullPath);
          return null;
        },
      });

      // Question 4: Read Multiple Sheets
      on("task", {
        loadMultiSheetData({ filePath }) {
          const workbook = xlsx.readFile(filePath);
          const sheetData = {};
          workbook.SheetNames.forEach((sheetName) => {
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = xlsx.utils.sheet_to_json(worksheet);
            sheetData[sheetName] = jsonData;
          });
          return sheetData;
        },
      });

      // Question 5: Read/Write using ExcelJS
      on("task", {
        readQ5LoginExcel() {
          const workbook = new ExcelJS.Workbook();
          const filePath = path.resolve(
            "cypress/fixtures/data/q5-loginData.xlsx"
          );

          return workbook.xlsx.readFile(filePath).then(() => {
            const sheet = workbook.getWorksheet("Sheet1");
            const data = [];
            sheet.eachRow((row, rowNumber) => {
              if (rowNumber === 1) return; // skip header
              data.push({
                username: row.getCell(1).value,
                password: row.getCell(2).value,
                rowNumber, // needed for updating
              });
            });
            return data;
          });
        },

        // -------------------------------
        // Q5: Write login test result
        // -------------------------------
        writeQ5LoginExcel({ rowNumber, result }) {
          const filePath = path.resolve(
            "cypress/fixtures/data/q5-loginData.xlsx"
          );
          const workbook = new ExcelJS.Workbook();

          return workbook.xlsx.readFile(filePath).then(() => {
            const sheet = workbook.getWorksheet("Sheet1");
            sheet.getRow(rowNumber).getCell(3).value = result; // Status column
            return workbook.xlsx.writeFile(filePath).then(() => null);
          });
        },
      });
      
      // Question 7: Filter and read employees
      on("task", {
        // Filter employees by department and save to a new sheet
        filterEmployeesByDepartment({ department }) {
          const filePath = path.resolve(
            "cypress/fixtures/data/q-7-employees.xlsx"
          );

          // Read workbook (will throw if file doesn't exist)
          const workbook = xlsx.readFile(filePath);
          const sheet = workbook.Sheets["AllEmployees"];
          if (!sheet) throw new Error("Sheet 'AllEmployees' not found!");

          // Normalize data
          const data = xlsx.utils.sheet_to_json(sheet).map((row) => ({
            EmployeeID: row.EmployeeID,
            Name: row.Name?.toString().trim(),
            Department: row.Department?.toString().trim(),
            Salary: row.Salary,
          }));

          const filtered = data.filter((row) => row.Department === department);

          // Remove old filtered sheet if exists
          const sheetName = `Filtered_${department}`;
          if (workbook.Sheets[sheetName]) {
            delete workbook.Sheets[sheetName];
            const idx = workbook.SheetNames.indexOf(sheetName);
            if (idx > -1) workbook.SheetNames.splice(idx, 1);
          }

          // Add new filtered sheet
          const newSheet = xlsx.utils.json_to_sheet(filtered);
          xlsx.utils.book_append_sheet(workbook, newSheet, sheetName);
          xlsx.writeFile(workbook, filePath);

          return { success: true, rows: filtered.length };
        },

        // Read filtered sheet (dedicated to Q7)
        readFilteredSheet({ department }) {
          const filePath = path.resolve(
            "cypress/fixtures/data/q-7-employees.xlsx"
          );
          const workbook = xlsx.readFile(filePath);

          const sheetName = `Filtered_${department}`;
          const sheet = workbook.Sheets[sheetName];
          if (!sheet) return [];

          const data = xlsx.utils.sheet_to_json(sheet).map((row) => ({
            EmployeeID: row.EmployeeID,
            Name: row.Name?.toString().trim(),
            Department: row.Department?.toString().trim(),
            Salary: row.Salary,
          }));

          return data;
        },
      });

      return config;
    },

    specPattern: [
      "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
      "cypress/e2e/integration/**/*.feature",
    ],
  },
});
