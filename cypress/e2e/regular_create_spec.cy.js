describe('Regular User going to Create page', () => {
  it('successfully redirects to create report page', () => {
    cy.visit('http://localhost:5173');

    cy.get('button[name="create"]').click();

    cy.url().should('include', '/create');
    cy.go('back');
    cy.url().should('include', '/')
  });
});
