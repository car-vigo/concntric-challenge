export class BasePage {

  
  navigateTo(path: string): void {
    
    cy.visit(path);
  }
  
  getPageTitle() {
    return cy.title();
  }
  
  waitForPageLoad(): void {
    cy.window().should('have.property', 'document');
  }
}

