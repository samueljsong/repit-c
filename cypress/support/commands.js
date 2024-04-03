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

const regular_email = Cypress.env("CYPRESS_REGULAR_EMAIL");
const regular_password = Cypress.env("CYPRESS_REGULAR_PASSWORD");

const admin_email = Cypress.env("CYPRESS_ADMIN_EMAIL");
const admin_password = Cypress.env("CYPRESS_ADMIN_PASSWORD");

Cypress.Commands.add('loginAdmin', () => {

    cy.visit(base_url + '/login');

    cy.get('input[name="email"]').type(admin_email);
    cy.get('input[name="password"]').type(admin_password);

    cy.get('button.lp-button').click();

    cy.url().should('eq', base_url + '/');
  })


  Cypress.Commands.add('loginRegular', () => {

    cy.visit(base_url + '/login');

    cy.get('input[name="email"]').type(regular_email);
    cy.get('input[name="password"]').type(regular_password);

    cy.get('button.lp-button').click();

    cy.url().should('eq', base_url + '/');
  })