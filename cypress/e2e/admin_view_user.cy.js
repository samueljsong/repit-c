describe('Viewing admin ', () => {
    it('successfully visits admin dashboard', () => {
        const base_url = Cypress.env("CYPRESS_BASE_URL")
        cy.loginAdmin();
        cy.visit(base_url + "/admindashboard");

        cy.get("h2[name='title']").contains("List of All Users");

        cy.get("ul").should('exist');
        // cy.get('ul').find('li').should('have.length.at.least', 1);
    });
});
  