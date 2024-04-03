describe('Login student', () => {
    const base_url = "https://bcrepit.netlify.app" //Cypress.env("CYPRESS_BASE_URL")
    const numIterations = 10;
  
    it('successfully logs in the regular user and monitors memory', () => {
      for (let i = 0; i < numIterations; i++) {
        cy.visit(base_url + '/login');
        cy.url().should('include', '/login');
        const email = "wnguyen16@my.bcit.ca" // Cypress.env("CYPRESS_ADMIN_EMAIL");
        const password = "1234" //Cypress.env("CYPRESS_ADMIN_PASSWORD")
  
        cy.get('input[name="email"]').type(email);
        cy.get('input[name="password"]').type(password);
  
        cy.get('button.lp-button').click();
  
        cy.url().should('eq', base_url + '/');
        cy.get('div[name="dropdown"]').click();
        cy.get('button[name="adminButton"]').should('exist');
        cy.get('button[name="logout"]').click();
      }
    });
  });
  

  

  