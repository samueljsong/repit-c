describe('An admin updates reports with different status values', () => {
    const numIterations = 5; 
    let statusCounter = 1; 
    const baseUrl = "https://bcrepit.netlify.app" //Cypress.env("CYPRESS_BASE_URL")
    
    it(`successfully updates reports ${numIterations} times with different status values and performs reliability testing`, () => {
    
      for (let i = 0; i < numIterations; i++) {
        cy.loginAdmin();
  
        cy.visit(`${baseUrl}/AdminDashboard`);
  
        cy.get('button[name="15"]').click();
        cy.wait(1000); 
  
        cy.get('.button-report').first().click({ force: true });
  
        cy.url().should('eq', `${baseUrl}/admin-user-report-card`);
  
        cy.get('select[name="status"]').select(`${statusCounter}`);
        cy.get('button[name="submit"]').click();
        cy.wait(500); 
  
        cy.get('.error-message').should('not.exist');
  
        const startTime = Date.now();
  
        cy.reload();
        cy.wait(500);
  
        cy.get('.button-report').first().click({ force: true });
  
        cy.get('select[name="status"]').should('have.value', `${statusCounter}`);
  
        const endTime = Date.now();
        const executionTime = endTime - startTime;
        cy.log(`Report update execution time for iteration ${i + 1}: ${executionTime} ms`);
  
        statusCounter = statusCounter < 4 ? statusCounter + 1 : 1;
      }
    });
  });
  