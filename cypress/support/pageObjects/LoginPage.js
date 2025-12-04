class LoginPage {
  // Selectors for the login page elements
  get usernameField() {
    return cy.get('input[name="username"]');
  }

  get passwordField() {
    return cy.get('input[name="password"]');
  }

  get loginButton() {
    return cy.get('button[type="submit"]');
  }

  get errorMessage() {
    return cy.get(".alert-danger");
  }

  // Selectors for the navbar elements (after login)
  get navbarLogo() {
    return cy.get(".navbar-brand");
  }

  get demosMenu() {
    return cy.get('a.nav-link.dropdown-toggle[href="/#examples"]');
  }

  get toolsMenu() {
    return cy.get('a.nav-link.p-2[href="/#tools"]');
  }

  get tipsMenu() {
    return cy.get('a.nav-link.p-2[href="/tips"]');
  }

  get testCasesMenu() {
    return cy.get('a.nav-link.p-2[href="/test-cases"]');
  }

  get apiTestingMenu() {
    return cy.get('a.nav-link.p-2[href="/notes/api/api-docs/"]');
  }

  get freeIstqbButton() {
    return cy.get("a.btn.btn-sut");
  }

  // Method to visit the login page
  visit() {
    cy.visit("https://practice.expandtesting.com/login");
  }

  // Method to log in with the provided credentials
  login(username, password) {
    this.usernameField.type(username);
    this.passwordField.type(password);
    this.loginButton.click();
  }

  // Method to verify successful login (by checking navbar elements)
  verifyLoginSuccess() {
    // Check if navbar logo is present
  demomwe
    // Check that key menu items are present in the navbar
    this.demosMenu.should("be.visible");
    this.toolsMenu.should("be.visible");
    this.tipsMenu.should("be.visible");
    this.testCasesMenu.should("be.visible");
    this.apiTestingMenu.should("be.visible");

    // Check if the Free ISTQB Mock Exams button is visible
    this.freeIstqbButton.should("be.visible");
  }

  // Method to verify login failure (error message visibility)
  verifyLoginFailure() {
    this.errorMessage.should("be.visible");
  }
}

export default LoginPage;
