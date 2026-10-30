// Nama file: tugas-es6.mjs

// 1. Definisi data array of objects (minimal 6 data transaksi belanja)
const transaksi = [
  { id: 1, barang: 'Laptop', harga: 8000000, qty: 1, kategori: 'Elektronik' },
  { id: 2, barang: 'Mouse', harga: 150000, qty: 2, kategori: 'Elektronik' },
  { id: 3, barang: 'Kemeja', harga: 200000, qty: 3, kategori: 'Pakaian' },
  { id: 4, barang: 'Celana Jeans', harga: 250000, qty: 2, kategori: 'Pakaian' },
  { id: 5, barang: 'Keyboard', harga: 500000, qty: 1, kategori: 'Elektronik' },
  { id: 6, barang: 'Buku Tulis', harga: 10000, qty: 5, kategori: 'ATK' },
];

// Kategori yang ingin disaring (contoh: 'Elektronik')
const kategoriTarget = 'Elektronik';

// 2. Menyaring kategori tertentu menggunakan filter() dengan arrow function & destructuring
const transaksiElektronik = transaksi.filter(({ kategori }) => kategori === kategoriTarget);

// 3. Menghitung subtotal tiap barang menggunakan map() dengan arrow function & destructuring
const transaksiDenganSubtotal = transaksiElektronik.map(({ id, barang, harga, qty, kategori }) => ({
  id,
  barang,
  harga,
  qty,
  kategori,
  subtotal: harga * qty,
}));

// 4. Menghitung total keseluruhan menggunakan reduce() dengan arrow function & destructuring
const totalKeseluruhan = transaksiDenganSubtotal.reduce(
  (acc, { subtotal }) => acc + subtotal,
  0
);

// Menampilkan Hasil
console.log(`=== Transaksi Kategori: ${kategoriTarget} ===`);
console.table(transaksiDenganSubtotal);
console.log(`Total Keseluruhan: Rp ${totalKeseluruhan.toLocaleString('id-ID')}`);