describe('Admin Dashboard Page', () => {
  const baseUrl = Cypress.env("CYPRESS_BASE_URL")

  it('renders without crashing', () => {
    cy.loginAdmin();
    cy.visit(`${baseUrl}/AdminDashboard`);
    cy.get('div').should('exist'); // Adjust selector as per your component structure
  });

  it('redirects to login page if user is not an admin', () => {
    cy.loginRegular();
    // Mock the me API response to simulate a non-admin user
    cy.intercept('GET', `${baseUrl}/auth/me`, {
      statusCode: 200,
      body: {
        "user_type": "user" // Change user_type to simulate a non-admin user
      }
    });

    cy.visit(`${baseUrl}/AdminDashboard`);
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

    cy.visit(`${baseUrl}/AdminDashboard`);
    cy.url().should('eq', `${baseUrl}/AdminDashboard`);
  });
});
