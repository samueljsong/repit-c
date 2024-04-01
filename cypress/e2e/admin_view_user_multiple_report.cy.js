describe('Viewing admin dashboard', () => {
  it('successfully visits admin dashboard and views all reports', () => {
    const base_url = Cypress.env('CYPRESS_BASE_URL');

    // Login as admin
    cy.loginAdmin();

    // Visit admin dashboard
    cy.visit(`${base_url}/admindashboard`);

    cy.get('button[name="15"]').click();
    cy.wait(1000);

    // Get the number of report buttons
    cy.get('.button-report').its('length').then((buttonCount) => {
      for (let i = 0; i < buttonCount; i++) {
        cy.get('.button-report').eq(i).click({ force: true });
        cy.wait(3000)
        // Wait for input fields and textareas to become visible
        cy.get('input[name="title-input"]').should('be.visible').should('not.have.value', '');
        cy.get('input[name="location-input"]').should('be.visible').should('not.have.value', '');
        cy.get('textarea[name="description-input"]').should('be.visible').should('not.have.value', '');

        // Navigate back to the admin dashboard
        cy.visit(`${base_url}/admindashboard`);
        cy.get('button[name="15"]').click();
        cy.wait(1000);
      } 
    });
  });
});
