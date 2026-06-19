import { jsPDF } from 'jspdf';
import { BusinessRecord, formatRupiah } from './calculatorHelper';

export function exportToPDF(record: BusinessRecord) {
  // Create jsPDF in A4 page size
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Helper to draw horizontal divider line
  const drawLine = (y: number) => {
    doc.setDrawColor(220, 225, 230);
    doc.setLineWidth(0.4);
    doc.line(15, y, pageWidth - 15, y);
  };

  // 1. Header Banner (BPS Blue background look)
  doc.setFillColor(4, 84, 156); // BPS Blue
  doc.rect(0, 0, pageWidth, 42, 'F');

  // Header Title
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('SENSUS EKONOMI 2026 (SE2026)', pageWidth / 2, 16, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.text('LAPORAN HASIL SURVEY DAN KALKULASI ELEKTRONIK KOMPONEN USAHA', pageWidth / 2, 23, { align: 'center' });
  doc.text(`ID Usaha: ${record.id}   |   Diunduh pada: ${new Date().toLocaleDateString('id-ID')}`, pageWidth / 2, 29, { align: 'center' });

  // BPS Green Accent Line
  doc.setFillColor(0, 168, 89); // BPS Green
  doc.rect(0, 42, pageWidth, 3, 'F');

  let currentY = 55;

  // 2. Section: Identitas Usaha
  doc.setTextColor(4, 84, 156);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text('I. IDENTITAS USAHA', 15, currentY);
  currentY += 6;
  drawLine(currentY);
  currentY += 8;

  // Render Table-like grids for identity
  doc.setTextColor(60, 60, 60);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  
  const leftColX = 18;
  const valColX = 65;

  const identityRows = [
    { label: 'Nama Usaha', val: record.identity.namaUsaha },
    { label: 'Nama Pemilik/Pengelola', val: record.identity.namaPemilik },
    { label: 'Nomor HP', val: record.identity.nomorHp },
    { label: 'Alamat Lokasi', val: record.identity.alamat || '-' },
    { label: 'Kategori Usaha (KBLI)', val: `Kategori ${record.identity.kategoriUsaha} (KBLI: ${record.identity.kbli})` },
    { label: 'Kegiatan Utama', val: record.identity.kegiatanUtama || '-' },
    { label: 'Produk Utama', val: record.identity.produkUtama || '-' },
    { label: 'Contoh Produk', val: record.identity.contohProduk || '-' },
    { label: 'Tahun Berdiri', val: record.identity.tahunBerdiri }
  ];

  identityRows.forEach(row => {
    doc.setFont('helvetica', 'bold');
    doc.text(row.label, leftColX, currentY);
    doc.setFont('helvetica', 'normal');
    
    // Auto-wrap for long address values
    if (row.label === 'Alamat Lokasi' && row.val.length > 60) {
      const splitAddress = doc.splitTextToSize(row.val, pageWidth - valColX - 20);
      doc.text(splitAddress, valColX, currentY);
      currentY += (splitAddress.length * 5) + 1;
    } else {
      doc.text(`:  ${row.val}`, valColX - 3, currentY);
      currentY += 6;
    }
  });

  currentY += 4;

  // 3. Section: Komponen Keuangan (Pengeluaran & Pendapatan)
  doc.setTextColor(4, 84, 156);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text('II. RINCIAN MODUL KEUANGAN (SE2026)', 15, currentY);
  currentY += 6;
  drawLine(currentY);
  currentY += 8;

  doc.setTextColor(60, 60, 60);
  doc.setFont('helvetica', 'bold');
  doc.text('Keterangan Rincian Komponen', leftColX, currentY);
  doc.text('Kode Rincian', 125, currentY);
  doc.text('Nilai Komponen (Rupiah)', pageWidth - 20, currentY, { align: 'right' });
  currentY += 5;
  drawLine(currentY);
  currentY += 7;

  // Table rows for finances
  const financeRows = [
    { label: 'Upah dan Gaji Karyawan', code: 'R.26.a', val: record.expense.upahGaji, isExpense: true },
    { label: 'Biaya Bahan Baku / Produksi', code: 'R.26.b', val: record.expense.biayaProduksi, isExpense: true },
    { label: 'Biaya Pembelian Barang yang Dijual Kembali', code: 'R.26.c', val: record.expense.biayaPembelianBarang, isExpense: true },
    { label: 'Biaya Operasional Usaha', code: 'R.26.d', val: record.expense.biayaOperasional, isExpense: true },
    { label: 'Biaya Non-Operasional Usaha', code: 'R.26.e', val: record.expense.biayaNonOperasional, isExpense: true },
    { label: 'TOTAL PENGELUARAN USAHA', code: 'R.26.f', val: record.expense.totalPengeluaran, isExpense: true, isBold: true },
    { label: 'Nilai Produksi / Hasil Penjualan Utama', code: 'R.27.a', val: record.revenue.nilaiProduksiPenjualan, isExpense: false },
    { label: 'Pendapatan Lainnya', code: 'R.27.b', val: record.revenue.pendapatanLainnya, isExpense: false },
    { label: 'TOTAL PRODUKSI / PENDAPATAN', code: 'R.27.c', val: record.revenue.totalProduksi, isExpense: false, isBold: true },
    { label: 'KEUNTUNGAN KOTOR USAHA', code: 'Margin', val: record.revenue.totalProduksi - record.expense.totalPengeluaran, isExpense: false, isBold: true, highlight: true }
  ];

  financeRows.forEach(row => {
    if (row.isBold) {
      doc.setFont('helvetica', 'bold');
    } else {
      doc.setFont('helvetica', 'normal');
    }

    if (row.highlight) {
      doc.setFillColor(240, 248, 240); // Soft green background
      doc.rect(leftColX - 2, currentY - 4, pageWidth - (leftColX * 2) + 6, 6, 'F');
      doc.setTextColor(0, 120, 50);
    } else {
      doc.setTextColor(60, 60, 60);
    }

    doc.text(row.label, leftColX, currentY);
    doc.text(row.code, 128, currentY);
    doc.text(`Rp ${formatRupiah(row.val)}`, pageWidth - 20, currentY, { align: 'right' });
    currentY += 6;
  });

  currentY += 6;

  // 5. Section: Aset & Dimensi
  doc.setTextColor(4, 84, 156);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text('IV. ESTIMASI ASET & UKURAN TEMPAT USAHA', 15, currentY);
  currentY += 6;
  drawLine(currentY);
  currentY += 8;

  // Layout Dimensions and Assets side-by-side or stacked
  doc.setTextColor(60, 60, 60);
  
  // Dimensions
  doc.setFont('helvetica', 'bold');
  doc.text('Dimensi Fisik Tempat Usaha:', leftColX, currentY);
  doc.setFont('helvetica', 'normal');
  doc.text(`Luas Tanah: ${record.dimension.panjangTanah}m x ${record.dimension.lebarTanah}m = ${record.dimension.luasTanah} m2 (Rp ${formatRupiah(record.dimension.hargaTanahPerM2)}/m2)`, leftColX + 5, currentY + 5);
  doc.text(`Luas Bangunan: ${record.dimension.panjangBangunan}m x ${record.dimension.lebarBangunan}m = ${record.dimension.luasBangunan} m2 (Rp ${formatRupiah(record.dimension.hargaBangunanPerM2)}/m2)`, leftColX + 5, currentY + 10);

  currentY += 16;

  // Assets Breakdown Table
  doc.setFont('helvetica', 'bold');
  doc.text('Rincian Estimasi Nilai Aset Usaha:', leftColX, currentY);
  currentY += 5;
  
  const assetRows = [
    { label: 'Nilai Tanah Usaha (Terhitung)', code: 'R.28.a', val: record.asset.nilaiTanah },
    { label: 'Nilai Bangunan Usaha (Terhitung)', code: 'R.28.b', val: record.asset.nilaiBangunan },
    { label: 'Nilai Mesin dan Perlengkapannya', code: 'R.28.c', val: record.asset.nilaiMesin },
    { label: 'Nilai Kendaraan Operasional', code: 'R.28.d', val: record.asset.nilaiKendaraan },
    { label: 'Nilai Peralatan / Inventaris Kantor', code: 'R.28.e', val: record.asset.nilaiPeralatan },
    { label: 'TOTAL ESTIMASI NILAI ASET USAHA', code: 'Total Aset', val: record.asset.totalAset, isBold: true }
  ];

  assetRows.forEach(row => {
    if (row.isBold) {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(4, 84, 156);
    } else {
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(80, 80, 80);
    }
    doc.text(`  - ${row.label}`, leftColX, currentY);
    doc.text(row.code, 128, currentY);
    doc.text(`Rp ${formatRupiah(row.val)}`, pageWidth - 20, currentY, { align: 'right' });
    currentY += 5.5;
  });

  // 6. Footer Signatures (Clean positioning at bottom of page)
  const footerY = pageHeight - 35;
  doc.setDrawColor(200, 200, 200);
  doc.line(15, footerY, pageWidth - 15, footerY);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(120, 120, 120);
  doc.text('Sensus Ekonomi 2026 - Aplikasi kalkulator ini dirancang untuk mempermudah petugas pencacah di lapangan.', 15, footerY + 5);
  doc.text('Semua kalkulasi dilakukan secara real-time berdasarkan formula pedoman resmi kuesioner SE2026.', 15, footerY + 9);
  
  // Signatures fields
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  doc.text('Petugas Pencacah Lapangan,', pageWidth - 70, footerY + 5);
  doc.text('_________________________', pageWidth - 70, footerY + 22);

  // Save the generated document
  doc.save(`Laporan_SE2026_${record.identity.namaUsaha.replace(/\s+/g, '_')}.pdf`);
}
