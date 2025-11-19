describe("Locate href", () => {
  it("verify url conatin/shiop", () => {
    cy.visit(" https://rahulshettyacademy.com/angularpractice/");
    cy.get(":nth-child(2) > .nav-link").should("exist").click()
    cy.url().should("include", "/shop")
  });
});
