describe("Create a test suite with an intentionally flaky test", () => {
  it("Retries test case", {retries: {  
    runMode: 1, 
    openMode: 2
  }}, () => { 
    

    cy.visit("https://practice.expandtesting.com/login");
    cy.get("false-id").type('#hello flaky')
  });
});
