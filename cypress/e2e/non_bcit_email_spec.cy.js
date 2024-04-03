describe('A user creates a report', () => { 
    it('successfully creates a report', () => {
        const base_url = Cypress.env("CYPRESS_BASE_URL")
        cy.visit(base_url + "/login")
        cy.get('input[name="email"]').type("nonBCIT@hotmail.com");
        cy.get('input[name="password"]').type("1234");

        cy.get('button.lp-button').click();
        cy.wait(500)
        cy.get('div.Toastify').children().should('have.length', 1);
    });
})