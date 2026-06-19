export interface BusinessIdentity {
  namaUsaha: string;
  namaPemilik: string;
  nomorHp: string;
  alamat: string;
  kbli: string;
  kategoriUsaha: string; // Kategori A-U
  tahunBerdiri: string;
  kegiatanUtama: string; // Penjelasan Usaha / Kegiatan Utama
  produkUtama: string;   // Contoh Produk / Produk Utama
  contohProduk: string;  // Contoh rinci produk
}

export interface WorkerModule {
  pekerjaLaki: number; // 24.a1
  pekerjaPerempuan: number; // 24.b1
  totalPekerjaGender: number; // 24.c1
  pekerjaDibayar: number; // 24.a2
  pekerjaTidakDibayar: number; // 24.b2
  totalPekerjaStatus: number; // 24.c2
}

export interface ExpenseModule {
  upahGaji: number; // 26.a
  biayaProduksi: number; // 26.b
  biayaPembelianBarang: number; // 26.c
  biayaOperasional: number; // 26.d
  biayaNonOperasional: number; // 26.e
  totalPengeluaran: number; // 26.f (a+b+c+d+e)
}

export interface RevenueModule {
  nilaiProduksiPenjualan: number; // 27.a
  pendapatanLainnya: number; // 27.b
  totalProduksi: number; // 27.c (a+b)
}

export interface AssetModule {
  nilaiTanah: number; // 28.a
  nilaiBangunan: number; // 28.b
  nilaiMesin: number; // 28.c
  nilaiKendaraan: number; // 28.d
  nilaiPeralatan: number; // 28.e
  totalAset: number;
}

export interface DimensionModule {
  panjangTanah: number;
  lebarTanah: number;
  panjangBangunan: number;
  lebarBangunan: number;
  hargaTanahPerM2: number;
  hargaBangunanPerM2: number;
  luasTanah: number;
  luasBangunan: number;
}

export interface BusinessRecord {
  id: string;
  createdAt: string;
  identity: BusinessIdentity;
  worker: WorkerModule;
  expense: ExpenseModule;
  revenue: RevenueModule;
  asset: AssetModule;
  dimension: DimensionModule;
}

// BPS KBLI Categories A-U mapping
export const KATEGORI_BPS = [
  { code: 'A', name: 'Pertanian, Kehutanan dan Perikanan' },
  { code: 'B', name: 'Pertambangan dan Penggalian' },
  { code: 'C', name: 'Industri Pengolahan' },
  { code: 'D', name: 'Pengadaan Listrik, Gas, Uap/Air Panas Dan Udara Dingin' },
  { code: 'E', name: 'Treatment Air, Treatment Air Limbah, Treatment dan Pemulihan Material Sampah, dan Aktivitas Remediasi' },
  { code: 'F', name: 'Konstruksi' },
  { code: 'G', name: 'Perdagangan Besar Dan Eceran; Reparasi Dan Perawatan Mobil Dan Sepeda Motor' },
  { code: 'H', name: 'Pengangkutan dan Pergudangan' },
  { code: 'I', name: 'Penyediaan Akomodasi Dan Penyediaan Makan Minum' },
  { code: 'J', name: 'Informasi Dan Komunikasi' },
  { code: 'K', name: 'Aktivitas Keuangan Dan Asuransi' },
  { code: 'L', name: 'Real Estat' },
  { code: 'M', name: 'Aktivitas Profesional, Ilmiah Dan Teknis' },
  { code: 'N', name: 'Aktivitas Penyewaan dan Sewa Laksana Tanpa Hak Opsi, Ketenagakerjaan, Agen Perjalanan dan Penunjang Usaha Lainnya' },
  { code: 'O', name: 'Administrasi Pemerintahan, Pertahanan Dan Jaminan Sosial Wajib' },
  { code: 'P', name: 'Pendidikan' },
  { code: 'Q', name: 'Aktivitas Kesehatan Manusia Dan Aktivitas Sosial' },
  { code: 'R', name: 'Kesenian, Hiburan Dan Rekreasi' },
  { code: 'S', name: 'Aktivitas Jasa Lainnya' },
  { code: 'T', name: 'Aktivitas Rumah Tangga Sebagai Pemberi Kerja; Aktivitas Menghasilkan Barang Dan Jasa Oleh Rumah Tangga Yang Digunakan Sendiri Untuk Memenuhi Kebutuhan' },
  { code: 'U', name: 'Aktivitas Badan Internasional Dan Badan Ekstra Teritorial' },
];

