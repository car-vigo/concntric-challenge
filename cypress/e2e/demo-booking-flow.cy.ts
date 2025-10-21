import { HomePage, BookDemoPage, DemoFormData } from '../pages';

describe('Demo Booking Conversion', () => {
  
  it('Complete Demo Form Submission', () => {
    const homePage = new HomePage();
    const demoPage = new BookDemoPage();

    cy.intercept(
      'POST',
      '**/forms.hsforms.com/submissions-validation/v1/validate/**',
      (req) => {        
        req.reply({
          statusCode: 200
        });
      }
    ).as('formValidation');

    cy.intercept(
      'POST',
      '**/forms.hsforms.com/submissions/v3/public/submit/**',
      (req) => {        
        req.reply({
          statusCode: 200
        });
      }
    ).as('formSubmission');

    homePage.navigateToHome();
    cy.title().should('match', /#1 Preconstruction Software/);

    homePage.clickBookDemo();

    cy.url().should('include', '/book-a-demo/');
    demoPage.verifyPageLoaded();

    const formData: DemoFormData = {
      firstName: 'John',
      lastName: 'Smith',
      jobTitle: 'VP of Preconstruction',
      workEmail: 'john.smith@testcompany.com',
      phoneNumber: '+1 415-555-0123',
      companyName: 'Test Construction Inc',
      companyLocation: 'Colorado',
      howDidYouHear: 'LinkedIn',
      additionalNotes: 'Evaluating preconstruction solutions'
    };

    demoPage.fillDemoForm(formData);
    cy.screenshot('demo-form-filled', { capture: 'fullPage' });

    demoPage.submitForm();


    cy.wait('@formValidation').its('response.statusCode').should('eq', 200);
    cy.wait('@formSubmission').its('response.statusCode').should('eq', 200);
    
  });
});
