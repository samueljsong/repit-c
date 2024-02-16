describe('Cycling through tutorial pages', () => {
    it('successfully visits tutorial page', () => {
        const base_url = Cypress.env("CYPRESS_BASE_URL")
        cy.visit(base_url);

        // Login
        const email = Cypress.env("CYPRESS_REGULAR_EMAIL");
        const password = Cypress.env("CYPRESS_REGULAR_PASSWORD")
        cy.login(email, password)

        cy.visit(base_url + "/tutorial")

        cy.url().should('include', '/tutorial')
        cy.get("h1[name='title']").should('have.text', 'Discover something broken?')

    });

    it('succesfully cycle through tutorial page', () => {
        const base_url = Cypress.env("CYPRESS_BASE_URL")
        cy.visit(base_url);

        // Login
        const email = Cypress.env("CYPRESS_REGULAR_EMAIL");
        const password = Cypress.env("CYPRESS_REGULAR_PASSWORD")
        cy.login(email, password)

        cy.visit(base_url + "/tutorial")

        // Check 1st page
        cy.get("h1[name='title']").should('have.text', 'Discover something broken?')

        // Check 2nd page
        cy.get("button[name='next']").click()

        cy.get("h1[name='title']").should('have.text', 'Help us understand better!')

        // Check 3rd page
        cy.get("button[name='next']").click()

        cy.get("h1[name='title']").should('have.text', 'Finalize and send a report!')

        // Check Warning page
        cy.get("button[name='next']").click()

        cy.get("h1[name='title']").should('have.text', 'WARNING!!!')

        // Check successful completion

        cy.get("button[name='complete']").click()
        cy.url().should('eq', base_url + '/')

    })

    
    
});
