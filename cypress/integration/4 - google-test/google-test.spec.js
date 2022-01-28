/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('yeah google works fine!', () => {

    beforeEach(() => {
        cy.visit("https://www.google.com");
    });

    it('Try a google search', () => {
        cy.getById('L2AGLb').click();
        cy.get('input[title="Cerca"]').type('Hello Cypress!');
        cy.get('input[value="Cerca con Google"]').first().click();
        cy.getById('search').should('exist');
     });
     
  
  });
  
