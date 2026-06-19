import React from 'react';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend 
} from 'recharts';
import { BusinessRecord, formatRupiah } from '@/utils/calculatorHelper';

interface AnalyticsChartsProps {
  record: BusinessRecord | null;
}

export const AnalyticsCharts: React.FC<AnalyticsChartsProps> = ({ record }) => {
  if (!record) {
    return (
      <div className="h-64 flex items-center justify-center border border-dashed border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-900/50">
        <p className="text-sm text-slate-400 dark:text-slate-500">
          Silakan pilih atau simpan data usaha untuk melihat grafik analisis keuangan.
        </p>
      </div>
    );
  }

  // 1. Data Pengeluaran Pie Chart
  const expenseData = [
    { name: 'Upah & Gaji', value: record.expense.upahGaji, color: '#3B82F6' }, // Blue
    { name: 'Biaya Produksi', value: record.expense.biayaProduksi, color: '#10B981' }, // Green
    { name: 'Biaya Pembelian', value: record.expense.biayaPembelianBarang, color: '#F59E0B' }, // Amber
    { name: 'Biaya Operasional', value: record.expense.biayaOperasional, color: '#EC4899' }, // Pink
    { name: 'Non Operasional', value: record.expense.biayaNonOperasional, color: '#8B5CF6' } // Purple
  ].filter(item => item.value > 0); // Only display non-zero items

  // 2. Data Produksi/Pendapatan Bar Chart
  const revenueData = [
    { name: 'Penjualan Utama', Nilai: record.revenue.nilaiProduksiPenjualan },
    { name: 'Pendapatan Lain', Nilai: record.revenue.pendapatanLainnya }
  ];

  // 3. Data Aset Bar Chart
  const assetData = [
    { name: 'Tanah', Nilai: record.asset.nilaiTanah },
    { name: 'Bangunan', Nilai: record.asset.nilaiBangunan },
    { name: 'Mesin', Nilai: record.asset.nilaiMesin },
    { name: 'Kendaraan', Nilai: record.asset.nilaiKendaraan },
    { name: 'Peralatan', Nilai: record.asset.nilaiPeralatan }
  ].filter(item => item.Nilai > 0);

  // Custom tooltips to match beautiful currency formatting
  const CustomTooltipCurrency = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 text-white p-2.5 rounded-lg border border-slate-700 text-xs font-mono shadow-md">
          <p className="font-semibold text-slate-300 mb-0.5">{payload[0].name}</p>
          <p className="text-bps-green-light font-bold">Rp {formatRupiah(payload[0].value || payload[0].payload.Nilai || payload[0].payload.value)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* 1. Pengeluaran Pie Chart */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
        <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
          Struktur Pengeluaran (Rincian 26)
        </h4>
        <div className="h-64 relative flex items-center justify-center">
          {expenseData.length === 0 ? (
            <div className="text-xs text-slate-400 text-center">Tidak ada rincian pengeluaran (Semua Rp 0)</div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {expenseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltipCurrency />} />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
        {/* Legends list */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 mt-2">
          {expenseData.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Pendapatan Bar Chart */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
        <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
          Rincian Produksi & Pendapatan (Rincian 27)
        </h4>
        <div className="h-64 flex items-center justify-center">
          {record.revenue.totalProduksi === 0 ? (
            <div className="text-xs text-slate-400 text-center">Tidak ada rincian produksi (Semua Rp 0)</div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <XAxis 
                  dataKey="name" 
                  stroke="#888888" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false}
                />
                <YAxis 
                  stroke="#888888" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false}
                  tickFormatter={(value) => `Rp ${value >= 1e6 ? (value/1e6).toFixed(1) + 'M' : value >= 1e3 ? (value/1e3).toFixed(0) + 'K' : value}`}
                />
                <Tooltip content={<CustomTooltipCurrency />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
                <Bar dataKey="Nilai" radius={[6, 6, 0, 0]}>
                  <Cell fill="#00A859" />
                  <Cell fill="#84C444" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* 3. Komposisi Aset Bar Chart */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
        <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
          Struktur Alokasi Aset (Rincian 28)
        </h4>
        <div className="h-64 flex items-center justify-center">
          {assetData.length === 0 ? (
            <div className="text-xs text-slate-400 text-center">Tidak ada rincian aset (Semua Rp 0)</div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={assetData} layout="vertical" margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                <XAxis 
                  type="number" 
                  stroke="#888888" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false}
                  tickFormatter={(value) => `Rp ${value >= 1e6 ? (value/1e6).toFixed(0) + 'M' : value}`}
                />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  stroke="#888888" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false}
                />
                <Tooltip content={<CustomTooltipCurrency />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
                <Bar dataKey="Nilai" fill="#04549C" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
};
