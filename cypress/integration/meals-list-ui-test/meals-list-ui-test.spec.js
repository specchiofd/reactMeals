/* eslint-disable no-undef */
/// <reference types="Cypress" />

import ROUTES from '../../support/routes';

describe('meals-list-ui-test', () => {

    beforeEach(() => {
      cy.visit(ROUTES.HOME);
    });
  
    it('check if the url is correct', () => {
      cy.url().should('eq', 'http://localhost:3000/') 
    });

    it('render list correctly', () => {
      const mealsList = cy.getByTestId('mealsList').get('li');
      mealsList.should('have.length', 2);
      mealsList.first().find('h3').should('have.text', 'Sushi');
    });

    it('the first meal is Sushi!', () => {
      const mealsListFirstItem = cy.getByTestId('mealsList').get('li').first();
      mealsListFirstItem.find('h3').should('have.text', 'Sushi');
    });

    it('check the quantity is one by default', () => {
      const mealsListFirstItem = cy.getByTestId('mealsList').get('li').first();
      mealsListFirstItem.getById('amount').should('have.attr', 'value', '1');
    });
  
    context('add meal to cart', () => {
  
      it('change quantity x3', () => {
        const mealsListFirstItem = cy.getByTestId('mealsList').get('li').first();
        mealsListFirstItem.getById('amount').type('{backspace}').type('3').trigger('change');
        cy.getByTestId('mealsList').get('li').first().find('button').click();
        const numberOfCartItems = cy.getByTestId('numberOfCartItems');
        numberOfCartItems.should('have.text', '3');
      });
  
    });
  });
  
