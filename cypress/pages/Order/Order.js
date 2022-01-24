/* eslint-disable no-undef */
/// <reference types="Cypress" />

export default class Order {
    
    constructor() {
      this.elements = {
        nameInput: () => cy.getById('name'),
        streetInput: () => cy.getById('street'),
        postalInput: () => cy.getById('postal'),
        cityInput: () => cy.getById('city'),
        confirmOrderButton: () => cy.getByTestId('confirmOrderButton')
      };
    }
    
    compileFormAndSubmit({ name, street, postal, city }) {
      const { nameInput, streetInput, postalInput, cityInput, confirmOrderButton } = this.elements;
      nameInput().type(name);
      streetInput().type(street);
      postalInput().type(postal);
      cityInput().type(city);
      confirmOrderButton().click();
    }


  }
  