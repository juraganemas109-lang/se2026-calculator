'use client';

import React, { useState } from 'react';
import { Lock, Mail, Key, AlertCircle, LogIn, UserPlus } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      if (isLoginMode) {
        const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        if (signInError) throw signInError;
      } else {
        const { error: signUpError } = await supabase.auth.signUp({ email, password });
        if (signUpError) throw signUpError;
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4">
        <div className="w-12 h-12 border-4 border-bps-blue border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-500 font-medium">Memeriksa sesi...</p>
      </div>
    );
  }

  if (user) {
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
          {isLoginMode ? 'Masuk ke Akun' : 'Daftar Akun Baru'}
        </h1>
        <p className="text-center text-slate-500 dark:text-slate-400 text-sm mb-8">
          {isLoginMode 
            ? 'Masuk menggunakan email untuk mensinkronisasi data kuesioner Anda.' 
            : 'Buat akun baru untuk menyimpan data kuesioner Anda di Cloud.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="email"
                placeholder="email@contoh.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-bps-blue focus:ring-bps-blue/20 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 outline-none focus:ring-4 transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Key className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="password"
                placeholder="Minimal 6 karakter"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-bps-blue focus:ring-bps-blue/20 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 outline-none focus:ring-4 transition-all"
                required
                minLength={6}
              />
            </div>
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
            ) : isLoginMode ? (
              <><LogIn className="w-5 h-5" /> Masuk</>
            ) : (
              <><UserPlus className="w-5 h-5" /> Daftar Sekarang</>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button 
            type="button"
            onClick={() => {
              setIsLoginMode(!isLoginMode);
              setError('');
            }}
            className="text-sm text-bps-blue font-semibold hover:underline"
          >
            {isLoginMode ? 'Belum punya akun? Daftar di sini' : 'Sudah punya akun? Masuk di sini'}
          </button>
        </div>
      </div>
      
      <div className="mt-8 text-xs text-slate-400 dark:text-slate-500 font-medium">
        &copy; 2026 Tim SE2026 - Data tersimpan aman di Cloud
      </div>
    </div>
  );
}
