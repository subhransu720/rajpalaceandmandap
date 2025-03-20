import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// Add runtime configuration for Edge
export const runtime = 'edge';

/**
 * API route handler for contact form submissions
 * 
 * This endpoint receives form data, validates it, and sends an email notification
 * with the contact details and booking request information.
 * 
 * The email is formatted with a professional template that includes:
 * - Client's contact information (name, email, phone)
 * - Event details (type, date)
 * - Client's message
 * - Quick response section with contact options
 */

// Initialize Gmail API
const oauth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.GMAIL_REDIRECT_URI
);

oauth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESH_TOKEN,
});

const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json();
    const { name, email, phone, eventType, date, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, email, phone, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Booking Request from Raj Palace Convention Website

Contact Details:
Name: ${name}
Email: ${email}
Phone: ${phone}

Event Details:
Event Type: ${eventType || 'Not specified'}
Event Date: ${date || 'Not specified'}

Message:
${message}

Please respond to this request as soon as possible.
    `;

    // Create email in base64 format
    const emailLines = [
      `From: ${process.env.EMAIL_USER}`,
      `To: ${process.env.EMAIL_RECIPIENT}`,
      'Content-Type: text/plain; charset=utf-8',
      'MIME-Version: 1.0',
      `Subject: New Booking Request from ${name}`,
      '',
      emailContent,
    ];

    const email = emailLines.join('\r\n').trim();
    const base64EncodedEmail = Buffer.from(email).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    // Send email using Gmail API
    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: base64EncodedEmail,
      },
    });

    // Return success response
    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
} 