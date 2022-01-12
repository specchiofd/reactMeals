/* eslint-disable no-undef */
Cypress.Commands.add('getByName', (name) => {
  return cy.get(`[name='${name}']`);
});

Cypress.Commands.add('getByTestId', (name) => {
  return cy.get(`[data-testid='${name}']`);
});

Cypress.Commands.add('getById', (id) => {
  return cy.get(`#${id}`);
});
