describe('Logging User Out', () => {
    const base_url = Cypress.env("CYPRESS_BASE_URL")
    const api_url = Cypress.env("CYPRESS_API_URL")
  
    it('successfully logs out the user', () => {
      cy.loginRegular();

      cy.get('div[name="dropdown"]').click();
      cy.get("button[name='logout']").click({force: true});

      cy.url().should('include', '/login');
    });
    
  });
  