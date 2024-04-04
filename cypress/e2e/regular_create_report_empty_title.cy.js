describe('A user creates a report', () => { 
    it('fails to create a report', () => {
        const base_url = Cypress.env("CYPRESS_BASE_URL")

        cy.loginRegular();
        cy.visit(base_url + "/create")
        cy.get('textarea[name="description"]').type('testDescription');

        cy.get('select[name="location"]').select('101');
        cy.get('select[name="location"]').should('have.value', '101'); // Checks if the location tag was properly added

        cy.get('div[name="cloudinaryWidget"').should('exist'); // Check if the cloudinary widget exsits

        cy.get('button[name="submit"]').click();
        cy.url().should('eq', base_url + '/create'); // a report has successfully been created.
    });
})