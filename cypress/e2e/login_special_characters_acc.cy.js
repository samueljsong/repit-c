describe('Login Page', () => {
    const base_url = Cypress.env("CYPRESS_BASE_URL");

    beforeEach(() => {
        cy.visit(base_url + '/login');
    });

    it('displays error message for special characters in email and password fields', () => {
        const specialEmail = 'user?@my.bcit.ca';
        const specialPassword = 'asd$!';

        cy.get('input[name="email"]').type(specialEmail);
        cy.get('input[name="password"]').type(specialPassword);

        cy.get('button.lp-button').click();

        cy.url().should('eq', base_url + '/');
        cy.get('div[name="dropdown"]').click();
        cy.get('button[name="logout"]').should('exist');
        cy.wait(500)
        cy.get('div.Toastify').children().should('have.length', 1);
    });
});
