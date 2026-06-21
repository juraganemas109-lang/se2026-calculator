export interface BusinessIdentity {
  nomorBangunan: string; // Nomor Bangunan
  nomorKeluarga: string; // Nomor Urut Keluarga
  namaKK: string;        // Nama Kepala Keluarga
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
  mesinPeralatan: number; // 28.c & 28.e
  kendaraanUsaha: number; // 28.d
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
  modeLuasLahan: boolean;
  luasEstimasi: number;
}

export interface AnalysisModule {
  estimasiBatang?: number;
  estimasiPohon?: number;
  jumlahPohon?: number;
  produksiKg?: number;
  jumlahSak?: number;
  estimasiLuasM2?: number;
  luasM2?: number;
  estimasiLuasHa?: number;
  luasHa?: number;
  estimasiNilaiJualSawah?: number;
  nilaiJualSawah?: number;
  selisihNilaiTambahPengolahan?: number;
  estimasiNilaiJual?: number;
  pendapatanRajangan?: number;
  hargaPerKg?: number;
  modeKepadatan?: 'Normal' | 'Padat' | 'Renggang';
  modeTanam?: 'Normal' | 'Padat' | 'Renggang';
  jenisTembakau?: 'Sawah' | 'Tegal' | 'Gunung';
  jenisPenjualan?: string;
  hargaAcuanKg?: number;
  metodePerhitungan?: string;
  jenisAnalisis?: string;
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
  analysis?: AnalysisModule;
}

// BPS KBLI Categories A-U mapping
export const KATEGORI_BPS = [
  { code: 'A', name: 'Pertanian, Kehutanan dan Perikanan' },
  { code: 'B', name: 'Pertambangan dan Penggalian' },
  { code: 'C', name: 'Industri Pengolahan' },
  { code: 'D', name: 'Pengadaan Listrik, Gas, Uap/Air Panas Dan Udara Dingin' },
  { code: 'G', name: 'Perdagangan Besar Dan Eceran; Reparasi Dan Perawatan Mobil Dan Sepeda Motor' },
  { code: 'I', name: 'Penyediaan Akomodasi Dan Penyediaan Makan Minum' },
  { code: 'K', name: 'Aktivitas Keuangan Dan Asuransi' },
  { code: 'O', name: 'Administrasi Pemerintahan, Pertahanan Dan Jaminan Sosial Wajib' },
  { code: 'Q', name: 'Aktivitas Kesehatan Manusia Dan Aktivitas Sosial' },
  { code: 'R', name: 'Kesenian, Hiburan Dan Rekreasi' },
];

export interface CommonKBLI {
  code: string;
  name: string;
  category: string; // A-U
  kegiatanUtama: string;
  produkUtama: string;
}

