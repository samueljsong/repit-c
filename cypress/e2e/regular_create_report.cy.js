describe('A user creates a report', () => {
  it('successfully creates a report', () => {
    const baseUrl = Cypress.env('CYPRESS_BASE_URL');
    cy.loginRegular();
    cy.visit(`${baseUrl}/create`);
    cy.get('input[name="title"]').type('testTitle');
    cy.get('textarea[name="description"]').type('testDescription');

    cy.get('select[name="location"]').select('101');
    cy.get('select[name="location"]').should('have.value', '101'); // Checks if the location tag was properly added

    cy.get('div[name="cloudinaryWidget"').should('exist'); // Check if the cloudinary widget exsits

    cy.get('button[name="submit"]').click();
    cy.wait(500);
    cy.url().should('eq', `${baseUrl}/`); // a report has successfully been created.
  });
});
