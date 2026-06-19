'use client';

import React, { useState, useEffect } from 'react';
import { BusinessRecord } from '@/utils/calculatorHelper';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { BusinessForm } from '@/components/calculator/BusinessForm';
import { Overview } from '@/components/dashboard/Overview';
import { AnalyticsCharts } from '@/components/dashboard/AnalyticsCharts';
import { OfflineManager } from '@/components/OfflineManager';
import { PrintReport } from '@/components/calculator/PrintReport';
import { Calculator, LayoutDashboard, Database, Briefcase, HelpCircle } from 'lucide-react';

export default function Home() {
  const [records, setRecords] = useState<BusinessRecord[]>([]);
  const [activeTab, setActiveTab] = useState<'calculator' | 'dashboard' | 'database'>('calculator');
  const [editRecord, setEditRecord] = useState<BusinessRecord | null>(null);
  const [selectedDashboardId, setSelectedDashboardId] = useState<string | 'all'>('all');
  const [printRecord, setPrintRecord] = useState<BusinessRecord | null>(null);
  const [isClient, setIsClient] = useState<boolean>(false);

  // Load records from local storage on client mount
  useEffect(() => {
    setIsClient(true);
    const stored = localStorage.getItem('se2026_records');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        console.log("DATA_LOADED_FROM_DB", parsed);
        setRecords(parsed);
      } catch (e) {
        console.error('Failed to parse stored records', e);
      }
    }
  }, []);

  // Save records to local storage on changes
  const saveToLocalStorage = (newRecords: BusinessRecord[]) => {
    setRecords(newRecords);
    localStorage.setItem('se2026_records', JSON.stringify(newRecords));
  };

  const handleSaveRecord = (record: BusinessRecord) => {
    const existsIdx = records.findIndex(r => r.id === record.id);
    let updatedRecords: BusinessRecord[] = [];

    if (existsIdx > -1) {
      // Update existing record
      updatedRecords = [...records];
      updatedRecords[existsIdx] = record;
      alert(`Berhasil memperbarui data usaha "${record.identity.namaUsaha}"!`);
    } else {
      // Insert new record
      updatedRecords = [record, ...records];
      alert(`Berhasil menyimpan data usaha "${record.identity.namaUsaha}" secara offline!`);
    }

    saveToLocalStorage(updatedRecords);
    console.log("DATA_SAVED", record); // Using 'record' as the savedRecord to match what user typed? No, 'updatedRecords' has all. But user asked for savedRecord, let's log the single record.
    console.log("DATA_SAVED_ALL", updatedRecords);
    setEditRecord(null);
    setSelectedDashboardId(record.id);
    
    // Switch to database list view to inspect results
    setActiveTab('database');
  };

  const handleDeleteRecord = (id: string) => {
    const updated = records.filter(r => r.id !== id);
    saveToLocalStorage(updated);
    if (selectedDashboardId === id) {
      setSelectedDashboardId('all');
    }
    if (editRecord?.id === id) {
      setEditRecord(null);
    }
  };

  const handleImportRecords = (newRecords: BusinessRecord[]) => {
    // Avoid exact duplicate IDs by merging
    const merged = [...records];
    newRecords.forEach(newRec => {
      const idx = merged.findIndex(r => r.id === newRec.id);
      if (idx > -1) {
        merged[idx] = newRec; // overwrite
      } else {
        merged.unshift(newRec); // prepend
      }
    });
    saveToLocalStorage(merged);
  };

  const handleEditTrigger = (record: BusinessRecord) => {
    setEditRecord(record);
    setActiveTab('calculator');
  };

  const handleSelectForPrint = (id: string) => {
    const found = records.find(r => r.id === id);
    if (found) {
      setPrintRecord(found);
    }
  };

  // Safe checks for dashboard rendering
  const dashboardRecord = React.useMemo(() => {
    if (records.length === 0) return null;
    if (selectedDashboardId === 'all') return records[0]; // fallback to first record
    return records.find(r => r.id === selectedDashboardId) || records[0];
  }, [records, selectedDashboardId]);

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-bps-blue border-t-transparent rounded-full animate-spin" />
          <span className="text-sm font-semibold text-slate-500">Memuat Aplikasi...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 md:pb-6 flex flex-col transition-colors duration-300">
      
      {/* Off-screen printing area template */}
      <PrintReport record={printRecord || (records.length > 0 ? records[0] : null)} />

      {/* Main layout container (hidden during print) */}
      <div className="print:hidden w-full flex flex-col flex-1">
        
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 border-b border-slate-100 dark:border-slate-800 backdrop-blur px-4 md:px-8 py-3.5 flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-3">
            {/* Logo placeholder layout */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-bps-blue to-bps-green flex items-center justify-center text-white shadow-md font-black text-sm">
              SE
            </div>
            <div>
              <h1 className="text-sm md:text-base font-extrabold text-slate-800 dark:text-slate-100 flex items-center gap-1.5 leading-none">
                <span>SE2026 Smart Calculator</span>
                <span className="px-1.5 py-0.5 text-[9px] bg-bps-blue/10 text-bps-blue dark:bg-bps-blue/20 dark:text-bps-blue-light rounded font-bold uppercase tracking-wider">
                  BPS
                </span>
              </h1>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold mt-1">
                Kalkulator & Database Komponen Usaha Petugas Lapangan
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </header>

        {/* Main Content area */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6 md:px-8 flex flex-col gap-6">
          
          {/* Desktop Navigation Tabs */}
          <div className="hidden md:flex bg-slate-200/50 dark:bg-slate-900/50 p-1.5 rounded-xl border border-slate-200/30 dark:border-slate-800/30 w-fit self-center gap-1.5">
            <button
              onClick={() => setActiveTab('calculator')}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-lg transition-all active:scale-95 ${
                activeTab === 'calculator'
                  ? 'bg-white dark:bg-slate-800 text-bps-blue dark:text-bps-blue-light shadow-sm'
                  : 'text-slate-500 hover:bg-white/40 dark:hover:bg-slate-800/40'
              }`}
            >
              <Calculator className="w-4 h-4" />
              Kalkulator Survey
            </button>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-lg transition-all active:scale-95 ${
                activeTab === 'dashboard'
                  ? 'bg-white dark:bg-slate-800 text-bps-blue dark:text-bps-blue-light shadow-sm'
                  : 'text-slate-500 hover:bg-white/40 dark:hover:bg-slate-800/40'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard Analisis
            </button>
            <button
              onClick={() => setActiveTab('database')}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-lg transition-all active:scale-95 ${
                activeTab === 'database'
                  ? 'bg-white dark:bg-slate-800 text-bps-blue dark:text-bps-blue-light shadow-sm'
                  : 'text-slate-500 hover:bg-white/40 dark:hover:bg-slate-800/40'
              }`}
            >
              <Database className="w-4 h-4" />
              Database Usaha ({records.length})
            </button>
          </div>

          {/* Render Active View Panels */}
          <div className="flex-1 w-full">
            {activeTab === 'calculator' && (
              <div className="w-full max-w-3xl mx-auto">
                <BusinessForm 
                  onSave={handleSaveRecord}
                  editRecord={editRecord}
                  onCancelEdit={() => setEditRecord(null)}
                />
              </div>
            )}

            {activeTab === 'dashboard' && (
              <div className="flex flex-col gap-6 w-full">
                <Overview 
                  records={records} 
                  selectedId={selectedDashboardId} 
                  onSelectId={setSelectedDashboardId} 
                />
                <AnalyticsCharts record={dashboardRecord} />
              </div>
            )}

            {activeTab === 'database' && (
              <div className="w-full">
                <OfflineManager
                  records={records}
                  onEdit={handleEditTrigger}
                  onDelete={handleDeleteRecord}
                  onImport={handleImportRecords}
                  onSelectForView={handleSelectForPrint}
                />
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation (Visible on phones and small tablets) */}
      <div className="print:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 border-t border-slate-100 dark:border-slate-800 backdrop-blur flex justify-around py-2.5 md:hidden shadow-lg">
        <button
          onClick={() => setActiveTab('calculator')}
          className={`flex flex-col items-center gap-0.5 focus:outline-none transition-colors ${
            activeTab === 'calculator' ? 'text-bps-blue dark:text-bps-blue-light' : 'text-slate-400'
          }`}
        >
          <Calculator className="w-5 h-5" />
          <span className="text-[10px] font-bold">Kalkulator</span>
        </button>
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`flex flex-col items-center gap-0.5 focus:outline-none transition-colors ${
            activeTab === 'dashboard' ? 'text-bps-blue dark:text-bps-blue-light' : 'text-slate-400'
          }`}
        >
          <LayoutDashboard className="w-5 h-5" />
          <span className="text-[10px] font-bold">Analisis</span>
        </button>
        <button
          onClick={() => setActiveTab('database')}
          className={`flex flex-col items-center gap-0.5 focus:outline-none transition-colors ${
            activeTab === 'database' ? 'text-bps-blue dark:text-bps-blue-light' : 'text-slate-400'
          }`}
        >
          <div className="relative">
            <Database className="w-5 h-5" />
            {records.length > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-bps-green text-white text-[8px] font-bold px-1 rounded-full border border-white">
                {records.length}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold">Database</span>
        </button>
      </div>
    </div>
  );
}
