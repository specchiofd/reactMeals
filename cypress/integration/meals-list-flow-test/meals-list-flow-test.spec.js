/* eslint-disable no-undef */
/// <reference types="Cypress" />

import ROUTES from '../../support/routes';

describe('le\'s buy some sushi!', () => {

    beforeEach(() => {
      cy.visit(ROUTES.HOME);
    });
    
   it('change quantity x3! (I\'m very hungry)', () => {
      const mealsListFirstItem = cy.getByTestId('mealsList').get('li').first();
      mealsListFirstItem.getById('amount').type('{backspace}').type('3').trigger('change');
      cy.getByTestId('mealsList').get('li').first().find('button').click();
    });
  
  });
  
