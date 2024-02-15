describe('Regular User going to View page', () => {
  it('successfully redirects to view page', () => {
    cy.visit('http://localhost:5173');

    cy.get('div[name="view"]').click();

    cy.url().should('include', '/view-reports');
    cy.go('back');
    cy.url().should('include', '/')
  });
});
