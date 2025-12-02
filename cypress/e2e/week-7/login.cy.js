import LoginPage from "../../pageObjects/LoginPage";

describe("Login Test using POM", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    // Visit the login page before each test
    loginPage.visit();
  });

  it("should login with valid credentials", () => {
    // Use the login method from the LoginPage object
    loginPage.login("practice", "SuperSecretPassword!");

    // Verify successful login by checking the URL and dashboard element
    loginPage.verifyLoginSuccess();
  });

  it("should show an error for invalid credentials", () => {
    // Use the login method from the LoginPage object
    loginPage.login("invalidUsername", "invalidPassword");

    // Verify login failure by checking for an error message
    loginPage.verifyLoginFailure();
  });
});
