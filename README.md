# Alilah Store - Landing Page

Landing page untuk Alilah Store dengan Vue.js dan Vite.

## 🚀 Fitur

- **Responsive Design**: Mobile, Tablet, Desktop
- **3 Produk**: Hikari, Subashi, Utsukushi
- **Halaman Detail Produk**: Foto galeri, deskripsi, harga, tombol WhatsApp
- **WhatsApp Integration**: Langsung pesan via WhatsApp
- **Testimonials**: Ulasan pelanggan
- **Vercel Ready**: Siap deploy ke Vercel

## 📁 Struktur Folder

```
landing alila/
├── produk/              # Folder gambar produk
│   ├── Hikari/
│   ├── subashi/
│   └── utsukushi/
├── public/
│   └── vite.svg
├── src/
│   ├── data/
│   │   └── products.js      # Data produk & testimoni
│   ├── views/
│   │   ├── Home.vue         # Landing page
│   │   └── ProductDetail.vue # Halaman detail produk
│   ├── App.vue
│   ├── main.js
│   ├── router.js
│   └── style.css
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

## 🛠️ Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📝 Konfigurasi

### Update Nomor WhatsApp
Edit file `src/data/products.js` dan ubah `whatsappNumber` untuk setiap produk:

```javascript
{
  name: 'Hikari',
  whatsappNumber: '6281234567890', // Ganti dengan nomor Anda
  // ...
}
```

### Update Data Produk
Edit file `src/data/products.js` untuk mengubah:
- Nama produk
- Deskripsi
- Harga
- Gambar (sesuaikan dengan file di folder `produk/`)
- Keunggulan produk

## 🚀 Deploy ke Vercel

### Cara 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Cara 2: GitHub + Vercel
1. Push kode ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Import repository GitHub Anda
4. Deploy otomatis!

### Cara 3: Upload Manual
1. Build project: `npm run build`
2. Upload folder `dist` ke hosting statis

## 🎨 Customization

### Warna Tema
Edit file `src/style.css` di bagian `:root`:

```css
:root {
  --primary-color: #d4a5a5;    /* Warna utama */
  --primary-dark: #c08b8b;     /* Warna hover */
  --secondary-color: #f9f3f3;  /* Background */
}
```

### Tambah Produk Baru
1. Tambahkan folder produk baru di `produk/`
2. Update `src/data/products.js` dengan data produk baru

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px (3 kolom)
- **Tablet**: 768px - 1024px (2 kolom)
- **Mobile**: < 768px (1 kolom)

## 📄 License

&copy; 2026 Alilah Store. All rights reserved.
