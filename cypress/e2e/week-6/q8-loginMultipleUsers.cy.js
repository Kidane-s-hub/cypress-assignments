
describe("Login with multiple users from fixture", () => {
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/loginpagePractise/");
  });

  it("should login successfully with multiple users", () => {
    cy.fixture("multipleUsers").then((users) => {
      users.forEach((user) => {
        cy.log(`Testing login for: ${user.username}`);

        // Enter credentials
        cy.get("#username").clear().type(user.username);
        cy.get("#password").clear().type(user.password);

        // Click login
        cy.get("#signInBtn").click();

        // Verify successful login by checking ProtoCommerce text
        cy.get("nav.navbar").should("contain.text", "ProtoCommerce");

        // Revisit login page for the next user
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/");
      });
    });
  });
});
