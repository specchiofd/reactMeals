// ONLY FOR EXAMPLE PURPOSE, Pattern Documentation: https://martinfowler.com/bliki/PageObject.html

/// <reference types="Cypress" />
/* eslint-disable no-undef */

export default class CheckoutAddEmail {
  // costruttore della pagina: censice tutti gli elementi HTML di interazione della pagina (cta, input field ecc..)
  constructor() {
    this.elements = {
      emailtextfield: () => cy.getById('id_emailAddress'),
      submitbutton: () => cy.getByName('CTA_NEXT'),
    };
  }

  // lista di funzioni: sono metodi della pagina (digitazione sul campo, azione di apertura chiusura modali) che eseguono interazioni
  typeEmailAndSubmit(emailaddress) {
    const { emailtextfield, submitbutton } = this.elements;
    emailtextfield()
      .type(emailaddress)
      .then(() => {
        submitbutton().click();
      });
  }
}
