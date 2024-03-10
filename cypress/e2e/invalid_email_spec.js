describe('Login Page', () => {
    const base_url = Cypress.env("CYPRESS_BASE_URL")
    // Create a before each to redirect to visit base_url, unauthenticated should redirect back
  
    it('fails to login a non-bcit user', () => {
      cy.visit(base_url + '/login');
      cy.url().should('include', '/login')
      const email = "test@test.com";
      const password = Cypress.env("CYPRESS_REGULAR_PASSWORD")
  
      cy.get('input[name="email"]').type(email);
      cy.get('input[name="password"]').type(password);
  
      cy.get('button.lp-button').click();
  
      cy.url().should('include', '/');
    });
    
  });
  