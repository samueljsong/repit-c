describe('Login Page', () => {
    const base_url = Cypress.env("CYPRESS_BASE_URL")
    // Create a before each to redirect to visit base_url, unauthenticated should redirect back
    it('successfull routes to login page', () => {
        cy.visit(base_url + '/login');

        console.log("THIS IS THE URL RAHHHHHHH -=============================================")
        console.log(cy.url())

        cy.url().should('eq', base_url + '/login')
      });

    it('successfully logs in the admin user', () => {
      cy.visit(base_url + '/login');
      cy.url().should('eq', base_url + '/login')
      const email = Cypress.env("CYPRESS_ADMIN_EMAIL");
      const password = Cypress.env("CYPRESS_ADMIN_PASSWORD")

      cy.url().then(url => {
        console.log('Visited URL:', url);
      });
  
      cy.get('input[name="email"]').type(email);
      cy.get('input[name="password"]').type(password);
  
      cy.get('button.lp-button').click();
  
      cy.url().should('eq', base_url + '/');
      cy.get('div[name="dropdown"]').click();
      cy.get('button[name="adminButton"]').should('exist');
    });
    
  });
  
