describe('A user creates a report', () => { 
    it('fails to create a report', () => {
        const base_url = "https://bcrepit.netlify.app" //Cypress.env("CYPRESS_BASE_URL")

        cy.loginRegular();
        cy.visit(base_url + "/create")
        cy.get('input[name="title"]').type('testTitle');
        cy.get('textarea[name="description"]').type('testDescription');

        cy.get('div[name="cloudinaryWidget"').should('exist'); // Check if the cloudinary widget exsits

        cy.get('button[name="submit"]').click();
        cy.wait(500)
        cy.url().should('eq', base_url + '/create'); // a report has successfully been created.
    });
})