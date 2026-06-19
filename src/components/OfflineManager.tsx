import React, { useState, useRef } from 'react';
import { BusinessRecord, formatRupiah } from '@/utils/calculatorHelper';
import { 
  Search, 
  Trash2, 
  Edit, 
  FileText, 
  Printer, 
  Download, 
  Upload, 
  FileSpreadsheet, 
  Building2, 
  Phone, 
  Calendar,
  AlertCircle
} from 'lucide-react';
import { exportToExcel, downloadTemplateExcel, importFromExcel } from '@/utils/excelExporter';
import { exportToPDF } from '@/utils/pdfExporter';

interface OfflineManagerProps {
  records: BusinessRecord[];
  onEdit: (record: BusinessRecord) => void;
  onDelete: (id: string) => void;
  onImport: (newRecords: BusinessRecord[]) => void;
  onSelectForView: (id: string) => void;
}

export const OfflineManager: React.FC<OfflineManagerProps> = ({
  records,
  onEdit,
  onDelete,
  onImport,
  onSelectForView,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [importError, setImportError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Filter records based on search query
  const filteredRecords = records.filter(r => {
    const q = searchQuery.toLowerCase();
    return (
      r.identity.namaUsaha.toLowerCase().includes(q) ||
      r.identity.namaPemilik.toLowerCase().includes(q) ||
      r.identity.kbli.includes(q) ||
      r.identity.kategoriUsaha.toLowerCase().includes(q) ||
      (r.identity.kegiatanUtama || '').toLowerCase().includes(q)
    );
  });

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    setImportError(null);

    try {
      const parsed = await importFromExcel(file);
      if (parsed.length === 0) {
        setImportError('Tidak ada data valid yang diimpor dari file tersebut.');
      } else {
        onImport(parsed);
        alert(`Berhasil mengimpor ${parsed.length} data usaha offline!`);
      }
    } catch (err: any) {
      setImportError(err.message || 'Gagal membaca file Excel. Pastikan format template sesuai.');
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const confirmDelete = (id: string, name: string) => {
    if (confirm(`Apakah Anda yakin ingin menghapus data usaha "${name}"?`)) {
      onDelete(id);
    }
  };

  // Helper to handle print receipt directly
  const handlePrint = (record: BusinessRecord) => {
    // Select printable receipt node or run window.print()
    onSelectForView(record.id);
    setTimeout(() => {
      window.print();
    }, 150);
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col transition-all">
      {/* Header operations banner */}
      <div className="p-4 md:p-6 bg-slate-50 dark:bg-slate-800/40 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-bps-blue" />
            Database Usaha Offline ({records.length})
          </h2>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Pencatatan survei yang disimpan lokal di memori HP / perangkat
          </p>
        </div>

        {/* Global actions: Excel integration */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={downloadTemplateExcel}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors active:scale-95"
            title="Download Template Excel"
          >
            <Download className="w-3.5 h-3.5" />
            Unduh Template
          </button>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".xlsx, .xls"
            className="hidden"
          />
          <button
            onClick={handleImportClick}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors active:scale-95"
            title="Import dari Excel"
          >
            <Upload className="w-3.5 h-3.5" />
            Impor Excel
          </button>

          <button
            onClick={() => exportToExcel(records)}
            disabled={records.length === 0}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white rounded-lg transition-all shadow-sm active:scale-95 ${
              records.length === 0
                ? 'bg-slate-300 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'
                : 'bg-bps-green hover:bg-bps-green-dark shadow-bps-green/10'
            }`}
            title="Ekspor ke Excel"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            Ekspor Semua
          </button>
        </div>
      </div>

      {/* Error alert for excel imports */}
      {importError && (
        <div className="px-4 pt-4 md:px-6">
          <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/60 rounded-xl flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-bold text-red-800 dark:text-red-300">Gagal Mengimpor Excel</span>
              <span className="text-[11px] text-red-700 dark:text-red-400 font-medium">{importError}</span>
            </div>
          </div>
        </div>
      )}

      {/* Search and listings section */}
      <div className="p-4 md:p-6 flex flex-col gap-4">
        {/* Search Input */}
        <div className="relative flex items-center">
          <Search className="absolute left-3 w-4 h-4 text-slate-400 select-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Cari usaha berdasarkan nama, pemilik, KBLI, kategori..."
            className="w-full pl-9 pr-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all"
          />
        </div>

        {/* Database List rendering */}
        {records.length === 0 ? (
          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/30 text-slate-400 dark:text-slate-600 rounded-full mb-3">
              <Building2 className="w-8 h-8" />
            </div>
            <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300">Belum ada data terekam</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 max-w-[280px]">
              Gunakan form di atas untuk mengisi data komponen usaha dan simpan hasil survei.
            </p>
          </div>
        ) : filteredRecords.length === 0 ? (
          <div className="py-8 text-center text-xs text-slate-400">
            Tidak ada data usaha yang cocok dengan pencarian Anda.
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-100 dark:border-slate-800">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold">
                    <th className="p-3">Nama Usaha / Pemilik</th>
                    <th className="p-3">KBLI / Kategori</th>
                    <th className="p-3 text-right">Total Pendapatan</th>
                    <th className="p-3 text-right">Total Aset</th>
                    <th className="p-3 text-center">Aksi Laporan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {filteredRecords.map((r) => (
                    <tr 
                      key={r.id} 
                      onClick={() => onSelectForView(r.id)}
                      className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors cursor-pointer"
                    >
                      <td className="p-3">
                        <div className="font-semibold text-slate-800 dark:text-slate-200">{r.identity.namaUsaha}</div>
                        <div className="text-[10px] text-slate-400 dark:text-slate-500 font-medium mt-0.5">{r.identity.namaPemilik}</div>
                      </td>
                      <td className="p-3">
                        <div className="font-mono font-bold text-bps-blue-light">{r.identity.kbli}</div>
                        <div className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold mt-0.5">Kategori {r.identity.kategoriUsaha}</div>
                      </td>
                      <td className="p-3 text-right font-mono font-bold text-bps-green">
                        Rp {formatRupiah(r.revenue.totalProduksi)}
                      </td>
                      <td className="p-3 text-right font-mono font-semibold">
                        Rp {formatRupiah(r.asset.totalAset)}
                      </td>
                      <td className="p-3" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={() => onEdit(r)}
                            className="p-1.5 text-bps-blue hover:bg-bps-blue/10 rounded transition-colors"
                            title="Edit Data"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => exportToPDF(r)}
                            className="p-1.5 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 rounded transition-colors"
                            title="Download PDF"
                          >
                            <FileText className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handlePrint(r)}
                            className="p-1.5 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 rounded transition-colors"
                            title="Cetak Laporan"
                          >
                            <Printer className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => confirmDelete(r.id, r.identity.namaUsaha)}
                            className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded transition-colors"
                            title="Hapus"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile List Card View (Touch Friendly) */}
            <div className="grid grid-cols-1 gap-3 md:hidden">
              {filteredRecords.map((r) => (
                <div
                  key={r.id}
                  onClick={() => onSelectForView(r.id)}
                  className="p-4 bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 rounded-xl flex flex-col gap-3.5 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">{r.identity.namaUsaha}</h4>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold mt-0.5">{r.identity.namaPemilik}</p>
                    </div>
                    <span className="px-2 py-0.5 bg-bps-blue/10 dark:bg-bps-blue/20 text-bps-blue dark:text-bps-blue-light font-mono font-bold text-[10px] rounded">
                      KBLI {r.identity.kbli}
                    </span>
                  </div>

                  {/* Quick details info row */}
                  <div className="grid grid-cols-2 gap-2 text-[10px] border-t border-b border-slate-200/50 dark:border-slate-800 py-2">
                    <div className="flex flex-col">
                      <span className="text-slate-400 dark:text-slate-500 font-semibold">Omset Produksi:</span>
                      <span className="font-mono font-bold text-bps-green mt-0.5">Rp {formatRupiah(r.revenue.totalProduksi)}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-400 dark:text-slate-500 font-semibold">Estimasi Aset:</span>
                      <span className="font-mono font-bold text-slate-700 dark:text-slate-300 mt-0.5">Rp {formatRupiah(r.asset.totalAset)}</span>
                    </div>
                    {r.identity.nomorHp && (
                      <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500 font-medium col-span-2">
                        <Phone className="w-3.5 h-3.5 text-slate-300" />
                        <span>{r.identity.nomorHp}</span>
                      </div>
                    )}
                  </div>

                  {/* Actions buttons panel for mobile */}
                  <div className="flex items-center justify-end gap-1.5" onClick={e => e.stopPropagation()}>
                    <button
                      onClick={() => onEdit(r)}
                      className="flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold text-bps-blue border border-bps-blue/20 bg-bps-blue/5 rounded-lg active:scale-95"
                    >
                      <Edit className="w-3 h-3" />
                      Edit
                    </button>
                    <button
                      onClick={() => exportToPDF(r)}
                      className="flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold text-indigo-600 border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg active:scale-95"
                    >
                      <FileText className="w-3 h-3" />
                      PDF
                    </button>
                    <button
                      onClick={() => handlePrint(r)}
                      className="flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold text-emerald-600 border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg active:scale-95"
                    >
                      <Printer className="w-3 h-3" />
                      Cetak
                    </button>
                    <button
                      onClick={() => confirmDelete(r.id, r.identity.namaUsaha)}
                      className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg active:scale-95 ml-auto"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
