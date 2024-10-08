import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // 重定向
    if (request.nextUrl.pathname === '/') {
        return NextResponse.rewrite(new URL('/home', request.url))
    }
}
 
export const config = {
  matcher: '/',
}