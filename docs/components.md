# Dokumentasi Komponen

Dokumentasi untuk semua komponen React dalam aplikasi CARLOK.

<- Kembali ke [Dokumentasi Utama](./README.md)

## Daftar Komponen

- [Floor](#floor)
- [Layout](#layout)
- [Map](#map)
- [SearchBar](#searchbar)

## Floor

**Lokasi**: `components/Floor.js`

Komponen penampilan denah lantai dengan fitur zoom, pinch, dan pan.

### Props
- `floorImage` - Path ke gambar denah
- `floorName` - Nama lantai untuk display

### Dependencies
- `react-zoom-pan-pinch` untuk zoom functionality

## Layout

**Lokasi**: `components/layout.js`

Komponen wrapper layout yang menyediakan struktur untuk semua halaman.

### Props
- `children` - Konten halaman
- `home` - Boolean halaman utama

### Penggunaan
```jsx
import Layout from '../components/layout';

function APage() {
  return (
    <Layout>
      <h1>Content</h1>
    </Layout>
  );
}
```

## Map

**Lokasi**: `components/Map.js`

Komponen menampilkan fitur-fitur navigasi dengan fitur search, category, dan filter.

### State Management
- `selectedCategory` - Category yang dipilih
- `selectedBuilding` - Building yang dipilih  
- `selectedFloor` - Lantai yang dipilih
- `searchQuery` - Query pencarian

### Fitur
- Search dengan Fuzzy search menggunakan [Fuse.js](https://www.fusejs.io/)
- Normalisasi query pencarian (menghilangkan honorifik)
- Filter berdasarkan Category
- Filter berdasarkan Gedung dan Lantai

### Search: Fuzzy Search Implementation
Komponen Map menggunakan Fuse.js untuk implementasi fuzzy search. Fuse.js merupakan lightweight JavaScript Library untuk fuzzy search yang memungkinkan pencarian approximate string matching. Library ini dapat menangani typo, variasi ejaan, dan pencarian yang tidak exact match dengan scoring (Fuzziness Score) yang di kalkulasi dengan implementasi [Bitap](https://en.wikipedia.org/wiki/Bitap_algorithm) algoritma yang termodifikasi oleh Fuse.js. Fuse.js dipilih karena merupakan lightweight JavaScript Library dan cocok untuk static database yang relatif kecil seperti CARLOK.



#### Konfigurasi Fuse.js
- `threshold`: 0.2 (0.0 = exact match, 1.0 = match anything)
  - Dipilih 0.2 karena terlalu rendah membuat toleransi typo hilang, dan terlalu tinggi memberi hasil yang terlalu banyak dan irelevan ke user.
- **Keys**: Search di field `name`, `id`, dan `description`
- **Used API Options**: 
  - `includeScore`: Memasukan score Fuse.js kedalam hasil Search.
  - `includeMatches`: Matches tetap dimasukan kedalam hasil Search.
  - `ignoreLocation`: Tetap mencari dimanapun pattern muncul di lokasi database, jadi tidak meng-ignore pattern yang lokasinya jauh seperti ujung paragraf deskripsi.
  - `findAllMatches`: Jikalau search query ada lokasi yang *perfect match*, maka tetap mencari lokasi lain. Untuk jaga-jaga jika pengguna bermaksud lokasi lain dari *perfect match*.

#### Search Query Cleaning
Sistem membersihkan query pencarian dengan mengkonversi query menuju **lowercase** dan menghilangkan:
- **Honorifik**: pak, bu, prof., dr., ir., dll.
- **Prefix ruangan**: ruang, ruangan, r., kantor, dll.
- **Formatting**: titik dalam nomor ruang (A.1.01 → A101)

Dilakukan ini agar pengguna dari berbagai demografi yang suka memasuki honorifik, prefix ruangan, dan formatting tetap bisa menemukan halaman lokasi yang dituju. Setiap lokasi dinormalisasi dengan field `normalizedName`, `normalizedId`, dan `searchableText`.

### Data Dependencies
- `categories` dari `lib/data/categories.js`
- `locations` dari `lib/data/locations.db.js`


## SearchBar

**Lokasi**: `components/SearchBar.js`

Komponen UI search bar.

### Props
- `searchQuery` - Nilai input
- `onSearchChange` - Callback untuk perubahan input
- `onSubmit` - Callback untuk submit form
- `placeholder` - Text placeholder
- `className` - CSS class tambahan
