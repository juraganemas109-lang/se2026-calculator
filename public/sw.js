const CACHE_VERSION = 'v2.1.0';
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `dynamic-${CACHE_VERSION}`;

const STATIC_ASSETS = [
  '/manifest.json',
  '/favicon.ico',
];

// Helper to determine if request is for static asset (images, fonts, etc.)
const isStaticAsset = (url) => {
  const staticExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.webp', '.ico', '.woff', '.woff2', '.ttf'];
  return staticExtensions.some(ext => url.pathname.toLowerCase().endsWith(ext));
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  // Auto-update: force waiting worker to become active
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete all caches that don't match the current version
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Clients Claim to control all open pages immediately
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Skip dev hot reload, extensions, and non-http protocols
  if (
    url.pathname.includes('/_next/webpack-hmr') || 
    url.pathname.includes('/_next/static/development') ||
    (url.protocol !== 'http:' && url.protocol !== 'https:')
  ) {
    return;
  }

  // CACHE FIRST STRATEGY for Static Assets (Images, Icons, Fonts)
  if (isStaticAsset(url)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put(event.request, responseToCache));
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // NETWORK FIRST STRATEGY for HTML, Next.js Routes, APIs, and JS Chunks
  // This guarantees fresh data. If offline, falls back to cache.
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Cache the fresh network response if valid
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => cache.put(event.request, responseToCache));
        }
        return networkResponse;
      })
      .catch(async () => {
        // Network failed (offline or server unreachable), fallback to cache
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }
        // If it's a navigation request and we are completely offline and have nothing in cache,
        // we normally would return an offline fallback page here. But since we use Network First, 
        // returning nothing will let the browser handle the offline error normally instead of 
        // serving a broken login page or blank screen.
        throw new Error('Network and Cache failed');
      })
  );
});
