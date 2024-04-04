describe('Login Page invalid email valid pass', () => {
    const base_url = Cypress.env("CYPRESS_BASE_URL")
    const password = Cypress.env("CYPRESS_ADMIN_PASSWORD")
  
    it('fails to log in the admin user', () => {
      cy.visit(base_url + '/login');
      cy.url().should('include', '/login')
      const invalidEmail = "wrong_email@my.bcit.ca";
  
      cy.get('input[name="email"]').type(invalidEmail);
      cy.get('input[name="password"]').type(password);
  
      cy.get('button.lp-button').click();
  
      cy.url().should('eq', base_url + '/login');
      cy.get('div.Toastify').children().should('have.length', 1);
    });
    
  });
  
