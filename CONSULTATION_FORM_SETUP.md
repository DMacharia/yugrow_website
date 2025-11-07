# Consultation Form Setup Guide

## Overview

All "Speak with a coach" and consultation booking buttons now link to a Google Form. You need to create this form and update the URL in the code.

## Google Form Setup Instructions

### 1. Create a New Google Form

Go to [Google Forms](https://forms.google.com) and create a new form titled "Book Your Career Coaching Consultation"

### 2. Required Form Fields

Include the following questions in your Google Form:

#### Basic Information
  
- **Full Name** (Short answer, Required)
- **Email Address** (Short answer, Required, Email validation)
- **Phone Number** (Short answer, Required)
- **Current Location** (Short answer or Dropdown)

#### Career Background

- **Current Job Title/Role** (Short answer)
- **Years of Experience** (Multiple choice or Short answer)
- **Current Career Stage** (Multiple choice)
  - Options: Entry Level, Early Career, Mid-Career, Senior/Executive, Career Transition
- **Industry/Field** (Short answer or Dropdown)

#### Consultation Goals

- **What would you like to discuss in your consultation?** (Paragraph, Required)
  - Examples: Career transition, Job search strategy, Interview preparation, Career growth, Leadership development, etc.
- **What are your main career challenges?** (Checkboxes)
  - Options: Lack of confidence, Unclear career direction, Interview anxiety, Networking difficulties, Salary negotiation, Work-life balance, Other
- **What are your career goals for the next 6-12 months?** (Paragraph)

#### Preferred Consultation Details

- **Preferred Date/Time** (Date/Time picker or Short answer)
- **How did you hear about Yugrow?** (Multiple choice)
  - Options: Website, Social Media, Referral, Previous Client, Other

#### Payment Information Section

Add a section header: "Payment Instructions"

Include this information (as text/description, not a form field):

```
To complete your booking, please make payment using the following details:

Payment Method: M-Pesa
Paybill Number: 400200
Till Number: 150559

Payment Amount: Please contact us for the consultation fee

After making payment, please upload a screenshot of your M-Pesa confirmation in the field below.
```

- **M-Pesa Payment Confirmation** (File upload)
  - Instructions: "Upload a screenshot of your M-Pesa payment confirmation"
  - File types: Images only (JPG, PNG)

#### Optional Fields

- **Any additional information you'd like to share** (Paragraph)
- **Preferred method of follow-up** (Multiple choice)
  - Options: Email, Phone call, WhatsApp

### 3. Form Settings

- Set the form to collect email addresses
- Enable "Require email sign-in" (optional, for better data security)
- Enable "Limit to 1 response" (optional, to prevent duplicate submissions)
- Add a custom confirmation message that includes:
  ```
  Thank you for booking your consultation! We'll review your information and payment confirmation, then contact you within 24-48 hours to confirm your session time.
  ```

### 4. Update the Form URL in Code

After creating your Google Form, get the shareable link and update it in:

- **File**: `src/components/cta-button.tsx`
- **Line**: Replace the `CONSULTATION_FORM_URL` constant with your actual Google Form URL

Example:

```typescript
const CONSULTATION_FORM_URL =
  "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";
```

### 5. Test the Integration

1. Click any "Speak with a coach" or "Book a Session" button on the website
2. Verify it opens the Google Form in a new tab
3. Test the form submission flow
4. Ensure payment instructions are clearly visible

## Payment Details Reference

- **Paybill Number**: 400200
- **Till Number**: 150559
- **Payment Method**: M-Pesa

## Current Implementation

All consultation booking buttons automatically link to the Google Form:

- "Speak with a coach" button on homepage
- "Book a Session" button on About page
- "Book Your Free Consultation" button on About page

Any button with `ctaType="consultation"` will automatically link to this form.
