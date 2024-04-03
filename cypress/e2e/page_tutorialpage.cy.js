describe('TutorialPage', () => {
  const base_url = Cypress.env('CYPRESS_BASE_URL');
  const api_url = Cypress.env('CYPRESS_API_URL');

  beforeEach(() => {
    cy.visit(base_url + '/login');

    cy.get('input[name="email"]').type('jasonlui40@my.bcit.ca');
    cy.get('input[name="password"]').type('!A123456789');

    cy.get('button.lp-button').click();

    cy.url().should('eq', base_url + '/tutorial');

    cy.request(api_url + '/auth/me')
      .then((response) => {
        expect(response.status).to.eq(200);
      })
      .as('loggedIn');
  });

  it('renders the page with Tutorial1 by default', () => {
    cy.visit(`${base_url}/tutorial`);

    cy.get('div.t1-instructions').should('exist');
    cy.get('div.t1-instructions p').should('have.length', 3);
    cy.get('div.t1-instructions p').eq(0).should('have.text', 'If you discover something broken,');
    cy.get('div.t1-instructions p').eq(1).should('have.text', 'help BCIT by reporting it.');
    cy.get('div.t1-instructions p').eq(2).should('have.text', 'It can be anything.');
  });

  it('navigates to the next tutorial when clicking next', () => {
    cy.visit(`${base_url}/tutorial`);

    cy.get('button[name=next]').click();

    cy.url().should('eq', base_url + '/tutorial');

    cy.get('.tp2.tp-circle.tp-active').should('exist');

    cy.get('.t1-instructions').should('exist');
    cy.get('.t1-instructions p').should('have.length', 3);
    cy.get('.t1-instructions p').eq(0).should('have.text', 'Create a new report to send to BCIT');
    cy.get('.t1-instructions p').eq(1).should('have.text', 'Fill in important details');
    cy.get('.t1-instructions p').eq(2).should('have.text', 'And add photos!');
  });

  it('navigates to the 3rd tutorial when clicking next', () => {
    cy.visit(`${base_url}/tutorial`);

    cy.get('button[name=next]').click();
    cy.get('button[name=next]').click();


    cy.url().should('eq', base_url + '/tutorial');

    cy.get('.tp3.tp-circle.tp-active').should('exist');
    cy.get('.t1-instructions p').eq(0).should('have.text', 'Double check and finalize your report');
    cy.get('.t1-instructions p').eq(1).should('have.text', 'Once ready you can REPIT');
    cy.get('.t1-instructions p').eq(2).should('have.text', 'BCIT will fix it soon!');

  });

  it('navigates to the warning page', () => {
    cy.visit(`${base_url}/tutorial`);

    cy.get('button[name=next]').click();
    cy.get('button[name=next]').click();
    cy.get('button[name=next]').click();


    cy.url().should('eq', base_url + '/tutorial');

    cy.get('.t1-instructions p').should('have.length', 3);
    cy.get('.t1-instructions p').eq(0).should('have.text', 'Do not take pictures in the washrooms');
    cy.get('.t1-instructions p').eq(1).should('have.text', 'Do not take pictures in the changerooms');
    cy.get('.t1-instructions p').eq(2).should('have.text', 'Please respect everyone\'s privacy.');
    cy.get('button[name=complete]').should('exist');
  });
});
