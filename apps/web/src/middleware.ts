import { NextResponse, type NextRequest } from 'next/server';

const STAGING_DOMAIN = 'staging.boboweike.cn';
export function middleware(req: NextRequest) {
  const vercelEnv = process.env.VERCEL_ENV || process.env.NEXT_PUBLIC_VERCEL_ENV;
  if (!vercelEnv || vercelEnv === STAGING_DOMAIN) {
    return NextResponse.next();
  }
  const path = req.nextUrl.pathname;

  // if path is /explore or /challenge/* and redirect to /waitlist
  if (path === '/explore' || path.startsWith('/challenge/') || path.startsWith('/tracks/')) {
    return NextResponse.redirect(new URL('/waitlist', req.url));
  }

  return NextResponse.next();
}
