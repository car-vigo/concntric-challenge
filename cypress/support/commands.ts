/// <reference types="cypress" />

// Custom command to access iframe content
Cypress.Commands.add('iframe', (selector = 'iframe'): Cypress.Chainable<JQuery<HTMLBodyElement>> => {
  return cy
    .get(selector)
    .its('0.contentDocument').should('exist')      // Verify document exists
    .its('body').should('not.be.undefined')        // Verify body is loaded
    .then(cy.wrap) as Cypress.Chainable<JQuery<HTMLBodyElement>>;
});


// TypeScript declarations
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to access iframe content
       * @param selector - CSS selector for the iframe element (default: 'iframe')
       * @example cy.iframe().find('input').type('test')
       * @example cy.iframe('iframe[title="Form"]').find('button').click()
       */
      iframe(selector?: string): Chainable<JQuery<HTMLBodyElement>>;
    }
  }
}

export {};