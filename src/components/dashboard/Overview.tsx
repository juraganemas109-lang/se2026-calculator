'use client';
import React, { useState } from 'react';
import { BusinessRecord, formatRupiah } from '@/utils/calculatorHelper';
import { PrintReport } from '../calculator/PrintReport';
import { Search, Edit2, Trash2, FileDown, PlusCircle, LayoutDashboard, Briefcase, ChevronRight, ChevronDown } from 'lucide-react';
import * as XLSX from 'xlsx';

interface OverviewProps {
  records: BusinessRecord[];
  onDelete: (id: string) => void;
  onEdit: (record: BusinessRecord) => void;
}

export const Overview: React.FC<OverviewProps> = ({ records, onDelete, onEdit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [printingRecord, setPrintingRecord] = useState<BusinessRecord | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredRecords = records.filter(record => 
    record.identity.namaPemilik.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.identity.alamat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportToExcel = () => {
    const dataToExport = records.map(r => {
      const active = r.businesses.filter(b => b.isActive);
      const totalPendapatan = active.reduce((sum, b) => sum + b.revenue.totalProduksi, 0);
      const totalPengeluaran = active.reduce((sum, b) => sum + b.expense.totalPengeluaran, 0);
      const totalLaba = active.reduce((sum, b) => sum + b.keuntunganKotor, 0);
      return {
        'Tgl Input': new Date(r.createdAt).toLocaleDateString('id-ID'),
        'Nama Responden': r.identity.namaPemilik,
        'No HP': r.identity.nomorHp,
        'Alamat': r.identity.alamat,
        'Jumlah Usaha Aktif': active.length,
        'Total Pendapatan (Rp)': totalPendapatan,
        'Total Pengeluaran (Rp)': totalPengeluaran,
        'Grand Total Laba Bersih (Rp)': totalLaba
      };
    });

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data Responden');
    XLSX.writeFile(workbook, 'Data_Responden_SE2026.xlsx');
  };

  if (printingRecord) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
             <FileDown className="w-6 h-6 text-blue-600" />
             Preview Cetak PDF
          </h2>
          <button 
            onClick={() => setPrintingRecord(null)}
            className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 font-semibold transition-colors"
          >
            Tutup Preview
          </button>
        </div>
        <PrintReport record={printingRecord} />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="flex items-center gap-3 w-full md:w-auto">
           <div className="bg-indigo-100 p-2.5 rounded-xl">
              <LayoutDashboard className="w-6 h-6 text-indigo-700" />
           </div>
           <div>
             <h2 className="text-2xl font-bold text-gray-800">Database Responden</h2>
             <p className="text-gray-500 text-sm mt-1">Total {records.length} responden tersimpan</p>
           </div>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari nama pemilik..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={exportToExcel}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl flex items-center gap-2 font-semibold transition-colors shadow-md shadow-indigo-200"
          >
            <FileDown className="w-5 h-5" />
            <span className="hidden sm:inline">Export Excel</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/80 text-gray-600 text-sm border-b border-gray-200">
              <th className="py-4 px-6 font-semibold">Tgl Input</th>
              <th className="py-4 px-6 font-semibold">Nama Responden</th>
              <th className="py-4 px-6 font-semibold">Usaha Aktif</th>
              <th className="py-4 px-6 font-semibold text-right">Grand Total Laba</th>
              <th className="py-4 px-6 font-semibold text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredRecords.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-gray-500 bg-gray-50/30">
                  <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-lg font-medium text-gray-600">Belum ada data</p>
                  <p className="text-sm">Mulai tambahkan kuesioner pada tab Input Data Baru.</p>
                </td>
              </tr>
            ) : (
              filteredRecords.map((record) => {
                const active = record.businesses.filter(b => b.isActive);
                const grandTotal = active.reduce((sum, b) => sum + b.keuntunganKotor, 0);
                const isExpanded = expandedId === record.id;

                return (
                  <React.Fragment key={record.id}>
                    <tr className="hover:bg-blue-50/50 transition-colors group">
                      <td className="py-4 px-6 text-sm text-gray-600">
                        {new Date(record.createdAt).toLocaleDateString('id-ID', {
                          day: 'numeric', month: 'short', year: 'numeric'
                        })}
                      </td>
                      <td className="py-4 px-6">
                        <p className="font-bold text-gray-800">{record.identity.namaPemilik}</p>
                        <p className="text-xs text-gray-500 mt-0.5 truncate max-w-[200px]">{record.identity.nomorHp} - {record.identity.alamat}</p>
                      </td>
                      <td className="py-4 px-6">
                        <button onClick={() => setExpandedId(isExpanded ? null : record.id)} className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors">
                          {active.length} Usaha
                          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        </button>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <span className={`font-bold ${grandTotal >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                          Rp {formatRupiah(grandTotal)}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-center gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => setPrintingRecord(record)} className="p-2 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg tooltip-trigger" title="Cetak PDF">
                            <FileDown className="w-4 h-4" />
                          </button>
                          <button onClick={() => onEdit(record)} className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg tooltip-trigger" title="Edit">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button onClick={() => onDelete(record.id)} className="p-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg tooltip-trigger" title="Hapus">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    {isExpanded && (
                      <tr className="bg-gray-50/80 border-t-0">
                        <td colSpan={5} className="px-6 py-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {active.map(b => (
                              <div key={b.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-gray-800 text-sm mb-2 pb-2 border-b">{b.namaUsaha}</h4>
                                <div className="space-y-1.5 text-xs">
                                  <div className="flex justify-between">
                                    <span className="text-gray-500">Pendapatan</span>
                                    <span className="font-medium text-green-600">Rp {formatRupiah(b.revenue.totalProduksi)}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-500">Pengeluaran</span>
                                    <span className="font-medium text-red-600">Rp {formatRupiah(b.expense.totalPengeluaran)}</span>
                                  </div>
                                  <div className="flex justify-between pt-1 border-t mt-1">
                                    <span className="font-semibold text-gray-700">Laba Bersih</span>
                                    <span className={`font-bold ${b.keuntunganKotor >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                                      Rp {formatRupiah(b.keuntunganKotor)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
