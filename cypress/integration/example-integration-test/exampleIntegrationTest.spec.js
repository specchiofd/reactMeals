/* eslint-disable no-undef */
/// <reference types="Cypress" />

import { ExamplePage } from '../../pages';
import ROUTES from '../../support/routes';

// Data
const user = { email: 'cypress@test.it', password: 'password' };

// Pages:
const examplePage = new ExamplePage();

context('esempio struttura di integrazione di test cypress basato su pattern PageObject', () => {
  before(() => {
    // cy.server();
    cy.visit(ROUTES.HOME);
  });

  it('Landing on Payment, order completed', () => {
    examplePage.typeEmailAndSubmit(user.email);
    /**
     *
     * Inserire qui assertion di test
     *
     */
  });
});
