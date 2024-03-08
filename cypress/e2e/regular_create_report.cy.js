describe('A user creates a report', () => { 
    it('successfully creates a report', () => {
        const base_url = Cypress.env("CYPRESS_BASE_URL");
        const email = Cypress.env("CYPRESS_REGULAR_EMAIL");
        const password = Cypress.env("CYPRESS_REGULAR_PASSWORD")
        cy.visit(base_url);
        cy.login(email, password)
        cy.visit(base_url + "/create")
        cy.get('input[name="title"]').type('testTitle');
        cy.get('textarea[name="description"]').type('testDescription');
        cy.get('select[name="location"]').select('101')
        cy.get('select[name="location"]').should('have.value', '101')

        cy.get('button[name="submit"]').click();
        cy.wait(500)
        cy.url().should('eq', base_url + '/');
    });
})