import * as XLSX from 'xlsx';
import { BusinessRecord } from './calculatorHelper';

const EXCEL_HEADERS = [
  'ID Usaha',
  'No Bangunan',
  'No Keluarga',
  'Nama KK',
  'Nama Usaha',
  'Nama Pemilik',
  'Nomor HP',
  'Alamat',
  'KBLI',
  'Kategori Usaha (A-U)',
  'Tahun Berdiri',
  'Kegiatan Utama',
  'Produk Utama',
  'Contoh Produk',
  '26.a Upah dan Gaji (Rp)',
  '26.b Biaya Produksi (Rp)',
  '26.c Biaya Pembelian Barang Dijual (Rp)',
  '26.d Biaya Operasional (Rp)',
  '26.e Biaya Non-Operasional (Rp)',
  '26.f Total Pengeluaran (Rp)',
  '27.a Nilai Produksi/Penjualan (Rp)',
  '27.b Pendapatan Lainnya (Rp)',
  '27.c Total Produksi (Rp)',
  '24.a1 Laki-Laki',
  '24.b1 Perempuan',
  '24.a2 Dibayar',
  '24.b2 Tidak Dibayar',
  'Mode Luas Lahan',
  'Panjang Tanah (m)',
  'Lebar Tanah (m)',
  'Luas Tanah (m2)',
  'Harga Tanah per m2 (Rp)',
  'Nilai Tanah (Rp)',
  'Panjang Bangunan (m)',
  'Lebar Bangunan (m)',
  'Luas Bangunan (m2)',
  'Harga Bangunan per m2 (Rp)',
  'Nilai Mesin & Peralatan (Rp)',
  'Nilai Kendaraan (Rp)',
  'Total Aset (Rp)',
  'Keuntungan Kotor (Rp)'
];

// Helper to convert a record to a flat row for Excel sheet
function flattenRecord(record: BusinessRecord) {
  return [
    record.id,
    record.identity.nomorBangunan || '',
    record.identity.nomorKeluarga || '',
    record.identity.namaKK || '',
    record.identity.namaUsaha,
    record.identity.namaPemilik,
    record.identity.nomorHp,
    record.identity.alamat,
    record.identity.kbli,
    record.identity.kategoriUsaha,
    record.identity.tahunBerdiri,
    record.identity.kegiatanUtama || '',
    record.identity.produkUtama || '',
    record.identity.contohProduk || '',
    record.expense.upahGaji,
    record.expense.biayaProduksi,
    record.expense.biayaPembelianBarang,
    record.expense.biayaOperasional,
    record.expense.biayaNonOperasional,
    record.expense.totalPengeluaran,
    record.revenue.nilaiProduksiPenjualan,
    record.revenue.pendapatanLainnya,
    record.revenue.totalProduksi,
    record.worker.pekerjaLaki,
    record.worker.pekerjaPerempuan,
    record.worker.pekerjaDibayar,
    record.dimension.modeLuasLahan ? 'Estimasi Total' : 'Panjang x Lebar',
    record.dimension.panjangTanah,
    record.dimension.lebarTanah,
    record.dimension.luasTanah,
    record.dimension.hargaTanahPerM2,
    record.asset.nilaiTanah,
    record.dimension.panjangBangunan,
    record.dimension.lebarBangunan,
    record.dimension.luasBangunan,
    record.dimension.hargaBangunanPerM2,
    record.asset.nilaiBangunan,
    record.asset.mesinPeralatan,
    record.asset.kendaraanUsaha,
    record.asset.totalAset,
    record.revenue.totalProduksi - record.expense.totalPengeluaran
  ];
}

