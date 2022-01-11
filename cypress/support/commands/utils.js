/* eslint-disable no-undef */
Cypress.Commands.add('getByName', (name) => {
  return cy.get(`[name='${name}']`);
});

Cypress.Commands.add('getByLmId', (name) => {
  return cy.get(`[data-lm-id='${name}']`);
});

Cypress.Commands.add('getById', (id) => {
  return cy.get(`#${id}`);
});

Cypress.Commands.add('getByDataValue', (dataValue) => {
  return cy.get(`[data-value='${dataValue}']`);
});
