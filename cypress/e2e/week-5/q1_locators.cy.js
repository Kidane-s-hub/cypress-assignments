describe("Angular Practice Form - All Fields", () => {
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
  });

  it("should interact with all form elements including Date of Birth", () => {
    // pseudo-class selector (selects the first child of its parent)
    cy.get(":nth-child(1) > .form-control").type("John");

    //  Attribute selector
    cy.get('form [name="email"]').type("testuser@example.com");

    //  id selector
    cy.get("#exampleInputPassword1").type("MySecret123");

    // id selector
    cy.get("#exampleFormControlSelect1").select("Female");

    // id selector
    cy.get("#exampleCheck1").check().should("be.checked");

    //  Attribute selector
    cy.get('form input[name="bday"]').type("1990-01-01");

    //  Attribute selector
    cy.get('form input[type="submit"]').click();

    // Validate Success Alert
    cy.get(".alert-success")
      .should("be.visible")
      .and("contain.text", "Success");

    // Clear and re-type Name
    cy.get('form [name="name"]').clear().type("Abe Kebe");
  });
});
