const fs = require('fs');

const form_content = `import React, { useState, useEffect } from 'react';
import { 
  BusinessRecord, 
  BusinessData,
  calculateTotals, 
  validateSE2026Data, 
  ValidationError,
  formatRupiah,
  JenisUsahaType,
  parseRupiah
} from '@/utils/calculatorHelper';
import { InputRupiah } from '../ui/InputRupiah';
import { Save, RefreshCw, AlertTriangle, CheckCircle, Info, ChevronRight, ChevronLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TembakauEstimator } from './TembakauEstimator';

interface BusinessFormProps {
  onSave: (record: BusinessRecord) => void;
  editRecord?: BusinessRecord | null;
  onCancelEdit?: () => void;
}

const INITIAL_BUSINESS_DATA = (id: JenisUsahaType, namaUsaha: string, kbli: string, kategoriUsaha: string): BusinessData => ({
  id,
  isActive: false,
  namaUsaha,
  kbli,
  kategoriUsaha,
  tahunBerdiri: '2026',
  worker: { pekerjaLaki: 0, pekerjaPerempuan: 0, pekerjaDibayar: 0, pekerjaTidakDibayar: 0, totalPekerjaGender: 0, totalPekerjaStatus: 0 },
  expense: { upahGaji: 0, biayaProduksi: 0, biayaPembelianBarang: 0, biayaOperasional: 0, biayaNonOperasional: 0, totalPengeluaran: 0 },
  revenue: { nilaiProduksiPenjualan: 0, pendapatanLainnya: 0, totalProduksi: 0 },
  asset: { mesinPeralatan: 0, kendaraanUsaha: 0, nilaiTanah: 0, nilaiBangunan: 0, totalAset: 0 },
  dimension: { panjangTanah: 0, lebarTanah: 0, panjangBangunan: 0, lebarBangunan: 0, hargaTanahPerM2: 0, hargaBangunanPerM2: 0, modeLuasLahan: false, luasEstimasi: 0, luasTanah: 0, luasBangunan: 0 },
  keuntunganKotor: 0
});

export const BusinessForm: React.FC<BusinessFormProps> = ({ onSave, editRecord, onCancelEdit }) => {
  const [identity, setIdentity] = useState({
    namaPemilik: '',
    nomorHp: '',
    alamat: ''
  });

  const [businesses, setBusinesses] = useState<BusinessData[]>([
    INITIAL_BUSINESS_DATA('PADI', 'Pertanian Padi Hibrida', '01121', 'A'),
    INITIAL_BUSINESS_DATA('TEMBAKAU', 'Pertanian Tembakau', '01150', 'A'),
    INITIAL_BUSINESS_DATA('PRAJANGAN', 'Industri Prajangan Tembakau', '12004', 'C')
  ]);

  const [activeTab, setActiveTab] = useState<JenisUsahaType>('PADI');
  const [errors, setErrors] = useState<ValidationError[]>([]);
  
  // Custom states for estimators
  const [modeTanamPertanian, setModeTanamPertanian] = useState<'Normal'|'Padat'|'Renggang'>('Normal');
  const [jumlahPohonPertanian, setJumlahPohonPertanian] = useState('');
  
  const [modeTanamPrajangan, setModeTanamPrajangan] = useState<'Normal'|'Padat'|'Renggang'>('Normal');
  const [jumlahPohonPrajangan, setJumlahPohonPrajangan] = useState('');
  const [jenisTembakauPrajangan, setJenisTembakauPrajangan] = useState<'Sawah'|'Tegal'|'Gunung'>('Gunung');

  const [jumlahSakPadi, setJumlahSakPadi] = useState('');
  const [jenisPenjualanPadi, setJenisPenjualanPadi] = useState('Gabah Kering Panen (GKP)');
  const [modeCadanganPadi, setModeCadanganPadi] = useState(false);

  useEffect(() => {
    if (editRecord) {
      setIdentity(editRecord.identity);
      setBusinesses(editRecord.businesses);
      const firstActive = editRecord.businesses.find(b => b.isActive);
      if (firstActive) setActiveTab(firstActive.id);
    }
  }, [editRecord]);

  const updateBusiness = (id: JenisUsahaType, field: keyof BusinessData, value: any) => {
    setBusinesses(prev => prev.map(b => b.id === id ? { ...b, [field]: value } : b));
  };

  const updateNested = (id: JenisUsahaType, module: 'worker'|'expense'|'revenue'|'asset'|'dimension', field: string, value: any) => {
    setBusinesses(prev => prev.map(b => {
      if (b.id !== id) return b;
      return {
        ...b,
        [module]: {
          ...b[module],
          [field]: value
        }
      };
    }));
  };

  const toggleBusiness = (id: JenisUsahaType) => {
    setBusinesses(prev => prev.map(b => b.id === id ? { ...b, isActive: !b.isActive } : b));
  };

  const handleSave = () => {
    // Recalculate all active businesses
    const calculatedBusinesses = businesses.map(b => {
      if (!b.isActive) return b;
      const calc = calculateTotals(
        b.expense, b.revenue, b.dimension, b.asset, b.worker, 
        { kbli: b.kbli, kategoriUsaha: b.kategoriUsaha, namaUsaha: b.namaUsaha },
        'Normal', 'Sawah', 
        b.id === 'TEMBAKAU' ? modeTanamPertanian : 'Normal',
        b.id === 'PADI' ? Number(jumlahSakPadi) : 0,
        b.id === 'PADI' ? jenisPenjualanPadi : '',
        b.id === 'PRAJANGAN' ? Number(jumlahPohonPrajangan) : 0,
        b.id === 'PRAJANGAN' ? jenisTembakauPrajangan : 'Sawah',
        b.id === 'PRAJANGAN' ? modeTanamPrajangan : 'Normal',
        b.id === 'TEMBAKAU' ? Number(jumlahPohonPertanian) : 0
      );
      return {
        ...b,
        expense: calc.expense,
        revenue: calc.revenue,
        dimension: calc.dimension,
        asset: calc.asset,
        worker: calc.worker!,
        keuntunganKotor: calc.keuntunganKotor,
        analysis: calc.analysis
      };
    });

    const record: BusinessRecord = {
      id: editRecord?.id || crypto.randomUUID(),
      createdAt: editRecord?.createdAt || new Date().toISOString(),
      identity,
      businesses: calculatedBusinesses
    };

    const validationErrors = validateSE2026Data(record);
    if (validationErrors.filter(e => e.type === 'error').length > 0) {
      setErrors(validationErrors);
      window.scrollTo(0, 0);
      return;
    }

    setErrors([]);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    onSave(record);
  };

  const activeBusinesses = businesses.filter(b => b.isActive);

  return (
    <div className="max-w-4xl mx-auto pb-12">
      {errors.length > 0 && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-6 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <h3 className="text-red-800 font-bold">Mohon perbaiki kesalahan berikut:</h3>
          </div>
          <ul className="list-disc pl-5 space-y-1">
            {errors.map((e, i) => (
              <li key={i} className={\`text-sm \${e.type === 'error' ? 'text-red-600' : 'text-orange-600'}\`}>
                {e.message}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Profil Responden */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Profil Responden</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Responden / Pemilik *</label>
            <input type="text" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={identity.namaPemilik} onChange={e => setIdentity({...identity, namaPemilik: e.target.value})}
              placeholder="Masukkan nama pemilik" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Nomor HP / WhatsApp *</label>
            <input type="tel" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={identity.nomorHp} onChange={e => setIdentity({...identity, nomorHp: e.target.value})}
              placeholder="08xxxxxxxxxx" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Alamat Lengkap</label>
            <textarea className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={identity.alamat} onChange={e => setIdentity({...identity, alamat: e.target.value})}
              placeholder="Masukkan alamat lengkap..." rows={2} />
          </div>
        </div>
      </div>

      {/* Pemilihan Usaha */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Pilih Usaha yang Dimiliki</h2>
        <p className="text-sm text-gray-500 mb-4">Centang satu atau lebih usaha yang dimiliki oleh responden ini.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {businesses.map(b => (
            <label key={b.id} className={\`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all \${b.isActive ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}\`}>
              <input type="checkbox" className="w-5 h-5 text-blue-600 rounded"
                checked={b.isActive} onChange={() => { toggleBusiness(b.id); setActiveTab(b.id); }} />
              <span className="font-semibold text-gray-800">{b.namaUsaha}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Tabs untuk Usaha Aktif */}
      {activeBusinesses.length > 0 && (
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden mb-6">
          <div className="flex border-b bg-gray-50 overflow-x-auto">
            {activeBusinesses.map(b => (
              <button key={b.id} onClick={() => setActiveTab(b.id)}
                className={\`px-6 py-4 font-bold whitespace-nowrap transition-colors \${activeTab === b.id ? 'text-blue-600 border-b-2 border-blue-600 bg-white' : 'text-gray-500 hover:bg-gray-100'}\`}>
                {b.namaUsaha}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeBusinesses.map(b => b.id === activeTab && (
              <div key={b.id} className="space-y-8 animate-fade-in">
                
                {/* Info Usaha */}
                <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-blue-800">KBLI: {b.kbli} (Kategori {b.kategoriUsaha})</h3>
                    <p className="text-sm text-blue-700 mt-1">Lengkapi data operasional khusus untuk usaha {b.namaUsaha} di bawah ini.</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Tahun Berdiri *</label>
                  <input type="number" className="w-full md:w-1/3 p-2.5 border border-gray-300 rounded-lg"
                    value={b.tahunBerdiri} onChange={e => updateBusiness(b.id, 'tahunBerdiri', e.target.value)} />
                </div>

                {/* Modul Pekerja */}
                <section>
                  <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Tenaga Kerja (Rincian 24)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <h4 className="font-semibold text-gray-700 mb-3 text-center">Berdasarkan Jenis Kelamin</h4>
                      <div className="space-y-3">
                        <InputRupiah label="Pekerja Laki-laki" value={b.worker.pekerjaLaki} onChange={v => updateNested(b.id, 'worker', 'pekerjaLaki', v)} isNumeric />
                        <InputRupiah label="Pekerja Perempuan" value={b.worker.pekerjaPerempuan} onChange={v => updateNested(b.id, 'worker', 'pekerjaPerempuan', v)} isNumeric />
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <h4 className="font-semibold text-gray-700 mb-3 text-center">Berdasarkan Status</h4>
                      <div className="space-y-3">
                        <InputRupiah label="Pekerja Dibayar" value={b.worker.pekerjaDibayar} onChange={v => updateNested(b.id, 'worker', 'pekerjaDibayar', v)} isNumeric />
                        <InputRupiah label="Pekerja Tidak Dibayar" value={b.worker.pekerjaTidakDibayar} onChange={v => updateNested(b.id, 'worker', 'pekerjaTidakDibayar', v)} isNumeric />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Khusus Analisis / Tembakau Estimator */}
                {b.id === 'TEMBAKAU' && (
                  <section>
                    <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Estimasi Cepat Pertanian Tembakau</h3>
                    <TembakauEstimator 
                      jenis="Pertanian"
                      jumlahPohon={jumlahPohonPertanian}
                      setJumlahPohon={setJumlahPohonPertanian}
                      modeTanam={modeTanamPertanian}
                      setModeTanam={setModeTanamPertanian}
                    />
                  </section>
                )}
                {b.id === 'PRAJANGAN' && (
                  <section>
                    <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Estimasi Cepat Prajangan Tembakau</h3>
                    <TembakauEstimator 
                      jenis="Prajangan"
                      jumlahPohon={jumlahPohonPrajangan}
                      setJumlahPohon={setJumlahPohonPrajangan}
                      modeTanam={modeTanamPrajangan}
                      setModeTanam={setModeTanamPrajangan}
                      jenisTembakau={jenisTembakauPrajangan}
                      setJenisTembakau={setJenisTembakauPrajangan}
                    />
                  </section>
                )}
                {b.id === 'PADI' && (
                  <section className="bg-green-50 p-4 rounded-xl border border-green-200">
                     <h3 className="text-lg font-bold text-green-800 mb-4 border-b border-green-200 pb-2">Estimasi Padi Hibrida</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <div>
                         <label className="block text-sm font-semibold text-gray-700 mb-1">Jumlah Sak / Karung (Bila ada)</label>
                         <input type="number" className="w-full p-2.5 border border-gray-300 rounded-lg"
                            value={jumlahSakPadi} onChange={e => setJumlahSakPadi(e.target.value)} placeholder="Misal: 100" />
                       </div>
                       <div>
                         <label className="block text-sm font-semibold text-gray-700 mb-1">Jenis Penjualan (Harga Acuan)</label>
                         <select className="w-full p-2.5 border border-gray-300 rounded-lg"
                            value={jenisPenjualanPadi} onChange={e => setJenisPenjualanPadi(e.target.value)}>
                            <option value="Gabah Kering Panen (GKP)">Gabah Kering Panen (Rp 7.000/kg)</option>
                            <option value="Beras Medium">Beras Medium (Rp 13.500/kg)</option>
                            <option value="Beras Premium">Beras Premium (Rp 16.000/kg)</option>
                         </select>
                       </div>
                     </div>
                  </section>
                )}

                {/* Modul Keuangan */}
                <section>
                  <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Pendapatan & Pengeluaran Tahunan</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-green-700 mb-2 border-b pb-1">Pendapatan</h4>
                      <InputRupiah label="Nilai Penjualan Utama (27.a)" value={b.revenue.nilaiProduksiPenjualan} onChange={v => updateNested(b.id, 'revenue', 'nilaiProduksiPenjualan', v)} />
                      <InputRupiah label="Pendapatan Lainnya (27.b)" value={b.revenue.pendapatanLainnya} onChange={v => updateNested(b.id, 'revenue', 'pendapatanLainnya', v)} />
                    </div>
                    <div className="space-y-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-red-700 mb-2 border-b pb-1">Pengeluaran</h4>
                      <InputRupiah label="Upah & Gaji (26.a)" value={b.expense.upahGaji} onChange={v => updateNested(b.id, 'expense', 'upahGaji', v)} />
                      <InputRupiah label="Biaya Produksi Utama (26.b)" value={b.expense.biayaProduksi} onChange={v => updateNested(b.id, 'expense', 'biayaProduksi', v)} />
                      <InputRupiah label="Pembelian Barang Dagangan (26.c)" value={b.expense.biayaPembelianBarang} onChange={v => updateNested(b.id, 'expense', 'biayaPembelianBarang', v)} />
                      <InputRupiah label="Biaya Operasional (26.d)" value={b.expense.biayaOperasional} onChange={v => updateNested(b.id, 'expense', 'biayaOperasional', v)} />
                      <InputRupiah label="Biaya Non-Operasional (26.e)" value={b.expense.biayaNonOperasional} onChange={v => updateNested(b.id, 'expense', 'biayaNonOperasional', v)} />
                    </div>
                  </div>
                </section>

                {/* Aset dan Lahan */}
                <section>
                  <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Aset & Lahan (Rincian 28)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <h4 className="font-semibold text-gray-700 mb-2">Nilai Aset</h4>
                      <InputRupiah label="Mesin & Peralatan Khusus (28.c)" value={b.asset.mesinPeralatan} onChange={v => updateNested(b.id, 'asset', 'mesinPeralatan', v)} />
                      <InputRupiah label="Kendaraan Usaha (28.d)" value={b.asset.kendaraanUsaha} onChange={v => updateNested(b.id, 'asset', 'kendaraanUsaha', v)} />
                    </div>
                    <div className="space-y-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <h4 className="font-semibold text-gray-700 mb-2">Lahan & Bangunan</h4>
                      <label className="flex items-center gap-2 mb-3">
                        <input type="checkbox" checked={b.dimension.modeLuasLahan} onChange={e => updateNested(b.id, 'dimension', 'modeLuasLahan', e.target.checked)} className="rounded text-blue-600" />
                        <span className="text-sm font-medium text-gray-700">Input Langsung Luas (Tanpa Panjang x Lebar)</span>
                      </label>
                      {b.dimension.modeLuasLahan ? (
                        <InputRupiah label="Luas Lahan/Tanah (m²)" value={b.dimension.luasEstimasi} onChange={v => updateNested(b.id, 'dimension', 'luasEstimasi', v)} isNumeric />
                      ) : (
                        <div className="flex gap-2">
                           <div className="w-1/2"><InputRupiah label="Panjang (m)" value={b.dimension.panjangTanah} onChange={v => updateNested(b.id, 'dimension', 'panjangTanah', v)} isNumeric /></div>
                           <div className="w-1/2"><InputRupiah label="Lebar (m)" value={b.dimension.lebarTanah} onChange={v => updateNested(b.id, 'dimension', 'lebarTanah', v)} isNumeric /></div>
                        </div>
                      )}
                      <InputRupiah label="Harga Tanah per m²" value={b.dimension.hargaTanahPerM2} onChange={v => updateNested(b.id, 'dimension', 'hargaTanahPerM2', v)} />
                    </div>
                  </div>
                </section>
                
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tombol Simpan */}
      <div className="flex items-center justify-between pt-6 border-t mt-8">
        <button type="button" onClick={onCancelEdit} className="px-6 py-2.5 text-gray-600 font-semibold hover:bg-gray-100 rounded-xl transition-colors">
          Batal
        </button>
        <button onClick={handleSave} disabled={activeBusinesses.length === 0}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-200">
          <Save className="w-5 h-5" />
          {editRecord ? 'Simpan Perubahan Data' : 'Simpan Kuesioner Responden'}
        </button>
      </div>

    </div>
  );
};
`;

fs.writeFileSync('src/components/calculator/BusinessForm.tsx', form_content, 'utf8');
console.log('Done generating BusinessForm.tsx');
