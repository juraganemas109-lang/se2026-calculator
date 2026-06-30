'use client';
import React, { useState, useEffect } from 'react';
import { BusinessForm } from '@/components/calculator/BusinessForm';
import { Overview } from '@/components/dashboard/Overview';
import { BusinessRecord } from '@/utils/calculatorHelper';
import { PrintReport } from '@/components/calculator/PrintReport';
import { Calculator, LayoutDashboard, Database, Briefcase, HelpCircle, LogOut, RefreshCw } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { supabaseService } from '@/lib/supabaseService';
import { supabase } from '@/lib/supabase';

export default function Home() {
  const [records, setRecords] = useState<BusinessRecord[]>([]);
  const [activeTab, setActiveTab] = useState<'calculator' | 'dashboard' | 'analytics'>('calculator');
  const [isClient, setIsClient] = useState(false);
  const { user } = useAuth();
  
  // Edit State
  const [editRecord, setEditRecord] = useState<BusinessRecord | null>(null);

  const handleResetCache = async () => {
    if (window.confirm('Yakin ingin mereset cache aplikasi? Ini akan memperbaiki masalah jika halaman sering gagal dimuat.')) {
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (let reg of registrations) {
          await reg.unregister();
        }
      }
      if ('caches' in window) {
        const keys = await caches.keys();
        for (let key of keys) {
          await caches.delete(key);
        }
      }
      window.location.reload();
    }
  };

  useEffect(() => {
    setIsClient(true);
    if (user?.id) {
      supabaseService.getUserRecords(user.id)
        .then(data => {
          setRecords(data);
        })
        .catch(err => {
          console.error('Failed to fetch cloud records', err);
        });
    }
  }, [user]);

  const syncToCloud = async (newRecords: BusinessRecord[], modifiedRecord?: BusinessRecord, deleteId?: string) => {
    setRecords(newRecords);
    if (user?.id) {
      try {
        if (modifiedRecord) {
          await supabaseService.saveRecord(user.id, modifiedRecord);
        }
        if (deleteId) {
          await supabaseService.deleteRecord(user.id, deleteId);
        }
      } catch (e) {
        console.error("Failed to sync to cloud", e);
        alert("Gagal menyinkronisasi ke Cloud. Silakan periksa koneksi internet Anda.");
      }
    }
  };

  const handleSaveRecord = (record: BusinessRecord) => {
    const existingIndex = records.findIndex(r => r.id === record.id);
    let newRecords;
    
    if (existingIndex >= 0) {
      newRecords = [...records];
      newRecords[existingIndex] = record;
    } else {
      newRecords = [record, ...records];
    }
    
    syncToCloud(newRecords, record);
    setEditRecord(null);
    setActiveTab('dashboard');
  };

  const handleDeleteRecord = (id: string) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus data responden ini?')) {
      const newRecords = records.filter(r => r.id !== id);
      syncToCloud(newRecords, undefined, id);
    }
  };

  const handleEditRecord = (record: BusinessRecord) => {
    setEditRecord(record);
    setActiveTab('calculator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalResponden = records.length;
  const totalUsaha = records.reduce((sum, r) => sum + r.businesses.filter(b => b.isActive).length, 0);

  if (!isClient) return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Memuat...</div>;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-blue-200">
      {/* HEADER NAVBAR */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-xl shadow-md">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700 hidden sm:block">
                  SE2026 Smart Calculator
                </h1>
                <h1 className="text-xl font-bold text-blue-700 sm:hidden">SE2026</h1>
                <p className="text-xs font-medium text-slate-500 hidden sm:block">Sensus Ekonomi 2026 - Asisten Pendataan</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button onClick={handleResetCache} className="px-3 py-1.5 text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-600 rounded-lg flex items-center gap-1.5 transition-colors" title="Perbaiki error gagal muat">
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset Cache</span>
              </button>
              <button onClick={() => supabase.auth.signOut()} className="px-3 py-1.5 text-xs font-bold bg-red-50 hover:bg-red-100 text-red-600 rounded-lg flex items-center gap-1.5 transition-colors">
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Keluar</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* QUICK STATS */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-6 mb-8 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-white">
              <p className="text-blue-100 text-xs font-medium mb-1 uppercase tracking-wider">Total Responden</p>
              <p className="text-2xl font-bold">{totalResponden}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-white">
              <p className="text-blue-100 text-xs font-medium mb-1 uppercase tracking-wider">Total Usaha Aktif</p>
              <p className="text-2xl font-bold">{totalUsaha}</p>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* TABS */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-sm border border-gray-200">
            <button
              onClick={() => { setActiveTab('calculator'); setEditRecord(null); }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${activeTab === 'calculator' ? 'bg-blue-50 text-blue-700 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
            >
              <Calculator className="w-4 h-4" />
              <span className="hidden sm:inline">Input Data Baru</span>
            </button>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${activeTab === 'dashboard' ? 'bg-indigo-50 text-indigo-700 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
            >
              <Database className="w-4 h-4" />
              <span className="hidden sm:inline">Database ({records.length})</span>
            </button>
          </div>
        </div>

        {/* TAB CONTENTS */}
        <div className="transition-all duration-500">
          {activeTab === 'calculator' && (
            <div className="animate-fade-in-up">
              <BusinessForm onSave={handleSaveRecord} editRecord={editRecord} onCancelEdit={() => setActiveTab('dashboard')} />
            </div>
          )}
          {activeTab === 'dashboard' && (
             <div className="animate-fade-in-up">
               <Overview records={records} onDelete={handleDeleteRecord} onEdit={handleEditRecord} />
             </div>
          )}
        </div>
      </main>
    </div>
  );
}
