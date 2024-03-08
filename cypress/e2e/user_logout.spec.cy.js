describe('Login Page', () => {
    const base_url = Cypress.env("CYPRESS_BASE_URL")
    // Create a before each to redirect to visit base_url, unauthenticated should redirect back
  
    it('successfully logs out the user', () => {
      cy.visit(base_url);
      const email = Cypress.env("CYPRESS_REGULAR_EMAIL");
      const password = Cypress.env("CYPRESS_REGULAR_PASSWORD")

      cy.login(email, password);

      cy.url().should('eq', base_url + '/');

      cy.get('div[name="dropdown"]').click();
      cy.get("button[name='logout']").click({force: true});
      
  
      cy.url().should('include', '/login');
    });
    
  });
  