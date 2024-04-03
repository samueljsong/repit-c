describe('Check text inputs', () => {
    const base_url = "https://bcrepit.netlify.app" //Cypress.env("CYPRESS_BASE_URL")
    const email = "user@my.bcit.ca" // Cypress.env("CYPRESS_ADMIN_EMAIL");
    const password = "asd" //Cypress.env("CYPRESS_ADMIN_PASSWORD")
    // Create a before each to redirect to visit base_url, unauthenticated should redirect back
  
    it('type inside the login page', () => {
      cy.visit(base_url + '/login');

  
      cy.get('input[name="email"]').type(email);
      cy.get('input[name="email"]').should('have.value', email)

      cy.get('input[name="password"]').type(password);
      cy.get('input[name="password"]').should('have.value', password)
      cy.get('input[name="password"]').should('have.attr', 'type', 'password')

    });
    
    // * Add other tests for text input here
    
  });
  