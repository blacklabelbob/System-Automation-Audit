import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export const sendAuditResults = async (to: string, subject: string, text: string, html: string) => {
  const msg = {
    to,
    from: 'your-verified-sender@example.com', // Change this to your SendGrid verified sender
    subject,
    text,
    html,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};