import React, { useState, useEffect } from 'react';
import { Calculator, X, Copy, CheckCircle, Info } from 'lucide-react';
import { InputRupiah } from '../ui/InputRupiah';

interface TembakauEstimatorProps {
  onApply: (luasM2: number) => void;
  onClose: () => void;
}

export const TembakauEstimator: React.FC<TembakauEstimatorProps> = ({ onApply, onClose }) => {
  const [pendapatan, setPendapatan] = useState<number>(0);
  const [jumlahBatang, setJumlahBatang] = useState<number>(0);
  const [luasM2, setLuasM2] = useState<number>(0);
  const [luasHa, setLuasHa] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    // 1000 batang = 300 m2
    // 1 batang = Rp 1500
    if (pendapatan > 0) {
      const batang = Math.floor(pendapatan / 1500);
      const luasLahanM2 = (batang / 1000) * 300;
      const luasLahanHa = luasLahanM2 / 10000;

      setJumlahBatang(batang);
      setLuasM2(Math.round(luasLahanM2 * 100) / 100);
      setLuasHa(luasLahanHa);
    } else {
      setJumlahBatang(0);
      setLuasM2(0);
      setLuasHa(0);
    }
  }, [pendapatan]);

  const handleCopy = () => {
    const textToCopy = `Pendapatan: Rp ${new Intl.NumberFormat('id-ID').format(pendapatan)}
Jumlah Batang: ${new Intl.NumberFormat('id-ID').format(jumlahBatang)} batang
Luas Lahan: ${new Intl.NumberFormat('id-ID').format(luasM2)} m²
Luas Lahan: ${new Intl.NumberFormat('id-ID', { maximumFractionDigits: 4 }).format(luasHa)} Ha`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleApply = () => {
    onApply(luasM2);
  };

  const handleReset = () => {
    setPendapatan(0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-lg shadow-2xl flex flex-col overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-emerald-50 dark:bg-emerald-900/20">
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
            <Calculator className="w-5 h-5" />
            <h2 className="font-bold">Estimasi Luas Lahan Tembakau</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-full hover:bg-white/50 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <InputRupiah
              id="pendapatanTembakau"
              label="Total Pendapatan Tembakau (Per Tahun)"
              value={pendapatan}
              onChange={setPendapatan}
              placeholder="Contoh: 7000000"
            />
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50 flex flex-col gap-3">
            <div className="flex justify-between items-end border-b border-slate-200 dark:border-slate-700 pb-2">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Estimasi Jumlah Batang</span>
              <span className="text-base font-bold text-slate-800 dark:text-slate-200">
                {new Intl.NumberFormat('id-ID').format(jumlahBatang)} <span className="text-xs font-medium text-slate-500">batang</span>
              </span>
            </div>
            
            <div className="flex justify-between items-end border-b border-slate-200 dark:border-slate-700 pb-2">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Estimasi Luas Lahan (m²)</span>
              <span className="text-lg font-bold text-bps-blue dark:text-bps-blue-light">
                {new Intl.NumberFormat('id-ID').format(luasM2)} <span className="text-xs font-medium text-slate-500">m²</span>
              </span>
            </div>

            <div className="flex justify-between items-end pb-1">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Estimasi Luas Lahan (Hektar)</span>
              <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">
                {new Intl.NumberFormat('id-ID', { maximumFractionDigits: 4 }).format(luasHa)} <span className="text-xs font-medium text-slate-500">Ha</span>
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2 text-[10px] text-slate-500 dark:text-slate-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
            <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
            <p>
              Perhitungan ini merupakan estimasi berdasarkan asumsi standar <strong>1.000 batang tembakau setara dengan 300 m² lahan</strong> dan harga rata-rata <strong>Rp1.500 per batang</strong>. Hasil digunakan sebagai alat bantu petugas SE2026 apabila responden tidak mengetahui luas lahan secara pasti.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2 md:justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex gap-2 w-full md:w-auto">
            <button
              onClick={handleReset}
              className="flex-1 md:flex-none px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              Reset
            </button>
            <button
              onClick={handleCopy}
              className="flex-1 md:flex-none px-4 py-2 text-xs font-semibold flex items-center justify-center gap-1.5 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg shadow-sm transition-colors"
            >
              {copied ? <CheckCircle className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Tersalin!' : 'Salin Hasil'}
            </button>
          </div>
          
          <button
            onClick={handleApply}
            disabled={luasM2 <= 0}
            className="w-full md:w-auto px-5 py-2 text-sm font-bold text-white bg-bps-green hover:bg-bps-green-dark disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg shadow-md hover:shadow-lg shadow-bps-green/20 transition-all active:scale-95"
          >
            Gunakan untuk Isian SE2026
          </button>
        </div>
      </div>
    </div>
  );
};