// Export a list of records to Excel
export function exportToExcel(records: BusinessRecord[], filename = 'Laporan_Sensus_Ekonomi_2026.xlsx') {
  const data = [
    EXCEL_HEADERS,
    ...records.map(flattenRecord)
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Data Usaha SE2026');

  // Adjust column widths automatically
  const colWidths = EXCEL_HEADERS.map((h, i) => {
    let maxLen = h.length;
    data.forEach(row => {
      const val = row[i];
      if (val !== undefined && val !== null) {
        maxLen = Math.max(maxLen, String(val).length);
      }
    });
    return { wch: maxLen + 3 };
  });
  worksheet['!cols'] = colWidths;

  XLSX.writeFile(workbook, filename);
}

// Download a blank template sheet containing 1 example row
export function downloadTemplateExcel() {
  const data = [
    EXCEL_HEADERS,
    [
      'CONTOH-01',
      '001',
      '1',
      'Budi Santoso',
      'Warung Berkah',
      'Budi Santoso',
      '081234567890',
      'Jl. Merdeka No. 10, Jakarta',
      '10',
      '0',
      '10',
      '1', // Laki
      '0', // Perempuan
      '0', // Dibayar
      '1', // Tidak dibayar
      '0',
      '0',
      '0',
      'Perdagangan',
      'Toko kelontong / pracangan',
      'Sembako, minyak goreng, sabun mandi',
      1200000, // Upah
      500000,  // Prod
      15000000, // Beli Barang
      800000,  // Operasional
      0,       // Non-Op
      17500000, // Total Pengeluaran
      25000000, // Nilai Produksi
      200000,   // Pendapatan Lain
      25200000, // Total Produksi
      8,        // P Tanah
      6,        // L Tanah
      48,       // Luas Tanah
      500000,   // Harga Tanah
      24000000, // Nilai Tanah
      6,        // P Bangunan
      5,        // L Bangunan
      1500000,  // Harga Bangunan
      45000000, // Nilai Bangunan
      2000000,  // Mesin & Peralatan
      15000000, // Kendaraan
      86000000, // Total Aset
      7700000   // Keuntungan
    ]
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Template Import SE2026');
  XLSX.writeFile(workbook, 'Template_Import_SE2026.xlsx');
}

// Parse an Excel file into BusinessRecord[]
export function importFromExcel(file: File): Promise<BusinessRecord[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        if (!data) {
          throw new Error('Gagal membaca isi file.');
        }

        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        
        // Parse rows as raw arrays to preserve positions
        const rows: any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        if (rows.length < 2) {
          throw new Error('File Excel kosong atau tidak memiliki baris data.');
        }

        // We check if headers are somewhat aligned
        const fileHeaders = rows[0];
        if (!fileHeaders || fileHeaders.length < 5) {
          throw new Error('Struktur template Excel tidak sesuai. Pastikan header sesuai template.');
        }

        const importedRecords: BusinessRecord[] = [];
        const currentYear = new Date().toISOString();

        // Process data rows (skip headers)
        for (let i = 1; i < rows.length; i++) {
          const row = rows[i];
          if (!row || row.length === 0 || !row[4]) continue; // Skip empty rows (must have Nama Usaha)

          const id = row[0] ? String(row[0]) : `IM-REC-${Math.floor(100000 + Math.random() * 900000)}`;
          const nomorBangunan = String(row[1] || '').trim();
          const nomorKeluarga = String(row[2] || '').trim();
          const namaKK = String(row[3] || '').trim();
          const namaUsaha = String(row[4] || '').trim();
          const namaPemilik = String(row[5] || '').trim();
          const nomorHp = String(row[6] || '').trim();
          const alamat = String(row[7] || '').trim();
          const kbli = String(row[8] || '').trim();
          const kategoriUsaha = String(row[9] || 'A').trim().toUpperCase();
          const tahunBerdiri = String(row[10] || '2026').trim();
          const kegiatanUtama = String(row[11] || '').trim();
          const produkUtama = String(row[12] || '').trim();
          const contohProduk = String(row[13] || '').trim();

          const upahGaji = Number(row[15]) || 0;
          const biayaProduksi = Number(row[16]) || 0;
          const biayaPembelianBarang = Number(row[17]) || 0;
          const biayaOperasional = Number(row[18]) || 0;
          const biayaNonOperasional = Number(row[19]) || 0;
          
          const nilaiProduksiPenjualan = Number(row[21]) || 0;
          const pendapatanLainnya = Number(row[22]) || 0;

          // Excel Worker columns
          const pekerjaLaki = Number(row[24]) || 0;
          const pekerjaPerempuan = Number(row[25]) || 0;
          const pekerjaDibayar = Number(row[26]) || 0;
          const pekerjaTidakDibayar = Number(row[27]) || 0;
          const totalPekerjaGender = pekerjaLaki + pekerjaPerempuan;
          const totalPekerjaStatus = pekerjaDibayar + pekerjaTidakDibayar;
          const modeLuasLahan = String(row[28] || '');
          const isEstimasiLuas = modeLuasLahan === 'Estimasi Total';

          const panjangTanah = Number(row[29]) || 0;
          const lebarTanah = Number(row[30]) || 0;
          const luasTanahExcel = Number(row[31]) || 0;
          
          const luasTanah = isEstimasiLuas ? luasTanahExcel : (panjangTanah * lebarTanah);
          const luasLahanEstimasi = isEstimasiLuas ? luasTanahExcel : 0;
          const hargaTanahPerM2 = Number(row[32]) || 0;

          const panjangBangunan = Number(row[34]) || 0;
          const lebarBangunan = Number(row[35]) || 0;
          const hargaBangunanPerM2 = Number(row[37]) || 0;

          const mesinPeralatan = Number(row[39]) || 0;
          const kendaraanUsaha = Number(row[40]) || 0;

          // Re-calculate derived totals to ensure accuracy
          const luasBangunan = panjangBangunan * lebarBangunan;
          const nilaiTanah = luasTanah * hargaTanahPerM2;
          const nilaiBangunan = luasBangunan * hargaBangunanPerM2;
          const totalAset = nilaiTanah + nilaiBangunan + mesinPeralatan + kendaraanUsaha;
          const totalPengeluaran = upahGaji + biayaProduksi + biayaPembelianBarang + biayaOperasional + biayaNonOperasional;
          const totalProduksi = nilaiProduksiPenjualan + pendapatanLainnya;

          const record: BusinessRecord = {
            id,
            createdAt: currentYear,
            identity: {
              nomorBangunan,
              nomorKeluarga,
              namaKK,
              namaUsaha,
              namaPemilik,
              nomorHp,
              alamat,
              kbli,
              kategoriUsaha,
              tahunBerdiri,
              kegiatanUtama,
              produkUtama,
              contohProduk
            },
            expense: {
              upahGaji,
              biayaProduksi,
              biayaPembelianBarang,
              biayaOperasional,
              biayaNonOperasional,
              totalPengeluaran
            },
            revenue: {
              nilaiProduksiPenjualan,
              pendapatanLainnya,
              totalProduksi
            },
            dimension: {
              panjangTanah,
              lebarTanah,
              panjangBangunan,
              lebarBangunan,
              hargaTanahPerM2,
              hargaBangunanPerM2,
              luasTanah,
              luasBangunan,
              modeLuasLahan: isEstimasiLuas,
              luasEstimasi: luasLahanEstimasi
            },
            worker: {
              pekerjaLaki,
              pekerjaPerempuan,
              pekerjaDibayar,
              pekerjaTidakDibayar,
              totalPekerjaGender,
              totalPekerjaStatus
            },
            asset: {
              nilaiTanah,
              nilaiBangunan,
              mesinPeralatan,
              kendaraanUsaha,
              totalAset
            }
          };

          importedRecords.push(record);
        }

        resolve(importedRecords);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(new Error('Gagal membaca file.'));
    reader.readAsArrayBuffer(file);
  });
}
