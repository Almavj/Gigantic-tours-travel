import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    // Send notification to site owner
    await resend.emails.send({
      from: 'Gigantic Tours <noreply@gigantic-tours.com>',
      to: 'machariaallan881@gmail.com',
      subject: 'New Newsletter Subscription',
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subscription Date:</strong> ${new Date().toLocaleString()}</p>
        <p>A new user has subscribed to your travel magazine newsletter.</p>
        <hr>
        <p><em>This is an automated message from your website.</em></p>
      `,
    });

    // Send confirmation to subscriber
    await resend.emails.send({
      from: 'Gigantic Tours <noreply@gigantic-tours.com>',
      to: email,
      subject: 'Thanks for subscribing to Gigantic Tours!',
      html: `
        <h2>Welcome to Gigantic Tours!</h2>
        <p>Thank you for subscribing to our travel magazine newsletter.</p>
        <p>You'll receive exclusive travel tips, destination guides, and special offers soon.</p>
        <hr>
        <p><em>If you did not subscribe, you can ignore this email.</em></p>
      `,
    });

    res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to process subscription' });
  }
}
