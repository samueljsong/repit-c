describe('Login Page', () => {
    const base_url = Cypress.env("CYPRESS_BASE_URL")
    // Create a before each to redirect to visit base_url, unauthenticated should redirect back
  
    it('successfully logs out the user', () => {
      cy.loginRegular();

      cy.get('div[name="dropdown"]').click();
      cy.get("button[name='logout']").click({force: true});
  
      cy.url().should('include', '/login');
    });
    
  });
  