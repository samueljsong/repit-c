describe('Login student', () => {
  const base_url = Cypress.env("CYPRESS_BASE_URL")

  it('successfully logs in the regular user', () => {
    cy.visit(base_url + '/login');
    cy.url().should('include', '/login')
    const email = Cypress.env("CYPRESS_REGULAR_EMAIL");
    const password = Cypress.env("CYPRESS_REGULAR_PASSWORD")

    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);

    cy.get('button.lp-button').click();

    cy.url().should('eq', base_url + '/');
    cy.get('div[name="dropdown"]').click();
    cy.get('button[name="adminButton"]').should('not.exist');
  });
  
});

