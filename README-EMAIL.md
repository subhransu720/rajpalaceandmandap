# Email Notification System for Raj Palace Convention

This document explains how to set up and use the email notification system for booking requests on the Raj Palace Convention website.

## Overview

The system sends email notifications whenever a client submits a booking request through the contact form. The email includes:

- Client's contact information (name, email, phone)
- Event details (type, date)
- Client's message
- Quick response options for contacting the client

## Setup Instructions

### 1. Configure Environment Variables

Edit the `.env.local` file at the root of the project and update the following variables:

```
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
EMAIL_RECIPIENT=your-recipient-email@example.com
```

### 2. Gmail App Password (Required for Gmail)

If you're using Gmail, you need to create an App Password:

1. Go to your Google Account
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled
4. Go to App passwords
5. Select "Other" as the app and give it a name (e.g., "Raj Palace Website")
6. Copy the 16-character password and use it as your `EMAIL_PASSWORD`

### 3. Other Email Providers

If you want to use a different email provider:

1. Open `src/app/api/contact/route.ts`
2. Modify the nodemailer transporter configuration to match your provider's requirements

Example for other providers:
```typescript
// For Outlook/Hotmail
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// For custom SMTP server
const transporter = nodemailer.createTransport({
  host: 'smtp.your-email-provider.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
```

## Email Template

The email is formatted with a professional template that includes:

1. A header with "New Booking Request"
2. Client's contact information
3. Event details
4. Client's message
5. Quick response options

You can modify the template in `src/app/api/contact/route.ts` by editing the `emailHtml` variable.

## Testing

To test if the email system is working:

1. Set up the environment variables
2. Run the development server: `npm run dev`
3. Go to the contact page and submit a test form
4. Check your recipient email inbox for the notification

## Troubleshooting

If emails are not being sent:

1. Check if you've entered the correct credentials in `.env.local`
2. For Gmail, ensure you're using an App Password, not your regular password
3. Check console logs for any error messages
4. Verify that your email provider doesn't block automated emails
5. If using Gmail, check if "Less secure app access" needs to be enabled

## Security Considerations

- Never commit your email credentials to version control
- Always use environment variables for sensitive information
- Consider using email services like SendGrid or Mailgun for production environments
- Implement rate limiting to prevent form spam

## Support

If you need help with the email notification system, contact the developer or refer to the NodeMailer documentation at https://nodemailer.com/ 