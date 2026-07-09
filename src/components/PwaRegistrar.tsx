'use client';

import { useEffect } from 'react';

export default function PwaRegistrar() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      if (process.env.NODE_ENV === 'development') {
        // DEVELOPMENT: Unregister SW and clear caches
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          for (let registration of registrations) {
            registration.unregister();
          }
        });
        if ('caches' in window) {
          caches.keys().then((keys) => {
            keys.forEach((key) => caches.delete(key));
          });
        }
        console.log('Development mode: Service Worker and Caches cleared.');
        return;
      }

      // PRODUCTION: Register SW and listen for updates
      const isLocalhost = 
        window.location.hostname === 'localhost' || 
        window.location.hostname === '127.0.0.1' || 
        window.location.hostname.startsWith('192.168.');
      
      const isHttps = window.location.protocol === 'https:';

      if (isHttps || isLocalhost) {
        window.navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered successfully. Scope:', registration.scope);
            
            // Listen for updates
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing;
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    // New service worker available and old one is controlling
                    console.log('New content is available; refreshing...');
                    // The new SW has skipWaiting, so it activates immediately.
                    // We just need to reload to use the new SW.
                    window.location.reload();
                  }
                });
              }
            });
          })
          .catch((err) => {
            console.error('Service Worker registration failed:', err);
          });
          
        // Listen for controller change (when skipWaiting activates new SW)
        let refreshing = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (!refreshing) {
            refreshing = true;
            window.location.reload();
          }
        });
      }
    }
  }, []);

  return null;
}
