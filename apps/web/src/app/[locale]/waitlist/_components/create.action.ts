'use server';

import { prisma } from '@repo/db';
import { Resend } from 'resend';
import type { WaitlistFormSchema } from './waitlist-form';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function uploadWaitlistEntry(data: WaitlistFormSchema) {
  const isUser = data.intention === 'user';
  const isBuilder = data.intention === 'builder';

  const existingEntry = await prisma.waitlist.findFirst({
    where: {
      email: data.email,
    },
  });

  if (existingEntry) {
    return 'duplicate';
  }

  await prisma.waitlist.create({
    data: {
      name: data.name,
      email: data.email,
      intention: isUser ? 'USER' : isBuilder ? 'BUILDER' : 'BOTH',
    },
  });

  // TODO send email
}
