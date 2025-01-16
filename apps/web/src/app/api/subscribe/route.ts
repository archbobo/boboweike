// import mailchimp from '@mailchimp/mailchimp_marketing';

// const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
// mailchimp.setConfig({
//   apiKey: process.env.MAILCHIMP_API_KEY,
//   server: process.env.MAILCHIMP_API_SERVER,
// });

// TODO: Implement the POST method to add a new subscriber to your Mailchimp Audience

export async function POST(req: Request) {
  const { name: NAME, email, intention: REASON } = await req.json();

  const merge_fields = {
    NAME,
    REASON,
  };

  try {
    // const response = await mailchimp.lists.addListMember(AUDIENCE_ID!, {
    //   email_address: email,
    //   status: 'subscribed',
    //   merge_fields,
    // });

    // return new Response(JSON.stringify(response), {
    //   status: Number(response.status),
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    // });
    const response = {
      status: 200,
      id: '123',
      email_address: email,
      merge_fields,
    };
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    });
  } catch (error) {
    // @ts-ignore
    return new Response(error.response.text, {
      status: 500,
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
