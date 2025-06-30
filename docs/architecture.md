# Arsitektur Sistem

Dokumentasi lengkap tentang arsitektur dan desain sistem aplikasi CARLOK.

<- Kembali ke [Dokumentasi Utama](./README.md)

## Tech Stack
- **JavaScript Library**: React
- **Framework**: Next.js
- **Search**: Fuse.js (fuzzy search)
- **Deployment**: GitHub + Vercel

## Struktur Project
```
carlok/
├── components/             # React components
│   ├── Floor.js            # Komponen denah lantai
│   ├── layout.js           # Layout wrapper
│   ├── Map.js              # Komponen peta utama
│   └── SearchBar.js        # Komponen search
├── pages/                  # Next.js pages (routing)
│   ├── categories/         # Halaman kategori
│   ├── locations/          # Detail lokasi
│   ├── maps/               # Denah
│   └── index.js            # Homepage
├── lib/data/               # Database
│   ├── categories.js       # Data kategori
│   └── locations.db.js     # Static Database lokasi
├── public/                 # Static assets
│   ├── denah2/             # Floor plans
│   ├── locations/          # Location photos
│   └── images/             # General images
├── docs/                   # Dokumentasi
└── styles/                 # General CSS files
```

## 1. Komponen User Interface

### **Components**
- **Map.js**: Komponen utama untuk peta interaktif
- **Floor.js**: Komponen untuk menampilkan denah lantai
- **SearchBar.js**: Komponen search dengan fuzzy search Fuse.js
- **Layout.js**: Wrapper layout untuk konsistensi UI

### **Pages (Routing)**
- **index.js**: Homepage
- **categories/[categoryId].js**: Kategori
- **locations/[locationId].js**: Location / room description page
- **maps/[buildingId].js**: Building description page

## 2. Business Logic Layer
### **Search Engine**
```javascript
// Fuzzy search dengan Fuse.js
const fuseOptions = {
  keys: ['name', 'id', 'description'],
  threshold: 0.2,
  includeScore: true
};
```

### **Filtering System**
- Filter berdasarkan kategori
- Filter berdasarkan gedung
- Filter berdasarkan lantai
- Kombinasi multiple filters

### **Navigation Logic**
- Dynamic routing dengan Next.js
- State management untuk filter
- URL parameter handling

## 3. Data Layer

### **Sumber data**
```
lib/data/
├── categories.js     # Database kategori
└── locations.db.js   # Database lokasi
```

### Kategori yang Tersedia (categories.js)
1. `buildings` - Gedung
2. `lecture-halls` - Auditorium  
3. `labs` - Laboratorium
4. `study-spaces` - Tempat Belajar
5. `facilities` - Fasilitas
6. `administration` - Administrasi
7. `offices` - Ruang Dosen/Staff
8. `classrooms` - Ruang Kuliah/Kelas
9. `meeting-rooms` - Ruang Rapat/Meeting
10. `religious` - Musholla
11. `student-organizations` - Organisasi Mahasiswa
12. `common-areas` - Area Umum
13. `toilet` - Toilet
14. `dining` - Kantin/Cafeteria
15. `security` - Sekuriti/Pos Satpam
16. `elevator` - Elevator

### Menambah Lokasi Baru
1. Edit `lib/data/locations.db.js`
2. Tambahkan lokasi dengan struktur yang sesuai (lihat bawah)
3. Upload foto ke `public/locations/[gedung]/[lantai]/`

### Menambah Kategori
1. Edit `lib/data/categories.js`
2. Tambahkan kategori dengan id, name, description, dan icon

### **Model data**

**Category Model:**
```javascript
{
  id: string,           // Unique identifier
  name: string,         // Name display
  description: string,  // Category description
  icon: string          // Emoji icon display
}
```

**Building Model:**
```javascript
{
  id: string,           // Unique identifier
  name: string,         // Building name
  category: string,     // Category reference
  description: string,  // Building description
  floors: string[],     // List of building floors (format: "Gedung X - Lantai Y")
  images: string[]      // Building images path
}
```

**Location / room Model:**
```javascript
{
  id: string,                   // Unique identifier
  name: string,                 // Location / room name
  category: string,             // Category reference
  description: string,          // Location / room description
  building: string,             // Building reference
  floor: string OR string[],    // Floor location(s) (format: "Gedung X - Lantai Y")
  images: string[]              // Location image(s) path
}
```
### **Contoh penggunaan**
**Contoh Data Category**
```javascript
{
    id: 'labs',
    name: 'Laboratorium',
    description: 'Research and teaching labs',
    icon: '🧪'
}
```

**Contoh Data Building**
```javascript
{
    id: 'gedung-a',
    name: 'Gedung A',
    category: 'buildings',
    description: 'Gedung A houses the Faculty of Computer Science with modern classrooms, laboratories, and office spaces.',
    floors: ['Gedung A - Lantai 1', 'Gedung A - Lantai 2'],
    images: [
        '/locations/Gedung Lama/Gedung A/Lantai 1/Entrance1_1.jpg',
        '/locations/Gedung Lama/Gedung A/Lantai 1/Entrance2.jpg',
        '/locations/Gedung Lama/Gedung A/Lantai 1/Entrance3.jpg'
    ]
}
```

**Contoh Data Location / room**
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