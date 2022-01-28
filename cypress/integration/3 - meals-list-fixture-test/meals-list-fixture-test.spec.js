/* eslint-disable no-undef */
/// <reference types="Cypress" />

import ROUTES from '../../support/routes';
import { Home, Order } from '../../pages';

const HomePage = new Home();
const OrderModal = new Order();

describe('le\'s buy some sushi!', () => {

    beforeEach(() => {
      cy.intercept('/meals.json', { fixture: 'meals.json' }).as('meals');
      cy.intercept('/orders.json', { fixture: 'orders.json' }).as('order');
    });

    it('Test my fixture', () => {
      cy.visit(ROUTES.HOME);
      cy.wait(['@meals']);
      HomePage.addFirstMealToCart(2);
      HomePage.orderMyMeal();
      OrderModal.compileFormAndSubmit({ name: 'Pino Foresta', street: 'Via delle Querce, 10', postal: 12345, city: 'Boscoville' });
      cy.wait(['@order']);
      cy.getByTestId('successfullyMessage').should('be.visible');
     });

     
  
  });
  
