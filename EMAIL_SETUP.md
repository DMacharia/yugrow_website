cd y    # Email Setup Instructions

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-here
```

## Gmail Setup

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to your Google Account settings
   - Navigate to Security > App passwords
   - Select "Mail" as the app
   - Generate a new app password
   - Use this password (not your regular Gmail password) in the `EMAIL_PASS` variable

## Email Recipient

All emails will be sent to: `danielhuios@gmail.com`

## Features

- Contact form submissions
- Consultation booking requests
- Program interest inquiries
- All CTAs across the website now trigger email functionality

## Testing

1. Set up the environment variables
2. Start the development server: `npm run dev`
3. Test the contact form and CTA buttons
4. Check that emails are received at `danielhuios@gmail.com`
