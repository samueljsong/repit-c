describe('Regular User going to Create page', () => {
  it('successfully redirects to create report page', () => {
    const base_url = Cypress.env("CYPRESS_BASE_URL");
    
    cy.loginRegular();

    cy.get('div[name="create"]').click();

    cy.url().should('include', '/create');
    cy.go('back');
    cy.url().should('include', '/')
  });
});
