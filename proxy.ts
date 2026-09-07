import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Next.js 16 renamed Middleware to Proxy (same functionality). This one keeps a
// single canonical host: any hit on the old production *.vercel.app URL is
// permanently redirected to the custom domain, preserving path and query.
// Preview deployments (q4-playbook-*.vercel.app) keep their own URLs.
const OLD_HOST = "q4-playbook.vercel.app";
const NEW_HOST = "q4-playbook.loyoly.io";

export function proxy(request: NextRequest) {
  if (request.headers.get("host") === OLD_HOST) {
    const url = request.nextUrl.clone();
    url.protocol = "https";
    url.host = NEW_HOST;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
