'use server';

// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
// const baseUrl =
//   process.env.NODE_ENV === 'production' ? `https://boboweike.cn` : 'http://localhost:3000';

/**
 * send a signup email that will use resend to send an email
 * using the template from the app/email package
 */
export const sendUserSignupEmail = async (to: string) => {
  // TODO send the email
  console.log('Sending email to[TODO]', to);

  return {
    emailId: '112233',
    to,
  };
};
