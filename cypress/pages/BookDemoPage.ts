import { BasePage } from './BasePage';

export interface DemoFormData {
  firstName: string;
  lastName: string;
  jobTitle: string;
  workEmail: string;
  phoneNumber: string;
  companyName: string;
  companyLocation: string;
  howDidYouHear: string;
  additionalNotes?: string;
}

export class BookDemoPage extends BasePage {
  pageHeading() { 
    return cy.get('h1').contains(/Book a Demo/i); 
  }
  
  benefitsList() { 
    return cy.get('ul').contains(/Unify the entire preconstruction/i).parent(); 
  }
  
    
  fillDemoForm(data: DemoFormData): void {
    cy.wait(2000);
    
    cy.iframe("iframe[data-test-id='embedded-form-06441419-78e1-4c7d-968e-53e2d6527a4c']").within(() => {
      cy.get('input[name*="firstname"]').clear().type(data.firstName);
      cy.get('input[name*="lastname"]').clear().type(data.lastName);
      cy.get('input[name*="jobtitle"], input[name*="job_title"]').clear().type(data.jobTitle);
      cy.get('input[name*="email"], input[type="email"]').clear().type(data.workEmail);
      cy.get('input[type="tel"]').clear().type(data.phoneNumber);
      cy.get('input[name*="company"]').first().clear().type(data.companyName);
      
      cy.get('input[role="button"][aria-haspopup="listbox"]').eq(0).click();
      cy.get('input[role="searchbox"]').eq(1).type(data.companyLocation);
      cy.contains('li[role="option"]', data.companyLocation).click();
      
      cy.get('input[role="button"][aria-haspopup="listbox"]').eq(1).click();
      cy.get('input[role="searchbox"]').eq(2).type(data.howDidYouHear);
      cy.contains('li[role="option"]', data.howDidYouHear).click();
      
      cy.get('textarea, input[data-hsfc-id="TextInput"]').last().type(data.additionalNotes);
    });
  }
  
  submitForm(): void {
    cy.iframe("iframe[data-test-id='embedded-form-06441419-78e1-4c7d-968e-53e2d6527a4c']").within(() => {
      cy.get('button[type="submit"], button.hsfc-Button').click();
    });
  }
  
  completeDemoFormSubmission(data: DemoFormData): void {
    this.fillDemoForm(data);
    this.submitForm();
  }
  
  verifyPageLoaded(): void {
    this.pageHeading().should('be.visible');
    this.benefitsList().should('be.visible');
  }
  
  attemptEmptySubmission(): void {
    cy.iframe("iframe[data-test-id='embedded-form-06441419-78e1-4c7d-968e-53e2d6527a4c']").within(() => {
      cy.get('button[type="submit"], input[type="submit"]').contains(/Submit/i).click();
    });
  }
  
  fillOnlyEmail(email: string): void {
    cy.iframe("iframe[data-test-id='embedded-form-06441419-78e1-4c7d-968e-53e2d6527a4c']").within(() => {
      cy.get('input[name*="email"], input[type="email"]').clear().type(email);
    });
  }
  
  verifyValidationErrors(): void {
    cy.wait(1000);
    cy.iframe("iframe[data-test-id='embedded-form-06441419-78e1-4c7d-968e-53e2d6527a4c']").within(() => {
      cy.get('.error, .validation-error, [class*="error"]').should('exist');
    });
  }
}

