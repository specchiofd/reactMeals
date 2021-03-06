/* eslint-disable no-undef */
/// <reference types="Cypress" />

import ROUTES from '../../support/routes';
import { Home, Order } from '../../pages';

const HomePage = new Home();
const OrderModal = new Order();

describe('le\'s buy some sushi!', () => {

    beforeEach(() => {
      cy.visit(ROUTES.HOME);
    });
    
  //  it('change quantity x3! (I\'m very hungry)', () => {
  //    //add sushi to the cart
  //     const mealsListFirstItem = cy.getByTestId('mealsList').get('li').first();
  //     mealsListFirstItem.getById('amount').type('{backspace}').type('3').trigger('change');
  //     cy.getByTestId('mealsList').get('li').first().find('button').click();
  //     //open checkout modal and order
  //     cy.getByTestId('cartButton').click();
  //     cy.getByTestId('orderButton').click();
  //     //compile form
  //     cy.getById('name').type('Test name');
  //     cy.getById('street').type('Test street');
  //     cy.getById('postal').type('12345');
  //     cy.getById('city').type('Test city');
  //     cy.getByTestId('confirmOrderButton').click();
  //     //check successfully message is visible
  //     cy.getByTestId('successfullyMessage').should('be.visible');
  //   });

    it('Same test but with PageObject pattern!!', () => {
      HomePage.addFirstMealToCart(2);
      HomePage.orderMyMeal();
      OrderModal.compileFormAndSubmit({ name: 'Pino Foresta', street: 'Via delle Querce, 10', postal: 12345, city: 'Boscoville' });
      cy.getByTestId('successfullyMessage').should('be.visible');
     });
  
  });
  
