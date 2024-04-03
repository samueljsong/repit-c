describe('A user creates a report', () => { 
    it('successfully creates a report', () => {
        const base_url = "https://bcrepit.netlify.app" //Cypress.env("CYPRESS_BASE_URL")

        
        cy.loginRegular()
        cy.wait(500)
        cy.visit(base_url + "/view-reports")

        // Assumes at least 1 report created by the user
        cy.get('div[name="report-list"]').children().its('length').should('be.gte', 1);
    });
})