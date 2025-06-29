# Struktur Data

Dokumentasi untuk struktur data yang digunakan dalam aplikasi CARLOK.

## Categories (Kategori)

**Lokasi**: `lib/data/categories.js`

Array yang berisi definisi kategori lokasi di kampus.

### Struktur Data Category
```javascript
{
  id: string,           // Identifier unik
  name: string,         // Nama kategori (bahasa Indonesia)
  description: string,  // Deskripsi kategori
  icon: string         // Emoji icon untuk display
}
```

### Kategori yang Tersedia
- `buildings` - Gedung
- `lecture-halls` - Auditorium  
- `labs` - Laboratorium
- `study-spaces` - Tempat Belajar
- `facilities` - Fasilitas
- `administration` - Administrasi
- `offices` - Ruang Dosen/Staff
- `classrooms` - Kelas
- `meeting-rooms` - Ruang Rapat/Meeting
- `religious` - Musholla
- `student-organizations` - Organisasi Mahasiswa
- `common-areas` - Area Umum
- `dining` - Kantin/Cafeteria
- `toilet` - Toilet
- `elevator` - Elevator

## Locations (Lokasi)

**Lokasi**: `lib/data/locations.db.js`

Array yang berisi semua data lokasi di kampus Fasilkom UI.

### Struktur Data Location
```javascript
{
  id: string,              // Identifier unik (kebab-case)
  name: string,            // Nama lokasi
  category: string,        // ID kategori (referensi ke categories)
  description: string,     // Deskripsi detail lokasi
  building: string,        // ID gedung (referensi ke location dengan category 'buildings')
  floor: string,           // Nama lantai (format: "Gedung X - Lantai Y")
  images: string[],        // Array path ke gambar lokasi
  floors?: string[]        // Array nama lantai (khusus untuk buildings)
}
```

### Contoh Data Location
```javascript
{
  id: 'gedung-baru-a101-lab-komputer',
  name: 'A101 - Lab Komputer',
  category: 'labs',
  description: 'Computer laboratory A101 for programming and software development courses.',
  building: 'gedung-baru',
  floor: 'Gedung Baru - Lantai 1',
  images: ['/locations/Gedung Baru/Lantai 1/A101 - Lab Komputer.jpg']
}
```

## Building Structure

### Gedung yang Tersedia
- **Gedung A** (`gedung-a`)
- **Gedung B** (`gedung-b`) 
- **Gedung C** (`gedung-c`)
- **Gedung Baru** (`gedung-baru`)

### Struktur Lantai
Setiap gedung memiliki lantai dengan format penamaan:
- Gedung A: "Gedung A - Lantai 1", "Gedung A - Lantai 2"
- Gedung B: "Gedung B - Lantai 1 atas", "Gedung B - Lantai 1 utama", dst.
- Gedung Baru: "Gedung Baru - Lantai Dasar", "Gedung Baru - Lantai 1", dst.

## Image Paths

### Struktur Direktori Gambar
```
public/
├── denah2/                    # Floor plans
│   ├── Gedung A/
│   ├── Gedung B/
│   ├── Gedung C/
│   └── Gedung Baru/
└── locations/                 # Location photos
    ├── Gedung Lama/
    │   ├── Gedung A/
    │   ├── Gedung B/
    │   └── Gedung C/
    └── Gedung Baru/
        ├── Lantai Dasar/
        ├── Lantai 1/
        └── ...
```

### Default Image
- `defaultLocationImage` - Gambar default untuk lokasi tanpa foto

## Data Relationships

1. **Category → Locations**: One-to-many relationship
2. **Building → Locations**: One-to-many relationship  
3. **Floor → Locations**: One-to-many relationship
4. **Building → Floor Plans**: One-to-many relationship

## Search Indexing

Data locations diproses untuk pencarian dengan:
- Normalisasi nama ruangan
- Penghapusan honorifik dan prefix
- Fuzzy search menggunakan Fuse.js
