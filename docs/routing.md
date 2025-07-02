# Panduan Routing

Dokumentasi tentang routing dalam aplikasi CARLOK menggunakan Next.js.

<- Kembali ke [Dokumentasi hub](./README.md)

## Struktur Routing

### Halaman Utama
- **Route**: `/`
- **File**: `pages/index.js`
- **Deskripsi**: Halaman utama aplikasi yang menampilkan semua lokasi Fasilkom dan juga fitur-fitur navigasi Search, Category, Filter by Building, dan Filter by Floor

### Kategori
- **Route**: `/categories/[categoryId]`
- **File**: `pages/categories/[categoryId].js`
- **Parameter**: `categoryId` - Unique ID category (labs, classrooms, offices, dll.)
- **Deskripsi**: Menampilkan semua lokasi berdasarkan pilihan category
- **Contoh URL**: `/categories/labs`

### Halaman Deskripsi Lokasi / room
- **Route**: `/locations/[locationId]`
- **File**: `pages/locations/[locationId].js`
- **Parameter**: `locationId` - Unique ID lokasi
- **Deskripsi**: Menampilkan deskripsi lokasi atau ruangan dengan foto dan denah
- **Contoh URL**: `/locations/gedung-baru-a101-lab-komputer`

### Halaman Denah Gedung
- **Route**: `/maps/[buildingId]`
- **File**: `pages/maps/[buildingId].js`
- **Parameter**: `buildingId` - Unique ID gedung (gedung-a, gedung-b, gedung-c, gedung-baru)
- **Deskripsi**: Menampilkan deskripsi bangunan dengan foto dan denah
- **Contoh URL**: `/maps/gedung-baru`
