describe('Regular User going to Create page', () => {
  it('successfully redirects to create report page', () => {
    cy.loginRegular();

    cy.get('button[name="create"]').click();

    cy.url().should('include', '/create');
    cy.go('back');
    cy.url().should('include', '/')
  });
});
