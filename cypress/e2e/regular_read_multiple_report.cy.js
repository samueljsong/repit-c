describe('A user views reports multiple times', () => {
  const numIterations = 15; // Number of times to run the test

  it(`successfully views reports ${numIterations} times and performs reliability testing`, () => {
    const baseUrl = Cypress.env("CYPRESS_BASE_URL")

    for (let i = 0; i < numIterations; i++) {
      cy.loginRegular();
      cy.wait(1000); 

      cy.visit(`${baseUrl}/view-reports`);

      cy.get('div.error-message').should('not.exist');

      const startTime = Date.now();

      cy.get('div[name="report-list"]').children().its('length').should('be.gte', 1);

      const endTime = Date.now();
      const executionTime = endTime - startTime;
      cy.log(`Viewing reports execution time for iteration ${i + 1}: ${executionTime} ms`);
    }
  });
});
