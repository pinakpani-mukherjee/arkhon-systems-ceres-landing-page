'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const org = formData.get('org') as string;
  const message = formData.get('message') as string;

  try {
    await resend.emails.send({
      // MUST originate from your verified .com subdomain
      from: 'Arkhon Uplink <system@mail.arkhonsystems.com>',

      // Delivers TO your primary root domain inbox
      to: process.env.CONTACT_EMAIL as string,

      // When you hit "Reply" in your inbox, it goes to the person who filled out the form
      replyTo: email,

      subject: `[UPLINK] New Transmission from ${name}`,
      text: `
        UPLINK ESTABLISHED
        -----------------------------------------
        Sender: ${name}
        Contact: ${email}
        Organization: ${org || 'None Provided'}
        
        MESSAGE PAYLOAD:
        -----------------------------------------
        ${message}
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Resend Error:', error);
    return { success: false, error: 'Failed to transmit payload.' };
  }
}
