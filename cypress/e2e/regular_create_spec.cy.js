describe('Regular User going to Create page', () => {
  it('successfully redirects to create report page', () => {
    const base_url = Cypress.env("CYPRESS_BASE_URL");
    const email = Cypress.env("CYPRESS_REGULAR_EMAIL");
    const password = Cypress.env("CYPRESS_REGULAR_PASSWORD");

    cy.visit(base_url + '/login');
    cy.login(email, password);

    cy.get('div[name="create"]').click();

    cy.url().should('include', '/create');
    cy.go('back');
    cy.url().should('include', '/')
  });
});
