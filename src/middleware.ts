import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET!

const ADMIN_ROUTE_PERMISSIONS: Record<string, string> = {
  '/admin/competition': 'manage_competitions',
  '/admin/event': 'manage_events',
  '/admin/user': 'manage_users',
  '/admin/event-registration': 'manage_registrations',
  '/admin/competition-registration': 'manage_registrations',
};

const USER_PROTECTED_ROUTES = [
  '/dashboard', 
  '/dashboard/events', 
  '/dashboard/competitions',
  '/dashboard/registrations',
];

export async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl

  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/static/') ||
    pathname.startsWith('/api/') ||
    pathname === '/favicon.ico' ||
    /\.[^\/]+$/.test(pathname)
  ) {
    return NextResponse.next()
  }

  const token = await getToken({ req, secret: NEXTAUTH_SECRET })

  if (pathname.startsWith('/admin')) {
    if (pathname === '/admin' || pathname === '/admin/login' || pathname === '/admin/auth/callback') {
      if (token && token.userType === 'ADMIN') {
        return NextResponse.redirect(new URL('/admin/dashboard', req.url))
      }
      return NextResponse.next()
    }

    if (!token) {
      const url = req.nextUrl.clone()
      url.pathname = '/admin/login'
      url.searchParams.set('next', pathname + search)
      url.searchParams.set('error', 'unauthenticated')
      return NextResponse.redirect(url)
    }

    if (token.userType !== 'ADMIN') {
      const url = new URL('/login', req.url)
      url.searchParams.set('error', 'unauthorized_admin')
      return NextResponse.redirect(url)
    }

    if (pathname !== '/admin/dashboard') {
      const userPermissions = (token.permissions as string[]) || [];
      const requiredPermission = Object.entries(ADMIN_ROUTE_PERMISSIONS)
        .sort((a, b) => b[0].length - a[0].length) 
        .find(([routePath]) => pathname.startsWith(routePath))?.[1];

      if (requiredPermission) {
        const hasAccess = userPermissions.includes('*') || userPermissions.includes(requiredPermission);
        if (!hasAccess) {
          const url = new URL('/admin/dashboard', req.url)
          url.searchParams.set('error', 'forbidden_role')
          return NextResponse.redirect(url)
        }
      }
    }
    return NextResponse.next()
  }

  if (pathname === '/login' || pathname === '/auth/callback') {
    if (token && token.userType !== 'ADMIN') {
      if (token.is_profile_complete === true) {
        return NextResponse.redirect(new URL('/dashboard', req.url)) 
      } else {
        return NextResponse.redirect(new URL('/registration', req.url)) 
      }
    }
    return NextResponse.next()
  }

  if (pathname === '/registration') {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
    if (token.userType === 'ADMIN') {
      return NextResponse.redirect(new URL('/admin/dashboard', req.url))
    }
    if (token.is_profile_complete === true) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
    return NextResponse.next()
  }

  const isUserProtectedRoute = USER_PROTECTED_ROUTES.some(route => pathname.startsWith(route));

  if (isUserProtectedRoute) {
    if (!token) {
      const url = req.nextUrl.clone()
      url.pathname = '/login'
      url.searchParams.set('next', pathname + search)
      url.searchParams.set('error', 'unauthenticated')
      return NextResponse.redirect(url)
    }

    if (token.userType === 'ADMIN') {
      const url = new URL('/admin/dashboard', req.url)
      url.searchParams.set('error', 'unauthorized_user')
      return NextResponse.redirect(url)
    }

    if (token.is_profile_complete === false) {
      const url = req.nextUrl.clone()
      url.pathname = '/registration'
      url.searchParams.set('error', 'profile_incomplete')
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*']
}