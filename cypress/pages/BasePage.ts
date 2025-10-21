export class BasePage {
  protected baseURL: string;
  
  constructor() {
    this.baseURL = Cypress.env('HOST');
  }
  
  navigateTo(url: string): void {
    const fullUrl = url.startsWith('http') ? url : `${this.baseURL}${url}`;
    cy.visit(fullUrl);
  }
  
  getPageTitle() {
    return cy.title();
  }
  
  waitForPageLoad(): void {
    cy.window().should('have.property', 'document');
  }
}

