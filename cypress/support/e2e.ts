// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register'; 
// Suppress uncaught exceptions from HubSpot iframe postMessage
Cypress.on('uncaught:exception', (err) => {
  // Ignore postMessage errors from HubSpot iframe
  if (err.message.includes('postMessage') || 
      err.message.includes('neutered') ||
      err.message.includes('DataCloneError')) {
    console.log('⚠️ Ignoring known HubSpot iframe error:', err.message);
    return false; // Prevent test from failing
  }
  // Let other errors fail the test
  return true;
});