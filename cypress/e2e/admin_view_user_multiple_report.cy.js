describe('Viewing admin dashboard', () => {
  it('successfully visits admin dashboard and views all reports', () => {
    const base_url = Cypress.env('CYPRESS_BASE_URL');

    cy.loginAdmin();

    cy.visit(`${base_url}/admindashboard`);

    cy.get('button[name="15"]').click();
    cy.wait(1000);

    cy.get('.button-report')
      .its('length')
      .then((buttonCount) => {
        for (let i = 0; i < buttonCount; i++) {
          cy.get('.button-report').eq(i).click({ force: true });
          cy.wait(3000);
          cy.get('input[name="title-input"]').should('be.visible').should('not.have.value', '');
          cy.get('input[name="location-input"]').should('be.visible').should('not.have.value', '');
          cy.get('textarea[name="description-input"]').should('be.visible').should('not.have.value', '');

          cy.visit(`${base_url}/admindashboard`);
          cy.get('button[name="15"]').click();
          cy.wait(1000);
        }
      });
  });
});
