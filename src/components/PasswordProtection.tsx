'use client';

import React, { useState, useEffect } from 'react';
import { Lock, AlertCircle } from 'lucide-react';

export default function PasswordProtection({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    // Cek di localStorage apakah sudah pernah login
    const authStatus = localStorage.getItem('se2026_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPassword = process.env.NEXT_PUBLIC_APP_PASSWORD;
    
    // Jika environment variable tidak disetel, izinkan masuk (mode fallback/development)
    if (!correctPassword) {
      console.warn("NEXT_PUBLIC_APP_PASSWORD is not set. Allowing access.");
      setIsAuthenticated(true);
      localStorage.setItem('se2026_auth', 'true');
      return;
    }

    if (passwordInput === correctPassword) {
      setIsAuthenticated(true);
      localStorage.setItem('se2026_auth', 'true');
      setError(false);
    } else {
      setError(true);
      setPasswordInput('');
    }
  };

  // Jangan tampilkan apa-apa sebelum status dicek untuk menghindari flicker
  if (isAuthenticated === null) {
    return null;
  }

  // Jika sudah terautentikasi, tampilkan aplikasi utama
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Jika belum, tampilkan halaman gembok
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 p-8 transform transition-all">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-bps-blue/10 rounded-2xl flex items-center justify-center">
            <Lock className="w-8 h-8 text-bps-blue" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-100 mb-2">
          Halaman Terkunci
        </h1>
        <p className="text-center text-slate-500 dark:text-slate-400 text-sm mb-8">
          Aplikasi ini bersifat rahasia. Masukkan password yang telah diberikan untuk mengakses kalkulator SE2026.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="password"
              placeholder="Masukkan password..."
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border ${
                error 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20 bg-red-50 dark:bg-red-900/10 dark:border-red-800' 
                  : 'border-slate-200 dark:border-slate-700 focus:border-bps-blue focus:ring-bps-blue/20 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100'
              } outline-none focus:ring-4 transition-all`}
              autoFocus
            />
            {error && (
              <p className="flex items-center gap-1.5 text-xs text-red-500 mt-2 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                Password salah. Silakan coba lagi.
              </p>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full bg-bps-blue hover:bg-bps-blue-dark text-white font-bold py-3 rounded-xl shadow-lg shadow-bps-blue/20 transition-all hover:scale-[1.02] active:scale-95"
          >
            Masuk ke Aplikasi
          </button>
        </form>
      </div>
      
      <div className="mt-8 text-xs text-slate-400 dark:text-slate-500 font-medium">
        &copy; 2026 Tim SE2026
      </div>
    </div>
  );
}
