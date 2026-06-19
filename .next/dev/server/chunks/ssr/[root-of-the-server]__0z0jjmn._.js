module.exports = [
"[project]/src/components/ui/ThemeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
;
;
;
const ThemeToggle = ()=>{
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check local storage or system preferences
        const storedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (storedTheme === 'dark' || !storedTheme && systemPrefersDark) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);
    const toggleTheme = ()=>{
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        className: "p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-bps-blue-light/50",
        "aria-label": "Toggle Theme",
        id: "theme-toggle-btn",
        children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "w-5 h-5 text-amber-400"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ThemeToggle.tsx",
            lineNumber: 40,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "w-5 h-5 text-bps-blue"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ThemeToggle.tsx",
            lineNumber: 40,
            columnNumber: 62
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ThemeToggle.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/utils/calculatorHelper.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMMON_KBLIS",
    ()=>COMMON_KBLIS,
    "KATEGORI_BPS",
    ()=>KATEGORI_BPS,
    "calculateTotals",
    ()=>calculateTotals,
    "formatRupiah",
    ()=>formatRupiah,
    "parseRupiah",
    ()=>parseRupiah,
    "validateSE2026Data",
    ()=>validateSE2026Data
]);
const KATEGORI_BPS = [
    {
        code: 'A',
        name: 'Pertanian, Kehutanan dan Perikanan'
    },
    {
        code: 'B',
        name: 'Pertambangan dan Penggalian'
    },
    {
        code: 'C',
        name: 'Industri Pengolahan'
    },
    {
        code: 'D',
        name: 'Pengadaan Listrik, Gas, Uap/Air Panas Dan Udara Dingin'
    },
    {
        code: 'G',
        name: 'Perdagangan Besar Dan Eceran; Reparasi Dan Perawatan Mobil Dan Sepeda Motor'
    },
    {
        code: 'I',
        name: 'Penyediaan Akomodasi Dan Penyediaan Makan Minum'
    },
    {
        code: 'K',
        name: 'Aktivitas Keuangan Dan Asuransi'
    },
    {
        code: 'O',
        name: 'Administrasi Pemerintahan, Pertahanan Dan Jaminan Sosial Wajib'
    },
    {
        code: 'Q',
        name: 'Aktivitas Kesehatan Manusia Dan Aktivitas Sosial'
    },
    {
        code: 'R',
        name: 'Kesenian, Hiburan Dan Rekreasi'
    }
];
const COMMON_KBLIS = [
    {
        code: '01121',
        name: 'Pertanian padi hibrida',
        category: 'A',
        kegiatanUtama: 'Menanam dan merawat padi disawah',
        produkUtama: 'Gabah Kering'
    },
    {
        code: '01122',
        name: 'Pertanian padi Ibrida',
        category: 'A',
        kegiatanUtama: 'Menanam dan merawat padi disawah',
        produkUtama: 'Gabah Kering'
    },
    {
        code: '01150',
        name: 'Pertanian tembakau',
        category: 'A',
        kegiatanUtama: 'Menanam dan merawat Tembakau disawah',
        produkUtama: 'Daun Tembakau basah'
    },
    {
        code: '01131',
        name: 'Pertanian sayur daun',
        category: 'A',
        kegiatanUtama: 'Menanam dan merawat sayur disawah',
        produkUtama: 'Sayur'
    },
    {
        code: '01133',
        name: 'Pertanian sayur buah (timun, tomat, dll)',
        category: 'A',
        kegiatanUtama: 'Menanam dan merawat sayur buah disawah',
        produkUtama: 'Mentimun, tomat, kacang panjang'
    },
    {
        code: '01132',
        name: 'Pertanian buah semusim (mangga dll)',
        category: 'A',
        kegiatanUtama: 'Menanam dan merawat mangga dll dikebun',
        produkUtama: 'Mangga, pepaya, jeruk, dll'
    },
    {
        code: '01135',
        name: 'Pertanian ubi kayu (singkong)',
        category: 'A',
        kegiatanUtama: 'Menanam dan merawat ubikayu dilahan',
        produkUtama: 'Ubi kayu atau singkong'
    },
    {
        code: '01138',
        name: 'Pertanian cabai',
        category: 'A',
        kegiatanUtama: 'Menanam dan merawat cabai rawit disawah',
        produkUtama: 'Cabai rawit'
    },
    {
        code: '01111',
        name: 'Pertanian jagung',
        category: 'A',
        kegiatanUtama: 'Menanam dan merawat jagung dilahan sendiri',
        produkUtama: 'Jagung'
    },
    {
        code: '01139',
        name: 'Pertanian talas',
        category: 'A',
        kegiatanUtama: 'Menanam dan merawat talas dilahan sendiri',
        produkUtama: 'Talas'
    },
    {
        code: '01114',
        name: 'Pertanian kacang tanah',
        category: 'A',
        kegiatanUtama: 'Menanam dan merawat kacang tanah dilahan sendiri',
        produkUtama: 'Kacang tanah'
    },
    {
        code: '01411',
        name: 'Peternakan sapi',
        category: 'A',
        kegiatanUtama: 'Budi daya sapi potong',
        produkUtama: 'Sapi potong'
    },
    {
        code: '01442',
        name: 'Peternakan Kambing',
        category: 'A',
        kegiatanUtama: 'Budi daya dan pembibitan kambing potong',
        produkUtama: 'Kambing potong'
    },
    {
        code: '01461',
        name: 'Peternakan Ayam Ras pedaging',
        category: 'A',
        kegiatanUtama: 'Budi daya ayam ras pedaging',
        produkUtama: 'Ayam ras pedaging'
    },
    {
        code: '01462',
        name: 'Peternakan ayam ras petelur',
        category: 'A',
        kegiatanUtama: 'Budi daya ayam ras petelur',
        produkUtama: 'Telur ayam ras'
    },
    {
        code: '01464',
        name: 'Peternakan Ayam Kampung / lokal',
        category: 'A',
        kegiatanUtama: 'Budi daya ayam kampung / lokal',
        produkUtama: 'Ayam kampung'
    },
    {
        code: '01465',
        name: 'Peternakan Itik atau bebek',
        category: 'A',
        kegiatanUtama: 'Budi daya Itik dan bebek',
        produkUtama: 'Bebek atau Itik'
    },
    {
        code: '08105',
        name: 'Penggalian Tanah liat',
        category: 'B',
        kegiatanUtama: 'Menjual dan mengali tanah liat',
        produkUtama: 'Tanah Liat'
    },
    {
        code: '12004',
        name: 'Industri Prajangan tembakau',
        category: 'C',
        kegiatanUtama: 'Merajang dan pengeringan tembakau rajang',
        produkUtama: 'Tembakau kering rajang'
    },
    {
        code: '14120',
        name: 'Industri pakaian jadi (maklun)',
        category: 'C',
        kegiatanUtama: 'Membuat pakaian jadi sesuai pesanan (maklun)',
        produkUtama: 'Pakaian'
    },
    {
        code: '14111',
        name: 'Industri Pakaian jadi (milik sendiri)',
        category: 'C',
        kegiatanUtama: 'Membuat pakaian jadi milik sendiri',
        produkUtama: 'Pakaian'
    },
    {
        code: '23922',
        name: 'Industri genteng',
        category: 'C',
        kegiatanUtama: 'Membuat Genteng dari tanah liat',
        produkUtama: 'Genteng'
    },
    {
        code: '31011',
        name: 'Mebeller',
        category: 'C',
        kegiatanUtama: 'Membuat pintu, lemari, kusen, dll',
        produkUtama: 'Pintu, lemari, dll'
    },
    {
        code: '10794',
        name: 'Industri krupuk',
        category: 'C',
        kegiatanUtama: 'Membuat krupuk dari bahan tepung',
        produkUtama: 'Krupuk'
    },
    {
        code: '10794',
        name: 'Industri rengginang',
        category: 'C',
        kegiatanUtama: 'Membuat rengginang dari Ketan',
        produkUtama: 'Rengginang'
    },
    {
        code: '10631',
        name: 'Industri penggilingan padi',
        category: 'C',
        kegiatanUtama: 'Menggiling gabah menjadi beras',
        produkUtama: 'Beras'
    },
    {
        code: '35401',
        name: 'Jual pulsa dan token listrik',
        category: 'D',
        kegiatanUtama: 'Agen penjualan tenaga listrik atau broker',
        produkUtama: 'Token listrik'
    },
    {
        code: '61209',
        name: 'Jual pulsa dan Paket data',
        category: 'K',
        kegiatanUtama: 'Agen penjualan pulsa dan paket data di conter',
        produkUtama: 'Pulsa dan paket data'
    },
    {
        code: '46335',
        name: 'Perdagangan tembakau',
        category: 'G',
        kegiatanUtama: 'Menjual dan membeli tembakau kering rajang',
        produkUtama: 'Tembakau kering rajang'
    },
    {
        code: '47112',
        name: 'Toko pracangan / klontong',
        category: 'G',
        kegiatanUtama: 'Menjual berbagai macam kebutuhan sehari-hari',
        produkUtama: 'Makanan ringan, minyak, gula, dll'
    },
    {
        code: '47301',
        name: 'Perdagangan pertamax/pertalite',
        category: 'G',
        kegiatanUtama: 'Menjual pertamax/pertalite eceran',
        produkUtama: 'Pertalite/pertamax'
    },
    {
        code: '46612',
        name: 'Perdagangan mobil',
        category: 'G',
        kegiatanUtama: 'Menjual dan membeli mobil',
        produkUtama: 'Mobil'
    },
    {
        code: '46632',
        name: 'Perdagangan sepeda motor',
        category: 'G',
        kegiatanUtama: 'Menjual dan membeli sepeda motor',
        produkUtama: 'Sepeda motor'
    },
    {
        code: '56101',
        name: 'Warung rujak dan bakso',
        category: 'I',
        kegiatanUtama: 'Menjual atau menyediakan rujak dan bakso',
        produkUtama: 'Rujak dan bakso'
    },
    {
        code: '56290',
        name: 'Dapur SPPG',
        category: 'I',
        kegiatanUtama: 'Penyediaan jasa boga periode tertentu',
        produkUtama: 'Nasi rames dan ayam goreng+nasi'
    },
    {
        code: '56101',
        name: 'Manjual nasi rames, ayam goreng, dll',
        category: 'I',
        kegiatanUtama: 'Menyediakan nasi rames, ayam goreng, dll',
        produkUtama: 'Nasi rames dan ayam goreng+nasi'
    },
    {
        code: '56102',
        name: 'Menjual pentol keliling',
        category: 'I',
        kegiatanUtama: 'Menjual pentol keliling',
        produkUtama: 'Pentol'
    },
    {
        code: '56304',
        name: 'Menjual es buah',
        category: 'I',
        kegiatanUtama: 'Menjual es buah',
        produkUtama: 'Es buah'
    },
    {
        code: '77393',
        name: 'Sewa guna stenging/prancak',
        category: 'O',
        kegiatanUtama: 'Menyewakan stenging/prancak alat kontruksi',
        produkUtama: 'Stenging atau prancak'
    },
    {
        code: '77392',
        name: 'Sewa traktor pertanian',
        category: 'O',
        kegiatanUtama: 'Membajak lahan pertanian',
        produkUtama: 'Lahan siap tanam'
    },
    {
        code: '77391',
        name: 'Sewa mesin rajang tembakau',
        category: 'O',
        kegiatanUtama: 'Merajang daun tembakau basah',
        produkUtama: 'Tembakau rajang'
    },
    {
        code: '85101',
        name: 'TK. Taman kanak-kanak Pemerintah',
        category: 'Q',
        kegiatanUtama: 'Memberikan pendidikan prasekolah',
        produkUtama: 'Pendidikan prasekolah'
    },
    {
        code: '85102',
        name: 'TK. Taman kanak-kanak swasta',
        category: 'Q',
        kegiatanUtama: 'Memberikan pendidikan prasekolah',
        produkUtama: 'Pendidikan prasekolah'
    },
    {
        code: '85103',
        name: 'RA. Raudhatul Atfal',
        category: 'Q',
        kegiatanUtama: 'Memberikan pendidikan prasekolah',
        produkUtama: 'Pendidikan prasekolah'
    },
    {
        code: '85201',
        name: 'SD. Sekolah dasar',
        category: 'Q',
        kegiatanUtama: 'Memberikan pendidikan dasar pada siswa',
        produkUtama: 'Pendidikan dasar'
    },
    {
        code: '85203',
        name: 'MI. Madrasah Ibtidaiyah',
        category: 'Q',
        kegiatanUtama: 'Memberikan pedidikan dasar dan agama pada siswa',
        produkUtama: 'Pendidikan dasar dan agama'
    },
    {
        code: '85311',
        name: 'SMP. Sekolah menengah Pertama',
        category: 'Q',
        kegiatanUtama: 'Memberikan pendidikan menengah pertama pd siswa',
        produkUtama: 'Pendidikan menengah pertama'
    },
    {
        code: '85313',
        name: 'MTs. Madrasah Tsanawiyah',
        category: 'Q',
        kegiatanUtama: 'Memberikan pendidikan menengah dan agama pd siswa',
        produkUtama: 'Pendidikan menengah pertama & agama'
    },
    {
        code: '85316',
        name: 'SMA, sekolah Menengah atas',
        category: 'Q',
        kegiatanUtama: 'Memberikan pendidikan menengah atas pd siswa',
        produkUtama: 'Pendidikan menengah atas'
    },
    {
        code: '85317',
        name: 'MA. Madrasah Aliyah',
        category: 'Q',
        kegiatanUtama: 'Memberikan pendidikan menengah atas & agama pd siswa',
        produkUtama: 'Pendidikan menengah atas & agama'
    },
    {
        code: '85542',
        name: 'MD. Madrasah diniyah',
        category: 'Q',
        kegiatanUtama: 'Mengajar madrasah diniyah',
        produkUtama: 'Pendidikan agama'
    },
    {
        code: '85541',
        name: 'Guru ngaji',
        category: 'Q',
        kegiatanUtama: 'Mengajar anak-anak mengaji Al Quran',
        produkUtama: 'Membaca Al-Quran'
    },
    {
        code: '86995',
        name: 'Tukang pijet',
        category: 'R',
        kegiatanUtama: 'Memijet badan klien',
        produkUtama: 'Kebugaran tubuh'
    }
];
function formatRupiah(value) {
    if (value === 0 || isNaN(value)) return '0';
    return new Intl.NumberFormat('id-ID', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}
function parseRupiah(value) {
    const cleanString = value.replace(/[^\d]/g, '');
    const parsed = parseInt(cleanString, 10);
    return isNaN(parsed) ? 0 : parsed;
}
function calculateTotals(expense, revenue, dimension, asset, worker) {
    // 1. Dimensions calculations
    const luasTanah = dimension.modeLuasLahan ? dimension.luasEstimasi || 0 : dimension.panjangTanah * dimension.lebarTanah;
    const luasBangunan = dimension.panjangBangunan * dimension.lebarBangunan;
    // 2. Automated Asset updates
    const nilaiTanah = luasTanah * dimension.hargaTanahPerM2;
    const nilaiBangunan = luasBangunan * dimension.hargaBangunanPerM2;
    // Total Aset = Nilai Tanah + Nilai Bangunan + Mesin + Kendaraan + Peralatan
    const totalAset = nilaiTanah + nilaiBangunan + asset.mesinPeralatan + asset.kendaraanUsaha;
    // 3. Modul Pengeluaran
    const totalPengeluaran = expense.upahGaji + expense.biayaProduksi + expense.biayaPembelianBarang + expense.biayaOperasional + expense.biayaNonOperasional;
    // 4. Modul Produksi/Pendapatan
    const totalProduksi = revenue.nilaiProduksiPenjualan + revenue.pendapatanLainnya;
    // 5. Keuntungan Kotor
    const keuntunganKotor = totalProduksi - totalPengeluaran;
    // 6. Modul Pekerja
    let calculatedWorker;
    if (worker) {
        calculatedWorker = {
            ...worker,
            totalPekerjaGender: worker.pekerjaLaki + worker.pekerjaPerempuan,
            totalPekerjaStatus: worker.pekerjaDibayar + worker.pekerjaTidakDibayar
        };
    }
    return {
        expense: {
            ...expense,
            totalPengeluaran
        },
        revenue: {
            ...revenue,
            totalProduksi
        },
        dimension: {
            ...dimension,
            luasTanah,
            luasBangunan
        },
        asset: {
            ...asset,
            nilaiTanah,
            nilaiBangunan,
            totalAset
        },
        worker: calculatedWorker,
        keuntunganKotor
    };
}
function validateSE2026Data(record) {
    const errors = [];
    const { identity, worker, expense, revenue, asset, dimension } = record;
    if (!identity) {
        errors.push({
            field: 'identity',
            message: 'Data identitas usaha tidak ditemukan.',
            type: 'error'
        });
        return errors;
    }
    // 1. Validasi Identitas
    if (!identity.namaUsaha || identity.namaUsaha.trim().length < 3) {
        errors.push({
            field: 'identity.namaUsaha',
            message: 'Nama usaha minimal 3 karakter.',
            type: 'error'
        });
    }
    if (!identity.namaPemilik || !identity.namaPemilik.trim()) {
        errors.push({
            field: 'identity.namaPemilik',
            message: 'Nama pemilik wajib diisi',
            type: 'error'
        });
    }
    // HP validation
    if (!identity.nomorHp || !identity.nomorHp.trim()) {
        errors.push({
            field: 'identity.nomorHp',
            message: 'Nomor HP wajib diisi',
            type: 'error'
        });
    } else {
        const hpRegex = /^(?:\+62|62|0)8[1-9][0-9]{6,11}$/;
        if (!hpRegex.test(identity.nomorHp.replace(/\s+/g, ''))) {
            errors.push({
                field: 'identity.nomorHp',
                message: 'Format nomor HP Indonesia tidak valid (misal: 0812xxxxxxxx)',
                type: 'warning'
            });
        }
    }
    // Tahun Berdiri validation
    if (identity.tahunBerdiri) {
        const thn = parseInt(identity.tahunBerdiri, 10);
        const currentYear = new Date().getFullYear();
        if (isNaN(thn) || thn < 1900 || thn > currentYear) {
            errors.push({
                field: 'identity.tahunBerdiri',
                message: `Tahun berdiri harus antara 1900 dan ${currentYear}`,
                type: 'error'
            });
        }
    } else {
        errors.push({
            field: 'identity.tahunBerdiri',
            message: 'Tahun berdiri wajib diisi',
            type: 'error'
        });
    }
    // KBLI format validation
    if (identity.kbli) {
        if (!/^\d{5}$/.test(identity.kbli)) {
            errors.push({
                field: 'identity.kbli',
                message: 'KBLI harus berupa 5 digit angka',
                type: 'error'
            });
        }
    } else {
        errors.push({
            field: 'identity.kbli',
            message: 'Kode KBLI wajib diisi',
            type: 'error'
        });
    }
    if (!identity.kategoriUsaha) {
        errors.push({
            field: 'identity.kategoriUsaha',
            message: 'Kategori usaha harus dipilih (otomatis dari nama usaha).',
            type: 'error'
        });
    }
    // Validation: Pekerja (Rincian 24)
    if (worker) {
        const totalGender = worker.pekerjaLaki + worker.pekerjaPerempuan;
        const totalStatus = worker.pekerjaDibayar + worker.pekerjaTidakDibayar;
        if (totalGender < 1) {
            errors.push({
                field: 'worker.totalPekerjaGender',
                message: 'Minimal terisi 1 pekerja (pemilik usaha sendiri).',
                type: 'error'
            });
        }
        if (totalGender !== totalStatus) {
            errors.push({
                field: 'worker.totalPekerjaStatus',
                message: 'Jumlah pekerja berdasarkan jenis kelamin (a1+b1) tidak sesuai dengan jumlah pekerja berdasarkan status (a2+b2).',
                type: 'error'
            });
        }
    }
    // Validation 2: Cross check category and KBLI prefix
    if (identity.kategoriUsaha && identity.kbli && /^\d{5}$/.test(identity.kbli)) {
        const kbliPrefix = identity.kbli.substring(0, 2);
        const category = identity.kategoriUsaha;
        // Check Agriculture
        if (category === 'A' && ![
            '01',
            '02',
            '03'
        ].includes(kbliPrefix)) {
            errors.push({
                field: 'identity.kbli',
                message: 'Kategori Pertanian (A) biasanya menggunakan KBLI dengan awalan 01, 02, atau 03',
                type: 'warning'
            });
        }
        // Check Manufacturing
        if (category === 'C' && !(parseInt(kbliPrefix) >= 10 && parseInt(kbliPrefix) <= 33)) {
            errors.push({
                field: 'identity.kbli',
                message: 'Kategori Industri Pengolahan (C) biasanya menggunakan KBLI awalan 10 s.d 33',
                type: 'warning'
            });
        }
        // Check Commerce
        if (category === 'G' && ![
            '45',
            '46',
            '47'
        ].includes(kbliPrefix)) {
            errors.push({
                field: 'identity.kbli',
                message: 'Kategori Perdagangan (G) biasanya menggunakan KBLI awalan 45, 46, atau 47',
                type: 'warning'
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
                type: 'warning'
            });
        }
        if (totalProduksi === 0 && totalPengeluaran === 0) {
            errors.push({
                field: 'revenue.totalProduksi',
                message: 'Nilai Pendapatan dan Pengeluaran masih nol. Harap isi data keuangan usaha.',
                type: 'warning'
            });
        }
        // Upah check for commercial entities
        if (expense.upahGaji === 0 && (identity.kategoriUsaha === 'C' || identity.kategoriUsaha === 'G') && totalProduksi > 50000000) {
            errors.push({
                field: 'expense.upahGaji',
                message: 'Nilai Upah dan Gaji (26.a) nol untuk usaha dengan omset > 50 Juta. Pastikan tidak ada pekerja yang dibayar.',
                type: 'warning'
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
                type: 'warning'
            });
        }
        if (dimension.panjangBangunan > 0 && dimension.lebarBangunan > 0 && dimension.hargaBangunanPerM2 === 0) {
            errors.push({
                field: 'dimension.hargaBangunanPerM2',
                message: 'Harga Bangunan per m² belum diisi padahal ukuran bangunan ada.',
                type: 'warning'
            });
        }
    }
    return errors;
}
}),
"[project]/src/components/ui/InputRupiah.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputRupiah",
    ()=>InputRupiah
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/calculatorHelper.ts [app-ssr] (ecmascript)");
;
;
;
const InputRupiah = ({ id, label, value, onChange, disabled = false, placeholder = '0', required = false, error, info, prefix = 'Rp', suffix = '' })=>{
    const [displayValue, setDisplayValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('0');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setDisplayValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(value));
    }, [
        value
    ]);
    const handleChange = (e)=>{
        const rawInput = e.target.value;
        // Add logging as requested
        if (id === 'hargaTanah' || id === 'hargaBangunan') {
            console.log(`${id} Raw:`, rawInput);
        }
        // If input is empty, treat as 0
        if (rawInput === '') {
            setDisplayValue('');
            onChange(0);
            return;
        }
        const numeric = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseRupiah"])(rawInput);
        if (id === 'hargaTanah' || id === 'hargaBangunan') {
            console.log(`${id} Parsed:`, numeric);
        }
        setDisplayValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(numeric));
        onChange(numeric);
    };
    const handleFocus = (e)=>{
        if (value === 0) {
            setDisplayValue('');
        }
    };
    const handleBlur = ()=>{
        if (value === 0 || isNaN(value)) {
            setDisplayValue('0');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col gap-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200 flex items-center justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        label,
                        " ",
                        required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-red-500",
                            children: "*"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/InputRupiah.tsx",
                            lineNumber: 78,
                            columnNumber: 32
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/InputRupiah.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/InputRupiah.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center rounded-lg shadow-sm",
                children: [
                    prefix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-3 text-sm font-semibold text-slate-400 select-none",
                        children: prefix
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/InputRupiah.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: id,
                        type: "text",
                        inputMode: "numeric",
                        value: displayValue,
                        onChange: handleChange,
                        onFocus: handleFocus,
                        onBlur: handleBlur,
                        disabled: disabled,
                        placeholder: placeholder,
                        className: `w-full ${prefix ? 'pl-9' : 'pl-3'} ${suffix ? 'pr-9' : 'pr-3'} py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border focus:outline-none focus:ring-2 transition-all font-mono font-medium ${error ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-950 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:ring-bps-blue-light/20 focus:border-bps-blue-light'} ${disabled ? 'bg-slate-100 dark:bg-slate-900 text-slate-400 cursor-not-allowed' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/InputRupiah.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    suffix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute right-3 text-sm font-semibold text-slate-400 select-none",
                        children: suffix
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/InputRupiah.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/InputRupiah.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px] md:text-xs text-red-500 font-medium",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/ui/InputRupiah.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            info && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px] text-slate-400 dark:text-slate-500",
                children: info
            }, void 0, false, {
                fileName: "[project]/src/components/ui/InputRupiah.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/InputRupiah.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/utils/master-usaha-se2026.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("[{\"namaUsaha\":\"Peratanian padi hibrida\",\"kategori\":\"A\",\"kbli\":\"01121\",\"kegiatanUtama\":\"Menanam dan merawat padi disawah\",\"produkUtama\":\"Gabah Kering\",\"contohProduk\":\"Gabah Kering\"},{\"namaUsaha\":\"Peratanian padi Ibrida\",\"kategori\":\"A\",\"kbli\":\"01122\",\"kegiatanUtama\":\"Menanam dan merawat padi disawah\",\"produkUtama\":\"Gabah Kering\",\"contohProduk\":\"Gabah Kering\"},{\"namaUsaha\":\"Pertanian tembakau\",\"kategori\":\"A\",\"kbli\":\"01150\",\"kegiatanUtama\":\"Menanam dan merawat Tembakau disawah\",\"produkUtama\":\"Daun Tembakau basah\",\"contohProduk\":\"Daun Tembakau basah\"},{\"namaUsaha\":\"pertanian sayur daun\",\"kategori\":\"A\",\"kbli\":\"01131\",\"kegiatanUtama\":\"Menanam dan merawat sayur disawah\",\"produkUtama\":\"Sayur\",\"contohProduk\":\"Sayur\"},{\"namaUsaha\":\"pertanian sayur buah (timun, tomat, dll\",\"kategori\":\"A\",\"kbli\":\"01133\",\"kegiatanUtama\":\"Menanam dan merawat sayur buah disawah\",\"produkUtama\":\"mentimun, tomat, kacang panjang\",\"contohProduk\":\"mentimun, tomat, kacang panjang\"},{\"namaUsaha\":\"Pertanian buah semusim (mangga dll)\",\"kategori\":\"A\",\"kbli\":\"01132\",\"kegiatanUtama\":\"Menanam dan merawat mangga dll dikebun\",\"produkUtama\":\"mangga, pepaya, jeruk dan dll\",\"contohProduk\":\"mangga, pepaya, jeruk dan dll\"},{\"namaUsaha\":\"Pertnian ubi kayu (singkong)\",\"kategori\":\"A\",\"kbli\":\"01135\",\"kegiatanUtama\":\"Menanam dan merawat ubikayu dilahan\",\"produkUtama\":\"ubi kayu atau singkong\",\"contohProduk\":\"ubi kayu atau singkong\"},{\"namaUsaha\":\"pertanlan cabal\",\"kategori\":\"A\",\"kbli\":\"01138\",\"kegiatanUtama\":\"Menanam dan merawat cabai rawit disawah\",\"produkUtama\":\"cabai rawit\",\"contohProduk\":\"cabai rawit\"},{\"namaUsaha\":\"pertnian jagung\",\"kategori\":\"A\",\"kbli\":\"01111\",\"kegiatanUtama\":\"Menanam dan merawat jagung dilahan sendiri\",\"produkUtama\":\"jagung\",\"contohProduk\":\"jagung\"},{\"namaUsaha\":\"pertanian talas\",\"kategori\":\"A\",\"kbli\":\"01139\",\"kegiatanUtama\":\"Menanam dan merawat talas dilahan sendiri\",\"produkUtama\":\"Talas\",\"contohProduk\":\"Talas\"},{\"namaUsaha\":\"pertanian kacang tanah\",\"kategori\":\"A\",\"kbli\":\"01114\",\"kegiatanUtama\":\"Menanam dan merawat kacang tanah dilahan sendiri\",\"produkUtama\":\"kacang tanah\",\"contohProduk\":\"kacang tanah\"},{\"namaUsaha\":\"Peternakan sapi\",\"kategori\":\"A\",\"kbli\":\"01411\",\"kegiatanUtama\":\"Budi daya sapi potong\",\"produkUtama\":\"Sapi potong\",\"contohProduk\":\"Sapi potong\"},{\"namaUsaha\":\"Peternakan Kambing\",\"kategori\":\"A\",\"kbli\":\"01442\",\"kegiatanUtama\":\"Budi daya dan pembibitan kambing potong\",\"produkUtama\":\"Kambing potong\",\"contohProduk\":\"Kambing potong\"},{\"namaUsaha\":\"Peternakan Ayam Ras pedaging\",\"kategori\":\"A\",\"kbli\":\"01461\",\"kegiatanUtama\":\"Budi daya ayam ras pedaging\",\"produkUtama\":\"Ayam ras pedaging\",\"contohProduk\":\"Ayam ras pedaging\"},{\"namaUsaha\":\"Peternakan ayam ras petelur\",\"kategori\":\"A\",\"kbli\":\"01462\",\"kegiatanUtama\":\"Budi daya ayam ras petelur\",\"produkUtama\":\"Telur ayam ras\",\"contohProduk\":\"Telur ayam ras\"},{\"namaUsaha\":\"Peternakan Ayam Kampung / lokal\",\"kategori\":\"A\",\"kbli\":\"01464\",\"kegiatanUtama\":\"Budi daya ayam kampung / lokal\",\"produkUtama\":\"ayam kampung\",\"contohProduk\":\"ayam kampung\"},{\"namaUsaha\":\"Peternakan Itik atau bebek\",\"kategori\":\"A\",\"kbli\":\"01465\",\"kegiatanUtama\":\"Budi daya Itik dan bebek\",\"produkUtama\":\"bebek atau Itik\",\"contohProduk\":\"bebek atau Itik\"},{\"namaUsaha\":\"Penggalian Tanah liat\",\"kategori\":\"B\",\"kbli\":\"08105\",\"kegiatanUtama\":\"menjual dan mengali tanah liat\",\"produkUtama\":\"Tanah Liat\",\"contohProduk\":\"Tanah Liat\"},{\"namaUsaha\":\"Industri Prajangan tembakau\",\"kategori\":\"C\",\"kbli\":\"12004\",\"kegiatanUtama\":\"Merajang dan pengeringan tembakau rajang\",\"produkUtama\":\"tembakau kering rajang\",\"contohProduk\":\"tembakau kering rajang\"},{\"namaUsaha\":\"Industri pakain jadi\",\"kategori\":\"C\",\"kbli\":\"14120\",\"kegiatanUtama\":\"Membuat pakaian jadi sesuai pesanan (maklun)\",\"produkUtama\":\"Pakaian\",\"contohProduk\":\"Pakaian\"},{\"namaUsaha\":\"Industri Pakaian jadi\",\"kategori\":\"C\",\"kbli\":\"14111\",\"kegiatanUtama\":\"Membuat pakaian jadi milik sendiri\",\"produkUtama\":\"Pakaian\",\"contohProduk\":\"Pakaian\"},{\"namaUsaha\":\"Industri genteng\",\"kategori\":\"C\",\"kbli\":\"23922\",\"kegiatanUtama\":\"Membuat Genteng dari tanah liat\",\"produkUtama\":\"genteng\",\"contohProduk\":\"genteng\"},{\"namaUsaha\":\"Mebeller\",\"kategori\":\"C\",\"kbli\":\"31011\",\"kegiatanUtama\":\"Membuat pintu, lemari, kusen, dan dll\",\"produkUtama\":\"Pintu, lemri dan Dll\",\"contohProduk\":\"Pintu, lemri dan Dll\"},{\"namaUsaha\":\"Industri krupuk\",\"kategori\":\"C\",\"kbli\":\"10794\",\"kegiatanUtama\":\"Membuat krupuk dari bahan tepung\",\"produkUtama\":\"Krupuk\",\"contohProduk\":\"Krupuk\"},{\"namaUsaha\":\"Industri rengginang\",\"kategori\":\"C\",\"kbli\":\"10794\",\"kegiatanUtama\":\"Membuat rengginang dari Ketan\",\"produkUtama\":\"rengginang\",\"contohProduk\":\"rengginang\"},{\"namaUsaha\":\"industri penggilingan padi\",\"kategori\":\"C\",\"kbli\":\"10631\",\"kegiatanUtama\":\"menggiling gabah menjadi beras\",\"produkUtama\":\"beras\",\"contohProduk\":\"beras\"},{\"namaUsaha\":\"jual pulsa dan token listrik\",\"kategori\":\"D\",\"kbli\":\"35401\",\"kegiatanUtama\":\"agen penjualan tenaga listrik atau broker\",\"produkUtama\":\"token listrik\",\"contohProduk\":\"token listrik\"},{\"namaUsaha\":\"Jual pulsa dan Paket data\",\"kategori\":\"K\",\"kbli\":\"61209\",\"kegiatanUtama\":\"agen penjualan pulsa dan paket data di conter\",\"produkUtama\":\"Pulsa dan paket data\",\"contohProduk\":\"Pulsa dan paket data\"},{\"namaUsaha\":\"Perdagangan tembakau\",\"kategori\":\"G\",\"kbli\":\"46335\",\"kegiatanUtama\":\"menjual dan membeli tembakau kering rajang\",\"produkUtama\":\"tembakau kering rajang\",\"contohProduk\":\"tembakau kering rajang\"},{\"namaUsaha\":\"Toko pracangan / klontong\",\"kategori\":\"G\",\"kbli\":\"47112\",\"kegiatanUtama\":\"Menjual berbagai macam kebutuhan sehari-hari\",\"produkUtama\":\"makanan ringan, minyak, gula, dll\",\"contohProduk\":\"makanan ringan, minyak, gula, dll\"},{\"namaUsaha\":\"Perdagangan pertamax/pertalite\",\"kategori\":\"G\",\"kbli\":\"47301\",\"kegiatanUtama\":\"Menjual pertamax/pertalite eceran\",\"produkUtama\":\"pertalite/pertamax\",\"contohProduk\":\"pertalite/pertamax\"},{\"namaUsaha\":\"perdagangan mobil\",\"kategori\":\"G\",\"kbli\":\"46612\",\"kegiatanUtama\":\"menjual dan membeli mobil\",\"produkUtama\":\"mobil\",\"contohProduk\":\"mobil\"},{\"namaUsaha\":\"perdagangan sepeda motor\",\"kategori\":\"G\",\"kbli\":\"46632\",\"kegiatanUtama\":\"menjual dan membeli sepeda motor\",\"produkUtama\":\"sepeda motor\",\"contohProduk\":\"sepeda motor\"},{\"namaUsaha\":\"warung rujak dan bakso\",\"kategori\":\"I\",\"kbli\":\"56101\",\"kegiatanUtama\":\"menjual atau menyediakan rujak dan bakso\",\"produkUtama\":\"rujak dan bakso\",\"contohProduk\":\"rujak dan bakso\"},{\"namaUsaha\":\"Dapur SPPG\",\"kategori\":\"I\",\"kbli\":\"56290\",\"kegiatanUtama\":\"Penyediaan jasa boga priode tertentu\",\"produkUtama\":\"nasi rames dan ayam goreng+nasi\",\"contohProduk\":\"nasi rames dan ayam goreng+nasi\"},{\"namaUsaha\":\"manjuak nasi rames, ayam goreng, dll\",\"kategori\":\"I\",\"kbli\":\"56101\",\"kegiatanUtama\":\"Menyediakan nasi rames, ayam goreng, dll\",\"produkUtama\":\"nasi rames dan ayam goreng+nasi\",\"contohProduk\":\"nasi rames dan ayam goreng+nasi\"},{\"namaUsaha\":\"Menjual pentol keliling\",\"kategori\":\"I\",\"kbli\":\"56102\",\"kegiatanUtama\":\"Menjual pentol keliling\",\"produkUtama\":\"pentol\",\"contohProduk\":\"pentol\"},{\"namaUsaha\":\"Menjual es buah\",\"kategori\":\"I\",\"kbli\":\"56304\",\"kegiatanUtama\":\"menjual es buah\",\"produkUtama\":\"es buah\",\"contohProduk\":\"es buah\"},{\"namaUsaha\":\"Sewa guna stenging/prancak\",\"kategori\":\"O\",\"kbli\":\"77393\",\"kegiatanUtama\":\"Menyewakan stenging/prancak alat kontruksi\",\"produkUtama\":\"stenging atau prancak\",\"contohProduk\":\"stenging atau prancak\"},{\"namaUsaha\":\"sewa traktor pertanian\",\"kategori\":\"O\",\"kbli\":\"77392\",\"kegiatanUtama\":\"membajak lahan pertanian\",\"produkUtama\":\"lahan siap tanam\",\"contohProduk\":\"lahan siap tanam\"},{\"namaUsaha\":\"sewa mesin rajang tembakau\",\"kategori\":\"O\",\"kbli\":\"77391\",\"kegiatanUtama\":\"merajang daun tembakau basah\",\"produkUtama\":\"tembakau rajang\",\"contohProduk\":\"tembakau rajang\"},{\"namaUsaha\":\"TK. Taman kanak-kanak Pemerintah\",\"kategori\":\"Q\",\"kbli\":\"85101\",\"kegiatanUtama\":\"memberikan pendidikan prasekolah\",\"produkUtama\":\"Pendidikan prasekolah\",\"contohProduk\":\"Pendidikan prasekolah\"},{\"namaUsaha\":\"TK. Taman kanak-kanak swasta\",\"kategori\":\"Q\",\"kbli\":\"85102\",\"kegiatanUtama\":\"memberikan pendidikan prasekolah\",\"produkUtama\":\"Pendidikan prasekolah\",\"contohProduk\":\"Pendidikan prasekolah\"},{\"namaUsaha\":\"RA. Raudhatul Atfal\",\"kategori\":\"Q\",\"kbli\":\"85103\",\"kegiatanUtama\":\"memberikan pendidikan prasekolah\",\"produkUtama\":\"Pendidikan prasekolah\",\"contohProduk\":\"Pendidikan prasekolah\"},{\"namaUsaha\":\"SD. Sekolah dasar\",\"kategori\":\"Q\",\"kbli\":\"85201\",\"kegiatanUtama\":\"Memberikan pendidikan dasar pada siswa\",\"produkUtama\":\"Pendidikan dasar\",\"contohProduk\":\"Pendidikan dasar\"},{\"namaUsaha\":\"MI. Madrasah Ibtidaiyah\",\"kategori\":\"Q\",\"kbli\":\"85203\",\"kegiatanUtama\":\"Memberikan pedidikan dasar dan agama pada siswa\",\"produkUtama\":\"Pendidikan dasar dan agama\",\"contohProduk\":\"Pendidikan dasar dan agama\"},{\"namaUsaha\":\"SMP. Sekolah menengah Pertama\",\"kategori\":\"Q\",\"kbli\":\"85311\",\"kegiatanUtama\":\"Memberikan pendidikan menengah pertama pd siswa\",\"produkUtama\":\"Pendidikan menengah pertama\",\"contohProduk\":\"Pendidikan menengah pertama\"},{\"namaUsaha\":\"MTs. Madrasah Tsanawiyah\",\"kategori\":\"Q\",\"kbli\":\"85313\",\"kegiatanUtama\":\"Memberikan pendidikan menengah dan agama pd siswa\",\"produkUtama\":\"Pendidikan menengah prtama&agama\",\"contohProduk\":\"Pendidikan menengah prtama&agama\"},{\"namaUsaha\":\"SMA, sekolah Menengah atas\",\"kategori\":\"Q\",\"kbli\":\"85316\",\"kegiatanUtama\":\"Memberikan pendidikan menengah atas pd siswa\",\"produkUtama\":\"Pendidikan menengah atas\",\"contohProduk\":\"Pendidikan menengah atas\"},{\"namaUsaha\":\"MA. Madrasah Aliyah\",\"kategori\":\"Q\",\"kbli\":\"85317\",\"kegiatanUtama\":\"Memberikan pendikan menengah atas & agama pd siswa\",\"produkUtama\":\"Pendidikan menengah atas & agama\",\"contohProduk\":\"Pendidikan menengah atas & agama\"},{\"namaUsaha\":\"MD. Madrasah diniyah\",\"kategori\":\"Q\",\"kbli\":\"85542\",\"kegiatanUtama\":\"Mengajar madrasah diniyah\",\"produkUtama\":\"Pendidikan agama\",\"contohProduk\":\"Pendidikan agama\"},{\"namaUsaha\":\"Guru ngaji\",\"kategori\":\"Q\",\"kbli\":\"85541\",\"kegiatanUtama\":\"Mengajar anak anak mengaji Al Quran\",\"produkUtama\":\"Membaca Al-Quran\",\"contohProduk\":\"Membaca Al-Quran\"},{\"namaUsaha\":\"tukan pijet\",\"kategori\":\"R\",\"kbli\":\"86995\",\"kegiatanUtama\":\"memijet badan klayen\",\"produkUtama\":\"kebugaran tubuh\",\"contohProduk\":\"kebugaran tubuh\"}]");
}),
"[project]/src/components/calculator/TembakauEstimator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TembakauEstimator",
    ()=>TembakauEstimator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-ssr] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputRupiah$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/InputRupiah.tsx [app-ssr] (ecmascript)");
;
;
;
;
const TembakauEstimator = ({ onApply, onClose })=>{
    const [pendapatan, setPendapatan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [jumlahBatang, setJumlahBatang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [luasM2, setLuasM2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [luasHa, setLuasHa] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // 1000 batang = 300 m2
        // 1 batang = Rp 1500
        if (pendapatan > 0) {
            const batang = Math.floor(pendapatan / 1500);
            const luasLahanM2 = batang / 1000 * 300;
            const luasLahanHa = luasLahanM2 / 10000;
            setJumlahBatang(batang);
            setLuasM2(Math.round(luasLahanM2 * 100) / 100);
            setLuasHa(luasLahanHa);
        } else {
            setJumlahBatang(0);
            setLuasM2(0);
            setLuasHa(0);
        }
    }, [
        pendapatan
    ]);
    const handleCopy = ()=>{
        const textToCopy = `Pendapatan: Rp ${new Intl.NumberFormat('id-ID').format(pendapatan)}
Jumlah Batang: ${new Intl.NumberFormat('id-ID').format(jumlahBatang)} batang
Luas Lahan: ${new Intl.NumberFormat('id-ID').format(luasM2)} m²
Luas Lahan: ${new Intl.NumberFormat('id-ID', {
            maximumFractionDigits: 4
        }).format(luasHa)} Ha`;
        navigator.clipboard.writeText(textToCopy).then(()=>{
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        });
    };
    const handleApply = ()=>{
        onApply(luasM2);
    };
    const handleReset = ()=>{
        setPendapatan(0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-slate-900 rounded-2xl w-full max-w-lg shadow-2xl flex flex-col overflow-hidden animate-slideUp",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-emerald-50 dark:bg-emerald-900/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-emerald-700 dark:text-emerald-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-bold",
                                    children: "Estimasi Luas Lahan Tembakau"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-full hover:bg-white/50 dark:hover:bg-slate-800 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 flex flex-col gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputRupiah$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputRupiah"], {
                                id: "pendapatanTembakau",
                                label: "Total Pendapatan Tembakau (Per Tahun)",
                                value: pendapatan,
                                onChange: setPendapatan,
                                placeholder: "Contoh: 7000000"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50 flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-end border-b border-slate-200 dark:border-slate-700 pb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold text-slate-500 dark:text-slate-400",
                                            children: "Estimasi Jumlah Batang"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base font-bold text-slate-800 dark:text-slate-200",
                                            children: [
                                                new Intl.NumberFormat('id-ID').format(jumlahBatang),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium text-slate-500",
                                                    children: "batang"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 71
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-end border-b border-slate-200 dark:border-slate-700 pb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold text-slate-500 dark:text-slate-400",
                                            children: "Estimasi Luas Lahan (m²)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-bold text-bps-blue dark:text-bps-blue-light",
                                            children: [
                                                new Intl.NumberFormat('id-ID').format(luasM2),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium text-slate-500",
                                                    children: "m²"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 65
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-end pb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold text-slate-500 dark:text-slate-400",
                                            children: "Estimasi Luas Lahan (Hektar)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base font-bold text-emerald-600 dark:text-emerald-400",
                                            children: [
                                                new Intl.NumberFormat('id-ID', {
                                                    maximumFractionDigits: 4
                                                }).format(luasHa),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium text-slate-500",
                                                    children: "Ha"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 95
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-2 text-[10px] text-slate-500 dark:text-slate-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                    className: "w-4 h-4 text-blue-500 shrink-0 mt-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Perhitungan ini merupakan estimasi berdasarkan asumsi standar ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "1.000 batang tembakau setara dengan 300 m² lahan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                            lineNumber: 110,
                                            columnNumber: 77
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " dan harga rata-rata ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Rp1.500 per batang"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                            lineNumber: 110,
                                            columnNumber: 163
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        ". Hasil digunakan sebagai alat bantu petugas SE2026 apabila responden tidak mengetahui luas lahan secara pasti."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2 md:justify-between items-center bg-slate-50/50 dark:bg-slate-900/50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 w-full md:w-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleReset,
                                    className: "flex-1 md:flex-none px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors",
                                    children: "Reset"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCopy,
                                    className: "flex-1 md:flex-none px-4 py-2 text-xs font-semibold flex items-center justify-center gap-1.5 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg shadow-sm transition-colors",
                                    children: [
                                        copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                            className: "w-3.5 h-3.5 text-green-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                            lineNumber: 128,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                            lineNumber: 128,
                                            columnNumber: 82
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        copied ? 'Tersalin!' : 'Salin Hasil'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleApply,
                            disabled: luasM2 <= 0,
                            className: "w-full md:w-auto px-5 py-2 text-sm font-bold text-white bg-bps-green hover:bg-bps-green-dark disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg shadow-md hover:shadow-lg shadow-bps-green/20 transition-all active:scale-95",
                            children: "Gunakan untuk Isian SE2026"
                        }, void 0, false, {
                            fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/calculator/TembakauEstimator.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/calculator/BusinessForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BusinessForm",
    ()=>BusinessForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/calculatorHelper.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputRupiah$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/InputRupiah.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/canvas-confetti/dist/confetti.module.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$master$2d$usaha$2d$se2026$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/master-usaha-se2026.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculator$2f$TembakauEstimator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/calculator/TembakauEstimator.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const INITIAL_STATE = {
    identity: {
        nomorBangunan: '',
        nomorKeluarga: '',
        namaKK: '',
        namaUsaha: '',
        namaPemilik: '',
        nomorHp: '',
        alamat: '',
        kbli: '',
        kategoriUsaha: '',
        tahunBerdiri: '2026',
        kegiatanUtama: '',
        produkUtama: '',
        contohProduk: ''
    },
    expense: {
        upahGaji: 0,
        biayaProduksi: 0,
        biayaPembelianBarang: 0,
        biayaOperasional: 0,
        biayaNonOperasional: 0
    },
    revenue: {
        nilaiProduksiPenjualan: 0,
        pendapatanLainnya: 0
    },
    dimension: {
        panjangTanah: 0,
        lebarTanah: 0,
        panjangBangunan: 0,
        lebarBangunan: 0,
        hargaTanahPerM2: 0,
        hargaBangunanPerM2: 0,
        modeLuasLahan: false,
        luasEstimasi: 0
    },
    asset: {
        mesinPeralatan: 0,
        kendaraanUsaha: 0
    },
    worker: {
        pekerjaLaki: 0,
        pekerjaPerempuan: 0,
        pekerjaDibayar: 0,
        pekerjaTidakDibayar: 0
    }
};
const BusinessForm = ({ onSave, editRecord, onCancelEdit })=>{
    const [activeStep, setActiveStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    // Core Form States
    const [identity, setIdentity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(INITIAL_STATE.identity);
    const [worker, setWorker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(INITIAL_STATE.worker);
    const [expense, setExpense] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(INITIAL_STATE.expense);
    const [revenue, setRevenue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(INITIAL_STATE.revenue);
    const [dimension, setDimension] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(INITIAL_STATE.dimension);
    const [asset, setAsset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(INITIAL_STATE.asset);
    // Validation States
    const [validationErrors, setValidationErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // KBLI Search Reference States
    const [isDropdownOpen, setIsDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTembakauModalOpen, setIsTembakauModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const filteredReferences = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        let filtered = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$master$2d$usaha$2d$se2026$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
        // Filter by Kategori if user has selected one manually
        if (identity.kategoriUsaha) {
            filtered = filtered.filter((item)=>item.kategori === identity.kategoriUsaha);
        }
        const q = (identity.namaUsaha || '').toLowerCase();
        // Filter by Search Query
        if (q) {
            filtered = filtered.filter((item)=>item.namaUsaha.toLowerCase().includes(q));
        }
        // Limit to 20 to prevent huge UI lists
        return filtered.slice(0, 20);
    }, [
        identity.namaUsaha,
        identity.kategoriUsaha
    ]);
    const handleSelectReference = (item)=>{
        setIdentity((prev)=>({
                ...prev,
                namaUsaha: item.namaUsaha,
                kbli: item.kbli,
                kategoriUsaha: item.kategori,
                kegiatanUtama: item.kegiatanUtama,
                produkUtama: item.produkUtama,
                contohProduk: item.contohProduk
            }));
        setIsDropdownOpen(false);
    };
    // Load edit record if available
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (editRecord) {
            setIdentity({
                ...editRecord.identity,
                kegiatanUtama: editRecord.identity.kegiatanUtama || '',
                produkUtama: editRecord.identity.produkUtama || '',
                contohProduk: editRecord.identity.contohProduk || ''
            });
            setExpense({
                upahGaji: editRecord.expense.upahGaji,
                biayaProduksi: editRecord.expense.biayaProduksi,
                biayaPembelianBarang: editRecord.expense.biayaPembelianBarang,
                biayaOperasional: editRecord.expense.biayaOperasional,
                biayaNonOperasional: editRecord.expense.biayaNonOperasional
            });
            setRevenue({
                nilaiProduksiPenjualan: editRecord.revenue.nilaiProduksiPenjualan,
                pendapatanLainnya: editRecord.revenue.pendapatanLainnya
            });
            setDimension({
                panjangTanah: editRecord.dimension.panjangTanah,
                lebarTanah: editRecord.dimension.lebarTanah,
                panjangBangunan: editRecord.dimension.panjangBangunan,
                lebarBangunan: editRecord.dimension.lebarBangunan,
                hargaTanahPerM2: editRecord.dimension.hargaTanahPerM2,
                hargaBangunanPerM2: editRecord.dimension.hargaBangunanPerM2,
                modeLuasLahan: editRecord.dimension.modeLuasLahan || false,
                luasEstimasi: editRecord.dimension.luasEstimasi || 0
            });
            setAsset({
                mesinPeralatan: editRecord.asset.mesinPeralatan,
                kendaraanUsaha: editRecord.asset.kendaraanUsaha
            });
            if (editRecord.worker) {
                setWorker({
                    pekerjaLaki: editRecord.worker.pekerjaLaki,
                    pekerjaPerempuan: editRecord.worker.pekerjaPerempuan,
                    pekerjaDibayar: editRecord.worker.pekerjaDibayar,
                    pekerjaTidakDibayar: editRecord.worker.pekerjaTidakDibayar
                });
                setWorker(INITIAL_STATE.worker);
            }
            setActiveStep(1);
        } else {
            resetForm();
        }
    }, [
        editRecord
    ]);
    // Run Calculations
    const calculated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateTotals"])(expense, revenue, dimension, asset, worker);
    // Validate on changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const recordPreview = {
            identity,
            expense: calculated.expense,
            revenue: calculated.revenue,
            asset: calculated.asset,
            dimension: calculated.dimension,
            worker: calculated.worker
        };
        const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateSE2026Data"])(recordPreview);
        setValidationErrors(errors);
    }, [
        identity,
        worker,
        expense,
        revenue,
        dimension,
        asset
    ]);
    const resetForm = ()=>{
        setIdentity(INITIAL_STATE.identity);
        setWorker(INITIAL_STATE.worker);
        setExpense(INITIAL_STATE.expense);
        setRevenue(INITIAL_STATE.revenue);
        setDimension(INITIAL_STATE.dimension);
        setAsset(INITIAL_STATE.asset);
        setActiveStep(1);
    };
    const steps = [
        {
            id: 1,
            name: 'Identitas & Jenis Usaha'
        },
        {
            id: 2,
            name: 'Pekerja (Rincian 24)'
        },
        {
            id: 3,
            name: 'Pengeluaran (26.a-f)'
        },
        {
            id: 4,
            name: 'Pendapatan (27.a-c)'
        },
        {
            id: 5,
            name: 'Luas & Aset (28.a-e)'
        }
    ];
    const nextStep = ()=>{
        if (activeStep < 5) {
            const next = activeStep + 1;
            console.log('Current Step:', activeStep);
            console.log('Button Action:', 'nextStep → going to step ' + next);
            setActiveStep(next);
        }
    };
    const prevStep = ()=>{
        if (activeStep > 1) {
            const prev = activeStep - 1;
            console.log('Current Step:', prev);
            setActiveStep(prev);
        }
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('Current Step:', activeStep);
        console.log('Button Action:', 'handleSubmit triggered');
        // Prevent saving if not on the last step
        if (activeStep !== 5) {
            console.warn('handleSubmit called on step', activeStep, '— blocked. This should never happen!');
            return;
        }
        // Check if there are any blocking errors (errors, not warnings)
        const hasCriticalErrors = validationErrors.some((err)=>err.type === 'error');
        if (hasCriticalErrors) {
            alert('Terdapat kesalahan pengisian data (Error merah). Harap perbaiki sebelum menyimpan.');
            return;
        }
        const newRecord = {
            id: editRecord?.id || `SE2026-${Math.floor(100000 + Math.random() * 900000)}`,
            createdAt: editRecord?.createdAt || new Date().toISOString(),
            identity,
            worker: calculated.worker,
            expense: calculated.expense,
            revenue: calculated.revenue,
            asset: calculated.asset,
            dimension: calculated.dimension
        };
        const luasAsetState = {
            dimension,
            asset
        };
        console.log("LUAS_ASET_STATE", luasAsetState);
        const luasAsetData = {
            panjangTanah: calculated.dimension.panjangTanah,
            lebarTanah: calculated.dimension.lebarTanah,
            luasTanah: calculated.dimension.luasTanah,
            modeLuasLahan: calculated.dimension.modeLuasLahan,
            luasEstimasi: calculated.dimension.luasEstimasi,
            nilaiTanah: calculated.asset.nilaiTanah,
            nilaiBangunan: calculated.asset.nilaiBangunan,
            kendaraanUsaha: calculated.asset.kendaraanUsaha,
            mesinPeralatan: calculated.asset.mesinPeralatan,
            totalAset: calculated.asset.totalAset
        };
        console.log("DATA LUAS & ASET", luasAsetData);
        console.log("PAYLOAD_BEFORE_SAVE", newRecord);
        console.log("PAYLOAD SIMPAN", newRecord);
        onSave(newRecord);
        // Play confetti explosion animation
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            particleCount: 80,
            spread: 60,
            origin: {
                y: 0.8
            }
        });
        if (!editRecord) {
            resetForm();
        }
    };
    // Check if a field has errors
    const getFieldError = (fieldName)=>{
        const found = validationErrors.find((err)=>err.field === fieldName);
        return found ? found.message : undefined;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-bps-blue to-bps-blue-light p-4 text-white flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold",
                                children: editRecord ? 'Edit Data Usaha' : 'Form Entri Data Usaha'
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-blue-100",
                                children: "Sensus Ekonomi 2026 (SE2026) Smart Calculator"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    editRecord && onCancelEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancelEdit,
                        className: "text-xs font-semibold px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors",
                        children: "Batal Edit"
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 pt-4 pb-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-1",
                    children: steps.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                console.log('Current Step:', step.id);
                                console.log('Button Action:', 'progress-step-click');
                                setActiveStep(step.id);
                            },
                            className: "flex-1 flex flex-col items-center gap-1 focus:outline-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `h-1.5 w-full rounded-full transition-all duration-300 ${activeStep >= step.id ? 'bg-bps-blue dark:bg-bps-blue-light' : 'bg-slate-200 dark:bg-slate-800'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 333,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                    lineNumber: 332,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-[10px] md:text-xs font-bold transition-colors ${activeStep === step.id ? 'text-bps-blue dark:text-bps-blue-light' : 'text-slate-400 dark:text-slate-600'} text-center truncate w-full max-w-[80px] md:max-w-none`,
                                    children: step.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                    lineNumber: 341,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, step.id, true, {
                            fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                    lineNumber: 320,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "p-4 md:p-6 flex flex-col gap-6",
                children: [
                    activeStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 animate-fadeIn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wide border-l-4 border-bps-green pl-2 mb-2",
                                children: "Klasifikasi Jenis Usaha (Otomatis)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 358,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200",
                                                children: [
                                                    "Kode KBLI (5 Digit) ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 39
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 364,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: identity.kbli,
                                                onChange: (e)=>setIdentity((prev)=>({
                                                            ...prev,
                                                            kbli: e.target.value
                                                        })),
                                                className: `w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all ${getFieldError('identity.kbli') ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`,
                                                placeholder: "Contoh: 47111",
                                                maxLength: 5
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 367,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            getFieldError('identity.kbli') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-red-500 font-medium",
                                                children: getFieldError('identity.kbli')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 378,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200",
                                                children: [
                                                    "Kategori Lapangan Usaha (A-U) ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 383,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                onChange: (e)=>{
                                                    const newCat = e.target.value;
                                                    setIdentity((prev)=>({
                                                            ...prev,
                                                            kategoriUsaha: newCat,
                                                            namaUsaha: '',
                                                            kbli: '',
                                                            kegiatanUtama: '',
                                                            produkUtama: '',
                                                            contohProduk: ''
                                                        }));
                                                },
                                                className: `w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all ${getFieldError('identity.kategoriUsaha') ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "-- Pilih Kategori --"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KATEGORI_BPS"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: cat.code,
                                                            children: [
                                                                "Kategori ",
                                                                cat.code,
                                                                " - ",
                                                                cat.name
                                                            ]
                                                        }, cat.code, true, {
                                                            fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                            lineNumber: 405,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 386,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            getFieldError('identity.kategoriUsaha') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-red-500 font-medium",
                                                children: getFieldError('identity.kategoriUsaha')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 411,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 382,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 362,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wide border-l-4 border-bps-blue pl-2 mt-4 mb-2",
                                children: "Identitas Usaha"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 416,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5 md:col-span-2 bg-bps-blue/5 p-3 rounded-lg border border-bps-blue/10 mb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-3 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200",
                                                            children: "No. Bangunan Fisik"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                            lineNumber: 424,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: identity.nomorBangunan,
                                                            onChange: (e)=>setIdentity((prev)=>({
                                                                        ...prev,
                                                                        nomorBangunan: e.target.value
                                                                    })),
                                                            className: "w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all",
                                                            placeholder: "Contoh: 001"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                            lineNumber: 427,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200",
                                                            children: "No. Urut Keluarga"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                            lineNumber: 436,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: identity.nomorKeluarga,
                                                            onChange: (e)=>setIdentity((prev)=>({
                                                                        ...prev,
                                                                        nomorKeluarga: e.target.value
                                                                    })),
                                                            className: "w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all",
                                                            placeholder: "Contoh: 1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                            lineNumber: 439,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200",
                                                            children: "Nama Kepala Keluarga"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: identity.namaKK,
                                                            onChange: (e)=>setIdentity((prev)=>({
                                                                        ...prev,
                                                                        namaKK: e.target.value
                                                                    })),
                                                            className: "w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all",
                                                            placeholder: "Nama Lengkap KK"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                            lineNumber: 451,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                            lineNumber: 422,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 421,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200",
                                                children: [
                                                    "Nama Usaha / Cari Referensi ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 464,
                                                        columnNumber: 47
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 463,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        required: true,
                                                        value: identity.namaUsaha,
                                                        onChange: (e)=>{
                                                            const val = e.target.value;
                                                            setIdentity((prev)=>({
                                                                    ...prev,
                                                                    namaUsaha: val
                                                                }));
                                                            setIsDropdownOpen(true);
                                                        },
                                                        onFocus: ()=>setIsDropdownOpen(true),
                                                        onBlur: ()=>{
                                                            // Delay to allow onMouseDown on option buttons to execute first
                                                            setTimeout(()=>setIsDropdownOpen(false), 200);
                                                        },
                                                        className: `w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all ${getFieldError('identity.namaUsaha') ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`,
                                                        placeholder: "Contoh: Pertanian Padi Hibrida"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 467,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    isDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute z-50 w-full mt-1 max-h-64 overflow-y-auto bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden",
                                                        style: {
                                                            animation: 'dropdownIn 0.15s ease-out'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                                                children: `
                        @keyframes dropdownIn {
                          from { opacity: 0; transform: translateY(-6px) scaleY(0.97); }
                          to { opacity: 1; transform: translateY(0) scaleY(1); }
                        }
                        @keyframes itemSlideIn {
                          from { opacity: 0; transform: translateX(-4px); }
                          to { opacity: 1; transform: translateX(0); }
                        }
                      `
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                                lineNumber: 488,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            filteredReferences.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-4 text-xs text-slate-400 dark:text-slate-500 text-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-2xl block mb-1",
                                                                        children: "🔍"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                                        lineNumber: 500,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "Tidak ada referensi ditemukan. Gunakan nama kustom."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                                lineNumber: 499,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "divide-y divide-slate-100 dark:divide-slate-800",
                                                                children: filteredReferences.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onMouseDown: (e)=>{
                                                                            e.preventDefault();
                                                                            handleSelectReference(item);
                                                                        },
                                                                        onTouchStart: (e)=>{
                                                                            e.preventDefault();
                                                                            handleSelectReference(item);
                                                                        },
                                                                        style: {
                                                                            animation: `itemSlideIn 0.12s ease-out ${idx * 0.03}s both`
                                                                        },
                                                                        className: `w-full text-left px-3 py-2.5 flex items-center gap-3 transition-all duration-150 cursor-pointer group ${identity.namaUsaha === item.namaUsaha ? 'bg-bps-blue/8 dark:bg-bps-blue/15 border-l-2 border-bps-blue' : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 border-l-2 border-transparent hover:border-bps-blue-light/40'}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex-1 min-w-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center gap-1.5 flex-wrap",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: `text-xs font-bold truncate ${identity.namaUsaha === item.namaUsaha ? 'text-bps-blue dark:text-bps-blue-light' : 'text-slate-800 dark:text-slate-200 group-hover:text-bps-blue dark:group-hover:text-bps-blue-light'} transition-colors`,
                                                                                                children: item.namaUsaha
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                                                                lineNumber: 526,
                                                                                                columnNumber: 35
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "px-1.5 py-0.5 bg-bps-blue/10 dark:bg-bps-blue/20 text-bps-blue dark:text-bps-blue-light text-[9px] font-bold rounded-full shrink-0",
                                                                                                children: item.kategori
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                                                                lineNumber: 533,
                                                                                                columnNumber: 35
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                                                        lineNumber: 525,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[10px] text-slate-400 dark:text-slate-500 font-medium block truncate mt-0.5",
                                                                                        children: [
                                                                                            "KBLI ",
                                                                                            item.kbli,
                                                                                            " · ",
                                                                                            item.produkUtama
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                                                        lineNumber: 537,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                                                lineNumber: 524,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            identity.namaUsaha === item.namaUsaha && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-4 h-4 text-bps-blue dark:text-bps-blue-light shrink-0",
                                                                                fill: "none",
                                                                                viewBox: "0 0 24 24",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: 2.5,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    d: "M5 13l4 4L19 7"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                                                    lineNumber: 543,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                                                lineNumber: 542,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, idx, true, {
                                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                                        lineNumber: 506,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                                lineNumber: 504,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 487,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 466,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            getFieldError('identity.namaUsaha') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-red-500 font-medium",
                                                children: getFieldError('identity.namaUsaha')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 554,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 462,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200",
                                                children: [
                                                    "Nama Pemilik / Pengelola ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 560,
                                                        columnNumber: 44
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 559,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                required: true,
                                                value: identity.namaPemilik,
                                                onChange: (e)=>setIdentity((prev)=>({
                                                            ...prev,
                                                            namaPemilik: e.target.value
                                                        })),
                                                className: `w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all ${getFieldError('identity.namaPemilik') ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`,
                                                placeholder: "Nama Pemilik"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 562,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            getFieldError('identity.namaPemilik') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-red-500 font-medium",
                                                children: getFieldError('identity.namaPemilik')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 573,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 558,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200",
                                                children: [
                                                    "Nomor HP Pemilik ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 579,
                                                        columnNumber: 36
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 578,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "tel",
                                                required: true,
                                                value: identity.nomorHp,
                                                onChange: (e)=>setIdentity((prev)=>({
                                                            ...prev,
                                                            nomorHp: e.target.value
                                                        })),
                                                className: `w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all ${getFieldError('identity.nomorHp') ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`,
                                                placeholder: "Contoh: 081234567890"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 581,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            getFieldError('identity.nomorHp') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-red-500 font-medium",
                                                children: getFieldError('identity.nomorHp')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 592,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 577,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200",
                                                children: [
                                                    "Tahun Berdiri Usaha ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 598,
                                                        columnNumber: 39
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 597,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "1900",
                                                max: "2026",
                                                required: true,
                                                value: identity.tahunBerdiri,
                                                onChange: (e)=>setIdentity((prev)=>({
                                                            ...prev,
                                                            tahunBerdiri: e.target.value
                                                        })),
                                                className: `w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all ${getFieldError('identity.tahunBerdiri') ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`,
                                                placeholder: "Tahun Berdiri"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 600,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            getFieldError('identity.tahunBerdiri') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-red-500 font-medium",
                                                children: getFieldError('identity.tahunBerdiri')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 613,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 596,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5 md:col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200",
                                                children: "Alamat Usaha"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 618,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                rows: 2,
                                                value: identity.alamat,
                                                onChange: (e)=>setIdentity((prev)=>({
                                                            ...prev,
                                                            alamat: e.target.value
                                                        })),
                                                className: "w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all",
                                                placeholder: "Alamat lengkap lokasi usaha"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 621,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2 mt-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setIdentity((prev)=>({
                                                                    ...prev,
                                                                    alamat: 'Dusun Angsokah Barat 01'
                                                                })),
                                                        className: "text-[10px] px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-bps-blue-light/10 hover:text-bps-blue hover:border-bps-blue/30 transition-colors",
                                                        children: "Dusun Angsokah Barat 01"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 629,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setIdentity((prev)=>({
                                                                    ...prev,
                                                                    alamat: 'Dusun Tengginah 01'
                                                                })),
                                                        className: "text-[10px] px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-bps-blue-light/10 hover:text-bps-blue hover:border-bps-blue/30 transition-colors",
                                                        children: "Dusun Tengginah 01"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 636,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 628,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 617,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5 md:col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200",
                                                children: "Kegiatan Utama / Penjelasan Usaha"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 647,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: identity.kegiatanUtama || '',
                                                onChange: (e)=>setIdentity((prev)=>({
                                                            ...prev,
                                                            kegiatanUtama: e.target.value
                                                        })),
                                                className: "w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all",
                                                placeholder: "Deskripsi kegiatan utama"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 650,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 646,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200",
                                                children: "Produk Utama"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 660,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: identity.produkUtama || '',
                                                onChange: (e)=>setIdentity((prev)=>({
                                                            ...prev,
                                                            produkUtama: e.target.value
                                                        })),
                                                className: "w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all",
                                                placeholder: "Produk utama yang dihasilkan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 663,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 659,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200",
                                                children: "Contoh Produk"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 673,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: identity.contohProduk || '',
                                                onChange: (e)=>setIdentity((prev)=>({
                                                            ...prev,
                                                            contohProduk: e.target.value
                                                        })),
                                                className: "w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all",
                                                placeholder: "Contoh produk spesifik"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 676,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 672,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 420,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                        lineNumber: 357,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 animate-fadeIn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wide border-l-4 border-bps-orange pl-2 mb-2",
                                children: "Modul Pekerja (SE2026 Rincian 24)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 693,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-50 dark:bg-slate-800/30 p-3 md:p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-slate-600 dark:text-slate-300",
                                        children: "Isian Cepat (Template Pekerja):"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 699,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setWorker({
                                                        pekerjaLaki: 1,
                                                        pekerjaPerempuan: 0,
                                                        pekerjaDibayar: 0,
                                                        pekerjaTidakDibayar: 1
                                                    }),
                                                className: "px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-md hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors",
                                                children: "Usaha Perorangan (Sendiri)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 701,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setWorker({
                                                        pekerjaLaki: 1,
                                                        pekerjaPerempuan: 1,
                                                        pekerjaDibayar: 0,
                                                        pekerjaTidakDibayar: 2
                                                    }),
                                                className: "px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-md hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors",
                                                children: "Suami Istri (Toko Kelontong/Warung)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 708,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setWorker({
                                                        pekerjaLaki: 1,
                                                        pekerjaPerempuan: 0,
                                                        pekerjaDibayar: 1,
                                                        pekerjaTidakDibayar: 0
                                                    }),
                                                className: "px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-md hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors",
                                                children: "Pekerja Lepas (Supir/Tukang)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 715,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 700,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 698,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xs font-bold text-slate-600 dark:text-slate-400",
                                                children: "BERDASARKAN JENIS KELAMIN"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 727,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] md:text-xs font-semibold text-slate-600 dark:text-slate-400",
                                                        children: "24.a1 Laki-laki"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 729,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "0",
                                                        value: worker.pekerjaLaki || '',
                                                        onChange: (e)=>setWorker((prev)=>({
                                                                    ...prev,
                                                                    pekerjaLaki: Number(e.target.value) || 0
                                                                })),
                                                        className: "px-2 py-1.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-bps-blue-light"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 730,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 728,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] md:text-xs font-semibold text-slate-600 dark:text-slate-400",
                                                        children: "24.b1 Perempuan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 739,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "0",
                                                        value: worker.pekerjaPerempuan || '',
                                                        onChange: (e)=>setWorker((prev)=>({
                                                                    ...prev,
                                                                    pekerjaPerempuan: Number(e.target.value) || 0
                                                                })),
                                                        className: "px-2 py-1.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-bps-blue-light"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 740,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 738,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 pt-2 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold text-slate-500",
                                                        children: "24.c1 TOTAL (a1+b1)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 749,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold text-slate-800 dark:text-slate-200",
                                                        children: [
                                                            calculated.worker?.totalPekerjaGender || 0,
                                                            " Orang"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 750,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 748,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            getFieldError('worker.totalPekerjaGender') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-red-500 font-medium leading-tight",
                                                children: getFieldError('worker.totalPekerjaGender')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 755,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 726,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xs font-bold text-slate-600 dark:text-slate-400",
                                                children: "BERDASARKAN STATUS PEKERJAAN"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 760,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] md:text-xs font-semibold text-slate-600 dark:text-slate-400",
                                                        children: "24.a2 Pekerja Dibayar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 762,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "0",
                                                        value: worker.pekerjaDibayar || '',
                                                        onChange: (e)=>setWorker((prev)=>({
                                                                    ...prev,
                                                                    pekerjaDibayar: Number(e.target.value) || 0
                                                                })),
                                                        className: "px-2 py-1.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-bps-blue-light"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 763,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 761,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] md:text-xs font-semibold text-slate-600 dark:text-slate-400",
                                                        children: "24.b2 Pekerja Tidak Dibayar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 772,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "0",
                                                        value: worker.pekerjaTidakDibayar || '',
                                                        onChange: (e)=>setWorker((prev)=>({
                                                                    ...prev,
                                                                    pekerjaTidakDibayar: Number(e.target.value) || 0
                                                                })),
                                                        className: "px-2 py-1.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-bps-blue-light"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 773,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 771,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 pt-2 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold text-slate-500",
                                                        children: "24.c2 TOTAL (a2+b2)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 782,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold text-slate-800 dark:text-slate-200",
                                                        children: [
                                                            calculated.worker?.totalPekerjaStatus || 0,
                                                            " Orang"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 783,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 781,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            getFieldError('worker.totalPekerjaStatus') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-red-500 font-medium leading-tight",
                                                children: getFieldError('worker.totalPekerjaStatus')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 788,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 759,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 725,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                        lineNumber: 692,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeStep === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 animate-fadeIn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wide border-l-4 border-bps-blue pl-2 mb-2",
                                children: "Modul Pengeluaran (SE2026 Rincian 26)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 798,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputRupiah$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputRupiah"], {
                                        id: "upahGaji",
                                        label: "26.a Upah dan Gaji",
                                        value: expense.upahGaji,
                                        onChange: (val)=>setExpense((prev)=>({
                                                    ...prev,
                                                    upahGaji: val
                                                })),
                                        info: "Biaya tenaga kerja / gaji karyawan",
                                        error: getFieldError('expense.upahGaji')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 803,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputRupiah$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputRupiah"], {
                                        id: "biayaProduksi",
                                        label: "26.b Biaya Bahan Baku / Produksi",
                                        value: expense.biayaProduksi,
                                        onChange: (val)=>setExpense((prev)=>({
                                                    ...prev,
                                                    biayaProduksi: val
                                                })),
                                        info: "Biaya pupuk/pakan, bahan pembantu, bahan pembuatan produk"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 812,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputRupiah$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputRupiah"], {
                                        id: "biayaPembelianBarang",
                                        label: "26.c Biaya Pembelian Barang yang Dijual Kembali",
                                        value: expense.biayaPembelianBarang,
                                        onChange: (val)=>setExpense((prev)=>({
                                                    ...prev,
                                                    biayaPembelianBarang: val
                                                })),
                                        info: "Khas perdagangan (kulakan toko/warung)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 820,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputRupiah$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputRupiah"], {
                                        id: "biayaOperasional",
                                        label: "26.d Biaya Operasional",
                                        value: expense.biayaOperasional,
                                        onChange: (val)=>setExpense((prev)=>({
                                                    ...prev,
                                                    biayaOperasional: val
                                                })),
                                        info: "Listrik, air, telepon, bensin, sewa tempat, internet"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 828,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputRupiah$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputRupiah"], {
                                        id: "biayaNonOperasional",
                                        label: "26.e Biaya Non-Operasional",
                                        value: expense.biayaNonOperasional,
                                        onChange: (val)=>setExpense((prev)=>({
                                                    ...prev,
                                                    biayaNonOperasional: val
                                                })),
                                        info: "Bunga bank, administrasi, biaya tak terduga"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 836,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col justify-center items-center md:col-span-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-slate-500 dark:text-slate-400",
                                                children: "26.f TOTAL PENGELUARAN (Otomatis)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 846,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl md:text-2xl font-mono font-bold text-red-600 dark:text-red-400 mt-1",
                                                children: [
                                                    "Rp ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(calculated.expense.totalPengeluaran)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 849,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 845,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 802,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                        lineNumber: 797,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeStep === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 animate-fadeIn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wide border-l-4 border-bps-green pl-2 mb-2",
                                children: "Modul Produksi / Pendapatan (SE2026 Rincian 27)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 860,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputRupiah$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputRupiah"], {
                                        id: "nilaiProduksi",
                                        label: "27.a Nilai Produksi / Hasil Penjualan Utama",
                                        value: revenue.nilaiProduksiPenjualan,
                                        onChange: (val)=>setRevenue((prev)=>({
                                                    ...prev,
                                                    nilaiProduksiPenjualan: val
                                                })),
                                        info: "Hasil panen, penjualan barang dagangan, omset jasa utama",
                                        error: getFieldError('revenue.nilaiProduksiPenjualan')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 865,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputRupiah$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputRupiah"], {
                                        id: "pendapatanLainnya",
                                        label: "27.b Pendapatan Lainnya",
                                        value: revenue.pendapatanLainnya,
                                        onChange: (val)=>setRevenue((prev)=>({
                                                    ...prev,
                                                    pendapatanLainnya: val
                                                })),
                                        info: "Penjualan ampas/limbah, komisi, hasil sampingan usaha"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 874,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col justify-center items-center md:col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-slate-500 dark:text-slate-400",
                                                children: "27.c TOTAL PRODUKSI / PENDAPATAN (Otomatis)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 884,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl md:text-2xl font-mono font-bold text-bps-green dark:text-bps-green-light mt-1",
                                                children: [
                                                    "Rp ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(calculated.revenue.totalProduksi)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 887,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 883,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 864,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-100 dark:border-blue-900 flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-blue-700 dark:text-blue-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                className: "w-5 h-5 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 896,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs md:text-sm font-semibold",
                                                children: "Keuntungan Kotor Terhitung:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 897,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 895,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-sm md:text-lg font-mono font-bold ${calculated.keuntunganKotor >= 0 ? 'text-bps-green' : 'text-red-500'}`,
                                        children: [
                                            "Rp ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(calculated.keuntunganKotor)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 899,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 894,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                        lineNumber: 859,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeStep === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 animate-fadeIn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wide border-l-4 border-bps-blue pl-2 mb-2",
                                children: "Modul Luas Tanah dan Bangunan Usaha"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 911,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-50 dark:bg-slate-800/30 p-4 rounded-xl border border-slate-100 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col md:flex-row justify-between md:items-center gap-3 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Dimensi Tanah Usaha"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 918,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-normal text-slate-400",
                                                        children: [
                                                            "(",
                                                            calculated.dimension.luasTanah,
                                                            " m² terhitung)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 919,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 917,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex bg-slate-200/50 dark:bg-slate-900/50 p-1 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setDimension((prev)=>({
                                                                    ...prev,
                                                                    modeLuasLahan: false
                                                                })),
                                                        className: `px-3 py-1.5 text-[10px] md:text-xs font-semibold rounded-md transition-all ${!dimension.modeLuasLahan ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-800 dark:text-slate-100' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`,
                                                        children: "Panjang × Lebar Manual"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 924,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setDimension((prev)=>({
                                                                    ...prev,
                                                                    modeLuasLahan: true
                                                                })),
                                                        className: `px-3 py-1.5 text-[10px] md:text-xs font-semibold rounded-md transition-all ${dimension.modeLuasLahan ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-800 dark:text-slate-100' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`,
                                                        children: "Luas Estimasi Langsung"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 935,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 923,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 916,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    (identity?.namaUsaha || '').toLowerCase().includes('tembakau') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsTembakauModalOpen(true),
                                        className: "mb-4 flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-800/50 rounded-lg transition-colors w-fit",
                                        children: "🌱 Estimasi Luas Lahan Tembakau Otomatis"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 950,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-3 gap-3",
                                        children: [
                                            dimension.modeLuasLahan ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-2 md:col-span-2 flex flex-col gap-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputRupiah$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputRupiah"], {
                                                    id: "luasEstimasi",
                                                    label: "Luas Lahan Estimasi",
                                                    prefix: "",
                                                    suffix: "m²",
                                                    value: dimension.luasEstimasi,
                                                    onChange: (val)=>setDimension((prev)=>({
                                                                ...prev,
                                                                luasEstimasi: val
                                                            })),
                                                    placeholder: "Masukkan luas langsung"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                    lineNumber: 962,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 961,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputRupiah$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputRupiah"], {
                                                            id: "panjangTanah",
                                                            label: "Panjang Tanah",
                                                            prefix: "",
                                                            suffix: "m",
                                                            value: dimension.panjangTanah,
                                                            onChange: (val)=>setDimension((prev)=>({
                                                                        ...prev,
                                                                        panjangTanah: val
                                                                    }))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                            lineNumber: 975,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 974,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputRupiah$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputRupiah"], {
                                                            id: "lebarTanah",
                                                            label: "Lebar Tanah",
                                                            prefix: "",
                                                            suffix: "m",
                                                            value: dimension.lebarTanah,
                                                            onChange: (val)=>setDimension((prev)=>({
                                                                        ...prev,
                                                                        lebarTanah: val
                                                                    }))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                            lineNumber: 985,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                        lineNumber: 984,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-2 md:col-span-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputRupiah$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputRupiah"], {
                                                    id: "hargaTanah",
                                                    label: "Harga Tanah / m²",
                                                    value: dimension.hargaTanahPerM2,
                                                    onChange: (val)=>setDimension((prev)=>({
                                                                ...prev,
                                                                hargaTanahPerM2: val
                                                            })),
                                                    error: getFieldError('dimension.hargaTanahPerM2')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                    lineNumber: 997,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 996,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 959,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-semibold text-slate-500",
                                                children: "Nilai Tanah: "
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 1007,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold font-mono text-slate-700 dark:text-slate-300",
                                                children: [
                                                    "Rp ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(calculated.asset.nilaiTanah)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 1008,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 1006,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 915,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-50 dark:bg-slate-800/30 p-4 rounded-xl border border-slate-100 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-bold text-slate-600 dark:text-slate-300 mb-3 flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Dimensi Bangunan Usaha"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 1014,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-normal text-slate-400",
                                                children: [
                                                    "(",
                                                    calculated.dimension.luasBangunan,
                                                    " m² terhitung)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 1015,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 1013,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-3 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputRupiah$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputRupiah"], {
                                                    id: "panjangBangunan",
                                                    label: "Panjang Bangunan",
                                                    prefix: "",
                                                    suffix: "m",
                                                    value: dimension.panjangBangunan,
                                                    onChange: (val)=>setDimension((prev)=>({
                                                                ...prev,
                                                                panjangBangunan: val
                                                            }))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                    lineNumber: 1019,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 1018,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputRupiah$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputRupiah"], {
                                                    id: "lebarBangunan",
                                                    label: "Lebar Bangunan",
                                                    prefix: "",
                                                    suffix: "m",
                                                    value: dimension.lebarBangunan,
                                                    onChange: (val)=>setDimension((prev)=>({
                                                                ...prev,
                                                                lebarBangunan: val
                                                            }))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                    lineNumber: 1029,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 1028,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-2 md:col-span-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputRupiah$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputRupiah"], {
                                                    id: "hargaBangunan",
                                                    label: "Harga Bangunan / m²",
                                                    value: dimension.hargaBangunanPerM2,
                                                    onChange: (val)=>setDimension((prev)=>({
                                                                ...prev,
                                                                hargaBangunanPerM2: val
                                                            })),
                                                    error: getFieldError('dimension.hargaBangunanPerM2')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                    lineNumber: 1039,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 1038,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 1017,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-semibold text-slate-500",
                                                children: "Nilai Bangunan: "
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 1049,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold font-mono text-slate-700 dark:text-slate-300",
                                                children: [
                                                    "Rp ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(calculated.asset.nilaiBangunan)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 1050,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 1048,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 1012,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wide border-l-4 border-bps-green pl-2 mt-2 mb-2",
                                children: "Modul Nilai Aset Usaha (SE2026 Rincian 28)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 1054,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputRupiah$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputRupiah"], {
                                        id: "mesinPeralatan",
                                        label: "28.c/e Mesin dan Peralatan",
                                        value: asset.mesinPeralatan,
                                        onChange: (val)=>setAsset((prev)=>({
                                                    ...prev,
                                                    mesinPeralatan: val
                                                })),
                                        info: "Mesin produksi, traktor, laptop, peralatan kantor, dll."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 1059,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputRupiah$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputRupiah"], {
                                        id: "kendaraanUsaha",
                                        label: "28.d Kendaraan Operasional",
                                        value: asset.kendaraanUsaha,
                                        onChange: (val)=>setAsset((prev)=>({
                                                    ...prev,
                                                    kendaraanUsaha: val
                                                })),
                                        info: "Motor kurir, mobil pick-up operasional"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 1067,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col justify-center items-center md:col-span-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-slate-500 dark:text-slate-400",
                                                children: "TOTAL ASET TERHITUNG"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 1077,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg md:text-xl font-mono font-bold text-bps-blue dark:text-bps-blue-light mt-1",
                                                children: [
                                                    "Rp ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(calculated.asset.totalAset)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                                lineNumber: 1080,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 1076,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 1058,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                        lineNumber: 910,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800 mt-2",
                        children: [
                            activeStep > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: prevStep,
                                className: "flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg active:scale-95 transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 1096,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Kembali"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 1091,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: resetForm,
                                className: "flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-500 hover:bg-red-50 hover:text-red-600 dark:text-slate-400 dark:hover:bg-red-950/20 dark:hover:text-red-400 border border-slate-200 dark:border-slate-700 rounded-lg active:scale-95 transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 1105,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Reset Form"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 1100,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeStep < 5 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    nextStep();
                                },
                                className: "flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-white bg-bps-blue hover:bg-bps-blue-light rounded-lg active:scale-95 transition-all ml-auto",
                                children: [
                                    "Lanjut",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 1121,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, "next-btn", true, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 1111,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "flex items-center gap-1.5 px-5 py-2 text-sm font-bold text-white bg-bps-green hover:bg-bps-green-dark rounded-lg active:scale-95 transition-all shadow-md hover:shadow-lg shadow-bps-green/20 ml-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                        lineNumber: 1129,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Simpan Usaha"
                                ]
                            }, "submit-btn", true, {
                                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                lineNumber: 1124,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                        lineNumber: 1089,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                lineNumber: 354,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            validationErrors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 pb-4 md:px-6 md:pb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 rounded-xl flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-4 h-4 text-amber-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                    lineNumber: 1141,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Validasi Logika SE2026 (",
                                validationErrors.length,
                                " Peringatan / Error)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                            lineNumber: 1140,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list-disc pl-5 flex flex-col gap-1",
                            children: validationErrors.map((err, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: `text-[11px] font-medium ${err.type === 'error' ? 'text-red-600 dark:text-red-400 list-item' : 'text-amber-700 dark:text-amber-400'}`,
                                    children: err.message
                                }, idx, false, {
                                    fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                                    lineNumber: 1146,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                            lineNumber: 1144,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                    lineNumber: 1139,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                lineNumber: 1138,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            isTembakauModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculator$2f$TembakauEstimator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TembakauEstimator"], {
                onClose: ()=>setIsTembakauModalOpen(false),
                onApply: (luas)=>{
                    setDimension((prev)=>({
                            ...prev,
                            modeLuasLahan: true,
                            luasEstimasi: luas
                        }));
                    setIsTembakauModalOpen(false);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/calculator/BusinessForm.tsx",
                lineNumber: 1161,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/calculator/BusinessForm.tsx",
        lineNumber: 296,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/dashboard/Overview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Overview",
    ()=>Overview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/calculatorHelper.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-ssr] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize.js [app-ssr] (ecmascript) <export default as Maximize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
;
;
;
;
const Overview = ({ records, selectedId, onSelectId })=>{
    // Compute aggregate totals
    const getAggregatedData = ()=>{
        let totalProduksi = 0;
        let totalPengeluaran = 0;
        let totalAset = 0;
        let totalLuasTanah = 0;
        let totalLuasBangunan = 0;
        records.forEach((r)=>{
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
            keuntunganKotor: profit
        };
    };
    // Get currently displayed data
    const currentData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        if (selectedId === 'all' || records.length === 0) {
            return getAggregatedData();
        }
        const rec = records.find((r)=>r.id === selectedId);
        if (!rec) return getAggregatedData();
        return {
            name: rec.identity.namaUsaha,
            totalProduksi: rec.revenue.totalProduksi,
            totalPengeluaran: rec.expense.totalPengeluaran,
            totalAset: rec.asset.totalAset,
            luasTanah: rec.dimension.luasTanah,
            luasBangunan: rec.dimension.luasBangunan,
            keuntunganKotor: rec.revenue.totalProduksi - rec.expense.totalPengeluaran
        };
    }, [
        records,
        selectedId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider",
                                children: "Dashboard Analisis SE2026"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm md:text-base font-bold text-slate-800 dark:text-slate-100 mt-0.5",
                                children: [
                                    "Menampilkan data untuk: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-bps-blue dark:text-bps-blue-light",
                                        children: currentData.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                                        lineNumber: 69,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    records.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "select-business",
                                className: "text-xs font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap",
                                children: "Pilih Usaha:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "select-business",
                                value: selectedId,
                                onChange: (e)=>onSelectId(e.target.value),
                                className: "px-3 py-1.5 text-xs md:text-sm bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-bps-blue-light/30 transition-all font-medium cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: [
                                            "Gabungan Semua Usaha (",
                                            records.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    records.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: r.id,
                                            children: [
                                                r.identity.namaUsaha,
                                                " (",
                                                r.identity.kbli,
                                                ")"
                                            ]
                                        }, r.id, true, {
                                            fileName: "[project]/src/components/dashboard/Overview.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/Overview.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 w-2 h-full bg-bps-green"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider",
                                                children: "Total Produksi / Pendapatan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg md:text-2xl font-mono font-bold text-slate-800 dark:text-slate-100 mt-2",
                                                children: [
                                                    "Rp ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(currentData.totalProduksi)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-bps-green/10 text-bps-green rounded-xl group-hover:scale-110 transition-transform",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            className: "w-5 h-5 md:w-6 md:h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/Overview.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-slate-400 dark:text-slate-500 font-medium block mt-2",
                                children: "SE2026 Rincian 27.c (27.a + 27.b)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 w-2 h-full bg-red-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider",
                                                children: "Total Pengeluaran Usaha"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg md:text-2xl font-mono font-bold text-slate-800 dark:text-slate-100 mt-2",
                                                children: [
                                                    "Rp ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(currentData.totalPengeluaran)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-red-500/10 text-red-500 rounded-xl group-hover:scale-110 transition-transform",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                            className: "w-5 h-5 md:w-6 md:h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/Overview.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-slate-400 dark:text-slate-500 font-medium block mt-2",
                                children: "SE2026 Rincian 26.f (a+b+c+d+e)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 w-2 h-full bg-amber-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider",
                                                children: "Keuntungan Kotor Terhitung"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                                lineNumber: 144,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-lg md:text-2xl font-mono font-bold mt-2 ${currentData.keuntunganKotor >= 0 ? 'text-bps-green' : 'text-red-500'}`,
                                                children: [
                                                    "Rp ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(currentData.keuntunganKotor)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-3 rounded-xl group-hover:scale-110 transition-transform ${currentData.keuntunganKotor >= 0 ? 'bg-bps-green/10 text-bps-green' : 'bg-red-500/10 text-red-500'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                            className: "w-5 h-5 md:w-6 md:h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/Overview.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-slate-400 dark:text-slate-500 font-medium block mt-2",
                                children: "Total Produksi dikurangi Pengeluaran"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 w-2 h-full bg-bps-blue"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider",
                                                children: "Estimasi Total Aset Usaha"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg md:text-2xl font-mono font-bold text-slate-800 dark:text-slate-100 mt-2",
                                                children: [
                                                    "Rp ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(currentData.totalAset)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                                lineNumber: 172,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-bps-blue/10 text-bps-blue rounded-xl group-hover:scale-110 transition-transform",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                            className: "w-5 h-5 md:w-6 md:h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/Overview.tsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-slate-400 dark:text-slate-500 font-medium block mt-2",
                                children: "SE2026 Rincian 28 (Tanah + Bgn + Alat)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/Overview.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 rounded-xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__["Maximize"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/Overview.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-bold text-slate-800 dark:text-slate-100",
                                        children: "Dimensi Tempat Usaha terhitung"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-400 dark:text-slate-500",
                                        children: "Diambil dari perhitungan panjang dan lebar fisik tanah/bangunan usaha"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-8 items-center border-t md:border-t-0 pt-4 md:pt-0 border-slate-100 dark:border-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "w-3.5 h-3.5 text-indigo-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                                lineNumber: 205,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Luas Tanah"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm md:text-lg font-mono font-bold text-slate-800 dark:text-slate-100 mt-1",
                                        children: [
                                            currentData.luasTanah.toFixed(1).replace('.0', ''),
                                            " m²"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "w-3.5 h-3.5 text-pink-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                                lineNumber: 215,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Luas Bangunan"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm md:text-lg font-mono font-bold text-slate-800 dark:text-slate-100 mt-1",
                                        children: [
                                            currentData.luasBangunan.toFixed(1).replace('.0', ''),
                                            " m²"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/Overview.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Overview.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/Overview.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/Overview.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/dashboard/AnalyticsCharts.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnalyticsCharts",
    ()=>AnalyticsCharts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/calculatorHelper.ts [app-ssr] (ecmascript)");
;
;
;
const AnalyticsCharts = ({ record })=>{
    if (!record) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-64 flex items-center justify-center border border-dashed border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-900/50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-slate-400 dark:text-slate-500",
                children: "Silakan pilih atau simpan data usaha untuk melihat grafik analisis keuangan."
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // 1. Data Pengeluaran Pie Chart
    const expenseData = [
        {
            name: 'Upah & Gaji',
            value: record.expense.upahGaji,
            color: '#3B82F6'
        },
        {
            name: 'Biaya Produksi',
            value: record.expense.biayaProduksi,
            color: '#10B981'
        },
        {
            name: 'Biaya Pembelian',
            value: record.expense.biayaPembelianBarang,
            color: '#F59E0B'
        },
        {
            name: 'Biaya Operasional',
            value: record.expense.biayaOperasional,
            color: '#EC4899'
        },
        {
            name: 'Non Operasional',
            value: record.expense.biayaNonOperasional,
            color: '#8B5CF6'
        } // Purple
    ].filter((item)=>item.value > 0); // Only display non-zero items
    // 2. Data Produksi/Pendapatan Bar Chart
    const revenueData = [
        {
            name: 'Penjualan Utama',
            Nilai: record.revenue.nilaiProduksiPenjualan
        },
        {
            name: 'Pendapatan Lain',
            Nilai: record.revenue.pendapatanLainnya
        }
    ];
    // 3. Data Aset Bar Chart
    const assetData = [
        {
            name: 'Tanah',
            Nilai: record.asset.nilaiTanah
        },
        {
            name: 'Bangunan',
            Nilai: record.asset.nilaiBangunan
        },
        {
            name: 'Mesin & Peralatan',
            Nilai: record.asset.mesinPeralatan
        },
        {
            name: 'Kendaraan',
            Nilai: record.asset.kendaraanUsaha
        }
    ].filter((item)=>item.Nilai > 0);
    // Custom tooltips to match beautiful currency formatting
    const CustomTooltipCurrency = ({ active, payload })=>{
        if (active && payload && payload.length) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900 text-white p-2.5 rounded-lg border border-slate-700 text-xs font-mono shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-semibold text-slate-300 mb-0.5",
                        children: payload[0].name
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-bps-green-light font-bold",
                        children: [
                            "Rp ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(payload[0].value || payload[0].payload.Nilai || payload[0].payload.value)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        return null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4",
                        children: "Struktur Pengeluaran (Rincian 26)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-64 relative flex items-center justify-center",
                        children: expenseData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-slate-400 text-center",
                            children: "Tidak ada rincian pengeluaran (Semua Rp 0)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            width: "100%",
                            height: "100%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PieChart"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"], {
                                        data: expenseData,
                                        cx: "50%",
                                        cy: "50%",
                                        innerRadius: 60,
                                        outerRadius: 80,
                                        paddingAngle: 3,
                                        dataKey: "value",
                                        children: expenseData.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cell"], {
                                                fill: entry.color
                                            }, `cell-${index}`, false, {
                                                fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                                                lineNumber: 90,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltipCurrency, {}, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                                            lineNumber: 93,
                                            columnNumber: 35
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center gap-x-4 gap-y-1.5 mt-2",
                        children: expenseData.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2.5 h-2.5 rounded-full",
                                        style: {
                                            backgroundColor: item.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4",
                        children: "Rincian Produksi & Pendapatan (Rincian 27)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-64 flex items-center justify-center",
                        children: record.revenue.totalProduksi === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-slate-400 text-center",
                            children: "Tidak ada rincian produksi (Semua Rp 0)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            width: "100%",
                            height: "100%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                                data: revenueData,
                                margin: {
                                    top: 10,
                                    right: 10,
                                    left: -10,
                                    bottom: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                        dataKey: "name",
                                        stroke: "#888888",
                                        fontSize: 10,
                                        tickLine: false,
                                        axisLine: false
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                                        lineNumber: 120,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                        stroke: "#888888",
                                        fontSize: 10,
                                        tickLine: false,
                                        axisLine: false,
                                        tickFormatter: (value)=>`Rp ${value >= 1e6 ? (value / 1e6).toFixed(1) + 'M' : value >= 1e3 ? (value / 1e3).toFixed(0) + 'K' : value}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltipCurrency, {}, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                                            lineNumber: 134,
                                            columnNumber: 35
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        cursor: {
                                            fill: 'rgba(0,0,0,0.03)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                        dataKey: "Nilai",
                                        radius: [
                                            6,
                                            6,
                                            0,
                                            0
                                        ],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cell"], {
                                                fill: "#00A859"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cell"], {
                                                fill: "#84C444"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                                                lineNumber: 137,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                                lineNumber: 119,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4",
                        children: "Struktur Alokasi Aset (Rincian 28)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-64 flex items-center justify-center",
                        children: assetData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-slate-400 text-center",
                            children: "Tidak ada rincian aset (Semua Rp 0)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            width: "100%",
                            height: "100%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                                data: assetData,
                                layout: "vertical",
                                margin: {
                                    top: 10,
                                    right: 10,
                                    left: 10,
                                    bottom: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                        type: "number",
                                        stroke: "#888888",
                                        fontSize: 10,
                                        tickLine: false,
                                        axisLine: false,
                                        tickFormatter: (value)=>`Rp ${value >= 1e6 ? (value / 1e6).toFixed(0) + 'M' : value}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                        type: "category",
                                        dataKey: "name",
                                        stroke: "#888888",
                                        fontSize: 10,
                                        tickLine: false,
                                        axisLine: false
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltipCurrency, {}, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                                            lineNumber: 172,
                                            columnNumber: 35
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        cursor: {
                                            fill: 'rgba(0,0,0,0.03)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                                        lineNumber: 172,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                        dataKey: "Nilai",
                                        fill: "#04549C",
                                        radius: [
                                            0,
                                            4,
                                            4,
                                            0
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                                lineNumber: 155,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/AnalyticsCharts.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/utils/excelExporter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "downloadTemplateExcel",
    ()=>downloadTemplateExcel,
    "exportToExcel",
    ()=>exportToExcel,
    "importFromExcel",
    ()=>importFromExcel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
;
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
function flattenRecord(record) {
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
function exportToExcel(records, filename = 'Laporan_Sensus_Ekonomi_2026.xlsx') {
    const data = [
        EXCEL_HEADERS,
        ...records.map(flattenRecord)
    ];
    const worksheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet(data);
    const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_new();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(workbook, worksheet, 'Data Usaha SE2026');
    // Adjust column widths automatically
    const colWidths = EXCEL_HEADERS.map((h, i)=>{
        let maxLen = h.length;
        data.forEach((row)=>{
            const val = row[i];
            if (val !== undefined && val !== null) {
                maxLen = Math.max(maxLen, String(val).length);
            }
        });
        return {
            wch: maxLen + 3
        };
    });
    worksheet['!cols'] = colWidths;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeFile"](workbook, filename);
}
function downloadTemplateExcel() {
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
            '1',
            '0',
            '0',
            '1',
            '0',
            '0',
            '0',
            'Perdagangan',
            'Toko kelontong / pracangan',
            'Sembako, minyak goreng, sabun mandi',
            1200000,
            500000,
            15000000,
            800000,
            0,
            17500000,
            25000000,
            200000,
            25200000,
            8,
            6,
            48,
            500000,
            24000000,
            6,
            5,
            1500000,
            45000000,
            2000000,
            15000000,
            86000000,
            7700000 // Keuntungan
        ]
    ];
    const worksheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet(data);
    const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_new();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(workbook, worksheet, 'Template Import SE2026');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeFile"](workbook, 'Template_Import_SE2026.xlsx');
}
function importFromExcel(file) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = (e)=>{
            try {
                const data = e.target?.result;
                if (!data) {
                    throw new Error('Gagal membaca isi file.');
                }
                const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["read"](data, {
                    type: 'array'
                });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                // Parse rows as raw arrays to preserve positions
                const rows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(worksheet, {
                    header: 1
                });
                if (rows.length < 2) {
                    throw new Error('File Excel kosong atau tidak memiliki baris data.');
                }
                // We check if headers are somewhat aligned
                const fileHeaders = rows[0];
                if (!fileHeaders || fileHeaders.length < 5) {
                    throw new Error('Struktur template Excel tidak sesuai. Pastikan header sesuai template.');
                }
                const importedRecords = [];
                const currentYear = new Date().toISOString();
                // Process data rows (skip headers)
                for(let i = 1; i < rows.length; i++){
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
                    const luasTanah = isEstimasiLuas ? luasTanahExcel : panjangTanah * lebarTanah;
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
                    const record = {
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
        reader.onerror = ()=>reject(new Error('Gagal membaca file.'));
        reader.readAsArrayBuffer(file);
    });
}
}),
"[externals]/module [external] (module, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("module", () => require("module"));

module.exports = mod;
}),
"[project]/src/utils/pdfExporter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportToPDF",
    ()=>exportToPDF
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/calculatorHelper.ts [app-ssr] (ecmascript)");
;
;
function exportToPDF(record) {
    // Create jsPDF in A4 page size
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsPDF"]({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let currentY = 0;
    // Helper to add new page if content overflows
    const checkPageBreak = (neededSpace)=>{
        if (currentY + neededSpace > pageHeight - 40) {
            doc.addPage();
            currentY = 20; // Margin top for new page
            // Draw a mini header on new pages
            doc.setFillColor(4, 84, 156);
            doc.rect(0, 0, pageWidth, 15, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(10);
            doc.text('SENSUS EKONOMI 2026 - Lanjutan', pageWidth / 2, 10, {
                align: 'center'
            });
        }
    };
    // Helper to draw horizontal divider line
    const drawLine = (y)=>{
        doc.setDrawColor(220, 225, 230);
        doc.setLineWidth(0.4);
        doc.line(15, y, pageWidth - 15, y);
    };
    // Helper to draw section header
    const drawSectionHeader = (title, y)=>{
        doc.setFillColor(245, 247, 250); // Light blueish gray
        doc.rect(15, y - 5, pageWidth - 30, 8, 'F');
        // Left accent line
        doc.setFillColor(4, 84, 156); // BPS Blue
        doc.rect(15, y - 5, 2, 8, 'F');
        doc.setTextColor(4, 84, 156);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.text(title, 20, y);
        return y + 8;
    };
    // 1. Header Banner (BPS Blue background look)
    doc.setFillColor(4, 84, 156); // BPS Blue
    doc.rect(0, 0, pageWidth, 42, 'F');
    // Header Title
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('SENSUS EKONOMI 2026 (SE2026)', pageWidth / 2, 16, {
        align: 'center'
    });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.text('LAPORAN HASIL SURVEY DAN KALKULASI ELEKTRONIK KOMPONEN USAHA', pageWidth / 2, 23, {
        align: 'center'
    });
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(pageWidth / 2 - 45, 28, 90, 7, 2, 2, 'F');
    doc.setTextColor(4, 84, 156);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text(`ID Usaha: ${record.id}`, pageWidth / 2, 33, {
        align: 'center'
    });
    // BPS Green Accent Line
    doc.setFillColor(0, 168, 89); // BPS Green
    doc.rect(0, 42, pageWidth, 3, 'F');
    currentY = 55;
    // 2. Section: Identitas Usaha
    checkPageBreak(50);
    currentY = drawSectionHeader('I. IDENTITAS USAHA', currentY);
    // Render Table-like grids for identity
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(10);
    const leftColX = 18;
    const valColX = 65;
    const identityRows = [
        {
            label: 'No. Bangunan Fisik',
            val: record.identity.nomorBangunan || '-'
        },
        {
            label: 'No. Urut Keluarga',
            val: record.identity.nomorKeluarga || '-'
        },
        {
            label: 'Nama Kepala Keluarga',
            val: record.identity.namaKK || '-'
        },
        {
            label: 'Nama Usaha',
            val: record.identity.namaUsaha
        },
        {
            label: 'Nama Pemilik/Pengelola',
            val: record.identity.namaPemilik
        },
        {
            label: 'Nomor HP',
            val: record.identity.nomorHp
        },
        {
            label: 'Alamat Lokasi',
            val: record.identity.alamat || '-'
        },
        {
            label: 'Kategori Usaha (KBLI)',
            val: `Kategori ${record.identity.kategoriUsaha} (KBLI: ${record.identity.kbli})`
        },
        {
            label: 'Kegiatan Utama',
            val: record.identity.kegiatanUtama || '-'
        },
        {
            label: 'Produk Utama',
            val: record.identity.produkUtama || '-'
        },
        {
            label: 'Contoh Produk',
            val: record.identity.contohProduk || '-'
        },
        {
            label: 'Tahun Berdiri',
            val: record.identity.tahunBerdiri
        }
    ];
    identityRows.forEach((row, idx)=>{
        // Zebra striping for identity
        if (idx % 2 === 0) {
            doc.setFillColor(252, 253, 255);
            doc.rect(15, currentY - 4, pageWidth - 30, 6, 'F');
        }
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(80, 80, 80);
        doc.text(row.label, leftColX, currentY);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(40, 40, 40);
        // Auto-wrap for long values
        if (row.val.length > 55) {
            const splitVal = doc.splitTextToSize(row.val, pageWidth - valColX - 20);
            doc.text(`:  ${splitVal[0]}`, valColX - 3, currentY);
            for(let i = 1; i < splitVal.length; i++){
                currentY += 5;
                doc.text(`   ${splitVal[i]}`, valColX - 3, currentY);
            }
            currentY += 6;
        } else {
            doc.text(`:  ${row.val}`, valColX - 3, currentY);
            currentY += 6;
        }
    });
    currentY += 4;
    // 3. Section: Komponen Keuangan (Pengeluaran & Pendapatan)
    checkPageBreak(80);
    currentY = drawSectionHeader('II. RINCIAN MODUL KEUANGAN (SE2026)', currentY);
    doc.setFillColor(240, 244, 248);
    doc.rect(15, currentY - 4, pageWidth - 30, 7, 'F');
    doc.setTextColor(4, 84, 156);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text('Keterangan Rincian Komponen', leftColX, currentY + 1);
    doc.text('Kode', 125, currentY + 1);
    doc.text('Nilai (Rupiah)', pageWidth - 20, currentY + 1, {
        align: 'right'
    });
    currentY += 7;
    // Table rows for finances
    const financeRows = [
        {
            label: 'Upah dan Gaji Karyawan',
            code: 'R.26.a',
            val: record.expense.upahGaji
        },
        {
            label: 'Biaya Bahan Baku / Produksi',
            code: 'R.26.b',
            val: record.expense.biayaProduksi
        },
        {
            label: 'Biaya Pembelian Barang yang Dijual Kembali',
            code: 'R.26.c',
            val: record.expense.biayaPembelianBarang
        },
        {
            label: 'Biaya Operasional Usaha',
            code: 'R.26.d',
            val: record.expense.biayaOperasional
        },
        {
            label: 'Biaya Non-Operasional Usaha',
            code: 'R.26.e',
            val: record.expense.biayaNonOperasional
        },
        {
            label: 'TOTAL PENGELUARAN USAHA',
            code: 'R.26.f',
            val: record.expense.totalPengeluaran,
            isBold: true,
            isTotal: true
        },
        {
            label: 'Nilai Produksi / Hasil Penjualan Utama',
            code: 'R.27.a',
            val: record.revenue.nilaiProduksiPenjualan
        },
        {
            label: 'Pendapatan Lainnya',
            code: 'R.27.b',
            val: record.revenue.pendapatanLainnya
        },
        {
            label: 'TOTAL PRODUKSI / PENDAPATAN',
            code: 'R.27.c',
            val: record.revenue.totalProduksi,
            isBold: true,
            isTotal: true
        },
        {
            label: 'KEUNTUNGAN KOTOR USAHA',
            code: 'Margin',
            val: record.revenue.totalProduksi - record.expense.totalPengeluaran,
            isBold: true,
            highlight: true
        }
    ];
    financeRows.forEach((row, idx)=>{
        checkPageBreak(10);
        if (row.highlight) {
            doc.setFillColor(235, 248, 240); // Soft green background
            doc.rect(15, currentY - 4, pageWidth - 30, 8, 'F');
            doc.setTextColor(0, 120, 50);
            doc.setFont('helvetica', 'bold');
            currentY += 1.5;
        } else if (row.isTotal) {
            doc.setFillColor(245, 247, 250);
            doc.rect(15, currentY - 4, pageWidth - 30, 7, 'F');
            doc.setTextColor(60, 60, 60);
            doc.setFont('helvetica', 'bold');
            currentY += 1;
        } else {
            if (idx % 2 === 0) {
                doc.setFillColor(252, 253, 255);
                doc.rect(15, currentY - 4, pageWidth - 30, 6, 'F');
            }
            doc.setTextColor(80, 80, 80);
            doc.setFont('helvetica', 'normal');
        }
        doc.text(row.label, leftColX, currentY);
        doc.text(row.code, 126, currentY);
        doc.text(`Rp ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(row.val)}`, pageWidth - 20, currentY, {
            align: 'right'
        });
        currentY += row.highlight || row.isTotal ? 7 : 6;
    });
    currentY += 6;
    // 4. Section: Aset & Dimensi
    checkPageBreak(60);
    currentY = drawSectionHeader('III. ESTIMASI ASET & UKURAN TEMPAT USAHA', currentY);
    // Layout Dimensions and Assets
    doc.setTextColor(40, 40, 40);
    doc.setFontSize(10);
    // Dimensions
    doc.setFont('helvetica', 'bold');
    doc.text('Dimensi Fisik Tempat Usaha:', leftColX, currentY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(80, 80, 80);
    const luasTanahText = record.dimension.modeLuasLahan ? `Luas Lahan Estimasi: ${record.dimension.luasTanah} m2 (Rp ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(record.dimension.hargaTanahPerM2)}/m2)` : `Luas Tanah: ${record.dimension.panjangTanah}m x ${record.dimension.lebarTanah}m = ${record.dimension.luasTanah} m2 (Rp ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(record.dimension.hargaTanahPerM2)}/m2)`;
    doc.text(luasTanahText, leftColX + 5, currentY + 6);
    doc.text(`Luas Bangunan: ${record.dimension.panjangBangunan}m x ${record.dimension.lebarBangunan}m = ${record.dimension.luasBangunan} m2 (Rp ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(record.dimension.hargaBangunanPerM2)}/m2)`, leftColX + 5, currentY + 11);
    currentY += 20;
    // Assets Breakdown Table
    doc.setFillColor(240, 244, 248);
    doc.rect(15, currentY - 4, pageWidth - 30, 7, 'F');
    doc.setTextColor(4, 84, 156);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text('Rincian Estimasi Nilai Aset Usaha', leftColX, currentY + 1);
    doc.text('Kode', 125, currentY + 1);
    doc.text('Nilai (Rupiah)', pageWidth - 20, currentY + 1, {
        align: 'right'
    });
    currentY += 7;
    const assetRows = [
        {
            label: 'Nilai Tanah Usaha (Terhitung)',
            code: 'R.28.a',
            val: record.asset.nilaiTanah
        },
        {
            label: 'Nilai Bangunan Usaha (Terhitung)',
            code: 'R.28.b',
            val: record.asset.nilaiBangunan
        },
        {
            label: 'Nilai Mesin dan Peralatan',
            code: 'R.28.c/e',
            val: record.asset.mesinPeralatan
        },
        {
            label: 'Nilai Kendaraan Operasional',
            code: 'R.28.d',
            val: record.asset.kendaraanUsaha
        },
        {
            label: 'TOTAL ESTIMASI NILAI ASET USAHA',
            code: 'Total Aset',
            val: record.asset.totalAset,
            isBold: true
        }
    ];
    doc.setFontSize(10);
    assetRows.forEach((row, idx)=>{
        checkPageBreak(10);
        if (row.isBold) {
            doc.setFillColor(245, 247, 250);
            doc.rect(15, currentY - 4, pageWidth - 30, 7, 'F');
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(4, 84, 156);
            currentY += 1;
        } else {
            if (idx % 2 === 0) {
                doc.setFillColor(252, 253, 255);
                doc.rect(15, currentY - 4, pageWidth - 30, 6, 'F');
            }
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(80, 80, 80);
        }
        doc.text(`  - ${row.label}`, leftColX, currentY);
        doc.text(row.code, 126, currentY);
        doc.text(`Rp ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(row.val)}`, pageWidth - 20, currentY, {
            align: 'right'
        });
        currentY += row.isBold ? 7 : 6;
    });
    // 5. Modul Pekerja (If available)
    if (record.worker && record.worker.totalPekerjaGender > 0) {
        checkPageBreak(30);
        currentY += 6;
        currentY = drawSectionHeader('IV. MODUL PEKERJA', currentY);
        doc.setFontSize(10);
        doc.setTextColor(80, 80, 80);
        doc.text(`Total Pekerja: ${record.worker.totalPekerjaGender} Orang`, leftColX, currentY);
        doc.text(`(Laki-laki: ${record.worker.pekerjaLaki}, Perempuan: ${record.worker.pekerjaPerempuan})`, leftColX + 5, currentY + 5);
        doc.text(`Status Pekerjaan:`, leftColX, currentY + 11);
        doc.text(`(Dibayar: ${record.worker.pekerjaDibayar}, Tidak Dibayar: ${record.worker.pekerjaTidakDibayar})`, leftColX + 5, currentY + 16);
        currentY += 22;
    }
    // 6. Footer Signatures (Positioned safely at bottom of page)
    checkPageBreak(40); // ensure we have 40mm space for footer
    // Actually push footer to the bottom of whatever page we are on
    const footerY = pageHeight - 35;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.4);
    doc.line(15, footerY, pageWidth - 15, footerY);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    // Wrap footer text if needed
    const footerText1 = 'Sensus Ekonomi 2026 - Aplikasi kalkulator ini dirancang untuk mempermudah petugas pencacah di lapangan.';
    const footerText2 = 'Semua kalkulasi dilakukan secara real-time berdasarkan formula pedoman resmi kuesioner SE2026.';
    doc.text(footerText1, 15, footerY + 5);
    doc.text(footerText2, 15, footerY + 9);
    // Signatures fields
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(60, 60, 60);
    doc.text('Petugas Pencacah Lapangan,', pageWidth - 70, footerY + 5);
    doc.text('_________________________', pageWidth - 70, footerY + 22);
    // Save the generated document
    doc.save(`Laporan_SE2026_${record.identity.namaUsaha.replace(/\s+/g, '_')}.pdf`);
}
}),
"[project]/src/components/OfflineManager.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OfflineManager",
    ()=>OfflineManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/calculatorHelper.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-ssr] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-ssr] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-ssr] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$excelExporter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/excelExporter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pdfExporter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/pdfExporter.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const OfflineManager = ({ records, onEdit, onDelete, onImport, onSelectForView })=>{
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [importError, setImportError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Filter records based on search query
    const filteredRecords = records.filter((r)=>{
        const q = searchQuery.toLowerCase();
        return r.identity.namaUsaha.toLowerCase().includes(q) || r.identity.namaPemilik.toLowerCase().includes(q) || (r.identity.namaKK || '').toLowerCase().includes(q) || (r.identity.nomorBangunan || '').includes(q) || (r.identity.nomorKeluarga || '').includes(q) || r.identity.kbli.includes(q) || r.identity.kategoriUsaha.toLowerCase().includes(q) || (r.identity.kegiatanUtama || '').toLowerCase().includes(q);
    });
    const handleImportClick = ()=>{
        fileInputRef.current?.click();
    };
    const handleFileChange = async (e)=>{
        const files = e.target.files;
        if (!files || files.length === 0) return;
        const file = files[0];
        setImportError(null);
        try {
            const parsed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$excelExporter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["importFromExcel"])(file);
            if (parsed.length === 0) {
                setImportError('Tidak ada data valid yang diimpor dari file tersebut.');
            } else {
                onImport(parsed);
                alert(`Berhasil mengimpor ${parsed.length} data usaha offline!`);
            }
        } catch (err) {
            setImportError(err.message || 'Gagal membaca file Excel. Pastikan format template sesuai.');
        }
        // Reset input
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    const confirmDelete = (id, name)=>{
        if (confirm(`Apakah Anda yakin ingin menghapus data usaha "${name}"?`)) {
            onDelete(id);
        }
    };
    // Helper to handle print receipt directly
    const handlePrint = (record)=>{
        // Select printable receipt node or run window.print()
        onSelectForView(record.id);
        setTimeout(()=>{
            window.print();
        }, 150);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col transition-all",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 md:p-6 bg-slate-50 dark:bg-slate-800/40 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-base md:text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                        className: "w-5 h-5 text-bps-blue"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Database Usaha Offline (",
                                    records.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/OfflineManager.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400 dark:text-slate-500",
                                children: "Pencatatan survei yang disimpan lokal di memori HP / perangkat"
                            }, void 0, false, {
                                fileName: "[project]/src/components/OfflineManager.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/OfflineManager.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$excelExporter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["downloadTemplateExcel"],
                                className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors active:scale-95",
                                title: "Download Template Excel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Unduh Template"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/OfflineManager.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                ref: fileInputRef,
                                onChange: handleFileChange,
                                accept: ".xlsx, .xls",
                                className: "hidden"
                            }, void 0, false, {
                                fileName: "[project]/src/components/OfflineManager.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleImportClick,
                                className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors active:scale-95",
                                title: "Import dari Excel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Impor Excel"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/OfflineManager.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$excelExporter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportToExcel"])(records),
                                disabled: records.length === 0,
                                className: `flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white rounded-lg transition-all shadow-sm active:scale-95 ${records.length === 0 ? 'bg-slate-300 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed' : 'bg-bps-green hover:bg-bps-green-dark shadow-bps-green/10'}`,
                                title: "Ekspor ke Excel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Ekspor Semua"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/OfflineManager.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/OfflineManager.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/OfflineManager.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            importError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 pt-4 md:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/60 rounded-xl flex items-start gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "w-4 h-4 text-red-600 mt-0.5 flex-shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/OfflineManager.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold text-red-800 dark:text-red-300",
                                    children: "Gagal Mengimpor Excel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OfflineManager.tsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] text-red-700 dark:text-red-400 font-medium",
                                    children: importError
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OfflineManager.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/OfflineManager.tsx",
                            lineNumber: 160,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/OfflineManager.tsx",
                    lineNumber: 158,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/OfflineManager.tsx",
                lineNumber: 157,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 md:p-6 flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 w-4 h-4 text-slate-400 select-none"
                            }, void 0, false, {
                                fileName: "[project]/src/components/OfflineManager.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                placeholder: "Cari usaha berdasarkan nama, pemilik, KBLI, kategori...",
                                className: "w-full pl-9 pr-4 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-bps-blue-light/20 focus:border-bps-blue-light transition-all"
                            }, void 0, false, {
                                fileName: "[project]/src/components/OfflineManager.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/OfflineManager.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    records.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-12 flex flex-col items-center justify-center text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-slate-50 dark:bg-slate-800/30 text-slate-400 dark:text-slate-600 rounded-full mb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                    className: "w-8 h-8"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OfflineManager.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/OfflineManager.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-slate-700 dark:text-slate-300",
                                children: "Belum ada data terekam"
                            }, void 0, false, {
                                fileName: "[project]/src/components/OfflineManager.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400 dark:text-slate-500 mt-1 max-w-[280px]",
                                children: "Gunakan form di atas untuk mengisi data komponen usaha dan simpan hasil survei."
                            }, void 0, false, {
                                fileName: "[project]/src/components/OfflineManager.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/OfflineManager.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : filteredRecords.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-8 text-center text-xs text-slate-400",
                        children: "Tidak ada data usaha yang cocok dengan pencarian Anda."
                    }, void 0, false, {
                        fileName: "[project]/src/components/OfflineManager.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:block overflow-x-auto rounded-xl border border-slate-100 dark:border-slate-800",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-left border-collapse text-xs md:text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3",
                                                        children: "No Bangunan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3",
                                                        children: "No Keluarga"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3",
                                                        children: "Nama KK"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3",
                                                        children: "Nama Usaha / Pemilik"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3",
                                                        children: "KBLI / Kategori"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 text-right",
                                                        children: "Total Pendapatan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 text-right",
                                                        children: "Total Aset"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 text-center",
                                                        children: "Aksi Laporan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/OfflineManager.tsx",
                                                lineNumber: 203,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OfflineManager.tsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300",
                                            children: filteredRecords.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    onClick: ()=>onSelectForView(r.id),
                                                    className: "hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3 text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-bold text-slate-700 dark:text-slate-300",
                                                                children: r.identity.nomorBangunan || '-'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/OfflineManager.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/OfflineManager.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3 text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-bold text-slate-700 dark:text-slate-300",
                                                                children: r.identity.nomorKeluarga || '-'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/OfflineManager.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/OfflineManager.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold text-slate-800 dark:text-slate-200",
                                                                children: r.identity.namaKK || '-'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/OfflineManager.tsx",
                                                                lineNumber: 228,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/OfflineManager.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-semibold text-slate-800 dark:text-slate-200",
                                                                            children: r.identity.namaUsaha
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/OfflineManager.tsx",
                                                                            lineNumber: 232,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        (r.identity.nomorBangunan || r.identity.nomorKeluarga) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "px-1.5 py-0.5 bg-bps-orange/10 text-bps-orange-dark dark:text-bps-orange-light text-[9px] font-bold rounded",
                                                                            children: [
                                                                                "B",
                                                                                r.identity.nomorBangunan || '-',
                                                                                "-K",
                                                                                r.identity.nomorKeluarga || '-'
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/OfflineManager.tsx",
                                                                            lineNumber: 234,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/OfflineManager.tsx",
                                                                    lineNumber: 231,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-slate-400 dark:text-slate-500 font-medium mt-0.5",
                                                                    children: r.identity.namaPemilik
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/OfflineManager.tsx",
                                                                    lineNumber: 239,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/OfflineManager.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-mono font-bold text-bps-blue-light",
                                                                    children: r.identity.kbli
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/OfflineManager.tsx",
                                                                    lineNumber: 242,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-slate-400 dark:text-slate-500 font-semibold mt-0.5",
                                                                    children: [
                                                                        "Kategori ",
                                                                        r.identity.kategoriUsaha
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/OfflineManager.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/OfflineManager.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3 text-right font-mono font-bold text-bps-green",
                                                            children: [
                                                                "Rp ",
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(r.revenue.totalProduksi)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/OfflineManager.tsx",
                                                            lineNumber: 245,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3 text-right font-mono font-semibold",
                                                            children: [
                                                                "Rp ",
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(r.asset.totalAset)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/OfflineManager.tsx",
                                                            lineNumber: 248,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3",
                                                            onClick: (e)=>e.stopPropagation(),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-center gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>onEdit(r),
                                                                        className: "p-1.5 text-bps-blue hover:bg-bps-blue/10 rounded transition-colors",
                                                                        title: "Edit Data",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/OfflineManager.tsx",
                                                                            lineNumber: 258,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                                        lineNumber: 253,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pdfExporter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportToPDF"])(r),
                                                                        className: "p-1.5 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 rounded transition-colors",
                                                                        title: "Download PDF",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/OfflineManager.tsx",
                                                                            lineNumber: 265,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                                        lineNumber: 260,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handlePrint(r),
                                                                        className: "p-1.5 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 rounded transition-colors",
                                                                        title: "Cetak Laporan",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/OfflineManager.tsx",
                                                                            lineNumber: 272,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                                        lineNumber: 267,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>confirmDelete(r.id, r.identity.namaUsaha),
                                                                        className: "p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded transition-colors",
                                                                        title: "Hapus",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/OfflineManager.tsx",
                                                                            lineNumber: 279,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                                        lineNumber: 274,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/OfflineManager.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/OfflineManager.tsx",
                                                            lineNumber: 251,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, r.id, true, {
                                                    fileName: "[project]/src/components/OfflineManager.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OfflineManager.tsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/OfflineManager.tsx",
                                    lineNumber: 201,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/OfflineManager.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-3 md:hidden",
                                children: filteredRecords.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>onSelectForView(r.id),
                                        className: "p-4 bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 rounded-xl flex flex-col gap-3.5 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5 flex-wrap",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-bold text-slate-800 dark:text-slate-100 text-sm",
                                                                        children: r.identity.namaUsaha
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                                        lineNumber: 300,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    (r.identity.nomorBangunan || r.identity.nomorKeluarga) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-1.5 py-0.5 bg-bps-orange/10 text-bps-orange-dark dark:text-bps-orange-light text-[9px] font-bold rounded",
                                                                        children: [
                                                                            "B",
                                                                            r.identity.nomorBangunan || '-',
                                                                            "-K",
                                                                            r.identity.nomorKeluarga || '-'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                                        lineNumber: 302,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/OfflineManager.tsx",
                                                                lineNumber: 299,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-slate-400 dark:text-slate-500 font-semibold mt-1",
                                                                children: [
                                                                    "KK: ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-700 dark:text-slate-300",
                                                                        children: r.identity.namaKK || '-'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                                        lineNumber: 308,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/OfflineManager.tsx",
                                                                lineNumber: 307,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-slate-400 dark:text-slate-500 font-semibold mt-0.5",
                                                                children: [
                                                                    "Pemilik: ",
                                                                    r.identity.namaPemilik
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/OfflineManager.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 py-0.5 bg-bps-blue/10 dark:bg-bps-blue/20 text-bps-blue dark:text-bps-blue-light font-mono font-bold text-[10px] rounded",
                                                        children: [
                                                            "KBLI ",
                                                            r.identity.kbli
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/OfflineManager.tsx",
                                                lineNumber: 297,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2 text-[10px] border-t border-b border-slate-200/50 dark:border-slate-800 py-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-400 dark:text-slate-500 font-semibold",
                                                                children: "Omset Produksi:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/OfflineManager.tsx",
                                                                lineNumber: 320,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-bold text-bps-green mt-0.5",
                                                                children: [
                                                                    "Rp ",
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(r.revenue.totalProduksi)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/OfflineManager.tsx",
                                                                lineNumber: 321,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-400 dark:text-slate-500 font-semibold",
                                                                children: "Estimasi Aset:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/OfflineManager.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-bold text-slate-700 dark:text-slate-300 mt-0.5",
                                                                children: [
                                                                    "Rp ",
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(r.asset.totalAset)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/OfflineManager.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    r.identity.nomorHp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1 text-slate-400 dark:text-slate-500 font-medium col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                className: "w-3.5 h-3.5 text-slate-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/OfflineManager.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: r.identity.nomorHp
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/OfflineManager.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/OfflineManager.tsx",
                                                lineNumber: 318,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-end gap-1.5",
                                                onClick: (e)=>e.stopPropagation(),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onEdit(r),
                                                        className: "flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold text-bps-blue border border-bps-blue/20 bg-bps-blue/5 rounded-lg active:scale-95",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/OfflineManager.tsx",
                                                                lineNumber: 341,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "Edit"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pdfExporter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportToPDF"])(r),
                                                        className: "flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold text-indigo-600 border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg active:scale-95",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/OfflineManager.tsx",
                                                                lineNumber: 348,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "PDF"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handlePrint(r),
                                                        className: "flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold text-emerald-600 border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg active:scale-95",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/OfflineManager.tsx",
                                                                lineNumber: 355,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "Cetak"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>confirmDelete(r.id, r.identity.namaUsaha),
                                                        className: "p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg active:scale-95 ml-auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/OfflineManager.tsx",
                                                            lineNumber: 362,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/OfflineManager.tsx",
                                                lineNumber: 336,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, r.id, true, {
                                        fileName: "[project]/src/components/OfflineManager.tsx",
                                        lineNumber: 292,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/OfflineManager.tsx",
                                lineNumber: 290,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/OfflineManager.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/OfflineManager.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/calculator/PrintReport.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrintReport",
    ()=>PrintReport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/calculatorHelper.ts [app-ssr] (ecmascript)");
;
;
const PrintReport = ({ record })=>{
    if (!record) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "se2026-print-area",
        className: "hidden print:block p-8 bg-white text-slate-800 font-sans max-w-[210mm] mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center border-b-4 border-bps-blue pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold text-slate-900 tracking-wide uppercase",
                        children: "Sensus Ekonomi 2026 (SE2026)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-slate-700 mt-1 uppercase",
                        children: "Laporan Rincian Komponen Usaha Lapangan"
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-slate-500 mt-0.5",
                        children: [
                            "ID Usaha: ",
                            record.id,
                            " | Tanggal Cetak: ",
                            new Date().toLocaleDateString('id-ID')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-bold text-slate-950 uppercase border-b border-slate-300 pb-1 mb-3",
                        children: "I. IDENTITAS USAHA"
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-xs border-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-slate-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-1.5 w-1/3 font-semibold",
                                            children: "Nama Usaha"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-1.5",
                                            children: [
                                                ": ",
                                                record.identity.namaUsaha
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-slate-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-1.5 font-semibold",
                                            children: "Nama Pemilik / Pengelola"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-1.5",
                                            children: [
                                                ": ",
                                                record.identity.namaPemilik
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-slate-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-1.5 font-semibold",
                                            children: "Nomor HP"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-1.5",
                                            children: [
                                                ": ",
                                                record.identity.nomorHp
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-slate-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-1.5 font-semibold",
                                            children: "Alamat Lokasi"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-1.5",
                                            children: [
                                                ": ",
                                                record.identity.alamat || '-'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-1.5 font-semibold w-1/3",
                                            children: "Jenis Usaha"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-1.5",
                                            children: [
                                                ": ",
                                                record.identity.namaUsaha
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-1.5 font-semibold",
                                            children: "KBLI & Kategori"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-1.5",
                                            children: [
                                                ": ",
                                                record.identity.kbli,
                                                " - Kategori ",
                                                record.identity.kategoriUsaha
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-1.5 font-semibold",
                                            children: "Kegiatan Utama"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-1.5",
                                            children: [
                                                ": ",
                                                record.identity.kegiatanUtama || '-'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-1.5 font-semibold",
                                            children: "Produk Utama"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-1.5",
                                            children: [
                                                ": ",
                                                record.identity.produkUtama || '-'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-slate-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-1.5 font-semibold",
                                            children: "Tahun Berdiri"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-1.5",
                                            children: [
                                                ": ",
                                                record.identity.tahunBerdiri
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            record.worker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-bold text-slate-950 uppercase border-b border-slate-300 pb-1 mb-3",
                        children: "II. TENAGA KERJA (SE2026 RINCIAN 24)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-xs border border-slate-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "bg-slate-100 border-b border-slate-200 text-slate-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-2 text-left w-1/2",
                                            children: "Komponen Tenaga Kerja"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-2 text-center w-1/4",
                                            children: "Kode Rincian"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-2 text-right w-1/4",
                                            children: "Jumlah (Orang)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                className: "divide-y divide-slate-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2",
                                                children: "Pekerja Laki-laki"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-center",
                                                children: "24.a1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-right font-mono",
                                                children: record.worker.pekerjaLaki
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2",
                                                children: "Pekerja Perempuan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-center",
                                                children: "24.b1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-right font-mono",
                                                children: record.worker.pekerjaPerempuan
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-slate-50 font-bold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2",
                                                children: "TOTAL PEKERJA (BERDASARKAN JENIS KELAMIN)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-center",
                                                children: "24.c1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-right font-mono",
                                                children: record.worker.totalPekerjaGender
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2",
                                                children: "Pekerja Dibayar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-center",
                                                children: "24.a2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-right font-mono",
                                                children: record.worker.pekerjaDibayar
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2",
                                                children: "Pekerja Tidak Dibayar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-center",
                                                children: "24.b2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-right font-mono",
                                                children: record.worker.pekerjaTidakDibayar
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-slate-50 font-bold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2",
                                                children: "TOTAL PEKERJA (BERDASARKAN STATUS)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-center",
                                                children: "24.c2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-right font-mono",
                                                children: record.worker.totalPekerjaStatus
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-bold text-slate-950 uppercase border-b border-slate-300 pb-1 mb-3",
                        children: "III. KOMPONEN KEUANGAN (SE2026 RINCIAN 26 & 27)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-xs border border-slate-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "bg-slate-100 border-b border-slate-200 text-slate-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-2 text-left",
                                            children: "Komponen Usaha"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-2 text-center",
                                            children: "Kode Rincian"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-2 text-right",
                                            children: "Nilai Komponen (Rupiah)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                className: "divide-y divide-slate-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2",
                                                children: "Upah dan Gaji"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-center",
                                                children: "26.a"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-right font-mono",
                                                children: [
                                                    "Rp ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(record.expense.upahGaji)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2",
                                                children: "Biaya Produksi / Operasional Dasar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 143,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-center",
                                                children: "26.b"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 144,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-right font-mono",
                                                children: [
                                                    "Rp ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(record.expense.biayaProduksi)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2",
                                                children: "Biaya Pembelian Barang Dijual Kembali"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 148,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-center",
                                                children: "26.c"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-right font-mono",
                                                children: [
                                                    "Rp ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(record.expense.biayaPembelianBarang)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2",
                                                children: "Biaya Operasional Rutin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-center",
                                                children: "26.d"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-right font-mono",
                                                children: [
                                                    "Rp ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(record.expense.biayaOperasional)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 155,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2",
                                                children: "Biaya Non Operasional"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 158,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-center",
                                                children: "26.e"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 159,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-right font-mono",
                                                children: [
                                                    "Rp ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(record.expense.biayaNonOperasional)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 160,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-slate-50 font-bold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2",
                                                children: "TOTAL PENGELUARAN"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-center",
                                                children: "26.f"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 164,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-right font-mono",
                                                children: [
                                                    "Rp ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(record.expense.totalPengeluaran)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 165,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2",
                                                children: "Nilai Produksi / Penjualan Utama"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 168,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-center",
                                                children: "27.a"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-right font-mono",
                                                children: [
                                                    "Rp ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(record.revenue.nilaiProduksiPenjualan)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2",
                                                children: "Pendapatan Lainnya"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 173,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-center",
                                                children: "27.b"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 174,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-right font-mono",
                                                children: [
                                                    "Rp ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(record.revenue.pendapatanLainnya)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 175,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-slate-50 font-bold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2",
                                                children: "TOTAL PRODUKSI / PENDAPATAN"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 178,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-center",
                                                children: "27.c"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-right font-mono",
                                                children: [
                                                    "Rp ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(record.revenue.totalProduksi)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 180,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-emerald-50 text-emerald-900 font-bold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2",
                                                children: "KEUNTUNGAN KOTOR (PROFIT)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 183,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-center",
                                                children: "Margin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 184,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-right font-mono",
                                                children: [
                                                    "Rp ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(record.revenue.totalProduksi - record.expense.totalPengeluaran)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                lineNumber: 185,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-bold text-slate-950 uppercase border-b border-slate-300 pb-1 mb-3",
                        children: "IV. MODUL ASET & DIMENSI TEMPAT USAHA (SE2026 RINCIAN 28)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 border border-slate-200 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1",
                                            children: [
                                                "Luas Tanah:",
                                                ' ',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono",
                                                    children: record.dimension.modeLuasLahan ? `${record.dimension.luasEstimasi} m² (Estimasi)` : `${record.dimension.panjangTanah}m x ${record.dimension.lebarTanah}m = ${record.dimension.luasTanah} m²`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 199,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Luas Bangunan: ",
                                                record.dimension.panjangBangunan,
                                                "m x ",
                                                record.dimension.lebarBangunan,
                                                "m = ",
                                                record.dimension.luasBangunan,
                                                " m²"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                            lineNumber: 207,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 border border-slate-200 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-slate-800",
                                        children: "Komposisi Nilai Aset:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1",
                                        children: [
                                            "Nilai Tanah: Rp ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(record.asset.nilaiTanah)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5",
                                        children: [
                                            "Nilai Bangunan: Rp ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(record.asset.nilaiBangunan)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5",
                                        children: [
                                            "Nilai Mesin & Peralatan: Rp ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(record.asset.mesinPeralatan)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5",
                                        children: [
                                            "Nilai Kendaraan: Rp ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(record.asset.kendaraanUsaha)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 text-right text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: "TOTAL ESTIMASI ASET USAHA: "
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono font-bold text-bps-blue",
                                children: [
                                    "Rp ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculatorHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupiah"])(record.asset.totalAset)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 flex justify-between text-xs text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold",
                                children: "Pemilik / Pengelola Usaha,"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-16"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold border-t border-slate-400 pt-1 px-4",
                                children: record.identity.namaPemilik
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold",
                                children: "Petugas Pencacah Lapangan,"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-16"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold border-t border-slate-400 pt-1 px-4",
                                children: "Sensus Ekonomi 2026"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/PrintReport.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/calculator/PrintReport.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/calculator/PrintReport.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ThemeToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculator$2f$BusinessForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/calculator/BusinessForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$Overview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/Overview.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$AnalyticsCharts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/AnalyticsCharts.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OfflineManager$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/OfflineManager.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculator$2f$PrintReport$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/calculator/PrintReport.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-ssr] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
'use client';
;
;
;
;
;
;
;
;
;
function Home() {
    const [records, setRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('calculator');
    const [editRecord, setEditRecord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedDashboardId, setSelectedDashboardId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [printRecord, setPrintRecord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load records from local storage on client mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
        const stored = localStorage.getItem('se2026_records');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                console.log("DATA_LOADED_FROM_DB", parsed);
                setRecords(parsed);
            } catch (e) {
                console.error('Failed to parse stored records', e);
            }
        }
    }, []);
    // Save records to local storage on changes
    const saveToLocalStorage = (newRecords)=>{
        setRecords(newRecords);
        localStorage.setItem('se2026_records', JSON.stringify(newRecords));
    };
    const handleSaveRecord = (record)=>{
        const existsIdx = records.findIndex((r)=>r.id === record.id);
        let updatedRecords = [];
        if (existsIdx > -1) {
            // Update existing record
            updatedRecords = [
                ...records
            ];
            updatedRecords[existsIdx] = record;
            alert(`Berhasil memperbarui data usaha "${record.identity.namaUsaha}"!`);
        } else {
            // Insert new record
            updatedRecords = [
                record,
                ...records
            ];
            alert(`Berhasil menyimpan data usaha "${record.identity.namaUsaha}" secara offline!`);
        }
        saveToLocalStorage(updatedRecords);
        console.log("DATA_SAVED", record); // Using 'record' as the savedRecord to match what user typed? No, 'updatedRecords' has all. But user asked for savedRecord, let's log the single record.
        console.log("DATA_SAVED_ALL", updatedRecords);
        setEditRecord(null);
        setSelectedDashboardId(record.id);
        // Switch to database list view to inspect results
        setActiveTab('database');
    };
    const handleDeleteRecord = (id)=>{
        const updated = records.filter((r)=>r.id !== id);
        saveToLocalStorage(updated);
        if (selectedDashboardId === id) {
            setSelectedDashboardId('all');
        }
        if (editRecord?.id === id) {
            setEditRecord(null);
        }
    };
    const handleImportRecords = (newRecords)=>{
        // Avoid exact duplicate IDs by merging
        const merged = [
            ...records
        ];
        newRecords.forEach((newRec)=>{
            const idx = merged.findIndex((r)=>r.id === newRec.id);
            if (idx > -1) {
                merged[idx] = newRec; // overwrite
            } else {
                merged.unshift(newRec); // prepend
            }
        });
        saveToLocalStorage(merged);
    };
    const handleEditTrigger = (record)=>{
        setEditRecord(record);
        setActiveTab('calculator');
    };
    const handleSelectForPrint = (id)=>{
        const found = records.find((r)=>r.id === id);
        if (found) {
            setPrintRecord(found);
        }
    };
    // Safe checks for dashboard rendering
    const dashboardRecord = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        if (records.length === 0) return null;
        if (selectedDashboardId === 'all') return records[0]; // fallback to first record
        return records.find((r)=>r.id === selectedDashboardId) || records[0];
    }, [
        records,
        selectedDashboardId
    ]);
    if (!isClient) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 border-4 border-bps-blue border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-semibold text-slate-500",
                        children: "Memuat Aplikasi..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 113,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 md:pb-6 flex flex-col transition-colors duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculator$2f$PrintReport$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrintReport"], {
                record: printRecord || (records.length > 0 ? records[0] : null)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "print:hidden w-full flex flex-col flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 border-b border-slate-100 dark:border-slate-800 backdrop-blur px-4 md:px-8 py-3.5 flex justify-between items-center shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 rounded-xl bg-gradient-to-br from-bps-blue to-bps-green flex items-center justify-center text-white shadow-md font-black text-sm",
                                        children: "SE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-sm md:text-base font-extrabold text-slate-800 dark:text-slate-100 flex items-center gap-1.5 leading-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "SE2026 Smart Calculator"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-1.5 py-0.5 text-[9px] bg-bps-blue/10 text-bps-blue dark:bg-bps-blue/20 dark:text-bps-blue-light rounded font-bold uppercase tracking-wider",
                                                        children: "BPS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-slate-400 dark:text-slate-500 font-semibold mt-1",
                                                children: "Kalkulator & Database Komponen Usaha Petugas Lapangan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 w-full max-w-7xl mx-auto px-4 py-6 md:px-8 flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex bg-slate-200/50 dark:bg-slate-900/50 p-1.5 rounded-xl border border-slate-200/30 dark:border-slate-800/30 w-fit self-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('calculator'),
                                        className: `flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-lg transition-all active:scale-95 ${activeTab === 'calculator' ? 'bg-white dark:bg-slate-800 text-bps-blue dark:text-bps-blue-light shadow-sm' : 'text-slate-500 hover:bg-white/40 dark:hover:bg-slate-800/40'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this),
                                            "Kalkulator Survey"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('dashboard'),
                                        className: `flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-lg transition-all active:scale-95 ${activeTab === 'dashboard' ? 'bg-white dark:bg-slate-800 text-bps-blue dark:text-bps-blue-light shadow-sm' : 'text-slate-500 hover:bg-white/40 dark:hover:bg-slate-800/40'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 180,
                                                columnNumber: 15
                                            }, this),
                                            "Dashboard Analisis"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('database'),
                                        className: `flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-lg transition-all active:scale-95 ${activeTab === 'database' ? 'bg-white dark:bg-slate-800 text-bps-blue dark:text-bps-blue-light shadow-sm' : 'text-slate-500 hover:bg-white/40 dark:hover:bg-slate-800/40'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 191,
                                                columnNumber: 15
                                            }, this),
                                            "Database Usaha (",
                                            records.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 w-full",
                                children: [
                                    activeTab === 'calculator' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full max-w-3xl mx-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculator$2f$BusinessForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BusinessForm"], {
                                            onSave: handleSaveRecord,
                                            editRecord: editRecord,
                                            onCancelEdit: ()=>setEditRecord(null)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this),
                                    activeTab === 'dashboard' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-6 w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$Overview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overview"], {
                                                records: records,
                                                selectedId: selectedDashboardId,
                                                onSelectId: setSelectedDashboardId
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$AnalyticsCharts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnalyticsCharts"], {
                                                record: dashboardRecord
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    activeTab === 'database' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OfflineManager$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OfflineManager"], {
                                            records: records,
                                            onEdit: handleEditTrigger,
                                            onDelete: handleDeleteRecord,
                                            onImport: handleImportRecords,
                                            onSelectForView: handleSelectForPrint
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "print:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 border-t border-slate-100 dark:border-slate-800 backdrop-blur flex justify-around py-2.5 md:hidden shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab('calculator'),
                        className: `flex flex-col items-center gap-0.5 focus:outline-none transition-colors ${activeTab === 'calculator' ? 'text-bps-blue dark:text-bps-blue-light' : 'text-slate-400'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-bold",
                                children: "Kalkulator"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab('dashboard'),
                        className: `flex flex-col items-center gap-0.5 focus:outline-none transition-colors ${activeTab === 'dashboard' ? 'text-bps-blue dark:text-bps-blue-light' : 'text-slate-400'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-bold",
                                children: "Analisis"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab('database'),
                        className: `flex flex-col items-center gap-0.5 focus:outline-none transition-colors ${activeTab === 'database' ? 'text-bps-blue dark:text-bps-blue-light' : 'text-slate-400'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this),
                                    records.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-1.5 -right-2 bg-bps-green text-white text-[8px] font-bold px-1 rounded-full border border-white",
                                        children: records.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 263,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-bold",
                                children: "Database"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0z0jjmn._.js.map