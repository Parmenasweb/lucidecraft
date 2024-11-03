import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, req) => {
  const userAgent = req.headers.get("user-agent"); // Access headers directly from req
  console.log("User Agent:", userAgent); // For debugging purposes

  if (isProtectedRoute(req)) auth().protect();
});

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};