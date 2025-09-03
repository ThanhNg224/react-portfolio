// Alternative: Use react-snap with updated Puppeteer
// If you want to try react-snap again later with a fix:

// Option 1: Install react-snap-prerendering (more modern fork)
// pnpm add --save-dev react-snap-prerendering

// Option 2: Use @preact/render-to-string for server-side rendering
// pnpm add --save-dev @preact/render-to-string

// Option 3: Manual prerendering script (most reliable)
// Create a Node.js script that uses Puppeteer directly

// For now, the static meta tags in public/index.html guarantee
// that the HOME page will have proper social media previews,
// which is the most important page for sharing.

// The subpages will still work for direct visits, just won't
// have prerendered meta tags for social media crawlers.
