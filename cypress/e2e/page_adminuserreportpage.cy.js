describe('Admin User Report Page', () => {
    const baseUrl = Cypress.env("CYPRESS_BASE_URL")
  
  
    it('renders without crashing', () => {
      cy.loginAdmin();
      const reportId = '50';
  
      cy.visit(`${baseUrl}/admin-user-report-card`, {
        state: reportId
      });

      cy.wait(1000); 

  
      cy.get('input[name="title-input"]').should('exist');
    });
  
    it('redirects to login page if user is not an admin', () => {
      cy.loginRegular();
      cy.intercept('GET', `${baseUrl}/auth/me`, {
        statusCode: 200,
        body: {
          "user_type": "user"
        }
      });
  
      const reportId = '50';
  
      cy.visit(`${baseUrl}/admin-user-report-card`, {
        state: reportId
      });
      cy.wait(1000); 

  
      cy.url().should('eq', `${baseUrl}/login`);
    });
  
    it('does not redirect if user is an admin', () => {
      cy.loginAdmin();
      cy.intercept('GET', `${baseUrl}/auth/me`, {
        statusCode: 200,
        body: {
          "user_type": "admin"
        }
      });
      cy.wait(1000); 

  
      const reportId = '50';
  
      cy.visit(`${baseUrl}/admin-user-report-card`, {
        state: reportId
      });
  
      cy.url().should('eq', `${baseUrl}/admin-user-report-card`);
    });
  });
  