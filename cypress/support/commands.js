// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const base_url = Cypress.env("CYPRESS_BASE_URL")
const api_url = Cypress.env("CYPRESS_API_URL")

Cypress.Commands.add('login', (email, password) => {

    cy.visit(base_url + '/login');

    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);

    cy.get('button.lp-button').click();

    cy.url().should('eq', base_url + '/');

    cy.request(api_url + '/api/auth/me').then((response) => {
        expect(response.status).to.eq(200);
    });
  })