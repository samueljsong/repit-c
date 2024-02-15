describe('Login Page', () => {
  const base_url = Cypress.env("CYPRESS_BASE_URL")
  // Create a before each to redirect to visit base_url, unauthenticated should redirect back

  it('successfully logs in the user', () => {
    cy.visit(base_url + '/login');
    const email = Cypress.env("CYPRESS_REGULAR_EMAIL");
    const password = Cypress.env("CYPRESS_REGULAR_PASSWORD")

    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);

    cy.get('button.lp-button').click();

    cy.url().should('include', '/');
  });
  
});
