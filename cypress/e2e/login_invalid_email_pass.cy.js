describe('Login Page valid email invalid pass', () => {
    const base_url = Cypress.env("CYPRESS_BASE_URL")

    it('fails to log in the admin user', () => {
        cy.visit(base_url + '/login');
        cy.url().should('include', '/login')
        const invalidEmail = "wrongEmail@my.bcit.ca";
        const wrongPass = "WrongPassword"

        cy.get('input[name="email"]').type(invalidEmail);
        cy.get('input[name="password"]').type(wrongPass);

        cy.get('button.lp-button').click();

        cy.url().should('eq', base_url + '/login');
        cy.wait(500)
        cy.get('div.Toastify').children().should('have.length', 1);
    });

});