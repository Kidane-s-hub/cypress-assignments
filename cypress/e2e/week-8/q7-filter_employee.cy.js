describe("Filter and Read Employee Records", () => {
  it("Filters IT department and verifies filtered data", () => {
    cy.filterDepartment("IT").then((result) => {
      cy.log(`Rows filtered: ${result.rows}`);
      expect(result.rows).to.equal(2); // Expect Aster and Brhanu

      // Read the filtered sheet using dedicated task
      cy.readFilteredDepartment("IT").then((data) => {
        expect(data).to.have.length(2);
        expect(data.map((r) => r.Name)).to.include.members(["Aster", "Brhanu"]);
        expect(data.every((r) => r.Department === "IT")).to.be.true;
      });
    });
  });
});