export interface CommonKBLI {
  code: string;
  name: string;
  category: string; // A-U
  subCategory: string; // Pertanian, Industri, Perdagangan, Jasa, Lainnya
  detail: string;
}

export const COMMON_KBLIS: CommonKBLI[] = [
  // Pertanian
  { code: '01111', name: 'Pertanian Padi Hibrida', category: 'A', subCategory: 'Pertanian', detail: 'Padi' },
  { code: '01112', name: 'Pertanian Padi Non Hibrida', category: 'A', subCategory: 'Pertanian', detail: 'Padi' },
  { code: '01113', name: 'Pertanian Jagung', category: 'A', subCategory: 'Pertanian', detail: 'Jagung' },
  { code: '01114', name: 'Pertanian Ubi Kayu', category: 'A', subCategory: 'Pertanian', detail: 'Ubi Kayu' },
  { code: '01131', name: 'Pertanian Hortikultura Sayuran Daun', category: 'A', subCategory: 'Pertanian', detail: 'Hortikultura' },
  { code: '01132', name: 'Pertanian Hortikultura Buah', category: 'A', subCategory: 'Pertanian', detail: 'Hortikultura' },
  { code: '01133', name: 'Pertanian Cabai', category: 'A', subCategory: 'Pertanian', detail: 'Cabai' },
  { code: '01139', name: 'Pertanian Sayuran Lainnya', category: 'A', subCategory: 'Pertanian', detail: 'Sayuran' },
  { code: '01150', name: 'Pertanian Tembakau', category: 'A', subCategory: 'Pertanian', detail: 'Tembakau' },
  { code: '01411', name: 'Budidaya Sapi Potong', category: 'A', subCategory: 'Pertanian', detail: 'Peternakan' },
  { code: '01461', name: 'Budidaya Ayam Ras Pedaging', category: 'A', subCategory: 'Pertanian', detail: 'Peternakan' },
  { code: '03111', name: 'Penangkapan Ikan di Laut', category: 'A', subCategory: 'Pertanian', detail: 'Perikanan' },
  { code: '03211', name: 'Budidaya Biota Air Asin', category: 'A', subCategory: 'Pertanian', detail: 'Perikanan' },

  // Industri Pengolahan
  { code: '12019', name: 'Industri Perajangan Tembakau', category: 'C', subCategory: 'Industri Pengolahan', detail: 'Perajangan Tembakau' },
  { code: '10710', name: 'Industri Produk Roti dan Kue (Makanan)', category: 'C', subCategory: 'Industri Pengolahan', detail: 'Pengolahan Makanan' },
  { code: '10792', name: 'Industri Pengolahan Tempe/Tahu', category: 'C', subCategory: 'Industri Pengolahan', detail: 'Pengolahan Makanan' },
  { code: '11040', name: 'Industri Minuman Ringan', category: 'C', subCategory: 'Industri Pengolahan', detail: 'Pengolahan Minuman' },
  { code: '16291', name: 'Industri Kerajinan Kayu dan Bambu', category: 'C', subCategory: 'Industri Pengolahan', detail: 'Kerajinan' },
  { code: '32202', name: 'Industri Kerajinan Perhiasan', category: 'C', subCategory: 'Industri Pengolahan', detail: 'Kerajinan' },

  // Perdagangan
  { code: '47111', name: 'Toko Kelontong Klasik', category: 'G', subCategory: 'Perdagangan', detail: 'Toko Kelontong' },
  { code: '47112', name: 'Warung Kelontong Tradisional', category: 'G', subCategory: 'Perdagangan', detail: 'Warung' },
  { code: '47190', name: 'Kios Penjualan Eceran', category: 'G', subCategory: 'Perdagangan', detail: 'Kios' },
  { code: '47528', name: 'Toko Bahan Bangunan', category: 'G', subCategory: 'Perdagangan', detail: 'Toko Bangunan' },
  { code: '47711', name: 'Toko Pakaian / Butik', category: 'G', subCategory: 'Perdagangan', detail: 'Toko Pakaian' },

  // Jasa
  { code: '45201', name: 'Reparasi Mobil (Bengkel)', category: 'G', subCategory: 'Jasa', detail: 'Bengkel' },
  { code: '45407', name: 'Reparasi Sepeda Motor (Bengkel)', category: 'G', subCategory: 'Jasa', detail: 'Bengkel' },
  { code: '96201', name: 'Aktivitas Binatu (Laundry)', category: 'S', subCategory: 'Jasa', detail: 'Laundry' },
  { code: '96112', name: 'Pangkas Rambut dan Salon Kecantikan', category: 'S', subCategory: 'Jasa', detail: 'Salon' },
  { code: '18111', name: 'Aktivitas Percetakan Berbagai Media', category: 'C', subCategory: 'Jasa', detail: 'Percetakan' },
  { code: '47726', name: 'Toko Eceran Alat Telekomunikasi (Konter HP)', category: 'G', subCategory: 'Jasa', detail: 'Konter HP' },
];

