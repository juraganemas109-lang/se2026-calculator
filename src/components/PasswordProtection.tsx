'use client';

import React, { useState, useEffect } from 'react';
import { Lock, Key, AlertCircle, LogIn } from 'lucide-react';

export default function PasswordProtection({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check local storage on mount
    const authStatus = localStorage.getItem('is_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Hardcoded password "bps2026"
    setTimeout(() => {
      if (password === 'bps2026') {
        localStorage.setItem('is_authenticated', 'true');
        setIsAuthenticated(true);
      } else {
        setError('Kata sandi salah. Silakan coba lagi.');
      }
      setIsSubmitting(false);
    }, 500); // give a tiny delay to show the spinner for good UX
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4">
        <div className="w-12 h-12 border-4 border-bps-blue border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-500 font-medium">Memeriksa sesi...</p>
      </div>
    );
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 p-8 transform transition-all">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-bps-blue/10 rounded-2xl flex items-center justify-center">
            <Lock className="w-8 h-8 text-bps-blue" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-100 mb-2">
          Akses Aplikasi
        </h1>
        <p className="text-center text-slate-500 dark:text-slate-400 text-sm mb-8">
          Silakan masukkan kata sandi untuk menggunakan SE2026 Smart Calculator. 
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Kata Sandi</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Key className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="password"
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-bps-blue focus:ring-bps-blue/20 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 outline-none focus:ring-4 transition-all"
                required
              />
            </div>
            <p className="text-[10px] text-slate-400 mt-1.5 ml-1">Sandi default: <strong>bps2026</strong></p>
          </div>
          
          {error && (
            <p className="flex items-start gap-1.5 text-xs text-red-500 mt-2 font-medium bg-red-50 dark:bg-red-900/10 p-3 rounded-lg border border-red-100 dark:border-red-800">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </p>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-bps-blue hover:bg-bps-blue-dark text-white font-bold py-3 rounded-xl shadow-lg shadow-bps-blue/20 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100 mt-6"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <><LogIn className="w-5 h-5" /> Masuk ke Kalkulator</>
            )}
          </button>
        </form>
      </div>
      
      <div className="mt-8 text-xs text-slate-400 dark:text-slate-500 font-medium text-center">
        &copy; 2026 Tim SE2026 - Mode Akses Cepat
      </div>
    </div>
  );
}
