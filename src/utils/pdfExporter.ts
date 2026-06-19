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
  let currentY = 0;

  // Helper to add new page if content overflows
  const checkPageBreak = (neededSpace: number) => {
    if (currentY + neededSpace > pageHeight - 40) {
      doc.addPage();
      currentY = 20; // Margin top for new page
      
      // Draw a mini header on new pages
      doc.setFillColor(4, 84, 156);
      doc.rect(0, 0, pageWidth, 15, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text('SENSUS EKONOMI 2026 - Lanjutan', pageWidth / 2, 10, { align: 'center' });
    }
  };

  // Helper to draw horizontal divider line
  const drawLine = (y: number) => {
    doc.setDrawColor(220, 225, 230);
    doc.setLineWidth(0.4);
    doc.line(15, y, pageWidth - 15, y);
  };

  // Helper to draw section header
  const drawSectionHeader = (title: string, y: number) => {
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
  doc.text('SENSUS EKONOMI 2026 (SE2026)', pageWidth / 2, 16, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.text('LAPORAN HASIL SURVEY DAN KALKULASI ELEKTRONIK KOMPONEN USAHA', pageWidth / 2, 23, { align: 'center' });
  
  doc.setFillColor(255, 255, 255);
  doc.roundedRect((pageWidth / 2) - 45, 28, 90, 7, 2, 2, 'F');
  doc.setTextColor(4, 84, 156);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text(`ID Usaha: ${record.id}`, pageWidth / 2, 33, { align: 'center' });

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

  identityRows.forEach((row, idx) => {
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
      for(let i=1; i<splitVal.length; i++){
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
  doc.text('Nilai (Rupiah)', pageWidth - 20, currentY + 1, { align: 'right' });
  currentY += 7;

  // Table rows for finances
  const financeRows = [
    { label: 'Upah dan Gaji Karyawan', code: 'R.26.a', val: record.expense.upahGaji },
    { label: 'Biaya Bahan Baku / Produksi', code: 'R.26.b', val: record.expense.biayaProduksi },
    { label: 'Biaya Pembelian Barang yang Dijual Kembali', code: 'R.26.c', val: record.expense.biayaPembelianBarang },
    { label: 'Biaya Operasional Usaha', code: 'R.26.d', val: record.expense.biayaOperasional },
    { label: 'Biaya Non-Operasional Usaha', code: 'R.26.e', val: record.expense.biayaNonOperasional },
    { label: 'TOTAL PENGELUARAN USAHA', code: 'R.26.f', val: record.expense.totalPengeluaran, isBold: true, isTotal: true },
    { label: 'Nilai Produksi / Hasil Penjualan Utama', code: 'R.27.a', val: record.revenue.nilaiProduksiPenjualan },
    { label: 'Pendapatan Lainnya', code: 'R.27.b', val: record.revenue.pendapatanLainnya },
    { label: 'TOTAL PRODUKSI / PENDAPATAN', code: 'R.27.c', val: record.revenue.totalProduksi, isBold: true, isTotal: true },
    { label: 'KEUNTUNGAN KOTOR USAHA', code: 'Margin', val: (record.revenue.totalProduksi - record.expense.totalPengeluaran), isBold: true, highlight: true }
  ];

  financeRows.forEach((row, idx) => {
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
    doc.text(`Rp ${formatRupiah(row.val)}`, pageWidth - 20, currentY, { align: 'right' });
    
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
  const luasTanahText = record.dimension.modeLuasLahan 
    ? `Luas Lahan Estimasi: ${record.dimension.luasTanah} m2 (Rp ${formatRupiah(record.dimension.hargaTanahPerM2)}/m2)`
    : `Luas Tanah: ${record.dimension.panjangTanah}m x ${record.dimension.lebarTanah}m = ${record.dimension.luasTanah} m2 (Rp ${formatRupiah(record.dimension.hargaTanahPerM2)}/m2)`;
  doc.text(luasTanahText, leftColX + 5, currentY + 6);
  doc.text(`Luas Bangunan: ${record.dimension.panjangBangunan}m x ${record.dimension.lebarBangunan}m = ${record.dimension.luasBangunan} m2 (Rp ${formatRupiah(record.dimension.hargaBangunanPerM2)}/m2)`, leftColX + 5, currentY + 11);

  currentY += 20;

  // Assets Breakdown Table
  doc.setFillColor(240, 244, 248);
  doc.rect(15, currentY - 4, pageWidth - 30, 7, 'F');
  doc.setTextColor(4, 84, 156);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('Rincian Estimasi Nilai Aset Usaha', leftColX, currentY + 1);
  doc.text('Kode', 125, currentY + 1);
  doc.text('Nilai (Rupiah)', pageWidth - 20, currentY + 1, { align: 'right' });
  currentY += 7;
  
  const assetRows = [
    { label: 'Nilai Tanah Usaha (Terhitung)', code: 'R.28.a', val: record.asset.nilaiTanah },
    { label: 'Nilai Bangunan Usaha (Terhitung)', code: 'R.28.b', val: record.asset.nilaiBangunan },
    { label: 'Nilai Mesin dan Peralatan', code: 'R.28.c/e', val: record.asset.mesinPeralatan },
    { label: 'Nilai Kendaraan Operasional', code: 'R.28.d', val: record.asset.kendaraanUsaha },
    { label: 'TOTAL ESTIMASI NILAI ASET USAHA', code: 'Total Aset', val: record.asset.totalAset, isBold: true }
  ];

  doc.setFontSize(10);
  assetRows.forEach((row, idx) => {
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
    doc.text(`Rp ${formatRupiah(row.val)}`, pageWidth - 20, currentY, { align: 'right' });
    currentY += row.isBold ? 7 : 6;
  });

  // 5. Modul Pekerja (If available)
  if (record.worker && (record.worker.totalPekerjaGender > 0)) {
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
