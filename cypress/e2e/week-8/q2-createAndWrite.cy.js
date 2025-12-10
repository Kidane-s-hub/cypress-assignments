describe("Write Employee Data", () => {
  it("Creates employeeData.xlsx in fixtures/data/", () => {
    const employeeData = [
      { EmployeeID: 101, Name: "Alice", Department: "HR", Salary: 60000 },
      { EmployeeID: 102, Name: "Bob", Department: "IT", Salary: 75000 },
      {
        EmployeeID: 103,
        Name: "Charlie",
        Department: "Finance",
        Salary: 65000,
      },
    ];

    const filePath = "cypress/fixtures/data/employeeData.xlsx";

    cy.writeEmployeeData(filePath, employeeData).then((result) => {
      cy.log("Excel file created at: " + result.path);
    });
  });
});
