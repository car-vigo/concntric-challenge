import { BasePage } from './BasePage';
export class HomePage extends BasePage {
  // Hero section
  heroHeadline() { 
    return cy.get('h1').contains(/manage all aspects of preconstruction/i); 
  }
  
  heroSubheadline() { 
    return cy.contains(/say goodbye to fragmented data/i); 
  }
  
  // Key benefits
  winMoreWorkBenefit() { 
    return cy.contains('Win More Work'); 
  }
  
  increaseMarginBenefit() { 
    return cy.contains('Increase Margin'); 
  }
  
  gainBackTimeBenefit() { 
    return cy.contains('Gain Back Time'); 
  }
  
  reduceRiskBenefit() { 
    return cy.contains('Reduce Risk'); 
  }
  
  // Navigation - Solution links
  generalContractorsLink() { 
    return cy.contains('a', 'For General Contractors').first(); 
  }
  
  ownersLink() { 
    return cy.contains('a', 'For Owners').first(); 
  }
  
  designTeamsLink() { 
    return cy.contains('a', 'For Design Teams').first(); 
  }
  
  tradePartnersLink() { 
    return cy.contains('a', 'For Trade Partners').first(); 
  }
  
  // CTA buttons
  bookDemoButton() { 
    return cy.contains('a', 'Book a Demo'); 
  }
  
  // Testimonials section
  testimonialsSection() { 
    return cy.get('h2, h3').contains(/What ConCntric.*Customers/i); 
  }
  
  // BuildingConnected integration
  buildingConnectedSection() { 
    return cy.get('h2, h3').contains(/BuildingConnected/i); 
  }
  
  buildingConnectedLearnMore() { 
    return cy.contains('a', 'Learn More').first(); 
  }
  
  // Footer links
  emailLink() { 
    return cy.contains('a', 'sales@concntric.com'); 
  }
  
  phoneLink() { 
    return cy.contains('a', '415-301-2024'); 
  }
  
  linkedInLink() { 
    return cy.get('a[href*="linkedin"]'); 
  }
  
  twitterLink() { 
    return cy.get('a[href*="twitter"]'); 
  }
  
  instagramLink() { 
    return cy.get('a[href*="instagram"]'); 
  }
  
  youtubeLink() { 
    return cy.get('a[href*="youtube"]'); 
  }
  
  // Whitepaper links
  realityCheckWhitepaper() { 
    return cy.contains('a', /Reality Check/i); 
  }
  
  pitfallsWhitepaper() { 
    return cy.contains('a', /3 Preconstruction Software Selection Pitfalls/i); 
  }
  
  // Methods
  navigateToHome(): void {
    this.navigateTo('/');
  }
  
  clickBookDemo(): void {
    this.bookDemoButton().click();
  }
  
  navigateToGeneralContractors(): void {
    this.generalContractorsLink().click();
  }
  
  navigateToOwners(): void {
    this.ownersLink().click();
  }
  
  navigateToDesignTeams(): void {
    this.designTeamsLink().click();
  }
  
  navigateToTradePartners(): void {
    this.tradePartnersLink().click();
  }
  
  submitNewsletterSignup(email: string): void {
    cy.iframe().within(() => {
      cy.get('input[name*="email" i], input[type="email"]').type(email);
      cy.contains('button', /Sign Up/i).click();
    });
  }
  
  verifyHeroSection(): void {
    this.heroHeadline().should('be.visible');
  }
  
  verifyKeyBenefits(): void {
    this.winMoreWorkBenefit().should('be.visible');
    this.increaseMarginBenefit().should('be.visible');
    this.gainBackTimeBenefit().should('be.visible');
    this.reduceRiskBenefit().should('be.visible');
  }
}

