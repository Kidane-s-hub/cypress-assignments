import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open the Evangadi login page", () => {
  cy.visit("https://evangadi.com/auth/login");
});

When("I enter a valid email and password", () => {
  cy.get('input[name="email"]').type("youremail@email.com"); // replace with test credentials
  cy.get('input[name="password"]').type("yourpassword"); // replace with test credentials
});

When("I click on the login button", () => {
  cy.get('button[type="submit"]').click();
});

Then("I should be redirected to the dashboard", () => {
  cy.url().should("include", "/evangadi"); // adjust based on actual post-login URL
});
