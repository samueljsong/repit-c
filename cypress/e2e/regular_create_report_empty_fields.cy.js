describe('A user creates a report', () => { 
    it('fails to create a report', () => {
        const base_url = Cypress.env("CYPRESS_BASE_URL")

        cy.loginRegular();
        cy.visit(base_url + "/create")

        cy.get('button[name="submit"]').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(500)
        cy.url().should('eq', base_url + '/create'); // a report has successfully been created.
    });
})