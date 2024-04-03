describe('CreateReportPage', () => {
    const baseUrl = Cypress.env('CYPRESS_BASE_URL');
  
    it('renders the page with RegularUserReportCard', () => {
      cy.loginRegular();
  
      cy.visit(`${baseUrl}/create`);
    
    cy.get('input[name="title"]').should('exist');
    cy.get('textarea[name="description"]').should('exist');
  
    cy.get('select[name="location"]').should('exist');
  
    cy.get('div[name="cloudinaryWidget"]').should('exist'); 
  
    cy.get('button[name="submit"]').should('exist');
    });  });

  