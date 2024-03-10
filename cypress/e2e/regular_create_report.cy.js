describe('A user creates a report', () => { 
    it('successfully creates a report', () => {
        const base_url = Cypress.env("CYPRESS_BASE_URL");
        cy.loginRegular();
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