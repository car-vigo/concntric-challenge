    # ConCntric Preconstruction Software - Strategic Test Plan

    ## Executive Summary

    ConCntric (https://concntric.com/) is a B2B SaaS platform providing preconstruction management software for general contractors, owners, design teams, and trade partners. The website serves as the primary lead generation and conversion tool with critical business objectives:

    **Primary Conversion Goals:**
    - **Demo Bookings** - Main revenue driver via `/book-a-demo/` form
    - **Newsletter Signups** - Lead nurturing via email capture
    - **Content Downloads** - Whitepapers for lead qualification

    **Target Personas:**
    - General Contractors (primary)
    - Owners & Developers
    - Design Teams
    - Trade Partners

    **Key Value Propositions:**
    - Win more work
    - Increase margin
    - Gain back time
    - Reduce risk

    ## Critical User Journeys

    ### Journey 1: High-Intent Lead - Demo Booking Flow
    **Business Impact:** Direct revenue opportunity
    **User Type:** Decision-maker evaluating preconstruction software

    ### Journey 2: Research Phase - Solution Exploration
    **Business Impact:** Lead qualification and nurturing
    **User Type:** Prospect comparing options

    ### Journey 3: Quick Conversion - Newsletter Signup
    **Business Impact:** Lead capture for marketing automation
    **User Type:** Early-stage prospect

    ## Test Scenarios

    ### 1. Demo Booking Conversion (Critical Path)

    #### 1.1 Complete Demo Form Submission
    **Priority:** P0 - Revenue Critical

    **Steps:**
    1. Navigate to `https://concntric.com/`
    2. Click "Book a Demo" CTA button in header
    3. Verify navigation to `/book-a-demo/` page
    4. Fill demo form with valid data:
    - First Name: "John"
    - Last Name: "Smith"
    - Job Title: "VP of Preconstruction"
    - Work Email: "john.smith@testcompany.com"
    - Phone Number: "+1 415-555-0123"
    - Company Name: "Test Construction Inc"
    - Company HQ Location: Select "United States"
    - How did you hear about us?: Select any option
    - What else do we need to know?: "Evaluating preconstruction solutions"
    5. Click "Submit" button
    6. Verify submission success (confirmation message or redirect)

    **Expected Results:**
    - Form submission completes without errors
    - User receives confirmation (visual feedback or email)
    - Form validates all required fields before submission
    - Phone number accepts international format with country code

    **Failure Conditions:**
    - Form submission fails silently
    - Required field validation missing
    - No confirmation provided to user

    ---

    #### 1.2 Demo Form Validation - Required Fields
    **Priority:** P0 - Revenue Critical

    **Steps:**
    1. Navigate to `/book-a-demo/`
    2. Attempt to submit form with empty required fields
    3. Verify inline validation errors appear for:
    - First Name
    - Last Name
    - Job Title
    - Work Email
    - Phone Number
    - Company Name
    - Company HQ Location
    - How did you hear about us?
    4. Fill only some required fields
    5. Verify remaining required fields show validation errors

    **Expected Results:**
    - Form prevents submission with empty required fields
    - Clear error messages indicate which fields need completion
    - Validation triggers on submit attempt (not prematurely)
    - Error messages are user-friendly and actionable

    ---

    #### 1.3 Demo Form - Email Validation
    **Priority:** P1 - Data Quality

    **Steps:**
    1. Navigate to `/book-a-demo/`
    2. Enter invalid email formats in "Work Email":
    - "notanemail"
    - "missing@domain"
    - "@nodomain.com"
    - "spaces in@email.com"
    3. Attempt form submission
    4. Verify email validation error appears
    5. Enter valid email: "valid.email@company.com"
    6. Verify validation error clears

    **Expected Results:**
    - Email field validates format before submission
    - Clear error message for invalid email format
    - Validation accepts standard business email formats
    - Real-time or submit-time validation feedback

    ---

    ### 2. Solution Exploration Journey

    #### 2.1 Navigate Solution Pages - General Contractors
    **Priority:** P1 - Lead Qualification

    **Steps:**
    1. Navigate to `https://concntric.com/`
    2. Click "For General Contractors" link
    3. Verify navigation to `/generalcontractors/` page
    4. Verify page displays:
    - Value proposition headline
    - Customer testimonials (4 visible)
    - "Get Started" CTA button
    - Key benefits section
    - Social proof (partner logos)
    5. Click "Get Started" button
    6. Verify navigation to `/book-a-demo/` page

    **Expected Results:**
    - Solution page loads within 3 seconds
    - All content sections render correctly
    - Customer testimonials display with names and titles
    - CTA buttons are prominently visible and functional
    - Navigation maintains consistent header/footer

    ---

    #### 2.2 Cross-Persona Navigation Flow
    **Priority:** P2 - User Experience

    **Steps:**
    1. Navigate to home page
    2. Click through each solution link in sequence:
    - "For General Contractors" → `/generalcontractors/`
    - "For Owners" → `/owners/`
    - "For Design Teams" → `/designteams/`
    - "For Trade Partners" → `/trade-partners/`
    3. Verify each page:
    - Loads successfully
    - Displays unique value proposition
    - Contains relevant CTA
    4. Use browser back button between pages
    5. Verify navigation history works correctly

    **Expected Results:**
    - All solution pages load without errors
    - Content is relevant to each persona
    - Browser back/forward navigation functions correctly
    - No broken links or 404 errors

    ---

    ### 3. Newsletter Signup Conversion

    #### 3.1 Complete Newsletter Signup
    **Priority:** P1 - Lead Capture

    **Steps:**
    1. Navigate to home page
    2. Scroll to newsletter signup section (footer area)
    3. Locate "Company Email" input field in embedded form
    4. Enter valid email: "prospect@company.com"
    5. Click "Sign Up" button
    6. Verify submission success

    **Expected Results:**
    - Newsletter form is visible and accessible
    - Email input accepts valid business emails
    - Submit button triggers form submission
    - User receives confirmation of signup
    - No page reload required (AJAX submission)

    **Validation:**
    - Form embedded iframe loads correctly
    - Submit button is clickable and functional
    - Privacy notice is visible and clear

    ---

    #### 3.2 Newsletter Signup - Email Validation
    **Priority:** P2 - Data Quality

    **Steps:**
    1. Locate newsletter signup form
    2. Enter invalid email: "invalidemail"
    3. Click "Sign Up" button
    4. Verify validation error appears
    5. Enter valid email: "valid@email.com"
    6. Verify error clears and submission succeeds

    **Expected Results:**
    - Email validation prevents invalid submissions
    - Error message is clear and helpful
    - Valid email allows successful submission

    ---

    ### 4. Content Download Journey

    #### 4.1 Whitepaper Download Access
    **Priority:** P2 - Lead Qualification

    **Steps:**
    1. Navigate to home page
    2. Scroll to footer section
    3. Locate "Download Our Free Whitepapers" section
    4. Click "Reality Check: What Preconstruction Software Really Delivers"
    5. Verify navigation to whitepaper landing page
    6. Verify download or gated form is presented
    7. Repeat for second whitepaper:
    - "3 Preconstruction Software Selection Pitfalls to Avoid"

    **Expected Results:**
    - Whitepaper links are functional
    - Landing pages load successfully
    - Content is relevant to link description
    - Download mechanism works (direct or gated)

    ---

    ### 5. Core Navigation & UX

    #### 5.1 Main Navigation Functionality
    **Priority:** P1 - Site Usability

    **Steps:**
    1. Navigate to home page
    2. Verify header navigation displays:
    - Solutions (dropdown with 4 options)
    - Features (dropdown with multiple modules)
    - Success Stories
    - About (dropdown)
    - Media (dropdown)
    - Contact
    3. Hover over "Solutions" dropdown
    4. Verify submenu appears with all 4 persona links
    5. Hover over "Features" dropdown
    6. Verify submenu displays all feature modules
    7. Click each main navigation item
    8. Verify appropriate page loads

    **Expected Results:**
    - Navigation is consistently visible on all pages
    - Dropdown menus appear on hover/click
    - All navigation links work correctly
    - Mobile navigation functions (if responsive design)
    - Active page indicated in navigation

    ---

    #### 5.2 Homepage Value Proposition Display
    **Priority:** P1 - First Impression

    **Steps:**
    1. Navigate to `https://concntric.com/`
    2. Verify hero section displays:
    - Main headline: "Finally, manage all aspects of preconstruction on one platform"
    - Subheadline describing unified data approach
    - Four key benefits with icons:
        * Win More Work
        * Increase Margin
        * Gain Back Time
        * Reduce Risk
    3. Verify persona navigation cards visible
    4. Verify customer testimonials section loads
    5. Scroll through entire page
    6. Verify all sections load without layout issues

    **Expected Results:**
    - Page loads within 3 seconds
    - Hero section is immediately visible (above fold)
    - All visual elements render correctly
    - No layout shifts during page load
    - Images load with appropriate quality

    ---

    #### 5.3 Contact Information Accessibility
    **Priority:** P2 - Support Access

    **Steps:**
    1. Navigate to any page on site
    2. Scroll to footer
    3. Verify contact information displays:
    - Email: sales@concntric.com
    - Phone: 415-301-2024
    4. Click email link
    5. Verify default email client opens with correct address
    6. Click phone number link
    7. Verify phone dialer opens (on mobile) or number is copyable
    8. Verify social media links:
    - LinkedIn
    - Twitter
    - Instagram
    - YouTube
    9. Click each social link
    10. Verify correct social profile opens in new tab

    **Expected Results:**
    - Contact information visible in footer on all pages
    - Email and phone links are functional (mailto: and tel:)
    - Social media links open correct profiles
    - Links open in new tabs (don't navigate away)

    ---

    ### 6. Trust & Credibility Elements

    #### 6.1 Customer Testimonials Display
    **Priority:** P2 - Social Proof

    **Steps:**
    1. Navigate to home page
    2. Locate customer testimonials section
    3. Verify testimonials display with:
    - Customer name
    - Job title
    - Company name
    - Full testimonial text
    4. Verify testimonial carousel/slider functionality:
    - Navigation arrows work
    - Auto-advance timing (if applicable)
    - Current slide indicator (1/4)
    5. Click through all 4 testimonials

    **Expected Results:**
    - All 4 testimonials are accessible
    - Names, titles, and companies are legible
    - Testimonial text is complete and readable
    - Carousel navigation is intuitive
    - No testimonials are cut off or hidden

    ---

    #### 6.2 Partner Logo Display
    **Priority:** P3 - Credibility

    **Steps:**
    1. Navigate to `/generalcontractors/` page
    2. Scroll to "TRUSTED BY" section
    3. Verify partner logos display:
    - Pankow
    - Hourigan
    4. Verify logos are high quality and properly sized
    5. Check if logos are clickable (optional)

    **Expected Results:**
    - Partner logos render clearly
    - Images are appropriately sized
    - No broken image links
    - Section header "TRUSTED BY" is visible

    ---

    ### 7. Form UX & Accessibility

    #### 7.1 Demo Form - Progressive Disclosure
    **Priority:** P2 - UX Quality

    **Steps:**
    1. Navigate to `/book-a-demo/`
    2. Observe form field organization
    3. Verify logical field grouping:
    - Personal info (Name, Title)
    - Contact info (Email, Phone)
    - Company info (Name, Location)
    - Additional info (How heard, Notes)
    4. Tab through all fields in sequence
    5. Verify tab order is logical
    6. Verify placeholder text is helpful
    7. Verify dropdown menus are accessible

    **Expected Results:**
    - Form fields organized in logical groups
    - Tab order follows visual layout
    - Required fields clearly marked with asterisk
    - Optional field clearly indicated
    - Placeholder text provides guidance
    - Dropdowns display all options
    - Form is keyboard accessible

    ---

    ### 8. BuildingConnected Integration Promotion

    #### 8.1 Integration CTA Display & Navigation
    **Priority:** P2 - Partner Feature

    **Steps:**
    1. Navigate to home page
    2. Locate "Are you a BuildingConnected® User?" section
    3. Verify section displays:
    - Clear headline
    - Value proposition text
    - "Learn More" CTA button
    - Relevant visual/graphic
    4. Click "Learn More" button
    5. Verify navigation to blog article about integration
    6. Verify article content loads correctly

    **Expected Results:**
    - Integration promotion section is visible
    - Content clearly explains benefit
    - CTA button is prominent and functional
    - Blog article loads and is relevant
    - No broken links or 404 errors

    ---

    ## Test Data Requirements

    ### Valid Test Data

    **Demo Form:**
    ```
    First Name: John
    Last Name: Smith
    Job Title: VP of Preconstruction
    Work Email: john.smith@testcompany.com
    Phone: +1 415-555-0123
    Company Name: Test Construction Inc
    Company HQ Location: United States
    How did you hear about us?: Select any option
    Notes: Evaluating preconstruction solutions
    ```

    **Newsletter:**
    ```
    Email: newsletter.test@company.com
    ```

    ### Invalid Test Data

    **Email Validation:**
    ```
    - notanemail
    - missing@domain
    - @nodomain.com
    - spaces in@email.com
    - email@
    - @email.com
    ```

    ## Success Criteria

    ### Conversion Optimization
    - ✅ Demo form submission completion rate > 0% (no technical failures)
    - ✅ All required field validations prevent invalid submissions
    - ✅ Newsletter signup functions without errors
    - ✅ Zero broken links in conversion paths

    ### User Experience
    - ✅ All solution pages load within 3 seconds
    - ✅ Navigation is intuitive and consistent
    - ✅ Forms provide clear validation feedback
    - ✅ Contact information is easily accessible

    ### Content Integrity
    - ✅ All testimonials display correctly
    - ✅ Partner logos render properly
    - ✅ Value propositions are clear and visible
    - ✅ No layout issues or content truncation

    ### Technical Quality
    - ✅ No JavaScript console errors
    - ✅ Forms submit via AJAX without page reload
    - ✅ All external links open in new tabs
    - ✅ Browser back button works correctly

    ## Priority Matrix

    **P0 - Revenue Critical (Block Release)**
    - Demo form submission (1.1, 1.2, 1.3)

    **P1 - Business Impact (Must Fix)**
    - Solution page navigation (2.1)
    - Newsletter signup (3.1)
    - Main navigation (5.1)
    - Homepage display (5.2)

    **P2 - User Experience (Should Fix)**
    - Cross-persona navigation (2.2)
    - Content downloads (4.1)
    - Contact accessibility (5.3)
    - Form UX (7.1)

    **P3 - Nice to Have (Can Defer)**
    - Partner logos (6.2)

    ## Test Environment

    **Browsers:**
    - Chrome (latest)
    - Firefox (latest)
    - Safari (latest)
    - Edge (latest)

    **Devices:**
    - Desktop (1920x1080)
    - Tablet (768x1024)
    - Mobile (375x667)

    **Test Conditions:**
    - Fresh browser session (no cache)
    - Standard network conditions
    - JavaScript enabled
    - Cookies accepted

    ## Automation Recommendations

    **High-Value Automation Targets:**
    1. Demo form validation (E2E journey)
    2. Newsletter signup flow
    3. Solution page navigation paths
    4. Contact link functionality
    5. Form field validation rules

    **Manual Testing Required:**
    - Visual regression (layout, styling)
    - Cross-browser rendering
    - Form submission success confirmation
    - Email delivery verification
    - Phone/email client integration
