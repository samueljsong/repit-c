describe('Viewing admin dashboard', () => {
  it('successfully visits admin dashboard and views all reports', () => {
    const base_url = Cypress.env('CYPRESS_BASE_URL');

    // Login as admin
    cy.loginAdmin();

    // Visit admin dashboard
    cy.visit(`${base_url}/admindashboard`);

    cy.get('button[name="15"]').click();
    cy.wait(1000);

    // Get the dashboard-list container
    cy.get('.dashboard-list').within(() => {
      // Get the scrollable-list container
      cy.get('.scrollable-list').within(() => {
        // Get the user-list container
        cy.get('.user-list').within(() => {
          // Get all the report buttons and iterate over them
          cy.get('.button-report').each(($reportButton) => {
            // Click on each report button using {force: true} option
            cy.wrap($reportButton).click({force: true}).then(() => {
              cy.wait(2000);
              // Perform assertions or actions on the report details page
              cy.get('div[name="report-container"]').within(() => {
                cy.get('input[name="title-input"]').should('exist');
                cy.get('input[name="location-input"]').should('exist');
                cy.get('textarea[name="description-input"]').should('exist');
              });
            });

            // Navigate back to the admin dashboard
            cy.visit(`${base_url}/admindashboard`);
            cy.get('button[name="15"]').click();
            cy.wait(1000); 
          });
        });
      });
    });
  });
});


