export interface BusinessIdentity {
  // Now represents Respondent
  namaPemilik: string;
  nomorHp: string;
  alamat: string;
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

export type JenisUsahaType = 'PADI' | 'TEMBAKAU' | 'PRAJANGAN';

export interface BusinessData {
  id: JenisUsahaType;
  isActive: boolean;
  namaUsaha: string;
  kbli: string;
  kategoriUsaha: string;
  tahunBerdiri: string;
  worker: WorkerModule;
  expense: ExpenseModule;
  revenue: RevenueModule;
  asset: AssetModule;
  dimension: DimensionModule;
  analysis?: AnalysisModule;
  keuntunganKotor: number;
}

export interface BusinessRecord {
  id: string;
  createdAt: string;
  identity: BusinessIdentity; // Responden
  businesses: BusinessData[];
}

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

export interface ValidationError {
  field: string;
  message: string;
  type: 'error' | 'warning';
}

export function validateSE2026Data(record: Partial<BusinessRecord>): ValidationError[] {
  const errors: ValidationError[] = [];

  const { identity, businesses } = record;

  if (!identity) {
    errors.push({ field: 'identity', message: 'Data identitas responden tidak ditemukan.', type: 'error' });
    return errors;
  }

  if (!identity.namaPemilik || !identity.namaPemilik.trim()) {
    errors.push({ field: 'identity.namaPemilik', message: 'Nama pemilik/responden wajib diisi', type: 'error' });
  }

  if (!identity.nomorHp || !identity.nomorHp.trim()) {
    errors.push({ field: 'identity.nomorHp', message: 'Nomor HP wajib diisi', type: 'error' });
  }

  if (!businesses || businesses.length === 0) {
    errors.push({ field: 'businesses', message: 'Minimal 1 usaha harus aktif.', type: 'error' });
    return errors;
  }

  const activeBusinesses = businesses.filter(b => b.isActive);
  if (activeBusinesses.length === 0) {
    errors.push({ field: 'businesses', message: 'Pilih minimal 1 jenis usaha yang aktif.', type: 'error' });
  }

  activeBusinesses.forEach((b, index) => {
    // Validasi tiap usaha (Simplified)
    if (!b.tahunBerdiri) {
      errors.push({ field: `businesses[${index}].tahunBerdiri`, message: `${b.namaUsaha}: Tahun berdiri wajib diisi`, type: 'error' });
    }
  });

  return errors;
}

export function calculateTotals(
  expense: Omit<ExpenseModule, 'totalPengeluaran'>,
  revenue: Omit<RevenueModule, 'totalProduksi'>,
  dimension: Omit<DimensionModule, 'luasTanah' | 'luasBangunan'>,
  asset: Omit<AssetModule, 'totalAset' | 'nilaiTanah' | 'nilaiBangunan'>,
  worker?: Omit<WorkerModule, 'totalPekerjaGender' | 'totalPekerjaStatus'>,
  identity?: { kbli: string; kategoriUsaha: string; namaUsaha: string },
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
    const isPrajanganTembakau = identity.kbli === '12004';

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
    } else if (identity.kbli === '01150') {
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
    } else if (identity.kbli === '01121') {
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