// Helper to format number to IDR currency style (e.g. 1.000.000)
export function formatRupiah(value: number): string {
  if (value === 0 || isNaN(value)) return '0';
  return new Intl.NumberFormat('id-ID', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

// Helper to parse string representation (with dot separator) to plain number
export function parseRupiah(value: string): number {
  const cleanString = value.replace(/[^\d]/g, '');
  const parsed = parseInt(cleanString, 10);
  return isNaN(parsed) ? 0 : parsed;
}

// Perform calculations based on inputs
export function calculateTotals(
  expense: Omit<ExpenseModule, 'totalPengeluaran'>,
  revenue: Omit<RevenueModule, 'totalProduksi'>,
  dimension: Omit<DimensionModule, 'luasTanah' | 'luasBangunan'>,
  asset: Omit<AssetModule, 'totalAset' | 'nilaiTanah' | 'nilaiBangunan'>,
  worker?: Omit<WorkerModule, 'totalPekerjaGender' | 'totalPekerjaStatus'>
): {
  expense: ExpenseModule;
  revenue: RevenueModule;
  dimension: DimensionModule;
  asset: AssetModule;
  worker?: WorkerModule;
  keuntunganKotor: number;
} {
  // 1. Dimensions calculations
  const luasTanah = dimension.panjangTanah * dimension.lebarTanah;
  const luasBangunan = dimension.panjangBangunan * dimension.lebarBangunan;

  // 2. Automated Asset updates
  const nilaiTanah = luasTanah * dimension.hargaTanahPerM2;
  const nilaiBangunan = luasBangunan * dimension.hargaBangunanPerM2;

  // Total Aset = Nilai Tanah + Nilai Bangunan + Mesin + Kendaraan + Peralatan
  const totalAset = nilaiTanah + nilaiBangunan + asset.nilaiMesin + asset.nilaiKendaraan + asset.nilaiPeralatan;

  // 3. Modul Pengeluaran
  const totalPengeluaran =
    expense.upahGaji +
    expense.biayaProduksi +
    expense.biayaPembelianBarang +
    expense.biayaOperasional +
    expense.biayaNonOperasional;

  // 4. Modul Produksi/Pendapatan
  const totalProduksi = revenue.nilaiProduksiPenjualan + revenue.pendapatanLainnya;

  // 5. Keuntungan Kotor
  const keuntunganKotor = totalProduksi - totalPengeluaran;

  // 6. Modul Pekerja
  let calculatedWorker: WorkerModule | undefined;
  if (worker) {
    calculatedWorker = {
      ...worker,
      totalPekerjaGender: worker.pekerjaLaki + worker.pekerjaPerempuan,
      totalPekerjaStatus: worker.pekerjaDibayar + worker.pekerjaTidakDibayar,
    };
  }

  return {
    expense: {
      ...expense,
      totalPengeluaran,
    },
    revenue: {
      ...revenue,
      totalProduksi,
    },
    dimension: {
      ...dimension,
      luasTanah,
      luasBangunan,
    },
    asset: {
      ...asset,
      nilaiTanah,
      nilaiBangunan,
      totalAset,
    },
    worker: calculatedWorker,
    keuntunganKotor,
  };
}

export interface ValidationError {
  field: string;
  message: string;
  type: 'error' | 'warning';
}

// Perform validation checks based on SE2026 logical guidelines
export function validateSE2026Data(record: Partial<BusinessRecord>): ValidationError[] {
  const errors: ValidationError[] = [];

  const { identity, worker, expense, revenue, asset, dimension } = record;

  if (!identity) {
    errors.push({ field: 'identity', message: 'Data identitas usaha tidak ditemukan.', type: 'error' });
    return errors;
  }

  // 1. Validasi Identitas
  if (!identity.namaUsaha || identity.namaUsaha.trim().length < 3) {
    errors.push({ field: 'identity.namaUsaha', message: 'Nama usaha minimal 3 karakter.', type: 'error' });
  }
  if (!identity.namaPemilik || !identity.namaPemilik.trim()) {
    errors.push({ field: 'identity.namaPemilik', message: 'Nama pemilik wajib diisi', type: 'error' });
  }

  // HP validation
  if (!identity.nomorHp || !identity.nomorHp.trim()) {
    errors.push({ field: 'identity.nomorHp', message: 'Nomor HP wajib diisi', type: 'error' });
  } else {
    const hpRegex = /^(?:\+62|62|0)8[1-9][0-9]{6,11}$/;
    if (!hpRegex.test(identity.nomorHp.replace(/\s+/g, ''))) {
      errors.push({ field: 'identity.nomorHp', message: 'Format nomor HP Indonesia tidak valid (misal: 0812xxxxxxxx)', type: 'warning' });
    }
  }

  // Tahun Berdiri validation
  if (identity.tahunBerdiri) {
    const thn = parseInt(identity.tahunBerdiri, 10);
    const currentYear = new Date().getFullYear();
    if (isNaN(thn) || thn < 1900 || thn > currentYear) {
      errors.push({ field: 'identity.tahunBerdiri', message: `Tahun berdiri harus antara 1900 dan ${currentYear}`, type: 'error' });
    }
  } else {
    errors.push({ field: 'identity.tahunBerdiri', message: 'Tahun berdiri wajib diisi', type: 'error' });
  }

  // KBLI format validation
  if (identity.kbli) {
    if (!/^\d{5}$/.test(identity.kbli)) {
      errors.push({ field: 'identity.kbli', message: 'KBLI harus berupa 5 digit angka', type: 'error' });
    }
  } else {
    errors.push({ field: 'identity.kbli', message: 'Kode KBLI wajib diisi', type: 'error' });
  }

  if (!identity.kategoriUsaha) {
    errors.push({ field: 'identity.kategoriUsaha', message: 'Kategori usaha harus dipilih (otomatis dari nama usaha).', type: 'error' });
  }

  // Validation: Pekerja (Rincian 24)
  if (worker) {
    const totalGender = worker.pekerjaLaki + worker.pekerjaPerempuan;
    const totalStatus = worker.pekerjaDibayar + worker.pekerjaTidakDibayar;

    if (totalGender < 1) {
      errors.push({ field: 'worker.totalPekerjaGender', message: 'Minimal terisi 1 pekerja (pemilik usaha sendiri).', type: 'error' });
    }

    if (totalGender !== totalStatus) {
      errors.push({ field: 'worker.totalPekerjaStatus', message: 'Jumlah pekerja berdasarkan jenis kelamin (a1+b1) tidak sesuai dengan jumlah pekerja berdasarkan status (a2+b2).', type: 'error' });
    }
  }

  // Validation 2: Cross check category and KBLI prefix
  if (identity.kategoriUsaha && identity.kbli && /^\d{5}$/.test(identity.kbli)) {
    const kbliPrefix = identity.kbli.substring(0, 2);
    const category = identity.kategoriUsaha;

    // Check Agriculture
    if (category === 'A' && !['01', '02', '03'].includes(kbliPrefix)) {
      errors.push({
        field: 'identity.kbli',
        message: 'Kategori Pertanian (A) biasanya menggunakan KBLI dengan awalan 01, 02, atau 03',
        type: 'warning',
      });
    }
    // Check Manufacturing
    if (category === 'C' && !(parseInt(kbliPrefix) >= 10 && parseInt(kbliPrefix) <= 33)) {
      errors.push({
        field: 'identity.kbli',
        message: 'Kategori Industri Pengolahan (C) biasanya menggunakan KBLI awalan 10 s.d 33',
        type: 'warning',
      });
    }
    // Check Commerce
    if (category === 'G' && !['45', '46', '47'].includes(kbliPrefix)) {
      errors.push({
        field: 'identity.kbli',
        message: 'Kategori Perdagangan (G) biasanya menggunakan KBLI awalan 45, 46, atau 47',
        type: 'warning',
      });
    }
  }

  // Validation 3: Balance checks
  if (expense && revenue) {
    const totalPengeluaran = expense.totalPengeluaran;
    const totalProduksi = revenue.totalProduksi;

    if (totalProduksi > 0 && totalPengeluaran > totalProduksi) {
      errors.push({
        field: 'expense.totalPengeluaran',
        message: 'Perhatian: Total Pengeluaran lebih besar dari Total Pendapatan/Produksi (Usaha Rugi). Pastikan isian sudah benar.',
        type: 'warning',
      });
    }

    if (totalProduksi === 0 && totalPengeluaran === 0) {
      errors.push({
        field: 'revenue.totalProduksi',
        message: 'Nilai Pendapatan dan Pengeluaran masih nol. Harap isi data keuangan usaha.',
        type: 'warning',
      });
    }

    // Upah check for commercial entities
    if (expense.upahGaji === 0 && (identity.kategoriUsaha === 'C' || identity.kategoriUsaha === 'G') && totalProduksi > 50000000) {
      errors.push({
        field: 'expense.upahGaji',
        message: 'Nilai Upah dan Gaji (26.a) nol untuk usaha dengan omset > 50 Juta. Pastikan tidak ada pekerja yang dibayar.',
        type: 'warning',
      });
    }
  }

  // Validation 4: Asset checks
  if (asset && dimension) {
    // If buildings/lands are positive but values are 0
    if (dimension.panjangTanah > 0 && dimension.lebarTanah > 0 && dimension.hargaTanahPerM2 === 0) {
      errors.push({
        field: 'dimension.hargaTanahPerM2',
        message: 'Harga Tanah per m² belum diisi padahal ukuran tanah ada.',
        type: 'warning',
      });
    }
    if (dimension.panjangBangunan > 0 && dimension.lebarBangunan > 0 && dimension.hargaBangunanPerM2 === 0) {
      errors.push({
        field: 'dimension.hargaBangunanPerM2',
        message: 'Harga Bangunan per m² belum diisi padahal ukuran bangunan ada.',
        type: 'warning',
      });
    }
  }

  return errors;
}
