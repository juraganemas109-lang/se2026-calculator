import React from 'react';
import { BusinessRecord, formatRupiah } from '@/utils/calculatorHelper';
import { TrendingUp, TrendingDown, DollarSign, Briefcase, Maximize, MapPin } from 'lucide-react';

interface OverviewProps {
  records: BusinessRecord[];
  selectedId: string | 'all';
  onSelectId: (id: string | 'all') => void;
}

export const Overview: React.FC<OverviewProps> = ({ records, selectedId, onSelectId }) => {
  // Compute aggregate totals
  const getAggregatedData = () => {
    let totalProduksi = 0;
    let totalPengeluaran = 0;
    let totalAset = 0;
    let totalLuasTanah = 0;
    let totalLuasBangunan = 0;

    records.forEach(r => {
      totalProduksi += r.revenue.totalProduksi;
      totalPengeluaran += r.expense.totalPengeluaran;
      totalAset += r.asset.totalAset;
      totalLuasTanah += r.dimension.luasTanah;
      totalLuasBangunan += r.dimension.luasBangunan;
    });

    const profit = totalProduksi - totalPengeluaran;

    return {
      name: 'Gabungan Semua Usaha',
      totalProduksi,
      totalPengeluaran,
      totalAset,
      luasTanah: totalLuasTanah,
      luasBangunan: totalLuasBangunan,
      keuntunganKotor: profit,
    };
  };

  // Get currently displayed data
  const currentData = React.useMemo(() => {
    if (selectedId === 'all' || records.length === 0) {
      return getAggregatedData();
    }
    const rec = records.find(r => r.id === selectedId);
    if (!rec) return getAggregatedData();

    return {
      name: rec.identity.namaUsaha,
      totalProduksi: rec.revenue.totalProduksi,
      totalPengeluaran: rec.expense.totalPengeluaran,
      totalAset: rec.asset.totalAset,
      luasTanah: rec.dimension.luasTanah,
      luasBangunan: rec.dimension.luasBangunan,
      keuntunganKotor: rec.revenue.totalProduksi - rec.expense.totalPengeluaran,
    };
  }, [records, selectedId]);

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Selector and Title Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
        <div>
          <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Dashboard Analisis SE2026
          </h3>
          <p className="text-sm md:text-base font-bold text-slate-800 dark:text-slate-100 mt-0.5">
            Menampilkan data untuk: <span className="text-bps-blue dark:text-bps-blue-light">{currentData.name}</span>
          </p>
        </div>
        
        {records.length > 0 && (
          <div className="flex items-center gap-2">
            <label htmlFor="select-business" className="text-xs font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap">
              Pilih Usaha:
            </label>
            <select
              id="select-business"
              value={selectedId}
              onChange={e => onSelectId(e.target.value as any)}
              className="px-3 py-1.5 text-xs md:text-sm bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-bps-blue-light/30 transition-all font-medium cursor-pointer"
            >
              <option value="all">Gabungan Semua Usaha ({records.length})</option>
              {records.map(r => (
                <option key={r.id} value={r.id}>
                  {r.identity.namaUsaha} ({r.identity.kbli})
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Card 1: Total Pendapatan / Produksi */}
        <div className="relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group">
          <div className="absolute top-0 left-0 w-2 h-full bg-bps-green" />
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Total Produksi / Pendapatan
              </span>
              <span className="text-lg md:text-2xl font-mono font-bold text-slate-800 dark:text-slate-100 mt-2">
                Rp {formatRupiah(currentData.totalProduksi)}
              </span>
            </div>
            <div className="p-3 bg-bps-green/10 text-bps-green rounded-xl group-hover:scale-110 transition-transform">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </div>
          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium block mt-2">
            SE2026 Rincian 27.c (27.a + 27.b)
          </span>
        </div>

        {/* Card 2: Total Pengeluaran */}
        <div className="relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group">
          <div className="absolute top-0 left-0 w-2 h-full bg-red-500" />
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Total Pengeluaran Usaha
              </span>
              <span className="text-lg md:text-2xl font-mono font-bold text-slate-800 dark:text-slate-100 mt-2">
                Rp {formatRupiah(currentData.totalPengeluaran)}
              </span>
            </div>
            <div className="p-3 bg-red-500/10 text-red-500 rounded-xl group-hover:scale-110 transition-transform">
              <TrendingDown className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </div>
          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium block mt-2">
            SE2026 Rincian 26.f (a+b+c+d+e)
          </span>
        </div>

        {/* Card 3: Keuntungan Kotor */}
        <div className="relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group">
          <div className="absolute top-0 left-0 w-2 h-full bg-amber-500" />
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Keuntungan Kotor Terhitung
              </span>
              <span className={`text-lg md:text-2xl font-mono font-bold mt-2 ${
                currentData.keuntunganKotor >= 0 ? 'text-bps-green' : 'text-red-500'
              }`}>
                Rp {formatRupiah(currentData.keuntunganKotor)}
              </span>
            </div>
            <div className={`p-3 rounded-xl group-hover:scale-110 transition-transform ${
              currentData.keuntunganKotor >= 0 ? 'bg-bps-green/10 text-bps-green' : 'bg-red-500/10 text-red-500'
            }`}>
              <DollarSign className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </div>
          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium block mt-2">
            Total Produksi dikurangi Pengeluaran
          </span>
        </div>

        {/* Card 4: Total Aset */}
        <div className="relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group">
          <div className="absolute top-0 left-0 w-2 h-full bg-bps-blue" />
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Estimasi Total Aset Usaha
              </span>
              <span className="text-lg md:text-2xl font-mono font-bold text-slate-800 dark:text-slate-100 mt-2">
                Rp {formatRupiah(currentData.totalAset)}
              </span>
            </div>
            <div className="p-3 bg-bps-blue/10 text-bps-blue rounded-xl group-hover:scale-110 transition-transform">
              <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </div>
          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium block mt-2">
            SE2026 Rincian 28 (Tanah + Bgn + Alat)
          </span>
        </div>
      </div>

      {/* Dimensions Metrics Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 rounded-xl">
            <Maximize className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">
              Dimensi Tempat Usaha terhitung
            </h4>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Diambil dari perhitungan panjang dan lebar fisik tanah/bangunan usaha
            </p>
          </div>
        </div>

        <div className="flex gap-8 items-center border-t md:border-t-0 pt-4 md:pt-0 border-slate-100 dark:border-slate-800">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-indigo-500" />
              Luas Tanah
            </span>
            <span className="text-sm md:text-lg font-mono font-bold text-slate-800 dark:text-slate-100 mt-1">
              {currentData.luasTanah.toFixed(1).replace('.0', '')} m²
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-pink-500" />
              Luas Bangunan
            </span>
            <span className="text-sm md:text-lg font-mono font-bold text-slate-800 dark:text-slate-100 mt-1">
              {currentData.luasBangunan.toFixed(1).replace('.0', '')} m²
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
