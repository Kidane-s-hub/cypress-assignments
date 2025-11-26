/// <reference types="cypress" />

describe("Login with multiple users from fixture", () => {
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/loginpagePractise/");
  });

  it("should login successfully with multiple users", () => {
    cy.fixture("multipleUsers").then((users) => {
      users.forEach((user) => {
        cy.log(`Testing login for: ${user.username}`);

        // Enter credentials
        cy.get("#username").clear().type(user.username); // The .clear() command removes any existing text from an input field.
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

describe("Login using fixture data", () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit("https://rahulshettyacademy.com/loginpagePractise/");
  });

  it("should log in successfully using fixture data", () => {
    // Load fixture data
    cy.fixture("loginData").then((data) => {
      // Enter username
      cy.get("#username").type(data.username);

      // Enter password
      cy.get("#password").type(data.password);

      // Click the login button
      cy.get("#signInBtn").click();

      // Verify successful login
      // Check URL contains 'dashboard' (adjust as per actual redirect)
      cy.url().should("include", "/shop");
    });
  });
});
