const fs = require('fs');

const print_content = `import React from 'react';
import { BusinessRecord, formatRupiah } from '@/utils/calculatorHelper';
import { Building2, User, Phone, MapPin, Calendar, Users, Calculator, FileText, ArrowRight, Wallet, TrendingUp, TrendingDown, Factory, CheckCircle2 } from 'lucide-react';

interface PrintReportProps {
  record: BusinessRecord;
}

export const PrintReport: React.FC<PrintReportProps> = ({ record }) => {
  const activeBusinesses = record.businesses.filter(b => b.isActive);
  const grandTotalLaba = activeBusinesses.reduce((sum, b) => sum + b.keuntunganKotor, 0);

  return (
    <div className="bg-white" id="printable-area">
      {/* HEADER: KOP BPS */}
      <div className="border-b-4 border-gray-900 pb-4 mb-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-blue-50 rounded-xl flex items-center justify-center border-2 border-blue-200 print:border-gray-300 print:bg-white">
            <Calculator className="w-10 h-10 text-blue-600 print:text-gray-800" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-gray-900 uppercase tracking-tight">SENSUS EKONOMI 2026</h1>
            <p className="text-gray-600 font-medium">Badan Pusat Statistik Republik Indonesia</p>
            <p className="text-sm text-gray-500 mt-1">Laporan Hasil Kalkulator Cerdas SE2026</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-bold text-gray-500">KODE FORMULIR</p>
          <div className="mt-1 px-4 py-1.5 bg-gray-100 border border-gray-300 rounded-lg text-xl font-mono font-bold tracking-widest text-gray-800">
            SE26-L2
          </div>
        </div>
      </div>

      <div className="space-y-8">
        
        {/* IDENTITAS RESPONDEN */}
        <section className="print:break-inside-avoid">
          <div className="bg-gray-800 text-white px-4 py-2 flex items-center gap-2 mb-4 rounded-t-lg print:border print:border-gray-800">
            <User className="w-5 h-5" />
            <h2 className="text-lg font-bold uppercase tracking-wider">A. Identitas Responden (Pemilik)</h2>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 px-2">
            <div className="flex flex-col border-b border-dashed border-gray-200 pb-2">
              <span className="text-xs font-semibold text-gray-500 uppercase">Nama Responden / Pemilik</span>
              <span className="text-base font-bold text-gray-900">{record.identity.namaPemilik}</span>
            </div>
            <div className="flex flex-col border-b border-dashed border-gray-200 pb-2">
              <span className="text-xs font-semibold text-gray-500 uppercase">Nomor HP / WhatsApp</span>
              <span className="text-base font-bold text-gray-900">{record.identity.nomorHp}</span>
            </div>
            <div className="flex flex-col border-b border-dashed border-gray-200 pb-2 col-span-2">
              <span className="text-xs font-semibold text-gray-500 uppercase">Alamat Lengkap</span>
              <span className="text-base font-bold text-gray-900">{record.identity.alamat || '-'}</span>
            </div>
          </div>
        </section>

        {/* DATA USAHA (LOOPING) */}
        {activeBusinesses.map((b, index) => (
          <section key={b.id} className="print:break-inside-avoid">
            <div className="bg-blue-800 text-white px-4 py-2 flex items-center gap-2 mb-4 rounded-t-lg print:border print:border-gray-800">
              <Factory className="w-5 h-5" />
              <h2 className="text-lg font-bold uppercase tracking-wider">Usaha {index + 1}: {b.namaUsaha}</h2>
            </div>
            
            <div className="px-2">
              {/* Info KBLI & Tahun */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                 <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                   <span className="block text-xs font-bold text-gray-500">KODE KBLI</span>
                   <span className="block text-lg font-black text-blue-700 font-mono">{b.kbli}</span>
                 </div>
                 <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                   <span className="block text-xs font-bold text-gray-500">KATEGORI</span>
                   <span className="block text-lg font-black text-blue-700">{b.kategoriUsaha}</span>
                 </div>
                 <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                   <span className="block text-xs font-bold text-gray-500">TAHUN BERDIRI</span>
                   <span className="block text-lg font-black text-gray-800">{b.tahunBerdiri}</span>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {/* Kolom Kiri: Pekerja & Lahan */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-800 border-b-2 border-gray-200 pb-1 mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" /> Tenaga Kerja
                    </h3>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr><td className="py-1.5 text-gray-600">Pekerja Laki-laki</td><td className="py-1.5 font-bold text-right">{b.worker.pekerjaLaki} Org</td></tr>
                        <tr><td className="py-1.5 text-gray-600 border-b">Pekerja Perempuan</td><td className="py-1.5 font-bold text-right border-b">{b.worker.pekerjaPerempuan} Org</td></tr>
                        <tr className="bg-gray-50"><td className="py-2 font-bold text-gray-800">Total Pekerja</td><td className="py-2 font-black text-right text-gray-900">{b.worker.totalPekerjaGender} Org</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800 border-b-2 border-gray-200 pb-1 mb-3 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-500" /> Luas Lahan & Bangunan
                    </h3>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr><td className="py-1.5 text-gray-600">Luas Tanah/Lahan</td><td className="py-1.5 font-bold text-right">{formatRupiah(b.dimension.luasTanah)} m²</td></tr>
                        <tr><td className="py-1.5 text-gray-600 border-b">Luas Bangunan</td><td className="py-1.5 font-bold text-right border-b">{formatRupiah(b.dimension.luasBangunan)} m²</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Kolom Kanan: Keuangan */}
                <div>
                    <h3 className="font-bold text-gray-800 border-b-2 border-gray-200 pb-1 mb-3 flex items-center gap-2">
                      <Wallet className="w-4 h-4 text-gray-500" /> Ringkasan Keuangan (Tahunan)
                    </h3>
                    <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                      
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-semibold text-gray-600 flex items-center gap-1.5"><TrendingUp className="w-4 h-4 text-green-500"/> Total Pendapatan</span>
                        <span className="text-base font-bold text-gray-900">Rp {formatRupiah(b.revenue.totalProduksi)}</span>
                      </div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-semibold text-gray-600 flex items-center gap-1.5"><TrendingDown className="w-4 h-4 text-red-500"/> Total Pengeluaran</span>
                        <span className="text-base font-bold text-gray-900">Rp {formatRupiah(b.expense.totalPengeluaran)}</span>
                      </div>
                      
                      <div className={\`mt-3 pt-3 border-t-2 border-dashed flex justify-between items-center \${b.keuntunganKotor >= 0 ? 'border-green-200' : 'border-red-200'}\`}>
                        <span className="font-black text-gray-800 uppercase tracking-wide">LABA BERSIH (USAHA {index+1})</span>
                        <span className={\`text-xl font-black \${b.keuntunganKotor >= 0 ? 'text-green-600' : 'text-red-600'}\`}>
                          Rp {formatRupiah(b.keuntunganKotor)}
                        </span>
                      </div>
                    </div>
                </div>
              </div>

              {/* Rincian Analisis Jika Ada */}
              {b.analysis && (
                <div className="mt-6 bg-gray-50 border border-gray-200 p-4 rounded-lg text-sm">
                  <h4 className="font-bold text-gray-800 mb-2 border-b pb-1">Detail Analisis Cepat:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {b.analysis.jenisAnalisis && <div><span className="block text-xs text-gray-500">Jenis Analisis</span><span className="font-semibold">{b.analysis.jenisAnalisis}</span></div>}
                    {b.analysis.jumlahPohon !== undefined && <div><span className="block text-xs text-gray-500">Jumlah Pohon/Batang</span><span className="font-semibold">{formatRupiah(b.analysis.jumlahPohon)}</span></div>}
                    {b.analysis.produksiKg !== undefined && <div><span className="block text-xs text-gray-500">Produksi (Kg)</span><span className="font-semibold">{formatRupiah(b.analysis.produksiKg)} Kg</span></div>}
                    {b.analysis.luasM2 !== undefined && <div><span className="block text-xs text-gray-500">Estimasi Luas</span><span className="font-semibold">{formatRupiah(b.analysis.luasM2)} m² ({formatRupiah(b.analysis.luasHa||0)} Ha)</span></div>}
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}

        {/* GRAND TOTAL KESIMPULAN */}
        <section className="print:break-inside-avoid mt-8">
           <div className={\`p-6 rounded-2xl border-2 \${grandTotalLaba >= 0 ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'} flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm\`}>
              <div className="flex items-center gap-4">
                <div className={\`w-16 h-16 rounded-full flex items-center justify-center \${grandTotalLaba >= 0 ? 'bg-emerald-100' : 'bg-red-100'}\`}>
                  {grandTotalLaba >= 0 ? <TrendingUp className="w-8 h-8 text-emerald-600" /> : <TrendingDown className="w-8 h-8 text-red-600" />}
                </div>
                <div>
                  <h2 className="text-xl font-black text-gray-900 uppercase">Grand Total Keseluruhan</h2>
                  <p className="text-gray-600 font-medium">Total pendapatan gabungan dari {activeBusinesses.length} usaha milik {record.identity.namaPemilik}</p>
                </div>
              </div>
              <div className="text-right bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100 min-w-[250px]">
                 <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">TOTAL LABA GABUNGAN</p>
                 <p className={\`text-3xl font-black tracking-tight \${grandTotalLaba >= 0 ? 'text-emerald-600' : 'text-red-600'}\`}>
                   Rp {formatRupiah(grandTotalLaba)}
                 </p>
              </div>
           </div>
        </section>

      </div>
      
      {/* Tombol Cetak (Hanya tampil di layar) */}
      <div className="mt-8 pt-6 border-t border-gray-200 text-center print:hidden">
        <button 
          onClick={() => window.print()}
          className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-xl shadow-gray-200 flex items-center gap-2 mx-auto"
        >
          <FileText className="w-5 h-5" /> Cetak PDF Kuesioner Responden
        </button>
      </div>
    </div>
  );
};
`;

fs.writeFileSync('src/components/calculator/PrintReport.tsx', print_content, 'utf8');
console.log('Done generating PrintReport.tsx');
