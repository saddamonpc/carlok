# Dokumentasi Komponen

Dokumentasi untuk semua komponen React dalam aplikasi CARLOK.

## Daftar Komponen

- [Layout](#layout)
- [Map](#map)  
- [Floor](#floor)
- [SearchBar](#searchbar)

## Layout

**Lokasi**: `components/layout.js`

Komponen wrapper utama yang menyediakan struktur dasar untuk semua halaman.

### Props
- `children` - Konten halaman
- `home` - Boolean untuk menentukan apakah ini halaman utama

### Fitur
- Header dengan logo Fasilkom UI
- Navigation ke halaman utama
- Footer dengan link "Balik ke Peta Kampus"

### Penggunaan
```jsx
import Layout from '../components/layout';

function MyPage() {
  return (
    <Layout>
      <h1>Konten Halaman</h1>
    </Layout>
  );
}
```

## Map

**Lokasi**: `components/Map.js`

Komponen utama untuk menampilkan peta kampus interaktif dengan fitur pencarian dan filter.

### State Management
- `selectedCategory` - Kategori yang dipilih
- `selectedBuilding` - Gedung yang dipilih  
- `selectedFloor` - Lantai yang dipilih
- `searchQuery` - Query pencarian

### Fitur Utama
- Fuzzy search menggunakan Fuse.js
- Filter berdasarkan kategori, gedung, dan lantai
- Normalisasi query pencarian (menghilangkan honorifik)
- Responsive design

### Data Dependencies
- `categories` dari `lib/data/categories.js`
- `locations` dari `lib/data/locations.db.js`

## Floor

**Lokasi**: `components/Floor.js`

Komponen untuk menampilkan denah lantai dengan fitur zoom dan pan.

### Props
- `floorImage` - Path ke gambar denah
- `floorName` - Nama lantai untuk display

### Fitur
- Zoom in/out dengan tombol kontrol
- Reset zoom ke posisi awal
- Pan/drag untuk navigasi
- Responsive touch controls

### Dependencies
- `react-zoom-pan-pinch` untuk zoom functionality
- `Next.js Image` untuk optimasi gambar

## SearchBar

**Lokasi**: `components/SearchBar.js`

Komponen input pencarian dengan handling submit.

### Props
- `searchQuery` - Nilai input saat ini
- `onSearchChange` - Callback untuk perubahan input
- `onSubmit` - Callback untuk submit form
- `placeholder` - Text placeholder
- `className` - CSS class tambahan

### Fitur
- Auto-focus pada mount
- Enter key untuk submit
- Smooth scroll ke hasil pencarian
