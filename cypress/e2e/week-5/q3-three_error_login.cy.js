describe("Check error message ", () => {
  it("Error message ", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");

    cy.get("#username").type("test");
    cy.get("#password").type("password");
    cy.get("#submit").click();
    cy.get("#error")
      .should("be.visible")
      .and("contain", "Your username is invalid!");
  });

    it.only("Error message ", () => {
      cy.visit("https://practicetestautomation.com/practice-test-login/");
      cy.get("#username").type("student");
      cy.get("#password").type("Password123");
      cy.get("#submit").click();
     cy.get(".post-title").should("contain", "Logged In Successfully");
    });
});
