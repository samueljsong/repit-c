describe('A user creates multiple reports', () => {
    const numReports = 5; 
  
    it(`successfully creates ${numReports} reports and performs reliability testing`, () => {
        const baseUrl = "https://bcrepit.netlify.app" //Cypress.env("CYPRESS_BASE_URL")
      
      cy.loginRegular();
  
      for (let i = 0; i < numReports; i++) {
        const title = `testTitle${i}`;
        const description = `testDescription${i}`;
  
        // Visit the create report page
        cy.visit(`${baseUrl}/create`);
  
        // Fill in the report details
        cy.get('input[name="title"]').type(title);
        cy.get('textarea[name="description"]').type(description);
        cy.get('select[name="location"]').select('101');
        cy.get('select[name="location"]').should('have.value', '101');
        
        // Additional reliability checks
        // Error handling
        cy.get('div.error-message').should('not.exist'); 
  
        // Performance testing - measure time taken for report creation
        const startTime = Date.now();
  
        cy.get('button[name="submit"]').click();
        cy.wait(500); 
        cy.url().should('eq', `${baseUrl}/`);
        
        cy.get('div.Toastify').children().should('have.length', 1);
  
        // Measure total execution time
        const endTime = Date.now();
        const executionTime = endTime - startTime;
        cy.log(`Report creation execution time for report ${i + 1}: ${executionTime} ms`);
      }
    });
  });
  