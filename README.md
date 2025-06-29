# CARLOK - Cari Lokasi Fasilkom UI

**CARLOK** (Cari Lokasi) adalah aplikasi peta kampus interaktif untuk Fakultas Ilmu Komputer Universitas Indonesia. Aplikasi ini memungkinkan mahasiswa, dosen, dan pengunjung untuk dengan mudah menemukan lokasi ruangan, fasilitas, dan area di kampus Fasilkom UI.

## 🚀 Fitur Utama

- 🔍 **Pencarian Cerdas** - Fuzzy search untuk menemukan ruangan dengan cepat
- 🏢 **Filter Gedung** - Browse berdasarkan Gedung A, B, C, atau Gedung Baru
- 🏷️ **Kategori Lokasi** - Filter berdasarkan lab, kelas, kantor, fasilitas, dll.
- 📍 **Detail Lokasi** - Informasi lengkap dengan foto dan deskripsi
- 🗺️ **Denah Interaktif** - Zoom dan navigasi pada denah lantai
- 📱 **Responsive Design** - Optimal di desktop, tablet, dan mobile

## 🛠️ Tech Stack

- **Framework**: Next.js 13+
- **Styling**: CSS Modules
- **Search**: Fuse.js (fuzzy search)
- **Image Optimization**: Next.js Image component
- **Pan/Zoom**: react-zoom-pan-pinch
- **Deployment**: Vercel (recommended)

## 📁 Struktur Project

```
carlok/
├── components/          # React components
│   ├── Floor.js        # Komponen denah lantai
│   ├── layout.js       # Layout wrapper
│   ├── Map.js          # Komponen peta utama
│   └── SearchBar.js    # Komponen pencarian
├── pages/              # Next.js pages (routing)
│   ├── categories/     # Halaman kategori
│   ├── locations/      # Detail lokasi
│   ├── maps/          # Denah gedung
│   └── index.js       # Homepage
├── lib/data/          # Data dan utilities
│   ├── categories.js  # Data kategori
│   └── locations.db.js # Data lokasi
├── public/            # Static assets
│   ├── denah2/       # Floor plans
│   ├── locations/    # Location photos
│   └── images/       # General images
├── docs/             # Dokumentasi
└── styles/          # CSS files
```

## 🚀 Quick Start

1. **Clone repository**
   ```bash
   git clone [repository-url]
   cd carlok
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Buka browser** dan akses [http://localhost:3000](http://localhost:3000)

## 📋 Available Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build aplikasi untuk production
- `npm run start` - Menjalankan production server
- `npm run lint` - Code linting dengan ESLint

## 📖 Dokumentasi

Dokumentasi lengkap tersedia di direktori [`/docs`](./docs/):

- [📋 Overview](./docs/README.md) - Dokumentasi utama
- [🧩 Components](./docs/components.md) - Dokumentasi komponen
- [📊 Data Structure](./docs/data-structure.md) - Struktur data dan model
- [⚙️ Installation](./docs/installation.md) - Panduan instalasi detail

## 🏗️ Menambah Data

### Menambah Lokasi Baru
1. Edit `lib/data/locations.db.js`
2. Tambahkan object lokasi dengan struktur yang sesuai
3. Upload foto ke `public/locations/[gedung]/[lantai]/`

### Menambah Kategori
1. Edit `lib/data/categories.js`
2. Tambahkan kategori dengan id, name, description, dan icon

## 🤝 Contributing

1. Fork repository ini
2. Buat branch untuk fitur baru (`git checkout -b feature/amazing-feature`)
3. Commit perubahan (`git commit -m 'Add amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buat Pull Request

## 📄 License

Project ini menggunakan [MIT License](LICENSE).

## 📞 Contact

Untuk pertanyaan atau saran, silakan hubungi:
- **Developer**: [Your Name]
- **Email**: [your.email@example.com]
- **Faculty**: Fakultas Ilmu Komputer UI

---

**CARLOK** - Memudahkan navigasi di Fasilkom UI! 🎯
