describe('An admin updates a report status', () => {
  const statusCounter = 1; 
  const baseUrl = Cypress.env("CYPRESS_BASE_URL")

  it(`successfully updates reports performs reliability testing`, () => {
    cy.loginAdmin();

    cy.visit(`${baseUrl}/AdminDashboard`);

    cy.get('button[name="15"]').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);

    cy.get('.button-report').first().click({ force: true });

    cy.url().should('eq', `${baseUrl}/admin-user-report-card`);

    cy.get('select[name="status"]').select(`${statusCounter}`);
    cy.get('button[name="submit"]').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);

    cy.get('.error-message').should('not.exist');

    const startTime = Date.now();

    cy.reload();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);

    cy.get('.button-report').first().click({ force: true });

    cy.get('select[name="status"]').should('have.value', `${statusCounter}`);

    const endTime = Date.now();
    const executionTime = endTime - startTime;
    cy.log(`Report update execution time: ${executionTime} ms`);
  });
});
