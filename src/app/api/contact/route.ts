import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Use Node.js runtime instead of Edge
export const runtime = 'nodejs';

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

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json();
    const { name, email: senderEmail, phone, eventType, date, message } = body;

    // Validate required fields
    if (!name || !senderEmail || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, email, phone, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(senderEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      secure: true,
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify transporter connection
    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log('Transporter verification error:', error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    // Create formatted HTML for the email
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h1 style="color: #4b0082; text-align: center; margin-bottom: 20px; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">New Booking Request</h1>
        
        <div style="margin-bottom: 20px;">
          <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${senderEmail}</p>
          <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
          ${eventType ? `<p style="margin: 5px 0;"><strong>Event Type:</strong> ${eventType}</p>` : ''}
          ${date ? `<p style="margin: 5px 0;"><strong>Event Date:</strong> ${date}</p>` : ''}
        </div>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <h3 style="color: #4b0082; margin-top: 0;">Message:</h3>
          <p style="white-space: pre-line;">${message}</p>
        </div>
        
        <div style="background-color: #fffaf0; padding: 15px; border-radius: 5px; border-left: 4px solid #d4af37;">
          <h3 style="color: #4b0082; margin-top: 0;">Quick Response:</h3>
          <p>You can directly contact this customer by:</p>
          <ul>
            <li>Calling or texting their phone: ${phone}</li>
            <li>Replying to their email: ${senderEmail}</li>
          </ul>
        </div>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: senderEmail,
      to: process.env.EMAIL_RECIPIENT,
      subject: `New Booking Request from ${name}`,
      html: emailHtml,
    };

    // Send email with proper promise handling
    const info = await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error('Error sending email:', err);
          reject(err);
        } else {
          console.log('Email sent successfully:', info);
          resolve(info);
        }
      });
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