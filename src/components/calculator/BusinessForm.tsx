import React, { useState, useEffect, useMemo } from 'react';
import { 
  BusinessRecord, 
  COMMON_KBLIS, 
  KATEGORI_BPS, 
  calculateTotals, 
  validateSE2026Data, 
  ValidationError,
  formatRupiah,
  parseRupiah
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
    nomorBangunan: '',
    nomorKeluarga: '',
    namaKK: '',
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
  const [modeKepadatan, setModeKepadatan] = useState<'Normal' | 'Padat' | 'Renggang'>('Normal');
  const [jenisTembakau, setJenisTembakau] = useState<'Sawah' | 'Tegal' | 'Gunung'>('Sawah');
  const [modeTanamPertanian, setModeTanamPertanian] = useState<'Normal' | 'Padat' | 'Renggang'>('Normal');
  const [jumlahSakPadi, setJumlahSakPadi] = useState<string>('');
  const [jenisPenjualanPadi, setJenisPenjualanPadi] = useState<string>('Gabah Kering Panen (GKP)');
  const [modeCadanganPadi, setModeCadanganPadi] = useState<boolean>(false);

  const [jumlahPohonPrajangan, setJumlahPohonPrajangan] = useState<string>('');
  const [jenisTembakauPrajangan, setJenisTembakauPrajangan] = useState<'Sawah' | 'Tegal' | 'Gunung'>('Gunung');
  const [modeTanamPrajangan, setModeTanamPrajangan] = useState<'Normal' | 'Padat' | 'Renggang'>('Normal');

  const [jumlahPohonPertanian, setJumlahPohonPertanian] = useState<string>('');

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
    
    return filtered;
  }, [identity.kategoriUsaha]);

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
      } else {
        setWorker(INITIAL_STATE.worker);
      }
      
      if (editRecord.analysis?.modeKepadatan) setModeKepadatan(editRecord.analysis.modeKepadatan);
      else setModeKepadatan('Normal');

      if (editRecord.analysis?.jenisTembakau) setJenisTembakau(editRecord.analysis.jenisTembakau as any);
      if (editRecord.analysis?.modeTanam) setModeTanamPertanian(editRecord.analysis.modeTanam as any);
      
      if (editRecord.analysis?.jenisAnalisis === 'Pertanian Padi Hibrida') {
        setJumlahSakPadi(editRecord.analysis.jumlahSak?.toString() || '');
        setJenisPenjualanPadi(editRecord.analysis.jenisPenjualan || 'Gabah Kering Panen (GKP)');
      } else if (editRecord.analysis?.jenisAnalisis === 'PRAJANGAN_TEMBAKAU') {
        setJumlahPohonPrajangan(editRecord.analysis.jumlahPohon?.toString() || '');
        setJenisTembakauPrajangan((editRecord.analysis.jenisTembakau as any) || 'Gunung');
        setModeTanamPrajangan((editRecord.analysis.modeTanam as any) || 'Normal');
      } else if (editRecord.analysis?.jenisAnalisis === 'PERTANIAN_TEMBAKAU') {
        setJumlahPohonPertanian(editRecord.analysis.jumlahPohon?.toString() || '');
      }

      setActiveStep(1);
    } else {
      resetForm();
    }
  }, [editRecord]);

  // Run Calculations
  const calculated = useMemo(() => {
    const parsedJumlahSakPadi = modeCadanganPadi ? 0 : (Number(jumlahSakPadi) || 0);
    return calculateTotals(
      expense,
      revenue,
      dimension,
      asset,
      worker,
      identity,
      modeKepadatan,
      jenisTembakau,
      modeTanamPertanian,
      parsedJumlahSakPadi,
      jenisPenjualanPadi,
      Number(jumlahPohonPrajangan) || 0,
      jenisTembakauPrajangan,
      modeTanamPrajangan,
      Number(jumlahPohonPertanian) || 0
    );
  }, [expense, revenue, dimension, asset, worker, identity, modeKepadatan, jenisTembakau, modeTanamPertanian, jumlahSakPadi, jenisPenjualanPadi, modeCadanganPadi, jumlahPohonPrajangan, jenisTembakauPrajangan, modeTanamPrajangan, jumlahPohonPertanian]);

  // Auto-fill Nilai Produksi for Padi Hibrida
  useEffect(() => {
    if (identity.kategoriUsaha === 'A' && identity.kbli === '01121' && !modeCadanganPadi) {
      const sak = Number(jumlahSakPadi) || 0;
      let harga = 7000;
      if (jenisPenjualanPadi === 'Beras Medium') harga = 13500;
      else if (jenisPenjualanPadi === 'Beras Premium') harga = 16000;
      else if (jenisPenjualanPadi === 'Beras SPHP') harga = 12000;

      const prodKg = sak * 50;
      const nilaiJual = prodKg * harga;

      setRevenue(prev => {
        if (prev.nilaiProduksiPenjualan !== nilaiJual) {
          return { ...prev, nilaiProduksiPenjualan: nilaiJual };
        }
        return prev;
      });
    }
  }, [jumlahSakPadi, jenisPenjualanPadi, modeCadanganPadi, identity.kategoriUsaha, identity.kbli]);

  // Auto-fill Nilai Produksi for Prajangan Tembakau
  useEffect(() => {
    const isPrajanganTembakau = 
      identity.kbli === '12004' || 
      (identity.kategoriUsaha === 'C' && /Prajangan Tembakau|Rajangan Tembakau|Industri Tembakau/i.test(identity.namaUsaha));

    if (isPrajanganTembakau) {
      const pohon = Number(jumlahPohonPrajangan) || 0;
      const hargaPerKg = jenisTembakauPrajangan === 'Sawah' ? 47685 : jenisTembakauPrajangan === 'Tegal' ? 53533 : 63500;
      const prodKg = (pohon / 1000) * 70;
      const nilaiJual = prodKg * hargaPerKg;

      setRevenue(prev => {
        if (prev.nilaiProduksiPenjualan !== nilaiJual) {
          return { ...prev, nilaiProduksiPenjualan: nilaiJual };
        }
        return prev;
      });
    }
  }, [jumlahPohonPrajangan, jenisTembakauPrajangan, identity.kategoriUsaha, identity.kbli, identity.namaUsaha]);

  // Auto-fill Nilai Produksi for Pertanian Tembakau
  useEffect(() => {
    if (identity.kategoriUsaha === 'A' && identity.kbli === '01150') {
      const pohon = Number(jumlahPohonPertanian) || 0;
      const nilaiJual = pohon * 1500;

      setRevenue(prev => {
        if (prev.nilaiProduksiPenjualan !== nilaiJual) {
          return { ...prev, nilaiProduksiPenjualan: nilaiJual };
        }
        return prev;
      });
    }
  }, [jumlahPohonPertanian, jenisTembakau, identity.kategoriUsaha, identity.kbli]);

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
                  value={identity.kategoriUsaha}
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
              <div className="flex flex-col gap-1.5 md:col-span-2 bg-bps-blue/5 p-3 rounded-lg border border-bps-blue/10 mb-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200">
                      No. Bangunan Fisik
                    </label>
                    <input
                      type="text"
                      value={identity.nomorBangunan}
                      onChange={e => setIdentity(prev => ({ ...prev, nomorBangunan: e.target.value }))}
                      className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all"
                      placeholder="Contoh: 001"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200">
                      No. Urut Keluarga
                    </label>
                    <input
                      type="text"
                      value={identity.nomorKeluarga}
                      onChange={e => setIdentity(prev => ({ ...prev, nomorKeluarga: e.target.value }))}
                      className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all"
                      placeholder="Contoh: 1"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200">
                      Nama Kepala Keluarga
                    </label>
                    <input
                      type="text"
                      value={identity.namaKK}
                      onChange={e => setIdentity(prev => ({ ...prev, namaKK: e.target.value }))}
                      className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all"
                      placeholder="Nama Lengkap KK"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 relative">
                <label className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Nama Usaha / Referensi <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={identity.namaUsaha}
                  onChange={e => {
                    const selectedName = e.target.value;
                    if (!selectedName) {
                      setIdentity(prev => ({ ...prev, namaUsaha: '' }));
                      return;
                    }
                    const item = masterUsaha.find(u => u.namaUsaha === selectedName);
                    if (item) {
                      setIdentity(prev => ({
                        ...prev,
                        namaUsaha: item.namaUsaha,
                        kbli: item.kbli,
                        kategoriUsaha: item.kategori,
                        kegiatanUtama: item.kegiatanUtama,
                        produkUtama: item.produkUtama,
                        contohProduk: item.contohProduk
                      }));
                    } else {
                      setIdentity(prev => ({ ...prev, namaUsaha: selectedName }));
                    }
                  }}
                  className={`w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all ${
                    getFieldError('identity.namaUsaha') ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <option value="">
                    {identity.kategoriUsaha
                      ? `-- Pilih Usaha Kategori ${identity.kategoriUsaha} --`
                      : '-- Pilih Kategori dulu atau ketik nama --'}
                  </option>
                  {filteredReferences.map((item, idx) => (
                    <option key={idx} value={item.namaUsaha}>
                      {item.namaUsaha} (KBLI: {item.kbli})
                    </option>
                  ))}
                </select>
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
                info={(identity.kategoriUsaha === 'A' && identity.kbli === '01121' && !modeCadanganPadi) || (identity.kbli === '12004' || (identity.kategoriUsaha === 'C' && /Prajangan Tembakau|Rajangan Tembakau|Industri Tembakau/i.test(identity.namaUsaha))) || (identity.kategoriUsaha === 'A' && identity.kbli === '01150') ? "Diisi otomatis dari Analisis" : "Hasil panen, penjualan barang dagangan, omset jasa utama"}
                error={getFieldError('revenue.nilaiProduksiPenjualan')}
                disabled={(identity.kategoriUsaha === 'A' && identity.kbli === '01121' && !modeCadanganPadi) || (identity.kbli === '12004' || (identity.kategoriUsaha === 'C' && /Prajangan Tembakau|Rajangan Tembakau|Industri Tembakau/i.test(identity.namaUsaha))) || (identity.kategoriUsaha === 'A' && identity.kbli === '01150')}
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

            {/* Analisis Pertanian Tembakau */}
            {calculated.analysis && calculated.analysis.jenisAnalisis === 'PERTANIAN_TEMBAKAU' && (
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800/50 mt-4 animate-fadeIn shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🌿</span>
                    <h4 className="font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wide">
                      Analisis Pertanian Tembakau
                    </h4>
                  </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                    <div className="flex items-center gap-2">
                      <label htmlFor="modeTanamPertanian" className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">Mode Tanam:</label>
                      <select
                        id="modeTanamPertanian"
                        value={modeTanamPertanian}
                        onChange={(e) => setModeTanamPertanian(e.target.value as any)}
                        className="text-xs px-2 py-1 rounded bg-white dark:bg-slate-800 border border-emerald-200 dark:border-emerald-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      >
                        <option value="Normal">Normal (300 m² / 1000 phn)</option>
                        <option value="Padat">Padat (330 m² / 1000 phn)</option>
                        <option value="Renggang">Renggang (350 m² / 1000 phn)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="w-full flex flex-col gap-1.5">
                    <label htmlFor="jumlahPohonPertanian" className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200">
                      Jumlah Pohon Tembakau *
                    </label>
                    <div className="relative flex items-center rounded-lg shadow-sm">
                      <input
                        id="jumlahPohonPertanian"
                        type="number"
                        min="0"
                        step="1"
                        inputMode="numeric"
                        value={jumlahPohonPertanian}
                        onChange={(e) => setJumlahPohonPertanian(e.target.value)}
                        placeholder="Contoh: 1000"
                        className="w-full pl-3 pr-16 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all font-mono font-medium"
                      />
                      <span className="absolute right-3 text-sm font-semibold text-slate-400 select-none">Pohon</span>
                    </div>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500">Sistem otomatis mengisi Nilai Produksi (27.a). Estimasi Rp 1.500/pohon.</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex justify-between items-center bg-white/60 dark:bg-slate-900/40 px-3 py-1.5 rounded border border-emerald-100 dark:border-emerald-800/30">
                    <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">&bull; Jumlah Pohon</span>
                    <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{(calculated.analysis.jumlahPohon || 0).toLocaleString('id-ID', { maximumFractionDigits: 0 })} Pohon</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/60 dark:bg-slate-900/40 px-3 py-1.5 rounded border border-emerald-100 dark:border-emerald-800/30">
                    <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">&bull; Estimasi Luas (m²)</span>
                    <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{(calculated.analysis.luasM2 || 0).toLocaleString('id-ID', { maximumFractionDigits: 0 })} m²</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/60 dark:bg-slate-900/40 px-3 py-1.5 rounded border border-emerald-100 dark:border-emerald-800/30">
                    <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">&bull; Estimasi Luas (Ha)</span>
                    <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{(calculated.analysis.luasHa || 0).toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Ha</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="bg-emerald-100/50 dark:bg-emerald-900/40 p-3 rounded-lg border border-emerald-200 dark:border-emerald-700">
                    <span className="text-xs uppercase font-bold text-emerald-800 dark:text-emerald-300 block mb-2">Estimasi Nilai Jual Sawah</span>
                    <div className="font-mono text-sm text-slate-700 dark:text-slate-300">
                      <div className="flex justify-between">
                        <span>{(calculated.analysis.jumlahPohon || 0).toLocaleString('id-ID', { maximumFractionDigits: 0 })} Pohon &times; Rp 1.500</span>
                      </div>
                      <div className="border-b-2 border-emerald-300 dark:border-emerald-600 my-1"></div>
                      <div className="flex justify-between font-bold text-base text-bps-green">
                        <span>Rp {formatRupiah(calculated.analysis.nilaiJualSawah || 0)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg border border-green-200 dark:border-green-800/50">
                    <span className="text-xs uppercase font-bold text-green-800 dark:text-green-300 block mb-2">Estimasi Laba Kotor Usaha</span>
                    <div className="font-mono text-sm text-slate-700 dark:text-slate-300">
                      <div className="flex justify-between">
                        <span>Pendapatan Rp {formatRupiah(calculated.revenue.totalProduksi || 0)} &minus; Pengeluaran Rp {formatRupiah(calculated.expense.totalPengeluaran || 0)}</span>
                      </div>
                      <div className="border-b-2 border-green-300 dark:border-green-700 my-1"></div>
                      <div className={`flex justify-between font-bold text-base ${calculated.keuntunganKotor >= 0 ? 'text-bps-green' : 'text-red-500'}`}>
                        <span>Rp {formatRupiah(calculated.keuntunganKotor)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Analisis Industri Prajangan Tembakau */}
            {calculated.analysis && calculated.analysis.jenisAnalisis === 'PRAJANGAN_TEMBAKAU' && (
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-4 rounded-xl border border-yellow-200 dark:border-yellow-800/50 mt-4 animate-fadeIn shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🍂</span>
                    <h4 className="font-bold text-yellow-800 dark:text-yellow-300 uppercase tracking-wide">
                      Analisis Industri Prajangan Tembakau
                    </h4>
                  </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                    <div className="flex items-center gap-2">
                      <label htmlFor="jenisTembakauPrajangan" className="text-xs font-semibold text-yellow-700 dark:text-yellow-400">Jenis:</label>
                      <select
                        id="jenisTembakauPrajangan"
                        value={jenisTembakauPrajangan}
                        onChange={(e) => setJenisTembakauPrajangan(e.target.value as any)}
                        className="text-xs px-2 py-1 rounded bg-white dark:bg-slate-800 border border-yellow-200 dark:border-yellow-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                      >
                        <option value="Sawah">Sawah</option>
                        <option value="Tegal">Tegal</option>
                        <option value="Gunung">Gunung</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-2">
                      <label htmlFor="modeTanamPrajangan" className="text-xs font-semibold text-yellow-700 dark:text-yellow-400">Mode Tanam:</label>
                      <select
                        id="modeTanamPrajangan"
                        value={modeTanamPrajangan}
                        onChange={(e) => setModeTanamPrajangan(e.target.value as any)}
                        className="text-xs px-2 py-1 rounded bg-white dark:bg-slate-800 border border-yellow-200 dark:border-yellow-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                      >
                        <option value="Normal">Normal (300 m² / 1000 phn)</option>
                        <option value="Padat">Padat (330 m² / 1000 phn)</option>
                        <option value="Renggang">Renggang (350 m² / 1000 phn)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="w-full flex flex-col gap-1.5">
                    <label htmlFor="jumlahPohonPrajangan" className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200">
                      Jumlah Pohon/Batang Tembakau *
                    </label>
                    <div className="relative flex items-center rounded-lg shadow-sm">
                      <input
                        id="jumlahPohonPrajangan"
                        type="number"
                        min="0"
                        step="1"
                        inputMode="numeric"
                        value={jumlahPohonPrajangan}
                        onChange={(e) => setJumlahPohonPrajangan(e.target.value)}
                        placeholder="Contoh: 1000"
                        className="w-full pl-3 pr-16 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all font-mono font-medium"
                      />
                      <span className="absolute right-3 text-sm font-semibold text-slate-400 select-none">Pohon</span>
                    </div>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500">Sistem otomatis mengisi Nilai Produksi (27.a). Asumsi: 1000 Pohon = 70 Kg Rajangan.</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex justify-between items-center bg-white/60 dark:bg-slate-900/40 px-3 py-1.5 rounded border border-yellow-100 dark:border-yellow-800/30">
                    <span className="text-xs font-medium text-yellow-700 dark:text-yellow-400">&bull; Jumlah Pohon</span>
                    <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{(calculated.analysis.jumlahPohon || 0).toLocaleString('id-ID', { maximumFractionDigits: 0 })} Pohon</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/60 dark:bg-slate-900/40 px-3 py-1.5 rounded border border-yellow-100 dark:border-yellow-800/30">
                    <span className="text-xs font-medium text-yellow-700 dark:text-yellow-400">&bull; Produksi Rajangan (Kg)</span>
                    <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{(calculated.analysis.produksiKg || 0).toLocaleString('id-ID', { maximumFractionDigits: 2 })} Kg</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/60 dark:bg-slate-900/40 px-3 py-1.5 rounded border border-yellow-100 dark:border-yellow-800/30">
                    <span className="text-xs font-medium text-yellow-700 dark:text-yellow-400">&bull; Harga Acuan per Kg</span>
                    <span className="font-mono font-bold text-slate-800 dark:text-slate-200">Rp {formatRupiah(calculated.analysis.hargaPerKg || 0)}</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/60 dark:bg-slate-900/40 px-3 py-1.5 rounded border border-yellow-100 dark:border-yellow-800/30">
                    <span className="text-xs font-medium text-yellow-700 dark:text-yellow-400">&bull; Estimasi Luas (m²)</span>
                    <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{(calculated.analysis.luasM2 || 0).toLocaleString('id-ID', { maximumFractionDigits: 0 })} m²</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/60 dark:bg-slate-900/40 px-3 py-1.5 rounded border border-yellow-100 dark:border-yellow-800/30">
                    <span className="text-xs font-medium text-yellow-700 dark:text-yellow-400">&bull; Estimasi Luas (Ha)</span>
                    <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{(calculated.analysis.luasHa || 0).toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Ha</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="bg-yellow-100/50 dark:bg-yellow-900/40 p-3 rounded-lg border border-yellow-200 dark:border-yellow-700">
                    <span className="text-xs uppercase font-bold text-yellow-800 dark:text-yellow-300 block mb-2">Estimasi Pendapatan Rajangan</span>
                    <div className="font-mono text-sm text-slate-700 dark:text-slate-300">
                      <div className="flex justify-between">
                        <span>{(calculated.analysis.produksiKg || 0).toLocaleString('id-ID', { maximumFractionDigits: 2 })} Kg &times; Rp {formatRupiah(calculated.analysis.hargaPerKg || 0)}</span>
                      </div>
                      <div className="border-b-2 border-yellow-300 dark:border-yellow-600 my-1"></div>
                      <div className="flex justify-between font-bold text-base text-bps-green">
                        <span>Rp {formatRupiah(calculated.analysis.pendapatanRajangan || 0)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg border border-green-200 dark:border-green-800/50">
                    <span className="text-xs uppercase font-bold text-green-800 dark:text-green-300 block mb-2">Estimasi Laba Kotor Usaha</span>
                    <div className="font-mono text-sm text-slate-700 dark:text-slate-300">
                      <div className="flex justify-between">
                        <span>Pendapatan Rp {formatRupiah(calculated.revenue.totalProduksi || 0)} &minus; Pengeluaran Rp {formatRupiah(calculated.expense.totalPengeluaran || 0)}</span>
                      </div>
                      <div className="border-b-2 border-green-300 dark:border-green-700 my-1"></div>
                      <div className={`flex justify-between font-bold text-base ${calculated.keuntunganKotor >= 0 ? 'text-bps-green' : 'text-red-500'}`}>
                        <span>Rp {formatRupiah(calculated.keuntunganKotor)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Analisis Pertanian Padi Hibrida */}
            {calculated.analysis && calculated.analysis.jenisAnalisis === 'Pertanian Padi Hibrida' && (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800/50 mt-4 animate-fadeIn shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🌾</span>
                    <h4 className="font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wide">
                      Analisis Pertanian Padi Hibrida
                    </h4>
                  </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                    <div className="flex items-center gap-2">
                      <label htmlFor="jenisPenjualanPadi" className="text-xs font-semibold text-amber-700 dark:text-amber-400">Jenis Penjualan:</label>
                      <select
                        id="jenisPenjualanPadi"
                        value={jenisPenjualanPadi}
                        onChange={(e) => setJenisPenjualanPadi(e.target.value)}
                        className="text-xs px-2 py-1 rounded bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="Gabah Kering Panen (GKP)">Gabah Kering Panen (GKP)</option>
                        <option value="Beras Medium">Beras Medium</option>
                        <option value="Beras Premium">Beras Premium</option>
                        <option value="Beras SPHP">Beras SPHP</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-amber-800 dark:text-amber-400">
                      Metode Perhitungan
                    </span>
                    <button
                      type="button"
                      onClick={() => setModeCadanganPadi(!modeCadanganPadi)}
                      className={`text-[10px] px-2 py-1 rounded-md font-bold transition-colors ${
                        modeCadanganPadi 
                          ? 'bg-amber-500 text-white dark:bg-amber-600 shadow-sm' 
                          : 'bg-white text-slate-600 border border-slate-200 hover:bg-amber-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-700'
                      }`}
                    >
                      {modeCadanganPadi ? '✓ Hitung dari Pendapatan (Aktif)' : 'Hitung dari Pendapatan'}
                    </button>
                  </div>
                  
                  {!modeCadanganPadi ? (
                    <div className="w-full flex flex-col gap-1.5">
                      <label htmlFor="jumlahSakPadi" className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200">
                        Jumlah Sak/Karung Hasil Panen *
                      </label>
                      <div className="relative flex items-center rounded-lg shadow-sm">
                        <input
                          id="jumlahSakPadi"
                          type="number"
                          min="0"
                          step="1"
                          inputMode="numeric"
                          value={jumlahSakPadi}
                          onChange={(e) => setJumlahSakPadi(e.target.value)}
                          placeholder="Contoh: 40"
                          className="w-full pl-3 pr-12 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all font-mono font-medium"
                        />
                        <span className="absolute right-3 text-sm font-semibold text-slate-400 select-none">Sak</span>
                      </div>
                      <span className="text-[11px] text-slate-400 dark:text-slate-500">Sistem otomatis mengisi Nilai Produksi (27.a). 1 Sak = 50 Kg</span>
                    </div>
                  ) : (
                    <div className="bg-white/80 dark:bg-slate-900/50 p-3 rounded-lg border border-amber-200 dark:border-amber-700/50">
                      <p className="text-xs text-amber-700 dark:text-amber-400">
                        Mode Cadangan Aktif: Sistem mengestimasi Jumlah Sak dan analisis lainnya dari input <strong>27.a Nilai Produksi / Hasil Penjualan Utama</strong>.
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex justify-between items-center bg-white/60 dark:bg-slate-900/40 px-3 py-1.5 rounded border border-amber-100 dark:border-amber-800/30">
                    <span className="text-xs font-medium text-amber-700 dark:text-amber-400">&bull; Jumlah Sak</span>
                    <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{(calculated.analysis.jumlahSak || 0).toLocaleString('id-ID', { maximumFractionDigits: 2 })} Sak</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/60 dark:bg-slate-900/40 px-3 py-1.5 rounded border border-amber-100 dark:border-amber-800/30">
                    <span className="text-xs font-medium text-amber-700 dark:text-amber-400">&bull; Produksi</span>
                    <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{(calculated.analysis.produksiKg || 0).toLocaleString('id-ID', { maximumFractionDigits: 2 })} Kg</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/60 dark:bg-slate-900/40 px-3 py-1.5 rounded border border-amber-100 dark:border-amber-800/30">
                    <span className="text-xs font-medium text-amber-700 dark:text-amber-400">&bull; Estimasi Luas (m²)</span>
                    <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{(calculated.analysis.estimasiLuasM2 || 0).toLocaleString('id-ID', { maximumFractionDigits: 0 })} m²</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/60 dark:bg-slate-900/40 px-3 py-1.5 rounded border border-amber-100 dark:border-amber-800/30">
                    <span className="text-xs font-medium text-amber-700 dark:text-amber-400">&bull; Estimasi Luas (Ha)</span>
                    <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{(calculated.analysis.estimasiLuasHa || 0).toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Ha</span>
                  </div>
                </div>

                <div className="bg-amber-100/50 dark:bg-amber-900/40 p-3 rounded-lg border border-amber-200 dark:border-amber-700">
                  <span className="text-xs uppercase font-bold text-amber-800 dark:text-amber-300 block mb-2">Estimasi Nilai Jual</span>
                  <div className="font-mono text-sm text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between">
                      <span>{(calculated.analysis.produksiKg || 0).toLocaleString('id-ID', { maximumFractionDigits: 2 })} Kg &times; Rp {formatRupiah(calculated.analysis.hargaAcuanKg || 0)}</span>
                    </div>
                    <div className="border-b-2 border-amber-300 dark:border-amber-600 my-1"></div>
                    <div className="flex justify-between font-bold text-base text-bps-green">
                      <span>Rp {formatRupiah(calculated.analysis.estimasiNilaiJual || 0)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Profitability Panel */}
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-100 dark:border-blue-900 flex justify-between items-center">
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                <Info className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs md:text-sm font-semibold">Estimasi Laba Kotor Usaha (Pendapatan - Pengeluaran):</span>
              </div>
              <span className={`text-base md:text-xl font-mono font-bold ml-auto px-4 py-1.5 rounded border shadow-sm ${
                calculated.keuntunganKotor >= 0 ? 'text-bps-green bg-green-50 border-green-200' : 'text-red-600 bg-red-50 border-red-200'
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
