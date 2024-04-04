describe('Admin User Report List Page', () => {
  const base_url = Cypress.env("CYPRESS_BASE_URL")

  it('renders without crashing', () => {
    cy.loginAdmin();
    cy.visit(`${base_url}/admin-user-report-list`);
    cy.get('div[name="page-container"]').should('exist');
  });

  it('redirects to login page if user is not an admin', () => {
    cy.loginRegular();
    // Mock the me API response to simulate a non-admin user
    cy.intercept('GET', `${base_url}/auth/me`, {
      statusCode: 200,
      body: {
        "user_type": "user"
      }
    });

    cy.visit(`${base_url}/admin-user-report-list`);
    cy.url().should('eq', `${base_url}/login`);
  });

  it('does not redirect if user is an admin', () => {
    cy.loginAdmin();
    // Mock the me API response to simulate an admin user
    cy.intercept('GET', `${base_url}/auth/me`, {
      statusCode: 200,
      body: {
        "user_type": "admin"
      }
    });

    cy.visit(`${base_url}/admin-user-report-list`);
    cy.url().should('eq', `${base_url}/admin-user-report-list`);
  });

  it('fetches and displays reports correctly', () => {
    cy.loginAdmin();
  
    cy.visit(`${base_url}/admindashboard`);
  
    cy.get('button[name="15"]').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
  
    // Check if there are 6 .button-report elements
    cy.get('.button-report').should('have.length', 6);
  });
  
});