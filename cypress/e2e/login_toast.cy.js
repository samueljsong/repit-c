describe('Login Page Functionality', () => {
    const base_url = "https://bcrepit.netlify.app" //Cypress.env("CYPRESS_BASE_URL")

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
        const email = "wnguyen16@my.bcit.ca" // Cypress.env("CYPRESS_ADMIN_EMAIL");
        const passworwd = 'invalidPassword' // "wnguyen16@my.bcit.ca" // Cypress.env("CYPRESS_ADMIN_EMAIL");
    
        cy.get('input[name="email"]').type(email);
        cy.get('input[name="password"]').type(password);

        cy.intercept('POST', 'api/auth/me', {
            statusCode: 401,
            body: {
                statusCode: 401
            }
        }).as('login');

        cy.get('button.lp-button').click();


        cy.get('div.Toastify').children().should('have.length', 1);
        cy.get('div.Toastify').children().invoke('text').should('contain', 'Invalid credentials, please try again');
    });

    it('navigates to home page after successful login', () => {
        cy.intercept('POST', 'api/auth/me', {
            statusCode: 200,
            body: {
                statusCode: 200
            }
        }).as('login');

        const email = "wnguyen16@my.bcit.ca" // Cypress.env("CYPRESS_ADMIN_EMAIL");
        const password = "1234" //Cypress.env("CYPRESS_ADMIN_PASSWORD")
    
        cy.get('input[name="email"]').type(email);
        cy.get('input[name="password"]').type(password);

        cy.get('button.lp-button').click();


        cy.url().should('eq', base_url + '/');
    });

    it('displays error message for network error during login', () => {
        cy.intercept('POST', 'api/auth/me').as('login');

        const email = "wnguyen16@my.bcit.ca" // Cypress.env("CYPRESS_ADMIN_EMAIL");
        const password = "try again later"
    
        cy.get('input[name="email"]').type(email);
        cy.get('input[name="password"]').type(password);

        cy.get('button.lp-button').click();

        cy.get('div.Toastify').children().should('have.length', 1);
        cy.get('div.Toastify').children().invoke('text').should('contain', 'Invalid credentials, please try again');
    });
});
