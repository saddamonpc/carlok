# Panduan Instalasi dan Setup

Panduan lengkap untuk mensetup dan menjalankan aplikasi CARLOK di lingkungan development.

## Persyaratan Sistem

### Software yang Diperlukan
- **Node.js** versi 18.0 atau lebih baru
- **npm** atau **yarn** untuk package management
- **Git** untuk version control
- **VS Code** (direkomendasikan) untuk code editor

### Spesifikasi Minimum
- RAM: 4GB minimum, 8GB direkomendasikan
- Storage: 2GB ruang kosong
- OS: Windows 10/11, macOS 10.15+, atau Linux

## Instalasi

### 1. Clone Repository
```bash
git clone [repository-url]
cd carlok
```

### 2. Install Dependencies
```bash
# Menggunakan npm
npm install

# Atau menggunakan yarn
yarn install
```

### 3. Setup Environment
Buat file `.env.local` di root directory (jika diperlukan):
```env
# Contoh environment variables
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Development

### Menjalankan Development Server
```bash
# Menggunakan npm
npm run dev

# Atau menggunakan yarn
yarn dev
```

Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000)

### Scripts yang Tersedia
- `npm run dev` - Menjalankan development server
- `npm run build` - Build aplikasi untuk production
- `npm run start` - Menjalankan production server
- `npm run lint` - Menjalankan ESLint untuk code checking

## Struktur Project

```
carlok/
├── components/           # React components
├── pages/               # Next.js pages (routing)
├── lib/                 # Utility functions dan data
├── public/              # Static assets
├── styles/              # CSS files
├── docs/                # Dokumentasi
├── package.json         # Dependencies dan scripts
└── README.md           # Project overview
```

## Menambah Data Baru

### Menambah Lokasi Baru
1. Edit file `lib/data/locations.db.js`
2. Tambahkan object lokasi baru dengan struktur yang sesuai
3. Pastikan gambar tersedia di direktori `public/locations/`

### Menambah Kategori Baru
1. Edit file `lib/data/categories.js`
2. Tambahkan object kategori dengan id, name, description, dan icon

### Menambah Gambar Denah
1. Tambahkan file gambar ke `public/denah2/[Nama Gedung]/`
2. Gunakan format PNG dengan resolusi minimal 1200x800
3. Nama file harus sesuai dengan format: "Gedung X - Lantai Y.png"

## Troubleshooting

### Error "Module not found"
- Jalankan `npm install` untuk memastikan semua dependencies terinstall
- Periksa import paths dalam file JavaScript

### Images tidak muncul
- Pastikan path gambar benar dan file ada di direktori `public/`
- Periksa permission file dan direktori

### Performance issues
- Gunakan Next.js Image component untuk optimasi gambar
- Implementasi lazy loading untuk komponen berat
- Pertimbangkan code splitting untuk bundle yang besar

### Hot reload tidak bekerja
- Restart development server
- Periksa file watcher limits di sistem operasi

## Tips Development

1. **Code Style**: Gunakan ESLint dan Prettier untuk konsistensi
2. **Git Workflow**: Buat branch untuk setiap fitur baru
3. **Testing**: Test di berbagai ukuran layar dan browser
4. **Performance**: Monitor bundle size dan loading time
5. **Accessibility**: Pastikan aplikasi dapat diakses dengan screen reader

## Deployment

### Build untuk Production
```bash
npm run build
npm run start
```

### Static Export (jika diperlukan)
```bash
npm run build
npm run export
```

File static akan tersedia di direktori `out/`
