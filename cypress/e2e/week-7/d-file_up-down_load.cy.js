describe('Test Suite for file upload; ', () => {
    it('Single file upload', () => {
        cy.visit("https://practice-automation.com/file-upload/");
        cy.get("#file-upload").attachFile("example.jpg");
        cy.get("#upload-btn").click();
        cy.get(".wpcf7-response-output").should('contain',"Thank you for your message. It has been sent.");
    });

    it('File donload', () => {
        cy.visit("https://practice-automation.com/file-download/");
        cy.get(
          ":nth-child(3) > .link-template-default > .card-body > .media > div.ml-3 > .wpdm-download-link"
        ).click();
        cy.readFile("cypress/downloads/test.pdf").should("exist");
    });
});