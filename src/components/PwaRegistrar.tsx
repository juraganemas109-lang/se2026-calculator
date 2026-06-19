'use client';

import { useEffect } from 'react';

export default function PwaRegistrar() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const isLocalhost = 
        window.location.hostname === 'localhost' || 
        window.location.hostname === '127.0.0.1' || 
        window.location.hostname.startsWith('192.168.'); // local network IP
      
      const isHttps = window.location.protocol === 'https:';

      if (isHttps || isLocalhost) {
        window.navigator.serviceWorker.register('/sw.js')
          .then((reg) => {
            console.log('Service Worker registered successfully. Scope:', reg.scope);
          })
          .catch((err) => {
            console.error('Service Worker registration failed:', err);
          });
      }
    }
  }, []);

  return null;
}