export const COMMON_KBLIS: CommonKBLI[] = [
  { code: '01121', name: 'Pertanian padi hibrida', category: 'A', kegiatanUtama: 'Menanam dan merawat padi disawah', produkUtama: 'Gabah Kering' },
  { code: '01122', name: 'Pertanian padi Ibrida', category: 'A', kegiatanUtama: 'Menanam dan merawat padi disawah', produkUtama: 'Gabah Kering' },
  { code: '01150', name: 'Pertanian tembakau', category: 'A', kegiatanUtama: 'Menanam dan merawat Tembakau disawah', produkUtama: 'Daun Tembakau basah' },
  { code: '01131', name: 'Pertanian sayur daun', category: 'A', kegiatanUtama: 'Menanam dan merawat sayur disawah', produkUtama: 'Sayur' },
  { code: '01133', name: 'Pertanian sayur buah (timun, tomat, dll)', category: 'A', kegiatanUtama: 'Menanam dan merawat sayur buah disawah', produkUtama: 'Mentimun, tomat, kacang panjang' },
  { code: '01132', name: 'Pertanian buah semusim (mangga dll)', category: 'A', kegiatanUtama: 'Menanam dan merawat mangga dll dikebun', produkUtama: 'Mangga, pepaya, jeruk, dll' },
  { code: '01135', name: 'Pertanian ubi kayu (singkong)', category: 'A', kegiatanUtama: 'Menanam dan merawat ubikayu dilahan', produkUtama: 'Ubi kayu atau singkong' },
  { code: '01138', name: 'Pertanian cabai', category: 'A', kegiatanUtama: 'Menanam dan merawat cabai rawit disawah', produkUtama: 'Cabai rawit' },
  { code: '01111', name: 'Pertanian jagung', category: 'A', kegiatanUtama: 'Menanam dan merawat jagung dilahan sendiri', produkUtama: 'Jagung' },
  { code: '01139', name: 'Pertanian talas', category: 'A', kegiatanUtama: 'Menanam dan merawat talas dilahan sendiri', produkUtama: 'Talas' },
  { code: '01114', name: 'Pertanian kacang tanah', category: 'A', kegiatanUtama: 'Menanam dan merawat kacang tanah dilahan sendiri', produkUtama: 'Kacang tanah' },
  { code: '01411', name: 'Peternakan sapi', category: 'A', kegiatanUtama: 'Budi daya sapi potong', produkUtama: 'Sapi potong' },
  { code: '01442', name: 'Peternakan Kambing', category: 'A', kegiatanUtama: 'Budi daya dan pembibitan kambing potong', produkUtama: 'Kambing potong' },
  { code: '01461', name: 'Peternakan Ayam Ras pedaging', category: 'A', kegiatanUtama: 'Budi daya ayam ras pedaging', produkUtama: 'Ayam ras pedaging' },
  { code: '01462', name: 'Peternakan ayam ras petelur', category: 'A', kegiatanUtama: 'Budi daya ayam ras petelur', produkUtama: 'Telur ayam ras' },
  { code: '01464', name: 'Peternakan Ayam Kampung / lokal', category: 'A', kegiatanUtama: 'Budi daya ayam kampung / lokal', produkUtama: 'Ayam kampung' },
  { code: '01465', name: 'Peternakan Itik atau bebek', category: 'A', kegiatanUtama: 'Budi daya Itik dan bebek', produkUtama: 'Bebek atau Itik' },
  { code: '08105', name: 'Penggalian Tanah liat', category: 'B', kegiatanUtama: 'Menjual dan mengali tanah liat', produkUtama: 'Tanah Liat' },
  { code: '12004', name: 'Industri Prajangan tembakau', category: 'C', kegiatanUtama: 'Merajang dan pengeringan tembakau rajang', produkUtama: 'Tembakau kering rajang' },
  { code: '14120', name: 'Industri pakaian jadi (maklun)', category: 'C', kegiatanUtama: 'Membuat pakaian jadi sesuai pesanan (maklun)', produkUtama: 'Pakaian' },
  { code: '14111', name: 'Industri Pakaian jadi (milik sendiri)', category: 'C', kegiatanUtama: 'Membuat pakaian jadi milik sendiri', produkUtama: 'Pakaian' },
  { code: '23922', name: 'Industri genteng', category: 'C', kegiatanUtama: 'Membuat Genteng dari tanah liat', produkUtama: 'Genteng' },
  { code: '31011', name: 'Mebeller', category: 'C', kegiatanUtama: 'Membuat pintu, lemari, kusen, dll', produkUtama: 'Pintu, lemari, dll' },
  { code: '10794', name: 'Industri krupuk', category: 'C', kegiatanUtama: 'Membuat krupuk dari bahan tepung', produkUtama: 'Krupuk' },
  { code: '10794', name: 'Industri rengginang', category: 'C', kegiatanUtama: 'Membuat rengginang dari Ketan', produkUtama: 'Rengginang' },
  { code: '10631', name: 'Industri penggilingan padi', category: 'C', kegiatanUtama: 'Menggiling gabah menjadi beras', produkUtama: 'Beras' },
  { code: '35401', name: 'Jual pulsa dan token listrik', category: 'D', kegiatanUtama: 'Agen penjualan tenaga listrik atau broker', produkUtama: 'Token listrik' },
  { code: '61209', name: 'Jual pulsa dan Paket data', category: 'K', kegiatanUtama: 'Agen penjualan pulsa dan paket data di conter', produkUtama: 'Pulsa dan paket data' },
  { code: '46335', name: 'Perdagangan tembakau', category: 'G', kegiatanUtama: 'Menjual dan membeli tembakau kering rajang', produkUtama: 'Tembakau kering rajang' },
  { code: '47112', name: 'Toko pracangan / klontong', category: 'G', kegiatanUtama: 'Menjual berbagai macam kebutuhan sehari-hari', produkUtama: 'Makanan ringan, minyak, gula, dll' },
  { code: '47301', name: 'Perdagangan pertamax/pertalite', category: 'G', kegiatanUtama: 'Menjual pertamax/pertalite eceran', produkUtama: 'Pertalite/pertamax' },
  { code: '46612', name: 'Perdagangan mobil', category: 'G', kegiatanUtama: 'Menjual dan membeli mobil', produkUtama: 'Mobil' },
  { code: '46632', name: 'Perdagangan sepeda motor', category: 'G', kegiatanUtama: 'Menjual dan membeli sepeda motor', produkUtama: 'Sepeda motor' },
  { code: '56101', name: 'Warung rujak dan bakso', category: 'I', kegiatanUtama: 'Menjual atau menyediakan rujak dan bakso', produkUtama: 'Rujak dan bakso' },
  { code: '56290', name: 'Dapur SPPG', category: 'I', kegiatanUtama: 'Penyediaan jasa boga periode tertentu', produkUtama: 'Nasi rames dan ayam goreng+nasi' },
  { code: '56101', name: 'Manjual nasi rames, ayam goreng, dll', category: 'I', kegiatanUtama: 'Menyediakan nasi rames, ayam goreng, dll', produkUtama: 'Nasi rames dan ayam goreng+nasi' },
  { code: '56102', name: 'Menjual pentol keliling', category: 'I', kegiatanUtama: 'Menjual pentol keliling', produkUtama: 'Pentol' },
  { code: '56304', name: 'Menjual es buah', category: 'I', kegiatanUtama: 'Menjual es buah', produkUtama: 'Es buah' },
  { code: '77393', name: 'Sewa guna stenging/prancak', category: 'O', kegiatanUtama: 'Menyewakan stenging/prancak alat kontruksi', produkUtama: 'Stenging atau prancak' },
  { code: '77392', name: 'Sewa traktor pertanian', category: 'O', kegiatanUtama: 'Membajak lahan pertanian', produkUtama: 'Lahan siap tanam' },
  { code: '77391', name: 'Sewa mesin rajang tembakau', category: 'O', kegiatanUtama: 'Merajang daun tembakau basah', produkUtama: 'Tembakau rajang' },
  { code: '85101', name: 'TK. Taman kanak-kanak Pemerintah', category: 'Q', kegiatanUtama: 'Memberikan pendidikan prasekolah', produkUtama: 'Pendidikan prasekolah' },
  { code: '85102', name: 'TK. Taman kanak-kanak swasta', category: 'Q', kegiatanUtama: 'Memberikan pendidikan prasekolah', produkUtama: 'Pendidikan prasekolah' },
  { code: '85103', name: 'RA. Raudhatul Atfal', category: 'Q', kegiatanUtama: 'Memberikan pendidikan prasekolah', produkUtama: 'Pendidikan prasekolah' },
  { code: '85201', name: 'SD. Sekolah dasar', category: 'Q', kegiatanUtama: 'Memberikan pendidikan dasar pada siswa', produkUtama: 'Pendidikan dasar' },
  { code: '85203', name: 'MI. Madrasah Ibtidaiyah', category: 'Q', kegiatanUtama: 'Memberikan pedidikan dasar dan agama pada siswa', produkUtama: 'Pendidikan dasar dan agama' },
  { code: '85311', name: 'SMP. Sekolah menengah Pertama', category: 'Q', kegiatanUtama: 'Memberikan pendidikan menengah pertama pd siswa', produkUtama: 'Pendidikan menengah pertama' },
  { code: '85313', name: 'MTs. Madrasah Tsanawiyah', category: 'Q', kegiatanUtama: 'Memberikan pendidikan menengah dan agama pd siswa', produkUtama: 'Pendidikan menengah pertama & agama' },
  { code: '85316', name: 'SMA, sekolah Menengah atas', category: 'Q', kegiatanUtama: 'Memberikan pendidikan menengah atas pd siswa', produkUtama: 'Pendidikan menengah atas' },
  { code: '85317', name: 'MA. Madrasah Aliyah', category: 'Q', kegiatanUtama: 'Memberikan pendidikan menengah atas & agama pd siswa', produkUtama: 'Pendidikan menengah atas & agama' },
  { code: '85542', name: 'MD. Madrasah diniyah', category: 'Q', kegiatanUtama: 'Mengajar madrasah diniyah', produkUtama: 'Pendidikan agama' },
  { code: '85541', name: 'Guru ngaji', category: 'Q', kegiatanUtama: 'Mengajar anak-anak mengaji Al Quran', produkUtama: 'Membaca Al-Quran' },
  { code: '86995', name: 'Tukang pijet', category: 'R', kegiatanUtama: 'Memijet badan klien', produkUtama: 'Kebugaran tubuh' },
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
  worker?: Omit<WorkerModule, 'totalPekerjaGender' | 'totalPekerjaStatus'>,
  identity?: BusinessIdentity,
  modeKepadatan: 'Normal' | 'Padat' | 'Renggang' = 'Normal',
  jenisTembakau: 'Sawah' | 'Tegal' | 'Gunung' = 'Sawah',
  modeTanam: 'Normal' | 'Padat' | 'Renggang' = 'Normal',
  jumlahSakPadi: number = 0,
  jenisPenjualanPadi: string = 'Gabah Kering Panen (GKP)',
  jumlahPohonPrajangan: number = 0,
  jenisTembakauPrajangan: 'Sawah' | 'Tegal' | 'Gunung' = 'Sawah',
  modeTanamPrajangan: 'Normal' | 'Padat' | 'Renggang' = 'Normal',
  jumlahPohonPertanian: number = 0
): {
  expense: ExpenseModule;
  revenue: RevenueModule;
  dimension: DimensionModule;
  asset: AssetModule;
  worker?: WorkerModule;
  keuntunganKotor: number;
  analysis?: AnalysisModule;
} {
  // 1. Dimensions calculations
  const luasTanah = dimension.modeLuasLahan 
    ? (dimension.luasEstimasi || 0) 
    : (dimension.panjangTanah * dimension.lebarTanah);
  const luasBangunan = dimension.panjangBangunan * dimension.lebarBangunan;

  // 2. Automated Asset updates
  const nilaiTanah = luasTanah * dimension.hargaTanahPerM2;
  const nilaiBangunan = luasBangunan * dimension.hargaBangunanPerM2;

  // Total Aset = Nilai Tanah + Nilai Bangunan + Mesin + Kendaraan + Peralatan
  const totalAset = nilaiTanah + nilaiBangunan + asset.mesinPeralatan + asset.kendaraanUsaha;

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

  // 7. Modul Analisis Otomatis
  let analysis: AnalysisModule | undefined;
  if (identity) {
    const isPrajanganTembakau = 
      identity.kbli === '12004' || 
      (identity.kategoriUsaha === 'C' && /Prajangan Tembakau|Rajangan Tembakau|Industri Tembakau/i.test(identity.namaUsaha));

    if (isPrajanganTembakau) {
      const hargaPerKg = jenisTembakauPrajangan === 'Sawah' ? 47685 : jenisTembakauPrajangan === 'Tegal' ? 53533 : 63500;
      let produksiKg = 0;
      let pendapatanRajangan = 0;
      let luasM2 = 0;
      let luasHa = 0;

      if (jumlahPohonPrajangan > 0) {
        produksiKg = (jumlahPohonPrajangan / 1000) * 70;
        pendapatanRajangan = produksiKg * hargaPerKg;

        let multiplier = 300;
        if (modeTanamPrajangan === 'Padat') multiplier = 330;
        else if (modeTanamPrajangan === 'Renggang') multiplier = 350;

        luasM2 = (jumlahPohonPrajangan / 1000) * multiplier;
        luasHa = luasM2 / 10000;
      }

      analysis = {
        jumlahPohon: jumlahPohonPrajangan,
        produksiKg,
        hargaPerKg,
        pendapatanRajangan,
        luasM2,
        luasHa,
        jenisTembakau: jenisTembakauPrajangan,
        modeTanam: modeTanamPrajangan,
        metodePerhitungan: 'PRAJANGAN_TEMBAKAU_BERDASARKAN_POHON',
        jenisAnalisis: 'PRAJANGAN_TEMBAKAU'
      };
    } else if (identity.kategoriUsaha === 'A' && identity.kbli === '01150') {
      let nilaiJualSawah = 0;
      let luasM2 = 0;
      let luasHa = 0;

      if (jumlahPohonPertanian > 0) {
        nilaiJualSawah = jumlahPohonPertanian * 1500;

        let multiplier = 300;
        if (modeTanam === 'Padat') multiplier = 330;
        else if (modeTanam === 'Renggang') multiplier = 350;

        luasM2 = (jumlahPohonPertanian / 1000) * multiplier;
        luasHa = luasM2 / 10000;
      }

      analysis = {
        jumlahPohon: jumlahPohonPertanian,
        nilaiJualSawah,
        luasM2,
        luasHa,
        modeTanam,
        metodePerhitungan: 'PERTANIAN_TEMBAKAU_BERDASARKAN_POHON',
        jenisAnalisis: 'PERTANIAN_TEMBAKAU'
      };
    } else if (identity.kategoriUsaha === 'A' && identity.kbli === '01121') {
      let hargaAcuan = 7000;
      if (jenisPenjualanPadi === 'Beras Medium') hargaAcuan = 13500;
      else if (jenisPenjualanPadi === 'Beras Premium') hargaAcuan = 16000;
      else if (jenisPenjualanPadi === 'Beras SPHP') hargaAcuan = 12000;

      let produksiKg = 0;
      let finalJumlahSak = 0;
      let estimasiNilaiJual = 0;

      if (jumlahSakPadi > 0) {
        finalJumlahSak = jumlahSakPadi;
        produksiKg = finalJumlahSak * 50;
        estimasiNilaiJual = produksiKg * hargaAcuan;
      } else {
        estimasiNilaiJual = totalProduksi;
        produksiKg = totalProduksi / hargaAcuan;
        finalJumlahSak = produksiKg / 50;
      }

      const estimasiPohon = (finalJumlahSak / 4) * 1000;
      const estimasiLuasM2 = (estimasiPohon / 1000) * 300;
      const estimasiLuasHa = estimasiLuasM2 / 10000;

      analysis = {
        jumlahSak: finalJumlahSak,
        produksiKg,
        estimasiPohon,
        estimasiLuasM2,
        estimasiLuasHa,
        jenisPenjualan: jenisPenjualanPadi,
        hargaAcuanKg: hargaAcuan,
        estimasiNilaiJual,
        metodePerhitungan: jumlahSakPadi > 0 ? 'PADI_HIBRIDA_BERDASARKAN_SAK' : 'PADI_HIBRIDA_BERDASARKAN_PENDAPATAN',
        jenisAnalisis: 'Pertanian Padi Hibrida'
      };
    }
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
    analysis,
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
