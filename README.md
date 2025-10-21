# ConCntric Cypress Tests

Automated E2E testing suite for ConCntric.com using Cypress with TypeScript.

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Run Tests

```bash
# Open Cypress UI
npm run cy:open

# Run headless
npx cypress run



# Run with custom host
CYPRESS_HOST=https://staging.concntric.com npx cypress run
```

---

## 📁 Project Structure

```
concntric-cypress/
├── .github/
│   └── workflows/
│       ├── cypress-tests.yml    # GitHub Actions workflow
│       └── README.md            # Workflow documentation
├── cypress/
│   ├── e2e/
│   │   └── demo-booking-flow.cy.ts    # Demo form test
│   ├── pages/
│   │   ├── BasePage.ts          # Base page object
│   │   ├── HomePage.ts          # Home page object
│   │   ├── BookDemoPage.ts      # Demo page object
│   │   └── index.ts             # Page exports
│   ├── support/
│   │   ├── commands.ts          # Custom commands (cy.iframe)
│   │   └── e2e.ts              # Global config
│   └── reports/
│       └── html/               # Test reports (generated)
├── cypress.config.ts           # Cypress configuration
├── cypress.env.json           # Environment variables (local)
└── package.json
```

---

## 🧪 Tests

### P0 - Revenue Critical

- **demo-booking-flow.cy.ts** - Complete demo form submission flow
  - Navigate to home
  - Click "Book a Demo"
  - Fill all form fields
  - Submit form
  - Verify success

---

## 🎯 Features

### ✅ Page Object Model (POM)
Clean, maintainable test structure with reusable page objects.

### ✅ Custom Commands
- `cy.iframe()` - Access iframe content easily
- TypeScript support with full IntelliSense

### ✅ Intercepts
- Blocks real form submissions to HubSpot
- Returns mock 200 responses
- No test data contamination

### ✅ Mochawesome Reports
- HTML reports with charts and statistics
- Embedded screenshots and videos
- Auto-generated after each run

### ✅ GitHub Actions
- Automated test execution on push/PR
- Artifacts uploaded automatically
- Optional GitHub Pages deployment

---

## 📊 Reporting

### Local Reports

After running tests:
```bash
npx cypress run
```

Open the report:
```
cypress/reports/html/index.html
```

### CI/CD Reports

Reports are automatically uploaded as artifacts in GitHub Actions:

1. Go to `Actions` tab in GitHub
2. Click on the latest workflow run
3. Download `test-report` artifact
4. Extract and open `index.html`

**Or** view directly on GitHub Pages (if enabled):
```
https://<user>.github.io/<repo>/
```

---

## 🔧 Configuration

### Environment Variables

**Local** (cypress.env.json):
```json
{
  "host": "https://concntric.com/"
}
```

**CI/CD** (GitHub Secrets):
- `CYPRESS_HOST` - Base URL for tests

### Viewport

```typescript
// cypress.config.ts
viewportWidth: 1920,
viewportHeight: 1080,
```

### Timeouts

```typescript
defaultCommandTimeout: 10000,  // 10 seconds
requestTimeout: 10000,
responseTimeout: 10000,
```

---

## 🐛 Troubleshooting

### Issue: Iframe elements not found

**Solution:** Use the custom `cy.iframe()` command:
```typescript
cy.iframe('iframe[data-test-id="..."]').within(() => {
  cy.get('input').type('text');
});
```

### Issue: Tests timeout

**Solution:** Increase wait times for slow loading iframes:
```typescript
cy.wait(2000); // Wait for iframe to load
```

### Issue: Module resolution errors

**Solution:** Ensure `tsconfig.json` has:
```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "module": "commonjs"
  }
}
```

---

## 📝 Writing Tests

### Example Test

```typescript
import { HomePage, BookDemoPage, DemoFormData } from '../pages';

describe('My Test Suite', () => {
  it('fills demo form', () => {
    const home = new HomePage();
    const demo = new BookDemoPage();
    
    home.navigateToHome();
    home.clickBookDemo();
    
    const data: DemoFormData = {
      firstName: 'John',
      lastName: 'Doe',
      jobTitle: 'Director',
      workEmail: 'john@test.com',
      phoneNumber: '+1 555-0123',
      companyName: 'Test Corp',
      companyLocation: 'United States',
      howDidYouHear: 'LinkedIn',
      additionalNotes: 'Testing'
    };
    
    demo.fillDemoForm(data);
    demo.submitForm();
    
    cy.wait('@formSubmission')
      .its('response.statusCode')
      .should('eq', 200);
  });
});
```

---

## 🤝 Contributing

1. Create a feature branch
2. Write your tests
3. Ensure all tests pass locally
4. Open a pull request
5. CI will run tests automatically

---

## 📚 Documentation

- [Cypress Docs](https://docs.cypress.io/)
- [TypeScript Support](https://docs.cypress.io/guides/tooling/typescript-support)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Page Object Model](./cypress/pages/README.md) (if exists)

---

## 📈 Test Coverage

- ✅ **100%** of P0 scenarios (demo form submission)
- ⏳ **WIP** - Additional test scenarios planned

---

## 🔐 Security

- Secrets managed via GitHub Secrets
- No sensitive data in repository
- Form submissions intercepted (no real data sent)

---

## 📄 License

MIT

---

## 👥 Maintainers

- Carlos Vigo

---

**Happy Testing!** 🎉

