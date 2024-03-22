describe('Login Page Functionality', () => {
    const base_url = Cypress.env("CYPRESS_BASE_URL");

    beforeEach(() => {
        cy.visit(base_url + '/login');
    });

    it('displays error message when login fields are empty', () => {
        cy.get('button.lp-button').click();

        cy.get('div.Toastify').children().should('have.length', 1);

        cy.get('div.Toastify').children().invoke('text').should('contain', 'Please fill out both login fields');
    });

    it('displays error message for invalid email format', () => {
        cy.get('input[name="email"]').type('invalidemail');
        cy.get('input[name="password"]').type('password');

        cy.get('button.lp-button').click();

        cy.get('div.Toastify').children().should('have.length', 1);

        cy.get('div.Toastify').children().invoke('text').should('contain', 'Please enter a valid BCIT email.');
    });

    it('displays error message for invalid credentials', () => {
        const email = Cypress.env("CYPRESS_REGULAR_EMAIL");

        cy.get('input[name="email"]').type(email);
        cy.get('input[name="password"]').type('invalidpassword');

        cy.intercept('POST', '/auth/login', {
            statusCode: 401,
            body: {
                statusCode: 401
            }
        }).as('login');

        cy.get('button.lp-button').click();

        cy.get('div.Toastify').children().should('have.length', 1);

        cy.get('div.Toastify').children().invoke('text').should('contain', 'Invalid credentials, please try again');
    });
});