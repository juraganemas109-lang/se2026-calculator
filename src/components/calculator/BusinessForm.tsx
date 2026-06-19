import React, { useState, useEffect } from 'react';
import { 
  BusinessRecord, 
  COMMON_KBLIS, 
  KATEGORI_BPS, 
  calculateTotals, 
  validateSE2026Data, 
  ValidationError,
  formatRupiah 
} from '@/utils/calculatorHelper';
import { InputRupiah } from '../ui/InputRupiah';
import { Save, RefreshCw, ChevronLeft, ChevronRight, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import confetti from 'canvas-confetti';
import masterUsaha from '@/utils/master-usaha-se2026.json';
import { TembakauEstimator } from './TembakauEstimator';

interface BusinessFormProps {
  onSave: (record: BusinessRecord) => void;
  editRecord?: BusinessRecord | null;
  onCancelEdit?: () => void;
}

const INITIAL_STATE = {
  identity: {
    namaUsaha: '',
    namaPemilik: '',
    nomorHp: '',
    alamat: '',
    kbli: '',
    kategoriUsaha: '',
    tahunBerdiri: '2026',
    kegiatanUtama: '',
    produkUtama: '',
    contohProduk: '',
  },
  expense: {
    upahGaji: 0,
    biayaProduksi: 0,
    biayaPembelianBarang: 0,
    biayaOperasional: 0,
    biayaNonOperasional: 0,
  },
  revenue: {
    nilaiProduksiPenjualan: 0,
    pendapatanLainnya: 0,
  },
  dimension: {
    panjangTanah: 0,
    lebarTanah: 0,
    panjangBangunan: 0,
    lebarBangunan: 0,
    hargaTanahPerM2: 0,
    hargaBangunanPerM2: 0,
    modeLuasLahan: false,
    luasEstimasi: 0,
  },
  asset: {
    mesinPeralatan: 0,
    kendaraanUsaha: 0,
  },
  worker: {
    pekerjaLaki: 0,
    pekerjaPerempuan: 0,
    pekerjaDibayar: 0,
    pekerjaTidakDibayar: 0,
  }
};

export const BusinessForm: React.FC<BusinessFormProps> = ({ onSave, editRecord, onCancelEdit }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  // Core Form States
  const [identity, setIdentity] = useState(INITIAL_STATE.identity);
  const [worker, setWorker] = useState(INITIAL_STATE.worker);
  const [expense, setExpense] = useState(INITIAL_STATE.expense);
  const [revenue, setRevenue] = useState(INITIAL_STATE.revenue);
  const [dimension, setDimension] = useState(INITIAL_STATE.dimension);
  const [asset, setAsset] = useState(INITIAL_STATE.asset);

  // Validation States
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([]);

  // KBLI Search Reference States
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isTembakauModalOpen, setIsTembakauModalOpen] = useState<boolean>(false);

  const filteredReferences = React.useMemo(() => {
    let filtered = masterUsaha;
    
    // Filter by Kategori if user has selected one manually
    if (identity.kategoriUsaha) {
      filtered = filtered.filter(item => item.kategori === identity.kategoriUsaha);
    }

    const q = (identity.namaUsaha || '').toLowerCase();
    
    // Filter by Search Query
    if (q) {
      filtered = filtered.filter(item => item.namaUsaha.toLowerCase().includes(q));
    }
    
    // Limit to 20 to prevent huge UI lists
    return filtered.slice(0, 20);
  }, [identity.namaUsaha, identity.kategoriUsaha]);

  const handleSelectReference = (item: typeof masterUsaha[0]) => {
    setIdentity(prev => ({
      ...prev,
      namaUsaha: item.namaUsaha,
      kbli: item.kbli,
      kategoriUsaha: item.kategori,
      kegiatanUtama: item.kegiatanUtama,
      produkUtama: item.produkUtama,
      contohProduk: item.contohProduk
    }));
    setIsDropdownOpen(false);
  };

  // Load edit record if available
  useEffect(() => {
    if (editRecord) {
      setIdentity({
        ...editRecord.identity,
        kegiatanUtama: editRecord.identity.kegiatanUtama || '',
        produkUtama: editRecord.identity.produkUtama || '',
        contohProduk: editRecord.identity.contohProduk || '',
      });
      setExpense({
        upahGaji: editRecord.expense.upahGaji,
        biayaProduksi: editRecord.expense.biayaProduksi,
        biayaPembelianBarang: editRecord.expense.biayaPembelianBarang,
        biayaOperasional: editRecord.expense.biayaOperasional,
        biayaNonOperasional: editRecord.expense.biayaNonOperasional,
      });
      setRevenue({
        nilaiProduksiPenjualan: editRecord.revenue.nilaiProduksiPenjualan,
        pendapatanLainnya: editRecord.revenue.pendapatanLainnya,
      });
      setDimension({
        panjangTanah: editRecord.dimension.panjangTanah,
        lebarTanah: editRecord.dimension.lebarTanah,
        panjangBangunan: editRecord.dimension.panjangBangunan,
        lebarBangunan: editRecord.dimension.lebarBangunan,
        hargaTanahPerM2: editRecord.dimension.hargaTanahPerM2,
        hargaBangunanPerM2: editRecord.dimension.hargaBangunanPerM2,
        modeLuasLahan: editRecord.dimension.modeLuasLahan || false,
        luasEstimasi: editRecord.dimension.luasEstimasi || 0,
      });
      setAsset({
        mesinPeralatan: editRecord.asset.mesinPeralatan,
        kendaraanUsaha: editRecord.asset.kendaraanUsaha,
      });
      if (editRecord.worker) {
        setWorker({
          pekerjaLaki: editRecord.worker.pekerjaLaki,
          pekerjaPerempuan: editRecord.worker.pekerjaPerempuan,
          pekerjaDibayar: editRecord.worker.pekerjaDibayar,
          pekerjaTidakDibayar: editRecord.worker.pekerjaTidakDibayar,
        });
        setWorker(INITIAL_STATE.worker);
      }
      setActiveStep(1);
    } else {
      resetForm();
    }
  }, [editRecord]);

  // Run Calculations
  const calculated = calculateTotals(expense, revenue, dimension, asset, worker);

  // Validate on changes
  useEffect(() => {
    const recordPreview: Partial<BusinessRecord> = {
      identity,
      expense: calculated.expense,
      revenue: calculated.revenue,
      asset: calculated.asset,
      dimension: calculated.dimension,
      worker: calculated.worker,
    };
    const errors = validateSE2026Data(recordPreview);
    setValidationErrors(errors);
  }, [identity, worker, expense, revenue, dimension, asset]);

  const resetForm = () => {
    setIdentity(INITIAL_STATE.identity);
    setWorker(INITIAL_STATE.worker);
    setExpense(INITIAL_STATE.expense);
    setRevenue(INITIAL_STATE.revenue);
    setDimension(INITIAL_STATE.dimension);
    setAsset(INITIAL_STATE.asset);
    setActiveStep(1);
  };



  const steps = [
    { id: 1, name: 'Identitas & Jenis Usaha' },
    { id: 2, name: 'Pekerja (Rincian 24)' },
    { id: 3, name: 'Pengeluaran (26.a-f)' },
    { id: 4, name: 'Pendapatan (27.a-c)' },
    { id: 5, name: 'Luas & Aset (28.a-e)' }
  ];

  const nextStep = () => {
    if (activeStep < 5) {
      const next = activeStep + 1;
      console.log('Current Step:', activeStep);
      console.log('Button Action:', 'nextStep → going to step ' + next);
      setActiveStep(next);
    }
  };

  const prevStep = () => {
    if (activeStep > 1) {
      const prev = activeStep - 1;
      console.log('Current Step:', prev);
      setActiveStep(prev);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Current Step:', activeStep);
    console.log('Button Action:', 'handleSubmit triggered');

    // Prevent saving if not on the last step
    if (activeStep !== 5) {
      console.warn('handleSubmit called on step', activeStep, '— blocked. This should never happen!');
      return;
    }

    // Check if there are any blocking errors (errors, not warnings)
    const hasCriticalErrors = validationErrors.some(err => err.type === 'error');
    if (hasCriticalErrors) {
      alert('Terdapat kesalahan pengisian data (Error merah). Harap perbaiki sebelum menyimpan.');
      return;
    }

    const newRecord: BusinessRecord = {
      id: editRecord?.id || `SE2026-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: editRecord?.createdAt || new Date().toISOString(),
      identity,
      worker: calculated.worker!,
      expense: calculated.expense,
      revenue: calculated.revenue,
      asset: calculated.asset,
      dimension: calculated.dimension,
    };

    const luasAsetState = { dimension, asset };
    console.log("LUAS_ASET_STATE", luasAsetState);

    const luasAsetData = {
      panjangTanah: calculated.dimension.panjangTanah,
      lebarTanah: calculated.dimension.lebarTanah,
      luasTanah: calculated.dimension.luasTanah,
      modeLuasLahan: calculated.dimension.modeLuasLahan,
      luasEstimasi: calculated.dimension.luasEstimasi,
      nilaiTanah: calculated.asset.nilaiTanah,
      nilaiBangunan: calculated.asset.nilaiBangunan,
      kendaraanUsaha: calculated.asset.kendaraanUsaha,
      mesinPeralatan: calculated.asset.mesinPeralatan,
      totalAset: calculated.asset.totalAset
    };

    console.log("DATA LUAS & ASET", luasAsetData);
    console.log("PAYLOAD_BEFORE_SAVE", newRecord);
    console.log("PAYLOAD SIMPAN", newRecord);

    onSave(newRecord);
    
    // Play confetti explosion animation
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 }
    });

    if (!editRecord) {
      resetForm();
    }
  };

  // Check if a field has errors
  const getFieldError = (fieldName: string) => {
    const found = validationErrors.find(err => err.field === fieldName);
    return found ? found.message : undefined;
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden transition-all duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-bps-blue to-bps-blue-light p-4 text-white flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">
            {editRecord ? 'Edit Data Usaha' : 'Form Entri Data Usaha'}
          </h2>
          <p className="text-xs text-blue-100">
            Sensus Ekonomi 2026 (SE2026) Smart Calculator
          </p>
        </div>
        {editRecord && onCancelEdit && (
          <button 
            type="button"
            onClick={onCancelEdit}
            className="text-xs font-semibold px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            Batal Edit
          </button>
        )}
      </div>

      {/* Steps Progress Indicator */}
      <div className="px-4 pt-4 pb-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="flex items-center justify-between gap-1">
          {steps.map((step) => (
            <button
              key={step.id}
              type="button"
              onClick={() => {
                console.log('Current Step:', step.id);
                console.log('Button Action:', 'progress-step-click');
                setActiveStep(step.id);
              }}
              className="flex-1 flex flex-col items-center gap-1 focus:outline-none"
            >
              <div className="w-full flex items-center justify-center">
                <div 
                  className={`h-1.5 w-full rounded-full transition-all duration-300 ${
                    activeStep >= step.id 
                      ? 'bg-bps-blue dark:bg-bps-blue-light' 
                      : 'bg-slate-200 dark:bg-slate-800'
                  }`}
                />
              </div>
              <span className={`text-[10px] md:text-xs font-bold transition-colors ${
                activeStep === step.id 
                  ? 'text-bps-blue dark:text-bps-blue-light' 
                  : 'text-slate-400 dark:text-slate-600'
              } text-center truncate w-full max-w-[80px] md:max-w-none`}>
                {step.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Form */}
      <form onSubmit={handleSubmit} className="p-4 md:p-6 flex flex-col gap-6">
        {/* Step 1: Identitas dan Jenis Usaha */}
        {activeStep === 1 && (
          <div className="flex flex-col gap-4 animate-fadeIn">
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wide border-l-4 border-bps-green pl-2 mb-2">
              Klasifikasi Jenis Usaha (Otomatis)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Kode KBLI (5 Digit) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={identity.kbli}
                  onChange={e => setIdentity(prev => ({ ...prev, kbli: e.target.value }))}
                  className={`w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all ${
                    getFieldError('identity.kbli') ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                  }`}
                  placeholder="Contoh: 47111"
                  maxLength={5}
                />
                {getFieldError('identity.kbli') && (
                  <span className="text-[10px] text-red-500 font-medium">{getFieldError('identity.kbli')}</span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Kategori Lapangan Usaha (A-U) <span className="text-red-500">*</span>
                </label>
                <select
                  onChange={e => {
                    const newCat = e.target.value;
                    setIdentity(prev => ({ 
                      ...prev, 
                      kategoriUsaha: newCat,
                      namaUsaha: '', // Clear to show new category options
                      kbli: '',
                      kegiatanUtama: '',
                      produkUtama: '',
                      contohProduk: ''
                    }));
                  }}
                  className={`w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all ${
                    getFieldError('identity.kategoriUsaha') ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <option value="">-- Pilih Kategori --</option>
                  {KATEGORI_BPS.map(cat => (
                    <option key={cat.code} value={cat.code}>
                      Kategori {cat.code} - {cat.name}
                    </option>
                  ))}
                </select>
                {getFieldError('identity.kategoriUsaha') && (
                  <span className="text-[10px] text-red-500 font-medium">{getFieldError('identity.kategoriUsaha')}</span>
                )}
              </div>
            </div>

            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wide border-l-4 border-bps-blue pl-2 mt-4 mb-2">
              Identitas Usaha
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 relative">
                <label className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Nama Usaha / Cari Referensi <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={identity.namaUsaha}
                    onChange={e => {
                      const val = e.target.value;
                      setIdentity(prev => ({ ...prev, namaUsaha: val }));
                      setIsDropdownOpen(true);
                    }}
                    onFocus={() => setIsDropdownOpen(true)}
                    onBlur={() => {
                      // Delay to allow onMouseDown on option buttons to execute first
                      setTimeout(() => setIsDropdownOpen(false), 200);
                    }}
                    className={`w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all ${
                      getFieldError('identity.namaUsaha') ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                    }`}
                    placeholder="Contoh: Pertanian Padi Hibrida"
                  />
                  {isDropdownOpen && (
                    <div className="absolute z-50 w-full mt-1 max-h-60 overflow-y-auto bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-lg divide-y divide-slate-100 dark:divide-slate-800 animate-fadeIn">
                      {filteredReferences.length === 0 ? (
                        <div className="p-3 text-xs text-slate-400 dark:text-slate-500">
                          Tidak ada referensi ditemukan. Gunakan nama kustom.
                        </div>
                      ) : (
                        filteredReferences.map((item, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onMouseDown={(e) => {
                              e.preventDefault();
                              handleSelectReference(item);
                            }}
                            onTouchStart={(e) => {
                              e.preventDefault();
                              handleSelectReference(item);
                            }}
                            className="w-full text-left p-3 hover:bg-slate-50 dark:hover:bg-slate-800 flex flex-col gap-0.5 transition-colors cursor-pointer"
                          >
                            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{item.namaUsaha}</span>
                            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                              KBLI: {item.kbli} | Kategori: {item.kategori} | Produk: {item.produkUtama}
                            </span>
                          </button>
                        ))
                      )}
                    </div>
                  )}
                </div>
                {getFieldError('identity.namaUsaha') && (
                  <span className="text-[10px] text-red-500 font-medium">{getFieldError('identity.namaUsaha')}</span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Nama Pemilik / Pengelola <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={identity.namaPemilik}
                  onChange={e => setIdentity(prev => ({ ...prev, namaPemilik: e.target.value }))}
                  className={`w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all ${
                    getFieldError('identity.namaPemilik') ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                  }`}
                  placeholder="Nama Pemilik"
                />
                {getFieldError('identity.namaPemilik') && (
                  <span className="text-[10px] text-red-500 font-medium">{getFieldError('identity.namaPemilik')}</span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Nomor HP Pemilik <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={identity.nomorHp}
                  onChange={e => setIdentity(prev => ({ ...prev, nomorHp: e.target.value }))}
                  className={`w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all ${
                    getFieldError('identity.nomorHp') ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                  }`}
                  placeholder="Contoh: 081234567890"
                />
                {getFieldError('identity.nomorHp') && (
                  <span className="text-[10px] text-red-500 font-medium">{getFieldError('identity.nomorHp')}</span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Tahun Berdiri Usaha <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  min="1900"
                  max="2026"
                  required
                  value={identity.tahunBerdiri}
                  onChange={e => setIdentity(prev => ({ ...prev, tahunBerdiri: e.target.value }))}
                  className={`w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all ${
                    getFieldError('identity.tahunBerdiri') ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                  }`}
                  placeholder="Tahun Berdiri"
                />
                {getFieldError('identity.tahunBerdiri') && (
                  <span className="text-[10px] text-red-500 font-medium">{getFieldError('identity.tahunBerdiri')}</span>
                )}
              </div>

              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Alamat Usaha
                </label>
                <textarea
                  rows={2}
                  value={identity.alamat}
                  onChange={e => setIdentity(prev => ({ ...prev, alamat: e.target.value }))}
                  className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all"
                  placeholder="Alamat lengkap lokasi usaha"
                />
                <div className="flex flex-wrap gap-2 mt-0.5">
                  <button
                    type="button"
                    onClick={() => setIdentity(prev => ({ ...prev, alamat: 'Dusun Angsokah Barat 01' }))}
                    className="text-[10px] px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-bps-blue-light/10 hover:text-bps-blue hover:border-bps-blue/30 transition-colors"
                  >
                    Dusun Angsokah Barat 01
                  </button>
                  <button
                    type="button"
                    onClick={() => setIdentity(prev => ({ ...prev, alamat: 'Dusun Tengginah 01' }))}
                    className="text-[10px] px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-bps-blue-light/10 hover:text-bps-blue hover:border-bps-blue/30 transition-colors"
                  >
                    Dusun Tengginah 01
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Kegiatan Utama / Penjelasan Usaha
                </label>
                <input
                  type="text"
                  value={identity.kegiatanUtama || ''}
                  onChange={e => setIdentity(prev => ({ ...prev, kegiatanUtama: e.target.value }))}
                  className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all"
                  placeholder="Deskripsi kegiatan utama"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Produk Utama
                </label>
                <input
                  type="text"
                  value={identity.produkUtama || ''}
                  onChange={e => setIdentity(prev => ({ ...prev, produkUtama: e.target.value }))}
                  className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all"
                  placeholder="Produk utama yang dihasilkan"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Contoh Produk
                </label>
                <input
                  type="text"
                  value={identity.contohProduk || ''}
                  onChange={e => setIdentity(prev => ({ ...prev, contohProduk: e.target.value }))}
                  className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all"
                  placeholder="Contoh produk spesifik"
                />
              </div>
            </div>


          </div>
        )}

        {/* Step 2: Modul Pekerja (24.a-24.c) */}
        {activeStep === 2 && (
          <div className="flex flex-col gap-4 animate-fadeIn">
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wide border-l-4 border-bps-orange pl-2 mb-2">
              Modul Pekerja (SE2026 Rincian 24)
            </h3>
            
            {/* Quick Fill Buttons */}
            <div className="bg-slate-50 dark:bg-slate-800/30 p-3 md:p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Isian Cepat (Template Pekerja):</span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setWorker({ pekerjaLaki: 1, pekerjaPerempuan: 0, pekerjaDibayar: 0, pekerjaTidakDibayar: 1 })}
                  className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-md hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                >
                  Usaha Perorangan (Sendiri)
                </button>
                <button
                  type="button"
                  onClick={() => setWorker({ pekerjaLaki: 1, pekerjaPerempuan: 1, pekerjaDibayar: 0, pekerjaTidakDibayar: 2 })}
                  className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-md hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                >
                  Suami Istri (Toko Kelontong/Warung)
                </button>
                <button
                  type="button"
                  onClick={() => setWorker({ pekerjaLaki: 1, pekerjaPerempuan: 0, pekerjaDibayar: 1, pekerjaTidakDibayar: 0 })}
                  className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-md hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                >
                  Pekerja Lepas (Supir/Tukang)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="flex flex-col gap-3 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
                <h4 className="text-xs font-bold text-slate-600 dark:text-slate-400">BERDASARKAN JENIS KELAMIN</h4>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] md:text-xs font-semibold text-slate-600 dark:text-slate-400">24.a1 Laki-laki</label>
                  <input
                    type="number"
                    min="0"
                    value={worker.pekerjaLaki || ''}
                    onChange={e => setWorker(prev => ({ ...prev, pekerjaLaki: Number(e.target.value) || 0 }))}
                    className="px-2 py-1.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-bps-blue-light"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] md:text-xs font-semibold text-slate-600 dark:text-slate-400">24.b1 Perempuan</label>
                  <input
                    type="number"
                    min="0"
                    value={worker.pekerjaPerempuan || ''}
                    onChange={e => setWorker(prev => ({ ...prev, pekerjaPerempuan: Number(e.target.value) || 0 }))}
                    className="px-2 py-1.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-bps-blue-light"
                  />
                </div>
                <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-500">24.c1 TOTAL (a1+b1)</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {calculated.worker?.totalPekerjaGender || 0} Orang
                  </span>
                </div>
                {getFieldError('worker.totalPekerjaGender') && (
                  <span className="text-[10px] text-red-500 font-medium leading-tight">{getFieldError('worker.totalPekerjaGender')}</span>
                )}
              </div>

              <div className="flex flex-col gap-3 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
                <h4 className="text-xs font-bold text-slate-600 dark:text-slate-400">BERDASARKAN STATUS PEKERJAAN</h4>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] md:text-xs font-semibold text-slate-600 dark:text-slate-400">24.a2 Pekerja Dibayar</label>
                  <input
                    type="number"
                    min="0"
                    value={worker.pekerjaDibayar || ''}
                    onChange={e => setWorker(prev => ({ ...prev, pekerjaDibayar: Number(e.target.value) || 0 }))}
                    className="px-2 py-1.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-bps-blue-light"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] md:text-xs font-semibold text-slate-600 dark:text-slate-400">24.b2 Pekerja Tidak Dibayar</label>
                  <input
                    type="number"
                    min="0"
                    value={worker.pekerjaTidakDibayar || ''}
                    onChange={e => setWorker(prev => ({ ...prev, pekerjaTidakDibayar: Number(e.target.value) || 0 }))}
                    className="px-2 py-1.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-bps-blue-light"
                  />
                </div>
                <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-500">24.c2 TOTAL (a2+b2)</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {calculated.worker?.totalPekerjaStatus || 0} Orang
                  </span>
                </div>
                {getFieldError('worker.totalPekerjaStatus') && (
                  <span className="text-[10px] text-red-500 font-medium leading-tight">{getFieldError('worker.totalPekerjaStatus')}</span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Modul Pengeluaran (26.a-26.f) */}
        {activeStep === 3 && (
          <div className="flex flex-col gap-4 animate-fadeIn">
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wide border-l-4 border-bps-blue pl-2 mb-2">
              Modul Pengeluaran (SE2026 Rincian 26)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputRupiah
                id="upahGaji"
                label="26.a Upah dan Gaji"
                value={expense.upahGaji}
                onChange={val => setExpense(prev => ({ ...prev, upahGaji: val }))}
                info="Biaya tenaga kerja / gaji karyawan"
                error={getFieldError('expense.upahGaji')}
              />

              <InputRupiah
                id="biayaProduksi"
                label="26.b Biaya Bahan Baku / Produksi"
                value={expense.biayaProduksi}
                onChange={val => setExpense(prev => ({ ...prev, biayaProduksi: val }))}
                info="Biaya pupuk/pakan, bahan pembantu, bahan pembuatan produk"
              />

              <InputRupiah
                id="biayaPembelianBarang"
                label="26.c Biaya Pembelian Barang yang Dijual Kembali"
                value={expense.biayaPembelianBarang}
                onChange={val => setExpense(prev => ({ ...prev, biayaPembelianBarang: val }))}
                info="Khas perdagangan (kulakan toko/warung)"
              />

              <InputRupiah
                id="biayaOperasional"
                label="26.d Biaya Operasional"
                value={expense.biayaOperasional}
                onChange={val => setExpense(prev => ({ ...prev, biayaOperasional: val }))}
                info="Listrik, air, telepon, bensin, sewa tempat, internet"
              />

              <InputRupiah
                id="biayaNonOperasional"
                label="26.e Biaya Non-Operasional"
                value={expense.biayaNonOperasional}
                onChange={val => setExpense(prev => ({ ...prev, biayaNonOperasional: val }))}
                info="Bunga bank, administrasi, biaya tak terduga"
              />

              {/* Total Pengeluaran Card */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col justify-center items-center md:col-span-1">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  26.f TOTAL PENGELUARAN (Otomatis)
                </span>
                <span className="text-xl md:text-2xl font-mono font-bold text-red-600 dark:text-red-400 mt-1">
                  Rp {formatRupiah(calculated.expense.totalPengeluaran)}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Modul Produksi/Pendapatan (27.a-27.c) */}
        {activeStep === 4 && (
          <div className="flex flex-col gap-4 animate-fadeIn">
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wide border-l-4 border-bps-green pl-2 mb-2">
              Modul Produksi / Pendapatan (SE2026 Rincian 27)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputRupiah
                id="nilaiProduksi"
                label="27.a Nilai Produksi / Hasil Penjualan Utama"
                value={revenue.nilaiProduksiPenjualan}
                onChange={val => setRevenue(prev => ({ ...prev, nilaiProduksiPenjualan: val }))}
                info="Hasil panen, penjualan barang dagangan, omset jasa utama"
                error={getFieldError('revenue.nilaiProduksiPenjualan')}
              />

              <InputRupiah
                id="pendapatanLainnya"
                label="27.b Pendapatan Lainnya"
                value={revenue.pendapatanLainnya}
                onChange={val => setRevenue(prev => ({ ...prev, pendapatanLainnya: val }))}
                info="Penjualan ampas/limbah, komisi, hasil sampingan usaha"
              />

              {/* Total Produksi Card */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col justify-center items-center md:col-span-2">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  27.c TOTAL PRODUKSI / PENDAPATAN (Otomatis)
                </span>
                <span className="text-xl md:text-2xl font-mono font-bold text-bps-green dark:text-bps-green-light mt-1">
                  Rp {formatRupiah(calculated.revenue.totalProduksi)}
                </span>
              </div>
            </div>

            {/* Profitability Panel */}
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-100 dark:border-blue-900 flex justify-between items-center">
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                <Info className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs md:text-sm font-semibold">Keuntungan Kotor Terhitung:</span>
              </div>
              <span className={`text-sm md:text-lg font-mono font-bold ${
                calculated.keuntunganKotor >= 0 ? 'text-bps-green' : 'text-red-500'
              }`}>
                Rp {formatRupiah(calculated.keuntunganKotor)}
              </span>
            </div>
          </div>
        )}

        {/* Step 5: Luas Tanah & Bangunan, serta Modul Aset (28.a-28.e) */}
        {activeStep === 5 && (
          <div className="flex flex-col gap-4 animate-fadeIn">
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wide border-l-4 border-bps-blue pl-2 mb-2">
              Modul Luas Tanah dan Bangunan Usaha
            </h3>

            <div className="bg-slate-50 dark:bg-slate-800/30 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 mb-4">
                <h4 className="text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                  <span>Dimensi Tanah Usaha</span>
                  <span className="text-[10px] font-normal text-slate-400">({calculated.dimension.luasTanah} m² terhitung)</span>
                </h4>
                
                {/* Mode Perhitungan Toggle */}
                <div className="flex bg-slate-200/50 dark:bg-slate-900/50 p-1 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setDimension(prev => ({ ...prev, modeLuasLahan: false }))}
                    className={`px-3 py-1.5 text-[10px] md:text-xs font-semibold rounded-md transition-all ${
                      !dimension.modeLuasLahan 
                        ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-800 dark:text-slate-100' 
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                    }`}
                  >
                    Panjang × Lebar Manual
                  </button>
                  <button
                    type="button"
                    onClick={() => setDimension(prev => ({ ...prev, modeLuasLahan: true }))}
                    className={`px-3 py-1.5 text-[10px] md:text-xs font-semibold rounded-md transition-all ${
                      dimension.modeLuasLahan 
                        ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-800 dark:text-slate-100' 
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                    }`}
                  >
                    Luas Estimasi Langsung
                  </button>
                </div>
              </div>

              {(identity?.namaUsaha || '').toLowerCase().includes('tembakau') && (
                <button
                  type="button"
                  onClick={() => setIsTembakauModalOpen(true)}
                  className="mb-4 flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-800/50 rounded-lg transition-colors w-fit"
                >
                  🌱 Estimasi Luas Lahan Tembakau Otomatis
                </button>
              )}

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {dimension.modeLuasLahan ? (
                  <div className="col-span-2 md:col-span-2 flex flex-col gap-1">
                    <InputRupiah
                      id="luasEstimasi"
                      label="Luas Lahan Estimasi"
                      prefix=""
                      suffix="m²"
                      value={dimension.luasEstimasi}
                      onChange={val => setDimension(prev => ({ ...prev, luasEstimasi: val }))}
                      placeholder="Masukkan luas langsung"
                    />
                  </div>
                ) : (
                  <>
                    <div className="flex flex-col gap-1">
                      <InputRupiah
                        id="panjangTanah"
                        label="Panjang Tanah"
                        prefix=""
                        suffix="m"
                        value={dimension.panjangTanah}
                        onChange={val => setDimension(prev => ({ ...prev, panjangTanah: val }))}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <InputRupiah
                        id="lebarTanah"
                        label="Lebar Tanah"
                        prefix=""
                        suffix="m"
                        value={dimension.lebarTanah}
                        onChange={val => setDimension(prev => ({ ...prev, lebarTanah: val }))}
                      />
                    </div>
                  </>
                )}
                <div className="col-span-2 md:col-span-1">
                  <InputRupiah
                    id="hargaTanah"
                    label="Harga Tanah / m²"
                    value={dimension.hargaTanahPerM2}
                    onChange={val => setDimension(prev => ({ ...prev, hargaTanahPerM2: val }))}
                    error={getFieldError('dimension.hargaTanahPerM2')}
                  />
                </div>
              </div>
              <div className="mt-2 text-right">
                <span className="text-[10px] font-semibold text-slate-500">Nilai Tanah: </span>
                <span className="text-xs font-bold font-mono text-slate-700 dark:text-slate-300">Rp {formatRupiah(calculated.asset.nilaiTanah)}</span>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/30 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <h4 className="text-xs font-bold text-slate-600 dark:text-slate-300 mb-3 flex items-center gap-1.5">
                <span>Dimensi Bangunan Usaha</span>
                <span className="text-[10px] font-normal text-slate-400">({calculated.dimension.luasBangunan} m² terhitung)</span>
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="flex flex-col gap-1">
                  <InputRupiah
                    id="panjangBangunan"
                    label="Panjang Bangunan"
                    prefix=""
                    suffix="m"
                    value={dimension.panjangBangunan}
                    onChange={val => setDimension(prev => ({ ...prev, panjangBangunan: val }))}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <InputRupiah
                    id="lebarBangunan"
                    label="Lebar Bangunan"
                    prefix=""
                    suffix="m"
                    value={dimension.lebarBangunan}
                    onChange={val => setDimension(prev => ({ ...prev, lebarBangunan: val }))}
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <InputRupiah
                    id="hargaBangunan"
                    label="Harga Bangunan / m²"
                    value={dimension.hargaBangunanPerM2}
                    onChange={val => setDimension(prev => ({ ...prev, hargaBangunanPerM2: val }))}
                    error={getFieldError('dimension.hargaBangunanPerM2')}
                  />
                </div>
              </div>
              <div className="mt-2 text-right">
                <span className="text-[10px] font-semibold text-slate-500">Nilai Bangunan: </span>
                <span className="text-xs font-bold font-mono text-slate-700 dark:text-slate-300">Rp {formatRupiah(calculated.asset.nilaiBangunan)}</span>
              </div>
            </div>

            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wide border-l-4 border-bps-green pl-2 mt-2 mb-2">
              Modul Nilai Aset Usaha (SE2026 Rincian 28)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputRupiah
                id="mesinPeralatan"
                label="28.c/e Mesin dan Peralatan"
                value={asset.mesinPeralatan}
                onChange={val => setAsset(prev => ({ ...prev, mesinPeralatan: val }))}
                info="Mesin produksi, traktor, laptop, peralatan kantor, dll."
              />

              <InputRupiah
                id="kendaraanUsaha"
                label="28.d Kendaraan Operasional"
                value={asset.kendaraanUsaha}
                onChange={val => setAsset(prev => ({ ...prev, kendaraanUsaha: val }))}
                info="Motor kurir, mobil pick-up operasional"
              />

              {/* Total Aset Summary */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col justify-center items-center md:col-span-1">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  TOTAL ASET TERHITUNG
                </span>
                <span className="text-lg md:text-xl font-mono font-bold text-bps-blue dark:text-bps-blue-light mt-1">
                  Rp {formatRupiah(calculated.asset.totalAset)}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Step Navigation Controls */}
        <div className="flex justify-between items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800 mt-2">
          {activeStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg active:scale-95 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              Kembali
            </button>
          ) : (
            <button
              type="button"
              onClick={resetForm}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-500 hover:bg-red-50 hover:text-red-600 dark:text-slate-400 dark:hover:bg-red-950/20 dark:hover:text-red-400 border border-slate-200 dark:border-slate-700 rounded-lg active:scale-95 transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              Reset Form
            </button>
          )}

          {activeStep < 5 ? (
            <button
              key="next-btn"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                nextStep();
              }}
              className="flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-white bg-bps-blue hover:bg-bps-blue-light rounded-lg active:scale-95 transition-all ml-auto"
            >
              Lanjut
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              key="submit-btn"
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2 text-sm font-bold text-white bg-bps-green hover:bg-bps-green-dark rounded-lg active:scale-95 transition-all shadow-md hover:shadow-lg shadow-bps-green/20 ml-auto"
            >
              <Save className="w-4 h-4" />
              Simpan Usaha
            </button>
          )}
        </div>
      </form>

      {/* Real-time SE2026 Validation Warnings Panel */}
      {validationErrors.length > 0 && (
        <div className="px-4 pb-4 md:px-6 md:pb-6">
          <div className="p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 rounded-xl flex flex-col gap-2">
            <span className="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              Validasi Logika SE2026 ({validationErrors.length} Peringatan / Error)
            </span>
            <ul className="list-disc pl-5 flex flex-col gap-1">
              {validationErrors.map((err, idx) => (
                <li 
                  key={idx} 
                  className={`text-[11px] font-medium ${
                    err.type === 'error' ? 'text-red-600 dark:text-red-400 list-item' : 'text-amber-700 dark:text-amber-400'
                  }`}
                >
                  {err.message}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {/* Modals */}
      {isTembakauModalOpen && (
        <TembakauEstimator 
          onClose={() => setIsTembakauModalOpen(false)}
          onApply={(luas) => {
            setDimension(prev => ({
              ...prev,
              modeLuasLahan: true,
              luasEstimasi: luas
            }));
            setIsTembakauModalOpen(false);
          }}
        />
      )}
    </div>
  );
};
