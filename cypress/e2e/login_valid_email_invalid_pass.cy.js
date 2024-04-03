describe('Login Page valid email invalid pass', () => {
    const base_url = "https://bcrepit.netlify.app" //Cypress.env("CYPRESS_BASE_URL")
    const email = "wnguyen16@my.bcit.ca" // Cypress.env("CYPRESS_ADMIN_EMAIL");

    it('fails to log in the admin user', () => {
        cy.visit(base_url + '/login');
        cy.url().should('include', '/login')
        const wrongPass = "WrongPassword"

        cy.get('input[name="email"]').type(email);
        cy.get('input[name="password"]').type(wrongPass);

        cy.get('button.lp-button').click();

        cy.url().should('eq', base_url + '/login');
        cy.wait(500)
        cy.get('div.Toastify').children().should('have.length', 1);
    });

});