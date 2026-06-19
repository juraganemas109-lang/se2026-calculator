import React from 'react';
import { BusinessRecord, formatRupiah } from '@/utils/calculatorHelper';

interface PrintReportProps {
  record: BusinessRecord | null;
}

export const PrintReport: React.FC<PrintReportProps> = ({ record }) => {
  if (!record) return null;

  return (
    <div id="se2026-print-area" className="hidden print:block p-8 bg-white text-slate-800 font-sans max-w-[210mm] mx-auto">
      {/* Header */}
      <div className="text-center border-b-4 border-bps-blue pb-4">
        <h1 className="text-xl font-bold text-slate-900 tracking-wide uppercase">
          Sensus Ekonomi 2026 (SE2026)
        </h1>
        <p className="text-sm font-semibold text-slate-700 mt-1 uppercase">
          Laporan Rincian Komponen Usaha Lapangan
        </p>
        <p className="text-[10px] text-slate-500 mt-0.5">
          ID Usaha: {record.id} | Tanggal Cetak: {new Date().toLocaleDateString('id-ID')}
        </p>
      </div>

      {/* Identitas Usaha */}
      <div className="mt-6">
        <h3 className="text-xs font-bold text-slate-950 uppercase border-b border-slate-300 pb-1 mb-3">
          I. IDENTITAS USAHA
        </h3>
        <table className="w-full text-xs border-none">
          <tbody>
            <tr className="border-b border-slate-50">
              <td className="py-1.5 w-1/3 font-semibold">Nama Usaha</td>
              <td className="py-1.5">: {record.identity.namaUsaha}</td>
            </tr>
            <tr className="border-b border-slate-50">
              <td className="py-1.5 font-semibold">Nama Pemilik / Pengelola</td>
              <td className="py-1.5">: {record.identity.namaPemilik}</td>
            </tr>
            <tr className="border-b border-slate-50">
              <td className="py-1.5 font-semibold">Nomor HP</td>
              <td className="py-1.5">: {record.identity.nomorHp}</td>
            </tr>
            <tr className="border-b border-slate-50">
              <td className="py-1.5 font-semibold">Alamat Lokasi</td>
              <td className="py-1.5">: {record.identity.alamat || '-'}</td>
            </tr>
            <tr>
              <td className="py-1.5 font-semibold w-1/3">Jenis Usaha</td>
              <td className="py-1.5">: {record.identity.namaUsaha}</td>
            </tr>
            <tr>
              <td className="py-1.5 font-semibold">KBLI & Kategori</td>
              <td className="py-1.5">: {record.identity.kbli} - Kategori {record.identity.kategoriUsaha}</td>
            </tr>
            <tr>
              <td className="py-1.5 font-semibold">Kegiatan Utama</td>
              <td className="py-1.5">: {record.identity.kegiatanUtama || '-'}</td>
            </tr>
            <tr>
              <td className="py-1.5 font-semibold">Produk Utama</td>
              <td className="py-1.5">: {record.identity.produkUtama || '-'}</td>
            </tr>
            <tr className="border-b border-slate-50">
              <td className="py-1.5 font-semibold">Tahun Berdiri</td>
              <td className="py-1.5">: {record.identity.tahunBerdiri}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modul Pekerja */}
      {record.worker && (
        <div className="mt-6">
          <h3 className="text-xs font-bold text-slate-950 uppercase border-b border-slate-300 pb-1 mb-3">
            II. TENAGA KERJA (SE2026 RINCIAN 24)
          </h3>
          <table className="w-full text-xs border border-slate-200">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                <th className="p-2 text-left w-1/2">Komponen Tenaga Kerja</th>
                <th className="p-2 text-center w-1/4">Kode Rincian</th>
                <th className="p-2 text-right w-1/4">Jumlah (Orang)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="p-2">Pekerja Laki-laki</td>
                <td className="p-2 text-center">24.a1</td>
                <td className="p-2 text-right font-mono">{record.worker.pekerjaLaki}</td>
              </tr>
              <tr>
                <td className="p-2">Pekerja Perempuan</td>
                <td className="p-2 text-center">24.b1</td>
                <td className="p-2 text-right font-mono">{record.worker.pekerjaPerempuan}</td>
              </tr>
              <tr className="bg-slate-50 font-bold">
                <td className="p-2">TOTAL PEKERJA (BERDASARKAN JENIS KELAMIN)</td>
                <td className="p-2 text-center">24.c1</td>
                <td className="p-2 text-right font-mono">{record.worker.totalPekerjaGender}</td>
              </tr>
              <tr>
                <td className="p-2">Pekerja Dibayar</td>
                <td className="p-2 text-center">24.a2</td>
                <td className="p-2 text-right font-mono">{record.worker.pekerjaDibayar}</td>
              </tr>
              <tr>
                <td className="p-2">Pekerja Tidak Dibayar</td>
                <td className="p-2 text-center">24.b2</td>
                <td className="p-2 text-right font-mono">{record.worker.pekerjaTidakDibayar}</td>
              </tr>
              <tr className="bg-slate-50 font-bold">
                <td className="p-2">TOTAL PEKERJA (BERDASARKAN STATUS)</td>
                <td className="p-2 text-center">24.c2</td>
                <td className="p-2 text-right font-mono">{record.worker.totalPekerjaStatus}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Rincian Pengeluaran dan Produksi */}
      <div className="mt-6">
        <h3 className="text-xs font-bold text-slate-950 uppercase border-b border-slate-300 pb-1 mb-3">
          III. KOMPONEN KEUANGAN (SE2026 RINCIAN 26 & 27)
        </h3>
        <table className="w-full text-xs border border-slate-200">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
              <th className="p-2 text-left">Komponen Usaha</th>
              <th className="p-2 text-center">Kode Rincian</th>
              <th className="p-2 text-right">Nilai Komponen (Rupiah)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            <tr>
              <td className="p-2">Upah dan Gaji</td>
              <td className="p-2 text-center">26.a</td>
              <td className="p-2 text-right font-mono">Rp {formatRupiah(record.expense.upahGaji)}</td>
            </tr>
            <tr>
              <td className="p-2">Biaya Produksi / Operasional Dasar</td>
              <td className="p-2 text-center">26.b</td>
              <td className="p-2 text-right font-mono">Rp {formatRupiah(record.expense.biayaProduksi)}</td>
            </tr>
            <tr>
              <td className="p-2">Biaya Pembelian Barang Dijual Kembali</td>
              <td className="p-2 text-center">26.c</td>
              <td className="p-2 text-right font-mono">Rp {formatRupiah(record.expense.biayaPembelianBarang)}</td>
            </tr>
            <tr>
              <td className="p-2">Biaya Operasional Rutin</td>
              <td className="p-2 text-center">26.d</td>
              <td className="p-2 text-right font-mono">Rp {formatRupiah(record.expense.biayaOperasional)}</td>
            </tr>
            <tr>
              <td className="p-2">Biaya Non Operasional</td>
              <td className="p-2 text-center">26.e</td>
              <td className="p-2 text-right font-mono">Rp {formatRupiah(record.expense.biayaNonOperasional)}</td>
            </tr>
            <tr className="bg-slate-50 font-bold">
              <td className="p-2">TOTAL PENGELUARAN</td>
              <td className="p-2 text-center">26.f</td>
              <td className="p-2 text-right font-mono">Rp {formatRupiah(record.expense.totalPengeluaran)}</td>
            </tr>
            <tr>
              <td className="p-2">Nilai Produksi / Penjualan Utama</td>
              <td className="p-2 text-center">27.a</td>
              <td className="p-2 text-right font-mono">Rp {formatRupiah(record.revenue.nilaiProduksiPenjualan)}</td>
            </tr>
            <tr>
              <td className="p-2">Pendapatan Lainnya</td>
              <td className="p-2 text-center">27.b</td>
              <td className="p-2 text-right font-mono">Rp {formatRupiah(record.revenue.pendapatanLainnya)}</td>
            </tr>
            <tr className="bg-slate-50 font-bold">
              <td className="p-2">TOTAL PRODUKSI / PENDAPATAN</td>
              <td className="p-2 text-center">27.c</td>
              <td className="p-2 text-right font-mono">Rp {formatRupiah(record.revenue.totalProduksi)}</td>
            </tr>
            <tr className="bg-emerald-50 text-emerald-900 font-bold">
              <td className="p-2">KEUNTUNGAN KOTOR (PROFIT)</td>
              <td className="p-2 text-center">Margin</td>
              <td className="p-2 text-right font-mono">Rp {formatRupiah(record.revenue.totalProduksi - record.expense.totalPengeluaran)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Dimensi & Aset */}
      <div className="mt-6">
        <h3 className="text-xs font-bold text-slate-950 uppercase border-b border-slate-300 pb-1 mb-3">
          IV. MODUL ASET & DIMENSI TEMPAT USAHA (SE2026 RINCIAN 28)
        </h3>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div className="p-3 border border-slate-200 rounded-lg">
            <div className="grid grid-cols-1 gap-2 text-sm">
            <p className="mt-1">
              Luas Tanah:{' '}
              <span className="font-mono">
                {record.dimension.modeLuasLahan 
                  ? `${record.dimension.luasEstimasi} m² (Estimasi)`
                  : `${record.dimension.panjangTanah}m x ${record.dimension.lebarTanah}m = ${record.dimension.luasTanah} m²`}
              </span>
            </p>
            <p>Luas Bangunan: {record.dimension.panjangBangunan}m x {record.dimension.lebarBangunan}m = {record.dimension.luasBangunan} m²</p>
            </div>
          </div>
          <div className="p-3 border border-slate-200 rounded-lg">
            <span className="font-bold text-slate-800">Komposisi Nilai Aset:</span>
            <p className="mt-1">Nilai Tanah: Rp {formatRupiah(record.asset.nilaiTanah)}</p>
            <p className="mt-0.5">Nilai Bangunan: Rp {formatRupiah(record.asset.nilaiBangunan)}</p>
            <p className="mt-0.5">Nilai Mesin & Peralatan: Rp {formatRupiah(record.asset.mesinPeralatan)}</p>
            <p className="mt-0.5">Nilai Kendaraan: Rp {formatRupiah(record.asset.kendaraanUsaha)}</p>
          </div>
        </div>
        <div className="mt-3 text-right text-xs">
          <span className="font-bold">TOTAL ESTIMASI ASET USAHA: </span>
          <span className="font-mono font-bold text-bps-blue">Rp {formatRupiah(record.asset.totalAset)}</span>
        </div>
      </div>

      {/* Tanda Tangan */}
      <div className="mt-12 flex justify-between text-xs text-center">
        <div>
          <p className="font-semibold">Pemilik / Pengelola Usaha,</p>
          <div className="h-16" />
          <p className="font-bold border-t border-slate-400 pt-1 px-4">{record.identity.namaPemilik}</p>
        </div>
        <div>
          <p className="font-semibold">Petugas Pencacah Lapangan,</p>
          <div className="h-16" />
          <p className="font-bold border-t border-slate-400 pt-1 px-4">Sensus Ekonomi 2026</p>
        </div>
      </div>
    </div>
  );
};
