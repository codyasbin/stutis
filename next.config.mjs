// next.config.mjs
// ✅ Full Next.js PWA configuration (App Router + ESM version)
// Install next-pwa: npm install next-pwa

import nextPWA from 'next-pwa';
import { fileURLToPath } from 'url';

const runtimeCaching = [
  {
    // Handle all navigations (pages)
    urlPattern: ({ request }) => request.mode === 'navigate',
    handler: 'NetworkFirst',
    options: {
      cacheName: 'pages-cache',
      networkTimeoutSeconds: 10,
      expiration: { maxEntries: 50, maxAgeSeconds: 7 * 24 * 60 * 60 },
    },
  },
  {
    // API requests (update domain to yours)
    urlPattern: /^https?:\/\/(api\.)?your-domain\.com\/.*$/i,
    handler: 'NetworkFirst',
    options: {
      cacheName: 'api-cache',
      networkTimeoutSeconds: 10,
      expiration: { maxEntries: 100, maxAgeSeconds: 24 * 60 * 60 },
      cacheableResponse: { statuses: [0, 200] },
    },
  },
  {
    // JS, CSS, JSON files
    urlPattern: /\.(?:js|css|json)$/i,
    handler: 'StaleWhileRevalidate',
    options: {
      cacheName: 'static-resources',
      expiration: { maxEntries: 100, maxAgeSeconds: 30 * 24 * 60 * 60 },
    },
  },
  {
    // Images
    urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/i,
    handler: 'CacheFirst',
    options: {
      cacheName: 'image-cache',
      expiration: { maxEntries: 200, maxAgeSeconds: 60 * 24 * 60 * 60 },
    },
  },
  {
    // Google Fonts
    urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
    handler: 'StaleWhileRevalidate',
    options: {
      cacheName: 'google-fonts-cache',
      expiration: { maxEntries: 30, maxAgeSeconds: 365 * 24 * 60 * 60 },
    },
  },
];

// ✅ Create the PWA plugin with options
const withPWA = nextPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  buildExcludes: [/middleware-manifest\.json$/],
  runtimeCaching,
  fallbacks: {
    document: '/offline.html',
    image: '/icons/icon-192.png',
  },
});

// ✅ Export Next.js config (ESM way)
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.example.com', 'cdn.your-cdn.com'],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'no-referrer-when-downgrade' },
          { key: 'Permissions-Policy', value: 'geolocation=(), microphone=()' },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.your-domain.com/:path*',
      },
    ];
  },
  trailingSlash: false,
};

// ✅ Export final config with plugin applied
export default withPWA(nextConfig);
