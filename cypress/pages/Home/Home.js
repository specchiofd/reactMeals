/* eslint-disable no-undef */
/// <reference types="Cypress" />

export default class Home {
    
    constructor() {
      this.elements = {
        mealsList: () => cy.getByTestId('mealsList').get('li'), 
        firstMealEl: () => cy.getByTestId('mealsList').get('li').first(), 
        cartButton: () => cy.getByTestId('cartButton'),
        orderButton: () => cy.getByTestId('orderButton'),
      };
    }
  
    
    addFirstMealToCart(quantity) {
      const { firstMealEl } = this.elements;
      firstMealEl().getById('amount').type('{backspace}').type(String(quantity)).trigger('change');
      firstMealEl().find('button').click();
    }

    orderMyMeal() {
      const { cartButton, orderButton } = this.elements;
      cartButton().click();
      orderButton().click();
    }
  }
  